var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.FUND_AMT, 'P');
        SYM_RPFM_Cal_NO_OF_AMD();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SYND_PART_REF_NO.value;
        document.MAINFORM.SYND_PART_START_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.SYND_PART_EXP_DT.value = document.MAINFORM.MAST_END_DT.value;
        document.MAINFORM.FUND_AMT.value = document.MAINFORM.SYND_PART_AMT.value;
        document.MAINFORM.SYND_PART_CCY.value = document.MAINFORM.MAST_RISK_CCY.value;
        document.MAINFORM.PART_PER.value = 0;
        document.MAINFORM.SUB_LMT_ID.value = '';
        FLD_RPFM_SYND_PART_EXP_DT_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        /*        document.MAINFORM.TOTAL_RISK_AMT.value = '0';
        var cbtrref = SYS_BeInt(document.MAINFORM.PART_CNTR.value)
        var cntrnum = cbtrref;
        for (i = 1; i < cntrnum; i++) {
            if (i < 10) {
                cbtrref = '0' + i;
            } else {
                cbtrref = i;
            }
            document.MAINFORM.TEMP_TRX_REF.value = document.MAINFORM.C_MAIN_REF.value + cbtrref;
            SYS_GetTableData_SvrSql_S("GetTotalRiskAmount", "TEMP_TRX_REF", 'SYND_PART_AMT', 'TEMP_SYND_PART_AMT', 'Y');
            document.MAINFORM.TOTAL_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_SYND_PART_AMT.value) + SYS_BeFloat(document.MAINFORM.TOTAL_RISK_AMT.value);
        }
        document.MAINFORM.TOTAL_RISK_AMT.value = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) - SYS_BeFloat(document.MAINFORM.TOTAL_RISK_AMT.value);
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) > document.MAINFORM.TOTAL_RISK_AMT.value) {
            alert("amount not balance!!!");
            return false;
        } else {
            return true;
        }*/
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) > SYS_BeFloat(document.MAINFORM.LC_BAL.value)) {
            alert("amount not balance!!!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_Participant_CUBK = function() {
    try {

        if (document.MAINFORM.SYND_PART_TYPE.value == "Bank") {
            SYS_InqCUBK('BankParticipant');
        } else {
            SYS_InqCUBK_byCondition('CustomerParticipant');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Get_Participant_CUBK = function() {
    try {

        if (document.MAINFORM.SYND_PART_TYPE.value == "Bank") {
            SYS_GetCUBK('BankParticipant', document.MAINFORM.SYND_PART_ID.name, 'SYM_RPFM_Cal_SYND_PART_SW_TAG');

        } else {
            SYS_GetCUBK('CustomerParticipant', document.MAINFORM.SYND_PART_ID.name, 'SYM_RPFM_Cal_SYND_PART_SW_TAG');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYND_PART_TYPE_FLD = function() {
    try {

        if (document.MAINFORM.SYND_PART_TYPE.value == '' || document.MAINFORM.SYND_PART_TYPE.value == 'Corporate' || document.MAINFORM.SYND_PART_TYPE.value == 'Bank') {
            document.MAINFORM.SYND_PART_ID.value = '';
            document.MAINFORM.SYND_PART_NM.value = '';
            document.MAINFORM.SYND_PART_ADD1.value = '';
            document.MAINFORM.SYND_PART_ADD2.value = '';
            document.MAINFORM.SYND_PART_ADD3.value = '';
        } else {
            SYF_RPFM_SYF_RPFM_SYND_PART_ID_FLD();
        }
        //document.MAINFORM.SUB_LMT_ID.value = '';
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYF_RPFM_SYND_PART_ID_FLD = function() {
    try {

        if (document.MAINFORM.SYND_PART_ID.value == "") {
            document.MAINFORM.SYND_PART_NM.value = '';
            document.MAINFORM.SYND_PART_ADD1.value = '';
            document.MAINFORM.SYND_PART_ADD2.value = '';
            document.MAINFORM.SYND_PART_ADD3.value = '';
            document.MAINFORM.SYND_PART_SW_ADD.value = '';
            SYM_RPFM_Cal_SYND_PART_SW_TAG();

        } else {
            SYF_RPFM_Get_Participant_CUBK();
        }
        //document.MAINFORM.SUB_LMT_ID.value = '';
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_Bank_CUBK = function() {
    try {

        SYS_InqCUBK('AC_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Get_Bank_CUBK = function() {
    try {

        if (document.MAINFORM.AC_WT_BK_ID.value == "") {
            document.MAINFORM.AC_WT_BK_NM.value = '';
            document.MAINFORM.AC_WT_BK_ADD1.value = '';
            document.MAINFORM.AC_WT_BK_ADD2.value = '';
            document.MAINFORM.AC_WT_BK_ADD3.value = '';
            document.MAINFORM.AC_BK_SW_ADD.value = '';
            document.MAINFORM.AC_BK_SW_TAG.value = '';

        } else {
            SYS_GetCUBK('AC_WT_BK_ID', document.MAINFORM.AC_WT_BK_ID.name, 'SYM_RPFM_Cal_AC_WT_BK_SW_TAG');

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        FLD_RPFM_DIARY_NARRATIVE_onchange();
        //
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYT_ChangeFldClass(document.MAINFORM.MAST_LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MAST_RISK_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SYND_PART_CCY, 'P');

        EEHtml.getElementById('RPFM_FACI_TP').style.display = 'none';
        SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF_BTN2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ID_BTN, 'P');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_LIMIT_DETAILS = function() {
    try {

        if (document.MAINFORM.SYND_PART_ID.value == '') {
            alert("Please select Participant first!");

        } else {
            SYS_InqCUBK_byCondition('BANK_LIMIT', '1');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Check_date = function() {
    try {

        if (document.MAINFORM.MAST_END_DT.value != '') {
            var nDays2 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.MAST_END_DT.name);
            if (nDays2 < 0) {
                SYS_CheckError(document.MAINFORM.MAST_END_DT, 'Expiry Date should be later than the Start Date !');
                document.MAINFORM.MAST_END_DT.value = '';
            }
        }
        if (document.MAINFORM.MAST_START_DT.value == '') {
            document.MAINFORM.MAST_END_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        //document.MAINFORM.LC_BAL.value = SYS_BeFloat(document.MAINFORM.LC_BAL.value) - SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
        document.MAINFORM.CURRNT_STATUS.value = 'RegisterGPR';
        document.MAINFORM.RPFM_RISKCLM_FLAG.value = "YES";
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYF_RPFM_SYND_OBLG_ID_FLD = function() {
    try {

        if (document.MAINFORM.SYND_PART_ID.value == "") {
            document.MAINFORM.SYND_PART_NM.value = '';
            document.MAINFORM.SYND_PART_ADD1.value = '';
            document.MAINFORM.SYND_PART_ADD2.value = '';
            document.MAINFORM.SYND_PART_ADD3.value = '';
            document.MAINFORM.SYND_PART_SW_ADD.value = '';
            SYM_RPFM_Cal_SYND_PART_SW_TAG();

        } else {
            SYF_RPFM_Get_Participant_CUBK();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYND_PART_EXP_DT_CHECK = function() {
    try {

        var nSubDays;
        if (document.MAINFORM.SYND_PART_EXP_DT.value != "") {
            nSubDays = SYS_GetSubDays('MAST_END_DT', 'SYND_PART_EXP_DT');
            if (nSubDays > 0) {
                SYS_CheckError(document.MAINFORM.SYND_PART_EXP_DT, 'Expiry date should not be later than master Expiry date');
                document.MAINFORM.SYND_PART_EXP_DT.value = MAST_END_DT;
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_AC_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_RPFM_Cal_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_RPFM_Cal_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_RPFM_Cal_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_RPFM_Cal_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYF_RPFM_Get_Bank_CUBK();
        EEHtml.fireEvent(document.MAINFORM.AC_BK_SW_ADD, "onchange");
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_RPFM_Cal_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_FUND_FLAG_onchange = function(event) {
    try {
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            document.MAINFORM.FUND_AMT.value = document.MAINFORM.SYND_PART_AMT.value;
            document.MAINFORM.SUB_LMT_ID.value = '';
            EEHtml.getElementById('RPFM_FACI_TP').style.display = 'none';
            document.MAINFORM.FUND_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FUND_AMT, 'P');
        } else {
            document.MAINFORM.FUND_AMT.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.FUND_AMT, 'P');
            EEHtml.getElementById('RPFM_FACI_TP').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'O');

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_END_DT_onchange = function(event) {
    try {
        SYF_RPFM_Check_date();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_START_DT_onchange = function(event) {
    try {
        SYF_RPFM_Check_date();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_PER_onchange = function(event) {
    try {
        var SYND_PART_AMT_value = ((document.MAINFORM.PART_PER.value) / 100) * SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        document.MAINFORM.SYND_PART_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYS_BeFloat(SYND_PART_AMT_value));
        EEHtml.fireEvent(document.MAINFORM.FUND_FLAG, "onchange");
        EEHtml.fireEvent(document.MAINFORM.SYND_PART_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_ADD1_onchange = function(event) {
    try {
        SYM_RPFM_Cal_SYND_PART_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_ADD2_onchange = function(event) {
    try {
        SYM_RPFM_Cal_SYND_PART_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_ADD3_onchange = function(event) {
    try {
        SYM_RPFM_Cal_SYND_PART_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_AMT_onchange = function(event) {
    try {
        //document.MAINFORM.PART_PER.value = ( SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value)/SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) ) * 100;

        document.MAINFORM.PART_PER.value = (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) / SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) * 100;
        if (SYS_BeFloat(document.MAINFORM.LC_BAL.value) < SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value)) {
            alert("The Total Part Amount is greater than the Master Risk Amount.");
            var sum = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.LC_BAL.value));
            document.MAINFORM.SYND_PART_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, sum);
            var per = (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) / SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) * 100;
            per = Math.round(per * 100) / 100;
            document.MAINFORM.PART_PER.value = per;


        }
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            document.MAINFORM.FUND_AMT.value = document.MAINFORM.SYND_PART_AMT.value;
        } else {
            document.MAINFORM.FUND_AMT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_CORR_MED_onchange = function(event) {
    try {
        SYM_RPFM_SYND_MPO_PART_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_EXP_DT_onchange = function(event) {
    try {
    	if (document.MAINFORM.SYND_PART_EXP_DT.value != "") {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'SYND_PART_EXP_DT');
        //document.MAINFORM.RPFM_DAYS.value = SYS_GetSubDays('SYND_PART_START_DT', 'SYND_PART_EXP_DT', SYS_BANK_COUNTRY);
        var subDays = SYS_GetSubDays('SYND_PART_START_DT', 'SYND_PART_EXP_DT', SYS_BANK_COUNTRY); //added
        if (subDays < 0) {
            alert("Expiry date can't be before  Start Date");
            document.MAINFORM.RPFM_DAYS.value = 0;
            document.MAINFORM.SYND_PART_EXP_DT.value = "";
        } else {
            document.MAINFORM.RPFM_DAYS.value = subDays;
        }
        SYF_RPFM_SYND_PART_EXP_DT_CHECK();
      }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_ID_onchange = function(event) {
    try {
        SYF_RPFM_SYF_RPFM_SYND_PART_ID_FLD();
        EEHtml.fireEvent(document.MAINFORM.SYND_PART_SW_ADD, "onchange");
        FLD_RPFM_SYND_PART_TYPE_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_NM_onchange = function(event) {
    try {
        SYM_RPFM_Cal_SYND_PART_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_START_DT_onchange = function(event) {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'SYND_PART_EXP_DT')
        document.MAINFORM.RPFM_DAYS.value = SYS_GetSubDays('SYND_PART_START_DT', 'SYND_PART_EXP_DT', SYS_BANK_COUNTRY);
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_SW_ADD_onchange = function(event) {
    try {
        SYM_RPFM_Cal_SYND_PART_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_PART_TYPE_onchange = function(event) {
    try {
        SYF_RPFM_SYND_PART_TYPE_FLD();
        SYM_RPFM_Cal_SYND_PART_SW_TAG();
        document.MAINFORM.SYND_PART_SW_ADD.value = '';
        document.MAINFORM.SYND_PART_SW_TAG.value = '';
        /* if (document.MAINFORM.SYND_PART_TYPE.value == "Corporate") {
            EEHtml.getElementById('G').style.display = "none";
        } else {
            EEHtml.getElementById('G').style.display = "block";
        }*/
    } catch (e) {
        DisExcpt("SYF_RPFM_RegistGrantorPartiRel.js", e);
    }
}