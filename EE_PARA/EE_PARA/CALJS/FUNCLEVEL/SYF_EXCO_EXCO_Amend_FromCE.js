var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_EXCO_AFTER_DRWR_ID = function() {
    try {

        EEHtml.fireEvent(document.MAINFORM.DRWR_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_AFTER_NEW_DRWE_ID = function() {
    try {

        if (document.MAINFORM.COLL_TYPE.value == "Documentary Through Bank" || document.MAINFORM.COLL_TYPE.value == "Clean Through Bank") {
            SYF_EXCO_MPO_BY_NEW_DRWE_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_AMD_COMM = function() {
    try {

        SYT_CAL_COMM('EXCO_AMEND_COMM', document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_BILL_INSTR = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            document.MAINFORM.BILL_INSTR.value = "None";
        } else {
            document.MAINFORM.BILL_INSTR.value = "Collect Bill at Maturity";
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_COLL_AMT = function() {
    try {

        var nCOLL_AMT; // Utility Auto Fix Comments
        var nDEC_AMT; // Utility Auto Fix Comments
        var nINC_AMT; // Utility Auto Fix Comments
        nINC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        nDEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        nCOLL_AMT = SYS_BeFloat(document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value);

        document.MAINFORM.COLL_TRX_CCY_AMT.value = nCOLL_AMT + nINC_AMT - nDEC_AMT;
        document.MAINFORM.COLL_TRX_CCY_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_DUE_DT = function() {
    try {

        var newtdays; // Utility Auto Fix Comments
        newtdays = (document.MAINFORM.NEW_DAY_MON_FLG.value == "Days") ? SYS_BeInt(document.MAINFORM.NEW_TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.NEW_TENOR_DAYS.value) * 30;
        if (newtdays > 0 && document.MAINFORM.NEW_TENOR_START_DT.value != "" && document.MAINFORM.NEW_DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.NEW_TENOR_START_DT.value, newtdays, SYF_EXCO_CALL_NEW_DUE_DT_back, 'A', 'N', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_DUE_DT_back = function(nduedt) {
    try {

        document.MAINFORM.NEW_DUE_DT.value = nduedt;
        EEHtml.fireEvent(document.MAINFORM.NEW_DUE_DT, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NO_OF_AMD = function() {
    try {

        var nNO_OF_AMD; // Utility Auto Fix Comments
        nNO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        nNO_OF_AMD = nNO_OF_AMD + 1;
        document.MAINFORM.NO_OF_AMD.value = nNO_OF_AMD;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_SWIFT_CHG = function() {
    try {

        SYM_EXCO_M_EXCO_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_COURIER = function() {
    try {

        var nTimes; // Utility Auto Fix Comments
        var nTimes_1; // Utility Auto Fix Comments
        var nTimes_2; // Utility Auto Fix Comments
        //eddit for Bug 1222:No commissions should be applied for the Mail Method 2nd field,Courier Charge will apply as now, ie when  "Mail Method 1st" = Courier 
        nTimes_1 = 0;
        nTimes_2 = 0;
        nTimes = 0;
        if (document.MAINFORM.MAIL_METHOD_1ST.value == "Courier" || document.MAINFORM.MAIL_METHOD_2ND.value == "Courier") {
            nTimes_1 = 1;
            if (document.MAINFORM.MAIL_METHOD_1ST.value == document.MAINFORM.MAIL_METHOD_2ND.value) {
                nTimes_1 = 2;
            }
        } else {
            nTimes_1 = 0;
        }


        nTimes = nTimes_1;

        //if nTimes is zero, the system will run Chg.reset() then return
        SYM_EXCO_M_EXCO_COURIER_CHG(nTimes);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_MAIL = function() {
    try {

        var nTimes; // Utility Auto Fix Comments
        var nTimes_1; // Utility Auto Fix Comments
        var nTimes_2; // Utility Auto Fix Comments
        //eddit for Bug 1222:system always populate the Postage Charge, not affected by the Mail Method field

        nTimes_1 = 0;
        nTimes_2 = 0;
        nTimes = 0;
        if (document.MAINFORM.MAIL_METHOD_1ST.value == "Mail" || document.MAINFORM.MAIL_METHOD_2ND.value == "Mail" || document.MAINFORM.MAIL_METHOD_1ST.value == "Registered Mail" || document.MAINFORM.MAIL_METHOD_2ND.value == "Registered Mail") {
            nTimes_1 = 1;
            if (document.MAINFORM.MAIL_METHOD_1ST.value == document.MAINFORM.MAIL_METHOD_2ND.value) {
                nTimes_1 = 2;
            }
        } else {
            nTimes_1 = 0;

        }

        nTimes = nTimes_1;
        SYM_EXCO_M_EXCO_POST_CHG(nTimes);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NEW_TENOR_DAYS_BY_SIGHT = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
            document.MAINFORM.NEW_DAY_MON_FLG.value = 'Days';
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = 'After sight';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NEW_TENOR_FORM_MAP = function() {
    try {

        var Day_Month; // Utility Auto Fix Comments
        var deliver_agst; // Utility Auto Fix Comments
        var tenor_days; // Utility Auto Fix Comments
        var tenor_type; // Utility Auto Fix Comments
        tenor_days = SYS_BeFloat(document.MAINFORM.NEW_TENOR_DAYS.value);
        Day_Month = document.MAINFORM.NEW_DAY_MON_FLG.value;
        tenor_type = document.MAINFORM.NEW_TENOR_TYPE.value;
        deliver_agst = document.MAINFORM.DELVR_DOC_AGST.value;
        if (tenor_days == 0) {
            tenor_days = '';
            Day_Month = '';
        }

        if (Day_Month == "Days" && tenor_days == 1) {
            Day_Month = " day";
        }
        if (Day_Month == "Days" && tenor_days > 1) {
            Day_Month = " days";
        }
        if (Day_Month == "Months" && tenor_days == 1) {
            Day_Month = " month";
        }
        if (Day_Month == "Months" && tenor_days > 1) {
            Day_Month = " months";
        }

        if (tenor_type == "After date of Bill of Exchange") {
            tenor_type = " after date of Bill of exchange";
        }
        if (tenor_type == "After customs clearance of goods") {
            tenor_type = " after customs clearance of goods";
        }
        if (tenor_type == "After goods pass food and drug administration") {
            tenor_type = " after goods pass food and drug administration";
        }
        if (tenor_type == "First presentation") {
            tenor_type = " after first presentation";
        }
        if (tenor_type == "After arrival of goods") {
            tenor_type = " after arrival of goods";
        }
        if (tenor_type == "After invoice date") {
            tenor_type = " after invoice date";
        }
        if (tenor_type == "After sight") {
            tenor_type = " after sight";
        }
        if (tenor_type == "After date of transport document") {
            tenor_type = " after date of transport document";
        }
        if (tenor_type == "Fixed Maturity") {
            tenor_type = "Fixed Maturity";
        }
        if (tenor_type == "See Below") {
            tenor_type = " " + document.MAINFORM.NEW_TENOR_DETAILS.value;
        }

        if (deliver_agst == "D/P") {
            deliver_agst = "Sight";
            document.MAINFORM.TEMP_NEW_TENOR_FORM_MAP.value = "Sight";
        } else {
            deliver_agst = '';
            document.MAINFORM.TEMP_NEW_TENOR_FORM_MAP.value = tenor_days + Day_Month + tenor_type + deliver_agst;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_SEND_AMEND_BY = function() {
    try {

        //added by zoe 20090205 for bug 1080

        if ((document.MAINFORM.COLL_TYPE.value == 'Documentary Through Bank' || document.MAINFORM.COLL_TYPE.value == 'Clean Through Bank') && document.MAINFORM.COLL_BK_SW_ADD.value == '') {
            document.MAINFORM.SEND_AMD_BY.value = 'Mail';

        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INT_TO_RUN = function() {
    try {

        SYF_EXCO_CALL_AMD_COMM();
        SYM_EXCO_M_EXCO_OTHER_CHG();
        SYF_EXCO_CALL_SWIFT_CHG();
        SYF_EXCO_CAL_COURIER();
        SYF_EXCO_CAL_MAIL();
        if (SYS_FUNCTION_TYPE == "PM") {

            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_INC_DEC_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) < 0) {
            alert("Amount field should not be negative!");
            document.MAINFORM.DEC_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) < 0) {
            alert("Amount field should not be negative!");
            document.MAINFORM.INC_AMT.value = 0;
        }
        if (document.MAINFORM.DEC_AMT.value != 0 && document.MAINFORM.INC_AMT.value != 0) {
            SYS_CheckError(document.MAINFORM.INC_AMT, "The Increase Amount and Decrease Amount fields cannot both be specified.");
            document.MAINFORM.DEC_AMT.value = 0;
            document.MAINFORM.INC_AMT.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_INT_DT = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.INT_FM_DT.value.length > 0 && document.MAINFORM.INT_TO_DT.value.length > 0) {
            nDays = SYS_GetSubDays(document.MAINFORM.INT_FM_DT.name, document.MAINFORM.INT_TO_DT.name);
            if (nDays < 0) {
                SYS_CheckError(document.MAINFORM.INT_TO_DT, "Interest To Date should be later than Interest From Date!");
                document.MAINFORM.INT_TO_DT.value = '';
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_NEW_DUE_DT = function() {
    try {

        if (SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.NEW_DUE_DT.name) == "Y") {
            SYS_CheckError(document.MAINFORM.NEW_DUE_DT, "New Tenor Maturity Date is Holiday !");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CLASS_BY_DELVR_DOC_AGST = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'B'); //FOR BUG 989
        } else {
            SYF_EXCO_CLASS_BY_NEW_TENOR_TYPE();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CLASS_BY_NEW_TENOR_TYPE = function() {
    try {

        if (document.MAINFORM.NEW_TENOR_TYPE.value == "Fixed Maturity") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, "B");

        } else if (document.MAINFORM.NEW_TENOR_TYPE.value == "See Below") {
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_DUE_DT.value = '';
            document.MAINFORM.NEW_DAY_MON_FLG.value = 'Days';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_Cal_NEW_COLL_AMT = function() {
    try {

        var COLL_AMT; // Utility Auto Fix Comments
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_COLL_AMT; // Utility Auto Fix Comments
        COLL_AMT = SYS_BeFloat(document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_COLL_AMT = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value);
        if (COLL_AMT > NEW_COLL_AMT) {
            document.MAINFORM.INC_AMT.value = 0.00;
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, COLL_AMT - NEW_COLL_AMT);
        }
        if (COLL_AMT < NEW_COLL_AMT) {
            document.MAINFORM.DEC_AMT.value = 0.00;
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, NEW_COLL_AMT - COLL_AMT);
        }
        document.MAINFORM.COLL_TRX_CCY_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();

        SYF_EXCO_MT430_TAG33_32();

        SYF_EXCO_Set_NEW_TENOR_INFO();
        SYF_EXCO_UPDATE_DRWE_INFO();
        SYF_EXCO_CAL_NEW_TENOR_FORM_MAP();
        SYM_EXCO_CHARGE_DT();
        document.MAINFORM.MSG_TYPE.value = 'EXCO.004.Amd';

        //add for Unique Test
        var DISCHARGE = document.MAINFORM.DISCHG_FLG.value;
        if (DISCHARGE == 'Yes') {
            document.MAINFORM.CLS_FLG.value = 'YES';
        }
        if (document.MAINFORM.AMD_TYPE.value == 'Release Free of Payment' || document.MAINFORM.AMD_TYPE.value == 'Close File and return documents') {
            SYF_EXCO_CHK_ADD_CHARGE();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var con; // Utility Auto Fix Comments
        if (document.MAINFORM.AMD_TYPE.value == "Close File and return documents" && SYT_CheckChgUnpaid()) {
            con = confirm("Charges Must be Settled");
            if (!con) {
                return false;
            }
        }

        return SYF_EXCO_CHK_INC_DEC_AMT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var nC_MAIN_REF; // Utility Auto Fix Comments
        var nNO_OF_AMD; // Utility Auto Fix Comments
        SYM_EXCO_INIT();
        document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;

        document.MAINFORM.TEMP_DRWE_NM.value = '';
        document.MAINFORM.TEMP_DRWE_ADD1.value = '';
        document.MAINFORM.TEMP_DRWE_ADD2.value = '';
        document.MAINFORM.TEMP_DRWE_ADD3.value = '';


        SYF_EXCO_CALL_NO_OF_AMD();

        document.MAINFORM.NO_OF_AMD_B.value = document.MAINFORM.NO_OF_AMD.value;

        nC_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        nNO_OF_AMD = document.MAINFORM.NO_OF_AMD.value;
        document.MAINFORM.AMD_REF.value = nC_MAIN_REF + nNO_OF_AMD;


        SYF_EXCO_CALL_BILL_INSTR();

        document.MAINFORM.NARR_TAG_79.value = "";
        document.MAINFORM.NARR_MAIL.value = "";
        document.MAINFORM.BK_TO_BK_INFO.value = "";
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;

        document.MAINFORM.OLD_TAG32.value = document.MAINFORM.TAG32.value;
        document.MAINFORM.OLD_TAG32_MAP.value = document.MAINFORM.TAG32_MAP.value;
        document.MAINFORM.NEW_TAG32.value = document.MAINFORM.TAG32.value;
        document.MAINFORM.NEW_TAG32_MAP.value = document.MAINFORM.TAG32_MAP.value;

        //SYM_EXCO_M_CLEAR_DOCUMENTS();
        //document.MAINFORM.MAIL_METHOD_1ST.value = 'None';
        //document.MAINFORM.MAIL_METHOD_2ND.value = 'None';  // Add on 20200605 for Unique Test

        document.MAINFORM.DISCHG_FLG.value = 'No';

        //  document.MAINFORM.AMD_74.value = ''; //FOR BUG 990 ; 20190218 #64728

        //for bug 994
        document.MAINFORM.TEMP_BILL_INSTR.value = document.MAINFORM.BILL_INSTR.value;
        document.MAINFORM.TEMP_HOLD_DOC.value = document.MAINFORM.HOLD_DOC.value;
        document.MAINFORM.TEMP_PROT_FOR.value = document.MAINFORM.PROT_FOR.value;
        document.MAINFORM.TEMP_STORE_INSURE_GOODS.value = document.MAINFORM.STORE_INSURE_GOODS.value;

        SYF_EXCO_CAL_SEND_AMEND_BY();

        if (document.MAINFORM.NEW_COLL_TRX_CCY_AMT.value != '' && document.MAINFORM.NEW_COLL_TRX_CCY_AMT.value != 0 && document.MAINFORM.NEW_COLL_TRX_CCY_AMT.value != "0") {

            document.MAINFORM.COLL_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NEW_COLL_TRX_CCY_AMT.value);
            document.MAINFORM.COLL_TRX_CCY_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value)
        }
        SYF_EXCO_Cal_NEW_COLL_AMT();
        SYM_EXCO_TEMP_CHARGE_DT();

        SYT_Cal_LOCAL_AMT('COLL_CCY', 'COLL_TRX_CCY_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_BY_NEW_DRWE_CORR_MED = function() {
    try {

        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_NONE; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.NEW_DRWE_FAX, document.MAINFORM.NEW_DRWE_EMAIL, document.MAINFORM.NEW_DRWE_TEL_NO, document.MAINFORM.NEW_DRWE_MAIL_ADD, document.MAINFORM.NEW_DRWE_POST_ADD_BTN);
        arr_FldClass_FAX = new Array("M", "O", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M", "O");
        arr_FldClass_NONE = new Array("P", "P", "P", "P", "P");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O", "O");
        switch (document.MAINFORM.NEW_DRWE_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "None":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_NONE);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_BY_SEND_AMD_BY = function() {
    try {

        var SEND_AMD_BY; // Utility Auto Fix Comments
        var arr_CLS_430; // Utility Auto Fix Comments
        var arr_CLS_999; // Utility Auto Fix Comments
        var arr_CLS_Mail; // Utility Auto Fix Comments
        var arr_Fld; // Utility Auto Fix Comments
        var arr_none; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.BK_TO_BK_INFO, document.MAINFORM.NARR_MAIL, document.MAINFORM.NARR_TAG_79);
        arr_CLS_999 = new Array("B", "B", "M");
        arr_CLS_430 = new Array("O", "B", "B");
        arr_CLS_Mail = new Array("B", "M", "B");
        arr_none = new Array("B", "B", "B");
        SEND_AMD_BY = document.MAINFORM.SEND_AMD_BY.value;
        switch (SEND_AMD_BY) {
            case "MT999":
                SYT_ChangeFldStringClass(arr_Fld, arr_CLS_999);
                break;
            case "MT430":
                SYT_ChangeFldStringClass(arr_Fld, arr_CLS_430);
                break;
            case "Mail":
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_CLS_Mail);
                break;
            case "None":
                SYT_ChangeFldStringClass(arr_Fld, arr_none);
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_COLL_INT_FLAG = function() {
    try {

        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_A; // Utility Auto Fix Comments
        var arr_FldClass_B; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.WAIVE_INT_REFUSED, document.MAINFORM.INT_RT, document.MAINFORM.INT_DAYS_BASIS, document.MAINFORM.INT_FM_PRD, document.MAINFORM.INT_TO_PRD, document.MAINFORM.INT_FM_DT, document.MAINFORM.INT_TO_DT);
        arr_FldClass_A = new Array("M", "M", "M", "O", "O", "O", "O");
        arr_FldClass_B = new Array("B", "B", "B", "B", "B", "B", "B");

        if (document.MAINFORM.COLL_INT_FLG.value == "Yes") {
            SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_A);
        } else {
            SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_B);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_INT_DT = function() {
    try {

        if (document.MAINFORM.INT_FM_PRD.value == "" && document.MAINFORM.INT_TO_PRD.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, "B");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_INT_PRD = function() {
    try {

        if (document.MAINFORM.INT_FM_DT.value == "" && document.MAINFORM.INT_TO_DT.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "O");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "B");
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "B");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MT430_TAG32 = function() {
    try {

        // 32a only presents when 33a presents refer to bug 1450
        if (document.MAINFORM.TEMP_NEW_DUE_DT.value == "" && document.MAINFORM.NEW_COLL_CCY.value == "" && document.MAINFORM.NEW_COLL_AMT.value == "" && document.MAINFORM.NEW_TAG33K.value == "") {
            document.MAINFORM.TEMP_OLD_COLL_CCY.value = "";
            document.MAINFORM.TEMP_OLD_COLL_AMT.value = "";
            document.MAINFORM.TEMP_OLD_DUE_DT.value = '';
            document.MAINFORM.TEMP_OLD_TAG32MAP.value = '';
        } else {
            document.MAINFORM.TEMP_OLD_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.TEMP_OLD_COLL_AMT.value = document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value;
            document.MAINFORM.TEMP_OLD_DUE_DT.value = document.MAINFORM.DUE_DT.value;
            document.MAINFORM.TEMP_OLD_TAG32MAP.value = document.MAINFORM.OLD_TAG32_MAP.value;

        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MT430_TAG33_32 = function() {
    try {

        SYF_EXCO_NEW_TAG33_AK();
        SYF_EXCO_NEW_TAG32K_MAP();

        if (document.MAINFORM.NEW_TAG32.value == 'K') {
            if (document.MAINFORM.COLL_TRX_CCY_AMT.value != document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value) {
                if (document.MAINFORM.NEW_TAG32_MAP.value != document.MAINFORM.OLD_TAG32_MAP.value && document.MAINFORM.NEW_TAG32_MAP.value.length == 6) {
                    document.MAINFORM.NEW_TAG33K.value = document.MAINFORM.NEW_TAG32_MAP.value;
                    document.MAINFORM.NEW_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
                    document.MAINFORM.NEW_COLL_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                    document.MAINFORM.TAG32.value = document.MAINFORM.NEW_TAG32.value;
                    document.MAINFORM.TAG32_MAP.value = document.MAINFORM.NEW_TAG32_MAP.value;
                } else {
                    document.MAINFORM.NEW_TAG33K.value = document.MAINFORM.OLD_TAG32_MAP.value;
                    document.MAINFORM.NEW_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
                    document.MAINFORM.NEW_COLL_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                    document.MAINFORM.TAG32.value = document.MAINFORM.OLD_TAG32.value;
                    document.MAINFORM.TAG32_MAP.value = document.MAINFORM.OLD_TAG32_MAP.value;
                }
            } else {
                if (document.MAINFORM.NEW_TAG32_MAP.value != document.MAINFORM.OLD_TAG32_MAP.value && document.MAINFORM.NEW_TAG32_MAP.value.length == 6) {
                    document.MAINFORM.NEW_TAG33K.value = document.MAINFORM.NEW_TAG32_MAP.value;
                    document.MAINFORM.NEW_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
                    document.MAINFORM.NEW_COLL_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                    document.MAINFORM.TAG32.value = document.MAINFORM.NEW_TAG32.value;
                    document.MAINFORM.TAG32_MAP.value = document.MAINFORM.NEW_TAG32_MAP.value;
                } else {
                    document.MAINFORM.NEW_TAG33K.value = '';
                    document.MAINFORM.NEW_COLL_CCY.value = '';
                    document.MAINFORM.NEW_COLL_AMT.value = '';
                    document.MAINFORM.TAG32.value = document.MAINFORM.OLD_TAG32.value;
                    document.MAINFORM.TAG32_MAP.value = document.MAINFORM.OLD_TAG32_MAP.value;
                }
            }
        } else {
            if (document.MAINFORM.COLL_TRX_CCY_AMT.value != document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value) {
                document.MAINFORM.TEMP_NEW_DUE_DT.value = (document.MAINFORM.NEW_DUE_DT.value != "") ? document.MAINFORM.NEW_DUE_DT.value : document.MAINFORM.DUE_DT.value;
                document.MAINFORM.NEW_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
                document.MAINFORM.NEW_COLL_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                document.MAINFORM.TAG32.value = document.MAINFORM.NEW_TAG32.value;
                document.MAINFORM.TAG32_MAP.value = document.MAINFORM.NEW_TAG32_MAP.value;
            } else {
                if (document.MAINFORM.NEW_DUE_DT.value != document.MAINFORM.DUE_DT.value) {
                    if (document.MAINFORM.NEW_DUE_DT.value != "") {
                        document.MAINFORM.TEMP_NEW_DUE_DT.value = document.MAINFORM.NEW_DUE_DT.value;
                        document.MAINFORM.NEW_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
                        document.MAINFORM.NEW_COLL_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                        document.MAINFORM.TAG32.value = document.MAINFORM.NEW_TAG32.value;
                        document.MAINFORM.TAG32_MAP.value = document.MAINFORM.NEW_TAG32_MAP.value;
                    }

                } else {
                    document.MAINFORM.TEMP_NEW_DUE_DT.value = '';
                    document.MAINFORM.NEW_COLL_CCY.value = '';
                    document.MAINFORM.NEW_COLL_AMT.value = '';
                    document.MAINFORM.TAG32.value = document.MAINFORM.OLD_TAG32.value;
                    document.MAINFORM.TAG32_MAP.value = document.MAINFORM.OLD_TAG32_MAP.value;
                }
            }
        }

        SYF_EXCO_MT430_TAG32();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_NEW_TAG32K_MAP = function() {
    try {

        var NEW_TENOR_TYPE; // Utility Auto Fix Comments
        var code; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        NEW_TENOR_TYPE = document.MAINFORM.NEW_TENOR_TYPE.value;
        code = "";
        days = "";
        sMark = "";
        switch (NEW_TENOR_TYPE) {
            case "After date of Bill of Exchange":
                code = "BE";
                break;
            case "After customs clearance of goods":
                code = "CC";
                break;
            case "After goods pass food and drug administration":
                code = "FD";
                break;
            case "First presentation":
                code = "FP";
                break;
            case "After arrival of goods":
                code = "GA";
                break;
            case "After invoice date":
                code = "ID";
                break;
            case "After sight":
                code = "ST";
                break;
            case "After date of transport document":
                code = "TD";
                break;
            case "See Below":
                code = "XX";
                break;
        }
        days = SYT_FillZero(document.MAINFORM.NEW_TENOR_DAYS.value, 3);

        if (document.MAINFORM.NEW_DAY_MON_FLG.value == "Days") {
            sMark = "D";
        }
        if (document.MAINFORM.NEW_DAY_MON_FLG.value == "Months") {
            sMark = "M";
        }
        if (document.MAINFORM.NEW_TAG32.value == "K") {
            if (NEW_TENOR_TYPE != "" || sMark != "") {
                document.MAINFORM.NEW_TAG32_MAP.value = sMark + days + code;
            } else {
                document.MAINFORM.NEW_TAG32_MAP.value = document.MAINFORM.OLD_TAG32_MAP.value;
            }
        } else {
            document.MAINFORM.NEW_TAG32_MAP.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_NEW_TAG33_AK = function() {
    try {

        if (document.MAINFORM.NEW_DUE_DT.value != "") {
            document.MAINFORM.NEW_TAG32.value = "A";
        } else {
            if (document.MAINFORM.NEW_TENOR_TYPE.value != "" || document.MAINFORM.NEW_TENOR_DAYS.value != "" || document.MAINFORM.NEW_DAY_MON_FLG.value != "") {
                document.MAINFORM.NEW_TAG32.value = "K";
            } else {
                document.MAINFORM.NEW_TAG32.value = document.MAINFORM.OLD_TAG32.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_OLD_TENOR_INFO_BY_TENOR_TYPE = function() {
    try {

        if (document.MAINFORM.TENOR_TYPE.value == 'See Below') {
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');

        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EXCO_CLASS_BY_NEW_TENOR_TYPE();
        SYF_EXCO_CLASS_BY_DELVR_DOC_AGST();
        SYF_EXCO_MPO_BY_NEW_DRWE_CORR_MED();
        SYT_CHG_INIT('SYF_EXCO_CHG_INT_TO_RUN');
        SYF_EXCO_MPO_COLL_INT_FLAG();
        SYF_EXCO_MPO_BY_SEND_AMD_BY();
        SYT_DisableDivClass("B_div");
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ID_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ADD_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_POST_ADD_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_TEL_NO, 'O');
        SYT_ChangeFldClass(document.MAINFORM.COLL_BK_LANG, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DRWR_POST_ADD_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_POST_ADD_BTN, 'P');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;

        SYF_EXCO_MPO_INT_DT();
        SYF_EXCO_MPO_INT_PRD();
        //for bug 1501
        SYM_EXCO_M_DRWR_FIELDS_CLASS();

        //for bug 822
        SYM_EXCO_Cal_TENOR_DETAILS();
        //FOR BUG 992 
        // SYM_EXCO_Cal_NEW_DUE_DT(); //64704 This field value come from CE;
        //FOR BUG 989 
        SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'P');


        SYM_EXCO_MPO_NEW_TENOR_DETAILS();
        SYF_EXCO_SET_SEND_AMD_BY();
        window_onload.toString().match(/fv\(\'SEND_AMD_BY\'\,\'(.*)\'\);/mg); // Utility Auto Fix Comments
        tempSEND_AMD_BY = RegExp.$1;
        if (tempSEND_AMD_BY == "MT430") {
            EEHtml.getElementById("MT430").selected = true;
        }
        if (tempSEND_AMD_BY == "MT999") {
            EEHtml.getElementById("MT999").selected = true;
        }
        SYF_EXCO_OLD_TENOR_INFO_BY_TENOR_TYPE();
        if (SYS_FUNCTION_TYPE == "PM") {
            SYF_EXCO_CAL_COURIER();
            SYF_EXCO_CAL_MAIL();
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_SET_SEND_AMD_BY = function() {
    try {

        if ((document.MAINFORM.COLL_TYPE.value == 'Documentary Through Bank' || document.MAINFORM.COLL_TYPE.value == 'Clean Through Bank') && document.MAINFORM.COLL_BK_SW_ADD.value != "") {
            SYT_AddOption("SEND_AMD_BY", "MT430", "MT430");
            SYT_AddOption("SEND_AMD_BY", "MT999", "MT999");
        } else {
            SYT_RemoveOption("SEND_AMD_BY", "MT430");
            SYT_RemoveOption("SEND_AMD_BY", "MT999");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_Set_NEW_TENOR_INFO = function() {
    try {

        if ("" != document.MAINFORM.NEW_TENOR_START_DT.value) {
            document.MAINFORM.NEW_TENOR_START_DT_TEMP.value = document.MAINFORM.NEW_TENOR_START_DT.value;
        } else {
            document.MAINFORM.NEW_TENOR_START_DT_TEMP.value = document.MAINFORM.TENOR_START_DT.value;
        }
        if ("" != document.MAINFORM.NEW_TENOR_DAYS.value) {
            document.MAINFORM.NEW_TENOR_DAYS_TEMP.value = document.MAINFORM.NEW_TENOR_DAYS.value;
        } else {
            document.MAINFORM.NEW_TENOR_DAYS_TEMP.value = document.MAINFORM.TENOR_DAYS.value;
        }
        if ("" != document.MAINFORM.NEW_DAY_MON_FLG.value) {
            document.MAINFORM.NEW_DAY_MON_FLG_TEMP.value = document.MAINFORM.NEW_DAY_MON_FLG.value;
        } else {
            document.MAINFORM.NEW_DAY_MON_FLG_TEMP.value = document.MAINFORM.DAY_MON_FLG.value;
        }
        if ("" != document.MAINFORM.NEW_TENOR_TYPE.value) {
            document.MAINFORM.NEW_TENOR_TYPE_TEMP.value = document.MAINFORM.NEW_TENOR_TYPE.value;
        } else {
            document.MAINFORM.NEW_TENOR_TYPE_TEMP.value = document.MAINFORM.TENOR_TYPE.value;
        }
        if ("" != document.MAINFORM.NEW_DUE_DT.value) {
            document.MAINFORM.NEW_DUE_DT_TEMP.value = document.MAINFORM.NEW_DUE_DT.value;
        } else {
            document.MAINFORM.NEW_DUE_DT_TEMP.value = document.MAINFORM.DUE_DT.value;
        }

        if ("" != document.MAINFORM.NEW_TENOR_DETAILS.value) {
            document.MAINFORM.NEW_TENOR_DETAILS_TEMP.value = document.MAINFORM.NEW_TENOR_DETAILS.value;
        } else {
            document.MAINFORM.NEW_TENOR_DETAILS_TEMP.value = document.MAINFORM.TENOR_DETAILS.value;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_UPDATE_DRWE_INFO = function() {
    try {

        var FldName; // Utility Auto Fix Comments
        var FldName_Real; // Utility Auto Fix Comments
        var FldName_TEMP; // Utility Auto Fix Comments
        var Prefix; // Utility Auto Fix Comments
        var frm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sFldClassName; // Utility Auto Fix Comments
        var sFldValue; // Utility Auto Fix Comments
        //eddit by zoe for Bug 1280
        if (document.MAINFORM.NEW_DRWE_ID.value != '') {
            document.MAINFORM.TEP_DRWE_ID.value = document.MAINFORM.NEW_DRWE_ID.value;
        } else {
            document.MAINFORM.TEP_DRWE_ID.value = document.MAINFORM.DRWE_ID.value;
        }

        frm = document.MAINFORM;
        for (i = 0; i < frm.elements.length; i++) { // Utility Auto Fix Comments
            FldName = frm.elements[i].name;
            Prefix = FldName.substr(0, 9);
            if (Prefix == "NEW_DRWE_") {
                sFldValue = frm.elements[i].value;
                sFldClassName = frm.elements[i].className;
                FldName_Real = FldName.substr(4, FldName.length - 4);
                FldName_TEMP = 'TEMP_' + FldName_Real;
                if (FldName_Real.indexOf("_BTN") > -1 || FldName_Real.indexOf("_ID") > -1 || FldName_Real.indexOf("_ORDER_") > -1) {
                    continue;
                }
                if (sFldValue.length > 0) {
                    try {
                        frm.elements[FldName_TEMP].value = sFldValue;
                    } catch (e1) {}
                } else {
                    try {
                        frm.elements[FldName_TEMP].value = frm.elements[FldName_Real].value;
                    } catch (e2) {}
                }


            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_ADD_CHARGE = function() {
    try {

        var ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        var unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));

        if (unPaidAmt > 0) {
            SYS_CheckError(document.MAINFORM.AMD_TYPE.value, "There are outstanding charges. Please use the Settle Charges Function to clear them.");
        } else {
            document.MAINFORM.CLS_FLG.value = 'YES';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
        EEHtml.fireEvent(document.MAINFORM.COLL_BK_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
        SYF_EXCO_SET_SEND_AMD_BY();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_INT_FLG_onchange = function(event) {
    try {
        SYF_EXCO_MPO_COLL_INT_FLAG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_TRX_CCY_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.COLL_TRX_CCY_AMT.value = 0;
        }



        SYF_EXCO_CALL_AMD_COMM();
        SYF_EXCO_Cal_NEW_COLL_AMT();
        /*
SYF_EXCO_CALL_NEW_COLL_AMT();
document.MAINFORM.COLL_TRX_CCY_BAL.fireEvent('onchange');
document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.fireEvent('onchange');
edit by sunny 100420
*/
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_AFTER_NEW_DRWE_ID();
        EEHtml.fireEvent(document.MAINFORM.NEW_DRWE_CORR_MED, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_DRWE_LANG, 'onchange');
        SYF_EXCO_SET_SEND_AMD_BY();
        SYF_EXCO_CAL_SEND_AMEND_BY();
        EEHtml.fireEvent(document.MAINFORM.SEND_AMD_BY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DEC_AMT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_INC_DEC_AMT();
        SYF_EXCO_CALL_NEW_COLL_AMT();
        EEHtml.fireEvent(document.MAINFORM.COLL_TRX_CCY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DELVR_DOC_AGST_onchange = function(event) {
    try {
        SYF_EXCO_CALL_BILL_INSTR();

        SYF_EXCO_CAL_NEW_TENOR_DAYS_BY_SIGHT();
        SYF_EXCO_CLASS_BY_DELVR_DOC_AGST()
        if (document.MAINFORM.DELVR_DOC_AGST.value != "D/P") {
            EEHtml.fireEvent(document.MAINFORM.NEW_TENOR_DAYS, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.NEW_DAY_MON_FLG, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.NEW_TENOR_TYPE, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWR_ID', 'DRWR_ID', 'SYF_EXCO_AFTER_DRWR_ID()');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INC_AMT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_INC_DEC_AMT();
        SYF_EXCO_CHK_INC_DEC_AMT();
        EEHtml.fireEvent(document.MAINFORM.DEC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.COLL_TRX_CCY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_FM_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_INT_DT();
        SYF_EXCO_MPO_INT_PRD();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_FM_PRD_onchange = function(event) {
    try {
        SYF_EXCO_MPO_INT_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_TO_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_INT_DT();
        SYF_EXCO_MPO_INT_PRD();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_TO_PRD_onchange = function(event) {
    try {
        SYF_EXCO_MPO_INT_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_MAIL_METHOD_1ST_onchange = function(event) {
    try {
        SYF_EXCO_CAL_COURIER();
        SYF_EXCO_CAL_MAIL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_MAIL_METHOD_2ND_onchange = function(event) {
    try {
        SYF_EXCO_CAL_COURIER();
        SYF_EXCO_CAL_MAIL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('NEW_DRWE_ADD', document.MAINFORM.NEW_DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYF_EXCO_MPO_BY_NEW_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('NEW_DRWE_ID', 'NEW_DRWE_ID', 'SYF_EXCO_AFTER_NEW_DRWE_ID()');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('NEW_DRWE_POST_ADD', document.MAINFORM.NEW_DRWE_ID.name, 'ID');
        SYS_InqCUBK_byCondition('NEW_DRWE_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_DUE_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_NEW_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NEW_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_CLASS_BY_DELVR_DOC_AGST();
        SYF_EXCO_CLASS_BY_NEW_TENOR_TYPE();
        SYM_EXCO_MPO_NEW_TENOR_DETAILS();
        SYM_EXCO_Cal_NEW_DUE_DT(); //FOR BUG 992
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_SEND_AMD_BY_onchange = function(event) {
    try {
        SYF_EXCO_MPO_BY_SEND_AMD_BY();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Amend_FromCE.js", e);
    }
}