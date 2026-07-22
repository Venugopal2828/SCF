CPYT_PAY_ADV_MSG = DV.getFieldValue("CPYT_PAY_ADV_MSG");
MX_OR_MT_FLAG = DV.getFieldValue("MX_OR_MT_FLAG");
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_103 = DV.getFieldValue("X103_ADV_BKSW_B2");
	
if (CPYT_PAY_ADV_MSG == 'MT103') {
	if (MX_OR_MT_FLAG == 'MX') {
		var sResult_103 = DV.checkRMA(sB1, sB2_103, "pacs.008");
		if (sResult_103 == 'TRUE') {
			DV.appendSWIFT("SSSS_CPYTMT103");
		}
		else {
			var arr_para = new Array(sB1, sB2_103, "pacs.008");
			DV.throwException("20007", arr_para);
		}
	}
	else if (MX_OR_MT_FLAG == 'MT'){
		var sResult_103 = DV.checkRMA(sB1, sB2_103, "103");
		if (sResult_103 == 'TRUE') {
			DV.appendSWIFT("SSSS_CPYTMT103");
		}
		else {
			var arr_para = new Array(sB1, sB2_103, "103");
			DV.throwException("1847", arr_para);
		}
	}
} else if (CPYT_PAY_ADV_MSG == 'MT202') {
    DV.appendSWIFT("SSSS_MT202");
} else if (CPYT_PAY_ADV_MSG == 'MT202COV') {
    DV.appendSWIFT("SSSS_CPYTMT103");
    DV.appendSWIFT("SSSS_CPYTMT202COV");
}