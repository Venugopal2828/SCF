var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.LEAD_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.LEAD_NOTES.name);
        if ('RE' != SYS_FUNCTION_TYPE) {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_ADD_BTN, 'P');
        }
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.NEW_PCPT_AMT.value;
        SYF_SYND_CHECK_AMD_FROM();
        SYF_SYND_assignExpDteToNewExpDte();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NEW_MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_RISK_AMT.value);
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        SYT_ChangeFldClass(document.MAINFORM.AMD_DT, 'P');
        document.MAINFORM.NEW_PCPT_EXPIRY_DT.value = document.MAINFORM.PCPT_EXPIRY_DT.value;
        document.MAINFORM.NEW_SYND_PER.value = document.MAINFORM.SYND_PER.value;
        document.MAINFORM.NEW_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.PCPT_AMT.value);
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        document.MAINFORM.DEC_MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, 0);
        document.MAINFORM.INC_MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, 0);
        document.MAINFORM.DEC_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, 0);
        document.MAINFORM.INC_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, 0);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_RISK_AMT_DEC = function() {
    try {

        var INC_RISK = SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value);
        var DEC_RISK = SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value);
        if (INC_RISK != 0) {
            alert("Only can enter Increase Amount or Decrease Amount");
            document.MAINFORM.INC_MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, 0);

        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_RISK_AMT_INT = function() {
    try {

        var INC_RISK = SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value);
        var DEC_RISK = SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value);
        if (DEC_RISK != 0) {
            alert("Only can enter Increase Amount or Decrease Amount");
            document.MAINFORM.DEC_MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, 0);

        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_INC_PCPT_AMT = function() {
    try {

        var INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value);
        var DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value);
        if (DEC_PCPT != 0) {
            alert("Only can enter Increase Amount or Decrease Amount");
            document.MAINFORM.DEC_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, 0);

        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_DEC_PCPT_AMT = function() {
    try {

        var INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value);
        var DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value);
        if (INC_PCPT != 0) {
            alert("Only can enter Increase Amount or Decrease Amount");
            document.MAINFORM.INC_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, 0);

        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CAL_NEW_MAST_RISK_AMT = function() {
    try {

        var INC_RISK = SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value);
        var DEC_RISK = SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value);
        var MAST = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        var NEW = MAST + INC_RISK - DEC_RISK;
        document.MAINFORM.NEW_MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, NEW);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_NEW_PCPT_AMT = function() {
    try {

        var INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value);
        var DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value);
        var PCPT_AMT = SYS_BeFloat(document.MAINFORM.PCPT_AMT.value);
        var NEW = PCPT_AMT + INC_PCPT - DEC_PCPT;
        document.MAINFORM.NEW_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, NEW);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_SYND_RISK_AMT = function() {
    try {

        var MAST_RISK = SYS_BeFloat(document.MAINFORM.NEW_MAST_RISK_AMT.value);
        var PCPT_AMT = SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value);
        var SYND_RISK_AMT = SYS_BeFloat(document.MAINFORM.SYND_RISK_AMT.value);

        SYND_RISK_AMT = MAST_RISK - PCPT_AMT;

        document.MAINFORM.SYND_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, SYND_RISK_AMT);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_NEW_SYND_PER = function() {
    try {

        per = SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value) / SYS_BeFloat(document.MAINFORM.NEW_MAST_RISK_AMT.value) * 100;

        per = per.toFixed(4);
        document.MAINFORM.NEW_SYND_PER.value = Math.round(per);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CAL_INC_DEC = function() {
    try {

        var INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value);
        var DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value);
        var PCPT_AMT = SYS_BeFloat(document.MAINFORM.PCPT_AMT.value);
        var NEW_PCPT_AMT = SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value);
        var n = NEW_PCPT_AMT - PCPT_AMT;
        if (n > 0) {
            INC_PCPT = n;
            DEC_PCPT = 0;


        } else {
            DEC_PCPT = Math.abs(n);
            INC_PCPT = 0;

        }

        document.MAINFORM.INC_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, INC_PCPT);
        document.MAINFORM.DEC_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, DEC_PCPT);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_NEW_SYND_PRE_AMT = function() {
    try {

        var nPER = SYS_BeFloat(document.MAINFORM.NEW_SYND_PER.value);
        var nRISK_AMT = SYS_BeFloat(document.MAINFORM.NEW_MAST_RISK_AMT.value);
        var nPCPT_AMT = SYS_BeFloat(nRISK_AMT * nPER / 100);
        document.MAINFORM.NEW_PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, nPCPT_AMT);

        SYF_SYND_CAL_INC_DEC();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_AMD_FROM = function() {
    try {

        if (document.MAINFORM.AMD_FROM.value == 'Change to Master Record') {
            if (document.MAINFORM.AMD_TYPE.value == 'Increase') {
                SYT_ChangeFldClass(document.MAINFORM.DEC_MAST_LC_AMT, 'B');
                SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'M');
            } else if (document.MAINFORM.AMD_TYPE.value == 'Decrease') {
                SYT_ChangeFldClass(document.MAINFORM.DEC_MAST_LC_AMT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'B');
            } else if (document.MAINFORM.AMD_TYPE.value == 'Other') {
                SYT_ChangeFldClass(document.MAINFORM.DEC_MAST_LC_AMT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'O');
            }
        }
        if (document.MAINFORM.AMD_FROM.value == 'Change to Syndication') {
            SYT_ChangeFldClass(document.MAINFORM.DEC_MAST_LC_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var Bnode = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail');
        var Barr = SYS_getRecords(Bnode);
        if (Barr.length <= 0) {
            alert("Please specify Participation Details");
            return false;
        }
        return (SYF_SYND_CHECK_SyndicationPercentage());
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_SyndicationPercentage = function() {
    try {

        var amt = SYS_getFieldSumByXpath('PART_PER', 'ParticipantHeader.ParticipantDetail');
        if (amt != 100) {
            alert("Syndication percentage is not 100% ,please check!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHK_DO = function() {
    try {

        var mainamt = document.MAINFORM.NEW_PCPT_AMT.value;
        var syndamt = "SYND_AMT";
        SYS_refreshChildDoValue("ParticipantHeader", syndamt, mainamt);
        //added by Priya.d
        var arrayvalue;
        var syndper = "PART_PER";
        var synpartamt = "SYND_PART_AMT";
        var i;
        var node;
        var record;
        var synd_amtone;
        var fundflag = "Unfunded";
        var percentage;
        var re;
        var ttl_amt = 0;
        node = SYS_getDoByXpath("ParticipantHeader.ParticipantDetail");
        if (node == null || node == '') {
            return;
        } else {
            arrayvalue = SYS_getRecords(node);
            record = '';
            for (i = 0; i < arrayvalue.length; i++) {
                record = SYS_getValFromRec(arrayvalue[i], synpartamt);
                percentage = SYS_getValFromRec(arrayvalue[i], syndper);
                var r1 = SYS_BeFloat(record);
                var at = SYS_BeFloat(mainamt)
                synd_amtone = SYS_BeFloat(r1 * at / 100);
                ttl_amt += SYS_BeFloat(r1);
                var pr = SYS_BeFloat(percentage);
                synd_amtone = SYS_BeFloat(pr * at / 100);
                re = arrayvalue[i];
                re = SYS_setValToRec(re, 'SYND_PART_AMT', synd_amtone);
                arrayvalue[i] = re;
            }
            SYS_reLoadGrid(node, arrayvalue);
            SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "FUND_AMT", 0);
            SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "SYND_PART_BAL", 0);
            SYS_refreshChildDoValue("ParticipantHeader", "TTL_FUNDED_AMT", 0);
            SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "FUND_FLAG", fundflag);

        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_assignExpDteToNewExpDte = function() {
    try {

        SYS_refreshChildDoValue("ParticipantHeader", "SYND_EXPIRY_DT", document.MAINFORM.NEW_PCPT_EXPIRY_DT.value);
        SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "COMM_END_DT", document.MAINFORM.NEW_PCPT_EXPIRY_DT.value);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_LoadDoComplete = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S('SyndHeader', 'N', false);
            SYS_GetDataForDO_S('SyndDetail', 'N', false);
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AMD_FROM_onchange = function(event) {
    try {
        SYF_SYND_CHECK_AMD_FROM();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AMD_TYPE_onchange = function(event) {
    try {
        SYF_SYND_CHECK_AMD_FROM();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DEC_MAST_LC_AMT_onchange = function(event) {
    try {
        if (SYM_SYND_CHK_NEG_VAL(document.MAINFORM.DEC_MAST_LC_AMT.value)) {
            alert("Decrease amount should not accept negative values");
            document.MAINFORM.DEC_MAST_LC_AMT.value = 0;
            SYF_SYND_CHECK_RISK_AMT_DEC();
            SYF_SYND_CAL_NEW_MAST_RISK_AMT();
            SYF_SYND_SYND_RISK_AMT();
        } else {
            SYF_SYND_CHECK_RISK_AMT_DEC();
            SYF_SYND_CAL_NEW_MAST_RISK_AMT();
            SYF_SYND_NEW_SYND_PRE_AMT();
            SYF_SYND_SYND_RISK_AMT();
            SYS_refreshChildDoValue("ParticipantHeader", "SYND_AMT", document.MAINFORM.NEW_PCPT_AMT.value);
            SYF_SYND_NEW_SYND_PER();
            SYF_SYND_CHK_DO();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DEC_PCPT_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value) < 0) {
            alert("Decrease amount should not accept negative values");
            document.MAINFORM.DEC_PCPT_AMT.value = '';
        } else if (SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value) <= SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) {
            SYF_SYND_CHECK_DEC_PCPT_AMT();
            SYF_SYND_NEW_PCPT_AMT();
            SYF_SYND_SYND_RISK_AMT();
            SYF_SYND_NEW_SYND_PER();
            SYS_refreshChildDoValue("ParticipantHeader", "SYND_AMT", document.MAINFORM.NEW_PCPT_AMT.value);
        } else {
            alert("Decrease amount should not exceeds master amount");
            document.MAINFORM.DEC_PCPT_AMT.value = 0;
        }
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.NEW_PCPT_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_INC_MAST_LC_AMT_onchange = function(event) {
    try {
        if (SYM_SYND_CHK_NEG_VAL(document.MAINFORM.INC_MAST_LC_AMT.value)) {
            alert("Increase amount should not accept negative values");
            document.MAINFORM.INC_MAST_LC_AMT.value = 0;
        } else {
            SYF_SYND_CHECK_RISK_AMT_INT();
            SYF_SYND_CAL_NEW_MAST_RISK_AMT();
            SYF_SYND_NEW_SYND_PRE_AMT();
            SYF_SYND_SYND_RISK_AMT();
            SYS_refreshChildDoValue("ParticipantHeader", "SYND_AMT", document.MAINFORM.NEW_PCPT_AMT.value);
            SYF_SYND_NEW_SYND_PER();
            SYF_SYND_CHK_DO();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_INC_PCPT_AMT_onchange = function(event) {
    try {
        var NEW_PCPT_AMT = SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value);
        var NEW_MAST_RISK_AMT = SYS_BeFloat(document.MAINFORM.NEW_MAST_RISK_AMT.value);
        var Amt_bal = SYS_BeFloat(NEW_MAST_RISK_AMT - NEW_PCPT_AMT);
        if (SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value) < 0) {
            alert("Increase amount should not accept negative values");
            document.MAINFORM.INC_PCPT_AMT.value = '';
        } else if (SYS_BeFloat(Amt_bal) >= SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value)) {
            SYF_SYND_CHECK_INC_PCPT_AMT();
            SYF_SYND_NEW_PCPT_AMT();
            SYF_SYND_SYND_RISK_AMT();
            SYF_SYND_NEW_SYND_PER();
            SYS_refreshChildDoValue("ParticipantHeader", "SYND_AMT", document.MAINFORM.NEW_PCPT_AMT.value);
        } else {
            alert("Increase amount should not exceed master amount");
            document.MAINFORM.INC_PCPT_AMT.value = 0;
        }
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.NEW_PCPT_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEW_PCPT_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value) < 0) {
            alert("syndication amount should not accept negative values");
            document.MAINFORM.NEW_PCPT_AMT.value = document.MAINFORM.NEW_MAST_RISK_AMT.value;
            document.MAINFORM.NEW_SYND_PER.value = 100;
        } else if (SYS_BeFloat(document.MAINFORM.NEW_MAST_RISK_AMT.value) > SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value)) {
            SYF_SYND_CAL_INC_DEC();
            SYF_SYND_NEW_SYND_PER();
            SYF_SYND_SYND_RISK_AMT();
            SYF_SYND_CHK_DO();
        } else {
            alert("syndication amount should not accept more than risk amount");
            document.MAINFORM.NEW_PCPT_AMT.value = document.MAINFORM.NEW_MAST_RISK_AMT.value;
            document.MAINFORM.NEW_SYND_PER.value = 100;
        }
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.NEW_PCPT_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEW_PCPT_EXPIRY_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.NEW_PCPT_EXPIRY_DT.name, document.MAINFORM.PCPT_START_DT.name);
        if (nDays > 0) {
            alert("Syndication New Expiry date should not accept before syndication start date");
            document.MAINFORM.NEW_PCPT_EXPIRY_DT.value = '';
            return false;
        } else {
            SYF_SYND_assignExpDteToNewExpDte();
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEW_SYND_PER_onchange = function(event) {
    try {
        if (document.MAINFORM.NEW_SYND_PER.value <= 100 && document.MAINFORM.NEW_SYND_PER.value >= 0) {
            SYF_SYND_NEW_SYND_PRE_AMT();
            SYF_SYND_SYND_RISK_AMT();
            SYF_SYND_CHK_DO();
        } else {
            alert("Invalid percentage value");
            document.MAINFORM.NEW_SYND_PER.value = 100;
            SYF_SYND_NEW_SYND_PRE_AMT();
            SYF_SYND_SYND_RISK_AMT();
        }
        //SYS_refreshChildDoValue("ParticipantHeader", "SYND_AMT", document.MAINFORM.NEW_PCPT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt.js", e);
    }
}