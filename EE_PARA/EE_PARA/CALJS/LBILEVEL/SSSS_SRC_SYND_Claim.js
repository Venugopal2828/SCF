"path:SCRN/Library/SYND/SYND_Claim.lbi";

var csLbiCompProto = {};

csLbiCompProto.Claim_AMT_onchange = function() {
    try {
        var CLM_TRX_CCY_AMT; // Utility Auto Fix Comments
        var _data; // Utility Auto Fix Comments
        var _data_2; // Utility Auto Fix Comments
        var ParticipanttotalAmt; // Utility Auto Fix Comments
        var SYND_PART_AMT_PERCENT_obj; // Utility Auto Fix Comments
        var SYND_PART_BAL; // Utility Auto Fix Comments
        var SYND_PART_PAY_AMT; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var payamount; // Utility Auto Fix Comments
        var percent = 0; // Utility Auto Fix Comments
        var syndtotalamt; // Utility Auto Fix Comments
        var partamt;
        var targetDo; // Utility Auto Fix Comments
        var targetDo_records; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        if (document.MAINFORM.CLM_PERCENT.value > 100 || document.MAINFORM.CLM_PERCENT.value < 0) {
            document.MAINFORM.CLM_PERCENT.value = 0;
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            Hidden_View_Payment_tab();
            SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_AMT').value = SYT_AmtFormat(SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_CCY').value, SYS_getFieldSumByXpath('SYND_PART_FAMT', 'ParticipantHeader.ParticipantDetail'));
            return;
        }
        if (SYS_BeFloat(document.MAINFORM.CLM_PERCENT.value) >= 0) {
            syndtotalamt = SYS_BeFloat(SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_AMT').value) + SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
            var c_ref = document.MAINFORM.C_MAIN_REF.value;
            partamt = SYS_BeFloat(document.MAINFORM.PCPT_BAL.value) + SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
            if (c_ref.indexOf("PART") != -1) {
                document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_AMT.value, partamt * SYS_BeFloat(document.MAINFORM.CLM_PERCENT.value) / 100);
                CLM_TRX_CCY_AMT = document.MAINFORM.CLM_TRX_CCY_AMT.value;
                document.MAINFORM.PCPT_BAL.value = SYS_BeFloat(partamt) - SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
            } else {
                document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, syndtotalamt * SYS_BeFloat(document.MAINFORM.CLM_PERCENT.value) / 100);
                CLM_TRX_CCY_AMT = document.MAINFORM.CLM_TRX_CCY_AMT.value;
                ccy = SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_CCY').value;
                targetDo = null;
                targetDo_records = null;
                targetDo = SYS_getDoByXpath("ParticipantHeader.ParticipantDetail");
                targetDo_records = SYS_getRecords(targetDo);
                if (targetDo_records == null || targetDo_records.length == 0) {
                    return;
                }
                len = targetDo_records.length;
                _data = []; // Utility Auto Fix Comments
                _data_2 = []; // Utility Auto Fix Comments
                for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                    vDo = targetDo_records[i];
                    ParticipanttotalAmt = SYS_getValFromRec(vDo, 'SYND_PART_AMT');
                    if ('SYND' == SYS_MODULE_NAME) {
                        percent = (SYS_getValFromRec(vDo, 'SYND_PART_BAL') / SYS_BeFloat(SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_AMT').value)) * 100;
                    }
                    SYS_setValToRec(vDo, 'SYND_PART_AMT_PERCENT', percent);
                    totalamount = SYS_BeFloat(syndtotalamt) - SYS_BeFloat(CLM_TRX_CCY_AMT);
                    trxamount = totalamount * percent / 100;
                    payamount = ParticipanttotalAmt - trxamount;
                    if (isNaN(trxamount) || isNaN(payamount)) {
                        trxamount = 0;
                        payamount = 0;
                    } else {
                        SYND_PART_BAL = SYS_setValToRec(vDo, 'SYND_PART_BAL', trxamount);
                        SYND_PART_PAY_AMT = SYS_setValToRec(vDo, 'SYND_PART_PAY_AMT', payamount);
                        _data.push(SYND_PART_BAL); // Utility Auto Fix Comments
                        _data_2.push(SYND_PART_PAY_AMT); // Utility Auto Fix Comments
                    }
                }
                SYS_reLoadGrid(targetDo, _data); // Utility Auto Fix Comments
                SYS_reLoadGrid(targetDo, _data_2); // Utility Auto Fix Comments
                SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_AMT').value = SYT_AmtFormat(SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_CCY').value, syndtotalamt - SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value));
                document.MAINFORM.PCPT_BAL.value = SYS_getScreenObjByxpath("ParticipantHeader", 'SYND_AMT').value;
            }
        }
        document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_AMT, 'onchange');
        //getCPYT_DR_TTL_AMT_TTLCCY();
        //getCPYT_CR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_Claim.js", e);
    }
}

csLbiCompProto.Hidden_View_Payment_tab = function() {
    try {
        if (document.MAINFORM.CLM_TRX_CCY_AMT.value != '' && document.MAINFORM.CLM_TRX_CCY_AMT.value != 0) {
            EEHtml.getElementById('C').style.display = "block";
            EEHtml.getElementById('C_Payment').style.display = "block";
        } else {
            EEHtml.getElementById('C').style.display = 'none';
            EEHtml.getElementById('C_Payment').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_Claim.js", e);
    }
}