var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('IMCO', 'SYM_IMCO_SetRefNo');

        if (SYS_ORG_FUNCTION_NAME == "CreateCollectionCopyExisting") {
            document.MAINFORM.COLL_TRX_CCY_AMT.value = 0;
            document.MAINFORM.COLL_TRX_CCY_BAL.value = 0;
            document.MAINFORM.REMT_DT.value = '';
            document.MAINFORM.GOODS_ETA_DT.value = '';
            document.MAINFORM.DELVR_DOC_AGST.value = 'D/P';
            document.MAINFORM.TENOR_START_DT.value = '';
            document.MAINFORM.DUE_DT.value = '';
            document.MAINFORM.WAIVE_INSTRUCTION.value = 'No';
            document.MAINFORM.CHG_FLG.value = 'Drawee';
            document.MAINFORM.REMIT_BK_CHG_FLG.value = '';
            document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value = '';
            document.MAINFORM.REMIT_BK_CHG_AMT.value = 0;
            document.MAINFORM.PROT_FOR.value = '';
            document.MAINFORM.BILL_INSTR.value = 'None';
            document.MAINFORM.DOC_INSTR.value = '';
            document.MAINFORM.COLL_INT_FLG.value = 'No';
            document.MAINFORM.WAIVE_INT_REFUSED.value = '';
            document.MAINFORM.INT_RT.value = '';
            document.MAINFORM.INT_DAYS_BASIS.value = '';
            document.MAINFORM.INT_FM_PRD.value = '';
            document.MAINFORM.INT_TO_PRD.value = '';
            document.MAINFORM.INT_FM_DT.value = '';
            document.MAINFORM.INT_TO_DT.value = '';
            document.MAINFORM.HOLD_DOC.value = 'No';
            document.MAINFORM.STORE_INSURE_GOODS.value = 'No';
            document.MAINFORM.GOODS_CONS_TO.value = '';
            document.MAINFORM.REL_IN_TRUST_FLG.value = 'No';
        }

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.INTERVAL_DAYS.value = 21;
        document.MAINFORM.MAX_TRACER_NO.value = 3;
        SYT_CLERK_ID();
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.REMIT_BK_CHG_CCY.value = document.MAINFORM.COLL_CCY.value;
        SYF_IMCO_TENOR_START_DT();
        SYM_IMCO_MT410_TAG_32();
        SYF_IMCO_CAL_TENOR_32K();
        SYF_IMCO_CLAUSE();
        SYS_GetCUBK('SHIP_FM_CNTY_CODE', document.MAINFORM.SHIP_FM_CNTY_CODE.name);
        SYS_GetCUBK('SHIP_TO_CNTY_CODE', document.MAINFORM.SHIP_TO_CNTY_CODE.name);
        SYM_IMCO_LOCAL_LCY_BAL();
        SYM_IMCO_CAL_LOCAL_AMT();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = 'Issued Collection';
        if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
            document.MAINFORM.NXT_STATUS.value = 'Payment Instruction';
        } //Marked by hattie on 20181119 fr pilot test 61885;
        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        document.MAINFORM.COLL_AMT_TMP.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        //SYF_IMCO_CAL_TENOR_32K();
        SYF_IMCO_Get_TEMP_N90_REF_20();
        SYM_IMCO_MT410_TAG_32();
        document.MAINFORM.MT430_TAG_32K.value = document.MAINFORM.MT410_TAG_32K.value;
        document.MAINFORM.TEP_TENOR_32K.value = document.MAINFORM.TEMP_TENOR_32K.value;
        document.MAINFORM.NEW_DUE_DT_TEMP.value = document.MAINFORM.DUE_DT.value;

        SYT_Cal_C_TRANS_CODE();
        SYM_IMCO_CONFIRM_CALL();
        Cal_MSG_TYPE();
        SYM_IMCO_Cal_DOC_PRES();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYS_GetRefNo('IMCO', 'SYM_IMCO_SetRefNo');
        SYM_IMCO_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC' && SYS_ORG_FUNCTION_NAME == 'CreateCollection') {
            SYF_IMCO_FREE_PYMT_CHG1();
            SYF_IMCO_COURIER_FEE_CHG1();
            SYF_IMCO_POST_CHAGE();
            SYM_IMCO_Rel_Goods_CHG();
            SYM_IMCO_Chg_Calculation_Other();
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
        }
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
        //for charge
        SYM_IMCO_Functions_For_Chg();

        SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "O");
        SYT_ChangeFldClass(document.MAINFORM.OUR_ROLE, "M");

        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'IQ') {
            SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'P');
            SYF_IMCO_MPO_COLL_TYPE();
        }


        SYF_IMCO_TENOR_START_DT();
        SYF_IMCO_Remit_Charge();
        SYF_IMCO_Collect_Interest();
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);




        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYF_IMCO_SEND_TO_RCV_INFO();
        document.MAINFORM.TEMP_DRWE_ID.value = 'DRWEIDFORCHG';
        SYM_IMCO_PRE_SWIFT_TAG();
        SYM_IMCO_REIM_SWIFT_TAG();

        SYF_IMCO_MPO_OUR_ROLE();

        //Add by jane at 20090224 for bug 1285
        SYM_IMCO_Cal_NXT_TRCR_DT();
        SYM_IMCO_DOC_STAT_SG();
        //MPO_Collateral_SECTION();
        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();


        SYT_ChangeFldClass_New("REG_DT", "P"); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_SYF_IMCO_Chk_REMT_DT = function() {
    try {

        if (!SYS_Day1MustbeLaterThanDay2(document.MAINFORM.TRX_DT.name, document.MAINFORM.REMT_DT.name)) {
            document.MAINFORM.REMT_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MPO_OUR_ROLE = function() {
    try {

        if (document.MAINFORM.OUR_ROLE.value == 'First Collecting Bank') {
            document.MAINFORM.PRES_BK_CORR_MED.value = 'None';
            document.MAINFORM.PRES_BK_LANG.value = 'English';
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
            SYT_ChangeFldClass_New('PRES_BK_NM', 'M');
            SYT_ChangeFldClass_New('PRES_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('PRES_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'O');
            SYT_ChangeFldClass_New('PRES_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('PRES_BK_CORR_MED', 'M');
            SYT_ChangeFldClass_New('PRES_BK_LANG', 'M');
            SYT_ChangeFldClass_New('PRES_BK_REF', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('PRES_BK_POST_ADD_BTN', 'O');
        } else {

            SYT_ChangeFldClass_New('PRES_BK_ID', 'B');
            SYT_ChangeFldClass_New('PRES_BK_NM', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD1', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD2', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD3', 'B');
            SYT_ChangeFldClass_New('PRES_BK_MAIL_ADD', 'B');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'B');
            SYT_ChangeFldClass_New('PRES_BK_SW_TAG', 'B');
            SYT_ChangeFldClass_New('PRES_BK_CORR_MED', 'B');
            SYT_ChangeFldClass_New('PRES_BK_LANG', 'B');
            SYT_ChangeFldClass_New('PRES_BK_REF', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ID_BTN', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD_BTN', 'B');
            SYT_ChangeFldClass_New('PRES_BK_POST_ADD_BTN', 'B');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MPO_REC_INFO = function() {
    try {

        if (document.MAINFORM.COLL_TYPE.value != 'Documentary Direct' || document.MAINFORM.COLL_TYPE.value != 'Clean Direct') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_INFO, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_INFO, "P");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRW_ID = function() {
    try {

        SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_Charge()');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_TENOR_START_DT = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'D';
            document.MAINFORM.TENOR_EVENT.value = 'ST';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');


        } else {
            SYF_IMCO_CLASS_BY_TENOR_TYPE();

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_TENOR_DAY = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        nDays = (document.MAINFORM.DAY_MON_FLG.value == "D") ? SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) * 30;

        if (document.MAINFORM.TENOR_START_DT.value != "" && nDays != 0 && document.MAINFORM.DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, 'SYF_IMCO_MAT_DT_back()', 'A', 'N', 'Y');


        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MAT_DT_back = function(matdt) {
    try {

        document.MAINFORM.DUE_DT.value = matdt;
        EEHtml.fireEvent(document.MAINFORM.DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Remit_Charge = function() {
    try {

        if (document.MAINFORM.REMIT_BK_CHG_AMT.value == 0.00) {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_CHG_FLG, "P");
            document.MAINFORM.REMIT_BK_CHG_FLG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.WAIVE_REMT_BK_CHG_FLG, "P");
            document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_CHG_CCY, "P");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_CHG_FLG, "M");
            //document.MAINFORM.REMIT_BK_CHG_FLG.value = 'Drawee';
            SYT_ChangeFldClass(document.MAINFORM.WAIVE_REMT_BK_CHG_FLG, "M");
            //document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_CHG_CCY, "M");
            EEHtml.fireEvent(document.MAINFORM.WAIVE_REMT_BK_CHG_FLG, 'onchange');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Collect_Interest = function() {
    try {

        if (document.MAINFORM.COLL_INT_FLG.value == 'Yes') {

            SYT_ChangeFldClass(document.MAINFORM.WAIVE_INT_REFUSED, "M");
            document.MAINFORM.WAIVE_INT_REFUSED.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.INT_RT, "M");
            SYT_ChangeFldClass(document.MAINFORM.INT_DAYS_BASIS, "M");
            document.MAINFORM.INT_DAYS_BASIS.value = '360';
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "O");
            EEHtml.fireEvent(document.MAINFORM.WAIVE_INT_REFUSED, 'onchange');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.WAIVE_INT_REFUSED, "P");
            document.MAINFORM.WAIVE_INT_REFUSED.value = '';
            SYT_ChangeFldClass(document.MAINFORM.INT_RT, "P");
            document.MAINFORM.INT_RT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.INT_DAYS_BASIS, "P");
            document.MAINFORM.INT_DAYS_BASIS.value = '';
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, "P");
            document.MAINFORM.INT_FM_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "P");
            document.MAINFORM.INT_FM_PRD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, "P");
            document.MAINFORM.INT_TO_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "P");
            document.MAINFORM.INT_TO_PRD.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Interest = function() {
    try {

        if (document.MAINFORM.INT_FM_PRD.value == '' && document.MAINFORM.INT_TO_PRD.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, "P");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, "P");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Present_Swift_TAG = function() {
    try {

        if (document.MAINFORM.PRES_BK_SW_ADD.value != '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'A'; // Utility Auto Fix Comments
        } else {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'D'; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Remit_Swift_TAG = function() {
    try {

        if (document.MAINFORM.REMIT_BK_SW_ADD.value != '') {
            document.MAINFORM.REMIT_BK_SW_TAG.value = 'A'; // Utility Auto Fix Comments
        } else {
            document.MAINFORM.REMIT_BK_SW_TAG.value = 'D'; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Charge = function() {
    try {

        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DEF_PMT_COM_CHG1 = function() {
    try {

        if ((document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval') && document.MAINFORM.COLL_CCY.value != '' && document.MAINFORM.COLL_TRX_CCY_AMT.value != '') {
            SYM_IMCO_DEF_PMT_COM_CHG();
            SYM_IMCO_Chg_Calculate_COLL_Comm();



        } else {
            SYT_RESET_COMM('IMCO_DEF_PAY_COMM');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_COURIER_FEE_CHG1 = function() {
    try {

        SYM_IMCO_COURIER_FEE_CHG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_AC_OFFICER_CODE = function() {
    try {

        if (document.MAINFORM.DRWE_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_PRES_BK_ID = function() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Rel_Goods_CHG1 = function() {
    try {

        if (document.MAINFORM.REL_ORDER_REF.value != '') {
            SYM_IMCO_Rel_Goods_CHG();
        } else {
            SYT_RESET_COMM('IMCO_REL_GOODS_CHG');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP_N90_REF_20 = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
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
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Postage_charge_CHG1 = function() {
    try {

        if (document.MAINFORM.MAIL_METHOD_1ST.value == 'Mail' || document.MAINFORM.MAIL_METHOD_1ST.value == 'Registered Mail' || document.MAINFORM.MAIL_METHOD_2ND.value == 'Mail' || document.MAINFORM.MAIL_METHOD_2ND.value == 'Registered Mail') {
            SYM_IMCO_Postage_charge();
        } else {
            SYT_RESET_COMM('IMCO_POST_CHG');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Interest2 = function() {
    try {

        if (document.MAINFORM.INT_FM_DT.value == '' && document.MAINFORM.INT_TO_DT.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "O");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_PRD, "P");
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_PRD, "P");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_TENOR_32K = function() {
    try {

        var cTENOR_EVENT; // Utility Auto Fix Comments
        var nTENOR_DAYS; // Utility Auto Fix Comments
        nTENOR_DAYS = document.MAINFORM.TENOR_DAYS.value.length;
        cTENOR_EVENT = document.MAINFORM.TENOR_EVENT.value.trim().substr(0, 2);
        if (nTENOR_DAYS == 1) {
            document.MAINFORM.TEMP_TENOR_DAYS_32K.value = "00" + document.MAINFORM.TENOR_DAYS.value;
        } else if (nTENOR_DAYS == 2) {
            document.MAINFORM.TEMP_TENOR_DAYS_32K.value = "0" + document.MAINFORM.TENOR_DAYS.value;
        } else {
            document.MAINFORM.TEMP_TENOR_DAYS_32K.value = document.MAINFORM.TENOR_DAYS.value;
        }

        if (document.MAINFORM.DUE_DT.value == "") {
            if (document.MAINFORM.DAY_MON_FLG.value == "D") {
                document.MAINFORM.TEMP_TENOR_32K.value = "D" + document.MAINFORM.TEMP_TENOR_DAYS_32K.value + cTENOR_EVENT;
            }
            if (document.MAINFORM.DAY_MON_FLG.value == "M") {
                document.MAINFORM.TEMP_TENOR_32K.value = "M" + document.MAINFORM.TEMP_TENOR_DAYS_32K.value + cTENOR_EVENT;
            }
            if (document.MAINFORM.DAY_MON_FLG.value == "") {
                document.MAINFORM.TEMP_TENOR_32K.value = '';
            }
        } else {
            document.MAINFORM.TEMP_TENOR_32K.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CLAUSE = function() {
    try {

        var sClause1; // Utility Auto Fix Comments
        var sClause2; // Utility Auto Fix Comments
        var sClause3; // Utility Auto Fix Comments
        var sClause4; // Utility Auto Fix Comments
        var sClause5; // Utility Auto Fix Comments
        document.MAINFORM.CLAUSE_1.value = '';
        if (document.MAINFORM.COLL_INT_FLG.value == "Yes" && document.MAINFORM.INT_FM_PRD.value != '' && document.MAINFORM.INT_TO_PRD.value != '') {
            SYS_InsertClauseDirect("CLAUSE_1", "SPCL_INSTR_A");
        }
        document.MAINFORM.CLAUSE_2.value = '';
        if (document.MAINFORM.COLL_INT_FLG.value == "Yes" && document.MAINFORM.INT_FM_DT.value != '' && document.MAINFORM.INT_TO_DT.value != '') {
            SYS_InsertClauseDirect("CLAUSE_2", "SPCL_INSTR_B");
        }
        document.MAINFORM.CLAUSE_3.value = '';
        if (document.MAINFORM.WAIVE_INT_REFUSED.value == "No") {
            SYS_InsertClauseDirect("CLAUSE_3", "SPCL_INSTR_C");
        }
        document.MAINFORM.CLAUSE_4.value = '';
        if (document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value == "No") {
            SYS_InsertClauseDirect("CLAUSE_4", "SPCL_INSTR_2");
        }
        document.MAINFORM.CLAUSE_5.value = '';
        if (document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value == "Yes") {
            SYS_InsertClauseDirect("CLAUSE_5", "SPCL_INSTR_21");
        }

        sClause1 = ''; // Utility Auto Fix Comments
        if (document.MAINFORM.CLAUSE_1.value == '') {
            sClause1 = '';
        } else {
            sClause1 = document.MAINFORM.CLAUSE_1.value + "\n";
        }

        sClause2 = ''; // Utility Auto Fix Comments
        if (document.MAINFORM.CLAUSE_2.value == '') {
            sClause2 = '';
        } else {
            sClause2 = document.MAINFORM.CLAUSE_2.value + "\n";
        }

        sClause3 = ''; // Utility Auto Fix Comments
        if (document.MAINFORM.CLAUSE_3.value == '') {
            sClause3 = '';
        } else {
            sClause3 = document.MAINFORM.CLAUSE_3.value + "\n";
        }
        sClause4 = ''; // Utility Auto Fix Comments
        if (document.MAINFORM.CLAUSE_4.value == '') {
            sClause4 = '';
        } else {
            sClause4 = document.MAINFORM.CLAUSE_4.value + "\n";
        }
        sClause5 = ''; // Utility Auto Fix Comments
        if (document.MAINFORM.CLAUSE_5.value == '') {
            sClause5 = '';
        } else {
            sClause5 = document.MAINFORM.CLAUSE_5.value + "\n";
        }
        document.MAINFORM.SPCL_INSTR.value = sClause1 + sClause2 + sClause3 + sClause4 + sClause5;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWE_ID_B = function() {
    try {

        SYF_IMCO_Charge();
        //SYF_IMCO_AC_OFFICER_CODE();
        SYM_IMCO_Cal_DRWE_ID_back();
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWE_ID_B2();

        SYF_IMCO_FREE_PYMT_CHG1();
        SYF_IMCO_COURIER_FEE_CHG1();
        SYF_IMCO_POST_CHAGE();

        SYM_IMCO_Rel_Goods_CHG();
        SYM_IMCO_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWE_NM_Z = function() {
    try {

        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_CORR_MED.value = '';
            document.MAINFORM.DRWE_EMAIL.value = '';
            document.MAINFORM.DRWE_FAX.value = '';
            document.MAINFORM.DRWE_LANG.value = 'English';
            document.MAINFORM.DRWE_MAIL_ADD.value = '';
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_REF.value = '';
            document.MAINFORM.DRWE_TELEX.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
            SYM_IMCO_DRWE_ID_B2();
        } else {
            SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_DRWE_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_ID_B = function() {
    try {

        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_Cal_DRWR_ID_back();
        SYM_IMCO_DRWR_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_NM_Z = function() {
    try {

        if (document.MAINFORM.DRWR_ID.value == '') {
            document.MAINFORM.DRWR_LANG.value = 'English';
            document.MAINFORM.DRWR_MAIL_ADD.value = '';
            document.MAINFORM.DRWR_NM.value = '';
            document.MAINFORM.DRWR_TELEX.value = '';
            document.MAINFORM.DRWR_ADD1.value = '';
            document.MAINFORM.DRWR_ADD2.value = '';
            document.MAINFORM.DRWR_ADD3.value = '';
            document.MAINFORM.DRWR_CORR_MED.value = '';
            document.MAINFORM.DRWR_EMAIL.value = '';
            document.MAINFORM.DRWR_FAX.value = '';
            document.MAINFORM.DRWR_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
            SYM_IMCO_DRWR_ID_B2();

        } else {
            SYS_GetCUBK('DRWR_ID', document.MAINFORM.DRWR_ID.name, 'SYF_IMCO_DRWR_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_SEND_TO_RCV_INFO = function() {
    try {

        if (document.MAINFORM.REMIT_BK_COR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, "O");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_SW_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_MAIL_ADD, "O");
        }
        if (document.MAINFORM.REMIT_BK_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, "P");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.REMIT_BK_COR_MED.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, "P");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_REMIT_BK_ID_B = function() {
    try {

        SYM_IMCO_Cal_REMIT_BK_ID_back();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYF_IMCO_SEND_TO_RCV_INFO();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_REMIT_BK_NM = function() {
    try {

        if (document.MAINFORM.REMIT_BK_ID.value == '') {
            document.MAINFORM.REMIT_BK_ADD1.value = '';
            document.MAINFORM.REMIT_BK_ADD2.value = '';
            document.MAINFORM.REMIT_BK_ADD3.value = '';
            document.MAINFORM.REMIT_BK_NM.value = '';
            document.MAINFORM.REMIT_BK_SW_ADD.value = '';
            document.MAINFORM.REMIT_BK_COR_MED.value = '';
            document.MAINFORM.REMIT_BK_SW_TAG.value = '';
            document.MAINFORM.REMIT_LANG.value = 'English';
            document.MAINFORM.REMIT_MAIL_ADD.value = '';
            document.MAINFORM.REMIT_TLX.value = '';
            document.MAINFORM.REMIT_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
            SYM_IMCO_REMIT_BK_ID_B2();


        } else {
            SYS_GetCUBK('REMIT_BK_ID', document.MAINFORM.REMIT_BK_ID.name, 'SYF_IMCO_REMIT_BK_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_REMIT_BK_ID = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.REMIT_BK_SW_ADD.value.length == 11 || document.MAINFORM.REMIT_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.REMIT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.REMIT_BK_SW_ADD.value = document.MAINFORM.REMIT_BK_SW_ADD.value + "XXX"; // Utility Auto Fix Comments
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.REMIT_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "REMIT_BK_ID";
            SYS_GetTableDataByRule_S('SYF_IMCO_CreateCollection_SYF_IMCO_Get_REMIT_BK_ID_0', '1', true);
            if (document.MAINFORM.REMIT_BK_ID.value != '') {
                SYS_GetCUBK('REMIT_BK_ID', 'REMIT_BK_ID', 'SYF_IMCO_REMIT_BK_ID_B()');
            }
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CLASS_BY_TENOR_TYPE = function() {
    try {

        if (document.MAINFORM.TENOR_EVENT.value == "XXX") {
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, 'M');
        } else if (document.MAINFORM.TENOR_EVENT.value == "XX") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'D';
            document.MAINFORM.DUE_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, "M");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_FREE_PYMT_CHG1 = function() {
    try {

        if (document.MAINFORM.DOC_INSTR.value == 'Free of Payment') {

            SYM_IMCO_FREE_PYMT();

            SYT_RESET_COMM('IMCO_COLL_COMM');
            SYT_RESET_COMM('IMCO_DEF_PAY_COMM');
        } else {
            SYF_IMCO_COLL_COMM_CHG1();
            SYF_IMCO_DEF_PMT_COM_CHG1();
            SYT_RESET_COMM('IMCO_FREE_PAYT');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_COLL_COMM_CHG1 = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P' && document.MAINFORM.COLL_CCY.value != '' && document.MAINFORM.COLL_TRX_CCY_AMT.value != '') {
            SYM_IMCO_Chg_Calculate_COLL_Comm();
        } else {

            SYT_RESET_COMM('IMCO_COLL_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_POST_CHAGE = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_POST_CHG'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_cal_PRES_BK_CORR_MED = function() {
    try {

        if (document.MAINFORM.PRES_BK_CORR_MED.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.PRES_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.PRES_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_FREE_PYMT_CLS_FLG = function() {
    try {

        //added by amy for SMBC DEMO 09-05 2012

        if (document.MAINFORM.DOC_INSTR.value == 'Free of Payment') {
            document.MAINFORM.CLS_FLG.value = 'Yes';
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = 0;
            //CHG_setAllChargeAt(0);
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'onchange'); //Jax edit 2020/5/11
        } else {
            document.MAINFORM.CLS_FLG.value = 'No'; // Utility Auto Fix Comments
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = 1;
            //CHG_setAllChargeAt(1);
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'onchange'); //Jax edit 2020/5/11
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/A" && document.MAINFORM.DOC_INSTR.value == "Payment") {
            document.MAINFORM.DELVR_DOC_AGST.value = "";
            document.MAINFORM.DOC_INSTR.value = "";
            return false;
        }

        if (document.MAINFORM.DELVR_DOC_AGST.value == "D/P" && document.MAINFORM.DOC_INSTR.value == "Acceptance of Draft") {

            document.MAINFORM.DELVR_DOC_AGST.value = "";
            document.MAINFORM.DOC_INSTR.value = "";
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chk_TENOR_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.TENOR_START_DT.name) < 0) {
            alert("Tenor Start Date is not allowed in the past times!");
            document.MAINFORM.TENOR_START_DT.value = '';
        } else if (SYS_GetSubDays(document.MAINFORM.TENOR_START_DT.name, document.MAINFORM.DUE_DT.name) < 0) {
            alert("Tenor Maturity Date is not allowed before Tenor Start Date!");
            document.MAINFORM.DUE_DT.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHG_NXT_TRCR_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.NXT_TRCR_DT.name) < 0) {
            alert("First Tracer Date is not allowed in the past times!");
            document.MAINFORM.NXT_TRCR_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MPO_COLL_TYPE = function() {
    try {

        if (document.MAINFORM.COLL_TYPE.value == "Documentary Direct" || document.MAINFORM.COLL_TYPE.value == 'Clean Direct') {
            SYT_ChangeFldClass_New("REMIT_BK_NM", "O");
            SYT_ChangeFldClass_New("REMIT_BK_COR_MED", "O");
            SYT_ChangeFldClass_New("REMIT_LANG", "O");
        } else {
            SYT_ChangeFldClass_New("REMIT_BK_NM", "M");
            SYT_ChangeFldClass_New("REMIT_BK_COR_MED", "M");
            SYT_ChangeFldClass_New("REMIT_LANG", "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_CCY_onchange = function(event) {
    try {
        SYM_IMCO_LOCAL_LCY_BAL();
        SYM_IMCO_CAL_LOCAL_AMT();
        SYF_IMCO_FREE_PYMT_CHG1();
        SYF_IMCO_COURIER_FEE_CHG1();
        SYF_IMCO_POST_CHAGE();
        SYM_IMCO_Rel_Goods_CHG();
        SYM_IMCO_Chg_Calculation_Other();
        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_INT_FLG_onchange = function(event) {
    try {
        SYF_IMCO_Collect_Interest();
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_TRX_CCY_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value) < 0) {
            alert("The Collection amount field should not negative values!");
            document.MAINFORM.COLL_TRX_CCY_AMT.value = 0;
        }


        SYM_IMCO_LOCAL_LCY_BAL();
        SYM_IMCO_CAL_LOCAL_AMT();
        SYM_IMCO_CAL_LOCAL_AMT();
        SYF_IMCO_FREE_PYMT_CHG1();
        SYF_IMCO_COURIER_FEE_CHG1();
        SYF_IMCO_POST_CHAGE();
        SYM_IMCO_Rel_Goods_CHG();
        SYM_IMCO_Chg_Calculation_Other();
        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_MPO_COLL_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP_N90_REF_20();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
        SYF_IMCO_CAL_TENOR_32K();
        SYM_IMCO_MT410_TAG_32();
        EEHtml.fireEvent(document.MAINFORM.DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DELVR_DOC_AGST_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_START_DT();
        SYM_IMCO_MT410_TAG_32();
        SYF_IMCO_CAL_TENOR_32K();
        SYF_IMCO_FREE_PYMT_CHG1();
        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DOC_INSTR_onchange = function(event) {
    try {
        SYF_IMCO_FREE_PYMT_CHG1();
        SYF_IMCO_FREE_PYMT_CLS_FLG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DOC_STAT_onchange = function(event) {
    try {
        SYM_IMCO_DOC_STAT_SG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWE_NM_Z();

        //SYF_IMCO_AC_OFFICER_CODE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWR_NM_Z();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DUE_DT_onchange = function(event) {
    try {
        SYF_IMCO_Chk_TENOR_DT();
        SYM_IMCO_MT410_TAG_32();
        SYF_IMCO_CAL_TENOR_32K();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INTERVAL_DAYS_onchange = function(event) {
    try {
        SYM_IMCO_Cal_NXT_TRCR_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_DAYS_BASIS_onchange = function(event) {
    try {
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_FM_DT_onchange = function(event) {
    try {
        SYF_IMCO_Interest();
        SYF_IMCO_Interest2();
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_FM_PRD_onchange = function(event) {
    try {
        SYF_IMCO_Interest();
        SYF_IMCO_Interest2();
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_RT_onchange = function(event) {
    try {
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_TO_DT_onchange = function(event) {
    try {
        SYF_IMCO_Interest();
        SYF_IMCO_Interest2();
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_TO_PRD_onchange = function(event) {
    try {
        SYF_IMCO_Interest();
        SYF_IMCO_Interest2();
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_MAIL_METHOD_1ST_onchange = function(event) {
    try {
        SYF_IMCO_COURIER_FEE_CHG1();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NXT_TRCR_DT_onchange = function(event) {
    try {
        SYF_IMCO_CHG_NXT_TRCR_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_OUR_ROLE_onchange = function(event) {
    try {
        SYF_IMCO_MPO_OUR_ROLE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYF_IMCO_cal_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
        SYM_IMCO_Get_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REG_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REL_IN_TRUST_FLG_onchange = function(event) {
    try {
        //MPO_RISK_TAB_BY_FUNCTION();
        //MPO_LIMITS_SECTION();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REL_ORDER_REF_onchange = function(event) {
    try {
        SYF_IMCO_Rel_Goods_CHG1();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REMIT_BK_CHG_AMT.value = 0;
        }
        SYF_IMCO_Remit_Charge();
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_CCY_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.REMIT_BK_CHG_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_COR_MED_onchange = function(event) {
    try {
        SYF_IMCO_SEND_TO_RCV_INFO();
        EEHtml.fireEvent(document.MAINFORM.SEND_TO_RCV_INFO, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYF_IMCO_Cal_REMIT_BK_NM();
        SYF_IMCO_SEND_TO_RCV_INFO();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
        SYF_IMCO_Get_REMIT_BK_ID();
        SYF_IMCO_SEND_TO_RCV_INFO();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMT_DT_onchange = function(event) {
    try {
        //SYF_IMCO_SYF_IMCO_Chk_REMT_DT();
        if (SYS_GetSubDays(document.MAINFORM.REMT_DT.name, document.MAINFORM.TRX_DT.name) < 0) {
            document.MAINFORM.REMT_DT.value = "";
            alert("The Remittance Date is not allowed in future! ");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SG_BIN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('SG_NO', '1');
        //SYS_InqCUBK('SG_NO', 'SG_NO');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SG_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.SG_NO.value != '') {
            SYS_GetCUBK('SG_NO', document.MAINFORM.SG_NO.name, 'SYM_IMCO_SG_Get_Back()');
			EEHtml.fireEvent(document.MAINFORM.DRWE_ID, 'onchange');
        }
        if (document.MAINFORM.SG_NO.value == '') {
            document.MAINFORM.SG_AMT.value = '';
            document.MAINFORM.SG_CCY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_FM_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_FM_CNTY_CODE', document.MAINFORM.SHIP_FM_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_TO_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_TO_CNTY_CODE', document.MAINFORM.SHIP_TO_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
        SYF_IMCO_CAL_TENOR_32K();
        SYM_IMCO_MT410_TAG_32();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_EVENT_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_START_DT();

        SYF_IMCO_CAL_TENOR_32K();
        SYM_IMCO_MT410_TAG_32();
        SYF_IMCO_CLASS_BY_TENOR_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_IMCO_Chk_TENOR_DT();
        SYF_IMCO_TENOR_DAY();
        SYF_IMCO_CAL_TENOR_32K();
        SYM_IMCO_MT410_TAG_32();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_WAIVE_INT_REFUSED_onchange = function(event) {
    try {
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_WAIVE_REMT_BK_CHG_FLG_onchange = function(event) {
    try {
        SYF_IMCO_CLAUSE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('SPCL_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button12_onclick = function(event) {
    try {
        SYS_InsertClause('PMT_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_CreateCollection412.js", e);
    }
}