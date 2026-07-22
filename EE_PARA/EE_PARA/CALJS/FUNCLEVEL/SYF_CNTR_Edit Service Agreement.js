var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_CNTR_RGLT_ID_afteredit = function(ed, record) {
    try {

        var args; // Utility Auto Fix Comments
        args = config["fields"]["RGLT_ID"]["editor"];
        args["AJAX_MODE"] = false;
        args["editinfo"] = ed;
        DoFrame.getDoCUBK(args);
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_check_VAL_REL_FLG = function() {
    try {

        if (document.MAINFORM.VAL_REL_FLG.value == 'Y') {
            SYT_ChangeFldClass(document.MAINFORM.MAX_INC_PERC, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MAX_INC_PERC, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var fid; // Utility Auto Fix Comments
        var fvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var s; // Utility Auto Fix Comments
        var sl; // Utility Auto Fix Comments
        var st; // Utility Auto Fix Comments
        var sv; // Utility Auto Fix Comments
        var v; // Utility Auto Fix Comments
        /*if(SYS_FUNCTION_TYPE=='RE' || SYS_FUNCTION_TYPE=='EC' || SYS_FUNCTION_TYPE=='PM')
{
	v = document.MAINFORM.FUND_TP.value;
	if(v.lengh<0){
		return null;
	} else {
		st = v.split("/");
		for(i=0;i<document.all.TEMP_FUND_TP.length;i++){
			sl = document.all.TEMP_FUND_TP[i];
			sv = sl.value;
			for(k=0;k<st.length;k++){
				s = st[k]
				if(sv == s){
					sl.checked = true;
				}
			}
		}
	}
}*/
        fid = "";
        fvalue = "";
        for (i = 0; i < document.MAINFORM.FUND_TP_FROM.options.length; i++) { // Utility Auto Fix Comments
            fid = document.MAINFORM.FUND_TP_FROM.options[i].value;
            if (fid == "") {
                break;
            }
            fvalue = document.MAINFORM.FUND_TP_FROM.options[i].text;
            scfMap.put(fid, fvalue);
        }
        initItemTo("FUND_TP");
        SYF_CNTR_Check_fund_tp_to();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_checkboxconfirm = function() {
    try {

        var i; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        var s; // Utility Auto Fix Comments
        var sv; // Utility Auto Fix Comments
        var v; // Utility Auto Fix Comments
        /*name = document.getElementsByName("TEMP_FUND_TP");
v = "";
	for(i=0;i<name.length;i++){
		s = name[i];
		sv = s.value;
		if(s.checked == true){
			v = v + sv + "/";
		}
	document.all.TEMP_FUND_TP.value = v;
}
document.MAINFORM.FUND_TP.value=v;*/
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_check_LMT_DUE_DT = function() {
    try {

        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.LMT_VAL_DT.name, document.MAINFORM.LMT_DUE_DT.name);
        if (subdays <= 0) {
            SYS_CheckError(document.MAINFORM.LMT_DUE_DT, "Credit Due Date should be later than Credit Start Date. Please check!");
            document.MAINFORM.LMT_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_Check_fund_tp_to = function() {
    try {

        var funtObj; // Utility Auto Fix Comments
        var funtlength; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var iStatue; // Utility Auto Fix Comments
        var keyName; // Utility Auto Fix Comments
        funtObj = document.MAINFORM.FUND_TP_TO;
        funtlength = funtObj.options.length; // Utility Auto Fix Comments
        iStatue = true;
        for (i = 0; i < funtlength; i++) {
            keyName = funtObj.options[i].value;
            if (keyName.indexOf("LC") != -1 || keyName.indexOf("LG") != -1 || keyName.indexOf("YHHP") != -1) {
                SYT_ChangeFldClass(document.MAINFORM.MARGIN_PERC, 'M');
                iStatue = false;
                break;
            }
        }
        if (iStatue) {
            SYT_ChangeFldClass(document.MAINFORM.MARGIN_PERC, 'P');
            document.MAINFORM.MARGIN_PERC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_check_MAX_CHG_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.MAX_CHG_AMT.value) > 0 && (SYS_BeFloat(document.MAINFORM.MIN_CHG_AMT.value) >= SYS_BeFloat(document.MAINFORM.MAX_CHG_AMT.value))) {
            alert("If defined, the 'Maximum Charge Amt' should be bigger than 'Minimum Charge Amt'. Please check your setting and correct!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_check_percentage = function() {
    try {

        if (document.MAINFORM.FUND_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FUND_RT, "Please input a valid percentage value for Advance Rate!");
            document.MAINFORM.FUND_RT.value = '';
            return false;
        } else if (document.MAINFORM.MAX_DEC_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.MAX_DEC_PERC, "Please input a valid percentage value for Max. % of Value Decline!");
            document.MAINFORM.MAX_DEC_PERC.value = '';
            return false;
        } else if (document.MAINFORM.MAX_INC_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.MAX_INC_PERC, "Please input a valid percentage value for Max. % of Price Raise!");
            document.MAINFORM.MAX_INC_PERC.value = '';
            return false;
        } else if (document.MAINFORM.MARGIN_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.MARGIN_PERC, "Please input a valid percentage value for % of Margin!");
            document.MAINFORM.MARGIN_PERC.value = '';
            return false;
        } else if (document.MAINFORM.FLAT_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FLAT_RT, "Please input a valid percentage value for Flat Rate!");
            document.MAINFORM.FLAT_RT.value = '';
            return false;
        } else if (document.MAINFORM.SPRD_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.SPRD_RT, "Please input a valid percentage value for Spread Rate!");
            document.MAINFORM.SPRD_RT.value = '';
            return false;
        } else if (document.MAINFORM.FEE_RT_PERC.value > 50) {
            SYS_CheckError(document.MAINFORM.FEE_RT_PERC, "Fee Rate should not bigger than 50!");
            document.MAINFORM.FEE_RT_PERC.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_addItemOnchange = function(keyName) {
    try {

        SYF_CNTR_Check_fund_tp_to();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_deleteItemOnchange = function(keyName) {
    try {

        SYF_CNTR_Check_fund_tp_to();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_check_BASE_RT_TP = function() {
    try {

        if (document.MAINFORM.BASE_RT_TP.value == 'FR') {
            SYT_ChangeFldClass(document.MAINFORM.FLAT_RT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FLAT_RT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_check_CHG_TP = function() {
    try {

        if (document.MAINFORM.CHG_TP.value == 'T') {
            SYT_ChangeFldClass(document.MAINFORM.FEE_RT_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FEE_RT_PERC, 'P');
            document.MAINFORM.FEE_RT_PERC.value = '';
        } else if (document.MAINFORM.CHG_TP.value == 'P') {
            SYT_ChangeFldClass(document.MAINFORM.FEE_RT_PERC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FEE_RT_AMT, 'P');
            document.MAINFORM.FEE_RT_AMT.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FEE_RT_PERC, 'P');
            document.MAINFORM.FEE_RT_PERC.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FEE_RT_AMT, 'P');
            document.MAINFORM.FEE_RT_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_Check_DO_CCY = function() {
    try {

        var doObj; // Utility Auto Fix Comments
        doObj = SYS_getDoByXpath("EligibleCollItem");
        doObj.setColumnValuesByField("CLTR_CCY", document.MAINFORM.LMT_CCY.value);
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_CLTR_ID_afteredit = function(ed, record) {
    try {

        var args; // Utility Auto Fix Comments
        var config1;
        args = config1["fields"]["CLTR_ID"]["editor"];
        args["AJAX_MODE"] = false;
        args["editinfo"] = ed;
        DoFrame.getDoCUBK(args);
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var isRate = Chk_FEE_RT_AMT();

        if (isRate) {
            isRate = Chk_FEE_RT_PERC();
        }
        return isRate;
        return true;
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_Chk_FEE_RT_AMT = function() {
    try {

        if (document.MAINFORM.CHG_TP.value == 'T' && document.MAINFORM.FEE_RT_AMT.value <= 0) {
            SYS_CheckError(document.MAINFORM.FEE_RT_AMT, 'Please input a Transaction based Fee Rate amount!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_Chk_FEE_RT_PERC = function() {
    try {

        if (document.MAINFORM.CHG_TP.value == 'T' && document.MAINFORM.FEE_RT_PERC.value <= 0) {
            SYS_CheckError(document.MAINFORM.FEE_RT_PERC, 'Please input a Percentage Based Fee Rate (%)!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.BUSI_UNIT.value = SYS_BUSI_UNIT;
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.OPER_ID.value = SYS_USER_ID;
        SYF_CNTR_check_CHG_TP();
        SYF_CNTR_check_VAL_REL_FLG();
        document.MAINFORM.CNTR_STATUS.value = 'A';
        SYF_CNTR_check_BASE_RT_TP();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.SYF_CNTR_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S('Get_RegulatoryDO', "N", false, '', "WarehouseRgltAuth");
        SYS_GetDataForDO_S('Get_CollateralDO', "N", false, '', "EligibleCollItem");
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYS_disableButton('WarehouseRgltAuth', 'addrecordbutton');
            SYS_disableButton('EligibleCollItem', 'addrecordbutton');
        }
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.FLD_CNTR_CUST_ID_onchange = function(event) {
    try {
        SYF_CNTR_Get_Applicant();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.FLD_CNTR_CUST_NM_onchange = function(event) {
    try {
        SYF_CNTR_Get_Applicant();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.FLD_CNTR_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}

csFuncLevelProto.FLD_CNTR_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_CNTR_Edit Service Agreement.js", e);
    }
}