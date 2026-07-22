var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_DD_RT_ST.value = 'Active';
        document.MAINFORM.FA_BUSI_STATUS.value = 'DDRate';
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE == 'PM'){
        SYS_GetTableDataByRule_S('Get_DDR_Default', '1', 'Y');
        if (document.MAINFORM.FA_TEMP1.value != '' && document.MAINFORM.FA_TEMP1.value != 'null') {
            alert("The default rate has set, you can modify it via Amend DD Rate or set specific rate for supplier.");
            document.MAINFORM.FA_DD_RT_TP.value = 'S';
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_RT_TP, 'P');
            return false;
        }
      }
        document.MAINFORM.F_seller.style.visibility = 'hidden';
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('SCF_AGRMNT_REF', 'SYF_FADA_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_Ref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'DDR';
        document.MAINFORM.C_MAIN_REF.value = UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*SYF_FADA_Cal_Ref", e);
    }
}

csFuncLevelProto.SYF_FADA_Rate_Type_Call = function() {
    try {
        var RT = document.MAINFORM.FA_DD_RT_TP.value;

        if (RT == 'D') {
            SYS_GetTableDataByRule_S('Get_DDR_Default', '1', 'Y');
            if (document.MAINFORM.FA_TEMP1.value != '' && document.MAINFORM.FA_TEMP1.value != 'null') {
                alert("The default rate has set, you can modify it via Amend DD Rate or set specific rate for supplier.");
                document.MAINFORM.FA_DD_RT_TP.value = 'S';
                return false;
            }
            document.MAINFORM.F_seller.style.visibility = 'hidden';
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_NM, 'P');
            document.MAINFORM.FA_SEL_ID.value='';
            document.MAINFORM.FA_SEL_NM.value='';
        } else if (RT == 'S') {
            document.MAINFORM.F_seller.style.visibility = 'visible';
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_NM, 'M');

        }
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*SYF_FADA_Rate_Type_Call", e);
    }
}

csFuncLevelProto.SYF_FADA_Specific_DD_Chk = function() {
    try {
    	document.MAINFORM.FA_TEMP2.value='';
        SYS_GetTableDataByRule_S('Get_DDR_Sp', '1', 'Y');
        if (document.MAINFORM.FA_TEMP2.value != '' && document.MAINFORM.FA_TEMP2.value != 'null') {
            alert("The seller's specific rate has set, you can modify it via Amend DD Rate or select other supplier.");
            document.MAINFORM.FA_SEL_ID.value='';
            document.MAINFORM.FA_SEL_NM.value='';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*SYF_FADA_Specific_DD_Chk", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_DD_RT_TP_onchange = function() {
    try {
        SYF_FADA_Rate_Type_Call();
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*FLD_FADA_FA_DD_RT_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function() {
    try {
        if (document.MAINFORM.FA_SEL_ID.value != '') {
            SYS_GetCUBK('Get_DD_Seller', document.MAINFORM.FA_SEL_ID.name, 'SYF_FADA_Specific_DD_Chk');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*FLD_FADA_FA_SEL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_F_seller_onclick = function() {
    try {
     SYS_InqCUBK_byCondition('Get_DD_Seller','1');
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*FLD_FADA_F_seller_onclick", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {
    	 var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordP;
        var From;
        var ToP;
        var recs = SYS_getcurrRecordCount('DDRate');
        _do = SYS_getDoByXpath('DDRate');
        mData = [];
      if (recs == 0) {
            alert('The transaction can not be confirmed without any rate rule.');
            return false;
        } else {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            
            for (i = 0, len = arrayvalue.length-1; i < len; i++) {
                record = arrayvalue[i];
                recordP= arrayvalue[i+1];
             From = SYS_BeFloat(SYS_getValFromRec(recordP, 'FA_DD_D_FROM'));
             ToP = SYS_BeFloat(SYS_getValFromRec(record, 'FA_DD_D_TO'));
             var gap = SYS_FloatSub(From,ToP);
             if( gap !=1){
             	alert('The rate rule is inconsecutive.');
             	            return false;
            }

            }  	
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*SYF_FADA_CHECK_DO_NO", e);
    }
}


csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_CHECK_DO_NO()) {

                 return false;
             }
                     return true;
                 } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*SYF_FADA_CHECK_DO_NO", e);
    }
}