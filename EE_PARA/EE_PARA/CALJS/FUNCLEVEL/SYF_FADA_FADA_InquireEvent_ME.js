var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('G').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to PF for SCF change
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "none";
        } //mark for new SCF
 
        if(document.MAINFORM.INV_FIN_MODE.value=='POOL'){
        	bal=SYS_FloatSub(SYS_FloatMul(SYS_BeFloat(document.MAINFORM.FA_TTL_ADJ_BAL.value),SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value))/100,SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value));
        	document.MAINFORM.AMT_AVAL_FOR_FUNDING.value= SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, bal);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_FADA_InquireEvent_ME.js*PostconditionOnInit", e);
    }
}