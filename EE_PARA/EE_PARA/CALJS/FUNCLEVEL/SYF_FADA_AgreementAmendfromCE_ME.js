var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_NEW_DUE_DT_callback = function(duedate) {
    try {

        document.MAINFORM.FA_AGM_DUE_DT.value = duedate;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_VALID_DAYS = function() {
    try {

        document.MAINFORM.FA_VALID_DAYS.value = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        if (!SYF_FADA_CHECK_DO_NO()) {

            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("DFAgreement", "N", false, '', "DFAgreement");
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_AGM_DUE_DT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_FUNC.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
        }
        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
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
            document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
            document.MAINFORM.FA_END_REASON.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'P', 'N');
        } else if (func == '2') {
            document.MAINFORM.FA_END_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_AGM_DUE_DT.value = document.MAINFORM.FA_END_DT.value;
            document.MAINFORM.FA_EXTEND_DT.value = document.MAINFORM.FA_TEMP4.value;
            document.MAINFORM.FA_EXTEND_TIMES.value = document.MAINFORM.FA_TEMP6.value;
            document.MAINFORM.FA_BUSI_STATUS.value = 'CLOSE';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'E';
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'M', 'N');
        } else if (func == '3') {
            document.MAINFORM.FA_END_DT.value = '';
            document.MAINFORM.FA_EXTEND_DT.value = document.MAINFORM.FA_TEMP4.value;
            document.MAINFORM.FA_EXTEND_TIMES.value = document.MAINFORM.FA_TEMP6.value;
            document.MAINFORM.FA_BUSI_STATUS.value = 'NORMAL';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
            document.MAINFORM.FA_END_REASON.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }

        SYF_FADA_CHECK_BUSI_TYPE_FIELD();
        SYF_FADA_RT_DISABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_RT_DISABLE = function() {
    try {

        EEHtml.getElementById('RT1').style.display = "none";
        EEHtml.getElementById('RT2').style.display = "none";
        document.MAINFORM.FA_EF_COMM_RT.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_new_due_dt();
        EEHtml.fireEvent(document.MAINFORM.FA_VALID_DAYS, 'onChange');
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_FUNC_onchange = function(event) {
    try {
        SYF_FADA_MPO_FA_AGM_DUE_DT();
        SYF_FADA_Cal_NEW_DUE_DT();
        SYF_FADA_MPO_busi_func();
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_buy_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_COMM_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_sel_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AgreementAmendfromCE_ME.js", e);
    }
}