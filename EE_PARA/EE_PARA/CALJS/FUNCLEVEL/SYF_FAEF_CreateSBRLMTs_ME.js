var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_Chk_DuplicateSBR = function() {
    try {

        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('DupliSBRCheck_ME', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'Duplicate Seller-Buyer relation!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_LMT_DUE_DT = function() {
    try {

        var day;
        var day1;
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date must be later than it's Valid From Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }

        day1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_LMT_DUE_DT2.name);
        if (day1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than buyer Limit End Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_LMT_VAL_DT = function() {
    try {

        var day;
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_VAL_DT.name, "SBR Valid From Date cannot be later than SBR End Date!");
            document.MAINFORM.FA_LMT_VAL_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        LMTS.Ext.deleteAll();
        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_Chk_FA_LMT_VAL_DT()) {
            return false;
        }
        if (!SYF_FAEF_Chk_FA_LMT_DUE_DT()) {
            return false;
        }

        if (!SYF_FAEF_Chk_DuplicateSBR()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_AC_NO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments

        SYS_GetTableDataByRule_S('GET_ACC_NUMBER', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Buyer = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('GET_BUYER_ID', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BuyerLimitEndDate = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            //SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_BuyerLimitEndDate_1', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_BUYER_INFO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            // SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_BUYER_INFO_2', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_INCO_ID = function() {
    try {

        if (document.MAINFORM.FA_INCO_ID.value != '') {
            SYS_GetCUBK('FA_INCO_ID', 'FA_INCO_ID'); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.FA_INCO_ID.value = '';
            document.MAINFORM.FA_INCO_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_SEL_INFO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            SYS_GetTableDataByRule_S('Get_FA_SEL_INFO_3', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'SBR';
        document.MAINFORM.FA_INCO_ID.value = document.MAINFORM.FA_IF_ID.value;
        document.MAINFORM.FA_INCO_NM.value = document.MAINFORM.FA_IF_NM.value;
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
        document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_APPL_LMT_AMT.value;
        SYF_FAEF_Get_FA_BUYER_INFO();
        SYF_FAEF_Get_FA_SEL_INFO();
        SYF_FAEF_GET_AC_NO();
        document.MAINFORM.FA_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        EEHtml.getElementById('discount1').style.display = "none";
        EEHtml.getElementById('discount2').style.display = "none";
        EEHtml.getElementById('disc1').style.display = "";
        EEHtml.getElementById('disc2').style.display = "";
        document.MAINFORM.FA_RELATION_STATUS.value = 'Active'; //add for SCF change
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FAEF_Get_BuyerLimitEndDate();
            document.MAINFORM.FA_SERVICE_APPRVD.value = document.MAINFORM.FA_SERVICE_REQ.value; //From Paul Change Require
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYT_ChangeFldClass_New('FA_LMT_CCY', 'O');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'O');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('buyerLimitEndDate').style.display = "none";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('F').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "none";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('C').style.display = "none";
            SYT_DisableDiv('C_div');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'CD') {
            document.getElementById('SL1').innerHTML = 'Medical Provider ID & Name ';
            document.getElementById('disc1').innerHTML = 'Insurance Company ID & Name ';
        }
        SYF_FAEF_Hidden_Show_FA_REQ_BUYER_APR_FLG();
        SYF_FAEF_MPO_BUYER_SELLER_ACC_NO();
        SYT_DisableDivClass('A_div');
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
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
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_checkDiscRate2 = function() {
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
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
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
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
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
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FAEF_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FAEF_Get_Buyer();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_INCO_ID_onchange = function(event) {
    try {
        SYF_FAEF_Get_FA_INCO_ID();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_AC_NO_onchange = function(event) {
    try {
        SYF_FAEF_GET_AC_NO();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_MAX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_ANCHOR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        SYF_FAEF_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FAEF_Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FAEF_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FAEF_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FAEF_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP4_onchange = function(event) {
    try {
        SYF_FAEF_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreateSBRLMTs_ME.js", e);
    }
}