var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_Cal_CLM_CNTR = function() {
    try {

        var nCLM_CNTR = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        document.MAINFORM.CLM_CNTR.value = nCLM_CNTR + 1;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_CLM_REF = function() {
    try {

        var ref = '/';
        var nCLM_NO = document.MAINFORM.CLM_CNTR.value;
        if (nCLM_NO != '') {
            document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + ref + document.MAINFORM.CLM_CNTR.value;
        } else {
            document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_C_TRX_REF = function() {
    try {

        document.MAINFORM.C_TRX_REF.value = document.MAINFORM.CLM_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {

        var nORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value);
        var nCLM_AMT_TRXCCY = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        //var nGTEE_BAL = SYS_BeFloat(nORIGIN_GTEE_BAL -nCLM_AMT_TRXCCY);  //Don' calculate Guarantee Balance in Claim Register

        if (nCLM_AMT_TRXCCY > nORIGIN_GTEE_BAL) {
            alert("Claim Amount can not exceed the Outstanding Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nORIGIN_GTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return false;
        } else {
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nGTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return true;

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_GTEE_Cal_C_TRX_REF();
        SYT_CLERK_ID();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_CLM_CNTR();
        SYF_GTEE_Cal_CLM_REF();

        document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_BAL.value);
        document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;

        document.MAINFORM.CLM_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'RegOutwardClaim';
        document.MAINFORM.NXT_STATUS.value = 'SettleOutwardClaim';

        document.MAINFORM.APPLY_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYM_GTEE_Cal_BENE_SW_TAG();


        SYM_GTEE_APLB_RULE2();
        //SYT_DisableDivClass("C_div");
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.AC_WT_BK_SW_ADD.value = document.MAINFORM.AC_WT_BK_SW_ADD.value + 'XXX';
        }

        if (document.MAINFORM.AC_WT_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM, 'M');
        }
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value == '' && document.MAINFORM.AC_WT_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM, 'O');
        }
        SYM_GTEE_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
        SYM_GTEE_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_THU_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }

        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value == '' && document.MAINFORM.ADV_THU_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'O');
        }
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APLB_RULE_onchange = function(event) {
    try {
        SYM_GTEE_APLB_RULE();
        document.MAINFORM.TEMP_APLB_CODE.value = '/' + document.MAINFORM.APLB_RULE.value + '/';
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function(event) {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.CLM_DT.name, document.MAINFORM.REG_DT.name);
        var nDays1 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.CLM_DT.name);
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CLM_DT');
        if (nDays > 0) {
            alert("Claim date should not accept before Registration date");
            document.MAINFORM.CLM_DT.value = '';
            return false;
        } else if (nDays1 > 0) {
            alert("Claim date should not accept after Expiry date");
            document.MAINFORM.CLM_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        if (SYM_GTEE_CHK_NEG(value)) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }
        SYF_GTEE_Cal_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FILE_23X_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.FILE_23X_CODE.value != '') {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '/' + document.MAINFORM.FILE_23X_CODE.value + '/';
        } else {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
JACK 0919 GTEE
SYM_GTEE_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ISSUE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
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
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_REF_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_GuaranteeDemandRefusal.js", e);
    }
}