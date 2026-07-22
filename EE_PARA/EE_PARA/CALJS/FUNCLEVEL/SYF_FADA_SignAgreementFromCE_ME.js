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
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_ENABLE = function() {
    try {

        var node; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            //SYS_enableButton('DFAgreement', 'addbutton');
            SYS_enableButton('DFAgreement', 'editbutton');
            SYS_enableButton('DFAgreement', 'deletebutton');
            SYS_enableButton('DFAgreement', 'viewbutton');
        } else {
            SYS_disableButton('DFAgreement', 'addbutton');
            SYS_disableButton('DFAgreement', 'editbutton');
            SYS_disableButton('DFAgreement', 'deletebutton');
            SYS_disableButton('DFAgreement', 'viewbutton');

        }

        node = SYS_getDoByXpath("DFAgreement");
        node.currInstance.data = [];
        node.grid.getStore().reload();
        /*
node = SYS_getDoByXpath("DFAgreement");
node.clearAll();*/
        document.MAINFORM.FA_NO_OF_COUNTER.value = 0;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {

        var num = SYS_getcurrRecordCount("DFAgreement");
        SYS_setValueToMain('FA_NO_OF_COUNTER', num);
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'DD' || document.MAINFORM.FA_BUSI_TYPE.value == 'SF') && document.MAINFORM.FA_NO_OF_COUNTER.value == 0) {
            alert('The transaction can not be confirmed without any buyers/sellers.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_DUE_DT = function() {
    try {

        /*
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var nyear; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_AGM_VAL_DT.value != '' && document.MAINFORM.FA_AGM_VAL_DT.value != null) {
            sDate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_AGM_VAL_DT.value);
            year = sDate.substr(2, 2);
            month = sDate.substr(5, 2);
            day = sDate.substr(8, 2);
            nyear = parseInt(year, 0) + 1;
            document.MAINFORM.FA_AGM_DUE_DT.value = SYT_FORMAT_DATE(SYS_DATE_FORMAT, nyear, month, day);
        }
        */
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_SetRefNo = function(ref) {
    try {

        /*
var UnitCode;// Utility Auto Fix Comments
    var month;// Utility Auto Fix Comments
    var pre;// Utility Auto Fix Comments
    var sub;// Utility Auto Fix Comments
    var year;// Utility Auto Fix Comments
pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'FCS';
        document.MAINFORM.FA_CNTR_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
*/
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_VALID_DAYS = function() {
    try {

        var days; // Utility Auto Fix Comments
        days = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
        document.MAINFORM.FA_VALID_DAYS.value = Math.max(days, 0);
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_BUY_ID = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            document.MAINFORM.FA_TEMP5.value = '';
            SYS_GetTableDataByRule_S('SYF_FADA_SignAgreement_SYF_FADA_Chk_BUY_ID_1', '1', 'Y');
            if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
                SYS_CheckError(document.MAINFORM.FA_BUYER_ID, 'This buyer has already signed a contract!');
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_BUY_SELLER_ID = function() {
    try {

        var FA_BUSI_TYPE; // Utility Auto Fix Comments
        FA_BUSI_TYPE = document.MAINFORM.FA_BUSI_TYPE.value;
        if (FA_BUSI_TYPE == "SF" || FA_BUSI_TYPE == "DD") {
            SYT_ChangeFldClass_New('FA_SEL_ID', 'B');
            SYT_ChangeFldClass_New('FA_SEL_NM', 'B');
            SYT_ChangeFldClass_New('FA_SEL_NM2', 'B'); // Utility Auto Fix Comments
        } else {
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'B');
            SYT_ChangeFldClass_New('FA_BUYER_NM', 'B');
            SYT_ChangeFldClass_New('FA_BUYER_NM2', 'B');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DUE_DT = function() {
    try {

        var a1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_AGM_DUE_DT.value == document.MAINFORM.FA_AGM_VAL_DT.value) {
            return true;
        }
        //if(!SYS_Day1MustbeLaterThanDay2('FA_AGM_DUE_DT','FA_AGM_VAL_DT')){
        //SYS_CheckError(document.MAINFORM.FA_AGM_DUE_DT,'Due Date must be later than Valid Date!');
        a1 = SYS_GetSubDays(document.MAINFORM.FA_AGM_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (a1 > 0) {
            alert('Due Date must be later than Transaction Date!');
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SEL_ID = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'BPO' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            document.MAINFORM.FA_TEMP4.value = '';
            SYS_GetTableDataByRule_S('SYF_FADA_SignAgreement_SYF_FADA_Chk_SEL_ID_0', '1', 'Y');
            if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
                SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'This seller has already signed a contract!');
                return false;
            }

        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_VAL_DT = function() {
    try {

        var a1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_AGM_VAL_DT.value != '' && document.MAINFORM.FA_AGM_VAL_DT.value != null) {
            if (document.MAINFORM.FA_AGM_VAL_DT.value == document.MAINFORM.TRX_DT.value) {
                return true;
            }
            //if(!SYS_Day1MustbeLaterThanDay2('TRX_DT','FA_AGM_VAL_DT')){
            //	SYS_CheckError(document.MAINFORM.FA_AGM_VAL_DT,'Valid Date cannot later than transaction Date!');
            a1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_AGM_VAL_DT.name);
            if (a1 > 0) {
                alert('Valid Date cannot be later than transaction Date!');
                document.MAINFORM.FA_AGM_VAL_DT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_CONTRACT_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        /*if (!SYF_FADA_Chk_SEL_ID()) {
            return false;
        }*/
        if (!SYF_FADA_Chk_BUY_ID()) {
            return false;
        }
        if (!SYF_FADA_Chk_DUE_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_CHECK_COMM_RATE()) {

            return false;
        }
        if (!SYF_FADA_CHECK_DO_NO()) {

            return false;
        }
        /*
if(!SYT_checkFactoringChildRecord('DFAgreement')){
	return false;
}
*/

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_BUYER_ID = function() {
    try {

        //SYS_InqCUBK_Sql('FADA_BUY_ID2', '(FA_CUST_TYPE=\'1\' OR FA_CUST_TYPE=\'3\') AND IS_FACTOR_FLAG=\'YES\' AND C_TRX_STATUS=\'M\'');
        SYS_InqCUBK_byCondition('FADA_BUY_ID2', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_SEL_ID = function() {
    try {

        //SYS_InqCUBK_Sql('FADA_SEL_ID2', '(FA_CUST_TYPE=\'2\' OR FA_CUST_TYPE=\'3\') AND IS_FACTOR_FLAG=\'YES\' AND C_TRX_STATUS=\'M\'');
        SYS_InqCUBK_byCondition('FADA_SEL_ID2', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_DOdata_DFAgreement = function() {
    try {

        var num; // Utility Auto Fix Comments

        num = SYS_getcurrRecordCount("DFAgreement");
        if (num > 0) {
            SYF_FADA_MPO_sel_id_class('1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
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
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        //document.MAINFORM.FA_BUSI_TYPE.value = 'DF';
        document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
        document.MAINFORM.FA_AGM_VAL_DT.value = SYS_BUSI_DATE;
        SYF_FADA_Cal_DUE_DT();
        SYF_FADA_Cal_VALID_DAYS();
        document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
        document.MAINFORM.ACC_CUST.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_CNTR_REF.value = document.MAINFORM.C_MAIN_REF.value;

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetTableDataByRule_S('Get_Buyer_NM_CE', '1', 'Y');
        }
        if (document.MAINFORM.FA_SEL_ID.value != '') {
            SYS_GetTableDataByRule_S('Get_Seller_NM_CE', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('DFAgreement');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            // SYS_enableButton('DFAgreement', 'addbutton');
            SYS_enableButton('DFAgreement', 'editbutton');
            SYS_enableButton('DFAgreement', 'deletebutton');
            SYS_enableButton('DFAgreement', 'viewbutton');
        } else {
            SYS_disableButton('DFAgreement', 'addbutton');
            SYS_disableButton('DFAgreement', 'editbutton');
            SYS_disableButton('DFAgreement', 'deletebutton');
            SYS_disableButton('DFAgreement', 'viewbutton');

        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_sel_id_class = function(type) {
    try {

        /*
if(type=='1')
{
    //SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID,'P','N');
}
else
{
    //SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID,'M','N');
}
*/
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
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
        // SYF_FADA_RT_DISABLE();
        document.MAINFORM.FA_BUSI_TYPE.remove(2);
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //SYS_GetRefNo('DF_CNTR_SIGN','SYF_FADA_Cal_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_RT_DISABLE = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            EEHtml.getElementById('RT1').style.display = "";
            EEHtml.getElementById('RT2').style.display = "";


        } else {

            EEHtml.getElementById('RT1').style.display = "none";
            EEHtml.getElementById('RT2').style.display = "none";
            document.MAINFORM.FA_EF_COMM_RT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Cal_VALID_DAYS();
        SYF_FADA_Chk_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_VAL_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_DUE_DT();
        SYF_FADA_Chk_VAL_DT();
        SYF_FADA_Cal_DUE_DT();
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_TYPE_onclick = function(event) {
    try {
        SYF_FADA_CHECK_BUSI_TYPE_FIELD();
        SYF_FADA_CHECK_DO_ENABLE();
        SYF_FADA_Chk_BUY_SELLER_ID();
        //SYS_GetRefNo('DF_CNTR_SIGN', 'SYF_FADA_Cal_SetRefNo', "", "MAINREF", "", "MAINREF");
        SYF_FADA_Chk_BUY_ID();
        // SYF_FADA_Chk_SEL_ID();
        // SYF_FADA_RT_DISABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_buy_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_COMM_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_sel_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME.js", e);
    }
}