/*

var MESG_TYPE = DV.getFieldValue('MESG_TYPE');
var TEMP_CATEGORY_FLG = DV.getFieldValue('TEMP_CATEGORY_FLG');
var TEMP_MESG_TYPE = DV.getFieldValue('TEMP_MESG_TYPE');
var SWIFT_RULE = 'SSSS_SYT_MT';
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_CORR = DV.getFieldValue("CORR_SW_ADD");

DV.writeLog("CORR_SW_ADD: " + sB2_CORR);
if (MESG_TYPE.substr(0,2) =='MT' && TEMP_CATEGORY_FLG !='' && TEMP_MESG_TYPE.substr(0,3) != 'MT9'){
  var sResult_CORR = DV.checkRMA(sB1,sB2_CORR,TEMP_MESG_TYPE.substr(2,3));
  if(sResult_CORR =='TRUE'){
  		SWIFT_RULE = SWIFT_RULE + TEMP_CATEGORY_FLG + MESG_TYPE.substr(3,2);
  		DV.appendSWIFT(SWIFT_RULE);
	}else{
		var arr_para = new Array(sB1,sB2_CORR,TEMP_MESG_TYPE.substr(2,3));
		DV.throwException("1847",arr_para);
	}
}

if (TEMP_MESG_TYPE.substr(0,3) == 'MT9'){
	SWIFT_RULE = SWIFT_RULE + TEMP_CATEGORY_FLG + MESG_TYPE.substr(3,2);
	DV.appendSWIFT(SWIFT_RULE);
}
*/