var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_CCHG_Cal_backFCS = function() {
    try {

        document.MAINFORM.FA_AGM_VAL_DT.value = '';
        document.MAINFORM.FA_AGM_SIGN_FLG.value = 'N';
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FADA_SEL_ID', 'SYF_FADA_Get_RefNo');
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_Get_FCS = function() {
    try {

        SYS_GetTableDataByRule('SYF_FADA_SellerInformation_SYF_FADA_Get_FCS_0', '1', "", SYF_FADA_Cal_backFCS, true);
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_EF_ID.value = 'CS00001';
        document.MAINFORM.FA_EF_NM.value = 'CS Factor';
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.FA_BUSI_STATUS.value = 'SELINFO';
        document.MAINFORM.FA_MSG01_FUNC.value = '1';
        document.MAINFORM.FA_INV_CCY1.value = '';
        document.MAINFORM.FA_INV_CCY2.value = '';
        document.MAINFORM.FA_INV_CCY3.value = '';
        document.MAINFORM.FA_CHG_BC_CCY.value = '';
        document.MAINFORM.FA_OA_TNOV_CCY.value = '';
        document.MAINFORM.FA_OTHER_TNOV_CCY.value = '';
        document.MAINFORM.FA_TTL_SEL_TNOVCCY.value = '';
        document.MAINFORM.FA_CHG_BC_PERC.value = 0;
        document.MAINFORM.FA_PRM_DISC_RT.value = 0;
        document.MAINFORM.FA_SND_DISC_RT.value = 0;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_checkNumber = function() {
    try {

        if (document.MAINFORM.FA_NO_OF_BUYERS.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_NO_OF_BUYERS, " Expected number of buyers in your country can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_NO_OF_BUYERS.value > 65535) {
            SYS_CheckError(document.MAINFORM.FA_NO_OF_BUYERS, " Expected number of buyers in your country can't be more than 65535!");
            return false;
        }
        if (document.MAINFORM.FA_NO_OF_CRN.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_NO_OF_CRN, " Expected number of credit notes to your country can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_NO_OF_CRN.value > 65535) {
            SYS_CheckError(document.MAINFORM.FA_NO_OF_CRN, " Expected number of credit notes to your country can't be more than 65535!");
            return false;
        }
        if (document.MAINFORM.FA_NO_OF_INV.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_NO_OF_INV, " Expected number of invoices to your country can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_NO_OF_INV.value > 65535) {
            SYS_CheckError(document.MAINFORM.FA_NO_OF_INV, " Expected number of invoices to your country can't be more than 65535!");
            return false;
        }
        if (document.MAINFORM.FA_OA_TNOV.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_OA_TNOV, " Expected open account turnover to your country can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_OTHER_TNOV.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_OTHER_TNOV, " Expected other turnover to your country can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_PRM_DISC_DAYS.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_DAYS, " Discount days can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_SND_DISC_DAYS.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_DAYS, " Second discount days can't be less than 0!");
            return false;
        }
        if (document.MAINFORM.FA_PMT_GRC_DAY.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_PMT_GRC_DAY, " Payment Grace Days can't be less than 0!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_Cal_toUpperCase = function() {
    try {

        var fldObj; // Utility Auto Fix Comments
        fldObj = EEHtml.getElementById(fldName);
        fldObj.value = fldObj.value.toUpperCase();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_Get_IFNM = function() {
    try {

        if (document.MAINFORM.FA_IF_ID.value != '') {
            SYS_GetCUBK('FA_IF_ID', document.MAINFORM.FA_IF_ID.name, '', 'SYF_FADA_Chk_IF');
        } else {
            document.MAINFORM.FA_IF_ID.value = '';
            document.MAINFORM.FA_IF_NM.value = '';
            document.MAINFORM.FA_FACTOR_CNTY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_Get_other_if = function() {
    try {

        if (document.MAINFORM.FA_IF_ID.value == '') {
            SYS_GetTableDataByRule('SYF_FADA_SellerInformation_SYF_FADA_Get_other_if_1', '1', SYF_FADA_Cal_back_otherIFYes, SYF_FADA_Cal_back_otherIFNo, true);
        } else {
            SYS_GetTableDataByRule('SYF_FADA_SellerInformation_SYF_FADA_Get_other_if_2', '1', SYF_FADA_Cal_back_otherIFYes, SYF_FADA_Cal_back_otherIFNo, true);
        }
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_MPO_FldClass = function() {
    try {

        SYT_ChangeFldClass_New('FA_SEL_ADDR', 'M');
        SYT_ChangeFldClass_New('FA_SEL_CITY', 'M');
        SYT_ChangeFldClass_New('FA_SEL_CNTY', 'M');
        SYT_ChangeFldClass_New('FA_SEL_PROV', 'O');
        SYT_ChangeFldClass_New('FA_SEL_POST_CODE', 'M');
        SYT_ChangeFldClass_New('FA_SEL_AC_NO', 'O');
        SYT_ChangeFldClass_New('FA_SEL_COMP_REG', 'O');
        SYT_ChangeFldClass_New('FA_SEL_RESP_AGNT', 'O');
        SYT_ChangeFldClass_New('FA_SEL_BK_BR', 'O');
        SYT_ChangeFldClass_New('FA_SEL_BK_NM', 'O');
        SYT_ChangeFldClass_New('FA_SEL_AGENT_ID', 'O');
        SYT_ChangeFldClass_New('FA_AGM_VAL_DT', 'P');
        SYT_ChangeFldClass_New('FA_AGM_SIGN_FLG', 'P');
        SYT_ChangeFldClass_New('FA_SEL_AGENT_RIGHT', 'O');
        SYT_ChangeFldClass_New('FA_GOODS_NM', 'M');
        SYT_ChangeFldClass_New('FA_GOODS_DES', 'M');
        SYT_ChangeFldClass_New('FA_CHG_BC_CCY', 'M');
        SYT_ChangeFldClass_New('FA_CHG_BC_AMT', 'O');
        SYT_ChangeFldClass_New('FA_CHG_BC_PERC', 'O');
        SYT_ChangeFldClass_New('FA_TTL_SEL_TNOVCCY', 'M');
        SYT_ChangeFldClass_New('FA_TTL_SEL_TNOV', 'M');
        SYT_ChangeFldClass_New('FA_NO_OF_BUYERS', 'M');
        SYT_ChangeFldClass_New('FA_NO_OF_CRN', 'O');
        SYT_ChangeFldClass_New('FA_NO_OF_INV', 'M');
        SYT_ChangeFldClass_New('FA_OA_TNOV', 'M');
        SYT_ChangeFldClass_New('FA_OTHER_TNOV', 'M');
        SYT_ChangeFldClass_New('FA_NORMAL_TERMS', 'O');
        SYT_ChangeFldClass_New('FA_INV_CCY1', 'M');
        SYT_ChangeFldClass_New('FA_INV_CCY2', 'O');
        SYT_ChangeFldClass_New('FA_INV_CCY3', 'O');
        SYT_ChangeFldClass_New('FA_PMT_GRC_DAY', 'O');
        SYT_ChangeFldClass_New('FA_PRM_DISC_DAYS', 'O');
        SYT_ChangeFldClass_New('FA_PRM_DISC_RT', 'O');
        SYT_ChangeFldClass_New('FA_SND_DISC_DAYS', 'O');
        SYT_ChangeFldClass_New('FA_SND_DISC_RT', 'O');
        SYT_ChangeFldClass_New('FA_MSG_TEXT', 'O');
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_Get_RefNo = function() {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'SIF';
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_checkDiscRate = function() {
    try {

        if (document.MAINFORM.FA_PRM_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "Discount percentage can't be more than 100!");
            return false;
        }
        if (document.MAINFORM.FA_PRM_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "Discount percentage can't be less than 0!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_Chk_IF_ID = function() {
    try {

        if (/^[A-Za-z0-9]*$/.test(document.MAINFORM.FA_IF_ID.value)) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.FA_IF_ID, 'Please check the Import Factor Number!');
            return false;
        }
        //return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Cust.js", e);
    }
}