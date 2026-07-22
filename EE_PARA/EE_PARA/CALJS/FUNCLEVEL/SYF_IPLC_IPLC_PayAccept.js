var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
        SYT_Cal_C_TRANS_CODE();

        // Add by jane for Liability Voucher
        SYT_LIAB_VOUCHER();

        //add by dane 20090319
        SYF_IPLC_CAL_VOUCHER_OUT_FLG();

        //DANE
        SYF_IPLC_CAL_PAYMENT_AC_DESC();

        //Add by jane at 20090324 for LC BAL
        SYF_IPLC_CAL_LC_BAL();
        SYF_IPLC_CAL_PRES_BAL();
        SYF_IPLC_Set_20Z();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_IPLC_Check_TOTAL_AMT()) {
            return false;
        }
        return SYF_IPLC_Check_PaymentRecordAccepted();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_IPLC_INIT();
        SYM_IPLC_INIT_FOR_DT();
        //tracery add for payment logic
        document.MAINFORM.STL_AMT.value = document.MAINFORM.PRES_AMT.value;
        SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO();

        //Add by jane for bug 1323 at 20090310
        document.MAINFORM.ACPT_CCY.value = document.MAINFORM.PRES_CCY.value;

        //for liability account
        SYM_IPLC_CAL_TEMP_LIAB_ACNO();

        //Add by amy 20120509
        document.MAINFORM.TOTAL_AMT.value = 0;
        document.MAINFORM.TOTAL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TOTAL_AMT.value);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYM_IPLC_Cal_PRES_BK_SW_TAG();

        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
        //notes
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        //Add by Jack on 20120905 for SMBC workshop
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_CORR_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_CORR_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        //Add by Jack on 20120905 for SMBC workshop
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYM_IPLC_CAL_SEND_CORR_BK_ID_back();
        SYM_IPLC_CAL_RCV_CORR_BK_ID_back();

        //acceptance
        SYF_IPLC_Cal_ACCEPTANCE_FIELD_CLASS();

        //advice
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.PRES_BK_REF.value;

        //charges


        //SYM_IPLC_CHG_mapLocal_Foreign_Cust();//Modified by Jack on 20120905 for SMBC Workshop
        SYM_IPLC_CHG_map_Cust_SMBC();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.attchEvent(SYF_IPLC_ChgCallBack); //tracery invoke this method for payment logic
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IPLC_Chg_UTIL_DEF_CHG();
            SYM_IPLC_Chg_UTIL_SIGHT_CHG();
            SYM_IPLC_Chg_SpecialHandlingFee();
            SYM_IPLC_Chg_Postageand();
            SYM_IPLC_Chg_SpecialCourier();
            SYM_IPLC_Chg_SWIFT_CHG();
            SYM_IPLC_Chg_Calculation_Other();
        }

        /*invoke CHG_setAllCollCcy(),SYT_Set_TRXCCY2CHG(),CHG_TRX_DATE(),SYT_Cal_CHG_FLD_LOCAL_CUST_CCY()*/
        SYM_IPLC_Chg_Init_FOR_Charge();

        // Add by jane for Acceptance amount
        SYF_IPLC_CAL_ACPT_AMT();

        SYT_DisableDivClass('P_div');
        SYT_DisableDivClass('O_div');
        SYM_IPLC_CAL_CHG_CASH_IND_back();

        //Add by amy for Settlement Amount
        SYF_IPLC_Change_STL_AMT_Class_By_AVAL_BY();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_ACPT_AMT = function() {
    try {
        var fACPT_AMT; // Utility Auto Fix Comments
        fACPT_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value) - SYS_BeFloat(document.MAINFORM.STL_AMT.value);

        document.MAINFORM.ACPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, fACPT_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CAL_ACPT_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_LC_BAL = function() {
    try {
        var LC_BAL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        // added by Jane 20090324 
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        LC_BAL = Math.max(0, LC_BAL - PRES_AMT);
        document.MAINFORM.TEMP_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CAL_LC_BAL", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_PAYMENT_AC_DESC = function() {
    try {
        var CR_TYPE; // Utility Auto Fix Comments
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var _Cr; // Utility Auto Fix Comments
        var _Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        for (i = 0; i < len; i++) {
            if (targetDo[i].getDoValueByName("CPYT_C_SDA_FLAG") == "Sight") {
                _Dr = targetDo[i].getDoByName("PaymentDebit"); // Utility Auto Fix Comments
                _Cr = targetDo[i].getDoByName("PaymentCredit"); // Utility Auto Fix Comments
                Drlen = _Dr.length; // Utility Auto Fix Comments
                Crlen = _Cr.length; // Utility Auto Fix Comments
                for (j = 0; j < Drlen; j++) {
                    DR_TYPE = _Dr[j].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
                    ntype = DR_TYPE.substring(0, 1);
                    dr_desc = "IPLC03NULLNULLNULL" + ntype;
                    SYS_UpdateFldValueByDo(_Dr[j], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
                }
                for (k = 0; k < Crlen; k++) {
                    CR_TYPE = _Cr[k].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                    ntype = CR_TYPE.substring(0, 1);
                    cr_desc = "IPLC03NULLNULLNULL" + ntype;
                    SYS_UpdateFldValueByDo(_Cr[k], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
                }
            }

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CAL_PAYMENT_AC_DESC", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_PRES_BAL = function() {
    try {
        var PRES_BAL; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var TEMP_PRES_BAL; // Utility Auto Fix Comments
        TEMP_PRES_BAL = SYS_BeFloat(document.MAINFORM.PRES_BAL.value);
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);

        PRES_BAL = Math.max(0, TEMP_PRES_BAL - STL_AMT);
        document.MAINFORM.TEMP_PENDING_PRES_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, PRES_BAL);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CAL_PRES_BAL", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_STL_AMT_BY_SDA_FLAG = function() {
    try {
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            vDo = targetDo[i];
            if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                document.MAINFORM.STL_AMT.value = vDo.getDoValueByName('CPYT_N_PAY_AMT');
                document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.STL_AMT.value);
                SYT_ChangeFldClass_New('STL_AMT', 'M');
                document.MAINFORM.MIX_PAYMENT_SDA_FLAG.value = 'Sight'; // Utility Auto Fix Comments
                break;
            } else {
                document.MAINFORM.STL_AMT.value = 0;
                document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.STL_AMT.value);
                SYT_ChangeFldClass_New('STL_AMT', 'P');
                document.MAINFORM.MIX_PAYMENT_SDA_FLAG.value = '';
            }
        }
        EEHtml.fireEvent(document.MAINFORM.STL_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CAL_STL_AMT_BY_SDA_FLAG", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_VOUCHER_OUT_FLG = function() {
    try {
        var CPYT_C_SDA_FLAG; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        flag = "FALSE";
        _do = null; // Utility Auto Fix Comments
        _do = SYS_GetObjByDoName("PaymentInstrDeal"); // Utility Auto Fix Comments
        if (_do == null) { // Utility Auto Fix Comments
            return;
        }
        len = _do.length; // Utility Auto Fix Comments
        for (i = 0; i < len; i++) {
            CPYT_C_SDA_FLAG = SYS_GetFldValueByDo(_do[i], "CPYT_C_SDA_FLAG"); // Utility Auto Fix Comments
            if (CPYT_C_SDA_FLAG == "Sight") {
                flag = "TRUE";
            }
        }
        document.MAINFORM.TEMP_VOUCHER_FLG.value = flag;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CAL_VOUCHER_OUT_FLG", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO = function() {
    try {
        //tracery add this method for payment logic
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "Yes") {
            CHG_set_UsedChgACFlag(true);
        } else {
            CHG_set_UsedChgACFlag(false);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_ACCEPTANCE_FIELD_CLASS = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.ACPT_MSG, "M");
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO_MT752, "O");
        } else {
            SYT_DisableDivClass('C_div');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_DT, "P");
            SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.ACPT_MSG, "P");
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, "P");
            SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, "P");
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO_MT752, "P");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_ACCEPTANCE_FIELD_CLASS", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_ACPT_MSG = function() {
    try {
        if (document.MAINFORM.ACPT_MSG.value == 'MT752') {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, "M");
            if (document.MAINFORM.FURTHER_IDENTITY.value == "SEE72") {
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO_MT752, "M");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO_MT752, "O");
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO_MT752, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_ACPT_MSG", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_MESG_TYPE = function() {
    try {
        if (document.MAINFORM.MESG_TYPE.value == 'MT999' || document.MAINFORM.MESG_TYPE.value == 'MT799') {
            SYT_ChangeFldClass(document.MAINFORM.NARR, "M");
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, "M"); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.NARR.value = ''; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.NARR, "P");
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, "O"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_MESG_TYPE", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_NET_AMT = function() {
    try {
        var nNET_AMT; // Utility Auto Fix Comments
        var nOUR_CHGS_APPL; // Utility Auto Fix Comments
        var nTTL_DR_AMT; // Utility Auto Fix Comments
        //zoe edit 20090104
        //tracery add this method for payment logic

        //document.MAINFORM.NET_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.TOTAL_AMT.value);

        //Edit by amy 20120509
        nNET_AMT = 0;
        nTTL_DR_AMT = SYS_BeFloat(document.MAINFORM.TTL_DR_AMT.value);
        nOUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        nNET_AMT = nTTL_DR_AMT - nOUR_CHGS_APPL;
        document.MAINFORM.NET_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNET_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_NET_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_SEND_TO_SW_ADD = function() {
    try {
        var SW_SEND_TO_FLG; // Utility Auto Fix Comments
        SW_SEND_TO_FLG = document.MAINFORM.SW_SEND_TO_FLG.value;
        switch (SW_SEND_TO_FLG) {
            case "Advise Through Bank":
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
                break;

            case "Advising Bank":
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
                break;

            case "Reimbursing Bank":
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.REIM_BK_SW_ADD.value;
                break;

            case "Applicant Bank":
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.APPL_BK_SW_ADD.value;
                break;

            default:
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.PRES_BK_SW_ADD.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_SEND_TO_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TOTAL_AMT = function() {
    try {
        var ADV_BK_CHG; // Utility Auto Fix Comments
        var REIM_BK_CHG; // Utility Auto Fix Comments
        var nADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var nCHGS_DEDUCTED; // Utility Auto Fix Comments
        var nPRES_BK_CHGS; // Utility Auto Fix Comments
        var nSTL_AMT; // Utility Auto Fix Comments
        var nTOTAL_AMT; // Utility Auto Fix Comments
        //modified by zoe 20090104
        //tracery add this method for payment logic
        nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        nADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        nCHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        nPRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        ADV_BK_CHG = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        REIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);
        nTOTAL_AMT = 0;

        nTOTAL_AMT = nSTL_AMT + nADDIT_PRES_BK_AMTS - nCHGS_DEDUCTED + nPRES_BK_CHGS + ADV_BK_CHG + REIM_BK_CHG;

        document.MAINFORM.TOTAL_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nTOTAL_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_TOTAL_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TTL_CR_AMT = function() {
    try {
        var nNET_AMT; // Utility Auto Fix Comments
        var nOUR_CHGS_BENE; // Utility Auto Fix Comments
        var nTTL_CR_AMT; // Utility Auto Fix Comments
        //tracery add this method for payment logic
        nTTL_CR_AMT = 0;
        nNET_AMT = SYS_BeFloat(document.MAINFORM.NET_AMT.value);
        nOUR_CHGS_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);

        nTTL_CR_AMT = nNET_AMT - nOUR_CHGS_BENE;

        document.MAINFORM.TTL_CR_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nTTL_CR_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_TTL_CR_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TTL_DR_AMT = function() {
    try {
        var nADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var nADV_BK_CHG; // Utility Auto Fix Comments
        var nCHGS_DEDUCTED; // Utility Auto Fix Comments
        var nOUR_CHGS_APPL; // Utility Auto Fix Comments
        var nPRES_BK_CHGS; // Utility Auto Fix Comments
        var nREIM_BK_CHG; // Utility Auto Fix Comments
        var nSTL_AMT; // Utility Auto Fix Comments
        var nTOTAL_AMT; // Utility Auto Fix Comments
        var nTTL_DR_AMT; // Utility Auto Fix Comments
        //tracery add this method for payment logic
        /*
    nTTL_DR_AMT = 0;
    nOUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
    nTOTAL_AMT = SYS_BeFloat(document.MAINFORM.TOTAL_AMT.value);

    nTTL_DR_AMT = nTOTAL_AMT + nOUR_CHGS_APPL;
    document.MAINFORM.TTL_DR_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,nTTL_DR_AMT);
    */
        //Edit by amy 20120509
        nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        nADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        nCHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        nPRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        nADV_BK_CHG = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        nREIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);
        nTTL_DR_AMT = 0;
        nOUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);

        if (nSTL_AMT > 0) {
            nTTL_DR_AMT = nSTL_AMT + nADDIT_PRES_BK_AMTS - nCHGS_DEDUCTED + nPRES_BK_CHGS + nADV_BK_CHG + nREIM_BK_CHG + nOUR_CHGS_APPL;
        } else {
            nTTL_DR_AMT = 0;
        }
        document.MAINFORM.TTL_DR_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nTTL_DR_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Cal_TTL_DR_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_STL_AMT_Class_By_AVAL_BY = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            document.MAINFORM.STL_AMT.value = 0;
            document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.STL_AMT.value);
            SYT_ChangeFldClass_New('STL_AMT', 'P');
        } else {
            SYT_ChangeFldClass_New('STL_AMT', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Change_STL_AMT_Class_By_AVAL_BY", e);
    }
}

csFuncLevelProto.SYF_IPLC_Check_PaymentRecordAccepted = function() {
    try {
        var _Crdo; // Utility Auto Fix Comments
        var _Drdo; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        flag = false;
        for (i = 0; i < len; i++) {
            vDo = targetDo[i];
            if (vDo.getDoValueByName('CPYT_C_SDA_FLAG') != "Sight") {
                if (vDo.getDoValueByName('CPYT_D_MAT_DATE') == "" || vDo.getDoValueByName('CPYT_D_MAT_DATE') == null) {
                    alert("All the term payment records should be ACCEPTED first!");
                    return false;
                }
            } else {
                _Crdo = vDo.getDoByName("PaymentCredit"); // Utility Auto Fix Comments
                _Drdo = vDo.getDoByName("PaymentDebit"); // Utility Auto Fix Comments
                if (_Crdo.length < 1) { // Utility Auto Fix Comments
                    alert("No payment for Sight record."); // Utility Auto Fix Comments
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Check_PaymentRecordAccepted", e);
    }
}

csFuncLevelProto.SYF_IPLC_Check_TOTAL_AMT = function() {
    try {
        var nADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var nADV_BK_CHG; // Utility Auto Fix Comments
        var nCHGS_DEDUCTED; // Utility Auto Fix Comments
        var nPRES_AMT; // Utility Auto Fix Comments
        var nPRES_BK_CHGS; // Utility Auto Fix Comments
        var nRECEIVABLE_AMT; // Utility Auto Fix Comments
        var nREIM_BK_CHG; // Utility Auto Fix Comments
        var nTOTAL_AMT; // Utility Auto Fix Comments
        nPRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        nADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        nCHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        nPRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        nADV_BK_CHG = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        nREIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);
        nTOTAL_AMT = SYS_BeFloat(document.MAINFORM.TOTAL_AMT.value);
        nRECEIVABLE_AMT = nPRES_AMT + nADDIT_PRES_BK_AMTS - nCHGS_DEDUCTED + nPRES_BK_CHGS + nADV_BK_CHG + nREIM_BK_CHG; // Utility Auto Fix Comments
        if (nTOTAL_AMT != nRECEIVABLE_AMT) {
            alert("Total Amount Claimed (32B) should equal to Presentation Amount + Additional Amounts (33B) - Charges Deducted (71B) + Presenter Charges + Advising Bank Charges + Reimbursing Bank Charges, Please Check!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Check_TOTAL_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_ChgCallBack = function() {
    try {
        //tracery add this method for payment logic
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "No") {
            document.MAINFORM.OUR_CHGS_APPL.value = Chg.Screen.getLocalPayTotalAmt();
        } else {
            document.MAINFORM.OUR_CHGS_APPL.value = 0;
        }
        document.MAINFORM.OUR_CHGS_BENE.value = Chg.Screen.getForeignPayTotalAmt();
        document.MAINFORM.OUR_CHGS_BENE.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.OUR_CHGS_BENE.value);
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_APPL, "onchange");
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, "onchange");
        SYF_IPLC_Cal_NET_AMT();
        SYF_IPLC_Cal_TTL_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_ChgCallBack", e);
    }
}

csFuncLevelProto.SYF_IPLC_SET_CHG_AS_DEFFED_BY_SDA_FLG = function() {
    try {
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
            targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
            len = targetDo.length;
            if (len < 1) {
                if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
                    CHG_setAllChargeAt(Chg.AT_TRX);
                } else {
                    CHG_setAllChargeAt(Chg.AT_DEFERRED);
                }
                return;
            }
            flag = false;
            for (i = 0; i < len; i++) {
                vDo = targetDo[i];
                if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                    flag = true;
                }
            }
            if (flag) {
                CHG_setAllChargeAt(Chg.AT_TRX);
            } else {

                CHG_setAllChargeAt(Chg.AT_DEFERRED);

            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_SET_CHG_AS_DEFFED_BY_SDA_FLG", e);
    }
}

csFuncLevelProto.SYF_IPLC_Set_20Z = function() {
    try {
        var MT_Convert = document.MAINFORM.MT_Convert.value;

        var PaymentCredit_obj = SYS_GetObjByDoName('PaymentCredit');
        var PaymentCredit_length = PaymentCredit_obj.length;
        for (var i = 0; i < PaymentCredit_length; i++) {
            var CPYT_PAY_ADV_MSG = SYS_GetFldValueByDo(PaymentCredit_obj[i], 'CPYT_PAY_ADV_MSG');
            var CPYT_PAY_COV_MSG = SYS_GetFldValueByDo(PaymentCredit_obj[i], 'CPYT_PAY_COV_MSG');
            if (MT_Convert == 'YES' && (CPYT_PAY_ADV_MSG == 'MT103' || CPYT_PAY_COV_MSG == 'MT202')) {
                document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
            } else {
                document.MAINFORM.C_MAIN_REF_20Z.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_Set_20Z", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_IPLC_loadDoDataComplete = function() {
    try {
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "IQ") {
            SYF_IPLC_CAL_STL_AMT_BY_SDA_FLAG();

        }
        SYF_IPLC_SET_CHG_AS_DEFFED_BY_SDA_FLG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*SYF_IPLC_loadDoDataComplete", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IPLC_ACPT_MSG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_ACPT_MSG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_ACPT_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_ADV_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function(event) {
    try {
        SYF_IPLC_SET_CHG_AS_DEFFED_BY_SDA_FLG();
        SYF_IPLC_Change_STL_AMT_Class_By_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_AVAL_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_BENEF_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_BENEF_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_BENEF_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_BL_AWB_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_BL_AWB_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_BL_AWB_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CERTIFICATE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CERTIFICATE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CERTIFICATE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHGS_DEDUCTED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_DOC_PRES_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_DRAFT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_DRAFT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_DRAFT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_FREIGHT_INV_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_FREIGHT_INV_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_FREIGHT_INV_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FURTHER_IDENTITY_onchange = function(event) {
    try {
        SYF_IPLC_Cal_ACPT_MSG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_FURTHER_IDENTITY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INSP_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INSP_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INSP_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INSURANCE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INSURANCE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INSURANCE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INVOICE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INVOICE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_INVOICE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_MESG_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NET_AMT_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TTL_CR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_NET_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_OTHERS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_OTHERS_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_OTHERS_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OUR_CHGS_APPL_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
        SYF_IPLC_Cal_NET_AMT();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_OUR_CHGS_APPL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OUR_CHGS_BENE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TTL_CR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_OUR_CHGS_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PACK_LIST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PACK_LIST_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PACK_LIST_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_RECV_CORR_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_RCV_CORR_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();
        SYM_IPLC_SQL_RCV_CORR_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_CHG_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_REIM_BK_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_SEND_CORR_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_SEND_CORR_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
        SYM_IPLC_SQL_SEND_CORR_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEPARATE_CHG_FLG_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO();
        SYF_IPLC_ChgCallBack();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
        SYM_IPLC_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEPARATE_CHG_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_STL_AMT_onchange = function(event) {
    try {
        SYF_IPLC_CAL_PRES_BAL();
        SYF_IPLC_CAL_ACPT_AMT();
        //SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        //Edit by amy 20120509
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_STL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SW_SEND_TO_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SEND_TO_SW_ADD();
        EEHtml.fireEvent(document.MAINFORM.SEND_TO_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SW_SEND_TO_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TOTAL_AMT_onchange = function(event) {
    try {
        //SYF_IPLC_Cal_NET_AMT();
        //SYF_IPLC_Cal_TTL_DR_AMT();
        //document.MAINFORM.TTL_DR_AMT.fireEvent('onchange');
        //document.MAINFORM.NET_AMT.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_TOTAL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TTL_CR_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYM_IPLC_Set_TTL_CR_AMT_toPayment();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_TTL_CR_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TTL_DR_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYF_IPLC_Cal_NET_AMT();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT, 'onchange');
        SYM_IPLC_Set_TTL_DR_AMT_toPayment();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_TTL_DR_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_VESSEL_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_VESSEL_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_VESSEL_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYS_InqCUBK('PRES_CUST_ID');
        } else {
            SYT_BankLookUp(event.currentTarget);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_RCV_CORR_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_CORR_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_CORR_ID');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_RCV_CORR_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_SEND_CORR_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_CORR_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('SEND_CORR_ID');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_SEND_CORR_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept.js*FLD_IPLC_view_1_onclick", e);
    }
}