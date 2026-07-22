var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Chk_DuplicateSBR = function() {
    try {

        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('DupliSBRCheck_ME', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'Duplicate Seller-Buyer relation!');
            document.MAINFORM.FA_SBR_CCY.value = '';
            document.MAINFORM.FA_LMT_CCY.value = '';
            document.MAINFORM.FA_MAX_CCY.value = '';
            document.MAINFORM.EXCH_RT1.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_DUE_DT = function() {
    try {

        var day;
        var day1;
        var day2;
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date must be later than it's Valid From Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }

        day1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_LMT_DUE_DT2.name);
        if (day1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than anchor Limit End Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        day2 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
        if (day2 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than Agreement End Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        return true;

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_VAL_DT = function() {
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
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {


        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.FA_LMT_BAL.value = document.MAINFORM.FA_LMT_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_FA_LMT_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_DUE_DT()) {
            return false;
        }

        if (!SYF_FADA_Chk_DuplicateSBR()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_AC_NO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments

        SYS_GetTableDataByRule_S('GET_ACCOUNT_NUMBER', '1', 'Y');

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Buyer = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('GET_BUYER_ID', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_AnchorLimitEndDate = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            document.getElementById('LIMIT').innerHTML = 'Buyer Limit ';
            document.getElementById('LIM').innerHTML = 'Buyer Limit End Date';
            SYS_GetTableDataByRule_S('CreateSBR_Get_AnchorLimitEndDate', '1', 'Y'); //GET BUYER;
            if (document.MAINFORM.FA_ANCHOR_AMT.value == null || document.MAINFORM.FA_ANCHOR_AMT.value == '' || document.MAINFORM.FA_ANCHOR_AMT.value == '0') {
                alert("Please create the buyer limit before to create the SBR.");
                SYS_highTrxButton("_cancel");
                return false;
            } else {
                document.MAINFORM.FA_ANCHOR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_ANCHOR_CCY.value, document.MAINFORM.FA_ANCHOR_AMT.value);
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' && document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
            document.getElementById('LIMIT').innerHTML = 'Seller Limit';
            document.getElementById('LIM').innerHTML = 'Seller Limit End Date';
            SYS_GetTableDataByRule_S('CreateSBR_Get_AnchorLimitEndDate', '2', 'Y'); //GET SELLER;
            if (document.MAINFORM.FA_ANCHOR_AMT.value == null || document.MAINFORM.FA_ANCHOR_AMT.value == '' || document.MAINFORM.FA_ANCHOR_AMT.value == '0') {
                alert("Please create the buyer limit before to create the SBR.");
                SYS_highTrxButton("_cancel");
                return false;
            } else {
                document.MAINFORM.FA_ANCHOR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_ANCHOR_CCY.value, document.MAINFORM.FA_ANCHOR_AMT.value);
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' && document.MAINFORM.FA_SERVICE_APPRVD.value == '1') {
            document.getElementById('LIMIT').innerHTML = 'Buyer Limit';
            document.getElementById('LIM').innerHTML = 'Buyer Limit End Date';
            SYS_GetTableDataByRule_S('CreateSBR_Get_AnchorLimitEndDate', '1', 'Y'); //GET BUYER;
            if (document.MAINFORM.FA_ANCHOR_AMT.value == null || document.MAINFORM.FA_ANCHOR_AMT.value == '' || document.MAINFORM.FA_ANCHOR_AMT.value == '0') {
                alert("Please create the buyer limit before to create the SBR.");
                SYS_highTrxButton("_cancel");
                return false;
            } else {
                document.MAINFORM.FA_ANCHOR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_ANCHOR_CCY.value, document.MAINFORM.FA_ANCHOR_AMT.value);
            }
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'SBR';
        document.MAINFORM.FA_SERVICE_APPRVD.value = document.MAINFORM.FA_SERVICE_REQ.value;
        SYF_FADA_GET_AC_NO();
        EEHtml.getElementById('discount1').style.display = "none";
        EEHtml.getElementById('discount2').style.display = "none";
        EEHtml.getElementById('disc1').style.display = "";
        EEHtml.getElementById('disc2').style.display = "";
        document.MAINFORM.FA_RELATION_STATUS.value = 'Active'; //add for SCF change
        SYF_FADA_Get_AnchorLimitEndDate();
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_ANCHOR_CCY.value;
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_APPL_LMT_AMT.value;
        document.MAINFORM.FA_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('LIMIT_DIV').style.display = "none"; //DD needn't limit;  
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYT_ChangeFldClass_New('FA_LMT_CCY', 'O');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'O');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('F').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "none";
        }

        SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG();
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG = function() {
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
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_VAL_TRX_DT_CHECK = function() {
    try {

        var a1;
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_VAL_DT.value != null) {
            if (document.MAINFORM.FA_LMT_VAL_DT.value == document.MAINFORM.TRX_DT.value) {
                return true;
            }
            a1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LMT_VAL_DT.name);
            if (a1 < 0) {
                alert('SBR Valid From Date cannot be earlier than transaction Date!');
                document.MAINFORM.FA_LMT_VAL_DT.value = '';
                return false;
            }
        }
        return true;

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_SBR_ANCHOR_LMTCCY_EXCH_RT = function() {
    try {

        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;

        if (busi_tp != 'DD' && document.MAINFORM.FA_ANCHOR_CCY.value != document.MAINFORM.FA_SBR_CCY.value) {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_SBR_CCY.value, document.MAINFORM.FA_ANCHOR_CCY.value, 'Booking Rate', 'EXCH_RT1');
        }

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_SBRAPLY_LM_ANC_LM = function() {
    try {

        var ANCHORLMT;
        var exchRT;
        var SBRAMT;
        ANCHORLMT = SYS_BeFloat(document.MAINFORM.FA_ANCHOR_AMT.value);
        exchRT = SYS_BeFloat(document.MAINFORM.EXCH_RT1.value);
        SBRAMT = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) * exchRT;
        if (SBRAMT > ANCHORLMT) {
            SYS_CheckError(document.MAINFORM.FA_LMT_AMT, 'The SBR amount can not over the anchor limit!');
            document.MAINFORM.FA_LMT_AMT.value = 0;
            return false;
        }
        return true;

    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_Buyer();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AC_NO_onchange = function(event) {
    try {
        SYF_FADA_GET_AC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Check_SBRAPLY_LM_ANC_LM();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        SYF_FADA_VAL_TRX_DT_CHECK();
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SBR_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_MAX_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        SYF_FADA_GET_SBR_ANCHOR_LMTCCY_EXCH_RT();
        SYF_FADA_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP4_onchange = function(event) {
    try {
        SYF_FADA_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBRLMTs_ME.js", e);
    }
}