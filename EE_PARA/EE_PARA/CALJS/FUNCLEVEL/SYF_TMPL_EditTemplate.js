var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
    document.MAINFORM.TEMP_FLG1.value = document.MAINFORM.CE_CUSTOMER.value;
    } catch (e) {
        DisExcpt("SYF_TMPL_EditTemplate.js*InitValues", e);
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
        DisExcpt("SYF_TMPL_EditTemplate.js*loadTemplateDropdownInit", e);
    }
}

csFuncLevelProto.SYF_TMPL_GET_Customer_ID = function() {
    try {
        SYS_InqCUBK_byCondition('Get_Customer', '1');
    } catch (e) {
        DisExcpt("SYF_TMPL_EditTemplate.js*SYF_TMPL_GET_Customer_ID", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
    if(document.MAINFORM.TEMP_FLG1.value!=document.MAINFORM.CE_CUSTOMER.value && document.MAINFORM.CE_CUSTOMER.value=='Both'){
    	document.MAINFORM.MSG_TYPE.value = 'TMPL.001.Add';
    }
    } catch (e) {
        DisExcpt("SYF_TMPL_EditTemplate.js*ConfirmBusinessCall", e);
    }
}

/*csFuncLevelProto.FLD_TMPL_ACTIVE_FLAG_onchange = function(event) {
    try {
        		SYS_GetRichTextMappingFields("CONTENT", "DEFAULT");
    } catch (e) {
        DisExcpt("SYF_TMPL_EditTemplate.js*FLD_TMPL_ACTIVE_FLAG_onchange", e);
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
        DisExcpt("SYF_TMPL_EditTemplate.js*FLD_TMPL_CUST_SPEC_onchange", e);
    }
}

csFuncLevelProto.FLD_TMPL_CUST_ID_BTN_onclick = function(event) {
    try {
        SYF_TMPL_GET_Customer_ID();
    } catch (e) {
        DisExcpt("SYF_TMPL_EditTemplate.js*FLD_TMPL_CUST_ID_BTN_onclick", e);
    }
}