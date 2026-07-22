var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.GRANT_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'O');
        EEHtml.getElementById('UDLY_TYPE2').style.display = 'none';
        SYS_GetRefNo('RPFM_REF', 'SYF_RPFM_Set_C_Main_RefNo');
        document.MAINFORM.PART_DISCL_FLG.value = 'Silent';
        document.MAINFORM.PART_RISK_PERC.value = '0';
        document.MAINFORM.PART_RISK_AMT.value = '0';
        document.MAINFORM.PART_DAYS.value = '0';
        document.MAINFORM.PART_START_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_Customer_CUBK = function() {
    try {

        if (document.MAINFORM.SYND_OBLG_TYPE.value == "Bank") {
            SYS_InqCUBK('OBLG_ID_BANK');

        } else {
            SYS_InqCUBK_byCondition('OBLG_ID');

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_RPFM_Cal_UDLY_TYPE();
        if (document.MAINFORM.PART_TYPE.value == 'Unfunded') {
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'P');
        } else if (document.MAINFORM.PART_TYPE.value == 'Funded') {
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Set_C_Main_RefNo = function(ref) {
    try {

        var date = new Date();
        var dYear = SYS_BUSI_DATE;
        var strYear, strPrefix, strPostfix;
        var unitcode = SYS_BUSI_UNIT;
        dYear = SYS_FormatDateToStd(dYear);
        strYear = dYear + "/";
        strPostfix = ref.substr(2, 6);
        strPrefix = "RP";
        document.MAINFORM.C_MAIN_REF.value = strPrefix + unitcode.substr(0, 3) + strYear.substr(2, 2) + ref;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_Grantor_CUBK = function() {
    try {

        SYS_InqCUBK('Grantor_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_UDLY_TYPE = function() {
    try {

        if (document.MAINFORM.UDLY_TYPE.value == 'Others') {
            SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'M');
            EEHtml.getElementById('UDLY_TYPE2').style.display = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'O');
            EEHtml.getElementById('UDLY_TYPE2').style.display = 'none';

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Amount_Value = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PART_AMT.value) > 0) {
            var PART_RISK_AMT_value = (document.MAINFORM.PART_RISK_PERC.value / 100) * SYS_BeFloat(document.MAINFORM.PART_AMT.value);
            document.MAINFORM.PART_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_RISK_CCY.value, SYS_BeFloat(PART_RISK_AMT_value));
            document.MAINFORM.PART_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_CCY.value, SYS_BeFloat(document.MAINFORM.PART_AMT.value));
        } else {
            document.MAINFORM.PART_RISK_AMT.value = 0;
            document.MAINFORM.PART_RISK_PERC.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.PART_AMT.value) < 0) {
            alert("The amount field should not accept negative values!");
            document.MAINFORM.PART_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_Grantor_SW_TAG = function() {
    try {

        if (document.MAINFORM.GRANTOR_BK_SW.value != '') {
            document.MAINFORM.GRANT_SW_TAG.value = 'A';
        } else if (document.MAINFORM.GRANTOR_NM.value != '' || document.MAINFORM.GRANTOR_ADD1.value != '' || document.MAINFORM.GRANTOR_ADD2.value != '' || document.MAINFORM.GRANTOR_ADD3.value != '') {
            document.MAINFORM.GRANT_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.GRANT_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_LIMIT_DETAILS = function() {
    try {

        SYS_InqCUBK_byCondition('GRANTOR_LIMIT');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'RegParticipant';
        document.MAINFORM.CLOSE_FLG.value = 'No';
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYND_OBLG_TYPE_FLD = function() {
    try {

        if (document.MAINFORM.SYND_OBLG_TYPE.value == '' || document.MAINFORM.SYND_OBLG_TYPE.value == 'Corporate' || document.MAINFORM.SYND_OBLG_TYPE.value == 'Bank') {
            document.MAINFORM.OBLG_ID.value = '';
            document.MAINFORM.OBLG_NM.value = '';
            document.MAINFORM.OBLG_ADD1.value = '';
            document.MAINFORM.OBLG_ADD2.value = '';
            document.MAINFORM.OBLG_ADD3.value = '';
            document.MAINFORM.BENE_CNTY_CD.value = '';
        } else {
            SYF_RPFM_SYF_RPFM_SYND_OBLG_ID_FLD();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_OBLG_SW_TAG = function() {
    try {

        if (document.MAINFORM.OBLG_SWIFT_ADD.value != '') {
            document.MAINFORM.OBLG_SWIFT_TAG.value = 'A';
        } else if (document.MAINFORM.OBLG_NM.value != '' || document.MAINFORM.OBLG_ADD1.value != '' || document.MAINFORM.OBLG_ADD2.value != '' || document.MAINFORM.OBLG_ADD3.value != '') {
            document.MAINFORM.OBLG_SWIFT_TAG.value = 'D';
        } else {
            document.MAINFORM.OBLG_SWIFT_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYF_RPFM_SYND_OBLG_ID_FLD = function() {
    try {

        if (document.MAINFORM.OBLG_ID.value == "") {
            document.MAINFORM.OBLG_NM.value = '';
            document.MAINFORM.OBLG_ADD1.value = '';
            document.MAINFORM.OBLG_ADD2.value = '';
            document.MAINFORM.OBLG_ADD3.value = '';
            //SYF_RPFM_Cal_OBLG_SW_TAG();
        } else {
            SYF_RPFM_Get_Obligor_CUBK();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Get_Obligor_CUBK = function() {
    try {

        if (document.MAINFORM.SYND_OBLG_TYPE.value == "Bank") {
            SYS_GetCUBK('OBLG_ID_BANK', document.MAINFORM.OBLG_ID.name, 'SYM_RPFM_Cal_SYND_OBLG_SW_TAG');

        } else {
            SYS_GetCUBK('OBLG_ID', document.MAINFORM.OBLG_ID.name, 'SYM_RPFM_Cal_SYND_OBLG_SW_TAG');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_PART_MAT_DT_RESULT = function(PART_MAT_DT) {
    try {

        document.MAINFORM.PART_MAT_DT.value = PART_MAT_DT;
        EEHtml.fireEvent(document.MAINFORM.PART_MAT_DT, "onchange");
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_ADD1_onchange = function(event) {
    try {
        SYF_RPFM_Cal_Grantor_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_ADD2_onchange = function(event) {
    try {
        SYF_RPFM_Cal_Grantor_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_ADD3_onchange = function(event) {
    try {
        SYF_RPFM_Cal_Grantor_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_BK_SW_onchange = function(event) {
    try {
        SYF_RPFM_Cal_Grantor_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.GRANTOR_ID.value == "") {
            document.MAINFORM.GRANTOR_NM.value = '';
            document.MAINFORM.GRANTOR_ADD1.value = '';
            document.MAINFORM.GRANTOR_ADD2.value = '';
            document.MAINFORM.GRANTOR_ADD3.value = '';
            document.MAINFORM.GRANTOR_BK_SW.value = '';
            SYF_RPFM_Cal_Grantor_SW_TAG();
        } else {
            SYS_GetCUBK('Grantor_ID', document.MAINFORM.GRANTOR_ID.name, 'SYF_RPFM_Cal_Grantor_SW_TAG');
        }
        document.MAINFORM.SUB_LMT_ID.value = '';
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_NM_onchange = function(event) {
    try {
        SYF_RPFM_Cal_Grantor_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ID_onchange = function(event) {
    try {
        //SYT_GetCUBK_All('OBLG_ID', 'OBLG_ID');
        SYM_RPFM_OBLG_ID_GetCUBK();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_AMT_onchange = function(event) {
    try {
        SYF_RPFM_Amount_Value();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_CCY_onchange = function(event) {
    try {
        document.MAINFORM.PART_RISK_CCY.value = document.MAINFORM.PART_CCY.value;
        if (document.MAINFORM.PART_CCY.value == document.MAINFORM.PART_RISK_CCY.value) {
            document.MAINFORM.PART_RISK_AMT.value = document.MAINFORM.PART_AMT.value;
        }
        if (document.MAINFORM.PART_AMT.value == document.MAINFORM.PART_RISK_AMT.value) {
            document.MAINFORM.PART_RISK_PERC.value = '0';
        }
        if ((document.MAINFORM.PART_RISK_CCY.value == document.MAINFORM.PART_CCY.value) && (document.MAINFORM.PART_AMT.value == document.MAINFORM.PART_RISK_AMT.value)) {
            document.MAINFORM.PART_RISK_PERC.value = '100';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_DAYS_onchange = function(event) {
    try {
        var PART_START_DT = document.MAINFORM.PART_START_DT.value;
        var PART_DAYS = document.MAINFORM.PART_DAYS.value;
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, PART_START_DT, PART_DAYS, "SYF_RPFM_PART_MAT_DT_RESULT", "A", "N", "N");
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_MAT_DT_onchange = function(event) {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'PART_MAT_DT');
        document.MAINFORM.PART_DAYS.value = SYS_GetSubDays('PART_START_DT', 'PART_MAT_DT', SYS_BANK_COUNTRY);
        if (document.MAINFORM.PART_DAYS.value <= 0) {
            alert('Maturity Date must later than Start Date!');
            document.MAINFORM.PART_MAT_DT.value = '';
            document.MAINFORM.PART_DAYS.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_RISK_AMT_onchange = function(event) {
    try {
        document.MAINFORM.PART_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value));
        if (SYS_BeFloat(document.MAINFORM.PART_AMT.value) > 0) {
            var per = (SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value) / SYS_BeFloat(document.MAINFORM.PART_AMT.value)) * 100;
            per = Math.round(per * 100) / 100;
            document.MAINFORM.PART_RISK_PERC.value = per;
        } else {
            document.MAINFORM.PART_RISK_PERC.value = 0;
        }
        if (document.MAINFORM.PART_RISK_PERC.value > 100 || document.MAINFORM.PART_RISK_PERC.value < 0) {
            alert('You should input the right Participation Amount!');
            document.MAINFORM.PART_RISK_PERC.value = 0;
            document.MAINFORM.PART_RISK_AMT.value = '';
        }
        if (SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value) < 0) {
            alert("The amount field should not accept negative values!");
            document.MAINFORM.PART_RISK_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_RISK_CCY_onchange = function(event) {
    try {
        FLD_RPFM_PART_RISK_PERC_onchange();
        if ((document.MAINFORM.PART_RISK_CCY.value == document.MAINFORM.PART_CCY.value) && (document.MAINFORM.PART_AMT.value == document.MAINFORM.PART_RISK_AMT.value)) {
            document.MAINFORM.PART_RISK_PERC.value = '100';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_RISK_PERC_onchange = function(event) {
    try {
        var PART_RISK_AMT_value = (document.MAINFORM.PART_RISK_PERC.value / 100) * SYS_BeFloat(document.MAINFORM.PART_AMT.value);
        var fromccy = document.MAINFORM.PART_CCY.value; //added
        var toccy = document.MAINFORM.PART_RISK_CCY.value; //added
        if (fromccy == toccy) {
            document.MAINFORM.PART_RISK_AMT_RATE.value = 1;
        } else {
            SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'PART_RISK_AMT_RATE'); //added
        }
        document.MAINFORM.PART_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_RISK_CCY.value, SYS_BeFloat(PART_RISK_AMT_value * document.MAINFORM.PART_RISK_AMT_RATE.value));
        if (document.MAINFORM.PART_RISK_PERC.value > 100 || document.MAINFORM.PART_RISK_PERC.value < 0) {
            alert('You should input the right Participation Percentage!');
            document.MAINFORM.PART_RISK_PERC.value = 0;
            document.MAINFORM.PART_RISK_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_START_DT_onchange = function(event) {
    try {
        SYM_RPFM_CAL_MATURITY_DT();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_START_DT_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'PART_START_DT');
        var PART_START_DT = document.MAINFORM.PART_START_DT.value;
        var PART_DAYS = document.MAINFORM.PART_DAYS.value;
        if (PART_DAYS > 0) {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, PART_START_DT, PART_DAYS, "SYF_RPFM_PART_MAT_DT_RESULT", "A", "N", "N");
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.PART_TYPE.value == 'Unfunded') {
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'P');
            document.MAINFORM.SUB_LMT_ID.value = '';

        } else if (document.MAINFORM.PART_TYPE.value == 'Funded') {
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_OBLG_TYPE_onchange = function(event) {
    try {
        SYF_RPFM_SYND_OBLG_TYPE_FLD();
        //  SYM_RPFM_Cal_SYND_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_UDLY_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.UDLY_TYPE.value == 'Others') {
            SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'M');
            EEHtml.getElementById('UDLY_TYPE2').style.display = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'O');
            EEHtml.getElementById('UDLY_TYPE2').style.display = 'none';

        }
        SYM_RPFM_Cal_FACI_TYPE();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegParticipant.js", e);
    }
}