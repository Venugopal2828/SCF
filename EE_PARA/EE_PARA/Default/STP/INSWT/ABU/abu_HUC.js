/*

var sMsgType=stp.getSWIFTTagValue("B6").substr(1,3);   
stp.writeLog("sMsgType:"+sMsgType);

var sTagB5=stp.getSWIFTTagValue("B5");
stp.writeLog("sTagB5:"+sTagB5);
var sBIC1=sTagB5.substr(3,8);
var CNTY=sBIC1.substr(6,2);
var sBIC2=sTagB5.substr(12,3);
var sBIC=sBIC1+sBIC2;
stp.writeLog("sBIC:"+sBIC);
var vFieldList=stp.addFieldList(null,"C_UNIT_CODE");
var vCondition=stp.addSQLCondition(null,"C_BIC",sBIC);
var vResult = stp.executeQuery("EXIMSYS.STD_BUSINESS_UNIT",vFieldList,vCondition);
var sBusinessCode=stp.getDBFieldValue(vResult,"C_UNIT_CODE"); 
stp.writeLog("sBusinessCode:"+sBusinessCode);

var s21Tag=stp.getSWIFTTagValue("21");
stp.writeLog("s21Tag:"+s21Tag);

if(sMsgType=='700' || sMsgType=='701' || sMsgType=='760' || sMsgType=='998' || sMsgType=='999' || sMsgType=='705' || sMsgType=='710' || sMsgType=='720' || sMsgType=='103'|| sMsgType=='769'|| sMsgType=='796'|| sMsgType=='192' || sMsgType=='195' || sMsgType=='196' || sMsgType=='199'  || sMsgType=='732'  || sMsgType=='752'  || sMsgType=='754' || sMsgType=='792'  || sMsgType=='795' ) 
{
		stp.setBU(sBusinessCode);
}

if(sMsgType=='707' ||sMsgType=='499' ||sMsgType=='400' ||sMsgType=='410' || sMsgType=='412' || sMsgType=='420' || sMsgType=='422' || sMsgType=='430'  || sMsgType=='492' || sMsgType=='495' || sMsgType=='496' ||sMsgType=='799' ||sMsgType=='202' ||sMsgType=='299' ||sMsgType=='292' || sMsgType=='295' || sMsgType=='296' ||sMsgType=='734' ||sMsgType=='756'||sMsgType=='730'||sMsgType=='742'||sMsgType=='750'||sMsgType=='769'||sMsgType=='796')
{
	if(s21Tag==""|| s21Tag=='NONREF')
	{
		stp.setBU(sBusinessCode);
	}
	else
	{
		stp.setBU(sBusinessCode);
	}
}
*/
stp.writeLog("Incoming SWIFT Set BU Begin");
var sMsgType = stp.getSWIFTTagValue("B6").substr(1, 3);
stp.writeLog("sMsgType:" + sMsgType);
var sTagB5 = stp.getSWIFTTagValue("B5");
stp.writeLog("sTagB5:" + sTagB5);
var sBIC1 = sTagB5.substr(3, 8);
var CNTY = sBIC1.substr(6, 2);
stp.writeLog("CNTY:" + CNTY);
if (CNTY == 'ZZ') {
    stp.setBU("001001001");
} else {
    if (CNTY == 'GB') {
        stp.setBU("GBR");
    } else {
        if (CNTY == 'KC') {
            stp.setBU("AUH");
        } else {
            stp.setBU("CSBANK");
        }
    }
}

stp.writeLog("Incoming SWIFT Set BU Finish");