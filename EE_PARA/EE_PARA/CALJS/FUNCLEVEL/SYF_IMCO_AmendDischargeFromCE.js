var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IMCO_AMD_TYPE = function() {
    try {

        var amd_type; // Utility Auto Fix Comments
        amd_type = document.MAINFORM.AMD_TYPE.value;
        if (amd_type == "Amendment") {
            document.MAINFORM.CHG_FLG.style.visibility = 'hidden';
            document.MAINFORM.CLS_FLG.value = "No";

        }
        if (amd_type == "Release Free of Payment") {
            document.MAINFORM.CHG_FLG.style.visibility = 'visible';
            SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, 'M');
            document.MAINFORM.CLS_FLG.value = "No";

        }

        if (amd_type == "Close File and return documents") {
            document.MAINFORM.CHG_FLG.style.visibility = 'hidden';
            document.MAINFORM.CLS_FLG.value = "Yes";
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_TENOR_33K = function() {
    try {

        var cTENOR_EVENT; // Utility Auto Fix Comments
        var nTENOR_DAYS; // Utility Auto Fix Comments
        nTENOR_DAYS = document.MAINFORM.NEW_TENOR_DAYS.value.length;
        cTENOR_EVENT = document.MAINFORM.NEW_TENOR_EVENT.value.trim().substr(0, 2);
        if (nTENOR_DAYS == 1) {
            document.MAINFORM.TEMP_TENOR_DAYS_33K.value = "00" + document.MAINFORM.NEW_TENOR_DAYS.value;
        } else if (nTENOR_DAYS == 2) {
            document.MAINFORM.TEMP_TENOR_DAYS_33K.value = "0" + document.MAINFORM.NEW_TENOR_DAYS.value;
        } else {
            document.MAINFORM.TEMP_TENOR_DAYS_33K.value = document.MAINFORM.NEW_TENOR_DAYS.value;
        }

        if (document.MAINFORM.NEW_DUE_DT.value == '') {
            if (document.MAINFORM.NEW_DAY_MON_FLG.value == "D") {
                document.MAINFORM.TEMP_TENOR_33K.value = "D" + document.MAINFORM.TEMP_TENOR_DAYS_33K.value + cTENOR_EVENT;
            }
            if (document.MAINFORM.NEW_DAY_MON_FLG.value == "M") {
                document.MAINFORM.TEMP_TENOR_33K.value = "M" + document.MAINFORM.TEMP_TENOR_DAYS_33K.value + cTENOR_EVENT;
            }
            if (document.MAINFORM.NEW_DAY_MON_FLG.value == "") {
                document.MAINFORM.TEMP_TENOR_33K.value = '';
            }
        } else {
            document.MAINFORM.TEMP_TENOR_33K.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_PRES_BK_REF = function() {
    try {

        //Add by jane at 20090306 for bug 1335

        if (document.MAINFORM.SEND_AMD_BY.value == 'MT430' && document.MAINFORM.OUR_ROLE.value == 'First Collecting Bank') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CLASS_BY_TENOR_TYPE = function() {
    try {

        if (document.MAINFORM.NEW_TENOR_EVENT.value == "XXX") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_EVENT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'B');
        } else if (document.MAINFORM.NEW_TENOR_EVENT.value == "XX") {
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_DAY_MON_FLG.value = 'D';
            document.MAINFORM.NEW_DUE_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_EVENT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, "M");


        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_EVENT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, "B");

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CLASS_BY_TENOR_TYPE_OLD = function() {
    try {

        if (document.MAINFORM.TEMP_TENOR_EVENT.value == "XXX") {

            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DAY_MON_FLG, "B");
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_DETAILS, 'B');

        } else if (document.MAINFORM.TEMP_TENOR_EVENT.value == "XX") {
            document.MAINFORM.TEMP_TENOR_DAYS.value = 0;
            document.MAINFORM.TEMP_DAY_MON_FLG.value = 'D';
            document.MAINFORM.TEMP_DUE_DT.value = '';

            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DAY_MON_FLG, 'P');

        } else {

            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_DETAILS, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_COURIER_FEE_CHG1 = function() {
    try {

        SYM_IMCO_COURIER_FEE_CHG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_MT4XX_32A_FLG = function() {
    try {

        if (document.MAINFORM.TENOR_EVENT.value == 'Fixed Maturity') {
            document.MAINFORM.MT4XX_32A_FLG.value = 'A';
        } else {
            document.MAINFORM.MT4XX_32A_FLG.value = 'K';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_MT4XX_33A_FLG = function() {
    try {

        if (document.MAINFORM.NEW_TENOR_EVENT.value == 'Fixed Maturity') {
            document.MAINFORM.MT4XX_33A_FLG.value = 'A';
        } else {
            document.MAINFORM.MT4XX_33A_FLG.value = 'K';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_NEW_COLL_AMT = function() {
    try {

        var COLL_AMT; // Utility Auto Fix Comments
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_COLL_AMT; // Utility Auto Fix Comments
        COLL_AMT = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_COLL_AMT = SYS_BeFloat(document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value);
        if (document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value < 0) {
            document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value = 0;
        } else if (COLL_AMT > NEW_COLL_AMT) {
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, 0);
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, COLL_AMT - NEW_COLL_AMT);
        } else if (COLL_AMT < NEW_COLL_AMT) {
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, 0);
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, NEW_COLL_AMT - COLL_AMT);
        } else {
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, 0);
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_NO_OF_AMD = function() {
    try {

        var nNO_OF_AMD; // Utility Auto Fix Comments
        nNO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        nNO_OF_AMD = nNO_OF_AMD + 1;
        document.MAINFORM.NO_OF_AMD.value = nNO_OF_AMD;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
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
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_SEND_AMD_BY = function() {
    try {

        if (document.MAINFORM.OUR_ROLE.value == 'Only Collecting Bank' || document.MAINFORM.OUR_ROLE.value == 'Presenting Bank') {
            document.MAINFORM.SEND_AMD_BY.value = 'Mail';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Charge = function() {
    try {

        SYF_IMCO_COURIER_FEE_CHG1();
        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
        SYM_IMCO_Postage_charge();
        SYM_IMCO_COLL_AMD_COMM_CHG();
        SYM_IMCO_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chk_INC_DEC_AMT = function() {
    try {

        if (document.MAINFORM.DEC_AMT.value != 0 && document.MAINFORM.INC_AMT.value != 0) {
            SYS_CheckError(document.MAINFORM.INC_AMT.value, "The Increase Amount and Decrease Amount cannot be both presented.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var Day_Month; // Utility Auto Fix Comments
        var deliver_agst; // Utility Auto Fix Comments
        var tenor_days; // Utility Auto Fix Comments
        var tenor_type; // Utility Auto Fix Comments
        document.MAINFORM.CURRNT_STATUS.value = 'Amend/Discharge';
        document.MAINFORM.NXT_STATUS.value = 'Active';

        document.MAINFORM.COLL_TRX_CCY_AMT.value = document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value; // Utility Auto Fix Comments
        if (document.MAINFORM.NEW_DRWE_ADD1.value != '') {
            document.MAINFORM.DRWE_ADD1.value = document.MAINFORM.NEW_DRWE_ADD1.value;
        }
        if (document.MAINFORM.NEW_DRWE_ADD2.value != '') {
            document.MAINFORM.DRWE_ADD2.value = document.MAINFORM.NEW_DRWE_ADD2.value;
        }
        if (document.MAINFORM.NEW_DRWE_ADD3.value != '') {
            document.MAINFORM.DRWE_ADD3.value = document.MAINFORM.NEW_DRWE_ADD3.value;
        }
        if (document.MAINFORM.NEW_DRWE_CORR_MED.value != '') {
            document.MAINFORM.DRWE_CORR_MED.value = document.MAINFORM.NEW_DRWE_CORR_MED.value;
        }
        if (document.MAINFORM.NEW_DRWE_EMAIL.value != '') {
            document.MAINFORM.DRWE_EMAIL.value = document.MAINFORM.NEW_DRWE_EMAIL.value;
        }
        if (document.MAINFORM.NEW_DRWE_FAX.value != '') {
            document.MAINFORM.DRWE_FAX.value = document.MAINFORM.NEW_DRWE_FAX.value;
        }
        if (document.MAINFORM.NEW_DRWE_ID.value != '') {
            document.MAINFORM.DRWE_ID.value = document.MAINFORM.NEW_DRWE_ID.value;
        }
        if (document.MAINFORM.NEW_DRWE_LANG.value != '') {
            document.MAINFORM.DRWE_LANG.value = document.MAINFORM.NEW_DRWE_LANG.value;
        }
        if (document.MAINFORM.NEW_DRWE_MAIL_ADD.value != '') {
            document.MAINFORM.DRWE_MAIL_ADD.value = document.MAINFORM.NEW_DRWE_MAIL_ADD.value;
        }
        if (document.MAINFORM.NEW_DRWE_NM.value != '') {
            document.MAINFORM.DRWE_NM.value = document.MAINFORM.NEW_DRWE_NM.value;
        }
        if (document.MAINFORM.NEW_DRWE_NOTES.value != '') {
            document.MAINFORM.DRWE_NOTES.value = document.MAINFORM.NEW_DRWE_NOTES.value;
        }
        if (document.MAINFORM.NEW_DRWE_ORDER_NO.value != '') {
            document.MAINFORM.DRWE_ORDER_NO.value = document.MAINFORM.NEW_DRWE_ORDER_NO.value;
        }
        if (document.MAINFORM.NEW_DRWE_ORDER_POST.value != '') {
            document.MAINFORM.DRWE_ORDER_POST.value = document.MAINFORM.NEW_DRWE_ORDER_POST.value;
        }
        if (document.MAINFORM.NEW_DRWE_REF.value != '') {
            document.MAINFORM.DRWE_REF.value = document.MAINFORM.NEW_DRWE_REF.value;
        }
        if (document.MAINFORM.NEW_DRWE_TELEX.value != '') {
            document.MAINFORM.DRWE_TELEX.value = document.MAINFORM.NEW_DRWE_TELEX.value;
        }
        if (document.MAINFORM.NEW_AC_OFFICER_CODE.value != '') {
            document.MAINFORM.AC_OFFICER_CODE.value = document.MAINFORM.NEW_AC_OFFICER_CODE.value;
        }


        //FOR TENOR SUNNY
        if (document.MAINFORM.NEW_DELVR_DOC_AGST.value != '') {
            document.MAINFORM.DELVR_DOC_AGST.value = document.MAINFORM.NEW_DELVR_DOC_AGST.value;
        }
        if (document.MAINFORM.NEW_TENOR_START_DT.value != '') {
            document.MAINFORM.TENOR_START_DT.value = document.MAINFORM.NEW_TENOR_START_DT.value;
        }
        if (document.MAINFORM.NEW_TENOR_DAYS.value != 0) {
            document.MAINFORM.TENOR_DAYS.value = document.MAINFORM.NEW_TENOR_DAYS.value;
        }
        if (document.MAINFORM.NEW_DAY_MON_FLG.value != '') {
            document.MAINFORM.DAY_MON_FLG.value = document.MAINFORM.NEW_DAY_MON_FLG.value;
        }
        if (document.MAINFORM.NEW_DUE_DT.value != '') {
            document.MAINFORM.DUE_DT.value = document.MAINFORM.NEW_DUE_DT.value;
        }
        if (document.MAINFORM.NEW_TENOR_EVENT.value != '') {
            document.MAINFORM.TENOR_EVENT.value = document.MAINFORM.NEW_TENOR_EVENT.value;
        }
        if (document.MAINFORM.NEW_TENOR_DETAILS.value != '') {
            document.MAINFORM.TENOR_DETAILS.value = document.MAINFORM.NEW_TENOR_DETAILS.value;
        }
        if (document.MAINFORM.MT430_TAG_33K.value == 'A') {
            document.MAINFORM.MT410_TAG_32K.value = document.MAINFORM.MT430_TAG_33K.value;
            document.MAINFORM.TEMP_TENOR_32K.value = document.MAINFORM.TEMP_TENOR_33K.value;
        }
        if (document.MAINFORM.TEMP_TENOR_33K.value != '' && document.MAINFORM.MT430_TAG_33K.value == 'K') {
            document.MAINFORM.TEMP_TENOR_32K.value = document.MAINFORM.TEMP_TENOR_33K.value;
            document.MAINFORM.MT410_TAG_32K.value = document.MAINFORM.MT430_TAG_33K.value;
        }

        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value;
        SYT_CHG_VOUCHER();
        SYF_IMCO_CAL_TENOR_33K();
        document.MAINFORM.NEW_COLL_CCY.value = document.MAINFORM.COLL_CCY.value;
        document.MAINFORM.NEW_COLL_AMT.value = document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value;




        if ((document.MAINFORM.MT430_TAG_33K.value == '') || (document.MAINFORM.MT430_TAG_33K.value == 'K' && document.MAINFORM.TEMP_TENOR_33K.value == '')) {
            document.MAINFORM.MT430_DUE_DT_33K_TEP.value = document.MAINFORM.TEMP_DUE_DT.value;
            document.MAINFORM.MT430_TAG_33K_TEP.value = document.MAINFORM.MT430_TAG_32K.value;
            document.MAINFORM.MT430_TENOR_33K_TEP.value = document.MAINFORM.TEP_TENOR_32K.value;

        } else {
            document.MAINFORM.MT430_DUE_DT_33K_TEP.value = document.MAINFORM.NEW_DUE_DT.value;
            document.MAINFORM.MT430_TAG_33K_TEP.value = document.MAINFORM.MT430_TAG_33K.value;
            document.MAINFORM.MT430_TENOR_33K_TEP.value = document.MAINFORM.TEMP_TENOR_33K.value;

        }
        if ((document.MAINFORM.MT430_TAG_33K.value == '' || (document.MAINFORM.MT430_TAG_33K.value == 'K' && document.MAINFORM.TEMP_TENOR_33K.value == '')) && (document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value == document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value)) {
            document.MAINFORM.MT430_DUE_DT_33K_TEP.value = '';
            document.MAINFORM.MT430_TAG_33K_TEP.value = '';
            document.MAINFORM.MT430_TENOR_33K_TEP.value = '';
            document.MAINFORM.NEW_COLL_AMT.value = '';
            document.MAINFORM.NEW_COLL_CCY.value = '';

        }
        SYT_Cal_C_TRANS_CODE();



        //FOR NEW TENOR FROM
        if (document.MAINFORM.NEW_TENOR_DAYS != null && document.MAINFORM.NEW_TENOR_DETAILS != null && document.MAINFORM.NEW_TENOR_EVENT != null && document.MAINFORM.NEW_DAY_MON_FLG != null && document.MAINFORM.NEW_DELVR_DOC_AGST != null) {
            tenor_days = SYS_BeFloat(document.MAINFORM.NEW_TENOR_DAYS.value);
            Day_Month = document.MAINFORM.NEW_DAY_MON_FLG.value;
            tenor_type = document.MAINFORM.NEW_TENOR_EVENT.value;
            deliver_agst = document.MAINFORM.NEW_DELVR_DOC_AGST.value;
            if (tenor_days == 0) {
                tenor_days = '';
                Day_Month = '';
            }

            if (Day_Month == "D" && tenor_days == 1) {
                Day_Month = "day";
            }
            if (Day_Month == "D" && tenor_days > 1) {
                Day_Month = "days";
            }
            if (Day_Month == "M" && tenor_days == 1) {
                Day_Month = "month";
            }
            if (Day_Month == "M" && tenor_days > 1) {
                Day_Month = "months";
            }

            if (tenor_type == "BE") {
                tenor_type = "after date of Bill of exchange";
            }
            if (tenor_type == "CC") {
                tenor_type = "after customs clearance of goods";
            }
            if (tenor_type == "FD") {
                tenor_type = "after goods pass food and drug administration";
            }
            if (tenor_type == "FP") {
                tenor_type = "after first presentation";
            }
            if (tenor_type == "GA") {
                tenor_type = "after arrival of goods";
            }
            if (tenor_type == "ID") {
                tenor_type = "after invoice date";
            }
            if (tenor_type == "ST") {
                tenor_type = "after sight";
            }
            if (tenor_type == "TD") {
                tenor_type = "after date of transport document";
            }
            if (tenor_type == "XXX") {
                tenor_type = "Fixed Maturity";
            }
            if (tenor_type == "XX") {
                tenor_type = document.MAINFORM.NEW_TENOR_DETAILS.value;
            }
            if (deliver_agst == "D/P") {
                deliver_agst = "Sight";
                document.MAINFORM.NEW_TEMP_TENOR_FORM_MAP.value = "Sight";
            } else {
                deliver_agst = '';
                document.MAINFORM.NEW_TEMP_TENOR_FORM_MAP.value = tenor_days + " " + Day_Month + " " + tenor_type + " " + deliver_agst;
            }
        }


        //FOR NEW TENOR FROM
        if (document.MAINFORM.TEMP_TENOR_DAYS != null && document.MAINFORM.TEMP_TENOR_DETAILS != null && document.MAINFORM.TEMP_TENOR_EVENT != null && document.MAINFORM.TEMP_DAY_MON_FLG != null && document.MAINFORM.TEMP_DELVR_DOC_AGST != null) {
            tenor_days = SYS_BeFloat(document.MAINFORM.TEMP_TENOR_DAYS.value); // Utility Auto Fix Comments
            Day_Month = document.MAINFORM.TEMP_DAY_MON_FLG.value; // Utility Auto Fix Comments
            tenor_type = document.MAINFORM.TEMP_TENOR_EVENT.value; // Utility Auto Fix Comments
            deliver_agst = document.MAINFORM.TEMP_DELVR_DOC_AGST.value; // Utility Auto Fix Comments
            if (tenor_days == 0) {
                tenor_days = '';
                Day_Month = '';
            }

            if (Day_Month == "D" && tenor_days == 1) {
                Day_Month = "day";
            }
            if (Day_Month == "D" && tenor_days > 1) {
                Day_Month = "days";
            }
            if (Day_Month == "M" && tenor_days == 1) {
                Day_Month = "month";
            }
            if (Day_Month == "M" && tenor_days > 1) {
                Day_Month = "months";
            }

            if (tenor_type == "BE") {
                tenor_type = "after date of Bill of exchange";
            }
            if (tenor_type == "CC") {
                tenor_type = "after customs clearance of goods";
            }
            if (tenor_type == "FD") {
                tenor_type = "after goods pass food and drug administration";
            }
            if (tenor_type == "FP") {
                tenor_type = "after first presentation";
            }
            if (tenor_type == "GA") {
                tenor_type = "after arrival of goods";
            }
            if (tenor_type == "ID") {
                tenor_type = "after invoice date";
            }
            if (tenor_type == "ST") {
                tenor_type = "after sight";
            }
            if (tenor_type == "TD") {
                tenor_type = "after date of transport document";
            }
            if (tenor_type == "XXX") {
                tenor_type = "Fixed Maturity";
            }
            if (tenor_type == "XX") {
                tenor_type = document.MAINFORM.TEMP_TENOR_DETAILS.value;
            }
            if (deliver_agst == "D/P") {
                deliver_agst = "Sight";
                document.MAINFORM.TEMP_TENOR_FORM_MAP.value = "Sight";
            } else {
                deliver_agst = '';
                document.MAINFORM.TEMP_TENOR_FORM_MAP.value = tenor_days + " " + Day_Month + " " + tenor_type + " " + deliver_agst;
            }

        }

        Cal_MSG_TYPE();

        document.MAINFORM.MSG_TYPE.value = 'IMCO.002.Amd';
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var con; // Utility Auto Fix Comments
        if (document.MAINFORM.AMD_TYPE.value == "Close File and return documents") {
            if (SYF_IMCO_checkChgUnpaid()) {
                con = confirm("Charges Must be Settled");
                if (con) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_ID_B = function() {
    try {

        SYM_IMCO_Cal_DRWR_ID_back();
        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_DRWR_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
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
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRW_ID = function() {
    try {

        SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_Charge()');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Field = function() {
    try {

        var oTAG_79; // Utility Auto Fix Comments
        oTAG_79 = document.MAINFORM.NARR;
        oTAG_79.rows = (document.MAINFORM.SEND_AMD_BY.value == "MT499") ? 198 : 35;
        if (oTAG_79.value.length > 0) {
            SYS_CheckTextAreaLength(oTAG_79);
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
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
            SYS_GetTableDataByRule_S('SYF_IMCO_AmendDischarge_SYF_IMCO_Get_REMIT_BK_ID_0', '1', true);
            if (document.MAINFORM.REMIT_BK_ID.value != '') {
                SYS_GetCUBK('REMIT_BK_ID', 'REMIT_BK_ID', 'SYF_IMCO_REMIT_BK_ID_B()');
            }
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + document.MAINFORM.NO_OF_AMD.value;

        SYF_IMCO_Cal_NO_OF_AMD();
        SYF_IMCO_Cal_SEND_AMD_BY();
        SYF_IMCO_Cal_MT4XX_32A_FLG();
        SYF_IMCO_Cal_NEW_COLL_AMT();

        document.MAINFORM.MAIL_METHOD_1ST.value = 'Mail';
        document.MAINFORM.MAIL_METHOD_2ND.value = 'Mail';




        SYF_IMCO_PRES_BK_ID();
        SYM_IMCO_DRWR_CORR_MED();


        SYM_IMCO_INIT();
        SYM_IMCO_MT430_TAG_32();
        SYM_IMCO_CAL_TENOR_32K();



        //FOR TENOR SUNNY
        document.MAINFORM.MT430_TAG_32K.value = document.MAINFORM.MT410_TAG_32K.value;
        document.MAINFORM.TEP_TENOR_32K.value = document.MAINFORM.TEMP_TENOR_32K.value;
        document.MAINFORM.NEW_DUE_DT_TEMP.value = document.MAINFORM.DUE_DT.value;
        document.MAINFORM.TEMP_DELVR_DOC_AGST.value = document.MAINFORM.DELVR_DOC_AGST.value;
        document.MAINFORM.TEMP_TENOR_START_DT.value = document.MAINFORM.TENOR_START_DT.value;
        document.MAINFORM.TEMP_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value;
        document.MAINFORM.TEMP_DAY_MON_FLG.value = document.MAINFORM.DAY_MON_FLG.value;
        document.MAINFORM.TEMP_TENOR_EVENT.value = document.MAINFORM.TENOR_EVENT.value;
        document.MAINFORM.TEMP_DUE_DT.value = document.MAINFORM.DUE_DT.value;
        document.MAINFORM.TEMP_TENOR_DETAILS.value = document.MAINFORM.TENOR_DETAILS.value;
        SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_EVENT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'O');
        document.MAINFORM.MT430_TAG_33K.value = '';
        document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        document.MAINFORM.NEW_DUE_DT.value = '';
        document.MAINFORM.TEMP_DRWE_ADD1.value = document.MAINFORM.DRWE_ADD1.value;
        document.MAINFORM.TEMP_DRWE_ADD2.value = document.MAINFORM.DRWE_ADD2.value;
        document.MAINFORM.TEMP_DRWE_ADD3.value = document.MAINFORM.DRWE_ADD3.value;
        document.MAINFORM.TEMP_DRWE_CORR_MED.value = document.MAINFORM.DRWE_CORR_MED.value;
        document.MAINFORM.TEMP_DRWE_EMAIL.value = document.MAINFORM.DRWE_EMAIL.value;
        document.MAINFORM.TEMP_DRWE_FAX.value = document.MAINFORM.DRWE_FAX.value;
        document.MAINFORM.TEMP_DRWE_ID_1.value = document.MAINFORM.DRWE_ID.value;
        document.MAINFORM.TEMP_DRWE_LANG.value = document.MAINFORM.DRWE_LANG.value;
        document.MAINFORM.TEMP_DRWE_MAIL_ADD.value = document.MAINFORM.DRWE_MAIL_ADD.value;
        document.MAINFORM.TEMP_DRWE_NM.value = document.MAINFORM.DRWE_NM.value;
        document.MAINFORM.TEMP_DRWE_REF.value = document.MAINFORM.DRWE_REF.value;
        document.MAINFORM.TEMP_DRWE_TELEX.value = document.MAINFORM.DRWE_TELEX.value;
        document.MAINFORM.TEMP_AC_OFFICER_CODE.value = document.MAINFORM.AC_OFFICER_CODE.value;



        document.MAINFORM.NEW_DRWE_ADD1.value = '';
        document.MAINFORM.NEW_DRWE_ADD2.value = '';
        document.MAINFORM.NEW_DRWE_ADD3.value = '';
        document.MAINFORM.NEW_DRWE_CORR_MED.value = 'None';
        document.MAINFORM.NEW_DRWE_EMAIL.value = '';
        document.MAINFORM.NEW_DRWE_FAX.value = '';
        document.MAINFORM.NEW_DRWE_ID.value = '';
        document.MAINFORM.NEW_DRWE_LANG.value = 'English';
        document.MAINFORM.NEW_DRWE_MAIL_ADD.value = '';
        document.MAINFORM.NEW_DRWE_NM.value = '';
        document.MAINFORM.NEW_DRWE_NOTES.value = '';
        document.MAINFORM.NEW_DRWE_ORDER_NO.value = '';
        document.MAINFORM.NEW_DRWE_ORDER_POST.value = '';
        document.MAINFORM.NEW_DRWE_REF.value = '';
        document.MAINFORM.NEW_DRWE_TELEX.value = '';
        document.MAINFORM.NEW_AC_OFFICER_CODE.value = '';
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MAT_DT_back = function(matdt) {
    try {

        document.MAINFORM.NEW_DUE_DT.value = matdt;
        EEHtml.fireEvent(document.MAINFORM.NEW_DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_NEW_DRWE_CORR_MED = function() {
    try {

        if (document.MAINFORM.NEW_DRWE_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_MAIL_ADD, "O");
        }
        if (document.MAINFORM.NEW_DRWE_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_EMAIL, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_EMAIL, "O");
        }
        if (document.MAINFORM.NEW_DRWE_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_TELEX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_TELEX, "O");
        }
        if (document.MAINFORM.NEW_DRWE_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_FAX, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_NEW_DRWE_ID_B = function() {
    try {

        SYF_IMCO_NEW_DRWE_CORR_MED();
        SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);

        SYF_IMCO_NEW_DRWE_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_NEW_DRWE_ID_B2 = function() {
    try {

        if (document.MAINFORM.NEW_DRWE_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.NEW_DRWE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_NEW_DRWE_NM_Z = function() {
    try {

        if (document.MAINFORM.NEW_DRWE_ID.value == '') {
            document.MAINFORM.NEW_DRWE_ADD1.value = '';
            document.MAINFORM.NEW_DRWE_ADD2.value = '';
            document.MAINFORM.NEW_DRWE_ADD3.value = '';
            document.MAINFORM.NEW_DRWE_CORR_MED.value = '';
            document.MAINFORM.NEW_DRWE_EMAIL.value = '';
            document.MAINFORM.NEW_DRWE_FAX.value = '';
            document.MAINFORM.NEW_DRWE_LANG.value = 'English';
            document.MAINFORM.NEW_DRWE_MAIL_ADD.value = '';
            document.MAINFORM.NEW_DRWE_NM.value = '';
            document.MAINFORM.NEW_DRWE_REF.value = '';
            document.MAINFORM.NEW_DRWE_TELEX.value = '';
            document.MAINFORM.NEW_DRWE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);
            SYF_IMCO_NEW_DRWE_ID_B2();
        } else {
            SYS_GetCUBK_S('NEW_DRWE_ID', 'NEW_DRWE_ID');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_New_Tenor = function() {
    try {

        if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == "D/P") {
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_DAY_MON_FLG.value = 'D';
            document.MAINFORM.NEW_TENOR_EVENT.value = 'ST';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_EVENT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'B');



        }
        if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == "D/A" || document.MAINFORM.NEW_DELVR_DOC_AGST.value == "D/A and Aval") {
            SYF_IMCO_CLASS_BY_TENOR_TYPE();

        }
        if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_EVENT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DAY_MON_FLG, 'B');
            SYT_ChangeFldClass(document.MAINFORM.NEW_DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.MT430_TAG_33K, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_33K, 'B');
            SYT_ChangeFldClass(document.MAINFORM.MT430_TAG_33K, 'B');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
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
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var oTAG_79; // Utility Auto Fix Comments
        SYM_IMCO_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_IMCO_COURIER_FEE_CHG1();
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
            SYM_IMCO_Postage_charge();
            SYM_IMCO_COLL_AMD_COMM_CHG();
            SYM_IMCO_Chg_Calculation_Other();
            CHG_setAllChargeAt(1);
        }
        //for charge
        SYM_IMCO_Functions_For_Chg();

        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
        document.MAINFORM.CLS_FLG.style.visibility = 'hidden';
        document.MAINFORM.CLS_FLG.value = "No";
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYF_IMCO_NEW_DRWE_ID_B2();
        SYF_IMCO_Remit_Charge();
        SYF_IMCO_SEND_AMD_BY();
        SYM_IMCO_PRE_SWIFT_TAG();
        SYM_IMCO_REIM_SWIFT_TAG();
        document.MAINFORM.TEMP_DRWE_ID.value = 'DRWRIDFORCHG';

        document.MAINFORM.DRAFT_1.value = '';
        document.MAINFORM.DRAFT_2.value = '';
        document.MAINFORM.INVOICE_1.value = '';
        document.MAINFORM.INVOICE_2.value = '';
        document.MAINFORM.BL_AWB_1.value = '';
        document.MAINFORM.BL_AWB_2.value = '';
        document.MAINFORM.CERTIFICATE_1.value = '';
        document.MAINFORM.CERTIFICATE_2.value = '';
        document.MAINFORM.INSP_CERT_1.value = '';
        document.MAINFORM.INSP_CERT_2.value = '';
        document.MAINFORM.PACK_LIST_1.value = '';
        document.MAINFORM.PACK_LIST_2.value = '';
        document.MAINFORM.INSURANCE_1.value = '';
        document.MAINFORM.INSURANCE_2.value = '';
        document.MAINFORM.VESSEL_CERT_1.value = '';
        document.MAINFORM.VESSEL_CERT_2.value = '';
        document.MAINFORM.FREIGHT_INV_1.value = '';
        document.MAINFORM.FREIGHT_INV_2.value = '';
        document.MAINFORM.BENEF_CERT_1.value = '';
        document.MAINFORM.BENEF_CERT_2.value = '';
        document.MAINFORM.OTHERS_1.value = '';
        document.MAINFORM.OTHERS_2.value = '';
        document.MAINFORM.MAIL_METHOD_1ST.value = 'None';
        document.MAINFORM.MAIL_METHOD_2ND.value = 'None';

        SYF_IMCO_New_Tenor();
        SYF_IMCO_TENOR_START_DT_OLD();
        oTAG_79 = document.MAINFORM.NARR;
        oTAG_79.rows = (document.MAINFORM.SEND_AMD_BY.value == "MT499") ? 198 : 35;
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_REMIT_BK_ID_B = function() {
    try {

        SYM_IMCO_Cal_REMIT_BK_ID_back();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Remit_Charge = function() {
    try {

        if (document.MAINFORM.REMIT_BK_CHG_AMT.value == 0.00) {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_CHG_FLG, "P");
            document.MAINFORM.REMIT_BK_CHG_FLG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.WAIVE_REMT_BK_CHG_FLG, "P");
            document.MAINFORM.WAIVE_REMT_BK_CHG_FLG.value = '';

        } else {

            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_CHG_FLG, "M");
            SYT_ChangeFldClass(document.MAINFORM.WAIVE_REMT_BK_CHG_FLG, "M");

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_SEND_AMD_BY = function() {
    try {

        var SEND_AMD_BY; // Utility Auto Fix Comments
        var arr_CLS_430; // Utility Auto Fix Comments
        var arr_CLS_999; // Utility Auto Fix Comments
        var arr_CLS_Mail; // Utility Auto Fix Comments
        var arr_Fld; // Utility Auto Fix Comments
        var arr_none; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.SEND_TO_RCV_INFO, document.MAINFORM.AMD_74, document.MAINFORM.NARR_MAIL, document.MAINFORM.NARR);
        arr_CLS_999 = new Array("B", "B", "B", "O");
        arr_CLS_430 = new Array("O", "O", "B", "B");
        arr_CLS_Mail = new Array("B", "B", "O", "B");
        arr_none = new Array("B", "B", "B", "B");
        SEND_AMD_BY = document.MAINFORM.SEND_AMD_BY.value;
        switch (SEND_AMD_BY) {
            case "MT999":
            case "MT499":
                SYT_ChangeFldStringClass(arr_Fld, arr_CLS_999);
                break;
            case "MT430":
                SYT_ChangeFldStringClass(arr_Fld, arr_CLS_430);
                break;
            case "Mail":
            case "Fax":
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_CLS_Mail);
                break;
            case "None":
                SYT_ChangeFldStringClass(arr_Fld, arr_none);
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_TENOR_DAY = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        nDays = (document.MAINFORM.NEW_DAY_MON_FLG.value == "D") ? SYS_BeInt(document.MAINFORM.NEW_TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.NEW_TENOR_DAYS.value) * 30;

        if (document.MAINFORM.NEW_TENOR_START_DT.value != "" && nDays != 0 && document.MAINFORM.NEW_DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.NEW_TENOR_START_DT.value, nDays, 'SYF_IMCO_MAT_DT_back()', 'A', 'N', 'Y');



        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_TENOR_START_DT_OLD = function() {
    try {

        if (document.MAINFORM.TEMP_DELVR_DOC_AGST.value == "D/P") {
            document.MAINFORM.TEMP_TENOR_DAYS.value = 0;
            document.MAINFORM.TEMP_DAY_MON_FLG.value = 'D';
            document.MAINFORM.TEMP_TENOR_EVENT.value = 'ST';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_EVENT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_TENOR_DETAILS, 'B');


        } else {
            SYF_IMCO_CLASS_BY_TENOR_TYPE_OLD();

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_checkChgUnpaid = function() {
    try {

        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        trxChgArr = Chg.Screen.getAllTrxCharge();
        defChgArr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < trxChgArr.length; i++) { // Utility Auto Fix Comments
            charge = trxChgArr[i];
            if (charge.getBalAmt() > 0) {
                return true;
            }
        }
        for (i = 0; i < defChgArr.length; i++) {
            charge = defChgArr[i];
            if (charge.getBalAmt() > 0) {
                return true;
            }
        }
        return false;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_AMD_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_AMD_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWR_NM_Z();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_MAIL_METHOD_1ST_onchange = function(event) {
    try {
        SYF_IMCO_COURIER_FEE_CHG1();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_MAIL_METHOD_2ND_onchange = function(event) {
    try {
        SYF_IMCO_COURIER_FEE_CHG1();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_COL_AMT_NCOL_CCY_onchange = function(event) {
    try {
        SYF_IMCO_Cal_NEW_COLL_AMT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
        SYF_IMCO_CAL_TENOR_33K();
        SYM_IMCO_MT430_TAG_32();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DELVR_DOC_AGST_onchange = function(event) {
    try {
        SYM_IMCO_MT430_TAG_32();
        SYF_IMCO_New_Tenor();
        SYF_IMCO_CAL_TENOR_33K();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_NEW_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYF_IMCO_NEW_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRWE_ID_onchange = function(event) {
    try {
        SYF_IMCO_NEW_DRWE_NM_Z();
        SYF_IMCO_NEW_DRWE_ID_B();
        SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_NEW_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_NEW_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_NEW_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_NEW_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_DUE_DT_onchange = function(event) {
    try {
        SYM_IMCO_MT430_TAG_32();
        SYF_IMCO_CAL_TENOR_33K();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
        SYF_IMCO_CAL_TENOR_33K();
        SYM_IMCO_MT430_TAG_32();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_TENOR_EVENT_onchange = function(event) {
    try {
        SYF_IMCO_New_Tenor();
        SYF_IMCO_CLASS_BY_TENOR_TYPE();
        SYM_IMCO_MT430_TAG_32();
        SYF_IMCO_CAL_TENOR_33K();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NEW_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
        SYF_IMCO_CAL_TENOR_33K();
        SYM_IMCO_MT430_TAG_32();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_OUR_ROLE_onchange = function(event) {
    try {
        SYF_IMCO_CHK_PRES_BK_REF();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.REMIT_BK_CHG_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REMIT_BK_CHG_AMT.value = 0;
        }

        SYF_IMCO_Remit_Charge();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYF_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYF_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SEND_AMD_BY_onchange = function(event) {
    try {
        SYF_IMCO_CHK_PRES_BK_REF();
        SYF_IMCO_SEND_AMD_BY();
        SYF_IMCO_Field();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_FM_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_FM_CNTY_CODE', document.MAINFORM.SHIP_FM_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_TO_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_TO_CNTY_CODE', document.MAINFORM.SHIP_TO_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TEMP_DRWE_ID_1_onchange = function(event) {
    try {
        SYS_GetCUBK('DRW_ID', 'DRWE_ID');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('SPCL_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendDischargeFromCE.js", e);
    }
}