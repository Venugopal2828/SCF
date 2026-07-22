var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_STAT_CAL_CUST_TYPE();
		 
	    var rej = document.MAINFORM.REJ_REASON.value;
         if(rej != ''){
            document.MAINFORM.REJECTION_FLAG.value = "NO";
			document.MAINFORM.EE_CUSTOMER.value = "YES";
         }
		 else{
			 document.MAINFORM.REJECTION_FLAG.value = "";
			 document.MAINFORM.EE_CUSTOMER.value = "NO";
		 }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        /*if (!SYF_STAT_CHK_PARTY_NM()) {
            return false;
        }*/
        if (!SYF_STAT_CHK_FA_IF_ID()) {
            return false;
        }
       /*  if (SYM_STAT_MAIN_VDO_PARTY_CHK() == false) {
            return false;
        } */

        document.MAINFORM.CUST_REF.value = document.MAINFORM.FA_CUST_REG_NO.value;    
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.RECORDER_TYPE.value = 'Customer';
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.IS_ONBOARDED.value = 'YES';
        document.MAINFORM.REJECTION_FLAG.value = 'NO';
        
       
		var CMainRef = document.MAINFORM.C_MAIN_REF.value;  
        var Agreementref=SYS_GetTableData_S("EXIMTRX.FADA_COUNTER", "FA_COUNTER_ID='" + CMainRef + "'", "C_MAIN_REF;FA_BUSI_TYPE;FA_LMT_DUE_DT;FA_LMT_CCY", "SIGN_AGRMT_REF;FA_BUSI_TYPE;FA_LMT_DUE_DT;FA_LMT_CCY", true);	 
		var fabusitype = document.MAINFORM.FA_BUSI_TYPE.value; 
 

		document.MAINFORM.FA_CUST_FLAG.value = 1;

		if (fabusitype === 'PF' || fabusitype === 'DD') {
			document.MAINFORM.FA_CUST_TYPE.value = 2;
		} else {
			document.MAINFORM.FA_CUST_TYPE.value = 1;
		}
        //Add by jane at 2010-01-29
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');

        SYF_STAT_Change_FA_INSU_COMP_FLAG();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        //Add by jane at 2010-01-29
		//SYM_STAT_AddCPDo();
       // SYM_STAT_GetRef();
        //SYM_STAT_Shown_Factor_Tab();
        //SYM_STAT_IS_FACTOR_FLAG();
		
	  if(document.MAINFORM.REJ_REASON.value ){
		  document.MAINFORM.IsAgreeGroup1.checked = true;
		  acpt_rej(true);
	  }
	  else {
		  document.MAINFORM.IsAgreeGroup.checked = true;
		  acpt_rej(false);
	  }
	  
	  
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_STAT_CAL_CUST_TYPE = function() {
    try {
        var CUST_FLG = document.MAINFORM.FA_CUST_FLAG.value;
        var CE_CUSTOMER = document.MAINFORM.CE_CUSTOMER.value;
        if (CUST_FLG == '1' && CE_CUSTOMER == 'No') {
            document.MAINFORM.CUST_TYPE.value = 'T2';
        } else if (CUST_FLG == '1' && CE_CUSTOMER == 'Yes') {
            document.MAINFORM.CUST_TYPE.value = 'T1';
        } else if (CUST_FLG == '2') {
            document.MAINFORM.CUST_TYPE.value = 'T3';
        }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*SYF_STAT_CAL_CUST_TYPE", e);
    }
}

csFuncLevelProto.SYF_STAT_CHK_FA_IF_ID = function() {
    try {
        if (document.MAINFORM.FA_INSU_COMP_FLAG.value == "1" && document.MAINFORM.FA_IF_ID.value == "") {
            alert('Please choose Insurance CO. Code!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*SYF_STAT_CHK_FA_IF_ID", e);
    }
}

csFuncLevelProto.SYF_STAT_CHK_PARTY_NM = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_STAT_AddNewCustomer1step_SYF_STAT_CHK_PARTY_NM_0', '1', null, false);
        if (document.MAINFORM.IS_FACTOR_FLAG.value == "YES") {
            if (document.MAINFORM.CHK_PARTY_NM.value > 0) {
                alert('A customer name has already been registered!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*SYF_STAT_CHK_PARTY_NM", e);
    }
}

csFuncLevelProto.SYF_STAT_Change_FA_INSU_COMP_FLAG = function() {
    try {
        if (document.MAINFORM.FA_INSU_COMP_FLAG.value == "2") {
            document.MAINFORM.FA_IF_ID.value = '';
            document.MAINFORM.FA_IF_NM.value = '';
            SYT_DisableField(document.MAINFORM.button);
        } else {
            SYT_EnableField(document.MAINFORM.button);
        }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*SYF_STAT_Change_FA_INSU_COMP_FLAG", e);
    }
}
/*
csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*editRecordCheck", e);
    }
}
*/

csFuncLevelProto.FLD_STAT_ARM_ID_onchange = function(event) {
    try {
        SYM_STAT_ARM_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_ARM_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_ACCEPT_REJECT_onchange = function(event) {
    try {
        var acpt_rej = document.MAINFORM.ACCEPT_REJECT.value;
		if(acpt_rej == "ACCEPT"){				
			SYT_EnableDivClass("A_div");
			SYT_EnableDivClass("B_div");
			SYT_EnableDivClass("D_div");
			SYT_EnableDivClass("E_div");
			SYT_EnableDivClass("I_div");
			SYT_EnableDivClass("F_div");
			SYT_EnableDivClass("T_div");
			SYT_ChangeFldClass(document.MAINFORM.REJ_REASON, "P");
			document.MAINFORM.REJ_REASON.value = '';
		}else{
			SYT_DisableDivClass("A_div");
			SYT_DisableDivClass("B_div");
			SYT_DisableDivClass("D_div");
			SYT_DisableDivClass("E_div");
			SYT_DisableDivClass("I_div");
			SYT_DisableDivClass("F_div");
			SYT_DisableDivClass("T_div");
			SYT_ChangeFldClass(document.MAINFORM.ACCEPT_REJECT, "M");
			SYT_ChangeFldClass(document.MAINFORM.REJ_REASON, "M");
		}
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_ACCEPT_REJECT_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_CUST_REG_NO_onchange = function(event) {
    try {
        SYS_GetTableDataByRule_S('FA_CUST_REG_NO', '1', null, false);
        if (document.MAINFORM.TEMP_CHAR1.value > 0) {
            alert('A same Customer Registration Number has already been registered!');
            document.MAINFORM.FA_CUST_REG_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_FA_CUST_REG_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_IF_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_IF_ID.value == '') {
            document.MAINFORM.FA_IF_NM.value = '';
        } else {
            SYS_GetCUBK('INSU_COMP', 'FA_IF_ID');
        }
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_FA_IF_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_INSU_COMP_FLAG_onchange = function(event) {
    try {
        SYF_STAT_Change_FA_INSU_COMP_FLAG();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_FA_INSU_COMP_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_PARENT_COMP_onchange = function(event) {
    try {
        SYM_STAT_FA_PARENT_COMP();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_FA_PARENT_COMP_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_INSU_POLICY_NO_onchange = function(event) {
    try {
        SYM_STAT_INS_POLICY_NUM();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_INSU_POLICY_NO_onchange", e);
    }
}

/*
csFuncLevelProto.FLD_STAT_IS_FACTOR_FLAG_onchange = function(event) {
    try {
        SYM_STAT_Shown_Factor_Tab();
        SYM_STAT_IS_FACTOR_FLAG();
        SYM_STAT_GetEDIRef();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_IS_FACTOR_FLAG_onchange", e);
    }
}
*/

csFuncLevelProto.FLD_STAT_TEAM_ID_onchange = function(event) {
    try {
        SYM_STAT_TEAM_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_TEAM_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_button_onclick = function(event) {
    try {
        SYS_InqCUBK('INSU_COMP');
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_button_onclick", e);
    }
}

csFuncLevelProto.FLD_STAT_button2_onclick = function(event) {
    try {
        SYS_InqCUBK('FA_PARENT_COMP_NEW');
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_button2_onclick", e);
    }
}



csFuncLevelProto.FLD_STAT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*FLD_STAT_view_1_onclick", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
       
            SYS_GetDataForDO_S("PostAddress", "N", false, '', "PostAddress");
            SYS_GetDataForDO_S("SwFMTAddress", "N", false, '', "SwFMTAddress");
        
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*LoadDODataOnInit", e);
    }
}



/*
csFuncLevelProto.FLD_STAT_FA_CUST_DATA_onchange = function(event) {
    try {
        
         SYS_GetCUBK('FA_CUST_DATA_BTN', 'FA_CUST_DATA_BTN');
       
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*SYF_STAT_FA_CUST_DATA_BTN", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_CUST_DATA_BTN_onclick = function(event) {
    try {
        
         SYS_InqCUBK('FA_CUST_DATA_BTN', 'FA_CUST_DATA_BTN');
       
    } catch (e) {
        DisExcpt("SYF_STAT_CPOnboard.js*SYF_STAT_FA_CUST_DATA_BTN", e);
    }
}
*/