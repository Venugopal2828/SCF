"path:SCRN/DO/FADA_SCFCounters.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CAL_CUST_TYPE = function() {
    try {
        if (document.MAINFORM.FA_CUST_FLAG.value == '1' && document.MAINFORM.FA_COUNTER_CE_FLG.value == 'No') {
            document.MAINFORM.FA_COUNTER_TYPE.value = 'T2';
        } else if (document.MAINFORM.FA_CUST_FLAG.value == '1' && document.MAINFORM.FA_COUNTER_CE_FLG.value == 'Yes') {
            document.MAINFORM.FA_COUNTER_TYPE.value = 'T1';
        } else if (document.MAINFORM.FA_CUST_FLAG.value == '2') {
            document.MAINFORM.FA_COUNTER_TYPE.value = 'T3';
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*CAL_CUST_TYPE", e);
    }
}

csDOScreenProto.CheckCounter2 = function() {
    try {
        var arrayvalue;
        var curBuyerId;
        var doBuyerId;
        var i, len;
        var orgRecId;
        var recID;
        var record;
        var state;

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF' || 
            document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || 
            document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {

            state = parent.currentDo.getStatue();
            curBuyerId = document.MAINFORM.FA_COUNTER_REG_NO.value;

            // 🔹 Get Self Enrol value
            var selfEnrol = document.MAINFORM.SELF_ENROL.value;  
            // (Use correct field name if different)

            arrayvalue = SYS_getRecords(parent.currentDo);
            orgRecId = -1;

            if ("E" == state) {
                orgRecId = SYS_getRecID(SYS_getEditedRecordForCurrentDo());
            }

            for (i = 0, len = arrayvalue.length; i < len; i++) {

                record = arrayvalue[i];
                recID = SYS_getRecID(record);
                doBuyerId = SYS_getValFromRec(record, 'FA_COUNTER_REG_NO');

                if (doBuyerId == curBuyerId && orgRecId != recID) {

                    // ✅ Only block when Self Enrol = NO
                    if (selfEnrol == "NO") {
                        alert("Company Registration Number [" +
                            SYS_getValFromRec(record, "FA_COUNTER_REG_NO") +
                            "] cannot be duplicated!");
                        document.MAINFORM.FA_COUNTER_REG_NO.value = '';
                        return false;
                    }

                    // If Self Enrol = YES → allow duplicate
                }
            }
        }

        return check_Counter_indb();

    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*CheckCounter2", e);
    }
}


csDOScreenProto.CheckCounterrACC = function() {
    try {
       /* document.MAINFORM.FA_TEMP6.value = '';
        SYS_GetTableDataByRule_S('Chk_CounterACC_IN_DB', '1', 'Y');
        if (document.MAINFORM.FA_TEMP6.value == null || document.MAINFORM.FA_TEMP6.value == '' || document.MAINFORM.FA_TEMP6.value == 'null') {
            alert("The account number does not exist in account table.");
        }*/
                 if(document.MAINFORM.FA_COUNTER_ACC !=""){
        	 SYS_GetCUBK('Chk_CounterACC_IN_DB',"FA_COUNTER_ACC");
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*CheckCounterrACC", e);
    }
}

csDOScreenProto.Chk_FA_LMT_DUE_DT = function() {
    try {
        var day;
        var day1;

        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "Due Date must be later than it's Valid From Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value = SYS_getValueFromMain("FA_AGM_DUE_DT");
        day1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.name);
        if (day1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "Due Date should be early than Agreement Expiry Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value;
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*Chk_FA_LMT_DUE_DT", e);
    }
}

csDOScreenProto.Chk_FA_LMT_VAL_DT = function() {
    try {
        var day;
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_VAL_DT.name, "Valid From Date cannot be later than Due Date!");
            document.MAINFORM.FA_LMT_VAL_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*Chk_FA_LMT_VAL_DT", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_Counter_indb()) {
            return false;
        }
        if (!CheckCounter2()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.FA_COUNTER_ROLE = function() {
    try {
        var fa_busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;

        if (fa_busi_tp == 'PF') {
            document.MAINFORM.FA_COUNTER_ROLE.value = 'SELLER';
        }
        if (fa_busi_tp == 'RD') {
            document.MAINFORM.FA_COUNTER_ROLE.value = 'BUYER';
        }
        if (fa_busi_tp == 'POF') {
            document.MAINFORM.FA_COUNTER_ROLE.value = 'BUYER';
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_ROLE", e);
    }
}

csDOScreenProto.GetCounterinfo = function() {
    try {
        if (document.MAINFORM.FA_COUNTER_REG_NO.value != '') {
            SYS_GetCUBK('SCF_Counterparty', 'FA_COUNTER_REG_NO', 'CheckCounter2');
        } else if (document.MAINFORM.FA_COUNTER_REG_NO.value == '') {
            SYT_ClearFields("FA_COUNTER_NM,FA_COUNTER_STR,FA_COUNTER_CT,FA_COUNTER_PROV,FA_COUNTER_ADD_ML,FA_COUNTER_ID,FA_CUST_FLAG,FA_COUNTER_CE_FLG,FA_COUNTER_TYPE,FA_COUNTER_CONT_NM,FA_COUNTER_CONT_TEL,FA_COUNTER_CONT_EM");
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*GetCounterinfo", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo_S('FADA_BUY_REF', setDOref, "", "DOREF", "DOREF");
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_ANCHOR_ID.value = SYS_getValueFromMain("FA_ANCHOR_ID");
        document.MAINFORM.FA_LMT_CCY.value = SYS_getValueFromMain("FA_ANCHOR_CCY");
        document.MAINFORM.FA_LMT_AMT.value = SYS_getValueFromMain("FA_ANCHOR_AMT");
        document.MAINFORM.FA_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        document.MAINFORM.FA_LMT_VAL_DT.value = SYS_getValueFromMain("FA_AGM_VAL_DT");
        document.MAINFORM.FA_LMT_DUE_DT.value = SYS_getValueFromMain("FA_AGM_DUE_DT");
		document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
		document.MAINFORM.FA_SERVICE_REQ.value = SYS_getValueFromMain("FA_SERVICE_REQ");
        FA_COUNTER_ROLE();
        var tp=SYS_getValueFromMain("FA_BUSI_TYPE");
        if( tp=='DD'){
        	SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'O');
        	
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*InitValues", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (document.MAINFORM.FA_COUNTER_ID.value == '') {
            SYS_GetTableDataByRule_S('Get_CounterID', '1', 'Y');

        }
        var arrayvalue;
        var i;
        var orgRecId;
        var recID;
        var record;
        var state;
        state = parent.currentDo.getStatue();
        if ("E" == state) {
            document.MAINFORM.FA_TEMP5.value = '';
            SYS_GetTableDataByRule_S('SCF_Counter_chk_ForEdit', '1', 'Y');
            if (document.MAINFORM.FA_TEMP5.value == null || document.MAINFORM.FA_TEMP5.value == '' || document.MAINFORM.FA_TEMP5.value == 'null') {
                SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_LMT_DUE_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_REG_NO, 'M');
                SYS_changeClassName('button1', 'O');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_NM, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LMT_DUE_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_REG_NO, 'P');
                SYS_changeClassName('button1', 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_CUST_FLAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_CE_FLG, 'P');

            }
        } else if ("A" == state) {

            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_ACC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_DUE_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_REG_NO, 'M');
            SYS_changeClassName('button1', 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUST_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_CE_FLG, 'M');
            var tp=SYS_getValueFromMain("FA_BUSI_TYPE");
           if( tp=='DD'){
        	SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'O');
        	
           }
        }
        
        if(SYS_FUNCTION_TYPE == "IQ"){
			   //document.MAINFORM.Resend_Mail.enabled = true;
			    SYT_EnableFields(document.MAINFORM.Resend_Mail);
		   }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.check_Counter_indb = function() {
    try {
        // Verify if same regisiter no counterparty has added into the DB;
        document.MAINFORM.FA_TEMP5.value = '';
        SYS_GetTableDataByRule_S('SCF_Counter_chk_IN_DB', '1', 'Y');
        if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_COUNTER_NM, 'This counter already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*check_Counter_indb", e);
    }
}

csDOScreenProto.setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = SYS_getValueFromMain('FA_BUSI_TYPE');
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.CPYT_C_RELA_REF.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*setDOref", e);
    }
}

csDOScreenProto.FA_COUNTER_ACC_onchange = function() {
    try {
        CheckCounterrACC();
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_ACC_onchange", e);
    }
}

csDOScreenProto.FA_COUNTER_CE_FLG_onchange = function() {
    try {
        CAL_CUST_TYPE();
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_CE_FLG_onchange", e);
    }
}

csDOScreenProto.FA_COUNTER_REG_NO_onchange = function() {
    try {
        GetCounterinfo();
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_REG_NO_onchange", e);
    }
}

csDOScreenProto.FA_CUST_FLAG_onchange = function() {
    try {
        CAL_CUST_TYPE();
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_CUST_FLAG_onchange", e);
    }
}

csDOScreenProto.FA_LMT_AMT_onchange = function() {
    try {
        var FA_ANCHOR_AMT = SYS_getValueFromMain("FA_ANCHOR_AMT");
        var limit = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
        if (limit > SYS_BeFloat(FA_ANCHOR_AMT)) {
            alert('Limit Amount can not over the agreement amount.');
            document.MAINFORM.FA_LMT_AMT.value = FA_ANCHOR_AMT;
            document.MAINFORM.FA_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_LMT_AMT_onchange", e);
    }
}

csDOScreenProto.FA_LMT_DUE_DT_onchange = function() {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_LMT_DUE_DT_onchange", e);
    }
}

csDOScreenProto.FA_LMT_VAL_DT_onchange = function() {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_LMT_VAL_DT_onchange", e);
    }
}

csDOScreenProto.button1_onclick = function() {
    try {
        // SYS_InqCUBK('SCF_Counterparty');
        SYS_InqCUBK_byCondition('SCF_Counterparty', '1');
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*button1_onclick", e);
    }
}

csDOScreenProto.button2_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('Get_COUNTER_ACC', '1');
    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*button2_onclick", e);
    }
}
/*
csDOScreenProto.SELF_ENROL_onchange = function(event) {
    try {
 
      var selfEnrol = document.MAINFORM.SELF_ENROL.value;
      if(selfEnrol == "YES"){
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_CONT_EM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_CONT_TEL, 'M');
            document.MAINFORM.FA_COUNTER_REG_NO = '';
            document.MAINFORM.FA_COUNTER_AGM_NO = '';
            document.MAINFORM.FA_COUNTER_NM = '';
            document.MAINFORM.FA_COUNTER_ID = '';
            document.MAINFORM.FA_COUNTER_STR = '';
            document.MAINFORM.FA_CUST_FLAG = '';
            document.MAINFORM.FA_COUNTER_CT = '';
            document.MAINFORM.FA_COUNTER_CE_FLG = '';
            document.MAINFORM.FA_COUNTER_PROV = '';
            document.MAINFORM.FA_COUNTER_ID = '';
            document.MAINFORM.FA_COUNTER_CONT_NM = '';
            document.MAINFORM.FA_COUNTER_CNTY = '';
            document.MAINFORM.FA_COUNTER_ADD_ML = '';
            document.MAINFORM.FA_LMT_CCY = '';
            document.MAINFORM.FA_LMT_VAL_DT = '';
            document.MAINFORM.FA_COUNTER_ACC = '';
            document.MAINFORM.FA_LMT_DUE_DT = '';
            document.MAINFORM.FA_SERVICE_REQ = '';
      }else{
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_CONT_EM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_COUNTER_CONT_TEL, 'O');
	  }
      
	  }catch (e) {
         DisExcpt("SSSS_FADA_SCFAGMCounters.js*SELF_ENROL_onchange", e);
    }
}*/

csDOScreenProto.SELF_ENROL_onchange = function (event) {
    try {
        var form = document.MAINFORM;
        var selfEnrol = form.SELF_ENROL.value;

        // Fields to clear when SELF ENROL = YES
        var clearFields = [
            'FA_COUNTER_REG_NO',
            'FA_COUNTER_AGM_NO',
            'FA_COUNTER_NM',
            'FA_COUNTER_ID',
            'FA_COUNTER_STR',
            'FA_CUST_FLAG',
            'FA_COUNTER_CT',
            'FA_COUNTER_CE_FLG',
            'FA_COUNTER_PROV',
            'FA_COUNTER_CONT_NM',
            'FA_COUNTER_CNTY',
            'FA_COUNTER_ADD_ML',
            'FA_LMT_CCY',
            'FA_LMT_AMT',
            'FA_LMT_VAL_DT',
            'FA_COUNTER_ACC',
            'FA_LMT_DUE_DT',
            'FA_SERVICE_REQ',
            'FA_COUNTER_CONT_EM'
        ];

        if (selfEnrol === "YES") {

            // Make  Telephone Mandatory
            
            SYT_ChangeFldClass(form.FA_COUNTER_CONT_TEL, 'M');
            SYS_changeClassName('button1', 'P');
            SYS_changeClassName('button2', 'P');
            
            

            // Clear all fields
            clearFields.forEach(function (fld) {
                if (form[fld]) {
                    SYT_ChangeFldClass(form[fld], 'O');
                    SYT_ChangeFldClass(form.FA_COUNTER_CONT_EM, 'M');
                    SYT_ChangeFldClass(form.FA_COUNTER_NM, 'M');
                    form[fld].value = '';
                    document.MAINFORM.FA_COUNTER_CONT_TEL.value = '';
                }
            });

        } else {
           
            // Make Email & Telephone Optional
            SYT_ChangeFldClass(form.FA_COUNTER_CONT_EM, 'O');
            SYT_ChangeFldClass(form.FA_COUNTER_CONT_TEL, 'O');
            
        }

    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*SELF_ENROL_onchange", e);
    }
};



csDOScreenProto.FA_COUNTER_CONT_TEL_onchange = function(event) {
    try {
        var field = document.MAINFORM.FA_COUNTER_CONT_TEL;
        var mobile = field.value;

        var isValid = /^[6-9]\d{9}$/.test(mobile);

        if (!isValid) {
            alert("Please enter a valid 10-digit mobile number starting with 6,7,8 or 9");
            field.value = "";
            field.focus();
            return false;
        }

        return true;

    } catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_CONT_TEL_onchange", e);
    }
}

csDOScreenProto.FA_COUNTER_CONT_EM_onchange = function(event) {
    try {
      var email = document.MAINFORM.FA_COUNTER_CONT_EM.value;
      var s = email.split(';');
      var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
	  if(email != ''){
		  for (var i = 0; i < s.length; i++) {
			  var returnval = emailfilter.test(s[i]);
			  if (returnval == false) {
				  alert("Please enter a valid email address.");
				  document.MAINFORM.FA_COUNTER_CONT_EM.value = '';
				  }
		    }
	    }
	  }catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_CONT_EM_onchange", e);
    }
}

csDOScreenProto.resendMail = function() {
      try {
    var mainRef = SYS_getValueFromMain('C_MAIN_REF');

    if (!mainRef) {
        alert("Reference Number is missing");
        return;
    }

    window.location.href =
        "/BL6CEWeb/CounterpartyInviteMailServlet?ACTION=RESEND&C_MAIN_REF="
        + encodeURIComponent(mainRef);
   }catch (e) {
        DisExcpt("SSSS_FADA_SCFAGMCounters.js*FA_COUNTER_CONT_EM_onchange", e);
    }
}