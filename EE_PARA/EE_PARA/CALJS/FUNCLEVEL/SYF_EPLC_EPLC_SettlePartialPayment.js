var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();

        //zoe added 20090107 
        document.MAINFORM.DISCNT_FLG.value = 'NO';
        //SYF_EPLC_CLEAR_STL_FIELDS();

        document.MAINFORM.TEMP_STL_BAL.value = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
        document.MAINFORM.TEMP_TTL_STL_AMT.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT.value);
        document.MAINFORM.TEMP_STL_AMT.value = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        SYF_EPLC_CAL_TEMP_REIM_BK_NM();

        SYF_EPLC_CAL_STL_FLG();

        SYF_EPLC_CAL_STL_AMT();

        SYF_EPLC_CAL_STL_BAL();

        SYM_EPLC_CLS_DRWG_FLG(); //MODULE LEVEL

        SYF_EPLC_CAL_TTL_STL_AMT();
        SYF_EPLC_STL_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TEMP_REIM_BK_NM = function() {
    try {

        document.MAINFORM.TEMP_REIM_BK_NM.value = document.MAINFORM.REIM_BK_NM.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EPLC_MPO_STL_AMT_BY_STL_FLG();
        SYM_EPLC_M_PRES_BK_CLS();
        SYT_CHG_INIT('SYF_EPLC_CHG_INIT_TO_RUN', 'SYF_EPLC_CHG_CALLBACK');

        SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT(); //MODULE LEVEL

        SYF_EPLC_MPO_STL_FLG_BY_ADDIT_AMT_CCY();

        SYT_DisableDivClass('I_div');
        //SYF_EPLC_STL_AMT();
        //SYF_EPLC_CAL_NET_PD_BENE();
        //SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        //SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();


        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.ISSUE_BK_CHG_CCY.value, 0);
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.ISSUE_BK_CHG_CCY.value, 0);
            document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.ISSUE_BK_CHG_CCY.value, 0);

        }
        SYM_EPLC_CAL_CHG_CASH_IND_back();
        SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "P");
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INIT_TO_RUN = function() {
    try {

        SYF_EPLC_CAL_SWIFT_CHG();
        SYF_EPLC_CAL_POST_CHG();
        SYM_EPLC_M_EPLC_COURIER_CHG();
        SYM_EPLC_M_EPLC_OTHER_CHG();
        Chg.calculate(["EPLC_UTIL_SIGHT_CHG"], document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
        Chg.calculate(["EPLC_UTIL_DEF_CHG"], document.MAINFORM.LC_CCY.value);
        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_SWIFT_CHG = function() {
    try {

        SYM_EPLC_M_EPLC_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();

        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_POST_CHG = function() {
    try {

        SYM_EPLC_M_EPLC_POST_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT = function() {
    try {

        /*
var STL_AMT = 0;
if (document.MAINFORM.STL_FLG.value=="Balance"){
STL_AMT= document.MAINFORM.TEMP_STL_BAL.value;
}else{
var ADDIT_PRES_BK_CCY = document.MAINFORM.ADDIT_PRES_BK_CCY.value;
var PRES_CCY = document.MAINFORM.PRES_CCY.value;
if (ADDIT_PRES_BK_CCY != PRES_CCY){
    SYS_GetExchangeRate(ADDIT_PRES_BK_CCY, PRES_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE_ADD_AMT_CCY.name);
}
else{
   document.MAINFORM.TEMP_RATE_ADD_AMT_CCY.value = 1;
}
var ADDIT_PRES_BK_AMTS =SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value)*SYS_BeFloat(document.MAINFORM.TEMP_RATE_ADD_AMT_CCY.value);
STL_AMT = ADDIT_PRES_BK_AMTS;

}

document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,STL_AMT);
document.MAINFORM.STL_AMT.fireEvent('onchange');

*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_BAL = function() {
    try {

        /*
//modified by zoe 20090107 
var nTEMP_STL_BAL = SYS_BeFloat(document.MAINFORM.TEMP_STL_BAL.value);
var nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
var nNEW_STL_BAL = 0;
if (document.MAINFORM.STL_FLG.value=="Balance"){
	nNEW_STL_BAL = nTEMP_STL_BAL - nSTL_AMT;
}else{
	nNEW_STL_BAL = 0;
}

document.MAINFORM.STL_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,nNEW_STL_BAL);
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_FLG = function() {
    try {

        //edit by zoe 20090107 for correct logic
        if (document.MAINFORM.ADDIT_PRES_BK_CCY.value == document.MAINFORM.PRES_CCY.value) {
            document.MAINFORM.STL_FLG.value = 'Balance';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_STL_AMT = function() {
    try {

        var nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        var nTEMP_TTL_STL_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_STL_AMT.value);
        var cPRES_CCY = document.MAINFORM.PRES_CCY.value;
        var nNEW_TTL_STL_AMT = nTEMP_TTL_STL_AMT + nSTL_AMT;

        document.MAINFORM.TTL_STL_AMT.value = SYT_AmtFormat(cPRES_CCY, nNEW_TTL_STL_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT_EXPECT = function() {
    try {

        /*
//modified by zoe 20090107
var STL_AMT =SYS_BeFloat(document.MAINFORM.STL_AMT.value);
var OUR_CHGS_APPL =SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
var REIM_BK_CHG =SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);		

var STL_AMT_EXPECT = STL_AMT + OUR_CHGS_APPL- REIM_BK_CHG;
document.MAINFORM.STL_AMT_EXPECT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,STL_AMT_EXPECT);
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_NET_PD_BENE = function() {
    try {

        //modified by zoe 20090107 for not considering Discount
        var TTL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        var OUR_CHGS_APPL = Chg.Screen.getForeignChgCustPayTotalAmt();
        var OUR_CHGS_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);
        var ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        var ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        var PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);

        NET_AMT_PD_BENE = TTL_AMT_RCV - OUR_CHGS_BENE;

        document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, NET_AMT_PD_BENE);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY = function() {
    try {

        //modified by zoe 20090107
        var nNET_AMT_PD_BENE = SYS_BeFloat(document.MAINFORM.NET_AMT_PD_BENE.value);
        var nTNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        var nASSIGN_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.ASSIGN_DEDUCT_AMT.value);
        var nADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);
        var cPRES_CCY = document.MAINFORM.PRES_CCY.value;

        var nNEW_AMT_TO_BENE_PRES_CCY = nNET_AMT_PD_BENE;


        document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(cPRES_CCY, nNEW_AMT_TO_BENE_PRES_CCY);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_EXCH_RT_BENE_CREDIT_CCY = function() {
    try {

        var cBENE_CREDIT_CCY = document.MAINFORM.BENE_CREDIT_CCY.value;
        var cPRES_CCY = document.MAINFORM.PRES_CCY.value;

        if (cBENE_CREDIT_CCY != cPRES_CCY) {
            SYS_GetExchangeRate(cPRES_CCY, cBENE_CREDIT_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE.name);
        } else {
            document.MAINFORM.TEMP_RATE.value = 1;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_BENE_CREDIT_AMT = function() {
    try {

        var nAMT_TO_BENE_PRES_CCY = SYS_BeFloat(document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
        var rTEMP_RATE = SYS_BeFloat(document.MAINFORM.TEMP_RATE.value);
        var cBENE_CREDIT_CCY = document.MAINFORM.BENE_CREDIT_CCY.value;
        var cPRES_CCY = document.MAINFORM.PRES_CCY.value;
        var nNEW_BENE_CREDIT_AMT = nAMT_TO_BENE_PRES_CCY * rTEMP_RATE


        if (cPRES_CCY == cBENE_CREDIT_CCY) {
            document.MAINFORM.BENE_CREDIT_AMT.value = SYT_AmtFormat(cPRES_CCY, nAMT_TO_BENE_PRES_CCY);
        } else {
            document.MAINFORM.BENE_CREDIT_AMT.value = SYT_AmtFormat(cBENE_CREDIT_CCY, nNEW_BENE_CREDIT_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUR_CHGS_APPL = function() {
    try {

        /*
document.MAINFORM.OUR_CHGS_APPL.value =Chg.Screen.getForeignPayTotalAmt();

document.MAINFORM.OUR_CHGS_APPL.fireEvent("onchange");
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUR_CHGS_BENE = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            document.MAINFORM.OUR_CHGS_BENE.value = Chg.Screen.getLocalPayTotalAmt();

        } else {
            document.MAINFORM.OUR_CHGS_BENE.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_CALLBACK = function() {
    try {

        SYF_EPLC_CAL_OUR_CHGS_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, "onchange");

        SYF_EPLC_CAL_OUR_CHGS_APPL();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_APPL, "onchange");
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_BY_STL_INSTR_FLG = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            CHG_set_UsedChgACFlag(false);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "P");
        } else {
            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_STL_AMT_RCV = function() {
    try {

        document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLEAR_STL_FIELDS = function() {
    try {

        document.MAINFORM.ADV_BK_CHGS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ADV_BK_CHG_AC_NO.value = "";
        document.MAINFORM.PRES_BK_CHGS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ISSUE_BK_CHG.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.CHGS_DEDUCTED.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.REIM_BK_CHG.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ADV_BK_CHG_APPL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ADV_BK_CHGS_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        if (document.MAINFORM.ADDIT_PRES_BK_CCY.value == document.MAINFORM.PRES_CCY.value) {
            document.MAINFORM.ADDIT_PRES_BK_AMTS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_STL_AMT_BY_STL_FLG = function() {
    try {

        if (document.MAINFORM.STL_FLG.value == 'Balance') {
            SYT_ChangeFldClass(document.MAINFORM.STL_AMT, 'M');

        } else {

            SYT_ChangeFldClass(document.MAINFORM.STL_AMT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_STL_FLG_BY_ADDIT_AMT_CCY = function() {
    try {

        if (document.MAINFORM.ADDIT_PRES_BK_CCY.value == document.MAINFORM.PRES_CCY.value) {
            SYT_ChangeFldClass(document.MAINFORM.STL_FLG, 'P');
        } else {

            SYT_ChangeFldClass(document.MAINFORM.STL_FLG, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_CLM_AMT = function() {
    try {

        /*
//added by zoe 20090107
var STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
var OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
var TTL_CLM_AMT = STL_AMT + OUR_CHGS_APPL;
document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,TTL_CLM_AMT);
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CONF_BAL = function() {
    try {

        //added by zoe 20090116
        if (SYS_FUNCTION_TYPE != "IQ" && SYS_FUNCTION_TYPE != "RE") {
            var nNew_CONF_BAL = 0.0;
            var nNew_LIAB_BAL = 0.0;
            var nCONF_BAL = SYS_BeFloat(document.MAINFORM.CONF_BAL.value);
            var nLIAB_BAL = SYS_BeFloat(document.MAINFORM.LIAB_BAL.value);
            var nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
            if (nTempSTL_AMT == -1) {
                nTempSTL_AMT = 0;
                if (SYS_FUNCTION_TYPE == "EC") {
                    nTempSTL_AMT = nSTL_AMT;
                }
            }
            nNew_CONF_BAL = Math.max(0, nCONF_BAL - nSTL_AMT + nTempSTL_AMT);
            nNew_LIAB_BAL = Math.max(0, nLIAB_BAL - nSTL_AMT + nTempSTL_AMT);
            nTempSTL_AMT = nSTL_AMT;

            if (document.MAINFORM.OUR_ENG.value == 'CONFIRMATION' || document.MAINFORM.OUR_ENG.value == 'SILENT CONFIRMATION') {
                document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNew_CONF_BAL);
                document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNew_LIAB_BAL);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_STL_AMT = function() {
    try {

        var STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        var TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        var STL_BAL = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
        var ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        var ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        var PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        var OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        var ISSUE_BK_CHG = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value);
        var CHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        var REIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);
        var PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        var TTL_CLM_AMT = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value);
        var TEMP_STL_BAL = SYS_BeFloat(document.MAINFORM.TEMP_STL_BAL.value);
        var STL_AMT = TEMP_STL_BAL;
        document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, STL_AMT);
        STL_BAL = TEMP_STL_BAL - STL_AMT;
        document.MAINFORM.STL_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, STL_BAL);
        SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "P");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHECK_STL_BAL = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.STL_BAL.value) < 0 || SYS_BeFloat(document.MAINFORM.STL_AMT.value) < 0) {
            document.MAINFORM.TTL_STL_AMT_RCV.value = 0.00;
            document.MAINFORM.STL_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_BAL.value);
            document.MAINFORM.STL_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_AMT.value);

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_TO_BENE_PRES_CCY_onchange = function(event) {
    try {
        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO' ,'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO','C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CREDIT_CCY_onchange = function(event) {
    try {
        SYF_EPLC_CAL_EXCH_RT_BENE_CREDIT_CCY();
        SYF_EPLC_CAL_BENE_CREDIT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_TTL_CLM_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        SYM_EPLC_TTL_CLM_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NET_AMT_PD_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_APPL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TTL_CLM_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_CLM_AMT, 'onchange');
        SYF_EPLC_CAL_NET_PD_BENE();
        SYF_EPLC_CAL_STL_AMT_EXPECT();
        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_ID_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYT_GetCUBK_All('BENE_NEGO_ID', document.MAINFORM.PRES_BK_ID.name);
                lbi_CLASS_DOC_PRES_BY();
            } else {
                SYT_GetCUBK_All('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name);
            }
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegisterDocsnot') {

            SYM_EPLC_PRES_BK_TO_BENE();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYM_EPLC_SQL_PRESENTER_CUST();
            } else {
                SYT_BankLookUp(event.currentTarget);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_POST_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ADD1_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ADD2_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ADD3_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ADD_BTN_MT752_onclick = function(event) {
    try {
        SYS_InqCUBK('RCVCORR_BK_ADD_MT752', 'RCV_CORR_BK_ID_MT752', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ID_BTN_MT752_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ID_MT752_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_CORR_BK_ID_MT752', 'RCV_CORR_BK_ID_MT752');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_NM_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_ORDER_NO_MT752_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_CORR_BK_SW_ADD_MT752_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_CHG_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_STL_AMT_EXPECT();
        //document.MAINFORM.STL_AMT_EXPECT.fireEvent('onchange');
        SYM_EPLC_TTL_CLM_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ADD1_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.SEND_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ADD2_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.SEND_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ADD3_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.SEND_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ADD_BTN_MT752_onclick = function(event) {
    try {
        SYS_InqCUBK('SENDCORR_BK_ADD_752', 'SEND_CORR_BK_ID_MT752', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ID_BTN_MT752_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ID_MT752_onchange = function(event) {
    try {
        SYT_GetCUBK_All('SEND_CORR_BK_ID_MT752', 'SEND_CORR_BK_ID_MT752');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_NM_MT752_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.SEND_CORR_BK_SW_ADD_MT752));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_ORDER_NO_MT752_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_CORR_BK_SW_ADD_MT752_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TTL_STL_AMT();

        SYF_EPLC_CAL_STL_BAL();
        SYF_EPLC_CAL_STL_FLG();

        SYF_EPLC_CAL_TTL_CLM_AMT();

        SYM_EPLC_CLS_DRWG_FLG(); //MODULE LEVEL

        SYF_EPLC_CAL_STL_AMT_EXPECT();
        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
        SYF_EPLC_CAL_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_EXPECT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TTL_STL_AMT_RCV();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MPO_STL_AMT_BY_STL_FLG();
        SYF_EPLC_CAL_STL_AMT();
        SYF_EPLC_CAL_STL_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EPLC_BY_STL_INSTR_FLG();
        SYF_EPLC_CAL_OUR_CHGS_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, 'onchange');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSFR_DOCS_DEDUCT_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
        SYF_EPLC_CAL_EXCH_RT_BENE_CREDIT_CCY();
        SYF_EPLC_CAL_BENE_CREDIT_AMT();
        SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT(); //MODULE LEVEL
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TTL_STL_AMT_RCV_onchange = function(event) {
    try {
        //SYF_EPLC_STL_AMT();
        SYF_EPLC_CAL_NET_PD_BENE();
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EPLC_CHECK_VALUE_DT_CR();
        SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
        SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
        SYF_EPLC_CHECK_STL_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR')
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD')
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SettlePartialPayment.js", e);
    }
}