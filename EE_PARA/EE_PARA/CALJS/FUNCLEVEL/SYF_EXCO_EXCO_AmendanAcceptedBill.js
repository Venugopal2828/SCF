var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        var nC_MAIN_REF; // Utility Auto Fix Comments
        var nNO_OF_AMD; // Utility Auto Fix Comments
        var prefix; // Utility Auto Fix Comments
        SYM_EXCO_INIT();
        document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;

        nNO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        nNO_OF_AMD = nNO_OF_AMD + 1;
        document.MAINFORM.NO_OF_AMD.value = nNO_OF_AMD;
        nC_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        prefix = nC_MAIN_REF.substr(4);
        document.MAINFORM.AMD_REF.value = prefix + nNO_OF_AMD;
        SYM_EXCO_TEMP_CHARGE_DT();

        SYT_Cal_LOCAL_AMT('COLL_CCY', 'COLL_TRX_CCY_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        document.MAINFORM.ACPT_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_DisableDivClass('B_div');
        //for fixing bug 637
        SYT_ChangeFldClass(document.MAINFORM.DRWR_CORR_MED, 'M');
        SYT_ChangeFldClass(document.MAINFORM.DRWR_LANG, 'M');

        SYF_EXCO_MPO_TENOR();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;
        SYT_CHG_INIT('SYF_EXCO_CHG_INT_TO_RUN');
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();
        SYM_EXCO_CHARGE_DT();

        //add on 20200602
        if (SYS_BeFloat(document.MAINFORM.NEW_ACPT_AMT.value) > 0) {
            document.MAINFORM.COLL_TRX_CCY_AMT.value = document.MAINFORM.NEW_ACPT_AMT.value;
            document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.NEW_ACPT_AMT.value;
            SYT_Cal_LOCAL_AMT('COLL_CCY', 'COLL_TRX_CCY_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
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

        // document.MAINFORM.COLL_TRX_CCY_AMT.value = nCOLL_AMT + nINC_AMT - nDEC_AMT; //64699
        // document.MAINFORM.COLL_TRX_CCY_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
        document.MAINFORM.NEW_ACPT_AMT.value = nCOLL_AMT + nINC_AMT - nDEC_AMT;
        document.MAINFORM.NEW_ACPT_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NEW_ACPT_AMT.value);
        if (SYS_BeFloat(document.MAINFORM.NEW_ACPT_AMT.value) < 0) {
            alert("The amount field should not negative values!");
            document.MAINFORM.NEW_ACPT_AMT.value = 0;
            document.MAINFORM.DEC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_INC_DEC_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) != 0 && SYS_BeFloat(document.MAINFORM.INC_AMT.value) != 0) {
            SYS_CheckError(document.MAINFORM.INC_AMT, "The Increase Amount and Decrease Amount cannot be both presented.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_TENOR = function() {
    try {

        //to fix bug 638 and 1139
        if (document.MAINFORM.TENOR_TYPE.value == 'Fixed Maturity') {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
        } else if (document.MAINFORM.TENOR_TYPE.value == 'See Below') {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'Days';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B'); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_EXCO_CHK_INC_DEC_AMT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_DUE_DT = function() {
    try {

        var tenordays; // Utility Auto Fix Comments
        tenordays = (document.MAINFORM.DAY_MON_FLG.value == "Days") ? SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) * 30;
        if (tenordays > 0 && document.MAINFORM.TENOR_START_DT.value != "" && document.MAINFORM.DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, tenordays, SYF_EXCO_CALL_DUE_DT_back, 'A', 'N', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_DUE_DT_back = function(duedt) {
    try {

        document.MAINFORM.DUE_DT.value = duedt;
        EEHtml.fireEvent(document.MAINFORM.DUE_DT, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_DUE_DT = function() {
    try {

        if (SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.DUE_DT.name) == "Y") {
            SYS_CheckError(document.MAINFORM.DUE_DT, "New Tenor Maturity Date is Holiday !");
        }

        if (SYS_GetSubDays(document.MAINFORM.TENOR_START_DT.name, document.MAINFORM.DUE_DT.name) < 0) {
            alert("Tenor Maturity Date is not allowed before Tenor Start Date");
            document.MAINFORM.DUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INT_TO_RUN = function() {
    try {

        SYM_EXCO_M_EXCO_OTHER_CHG();
        SYM_EXCO_M_EXCO_SWIFT_CHG();
        SYM_EXCO_M_EXCO_COURIER_CHG();
        SYM_EXCO_M_EXCO_POST_CHG();
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_DUE_DT();
        SYF_EXCO_MPO_TENOR();
        EEHtml.fireEvent(document.MAINFORM.TENOR_START_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DEC_AMT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_COLL_AMT();
        SYF_EXCO_CHK_INC_DEC_AMT();
        //EEHtml.fireEvent(document.MAINFORM.COLL_TRX_CCY_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_ACPT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DELVR_DOC_AGST_onchange = function(event) {
    try {
        SYF_EXCO_MPO_TENOR();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DUE_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_DUE_DT();
        SYF_EXCO_MPO_TENOR();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INC_AMT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_COLL_AMT();
        SYF_EXCO_CHK_INC_DEC_AMT();
        EEHtml.fireEvent(document.MAINFORM.DEC_AMT, 'onchange');
        // EEHtml.fireEvent(document.MAINFORM.COLL_TRX_CCY_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_ACPT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_DUE_DT();
        SYF_EXCO_MPO_TENOR();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_DUE_DT();
        SYF_EXCO_MPO_TENOR();
        if (SYS_GetSubDays(document.MAINFORM.TENOR_START_DT.name, document.MAINFORM.REMT_DT.name) > 0) {
            alert("Tenor Start Date is not allowed before Remittance Date");
            document.MAINFORM.TENOR_START_DT.value = '';
        } //64686;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_MPO_TENOR();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AmendanAcceptedBill.js", e);
    }
}