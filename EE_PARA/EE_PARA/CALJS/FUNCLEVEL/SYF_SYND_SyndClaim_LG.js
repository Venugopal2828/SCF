var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLM_CNTR.value = SYS_BeFloat(document.MAINFORM.CLM_CNTR.value) + 1;
        document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + document.MAINFORM.CLM_CNTR.value;
        document.MAINFORM.CPYT_NO_DR.value = document.MAINFORM.CLM_CNTR.value;
        document.MAINFORM.CPYT_NO_CR.value = document.MAINFORM.CLM_CNTR.value;

    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('A_div');
        Hidden_View_Payment_tab();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S('SyndHeader', 'N', false);
            SYS_GetDataForDO_S('SyndDetail', 'N', false);
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHK_DO = function() {
    try {

        var obj = SYS_getScreenObjByxpath("ParticipantHeader", "SYND_AMT");
        var mainamt = obj.value;
        //added by Priya.d
        var arrayvalue;
        var syndper = "PART_PER";
        var synpartamt = "SYND_PART_AMT";
        var i;
        var node;
        var record;
        var re;
        var pecentage;
        var synd_amtone;
        var ttl_amt = 0;
        var fundflag = "Unfunded";
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
                var pr = SYS_BeFloat(percentage);
                synd_amtone = SYS_BeFloat(pr * at / 100);
                re = arrayvalue[i];
                ttl_amt += SYS_BeFloat(r1);
                re = SYS_setValToRec(re, 'SYND_PART_AMT', synd_amtone);
                arrayvalue[i] = re;
            }
            SYS_reLoadGrid(node, arrayvalue);
            SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "FUND_AMT", 0);
            SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "SYND_PART_BAL", 0);
            SYS_refreshChildDoValue("ParticipantHeader", "TTL_FUNDED_AMT", 0);
            SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", "FUND_FLAG", fundflag);
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CLM_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.PCPT_EXPIRY_DT.name, document.MAINFORM.CLM_DT.name);
        var nDays1 = SYS_GetSubDays(document.MAINFORM.CLM_DT.name, document.MAINFORM.PCPT_START_DT.name);
        if (nDays > 0) {
            alert("Claim date should not accept after expiry date");
            document.MAINFORM.CLM_DT.value = '';
            return false;
        } else if (nDays1 > 0) {
            alert("Claim date should not accept before participation start date");
            document.MAINFORM.CLM_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CLM_PERCENT_onchange = function(event) {
    try {
        Claim_AMT_onchange();
        Hidden_View_Payment_tab();
        SYF_SYND_CHK_DO();
        SYM_SYND_Set_VAL_PaymentTab();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_LEAD_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_LEAD_BK_ADD_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_LIAB_ACNO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK(document.MAINFORM.LEAD_LIAB_ACNO.name);
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_MAIL_ADD_BTN_onclick = function(event) {
    try {
        Cal_LEAD_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_MAIL_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_LEAD_MAIL_ADD_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MASTER_LC_BTN_onclick = function(event) {
    try {
        Clear_MASTER_DETAILS();
        Inq_MASTER_DETAILS();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MASTER_LG_BTN_onclick = function(event) {
    try {
        Clear_MASTER_DETAILS();
        Inq_MASTER_DETAILS();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MODULE_SELECT_onchange = function(event) {
    try {
        HIDDEN_SHOW_LC_LG_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SOURCE_REF_onchange = function(event) {
    try {
        SYS_GetCUBK(document.MAINFORM.MODULE_SELECT.value + "_MASTER", 'SOURCE_REF');
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_SyndClaim_LG.js", e);
    }
}