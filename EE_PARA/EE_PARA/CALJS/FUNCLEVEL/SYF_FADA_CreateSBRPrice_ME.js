var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Cal_FA_IRT_SPREAD = function() {
    try {

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M', 'N'); //Change from O to M for SCF change
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DuplicateSBR = function() {
    try {

        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('DupliSBRCheck_ME', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'Duplicate Seller-Buyer relation!');
            document.MAINFORM.FA_SBR_CCY.value = '';
            document.MAINFORM.FA_MAX_CCY.value = '';
            document.MAINFORM.EXCH_RT1.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_DuplicateSBR()) {
            return false;
        }
        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Factoring commission rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_EF_HAN_CHG_AMT.value == 0) {
            if (!confirm('Handling charge is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_IRT_SPREAD.value == 0) {
            if (!confirm('Financing Profit Margin Rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_OVD_IRT_SPREAD.value == 0) {
            if (!confirm('Penalty Profit Spread Rate is 0!')) {
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Buyer = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('GET_BUYER_ID', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_BUYER_INFO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_BUYER_INFO_2', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_INCO_ID = function() {
    try {

        if (document.MAINFORM.FA_INCO_ID.value != '') {
            SYS_GetCUBK('FA_INCO_ID', 'FA_INCO_ID'); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.FA_INCO_ID.value = '';
            document.MAINFORM.FA_INCO_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_SEL_INFO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_SEL_INFO_3', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'SBR';
        document.MAINFORM.FA_SBR_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_SERVICE_APPRVD.value = document.MAINFORM.FA_SERVICE_REQ.value;
        SYF_FADA_Get_FA_BUYER_INFO();
        SYF_FADA_Get_FA_SEL_INFO();
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        EEHtml.getElementById('disc1').style.display = "";
        EEHtml.getElementById('disc2').style.display = "";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            document.MAINFORM.FA_RELATION_STATUS.value = 'Active'; //add for SCF change
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_SERVICE_APPRVD.value = document.MAINFORM.FA_SERVICE_REQ.value; //From Paul Change Require
        }
        /*if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }*/

        /*if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYT_ChangeFldClass_New('FA_EF_HAN_CHG_CCY', 'O');
        } else {
            SYT_ChangeFldClass_New('FA_EF_HAN_CHG_CCY', 'P');
        }*/

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('F').style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
            document.MAINFORM.REBATE_BT.style.visibility = 'hidden';
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "none";
        }


        SYF_FADA_Cal_FA_IRT_SPREAD();
        SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG();
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('DF_SCF_AGRMNT', 'SYF_FADA_setMainRef()');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate1 = function() {
    try {

        if (document.MAINFORM.FA_PRM_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "1st Discount Rate must between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_PRM_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "1st Discount Rate must between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate2 = function() {
    try {

        if (document.MAINFORM.FA_SND_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_SND_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_setMainRef = function(ref) {
    try {

        var CountryCode; // Utility Auto Fix Comments   
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments 
        CountryCode = SYS_BANK_COUNTRY;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        sub = 'SBR';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG = function() {
    try {

        //Add by Canny for SCF change
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "block";
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'M');
        } else {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "none";
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'H');
            document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_BUYER_SELLER_ACC_NO = function() {
    try {

        //Add by Canny for SCF change
        if (document.MAINFORM.FA_AUTO_DEBIT.value == "Yes") {
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
            } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_INV_LOAN_PER = function() {
    try {

        var LOAN_PER = document.MAINFORM.FA_MAX_LOAN_PERC.value;
        if (LOAN_PER >= 100 || LOAN_PER < 0) {
            SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, 'The Invoice Max. Loan Percentage must between 0 and 100!');
            document.MAINFORM.FA_MAX_LOAN_PERC.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_COMM_RT = function() {
    try {

        var COMM_RT = document.MAINFORM.FA_EF_COMM_RT.value;
        if (COMM_RT >= 100 || COMM_RT < 0) {
            SYS_CheckError(document.MAINFORM.FA_EF_COMM_RT, 'The Gross Turnover Commission must between 0 and 100!');
            document.MAINFORM.FA_EF_COMM_RT.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_Rebate_RT = function() {
    try {

        var REBATE_RT = document.MAINFORM.FA_REBATE_RATE.value;
        if (REBATE_RT >= 100 || REBATE_RT < 0) {
            SYS_CheckError(document.MAINFORM.FA_REBATE_RATE, 'The Rebate Rate must between 0 and 100!');
            document.MAINFORM.FA_REBATE_RATE.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_PO_LOAN_PER = function() {
    try {

        var PO_PER = document.MAINFORM.PO_MAX_LOAN_PERC.value;
        if (PO_PER >= 100 || PO_PER < 0) {
            SYS_CheckError(document.MAINFORM.PO_MAX_LOAN_PERC, 'The PO Max. Loan Percentage must between 0 and 100!');
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_VAT_RT = function() {
    try {

        var VAT_RT = document.MAINFORM.VAT_RT.value;
        if (VAT_RT >= 100 || VAT_RT < 0) {
            SYS_CheckError(document.MAINFORM.VAT_RT, 'The VAT Rate must between 0 and 100!');
            document.MAINFORM.VAT_RT.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_Buyer();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_COMM_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INCO_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_FA_INCO_ID();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Check_INV_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REBATE_ACCOUNT_onclick = function(event) {
    try {
        if (document.MAINFORM.FA_REBATE_ACCOUNT.value != "") {
            SYS_GetCUBK('GET_REBATE_ACC_ME', "FA_REBATE_ACCOUNT");
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REBATE_RATE_onchange = function(event) {
    try {
        SYF_FADA_Check_Rebate_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SBR_CCY_onclick = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        document.MAINFORM.FA_MAX_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        SYF_FADA_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP4_onchange = function(event) {
    try {
        SYF_FADA_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_PO_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Check_PO_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_REBATE_BT_onclick = function(event) {
    try {
        var BUSI_TP = document.MAINFORM.FA_BUSI_TYPE.value;
        if (BUSI_TP == 'SF') {
            SYS_InqCUBK_byCondition('GET_REBATE_ACC_ME', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_VAT_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_VAT_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRPrice_ME.js", e);
    }
}