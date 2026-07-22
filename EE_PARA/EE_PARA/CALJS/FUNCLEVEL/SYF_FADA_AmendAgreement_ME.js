var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FADA_Chk_new_due_dt()) {
            return false;
        }
        /*
        if(!SYF_FADA_Chk_SEL_ID()){
        	return false;
        }
        if(!SYF_FADA_Chk_BUY_ID()){
        	return false;
        }
        */
        if (!SYF_FADA_Chk_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_CHECK_COMM_RATE()) {

            return false;
        }
        /*   if (!SYF_FADA_CHECK_DO_NO()) {

               return false;
           }*/
        if (!SYF_FADA_Chk_MAX_LOAN_PER()) {

            return false;
        }


        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetTableDataByRule_S('Get_CE_MAIN_REF_AMD', '1', 'Y');
        SYS_GetTableDataByRule_S('GET_SBR_NO', '1', null, false);
        if (document.MAINFORM.FA_CE_MAIN_REF.value == '') {
            document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_AGM_DUE_DT.value;
        }
        document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
        document.MAINFORM.FA_TEMP6.value = document.MAINFORM.FA_EXTEND_TIMES.value;
        document.MAINFORM.FA_TEMP4.value = document.MAINFORM.FA_EXTEND_DT.value;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
            document.MAINFORM.REBATE_BT.style.visibility = 'hidden';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'O');
            document.MAINFORM.REBATE_BT.style.visibility = 'visible';
        }
        SYF_FADA_FA_REQ_BUYER_APR_FLG();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("DFAgreement", "N", false, '', "DFAgreement");
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.FA_TEMP_BK_ID1.value = document.MAINFORM.CHG_FREQ_CD.value;
            var arrOptionV;
            arrOptionV = ['D', 'M', 'Q', 'W'];
            SYS_FilterOptions('CHG_FREQ_CD', arrOptionV);
            document.MAINFORM.CHG_FREQ_CD.value = document.MAINFORM.FA_TEMP_BK_ID1.value;
        }
        SYF_FADA_Cal_FA_IRT_SPREAD();
        SYF_FADA_AUTO_FINANCE();
        // SYF_FADA_CHECK_BUSI_TYPE_FIELD();
        //  SYF_FADA_RT_DISABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*PostconditionOnInit", e);
    }
}


csFuncLevelProto.SYF_FADA_Cal_FA_IRT_SPREAD = function() {
    try {
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M', 'N'); //Change from O to M for SCF change
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Cal_FA_IRT_SPREAD", e);
    }
}



csFuncLevelProto.SYF_FADA_AUTO_FINANCE = function() {
    try {
        var FA_AUTO_FIN = document.MAINFORM.FA_AUTO_FIN.value;
        if (FA_AUTO_FIN == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'M');
            document.MAINFORM.FA_MIN_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_AGM_CCY.value, document.MAINFORM.FA_MIN_FIN_AMT.value);
            document.MAINFORM.FA_MAX_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_AGM_CCY.value, document.MAINFORM.FA_MAX_FIN_AMT.value);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'O');
            document.MAINFORM.FA_MIN_FIN_AMT.value = '';
            document.MAINFORM.FA_MAX_FIN_AMT.value = '';
            document.MAINFORM.FA_CUT_OFF_DAYS.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_AUTO_FINANCE", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_BUSI_TYPE_FIELD = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('DevlId').style.display = "none";
            EEHtml.getElementById('DevlId1').style.display = "none";
            EEHtml.getElementById('DevlNm1').style.display = "none";
            EEHtml.getElementById('DevlNm12').style.display = "none";
            EEHtml.getElementById('DevlNm2').style.display = "none";

            EEHtml.getElementById('BuyId1').style.display = "";
            EEHtml.getElementById('BuyId12').style.display = "";
            EEHtml.getElementById('BuyNm1').style.display = "";
            EEHtml.getElementById('BuyNm12').style.display = "";
            EEHtml.getElementById('BuyNm2').style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID, 'B');
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'M');
            document.getElementById('BuyId1').innerHTML = 'Buyer ID';
            document.getElementById('BuyNm1').innerHTML = 'Buyer Name';
        } else {

            EEHtml.getElementById('DevlId').style.display = "";
            EEHtml.getElementById('DevlId1').style.display = "";
            EEHtml.getElementById('DevlNm1').style.display = "";
            EEHtml.getElementById('DevlNm12').style.display = "";
            EEHtml.getElementById('DevlNm2').style.display = "";

            EEHtml.getElementById('BuyId1').style.display = "none";
            EEHtml.getElementById('BuyId12').style.display = "none";
            EEHtml.getElementById('BuyNm1').style.display = "none";
            EEHtml.getElementById('BuyNm12').style.display = "none";
            EEHtml.getElementById('BuyNm2').style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'B');
            SYT_ChangeFldClass_New('FA_SEL_ID', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_CHECK_BUSI_TYPE_FIELD", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_COMM_RATE = function() {
    try {
        if (document.MAINFORM.FA_EF_COMM_RT.value < 0 || document.MAINFORM.FA_EF_COMM_RT.value > 100) {
            alert('Commission Rate must >= 0 and < 100,please check!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_CHECK_COMM_RATE", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') && document.MAINFORM.FA_NO_OF_COUNTER.value == 0) {
            alert('The transaction can not be confirmed without any Counter Party.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_CHECK_DO_NO", e);
    }
}

csFuncLevelProto.SYF_FADA_CUST_setRef = function(ref) {
    try {
        document.MAINFORM.TEMP_FA_BUYER_ID.value = ref;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_CUST_setRef", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_NEW_DUE_DT = function() {
    try {
        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            /*
        	var sDate,s,sInt;
        	sDate =document.MAINFORM.FA_ORG_DUE_DT.value;
        	s = sDate.substr(0,4);
        	sInt = parseInt(s) + 1;
        	document.MAINFORM.FA_AGM_DUE_DT.value= sInt + sDate.substr(4,9);
        	SYS_CalEndWorkingDate(SYS_BANK_COUNTRY,document.MAINFORM.FA_AGM_DUE_DT.value, 0, 'SYF_FADA_Cal_NEW_DUE_DT_callback()','B', 'N', 'N');
        */
            var sDate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_ORG_DUE_DT.value);
            var year = sDate.substr(2, 2);
            var month = sDate.substr(5, 2);
            var day = sDate.substr(8, 2);
            var nyear = parseInt(year, 0) + 1;
            document.MAINFORM.FA_AGM_DUE_DT.value = SYT_FORMAT_DATE(SYS_DATE_FORMAT, nyear, month, day);
        } else if (document.MAINFORM.FA_BUSI_FUNC.value == '2') {
            document.MAINFORM.FA_AGM_DUE_DT.value = document.MAINFORM.FA_END_DT.value;
        } else if (document.MAINFORM.FA_BUSI_FUNC.value == '3') {
            document.MAINFORM.FA_AGM_DUE_DT.value = document.MAINFORM.FA_ORG_DUE_DT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Cal_NEW_DUE_DT", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_NEW_DUE_DT_callback = function(duedate) {
    try {
        document.MAINFORM.FA_AGM_DUE_DT.value = duedate;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Cal_NEW_DUE_DT_callback", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_VALID_DAYS = function() {
    try {
        document.MAINFORM.FA_VALID_DAYS.value = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Cal_VALID_DAYS", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_BUY_ID = function() {
    try {
        document.MAINFORM.FA_TEMP5.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_AmendAgreement_SYF_FADA_Chk_BUY_ID_0', '1', 'Y');
        if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_ID, 'This buyer has already signed a contract!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Chk_BUY_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_MAX_LOAN_PER = function() {
    try {
        if (document.MAINFORM.FA_MAX_LOAN_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, "Invoice Max Loan Percentage must between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_MAX_LOAN_PERC.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, "Invoice Max Loan Percentage must between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Chk_MAX_LOAN_PER", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SEL_ID = function() {
    try {
        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_AmendAgreement_SYF_FADA_Chk_SEL_ID_1', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'This seller has already signed a contract!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Chk_SEL_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_VAL_DT = function() {
    try {
        if (document.MAINFORM.FA_AGM_VAL_DT.value != '' && document.MAINFORM.FA_AGM_VAL_DT.value != null) {
            if (document.MAINFORM.FA_AGM_VAL_DT.value == document.MAINFORM.TRX_DT.value) {
                return true;
            }
            var a1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_AGM_VAL_DT.name);
            if (a1 > 0) {
                alert('Valid Date cannot be later than transaction Date!');
                document.MAINFORM.FA_AGM_VAL_DT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Chk_VAL_DT", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_new_due_dt = function() {
    try {
        var a1 = SYS_GetSubDays(document.MAINFORM.FA_AGM_DUE_DT.name, document.MAINFORM.FA_ORG_DUE_DT.name);
        if (a1 >= 0 && document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            alert('The new due date should be later than the original due date!');
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Chk_new_due_dt", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_REQ_BUYER_APR_FLG = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'P');
            document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_FA_REQ_BUYER_APR_FLG", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRefNo_BuyIDSub = function() {
    try {
        //Add by Effie 20190523
        SYS_GetSubPageRefNo('CUST', SYF_FADA_CUST_setRef(), "", "CUSTREF", "CUSTREF");
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_GetRefNo_BuyIDSub", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRefNo_DFAgreement = function() {
    try {
        //Add by Effie 20190524 
        SYS_GetSubPageRefNo('FADA_BUY_REF', SYF_FADA_setDOref(), "", "DOREF", "DOREF");
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_GetRefNo_DFAgreement", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_buy_id_check = function() {
    try {
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('FADA_BUY_ID2', document.MAINFORM.FA_BUYER_ID.name, 'SYF_FADA_Chk_BUY_ID');
        } else {
            document.MAINFORM.FA_BUYER_ID.value = '';
            document.MAINFORM.FA_BUYER_NM.value = '';
            document.MAINFORM.FA_BUYER_NM2.value = '';
            document.MAINFORM.FA_BUYER_ADD_ML.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Get_buy_id_check", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_sel_id_check = function() {
    try {
        if (document.MAINFORM.FA_SEL_ID.value != '') {
            SYS_GetCUBK('FADA_SEL_ID2', document.MAINFORM.FA_SEL_ID.name, 'SYF_FADA_Chk_SEL_ID');
        } else {
            document.MAINFORM.FA_SEL_ID.value = '';
            document.MAINFORM.FA_SEL_NM.value = '';
            document.MAINFORM.FA_SEL_NM2.value = '';
            document.MAINFORM.FA_SEL_ADDR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_Get_sel_id_check", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {} catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_LoadDoComplete", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_AGM_DUE_DT = function() {
    try {
        if (document.MAINFORM.FA_BUSI_FUNC.value == '2' || document.MAINFORM.FA_BUSI_FUNC.value == '3') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
        }
        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_MPO_FA_AGM_DUE_DT", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_busi_func = function() {
    try {
        //1=extend; 2= end;3=change;
        var func = document.MAINFORM.FA_BUSI_FUNC.value;
        if (func == '1') {
            document.MAINFORM.FA_END_DT.value = '';
            document.MAINFORM.FA_EXTEND_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_EXTEND_TIMES.value = SYS_BeInt(document.MAINFORM.FA_TEMP6.value) + 1;
            //document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
            document.MAINFORM.FA_END_REASON.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'P', 'N');
        } else if (func == '2') {
            document.MAINFORM.FA_END_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_AGM_DUE_DT.value = document.MAINFORM.FA_END_DT.value;
            document.MAINFORM.FA_EXTEND_DT.value = document.MAINFORM.FA_TEMP4.value;
            document.MAINFORM.FA_EXTEND_TIMES.value = document.MAINFORM.FA_TEMP6.value;
            //document.MAINFORM.FA_BUSI_STATUS.value = 'CLOSE';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'E';
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'M', 'N');
        } else if (func == '3') {
            document.MAINFORM.FA_END_DT.value = '';
            document.MAINFORM.FA_EXTEND_DT.value = document.MAINFORM.FA_TEMP4.value;
            document.MAINFORM.FA_EXTEND_TIMES.value = document.MAINFORM.FA_TEMP6.value;
            // document.MAINFORM.FA_BUSI_STATUS.value = 'NORMAL';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
            document.MAINFORM.FA_END_REASON.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_MPO_busi_func", e);
    }
}

csFuncLevelProto.SYF_FADA_RT_DISABLE = function() {
    try {
        EEHtml.getElementById('RT1').style.display = "none";
        EEHtml.getElementById('RT2').style.display = "none";
        document.MAINFORM.FA_EF_COMM_RT.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_RT_DISABLE", e);
    }
}

csFuncLevelProto.SYF_FADA_UpLoadFile_DFAgreement = function() {
    try {
        SYS_UpLoadInvFile('UploadSelReqAmend', 'SYF_FADA_setID', null, "FI", "", "DFAgreement");
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_UpLoadFile_DFAgreement", e);
    }
}

csFuncLevelProto.SYF_FADA_setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.TEMP_FA_REF_NO.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_setDOref", e);
    }
}

csFuncLevelProto.SYF_FADA_setID = function() {
    try {
        //Add by Effie 20190524
        var node = SYS_getDoByXpath("DFAgreement");
        var arrayvalue = SYS_getRecords(node);
        var mData = [];
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var record = arrayvalue[i];
            record["FA_SEL_ID"] = document.MAINFORM.FA_SEL_ID.value;
            record["FA_SEL_NM"] = document.MAINFORM.FA_SEL_NM.value;
            document.MAINFORM.TEMP_FA_REF_NO.value = '';
            if (record["FA_PCA_REF"] == "") {
                SYM_FADA_GetRefNo_DFAgreement();
                record["FA_PCA_REF"] = document.MAINFORM.TEMP_FA_REF_NO.value;
            }
            var id = record["FA_BUYER_ID"];
            var nm = record["FA_BUYER_NM"];
            document.MAINFORM.TEMP_FA_BUYER_NM.value = nm;
            if (id === "" && nm != "") {
                document.MAINFORM.TEMP_FA_BUYER_ID.value = "";
                SYS_GetTableDataByRule_S('GET_BUYER_ID_FROM_NAME', '1', true);
                if (document.MAINFORM.TEMP_FA_BUYER_ID.value != '') {
                    record["TEMP_FLG1"] = "CUST";
                    record["FA_BUYER_ID"] = document.MAINFORM.TEMP_FA_BUYER_ID.value;
                } else {
                    record["FA_CUST_FLAG"] = "2";
                    record["TEMP_FLG1"] = "NOCU";
                    if (record["FA_BUYER_ID"] == "") {
                        SYM_FADA_GetRefNo_BuyIDSub();
                        record["FA_BUYER_ID"] = document.MAINFORM.TEMP_FA_BUYER_ID.value;
                    }
                }
            }
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*SYF_FADA_setID", e);
    }
}


csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_DUE_DT_onchange = function() {
    try {
        SYF_FADA_Chk_new_due_dt();
        EEHtml.fireEvent(document.MAINFORM.FA_VALID_DAYS, 'onChange');
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_AGM_DUE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_FIN_onchange = function() {
    try {
        SYF_FADA_AUTO_FINANCE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_AUTO_FIN_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_FUNC_onchange = function() {
    try {
        SYF_FADA_MPO_FA_AGM_DUE_DT();
        SYF_FADA_Cal_NEW_DUE_DT();
        SYF_FADA_MPO_busi_func();
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_BUSI_FUNC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function() {
    try {
        SYF_FADA_Get_buy_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_BUYER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function() {
    try {
        SYF_FADA_CHECK_COMM_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_EF_COMM_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function() {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_LOAN_IRATE_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MAX_LOAN_PERC_onchange = function() {
    try {
        SYF_FADA_Chk_MAX_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_MAX_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function() {
    try {
        SYF_FADA_Get_sel_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_FA_SEL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_REBATE_BT_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('GET_REBATE_ACC_ME', '3');
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_REBATE_BT_onclick", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME.js*FLD_FADA_view_1_onclick", e);
    }
}