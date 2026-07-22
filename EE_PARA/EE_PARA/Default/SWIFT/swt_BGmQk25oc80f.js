var MESG_TYPE = "";
//var sB1 = DV.getFieldValue("LOGIN_SW_BIC");
var records = DV.getRecords("MISCLS_SW_DO");
var i;
DV.writeLog("records====" + records);
for(i=0; i<records.length; i++){
    MESG_TYPE = DV.getDOValue(records[i],"MESG_TYPE");
    DV.writeLog("MESG_TYPE====" + MESG_TYPE);
    type = DV.getNodeAttr(records[i], "Type"); 
    var sB2 = DV.getDOValue(records[i],"RCV_BK_SW_ADD");
  // var sMT = MESG_TYPE.substr(2,3);
  // var sResult =DV.checkRMA(sB1,sB2,sMT);
    if(type != "D"){
       // if(sResult == "TRUE"){
       DV.writeLog("sB2====" + sB2);
       DV.appendDOSWIFT('SSSS_' + MESG_TYPE + '_Miscellaneous',i,"MISCLS_SW_DO"); 
       // }else{
      //      var arr_para=[sB1,sB2,sMT];
       //     DV.throwException('1847',arr_para);
       // }
    }
}