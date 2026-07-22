function AdviceForBankCust_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function AdviceForBankCust_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_AdviceForBankCust() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}


function PaymentTermsHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function PaymentTermsHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function PaymentTermsHeader_PaymentTerms(node, recordId, status) {
    try {
        //modified for PUI
        return;
        /*
var mixpay='';
var arrayvalue= SYS_getRecords(node);
for(var i=0,len=arrayvalue.length;i<len;i++){
	var ss = arrayvalue[i];
	 status=ss['recordType'];
	if(status!='D'&& status!='C'){
		 var value1 = ss['CPYT_C_PAY_PER']+'PEC';
		 var value2 = 'AT'+' '+ss['CPYT_I_TENOR_DAYS'];
		 var value3 = ss['CPYT_C_TENOR_TYPE'];
		 var value4 = ss['CPYT_C_TENOR_DESC'];
		 if(ss['CPYT_I_TENOR_DAYS']!=0){
			 if(value3 =='OTHER'){mixpay +=value1+' '+value2+' '+value4+'\r\n';}
			 else{mixpay +=value1+' '+value2+' '+value3+'\r\n';}
			}
			 else{mixpay +=value1+' '+'At Sight'+'\n';}
			}
		}
SYS_setCurrNodeParentValue('PaymentTermsHeader','CPYT_C_MIX_PAY_DETAIL',mixpay);
*/
        /*
var availby=SYS_getValueFromMain('AVAL_BY');
if(availby=='BY MIXED PYMT'){
   //SYS_setValueToMain('MIX_PMT_DETL', mixpay);
}
else if (availby=='BY DEF PAYMENT'){
SYS_setValueToMain('DEF_PMT_DET', mixpay);
}
var sumCPYT_C_PAY_PER = SYS_getFieldSumValue(node,'CPYT_C_PAY_PER');
var sum=SYS_BeFloat(sumCPYT_C_PAY_PER);
*/

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function PaymentTermsHeader_PaymentTerms_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function PaymentTermsHeader_PaymentTerms_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentTermsHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentTermsHeader_PaymentTerms() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720_DO.js", e);
    }
}