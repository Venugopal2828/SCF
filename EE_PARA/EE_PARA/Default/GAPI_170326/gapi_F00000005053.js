//var cancel = DV.getFieldValue("CANCEL_FLG");
//DV.writeLog("GAPI_IND_FLG ------------%%%-----------++");
//if(cancel != "Yes") {
//	var GAPI_CHECK=DV.getFieldValue("GAPI_IND_FLG");
//	var CUST_TYPE=DV.getFieldValue("APP_TYPE");
//	var CUST_TYPE2=DV.getFieldValue("BENE_AC_TYPE");
//	DV.writeLog("GAPI_IND_FLG ------------------------"+GAPI_CHECK);
//
//	if(GAPI_CHECK=="false"){
//		if(CUST_TYPE =="CUSTOMER" || CUST_TYPE2 == "CUSTOMER"){
//			var CUST_RECORDER_TYPE = DV.getFieldValue("RECORDER_TYPE");
//			var BENE_RECORDER_TYPE = DV.getFieldValue("BENE_RECORDER_TYPE");
//			
//			if (CUST_RECORDER_TYPE == "Customer" || BENE_RECORDER_TYPE == //"Customer") {
//				var CHG_CASH_IND = DV.getFieldValue("CHG_CASH_IND");
//				
//				if ((BENE_RECORDER_TYPE == "Customer" && CHG_CASH_IND //== "No") || CUST_RECORDER_TYPE == "Customer") {
//
//					DV.appendField("PYMT_BalanceCheck");
//					DV.appendField("PYMT_BalanceCheckRel");
//				}
//			}
//		}
//	}
//
//	DV.appendField("PYMT_EE2BRDG");
//
//	var autoCreated = DV.getFieldValue("AUTO_CREATED");
//
//	if (autoCreated == "Yes") {
//		DV.writeLog("EE_TO_BRIDGE_TRN GAPI start");
//		DV.appendField("PYMT_EE_TO_BRIDGE_TRN");
//	}
//}