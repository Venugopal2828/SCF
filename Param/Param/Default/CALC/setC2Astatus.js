CAL.writeLog("===Server Side JS Start: Update C2A_STATUS Value ==");
if(!CAL.isInqScope()){
    var isAgreeValue = CAL.getFieldValue("C_IS_AGREE");
    var isFinalAuth = CAL.isLastAuthorizer();
    var sOrgTrxFuncId = CAL.getOriFuncId();
    
    CAL.writeLog("===isAgreeValue: "+isAgreeValue);
    CAL.writeLog("===isFinalAuth: "+isFinalAuth);
    CAL.writeLog("===sOrgTrxFuncId: "+sOrgTrxFuncId);

    if (isAgreeValue!="N"){
      if (isFinalAuth){
        if (sOrgTrxFuncId=="F05030700874"){
      		var discDecision = CAL.getOriFieldValue("DISC_DECISION");
      		CAL.writeLog("===discDecision: "+discDecision);
      		if (discDecision=="Discrepancies Accepted" || discDecision=="Discrepancies Accepted Provided"){
      			CAL.updateFieldValue("C2A_STATUS", "Discrepancies accepted_fully authorized");
      	  }else {
      	  	CAL.updateFieldValue("C2A_STATUS", "Discrepancies rejected_fully authorized");
      	  }
      	} else if (sOrgTrxFuncId=="F05030700900") {
      		var detrimentalFlag = CAL.getOriFieldValue("DETRMNTL_FLG");
          CAL.writeLog("===detrimentalFlag: "+detrimentalFlag);
          if(detrimentalFlag=="YES"){
            CAL.updateFieldValue("C2A_STATUS", "Amendment(Detrimental)_fully authorized");
          }
      	} else if (sOrgTrxFuncId=="F05030700919") {
      		var docStatus = CAL.getOriFieldValue("DOC_STATUS");
          CAL.writeLog("===docStatus: "+docStatus);
          if(docStatus=="Discrepancy Found"){
            CAL.updateFieldValue("C2A_STATUS", "Document discrepancy_fully authorized");
          } 
        } else{
          CAL.updateFieldValue("C2A_STATUS", "Fully authorized");
        }
      }else {
      	if (sOrgTrxFuncId=="F05030700874"){
      		CAL.updateFieldValue("C2A_STATUS", "Decision partially authorized");
      	} else if (sOrgTrxFuncId=="F05030700900") {
      		var detrimentalFlag = CAL.getOriFieldValue("DETRMNTL_FLG");
          if(detrimentalFlag=="YES"){
            CAL.updateFieldValue("C2A_STATUS", "Amendment(Detrimental) partially authorized");
          }   
        } else if (sOrgTrxFuncId=="F05030700919") {
      		var docStatus = CAL.getOriFieldValue("DOC_STATUS");
          CAL.writeLog("===docStatus: "+docStatus);
          if(docStatus=="Discrepancy Found"){
            CAL.updateFieldValue("C2A_STATUS", "Document discrepancy partially authorized");
          }
        } else{
          CAL.updateFieldValue("C2A_STATUS", "Partially authorized");
        }
      }
    }else if (isAgreeValue=="N"){
      if (sOrgTrxFuncId=="F05030700874"){
        CAL.updateFieldValue("C2A_STATUS", "Decision rejected by authorizer");
      } else if (sOrgTrxFuncId=="F05030700900") {
          var detrimentalFlag = CAL.getOriFieldValue("DETRMNTL_FLG");
          CAL.writeLog("===detrimentalFlag: "+detrimentalFlag);
          if (detrimentalFlag=="NO"){
            CAL.updateFieldValue("C2A_STATUS", "Amendment rejected by authorizer");
          } else {
            CAL.updateFieldValue("C2A_STATUS", "Amendment(Detrimental) rejected by authorizer");
          }
      	} else if (sOrgTrxFuncId=="F05030700919") {
      		var docStatus = CAL.getOriFieldValue("DOC_STATUS");
          CAL.writeLog("===docStatus: "+docStatus);
          if(docStatus=="Discrepancy Found"){
            CAL.updateFieldValue("C2A_STATUS", "Document discrepancy rejected by authorizer");
          } else {
            CAL.updateFieldValue("C2A_STATUS", "Document compliant rejected by authorizer");
          }
        } else{
        CAL.updateFieldValue("C2A_STATUS", "Rejected by authorizer");
      }
    }
}
CAL.writeLog("===Server Side JS End: Update CURRNT_STATUS Value ==");
