"path:SCRN/o2m/DISC_Dom_InvReg.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.Check_DUE_DT = function() {
    try {
        var invduedate = SYS_GetSubDays(document.MAINFORM.FA_DOC_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);

        if (invduedate <= 0) {

            alert('Invoice due date must later than Invoice Date,Please check!');
            return false;
        }

        if (document.MAINFORM.FA_DOC_DUE_DT.value <= SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DUE_DT, 'Invoice due date must later than Business Date,Please check');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.FA_INV_VAL_DT = function() {
    try {
        document.MAINFORM.FA_DOC_VAL_DT.value = document.MAINFORM.FA_DOC_DT.value;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.GetDueDate = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.GetInvDueDate = function() {
    try {
        var paymentdays = opener.document.MAINFORM.FA_PMT_TERMS.value;
        var InvValDate = document.MAINFORM.FA_DOC_VAL_DT.value;

        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, InvValDate, paymentdays, GetDueDate, 'A', 'N');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        /*TPR-GTS-DISC-20070319-011 2007-03-30
	if(true==opener.O2MController["IMG_ITF_DISABLED"]){
		var imgIndex=EEHtml.getElementById("FA_IMAGE_INDEX");
		imgIndex.className="CHAR_O";
		imgIndex.disabled=true;
	}*/

    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        //TPR-GTS-DISC-20070319-011 2007-03-30
        /*var o2mController=opener.O2MController;
if ("add" == o2mController.inputMode){
    o2mController.setRefNo('DISC_EXP_INV_REF',SetRefNo,'','InvRef');
	
	if(false==o2mController["IMG_ITF_DISABLED"]){
		var count;
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

        //FA_TEMP_AMT8 is for the statistics of invoice number of sheets.

        document.MAINFORM.FA_TEMP_AMT8.value = 1;
        document.MAINFORM.FA_INV_STATUS.value = 'Register';
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.SetRefNo = function(ref) {
    try {
        var pre = 'DD';
        var UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 5);
        var year = SYS_BUSI_DATE;
        year = year.substr(2, 2);
        var suffix = 'INV';

        document.MAINFORM.FA_DOC_REF.value = pre + UnitCode + year + ref + suffix;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.checkInvNo = function(argWindow, objRule, inputMode) {
    try {
        //CHECK whether the invoicie no is duplicated
        /*if("add"==inputMode){
		var fld=document.forms["MAINFORM"]["FA_INV_NO"];
		var objCriteria={FA_INV_NO:fld.value};
		var ruleName=objRule.getName();
		var recCount;
		recCount=opener.O2MController.getRecordCountFor(ruleName,objCriteria);
		opener.Console.println("getRecordCountFor",recCount);
		if(recCount>0){
			alert("The invoice No." + fld.title+" has already existed,please check!");
			try{
				fld.focus();
				fld.select();
} catch (e) {
	DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
}
}

csDOScreenProto.check_invamt = function(){
try {
if (SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) <= 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_AMT, 'Invoice value cannot be negative or 0,Please check!');
            return false;
        } else {

            return true;
        }
} catch (e) {
	DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
}
}

csDOScreenProto.check_invdate = function(){
try {
if (document.MAINFORM.FA_DOC_DT.value > SYS_BUSI_DATE) {

            SYS_CheckError(document.MAINFORM.FA_DOC_DT, 'Invoice Date must earlier than Business Date,Please check!');
            return false;
        } else {
            return true;
        }
} catch (e) {
	DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
}
}

csDOScreenProto.genTempInvListUI = function(objSelect){
try {
var opts = objSelect.options;
        var itemCount = opts.length;
        for (i = itemCount; i >= 0; i--) {
            opts.remove(i);
        }
        opts.options.add(new Option("", ""));
        var arr;
        try {
            arr = opener.O2MController.getLocalTempInvNoList();
        } catch (e1) {
            alert(e1.message);
            return -1;
        }
        var listCount = arr.length;
        var tempNo;
        var tempOpt;
        for (j = 0; j < listCount; j++) {
            tempNo = arr[j];

            if ("undefined" == typeof tempNo) {
                continue;
            }

            tempOpt = new Option(tempNo, tempNo);
            objSelect.options.add(tempOpt);

        }
        listCount = objSelect.options.length;
        return listCount;
} catch (e) {
	DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
}
}

csDOScreenProto.plg_InputFormPopulated = function(inputForm, rowID, grid){
try {
if ("edit" == opener.O2MController.inputMode && false == opener.O2MController["IMG_ITF_DISABLED"]) {
            genTempInvListUI(EEHtml.getElementById("FA_IMAGE_INDEX"));
            var imgIndex;
            var funcType = SYS_FUNCTION_TYPE;
            imgIndex = grid.getFieldValue(rowID, "FA_IMAGE_INDEX");
            document.MAINFORM.FA_IMAGE_INDEX.value = imgIndex;
            document.MAINFORM.FA_ORI_IMAGE_INDEX.value = imgIndex;
        }
} catch (e) {
	DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
}
}

csDOScreenProto.plg_o2mPostConfirmInput = function(grid, inputMode, inputResult, argWindow){
try {
var o2mController = opener.O2MController;
        if ("add" == inputMode) {
            if (inputResult) {
                //fecth a RefNo for next input only when the current input
                //passed necessary checks!!!!
                o2mController.setRefNo('DISC_DOM_INV_REF', SetRefNo, '', 'InvRef');
                if (false == o2mController["IMG_ITF_DISABLED"]) {
                    var eleImgIndex = document.MAINFORM.FA_IMAGE_INDEX;
                    //remove a used Image Index from the dropdown list
                    o2mController.removeTempNoItem(eleImgIndex, eleImgIndex.value);
                }
            }
        }
        //TPR-GTS-DISC-20070319-011 end
        var invnosum = grid.sumFieldsValue("FA_TEMP_AMT8", 0);
        var invsum = grid.sumFieldsValue("FA_INV_AMT", 2);

        opener.document.MAINFORM.FA_TTL_INV_AMT.value = invsum;
        opener.document.MAINFORM.FA_TTL_INV_NO.value = invnosum;
        opener.document.MAINFORM.FA_TTL_INV_AMT.fireEvent('onchange');
} catch (e) {
	DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
}
}

csDOScreenProto.plg_o2mPreConfirmInput = function(objRule, inputMode, argWindow){
try {
//INV NO repeatability check
        /*var lbCheck = SYM_DISC_checkInvNo(argWindow, objRule, inputMode); 

if(!lbCheck){
	return false;
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
        /*	var o2mController=opener.O2MController;
	 if(false==o2mController["IMG_ITF_DISABLED"]){
		 
		if("edit"==inputMode){
			var oriIndex=document.MAINFORM.FA_ORI_IMAGE_INDEX.value;
			var newIndex=document.MAINFORM.FA_IMAGE_INDEX.value;
			if(oriIndex!=newIndex){
				//reclaim old
				o2mController.reclaimTempInvRefNo(oriIndex);
				//lease new
				var leased=o2mController.leaseTempInvRefNo(newIndex);
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
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.setDocBalance = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = document.MAINFORM.FA_DOC_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.FA_DOC_AMT_onchange = function(event) {
    try {
        check_invamt();
        setDocBalance();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.FA_DOC_DT_onchange = function(event) {
    try {
        FA_INV_VAL_DT();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_VAL_DT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}

csDOScreenProto.FA_DOC_VAL_DT_onchange = function(event) {
    try {
        GetInvDueDate();
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvReg.js", e);
    }
}