var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Chk_new_due_dt = function() {
    try {

        /*
if(document.MAINFORM.FA_BUSI_FUNC.value=='1'&&document.MAINFORM.FA_AGM_DUE_DT.value<=document.MAINFORM.FA_ORG_DUE_DT.value) {
  alert("The new due date should be later than the original due date!");
  return false;
}
return true;
*/

        var a1 = SYS_GetSubDays(document.MAINFORM.FA_AGM_DUE_DT.name, document.MAINFORM.FA_ORG_DUE_DT.name);
        if (a1 >= 0 && document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            alert('The new due date should be later than the original due date!');
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Chk_new_due_dt", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Cal_NEW_DUE_DT", e);
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
        SYF_FADA_DISCLOSE_DISABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_NEW_DUE_DT_callback = function(duedate) {
    try {

        document.MAINFORM.FA_AGM_DUE_DT.value = duedate;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Cal_NEW_DUE_DT_callback", e);
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
        /*
var _do=SYS_getDoByXpath('DFAgreement');
num=SYS_getcurrRecordCount("DFAgreement");
var flag = false;
if(num>0){
	var arrayvalue= SYS_getRecords(_do);
	for(var i=0,len=arrayvalue.length;i<len;i++){
		var record = arrayvalue[i];
		var recordTypeTemp = record['recordTypeTemp']
		if(recordTypeTemp!='AE'){
			flag = true;
       		}
	}	
}
if(flag){
	alert('Please edit the records before confirm the transaction!');
	return false;
}
*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_VALID_DAYS = function() {
    try {

        //document.MAINFORM.FA_VALID_DAYS.value=SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name,document.MAINFORM.FA_AGM_DUE_DT.name);
        document.MAINFORM.FA_VALID_DAYS.value = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Cal_VALID_DAYS", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_MPO_busi_func", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_DOdata_DFAgreement = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            //SYS_GetDataForDO_S('DFAgreement');
            SYS_GetDataForDO_S("DFAgreement", "N", false, '', "DFAgreement");
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Get_DOdata_DFAgreement", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_MPO_FA_AGM_DUE_DT", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetTableDataByRule_S('Get_CE_MAIN_REF_AMD', '1', 'Y');
        if (document.MAINFORM.FA_CE_MAIN_REF.value == '') {
            document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_AGM_DUE_DT.value;
        }
        //document.MAINFORM.FA_BUSI_TYPE.value='EF';
        document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';

        //addbymaria 20080925
        document.MAINFORM.FA_TEMP6.value = document.MAINFORM.FA_EXTEND_TIMES.value;
        document.MAINFORM.FA_TEMP4.value = document.MAINFORM.FA_EXTEND_DT.value;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_BUSI_TYPE_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
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
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'CD') {
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
            document.getElementById('BuyId1').innerHTML = 'Insurance Company ID';
            document.getElementById('BuyNm1').innerHTML = 'Insurance Company Name';
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_CHECK_BUSI_TYPE_FIELD", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_SEL_ID = function() {
    try {

        //SYS_InqCUBK_Sql('FADA_SEL_ID2', '(FA_CUST_TYPE=\'2\' OR FA_CUST_TYPE=\'3\') AND IS_FACTOR_FLAG=\'YES\' AND C_TRX_STATUS=\'M\'');
        SYS_InqCUBK_byCondition('FADA_SEL_ID2', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_GET_FA_SEL_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_BUYER_ID = function() {
    try {

        //SYS_InqCUBK_Sql('FADA_BUY_ID2', '(FA_CUST_TYPE=\'1\' OR FA_CUST_TYPE=\'3\') AND IS_FACTOR_FLAG=\'YES\' AND C_TRX_STATUS=\'M\'');
        SYS_InqCUBK_byCondition('FADA_BUY_ID2', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_GET_FA_BUYER_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {

        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'CD') && document.MAINFORM.FA_NO_OF_COUNTER.value == 0) {
            alert('The transaction can not be confirmed without any buyers/sellers.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_CHECK_DO_NO", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Get_buy_id_check", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Chk_BUY_ID", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Get_sel_id_check", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Chk_SEL_ID", e);
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
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_CHECK_COMM_RATE", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_VAL_DT = function() {
    try {

        if (document.MAINFORM.FA_AGM_VAL_DT.value != '' && document.MAINFORM.FA_AGM_VAL_DT.value != null) {
            if (document.MAINFORM.FA_AGM_VAL_DT.value == document.MAINFORM.TRX_DT.value) {
                return true;
            }
            //if(!SYS_Day1MustbeLaterThanDay2('TRX_DT','FA_AGM_VAL_DT')){
            //	SYS_CheckError(document.MAINFORM.FA_AGM_VAL_DT,'Valid Date cannot later than transaction Date!');
            var a1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_AGM_VAL_DT.name);
            if (a1 > 0) {
                alert('Valid Date cannot be later than transaction Date!');
                document.MAINFORM.FA_AGM_VAL_DT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Chk_VAL_DT", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYF_FADA_Get_DOdata_DFAgreement();
            SYF_FADA_Get_DOdata_EndCtr();
        }
        SYF_FADA_CHECK_DO_ENABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_ENABLE = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF' || document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            SYS_disableButton('DFAgreement', 'addbutton');
            SYS_disableButton('DFAgreement', 'editbutton');
            SYS_disableButton('DFAgreement', 'deletebutton');
            SYS_disableButton('DFAgreement', 'viewbutton');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_CHECK_DO_ENABLE", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {

        SYF_FADA_CHECK_DO_ENABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_LoadDoComplete", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_DOdata_EndCtr = function() {
    try {

        if (document.MAINFORM.FA_BUSI_FUNC.value == '2' && document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            //SYS_GetDataForDO_S('EndCtr');
            SYS_GetDataForDO_S("EndCtr", "N", false, '', "EndCtr");
        } else {
            var node = SYS_getDoByXpath("EndCtr");
            node.currInstance.data = [];
            node.grid.getStore().reload();

        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_Get_DOdata_EndCtr", e);
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
            document.MAINFORM.FA_EF_COMM_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_RT_DISABLE", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FADA_AmendAgreement_ConfirmBusinessCall_2', '1', null, false);

        document.MAINFORM.FA_CONTRACT_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*CancelCheck", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*addRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*editRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.SYF_FADA_DISCLOSE_DISABLE = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('DIS1').style.display = "";
            EEHtml.getElementById('DIS2').style.display = "";
            EEHtml.getElementById('BPO1').style.display = "none";
            EEHtml.getElementById('BPO2').style.display = "none";
        } else {
            EEHtml.getElementById('DIS1').style.display = "none";
            EEHtml.getElementById('DIS2').style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.FA_ID_DISCLOSED, 'P');
            EEHtml.getElementById('BPO1').style.display = "";
            EEHtml.getElementById('BPO2').style.display = "";
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*SYF_FADA_DISCLOSE_DISABLE", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_new_due_dt();
        EEHtml.fireEvent(document.MAINFORM.FA_VALID_DAYS, 'onChange');
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_FA_AGM_DUE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_FUNC_onchange = function(event) {
    try {
        SYF_FADA_MPO_FA_AGM_DUE_DT();
        SYF_FADA_Cal_NEW_DUE_DT();
        SYF_FADA_MPO_busi_func();
        SYF_FADA_Get_DOdata_EndCtr();
        SYF_FADA_Cal_VALID_DAYS();
        SYF_FADA_CHECK_DO_ENABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_FA_BUSI_FUNC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Get_DOdata_EndCtr();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_FA_BUSI_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_buy_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_FA_BUYER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_COMM_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_FA_EF_COMM_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_sel_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_FA_SEL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement.js*FLD_FADA_view_1_onclick", e);
    }
}