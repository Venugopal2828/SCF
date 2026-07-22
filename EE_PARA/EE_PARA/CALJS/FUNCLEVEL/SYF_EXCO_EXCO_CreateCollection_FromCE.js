var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_AFTER_DRWR_ID = function() {
    try {

        EEHtml.fireEvent(document.MAINFORM.DRWR_CORR_MED, "onchange");

        SYF_EXCO_CHG_INIT_RUN();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_TAG32_ABK = function() {
    try {

        if (document.MAINFORM.DUE_DT.value != "") {
            document.MAINFORM.TAG32.value = "A";
        } else {
            document.MAINFORM.TAG32.value = "K";
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_AFTER_DRWE_ID = function() {
    try {

        SYF_EXCO_CAL_DRWE_CORR_MED_BY_COLL_TYPE(); // Utility Auto Fix Comments
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_BILL_INSTR = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            document.MAINFORM.BILL_INSTR.value = 'None';
            document.MAINFORM.DOC_INSTR.value = "Payment";
        } else if (document.MAINFORM.DELVR_DOC_AGST.value == "D/A") {
            document.MAINFORM.BILL_INSTR.value = 'Collect Bill at Maturity';
            // document.MAINFORM.DOC_INSTR.value = "Irrevocable undertaking to pay at maturity"; MARK ON 20190124 64707;
            document.MAINFORM.DOC_INSTR.value = "Acceptance of Draft";
        } else if (document.MAINFORM.DELVR_DOC_AGST.value == "D/A and Aval") {
            document.MAINFORM.DOC_INSTR.value = "Acceptance of Draft";
            document.MAINFORM.BILL_INSTR.value = "Collect Bill at Maturity";

        } else {
            document.MAINFORM.DOC_INSTR.value = "";
            document.MAINFORM.BILL_INSTR.value = "None";

        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_COMM = function() {
    try {

        // eddit by zoe 20090120 for bug 1222
        if (document.MAINFORM.DOC_INSTR.value != "Free of Payment") {
            //for COLL_COMM
            SYT_CAL_COMM("EXCO_COLL_COMM", document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
            SYT_RESET_COMM('EXCO_FREE_PAYT');
            //for DEF_PMT_COMM
            if (document.MAINFORM.DELVR_DOC_AGST.value == "D/A" || document.MAINFORM.DELVR_DOC_AGST.value == "D/A and Aval") {
                SYT_CAL_COMM("EXCO_DEF_PAY_COMM", document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
            } else {
                SYT_RESET_COMM("EXCO_DEF_PAY_COMM");
            }

        } else {
            SYT_CAL_COMM('EXCO_FREE_PAYT', document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
            SYT_RESET_COMM("EXCO_COLL_COMM");
            SYT_RESET_COMM("EXCO_DEF_PAY_COMM");

        }

        SYF_EXCO_CAL_MAIL();
        SYM_EXCO_M_EXCO_OTHER_CHG();
        SYT_CAL_COMM("EXCO_REL_GOODS_CHG", document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
        SYM_EXCO_M_EXCO_SWIFT_CHG();
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
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
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_DRWE_CORR_MED_BY_COLL_TYPE = function() {
    try {

        if (document.MAINFORM.COLL_TYPE.value == "Documentary Through Bank" || document.MAINFORM.COLL_TYPE.value == "Clean Through Bank") {
            document.MAINFORM.DRWE_LANG.value = "";
            document.MAINFORM.DRWE_CORR_MED.value = "None";
            SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
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
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INIT_RUN = function() {
    try {

        SYF_EXCO_CAL_COMM();
        SYF_EXCO_CAL_MAIL();
        SYF_EXCO_CAL_COURIER();
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_SET_FOREIGN = function() {
    try {

        if (document.MAINFORM.COLL_BK_NM.value != "" && document.MAINFORM.COLL_CCY.value != "") {
            Chg.Screen.setForeignCust(document.MAINFORM.COLL_BK_NM.value, document.MAINFORM.COLL_CCY.value);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_DIRY_DT = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.COLL_DT.value.length > 0 && document.MAINFORM.DIARY_DT.value.length > 0) {
            nDays = SYS_GetSubDays(document.MAINFORM.COLL_DT.name, document.MAINFORM.DIARY_DT.name);
            if (nDays < 0) {
                SYS_CheckError(document.MAINFORM.DIARY_DT, "Diary date should be later than Collection Registration Date!");
                document.MAINFORM.DIARY_DT.value = "";
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_DUE_DT = function() {
    try {

        if (document.MAINFORM.DUE_DT.value == "") {
            return;
        }
        if (SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.DUE_DT.name) == "Y") {
            SYS_CheckError(document.MAINFORM.DUE_DT, "Tenor Maturity Date is Holiday!");
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
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
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CLASS_BY_COLL_INT_FLAG = function() {
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
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CLASS_BY_DELVR_DOC_AGST = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'Days';
            document.MAINFORM.TENOR_TYPE.value = 'After sight';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');

        } else {
            SYF_EXCO_CLASS_BY_TENOR_TYPE();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CLASS_BY_INCASE_CORR_MED = function() {
    try {

        if (document.MAINFORM.INCASE_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.INCASE_OF_ND_CONTACT, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INCASE_OF_ND_CONTACT, "O");

        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CLASS_BY_TENOR_TYPE = function() {
    try {

        //edit by zoe 20081126 for Chris's testing
        if (document.MAINFORM.TENOR_TYPE.value == "Fixed Maturity") {
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'M');
        } else if (document.MAINFORM.TENOR_TYPE.value == "See Below") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'Days';
            document.MAINFORM.DUE_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, "M");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_COLL_TRX_CCY_BAL = function() {
    try {

        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_DUE_DT = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        nDays = (document.MAINFORM.DAY_MON_FLG.value == "Days") ? SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) * 30;

        if (document.MAINFORM.TENOR_START_DT.value != "" && nDays != 0 && document.MAINFORM.DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, "SYF_EXCO_DUE_DT_Result", "A", "N", "N");
        } else {
            document.MAINFORM.DUE_DT.value = "";
            EEHtml.fireEvent(document.MAINFORM.DUE_DT, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_DUE_DT_Result = function(sResultDate) {
    try {

        document.MAINFORM.DUE_DT.value = sResultDate;
        EEHtml.fireEvent(document.MAINFORM.DUE_DT, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_GET_REF_20 = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_BY_COLL_TYPE = function() {
    try {

        if (document.MAINFORM.COLL_TYPE.value == "Documentary Through Bank" || document.MAINFORM.COLL_TYPE.value == "Clean Through Bank") {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_NM, "M");
            //SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, "M"); //add for Unique test on 20200612
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_CORR_MED, "M");
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_LANG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_LANG, 'O'); //#64671
            SYT_ChangeFldClass(document.MAINFORM.DRWE_CORR_MED, 'O'); //#64671
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_NM, "O");
            //SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, "O"); //add for Unique test on 20200612
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_CORR_MED, "O");
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_LANG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_LANG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_CORR_MED, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
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
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_INT_PRD = function() {
    try {

        if (document.MAINFORM.INT_FM_DT.value == '' && document.MAINFORM.INT_TO_DT.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "B");
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "B");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //for class
        InitRun();
        SYF_EXCO_CLASS_BY_COLL_INT_FLAG();
        SYF_EXCO_CLASS_BY_TENOR_TYPE();
        SYF_EXCO_CLASS_BY_DELVR_DOC_AGST();
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
        FLD_EXCO_COLL_BK_CORR_MED_onchange(); //add for Unique test on 20200612
        SYF_EXCO_CLASS_BY_INCASE_CORR_MED();
        SYF_EXCO_MPO_BY_COLL_TYPE();
        SYF_EXCO_MPO_INT_DT();
        SYF_EXCO_MPO_INT_PRD();

        //for chg
        SYT_CHG_INIT();
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {

            CHG_setAllChargeAt(Chg.AT_DEFERRED);


            SYM_EXCO_Cal_NXT_TRCR_DT_DT();
            SYF_EXCO_CAL_COURIER();
            SYF_EXCO_CAL_MAIL();
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_GetCUBK_All('DRWR_ID', 'DRWR_ID', 'SYF_EXCO_AFTER_DRWR_ID()');
        }
        SYF_EXCO_TAG32_ABK();

        SYF_EXCO_TAG32K_MAP();

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            SYT_ChangeFldClass_New("TAG32", 'B');
            SYT_ChangeFldClass_New("TAG32_MAP", 'B');
        } else {
            SYT_ChangeFldClass_New("TENOR_DAYS", 'M');
            SYT_ChangeFldClass_New("DAY_MON_FLG", 'M');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_SPCL_INSTR_CLAUSE = function() {
    try {

        var arr_fld; // Utility Auto Fix Comments
        var sClause1; // Utility Auto Fix Comments
        var sClause2; // Utility Auto Fix Comments
        var sClause3; // Utility Auto Fix Comments
        var sClause4; // Utility Auto Fix Comments
        var sClause5; // Utility Auto Fix Comments
        var sClause6; // Utility Auto Fix Comments
        var sClause7; // Utility Auto Fix Comments
        arr_fld = new Array(document.MAINFORM.INT_RT.value, document.MAINFORM.INT_FM_PRD.value, document.MAINFORM.INT_TO_PRD.value, document.MAINFORM.INT_DAYS_BASIS.value);

        document.MAINFORM.CLAUSE_4.value = '';
        if (document.MAINFORM.COLL_INT_FLG.value == "Yes" && document.MAINFORM.INT_FM_PRD.value != '' && document.MAINFORM.INT_TO_PRD.value != '') {
            SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_4.name, "SPCL_INSTR_A");
        }
        document.MAINFORM.CLAUSE_5.value = '';
        if (document.MAINFORM.COLL_INT_FLG.value == "Yes" && document.MAINFORM.INT_FM_DT.value != '' && document.MAINFORM.INT_TO_DT.value != '') {
            SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_5.name, "SPCL_INSTR_B");
        }
        document.MAINFORM.CLAUSE_6.value = '';
        if (document.MAINFORM.WAIVE_INT_REFUSED.value == "No") {
            SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_6.name, "SPCL_INSTR_C");
        }
        if (document.MAINFORM.REMIT_BK_CHG_FLG.value == "Drawee") {
            document.MAINFORM.CLAUSE_7.value = '';
            if (document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value == "No") {
                SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_7.name, "SPCL_INSTR_2");
            }
            document.MAINFORM.CLAUSE_8.value = '';
            if (document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value == "Yes") {
                SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_8.name, "SPCL_INSTR_21");
            }
        } else {
            document.MAINFORM.CLAUSE_7.value = "";
            document.MAINFORM.CLAUSE_8.value = "";

        }
        document.MAINFORM.CLAUSE_9.value = '';
        if (document.MAINFORM.WAIVE_INSTRUCTION.value == "Yes") {
            SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_9.name, "SPCL_INSTR_OUR_CHG_W");
        }
        document.MAINFORM.CLAUSE_10.value = '';
        if (document.MAINFORM.WAIVE_INSTRUCTION.value == "No") {

            SYS_InsertClauseDirect(document.MAINFORM.CLAUSE_10.name, "SPCL_INSTR_OUR_CHG_N");

        }
        sClause1 = '';
        sClause2 = '';
        sClause3 = '';
        sClause4 = '';
        sClause5 = '';
        sClause6 = '';
        sClause7 = '';

        if (document.MAINFORM.CLAUSE_4.value == '') {
            sClause1 = '';
        } else {
            sClause1 = document.MAINFORM.CLAUSE_4.value + "\n";
        }

        if (document.MAINFORM.CLAUSE_5.value == '') {
            sClause2 = '';
        } else {
            sClause2 = document.MAINFORM.CLAUSE_5.value + "\n";
        }

        if (document.MAINFORM.CLAUSE_6.value == '') {
            sClause3 = '';
        } else {
            sClause3 = document.MAINFORM.CLAUSE_6.value + "\n";
        }
        if (document.MAINFORM.CLAUSE_7.value == '') {
            sClause4 = '';
        } else {
            sClause4 = document.MAINFORM.CLAUSE_7.value + "\n";
        }

        if (document.MAINFORM.CLAUSE_8.value == '') {
            sClause5 = '';
        } else {
            sClause5 = document.MAINFORM.CLAUSE_8.value + "\n";
        }

        if (document.MAINFORM.CLAUSE_9.value == '') {
            sClause6 = '';
        } else {
            sClause6 = document.MAINFORM.CLAUSE_9.value + "\n";
        }

        if (document.MAINFORM.CLAUSE_10.value == '') {
            sClause7 = '';
        } else {
            sClause7 = document.MAINFORM.CLAUSE_10.value + "\n";
        }



        document.MAINFORM.SPCL_INSTR.value = sClause6 + sClause7 + sClause4 + sClause5 + sClause1 + sClause2 + sClause3;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_SW_TAG = function() {
    try {

        var arr_BIC; // Utility Auto Fix Comments
        arr_BIC = new Array(document.MAINFORM.COLL_BK_SW_ADD, document.MAINFORM.PRES_BK_SW_ADD);
        SYM_EXCO_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EXCO_INIT();


        //define value
        document.MAINFORM.COLL_DT.value = SYS_BUSI_DATE;
        //document.MAINFORM.CUST_REF.value ="NONREF";
        //document.MAINFORM.COLL_BK_REF.value ="NONREF";


        // document.MAINFORM.COLL_CCY.value = SYS_LOCAL_CCY; Mark on 20190214 for 64659;

        SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'M');
        SYF_EXCO_CALL_BILL_INSTR();

        document.MAINFORM.MAIL_METHOD_1ST.value = "Courier";
        document.MAINFORM.MAIL_METHOD_2ND.value = "None";
        //20081202 clause
        SYF_EXCO_SPCL_INSTR_CLAUSE();

        document.MAINFORM.CURRNT_STATUS.value = 'EXCO_CreateCollection_FromCE';
        document.MAINFORM.NXT_STATUS.value = '';

        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_TAG32K_MAP = function() {
    try {

        SYM_EXCO_M_TAG32K(document.MAINFORM.TENOR_TYPE, document.MAINFORM.TENOR_DAYS, document.MAINFORM.DAY_MON_FLG);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Issued Collection';
        SYT_CHG_VOUCHER(); //Add on 20190203 #64597;
        SYM_EXCO_CONFIRM_CALL();
        SYM_EXCO_CHARGE_DT();

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.COLL_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.COLL_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
        FLD_EXCO_COLL_BK_CORR_MED_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
        SYF_EXCO_CHG_SET_FOREIGN();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
        SYS_InqCUBK_byCondition('COLL_BK_POST', '1');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_CCY_onchange = function(event) {
    try {
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYF_EXCO_CAL_COMM();
        SYF_EXCO_CHG_SET_FOREIGN();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_DIRY_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_INT_FLG_onchange = function(event) {
    try {
        SYF_EXCO_CLASS_BY_COLL_INT_FLAG();
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_TRX_CCY_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value) < 0) {
            alert("Amount field should not be negative!");
            document.MAINFORM.COLL_TRX_CCY_AMT.value = 0;
        }

        SYF_EXCO_COLL_TRX_CCY_BAL();
        EEHtml.fireEvent(document.MAINFORM.COLL_TRX_CCY_BAL, 'onchange');

        SYF_EXCO_CAL_COMM();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_MPO_BY_COLL_TYPE();
        SYF_EXCO_CAL_DRWE_CORR_MED_BY_COLL_TYPE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_EXCO_TAG32K_MAP();
        EEHtml.fireEvent(document.MAINFORM.TAG32_MAP, 'onchange');
        SYF_EXCO_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DELVR_DOC_AGST_onchange = function(event) {
    try {
        SYF_EXCO_CALL_BILL_INSTR();
        SYF_EXCO_CAL_COMM();
        SYF_EXCO_CLASS_BY_DELVR_DOC_AGST();
        EEHtml.fireEvent(document.MAINFORM.BILL_INSTR, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.TENOR_TYPE, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.TENOR_TYPE, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.TENOR_DAYS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.DAY_MON_FLG, 'onchange');
        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            SYT_ChangeFldClass_New("TAG32", 'B');
            SYT_ChangeFldClass_New("TAG32_MAP", 'B');
        } else {
            SYT_ChangeFldClass_New("TENOR_DAYS", 'M');
            SYT_ChangeFldClass_New("DAY_MON_FLG", 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_DIRY_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DOC_INSTR_onchange = function(event) {
    try {
        SYF_EXCO_CAL_COMM();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'SYF_EXCO_AFTER_DRWE_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
        SYS_InqCUBK_byCondition('DRWE_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWR_ID', 'DRWR_ID', 'SYF_EXCO_AFTER_DRWR_ID()');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
        SYS_InqCUBK_byCondition('DRWR_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DUE_DT_onchange = function(event) {
    try {
        SYF_EXCO_TAG32_ABK();
        EEHtml.fireEvent(document.MAINFORM.TAG32, 'onchange');
        SYF_EXCO_CHK_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
        SYS_InqCUBK_byCondition('INCASE_OF_ND_POST', '1');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INTERVAL_DAYS_onchange = function(event) {
    try {
        SYM_EXCO_Cal_NXT_TRCR_DT_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_DAYS_BASIS_onchange = function(event) {
    try {
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_FM_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_INT_DT();
        SYF_EXCO_MPO_INT_PRD();
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_FM_PRD_onchange = function(event) {
    try {
        SYF_EXCO_MPO_INT_DT();
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_RT_onchange = function(event) {
    try {
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_TO_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_INT_DT();
        SYF_EXCO_MPO_INT_PRD();
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_TO_PRD_onchange = function(event) {
    try {
        SYF_EXCO_MPO_INT_DT();
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_MAIL_METHOD_1ST_onchange = function(event) {
    try {
        SYF_EXCO_CAL_COURIER();
        SYF_EXCO_CAL_MAIL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_MAIL_METHOD_2ND_onchange = function(event) {
    try {
        SYF_EXCO_CAL_COURIER();
        SYF_EXCO_CAL_MAIL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PMT_INSTR_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('PMT_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.PRES_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
        FLD_EXCO_PRES_BK_CORR_MED_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
        SYS_InqCUBK_byCondition('PRES_BK_POST', '1');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_REMIT_BK_CHG_FLG_onchange = function(event) {
    try {
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_REMT_DT_onchange = function(event) {
    try {
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        if (SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.REMT_DT.name) > 0) {
            alert("System do not allow the remittance date in future.");
            document.MAINFORM.REMT_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_SPCL_INSTR_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('SPCL_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TAG32_onchange = function(event) {
    try {
        SYF_EXCO_TAG32K_MAP();
        EEHtml.fireEvent(document.MAINFORM.TAG32_MAP, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_EXCO_DUE_DT();
        SYF_EXCO_TAG32K_MAP();
        EEHtml.fireEvent(document.MAINFORM.TAG32_MAP, 'onchange');

        SYF_EXCO_TAG32_ABK();
        EEHtml.fireEvent(document.MAINFORM.TAG32, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_EXCO_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_CLASS_BY_DELVR_DOC_AGST();
        SYF_EXCO_CLASS_BY_TENOR_TYPE();
        EEHtml.fireEvent(document.MAINFORM.DUE_DT, 'onchange');

        SYF_EXCO_TAG32K_MAP();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_WAIVE_INSTRUCTION_onchange = function(event) {
    try {
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_WAIVE_INT_REFUSED_onchange = function(event) {
    try {
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_WAIVE_REMT_BK_CHG_FLG_onchange = function(event) {
    try {
        SYF_EXCO_SPCL_INSTR_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_CreateCollection_FromCE.js", e);
    }
}