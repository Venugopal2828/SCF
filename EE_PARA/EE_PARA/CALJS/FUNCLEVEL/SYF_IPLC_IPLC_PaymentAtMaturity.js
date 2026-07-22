var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
        SYT_Cal_C_TRANS_CODE();

        // Add by jane for Liability Voucher
        SYT_LIAB_VOUCHER();

        //DANE
        SYF_IPLC_CAL_PAYMENT_AC_DESC();

        //aDD BY JANE AT 20090324 for PRES BAL
        SYF_IPLC_CAL_PRES_BAL();
        document.MAINFORM.TEMP_STL_AMT.value = document.MAINFORM.STL_AMT.value;
        SYF_IPLC_Set_20Z();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return (SYF_IPLC_Check_PaymentRecord() && Cal_eloan_fields_IPLC());
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_IPLC_INIT();
        SYM_IPLC_INIT_FOR_DT();
        SYF_IPLC_PRESENTER_CLASS();
        //tracery invoke these method for payment logic
        document.MAINFORM.STL_AMT.value = document.MAINFORM.PRES_AMT.value;
        SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO();

        //for liability account
        SYM_IPLC_CAL_TEMP_LIAB_ACNO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        //notes
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        //Add by Jack on 20120905 for SMBC workshop
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        //Add by Jack on 20120904 for SMBC workshop
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYM_IPLC_Cal_PRES_BK_ID_back();
        //charges

        //SYM_IPLC_CHG_mapLocal_Foreign_Cust();//Modified by Jack on 20120905 for SMBC Workshop
        SYM_IPLC_CHG_map_Cust_SMBC();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.attchEvent(SYF_IPLC_ChgCallBack); //tracery invoke this method for payment logic

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            if (document.MAINFORM.FORACOF_ID.value == 'C000087') {
                SYT_RESET_COMM('IPLC_POST_CHG');
                SYT_RESET_COMM('IPLC_COURIER_CHG');
            } else {
                SYM_IPLC_Chg_Postageand();
                SYM_IPLC_Chg_SpecialCourier();
            }

            SYM_IPLC_Chg_SpecialHandlingFee();
            SYM_IPLC_Chg_SWIFT_CHG();
            SYM_IPLC_Chg_Calculation_Other();
            SYF_IPLC_setDefChargeAt();
        }

        /*invoke CHG_setAllCollCcy(),SYT_Set_TRXCCY2CHG(),CHG_TRX_DATE(),SYT_Cal_CHG_FLD_LOCAL_CUST_CCY()*/
        SYM_IPLC_Chg_Init_FOR_Charge();

        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('P_div');
        SYT_DisableDivClass('O_div');
        SYF_IPLC_Cal_STL_FLG();
        SYM_IPLC_CAL_CHG_CASH_IND_back();
        SYF_IPLC_Change_Charges_Class();
        /* if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
        } else {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'M');
        }*/

        //MPO_Collateral_SECTION();
        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();
        SYF_IPLC_MT798_FLAG();

        CHG_DefCharge_chargeAtOnchange();
        EEHtml.getElementById('V').style.display = 'none';
        if (document.MAINFORM.DISCNT_FLG.value == 'NO') {
            SYT_DisableDivClass('W_div');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*PostconditionOnInit", e);
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
        var ntype; // Utility Auto Fix Comments
        _Dr = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        _Cr = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        Drlen = _Dr.length; // Utility Auto Fix Comments
        Crlen = _Cr.length; // Utility Auto Fix Comments
        for (i = 0; i < Drlen; i++) { // Utility Auto Fix Comments
            DR_TYPE = _Dr[i].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
            ntype = DR_TYPE.substring(0, 1);
            dr_desc = "IPLC06NULLNULLNULL" + ntype;
            SYS_UpdateFldValueByDo(_Dr[i], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
        }
        for (i = 0; i < Crlen; i++) {
            CR_TYPE = _Cr[i].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
            ntype = CR_TYPE.substring(0, 1);
            cr_desc = "IPLC06NULLNULLNULL" + ntype;
            SYS_UpdateFldValueByDo(_Cr[i], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_CAL_PAYMENT_AC_DESC", e);
    }
}

csFuncLevelProto.SYF_IPLC_HiddenDiscountTab = function() {
    try {
        var discount; // Utility Auto Fix Comments
        var discount_SEPA; // Utility Auto Fix Comments
        var targetDo_FincSinglePayment; // Utility Auto Fix Comments
        var targetDo_PaymentDealer; // Utility Auto Fix Comments
        discount = EEHtml.getElementById('W');
        discount_SEPA = EEHtml.getElementById('W_SEPA');
        if ("NO" == document.MAINFORM.DISCNT_FLG.value) {
            discount.style.display = 'none';
            discount_SEPA.style.display = 'none';
        }

        targetDo_PaymentDealer = SYS_GetObjByDoName("PaymentDealer");
        targetDo_FincSinglePayment = SYS_GetObjByDoName("FincSinglePayment");

        if (targetDo_PaymentDealer && targetDo_FincSinglePayment) {
            //alert(targetDo_FincSinglePayment[0].getDoValueByName('DISCOUNT_TAB_KEY'));
            if (targetDo_FincSinglePayment[0].getDoValueByName('DISCOUNT_TAB_KEY') != targetDo_PaymentDealer[0].getDoValueByName('CPYT_C_SDA_FLAG') + targetDo_PaymentDealer[0].getDoValueByName('CPYT_C_PAY_PER') + targetDo_PaymentDealer[0].getDoValueByName('CPYT_I_TENOR_DAYS')) {
                discount.style.display = 'none';
                discount_SEPA.style.display = 'none';
            }
        }
        //Add by Miya for cfnc start
        if (C_FUNC_SHORT_NAME == "Establishment" || C_FUNC_SHORT_NAME == "FinanceRepay") {
            discount.style.display = "";
            discount_SEPA.style.display = "";
        }
        //Add by Miya for cfnc end
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_HiddenDiscountTab", e);
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
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_CAL_PRES_BAL", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_STL_AMT = function() {
    try {
        document.MAINFORM.STL_AMT.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
      //  document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_CAL_STL_AMT", e);
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
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_TTL_STL_AMT_RCV = function() {
    try {
       // document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.STL_AMT.value);
         var AVAL_BY;
        AVAL_BY = document.MAINFORM.AVAL_BY.value;
        if(AVAL_BY !="BY MIXED PYMT"){
        	document.MAINFORM.TTL_STL_AMT_DR.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TOTAL_AMT.value);
        }
        else{
        	var ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
            var OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
            var PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
            var ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value)
        	 var totalamount = SYS_BeFloat(document.MAINFORM.STL_AMT.value)+ ADV_BK_CHGS + OUR_CHGS_APPL + PRES_BK_CHGS + ADDIT_PRES_BK_AMTS;
        	   	document.MAINFORM.TTL_STL_AMT_DR.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, totalamount);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAtMaturity.js*SYF_IPLC_CAL_TTL_STL_AMT_RCV", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_MESG_TYPE = function() {
    try {
        if (document.MAINFORM.MESG_TYPE.value == 'MT799') {
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR, "M");
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, "M");
            document.MAINFORM.X798_SEND_TO_RCV_INFO.value = '';
            document.MAINFORM.NARR_TAG_79Z.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79Z, "P");
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT999') {
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR, "M");
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, "M");
            document.MAINFORM.X798_SEND_TO_RCV_INFO.value = '';
            document.MAINFORM.NARR_TAG_79Z.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79Z, "P");
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT756') {
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79Z, "M");
        } else {
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, "O");
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR, "P");
            document.MAINFORM.X798_SEND_TO_RCV_INFO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.X798_SEND_TO_RCV_INFO, "O");
            document.MAINFORM.NARR_TAG_79Z.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79Z, "P");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_MESG_TYPE", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_NET_AMT = function() {
    try {
        var nNET_AMT; // Utility Auto Fix Comments
        var nOUR_CHGS_APPL; // Utility Auto Fix Comments
        var nTTL_DR_AMT; // Utility Auto Fix Comments
        //zoe edit 20090104

            //document.MAINFORM.NET_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.STL_AMT.value);
        var nADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value); 
        var nCHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value); 
        var nPRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value); 
        var ADV_BK_CHG = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value); 
        var REIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value); 
        document.MAINFORM.NET_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,SYS_BeFloat(document.MAINFORM.STL_AMT.value) + nADDIT_PRES_BK_AMTS - nCHGS_DEDUCTED + nPRES_BK_CHGS + ADV_BK_CHG + REIM_BK_CHG); 
        //Edit by amy 20120509
        /*
    nNET_AMT = 0;
    nTTL_DR_AMT = SYS_BeFloat(document.MAINFORM.TTL_DR_AMT.value);
    nOUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
    nNET_AMT = nTTL_DR_AMT - nOUR_CHGS_APPL;
    document.MAINFORM.NET_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,nNET_AMT);
    */
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_NET_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_STL_FLG = function() {
    try {
        if (document.MAINFORM.STL_FLG.value == 'By Account') {
            SYT_DisableDiv('V_div');
        } else {
            //SYT_EnableDivClass('V_div'); for Suang's mail BS118
            SYT_DisableDiv('V_div');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_STL_FLG", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_Send_to_SW_Add = function() {
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
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_Send_to_SW_Add", e);
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
        //eddit by zoe 20090104
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
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_TOTAL_AMT", e);
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
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_TTL_CR_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TTL_DR_AMT = function() {
    try {
        var ADV_BK_CHG; // Utility Auto Fix Comments
        var REIM_BK_CHG; // Utility Auto Fix Comments
        var nADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var nCHGS_DEDUCTED; // Utility Auto Fix Comments
        var nOUR_CHGS_APPL; // Utility Auto Fix Comments
        var nPRES_BK_CHGS; // Utility Auto Fix Comments
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
        ADV_BK_CHG = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        REIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);
        nTTL_DR_AMT = 0;
        nOUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);

        nTTL_DR_AMT = nSTL_AMT + nADDIT_PRES_BK_AMTS - nCHGS_DEDUCTED + nPRES_BK_CHGS + ADV_BK_CHG + REIM_BK_CHG + nOUR_CHGS_APPL;
        document.MAINFORM.TTL_DR_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nTTL_DR_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Cal_TTL_DR_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_Charges_Class = function() {
    try {
        if (document.MAINFORM.CHG_TRANSFER_TO_FLAG.value == 'YES') {
            SYT_ChangeFldClass_New('ADDIT_PRES_BK_AMTS', 'P');
            SYT_ChangeFldClass_New('CHGS_DEDUCTED', 'P');
            SYT_ChangeFldClass_New('PRES_BK_CHGS', 'P');
            SYT_ChangeFldClass_New('ADV_BK_CHGS', 'P');
            SYT_ChangeFldClass_New('REIM_BK_CHG', 'P'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Change_Charges_Class", e);
    }
}

csFuncLevelProto.SYF_IPLC_Check_PaymentRecord = function() {
    try {
        var _Crdo; // Utility Auto Fix Comments
        var _Drdo; // Utility Auto Fix Comments
        _Crdo = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        _Drdo = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        if (_Crdo.length < 1) { // Utility Auto Fix Comments
            alert("No payment information."); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Check_PaymentRecord", e);
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
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_APPL, "onchange");
        document.MAINFORM.OUR_CHGS_BENE.value = Chg.Screen.getForeignPayTotalAmt();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, "onchange");

        SYF_IPLC_Cal_NET_AMT();
        SYF_IPLC_Cal_TTL_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_ChgCallBack", e);
    }
}

csFuncLevelProto.SYF_IPLC_FOR_DISCOUNT = function() {
    try {
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CHG, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHGS_DEDUCTED, "P");
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG, "P");
            //SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CHGS_BENE, "P");
            //SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, "P");
            //SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_AC_NO, "P");
            document.MAINFORM.SEPARATE_CHG_FLG.value = 'Yes';
            document.MAINFORM.OUR_CHGS_BENE.value = 0.00;

            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_FOR_DISCOUNT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Init_FinanceInfo = function() {
    try {
        document.MAINFORM.LC_REFINANCE_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.LC_REFINANCE_CREATE_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.LC_REFINANCE_C_REF_NO.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.LC_REFINANCE_TRX_VALDATE.value = SYS_BUSI_DATE;
        document.MAINFORM.LC_REFINANCE_TRX_AMT.value = document.MAINFORM.STL_AMT.value;
        document.MAINFORM.LC_REFINANCE_CCY_CODE.value = document.MAINFORM.LC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Init_FinanceInfo", e);
    }
}

csFuncLevelProto.SYF_IPLC_MT798_FLAG = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_MT798_FLAG", e);
    }
}

csFuncLevelProto.SYF_IPLC_PRESENTER_CLASS = function() {
    try {
        document.MAINFORM.PRES_BK_ID_BTN.disabled = true;
        document.MAINFORM.PRES_BK_POST_ADD_BTN.disabled = true;
        document.MAINFORM.PRES_BK_ADD_BTN.disabled = true;
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_NM, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD1, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD2, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD3, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_OFF_CODE, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_NO, "P");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_PRESENTER_CLASS", e);
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
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_Set_20Z", e);
    }
}

csFuncLevelProto.SYF_IPLC_loadDoDataComplete = function() {
    try {
            if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {        
            SYF_IPLC_CAL_STL_AMT();
            SYF_IPLC_CAL_TTL_STL_AMT_RCV();
            SYF_IPLC_FOR_DISCOUNT();
            //SYF_IPLC_CAL_AMT_TO_BENE_PRES_CCY();
            SYM_IPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit(); 
            SYM_IPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
            var targetDo_PaymentDealer = SYS_GetObjByDoName("PaymentDealer");
            document.MAINFORM.TENOR_START_DT.value = 	targetDo_PaymentDealer[0].getDoValueByName('CPYT_D_TENOR_START_DATE'); 
            document.MAINFORM.TENOR_DAYS.value = 	targetDo_PaymentDealer[0].getDoValueByName('CPYT_I_TENOR_DAYS'); 
            document.MAINFORM.MATURITY_DT.value = 	targetDo_PaymentDealer[0].getDoValueByName('CPYT_D_MAT_DATE'); 
        }
        AddoneRecordtoCredit();
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            CalcInterestAmount();
        } else {
            SYF_IPLC_HiddenDiscountTab();
        }
        SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "P");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_loadDoDataComplete", e);
    }
}

csFuncLevelProto.SYF_IPLC_setDefChargeAt = function() {
    try {
        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        defChgArr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < defChgArr.length; i++) {
            charge = defChgArr[i];
            charge.setChargeAt("0");
            charge.chargeAtOnchange();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*SYF_IPLC_setDefChargeAt", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        if (document.MAINFORM.ADDIT_PRES_BK_AMTS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADDIT_PRES_BK_AMTS.value = 0;
        }



        SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CHGS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADV_BK_CHGS.value = 0;
        }


        SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_ADV_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_IPLC_MT798_FLAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_APPLY_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_BENEF_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_BENEF_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_BENEF_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_BL_AWB_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_BL_AWB_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_BL_AWB_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CERTIFICATE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CERTIFICATE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CERTIFICATE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        if (document.MAINFORM.CHGS_DEDUCTED.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHGS_DEDUCTED.value = 0;
        }



        SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHGS_DEDUCTED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_DRAFT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_DRAFT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_DRAFT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_FREIGHT_INV_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_FREIGHT_INV_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_FREIGHT_INV_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INSP_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INSP_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INSP_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INSURANCE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INSURANCE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INSURANCE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INVOICE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INVOICE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_INVOICE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_MESG_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NET_AMT_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TTL_CR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_NET_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_OTHERS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_OTHERS_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_OTHERS_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OUR_CHGS_APPL_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
        SYF_IPLC_Cal_NET_AMT();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_OUR_CHGS_APPL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OUR_CHGS_BENE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TTL_CR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_OUR_CHGS_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_PACK_LIST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_PACK_LIST_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_PACK_LIST_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_BK_CHGS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_BK_CHGS.value = 0;
        }


        SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_PRES_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_CHG_onchange = function(event) {
    try {
        if (document.MAINFORM.REIM_BK_CHG.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REIM_BK_CHG.value = 0;
        }



        SYF_IPLC_Cal_TOTAL_AMT();
        //document.MAINFORM.TOTAL_AMT.fireEvent('onchange');
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_REIM_BK_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEPARATE_CHG_FLG_onchange = function(event) {
    try {
        SYF_IPLC_CHG_FLD_LOCAL_CUST_AC_NO();
        SYF_IPLC_ChgCallBack();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
        SYM_IPLC_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_SEPARATE_CHG_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_STL_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.STL_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.STL_AMT.value = 0;
        }
        var STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        var PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        if (STL_AMT > PRES_AMT) {
            alert("Settlement Amount should not exeeds Presentation Amount");
            document.MAINFORM.STL_AMT.value = 0;
        }
        SYF_IPLC_Cal_TOTAL_AMT();
        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_STL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_STL_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_STL_FLG();
        if (document.MAINFORM.STL_FLG.value == 'By Loan') {
            SYF_IPLC_Init_FinanceInfo();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_STL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SW_SEND_TO_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_Send_to_SW_Add();
        EEHtml.fireEvent(document.MAINFORM.SEND_TO_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_SW_SEND_TO_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TOTAL_AMT_onchange = function(event) {
    try {
        SYF_IPLC_Cal_NET_AMT();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT, 'onchange');

        SYF_IPLC_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_TOTAL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TTL_CR_AMT_onchange = function(event) {
    try {
        SYM_IPLC_Set_TTL_CR_AMT_toPayment();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_TTL_CR_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TTL_DR_AMT_onchange = function(event) {
    try {
        SYF_IPLC_Cal_NET_AMT();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT, 'onchange');
        SYM_IPLC_Set_TTL_DR_AMT_toPayment();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_TTL_DR_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_VESSEL_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_VESSEL_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_VESSEL_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PaymentAtMaturity.js*FLD_IPLC_view_1_onclick", e);
    }
}