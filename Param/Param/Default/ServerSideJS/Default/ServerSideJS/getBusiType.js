DV.writeLog("Start Server Side Script: getBusiType.js");
//getBusiUnit is used to get company group
//getSysUnit is used to get current record's unit code
var sUnitCode = DV.getSysUnit(); 
//var sUnitCode = DV.getParamFieldValue("SYS_CHILD_UNIT");


var sSQLCond = null;
var sSQLCond1 = null;
var sSQLCond2 = null;
var sSQLCond3 = null;


sSQLCond1 = DV.addSQLCondition(sSQLCond1, "C_UNIT_CODE",sUnitCode);
sSQLCond1 = DV.addSQLCondition(sSQLCond1, "FA_BUSI_TYPE","RD");
sSQLCond1 = DV.addSQLCondition(sSQLCond1, "FA_SEL_ID",sUnitCode);



sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sUnitCode);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE","PF");
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUYER_ID",sUnitCode);



sSQLCond2 = DV.addSQLCondition(sSQLCond2, "C_UNIT_CODE",sUnitCode);
sSQLCond2 = DV.addSQLCondition(sSQLCond2, "FA_BUSI_TYPE","POF");
sSQLCond2 = DV.addSQLCondition(sSQLCond2, "FA_SEL_ID",sUnitCode);


sSQLCond3 = DV.addSQLCondition(sSQLCond3, "C_UNIT_CODE",sUnitCode);
sSQLCond3 = DV.addSQLCondition(sSQLCond3, "FA_BUSI_TYPE","DD");
sSQLCond3 = DV.addSQLCondition(sSQLCond3, "FA_BUYER_ID",sUnitCode);

var sFlds = DV.addFieldList(null, "DISTINCT(FA_BUSI_TYPE)");//Add the query List
var sFlds1 = DV.addFieldList(null, "DISTINCT(FA_BUSI_TYPE)");//Add the query List
var sFlds2 = DV.addFieldList(null, "DISTINCT(FA_BUSI_TYPE)");
var sFlds3 = DV.addFieldList(null, "DISTINCT(FA_BUSI_TYPE)");
//DV.setSecuModule(); FOR SECURITY TABBLE

var sSrcTb = "FADA_EM_BSR";

var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);//Execute Query the fields
DV.writeLog("============>RS: "+RS);

var RS1 = DV.executeQuery(sSrcTb, sFlds1, sSQLCond1);//Execute Query the fields
DV.writeLog("============RS1: "+RS1);

var RS2 = DV.executeQuery(sSrcTb, sFlds2, sSQLCond2);//Execute Query the fields
DV.writeLog("============RS2: "+RS2);

var RS3 = DV.executeQuery(sSrcTb, sFlds3, sSQLCond3);//Execute Query the fields
DV.writeLog("============RS3: "+RS3);

var count = DV.getRecordCount(RS);//Find the record count 
var count1 = DV.getRecordCount(RS1);
var count2 = DV.getRecordCount(RS2);
DV.writeLog("============count2: "+count2);
var count3 = DV.getRecordCount(RS3);
DV.writeLog("============count3: "+count3);

DV.writeLog("Start the first loop");
var typeArray = new Array();
for(var i=0 ; i < count ; i++){
//Set the value to a select field then we can get the multi record from DB. If the record have //no special string we also //can set the multi record to a text field,the value can be split by some separator. 
	var record = DV.getRecord(RS,i);
	var sBusiType = String(DV.getDBFieldValue(record,"FA_BUSI_TYPE"));
	typeArray.push(sBusiType);
	//if (sBusiType=='SF'){
	//	var sBusiTypeDesc ='Supplier Finance';
	//}else if(sBusiType=='RD'){
	//	var sBusiTypeDesc ='Receivables Discounting';
	//}	
//	var unitNameC = String(DV.getDBFieldValue(record,"UNIT_NAME_C"));
	//DV.setTrxFieldValue ("INV_BUSI_TYPE1", sBusiType, sBusiTypeDesc,1);
 }
 DV.writeLog("Start the 1st loop");
for(var i=0;i < count ;i++){
	var record = DV.getRecord(RS,i);
	var sBusiType = String(DV.getDBFieldValue(record,"FA_BUSI_TYPE"));
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
DV.writeLog("Start the second loop");
for(var i=0;i < count1 ;i++){
	var record1 = DV.getRecord(RS1,i);
	var sBusiType = String(DV.getDBFieldValue(record1,"FA_BUSI_TYPE"));
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
DV.writeLog("Start the third loop");
for(var i=0;i < count3 ;i++){
	var record1 = DV.getRecord(RS3,i);
	var sBusiType = String(DV.getDBFieldValue(record1,"FA_BUSI_TYPE"));
	DV.writeLog("Start the third loop--->"+sBusiType);
	var len = typeArray.length;
	var noExist = true;
	for(var j=0 ;j < len; j++){
		var eachType = typeArray[j];
		DV.writeLog("Start the third loop+++"+eachType);
		if(sBusiType == eachType){
			noExist = false;
			break;
		}
	}
	if(noExist){
		typeArray.push(sBusiType);
	}
}
for(var i=0;i < count2 ;i++){
	var record1 = DV.getRecord(RS2,i);
	var sBusiType = String(DV.getDBFieldValue(record1,"FA_BUSI_TYPE"));
	DV.writeLog("Start the third loop--->"+sBusiType);
	var len = typeArray.length;
	var noExist = true;
	for(var j=0 ;j < len; j++){
		var eachType = typeArray[j];
		DV.writeLog("Start the third loop+++"+eachType);
		if(sBusiType == eachType){
			noExist = false;
			break;
		}
	}
	if(noExist){
		typeArray.push(sBusiType);
	}
}
DV.writeLog("IF check start");
/* if(count2>0 || count3>0){
		typeArray.push("IF");
		var subTypeArray = new Array();
if(count2>0 && count3==0){
		subTypeArray.push("Buyer");
	}
if(count2==0 && count3>0){
		subTypeArray.push("Supplier");
	}
if(count2>0 && count3>0){
	  subTypeArray.push("Buyer");
	  subTypeArray.push("Supplier");
	}
	for(var i=0;i<subTypeArray.length;i++){
	var subType = subTypeArray[i];
	var sBusiSubTypeDesc = subType;
  if (subType=='Buyer'){
		sBusiSubTypeDesc ='Buyer';
	}else if(subType=='Supplier'){
		sBusiSubTypeDesc ='Seller';
	}
	
  }		
} */
	
DV.writeLog("Start the 4th loop");
for(var i=0;i<typeArray.length;i++){
	var eachType = typeArray[i];
	DV.writeLog("Start the 4th  loop--->"+eachType);
	var sBusiTypeDesc = eachType;
  if (eachType=='PF'){
		sBusiTypeDesc ='Payables Finance';
	}else if(eachType=='RD'){
		sBusiTypeDesc ='Receivables Discounting';
	}else if(eachType=='POF'){
		DV.writeLog("Start the 4th  loop if--->"+eachType);
		sBusiTypeDesc ='PO Finance';
		DV.writeLog("Start the 4th  loop if--->"+sBusiTypeDesc);
	}else if(eachType=='DD'){
		DV.writeLog("Start the 4th  loop if--->"+eachType);
		sBusiTypeDesc ='Dynamic Discounting';
		DV.writeLog("Start the 4th  loop if--->"+sBusiTypeDesc);
	}
	
	DV.setTrxFieldValue ("INV_BUSI_TYPE", eachType, sBusiTypeDesc,1);
}
DV.writeLog("Start Server Side Script: getBusiType.js End");