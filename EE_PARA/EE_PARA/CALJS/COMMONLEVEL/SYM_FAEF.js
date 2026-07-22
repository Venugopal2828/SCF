function SYM_FAEF_checkDocNo(invNo, grid) {
    try {

        var objCriteria; // Utility Auto Fix Comments
        var recCount; // Utility Auto Fix Comments
        var ruleName; // Utility Auto Fix Comments
        objCriteria = {
            FA_DOC_NO: invNo
        };
        ruleName = grid.getName();

        recCount = O2MController.getRecordCountFor(ruleName, objCriteria);
        if (recCount > 0) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_checkDspInvoice() {
    try {

        var funcType; // Utility Auto Fix Comments
        funcType = SYS_FUNCTION_TYPE;
        if (funcType == "IQ" || funcType == "RE") {
            return true;
        }
        document.MAINFORM.FA_TEMP_DOC_STATUS.value = '';
        SYS_GetTableDataByRule_S('SYM_FAEF_SYM_FAEF_checkDspInvoice_0', '1', 'Y');
        if (document.MAINFORM.FA_TEMP_DOC_STATUS.value == '') {
            return true;
        } else {
            alert("The FSB has invoices in Dispute, please run 'Dispute Settlement'");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_CreditCover_FSB_Inq() {
    try {

        document.MAINFORM.TEMP_TRX_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value); //add by amy for unformat date
        SYS_InqGapi_S('Credit_Cover_FSBInq');
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_forBAFields(linkNO, statementShow) {
    try {

        if (document.MAINFORM.FA_BA_FLG.value == '1') {
            document.MAINFORM.BA_UNIT_CODE.value = SYS_BUSI_UNIT;
            if (statementShow == 'N') {
                SYS_GetUUID_S(document.MAINFORM.FA_BA_LINK.name, statementShow);
            } else {
                SYS_GetUUID_S(document.MAINFORM.FA_BA_LINK.name);
            }
            //alert(document.MAINFORM.FA_BA_LINK.value);1109
        }
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_forDealTickets() {
    try {

        var custType; // Utility Auto Fix Comments
        SYS_GetTableDataByRule('SYM_FAEF_SYM_FAEF_forDealTickets_1', '1', true);
        custType = document.MAINFORM.FA_CUST_TYPE2.value;
        if (custType == "2") {
            document.MAINFORM.C_BU_ID.value = SYS_BUSI_UNIT;
        } else {
            document.MAINFORM.C_BU_ID.value = "DOC";
        }
        document.MAINFORM.C_FUNC_NAME.value = SYS_FUNCTION_DESC;
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_getLmtDueDT() {
    try {

        var sqlWhere; // Utility Auto Fix Comments
        //sqlWhere = "FA_FACTOR_ID='" + document.MAINFORM.FA_IF_ID.value + "'";
        SYS_GetTableDataByRule_S('SYM_FAEF_SYM_FAEF_getLmtDueDT_2', '1');
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT('EUR', document.MAINFORM.FA_TEMP1.value);
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_RefreshOptions(mappingList) {
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
                if (optionAry.contains(ary)) {
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
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_setDocCCY() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var tempFA_IF_ID; // Utility Auto Fix Comments
        //sSQLWhere="FA_BUYER_ID='"+document.MAINFORM.FA_BUYER_ID.value+"'AND FA_IF_ID='"+document.MAINFORM.FA_IF_ID.value+"'AND FA_SEL_ID='"+document.MAINFORM.FA_SEL_ID.value+"'";
        //sSQLWhere="C_MAIN_REF='"+document.MAINFORM.C_MAIN_REF.value+"'";
        //sFieldList="FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
        sMappingList = "FA_DOC_CCY";
        //SYS_GetTableMultiDataToArray_S("FAEF_MASTER",sSQLWhere,sFieldList);
        SYS_GetTableDataByRule_S("setDocCCY_0", "1", true, true);
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

            window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
            tempFA_DOC_CCY = RegExp.$1;
            document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
        loadCCYComplete = 1;
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_toUpperCase(fldName) {
    try {

        var fldObj; // Utility Auto Fix Comments
        fldObj = EEHtml.getElementById(fldName);
        fldObj.value = fldObj.value.toUpperCase();
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_CommonSearch(cubk_nm, nm) {
    try {

        var bkName = nm.value.trim();
        if (bkName != "" && cubk_nm == 'FA_SEL_ID_ME') {
            if (document.MAINFORM.FA_BUSI_TYPE.value === "RD") {
                SYS_InqCUBK_Sql(cubk_nm, SYM_FAEF_SearchLookUp(new Array("FA_SEL_NM", nm.name)) + " AND FA_BUSI_TYPE='RD'");
            }
        } else if (bkName != "" && cubk_nm == 'FA_BUYER_ID_ME') {
            if (document.MAINFORM.FA_BUSI_TYPE.value === "SF") {
                SYS_InqCUBK_Sql(cubk_nm, SYM_FAEF_SearchLookUp(new Array("FA_BUYER_NM", nm.name)) + " AND FA_BUSI_TYPE='SF'");
            }
        } else if (bkName != "" && cubk_nm == 'FA_BUYER_ID2_ME') {
            SYS_InqCUBK_Sql(cubk_nm, 'FA_SELLER_ID=\'<--FA_SELLER_ID-->\' AND LOWER(FA_BUY_NM) LIKE \'' + '%' + document.MAINFORM.FA_BUY_NM.value.toLowerCase() + '%' + '\' AND C_SBR_CCY=\'<--FA_DOC_CCY-->\' AND FA_BUSI_TYPE=\'<--FA_BUSI_TYPE-->\'');
        } else if (bkName != "" && cubk_nm == 'FA_SEL_ID2_ME') {
            SYS_InqCUBK_Sql(cubk_nm, 'FA_BUY_ID=\'<--FA_BUY_ID-->\' AND LOWER(FA_SELLER_NM) LIKE \'' + '%' + document.MAINFORM.FA_SELLER_NM.value.toLowerCase() + '%' + '\' AND C_SBR_CCY=\'<--FA_DOC_CCY-->\' AND FA_BUSI_TYPE=\'<--FA_BUSI_TYPE-->\'');
        } else {
            alert("Search is not possible without Name");
        }

    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}

function SYM_FAEF_SearchLookUp(colsToFields, extColsToFields, manualAppend) {
    try {

        var addtCondCheck; // Utility Auto Fix Comments
        var sqlStr; // Utility Auto Fix Comments
        var sqlStrApnd; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        sqlStr = "";
        sqlStrApnd = "";
        addtCondCheck = false;
        for (i = 0; i < 2; i++) {
            x = document.MAINFORM.elements[colsToFields[i + 1]];
            x.value = x.value.trim();
            x.value = x.value.toLowerCase();
            if (document.MAINFORM.elements[colsToFields[i + 1]].value != "") {
                if (sqlStr.length > 0) {
                    sqlStr += " AND ";
                }
                if (x.value != "") { // Utility Auto Fix Comments
                    sqlStr += 'LOWER(' + colsToFields[i] + ')' + " LIKE \'<--" + colsToFields[i + 1] + "-->" + "%" + "\'"; // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
            }
            i++;
        }
        if (manualAppend != null) {
            sqlStr += " AND " + manualAppend;
        }

        if (extColsToFields != null) {
            if (sqlStr.length != 0) {
                sqlStrApnd += " AND (";
            } else {
                sqlStrApnd += "((1=0) ";
            }
            for (i = 0; i < extColsToFields.length; i++) {
                if (document.MAINFORM.elements[extColsToFields[i + 1]].value != "") {
                    if (sqlStrApnd.charAt(sqlStrApnd.length - 1) != "(") {
                        sqlStrApnd += " OR ";
                    }
                    sqlStrApnd += extColsToFields[i] + " LIKE \'<--" + extColsToFields[i + 1] + "-->" + "%" + "\'";
                    addtCondCheck = true;
                }
                i++;
            }
            sqlStrApnd += ")";
        }

        if (addtCondCheck) {
            sqlStr += sqlStrApnd;
        }

        if (sqlStr.length == 0) {
            sqlStr += "1=1";
        }

        return sqlStr;
    } catch (e) {
        DisExcpt("SYM_FAEF.js", e);
    }
}