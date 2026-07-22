function AdviceForBankCust_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function AdviceForBankCust_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_AdviceForBankCust() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}


function PaymentTermsHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function PaymentTermsHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
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
   var status=ss['recordType'];
   if(status!='D'&& status!='C'){
		 var value1 = ss['CPYT_C_PAY_PER']+'PEC';
		 var value2 = 'AT'+' '+ss['CPYT_I_TENOR_DAYS'];
		 var value3 = ss['CPYT_C_TENOR_TYPE'];
		 var value4 = ss['CPYT_C_TENOR_DESC'];
     if(ss['CPYT_I_TENOR_DAYS']!=0){
     	if(value3 =='OTHER'){
     	   if(mixpay==''){
		mixpay +=value1+' '+value2+' '+value4;
		}else{mixpay +="\r\n"+value1+' '+value2+' '+value4;}
	}else{
		if(mixpay==''){
			mixpay +=value1+' '+value2+' '+value3;
		}else{mixpay +="\r\n"+value1+' '+value2+' '+value3;}
		}
	   }else{if(mixpay==''){
	     mixpay +=value1+' '+'At Sight';
	   }else{
	  mixpay +="\r\n"+value1+' '+'At Sight';
	}
       }
    }
}
//////////////////////////////////////
SYS_setCurrNodeParentValue('PaymentTermsHeader','CPYT_C_MIX_PAY_DETAIL',mixpay);

var arrBreak = mixpay.split("\r\n");
var len = arrBreak.length;
var rows =0;
var cols = 35;
var sLine = "";
for(var i=0;i<len;i++)
{
	sLine = arrBreak[i];
	var length = sLine.length;
	if(length>cols){
	   rows+=SYM_IPLC_getRows(sLine,cols);
	}else{
	  rows++;
	}
}

if(rows<=4){
 		SYS_setValueToMain('MIX_PMT_DETL', mixpay);
 		SYS_setValueToMain('ADDIT_CONDITION', "");
 		}else{
 			SYS_setValueToMain('MIX_PMT_DETL', "Please see the additional conditions field");
 			SYS_setValueToMain('ADDIT_CONDITION', mixpay);
 			}
*/
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function PaymentTermsHeader_PaymentTerms_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function PaymentTermsHeader_PaymentTerms_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentTermsHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentTermsHeader_PaymentTerms() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLC_DO.js", e);
    }
}