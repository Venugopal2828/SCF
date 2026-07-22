var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (document.MAINFORM.FA_EF_HAN_CHG_AMT.value == 0) {
            if (!confirm('Handling Charge is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_IRT_SPREAD.value == 0) {
            if (!confirm('Financing Profit Margin Rate is 0!')) {
                return false;
            }
        }
        // --marked for SCF change
        //                if (document.MAINFORM.FA_OVD_IRT_SPREAD.value == 0) {
        //                    if (!confirm('Penalty Profit Spread Rate is 0!')) {
        //                        return false;
        //                    }
        //                }
        //
        //                   if (!SYF_FADA_checkDiscRate1()) {
        //                        return false;
        //                    }
        //                    if (!SYF_FADA_checkDiscRate2()) {
        //                        return false;
        //                    }
        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Gross Turnover Commission rate is 0!')) {
                return false;
            }
        }
        //--marked for SCF change
        //                    if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
        //                        if (!SYT_checkFactoringChildRecord('Buyer_Info')) {
        //                            return false;
        //                        }
        //                    }
        //            
        if (!SYF_FADA_Chk_DuplicateSBR()) {
            return false;
        }
        if (!SYF_FADA_Check_Pending_Invoices()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        EEHtml.getElementById('disc1').style.display = "";
        EEHtml.getElementById('disc2').style.display = "";
        document.MAINFORM.ORIG_FA_COUNTER_TYPE.value = document.MAINFORM.FA_COUNTER_TYPE.value;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_TEMP_BK_ID1.value = document.MAINFORM.CHG_FREQ_CD.value;
            var arrOptionV;
            arrOptionV = ['D', 'M', 'Q', 'W'];
            SYS_FilterOptions('CHG_FREQ_CD', arrOptionV);
            document.MAINFORM.CHG_FREQ_CD.value = document.MAINFORM.FA_TEMP_BK_ID1.value;
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            SYT_DisableDivClass('B_div');
            EEHtml.getElementById('G').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to PF for SCF change
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "block";
            SYT_DisableDivClass('G_div');
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "none";
        } //mark for new SCF

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF') { //Change from RF to PF for SCF change
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYT_DisableDivClass('POOL');
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');//20250321 Niamh;
        }

        SYF_FADA_Cal_FA_IRT_SPREAD();
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
        SYF_FADA_FA_REQ_BUYER_APR_FLG();
        // SYF_FADA_CHECK_POF_LOAN_FIELD();
        SYF_FADA_FA_PRICING_DS_MPO();
        SYF_FADA_AUTO_FINANCE();
        //SYF_FADA_Cal_CUST_TYPE();
        SYF_FADA_Chk_INV_FIN_MODE();
        SYF_FADA_MPO_BY_FA_AUTO_FIN(); //zoe 20220520
		SYF_FADA_Cal_MAX_ROLLOVER_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_AUTO_FINANCE = function() {
    try {
        var FA_AUTO_FIN = document.MAINFORM.FA_AUTO_FIN.value;
        if (FA_AUTO_FIN == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'M');
            document.MAINFORM.FA_MIN_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_MIN_FIN_AMT.value);
            document.MAINFORM.FA_MAX_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_MAX_FIN_AMT.value);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'P'); //zoe
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'P'); //zoe
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'P'); //zoe
            document.MAINFORM.FA_MIN_FIN_AMT.value = '';
            document.MAINFORM.FA_MAX_FIN_AMT.value = '';
            document.MAINFORM.FA_CUT_OFF_DAYS.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_AUTO_FINANCE", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_POF_LOAN_FIELD = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('pof').style.display = "";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'M');
        } else {
            EEHtml.getElementById('pof').style.display = "none";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_CHECK_POF_LOAN_FIELD", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_CUST_TYPE = function() {
    try {
        if (document.MAINFORM.FA_CUST_FLAG.value == '1' && document.MAINFORM.FA_COUNTER_CE_FLG.value == 'No') {
            document.MAINFORM.FA_COUNTER_TYPE.value = 'T2';
        } else if (document.MAINFORM.FA_CUST_FLAG.value == '1' && document.MAINFORM.FA_COUNTER_CE_FLG.value == 'Yes') {
            document.MAINFORM.FA_COUNTER_TYPE.value = 'T1';
        } else if (document.MAINFORM.FA_CUST_FLAG.value == '2') {
            document.MAINFORM.FA_COUNTER_TYPE.value = 'T3';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Cal_CUST_TYPE", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_IRT_SPREAD = function() {
    try {
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Cal_FA_IRT_SPREAD", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_MAX_ROLLOVER_DAYS = function() {
    try {
        var ROLL_FLAG = document.MAINFORM.FA_ROLLOVER_FLAG.value;
        if (ROLL_FLAG == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P', 'N');
            document.MAINFORM.MAX_ROLLOVER_DAYS.value = "0";
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Cal_MAX_ROLLOVER_DAYS", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {
        var node;
        var docAmt;
        node = SYS_getDoByXpath('Buyer_Info');
        docAmt = SYS_getFieldSumValue(node, "FA_SBR_AMT", 2);
        SYS_setValueToMain("FA_APPL_LMT_AMT", docAmt);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Cal_forChildtoMainScreen", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_setBA_FLG = function() {
    try {
        var servApprv; // Utility Auto Fix Comments
        servApprv = document.MAINFORM.FA_SERVICE_APPRVD.value;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            if (servApprv == '1' || servApprv == '2') {
                document.MAINFORM.FA_BA_FLG.value = '1';
            } else {
                document.MAINFORM.FA_BA_FLG.value = '2';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Cal_setBA_FLG", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_COMM_RT = function() {
    try {
        var COMM_RT = document.MAINFORM.FA_EF_COMM_RT.value;
        if (COMM_RT >= 100 || COMM_RT < 0) {
            SYS_CheckError(document.MAINFORM.FA_EF_COMM_RT, 'The Gross Turnover Commission must between 0 and 100!');
            document.MAINFORM.FA_EF_COMM_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Check_COMM_RT", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_Pending_Invoices = function() {
    try {
        if (document.MAINFORM.FA_RELATION_STATUS.value == 'Close') {
            document.MAINFORM.FA_DOC_REF_TEMP.value = "";
            SYS_GetTableDataByRule_S('Chk_Pending_INV_ME', '1', 'Y');
            if (document.MAINFORM.FA_DOC_REF_TEMP.value != "0") {
                alert("The Relationship cannot be closed until all invoices have been settled or closed. Please close all pending invoices or settle all financed invoices before closing the relationship.");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Check_Pending_Invoices", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_Rebate_RT = function() {
    try {
        var REBATE_RT = document.MAINFORM.FA_REBATE_RATE.value;
        if (REBATE_RT >= 100 || REBATE_RT < 0) {
            SYS_CheckError(document.MAINFORM.FA_REBATE_RATE, 'The Rebate Rate must between 0 and 100!');
            document.MAINFORM.FA_REBATE_RATE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Check_Rebate_RT", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_VAT_RT = function() {
    try {
        var VAT_RT = document.MAINFORM.VAT_RT.value;
        if (VAT_RT >= 100 || VAT_RT < 0) {
            SYS_CheckError(document.MAINFORM.VAT_RT, 'The VAT Rate must between 0 and 100!');
            document.MAINFORM.VAT_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Check_VAT_RT", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DD_CHG = function() {
    try {
        var bu_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        var chg_tp = document.MAINFORM.FA_DD_CHG_TP.value;
        if (bu_tp == 'DD') {
            SYT_DisableDivClass('Common');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_TP, 'M');
            SYT_EnableDivClass('DD');
            SYT_ChangeFldClass(document.MAINFORM.CHG_FREQ_CD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_PAID_BY, 'M');
            if (chg_tp == 'F') {
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'P');
            } else if (chg_tp == 'S') {
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Chk_DD_CHG", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DuplicateSBR = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Chk_DuplicateSBR_0', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'Duplicate Seller-Buyer relation!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Chk_DuplicateSBR", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_INV_FIN_MODE = function() {
    try {
        var FIN_MODE = document.MAINFORM.INV_FIN_MODE.value;
        var bu_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (FIN_MODE == 'INV') {
            SYT_DisableDivClass('POOL');
            SYT_ClearFields("POOL_INV_MIN_AMT,POOL_INV_MAX_AMT,POOL_INV_MIN_PERIOD,POOL_INV_MAX_PERIOD");
            SYT_EnableDivClass('INV');
            SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'M');
            if (bu_tp == 'DD') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AUTO_DEBIT, 'P');
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');//20250321 Niamh;
            }
        } else if (FIN_MODE == 'POOL') {
            SYT_DisableDivClass('INV');
            SYT_ClearFields("FA_AUTO_FIN,FA_CUT_OFF_DAYS,FA_MIN_FIN_AMT,FA_MAX_FIN_AMT");
            SYT_EnableDivClass('POOL');
            //SYT_ChangeFldClass(document.MAINFORM.FA_AUTO_DEBIT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');
            document.MAINFORM.FA_ROLLOVER_FLAG.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P');

            document.MAINFORM.POOL_INV_MAX_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.POOL_INV_MAX_AMT.value);
            document.MAINFORM.POOL_INV_MIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.POOL_INV_MIN_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Chk_INV_FIN_MODE", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_PO_MAX_LOAN_PER = function() {
    try {
        if (document.MAINFORM.PO_MAX_LOAN_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.PO_MAX_LOAN_PERC, "PO Max Loan Percentage must between 0 and 100!");
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '';
            return false;
        }
        if (document.MAINFORM.PO_MAX_LOAN_PERC.value < 0) {
            SYS_CheckError(document.MAINFORM.PO_MAX_LOAN_PERC, "PO Max Loan Percentage must between 0 and 100!");
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_Chk_PO_MAX_LOAN_PER", e);
    }
}

csFuncLevelProto.SYF_FADA_DD_CHG_TP = function() {
    try {
        var chg_tp = document.MAINFORM.FA_DD_CHG_TP.value;
        if (chg_tp == 'F') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'P');
            document.MAINFORM.FA_DD_CHG_SHA.value = '0';
        } else if (chg_tp == 'S') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'M');
            document.MAINFORM.FA_DD_CHG_FIX.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_DD_CHG_TP", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_PRICING_DS_MPO = function() {
    try {
        if (document.MAINFORM.FA_PRICING_DS.value == 'D') {
            SYT_ChangeFldClass(document.MAINFORM.FA_EF_COMM_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_EF_HAN_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_EF_HAN_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OVD_IRT_SPREAD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PO_MAX_LOAN_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REBATE_BT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.VAT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_PAID_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_INFO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_FREQ_CD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_TP, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'P');
        } else if (document.MAINFORM.FA_PRICING_DS.value == 'S') {
            SYT_ChangeFldClass(document.MAINFORM.FA_EF_COMM_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_EF_HAN_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_EF_HAN_CHG_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_OVD_IRT_SPREAD, 'O');
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.REBATE_BT, 'O');
            }

            SYT_ChangeFldClass(document.MAINFORM.VAT_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_PAID_BY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_INFO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_FREQ_CD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'M');
                SYT_ChangeFldClass(document.MAINFORM.PO_MAX_LOAN_PERC, 'M');
            }
            SYF_FADA_Chk_DD_CHG();

        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_FA_PRICING_DS_MPO", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_REQ_BUYER_APR_FLG = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'P');
            document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_FA_REQ_BUYER_APR_FLG", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_BUYER_SELLER_ACC_NO = function() {
    try {
        //Add by Canny for SCF change
        if (document.MAINFORM.FA_AUTO_DEBIT.value == "Yes") {
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_ACC, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'P');
            } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
                SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_ACC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_ACC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'P');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_ACC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_MPO_BUYER_SELLER_ACC_NO", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_BY_FA_AUTO_FIN = function() {
    try {
        var FA_AUTO_FIN = document.MAINFORM.FA_AUTO_FIN.value;
        if (FA_AUTO_FIN == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'P');
        }
        //zoe 20220520
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_MPO_BY_FA_AUTO_FIN", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate1 = function() {
    try {
        if (document.MAINFORM.FA_PRM_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "1st Discount Rate must between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_PRM_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "1st Discount Rate must between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_checkDiscRate1", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate2 = function() {
    try {
        if (document.MAINFORM.FA_SND_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must be between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_SND_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must be between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*SYF_FADA_checkDiscRate2", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_AUTO_DEBIT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_FIN_onchange = function(event) {
    try {
        SYF_FADA_AUTO_FINANCE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_AUTO_FIN_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_COUNTER_CE_FLG_onchange = function(event) {
    try {
        SYF_FADA_Cal_CUST_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_COUNTER_CE_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CUST_FLAG_onchange = function(event) {
    try {
        SYF_FADA_Cal_CUST_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_CUST_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_DD_CHG_TP_onchange = function(event) {
    try {
        SYF_FADA_DD_CHG_TP();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_DD_CHG_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_COMM_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_EF_COMM_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_EF_HAN_CHG_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_LOAN_IRATE_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MAX_FIN_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_MAX_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_MAX_FIN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_MAX_FIN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MIN_FIN_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_MIN_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_MIN_FIN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_MIN_FIN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRICING_DS_onchange = function(event) {
    try {
        SYF_FADA_FA_PRICING_DS_MPO();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_PRICING_DS_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_PRM_DISC_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REBATE_RATE_onchange = function(event) {
    try {
        SYF_FADA_Check_Rebate_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_REBATE_RATE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_RELATION_STATUS_onchange = function(event) {
    try {
        SYF_FADA_Check_Pending_Invoices();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_RELATION_STATUS_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_ROLLOVER_FLAG_onchange = function(event) {
    try {
        SYF_FADA_Cal_MAX_ROLLOVER_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_ROLLOVER_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_FA_SND_DISC_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_POOL_INV_MAX_PERIOD_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.POOL_INV_MIN_PERIOD.value) > 0 && SYS_BeFloat(document.MAINFORM.POOL_INV_MIN_PERIOD.value) > SYS_BeFloat(document.MAINFORM.POOL_INV_MAX_PERIOD.value)) {
            SYS_CheckError(document.MAINFORM.POOL_INV_MAX_PERIOD, "Invoice filter Max Period must greater than Min Period!");
            document.MAINFORM.POOL_INV_MAX_PERIOD.value = '0';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_POOL_INV_MAX_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_POOL_INV_MIN_PERIOD_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.POOL_INV_MAX_PERIOD.value) > 0 && SYS_BeFloat(document.MAINFORM.POOL_INV_MIN_PERIOD.value) > SYS_BeFloat(document.MAINFORM.POOL_INV_MAX_PERIOD.value)) {
            SYS_CheckError(document.MAINFORM.POOL_INV_MIN_PERIOD, "Invoice filter Min Period must be less than Max Period!");
            document.MAINFORM.POOL_INV_MIN_PERIOD.value = '0';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_POOL_INV_MIN_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_PO_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Chk_PO_MAX_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_PO_MAX_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_VAT_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_VAT_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_VAT_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_REBATE_BT_onclick = function(event) {
    try {
        var BUSI_TP = document.MAINFORM.FA_BUSI_TYPE.value;
        if (BUSI_TP == 'PF') {
            SYS_InqCUBK_byCondition('GET_REBATE_ACC_ME', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_REBATE_BT_onclick", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBRPrice_ME.js*FLD_FADA_view_1_onclick", e);
    }
}