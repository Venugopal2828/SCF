function SYM_FADA_RefreshOptions(mappingList) {
    try {

        var arrayValue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newOption; // Utility Auto Fix Comments
        var objFld; // Utility Auto Fix Comments
        var optionAry; // Utility Auto Fix Comments
        optionAry = new Array();
        newOption = new Array();
        try {
            for (i = 0; i < SYS_MULTI_DATA.length; i++) { // Utility Auto Fix Comments
                arrayValue = SYS_MULTI_DATA[i][1];
                if (arrayValue == null || arrayValue == "undefined" || arrayValue == "") {
                    continue;
                }
                for (j = 0; j < arrayValue.length; j++) {
                    optionAry.push(arrayValue[j]);
                }
            }
            while (true) {
                ary = optionAry.pop();
                if (!ary) {
                    break;
                }
          //   if (optionAry.contains(ary)) {   Hattie Marked on 20211028;
  if (optionAry.indexOf(ary)>=0) {
                    optionAry.splice(optionAry.indexOf(ary), 1, ary);
                } else {
                    newOption.push(ary);
                }
            }
            objFld = EEHtml.getElementById(mappingList);
            if (objFld) {
                objFld.options[0] = new Option("", "");
                for (i = 0; i < newOption.length; i++) {
                    fldValue = newOption[i];
                    objFld.options.add(new Option(fldValue, fldValue));
                }
            }
        } catch (e1) {
            alert("[RefreshOptions Error]: " + e1.expression);
        }
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_toUpperCase(fldName) {
    try {

        var fldObj; // Utility Auto Fix Comments
        fldObj = EEHtml.getElementById(fldName);
        fldObj.value = fldObj.value.toUpperCase();
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_QR_CD_FLD() {
    try {

        var FA_BUSI_TYPE = document.MAINFORM.FA_BUSI_TYPE.value;
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var FA_SEL_ID = document.MAINFORM.FA_SEL_ID.value;
        var FA_SEL_NM = document.MAINFORM.FA_SEL_NM.value;
        var FA_BUYER_ID = document.MAINFORM.FA_BUYER_ID.value;
        var FA_BUYER_NM = document.MAINFORM.FA_BUYER_NM.value;

        if (SYS_ORG_FUNCTION_NAME == "SignAgreement" || SYS_ORG_FUNCTION_NAME == "AmendAgreement" || SYS_ORG_FUNCTION_NAME == "SignAgreementFromCE") {
            if (FA_BUSI_TYPE == 'RD') {
                document.MAINFORM.QR_CD_FLD.value = C_MAIN_REF + "/" + FA_SEL_ID + "/" + FA_SEL_NM;
            }
            if (FA_BUSI_TYPE == 'SF' || FA_BUSI_TYPE == 'DD') {
                document.MAINFORM.QR_CD_FLD.value = C_MAIN_REF + "/" + FA_BUYER_ID + "/" + FA_BUYER_NM;
            }

        } else {
            document.MAINFORM.QR_CD_FLD.value = C_MAIN_REF + "/" + FA_SEL_ID + "/" + FA_SEL_NM + "/" + FA_BUYER_ID + "/" + FA_BUYER_NM;
        }
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_GetRefNo_BuyIDSub() {
    try {

        //Add by Effie 20190523
        SYS_GetSubPageRefNo('CUST', SYM_FADA_CUST_setRef, "", "CUSTREF", "CUSTREF");
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_GetRefNo_DFAgreement() {
    try {

        //Add by Effie 20190524 
        SYS_GetSubPageRefNo('FADA_BUY_REF', SYM_FADA_setDOref, "", "DOREF", "DOREF");
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_CUST_setRef(ref) {
    try {

        document.MAINFORM.TEMP_FA_BUYER_ID.value = ref;
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_setDOref(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.TEMP_FA_REF_NO.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}

function SYM_FADA_CalNonCustFlagAgree() {
    try {

        //Add by Effie 20190525
        var node = SYS_getDoByXpath("DFAgreement");
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
            //alert(record["TEMP_FLG1"]);
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYM_FADA.js", e);
    }
}