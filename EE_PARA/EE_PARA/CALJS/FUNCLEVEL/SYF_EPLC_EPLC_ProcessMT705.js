var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYM_EPLC_CAL_LC_BAL();
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.OUR_ROLE.value = "Advising Bank";
        //for ISSUE_BK details
        SYT_GetBKInfoByBIC(document.MAINFORM.ISSUE_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.ADV_THU_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.AVAL_WT_BK_SW_ADD);

        //for MT730 Tag 30
        document.MAINFORM.TEMP_MT730_TAG30.value = document.MAINFORM.TRX_DT.value;

        document.MAINFORM.PRE_ADV_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
        SYM_EPLC_M_TOL_TAG39();

        SYM_EPLC_M_TAG41D_MAP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PRE_ADV_COMM = function() {
    try {

        SYT_CAL_COMM('EPLC_PRE-ADV_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CABLE_CHG = function() {
    try {

        var ACKNLDG; // Utility Auto Fix Comments
        var ADV_BY; // Utility Auto Fix Comments
        SYT_CAL_CABLE();
        return;
        /*
ACKNLDG = 0;
ADV_BY = 0;
if(document.MAINFORM.ACK_MTHD.value == "MT730"){
		
		ACKNLDG = 1;		
	}else {
		ACKNLDG =0;
}
if(document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank"){
		
		ADV_BY = 1;	
}else{
		ADV_BY = 0;
				}
				
	plusTimes = ACKNLDG + ADV_BY;

if( plusTimes == 0 ){
	SYT_RESET_CABLE();
}else {
	SYT_CAL_CABLE(plusTimes);
}	
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_MAIL_CHG = function() {
    try {

        SYT_CAL_POST();
        return;
        /*
if (document.MAINFORM.ADV_LC_BY.value == 'Mail to Beneficiary'||document.MAINFORM.ADV_LC_BY.value=="Mail to beneficiary's Bank"){
	SYT_CAL_POST();
}else {
	SYT_RESET_POST();	
}
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_AFTER_BENE_ID = function() {
    try {

        SYF_EPLC_CHG_INT_RUN();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_RUN = function() {
    try {

        SYF_EPLC_CAL_PRE_ADV_COMM();
        SYF_EPLC_CAL_CABLE_CHG();
        SYF_EPLC_CAL_MAIL_CHG();
        SYT_CAL_COURIER();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_CHG_INIT('SYF_EPLC_CHG_INT_RUN');
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYF_EPLC_MPO_NARR_TAG79_MT799();
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYF_EPLC_MPO_AVAL_BY();
        SYF_EPLC_PARTIES();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        //SYF_EPLC_MPO_POS_NEG_TOL();

        SYM_EPLC_M_CHK_TRX_DT_EXP_DT();
        SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT();
        CHG_DefCharge_chargeAtOnchange();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHP_DT = function() {
    try {

        SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_POS_NEG_TOL = function() {
    try {

        SYM_EPLC_M_CLASS_BY_39B(document.MAINFORM.AMT_SPEC.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_NARR_TAG79_MT799 = function() {
    try {

        if (document.MAINFORM.ACK_MTHD.value == "MT799" || document.MAINFORM.ACK_MTHD.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG79_MT799, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CLAUSE_BUTTON, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG79_MT799, 'B');
            SYT_ChangeFldClass(document.MAINFORM.CLAUSE_BUTTON, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Cal_REF_20 = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_AVAL_BY = function() {
    try {

        SYM_EPLC_M_CLASS_AVAL_BY(document.MAINFORM.OUR_ROLE.value, document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_PARTIES = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'O');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_STP_BANK_LOOKUP = function(oFld) {
    try {

        /*var retvalue;// Utility Auto Fix Comments
    var sBKAdd1;// Utility Auto Fix Comments
    var sBKAdd2;// Utility Auto Fix Comments
    var sBKAdd3;// Utility Auto Fix Comments
    var sBKBIC;// Utility Auto Fix Comments
    var sBKID;// Utility Auto Fix Comments
    var sBKName;// Utility Auto Fix Comments
    var sFldName;// Utility Auto Fix Comments
    var sql;// Utility Auto Fix Comments
    var temp;// Utility Auto Fix Comments
//add by zoe on 08.11.25 for bank lookup INQ_CUBK in STP parties
        sFldName = oFld.name;
        if (sFldName.indexOf("ID_BTN") == -1) {
            return;
        }
        sql = "1=1";
        sBKID = sFldName.replace("ID_BTN", "ID");
        sBKName = sFldName.replace("ID_BTN", "NM");
        sBKAdd1 = sFldName.replace("ID_BTN", "ADD1");
        sBKAdd2 = sFldName.replace("ID_BTN", "ADD2");
        sBKAdd3 = sFldName.replace("ID_BTN", "ADD3");
        sBKBIC = sFldName.replace("ID_BTN", "SW_ADD");
        temp = "";
        if (MAINFORM.elements[sBKName].value != "") {
            if (MAINFORM.elements[sBKName].value.length >= 5) {
                temp = MAINFORM.elements[sBKName].value.substr(0, 5);
            } else {
                temp = MAINFORM.elements[sBKName].value;
            }
            sql += " AND PARTY_NM like '%" + temp.toUpperCase() + "%'";
        }
        if (MAINFORM.elements[sBKAdd1].value != "") {
            sql += " AND SWIFT_FMT_ADD1 like '%<--" + sBKAdd1 + "-->%'";
        }
        if (MAINFORM.elements[sBKAdd2].value != "") {
            sql += " AND SWIFT_FMT_ADD2 like '%<--" + sBKAdd2 + "-->%'";
        }
        if (MAINFORM.elements[sBKAdd3].value != "") {
            sql += " AND SWIFT_FMT_ADD3 like '%<--" + sBKAdd3 + "-->%'";
        }
        if (MAINFORM.elements[sBKBIC].value != "") {
            sql += " AND SW_ADD like '%<--" + sBKBIC + "-->%'";
        }

        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK(sBKID);
            }
        } else {
            SYS_InqCUBK_Sql(sBKID, sql);
        }*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ACK_MTHD_onchange = function(event) {
    try {
        SYF_EPLC_MPO_NARR_TAG79_MT799();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        SYF_EPLC_MPO_AVAL_BY();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_CUST_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID', 'SYF_EPLC_AFTER_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_CUST_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_NM_onclick = function(event) {
    try {
        SYF_EPLC_AFTER_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHP_DT();
        SYM_EPLC_M_CHK_TRX_DT_EXP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_CHG.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ISSUE_BK_CHG.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_PRE_ADV_COMM();
        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_CCY_onchange = function(event) {
    try {
        SYF_EPLC_CAL_PRE_ADV_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT();
        SYM_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_AVAL_BY();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_POS_TOL_onchange = function(event) {
    try {
        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_POST_ADD_BTN));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRX_DT_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT705.js", e);
    }
}