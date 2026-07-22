var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'CAR';
        document.MAINFORM.FA_BUSI_TYPE.value = 'IF';
        document.MAINFORM.FA_ORG_LMT_AMT.value = document.MAINFORM.FA_LMT_AMT.value;
        document.MAINFORM.FA_ORG_LMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_TEMP_DT1.value = document.MAINFORM.FA_LMT_DUE_DT.value;
        document.MAINFORM.FA_LMT_AMT.value = 0;
        document.MAINFORM.FA_LMT_DUE_DT.value = '';
        document.MAINFORM.FA_MSG_TEXT.value = '';
        document.MAINFORM.FA_MSG_TEXT02.value = '';
        document.MAINFORM.FA_REPL_CODE.value = '';
        document.MAINFORM.FA_REASON.value = '';

        SYF_FADA_Cal_THEIR_REF_NO();
        SYF_FADA_Cal_amountformate();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_RefNO = function(ref) {
    try {

        var pre = document.MAINFORM.FA_BUSI_TYPE.value;
        var UnitCode = SYS_BUSI_UNIT;
        var date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        var sub = 'CAR';
        document.MAINFORM.FA_CAR_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FAEF_CAR_REF', 'SYF_FADA_Cal_RefNO');
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_amountformate = function() {
    try {

        document.MAINFORM.FA_DECR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_DECR_AMT.value);
        document.MAINFORM.FA_INCR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_INCR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FADA_Cal_Insurance_BAL();
            SYF_FADA_Cal_BUYER_BAL();
            SYF_FADA_Cal_Rate();
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYF_FADA_Cal_FA_LMT_BAL();
        }

        SYF_FADA_BUSI_TYPE_FIELD();

        //document.MAINFORM.FA_REASON.remove(19);
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_THEIR_REF_NO = function() {
    try {

        if (document.MAINFORM.FA_CAA_REF.value == '' || document.MAINFORM.FA_CAA_REF.value == '0') {
            document.MAINFORM.THEIR_REF_NO.value = '0';
        } else {
            SYS_GetTableDataByRule_S('SYF_FADA_CAAResponse_SYF_FADA_Cal_THEIR_REF_NO_0', '1', null, false);
            if (document.MAINFORM.FA_TEMP4.value > '0') {
                document.MAINFORM.THEIR_REF_NO.value = '0';
            } else if (document.MAINFORM.FA_TEMP4.value == '0') {
                SYS_GetTableDataByRule_S('SYF_FADA_CAAResponse_SYF_FADA_Cal_THEIR_REF_NO_1', '1', null, null, false);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_LMT_BAL = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OUTC_APL;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
        //var sMappingList = "LM_CRED_LMT;LM_OUTC_APL;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
        SYS_GetTableDataByRule_S('SYF_FADA_CAAResponse_SYF_FADA_Cal_FA_LMT_BAL_2', '1', 'Y');

        var FA_LMT_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value);
        document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_BAL);
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_Insurance_BAL = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY";
        //var sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;FA_REMI_CCY4";
        SYS_GetTableDataByRule_S('SYF_FADA_CAAResponse_SYF_FADA_Cal_Insurance_BAL_3', '1', 'Y');

        var Insurance_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.FA_TEMP_AMT10.value = SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY4.value, Insurance_BAL);
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_BUYER_BAL = function() {
    try {

        document.MAINFORM.CUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
        document.MAINFORM.RCUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
        document.MAINFORM.SUB_DESC.value = 'Factoring';
        document.MAINFORM.FACI_TYPE.value = 'IF';
        sSourceFieldLists = "CUST_ID;RCUST_ID;SUB_DESC;FACI_TYPE";
        SYS_GetDataBySSS_S('FAEF_GET_FACI_BAL_TRX', sSourceFieldLists);
        var FA_TEMP_AMT11 = document.MAINFORM.FACI_BAL.value;
        document.MAINFORM.FA_TEMP_AMT11.value = SYT_AmtFormat(document.MAINFORM.FA_REMI_CCY1.value, FA_TEMP_AMT11);
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_Rate = function() {
    try {

        var fromCCY = document.MAINFORM.FA_LMT_CCY.value;
        var toCCY1 = document.MAINFORM.FA_REMI_CCY4.value;
        var toCCY2 = document.MAINFORM.FA_REMI_CCY1.value;
        if (fromCCY != '') {
            SYS_GetExchangeRate_S(fromCCY, toCCY1, 'Booking Rate', 'EXCH_RT1');
            SYS_GetExchangeRate_S(fromCCY, toCCY2, 'Booking Rate', 'EXCH_RT2');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_New_Due_Date = function() {
    try {

        if (document.MAINFORM.FA_LMT_DUE_DT.value == '') {
            document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.FA_TEMP_DT1.value;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FADA_Cal_New_Due_Date();
        /*LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == '1') {
            var LmtID = document.MAINFORM.C_MAIN_REF.value;
            var IncrAmt = document.MAINFORM.FA_INCR_AMT.value;
            var DecrAmt = document.MAINFORM.FA_DECR_AMT.value;
            var DueDt = document.MAINFORM.FA_LMT_DUE_DT.value;
            var DCMrk = "";
            if (IncrAmt != "" && parseFloat(IncrAmt) > 0) {
                DCMrk = "C";
                LMTS.Ext.increaseFSBC(LmtID, DCMrk, IncrAmt);
            } else if (DecrAmt != "" && parseFloat(DecrAmt) > 0) {
                DCMrk = "D";
                LMTS.Ext.increaseFSBC(LmtID, DCMrk, DecrAmt);
            }
            LMTS.Ext.extensionDay(LmtID, DueDt);
        }*/
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_REPL_CODE = function() {
    try {

        var replCode = document.MAINFORM.FA_REPL_CODE.value;
        if (replCode == '2') {
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_ORG_LMT_AMT.value;
            document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.FA_TEMP_DT1.value;
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'P');
        } else if (replCode == '7') {
            document.MAINFORM.FA_LMT_AMT.value = 0;
            var ndays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_TEMP_DT1.name);
            if (ndays > 0) {
                document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.TRX_DT.value;
            } else {
                document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.FA_TEMP_DT1.value;
            }
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_LONG_DAYS', 'P');
            SYT_ChangeFldClass_New('FA_OWN_RISK_AMT', 'P');
            SYT_ChangeFldClass_New('FA_OWN_RISK_PERC', 'P');
        } else if (replCode == '5' || replCode == '6') {
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_ORG_LMT_AMT.value;
            document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.FA_TEMP_DT1.value;
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_LONG_DAYS', 'P');
            SYT_ChangeFldClass_New('FA_OWN_RISK_AMT', 'P');
            SYT_ChangeFldClass_New('FA_OWN_RISK_PERC', 'P');
        } else {
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'M');
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'O');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'O');
            SYT_ChangeFldClass_New('FA_LMT_LONG_DAYS', 'O');
            SYT_ChangeFldClass_New('FA_OWN_RISK_AMT', 'O');
            SYT_ChangeFldClass_New('FA_OWN_RISK_PERC', 'O');
        }
        SYF_FADA_Cal_Incr_Decr_Amt();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_Incr_Decr_Amt = function() {
    try {

        //if(document.MAINFORM.FA_LMT_AMT.value != '' && document.MAINFORM.FA_LMT_AMT.value != 0){
        var namt = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_ORG_LMT_AMT.value);
        if (namt > 0) {
            document.MAINFORM.FA_INCR_AMT.value = SYS_BeFloat(namt);
            document.MAINFORM.FA_DECR_AMT.value = '0';
            document.MAINFORM.FA_TEMP3.value = document.MAINFORM.FA_INCR_AMT.value;
            document.MAINFORM.FA_TEMP2.value = 'D';
        } else {
            document.MAINFORM.FA_DECR_AMT.value = -SYS_BeFloat(namt);
            document.MAINFORM.FA_INCR_AMT.value = '0';
            document.MAINFORM.FA_TEMP3.value = document.MAINFORM.FA_DECR_AMT.value;
            document.MAINFORM.FA_TEMP2.value = 'C';
        }
        /*
}else{
	document.MAINFORM.FA_DECR_AMT.value = '0';
	document.MAINFORM.FA_INCR_AMT.value = '0';
}
*/
        SYF_FADA_Cal_amountformate();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_CAR_BUYER = function() {
    try {

        /*var sWhereSql = " C_MAIN_REF='" + document.MAINFORM.FA_BUYER_ID.value + "' AND IS_FACTOR_FLAG='YES' AND C_TRX_STATUS='M'";
        SYS_InqCUBK_Sql("CAR_BUYER", sWhereSql);*/
        SYS_InqCUBK_byCondition('CAR_BUYER', '1');

    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_CAR_SELLER = function() {
    try {

        /*var sWhereSql2 = " C_MAIN_REF='" + document.MAINFORM.FA_SEL_ID.value + "' AND IS_FACTOR_FLAG='YES' AND C_TRX_STATUS='M'";
        SYS_InqCUBK_Sql("CAR_SELLER", sWhereSql2);*/
        SYS_InqCUBK_byCondition('CAR_SELLER', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_DECR_AMT = function() {
    try {

        var DecrAmt = SYS_BeFloat(document.MAINFORM.FA_DECR_AMT.value);
        var LmtBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        if (DecrAmt > LmtBal) {
            alert("Decrease FSBC Limit can't be more than Last Credit Cover balance!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_INCR_AMT = function() {
    try {

        var InsuRate = document.MAINFORM.EXCH_RT1.value;
        var InsuBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value);
        var IncrInsuAmt = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_INCR_AMT.value) * InsuRate);
        if (document.MAINFORM.FA_INCO_ID.value != '' && IncrInsuAmt > InsuBal) {
            alert("The insurance limit balance is not enough!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_AMT = function() {
    try {

        if (document.MAINFORM.FA_REPL_CODE.value == '8') {
            var LmtAmt = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
            var OrgLmtAmt = SYS_BeFloat(document.MAINFORM.FA_ORG_LMT_AMT.value);
            if (LmtAmt >= OrgLmtAmt) {
                alert("Reply code is reduction, please input a smaller amount!");
                document.MAINFORM.FA_LMT_AMT.value = 0;
                document.MAINFORM.FA_DECR_AMT.value = 0;
                document.MAINFORM.FA_INCR_AMT.value = 0;
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_MSG_TEXT_08 = function() {
    try {

        if (document.MAINFORM.FA_REASON.value == '99' && document.MAINFORM.FA_MSG_TEXT.value == '') {
            alert("When the reason code is other, please input Message Text EDI 08 for explaining.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_REASON = function() {
    try {

        var ResponseAmt = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
        var RequestAmt = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value);
        var OriginalAmt = SYS_BeFloat(document.MAINFORM.FA_ORG_LMT_AMT.value);
        if (document.MAINFORM.FA_REASON.value == '' && ResponseAmt != '') {
            if (document.MAINFORM.THEIR_REF_NO.value != '0' && ResponseAmt < RequestAmt) {
                alert('Please input the reason!');
                return false;
            } else if (document.MAINFORM.THEIR_REF_NO.value == '0' && ResponseAmt < OriginalAmt) {
                alert('Please input the reason!');
                return false;
            } else if (document.MAINFORM.FA_REPL_CODE.value == '2' || document.MAINFORM.FA_REPL_CODE.value == '3') {
                alert('Please input the reason!');
                return false;
            }
            return true;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_VAL_DT = function() {
    try {

        var ndays = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (ndays < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_VAL_DT, 'New Valid from date cannot be later than  FSBC New Due Date!');
            document.MAINFORM.FA_LMT_VAL_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_DUE_DT = function() {
    try {

        var nduedays1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (nduedays1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT, 'FSBC New Due Date cannot be early than New Valid from date!');
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_New_Old_Due_Date = function() {
    try {

        var nNewOldDays = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_TEMP_DT1.name);
        if (nNewOldDays > 0 && document.MAINFORM.FA_REPL_CODE.value == '9') {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT, 'Please note the new due date should be later than old due date.');
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_LONG_DAYS = function() {
    try {

        if (document.MAINFORM.FA_LMT_LONG_DAYS.value < 0) {
            alert("Longest Credit Period must be larger than 0");
            document.MAINFORM.FA_LMT_LONG_DAYS.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_OWN_RISK_PERC = function() {
    try {

        if (document.MAINFORM.FA_OWN_RISK_PERC.value < 0 || document.MAINFORM.FA_OWN_RISK_PERC.value > 100) {
            alert("New Own Risk Percentage must between 0 and 100");
            document.MAINFORM.FA_OWN_RISK_PERC.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_BUSI_TYPE_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            EEHtml.getElementById('EF1').style.display = "";
            EEHtml.getElementById('EF2').style.display = "";
            EEHtml.getElementById('EF3').style.display = "";
            EEHtml.getElementById('IF1').style.display = "none";
            EEHtml.getElementById('IF2').style.display = "none";
            EEHtml.getElementById('IF3').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            EEHtml.getElementById('EF1').style.display = "none";
            EEHtml.getElementById('EF2').style.display = "none";
            EEHtml.getElementById('EF3').style.display = "none";
            EEHtml.getElementById('IF1').style.display = "";
            EEHtml.getElementById('IF2').style.display = "";
            EEHtml.getElementById('IF3').style.display = "";
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_REPL_REASON_CODE = function() {
    try {

        if (document.MAINFORM.FA_REPL_CODE.value == '3') {
            if (document.MAINFORM.FA_REASON.value != '' && document.MAINFORM.FA_REASON.value != '8' && document.MAINFORM.FA_REASON.value != '9' && document.MAINFORM.FA_REASON.value != '10' && document.MAINFORM.FA_REASON.value != '11' && document.MAINFORM.FA_REASON.value != '99') {
                alert("When the reply code is conditional approval, the reason should be 'Only risk of official insolvency covered' or 'Subject to acceptance of bill of exchange' or 'Document against acceptance' or 'Document against payment' or 'Other'!");
                document.MAINFORM.FA_REASON.value = '';
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_New_Due_Buyer_Date = function() {
    try {

        var nduedays2 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT2.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (nduedays2 > 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT, 'Please check the FSBC New Due Date! It is later than buyer limit due date.');
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_INCR_BUYER_AMT = function() {
    try {

        var BuyerRate = document.MAINFORM.EXCH_RT2.value;
        var BuyerBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
        var IncrBuyerAmt = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_INCR_AMT.value) * BuyerRate);
        if (document.MAINFORM.FA_BUYER_ID.value != '' && IncrBuyerAmt > BuyerBal) {
            alert("The buyer limit balance is not enough!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_FA_LMT_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_DECR_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_INCR_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_DUE_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_LONG_DAYS()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_OWN_RISK_PERC()) {
            return false;
        }
        if (!SYF_FADA_Chk_INCR_BUYER_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_New_Old_Due_Date()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_REASON()) {
            return false;
        }
        if (!SYF_FADA_Chk_ReplDT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_ReplDT = function() {
    try {

        if (document.MAINFORM.FA_REQ_DT.value != '') {
            var nRepldays = SYS_GetSubDays(document.MAINFORM.FA_REQ_DT.name, document.MAINFORM.FA_MSG_DT.name);
            if (nRepldays < 0) {
                SYS_CheckError(document.MAINFORM.FA_MSG_DT, 'Reply Date can not be ealier than Request Date!');
                document.MAINFORM.FA_MSG_DT.value = '';
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_TYPE_onchange = function(event) {
    try {
        SYF_FADA_BUSI_TYPE_FIELD();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('CAR_BUYER', 'FA_BUYER_ID');
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Cal_Incr_Decr_Amt();
        SYF_FADA_Chk_FA_LMT_AMT();
        SYF_FADA_Chk_FA_REASON();
        SYF_FADA_Chk_FA_DECR_AMT();
        SYF_FADA_Chk_FA_INCR_AMT();
        SYF_FADA_Chk_INCR_BUYER_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_LMT_DUE_DT();
        SYF_FADA_Chk_New_Old_Due_Date();
        SYF_FADA_Cal_New_Due_Buyer_Date();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_LONG_DAYS_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_LMT_LONG_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_LMT_VAL_DT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MSG_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_ReplDT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MSG_TEXT_onchange = function(event) {
    try {
        SYF_FADA_Chk_MSG_TEXT_08();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OWN_RISK_PERC_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_OWN_RISK_PERC();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REASON_onchange = function(event) {
    try {
        SYF_FADA_Chk_MSG_TEXT_08();
        SYF_FADA_Chk_FA_REASON();
        SYF_FADA_Chk_REPL_REASON_CODE();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REPL_CODE_onchange = function(event) {
    try {
        SYF_FADA_MPO_FA_REPL_CODE();
        SYF_FADA_Chk_FA_LMT_AMT();
        SYF_FADA_Chk_FA_REASON();
        SYF_FADA_Chk_REPL_REASON_CODE();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('CAR_SELLER', 'FA_SEL_ID');
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAResponse.js", e);
    }
}