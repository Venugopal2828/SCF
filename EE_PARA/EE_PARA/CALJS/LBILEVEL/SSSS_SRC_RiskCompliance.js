"path:SCRN/Library/COMMON/RiskCompliance.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_CASH_COV_AC_NO = function() {
    try {
        var CASH_COV_HELD; // Utility Auto Fix Comments
        //JACK 0915 CASH
        CASH_COV_HELD = document.MAINFORM.CASH_COV_HELD.value;
        if (CASH_COV_HELD == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO_BTN, 'M');
            //JACK 0919 GTEE
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT_TXCCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO_BTN, 'H');
            document.MAINFORM.CASH_COV_AC_NO.value = "";
            //JACK 0919 GTEE
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT_TXCCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_AMT_TXCCY = function() {
    try {
        var BAL; // Utility Auto Fix Comments
        var NEW_CONF_BAL; // Utility Auto Fix Comments
        //JACK 0915 CASH
        if (document.MAINFORM.CASH_COV_HELD.value != "Yes") {
            document.MAINFORM.CASH_COV_AMT_TXCCY.value = 0;
            document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
        } else {
            switch (SYS_ORG_FUNCTION_NAME) {
                case "RegisterInstruction":
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PC.value) / 100;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
                    break;
                case "RegisterGuarantee":
                case "RegisterOutward":
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.GTEE_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) * SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PC.value) / 10000;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
                    break;
                case "SBLCIssue":
                case "SBLC_ProcessClaim":
                case "IPLC_IssueLCAmendmentOneStep":
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.LC_BAL.value) * SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PCT.value) / 10000;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
                    break;
                case "PROCESS_700701720":
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.LC_AMT.value) * SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PCT.value) / 10000;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
                    break;
                case "EPLC_PayAccept":
                case 'EPLC_PayAtMaturity':
                case 'EPLC_Discount':
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.R_RISK_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PCT.value) / 10000;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);

                    break;
                case 'EPLC_AmendmentOneStep':
                case 'EPLC_Process_MT707_New':
                    NEW_CONF_BAL = EEHtml.getElementById('NEW_CONF_BAL');
                    BAL = '';
                    if (NEW_CONF_BAL) {
                        BAL = SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value);
                        if (SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value) == 0) {
                            BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                        }
                    } else {
                        BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                    }
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = BAL * SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PCT.value) / 10000;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
                    break;
                case "EXCO_Acceptance":
                    document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.COLL_CCY.value;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value) * SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_PCT.value) / 10000;
                    document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
                    break;
            }



        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_AMT_TXCCY_1 = function() {
    try {
        var BAL; // Utility Auto Fix Comments
        var CASH_COV_PCT; // Utility Auto Fix Comments
        var COLL_TRX_CCY_BAL; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var NEG_TOL; // Utility Auto Fix Comments
        var NEW_CONF_BAL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        var R_WEIG_PCT; // Utility Auto Fix Comments
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        R_WEIG_PCT = SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value);

        if (CASH_COV_PCT >= 1 || CASH_COV_PCT <= 100) {
            switch (SYS_ORG_FUNCTION_NAME) {
                case "RegisterInstruction":
                    REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
                    POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
                    NEG_TOL = SYS_BeFloat(document.MAINFORM.NEG_TOL.value);
                    if (REIM_INST_AMT != "" && POS_TOL != "" && NEG_TOL == "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_INST_AMT * (1 + POS_TOL / 100) * (CASH_COV_PCT / 100));
                    } else if (REIM_INST_AMT != "" && POS_TOL == "" && NEG_TOL == "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_INST_AMT * (CASH_COV_PCT / 100));
                    }
                    break;

                case "RegisterGuarantee":
                case "RegisterOutward":
                    GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
                    if (GTEE_AMT != "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, GTEE_AMT * (R_WEIG_PCT / 100) * (CASH_COV_PCT / 100));
                    }
                    break;
                case "SBLCIssue":
                case "SBLC_ProcessClaim":
                case 'IPLC_IssueLCAmendmentOneStep':
                    LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                    if (LC_BAL != "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL * (R_WEIG_PCT / 100) * (CASH_COV_PCT / 100));
                    }
                    break;

                case "PROCESS_700701720":
                    LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
                    if (LC_AMT != "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_AMT * (R_WEIG_PCT / 100) * (CASH_COV_PCT / 100));
                    }
                    break;

                case 'EPLC_AmendmentOneStep':
                case 'EPLC_Process_MT707_New':
                case 'EPLC_PayAccept':
                case 'EPLC_PayAtMaturity':
                case 'EPLC_Discount':
                    NEW_CONF_BAL = EEHtml.getElementById('NEW_CONF_BAL');
                    BAL = '';
                    if (NEW_CONF_BAL) {
                        BAL = SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value);
                        if (SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value) == 0) {
                            BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                        }
                    } else {
                        BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                    }
                    if (BAL != "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, BAL * (R_WEIG_PCT / 100) * (CASH_COV_PCT / 100));
                    }
                    break;

                case "EXCO_Acceptance":
                    COLL_TRX_CCY_BAL = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value);
                    if (COLL_TRX_CCY_BAL != "") {
                        document.MAINFORM.CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, COLL_TRX_CCY_BAL * (R_WEIG_PCT / 100) * (CASH_COV_PCT / 100));
                    }
                    break;

            }

        } else {
            SYS_CheckError(document.MAINFORM.CASH_COV_PCT, 'Percentage must be from 1 to 100.'); // Utility Auto Fix Comments
            document.MAINFORM.CASH_COV_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_BAL = function() {
    try {
        //JACK 0921 GTEE
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            document.MAINFORM.CASH_COV_BAL.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.CASH_COV_AMT.value);
        } else {
            document.MAINFORM.CASH_COV_BAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_BAL_TXCCY = function() {
    try {
        //JACK 0915 CASH
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            document.MAINFORM.CASH_COV_BAL_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_TXCCY.value, document.MAINFORM.CASH_COV_AMT_TXCCY.value);
        } else {
            document.MAINFORM.CASH_COV_BAL_TXCCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_DR_ACNO = function() {
    try {
        //JACK 0915 CASH
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO_BTN, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO_BTN, 'H');
            document.MAINFORM.CASH_COV_DR_ACNO.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_HELD = function() {
    try {
        if (document.MAINFORM.CASH_COV_PCT.value != 0 && document.MAINFORM.TEMP_CASH_COV_PCT.value == 0) {
            document.MAINFORM.TEMP_CASH_COV_PCT.value = document.MAINFORM.CASH_COV_PCT.value;
        }
        //JACK 0915 CASH
        Cal_CASH_COV_AMT_TXCCY();
        Cal_CASH_COV_BAL_TXCCY();
        Cal_CASH_COV_DR_ACNO();
        Cal_CASH_COV_PCT();
        Cal_CASH_COV_AC_NO();
        //JACK 0917 CASH
        Change_CASH_COV_CCY();
        Cal_TEMP_RATE_CASH();
        Cal_R_RISK_CASH_AMT();
        Cal_CASH_COV_BAL();
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_PCT = function() {
    try {
        //JACK 0915 CASH
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'P');
            document.MAINFORM.CASH_COV_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_CASH_COV_TXCCY = function() {
    try {
        switch (SYS_ORG_FUNCTION_NAME) {
            case "RegisterInstruction":
            case "SBLCIssue":
            case "SBLC_ProcessClaim":
            case "PROCESS_700701720":
            case "IPLC_IssueLCAmendmentOneStep":
            case "EPLC_PayAccept":
                document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.LC_CCY.value;
                break;
            case "RegisterGuarantee":
            case "RegisterOutward":
                document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.GTEE_CCY.value;
                break;
            case "Cal_CASH_COV_TXCCY":
                document.MAINFORM.CASH_COV_TXCCY.value = document.MAINFORM.COLL_CCY.value;
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_Clear_Risk_Party = function() {
    try {
        //JACK 0921 UPDATE CUST -->Customer and BANK-->Bank
        if (document.MAINFORM.R_CUST_BK.value == "Customer") {
            document.MAINFORM.R_PARTY_ID.value = "";
            document.MAINFORM.R_PARTY_ID_BTN.value = "Customer";
            document.MAINFORM.R_PARTY_NM.value = "";
            document.MAINFORM.R_PARTY_ADD1.value = "";
            document.MAINFORM.R_PARTY_ADD2.value = "";
            document.MAINFORM.R_PARTY_ADD3.value = "";
        }
        if (document.MAINFORM.R_CUST_BK.value == "") {
            document.MAINFORM.R_PARTY_ID.value = "";
            document.MAINFORM.R_PARTY_ID_BTN.value = "";
            document.MAINFORM.R_PARTY_NM.value = "";
            document.MAINFORM.R_PARTY_ADD1.value = "";
            document.MAINFORM.R_PARTY_ADD2.value = "";
            document.MAINFORM.R_PARTY_ADD3.value = "";
        }
        if (document.MAINFORM.R_CUST_BK.value == "Bank") {
            document.MAINFORM.R_PARTY_ID.value = "";
            document.MAINFORM.R_PARTY_ID_BTN.value = "Bank";
            document.MAINFORM.R_PARTY_NM.value = "";
            document.MAINFORM.R_PARTY_ADD1.value = "";
            document.MAINFORM.R_PARTY_ADD2.value = "";
            document.MAINFORM.R_PARTY_ADD3.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_Clear_Risk_Party_ID = function() {
    try {
        //Jack
        if (document.MAINFORM.R_PARTY_ID.value == "") {
            document.MAINFORM.R_PARTY_NM.value = "";
            document.MAINFORM.R_PARTY_ADD1.value = "";
            document.MAINFORM.R_PARTY_ADD2.value = "";
            document.MAINFORM.R_PARTY_ADD3.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_RISK_PARTY_BANK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments

        document.MAINFORM.R_PARTY_ID_BTN.value = 'Bank';

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('R_PARTY_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_RISK_PARTY_CUST = function() {
    try {
        var retvalue; // Utility Auto Fix Comments

        document.MAINFORM.R_PARTY_ID_BTN.value = 'Customer';

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('R_PARTY_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_R_PARTY_CNTY = function() {
    try {
        var R_PARTY_CNTY_NM; // Utility Auto Fix Comments
        R_PARTY_CNTY_NM = '';
        R_PARTY_CNTY_NM = SYS_GetTableDataByRule('SSSS_SRC_RiskCompliance_Cal_R_PARTY_CNTY_0', '1');
        document.MAINFORM.R_PARTY_CNTY_NM.value = R_PARTY_CNTY_NM;
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_R_PARTY_ID_CallBak = function() {
    try {
        Cal_R_PARTY_CNTY();
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_R_PARTY_ORDER_NO = function() {
    try {
        var R_PARTY_ID; // Utility Auto Fix Comments
        var R_PARTY_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //R_PARTY_ORDER_NO = document.MAINFORM.R_PARTY_ORDER_NO.value;
        //R_PARTY_ID = document.MAINFORM.R_PARTY_ID.value;
        //sSQLWhere = "ORDER_NO = " + R_PARTY_ORDER_NO + " AND C_MAIN_REF = '" + R_PARTY_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "R_PARTY_NM;R_PARTY_ADD1;R_PARTY_ADD2;R_PARTY_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_RiskCompliance_Cal_R_PARTY_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_R_RISK_AMT_R_RISK_LMT_AMT = function() {
    try {
        var BAL; // Utility Auto Fix Comments
        var CASH_COV_PCT; // Utility Auto Fix Comments
        var R_WEIG_PCT; // Utility Auto Fix Comments
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        R_WEIG_PCT = SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value);
        switch (SYS_ORG_FUNCTION_NAME) {
            case 'IPLC_IssueLCOneStep':
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.LC_BAL.value) * R_WEIG_PCT / 100;
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case 'IPLC_PayAcceptWithDiscount':
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case "IPLC_IssueLCAmendmentOneStep":
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.INC_AMT.value);
                if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) != 0 && document.MAINFORM.NEW_EXPIRY_DT.value != "") {
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.NEW_LC_BAL.value);
                }
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case "PROCESS_700701720":
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.LC_AMT.value) * R_WEIG_PCT / 100;
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case 'EPLC_AmendmentOneStep':
            case 'EPLC_Process_MT707_New':
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                Cal_TEMP_RATE_RISK();
                BAL = SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value);
                if (SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value) == 0) {
                    BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                }
                document.MAINFORM.R_RISK_AMT.value = BAL * R_WEIG_PCT / 100;
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case "EPLC_PayAccept":
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.STL_AMT.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case "EXCO_Acceptance":
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.COLL_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.COLL_TRX_CCY_BAL.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case "CreateCollection":
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.COLL_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
                document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value));
                break;
            case 'EXCO_Discount':
                document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                Cal_TEMP_RATE_RISK();
                document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value) * R_WEIG_PCT / 100;
                document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                break;
            default:
                Cal_TEMP_RATE_RISK();
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_R_RISK_CASH_AMT = function() {
    try {
        var cCASH_COV_CCY; // Utility Auto Fix Comments
        var cCASH_COV_TXCCY; // Utility Auto Fix Comments
        var nCASH_COV_AMT; // Utility Auto Fix Comments
        var nCASH_COV_AMT_TXCCY; // Utility Auto Fix Comments
        var rTEMP_RATE; // Utility Auto Fix Comments
        //JACK
        nCASH_COV_AMT_TXCCY = SYS_BeFloat(document.MAINFORM.CASH_COV_AMT_TXCCY.value);
        rTEMP_RATE = SYS_BeFloat(document.MAINFORM.TEMP_RATE_CASH.value);
        cCASH_COV_CCY = document.MAINFORM.CASH_COV_CCY.value;
        cCASH_COV_TXCCY = document.MAINFORM.CASH_COV_TXCCY.value;
        nCASH_COV_AMT = nCASH_COV_AMT_TXCCY * rTEMP_RATE;

        if (cCASH_COV_TXCCY == cCASH_COV_CCY) {
            document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(cCASH_COV_CCY, nCASH_COV_AMT_TXCCY);
        } else {
            document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(cCASH_COV_CCY, nCASH_COV_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_R_RISK_LMT_AMT = function() {
    try {
        var cR_RISK_CCY; // Utility Auto Fix Comments
        var cR_RISK_LMT_CCY; // Utility Auto Fix Comments
        var nR_RISK_AMT; // Utility Auto Fix Comments
        var nR_RISK_LMT_AMT; // Utility Auto Fix Comments
        var rTEMP_RATE; // Utility Auto Fix Comments
        //JACK
        nR_RISK_AMT = SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value);
        rTEMP_RATE = SYS_BeFloat(document.MAINFORM.TEMP_RATE_RISK.value);
        cR_RISK_LMT_CCY = document.MAINFORM.R_RISK_LMT_CCY.value;
        cR_RISK_CCY = document.MAINFORM.R_RISK_CCY.value;
        nR_RISK_LMT_AMT = nR_RISK_AMT * rTEMP_RATE;

        if (cR_RISK_CCY == cR_RISK_LMT_CCY) {
            document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(cR_RISK_LMT_CCY, nR_RISK_AMT);
        } else {
            document.MAINFORM.R_RISK_LMT_AMT.value = SYT_AmtFormat(cR_RISK_LMT_CCY, nR_RISK_LMT_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_TEMP_CASH_COV_AMT = function() {
    try {
        var cCASH_COV_CCY; // Utility Auto Fix Comments
        var cCASH_COV_TXCCY; // Utility Auto Fix Comments
        var nCASH_COV_AMT; // Utility Auto Fix Comments
        var nTEMP_RATE_CASH; // Utility Auto Fix Comments
        //JACK 0920 GTEE
        cCASH_COV_CCY = document.MAINFORM.CASH_COV_CCY.value;
        nCASH_COV_AMT = SYS_BeFloat(document.MAINFORM.CASH_COV_AMT.value);

        document.MAINFORM.TEMP_CASH_COV_AMT.value = nCASH_COV_AMT;
        document.MAINFORM.TEMP_CASH_COV_AMT.value = SYT_AmtFormat(cCASH_COV_CCY, nCASH_COV_AMT);
        //alert("TEMP_CASH_COV_AMT="+document.MAINFORM.TEMP_CASH_COV_AMT.value);

        cCASH_COV_TXCCY = document.MAINFORM.CASH_COV_TXCCY.value;
        nTEMP_RATE_CASH = SYS_BeFloat(document.MAINFORM.TEMP_RATE_CASH.value);
        document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value = SYS_BeFloat(nCASH_COV_AMT / nTEMP_RATE_CASH);
        document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value = SYT_AmtFormat(cCASH_COV_TXCCY, document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value);
        document.MAINFORM.CASH_COV_AMT_TXCCY.value = document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value;
        //alert("TEMP_CASH_COV_AMT_TXCCY2="+document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value);
        //alert("CASH_COV_AMT_TXCCY="+document.MAINFORM.CASH_COV_AMT_TXCCY.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_TEMP_CASH_COV_AMT_TXCCY = function() {
    try {
        var cCASH_COV_TXCCY; // Utility Auto Fix Comments
        var nCASH_COV_AMT_TXCCY; // Utility Auto Fix Comments
        //JACK 0920 GTEE
        cCASH_COV_TXCCY = document.MAINFORM.CASH_COV_TXCCY.value;
        nCASH_COV_AMT_TXCCY = SYS_BeFloat(document.MAINFORM.CASH_COV_AMT_TXCCY.value);

        document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY.value = nCASH_COV_AMT_TXCCY;
        document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY.value = SYT_AmtFormat(cCASH_COV_TXCCY, nCASH_COV_AMT_TXCCY);
        //alert("TEMP_CASH_COV_AMT_TXCCY="+document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_TEMP_CASH_COV_PCT = function() {
    try {
        var nCASH_COV_AMT_TXCCY; // Utility Auto Fix Comments
        var nR_RISK_AMT; // Utility Auto Fix Comments
        var nTEMP_CASH_COV_PCT; // Utility Auto Fix Comments
        //JACK 0920 GTEE
        nCASH_COV_AMT_TXCCY = SYS_BeFloat(document.MAINFORM.CASH_COV_AMT_TXCCY.value);
        nR_RISK_AMT = SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value);
        if (nR_RISK_AMT == 0 || nR_RISK_AMT == "") {
            return;
        }
        nTEMP_CASH_COV_PCT = SYS_BeFloat(nCASH_COV_AMT_TXCCY / nR_RISK_AMT * 100);
        document.MAINFORM.TEMP_CASH_COV_PCT.value = nTEMP_CASH_COV_PCT;
        document.MAINFORM.CASH_COV_PCT.value = SYT_AmtFormat(nCASH_COV_AMT_TXCCY, nTEMP_CASH_COV_PCT);
        //alert("TEMP_CASH_COV_AMT_TXCCY="+document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY.value);
        //alert("R_RISK_AMT="+document.MAINFORM.R_RISK_AMT.value);
        //alert("TEMP_CASH_COV_PCT="+document.MAINFORM.TEMP_CASH_COV_PCT.value);
        //alert("CASH_COV_PCT="+document.MAINFORM.CASH_COV_PCT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_TEMP_CASH_COV_PCT2 = function() {
    try {
        var nCASH_COV_AMT_TXCCY; // Utility Auto Fix Comments
        var nR_RISK_AMT; // Utility Auto Fix Comments
        var nTEMP_CASH_COV_AMT_TXCCY2; // Utility Auto Fix Comments
        var nTEMP_CASH_COV_PCT2; // Utility Auto Fix Comments
        //JACK 0920 GTEE
        nCASH_COV_AMT_TXCCY = SYS_BeFloat(document.MAINFORM.CASH_COV_AMT_TXCCY.value);
        nTEMP_CASH_COV_AMT_TXCCY2 = SYS_BeFloat(document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value);
        nR_RISK_AMT = SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value);
        nTEMP_CASH_COV_PCT2 = SYS_BeFloat(nTEMP_CASH_COV_AMT_TXCCY2 / nR_RISK_AMT * 100);
        document.MAINFORM.TEMP_CASH_COV_PCT2.value = nTEMP_CASH_COV_PCT2;
        document.MAINFORM.CASH_COV_PCT.value = SYT_AmtFormat(nCASH_COV_AMT_TXCCY, nTEMP_CASH_COV_PCT2);
        //alert("TEMP_CASH_COV_AMT_TXCCY2="+document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2.value);
        //alert("R_RISK_AMT="+document.MAINFORM.R_RISK_AMT.value);
        //alert("TEMP_CASH_COV_PCT2="+document.MAINFORM.TEMP_CASH_COV_PCT2.value);
        //alert("CASH_COV_PCT="+document.MAINFORM.CASH_COV_PCT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_TEMP_RATE_CASH = function() {
    try {
        var cCASH_COV_CCY; // Utility Auto Fix Comments
        var cCASH_COV_TXCCY; // Utility Auto Fix Comments
        //JACK 0917 CASH
        cCASH_COV_CCY = document.MAINFORM.CASH_COV_CCY.value;
        cCASH_COV_TXCCY = document.MAINFORM.CASH_COV_TXCCY.value;

        if (cCASH_COV_CCY != cCASH_COV_TXCCY && cCASH_COV_CCY != "" && cCASH_COV_TXCCY != "") {
            SYS_GetExchangeRate(cCASH_COV_TXCCY, cCASH_COV_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE_CASH.name);
        } else {
            document.MAINFORM.TEMP_RATE_CASH.value = 1;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_TEMP_RATE_RISK = function() {
    try {
        var cR_RISK_CCY; // Utility Auto Fix Comments
        var cR_RISK_LMT_CCY; // Utility Auto Fix Comments
        cR_RISK_LMT_CCY = document.MAINFORM.R_RISK_LMT_CCY.value;
        cR_RISK_CCY = document.MAINFORM.R_RISK_CCY.value;

        if (cR_RISK_LMT_CCY != cR_RISK_CCY && cR_RISK_LMT_CCY != "" && cR_RISK_CCY != "") {
            SYS_GetExchangeRate_S(cR_RISK_CCY, cR_RISK_LMT_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE_RISK.name);
        } else {
            document.MAINFORM.TEMP_RATE_RISK.value = 1;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Cal_Transmit_Base_Amount = function() {
    try {
        var BAL; // Utility Auto Fix Comments
        var R_WEIG_PCT; // Utility Auto Fix Comments
        R_WEIG_PCT = SYS_BeFloat(document.MAINFORM.R_WEIG_PCT.value);
        if (R_WEIG_PCT >= 1 || R_WEIG_PCT <= 100) {
            switch (SYS_ORG_FUNCTION_NAME) {
                case "RegisterInstruction":
                case "ProcessMT740":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                    if (document.MAINFORM.CONF_INSTR.value == 'Confirmed') {
                        document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value) * R_WEIG_PCT / 100;
                        document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    } else {
                        document.MAINFORM.R_RISK_AMT.value = 0;
                        document.MAINFORM.R_RISK_LMT_AMT.value = 0;
                    }
                    break;
                case "RegisterGuarantee":
                case "RegisterOutward":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.GTEE_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case "SBLCIssue":
                case "SBLC_ProcessClaim":
                case "IPLC_IssueLCOneStep":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.LC_BAL.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case "PROCESS_700701720":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.LC_AMT.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case 'EPLC_AmendmentOneStep':
                case 'EPLC_Process_MT707_New':
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                    BAL = SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value);
                    if (SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value) == 0) {
                        BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
                    }
                    document.MAINFORM.R_RISK_AMT.value = BAL * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case 'EXCO_Discount':
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case "EPLC_PayAccept":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.STL_AMT.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case "EXCO_Acceptance":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.COLL_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
                case "CreateCollection":
                    document.MAINFORM.R_RISK_CCY.value = document.MAINFORM.COLL_CCY.value;
                    document.MAINFORM.R_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value) * R_WEIG_PCT / 100;
                    document.MAINFORM.R_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.R_RISK_CCY.value, document.MAINFORM.R_RISK_AMT.value);
                    break;
            }
        } else {
            SYS_CheckError(document.MAINFORM.R_WEIG_PCT, 'Percentage must be from 1 to 100.'); // Utility Auto Fix Comments
            document.MAINFORM.R_WEIG_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Change_CASH_COV_CCY = function() {
    try {
        //JACK 0917 CASH
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_CCY, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_CCY, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Change_R_COLLAT_REQ = function() {
    try {
        if (document.MAINFORM.R_COLLAT_REQ.value == 'N') {
            SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_TP, 'P');
            SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_DTLS, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_TP, 'M');
            SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_DTLS, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Change_R_COLLAT_TP = function() {
    try {
        //JACK 0915
        if (document.MAINFORM.R_COLLAT_REQ.value == 'Y') {
            if (document.MAINFORM.R_COLLAT_TP.value == 'Cash') {
                SYT_ChangeFldClass(document.MAINFORM.CASH_COV_HELD, 'M');
                document.MAINFORM.CASH_COV_HELD.value = 'Yes';
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CASH_COV_HELD, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_HELD, 'P');
            document.MAINFORM.CASH_COV_HELD.value = 'No';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Chk_CASH_COV_PCT = function() {
    try {
        var CASH_COV_PCT; // Utility Auto Fix Comments
        //JACK 0915 CASH
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        if (CASH_COV_PCT < 1 || CASH_COV_PCT > 100) {
            SYS_CheckError(document.MAINFORM.CASH_COV_PCT, 'Percentage must be from 1 to 100!!');
            document.MAINFORM.CASH_COV_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Get_R_ASSET_ACNO = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
        //Add by Jack on 20120915 for SMBC Workshop
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + document.MAINFORM.R_RISK_LMT_CCY.value + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('R_ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('R_ASSET_ACNO', '2');
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Get_R_CASH_COV_ACNO = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'Collateral\' AND C_CURRENCY = \'" + document.MAINFORM.CASH_COV_CCY.value + "\' AND C_AC_IDENTIFIER <> \'C\'";
        SYS_InqCUBK_Sql('CASH_COV_AC_NO1', SQL);*/
        SYS_InqCUBK_byCondition('CASH_COV_AC_NO1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Get_R_CASH_COV_DR_ACNO = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'Collateral\' AND C_CURRENCY=\'" + document.MAINFORM.CASH_COV_CCY.value + "\' AND C_AC_IDENTIFIER = \'C\'";
        SYS_InqCUBK_Sql('CASH_COV_DR_ACNO1', SQL);*/
        SYS_InqCUBK_byCondition('CASH_COV_DR_ACNO1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Get_R_LIAB_ACNO = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
        //Add by Jack on 20120915 for SMBC Workshop
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + document.MAINFORM.R_RISK_LMT_CCY.value + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('R_LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('R_LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Get_SYND_INFO = function() {
    try {
        var R_SYND_REF; // Utility Auto Fix Comments
        var synd_sql_statements; // Utility Auto Fix Comments
        //JACK 0921 GTEE
        R_SYND_REF = '';
        synd_sql_statements = "SOURCE_REF='" + document.MAINFORM.C_MAIN_REF.value + "'"; // Utility Auto Fix Comments
        SYS_GetTableDataByRule('SSSS_SRC_RiskCompliance_Get_SYND_INFO_2', '1');
        document.MAINFORM.R_SYND_REF.value = R_SYND_REF;
        if (R_SYND_REF != null && R_SYND_REF != 'null' && R_SYND_REF != '' && R_SYND_REF != 'undefined') {
            document.MAINFORM.R_SYND_FLG.value = 'YES';
        } else {
            document.MAINFORM.R_SYND_REF.value = '';
            document.MAINFORM.R_SYND_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.LimitInterfaceClear = function() {
    try {
        document.MAINFORM.LIMIT_LINES.options.length = 0;
        document.MAINFORM.LIMIT_LINES.className = "CHAR_O";
        document.MAINFORM.R_LMT_USED_REF.value = "";
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.LimitRetrieval = function() {
    try {
        var CustId; // Utility Auto Fix Comments
        var LcAmt; // Utility Auto Fix Comments
        var ProdCode; // Utility Auto Fix Comments
        LcAmt = document.MAINFORM.R_RISK_LMT_AMT.value;
        CustId = document.MAINFORM.R_PARTY_ID.value;
        ProdCode = document.MAINFORM.PRODUCT_CD.value;
        if (ProdCode == '') {
            alert('Product code should not be empty');
        } else if (CustId == '') {
            alert('Applicant Id should not be empty');
        } else if (SYS_BeFloat(LcAmt) == '0.00') {
            alert('Risk Amount (LMT CCY) should not be 0.00');
        } else {
            SYS_InqGapi('SYS_LimitRetrieval', 'LimitRetrievalRetSucc()');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.LimitRetrievalRetSucc = function() {
    try {
        var limitArr; // Utility Auto Fix Comments
        var limitFlds; // Utility Auto Fix Comments
        var limitList; // Utility Auto Fix Comments
        var selectText; // Utility Auto Fix Comments
        limitList = document.MAINFORM.LIMIT_STATUS.value;
        document.MAINFORM.LIMIT_LINES.options.length = 0;
        document.MAINFORM.LIMIT_LINES.className = "CHAR_O";
        document.MAINFORM.R_LMT_USED_REF.value = "";


        if (limitList == '') {
            alert('No Limits Returned');
        } else {
            limitArr = limitList.split(";");
            document.MAINFORM.LIMIT_LINES[0] = new Option("Please select a limit line:", "", true);
            for (i = 0; i < limitArr.length; i++) {
                if (limitArr[i] != "") {
                    limitFlds = limitArr[i].split("+");
                    selectText = "LINE : " + limitFlds[0] + " - " + limitFlds[2] + ", the available limit is : " + document.MAINFORM.R_RISK_LMT_CCY.value + SYS_formatAmt_Single(limitFlds[3], document.MAINFORM.R_RISK_LMT_CCY.value);
                    document.MAINFORM.LIMIT_LINES[i + 1] = new Option(selectText, limitArr[i], false);
                }
            }
            document.MAINFORM.LIMIT_LINES.className = "CHAR_M";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.LoadBasicValue = function() {
    try {
        //Add by Jack on 20120913 for SMBC Workshop
        document.MAINFORM.R_WEIG_PCT.value = 100;
        document.MAINFORM.PRODUCT_CD.value = SYS_MODULE_NAME;
        //JACK 0917
        document.MAINFORM.R_LMT_DECISION_FLG.value = 'Passed';
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.MPO_Collateral_SECTION = function() {
    try {
        switch (SYS_ORG_FUNCTION_NAME) {
            case "CreateCollection":
            case "CreateCollectionCopyExisting":
            case "PrePayment":
            case "PaymentDP":
            case "SettlementDA":
            case "IPLC_PayAcceptWithDiscount":
            case "IPLC_PaymentAtMaturity":
            case "EXCO_Discount":
            case "EXCO_SettlementAtMaturity":
                SYT_ChangeFldClass_New('R_COLLAT_REQ', 'P');
                break;
            case "ProcessMT740":
            case "RegisterInstruction":
                if (document.MAINFORM.CONF_INSTR.value == 'Confirmed') {
                    SYT_ChangeFldClass_New('R_COLLAT_REQ', 'O');
                } else {
                    SYT_ChangeFldClass_New('R_COLLAT_REQ', 'P');
                }
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.MPO_LIMITS_SECTION = function() {
    try {
        if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            document.MAINFORM.R_RISK_LMT_CCY.value = SYS_LOCAL_CCY;
            EEHtml.fireEvent(document.MAINFORM.R_RISK_LMT_CCY, 'onchange');
        }
        switch (SYS_ORG_FUNCTION_NAME) {
            case 'IPLC_IssueLCAmendmentOneStep':
                if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
                    document.MAINFORM.R_WEIG_PCT.value = 100;
                    Cal_Transmit_Base_Amount();
                    Cal_R_RISK_AMT_R_RISK_LMT_AMT();
                }
                SYT_ChangeFldClass_New('R_WEIG_PCT', 'M');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'O');
                SYT_ChangeFldClass_New('R_RISK_AMT', 'M');
                SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                break;
            case 'IPLC_PayAcceptWithDiscount':
                SYT_ChangeFldClass_New('R_WEIG_PCT', 'P');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'P');
                SYT_ChangeFldClass_New('R_RISK_AMT', 'P');
                SYT_ChangeFldClass_New('R_RISK_CCY', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                break;

                /*
case 'IPLC_IssueLCAmendmentOneStep':
   if(SYS_BeFloat(document.MAINFORM.INC_AMT.value) > 0 || SYS_GetSubDays('EXPIRY_DT','NEW_EXPIRY_DT') > 0){

if(SYS_FUNCTION_TYPE !='EC' && SYS_FUNCTION_TYPE !='RE' && SYS_FUNCTION_TYPE !='IQ'){
 document.MAINFORM.R_WEIG_PCT.value = 100;
}
       SYT_ChangeFldClass_New('R_WEIG_PCT','O');
	SYT_ChangeFldClass_New('R_RISK_LMT_CCY','O');
	SYT_ChangeFldClass_New('R_LMT_USED_REF','O');
	SYT_ChangeFldClass_New('R_LMT_DECISION_FLG','O');
	SYT_ChangeFldClass_New('R_UTIL_REF','O');
       SYT_ChangeFldClass_New('R_LMT_USED_DT','O');
         }else
  {
       document.MAINFORM.R_WEIG_PCT.value = 0;
       SYT_ChangeFldClass_New('R_WEIG_PCT','P');
	SYT_ChangeFldClass_New('R_RISK_CCY','P');
       SYT_ChangeFldClass_New('R_RISK_AMT','P');
	SYT_ChangeFldClass_New('R_RISK_LMT_CCY','P');
	SYT_ChangeFldClass_New('R_RISK_LMT_AMT','P');
	SYT_ChangeFldClass_New('PRODUCT_CD','P');
	SYT_ChangeFldClass_New('R_LMT_USED_REF','P');
	SYT_ChangeFldClass_New('R_LMT_DECISION_FLG','P');
	SYT_ChangeFldClass_New('R_UTIL_REF','P');
       SYT_ChangeFldClass_New('R_LMT_USED_DT','P');
 }
     break;
*/
            case 'PROCESS_700701720':
                if (document.MAINFORM.OUR_ENG.value != "CONFIRMATION" && document.MAINFORM.OUR_ENG.value != "SILENT CONFIRMATION") {

                    SYT_ChangeFldClass_New('R_WEIG_PCT', 'O');
                    SYT_ChangeFldClass_New('R_RISK_AMT', 'O');
                } else {
                    SYT_ChangeFldClass_New('R_WEIG_PCT', 'M');
                    SYT_ChangeFldClass_New('R_RISK_AMT', 'M');
                }
                SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                document.MAINFORM.R_WEIG_PCT.value = document.MAINFORM.CONF_PCT.value;
                if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
                    document.MAINFORM.R_RISK_LMT_CCY.value = SYS_LOCAL_CCY;
                }
                Cal_Transmit_Base_Amount();
                Cal_R_RISK_AMT_R_RISK_LMT_AMT();
                break;
            case 'EPLC_AmendmentOneStep':
            case 'EPLC_Process_MT707_New':
                SYT_ChangeFldClass_New('R_WEIG_PCT', 'M');
                SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                SYT_ChangeFldClass_New('R_RISK_AMT', 'M');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                document.MAINFORM.R_WEIG_PCT.value = document.MAINFORM.CONF_PCT.value;
                if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
                    document.MAINFORM.R_RISK_LMT_CCY.value = SYS_LOCAL_CCY;
                }
                Cal_Transmit_Base_Amount();
                Cal_R_RISK_AMT_R_RISK_LMT_AMT();
                break;

            case 'EPLC_PayAccept':
                if (document.MAINFORM.DISCNT_FLG.value == "YES" || (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" && document.MAINFORM.DISCNT_FLG.value != "YES")) {
                    SYT_ChangeFldClass_New('R_WEIG_PCT', 'O');
                    SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                    SYT_ChangeFldClass_New('R_RISK_AMT', 'O');
                    SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'O');
                    SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                    SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                    SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                    SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                    document.MAINFORM.R_WEIG_PCT.value = 100;
                    Cal_Transmit_Base_Amount();
                    Cal_R_RISK_AMT_R_RISK_LMT_AMT();
                } else {
                    SYT_ChangeFldClass_New('R_WEIG_PCT', 'P');
                    SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                    SYT_ChangeFldClass_New('R_RISK_AMT', 'P');
                    SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'P');
                    SYT_ChangeFldClass_New('R_LMT_USED_REF', 'P');
                    SYT_ChangeFldClass_New('R_LMT_USED_DT', 'P');
                    SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'P');
                    SYT_ChangeFldClass_New('R_UTIL_REF', 'P');
                    document.MAINFORM.R_WEIG_PCT.value = 0;
                    EEHtml.fireEvent(document.MAINFORM.R_WEIG_PCT, "onchange");
                }
                break;
            case 'EPLC_PayAtMaturity':
            case 'EXCO_SettlementAtMaturity':
                SYT_ChangeFldClass_New('R_WEIG_PCT', 'P');
                SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                SYT_ChangeFldClass_New('R_RISK_AMT', 'P');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'P');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                break;
            case 'EXCO_Discount':
                SYT_ChangeFldClass_New('R_WEIG_PCT', 'O');
                SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                SYT_ChangeFldClass_New('R_RISK_AMT', 'P');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'O');
                SYT_ChangeFldClass_New('R_RISK_LMT_AMT', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                Cal_Transmit_Base_Amount();
                Cal_R_RISK_AMT_R_RISK_LMT_AMT();
                break;
            case 'EPLC_SettlePartialPayment':
            case 'PrePayment':
            case 'PaymentDP':
            case 'SettlementDA':
            case 'SettleClaim':
            case 'ProcessMT742':
                SYT_ChangeFldClass_New('R_WEIG_PCT', 'P');
                SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                SYT_ChangeFldClass_New('R_RISK_AMT', 'P');
                SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'P');
                SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                break;
            case 'CreateCollection':
            case 'CreateCollectionCopyExisting':
                if (document.MAINFORM.DELVR_DOC_AGST.value == "D/A and Aval" || document.MAINFORM.REL_IN_TRUST_FLG.value == "Yes") {
                    SYT_ChangeFldClass_New('R_WEIG_PCT', 'O');
                    SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                    SYT_ChangeFldClass_New('R_RISK_AMT', 'O');
                    SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'O');
                    SYT_ChangeFldClass_New('R_LMT_USED_REF', 'O');
                    SYT_ChangeFldClass_New('R_LMT_USED_DT', 'O');
                    SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'O');
                    SYT_ChangeFldClass_New('R_UTIL_REF', 'O');
                    document.MAINFORM.R_WEIG_PCT.value = 100;
                    Cal_Transmit_Base_Amount();
                    Cal_R_RISK_AMT_R_RISK_LMT_AMT();
                } else {
                    SYT_ChangeFldClass_New('R_WEIG_PCT', 'P');
                    SYT_ChangeFldClass_New('R_RISK_CCY', 'P');
                    SYT_ChangeFldClass_New('R_RISK_AMT', 'P');
                    SYT_ChangeFldClass_New('R_RISK_LMT_CCY', 'P');
                    SYT_ChangeFldClass_New('R_LMT_USED_REF', 'P');
                    SYT_ChangeFldClass_New('R_LMT_USED_DT', 'P');
                    SYT_ChangeFldClass_New('R_LMT_DECISION_FLG', 'P');
                    SYT_ChangeFldClass_New('R_UTIL_REF', 'P');
                    document.MAINFORM.R_WEIG_PCT.value = 0;
                    EEHtml.fireEvent(document.MAINFORM.R_WEIG_PCT, "onchange");
                }
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.MPO_RISK_TAB_BY_FUNCTION = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) > 0) {
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'M');
            SYT_ChangeFldClass_New('R_LIAB_ACNO', 'M');
            SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'O');
        } else {
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO', 'O');
            SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'O');
        }
        switch (SYS_ORG_FUNCTION_NAME) {
            case 'IPLC_IssueLCOneStep':
            case 'IPLC_PayAcceptWithDiscount':
            case 'EXCO_Discount':
                SYT_ChangeFldClass_New('R_CUST_BK', 'M');
                SYT_ChangeFldClass_New('R_PARTY_ID', 'M');
                SYT_ChangeFldClass_New('RISK_ID_BTN', 'O');
                SYT_ChangeFldClass_New('R_PARTY_NM', 'M');
                SYT_ChangeFldClass_New('R_PARTY_CNTY', 'M');
                SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'M');
                SYT_ChangeFldClass_New('R_PARTY_ADD1', 'O');
                SYT_ChangeFldClass_New('R_PARTY_ADD2', 'O');
                SYT_ChangeFldClass_New('R_PARTY_ADD3', 'O');
                SYT_ChangeFldClass_New('R_ASSET_ACNO', 'O');
                SYT_ChangeFldClass_New('R_LIAB_ACNO', 'O');
                if (SYS_ORG_FUNCTION_NAME == 'EXCO_Discount') {
                    document.MAINFORM.R_PARTY_ID.value = document.MAINFORM.BENE_ID.value;
                    EEHtml.fireEvent(document.MAINFORM.R_PARTY_ID, 'onchange');
                }
                break;
            case 'IPLC_IssueLCAmendmentOneStep':
                SYT_ChangeFldClass_New('R_CUST_BK', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ID', 'P');
                SYT_ChangeFldClass_New('RISK_ID_BTN', 'P');
                SYT_ChangeFldClass_New('R_PARTY_NM', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD1', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD2', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD3', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY', 'P');
                SYT_ChangeFldClass_New('R_ASSET_ACNO', 'O');
                SYT_ChangeFldClass_New('R_LIAB_ACNO', 'O');
                break;
            case 'EPLC_AmendmentOneStep':
            case 'EPLC_Process_MT707_New':
            case 'EPLC_SettlePartialPayment':
            case 'EPLC_PayAtMaturity':
            case 'PrePayment':
            case 'PaymentDP':
            case 'SettlementDA':
            case 'IPLC_PaymentAtMaturity':
            case 'SettleClaim':
            case 'ProcessMT742':
            case 'EXCO_SettlementAtMaturity':
                SYT_ChangeFldClass_New('R_CUST_BK', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ID', 'P');
                SYT_ChangeFldClass_New('RISK_ID_BTN', 'P');
                SYT_ChangeFldClass_New('R_PARTY_NM', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD1', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD2', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD3', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY', 'P');
                SYT_ChangeFldClass_New('R_ASSET_ACNO', 'P');
                SYT_ChangeFldClass_New('R_LIAB_ACNO', 'P');
                SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'P');
                SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'P');
                break;
            case 'PROCESS_700701720':
                if (document.MAINFORM.OUR_ENG.value != "CONFIRMATION" && document.MAINFORM.OUR_ENG.value != "SILENT CONFIRMATION") {
                    SYT_ChangeFldClass_New('R_PARTY_ID', 'P');
                    SYT_ChangeFldClass_New('R_PARTY_NM', 'P');
                    SYT_ChangeFldClass_New('R_PARTY_ADD1', 'P');
                    SYT_ChangeFldClass_New('R_PARTY_ADD2', 'P');
                    SYT_ChangeFldClass_New('R_PARTY_ADD3', 'P');
                    SYT_ChangeFldClass_New('R_PARTY_CNTY', 'P');
                    SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'P');
                    document.MAINFORM.R_CUST_BK.value = '';
                    document.MAINFORM.R_PARTY_NM.value = "";
                    document.MAINFORM.R_PARTY_ADD1.value = "";
                    document.MAINFORM.R_PARTY_ADD2.value = "";
                    document.MAINFORM.R_PARTY_ADD3.value = "";
                    document.MAINFORM.R_PARTY_ADD3.value = "";
                    document.MAINFORM.R_PARTY_CNTY.value = "";
                    document.MAINFORM.R_PARTY_CNTY_NM.value = "";
                } else {
                    SYT_ChangeFldClass_New('R_PARTY_ID', 'M');
                    SYT_ChangeFldClass_New('R_PARTY_NM', 'M');
                    SYT_ChangeFldClass_New('R_PARTY_ADD1', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_ADD2', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_ADD3', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_CNTY', 'M');
                    SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'M');
                    document.MAINFORM.R_CUST_BK.value = 'Bank';
                    document.MAINFORM.R_PARTY_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                    document.MAINFORM.R_PARTY_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                    document.MAINFORM.R_PARTY_ADD1.value = document.MAINFORM.ISSUE_BK_ADD1.value;
                    document.MAINFORM.R_PARTY_ADD2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
                    document.MAINFORM.R_PARTY_ADD3.value = document.MAINFORM.ISSUE_BK_ADD3.value;
                    document.MAINFORM.R_PARTY_CNTY.value = document.MAINFORM.ISSUE_BK_CNTY.value;
                    EEHtml.fireEvent(document.MAINFORM.R_PARTY_CNTY, 'onchange');
                }
                break;
            case 'EPLC_PayAccept':
                SYT_ChangeFldClass_New('R_PARTY_ID', 'O');
                SYT_ChangeFldClass_New('R_PARTY_NM', 'O');
                SYT_ChangeFldClass_New('R_PARTY_ADD1', 'O');
                SYT_ChangeFldClass_New('R_PARTY_ADD2', 'O');
                SYT_ChangeFldClass_New('R_PARTY_ADD3', 'O');
                SYT_ChangeFldClass_New('R_PARTY_CNTY', 'O');
                SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'O');
                break;
            case 'CreateCollection':
                SYT_ChangeFldClass_New('R_PARTY_ID', 'P');
                SYT_ChangeFldClass_New('RISK_ID_BTN', 'P');
                SYT_ChangeFldClass_New('R_PARTY_NM', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD1', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD2', 'P');
                SYT_ChangeFldClass_New('R_PARTY_ADD3', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY', 'P');
                SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'P');
                if (document.MAINFORM.DELVR_DOC_AGST.value == "D/A and Aval" || document.MAINFORM.REL_IN_TRUST_FLG.value == "Yes") {
                    SYT_ChangeFldClass_New('R_PARTY_ID', 'O');
                    SYT_ChangeFldClass_New('RISK_ID_BTN', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_NM', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_ADD1', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_ADD2', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_ADD3', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_CNTY', 'O');
                    SYT_ChangeFldClass_New('R_PARTY_CNTY_NM', 'O');
                    document.MAINFORM.R_PARTY_ID.value = document.MAINFORM.DRWE_ID.value;
                    EEHtml.fireEvent(document.MAINFORM.R_PARTY_ID, 'onchange');
                }

                break;
            case 'ProcessMT740':
            case 'RegisterInstruction':
                if (document.MAINFORM.CONF_INSTR.value == 'Confirmed') {
                    SYT_ChangeFldClass(document.MAINFORM.R_CUST_BK, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ID, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_NM, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD1, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD2, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD3, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.R_WEIG_PCT, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_REQ, 'M');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.R_CUST_BK, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ID, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_NM, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD1, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD2, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD3, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_WEIG_PCT, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_REQ, 'P');
                }
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.RISK_PARTY_BUTTON = function() {
    try {
        if (document.MAINFORM.R_CUST_BK.value == "Customer") {
            Cal_RISK_PARTY_CUST();
        } else if (document.MAINFORM.R_CUST_BK.value == "Bank") {
            Cal_RISK_PARTY_BANK();
        } else {
            SYS_CheckError(document.MAINFORM.R_CUST_BK, "Please select Customer or Bank first!");
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.RISK_PARTY_ID_BTN = function() {
    try {
        if (document.MAINFORM.R_PARTY_ID_BTN.value == 'Bank') {
            SYS_GetCUBK('R_PARTY_ID_BANK', document.MAINFORM.R_PARTY_ID.name, 'Cal_R_PARTY_ID_CallBak');
        } else if (document.MAINFORM.R_PARTY_ID_BTN.value == 'Customer') {
            SYS_GetCUBK('R_PARTY_ID_CUST', document.MAINFORM.R_PARTY_ID.name, 'Cal_R_PARTY_ID_CallBak');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Reset_R_COLLAT_REQ = function() {
    try {
        if (document.MAINFORM.R_COLLAT_REQ.value == 'N') {
            document.MAINFORM.R_COLLAT_TP.value = '';
            document.MAINFORM.R_COLLAT_DTLS.value = '';
            document.MAINFORM.CASH_COV_HELD.value = 'No';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Save_Old_Value_Init = function() {
    try {
        document.MAINFORM.R_RISK_AMT_OLD.value = document.MAINFORM.R_RISK_AMT.value;
        document.MAINFORM.R_RISK_LMT_AMT_OLD.value = document.MAINFORM.R_RISK_LMT_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}

csLbiCompProto.Show_Hide_FIeld_By_Function = function() {
    try {
        var _Obj_1; // Utility Auto Fix Comments
        var _Obj_2; // Utility Auto Fix Comments
        var _Obj_3; // Utility Auto Fix Comments
        var _Obj_4; // Utility Auto Fix Comments
        var _Obj_5; // Utility Auto Fix Comments
        var _Obj_6; // Utility Auto Fix Comments
        var _Obj_7; // Utility Auto Fix Comments
        var _Obj_8; // Utility Auto Fix Comments
        switch (SYS_ORG_FUNCTION_NAME) {
            case "EPLC_Process_MT707_New":
            case "EPLC_AmendmentOneStep":
            case "EPLC_PayAccept":
            case "EPLC_PayAtMaturity":
            case "EPLC_Discount":
                _Obj_1 = EEHtml.getElementById('Bank Liability Account 2'); // Utility Auto Fix Comments
                _Obj_2 = EEHtml.getElementById('Customer Liability Account 2'); // Utility Auto Fix Comments
                _Obj_3 = EEHtml.getElementById('Cash Cover Change'); // Utility Auto Fix Comments
                _Obj_4 = EEHtml.getElementById('CASH_COVER_CHANGE'); // Utility Auto Fix Comments
                _Obj_5 = EEHtml.getElementById('Cash Cover Increase Amount'); // Utility Auto Fix Comments
                _Obj_6 = EEHtml.getElementById('CASH_COV_INC_AMT'); // Utility Auto Fix Comments
                _Obj_7 = EEHtml.getElementById('Cash Cover Decrease Amount'); // Utility Auto Fix Comments
                _Obj_8 = EEHtml.getElementById('CASH_COV_DEC_AMT'); // Utility Auto Fix Comments
                _Obj_1.style.display = 'block'; // Utility Auto Fix Comments
                _Obj_2.style.display = 'block'; // Utility Auto Fix Comments
                if (document.MAINFORM.CASH_COV_HELD.value == 'Yes' && (document.MAINFORM.R_RISK_AMT.value != document.MAINFORM.R_RISK_AMT_OLD.value || document.MAINFORM.R_RISK_LMT_AMT.value != document.MAINFORM.R_RISK_LMT_AMT_OLD.value)) {
                    _Obj_3.style.display = 'block'; // Utility Auto Fix Comments
                    _Obj_4.style.display = 'block'; // Utility Auto Fix Comments
                    SYT_ChangeFldClass_New('CASH_COVER_CHANGE', 'M');
                } else {
                    SYT_ChangeFldClass_New('CASH_COVER_CHANGE', 'O');
                    _Obj_4.value = ''; // Utility Auto Fix Comments
                    _Obj_6.value = ''; // Utility Auto Fix Comments
                    _Obj_8.value = ''; // Utility Auto Fix Comments
                    _Obj_3.style.display = 'none'; // Utility Auto Fix Comments
                    _Obj_4.style.display = 'none'; // Utility Auto Fix Comments
                    _Obj_5.style.display = 'none'; // Utility Auto Fix Comments
                    _Obj_6.style.display = 'none'; // Utility Auto Fix Comments
                    _Obj_7.style.display = 'none'; // Utility Auto Fix Comments
                    _Obj_8.style.display = 'none'; // Utility Auto Fix Comments
                }
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RiskCompliance.js", e);
    }
}