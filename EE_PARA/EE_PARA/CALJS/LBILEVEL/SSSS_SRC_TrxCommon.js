"path:SCRN/Library/COMMON/TrxCommon.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_CCY_Decimal = function(CCY) {
    try {
        var Decimal; // Utility Auto Fix Comments
        Decimal = '';
        if (CCY == "JPY") {
            Decimal = 0;
        } else if (CCY == "JOD" || CCY == 'BHD') {
            Decimal = 3;
        } else {
            Decimal = 2;
        }
        return Decimal;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_COMM_CODE_TRX_CCY_AMT = function() {
    try {
        var E_EPLC_ALLINFLAT_CHG_TRX_AMT; // Utility Auto Fix Comments
        var E_EPLC_COMBIN_1_CHG_TRX_AMT; // Utility Auto Fix Comments
        var E_EPLC_COMBIN_2_CHG_TRX_AMT; // Utility Auto Fix Comments
        var E_EPLC_CONFUTIL_CHG_TRX_AMT; // Utility Auto Fix Comments
        var E_EPLC_CONF_COMM_TRX_AMT; // Utility Auto Fix Comments
        var E_EPLC_UTIL_DEF_CHG_TRX_AMT; // Utility Auto Fix Comments
        var Obj_CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var Obj_EPLC_ALLINFLAT_CHG; // Utility Auto Fix Comments
        var Obj_EPLC_ALLINFLAT_CHG_Deferr; // Utility Auto Fix Comments
        var Obj_EPLC_COMBIN_1_CHG; // Utility Auto Fix Comments
        var Obj_EPLC_COMBIN_1_CHG_Deferr; // Utility Auto Fix Comments
        var Obj_EPLC_COMBIN_2_CHG; // Utility Auto Fix Comments
        var Obj_EPLC_COMBIN_2_CHG_Deferr; // Utility Auto Fix Comments
        var Obj_EPLC_CONFUTIL_CHG; // Utility Auto Fix Comments
        var Obj_EPLC_CONFUTIL_CHG_Deferr; // Utility Auto Fix Comments
        var Obj_EPLC_CONF_COMM; // Utility Auto Fix Comments
        var Obj_EPLC_CONF_COMM_Deferr; // Utility Auto Fix Comments
        var Obj_EPLC_UTIL_DEF_CHG; // Utility Auto Fix Comments
        var Obj_EPLC_UTIL_DEF_CHG_Deferr; // Utility Auto Fix Comments
        Obj_CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById('CHG_FLD_LOCAL_CUST_CCY');
        if (Obj_CHG_FLD_LOCAL_CUST_CCY) {
            return;
        }
        Obj_EPLC_CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        Obj_EPLC_CONF_COMM_Deferr = Chg.Screen.getDefChargeByCommCode('EPLC_CONF_COMM');

        Obj_EPLC_COMBIN_1_CHG = Chg.Screen.getTrxChargeByCommCode('EPLC_COMBIN_1_CHG');
        Obj_EPLC_COMBIN_1_CHG_Deferr = Chg.Screen.getDefChargeByCommCode('EPLC_COMBIN_1_CHG');

        Obj_EPLC_ALLINFLAT_CHG = Chg.Screen.getTrxChargeByCommCode('EPLC_ALLINFLAT_CHG');
        Obj_EPLC_ALLINFLAT_CHG_Deferr = Chg.Screen.getDefChargeByCommCode('EPLC_ALLINFLAT_CHG');

        Obj_EPLC_UTIL_DEF_CHG = Chg.Screen.getTrxChargeByCommCode('EPLC_UTIL_DEF_CHG');
        Obj_EPLC_UTIL_DEF_CHG_Deferr = Chg.Screen.getDefChargeByCommCode('EPLC_UTIL_DEF_CHG');

        Obj_EPLC_COMBIN_2_CHG = Chg.Screen.getTrxChargeByCommCode('EPLC_COMBIN_2_CHG');
        Obj_EPLC_COMBIN_2_CHG_Deferr = Chg.Screen.getDefChargeByCommCode('EPLC_COMBIN_2_CHG');

        Obj_EPLC_CONFUTIL_CHG = Chg.Screen.getTrxChargeByCommCode('EPLC_CONFUTIL_CHG');
        Obj_EPLC_CONFUTIL_CHG_Deferr = Chg.Screen.getDefChargeByCommCode('EPLC_CONFUTIL_CHG');

        E_EPLC_CONF_COMM_TRX_AMT = 0;
        E_EPLC_COMBIN_1_CHG_TRX_AMT = 0;
        E_EPLC_ALLINFLAT_CHG_TRX_AMT = 0;
        E_EPLC_UTIL_DEF_CHG_TRX_AMT = 0;
        E_EPLC_COMBIN_2_CHG_TRX_AMT = 0;
        E_EPLC_CONFUTIL_CHG_TRX_AMT = 0;

        if (Obj_EPLC_CONF_COMM) {
            E_EPLC_CONF_COMM_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Obj_EPLC_CONF_COMM.getBalAmt());
        }

        if (Obj_EPLC_CONF_COMM_Deferr) {
            E_EPLC_CONF_COMM_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_EPLC_CONF_COMM_TRX_AMT) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_CONF_COMM')));
        }

        if (Obj_EPLC_COMBIN_1_CHG) {
            E_EPLC_COMBIN_1_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Obj_EPLC_COMBIN_1_CHG.getBalAmt());
        }

        if (Obj_EPLC_COMBIN_1_CHG_Deferr) {
            E_EPLC_COMBIN_1_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_EPLC_COMBIN_1_CHG_TRX_AMT) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_COMBIN_1_CHG')));
        }

        if (Obj_EPLC_ALLINFLAT_CHG) {
            E_EPLC_ALLINFLAT_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Obj_EPLC_ALLINFLAT_CHG.getBalAmt());
        }
        if (Obj_EPLC_ALLINFLAT_CHG_Deferr) {
            E_EPLC_ALLINFLAT_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_EPLC_ALLINFLAT_CHG_TRX_AMT) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_ALLINFLAT_CHG')));
        }

        if (Obj_EPLC_UTIL_DEF_CHG) {
            E_EPLC_UTIL_DEF_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Obj_EPLC_UTIL_DEF_CHG.getBalAmt());
        }

        if (Obj_EPLC_UTIL_DEF_CHG_Deferr) {
            E_EPLC_UTIL_DEF_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_EPLC_UTIL_DEF_CHG_TRX_AMT) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_UTIL_DEF_CHG')));
        }

        if (Obj_EPLC_COMBIN_2_CHG) {
            E_EPLC_COMBIN_2_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Obj_EPLC_COMBIN_2_CHG.getBalAmt());
        }

        if (Obj_EPLC_COMBIN_2_CHG_Deferr) {
            E_EPLC_COMBIN_2_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_EPLC_COMBIN_2_CHG_TRX_AMT) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_COMBIN_2_CHG')));
        }

        if (Obj_EPLC_CONFUTIL_CHG) {
            E_EPLC_CONFUTIL_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Obj_EPLC_CONFUTIL_CHG.getBalAmt());
        }

        if (Obj_EPLC_CONFUTIL_CHG_Deferr) {
            E_EPLC_CONFUTIL_CHG_TRX_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_EPLC_CONFUTIL_CHG_TRX_AMT) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_CONFUTIL_CHG')));
        }

        if (SYS_BeFloat(E_EPLC_CONF_COMM_TRX_AMT) != 0) {
            document.MAINFORM.E_EPLC_CONF_COMM_TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_EPLC_CONF_COMM_TRX_AMT);
        }
        if (SYS_BeFloat(E_EPLC_COMBIN_1_CHG_TRX_AMT) != 0) {
            document.MAINFORM.E_EPLC_COMBIN_1_CHG_TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_EPLC_COMBIN_1_CHG_TRX_AMT);
        }
        if (SYS_BeFloat(E_EPLC_ALLINFLAT_CHG_TRX_AMT) != 0) {
            document.MAINFORM.E_EPLC_ALLINFLAT_CHG_TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_EPLC_ALLINFLAT_CHG_TRX_AMT);
        }
        if (SYS_BeFloat(E_EPLC_UTIL_DEF_CHG_TRX_AMT) != 0) {
            document.MAINFORM.E_EPLC_UTIL_DEF_CHG_TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_EPLC_UTIL_DEF_CHG_TRX_AMT);
        }
        if (SYS_BeFloat(E_EPLC_COMBIN_2_CHG_TRX_AMT) != 0) {
            document.MAINFORM.E_EPLC_COMBIN_2_CHG_TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_EPLC_COMBIN_2_CHG_TRX_AMT);
        }
        if (SYS_BeFloat(E_EPLC_CONFUTIL_CHG_TRX_AMT) != 0) {
            document.MAINFORM.E_EPLC_CONFUTIL_CHG_TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_EPLC_CONFUTIL_CHG_TRX_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_MSG_TYPE = function() {
    try {
        switch (SYS_ORG_FUNCTION_NAME) {
            case 'EPLC_AdviseLC':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.001.ExptLcAdv';
                break;
            case 'EPLC_AdviseLCOneStep':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.001.ExptLcAdv';
                break;
            case 'EPLC_ProcessMT700MT710MT720':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.001.ExptLcAdv';
                break;
            case 'EPLC_AdviseAmendment':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.002.Amdmnt';
                break;
            case 'EPLC_BeneAcceptsRejectsAmend':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.004.Amded';
                break;
            case 'EPLC_CheckDocuments':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.005.DocPrestin';
                break;
            case 'EPLC_PayAccept':
                document.MAINFORM.MSG_TYPE.value = 'EXLC.008.Stl';
                break;
            case 'EXCO_CreateCollection_FromCE':
                document.MAINFORM.MSG_TYPE.value = 'EXCO.002.ExptCollIsse';
                break;
            case 'EXCO_AmendorDischarge':
                document.MAINFORM.MSG_TYPE.value = 'EXCO.004.Amd';
                break;
            case 'EXCO_Payment':
                document.MAINFORM.MSG_TYPE.value = 'EXCO.006.PmtAdv';
                break;
            case 'EXCO_Process400':
                document.MAINFORM.MSG_TYPE.value = 'EXCO.006.PmtAdv';
                break;
            case 'CreateCollection':
                document.MAINFORM.MSG_TYPE.value = 'IMCO.001.ImpColl';
                break;
            case 'AmendDischarge':
                document.MAINFORM.MSG_TYPE.value = 'IMCO.002.Amd';
                break;
            case 'Acceptance':
                document.MAINFORM.MSG_TYPE.value = 'IMCO.003.Acpt';
                break;
            case 'PaymentDP':
                document.MAINFORM.MSG_TYPE.value = 'IMCO.005.Sttlm';
                break;
            case 'SettlementDA':
                document.MAINFORM.MSG_TYPE.value = 'IMCO.005.Sttlm';
                break;

            case 'GTEE_ReviewLCFromCE':
                document.MAINFORM.MSG_TYPE.value = 'OWGT.002.BkDesinOnGteeApplctn';
                break;
            case 'RegisterOutward':
                document.MAINFORM.MSG_TYPE.value = 'OWGT.004.GteeIsse';
                break;
            case 'GTEE_ReceiveAmtFixPendingFormCE':
                document.MAINFORM.MSG_TYPE.value = 'OWGT.006.BkDesinOnAmd';
                break;
            case 'AmendOutwardOneStep':
                document.MAINFORM.MSG_TYPE.value = 'OWGT.008.Amd';
                break;
            case 'OutwardClaimRegister':
                document.MAINFORM.MSG_TYPE.value = 'OWGT.011.Clm';
                break;
            case 'OutwardClaimSettlement':
                document.MAINFORM.MSG_TYPE.value = 'OWGT.013.Sttlm';
                break;
            case 'AdviseGuarantee':
                document.MAINFORM.MSG_TYPE.value = 'IWGT.001.GteeAdv';
                break;
            case 'AdviseInwardAmend':
                document.MAINFORM.MSG_TYPE.value = 'IWGT.002.AmdAdv';
                break;
            case 'ApplyRejectInwardAmend':
                document.MAINFORM.MSG_TYPE.value = 'IWGT.004.Amd';
                break;
            case 'SettleInwClaim':
                document.MAINFORM.MSG_TYPE.value = 'IWGT.006.Sttlm';
                break;
            case 'IPLC_ReviewLCFromCE':
                document.MAINFORM.MSG_TYPE.value = 'IMLC.002.BkDesinOnImpLc';
                break;
            case 'IPLC_IssueLC':
                document.MAINFORM.MSG_TYPE.value = 'IMLC.004.ImpLcIsse';
                break;
            case 'IPLC_ReceiveAmtFixPendingFormCE':
                document.MAINFORM.MSG_TYPE.value = 'IMLC.006.BkDesinAmd';
                break;
            case 'IPLC_RegisterLCAmendment':
                if (document.MAINFORM.DETRMNTL_FLG.value == 'No') {
                    document.MAINFORM.MSG_TYPE.value = 'IMLC.008.Amd';
                }
                if (document.MAINFORM.DETRMNTL_FLG.value == 'Yes') {
                    document.MAINFORM.MSG_TYPE.value = 'IMLC.009.BnfcryConsent';
                }
                break;
            case 'IPLC_BeneficiaryResponseToAmd':
                if (document.MAINFORM.BENE_CONS_FLG.value == 'Rejected') {
                    document.MAINFORM.MSG_TYPE.value = 'IMLC.010.BnfcryDesin';
                } else {
                    document.MAINFORM.MSG_TYPE.value = 'IMLC.008.Amd';
                }
                break;
            case 'IPLC_DocumentRegister':
                document.MAINFORM.MSG_TYPE.value = 'IMLC.011.DocPres';
                break;
            case 'IPLC_DocumentCheck':
                document.MAINFORM.MSG_TYPE.value = 'IMLC.012.DiscrpcsNtfctn';
                break;
            case 'IPLC_PayAcceptWithDiscount':
                document.MAINFORM.MSG_TYPE.value = 'IMLC.015.PmtAdv';
                break;

                /*
     case 'SettlementDA':
       document.MAINFORM.MSG_TYPE.value='IMCO.006.NonPmtAcpt';
       break;
*/
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_eloan_fields = function() {
    try {
        var BENE_ID; // Utility Auto Fix Comments
        var CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var Do_Obj; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE_ACCEPT; // Utility Auto Fix Comments
        var E_CCY_DECIMAL_value; // Utility Auto Fix Comments
        var E_DEFERRED_PAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_DEFERRED_PAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var E_IA_C_DIS_CUSTCCY; // Utility Auto Fix Comments
        var E_IA_Y_EQVL_INT; // Utility Auto Fix Comments
        var E_IA_Y_EQVL_INT_ACCEPT; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_AMT; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_AMT_value; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_CCY; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_CCY_value; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_FEE_AMT; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_FEE_AMT_TEMP_1; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_FEE_AMT_TEMP_2; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_FEE_AMT_TEMP_3; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_FEE_AMT_TEMP_4; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var E_REF_NO; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_AMT; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_AMT_value; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_CCY; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_CCY_value; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_FEE_AMT; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var ISSUE_BK_ID; // Utility Auto Fix Comments
        var OUR_ENG; // Utility Auto Fix Comments
        var Obj_CFNC_C_TYPE; // Utility Auto Fix Comments
        var Obj_CFNC_D_DUE_DT; // Utility Auto Fix Comments
        var Obj_CFNC_N_LIBOR_RT; // Utility Auto Fix Comments
        var Obj_DEF_CHG_EPLC_UTIL_DEF_CHG; // Utility Auto Fix Comments
        var Obj_DISCNT_FLG; // Utility Auto Fix Comments
        var Obj_EPLC_UTIL_DEF_CHG_temp; // Utility Auto Fix Comments
        var Object_EPLC_CONF_COMM; // Utility Auto Fix Comments
        var Object_EPLC_CONF_COMM_ChargeAt; // Utility Auto Fix Comments
        var Object_EPLC_CONF_COMM_ChargeFor; // Utility Auto Fix Comments
        var Object_EPLC_CONF_COMM_DEF; // Utility Auto Fix Comments
        var Object_EPLC_UTIL_DEF_CHG; // Utility Auto Fix Comments
        var Object_EPLC_UTIL_DEF_CHG_ChargeAt; // Utility Auto Fix Comments
        var Object_EPLC_UTIL_DEF_CHG_ChargeFor; // Utility Auto Fix Comments
        var Object_EPLC_UTIL_DEF_CHG_DEF; // Utility Auto Fix Comments
        var TRX_CCY_AMT_DEF; // Utility Auto Fix Comments
        var TRX_CCY_AMT_DEF_ACCEPT; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'EPLC') {
            return true;
        }

        Cal_COMM_CODE_TRX_CCY_AMT();






        Object_EPLC_CONF_COMM_ChargeFor = "";
        Object_EPLC_CONF_COMM_ChargeAt = "";
        Object_EPLC_UTIL_DEF_CHG_ChargeFor = "";
        Object_EPLC_UTIL_DEF_CHG_ChargeAt = "";

        E_CCY_DECIMAL_value = "";

        BENE_ID = EEHtml.getElementById("BENE_ID");
        ISSUE_BK_ID = EEHtml.getElementById("ISSUE_BK_ID");

        CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById("CHG_FLD_LOCAL_CUST_CCY");

        E_UNPAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_AMT");
        E_UNPAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_CCY");
        E_PAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_PAID_CONFIRM_COMM_AMT");
        E_PAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_PAID_CONFIRM_COMM_CCY");

        E_UNPAID_ACCEPT_COMM_AMT = EEHtml.getElementById("E_UNPAID_ACCEPT_COMM_AMT");
        E_UNPAID_ACCEPT_COMM_CCY = EEHtml.getElementById("E_UNPAID_ACCEPT_COMM_CCY");
        E_PAID_ACCEPT_COMM_AMT = EEHtml.getElementById("E_PAID_ACCEPT_COMM_AMT");
        E_PAID_ACCEPT_COMM_CCY = EEHtml.getElementById("E_PAID_ACCEPT_COMM_CCY");

        OUR_ENG = EEHtml.getElementById("OUR_ENG");
        E_ACCOUNT_TYPE = EEHtml.getElementById("E_ACCOUNT_TYPE");
        E_ACCOUNT_TYPE_ACCEPT = EEHtml.getElementById("E_ACCOUNT_TYPE_ACCEPT");

        E_UNPAID_CONFIRM_COMM_AMT_value = 0;
        E_PAID_CONFIRM_COMM_AMT_value = 0;
        E_UNPAID_CONFIRM_COMM_CCY_value = "";
        E_PAID_CONFIRM_COMM_CCY_value = "";

        E_UNPAID_ACCEPT_COMM_AMT_value = 0;
        E_PAID_ACCEPT_COMM_AMT_value = 0;
        E_UNPAID_ACCEPT_COMM_CCY_value = "";
        E_PAID_ACCEPT_COMM_CCY_value = "";

        E_IA_C_DIS_CUSTCCY = "";
        E_IA_Y_EQVL_INT = 0;

        Object_EPLC_CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        Object_EPLC_CONF_COMM_DEF = Chg.Screen.getDefChargeByCommCode('EPLC_CONF_COMM');

        Object_EPLC_UTIL_DEF_CHG = Chg.Screen.getTrxChargeByCommCode('EPLC_UTIL_DEF_CHG');
        Object_EPLC_UTIL_DEF_CHG_DEF = Chg.Screen.getDefChargeByCommCode('EPLC_UTIL_DEF_CHG');



        /*Cal Commission Fee Start*/
        //Object_EPLC_CONF_COMM 
        if (Object_EPLC_CONF_COMM) {
            Object_EPLC_CONF_COMM_ChargeFor = Object_EPLC_CONF_COMM.getChargeFor();
            Object_EPLC_CONF_COMM_ChargeAt = Object_EPLC_CONF_COMM.getChargeAt();

            /*Cal Unpaid Confirmation Fee S*/
            if (SYS_BeFloat(Object_EPLC_CONF_COMM.getBalAmt()) > 0) {
                E_UNPAID_CONFIRM_COMM_CCY_value = Object_EPLC_CONF_COMM.getBalCcy();
                E_UNPAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_UNPAID_CONFIRM_COMM_CCY_value, Object_EPLC_CONF_COMM.getBalAmt());
            }
            /*Cal Unpaid Confirmation Fee E*/

            /*Cal Paid Confirmation Fee S*/
            if (SYS_BeFloat(Object_EPLC_CONF_COMM.getPayAmt()) > 0) {
                E_PAID_CONFIRM_COMM_CCY_value = Object_EPLC_CONF_COMM.getPayCcy();
                E_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_PAID_CONFIRM_COMM_CCY_value, Object_EPLC_CONF_COMM.getPayAmt());
            }
            /*Cal Paid Confirmation Fee E*/
        }


        if (Object_EPLC_UTIL_DEF_CHG) {
            Object_EPLC_UTIL_DEF_CHG_ChargeFor = Object_EPLC_UTIL_DEF_CHG.getChargeFor();
            Object_EPLC_UTIL_DEF_CHG_ChargeAt = Object_EPLC_UTIL_DEF_CHG.getChargeAt();

            if (SYS_BeFloat(Object_EPLC_UTIL_DEF_CHG.getBalAmt()) > 0) {
                E_UNPAID_ACCEPT_COMM_CCY_value = Object_EPLC_UTIL_DEF_CHG.getBalCcy();
                E_UNPAID_ACCEPT_COMM_AMT_value = SYT_AmtFormat(E_UNPAID_ACCEPT_COMM_CCY_value, Object_EPLC_UTIL_DEF_CHG.getBalAmt());
            }
            if (SYS_BeFloat(Object_EPLC_UTIL_DEF_CHG.getPayAmt()) > 0) {
                E_PAID_ACCEPT_COMM_CCY_value = Object_EPLC_UTIL_DEF_CHG.getPayCcy();
                E_PAID_ACCEPT_COMM_AMT_value = SYT_AmtFormat(E_PAID_ACCEPT_COMM_CCY_value, Object_EPLC_UTIL_DEF_CHG.getPayAmt());
            }

        }


        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;

        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;

        /*Cal E_BORROWER_ID start */
        if (Object_EPLC_CONF_COMM_ChargeFor == "L") {
            if (BENE_ID) {
                document.MAINFORM.E_BORROWER_ID.value = BENE_ID.value;
            }
        }
        /*Cal E_BORROWER_ID end */

        /*Cal E_ACCOUNT_TYPE start*/
        E_ACCOUNT_TYPE.value = "AC1";
        /*Cal E_ACCOUNT_TYPE end*/

        /*Cal E_ACCOUNT_TYPE_ACCEPT start*/
        E_ACCOUNT_TYPE_ACCEPT.value = "AC5";
        /*Cal E_ACCOUNT_TYPE_ACCEPT end*/

        /*Cal E_DUE_DATE,E_UNPAID_CONFIRM_COMM_CCY_value in functions EPLC_PayAccept start*/
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept') {
            E_PAID_CONFIRM_COMM_CCY.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
            E_CCY_DECIMAL_value = Cal_CCY_Decimal(E_PAID_CONFIRM_COMM_CCY.value);

            if (document.MAINFORM.AVAL_BY.value != 'BY MIXED PYMT') {
                if (document.MAINFORM.INDIVID_DRAW_FLG.value != 'No') {
                    if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT' || (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION' && document.MAINFORM.PMT_FLG.value == 'SIGHT')) {
                        document.MAINFORM.E_DUE_DATE.value = document.MAINFORM.EXPIRY_DT.value;
                    } else {
                        if (document.MAINFORM.EXPIRY_DT.value == "" || !SYS_Day1MustbeLaterThanDay2('EXPIRY_DT', 'TRX_DT')) {
                            alert('Please input the correct Drawing Commission Calculation To Date of Charge Tab');
                            return false;
                        }
                        document.MAINFORM.E_DUE_DATE.value = document.MAINFORM.EXPIRY_DT.value;
                    }
                }
            }

            if (E_UNPAID_CONFIRM_COMM_AMT_value > 0) {
                E_UNPAID_CONFIRM_COMM_CCY_value = document.MAINFORM.LC_CCY.value;
            }
            if (E_PAID_CONFIRM_COMM_CCY_value > 0) {
                E_UNPAID_CONFIRM_COMM_CCY_value = E_PAID_CONFIRM_COMM_CCY_value;
            }

            if (E_UNPAID_ACCEPT_COMM_AMT_value > 0) {
                E_UNPAID_ACCEPT_COMM_CCY_value = document.MAINFORM.LC_CCY.value;
            }
            if (E_PAID_ACCEPT_COMM_AMT_value > 0) {
                E_UNPAID_ACCEPT_COMM_CCY_value = E_PAID_ACCEPT_COMM_CCY_value;
            }
        }
        /*Cal E_DUE_DATE,E_UNPAID_CONFIRM_COMM_CCY_value in functions EPLC_PayAccept end*/

        /*Cal E_REF_NO start*/
        E_REF_NO = EEHtml.getElementById("E_REF_NO");
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment') {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
            E_REF_NO.value = document.MAINFORM.DRAWING_REF.value + targetDo[0].getDoValueByName('CPYT_I_TENOR_DAYS');
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_NoteAdditionalCharges') {
            E_REF_NO.value = document.MAINFORM.C_MAIN_REF.value + "A";
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_SendDocuments') {
            targetDo = SYS_GetObjByDoName("PaymentSchedule"); // Utility Auto Fix Comments
            E_REF_NO.value = document.MAINFORM.DRAWING_REF.value + targetDo[0].getDoValueByName('CPYT_I_TENOR_DAYS');
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept') {
            targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
            E_REF_NO.value = document.MAINFORM.DRAWING_REF.value + targetDo[0].getDoValueByName('CPYT_I_TENOR_DAYS');
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity') {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
            E_REF_NO.value = document.MAINFORM.DRAWING_REF.value + targetDo[0].getDoValueByName('CPYT_I_TENOR_DAYS');
        }
        /*Cal E_REF_NO end*/

        /*Cal E_PAID_CONFIRM_COMM_AMT_value start*/
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'MixedPayComm') {
            if ((document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT' || document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION' && document.MAINFORM.PMT_FLG.value == 'SIGHT'))) {
                if (Object_EPLC_CONF_COMM_DEF) {
                    E_PAID_CONFIRM_COMM_CCY_value = Object_EPLC_CONF_COMM_DEF[0].getPayCcy();
                    E_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_PAID_CONFIRM_COMM_CCY_value, SYS_BeFloat(Object_EPLC_CONF_COMM_DEF[0].getPayAmt()));
                }
            }
        }
        /*Cal E_PAID_CONFIRM_COMM_AMT_value end*/

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_AddConfirmation') {
            SYS_GetTableDataByRule_S('SSSS_SRC_TrxCommon_Cal_eloan_fields_0', '1', true);
        }

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept') {
            SYS_GetTableDataByRule_S('SSSS_SRC_TrxCommon_Cal_eloan_fields_1', '1', true);
        }

        E_UNPAID_CONFIRM_COMM_AMT.value = E_UNPAID_CONFIRM_COMM_AMT_value;
        E_PAID_CONFIRM_COMM_AMT.value = E_PAID_CONFIRM_COMM_AMT_value;
        E_UNPAID_CONFIRM_COMM_CCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
        E_PAID_CONFIRM_COMM_CCY.value = E_PAID_CONFIRM_COMM_CCY_value;

        E_DEFERRED_PAID_CONFIRM_COMM_CCY_value = "";
        E_DEFERRED_PAID_CONFIRM_COMM_AMT_value = 0;
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept') {
            E_DEFERRED_PAID_CONFIRM_COMM_CCY_value = document.MAINFORM.LC_CCY.value;
            if (Object_EPLC_CONF_COMM) {
                E_DEFERRED_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_DEFERRED_PAID_CONFIRM_COMM_CCY_value, SYS_BeFloat(Object_EPLC_CONF_COMM.getPayAmt()));
            }
        }
        document.MAINFORM.E_DEFERRED_PAID_CONFIRM_COMM_CCY.value = E_DEFERRED_PAID_CONFIRM_COMM_CCY_value;
        document.MAINFORM.E_DEFERRED_PAID_CONFIRM_COMM_AMT.value = E_DEFERRED_PAID_CONFIRM_COMM_AMT_value;


        /*Cal E_IA_C_DIS_LOCALCCY,E_IA_Y_PAID_INT start E_UNPAID_CONFIRM_COMM_CCY_value=TRX_CCY*/

        if (E_UNPAID_CONFIRM_COMM_CCY_value == "" && E_PAID_CONFIRM_COMM_CCY_value == "") {
            document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.LC_CCY.value;
        } else {
            if (E_UNPAID_CONFIRM_COMM_CCY_value != "" && E_PAID_CONFIRM_COMM_CCY_value != "") {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
            } else {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value + E_PAID_CONFIRM_COMM_CCY_value;
            }
        }
        document.MAINFORM.E_IA_Y_PAID_INT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value));

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLC' || SYS_ORG_FUNCTION_NAME == 'EPLC_AddConfirmation' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLCOneStep' || SYS_ORG_FUNCTION_NAME == 'PROCESS_700701720') {
            document.MAINFORM.E_IA_Y_PAID_INT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value) + SYS_BeFloat(E_PAID_CONFIRM_COMM_AMT_value));
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'MixedPayComm') {
            document.MAINFORM.E_IA_Y_PAID_INT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value) + SYS_BeFloat(E_PAID_CONFIRM_COMM_AMT_value));
        }

        /*Cal E_IA_C_DIS_LOCALCCY,E_IA_Y_PAID_INT end*/

        E_IA_C_DIS_CUSTCCY = E_PAID_CONFIRM_COMM_CCY_value + E_UNPAID_CONFIRM_COMM_CCY_value;

        /*Cal transaction CCY amount of E_EPLC_CONF_COMM_TRX_AMT,E_EPLC_COMBIN_1_CHG_TRX_AMT,E_EPLC_ALLINFLAT_CHG_TRX_AMT use for eloan field IA_Y_EQVL_INT*/
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'MixedPayComm' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity' || SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettleCharges') {
            TRX_CCY_AMT_DEF = SYS_BeFloat(document.MAINFORM.E_EPLC_CONF_COMM_TRX_AMT.value) + SYS_BeFloat(document.MAINFORM.E_EPLC_COMBIN_1_CHG_TRX_AMT.value) + SYS_BeFloat(document.MAINFORM.E_EPLC_ALLINFLAT_CHG_TRX_AMT.value) + SYS_BeFloat(document.MAINFORM.E_EPLC_CONFUTIL_CHG_TRX_AMT.value);
            if (Object_EPLC_UTIL_DEF_CHG) {
                if (SYS_BeFloat(Object_EPLC_UTIL_DEF_CHG.getPayAmt()) > 0 && (document.MAINFORM.TENOR_DAYS.value == 0 || document.MAINFORM.TENOR_DAYS.value == "")) {
                    E_IA_Y_EQVL_INT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_PAID_CONFIRM_COMM_AMT_value);
                } else {
                    E_IA_Y_EQVL_INT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TRX_CCY_AMT_DEF);
                }
            } else {
                E_IA_Y_EQVL_INT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TRX_CCY_AMT_DEF);
            }
        }

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'MixedPayComm' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettleCharges' || SYS_ORG_FUNCTION_NAME == 'EPLC_Discount') {
            if (Object_EPLC_CONF_COMM) {
                if (SYS_BeFloat(Object_EPLC_CONF_COMM.getPayAmt()) > 0) {
                    if (Object_EPLC_CONF_COMM.getBalCcy() == Object_EPLC_CONF_COMM.getPayCcy()) {
                        E_IA_Y_EQVL_INT = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, SYS_BeFloat(CHG_CalDeferrCommcodePayTotalAmt(Object_EPLC_CONF_COMM.getCommCode())));
                    }
                }
            }
        }

        document.MAINFORM.E_IA_C_DIS_CUSTCCY.value = E_IA_C_DIS_CUSTCCY;
        document.MAINFORM.E_IA_Y_EQVL_INT.value = SYT_AmtFormat(document.MAINFORM.E_IA_C_DIS_CUSTCCY.value, E_IA_Y_EQVL_INT);

        /*cal E_IA_C_DIS_CUSTCCY,E_IA_Y_EQVL_INT End*/

        /*Cal transaction CCY amount of E_EPLC_UTIL_DEF_CHG_TRX_AMT,E_EPLC_COMBIN_2_CHG_TRX_AMT use for eloan field E_IA_Y_EQVL_INT_ACCEPT*/
        E_IA_Y_EQVL_INT_ACCEPT = 0;
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity' || SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettleCharges') {
            TRX_CCY_AMT_DEF_ACCEPT = SYS_BeFloat(document.MAINFORM.E_EPLC_UTIL_DEF_CHG_TRX_AMT.value) + SYS_BeFloat(document.MAINFORM.E_EPLC_COMBIN_2_CHG_TRX_AMT.value);
            E_IA_Y_EQVL_INT_ACCEPT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TRX_CCY_AMT_DEF_ACCEPT);
        }
        document.MAINFORM.E_IA_Y_EQVL_INT_ACCEPT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, E_IA_Y_EQVL_INT_ACCEPT);
        /*cal E_IA_Y_EQVL_INT_ACCEPT End*/

        /*Cal Acceptance Fee*/
        E_UNPAID_ACCEPT_FEE_AMT = 0;
        E_PAID_ACCEPT_FEE_AMT = 0;
        E_PAID_ACCEPT_FEE_AMT_TEMP_1 = 0;
        E_PAID_ACCEPT_FEE_AMT_TEMP_2 = 0;
        E_PAID_ACCEPT_FEE_AMT_TEMP_3 = 0;
        E_PAID_ACCEPT_FEE_AMT_TEMP_4 = 0;
        Obj_DEF_CHG_EPLC_UTIL_DEF_CHG = Chg.Screen.getDefChargeByCommCode('EPLC_UTIL_DEF_CHG');
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'MixedPayComm') {
            E_UNPAID_ACCEPT_FEE_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_ACCEPT_COMM_AMT_value) + SYS_BeFloat(E_PAID_ACCEPT_COMM_AMT_value));
            E_PAID_ACCEPT_FEE_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_PAID_ACCEPT_COMM_AMT_value));
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity') {
            if (Obj_DEF_CHG_EPLC_UTIL_DEF_CHG) {
                E_PAID_ACCEPT_FEE_AMT_TEMP_1 = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, SYS_BeFloat(CHG_CalDeferrCommcodePayTotalAmt('EPLC_UTIL_DEF_CHG')));
            }
            E_PAID_ACCEPT_FEE_AMT = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, SYS_BeFloat(E_PAID_ACCEPT_FEE_AMT_TEMP_1) + SYS_BeFloat(E_PAID_ACCEPT_FEE_AMT_TEMP_2));
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_SendDocuments') {
            E_UNPAID_ACCEPT_FEE_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_ACCEPT_COMM_AMT_value));
        }

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_NoteAdditionalCharges') {
            E_UNPAID_ACCEPT_FEE_AMT = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_PAID_ACCEPT_COMM_AMT_value) + SYS_BeFloat(E_UNPAID_ACCEPT_COMM_AMT_value));
        }

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettleCharges' || SYS_ORG_FUNCTION_NAME == 'EPLC_Discount') {

            if (Obj_DEF_CHG_EPLC_UTIL_DEF_CHG) {
                E_PAID_ACCEPT_FEE_AMT_TEMP_1 = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, SYS_BeFloat(CHG_CalDeferrCommcodePayTotalAmt('EPLC_UTIL_DEF_CHG')) + SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('EPLC_UTIL_DEF_CHG')));
            }
            E_PAID_ACCEPT_FEE_AMT = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, SYS_BeFloat(E_PAID_ACCEPT_FEE_AMT_TEMP_1));

        }

        /*Check EXPIRY_DT value in functions MixedPayComm  Start
if(SYS_ORG_FUNCTION_NAME== 'MixedPayComm'){
if(E_UNPAID_ACCEPT_FEE_AMT > 0){
if(document.MAINFORM.EXPIRY_DT.value== "" || !SYS_Day1MustbeLaterThanDay2('EXPIRY_DT','TRX_DT')){
	alert('Please input the correct Drawing Commission Calculation To Date of Charge Tab');
	return false;
	}
 }
}
Check EXPIRY_DT value in functions MixedPayComm  End*/

        E_UNPAID_ACCEPT_COMM_CCY.value = document.MAINFORM.LC_CCY.value;
        E_UNPAID_ACCEPT_COMM_AMT.value = SYT_AmtFormat(E_UNPAID_ACCEPT_COMM_CCY.value, E_UNPAID_ACCEPT_FEE_AMT);
        E_PAID_ACCEPT_COMM_CCY.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        E_PAID_ACCEPT_COMM_AMT.value = SYT_AmtFormat(E_PAID_ACCEPT_COMM_CCY.value, E_PAID_ACCEPT_FEE_AMT);


        document.MAINFORM.E_CCY_DECIMAL.value = E_CCY_DECIMAL_value;

        /*For Testing E_TRX_DT START */
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'MixedPayComm' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseAmendment' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_ProcessMT707' || SYS_ORG_FUNCTION_NAME == 'EPLC_BeneAcceptsRejectsAmend' || SYS_ORG_FUNCTION_NAME == 'EPLC_NoteAdditionalCharges' || SYS_ORG_FUNCTION_NAME == 'EPLC_SendDocuments' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment' || SYS_ORG_FUNCTION_NAME == 'EPLC_SettleCharges' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAcceptFrCE' || SYS_ORG_FUNCTION_NAME == 'EPLC_PaymentAtMaturityFrCE') {
            document.MAINFORM.E_TRX_DT.value = document.MAINFORM.TRX_DT.value;
        }
        /*For Testing E_TRX_DT END*/
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_NoteAdditionalCharges') {
            SYS_GetTableDataByRule_S('SSSS_SRC_TrxCommon_Cal_eloan_fields_2', '1', true);
        }

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity' || SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendFinanceDate') {
            document.MAINFORM.E_C_REF_NO_C_IN.value = document.MAINFORM.CFNC_C_RELT_REF.value + "C";
        }


        if (SYS_ORG_FUNCTION_NAME == 'EPLC_SendDocuments') {
            if (E_UNPAID_CONFIRM_COMM_AMT_value > 0 && ((document.MAINFORM.AVAL_BY.value == "BY NEGOTIATION" && document.MAINFORM.PMT_FLG.value != "SIGHT") || (document.MAINFORM.AVAL_BY.value != "BY PAYMENT" && document.MAINFORM.AVAL_BY.value != "BY NEGOTIATION"))) {
                if (document.MAINFORM.EXPIRY_DT.value == "" || !SYS_Day1MustbeLaterThanDay2('EXPIRY_DT', 'TRX_DT')) {
                    alert('Please input the correct Drawing Commission Calculation To Date of Charge Tab');
                    return false;
                }
            }
            Obj_EPLC_UTIL_DEF_CHG_temp = Chg.Screen.getTrxChargeByCommCode('EPLC_UTIL_DEF_CHG');
            if (Obj_EPLC_UTIL_DEF_CHG_temp.getChargeFor() == 'F' && E_UNPAID_ACCEPT_FEE_AMT > 0) {
                if (document.MAINFORM.EXPIRY_DT.value == "" || !SYS_Day1MustbeLaterThanDay2('EXPIRY_DT', 'TRX_DT')) {
                    alert('Please input the correct Drawing Commission Calculation To Date of Charge Tab');
                    return false;
                }
            }
        }


        if (SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLC' || SYS_ORG_FUNCTION_NAME == 'EPLC_AddConfirmation' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLCOneStep' || SYS_ORG_FUNCTION_NAME == 'PROCESS_700701720') {
            document.MAINFORM.E_ORG_OUR_ENG_ADV_LC.value = "";
            if (SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value) > 0 || SYS_BeFloat(E_PAID_CONFIRM_COMM_AMT_value) > 0) {
                document.MAINFORM.E_ORG_OUR_ENG_ADV_LC.value = "CONFIRMATION";
            }
            if (document.MAINFORM.EXPIRY_DT.value == "" || !SYS_Day1MustbeLaterThanDay2('EXPIRY_DT', 'TRX_DT')) {
                alert('Please input the correct Date of Expiry [31D] of Main Tab');
                return false;
            }
        }

        Obj_CFNC_D_DUE_DT = EEHtml.getElementById('CFNC_D_DUE_DT');
        Obj_CFNC_C_TYPE = EEHtml.getElementById('CFNC_C_TYPE');
        Obj_DISCNT_FLG = EEHtml.getElementById('DISCNT_FLG');
        Obj_CFNC_N_LIBOR_RT = EEHtml.getElementById('CFNC_N_LIBOR_RT');

        if (Obj_CFNC_D_DUE_DT) {
            if (Obj_CFNC_C_TYPE.value == 'Discount' && Obj_DISCNT_FLG.value == 'YES') {
                if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity') {
                    return true;
                }
                if (Obj_CFNC_D_DUE_DT.value == "" || !SYS_Day1MustbeLaterThanDay2('CFNC_D_DUE_DT', 'TRX_DT')) {
                    alert('Please input the correct Discount End Date of Discount Tab');
                    return false;
                }
            }
        }
        Obj_CFNC_N_LIBOR_RT = EEHtml.getElementById('CFNC_N_LIBOR_RT'); // Utility Auto Fix Comments
        if (Obj_CFNC_N_LIBOR_RT) {
            if (Obj_CFNC_C_TYPE.value == 'Discount' && Obj_DISCNT_FLG.value == 'YES') {
                if (Obj_CFNC_N_LIBOR_RT.value == "" || Obj_CFNC_N_LIBOR_RT.value == 0) {
                    alert('Please input the correct Discount Base Rate% of Discount Tab');
                    return false;
                }
            }
        }

        if (SYS_ORG_FUNCTION_NAME == 'EPLC_Discount') {
            document.MAINFORM.E_CFNC_I_BASIC_DAYS.value = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value) + SYS_BeFloat(document.MAINFORM.INC_PERIOD.value);
            document.MAINFORM.E_CFNC_D_DUE_DT.value = (document.MAINFORM.TEMP_CFNC_D_DUE_DT.value != "") ? document.MAINFORM.TEMP_CFNC_D_DUE_DT.value : document.MAINFORM.CFNC_D_DUE_DT.value;
        }
        if ((SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAcceptFrCE') && document.MAINFORM.DISCNT_FLG.value == "YES") {
            Do_Obj = SYS_GetObjByDoName("FinanceEstablishment");
            document.MAINFORM.E_CFNC_I_BASIC_DAYS.value = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value) + SYS_BeFloat(document.MAINFORM.INC_PERIOD.value);
            document.MAINFORM.E_CFNC_D_DUE_DT.value = (document.MAINFORM.TEMP_CFNC_D_DUE_DT.value != "") ? document.MAINFORM.TEMP_CFNC_D_DUE_DT.value : document.MAINFORM.CFNC_D_DUE_DT.value;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_eloan_fields_EXCO = function() {
    try {
        var Do_Obj; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE; // Utility Auto Fix Comments
        var PRES_BK_ID; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'EXCO') {
            return true;
        }

        PRES_BK_ID = EEHtml.getElementById("PRES_BK_ID");

        E_ACCOUNT_TYPE = EEHtml.getElementById("E_ACCOUNT_TYPE");

        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;

        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;

        if (SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturity") {
            document.MAINFORM.E_TRX_DT.value = document.MAINFORM.PMT_DT.value;
        } else {
            document.MAINFORM.E_TRX_DT.value = SYS_BUSI_DATE;
        }

        Do_Obj = new Object();
        if (SYS_ORG_FUNCTION_NAME == 'EXCO_Discount') {
            Do_Obj = SYS_GetObjByDoName("FinanceEstablishment");
        }
        if (SYS_ORG_FUNCTION_NAME == 'EXCO_SettlementAtMaturity') {
            Do_Obj = SYS_GetObjByDoName("FincSinglePayment");
        }


        if (SYS_ORG_FUNCTION_NAME == 'EXCO_Discount' || SYS_ORG_FUNCTION_NAME == 'EXCO_SettlementAtMaturity') {

            document.MAINFORM.E_CFNC_I_BASIC_DAYS.value = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value) + SYS_BeFloat(document.MAINFORM.INC_PERIOD.value);
            document.MAINFORM.E_CFNC_D_DUE_DT.value = (document.MAINFORM.TEMP_CFNC_D_DUE_DT.value != "") ? document.MAINFORM.TEMP_CFNC_D_DUE_DT.value : document.MAINFORM.CFNC_D_DUE_DT.value;
            document.MAINFORM.E_C_REF_NO_C_IN.value = document.MAINFORM.CFNC_C_RELT_REF.value + "C";
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_eloan_fields_GTEE = function() {
    try {
        var CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var Obj_CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var Object_GTEE_ISS_COMM; // Utility Auto Fix Comments
        var Object_GTEE_ISS_COMM_ChargeAt; // Utility Auto Fix Comments
        var Object_GTEE_ISS_COMM_ChargeFor; // Utility Auto Fix Comments
        var Object_GTEE_ISS_COMM_DEF; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'GTEE') {
            return true;
        }
        Obj_CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById('CHG_FLD_LOCAL_CUST_CCY');
        if (!Obj_CHG_FLD_LOCAL_CUST_CCY) {
            return true;
        }




        Object_GTEE_ISS_COMM_ChargeFor = '';
        Object_GTEE_ISS_COMM_ChargeAt = "";
        CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById("CHG_FLD_LOCAL_CUST_CCY");

        E_UNPAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_AMT");
        E_UNPAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_CCY");
        E_PAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_PAID_CONFIRM_COMM_AMT");
        E_PAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_PAID_CONFIRM_COMM_CCY");

        E_ACCOUNT_TYPE = EEHtml.getElementById("E_ACCOUNT_TYPE");

        E_UNPAID_CONFIRM_COMM_AMT_value = 0;
        E_PAID_CONFIRM_COMM_AMT_value = 0;
        E_UNPAID_CONFIRM_COMM_CCY_value = "";
        E_PAID_CONFIRM_COMM_CCY_value = "";

        Object_GTEE_ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        Object_GTEE_ISS_COMM_DEF = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM');

        /*Cal Commission Fee Start*/
        //Object_GTEE_ISS_COMM
        if (Object_GTEE_ISS_COMM) {
            Object_GTEE_ISS_COMM_ChargeFor = Object_GTEE_ISS_COMM.getChargeFor();
            Object_GTEE_ISS_COMM_ChargeAt = Object_GTEE_ISS_COMM.getChargeAt();

            /*Cal Unpaid Confirmation Fee S*/
            if (SYS_BeFloat(Object_GTEE_ISS_COMM.getBalAmt()) > 0) {
                E_UNPAID_CONFIRM_COMM_CCY_value = Object_GTEE_ISS_COMM.getBalCcy();
                E_UNPAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_UNPAID_CONFIRM_COMM_CCY_value, Object_GTEE_ISS_COMM.getBalAmt());
            }
            /*Cal Unpaid Confirmation Fee E*/

            /*Cal Paid Confirmation Fee S*/
            if (SYS_BeFloat(Object_GTEE_ISS_COMM.getPayAmt()) > 0) {
                E_PAID_CONFIRM_COMM_CCY_value = Object_GTEE_ISS_COMM.getPayCcy();
                E_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_PAID_CONFIRM_COMM_CCY_value, Object_GTEE_ISS_COMM.getPayAmt());
            }
            /*Cal Paid Confirmation Fee E*/
        }
        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.E_TRX_DT.value = SYS_BUSI_DATE;
        /*Cal E_ACCOUNT_TYPE start*/
        E_ACCOUNT_TYPE.value = "AC1";
        /*Cal E_ACCOUNT_TYPE end*/

        if (SYS_ORG_FUNCTION_NAME == "AmendOutwardOneStep") {
            document.MAINFORM.E_NEW_EXPIRY_DT.value = (document.MAINFORM.NEW_EXPIRY_DT.value != "") ? document.MAINFORM.NEW_EXPIRY_DT.value : document.MAINFORM.EXPIRY_DT.value;
        }

        if (SYS_ORG_FUNCTION_NAME == 'GTEE_NoteAdditionalCharges') {
            E_UNPAID_CONFIRM_COMM_AMT_value =  SYS_FloatAdd(E_PAID_CONFIRM_COMM_AMT_value,SYS_BeFloat(CHG_CalDeferrCommcodeBalTotalAmt('GTEE_ISS_COMM')));
        }
        if (SYS_ORG_FUNCTION_NAME == 'OutwardClaimSettlement' || SYS_ORG_FUNCTION_NAME == 'GTEE_SettleCharges') {
            E_PAID_CONFIRM_COMM_AMT_value = SYS_FloatAdd(E_PAID_CONFIRM_COMM_AMT_value,SYS_BeFloat(CHG_CalDeferrCommcodePayTotalAmt('GTEE_ISS_COMM')));
        }

        document.MAINFORM.E_IA_Y_PAID_INT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value) + SYS_BeFloat(E_PAID_CONFIRM_COMM_AMT_value));
        if (E_UNPAID_CONFIRM_COMM_CCY_value == "" && E_PAID_CONFIRM_COMM_CCY_value == "") {
            document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.GTEE_CCY.value;
        } else {
            if (E_UNPAID_CONFIRM_COMM_CCY_value != "" && E_PAID_CONFIRM_COMM_CCY_value != "") {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
            } else {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value + E_PAID_CONFIRM_COMM_CCY_value;
            }
        }
        E_UNPAID_CONFIRM_COMM_AMT.value = E_UNPAID_CONFIRM_COMM_AMT_value;
        E_PAID_CONFIRM_COMM_AMT.value = E_PAID_CONFIRM_COMM_AMT_value;
        E_UNPAID_CONFIRM_COMM_CCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
        E_PAID_CONFIRM_COMM_CCY.value = E_PAID_CONFIRM_COMM_CCY_value;
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_eloan_fields_IPLC = function() {
    try {

        var APPL_ID; // Utility Auto Fix Comments
        var CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var Do_Obj; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE_ACCEPT; // Utility Auto Fix Comments
        var E_DEFERRED_PAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_DEFERRED_PAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var E_IA_C_DIS_CUSTCCY; // Utility Auto Fix Comments
        var E_IA_Y_EQVL_INT; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_AMT; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_AMT_value; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_CCY; // Utility Auto Fix Comments
        var E_PAID_ACCEPT_COMM_CCY_value; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var E_REF_NO; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_AMT; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_AMT_value; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_CCY; // Utility Auto Fix Comments
        var E_UNPAID_ACCEPT_COMM_CCY_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var Object_IPLC_OPEN_COMM; // Utility Auto Fix Comments
        var Object_IPLC_OPEN_COMM_ChargeAt; // Utility Auto Fix Comments
        var Object_IPLC_OPEN_COMM_ChargeFor; // Utility Auto Fix Comments
        var Object_IPLC_OPEN_COMM_DEF; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'IPLC') {
            return true;
        }
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;



        Object_IPLC_OPEN_COMM_ChargeFor = "";
        Object_IPLC_OPEN_COMM_ChargeAt = "";

        APPL_ID = EEHtml.getElementById("APPL_ID");

        CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById("CHG_FLD_LOCAL_CUST_CCY");

        E_UNPAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_AMT");
        E_UNPAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_CCY");
        E_PAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_PAID_CONFIRM_COMM_AMT");
        E_PAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_PAID_CONFIRM_COMM_CCY");

        E_UNPAID_ACCEPT_COMM_AMT = EEHtml.getElementById("E_UNPAID_ACCEPT_COMM_AMT");
        E_UNPAID_ACCEPT_COMM_CCY = EEHtml.getElementById("E_UNPAID_ACCEPT_COMM_CCY");
        E_PAID_ACCEPT_COMM_AMT = EEHtml.getElementById("E_PAID_ACCEPT_COMM_AMT");
        E_PAID_ACCEPT_COMM_CCY = EEHtml.getElementById("E_PAID_ACCEPT_COMM_CCY");

        E_ACCOUNT_TYPE = EEHtml.getElementById("E_ACCOUNT_TYPE");
        E_ACCOUNT_TYPE_ACCEPT = EEHtml.getElementById("E_ACCOUNT_TYPE_ACCEPT");

        E_UNPAID_CONFIRM_COMM_AMT_value = 0;
        E_PAID_CONFIRM_COMM_AMT_value = 0;
        E_UNPAID_CONFIRM_COMM_CCY_value = "";
        E_PAID_CONFIRM_COMM_CCY_value = "";

        E_UNPAID_ACCEPT_COMM_AMT_value = 0;
        E_PAID_ACCEPT_COMM_AMT_value = 0;
        E_UNPAID_ACCEPT_COMM_CCY_value = "";
        E_PAID_ACCEPT_COMM_CCY_value = "";

        E_IA_C_DIS_CUSTCCY = "";
        E_IA_Y_EQVL_INT = 0;

        Object_IPLC_OPEN_COMM = Chg.Screen.getTrxChargeByCommCode('IPLC_OPEN_COMM');
        Object_IPLC_OPEN_COMM_DEF = Chg.Screen.getDefChargeByCommCode('IPLC_OPEN_COMM');


        //Object_IPLC_OPEN_COMM 
        if (Object_IPLC_OPEN_COMM) {
            Object_IPLC_OPEN_COMM_ChargeFor = Object_IPLC_OPEN_COMM.getChargeFor();
            Object_IPLC_OPEN_COMM_ChargeAt = Object_IPLC_OPEN_COMM.getChargeAt();


            if (SYS_BeFloat(Object_IPLC_OPEN_COMM.getBalAmt()) > 0) {
                E_UNPAID_CONFIRM_COMM_CCY_value = Object_IPLC_OPEN_COMM.getBalCcy();
                E_UNPAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_UNPAID_CONFIRM_COMM_CCY_value, Object_IPLC_OPEN_COMM.getBalAmt());
            }


            if (SYS_BeFloat(Object_IPLC_OPEN_COMM.getPayAmt()) > 0) {
                E_PAID_CONFIRM_COMM_CCY_value = Object_IPLC_OPEN_COMM.getPayCcy();
                E_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_PAID_CONFIRM_COMM_CCY_value, Object_IPLC_OPEN_COMM.getPayAmt());
            }
        }



        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;

        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.E_TRX_DT.value = document.MAINFORM.TRX_DT.value; //Add by amy in 20140215
        /*Cal E_BORROWER_ID start */
        if (Object_IPLC_OPEN_COMM_ChargeFor == "L") {
            if (APPL_ID) {
                document.MAINFORM.E_BORROWER_ID.value = APPL_ID.value;
            }
        }
        /*Cal E_BORROWER_ID end */


        /*Cal E_ACCOUNT_TYPE start*/
        E_ACCOUNT_TYPE.value = "AC1";
        /*Cal E_ACCOUNT_TYPE end*/



        /*Cal E_ACCOUNT_TYPE_ACCEPT start*/
        E_ACCOUNT_TYPE_ACCEPT.value = "AC5";
        /*Cal E_ACCOUNT_TYPE_ACCEPT end*/


        /*Cal E_REF_NO start*/
        E_REF_NO = EEHtml.getElementById("E_REF_NO");

        /*Cal E_REF_NO end*/

        /*Cal E_PAID_CONFIRM_COMM_AMT_value start*/

        /*Cal E_PAID_CONFIRM_COMM_AMT_value end*/
        E_UNPAID_CONFIRM_COMM_AMT.value = E_UNPAID_CONFIRM_COMM_AMT_value;
        E_PAID_CONFIRM_COMM_AMT.value = E_PAID_CONFIRM_COMM_AMT_value;
        E_UNPAID_CONFIRM_COMM_CCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
        E_PAID_CONFIRM_COMM_CCY.value = E_PAID_CONFIRM_COMM_CCY_value;

        E_DEFERRED_PAID_CONFIRM_COMM_CCY_value = "";
        E_DEFERRED_PAID_CONFIRM_COMM_AMT_value = 0;




        document.MAINFORM.E_DEFERRED_PAID_CONFIRM_COMM_CCY.value = E_DEFERRED_PAID_CONFIRM_COMM_CCY_value;
        document.MAINFORM.E_DEFERRED_PAID_CONFIRM_COMM_AMT.value = E_DEFERRED_PAID_CONFIRM_COMM_AMT_value;

        /*Cal E_IA_C_DIS_LOCALCCY,E_IA_Y_PAID_INT start E_UNPAID_CONFIRM_COMM_CCY_value=TRX_CCY*/

        if (E_UNPAID_CONFIRM_COMM_CCY_value == "" && E_PAID_CONFIRM_COMM_CCY_value == "") {
            document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.LC_CCY.value;
        } else {
            if (E_UNPAID_CONFIRM_COMM_CCY_value != "" && E_PAID_CONFIRM_COMM_CCY_value != "") {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
            } else {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value + E_PAID_CONFIRM_COMM_CCY_value;
            }
        }
        document.MAINFORM.E_IA_Y_PAID_INT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value) + SYS_BeFloat(E_PAID_CONFIRM_COMM_AMT_value));
        /*Cal E_IA_C_DIS_LOCALCCY,E_IA_Y_PAID_INT End*/

        E_IA_C_DIS_CUSTCCY = E_PAID_CONFIRM_COMM_CCY_value + E_UNPAID_CONFIRM_COMM_CCY_value;

        document.MAINFORM.E_IA_C_DIS_CUSTCCY.value = E_IA_C_DIS_CUSTCCY;
        document.MAINFORM.E_IA_Y_EQVL_INT.value = SYT_AmtFormat(document.MAINFORM.E_IA_C_DIS_CUSTCCY.value, E_IA_Y_EQVL_INT);

        if (document.MAINFORM.EXPIRY_DT.value == "" || !SYS_Day1MustbeLaterThanDay2('EXPIRY_DT', 'TRX_DT')) {
            alert('Please input the correct Date of Expiry of Main Tab');
            return false;
        }

        if (SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCAmendmentOneStep" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCAmendment" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueAmendmentFrCE") {
            document.MAINFORM.E_NEW_EXPIRY_DT.value = (document.MAINFORM.NEW_EXPIRY_DT.value != "") ? document.MAINFORM.NEW_EXPIRY_DT.value : document.MAINFORM.EXPIRY_DT.value;
        }

        if (SYS_ORG_FUNCTION_NAME == 'IPLC_PayAcceptWithDiscount' || SYS_ORG_FUNCTION_NAME == 'IPLC_PaymentAtMaturity' || SYS_ORG_FUNCTION_NAME == 'IPLC_PayAcceptFrCE' || SYS_ORG_FUNCTION_NAME == 'IPLC_PaymentAtMaturityFrCE') {
            if (Object_IPLC_OPEN_COMM_DEF) {
                Object_IPLC_OPEN_COMM_ChargeFor = Object_IPLC_OPEN_COMM_DEF[0].getChargeFor();
                Object_IPLC_OPEN_COMM_ChargeAt = Object_IPLC_OPEN_COMM_DEF[0].getChargeAt();
                E_DEFERRED_PAID_CONFIRM_COMM_CCY_value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
                E_DEFERRED_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, SYS_BeFloat(CHG_CalDeferrCommcodePayTotalAmt('IPLC_OPEN_COMM')));
            }
            E_PAID_CONFIRM_COMM_AMT.value = E_DEFERRED_PAID_CONFIRM_COMM_AMT_value;
            E_PAID_CONFIRM_COMM_CCY.value = E_DEFERRED_PAID_CONFIRM_COMM_CCY_value;
        }

        if (SYS_ORG_FUNCTION_NAME == 'IPLC_PayAcceptWithDiscount' || SYS_ORG_FUNCTION_NAME == 'IPLC_PayAcceptFrCE') {
            Do_Obj = SYS_GetObjByDoName("FinanceEstablishment");
            document.MAINFORM.E_CFNC_I_BASIC_DAYS.value = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value) + SYS_BeFloat(document.MAINFORM.INC_PERIOD.value);
            document.MAINFORM.E_CFNC_D_DUE_DT.value = (document.MAINFORM.TEMP_CFNC_D_DUE_DT.value != "") ? document.MAINFORM.TEMP_CFNC_D_DUE_DT.value : document.MAINFORM.CFNC_D_DUE_DT.value;
        }

        if (SYS_ORG_FUNCTION_NAME == 'IPLC_PayAcceptWithDiscount' || SYS_ORG_FUNCTION_NAME == 'IPLC_PaymentAtMaturity' || SYS_ORG_FUNCTION_NAME == 'IPLC_PayAcceptFrCE' || SYS_ORG_FUNCTION_NAME == 'IPLC_PaymentAtMaturityFrCE') {
            document.MAINFORM.E_C_REF_NO_C_IN.value = document.MAINFORM.CFNC_C_RELT_REF.value + "C";
        }

        return true;

    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_eloan_fields_SBLC = function() {
    try {
        var CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var E_ACCOUNT_TYPE; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_PAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_AMT_value; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY; // Utility Auto Fix Comments
        var E_UNPAID_CONFIRM_COMM_CCY_value; // Utility Auto Fix Comments
        var Obj_CHG_FLD_LOCAL_CUST_CCY; // Utility Auto Fix Comments
        var Object_SBLC_ISS_COMM; // Utility Auto Fix Comments
        var Object_SBLC_ISS_COMM_ChargeAt; // Utility Auto Fix Comments
        var Object_SBLC_ISS_COMM_ChargeFor; // Utility Auto Fix Comments
        var Object_SBLC_ISS_COMM_DEF; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'SBLC') {
            return true;
        }
        Obj_CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById('CHG_FLD_LOCAL_CUST_CCY');
        if (!Obj_CHG_FLD_LOCAL_CUST_CCY) {
            return true;
        }
        Object_SBLC_ISS_COMM_ChargeFor = '';
        Object_SBLC_ISS_COMM_ChargeAt = "";
        CHG_FLD_LOCAL_CUST_CCY = EEHtml.getElementById("CHG_FLD_LOCAL_CUST_CCY");

        E_UNPAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_AMT");
        E_UNPAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_UNPAID_CONFIRM_COMM_CCY");
        E_PAID_CONFIRM_COMM_AMT = EEHtml.getElementById("E_PAID_CONFIRM_COMM_AMT");
        E_PAID_CONFIRM_COMM_CCY = EEHtml.getElementById("E_PAID_CONFIRM_COMM_CCY");

        E_ACCOUNT_TYPE = EEHtml.getElementById("E_ACCOUNT_TYPE");

        E_UNPAID_CONFIRM_COMM_AMT_value = 0;
        E_PAID_CONFIRM_COMM_AMT_value = 0;
        E_UNPAID_CONFIRM_COMM_CCY_value = "";
        E_PAID_CONFIRM_COMM_CCY_value = "";

        Object_SBLC_ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        Object_SBLC_ISS_COMM_DEF = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM');

        /*Cal Commission Fee Start*/
        //Object_SBLC_ISS_COMM
        if (Object_SBLC_ISS_COMM) {
            Object_SBLC_ISS_COMM_ChargeFor = Object_SBLC_ISS_COMM.getChargeFor();
            Object_SBLC_ISS_COMM_ChargeAt = Object_SBLC_ISS_COMM.getChargeAt();

            /*Cal Unpaid Confirmation Fee S*/
            if (SYS_BeFloat(Object_SBLC_ISS_COMM.getBalAmt()) > 0) {
                E_UNPAID_CONFIRM_COMM_CCY_value = Object_SBLC_ISS_COMM.getBalCcy();
                E_UNPAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_UNPAID_CONFIRM_COMM_CCY_value, Object_SBLC_ISS_COMM.getBalAmt());
            }
            /*Cal Unpaid Confirmation Fee E*/

            /*Cal Paid Confirmation Fee S*/
            if (SYS_BeFloat(Object_SBLC_ISS_COMM.getPayAmt()) > 0) {
                E_PAID_CONFIRM_COMM_CCY_value = Object_SBLC_ISS_COMM.getPayCcy();
                E_PAID_CONFIRM_COMM_AMT_value = SYT_AmtFormat(E_PAID_CONFIRM_COMM_CCY_value, Object_SBLC_ISS_COMM.getPayAmt());
            }
            /*Cal Paid Confirmation Fee E*/
        }
        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.E_TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.E_BORROWER_ID.value = document.MAINFORM.APPL_ID.value;
        /*Cal E_ACCOUNT_TYPE start*/
        E_ACCOUNT_TYPE.value = "AC1";
        /*Cal E_ACCOUNT_TYPE end*/

        if (SYS_ORG_FUNCTION_NAME == "SBLC_Amendment") {
            document.MAINFORM.E_NEW_EXPIRY_DT.value = (document.MAINFORM.NEW_EXPIRY_DT.value != "") ? document.MAINFORM.NEW_EXPIRY_DT.value : document.MAINFORM.EXPIRY_DT.value;
        }

        if (SYS_ORG_FUNCTION_NAME == 'SBLC_ProcessClaim') {
            E_PAID_CONFIRM_COMM_AMT_value += SYS_BeFloat(CHG_CalDeferrCommcodePayTotalAmt('GTEE_ISS_COMM'));
        }

        document.MAINFORM.E_IA_Y_PAID_INT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(E_UNPAID_CONFIRM_COMM_AMT_value) + SYS_BeFloat(E_PAID_CONFIRM_COMM_AMT_value));
        if (E_UNPAID_CONFIRM_COMM_CCY_value == "" && E_PAID_CONFIRM_COMM_CCY_value == "") {
            document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.LC_CCY.value;
        } else {
            if (E_UNPAID_CONFIRM_COMM_CCY_value != "" && E_PAID_CONFIRM_COMM_CCY_value != "") {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
            } else {
                document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = E_UNPAID_CONFIRM_COMM_CCY_value + E_PAID_CONFIRM_COMM_CCY_value;
            }
        }
        E_UNPAID_CONFIRM_COMM_AMT.value = E_UNPAID_CONFIRM_COMM_AMT_value;
        E_PAID_CONFIRM_COMM_AMT.value = E_PAID_CONFIRM_COMM_AMT_value;
        E_UNPAID_CONFIRM_COMM_CCY.value = E_UNPAID_CONFIRM_COMM_CCY_value;
        E_PAID_CONFIRM_COMM_CCY.value = E_PAID_CONFIRM_COMM_CCY_value;
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Cal_temp_times = function(temp_times) {
    try {
        var frm; // Utility Auto Fix Comments
        var frm_elements; // Utility Auto Fix Comments
        var frm_elements_name; // Utility Auto Fix Comments
        var frm_elements_value; // Utility Auto Fix Comments
        var frm_length; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var oIDField; // Utility Auto Fix Comments
        var oPOST_ADD_BTN; // Utility Auto Fix Comments
        var sIDName; // Utility Auto Fix Comments
        if (temp_times > 0) { // Utility Auto Fix Comments
            return; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        frm = document.MAINFORM;
        if ("PM||MM||KP||EC||RE".indexOf(SYS_FUNCTION_TYPE) > -1) {
            frm_length = frm.elements.length;
            for (i = 0; i < frm_length; i++) { // Utility Auto Fix Comments
                frm_elements = frm.elements[i];
                frm_elements_name = frm.elements[i].name;
                frm_elements_value = frm.elements[i].value;
                if (frm_elements_name.indexOf("_NOTES") > -1) {
                    frm_elements_value = removeSlash(frm_elements_value);
                }
                if ("EPLC||EXCO".indexOf(SYS_MODULE_NAME) == -1 || SYS_FUNCTION_TYPE == "RE") { // Utility Auto Fix Comments
                    continue; // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
                temp_times += 1;
                oIDField = frm.elements[i];
                sIDName = oIDField.name;
                oADD_BTN = MAINFORM.elements[sIDName.replace("ID", "ADD_BTN")];
                oPOST_ADD_BTN = MAINFORM.elements[sIDName.replace("ID", "POST_ADD_BTN")];
                if (sIDName.indexOf("ID") > -1) {
                    if (oIDField.value == "" || oIDField.className == "CHAR_P") {
                        if (oADD_BTN != null) { // Utility Auto Fix Comments
                            oADD_BTN.disabled = true; // Utility Auto Fix Comments
                        } // Utility Auto Fix Comments
                        if (oPOST_ADD_BTN != null) { // Utility Auto Fix Comments
                            oPOST_ADD_BTN.disabled = true; // Utility Auto Fix Comments
                        } // Utility Auto Fix Comments

                        if (SYS_ORG_FUNCTION_NAME == "EXCO_ReturnUnpaidDocuments") {
                            document.MAINFORM.DRWR_POST_ADD_BTN.disabled = false;
                        }
                    } else {
                        if (oADD_BTN != null) { // Utility Auto Fix Comments
                            oADD_BTN.disabled = false; // Utility Auto Fix Comments
                        } // Utility Auto Fix Comments
                        if (oPOST_ADD_BTN != null) { // Utility Auto Fix Comments
                            oPOST_ADD_BTN.disabled = false; // Utility Auto Fix Comments
                        } // Utility Auto Fix Comments
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.InitAllTrx = function() {
    try {
        MAINFORM.LOGIN_BIC.value = SYS_LOGIN_BIC;

        InitRun();

        if (MAINFORM.LOGIN_BIC.value.length > 0) {
            clearInterval(setInterval("InitAllTrx()", 1000));
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.InitRun = function() {
    try {
        var frm; // Utility Auto Fix Comments
        var frm_elements; // Utility Auto Fix Comments
        var frm_elements_name; // Utility Auto Fix Comments
        var frm_elements_value; // Utility Auto Fix Comments
        var frm_length; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nC_MAIN_REF; // Utility Auto Fix Comments
        var nTEMP_N90_REF_20; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var oIDField; // Utility Auto Fix Comments
        var oPOST_ADD_BTN; // Utility Auto Fix Comments
        var sIDName; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        var temp_length; // Utility Auto Fix Comments
        var temp_string; // Utility Auto Fix Comments
        var temp_string_substr; // Utility Auto Fix Comments
        var temp_times; // Utility Auto Fix Comments
        temp = document.getElementsByTagName('div');
        temp_length = document.getElementsByTagName('div').length;
        temp_string = '';
        temp_times = 0;
        temp_string_substr = '';
        for (i = 0; i < temp_length; i++) {
            if (temp[i].id.indexOf('_div') > 0) {
                temp_string = temp[i].id;
                temp_string_substr = EEHtml.getElementById(temp_string.substr(0, 1));
                if (!temp_string_substr) { // Utility Auto Fix Comments
                    continue; // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
                EEHtml.attachEventListener(temp_string_substr, 'onclick', function() {
                    if (temp_times > 0) { // Utility Auto Fix Comments
                        return; // Utility Auto Fix Comments
                    } // Utility Auto Fix Comments
                    frm = document.MAINFORM;
                    if ("PM||MM||KP||EC||RE".indexOf(SYS_FUNCTION_TYPE) > -1) {
                        frm_length = frm.elements.length;
                        for (i = 0; i < frm_length; i++) {
                            frm_elements = frm.elements[i];
                            frm_elements_name = frm.elements[i].name;
                            frm_elements_value = frm.elements[i].value;
                            if (frm_elements_name.indexOf("_NOTES") > -1) {
                                frm_elements_value = removeSlash(frm_elements_value);
                            }
                            if ("EPLC||EXCO".indexOf(SYS_MODULE_NAME) == -1 || SYS_FUNCTION_TYPE == "RE") { // Utility Auto Fix Comments
                                continue; // Utility Auto Fix Comments
                            } // Utility Auto Fix Comments
                            temp_times += 1;
                            oIDField = frm.elements[i];
                            sIDName = oIDField.name;
                            oADD_BTN = MAINFORM.elements[sIDName.replace("ID", "ADD_BTN")];
                            oPOST_ADD_BTN = MAINFORM.elements[sIDName.replace("ID", "POST_ADD_BTN")];
                            if (sIDName.indexOf("ID") > -1) {
                                if (oIDField.value == "" || oIDField.className == "CHAR_P") {
                                    if (oADD_BTN != null) { // Utility Auto Fix Comments
                                        oADD_BTN.disabled = true; // Utility Auto Fix Comments
                                    } // Utility Auto Fix Comments
                                    if (oPOST_ADD_BTN != null) { // Utility Auto Fix Comments
                                        oPOST_ADD_BTN.disabled = true; // Utility Auto Fix Comments
                                    } // Utility Auto Fix Comments

                                    if (SYS_ORG_FUNCTION_NAME == "EXCO_ReturnUnpaidDocuments") {
                                        document.MAINFORM.DRWR_POST_ADD_BTN.disabled = false;
                                    }
                                } else {
                                    if (oADD_BTN != null) { // Utility Auto Fix Comments
                                        oADD_BTN.disabled = false; // Utility Auto Fix Comments
                                    } // Utility Auto Fix Comments
                                    if (oPOST_ADD_BTN != null) { // Utility Auto Fix Comments
                                        oPOST_ADD_BTN.disabled = false; // Utility Auto Fix Comments
                                    } // Utility Auto Fix Comments
                                }
                            }
                        }
                    }
                });
            }
        }

        nTEMP_N90_REF_20 = EEHtml.getElementById('TEMP_N90_REF_20');
        nC_MAIN_REF = EEHtml.getElementById('C_MAIN_REF');
        if (nTEMP_N90_REF_20 != null && nC_MAIN_REF != null) {
            setTimeout("document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value", 1000);
        }

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}

csLbiCompProto.Object_validation = function(Object_Name) {
    try {
        if (Object_Name) {
            return true;
        }
        return false;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxCommon.js", e);
    }
}