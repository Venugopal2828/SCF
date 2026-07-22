var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var EDI_GOODS_DES = '';
var ccyArray = '';

csFuncLevelProto.SYF_FADA_Cal_back_otherIFNo = function() {
    try {

        document.MAINFORM.FA_OTHER_IF.value = 'NO';
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_back_otherIFYes = function() {
    try {

        document.MAINFORM.FA_OTHER_IF.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_OTHER_FACTOR = function() {
    try {

        /*var sWhereSql; // Utility Auto Fix Comments
        var sWhereSql22; // Utility Auto Fix Comments
        sWhereSql = " FA_SEL_ID='" + document.MAINFORM.FA_SEL_ID.value + "' AND FA_IF_ID<>'" + document.MAINFORM.FA_IF_ID.value + "' AND FA_BUSI_TYPE='EF'";
        sWhereSql22 = " FA_SEL_ID='" + document.MAINFORM.FA_SEL_ID.value + "' AND FA_BUSI_TYPE='EF'";*/
        if (document.MAINFORM.FA_IF_ID.value == '') {
            //SYS_InqCUBK_Sql("FA_OTHER_FACTOR", sWhereSql22);
            SYS_InqCUBK_byCondition('FA_OTHER_FACTOR', '1');
        } else {
            //SYS_InqCUBK_Sql("FA_OTHER_FACTOR", sWhereSql);
            SYS_InqCUBK_byCondition('FA_OTHER_FACTOR', '2');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_CCY = function() {
    try {

        var checkCCY; // Utility Auto Fix Comments
        var checkCCY1; // Utility Auto Fix Comments
        var checkCCY2; // Utility Auto Fix Comments
        var checkCCY3; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var numCCY; // Utility Auto Fix Comments
        checkCCY1 = 0;
        checkCCY2 = 0;
        checkCCY3 = 0;
        numCCY = event.srcElement.name.substr(10, 1);
        if (event.srcElement.value != '') {
            if (ccyArray == '') {
                ccyArray = new Array();
            }
            ccyFieldArray = new Array(document.MAINFORM.FA_INV_CCY1, document.MAINFORM.FA_INV_CCY2, document.MAINFORM.FA_INV_CCY3);
            if (numCCY != '1') {
                if (event.srcElement.value == document.MAINFORM.FA_INV_CCY1.value) {
                    SYS_CheckError(event.srcElement, "The invoice currencies must be different!");
                    checkCCY1 = 1; // Utility Auto Fix Comments
                    checkCCYnum = event.srcElement;
                } else {
                    checkCCY1 = 0; // Utility Auto Fix Comments
                }
            }
            if (numCCY != '2') {
                if (event.srcElement.value == document.MAINFORM.FA_INV_CCY2.value) {
                    SYS_CheckError(event.srcElement, "The invoice currencies must be different!");
                    checkCCY2 = 1; // Utility Auto Fix Comments
                    checkCCYnum = event.srcElement;
                } else {
                    checkCCY2 = 0; // Utility Auto Fix Comments
                }
            }
            if (numCCY != '3') {
                if (event.srcElement.value == document.MAINFORM.FA_INV_CCY3.value) {
                    SYS_CheckError(event.srcElement, "The invoice currencies must be different!");
                    checkCCY3 = 1; // Utility Auto Fix Comments
                    checkCCYnum = event.srcElement;
                } else {
                    checkCCY = 0;
                }
            }
        }
        i = SYS_BeFloat(numCCY) - 1;
        if (checkCCY1 == 1 || checkCCY2 == 1 || checkCCY3 == 1) {
            ccyArray[i] = 1;
        } else {
            ccyArray[i] = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_backFCS = function() {
    try {

        document.MAINFORM.FA_AGM_VAL_DT.value = '';
        document.MAINFORM.FA_AGM_SIGN_FLG.value = 'N';
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FADA_SEL_ID', 'SYF_FADA_Get_RefNo');
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FCS = function() {
    try {

        SYS_GetTableDataByRule('SYF_FADA_SellerInformation_SYF_FADA_Get_FCS_0', '1', "", SYF_FADA_Cal_backFCS, true);
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
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
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkNumber = function() {
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
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_toUpperCase = function(fldName) {
    try {

        var fldObj; // Utility Auto Fix Comments
        fldObj = EEHtml.getElementById(fldName);
        fldObj.value = fldObj.value.toUpperCase();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_IFNM = function() {
    try {

        if (document.MAINFORM.FA_IF_ID.value != '') {
            SYS_GetCUBK('FA_IF_ID', document.MAINFORM.FA_IF_ID.name, '', 'SYF_FADA_Chk_IF');
        } else {
            document.MAINFORM.FA_IF_ID.value = '';
            document.MAINFORM.FA_IF_NM.value = '';
            document.MAINFORM.FA_FACTOR_CNTY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_other_if = function() {
    try {

        if (document.MAINFORM.FA_IF_ID.value == '') {
            SYS_GetTableDataByRule('SYF_FADA_SellerInformation_SYF_FADA_Get_other_if_1', '1', SYF_FADA_Cal_back_otherIFYes, SYF_FADA_Cal_back_otherIFNo, true);
        } else {
            SYS_GetTableDataByRule('SYF_FADA_SellerInformation_SYF_FADA_Get_other_if_2', '1', SYF_FADA_Cal_back_otherIFYes, SYF_FADA_Cal_back_otherIFNo, true);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FldClass = function() {
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
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_RefNo = function(ref) {
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
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate = function() {
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
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IF_ID = function() {
    try {

        if (/^[A-Za-z0-9]*$/.test(document.MAINFORM.FA_IF_ID.value)) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.FA_IF_ID, 'Please check the Import Factor Number!');
            return false;
        }
        //return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_SellerNM = function() {
    try {

        if (document.MAINFORM.FA_SEL_ID.value != '') {
            SYS_GetCUBK('FA_SEL_ID_SELINFO', document.MAINFORM.FA_SEL_ID.name, '', 'SYF_FADA_Chk_SelName');
        } else {
            document.MAINFORM.FA_SEL_ID.value = '';
            document.MAINFORM.FA_SEL_NM.value = '';
            document.MAINFORM.FA_SEL_NM2.value = '';
            document.MAINFORM.FA_SEL_POST_CODE.value = '';
            document.MAINFORM.FA_SEL_PROV.value = '';
            document.MAINFORM.FA_SEL_RESP_AGNT.value = '';
            document.MAINFORM.FA_SEL_AC_NO.value = '';
            document.MAINFORM.FA_SEL_ADDR.value = '';
            document.MAINFORM.FA_SEL_CITY.value = '';
            document.MAINFORM.FA_SEL_CNTY.value = '';
            document.MAINFORM.FA_SEL_BK_BR.value = '';
            document.MAINFORM.FA_SEL_BK_NM.value = '';
            document.MAINFORM.FA_SEL_COMP_REG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FADA_Cal_toUpperCase('FA_IF_ID');
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IF = function() {
    try {

        alert('The import factor does not exist,please check it!');
        document.MAINFORM.FA_IS_FCI.value = '';
        document.MAINFORM.FA_IF_NM.value = '';
        document.MAINFORM.FA_IF_ID.value = '';
        document.MAINFORM.FA_FACTOR_CNTY.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (ccyArray != null) {
            for (i = 0; i < 5; i++) {
                if (ccyArray[i] == 1) {
                    SYS_CheckError(ccyFieldArray[i], "The five currencies must be different!");
                    return false;
                }
            }
        }
        if (!SYF_FADA_checkChargeBackPERC()) {
            return false;
        }

        if (!SYF_FADA_checkDiscRate()) {
            return false;
        }

        if (!SYF_FADA_checkNumber()) {
            return false;
        }
        if (!SYF_FADA_check_CB_Amt()) {
            return false;
        }

        if (!SYF_FADA_Chk_IF_ID()) {
            return false;
        }

        if (!SYF_FADA_Chk_SEL_IF_Unique_constraint()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SelName = function() {
    try {

        alert('The seller does not exist,please check it!');
        document.MAINFORM.FA_SEL_ID.value = '';
        document.MAINFORM.FA_SEL_NM.value = '';
        document.MAINFORM.FA_SEL_ADDR.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_SEL_CNTY = function() {
    try {

        SYT_CheckCountryCode(document.MAINFORM.FA_SEL_CNTY);
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SEL_IF_Unique_constraint = function() {
    try {

        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_SellerInformation_SYF_FADA_Chk_SEL_IF_Unique_constraint_3', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_IF_ID, 'This Seller Info. has already existed!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        SYF_FADA_MPO_FldClass();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_check_CB_Amt = function() {
    try {

        if (document.MAINFORM.FA_CHG_BC_AMT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_CHG_BC_AMT, 'Invalid amount value!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CCY_VALUE = function() {
    try {

        if (document.MAINFORM.FA_TTL_SEL_TNOVCCY.value != '') {
            document.MAINFORM.FA_OTHER_TNOV_CCY.value = document.MAINFORM.FA_TTL_SEL_TNOVCCY.value;
            document.MAINFORM.FA_OA_TNOV_CCY.value = document.MAINFORM.FA_TTL_SEL_TNOVCCY.value;
        } else {
            document.MAINFORM.FA_OA_TNOV_CCY.value = '';
            document.MAINFORM.FA_OTHER_TNOV_CCY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkChargeBackPERC = function() {
    try {

        if (document.MAINFORM.FA_CHG_BC_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_CHG_BC_PERC, "Charge back percentage can't be more than 100!");
            return false;
        }
        if (document.MAINFORM.FA_CHG_BC_PERC.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_CHG_BC_PERC, "Charge back percentage can't be less than 0!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CHG_BC_AMT_onchange = function(event) {
    try {
        SYF_FADA_check_CB_Amt();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CHG_BC_PERC_onchange = function(event) {
    try {
        SYF_FADA_checkChargeBackPERC();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IF_ID_onchange = function(event) {
    try {
        SYF_FADA_Chk_SEL_IF_Unique_constraint();
        SYF_FADA_Get_other_if();
        SYF_FADA_Chk_IF_ID();
        SYF_FADA_Get_IFNM();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INV_CCY1_onchange = function(event) {
    try {
        SYF_FADA_Chk_CCY();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INV_CCY2_onchange = function(event) {
    try {
        SYF_FADA_Chk_CCY();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INV_CCY3_onchange = function(event) {
    try {
        SYF_FADA_Chk_CCY();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_NO_OF_BUYERS_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_NO_OF_CRN_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_NO_OF_INV_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OA_TNOV_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OA_TNOV_CCY_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OTHER_TNOV_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PMT_GRC_DAY_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_DAYS_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_CNTY_onchange = function(event) {
    try {
        SYF_FADA_Cal_toUpperCase('FA_SEL_CNTY');
        SYF_FADA_Chk_FA_SEL_CNTY();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_SellerNM();
        SYF_FADA_Get_FCS();
        SYF_FADA_Get_other_if();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_DAYS_onchange = function(event) {
    try {
        SYF_FADA_checkNumber();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate(); //11-13add
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TTL_SEL_TNOVCCY_onchange = function(event) {
    try {
        SYF_FADA_CCY_VALUE();
        EEHtml.fireEvent(document.MAINFORM.FA_OTHER_TNOV, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_OA_TNOV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_SellerInformation.js", e);
    }
}