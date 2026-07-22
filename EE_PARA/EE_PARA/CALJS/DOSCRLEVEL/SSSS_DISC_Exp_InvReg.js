"path:SCRN/o2m/DISC_Exp_InvReg.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.Check_DUE_DT = function() {
    try {
        var invduedate; // Utility Auto Fix Comments
        invduedate = SYS_GetSubDays(document.MAINFORM.FA_DOC_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);

        if (invduedate <= 0) {

            alert('Invoice Due Date must later than invoice value date, please check!');
            return false;
        }

        if (document.MAINFORM.FA_DOC_DUE_DT.value <= SYS_BUSI_DATE) {

            SYS_CheckError(document.MAINFORM.FA_DOC_DUE_DT, 'Invoice Due Date must later than invoice value date, please check!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.FA_INV_VAL_DT = function() {
    try {
        document.MAINFORM.FA_DOC_VAL_DT.value = document.MAINFORM.FA_DOC_DT.value;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        var count; // Utility Auto Fix Comments
        var o2mController; // Utility Auto Fix Comments
        //TPR-GTS-DISC-20070319-011 2007-03-30
        /*o2mController=opener.O2MController;
if ("add" == o2mController.inputMode){
    o2mController.setRefNo('DISC_EXP_INV_REF',SetRefNo,'','InvRef');
	
	if(false==o2mController["IMG_ITF_DISABLED"]){
		
		//generate the list of avialable Image Index
		count=genTempInvListUI(EEHtml.getElementById("FA_IMAGE_INDEX"));
		if(count>0 && count<=1){
			alert("can not add more invoice records,\n temporary invoice reference count is not enough,please check.");
		}
	}
}*/
        SYS_GetSubPageRefNo('DISC_EXP_INV_REF', SetRefNo, '', 'InvRef');
        //TPR-GTS-DISC-20070319-011 end
        document.MAINFORM.FA_DOC_CCY.value = opener.document.MAINFORM.FA_DOC_CCY.value;

        //FA_TEMP_AMT8 used to count the number of invoice

        document.MAINFORM.FA_TEMP_AMT8.value = 1;
        document.MAINFORM.FA_INV_STATUS.value = 'Register';
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.SetRefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var suffix; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = 'ED';
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 5);
        year = SYS_BUSI_DATE;
        year = year.substr(2, 2);
        suffix = 'INV';

        document.MAINFORM.FA_DOC_REF.value = pre + UnitCode + year + ref + suffix;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.calTotalInvoiceAmtandNO = function() {
    try {
        var docAmt; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("InvTRF"); //grid.getRowCount();
        SYS_setValueToMain("FA_TTL_INV_NO", num);
        docAmt = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        SYS_setValueToMain("FA_TTL_INV_AMT", docAmt);
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.checkINV_NO = function() {
    try {
        var arrayRecord; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invNo; // Utility Auto Fix Comments
        var invNoFromSCR; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var status; // Utility Auto Fix Comments
        //get edit Record id -s
        id = -1;
        arrayRecord = SYS_getEditRecord(opener.currentDo);
        if (arrayRecord) {
            id = arrayRecord[arrayRecord.length - 2];
        }
        //-e
        invNoFromSCR = document.MAINFORM.FA_DOC_NO.value;
        arrayvalue = SYS_getRecords(opener.currentDo);
        status = opener.currentDo.getStatue();
        /**
if('E'==status){
return true;
}
**/
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            if (id == recID) {
                continue;
            }
            invNo = SYS_getValFromRec(record, 'FA_DOC_NO');
            if (invNo == invNoFromSCR) {
                alert("Invoice No [" + invNo + "] cannot be duplicated!");
                return false;
            }

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.checkInvNo = function(argWindow, objRule, inputMode) {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.check_invamt = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) <= 0) {

            SYS_CheckError(document.MAINFORM.FA_DOC_AMT, 'Invoice amount should be more than 0, please check!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.check_invdate = function() {
    try {
        if (document.MAINFORM.FA_DOC_DT.value > SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DT, 'Invoice value date must be early than transcation date,please check!');
            return false;
        } else {

            return true;

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.genTempInvListUI = function(objSelect) {
    try {
        var arr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var itemCount; // Utility Auto Fix Comments
        var opts; // Utility Auto Fix Comments
        /*opts=objSelect.options;
	itemCount=opts.length;
	for(i=itemCount;i>=0;i--){
		opts.remove(i);
	}
	opts.options.add(new Option("",""));
	
	arr=opener.O2MController.getLocalTempInvNoList();
		alert(e.message);
		return -1;
	listCount=arr.length;
	tempNo;
	tempOpt;
	for(j=0;j<listCount;j++){
		tempNo=arr[j];
		if("undefined"==typeof tempNo){
			continue;
		}
		tempOpt=new Option(tempNo,tempNo);
		objSelect.options.add(tempOpt);

	}
	listCount=objSelect.options.length;
	return listCount;*/
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.getDueDate = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.getInvDueDate = function() {
    try {
        var INV_VAL_DT; // Utility Auto Fix Comments
        var PMT_DAYS; // Utility Auto Fix Comments
        PMT_DAYS = opener.document.MAINFORM.FA_PMT_TERMS.value;
        INV_VAL_DT = document.MAINFORM.FA_DOC_VAL_DT.value;
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, INV_VAL_DT, PMT_DAYS, getDueDate, 'A', 'N');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.plg_InputFormPopulated = function(inputForm, rowID, grid) {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.plg_o2mPostConfirmInput = function(argWindow, grid, inputMode, inputResult) {
    try {
        var eleImgIndex; // Utility Auto Fix Comments
        var invamtsum; // Utility Auto Fix Comments
        var invnosum; // Utility Auto Fix Comments
        var o2mController; // Utility Auto Fix Comments
        //TPR-GTS-DISC-20070319-011 2007-03-30
        /*o2mController=opener.O2MController;
if("add"==inputMode){
    if(inputResult){
		//fecth a RefNo for next input only when the current input
		//passed necessary checks!!!!
		o2mController.setRefNo('DISC_EXP_INV_REF',SetRefNo,'','InvRef');
		 if(false==o2mController["IMG_ITF_DISABLED"]){
			 eleImgIndex=document.MAINFORM.FA_IMAGE_INDEX;
			 //remove a used Image Index from the dropdown list
			o2mController.removeTempNoItem(eleImgIndex,eleImgIndex.value);
		 }
	}
}
//TPR-GTS-DISC-20070319-011 end
invnosum=grid.sumFieldsValue("FA_TEMP_AMT8",0);
invamtsum=grid.sumFieldsValue("FA_INV_AMT",2);
opener.document.MAINFORM.FA_TTL_INV_AMT.value=invamtsum;
opener.document.MAINFORM.FA_TTL_INV_NO.value=invnosum;
opener.document.MAINFORM.FA_TTL_INV_AMT.fireEvent('onchange');*/
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.plg_o2mPreConfirmInput = function(argWindow, grid, inputMode) {
    try {
        var invNo; // Utility Auto Fix Comments
        var lbCheck; // Utility Auto Fix Comments
        var leased; // Utility Auto Fix Comments
        var newIndex; // Utility Auto Fix Comments
        var o2mController; // Utility Auto Fix Comments
        var oriIndex; // Utility Auto Fix Comments
        //check the repetition of INV NO
        /*
if("add"==inputMode){
  
  //invNo=document.forms["MAINFORM"]["FA_INV_NO"]
  lbCheck = SYM_DISC_checkInvNo(invNo); 
   if(!lbCheck){
	return false;
   }
}
*/
        document.MAINFORM.FA_INV_BAL.value = SYS_BeFloat(document.MAINFORM.FA_INV_AMT.value);

        if (!Check_DUE_DT()) {
            return false;
        }

        if (!check_invamt()) {

            return false;
        }

        if (!check_invdate()) {

            return false;
        }

        //TPR-GTS-DISC-20070319-011 2007-03-30
        /*	o2mController=opener.O2MController;
	 if(false==o2mController["IMG_ITF_DISABLED"]){
		 
		if("edit"==inputMode){
			oriIndex=document.MAINFORM.FA_ORI_IMAGE_INDEX.value;
			newIndex=document.MAINFORM.FA_IMAGE_INDEX.value;
			if(oriIndex!=newIndex){
				//reclaim old
				o2mController.reclaimTempInvRefNo(oriIndex);
				//lease new
				leased=o2mController.leaseTempInvRefNo(newIndex);
				if(false==leased){
					alert("No Image Reference No. available!");
					return false;
				}
			}
		 }
	 }
*/
        //TPR-GTS-DISC-20070319-011 end
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.setDocBalance = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = document.MAINFORM.FA_DOC_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.FA_DOC_AMT_onchange = function(event) {
    try {
        check_invamt();
        setDocBalance();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.FA_DOC_DT_onchange = function(event) {
    try {
        check_invdate();
        FA_INV_VAL_DT();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_VAL_DT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}

csDOScreenProto.FA_DOC_DUE_DT_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}
csDOScreenProto.FA_DOC_VAL_DT_onchange = function(event) {
    try {
        getInvDueDate();
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvReg.js", e);
    }
}