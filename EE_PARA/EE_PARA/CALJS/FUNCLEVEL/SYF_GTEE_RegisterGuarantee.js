var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_GTEE_Cal_LIAB_AMT();
        //SYM_GTEE_CCY_AMT_LIAB();
        SYT_CLERK_ID();
        SYT_LIAB_VOUCHER();
        //JACK 0921 GTEE
        //Cal_CASH_COV_BAL_TXCCY();
        //Cal_CASH_COV_BAL();
        if(document.MAINFORM.SAME_AS_APPL_FLG.value=='ACTP'){
        	document.MAINFORM.TEMP_INDEMN_NM.value = document.MAINFORM.INDEMN_NM.value;
        	document.MAINFORM.TEMP_INDEMN_ADD1.value = document.MAINFORM.INDEMN_ADD1.value;
        	document.MAINFORM.TEMP_INDEMN_ADD2.value = document.MAINFORM.INDEMN_ADD2.value;
        	document.MAINFORM.TEMP_INDEMN_ADD3.value = document.MAINFORM.INDEMN_ADD3.value;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_GTEE_CHK_ADV_BK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('GTEE', "SYM_GTEE_setRef");
        document.MAINFORM.GTEE_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.SEND_TO_REF.value = 'NONREF';
        document.MAINFORM.BASE_CCY.value = SYS_LOCAL_CCY; //add by amy wei in 2011.5.27
        SYM_GTEE_BASE_CLY_BAL(); //add by amy wei in 2011.5.27
        SYM_GTEE_BASE_LCY(); //add by amy wei in 2011.5.27

        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_MATURITY_DT();

        document.MAINFORM.FORM_OF_GTEE.value = 'Outward';
        //Add by Jack on 20120913 for SMBC Workshop
        //LoadBasicValue();
        //JACK GTEE 0917
        //Cal_R_PARTY_CNTY();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_GOVERN_LAW = function() {
    try {
        if (document.MAINFORM.GOVERN_LAW_CNTY_CODE.value != '') {
            document.MAINFORM.GOVERN_LAW.value = document.MAINFORM.GOVERN_LAW_CNTY_CODE.value + '/' + document.MAINFORM.TEMP_GOVERN_LAW.value;
        } else {
            document.MAINFORM.GOVERN_LAW.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_CAL_GOVERN_LAW", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_ADV_BK = function() {
    try {
        if (document.MAINFORM.SW_FORM.value == 'MT760') {
            if (document.MAINFORM.ADV_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_NM.value != '') {
                alert("If field 57a is present,then field 56a must also be present for MT760!");
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_CHK_ADV_BK", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal24E = function() {
    try {
        var code = document.MAINFORM.DELIV_OF_ORIG_CODE.value;
        if (code == 'OTHR' || code == 'COUR') {
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'M');
        } else {
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_Cal24E", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Advice_tab_TAG20 = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_Cal_Advice_tab_TAG20", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Confirm_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU' && document.MAINFORM.FORM_OF_UNDERTAKING.value == 'STBY') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'O');
        } else if (document.MAINFORM.FORM_OF_UNDERTAKING.value == 'DGAR') {
            document.MAINFORM.CONF_INSTR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
            document.MAINFORM.AVAL_WT_BK_NM.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
            document.MAINFORM.AVAL_WT_BK_ID.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_Cal_Confirm_FLG", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_Cal_GTEE_BAL", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_SameASApplicant = function() {
	try {
		if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {
			document.MAINFORM.DOCS_PRESENTED_BY.value = document.MAINFORM.APPL_CUST_BK.value; 
			document.MAINFORM.INDEMN_ID.value = document.MAINFORM.APPL_ID.value;
			document.MAINFORM.INDEMN_NM.value = document.MAINFORM.APPL_NM.value;
			document.MAINFORM.INDEMN_ADD1.value = document.MAINFORM.APPL_ADD1.value;
			document.MAINFORM.INDEMN_ADD2.value = document.MAINFORM.APPL_ADD2.value;
			document.MAINFORM.INDEMN_ADD3.value = document.MAINFORM.APPL_ADD3.value;
			document.MAINFORM.INDEMN_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
			document.MAINFORM.INDEMN_CORR_MED.value = document.MAINFORM.APPL_CORR_MED1.value;
			document.MAINFORM.INDEMN_FAX.value = document.MAINFORM.APPL_FAX_NO_1.value;
			document.MAINFORM.INDEMN_EMAIL.value = document.MAINFORM.APPL_EMAIL_1.value;
			document.MAINFORM.INDEMN_SW_TAG.value = document.MAINFORM.APPL_SW_TAG.value; 
			document.MAINFORM.INDEMN_SW_ADD.value = document.MAINFORM.APPL_SW_ADD.value;
			document.MAINFORM.INDEMN_REF.value = document.MAINFORM.APPL_REF.value;
			
		}
		
	} catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_N90_REF_20 = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_Cal_TEMP_N90_REF_20", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_N90_REF_21 = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SEND_TO_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_Cal_TEMP_N90_REF_21", e);
    }
}

csFuncLevelProto.SYF_GTEE_ChangeField = function() {
    try {
        FLD_GTEE_DIARY_NARRATIVE_onchange();
        FLD_GTEE_CONF_INSTR_onchange();
        FLD_GTEE_EXPIRY_TYPE_onchange();
        FLD_GTEE_PURP_OF_MESS_onchange();
        FLD_GTEE_AUTO_EXTEN_PERIOD_onchange();
        FLD_GTEE_DELIVERY_TO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_ChangeField", e);
    }
}

csFuncLevelProto.SYF_GTEE_ISSUE_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length !== 11 && document.MAINFORM.ISSUE_BK_SW_ADD.value.length != 8) {
            alert("Incorrect format: Length less than 11.");
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
        }
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_ISSUE_BK_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_GTEE_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*SYF_GTEE_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_GTEE_MPO_SAME_AS_APPL_FLG = function() {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {            
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_REF, 'P');
        } else {           
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*editRecordCheck", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYM_GTEE_MPO_APPL_CORR_MED1();
        SYM_GTEE_MPO_BENE_CORR_MED();
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
        SYM_GTEE_APLB_RULE();
        SYT_ShowBlankRow('INDE', 1);
        SYT_Cal_C_TRANS_CODE();
        SYF_GTEE_Cal_TEMP_N90_REF_20();
        SYF_GTEE_Cal_TEMP_N90_REF_21();
        lbi_LG_IssueParty_InitFldClass();
        SYM_GTEE_Cal_ADD_BUTTON();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
        SYM_GTEE_Cal_FXD_EXPIRY();
        SYM_GTEE_MPO_COUNTR_GTEE();
        SYM_GTEE_MPO_SW_FORM();
        //EEHtml.getElementById('attachment').style.display = 'none';
        //SYT_DisableDiv('attachment');
        SYF_GTEE_ChangeField();
        FLD_GTEE_SW_FORM_onchange();
        // FLD_GTEE_SAME_AS_APPL_FLG_onchange();
        SYF_GTEE_MPO_SAME_AS_APPL_FLG();
        SYF_GTEE_Cal24E();
        SYT_ChangeFldClass(document.MAINFORM.BENE_ACC_NO, 'M');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CORR_MED.value == "SWIFT") {
            //swift
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.ADV_BK_CORR_MED.value == "Mail") {
            //Mail
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
        } else {
            //none
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == "SWIFT") {
            //swift
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == "Mail") {
            //mail
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
        } else {
            //none
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_NM.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value == '' && document.MAINFORM.ADV_THU_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APLB_RULE_onchange = function(event) {
    try {
        SYM_GTEE_APLB_RULE();
        document.MAINFORM.TEMP_APLB_CODE.value = '/' + document.MAINFORM.APLB_RULE.value + '/';
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APLB_RULE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_BANK_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_CORR_MED1_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else if (document.MAINFORM.APPL_ID.value == document.MAINFORM.BENE_ID.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.APPL_ID.value = '';
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else {
            SYM_GTEE_APPL_ID_BTN();
        }
        //JACK 0918 GTEE
        //SYM_GTEE_Set_Risk_Party_Info();
        //document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
        SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD2_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD3_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_FAX_NO_1_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_EMAIL_1_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_TAG_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
        SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_REF_onchange = function(event) {
    try {
		SYF_GTEE_Cal_SameASApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == '' && document.MAINFORM.AUTO_EXTEN_CODE.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'O');
        }

        if (document.MAINFORM.AUTO_EXTEN_CODE.value == 'ONEY') {
            document.MAINFORM.AUTO_EXTEN_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P');
        } else if (document.MAINFORM.AUTO_EXTEN_CODE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AUTO_EXTEN_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_PERIOD_onchange = function(event) {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == '' && document.MAINFORM.AUTO_EXTEN_CODE.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AUTO_EXTEN_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_RENEW_onchange = function(event) {
    try {
        SYM_GTEE_Cal_FXD_EXPIRY();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AUTO_RENEW_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_SW_TAG_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AVAL_WT_BK_SW_TAG_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AVAL_WT_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else if (document.MAINFORM.APPL_ID.value == document.MAINFORM.BENE_ID.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.BENE_ID.value = '';
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else {
            SYM_GTEE_BENE_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.APPL_NM.value == document.MAINFORM.BENE_NM.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.BENE_ID.value = '';
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else {
            SYM_GTEE_BENE_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_CONF_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_CONF_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_INSTR_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.CONF_INSTR.value == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'P');
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            document.MAINFORM.CONF_BK_ID.value = '';
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_CONF_INSTR_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONTR_GTEE_EXP_onchange = function(event) {
    try {
        //JACK 0919 GTEE
        SYM_GTEE_MPO_R_COLLAT_DTLS();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_CONTR_GTEE_EXP_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONTR_GTEE_REF_onchange = function(event) {
    try {
        //JACK 0919 GTEE
        SYM_GTEE_MPO_R_COLLAT_DTLS();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_CONTR_GTEE_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_GTEE_MPO_COUNTR_GTEE();
        //JACK 0919 GTEE
        //SYM_GTEE_MPO_R_COLLAT_REQ();
        //SYM_GTEE_MPO_R_COLLAT_DTLS();
        //EEHtml.fireEvent(document.MAINFORM.R_COLLAT_REQ, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_COUNTR_GTEE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            //document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
            document.MAINFORM.DELIVERY_TO_CODE.value = document.MAINFORM.DELIVERY_TO.value;
            if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_DELIVERY_TO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIV_OF_ORIG_CODE_onchange = function(event) {
    try {
        SYF_GTEE_Cal24E();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_DELIV_OF_ORIG_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_DOCS_PRESENTED_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_GTEE_Cal_MATURITY_DT();
        if (!SYS_Day1MustbeLaterThanDay2(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.REG_DT.name)) {
            document.MAINFORM.EXPIRY_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_EXPIRY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_TYPE_onchange = function(event) {
    try {
        var type = document.MAINFORM.EXPIRY_TYPE.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        } else if (type == 'OPEN') {
            document.MAINFORM.EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
            document.MAINFORM.AUTO_EXTEN_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'P');
            document.MAINFORM.AUTO_EXTEN_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P');
        }
        FLD_GTEE_AUTO_EXTEN_PERIOD_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_EXPIRY_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_FORM_OF_UNDERTAKING_onchange = function(event) {
    try {
        SYF_GTEE_Cal_Confirm_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_FORM_OF_UNDERTAKING_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_GOVERN_LAW_CNTY_CODE_onchange = function(event) {
    try {
        SYF_GTEE_CAL_GOVERN_LAW();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_GOVERN_LAW_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.GTEE_AMT.value < 0) {
            document.MAINFORM.GTEE_AMT.value = 0;
        }


        SYF_GTEE_Cal_GTEE_BAL();
        SYM_GTEE_BASE_CLY_BAL(); //add by amy wei in 2011.05.27
        SYM_GTEE_BASE_LCY(); //add by amy wei in 2011.05.27
        //
        //    JCK 0918 GTEE
        //    Cal_Transmit_Base_Amount();
        //    Cal_CASH_COV_AMT_TXCCY_1();
        //    Cal_CASH_COV_BAL_TXCCY();
        //    JACK 0918 GTEE---222
        //    Cal_CASH_COV_AMT_TXCCY();
        //    document.MAINFORM.R_RISK_AMT.fireEvent('onchange');
        //    document.MAINFORM.CASH_COV_AMT_TXCCY.fireEvent('onchange');
        //
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_GTEE_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_CCY_onchange = function(event) {
    try {
        SYM_GTEE_BASE_CLY_BAL(); //add by amy wei in 2011.05.27
        SYM_GTEE_BASE_LCY(); //add by amy wei in 2011.05.27
        //JACK 0918 GTEE
        //
        //    Cal_CASH_COV_TXCCY();
        //    Cal_Transmit_Base_Amount();
        //    document.MAINFORM.R_RISK_AMT.fireEvent('onchange');
        //    document.MAINFORM.R_RISK_CCY.fireEvent('onchange');
        //    document.MAINFORM.R_RISK_LMT_CCY.fireEvent('onchange');
        //    document.MAINFORM.CASH_COV_AMT_TXCCY.fireEvent('onchange');
        //    document.MAINFORM.CASH_COV_TXCCY.fireEvent('onchange');
        //    document.MAINFORM.CASH_COV_CCY.fireEvent('onchange');
        //
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_GTEE_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_BANK_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        //
        //    if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
        //    JACK 0919 GTEE
        //    SYM_GTEE_Set_Risk_Party_Info();
        //    document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
        //    }
        //
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ISSUE_BK_ID();
        SYF_GTEE_ISSUE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG();
        SYF_GTEE_ISSUE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ISSUE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_PURP_OF_MESS_onchange = function(event) {
    try {
        SYF_GTEE_Cal_Confirm_FLG();
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            document.MAINFORM.TRANS_INDICATOR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'P');
            document.MAINFORM.DELIV_OF_ORIG_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'P');
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
            document.MAINFORM.DELIVERY_TO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
            document.MAINFORM.BENE_CUST_BK.value = 'Bank';
            document.MAINFORM.SAME_AS_APPL_FLG.value = 'ACTP';
        } else if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU') {
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
            document.MAINFORM.BENE_CUST_BK.value = 'Customer';
            document.MAINFORM.APPL_CUST_BK.value = 'Customer';
            document.MAINFORM.SAME_AS_APPL_FLG.value = 'OWNB';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
            document.MAINFORM.BENE_CUST_BK.value = 'Customer';
        }
        FLD_GTEE_BENE_CUST_BK_onchange();
        FLD_GTEE_APPL_CUST_BK_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_PURP_OF_MESS_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {
            document.MAINFORM.DOCS_PRESENTED_BY.value = document.MAINFORM.APPL_CUST_BK.value;
            document.MAINFORM.INDEMN_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.INDEMN_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.INDEMN_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.INDEMN_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.INDEMN_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            document.MAINFORM.INDEMN_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
            document.MAINFORM.INDEMN_CORR_MED.value = document.MAINFORM.APPL_CORR_MED1.value;
            document.MAINFORM.INDEMN_FAX.value = document.MAINFORM.APPL_FAX_NO_1.value;
            document.MAINFORM.INDEMN_EMAIL.value = document.MAINFORM.APPL_EMAIL_1.value;
            document.MAINFORM.INDEMN_SW_TAG.value = document.MAINFORM.APPL_SW_TAG.value;
            document.MAINFORM.INDEMN_SW_ADD.value = document.MAINFORM.APPL_SW_ADD.value;
            document.MAINFORM.INDEMN_REF.value = document.MAINFORM.APPL_REF.value;
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_REF, 'P');
        } else {
            SYM_GTEE_Cal_Clear_Indemn();
            document.MAINFORM.DOCS_PRESENTED_BY.value = "";
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SAME_AS_APPL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_REF_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_SW_FORM_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SW_FORM();
        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SW_FORM_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_GOVERN_LAW_onchange = function(event) {
    try {
        SYF_GTEE_CAL_GOVERN_LAW();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_TEMP_GOVERN_LAW_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_TMPL_BTN_onclick = function() {
    try {
        SYS_InqCUBK('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_THU_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPLBANK_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_AVAL_WT_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENEFICIARYBANK_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_CONF_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_CONF_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ClauseButton_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton2_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS_79');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ClauseButton2_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ClauseButton3_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMNBANK_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ISSUE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_ISSUE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_SND_TO_ID_BANK_BTN_onclick", e);
    }
}


csFuncLevelProto.FLD_GTEE_TMPL_BTN_onclick = function() {
    try {
        //SYS_InqCUBK('GTEE_DETAILS');
        SYS_InqTemplate('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        return SYS_InsertClause('CHARGES');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterGuarantee.js*FLD_GTEE_view_1_onclick", e);
    }
}