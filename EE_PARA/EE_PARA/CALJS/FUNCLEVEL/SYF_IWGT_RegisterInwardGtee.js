var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CLERK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo_S('IWGT', 'SYM_IWGT_setref');
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
        document.MAINFORM.REG_DT.value = SYS_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'RegisterInwardGuarantee';
        document.MAINFORM.NXT_STATUS.value = 'IssueInwardGuarantee';
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.ISSUE_BY.value = "Mail";
        SYF_IWGT_Cal_Temp_N90_REF_20();
        document.MAINFORM.APPL_CUST_BK.value = 'Customer';
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        onChangeDiary();
        SYT_ChangeFldClass(document.MAINFORM.APPL_CUST_BK, 'M');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CUST_BK, 'M');
        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);
        SYM_IWGT_APLB_RULE();
        IWGT_APPL_BRCH_GTEE();
        SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYM_IWGT_Cal_ADD_BUTTON();
        SYF_IWGT_MPO_CLOB_FIELDS_GTEE();
        SYM_IWGT_MPO_RCV_FM_BK_NM();
        SYF_IWGT_Cal_Temp_N90_REF_20();
        SYF_IWGT_Cal_Temp_N90_REF_21();
        SYM_IWGT_Cal_Counter_Guarantee_Information();
        SYM_IWGT_MPO_BENE_CORR_MED();
        /*SYM_IWGT_FURTHER_IDENTITY();  2020 no futher identify
    if(document.MAINFORM.FURTHER_IDENTITY.value!='REQUEST' && document.MAINFORM.MTHD_OF_ISS.value!='Advise'){
    	SYM_IWGT_Cal_FURTHER_IDENTITY_OnChange();
    }else{
    	if(document.MAINFORM.FURTHER_IDENTITY.value!='REQUEST'){
    		SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
    	}else{
    		SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'M');
    	}
    }*/
        SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'O');
        SYF_IWGT_MPO_FURTHER();
        SYF_IWGT_Risk_Show();
        SYF_IWGT_Cal_Confirm_FLG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Clear_GTEE_DETAILS = function() {
    try {
        /* commented for this field doesn't have SWIFT option 
        if(document.MAINFORM.ISSUE_BY.value == 'SWIFT')
        {
        	document.MAINFORM.GTEE_DETAILS_79.value = '';
        }
        else if(document.MAINFORM.ISSUE_BY.value == 'None')
        {
        	document.MAINFORM.GTEE_DETAILS_79.value = '';
        	document.MAINFORM.NON_STD_WORDNG.value= '';
        }
        else
        {
        	document.MAINFORM.NON_STD_WORDNG.value = '';
        }
        */
        if(document.MAINFORM.ISSUE_BY.value == 'SWIFT')
        {
        	document.MAINFORM.GTEE_DETAILS_79.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Risk_Show = function() {
    try {
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') {
            EEHtml.getElementById('G').style.display = '';
            SYT_EnableDivClass('G_div');
        } else {
            EEHtml.getElementById('G').style.display = 'none';
            SYT_DisableDivClass('G_div');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Temp_N90_REF_20 = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Temp_N90_REF_21 = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chk_INWARD_RCV_DT_REG_DT = function() {
    try {
        /*if (SYS_GetSubDays(document.MAINFORM.INWARD_RCV_DT.name, document.MAINFORM.REG_DT.name) > 0) {
                    SYS_CheckError(document.MAINFORM.INWARD_RCV_DT, "Issue Date should not be early than Transaction Date!");
                    document.MAINFORM.INWARD_RCV_DT.value = '';
                    return false;
                } else {
                    return true;
                }*/
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_GTEE_AMT = function() {
    try {
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Confirm_FLG = function() {
    try {
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue' && document.MAINFORM.GTEE_TYPE.value == 'Standby') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
        } else {
            document.MAINFORM.CONF_INSTR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_GroupIDChange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_CLOB_FIELDS_GTEE = function() {
    try {
        //Add by jane at 20090322 for bug2442
        /* commented for this field doesn't have SWIFT option 
    if(document.MAINFORM.ISSUE_BY.value == 'SWIFT')
    {
    	SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG,'M');
    	SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79,'P');

    }
    else if(document.MAINFORM.ISSUE_BY.value == 'None')
    {
    	SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79,'P');
    	SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG,'P');
    }
    else
    {
    	SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG,'P');
    	SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79,'M');
    }
    */
        if(document.MAINFORM.ISSUE_BY.value == 'SWIFT')
    {
    	SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79,'O');

    }else{
    	SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79,'M');
    }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_FURTHER = function() {
    try {
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APLB_RULE_onchange = function() {
    try {
        SYM_IWGT_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function() {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_EMAIL_1_onchange = function() {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.APPL_EMAIL_1.value)) == true) {

            document.MAINFORM.APPL_EMAIL_1.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_onchange = function() {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.ASSET_ACNO.value)) == false) {
            document.MAINFORM.ASSET_ACNO.value = '';
        }
        if (SYM_IWGT_CheckAcno() == false) {
            document.MAINFORM.ASSET_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_EMAIL_onchange = function() {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.BENE_EMAIL.value)) == true) {
            document.MAINFORM.BENE_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function() {
    try {
        var obj; // Utility Auto Fix Comments
        SYM_IWGT_Cal_Bene_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim") {
            obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                SYM_IWGT_Chg_Screen_local();
                SYM_IWGT_Chg_Calculate_POST();
                SYM_IWGT_Chg_Calculate_SWIFT();
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_onchange = function() {
    try {
        SYM_IWGT_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONTR_GTEE_EXP_onchange = function() {
    try {
        var days;
        days = SYS_GetSubDays('CONTR_GTEE_EXP', 'EXPIRY_DT');
        if (days < 0) {
            SYS_CheckError(document.MAINFORM.CONTR_GTEE_EXP, "Counter Guarantee Expiry Date  should be below Guarantee Expiry Date!");
            document.MAINFORM.CONTR_GTEE_EXP.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_COUNTR_GTEE_onchange = function() {
    try {
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_C_MAIN_REF_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_onchange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_AMT_onchange = function() {
    try {
        var Guarantee_Amount;
        Guarantee_Amount = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        if (Guarantee_Amount < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.GTEE_AMT.value = 0;
        }


        SYF_IWGT_GTEE_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function() {
    try {
        //Add by jane at 20090322 for balance format

        SYF_IWGT_GTEE_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_REF_NUM_onchange = function() {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.GTEE_REF_NUM.value)) == false) {

            document.MAINFORM.GTEE_REF_NUM.value = '';
        }

        SYF_IWGT_Cal_Temp_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function() {
    try {
        SYF_IWGT_Chk_INWARD_RCV_DT_REG_DT();
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_NM_onchange = function() {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.ISSUE_BK_NM.value)) == false) {

            document.MAINFORM.ISSUE_BK_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BY_onchange = function() {
    try {
        SYF_IWGT_MPO_CLOB_FIELDS_GTEE();
        SYF_IWGT_Cal_Clear_GTEE_DETAILS();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_LIAB_ACNO_onchange = function() {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.LIAB_ACNO.value)) == false) {
            document.MAINFORM.LIAB_ACNO.value = '';
        }
        if (SYM_IWGT_CheckAcno() == false) {
            document.MAINFORM.LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_MTHD_OF_ISS_onchange = function() {
    try {
        SYF_IWGT_MPO_FURTHER();
        SYF_IWGT_Risk_Show();
        SYF_IWGT_Cal_Confirm_FLG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_Bene_All();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
        SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_RCV_FM_BK_CORR_MED();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee" || SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {

            SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_EMAIL_onchange = function() {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.RCV_FM_BK_EMAIL.value)) == true) {

            document.MAINFORM.RCV_FM_BK_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.RCV_FM_BK_ID.value)) == false) {

            document.MAINFORM.RCV_FM_BK_ID.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.RCV_FM_BK_NM.value)) == false) {

            document.MAINFORM.RCV_FM_BK_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_REG_DT_onchange = function() {
    try {
        if (document.MAINFORM.REG_DT.value != SYS_BUSI_DATE) {
            alert("Transaction Date should be Current Date");
            document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        }
        SYF_IWGT_Chk_INWARD_RCV_DT_REG_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_EMAIL_onchange = function() {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.SEND_TO_EMAIL.value)) == true) {
            document.MAINFORM.SEND_TO_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
                SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
                SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function() {
    try {
        /*
        var SQL="C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY+ "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO',SQL);
        */
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        //SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_BTN_onclick = function() {
    try {
        //SYT_BankLookUp(event.currentTarget);
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ID', '1'); 
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button1_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button2_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button3_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button4_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button5_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button6_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardGtee.js", e);
    }
}