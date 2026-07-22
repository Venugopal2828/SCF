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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.FA_LMT_BAL.value = document.MAINFORM.FA_LMT_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Gross Turnover Commission rate is 0!')) {
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_AC_NO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments

        SYS_GetTableDataByRule_S('GET_ACCOUNT_NUMBER', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Buyer = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('GET_BUYER_ID', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
                alert("Please create the seller limit before to create the SBR.");
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_BUYER_INFO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_BUYER_INFO_2', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_SEL_INFO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_SEL_INFO_3', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'SBR';
        document.MAINFORM.FA_SERVICE_APPRVD.value = document.MAINFORM.FA_SERVICE_REQ.value;
        SYF_FADA_Get_FA_BUYER_INFO();
        SYF_FADA_Get_FA_SEL_INFO();
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
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        document.MAINFORM.FA_LMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.FA_AGM_DUE_DT.value;



    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYT_ChangeFldClass_New('FA_LMT_CCY', 'O');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'O');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('F').style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
            document.MAINFORM.REBATE_BT.style.visibility = 'hidden';

        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "block";
            EEHtml.getElementById('RDSEL').style.display = "none";
            EEHtml.getElementById('RDSEL1').style.display = "none";
        } else {
          //  EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "none";
        }

        SYF_FADA_Cal_FA_IRT_SPREAD();
        SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG();
       // SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('DF_SCF_AGRMNT', 'SYF_FADA_setMainRef()');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_BUYER_SELLER_ACC_NO = function() {
    try {

        //Add by Canny for SCF change
        if (document.MAINFORM.FA_AUTO_DEBIT.value == "Yes") {
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'M');
                document.MAINFORM.FA_BUY_BTN.disabled = false;
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');

            } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'M');
                document.MAINFORM.FA_SEL_BTN.disabled = false;
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
            document.MAINFORM.FA_BUY_BTN.disabled = true;
            document.MAINFORM.FA_SEL_BTN.disabled = true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_VAL_TRX_DT_CHECK = function() {
    try {

        var a1; // Utility Auto Fix Comments
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_INV_LOAN_PER = function() {
    try {

        var LOAN_PER = document.MAINFORM.FA_MAX_LOAN_PERC.value;
        if (LOAN_PER > 100 || LOAN_PER < 0) {
            SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, 'The Invoice Max. Loan Percentage must between 0 and 100!');
            document.MAINFORM.FA_MAX_LOAN_PERC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_PO_LOAN_PER = function() {
    try {

        var PO_PER = document.MAINFORM.PO_MAX_LOAN_PERC.value;
        if (PO_PER > 100 || PO_PER < 0) {
            SYS_CheckError(document.MAINFORM.PO_MAX_LOAN_PERC, 'The PO Max. Loan Percentage must between 0 and 100!');
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_SBR_ANCHOR_LMTCCY_EXCH_RT = function() {
    try {

        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;

        if (busi_tp != 'DD' && document.MAINFORM.FA_ANCHOR_CCY.value != document.MAINFORM.FA_SBR_CCY.value) {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_SBR_CCY.value, document.MAINFORM.FA_ANCHOR_CCY.value, 'Booking Rate', 'EXCH_RT1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
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
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_Buyer();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUY_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Get_ANCHOR_ACC_ME', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_COMM_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INCO_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_FA_INCO_ID();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AC_NO_onchange = function(event) {
    try {
        SYF_FADA_GET_AC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Check_SBRAPLY_LM_ANC_LM();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_LMT_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        SYF_FADA_VAL_TRX_DT_CHECK();
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Check_INV_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REBATE_RATE_onchange = function(event) {
    try {
        SYF_FADA_Check_Rebate_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SBR_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        document.MAINFORM.FA_MAX_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_SBR_CCY.value;
        SYF_FADA_GET_SBR_ANCHOR_LMTCCY_EXCH_RT();
        SYF_FADA_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Get_ANCHOR_ACC_SEL_ME', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_PAYMENT_onchange = function(event) {
    try {
        var PAY = document.MAINFORM.FA_SEL_PAYMENT.value;
        if (PAY == "INTERNAL CUST") {
            document.MAINFORM.FOR_ACCT_NR_BTN.disabled = false;
        } else {
            document.MAINFORM.FOR_ACCT_NR_BTN.disabled = true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP4_onchange = function(event) {
    try {
        SYF_FADA_Chk_DuplicateSBR();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FOR_ACCT_NR_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Get_SEL_AC_4INTERNAL_C', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_PO_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Check_PO_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_REBATE_BT_onclick = function(event) {
    try {
        var BUSI_TP = document.MAINFORM.FA_BUSI_TYPE.value;
        if (BUSI_TP == 'SF') {
            SYS_InqCUBK_byCondition('GET_REBATE_ACC_ME', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_VAT_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_VAT_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_button6_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('GET_SEL_CR_NO_RD', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CreateSBR_ME.js", e);
    }
}