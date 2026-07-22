"path:SCRN/DO/Credit Details_ClaimDo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var oBICCUBK = '';
var sBKIDCUBK = '';

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_CCY').value;
        amt = document.MAINFORM.CPYT_CR_AMT_TXCCY.value;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.AmtFromatAmtCrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat('CPYT_CR_CCY', amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CAL_CPYT_CR_CCY = function() {
    try {
        if (document.MAINFORM.CPYT_CR_CCY.value == document.MAINFORM.CPYT_CR_TRX_CCY.value) {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_EXNG_AC, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CAL_X103_RECCHGAMT_71G = function() {
    try {
        var X103_RECCHGAMT_71G; // Utility Auto Fix Comments
        X103_RECCHGAMT_71G = document.MAINFORM.X103_RECCHGAMT_71G.value;
        document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, X103_RECCHGAMT_71G);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CAL_X103_SENDCHGAMT71F = function() {
    try {
        var X103_SENDCHGAMT71F; // Utility Auto Fix Comments
        X103_SENDCHGAMT71F = document.MAINFORM.X103_SENDCHGAMT71F.value;
        document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, X103_SENDCHGAMT71F);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CHK_Total_Pct_CPYT_CR_PER = function() {
    try {
        var doDetail; // Utility Auto Fix Comments
        var vStatus; // Utility Auto Fix Comments
        doDetail = SYS_getDoByXpath("Claim.CreditHeader_ClaimDo.CreditDetails_ClaimDo");
        vStatus = doDetail.getStatue();
        if (vStatus == "E") {
            nTotal_Pct = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CLAIMDO_CR_TOTAL_PCT').value) - SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value);
        } else {
            nTotal_Pct = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CLAIMDO_CR_TOTAL_PCT').value);
        }
        nTotal_Pct = nTotal_Pct + SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value);
        if (nTotal_Pct > 100) {
            alert("Please note that the total percent exceeds 100%");
            nTotal_Pct = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CLAIMDO_CR_TOTAL_PCT').value);
            document.MAINFORM.CPYT_CR_PER.value = 0;
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_PER, 'onchange');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_BENE_IDonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_BENE_IDonclick = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.CPYT_BENE_NM.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--CPYT_BENE_NM-->%'";
        }
        if (document.MAINFORM.CPYT_BENE_ADD1.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--CPYT_BENE_ADD1-->%'";
        }
        if (document.MAINFORM.CPYT_BENE_ADD2.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--CPYT_BENE_ADD2-->%'";
        }
        if (document.MAINFORM.CPYT_BENE_ADD3.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--CPYT_BENE_ADD3-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                if (document.MAINFORM.CPYT_ORD_TYPE.value == 'B' || document.MAINFORM.CPYT_ORD_TYPE.value == 'D') {
                    SYS_InqCUBK('CPYT_BENE_ID_SW');
                }
                if (document.MAINFORM.CPYT_ORD_TYPE.value == 'K') {
                    SYS_InqCUBK('CPYT_BENE_ID_CT');
                }
            }
        } else {
            if (document.MAINFORM.CPYT_ORD_TYPE.value == 'B' || document.MAINFORM.CPYT_ORD_TYPE.value == 'D') {
                //SYS_InqCUBK_Sql('CPYT_BENE_ID_SW', sql);
                SYS_InqCUBK_byCondition('CPYT_BENE_ID_SW', '1');
            } else {
                //SYS_InqCUBK_Sql('CPYT_BENE_ID_CT', sql);
                SYS_InqCUBK_byCondition('CPYT_BENE_ID_CT', '1');
            }

        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY = function() {
    try {
        if (document.MAINFORM.CPYT_CR_BUY_RATE.value != '' && document.MAINFORM.CPYT_CR_BUY_RATE.value != 0) {
            amt = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_CR_BUY_RATE.value);
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat('document.MAINFORM.CPYT_CR_CCY', amt);
            document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY_CRRATE = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_TXCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        amt = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_AMT_TTLCCY').value;
        ccy = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_CCY').value;
        amt = SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value) * SYS_BeFloat(amt) / 100;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_TXCCYfromCrccy = function() {
    try {
        if (document.MAINFORM.CPYT_CR_BUY_RATE.value != '' && document.MAINFORM.CPYT_CR_BUY_RATE.value != 0) {
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value) / SYS_BeFloat(document.MAINFORM.CPYT_CR_BUY_RATE.value);
            AmtFormatAmtTrxccy();
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_PER = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        amt = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_AMT_TTLCCY').value;
        if (amt != "" && SYS_BeFloat(amt) != 0) {
            per = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) / SYS_BeFloat(amt) * 100;
            per = Math.round(per * 100) / 100;
            document.MAINFORM.CPYT_CR_PER.value = per;
        }
        CHK_Total_Pct_CPYT_CR_PER();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_PAY_ADV_MSG = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT103') {
            enable103();
            document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_INSTR_AMT_33B.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        } else if (document.MAINFORM.CPYT_PAY_ADV_MSG.value != 'MT103' && document.MAINFORM.CPYT_PAY_COV_MSG.value == 'MT202COV') {
            alert("The Payment Advice Message should be MT103, while the Payment Cover Message is MT202COV.");
            document.MAINFORM.CPYT_PAY_ADV_MSG.value = '';
        } else {
            disable103();
            document.MAINFORM.X103_SETT_CCY_32A.value = "";
            document.MAINFORM.X103_SETT_AMT_32A.value = "";
            document.MAINFORM.X103_INSTR_AMT_33B.value = '';
            document.MAINFORM.X103_INSTR_CCY_33B.value = '';
        }
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_TYPE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_PAY_COV_MSG = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == 'MT202') {
            enable202();
        } else if (document.MAINFORM.CPYT_PAY_COV_MSG.value == 'MT202COV') {
            enable202();
            SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_ADV_MSG, 'M');
            if (document.MAINFORM.CPYT_PAY_ADV_MSG.value != 'MT103') {
                alert("The Payment Advice Message should be MT103, while the Payment Cover Message is MT202COV.");
            }
        } else {
            disable202();
        }

        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_TYPE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CR_checkRecordStatus = function() {
    try {
        alert("CR_checkRecordStatus()");
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_ID = function() {
    try {
        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'CUSTOMER') {
            SYS_InqCUBK('CPYT_ASSGN_AC', 'CPYT_ASSGN_ID');
        } else if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.CPYT_CR_AC_TYPE.value == 'VOSTRO') {
            SYS_InqCUBK('CPYT_ASSGN_AC_BK', 'CPYT_ASSGN_ID');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_CPYT_BENE_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_CPYT_BENE_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_CPYT_CR_AC_TYPE = function() {
    try {
        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'INTERNAL') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ID_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ID_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_CPYT_NO_CR = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_CPYT_PARTY_REF = function() {
    try {
        if (document.MAINFORM.CPYT_ORD_TYPE.value == 'D') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_PARTY_REF, 'O');
        } else {
            document.MAINFORM.CPYT_PARTY_REF.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CPYT_PARTY_REF, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_CPYT_REV = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CPYT_REV_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_59_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_59_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_ACC_BKSW_57A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_ACC_BKSW_57A_2', '1', true);
                if (document.MAINFORM.X103_ACC_BKID_57A.value != "") {
                    SYS_GetCUBK('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
                    SYS_changeClassName('X103_57A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ACC_BKID_57A, 'onchange');
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_ADV_BKSW_B2 = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_ADV_BKSW_B2_3', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_BENECU_BKSW_59 = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_BENECU_BKSW_59_4', '1', true);
                Cal_X103_TAG_59A();
                if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                    SYS_GetCUBK('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
                    SYS_changeClassName('X103_50_ADD_BTN', 'O');
                }
            }
        }
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_MEDI_BKSW_56A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_MEDI_BKSW_56A_5', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_ORDCU_SW_50A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_ORDCU_SW_50A_6', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_ORD_BKSW_52A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_ORD_BKSW_52A_7', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_RECCORRSW_54A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_RECCORRSW_54A_8', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_SENDCORRSW53A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_SENDCORRSW53A_9', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_SEND_BKSW_51A = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X103_SEND_BKSW_51A_10', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_50A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_51A = function() {
    try {
        if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            document.MAINFORM.X103_TAG_51A.value = 'A';
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + "XXX";
            }
        } else {
            document.MAINFORM.X103_TAG_51A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_52A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_53A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_54A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_56A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_57A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_59A = function() {
    try {
        if (document.MAINFORM.X103_BENECU_BKSW_59.value != '') {
            document.MAINFORM.X103_TAG_59A.value = 'A';
        } else if (document.MAINFORM.X103_BENECU_NM_59A.value != "" || document.MAINFORM.X103BENECUADD1_59A.value != "" || document.MAINFORM.X103BENECUADD2_59A.value != "" || document.MAINFORM.X103BENECUADD3_59A.value != "") {
            document.MAINFORM.X103_TAG_59A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_59A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X103_TAG_B2 = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_52_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X202_52_ORDER_NO_11', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_53_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X202_53_ORDER_NO_12', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_54_ORDER_NO = function() {
    try {
        var X202_54_ORDER_NO; // Utility Auto Fix Comments
        var X202_RECCORRID_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_54_ORDER_NO = document.MAINFORM.X202_54_ORDER_NO.value;
        X202_RECCORRID_54A = document.MAINFORM.X202_RECCORRID_54A.value;
        //sSQLWhere = "ORDER_NO = " + X202_54_ORDER_NO + " AND C_MAIN_REF = '" + document.MAINFORM.X202_RECCORRID_54A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_RECCORRNM_54A;X202_RECCORADD154A;X202_RECCORADD254A;X202_RECCORADD354A";
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X202_54_ORDER_NO_13', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_56_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X202_56_ORDER_NO_14', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_57_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_Cal_X202_57_ORDER_NO_15', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_AMT_32A = function() {
    try {
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_CCY_32A = function() {
    try {
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_52A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_53A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_54A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_56A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_57A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_58A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_TAG_B2 = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X202_VALUE_DT_32A = function() {
    try {
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X400_AMT_32A = function() {
    try {
        document.MAINFORM.X400_NET_AMT_33A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X400_VALUE_DT_33A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Cal_X400_ORD_BKSW_52A = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Check_CPYT_CR_PER = function() {
    try {
        CHK_Total_Pct_CPYT_CR_PER();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        GetDataForMT400();
        MT400_TAG_32();
        MT400_CAL_TENOR_32K();

        if (document.MAINFORM.CPYT_CR_CCY.value != document.MAINFORM.CPYT_CR_TRX_CCY.value) {
            document.MAINFORM.CPYT_CR_AMT_CRCCY_EXCH.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value);
            document.MAINFORM.CPYT_CR_AMT_MAPING.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value);
        } else {
            document.MAINFORM.CPYT_CR_AMT_CRCCY_EXCH.value = 0;
            document.MAINFORM.CPYT_CR_AMT_MAPING.value = 0;
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
        EEHtml.fireEvent(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CLAIMDO_CR_TOTAL_PCT'), 'onchange');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CreditInitForFunction = function() {
    try {
        if (SYS_MODULE_NAME == "IMCO") {
            if (SYS_ORG_FUNCTION_NAME == "Process_MT400") {
                CreditRemoveSelectOption(document.MAINFORM.CPYT_CR_AC_TYPE, "CUSTOMER");
            }
            return;
        } else if (SYS_MODULE_NAME == "EXCO") {
            if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity") {
                if ("" != document.MAINFORM.CFNC_C_REF.value) {
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_REF, "P");
                    document.MAINFORM.CPYT_PAY_ADV_MSG.value = "None";
                    document.MAINFORM.CPYT_PAY_COV_MSG.value = "None";
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_ADV_MSG, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, "P");
                }
            } else if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount") {
                document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value; // Utility Auto Fix Comments
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.CFNC_N_NET_AMT.value);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CreditRemoveSelectOption = function(selectObj, optionValue) {
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
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.ExchangingRate = function() {
    try {
        var crAmtPer; // Utility Auto Fix Comments
        var fromccy; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        var trxCrTTL; // Utility Auto Fix Comments
        var vAmt; // Utility Auto Fix Comments
        fromccy = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_CCY').value;
        toccy = document.MAINFORM.CPYT_CR_CCY.value;
        trxCrTTL = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_AMT_TTLCCY').value);
        crAmtPer = SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value) / 100;

        if (fromccy == toccy) {
            document.MAINFORM.CPYT_CR_BUY_RATE.value = 1;
        } else {
            if (SYS_MODULE_NAME == 'EXCO' || SYS_MODULE_NAME == 'IMCO') {
                if (fromccy == SYS_LOCAL_CCY && toccy != SYS_LOCAL_CCY) {
                    cpytcreditAmt = trxCrTTL * crAmtPer;
                    // use different selling rate for different cpytcreditAmt
                    if (cpytcreditAmt <= 50000) {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'SELL_1', 'CPYT_CR_BUY_RATE');
                    } else if (cpytcreditAmt > 250000) {
                        document.MAINFORM.CPYT_CR_BUY_RATE.value = 0.0;
                        alert("Credit amount exceeds local currency 250,000.00, Please obtain the appropriate rate from Treasury!");
                    } else {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'SELL_2', 'CPYT_CR_BUY_RATE');
                    }

                } else if (toccy == SYS_LOCAL_CCY && fromccy != SYS_LOCAL_CCY) {
                    //get cpytCreditAmt
                    vAmt = trxCrTTL * crAmtPer;
                    if (vAmt <= 0) {
                        cpytcreditAmt = 0;
                    } else {
                        SYS_calExchAmt(fromccy, SYS_LOCAL_CCY, trxCrTTL * crAmtPer, 'Booking Rate', 'cpytcreditAmt');
                    }
                    // use different Buying rate for different cpytDebitAmt
                    if (cpytcreditAmt <= 50000) {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'BUY_1', 'CPYT_CR_BUY_RATE');
                    } else if (cpytcreditAmt > 250000) {
                        document.MAINFORM.CPYT_CR_BUY_RATE.value = 0.0;
                        alert("Credit amount exceeds local currency 250,000.00, Please obtain the appropriate rate from Treasury!");
                    } else {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'BUY_2', 'CPYT_CR_BUY_RATE');
                    }


                } else {
                    SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_CR_BUY_RATE');
                }

            } else {
                SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_CR_BUY_RATE');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.GetDataForMT400 = function() {
    try {
        document.MAINFORM.X400_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
        document.MAINFORM.X400_SEND_NO_20.value = SYS_getScreenObjByxpath('Claim', 'CLM_REF').value;
        document.MAINFORM.X400_RELATEDNO_21.value = SYS_getScreenObjByxpath('Claim', 'CLM_REF').value;
        document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Get_CPYT_ASSGN_ID = function() {
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
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.HiddenMT103Tab = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103") {
            EEHtml.getElementById('MT103_SEPA').style.display = "block";
            EEHtml.getElementById('do_PaymentMT103_Tab').style.display = "block";
            enable103();
        } else {
            SYT_DisableDivClass('do_PaymentMT103_Tab');
            EEHtml.getElementById('MT103_SEPA').style.display = 'none';
            EEHtml.getElementById('do_PaymentMT103_Tab').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.HiddenMT202Tab = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202" || document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202COV") {
            EEHtml.getElementById('ADVMT202_SEPA').style.display = "block";
            EEHtml.getElementById('do_PaymentMT202_Tab').style.display = "block";
            enable202();
        } else {
            disable202();
            EEHtml.getElementById('ADVMT202_SEPA').style.display = 'none';
            EEHtml.getElementById('do_PaymentMT202_Tab').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var balance; // Utility Auto Fix Comments
        var balance1; // Utility Auto Fix Comments
        var doDetail; // Utility Auto Fix Comments
        var vStatus; // Utility Auto Fix Comments
        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.X202_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = SYS_getScreenObjByxpath('Claim', 'CLM_REF').value;

        document.MAINFORM.CPYT_CR_VAL_DATE.value = SYS_BUSI_DATE;

        Set_CPYT_ASSGN_from_MAIN();

        disable103();
        disable202();

        GetDataForMT400();

        doDetail = SYS_getDoByXpath("Claim.CreditHeader_ClaimDo.CreditDetails_ClaimDo");
        vStatus = doDetail.getStatue();
        if (vStatus == "A") {
            Check_CPYT_CR_PER();
            document.MAINFORM.CPYT_CR_CCY.value = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_CCY').value;
        }
        document.MAINFORM.CPYT_CR_TRX_CCY.value = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_CCY').value;
        CAL_CPYT_CR_CCY();
        ExchangingRate();
        Cal_X202_CCY_32A();

        if ("EPLC" != SYS_MODULE_NAME) {
            balance = EEHtml.getElementById("BALANCE");
            balance1 = EEHtml.getElementById("BALANCE1");
            balance.style.display = "none";
            balance1.style.display = "none";
        }


        document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X103_RECCHGCCY_71G.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.InqAssignee = function() {
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
        retValue = showModalDialog(sURL, sArgu, sStyle);
        InqAssigneeProcessReturn(retValue);
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.InqAssigneeProcessReturn = function(retValue) {
    try {
        var obj; // Utility Auto Fix Comments
        var ojbAmtValue; // Utility Auto Fix Comments
        var retArr; // Utility Auto Fix Comments
        if (retValue) {
            retArr = retValue.split(";");
            obj = document.MAINFORM.CPYT_ASSIGNEE_BAL;
            document.MAINFORM.I_ASSIGNEE_SEQ.value = retArr[0];
            obj.value = retArr[1];
            dec = findDecFromCCY(obj.value, obj.className);
            ojbAmtValue = SYS_BeFloat(obj.value);
            obj.value = DecimalFormat(ojbAmtValue, dec);
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.MPO_CPYT_CR_BUY_RATE = function() {
    try {
        if (document.MAINFORM.CPYT_CR_CCY.value == document.MAINFORM.CPYT_CR_TRX_CCY.value) {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BUY_RATE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BUY_RATE, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.MT400_CAL_TENOR_32K = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.MT400_TAG_32 = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        EEHtml.fireEvent(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CLAIMDO_CR_TOTAL_PCT'), 'onchange');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BUY_RATE, 'M');
        MPO_CPYT_CR_BUY_RATE();

        if ("IMCO" == SYS_MODULE_NAME) {
            initCPYT_PAY_ADV_MSG("MT756");
        }
        if ("EPLC" == SYS_MODULE_NAME || "IPLC" == SYS_MODULE_NAME || "REIM" == SYS_MODULE_NAME) {
            initCPYT_PAY_ADV_MSG("MT400");
        }
        if ("GTEE" == SYS_MODULE_NAME || "IWGT" == SYS_MODULE_NAME || "EXCO" == SYS_MODULE_NAME) {
            initCPYT_PAY_ADV_MSG("MT400");
            initCPYT_PAY_ADV_MSG("MT756");
        }
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103") {
            enable103();
        }
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202") {
            enable202();
        }

        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202COV") {
            enable103();
            enable202();
            document.MAINFORM.CPYT_PAY_ADV_MSG.value = "MT103";
        }

        GetDataForMT400();
        //20081205
        checkSWIFTname();
        Show_MESSAGE_TYPE();
        CreditInitForFunction();

        if ("Bank" == document.MAINFORM.X103_BENECU_OP.value) {
            SYS_changeClassName('X103_BENECU_BKSW_59', 'O');
        }

        X103_TAG_50Achange();

        CAL_X103_RECCHGAMT_71G();
        CAL_X103_SENDCHGAMT71F();

        //for hidden mt103,mt202 if Payment Advice or Cover Message are not 202,103
        HiddenMT103Tab();
        HiddenMT202Tab();

    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SYT_Delay_MilliSeconds(2000);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.SET_CPYT_VOUCHER_DR_DESC = function() {
    try {
        switch (SYS_ORG_FUNCTION_NAME) {
            case "EXCO_Discount":
                document.MAINFORM.CPYT_VOUCHER_CR_DESC.value = "1234";
                break;
            case "EXCO_Payment":
                document.MAINFORM.CPYT_VOUCHER_CR_DESC.value = "3456";
                break;

        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Set_CPYT_ASSGN_from_MAIN = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Show_MESSAGE_TYPE = function() {
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
            //EEHtml.getElementById("MT400_SEPA").style.display = "block";
        } else if (SWIFTvalue.value == 'MT400') {
            tab.innerHTML = "MT400";
            tab.style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_NM, 'M');
            SWIFTdiv2.style.display = "";
            SWIFTdiv3.style.display = "";
            SWIFTdiv4.style.display = "";
            //EEHtml.getElementById("MT400_SEPA").style.display = "block";
        } else {
            tab.style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_NM, 'O');
            //EEHtml.getElementById("MT400_SEPA").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_50_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_50_ORDER_NO_16', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_51_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_51_ORDER_NO_17', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_52_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_52_ORDER_NO_18', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_53_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_53_ORDER_NO_19', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_54_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_54_ORDER_NO_20', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_56_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_56_ORDER_NO_21', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_57_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_57_ORDER_NO_22', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKID_57A = function() {
    try {
        SYS_GetCUBK_S('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKID_57A_back = function() {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKID_57Aonchange = function() {
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
        }
        SYT_CHK_AC_NO(document.MAINFORM.X103_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKID_57Aonclick = function() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKID_B2 = function() {
    try {
        SYS_GetCUBK_S('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKID_B2_back = function() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKID_B2onchange = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
            Cal_X103_TAG_B2();
            SYS_changeClassName('X103_B2_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ADV_BKSW_B2.value = "";
            document.MAINFORM.X103_ADV_BKNM_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
            document.MAINFORM.X103_TAG_B2.value = "";
            SYS_changeClassName(document.MAINFORM.X103_B2_ADD_BTN.name, 'P');
        }
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKID_B2onclick = function() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_B2_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X103_B2_ORDER_NO_23', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_BENECU_ID_59Aonchange = function() {
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
        }
        SYT_CHK_AC_NO(document.MAINFORM.X103_BENECUACNO59A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_BENECU_ID_59Aonclick = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56A = function() {
    try {
        SYS_GetCUBK_S('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56A_back = function() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56Aonchange = function() {
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
        }
        Cal_X103_TAG_56A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56Aonclick = function() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50A = function() {
    try {
        SYS_GetCUBK_S('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50A_back = function() {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50Aonchange = function() {
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
        }
        Cal_X103_TAG_50A();
        //added by zoe for bug 1508
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50Aonclick = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_OP_change = function() {
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
        } else {
            SYS_changeClassName('X103_ORDCU_SW_50A', 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORD_BKID_52A_back = function() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORD_BKID_52Aonchange = function() {
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
        }
        Cal_X103_TAG_52A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORD_BKID_52Aonclick = function() {
    try {
        var nX103_ORD_BKSW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
            nX103_ORD_BKSW_52A = document.MAINFORM.X103_ORD_BKSW_52A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX103_ORD_BKSW_52A + "%'";
        }
        if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X103_ORD_BKNM_52A-->%'";
        }
        if (document.MAINFORM.X103_ORDBKADD1_52A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X103_ORDBKADD1_52A-->%'";
        }
        if (document.MAINFORM.X103_ORDBKADD2_52A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X103_ORDBKADD2_52A-->%'";
        }
        if (document.MAINFORM.X103_ORDBKADD3_52A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X103_ORDBKADD3_52A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X103_ORD_BKID_52A');
            }
        } else {
            //SYS_InqCUBK_Sql('X103_ORD_BKID_52A', sql);
            SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRID_54A = function() {
    try {
        SYS_GetCUBK_S('X103_RECCORRID_54A', 'X103_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRID_54A_back = function() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRID_54Aonchange = function() {
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
        }

        SYT_CHK_AC_NO(document.MAINFORM.X103RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRID_54Aonclick = function() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X103_RECCORRSW_54A.value != '') {
            nX103_RECCORRSW_54A = document.MAINFORM.X103_RECCORRSW_54A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX103_RECCORRSW_54A + "%'";

        }
        if (document.MAINFORM.X103_RECCORRNM_54A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X103_RECCORRNM_54A-->%'";
        }
        if (document.MAINFORM.X103_RECCORADD154A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X103_RECCORADD154A-->%'";
        }
        if (document.MAINFORM.X103_RECCORADD254A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X103_RECCORADD254A-->%'";
        }
        if (document.MAINFORM.X103_RECCORADD354A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X103_RECCORADD354A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X103_RECCORRID_54A');
            }
        } else {
            //SYS_InqCUBK_Sql('X103_RECCORRID_54A', sql);
            SYS_InqCUBK_byCondition('X103_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCORRID53A_back = function() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCORRID53Aonchange = function() {
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
        }
        Cal_X103_TAG_53A();

        SYT_CHK_AC_NO(document.MAINFORM.X103SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCORRID53Aonclick = function() {
    try {
        var nX103_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X103_SENDCORRSW53A.value != '') {
            nX103_SENDCORRSW53A = document.MAINFORM.X103_SENDCORRSW53A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX103_SENDCORRSW53A + "%'";
        }
        if (document.MAINFORM.X103_SENDCORRNM53A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X103_SENDCORRNM53A-->%'";
        }
        if (document.MAINFORM.X103SENDCORADD153A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X103SENDCORADD153A-->%'";
        }
        if (document.MAINFORM.X103SENDCORADD253A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X103SENDCORADD253A-->%'";
        }
        if (document.MAINFORM.X103SENDCORADD353A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X103SENDCORADD353A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X103_SENDCORRID53A');
            }
        } else {
            //SYS_InqCUBK_Sql('X103_SENDCORRID53A', sql);
            SYS_InqCUBK_byCondition('X103_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKID_51A = function() {
    try {
        SYS_GetCUBK_S('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKID_51A_back = function() {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKID_51Aonchange = function() {
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
        }
        Cal_X103_TAG_51A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_SENDBKACNO51A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKID_51Aonclick = function() {
    try {
        var X103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /* if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            X103_SEND_BKSW_51A = document.MAINFORM.X103_SEND_BKSW_51A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + X103_SEND_BKSW_51A + "%' ";
        }
        if (document.MAINFORM.X103_SEND_BKNM_51A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X103_SEND_BKNM_51A-->%'";
        }
        if (document.MAINFORM.X103SENDBKADD1_51A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X103SENDBKADD1_51A-->%'";
        }
        if (document.MAINFORM.X103SENDBKADD2_51A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X103SENDBKADD2_51A-->%'";
        }
        if (document.MAINFORM.X103SENDBKADD3_51A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X103SENDBKADD3_51A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X103_SEND_BKID_51A');
            }
        } else {
            //SYS_InqCUBK_Sql('X103_SEND_BKID_51A', sql);
            SYS_InqCUBK_byCondition('X103_SEND_BKID_51A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_TAG_50Achange = function() {
    try {
        if ("A" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'O');
        }
        if ("F" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'P');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        }
        if ("K" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'P');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        }
        if ("" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'O');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'O');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKID_57A_back = function() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKID_57Aonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKID_57Aonclick = function() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            nX202_ACC_BKSW_57A = document.MAINFORM.X202_ACC_BKSW_57A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX202_ACC_BKSW_57A + "%'";
        }
        if (document.MAINFORM.X202_ACC_BKNM_57A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_ACC_BKNM_57A-->%'";
        }
        if (document.MAINFORM.X202_ACCBKADD1_57A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202_ACCBKADD1_57A-->%'";
        }
        if (document.MAINFORM.X202_ACCBKADD2_57A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202_ACCBKADD2_57A-->%'";
        }
        if (document.MAINFORM.X202_ACCBKADD3_57A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202_ACCBKADD3_57A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_ACC_BKID_57A');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_ACC_BKID_57A', sql);
            SYS_InqCUBK_byCondition('X202_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKSW_57Achange = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_ACC_BKSW_57Achange_24', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKID_B2_back = function() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKID_B2onchange = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
            Cal_X202_TAG_B2();
            SYS_changeClassName('X202_B2_ADD_BTN', 'O');
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKID_B2onclick = function() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            nX202_ADV_BKSW_B2 = document.MAINFORM.X202_ADV_BKSW_B2.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX202_ADV_BKSW_B2 + "%'";

        }
        if (document.MAINFORM.X202_ADV_BKNM_B2.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_ADV_BKNM_B2-->%'";
        }
        if (document.MAINFORM.X202_ADV_BKADD1_B2.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202_ADV_BKADD1_B2-->%'";
        }
        if (document.MAINFORM.X202_ADV_BKADD2_B2.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202_ADV_BKADD2_B2-->%'";
        }
        if (document.MAINFORM.X202_ADV_BKADD3_B2.valuee != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202_ADV_BKADD3_B2-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_ADV_BKID_B2');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_ADV_BKID_B2', sql);
            SYS_InqCUBK_byCondition('X202_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKSW_B2change = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_ADV_BKSW_B2change_25', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKID_58A = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKID_58A_back = function() {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKID_58Aonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKID_58Aonclick = function() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            nX202_BENE_BKSW_58A = document.MAINFORM.X202_BENE_BKSW_58A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX202_BENE_BKSW_58A + "%'";
        }
        if (document.MAINFORM.X202_BENE_BKNM_58A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_BENE_BKNM_58A-->%'";
        }
        if (document.MAINFORM.X202BENEBKADD1_58A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202BENEBKADD1_58A-->%'";
        }
        if (document.MAINFORM.X202BENEBKADD2_58A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202BENEBKADD2_58A-->%'";
        }
        if (document.MAINFORM.X202BENEBKADD3_58A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202BENEBKADD3_58A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_BENE_BKID_58A');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_BENE_BKID_58A', sql);
            SYS_InqCUBK_byCondition('X202_BENE_BKID_58A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKSW_58Achange = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_BENE_BKSW_58Achange_26', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKID_56A_back = function() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKID_56Aonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKID_56Aonclick = function() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            nX202_MEDI_BKSW_56A = document.MAINFORM.X202_MEDI_BKSW_56A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX202_MEDI_BKSW_56A + "%'";
        }
        if (document.MAINFORM.X202_MEDI_BKNM_56A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_MEDI_BKNM_56A-->%'";
        }
        if (document.MAINFORM.X202MEDIBKADD1_56A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202MEDIBKADD1_56A-->%'";
        }
        if (document.MAINFORM.X202MEDIBKADD2_56A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202MEDIBKADD2_56A-->%'";
        }
        if (document.MAINFORM.X202MEDIBKADD3_56A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202MEDIBKADD3_56A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_MEDI_BKID_56A');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_MEDI_BKID_56A', sql);
            SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKSW_56Achange = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_MEDI_BKSW_56Achange_27', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_ID_52A_back = function() {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_ID_52Aonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_ID_52Aonclick = function() {
    try {
        var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            nX202_ORDBK_SW_52A = document.MAINFORM.X202_ORDBK_SW_52A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX202_ORDBK_SW_52A + "%'";

        }
        if (document.MAINFORM.X202_ORDBK_NM_52A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_ORDBK_NM_52A-->%'";
        }
        if (document.MAINFORM.X202_ORDBKADD1_52A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202_ORDBKADD1_52A-->%'";
        }
        if (document.MAINFORM.X202_ORDBKADD2_52A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202_ORDBKADD2_52A-->%'";
        }
        if (document.MAINFORM.X202_ORDBKADD3_52A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202_ORDBKADD3_52A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_ORDBK_ID_52A');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_ORDBK_ID_52A', sql);
            SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_SW_52Achange = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_ORDBK_SW_52Achange_28', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRID_54A_back = function() {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRID_54Aonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRID_54Aonclick = function() {
    try {
        var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            nX202_RECCORRSW_54A = document.MAINFORM.X202_RECCORRSW_54A.value.substr(0, 8);

            sql = sql + " AND SW_ADD like '%" + nX202_RECCORRSW_54A + "%'";
        }
        if (document.MAINFORM.X202_RECCORRNM_54A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_RECCORRNM_54A-->%'";
        }
        if (document.MAINFORM.X202_RECCORADD154A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202_RECCORADD154A-->%'";
        }
        if (document.MAINFORM.X202_RECCORADD254A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202_RECCORADD254A-->%'";
        }
        if (document.MAINFORM.X202_RECCORADD354A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202_RECCORADD354A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_RECCORRID_54A');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_RECCORRID_54A', sql);
            SYS_InqCUBK_byCondition('X202_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRSW_54Achange = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_RECCORRSW_54Achange_29', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRID53A_back = function() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRID53Aonchange = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRID53Aonclick = function() {
    try {
        var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        /*if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            nX202_SENDCORRSW53A = document.MAINFORM.X202_SENDCORRSW53A.value.substr(0, 8);
            sql = sql + " AND SW_ADD like '%" + nX202_SENDCORRSW53A + "%'";
        }
        if (document.MAINFORM.X202_SENDCORRNM53A.value != '') {
            sql = sql + " AND SWF_FMT_NM like '%<--X202_SENDCORRNM53A-->%'";
        }
        if (document.MAINFORM.X202SENDCORADD153A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--X202SENDCORADD153A-->%'";
        }
        if (document.MAINFORM.X202SENDCORADD253A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--X202SENDCORADD253A-->%'";
        }
        if (document.MAINFORM.X202SENDCORADD353A.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--X202SENDCORADD353A-->%'";
        }*/
        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('X202_SENDCORRID53A');
            }
        } else {
            //SYS_InqCUBK_Sql('X202_SENDCORRID53A', sql);
            SYS_InqCUBK_byCondition('X202_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRSW53Achange = function() {
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
                SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X202_SENDCORRSW53Achange_30', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_CHK_ACNO = function(oACNO) {
    try {
        if (oACNO.value != "" && oACNO.value.substr(0, 1) != "/") {
            oACNO.value = "/" + oACNO.value;
            if (oACNO.value.length > 35) {
                SYS_CheckError(oACNO, "The max length for this field is 35!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_GetBKIF_BY_BIC = function(oBIC) {
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
        //sBKID = oBIC.name.replace("SW_ADD", "ID");
        sBKIDCUBK = sBKID;
        if (oBIC.value.length == 11 && MAINFORM.elements[sBKID].value == "") {
            SYS_GetTableDataByRule_S('SSSS_CreditDetails_ClaimDo_X400_GetBKIF_BY_BIC_31', '1', true);
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ID_ONCHANGE_CUBK = function(sfKeyFldName, sCUBKMappingName, sSucJsFuncName) {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var oBIC; // Utility Auto Fix Comments
        var sBANK_CUST_ID; // Utility Auto Fix Comments
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SW_TAG_A_D = function(arr_BIC) {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.checkSWIFTname = function() {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.disable103 = function() {
    try {
        SYT_DisableDivClass("do_PaymentMT103_Tab_div");
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.disable202 = function() {
    try {
        SYT_DisableDivClass("do_PaymentMT202_Tab_div");

        document.MAINFORM.X202_AMT_32A.value = 0.00;
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.enable103 = function() {
    try {
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
        SYS_changeClassName('X103_SEND_BKNM_51A', 'O');
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
        SYS_changeClassName('X103_ACC_BKNM_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD1_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD2_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD3_57A', 'O');
        SYS_changeClassName('X103_ACC_BKSW_57A', 'O');
        SYS_changeClassName('X103_ACC_BKACNO57A', 'O');
        SYS_changeClassName('X103_53A_BTN', 'M');

        SYS_changeClassName('X103_BKOP_CODE_23B', 'M');
        SYS_changeClassName('X103_DET_CHG_71A', 'M');
        SYS_changeClassName('X103_INSTRCODE_23E', 'O');
        SYS_changeClassName('X103_RECCHGCCY_71G', 'O');
        SYS_changeClassName('X103_RECCHGAMT_71G', 'O');
        SYS_changeClassName('X103_REMIT_INFO_70', 'O');
        SYS_changeClassName('X103_REG_REP_77B', 'O');
        SYS_changeClassName('X103_BKTOBK_INFO72', 'O');
        SYS_changeClassName('X103_ENV_CONT_77T', 'O');
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
        SYS_changeClassName('X103_SENDCHGAMT71F', 'M');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.enable202 = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202" || document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202COV") {
            SYS_changeClassName('X202_ADV_BKID_B2', 'M');
            SYS_changeClassName('X202_ADV_BKNM_B2', 'M');
            SYS_changeClassName('X202_ADV_BKADD1_B2', 'O');
            SYS_changeClassName('X202_ADV_BKADD2_B2', 'O');
            SYS_changeClassName('X202_ADV_BKADD3_B2', 'O');
            SYS_changeClassName('X202_ADV_BKSW_B2', 'M');
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

            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;

        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.initCPYT_PAY_ADV_MSG = function(nvalue) {
    try {
        return CreditRemoveSelectOption(document.MAINFORM.CPYT_PAY_ADV_MSG, nvalue);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_ID_onchange = function(event) {
    try {
        Get_CPYT_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_ID_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_ASSIGNEE_BTN_onclick = function(event) {
    try {
        InqAssignee();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('CPYT_CR_AC', 'C_CUST_ID= \'<--CPYT_ASSGN_ID-->\' AND  C_CURRENCY=\'<--CPYT_CR_CCY-->\'');
        SYS_InqCUBK_byCondition('CPYT_CR_AC', '1');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AC_TYPE_onchange = function(event) {
    try {
        Set_CPYT_ASSGN_from_MAIN();
        Cal_CPYT_CR_AC_TYPE();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY_onchange = function(event) {
    try {
        AmtFromatAmtCrccy();
        CPYT_CR_AMT_TXCCYfromCrccy();
        CPYT_CR_PER();
        CHK_Total_Pct_CPYT_CR_PER();
        Cal_X202_AMT_32A();
        Cal_X400_AMT_32A();
        CPYT_CR_AMT_CRCCY();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_TXCCY_onchange = function(event) {
    try {
        CPYT_CR_PER();
        ExchangingRate();
        CPYT_CR_AMT_CRCCY();
        AmtFormatAmtTrxccy();
        CHK_Total_Pct_CPYT_CR_PER();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_BUY_RATE_onchange = function(event) {
    try {
        CPYT_CR_AMT_CRCCY();

        AmtFromatAmtCrccy();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_CCY_onchange = function(event) {
    try {
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
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_PER_onchange = function(event) {
    try {
        ExchangingRate();
        CPYT_CR_AMT_TXCCY();
        CPYT_CR_AMT_CRCCY();
        CHK_Total_Pct_CPYT_CR_PER();
        Cal_X400_AMT_32A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_VAL_DATE_onchange = function(event) {
    try {
        Cal_X202_VALUE_DT_32A();
        Cal_X400_AMT_32A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_PAY_ADV_MSG_onchange = function(event) {
    try {
        HiddenMT103Tab();
        CPYT_PAY_ADV_MSG();
        Show_MESSAGE_TYPE();
        Cal_X400_AMT_32A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_PAY_COV_MSG_onchange = function(event) {
    try {
        CPYT_PAY_COV_MSG();
        HiddenMT202Tab();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103BENECUADD1_59A_onchange = function(event) {
    try {
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103BENECUADD1_59A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_BENECU_ADD_59A', 'X103_BENECU_ID_59A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103BENECUADD2_59A_onchange = function(event) {
    try {
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103BENECUADD3_59A_onchange = function(event) {
    try {
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103MEDIBKADD1_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103MEDIBKADD2_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103MEDIBKADD3_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103RECCORRACNO54A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDBKADD1_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDBKADD2_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDBKADD3_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDCORACNO53A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDCORADD153A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDCORADD253A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103SENDCORADD353A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_50_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ORDCU_ADD_50A', 'X103_ORDCU_ID_50A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_50_BTN_onclick = function(event) {
    try {
        X103_ORDCU_ID_50Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_50_ORDER_NO_onchange = function(event) {
    try {
        X103_50_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_51_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_SEND_BK_ADD_51A', 'X103_SEND_BKID_51A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_51_BTN_onclick = function(event) {
    try {
        X103_SEND_BKID_51Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_51_ORDER_NO_onchange = function(event) {
    try {
        X103_51_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_52A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ORD_BK_ADD_52A', 'X103_ORD_BKID_52A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_52A_BTN_onclick = function(event) {
    try {
        X103_ORD_BKID_52Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_52_ORDER_NO_onchange = function(event) {
    try {
        X103_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_53A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_SENDCORRADD53A', 'X103_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_53A_BTN_onclick = function(event) {
    try {
        X103_SENDCORRID53Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_53_ORDER_NO_onchange = function(event) {
    try {
        X103_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_54A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_RECCORRADD_54A', 'X103_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_54A_BTN_onclick = function(event) {
    try {
        X103_RECCORRID_54Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_54_ORDER_NO_onchange = function(event) {
    try {
        X103_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_56A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_MEDI_BKADD_56A', 'X103_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_56A_BTN_onclick = function(event) {
    try {
        X103_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_56_ORDER_NO_onchange = function(event) {
    try {
        X103_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_57A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ACC_BKADD_57A', 'X103_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_57A_BTN_onclick = function(event) {
    try {
        X103_ACC_BKID_57Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_57_ORDER_NO_onchange = function(event) {
    try {
        X103_57_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_59_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_BENECU_ADD_59A', 'X103_BENECU_ID_59A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_59_BTN_onclick = function(event) {
    try {
        X103_BENECU_ID_59Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_59_ORDER_NO_onchange = function(event) {
    try {
        Cal_X103_59_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACCBKADD2_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACCBKADD3_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKID_57A_onchange = function(event) {
    try {
        X103_ACC_BKID_57Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        Cal_X103_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKADD1_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKADD2_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKADD3_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKID_B2_onchange = function(event) {
    try {
        X103_ADV_BKID_B2onchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKNM_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        Cal_X103_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_B2_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ADV_BKADD_B2', 'X103_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_B2_BTN_onclick = function(event) {
    try {
        X103_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_B2_ORDER_NO_onchange = function(event) {
    try {
        X103_B2_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_BENECUACNO59A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_BENECUACNO59A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_BENECU_BKSW_59_onchange = function(event) {
    try {
        Cal_X103_BENECU_BKSW_59();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_BENECU_ID_59A_onchange = function(event) {
    try {
        X103_BENECU_ID_59Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_BENECU_NM_59A_onchange = function(event) {
    try {
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_DET_CHG_71A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_DET_CHG_71A.value == 'BEN') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'O'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDIBKACNO56A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        X103_MEDI_BKID_56Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        Cal_X103_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDBKACNO_52A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDBKADD1_52A_onchange = function(event) {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDBKADD2_52A_onchange = function(event) {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDBKADD3_52A_onchange = function(event) {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_TAG_50A.value == "A" || document.MAINFORM.X103_TAG_50A.value == "K") {
            SYT_CHK_AC_NO(event.currentTarget);
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        X103_ORDCU_ID_50Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_OP_onchange = function(event) {
    try {
        X103_ORDCU_ID_OP_change();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        Cal_X103_ORDCU_SW_50A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORD_BKID_52A_onchange = function(event) {
    try {
        X103_ORD_BKID_52Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORD_BKNM_52A_onchange = function(event) {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        Cal_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCHGAMT_71G_onchange = function(event) {
    try {
        CAL_X103_RECCHGAMT_71G();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCHGCCY_71G_onchange = function(event) {
    try {
        CAL_X103_RECCHGAMT_71G();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORADD154A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORADD254A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORADD354A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRID_54A_onchange = function(event) {
    try {
        X103_RECCORRID_54Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRNM_54A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_RECCORRSW_54A_onchange = function(event) {
    try {
        Cal_X103_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDBKACNO51A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_SENDBKACNO51A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCHGAMT71F_onchange = function(event) {
    try {
        CAL_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCHGCCY71F_onchange = function(event) {
    try {
        CAL_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCORRID53A_onchange = function(event) {
    try {
        X103_SENDCORRID53Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCORRNM53A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SENDCORRSW53A_onchange = function(event) {
    try {
        Cal_X103_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKID_51A_onchange = function(event) {
    try {
        X103_SEND_BKID_51Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKNM_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        Cal_X103_SEND_BKSW_51A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X103_TAG_50A_onchange = function(event) {
    try {
        X103_TAG_50Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202BENEBKADD1_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202BENEBKADD2_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202BENEBKADD3_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202MEDIBKADD1_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202MEDIBKADD2_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202MEDIBKADD3_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202RECCORRACNO54A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202SENDCORACNO53A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202SENDCORADD153A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202SENDCORADD253A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202SENDCORADD353A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_52_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_52_BTN_onclick = function(event) {
    try {
        X202_ORDBK_ID_52Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_52_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_53_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_53_BTN_onclick = function(event) {
    try {
        X202_SENDCORRID53Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_53_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_54_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_54_BTN_onclick = function(event) {
    try {
        X202_RECCORRID_54Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_54_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_56_ADD_BTN_onclick = function(event) {
    try {
        X202_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_56_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('X202_MEDI_BKID_56A');
        X202_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_56_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_57_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_57_BTN_onclick = function(event) {
    try {
        X202_ACC_BKID_57Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_58_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_58_BTN_onclick = function(event) {
    try {
        X202_BENE_BKID_58Aonclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACCBKADD1_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACCBKADD2_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACCBKADD3_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKACNO57A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKID_57A_onchange = function(event) {
    try {
        X202_ACC_BKID_57Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKNM_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        X202_ACC_BKSW_57Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKADD1_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKADD2_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKADD3_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKID_B2_onchange = function(event) {
    try {
        X202_ADV_BKID_B2onchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKNM_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ADV_BKSW_B2_onchange = function(event) {
    try {
        X202_ADV_BKSW_B2change();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_B2_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_B2_BTN_onclick = function(event) {
    try {
        X202_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENEBKACNO58A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_BENEBKACNO58A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKID_58A_onchange = function(event) {
    try {
        X202_BENE_BKID_58Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKNM_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        X202_BENE_BKSW_58Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        X202_MEDI_BKID_56Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        X202_MEDI_BKSW_56Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBKACNO_52A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBKADD1_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBKADD2_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBKADD3_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        X202_ORDBK_ID_52Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_NM_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        X202_ORDBK_SW_52Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORADD154A_onchange = function(event) {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORADD254A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORADD354A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRID_54A_onchange = function(event) {
    try {
        X202_RECCORRID_54Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRNM_54A_onchange = function(event) {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_RECCORRSW_54A_onchange = function(event) {
    try {
        X202_RECCORRSW_54Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRID53A_onchange = function(event) {
    try {
        X202_SENDCORRID53Aonchange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRNM53A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X202_SENDCORRSW53A_onchange = function(event) {
    try {
        X202_SENDCORRSW53Achange();
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ACC_BK_ACNO_onchange = function(event) {
    try {
        X400_CHK_ACNO(document.MAINFORM.X400_ACC_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ACC_BK_ADD_BTN_onchange = function(event) {
    try {
        SYS_InqCUBK('X400_ACC_BKADD_57A', 'X400_ACC_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ACC_BK_ID_onchange = function(event) {
    try {
        X400_ID_ONCHANGE_CUBK('X400_ACC_BK_ID', 'X400_ACC_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ACC_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_ACC_BK_ID_BTN.value);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ACC_BK_NM_onchange = function(event) {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_ACC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ACC_BK_SW_ADD_onchange = function(event) {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_ACC_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X400_ADV_BKADD_B2', 'X400_ADV_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ADV_BK_ID_onchange = function(event) {
    try {
        X400_ID_ONCHANGE_CUBK('X400_ADV_BK_ID', 'X400_ADV_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_ADV_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ADV_BK_NM_onchange = function(event) {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_ADV_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X400_BENEBK_ADD_58A', 'X400_BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_BENE_BK_ID_onchange = function(event) {
    try {
        X400_ID_ONCHANGE_CUBK('X400_BENE_BK_ID', 'X400_BENE_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_BENE_BK_ID_BTN.value);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_BENE_BK_NM_onchange = function(event) {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_BENE_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ORD_BK_ACNO_onchange = function(event) {
    try {
        X400_CHK_ACNO(document.MAINFORM.X400_ORD_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ORD_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X400_ORD_BK_ADD_52A', 'X400_ORD_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ORD_BK_ID_onchange = function(event) {
    try {
        X400_ID_ONCHANGE_CUBK('X400_ORD_BK_ID', 'X400_ORD_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ORD_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_ORD_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ORD_BK_NM_onchange = function(event) {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_ORD_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_ORD_BK_SW_ADD_onchange = function(event) {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_ORD_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_RECCOR_BK_ACNO_onchange = function(event) {
    try {
        X400_CHK_ACNO(document.MAINFORM.X400_RECCOR_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_RECCOR_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X400_RECCORR_ADD_54A', 'X400_RECCOR_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_RECCOR_BK_ID_onchange = function(event) {
    try {
        X400_ID_ONCHANGE_CUBK('X400_RECCOR_BK_ID', 'X400_RECCOR_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_RECCOR_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_RECCOR_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_RECCOR_BK_NM_onchange = function(event) {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_RECCOR_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_RECCOR_BK_SW_ADD_onchange = function(event) {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_RECCOR_BK_SW_ADD.value);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SENDCORR_BK_ACNO_onchange = function(event) {
    try {
        X400_CHK_ACNO(document.MAINFORM.X400_SENDCORR_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SENDCORR_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X400_SENDCORR_ADD_53A', 'X400_SENDCORR_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SENDCORR_BK_ID_onchange = function(event) {
    try {
        X400_ID_ONCHANGE_CUBK('X400_SENDCORR_BK_ID', 'X400_SENDCORR_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SENDCORR_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_SENDCORR_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SENDCORR_BK_NM_onchange = function(event) {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_SENDCORR_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.X400_SENDCORR_BK_SW_ADD_onchange = function(event) {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_SENDCORR_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_Credit Details_ClaimDo.js", e);
    }
}