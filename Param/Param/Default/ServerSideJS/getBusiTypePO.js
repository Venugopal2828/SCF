DV.writeLog("Start Server Side Script: getBusiType.js");
var sUnitCode = DV.getParamFieldValue("SYS_CHILD_UNIT");


var sSQLCond = null;
var sSQLCond1 = null;
var sSQLCond2 = null;
var sSQLCond3 = null;


sSQLCond2 = DV.addSQLCondition(sSQLCond2, "C_UNIT_CODE",sUnitCode);
sSQLCond2 = DV.addSQLCondition(sSQLCond2, "FA_BUSI_TYPE","POF");
sSQLCond2 = DV.addSQLCondition(sSQLCond2, "FA_SEL_ID",sUnitCode);



var sFlds2 = DV.addFieldList(null, "DISTINCT(FA_BUSI_TYPE)");


var sSrcTb = "FADA_EM_BSR";


var RS2 = DV.executeQuery(sSrcTb, sFlds2, sSQLCond2);//Execute Query the fields
DV.writeLog("============RS2: "+RS2);

var count2 = DV.getRecordCount(RS2);
DV.writeLog("============count2: "+count2);


DV.writeLog("Start the first loop");
var typeArray = new Array();


DV.writeLog("Start the 4th loop");
for(var i=0;i < count2 ;i++){
	var record2 = DV.getRecord(RS2,i);
	var sBusiType = String(DV.getDBFieldValue(record2,"FA_BUSI_TYPE"));
	var len = typeArray.length;
	var noExist = true;
	for(var j=0 ;j < len; j++){
		var eachType = typeArray[j];
		if(sBusiType == eachType){
			noExist = false;
			break;
		}
	}
	if(noExist){
		typeArray.push(sBusiType);
	}
	
}

	
DV.writeLog("Start the end loop");
for(var i=0;i<typeArray.length;i++){
	var eachType = typeArray[i];
	DV.writeLog("Start the end  loop--->"+eachType);
	var sBusiTypeDesc = eachType;
  if (eachType=='PF'){
		sBusiTypeDesc ='Payables Finance';
	}else if(eachType=='RD'){
		sBusiTypeDesc ='Receivables Discounting';
	}else if(eachType=='POF'){
		DV.writeLog("Start the end  loop if--->"+eachType);
		sBusiTypeDesc ='PO Finance';
		DV.writeLog("Start the end  loop if--->"+sBusiTypeDesc);
	}else if(eachType=='DD'){
		DV.writeLog("Start the end  loop if--->"+eachType);
		sBusiTypeDesc ='Dynamic Discounting';
		DV.writeLog("Start the end  loop if--->"+sBusiTypeDesc);
	}
	
	DV.setTrxFieldValue ("INV_BUSI_TYPE", eachType, sBusiTypeDesc,1);
}
DV.writeLog("Start Server Side Script: getBusiType.js End");