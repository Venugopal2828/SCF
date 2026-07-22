var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SYND_SetMainRef = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //SYS_GetRefNo('SYDRef','SYF_SYND_SetMainRef');
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_Init_Notes(document.MAINFORM.LEAD_NOTES.name);
        //SYT_Show_Notes(document.MAINFORM.LEAD_NOTES.name);
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC') {
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
            // SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_GTEE, 'P');
        }
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        SYF_SYND_Amount_Format();
        SYF_SYND_AMT_onChange();
        SYF_SYND_HIDDEN_SHOW_LC_LG_BTN();

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('SYNDREG', 'SYF_SYND_SetMainRef');
        SYF_SYND_cal_C_MAIN_REF();
        document.MAINFORM.SYND_PER.value = 100;
        document.MAINFORM.PCPT_START_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        SYF_SYND_GET_BACK();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_HIDDEN_SHOW_LC_LG_BTN = function() {
    try {

        var MODULE_SELECT = document.MAINFORM.MODULE_SELECT.value;

        switch (MODULE_SELECT) {
            case 'EPLC':
            case 'IPLC':
                EEHtml.getElementById('MASTER_LC_BTN').style.display = "block";
                EEHtml.getElementById('MASTER_LG_BTN').style.display = "none";
                break;
            case 'GTEE':
            case 'IWGT':
                EEHtml.getElementById('MASTER_LG_BTN').style.display = "block";
                EEHtml.getElementById('MASTER_LC_BTN').style.display = "none";
                break;
            default:
                EEHtml.getElementById('MASTER_LG_BTN').style.display = "none";
                EEHtml.getElementById('MASTER_LC_BTN').style.display = "none";
                break;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Inq_MASTER_DETAILS = function() {
    try {

        var RULE_NM = document.MAINFORM.MODULE_SELECT.value + "_MASTER";
        if (RULE_NM == "EPLC_MASTER") {
            SYS_InqCUBK_byCondition('EPLC_MASTER', '1');
        } else if (RULE_NM == "IPLC_MASTER") {
            SYS_InqCUBK_byCondition('IPLC_MASTER', '1');
        } else if (RULE_NM == "GTEE_MASTER") {
            SYS_InqCUBK_byCondition('GTEE_MASTER', '1');
        } else {
            SYS_InqCUBK_byCondition('IWGT_MASTER', '1');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Clear_MASTER_DETAILS = function() {
    try {

        document.MAINFORM.SOURCE_REF.value = '';
        document.MAINFORM.TRX_TYPE.value = '';
        document.MAINFORM.APLB_RULE.value = '';
        document.MAINFORM.LC_NO.value = '';
        document.MAINFORM.MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_LC_AMT.value);
        document.MAINFORM.MAST_LC_CCY.value = '';
        document.MAINFORM.AVAL_BY.value = '';
        document.MAINFORM.POS_TOL.value = '';
        document.MAINFORM.NEG_TOL.value = '';
        document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_RISK_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_AMT_onChange = function() {
    try {

        document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.PCPT_AMT.value);
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        var mainamt = document.MAINFORM.PCPT_AMT.value;
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
                SYS_refreshChildDoValue("ParticipantHeader.ParticipantDetail", synpartamt, synd_amtone);
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
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Date_Check = function() {
    try {

        var nDays = SYS_GetSubDays(document.MAINFORM.PCPT_EXPIRY_DT.name, document.MAINFORM.PCPT_START_DT.name);

        if (nDays > 0) {
            alert("Syndication Expiry date should be later than Syndication start date");
            document.MAINFORM.PCPT_EXPIRY_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_PCPT_CCY = function() {
    try {

        document.MAINFORM.PCPT_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
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
        SYF_SYND_Date_Check();

        return (SYF_SYND_CHECK_SyndicationPercentage());
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Clear_Fields = function() {
    try {

        document.MAINFORM.SOURCE_REF.value = '';
        document.MAINFORM.TRX_TYPE.value = '';
        document.MAINFORM.APLB_RULE.value = '';
        document.MAINFORM.COUNTR_GTEE.value = '';
        document.MAINFORM.LC_NO.value = '';
        document.MAINFORM.MAST_START_DT.value = '';
        document.MAINFORM.MAST_END_DT.value = '';
        document.MAINFORM.AVAL_BY.value = '';
        document.MAINFORM.AMT_SPEC.value = '';
        document.MAINFORM.POS_TOL.value = '';
        document.MAINFORM.NEG_TOL.value = '';
        document.MAINFORM.MAST_TRX_DESC.value = '';
        document.MAINFORM.PCPT_START_DT.value = '';
        document.MAINFORM.PCPT_EXPIRY_DT.value = '';
        document.MAINFORM.APPL_NM.value = '';
        document.MAINFORM.APPL_ADD1.value = '';
        document.MAINFORM.APPL_ADD2.value = '';
        document.MAINFORM.APPL_ADD3.value = '';
        document.MAINFORM.APPL_CNTY.value = '';
        document.MAINFORM.FORACOF_NM.value = '';
        document.MAINFORM.BENE_NM.value = '';
        document.MAINFORM.ADV_BK_NM.value = '';
        document.MAINFORM.ADV_BK_SW_ADD.value = '';
        document.MAINFORM.ADV_BK_SW_TAG.value = '';
        document.MAINFORM.ISSUE_BK_NM.value = '';
        document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
        document.MAINFORM.ISSUE_BK_SW_TAG.value = '';
        document.MAINFORM.LTST_SHIP_DT.value = '';
        document.MAINFORM.LOAD_PLACE.value = '';
        document.MAINFORM.DEST_PLACE.value = '';
        document.MAINFORM.DESC_OF_GOODS.value = '';
        document.MAINFORM.ADDIT_CONDITION.value = '';
        document.MAINFORM.FXD_EXPIRY.value = '';
        document.MAINFORM.AUTO_RENEW.value = '';
        document.MAINFORM.GTEE_DETAILS_79.value = '';
        //jax added 2020/6/9
        document.MAINFORM.ADV_DT.value = '';
        document.MAINFORM.MAST_LC_CCY.value = '';
        document.MAINFORM.MAST_LC_AMT.value = 0;
        document.MAINFORM.MAST_RISK_AMT.value = 0;
        document.MAINFORM.R_ASSET_ACNO.value = '';
        document.MAINFORM.PCPT_CCY.value = '';
        document.MAINFORM.PCPT_AMT.value = 0;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_MODULE_SELECT_onChange = function() {
    try {

        SYF_SYND_HIDDEN_SHOW_LC_LG_BTN();
        var MODULE_SELECT = document.MAINFORM.MODULE_SELECT.value;
        switch (MODULE_SELECT) {
            case 'EPLC':

                EEHtml.getElementById('LCNOdivL').style.display = '';
                EEHtml.getElementById('LCNOdiv').style.display = '';
                EEHtml.getElementById('CountrdivL').style.display = 'none';
                EEHtml.getElementById('Countrdiv').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdivL').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdiv').style.display = 'none';
                EEHtml.getElementById('NXTCOMMDTdivL').style.display = 'none';
                EEHtml.getElementById('NXTCOMMDTdiv').style.display = 'none';
                EEHtml.getElementById('toldivL').style.display = '';
                EEHtml.getElementById('toldiv').style.display = '';
                EEHtml.getElementById('ADVDTdivL').style.display = '';
                EEHtml.getElementById('ADVDTdiv').style.display = '';

                EEHtml.getElementById('ISSBKNMdivL').style.display = '';
                EEHtml.getElementById('ISSBKNMdiv').style.display = '';
                EEHtml.getElementById('ISSBKSWADDdivL').style.display = '';
                EEHtml.getElementById('ISSBKSWADDdiv').style.display = '';
                EEHtml.getElementById('FORACNMdivL').style.display = 'none';
                EEHtml.getElementById('FORACNMdiv').style.display = 'none';
                EEHtml.getElementById('ADVBKNMdivL').style.display = 'none';
                EEHtml.getElementById('ADVBKNMdiv').style.display = 'none';
                EEHtml.getElementById('ADVBKSWADDdivL').style.display = 'none';
                EEHtml.getElementById('ADVBKSWADDdiv').style.display = 'none';

                EEHtml.getElementById('divgoods1').style.display = '';
                EEHtml.getElementById('ltstshipmntdtL').style.display = '';
                EEHtml.getElementById('ltstshipmntdt').style.display = '';
                EEHtml.getElementById('divshipfromL').style.display = '';
                EEHtml.getElementById('divshipfrom').style.display = '';
                EEHtml.getElementById('divshiptoL').style.display = '';
                EEHtml.getElementById('divshipto').style.display = '';
                EEHtml.getElementById('divdescofgoodsL').style.display = '';
                EEHtml.getElementById('divdescofgoods').style.display = '';
                EEHtml.getElementById('divaddcondL').style.display = '';
                EEHtml.getElementById('divaddcond').style.display = '';
                EEHtml.getElementById('divgoods').style.display = 'none';
                EEHtml.getElementById('divexpiryL').style.display = 'none';
                EEHtml.getElementById('divexpiry').style.display = 'none';
                EEHtml.getElementById('divautorenewL').style.display = 'none';
                EEHtml.getElementById('divautorenew').style.display = 'none';
                EEHtml.getElementById('divguartextL').style.display = 'none';
                EEHtml.getElementById('divguartext').style.display = 'none';

                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
                break;

            case 'IPLC':
                EEHtml.getElementById('LCNOdivL').style.display = '';
                EEHtml.getElementById('LCNOdiv').style.display = '';
                EEHtml.getElementById('CountrdivL').style.display = 'none';
                EEHtml.getElementById('Countrdiv').style.display = 'none';
                EEHtml.getElementById('ADVDTdivL').style.display = 'none';
                EEHtml.getElementById('ADVDTdiv').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdivL').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdiv').style.display = 'none';
                EEHtml.getElementById('NXTCOMMDTdivL').style.display = 'none';
                EEHtml.getElementById('NXTCOMMDTdiv').style.display = 'none';
                EEHtml.getElementById('toldivL').style.display = '';
                EEHtml.getElementById('toldiv').style.display = '';

                EEHtml.getElementById('FORACNMdivL').style.display = '';
                EEHtml.getElementById('FORACNMdiv').style.display = '';
                EEHtml.getElementById('ADVBKNMdivL').style.display = '';
                EEHtml.getElementById('ADVBKNMdiv').style.display = '';
                EEHtml.getElementById('ADVBKSWADDdivL').style.display = '';
                EEHtml.getElementById('ADVBKSWADDdiv').style.display = '';
                EEHtml.getElementById('ISSBKNMdivL').style.display = 'none';
                EEHtml.getElementById('ISSBKNMdiv').style.display = 'none';
                EEHtml.getElementById('ISSBKSWADDdivL').style.display = 'none';
                EEHtml.getElementById('ISSBKSWADDdiv').style.display = 'none';

                EEHtml.getElementById('divgoods1').style.display = '';
                EEHtml.getElementById('ltstshipmntdtL').style.display = '';
                EEHtml.getElementById('ltstshipmntdt').style.display = '';
                EEHtml.getElementById('divshipfromL').style.display = '';
                EEHtml.getElementById('divshipfrom').style.display = '';
                EEHtml.getElementById('divshiptoL').style.display = '';
                EEHtml.getElementById('divshipto').style.display = '';
                EEHtml.getElementById('divdescofgoodsL').style.display = '';
                EEHtml.getElementById('divdescofgoods').style.display = '';
                EEHtml.getElementById('divaddcondL').style.display = '';
                EEHtml.getElementById('divaddcond').style.display = '';
                EEHtml.getElementById('divgoods').style.display = 'none';
                EEHtml.getElementById('divexpiryL').style.display = 'none';
                EEHtml.getElementById('divexpiry').style.display = 'none';
                EEHtml.getElementById('divautorenewL').style.display = 'none';
                EEHtml.getElementById('divautorenew').style.display = 'none';
                EEHtml.getElementById('divguartextL').style.display = 'none';
                EEHtml.getElementById('divguartext').style.display = 'none';

                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');

                break;

            case 'GTEE':
                EEHtml.getElementById('CountrdivL').style.display = '';
                EEHtml.getElementById('Countrdiv').style.display = '';
                EEHtml.getElementById('ADVDTdivL').style.display = 'none';
                EEHtml.getElementById('ADVDTdiv').style.display = 'none';
                EEHtml.getElementById('LCNOdivL').style.display = 'none';
                EEHtml.getElementById('LCNOdiv').style.display = 'none';
                EEHtml.getElementById('toldivL').style.display = 'none';
                EEHtml.getElementById('toldiv').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdivL').style.display = '';
                EEHtml.getElementById('CHGPLCYdiv').style.display = '';
                EEHtml.getElementById('NXTCOMMDTdivL').style.display = '';
                EEHtml.getElementById('NXTCOMMDTdiv').style.display = '';

                EEHtml.getElementById('FORACNMdivL').style.display = '';
                EEHtml.getElementById('FORACNMdiv').style.display = '';
                EEHtml.getElementById('ADVBKNMdivL').style.display = '';
                EEHtml.getElementById('ADVBKNMdiv').style.display = '';
                EEHtml.getElementById('ADVBKSWADDdivL').style.display = '';
                EEHtml.getElementById('ADVBKSWADDdiv').style.display = '';
                EEHtml.getElementById('ISSBKNMdivL').style.display = 'none';
                EEHtml.getElementById('ISSBKNMdiv').style.display = 'none';
                EEHtml.getElementById('ISSBKSWADDdivL').style.display = 'none';
                EEHtml.getElementById('ISSBKSWADDdiv').style.display = 'none';

                EEHtml.getElementById('divgoods1').style.display = 'none';
                EEHtml.getElementById('ltstshipmntdtL').style.display = 'none';
                EEHtml.getElementById('ltstshipmntdt').style.display = 'none';
                EEHtml.getElementById('divshipfromL').style.display = 'none';
                EEHtml.getElementById('divshipfrom').style.display = 'none';
                EEHtml.getElementById('divshiptoL').style.display = 'none';
                EEHtml.getElementById('divshipto').style.display = 'none';
                EEHtml.getElementById('divdescofgoodsL').style.display = 'none';
                EEHtml.getElementById('divdescofgoods').style.display = 'none';
                EEHtml.getElementById('divaddcondL').style.display = 'none';
                EEHtml.getElementById('divaddcond').style.display = 'none';
                EEHtml.getElementById('divgoods').style.display = '';
                EEHtml.getElementById('divexpiryL').style.display = '';
                EEHtml.getElementById('divexpiry').style.display = '';
                EEHtml.getElementById('divautorenewL').style.display = '';
                EEHtml.getElementById('divautorenew').style.display = '';
                EEHtml.getElementById('divguartextL').style.display = '';
                EEHtml.getElementById('divguartext').style.display = '';
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');

                break;

            case 'IWGT':
                EEHtml.getElementById('CountrdivL').style.display = '';
                EEHtml.getElementById('Countrdiv').style.display = '';
                EEHtml.getElementById('ADVDTdivL').style.display = 'none';
                EEHtml.getElementById('ADVDTdiv').style.display = 'none';
                EEHtml.getElementById('LCNOdivL').style.display = 'none';
                EEHtml.getElementById('LCNOdiv').style.display = 'none';
                EEHtml.getElementById('toldivL').style.display = 'none';
                EEHtml.getElementById('toldiv').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdivL').style.display = 'none';
                EEHtml.getElementById('CHGPLCYdiv').style.display = 'none';
                EEHtml.getElementById('NXTCOMMDTdivL').style.display = 'none';
                EEHtml.getElementById('NXTCOMMDTdiv').style.display = 'none';

                EEHtml.getElementById('ISSBKNMdivL').style.display = '';
                EEHtml.getElementById('ISSBKNMdiv').style.display = '';
                EEHtml.getElementById('ISSBKSWADDdivL').style.display = '';
                EEHtml.getElementById('ISSBKSWADDdiv').style.display = '';
                EEHtml.getElementById('FORACNMdivL').style.display = 'none';
                EEHtml.getElementById('FORACNMdiv').style.display = 'none';
                EEHtml.getElementById('ADVBKNMdivL').style.display = 'none';
                EEHtml.getElementById('ADVBKNMdiv').style.display = 'none';
                EEHtml.getElementById('ADVBKSWADDdivL').style.display = 'none';
                EEHtml.getElementById('ADVBKSWADDdiv').style.display = 'none';

                EEHtml.getElementById('divgoods1').style.display = 'none';
                EEHtml.getElementById('ltstshipmntdtL').style.display = 'none';
                EEHtml.getElementById('ltstshipmntdt').style.display = 'none';
                EEHtml.getElementById('divshipfromL').style.display = 'none';
                EEHtml.getElementById('divshipfrom').style.display = 'none';
                EEHtml.getElementById('divshiptoL').style.display = 'none';
                EEHtml.getElementById('divshipto').style.display = 'none';
                EEHtml.getElementById('divdescofgoodsL').style.display = 'none';
                EEHtml.getElementById('divdescofgoods').style.display = 'none';
                EEHtml.getElementById('divaddcondL').style.display = 'none';
                EEHtml.getElementById('divaddcond').style.display = 'none';
                EEHtml.getElementById('divgoods').style.display = '';
                EEHtml.getElementById('divexpiryL').style.display = '';
                EEHtml.getElementById('divexpiry').style.display = '';
                EEHtml.getElementById('divautorenewL').style.display = '';
                EEHtml.getElementById('divautorenew').style.display = '';
                EEHtml.getElementById('divguartextL').style.display = '';
                EEHtml.getElementById('divguartext').style.display = '';

                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
                break;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_cal_C_MAIN_REF = function() {
    try {
//        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value.trim().substring(0, 11) + " ";
// Henry_Remove blank for Uipath purpose
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value.trim().substring(0, 11);
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Amount_Format = function() {
    try {

        document.MAINFORM.MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_LC_AMT.value);
        document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_RISK_AMT.value);
        document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.PCPT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_GET_BACK = function() {
    try {

        //document.MAINFORM.PCPT_EXPIRY_DT.value = document.MAINFORM.MAST_END_DT.value;
        document.MAINFORM.PCPT_START_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.PCPT_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
        document.MAINFORM.PCPT_AMT.value = document.MAINFORM.MAST_LC_AMT.value;

        SYS_refreshChildDoValue("ParticipantHeader", "RECRS_PRTY_NM", document.MAINFORM.R_PARTY_NM.value);
        SYS_refreshChildDoValue("ParticipantHeader", "RECRS_PRTY_CNTY_CD", document.MAINFORM.R_PARTY_CNTY.value);
        SYS_refreshChildDoValue("ParticipantHeader", "RECRS_PRTY_REF", document.MAINFORM.LC_NO.value);
        SYS_refreshChildDoValue("ParticipantHeader", "RECRS_PRTY_SW_ADD", document.MAINFORM.ISSUE_BK_SW_ADD.value);
        SYS_refreshChildDoValue("ParticipantHeader", "RECRS_PRTY_SW_TAG", document.MAINFORM.ISSUE_BK_SW_TAG.value);
        SYS_refreshChildDoValue("ParticipantHeader", "SYND_CCY", document.MAINFORM.MAST_LC_CCY.value);
        SYS_refreshChildDoValue("ParticipantHeader", "SYND_AMT", document.MAINFORM.PCPT_AMT.value);
        SYS_refreshChildDoValue("ParticipantHeader", "SYND_EXPIRY_DT", document.MAINFORM.PCPT_EXPIRY_DT.value);
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CHECK_SyndicationPercentage = function() {
    try {

        var amt = SYS_getFieldSumByXpath('PART_PER', 'ParticipantHeader.ParticipantDetail');
        if (amt != 100) {
            alert("Syndication percentage is not 100% ,please check!");
            return false;
        }
        document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.PCPT_AMT.value);
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_SYND_RISK_AMT = function() {
    try {

        var MAST_RISK = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        var PCPT_AMT = SYS_BeFloat(document.MAINFORM.PCPT_AMT.value);
        var SYND_RISK_AMT = SYS_BeFloat(document.MAINFORM.SYND_RISK_AMT.value);

        SYND_RISK_AMT = MAST_RISK - PCPT_AMT;

        document.MAINFORM.SYND_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, SYND_RISK_AMT);
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_GetDataFromDo = function() {
    try {

        var obj = SYS_getScreenObjByxpath("ParticipantHeader", "RECRS_PRTY_NM");
        document.MAINFORM.TEMP_RECRS_PRTY_NM.value = obj.value;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        SYF_SYND_GetDataFromDo();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Fail_CntyHoliday = function() {
    try {

        alert("The Value Date entered falls on a Local Public Holiday, please change the Value Date")
        document.MAINFORM.PCPT_EXPIRY_DT.value = "";
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AMT_SPEC_onchange = function(event) {
    try {
        var amtSpc = document.MAINFORM.AMT_SPEC.value;
        document.MAINFORM.POS_TOL.value = '';
        document.MAINFORM.NEG_TOL.value = '';
        document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
        FLD_SYND_SYND_PER_onchange();
        if (amtSpc == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MASTER_LC_BTN_onclick = function(event) {
    try {
        SYF_SYND_Inq_MASTER_DETAILS();
        SYF_SYND_Clear_MASTER_DETAILS();
        SYF_SYND_Amount_Format();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MASTER_LG_BTN_onclick = function(event) {
    try {
        SYF_SYND_Inq_MASTER_DETAILS();
        SYF_SYND_Clear_MASTER_DETAILS();
        SYF_SYND_Amount_Format();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_LC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_LC_CCY_onchange = function(event) {
    try {
        SYF_SYND_PCPT_CCY();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_RISK_AMT_onchange = function(event) {
    try {
        var LC_AMT = document.MAINFORM.MAST_RISK_AMT.value;
        document.MAINFORM.PCPT_AMT.value = LC_AMT;
        SYF_SYND_Amount_Format();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MODULE_SELECT_onchange = function(event) {
    try {
        if (document.MAINFORM.MODULE_SELECT.value != '' || document.MAINFORM.MODULE_SELECT.value != null) {
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE, 'O');
        }

        if (document.MAINFORM.MODULE_SELECT.value == 'IWGT' || document.MAINFORM.MODULE_SELECT.value == 'GTEE') {
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_GTEE, 'P');
        }
        SYF_SYND_HIDDEN_SHOW_LC_LG_BTN();
        SYF_SYND_MODULE_SELECT_onChange();
        SYF_SYND_Clear_Fields();
        SYF_SYND_Amount_Format();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEG_TOL_onchange = function(event) {
    try {
        /*	document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        var neg = parseFloat(document.MAINFORM.NEG_TOL.value);
        var riskamt = document.MAINFORM.MAST_RISK_AMT.value;
        var decamt;
        if (riskamt <= 0) {
            alert("please select the LC Details");
        } else if (neg > 0 && document.MAINFORM.AMT_SPEC.value != '') {
            decamt = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) * SYS_BeFloat(neg) / 100;
            riskamt = SYS_BeFloat(riskamt) - SYS_BeFloat(decamt);
            document.MAINFORM.MAST_RISK_AMT.value = riskamt;
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
            FLD_SYND_SYND_PER_onchange();
        } else if (neg == 0 || isNaN(neg)) {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            FLD_SYND_SYND_PER_onchange();
        } else {
            document.MAINFORM.NEG_TOL.value = 0;
            alert("Incorrect amount specfication ");
        }*/
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_AMT_onchange = function(event) {
    try {
        if (SYM_SYND_CHK_NEG_VAL(document.MAINFORM.PCPT_AMT.value)) {
            alert("Syndication amount should not accept negative values");
            document.MAINFORM.PCPT_AMT.value = '';
            document.MAINFORM.SYND_PER.value = '';
        } else if (SYS_BeFloat(document.MAINFORM.PCPT_AMT.value) <= SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) {
            document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
            var amt = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
            if (amt != " " && SYS_BeFloat(amt)) {
                per = SYS_BeFloat(document.MAINFORM.PCPT_AMT.value) / SYS_BeFloat(amt) * 100;
                per = Math.round(per * 100) / 100;
                document.MAINFORM.SYND_PER.value = per;
            }
            SYF_SYND_AMT_onChange();
            SYF_SYND_Amount_Format();
            /*
		var mainamt = document.MAINFORM.PCPT_AMT.value;
		var syndamt = document.MAINFORM.SYND_AMT.name;
		SYS_refreshChildDoValue("ParticipantHeader",syndamt,mainamt);
	*/
            SYF_SYND_SYND_RISK_AMT();
        } else {
            alert("Syndication amount should be less than risk amount");
            document.MAINFORM.PCPT_AMT.value = '';
            document.MAINFORM.SYND_PER.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_SYND_Date_Check();
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'PCPT_EXPIRY_DT');
        SYS_refreshChildDoValue("ParticipantHeader", "SYND_EXPIRY_DT", document.MAINFORM.PCPT_EXPIRY_DT.value);
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_START_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.PCPT_EXPIRY_DT.name, document.MAINFORM.PCPT_START_DT.name);
        if (nDays > 0) {
            alert("Syndication Start date should not accept more than expiry date");
            document.MAINFORM.PCPT_START_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_POS_TOL_onchange = function(event) {
    try {
        document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        var pos = parseFloat(document.MAINFORM.POS_TOL.value);
        var riskamt = document.MAINFORM.MAST_RISK_AMT.value;
        var incamt;
        if (riskamt <= 0) {
            alert("please select the LC Details");
        } else if (pos > 0 && document.MAINFORM.AMT_SPEC.value != '') {
            incamt = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) * SYS_BeFloat(pos) / 100;
            riskamt = SYS_BeFloat(riskamt) + SYS_BeFloat(incamt);
            //  document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
            document.MAINFORM.MAST_RISK_AMT.value = riskamt;
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
            //  FLD_SYND_PCPT_AMT_onchange();
            FLD_SYND_SYND_PER_onchange();
        } else if (pos == 0 || isNaN(pos)) {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            FLD_SYND_SYND_PER_onchange();
        } else {
            document.MAINFORM.POS_TOL.value = 0;
            alert("Incorrect amount specfication");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SOURCE_REF_onchange = function(event) {
    try {
        SYS_GetCUBK(document.MAINFORM.MODULE_SELECT.value + "_MASTER", 'SOURCE_REF', 'SYF_SYND_GET_BACK()');
        SYF_SYND_AMT_onChange();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SOURCE_REF.value;
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_PER_onchange = function(event) {
    try {
        if (document.MAINFORM.SYND_PER.value <= 100 && document.MAINFORM.SYND_PER.value >= 0) {
            var nPER = SYS_BeFloat(document.MAINFORM.SYND_PER.value);
            var nRISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
            var nPCPT_AMT = SYS_BeFloat(nRISK_AMT * nPER / 100);
            document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, nPCPT_AMT);
            SYF_SYND_AMT_onChange();
            SYF_SYND_SYND_RISK_AMT();
        } else {
            alert("Syndication percentage should be less than or equal to 100");
            document.MAINFORM.SYND_PER.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt.js", e);
    }
}