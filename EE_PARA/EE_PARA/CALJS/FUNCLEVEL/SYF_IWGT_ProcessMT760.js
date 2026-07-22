var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CLERK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_IWGT_Check_EXPIRY_DT()) {
            return false;
        }

        if (!SYM_IWGT_Check_APPL_BENE()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.GTEE_BAL.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.CURRNT_STATUS.value = 'ProcessMT760';
        document.MAINFORM.NXT_STATUS.value = 'IssueInwardGuarantee';
        document.MAINFORM.CLS_FLG.value = 'NO';
        //document.MAINFORM.ISSUE_BY.value = 'SWIFT';
        SYF_IWGT_Cal_C_MAIN_REF();
        if(document.MAINFORM.APPL_SW_ADD.value!=''){
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        }else{
        document.MAINFORM.APPL_CUST_BK.value = 'Customer';	
        }
        document.MAINFORM.SW_FORM.value = 'MT760';
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
        document.MAINFORM.BENE_CUST_BK.value = 'Bank';
      }else{
      	document.MAINFORM.BENE_CUST_BK.value = 'Customer';
      }
      document.MAINFORM.DELIVERY_TO.value = document.MAINFORM.DELIVERY_TO_CODE.value;
      document.MAINFORM.DELIVERY_TO_LOCAL.value = document.MAINFORM.DELIVERY_TO_CODE_LOCAL.value;
      var lines = document.MAINFORM.GOVERN_LAW.value.split('\n');
      document.MAINFORM.TEMP_GOVERN_LAW.value = lines[0];
      var line  = document.MAINFORM.GOVERN_LAW_LOCAL.value.split('\n');
      document.MAINFORM.TEMP_GOVERN_LAW_LOCAL.value = line[0];
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_IWGT_APLB_RULE();
        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);
        //SYM_IWGT_Cal_FURTHER_IDENTITY_OnChange();
        SYF_IWGT_MPO_Init_Fields();
        lbi_IWGT_BENE_GTEE_IntFieldClass();
        SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED();
        SYM_IWGT_Cal_Counter_Guarantee_Information();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
        //document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        SYM_IWGT_MPO_RCV_FM_BK_NM();
        //SYF_IWGT_MPO_CLOB_FIELDS();
        FLD_IWGT_SW_FORM_onchange();
        SYF_IWGT_PURP_OF_MESS();
        FLD_IWGT_EXPIRY_TYPE_onchange();
        FLD_IWGT_EXPIRY_TYPE_LOCAL_onchange();
        FLD_IWGT_AUTO_EXTEN_PERIOD_onchange();
        FLD_IWGT_AUTO_EXTEN_CODE_onchange();
        FLD_IWGT_AUTO_EXTEN_PERIOD_LOCAL_onchange();
        FLD_IWGT_AUTO_EXTEN_CODE_LOCAL_onchange();
        EEHtml.getElementById('I').style.display = 'none';
            SYT_DisableDiv('I_div');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_C_MAIN_REF = function() {
    try {
        /* For Test Team testing   2024.01.16
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value.substr(0, 10) + " ";
        */
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*SYF_IWGT_Cal_C_MAIN_REF", e);
    }
}

csFuncLevelProto.SYF_IWGT_PURP_OF_MESS = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            EEHtml.getElementById('C').style.display = '';
            SYT_EnableDivClass('C_div');
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
        } else {
            EEHtml.getElementById('C').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('C_div');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_Init_Fields = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'M');
        SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'M');
        SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'M');
        //SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
        //SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*SYF_IWGT_MPO_Init_Fields", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_TYPE_onchange = function() { 
    try { 
        var type = document.MAINFORM.EXPIRY_TYPE.value; 
        if (type == 'FIXD') { 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M'); 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P'); 
        } else if (type == 'COND') { 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'O'); 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'M'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P'); 
        } else if (type == 'OPEN') {  
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'P'); 
 
        } 
    } catch (e) { 
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e); 
    } 
} 
 
csFuncLevelProto.FLD_IWGT_EXPIRY_TYPE_LOCAL_onchange = function() { 
    try { 
        var type = document.MAINFORM.EXPIRY_TYPE_LOCAL.value; 
        if (type == 'FIXD') { 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'M'); 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P'); 
        } else if (type == 'COND') { 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'O'); 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'M'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P'); 
        } else { 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'P'); 
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE_LOCAL, 'P'); 
        } 
    } catch (e) { 
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e); 
    } 
} 

csFuncLevelProto.FLD_IWGT_AUTO_EXTEN_PERIOD_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE.value == '') {
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
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AUTO_EXTEN_CODE_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE.value == '') {
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
        
         if (document.MAINFORM.AUTO_EXTEN_CODE.value == 'ONEY'){
        	document.MAINFORM.AUTO_EXTEN_PERIOD.value = '';
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P');
        }else if (document.MAINFORM.AUTO_EXTEN_CODE.value == 'OTHR'){
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'M');
        }else{
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AUTO_EXTEN_PERIOD_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AUTO_EXTEN_CODE_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'O');
        }
        
        if (document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == 'ONEY'){
        	document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value = '';
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'P');
        }else if (document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == 'OTHR'){
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'M');
        }else{
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*SYF_IWGT_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_TLX.value = '';
            document.MAINFORM.ADV_BK_NOTES.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APLB_RULE_onchange = function(event) {
    try {
        SYM_IWGT_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APLB_RULE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_CORR_MED1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_TAG_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_SW_TAG_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_onchange = function(event) {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.ASSET_ACNO.value)) == false) {
            document.MAINFORM.ASSET_ACNO.value = '';
        }
        if (SYM_IWGT_CheckAcno() == false) {
            document.MAINFORM.ASSET_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ASSET_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_LOCAL_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID_LOCAL', 'AVAL_WT_BK_ID_LOCAL');
        SYM_IWGT_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_NM_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_NM_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_SW_ADD_LOCAL_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value = document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value + "XXX";
            }
        }
        SYM_IWGT_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_SW_ADD_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Bene_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim") {
            var obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                SYM_IWGT_Chg_Screen_local();
                SYM_IWGT_Chg_Calculate_POST();
                SYM_IWGT_Chg_Calculate_SWIFT();
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_CAL_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_TAG_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_SW_TAG_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_CONF_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_CONF_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_CONF_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_COUNTR_GTEE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
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
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_DELIVERY_TO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO_AMD_CODE.value + '/';
            if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_EXPIRY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_FURTHER_IDENTITY_onchange = function(event) {
    try {
        //SYM_IWGT_Cal_FURTHER_IDENTITY_OnChange();
        SYM_IWGT_MPO_RCV_FM_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_FURTHER_IDENTITY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_AMT_onchange = function(event) {
    try {
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_GTEE_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_BAL_onchange = function(event) {
    try {
        SYF_IWGT_GTEE_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_GTEE_BAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function(event) {
    try {
        SYM_IWGT_Cal_GTEE_LCY_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_GTEE_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_CAL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_INDEMN_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_INWARD_RCV_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ID_LOCAL_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_ID_LOCAL.value == "") {
            document.MAINFORM.ISSUE_BK_NM_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = '';
            SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL(); //added
            SYM_IWGT_CAL_ISSUE_BK_ID_back_LOCAL();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID_LOCAL', 'ISSUE_BK_ID_LOCAL', 'SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL', 'SYM_IWGT_CAL_ISSUE_BK_ID_back_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ISSUE_BK_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_SW_ADD_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL();
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ISSUE_BK_SW_ADD_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_LIAB_ACNO_onchange = function(event) {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.LIAB_ACNO.value)) == false) {
            document.MAINFORM.LIAB_ACNO.value = '';
        }
        if (SYM_IWGT_CheckAcno() == false) {
            document.MAINFORM.LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_LIAB_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_NEW_Bene_All();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_NEW_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_NEW_BENE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
        SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_NEW_BENE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_RCV_FM_BK_CORR_MED();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee" || SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {

            SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_EMAIL_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.RCV_FM_BK_EMAIL.value)) == true) {
            document.MAINFORM.RCV_FM_BK_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_EMAIL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_TAG_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_SW_TAG_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
            SYM_IWGT_MPO_AMD_DTL_OUT767();

        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee") {
            SYM_IWGT_MPO_X760_DETL_77C();
        }
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SW_FORM_onchange = function(event) {
    try {
        if (document.MAINFORM.SW_FORM.value == 'MT760') {
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton, 'M');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
            document.MAINFORM.GTEE_DETAILS_79.value = "";
            document.MAINFORM.NARR_MAIL.value = "";
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'P');
            document.MAINFORM.BK_TO_BK_INFO.value = '';
            document.MAINFORM.GTEE_DETAILS.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton, 'P');
            if (document.MAINFORM.SW_FORM.value == "Mail") {
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
                document.MAINFORM.GTEE_DETAILS_79.value = "";
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
            } else if (document.MAINFORM.SW_FORM.value == " ") {
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
            } else {
                document.MAINFORM.NARR_MAIL.value = "";
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'M');
            }
        }
        if (document.MAINFORM.SW_FORM.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SIGNATURE, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SIGNATURE, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SW_FORM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_LOCAL_onclick = function(event) { 
    try { 
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_LOCAL', '1'); 
    } catch (e) { 
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THRU_BK_ID_BTN_LOCAL_onclick", e);
    } 
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_LOCAL_onclick = function(event) { 
    try { 
        SYS_InqCUBK_byCondition('ADV_THU_BK_ADD_LOCAL', '1'); 
    } catch (e) { 
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THU_BK_ADD_BTN_LOCAL_onclick", e);
    } 
} 

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
                                                                                                SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_AC_MRGN_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_ID_BTN_LOCAL_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_APPL_MAIL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
                                                                                                SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ASSET_ACNO_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD_BTN_LOCAL_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_ADD_BTN_LOCAL_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ID_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_AVAL_WT_BK_ID_BTN_LOCAL_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_IWGT_SQL_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_ID_BTN_LOCAL_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_BENE_MAIL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_CONF_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_IWGT_SQL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_INDEMN_ID_BTN_LOCAL_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_IWGT_SQL_ISSUE_BK_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_ISSUE_BK_ID_BTN_LOCAL_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_NEW_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        //SYM_IWGT_Cal_SEND_TO_onclick();
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_button1_onclick = function(event) { 
    try { 
        return SYS_InsertClause('CHARGES'); 
    } catch (e) { 
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_button1_onclick", e);
    } 
} 

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT760.js*FLD_IWGT_view_1_onclick", e);
    }
}