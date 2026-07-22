var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EXCO_INIT();
        document.MAINFORM.ACPT_DT.value = SYS_DATE;

        SYT_Cal_LOCAL_AMT('COLL_CCY', 'COLL_TRX_CCY_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_DisableDivClass('B_div');
        //to fix bug 633
        SYT_ChangeFldClass(document.MAINFORM.DRWR_LANG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.DRWR_CORR_MED, 'M');

        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;
        SYF_EXCO_MPO_TENOR_FILEDS();

        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_ACPT_DT = function() {
    try {

        if (document.MAINFORM.ACPT_DT.value != "" && document.MAINFORM.REMT_DT.value != "") {
            var nDays = SYS_GetSubDays(document.MAINFORM.ACPT_DT.name, document.MAINFORM.REMT_DT.name);
            if (nDays > 0) {
                SYS_CheckError(document.MAINFORM.ACPT_DT, "Acceptance Date should be later than Remittance Date!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_DIRY_DT = function() {
    try {

        if (document.MAINFORM.ACPT_DT.value != "" && document.MAINFORM.DIARY_DT.value != "" && document.MAINFORM.REMT_DT.value != "") {
            var nDays1 = SYS_GetSubDays(document.MAINFORM.DIARY_DT.name, document.MAINFORM.ACPT_DT.name);
            var nDays2 = SYS_GetSubDays(document.MAINFORM.DIARY_DT.name, document.MAINFORM.REMT_DT.name);
            if (nDays2 > 0) {
                SYS_CheckError(document.MAINFORM.DIARY_DT, "Diary Date should be later than Remittance Date!");
                return false;
            } else if (nDays1 > 0) {
                SYS_CheckError(document.MAINFORM.DIARY_DT, "Diary Date should be later than Acceptance Date!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_TENOR_FILEDS = function() {
    try {

        //Added by zoe 20081210 for London Test
        if (document.MAINFORM.TENOR_TYPE.value == "Fixed Maturity") {
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');

        } else if (document.MAINFORM.TENOR_TYPE.value == "See Below") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'Days';
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_DUE_DT_Result = function(sResultDate) {
    try {

        document.MAINFORM.DUE_DT.value = sResultDate;
        EEHtml.fireEvent(document.MAINFORM.DUE_DT, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_DUE_DT = function() {
    try {

        var nDays = (document.MAINFORM.DAY_MON_FLG.value == "Days") ? SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) * 30;

        if (document.MAINFORM.TENOR_START_DT.value != "" && nDays != 0 && document.MAINFORM.DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, "SYF_EXCO_DUE_DT_Result", "A", "N", "N");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_DUE_DT = function() {
    try {

        if (SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.DUE_DT.name) == "Y") {
            SYS_CheckError(document.MAINFORM.DUE_DT, "Tenor Maturity Date is Holiday!");
            return false;
        }

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        if (SYS_GetSubDays(document.MAINFORM.DUE_DT.name, document.MAINFORM.TRX_DT.name) > 0) {
            alert("The maturity date should be always current or future date");
            document.MAINFORM.DUE_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_ACPT_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_ACPT_DT();
        SYF_EXCO_CHK_DIRY_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(MAINFORM.document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_EXCO_CALL_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_DIRY_DT();
        EEHtml.fireEvent(document.MAINFORM.ACPT_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DUE_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_REMT_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_ACPT_DT();
        SYF_EXCO_CHK_DIRY_DT();
        EEHtml.fireEvent(document.MAINFORM.ACPT_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_EXCO_CALL_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acceptance.js", e);
    }
}