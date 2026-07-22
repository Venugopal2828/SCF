var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('TMPL_REF', 'SYF_TMPL_SetRefNo');
        document.MAINFORM.TEMP_TYPE.value = 'Undertaking Wording';
        document.MAINFORM.C_MODU_NAME.value = 'GTEE';
    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_TMPL_GET_Customer_ID = function() {
    try {
        SYS_InqCUBK_byCondition('Get_Customer', '1');
    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*SYF_TMPL_GET_Customer_ID", e);
    }
}

csFuncLevelProto.loadTemplateDropdownInit= function(richEditorID) {
	    try {
   let templateType;
   if ("C_CONTENT" == richEditorID) {
   templateType = document.getElementById("TEMP_TYPE").value;
   }
   SYS_GetRichTextMappingFields(richEditorID, templateType);
    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*loadTemplateDropdownInit", e);
    }
}

csFuncLevelProto.SYF_TMPL_SetRefNo = function(ref) {
    try {
        var UnitCode;
        var month;
        var pre;
        var sub;
        var year;
        CountryCode = SYS_BANK_COUNTRY;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'TEMP';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*SYF_TMPL_SetRefNo", e);
    }
}

/*csFuncLevelProto.FLD_TMPL_ACTIVE_FLAG_onchange = function(event) {
    try {
        		SYS_GetRichTextMappingFields("CONTENT", "DEFAULT");
    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*FLD_TMPL_ACTIVE_FLAG_onchange", e);
    }
}*/

csFuncLevelProto.FLD_TMPL_CUST_SPEC_onchange = function(event) {
    try {

        var spec = document.MAINFORM.CUST_SPEC.value;
        if (spec == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CUST_ID, 'M');
            document.MAINFORM.CUST_ID_BTN.disabled = false;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CUST_ID, 'P');
            document.MAINFORM.CUST_ID_BTN.disabled = true;
            SYT_ClearFields("CUST_ID,CUST_NM");
        }
    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*FLD_TMPL_CUST_SPEC_onchange", e);
    }
}

csFuncLevelProto.FLD_TMPL_CUST_ID_BTN_onclick = function(event) {
    try {
        SYF_TMPL_GET_Customer_ID();


    } catch (e) {
        DisExcpt("SYF_TMPL_CreateTemplate.js*FLD_TMPL_CUST_ID_BTN_onclick", e);
    }
}