var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_CHECK_POF_LOAN_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('pof').style.display = "";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'M');
        } else {
            EEHtml.getElementById('pof').style.display = "none";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_IRT_SPREAD = function() {
    try {

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var node;
        var docAmt;
        node = SYS_getDoByXpath('Buyer_Info');
        docAmt = SYS_getFieldSumValue(node, "FA_SBR_AMT", 2);
        SYS_setValueToMain("FA_APPL_LMT_AMT", docAmt);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_setBA_FLG = function() {
    try {

        var servApprv; // Utility Auto Fix Comments
        servApprv = document.MAINFORM.FA_SERVICE_APPRVD.value;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            if (servApprv == '1' || servApprv == '2') {
                document.MAINFORM.FA_BA_FLG.value = '1';
            } else {
                document.MAINFORM.FA_BA_FLG.value = '2';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

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
        /* --marked for SCF change
       if (!SYF_FAEF_checkDiscRate1()) {
            return false;
        }
        if (!SYF_FAEF_checkDiscRate2()) {
            return false;
        }*/
        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Factoring commission rate is 0!')) {
                return false;
            }
        }
        /*--marked for SCF change
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            if (!SYT_checkFactoringChildRecord('Buyer_Info')) {
                return false;
            }
        }
*/
        if (!SYF_FAEF_Chk_DuplicateSBR()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_SBR_BUYER_CCY_EXCH_RT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_REMI_CCY1.value, 'Booking Rate', 'EXCH_RT1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('disc1').style.display = "none";
            EEHtml.getElementById('disc2').style.display = "none";
        } else {
            EEHtml.getElementById('disc1').style.display = "";
            EEHtml.getElementById('disc2').style.display = "";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_InqBuyerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_InqCUBK('GET_BUYER_INFO_FOR_DF', 'FA_BUYER_ID'); // Utility Auto Fix Comments
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_InqCUBK('GET_BUYER_INFO_FOR_DISC', 'FA_BUYER_ID'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_InqSellerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            SYS_InqCUBK('GET_SELLER_INFO_FOR_RF', 'FA_SEL_ID'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FAEF_GET_SBR_BUYER_CCY_EXCH_RT();
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('G').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "none";
        }


        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }


        if (document.MAINFORM.FA_BUSI_TYPE.value == 'CD') {
            document.getElementById('SL1').innerHTML = 'Medical Provider ID & Name ';
            document.getElementById('disc1').innerHTML = 'Insurance Company ID & Name ';
        }

        SYF_FAEF_Cal_FA_IRT_SPREAD();

        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        SYF_FAEF_MPO_BUYER_SELLER_ACC_NO();
        SYF_FAEF_Hidden_Show_FA_REQ_BUYER_APR_FLG();

        SYF_FAEF_CHECK_POF_LOAN_FIELD();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_checkDiscRate1 = function() {
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
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_checkDiscRate2 = function() {
    try {

        if (document.MAINFORM.FA_SND_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must be between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_SND_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must be between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_BUYER_SELLER_ACC_NO = function() {
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
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Hidden_Show_FA_REQ_BUYER_APR_FLG = function() {
    try {

        //Add by Canny for SCF change
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "block";
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'O');
        } else {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "none";
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'H');
            document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_DuplicateSBR = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Chk_DuplicateSBR_0', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'Duplicate Seller-Buyer relation!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FAEF_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_BUYER_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetCUBK('GET_BUYER_INFO_FOR_DF', 'FA_BUYER_ID');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_GetCUBK('GET_BUYER_INFO_FOR_DISC', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FAEF_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SEL_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            SYS_GetCUBK('GET_SELLER_INFO_FOR_RF', 'FA_SEL_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FAEF_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRPrice_ME.js", e);
    }
}