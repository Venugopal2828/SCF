stp.setAutoProcess(true);
stp.writeLog("============EXCO_ReceivePmtIns====start============");
var C_MAIN_REF = stp.getXMLNodeValue("BK_MAIN_REF");
var CUST_REF = stp.getXMLNodeValue("CEMainRef");
var AMT = stp.getXMLNodeValue("TTL_PAYABLE_AMT");
stp.writeLog("C_MAIN_REF:" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

stp.writeLog("CUST_REF=====" + CUST_REF);

stp.updateFieldValue("CUST_REF", CUST_REF);

stp.updateFieldValue("WEB_REF", CUST_REF);


/*stp.SYS_getCUBK("DEL_OF_DRAW","DRAWING_REF");*/
stp.setGapiRule("EXCO_005_PmtInstr");
stp.updateFieldValue("CURRNT_STATUS", "EXCO_ReceivePmtIns");
stp.updateFieldValue("NXT_STATUS", "EXCO_PaymentCE");
//stp.updateFieldValue("COLL_TRX_CCY_AMT",AMT); //20190219 64672;
//delete for Unique test on 20200610
stp.updateFieldValue("NET_AMT_RCVD_COLL_CCY", AMT); //66210;
stp.updateFieldValue("DRWNG_AMT_COLL_CCY", AMT);


stp.writeLog("============EXCO_ReceivePmtIns====END============");