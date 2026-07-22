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
            document.getElementById('DevlId').innerHTML = 'Seller ID';
            document.getElementById('DevlNm1').innerHTML = 'Seller Name';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
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
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_ENABLE = function() {
    try {

        var node; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYS_enableButton('SelReq', 'addbutton');
        } else {
            SYS_disableButton('SelReq', 'addbutton');
            SYS_disableButton('SelReq', 'editbutton');
            SYS_disableButton('SelReq', 'deletebutton');
            SYS_disableButton('SelReq', 'viewbutton');

        }

        node = SYS_getDoByXpath("SelReq");
        node.currInstance.data = [];
        node.grid.getStore().reload();
        document.MAINFORM.FA_NO_OF_COUNTER.value = 0;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {

        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') && document.MAINFORM.FA_NO_OF_COUNTER.value == 0) {
            alert('The transaction can not be confirmed without any buyers/sellers.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_DUE_DT = function() {
    try {

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
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_ExcelUploaded = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_SetRefNo = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        CountryCode = SYS_BANK_COUNTRY;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'SCF';
        document.MAINFORM.FA_CNTR_REF.value = sub + CountryCode + year + ref;
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_VALID_DAYS = function() {
    try {

        var days; // Utility Auto Fix Comments
        days = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
        document.MAINFORM.FA_VALID_DAYS.value = Math.max(days, 0);
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_BUY_ID = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            document.MAINFORM.FA_TEMP5.value = '';
            SYS_GetTableDataByRule_S('SYF_FADA_SignAgreement_SYF_FADA_Chk_BUY_ID_1', '1', 'Y');
            if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
                SYS_CheckError(document.MAINFORM.FA_BUYER_ID, 'This customer has already signed a contract!');
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
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
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DUE_DT = function() {
    try {

        var a1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_AGM_DUE_DT.value == document.MAINFORM.FA_AGM_VAL_DT.value) {
            return true;
        }
        a1 = SYS_GetSubDays(document.MAINFORM.FA_AGM_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (a1 > 0) {
            alert('Due Date must be later than Transaction Date!');
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SEL_ID = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            document.MAINFORM.FA_TEMP4.value = '';
            SYS_GetTableDataByRule_S('SYF_FADA_SignAgreement_SYF_FADA_Chk_SEL_ID_0', '1', 'Y');
            if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
                SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'This Customer has already signed a contract!');
                return false;
            }

        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_VAL_DT = function() {
    try {

        var a1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_AGM_VAL_DT.value != '' && document.MAINFORM.FA_AGM_VAL_DT.value != null) {
            if (document.MAINFORM.FA_AGM_VAL_DT.value == document.MAINFORM.TRX_DT.value) {
                return true;
            }
            a1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_AGM_VAL_DT.name);
            if (a1 > 0) {
                alert('Valid Date cannot be later than transaction Date!');
                document.MAINFORM.FA_AGM_VAL_DT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_CONTRACT_REF.value = document.MAINFORM.C_MAIN_REF.value;
        SYF_FADA_CalNonCustFlag(); //Add by Effie on 20190524
        SYF_FADA_QR_CD_FLD();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_SEL_ID()) {
            return false;
        }
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

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_BUYER_ID = function() {
    try {

        SYS_InqCUBK_byCondition('FADA_BUY_ID2', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_SEL_ID = function() {
    try {

        SYS_InqCUBK_byCondition('FADA_SEL_ID2', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_DOdata_DFAgreement = function() {
    try {

        var num; // Utility Auto Fix Comments
        //SYS_GetDataForDO_S('SelReq');
        num = SYS_getcurrRecordCount("SelReq");
        if (num > 0) {
            SYF_FADA_MPO_sel_id_class('1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
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
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
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
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        //SYS_GetRefNo('SCF_AGRMNT_REF', 'SYF_FADA_Cal_SetRefNo');
        document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
        document.MAINFORM.FA_AGM_VAL_DT.value = SYS_BUSI_DATE;
        SYF_FADA_Cal_DUE_DT();
        SYF_FADA_Cal_VALID_DAYS();
        document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
        document.MAINFORM.ACC_CUST.value = SYS_BUSI_UNIT;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            SYS_enableButton('SelReq', 'addbutton');
        } else {
            SYS_disableButton('SelReq', 'addbutton');
            SYS_disableButton('SelReq', 'editbutton');
            SYS_disableButton('SelReq', 'deletebutton');
            SYS_disableButton('SelReq', 'viewbutton');

        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
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
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}


csFuncLevelProto.SYF_FADA_RT_DISABLE = function() {
    try {

        EEHtml.getElementById('RT1').style.display = "none";
        EEHtml.getElementById('RT2').style.display = "none";
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_UpLoadFile_SelReq = function() {
    try {

        SYS_UpLoadInvFile('UploadSelReq', 'SYF_FADA_setID', null, "FI", "", "SelReq");
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Upload_failed = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Insurance_Info = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            document.MAINFORM.FA_CUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
        } else if (document.MAINFORM.FA_SEL_ID.value != '') {
            document.MAINFORM.FA_CUST_ID.value = document.MAINFORM.FA_SEL_ID.value;
        }
        if (document.MAINFORM.FA_CUST_ID.value != '') {
            SYS_GetTableDataByRule_S('Get_Insurance_Info', '1', true);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CalNonCustFlag = function() {
    try {

        //Add by Effie 20190524
        var node = SYS_getDoByXpath("SelReq");
        var arrayvalue = SYS_getRecords(node);
        var mData = [];
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var record = arrayvalue[i];
            var id = record["FA_BUYER_ID"];
            var nm = record["FA_BUYER_NM"];
            document.MAINFORM.TEMP_FA_BUYER_ID.value = id;
            document.MAINFORM.TEMP_FA_BUYER_NM.value = "";
            SYS_GetTableDataByRule_S('GET_BUYER_ID_CHK', '1', true);
            if (document.MAINFORM.TEMP_FA_BUYER_NM.value != '') {
                record["TEMP_FLG1"] = "CUST";
            } else {
                record["FA_CUST_FLAG"] = "2";
                record["TEMP_FLG1"] = "NOCU";
            }

            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_setID = function() {
    try {

        //Add by Effie 20190524
        var node = SYS_getDoByXpath("SelReq");
        var arrayvalue = SYS_getRecords(node);
        var mData = [];
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var record = arrayvalue[i];
            record["FA_SEL_ID"] = document.MAINFORM.FA_SEL_ID.value;
            record["FA_SEL_NM"] = document.MAINFORM.FA_SEL_NM.value;
            document.MAINFORM.TEMP_FA_REF_NO.value = '';
            if (record["FA_PCA_REF"] == "") {
                SYF_FADA_GetRefNo_DFAgreement();
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
                        SYF_FADA_GetRefNo_BuyIDSub();
                        record["FA_BUYER_ID"] = document.MAINFORM.TEMP_FA_BUYER_ID.value;
                    }
                }
            }
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
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
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_QR_CD_FLD = function() {
    try {

        var FA_BUSI_TYPE = document.MAINFORM.FA_BUSI_TYPE.value;
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var FA_SEL_ID = document.MAINFORM.FA_SEL_ID.value;
        var FA_SEL_NM = document.MAINFORM.FA_SEL_NM.value;
        var FA_BUYER_ID = document.MAINFORM.FA_BUYER_ID.value;
        var FA_BUYER_NM = document.MAINFORM.FA_BUYER_NM.value;

        if (FA_BUSI_TYPE == 'RD') {
            document.MAINFORM.QR_CD_FLD.value = C_MAIN_REF + "/" + FA_SEL_ID + "/" + FA_SEL_NM;
        }
        if (FA_BUSI_TYPE == 'SF' || FA_BUSI_TYPE == 'DD') {
            document.MAINFORM.QR_CD_FLD.value = C_MAIN_REF + "/" + FA_BUYER_ID + "/" + FA_BUYER_NM;
        } else {
            document.MAINFORM.QR_CD_FLD.value = C_MAIN_REF + "/" + FA_SEL_ID + "/" + FA_SEL_NM + "/" + FA_BUYER_ID + "/" + FA_BUYER_NM;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRefNo_DFAgreement = function() {
    try {

        //Add by Effie 20190524 
        SYS_GetSubPageRefNo('FADA_BUY_REF', SYF_FADA_setDOref(), "", "DOREF", "DOREF");
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRefNo_BuyIDSub = function() {
    try {

        //Add by Effie 20190523
        SYS_GetSubPageRefNo('CUST', SYF_FADA_CUST_setRef(), "", "CUSTREF", "CUSTREF");
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CUST_setRef = function(ref) {
    try {

        document.MAINFORM.TEMP_FA_BUYER_ID.value = ref;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Cal_VALID_DAYS();
        SYF_FADA_Chk_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_VAL_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_DUE_DT();
        SYF_FADA_Chk_VAL_DT();
        SYF_FADA_Cal_DUE_DT();
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_TYPE_onchange = function(event) {
    try {
        SYF_FADA_CHECK_BUSI_TYPE_FIELD();
        SYF_FADA_CHECK_DO_ENABLE();
        SYF_FADA_Chk_BUY_SELLER_ID();
        SYF_FADA_Chk_BUY_ID();
        SYF_FADA_Chk_SEL_ID();
        SYF_FADA_RT_DISABLE();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_buy_id_check();
        SYF_FADA_Get_Insurance_Info();
        document.MAINFORM.FA_TEMP2.value = document.MAINFORM.FA_BUYER_ID.value;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_COMM_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_sel_id_check();
        SYF_FADA_Get_Insurance_Info();
        document.MAINFORM.FA_TEMP2.value = document.MAINFORM.FA_SEL_ID.value;
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_RecAgreementFrCE_ME.js", e);
    }
}