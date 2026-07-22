var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_Chg_EXTERNAL_REF = function() {
    try {

        SYT_chg_FldVal_UpCase(document.MAINFORM.EXTERNAL_REF);
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCU_ID_50A = function() {
    try {

        SYM_PYMT_Chg_ORDCU_ID_50A();

        /*
if ((document.MAINFORM.X103_ORDCU_ID_50A.value).trim() != ""){	
	if(document.MAINFORM.X103_ORDCU_NM_50A.value != ''){
		document.MAINFORM.X103_ORDCU_NM_50A.value = "";
		document.MAINFORM.X103_ORDCUADD1_50A.value = "";
		document.MAINFORM.X103_ORDCUADD2_50A.value = "";
		document.MAINFORM.X103_ORDCUADD3_50A.value = "";
		document.MAINFORM.X103_ORDCUACNO_50A.value = "";
		document.MAINFORM.X103_ORDCU_SW_50A.value = "";
		document.MAINFORM.X103_TAG_50A.value = "";
		SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A,"O");
		SYM_PYMT_enableField(document.MAINFORM.lookup1,'O');
	}
	if (document.MAINFORM.X103_TAG_50A.value != "F"){
		if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
			if(document.MAINFORM.X103_ORDCUACNO_50A.value == ''){
				SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYM_PYMT_getAccounts()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
				SYM_PYMT_ProtOrdCust();
			}else {
				SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYM_PYMT_ProtOrdCust()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
				SYM_PYMT_ProtOrdCust();
			}
		}else if (document.MAINFORM.APP_TYPE.value == "BANK")
		{
	if(document.MAINFORM.X103_ORDCUACNO_50A.value == '')
	{
		SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYM_PYMT_getBanksAccounts()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
		SYM_PYMT_ProtOrdCust();
	}
	else
	{
		SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYM_PYMT_ProtOrdCust()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
	}
		}
	}else {
		alert("Tag 50F is selected. Please input Applicant data as specified by the SWIFT standard");
		document.MAINFORM.X103_ORDCU_ID_50A.value = "";
	}
}else {
SYM_PYMT_Clr_Ord_Cust_RegDD();
	SYM_PYMT_enableField(document.MAINFORM.lookup1,'O');
}
*/
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYM_PYMT_getAcctDCFlag();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ord_Cust = function() {
    try {

        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CALC_AMT = function() {
    try {

        SYT_Chg_NegativeAmt(document.MAINFORM.CR_CALC_AMT);
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {

            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
        } else {
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "M");
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_APP_TYPE = function() {
    try {

        SYM_PYMT_Clr_Ord_Cust_RegDD();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCUACNO_50A = function() {
    try {

        SYM_PYMT_Chk_Tag50FFormat();
        if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() == '') {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                if (document.MAINFORM.APP_TYPE.value.toUpperCase() == 'CUSTOMER') {
                    SYS_GetCUBK('X103_ORDCUACNO_50A', 'X103_ORDCUACNO_50A', 'SYF_PYMT_Chg_X103_ORDCU_ID_50A()', '', 'TRUE');
                } else {
                    SYS_GetCUBK('X103_ORDCUACNO_50A_BANK', 'X103_ORDCUACNO_50A', 'SYF_PYMT_Chg_X103_ORDCU_ID_50A()', '', 'TRUE');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        document.MAINFORM.CUTOFF_REF.value = SYS_BANK_COUNTRY + document.MAINFORM.CR_CCY.value;
        SYM_PYMT_Get_CutOff();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_DB_CALC_AMT = function() {
    try {

        SYT_Chg_NegativeAmt(document.MAINFORM.DB_CALC_AMT);
        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P");
        } else {
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "M");
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CCY = function() {
    try {

        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        SYF_PYMT_Chg_CR_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_DB_CCY = function() {
    try {

        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        if (document.MAINFORM.RECORDER_TYPE.value != "NonCustomer") {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        }
        SYF_PYMT_Chg_DB_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var EXT_REF; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var crossref; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        var valDateCheck; // Utility Auto Fix Comments
        if (SYS_BANK_COUNTRY == 'ZA') {

            EXT_REF = document.MAINFORM.EXTERNAL_REF.value;
            if (EXT_REF != 'WF' && EXT_REF != 'NOT WF') {
                if (EXT_REF.length != 16) {
                    alert("Invalid workflow reference number");
                    return false;
                }
            }
        }

        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P");
        } else {
            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) == 0) {
                SYS_CheckError(document.MAINFORM.CR_CALC_AMT, "To register a transaction, You have to enter either debit or credit amount");
            } else {
                SYS_CheckError(document.MAINFORM.DB_CALC_AMT, "To register a transaction, You have to enter either debit or credit amount");
            }
            return false;
        }

        if (!SYM_PYMT_PayAmtChk()) {
            return false;
        }
        if (document.MAINFORM.X103_VALUE_DT_32A.value.trim() == "") {
            SYS_CheckError(document.MAINFORM.X103_VALUE_DT_32A, "To register a transaction, You have to enter Value date");
        }

        valDateCheck = SYM_PYMT_Chg_X103_VALUE_DT_32A();
        if (valDateCheck == "undefined" || !valDateCheck) {
            if (document.MAINFORM.X103_VALUE_DT_32A.value == "") {
                return false;
            }
        }

        sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
        if (sResult == false) {
            return false;
        }
        if (document.MAINFORM.APP_TYPE.value == 'CUSTOMER' || document.MAINFORM.APP_TYPE.value == 'BANK') {
            if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() != '') {
                if (document.MAINFORM.RECORDER_TYPE.value == 'Customer' || document.MAINFORM.APP_TYPE.value == 'BANK') {
                    if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() != "" && document.MAINFORM.X103_ORDCUACNO_50A.value.trim() != "") {
                        //Sql_Cond = "C_CURRENCY=" + "'" + document.MAINFORM.DB_CCY.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "(C_DBT_CRDT=" + "'B' OR C_DBT_CRDT=" + "'" + document.MAINFORM.FIELD_6_X.value + "')" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.X103_ORDCUACNO_50A.value + "'";
                        //Field_List = "C_CUST_ID";
                        //Mapping_List = "C_CUST_ID";

                        SYS_GetTableDataByRule_S('SYF_PYMT_RegOutPmt_ConfirmBusinessCheck_0', '1', true);
                        if (document.MAINFORM.C_CUST_ID.value != document.MAINFORM.X103_ORDCU_ID_50A.value) {
                            alert('The Account number is invalid for the entered customer');
                            document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                            return false;
                        }
                    }
                } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                    document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
                } else if (document.MAINFORM.RECORDER_TYPE.value == '') {
                    alert("The Customer Id is invalid");
                    document.MAINFORM.X103_ORDCU_ID_50A.value = "";
                    SYF_PYMT_Chg_X103_ORDCU_ID_50A();
                }
            }
        }
        SYM_PYMT_Cal_BaseEquAmt();
        SYT_Cal_TRX_HISTORY();

        crossref = SYT_RegOTT_CrossRef();
        if (!crossref) {
            return crossref;
        }
        if (document.MAINFORM.X103_VALUE_DT_32A.value == "") {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCU_SW_50A = function() {
    try {

        var AppType; // Utility Auto Fix Comments
        var BIC; // Utility Auto Fix Comments
        AppType = document.MAINFORM.APP_TYPE.value;
        if (AppType == "BANK") {
            BIC = document.MAINFORM.X103_ORDCU_SW_50A.value;
            if (BIC.trim() != '') {
                SYM_PYMT_getIdFromBIC(document.MAINFORM.X103_ORDCU_SW_50A, document.MAINFORM.AVAL_WT_BK_ID);
                document.MAINFORM.X103_ORDCU_ID_50A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
                document.MAINFORM.AVAL_WT_BK_ID.value = "";
                EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
            }
        } else {
            SYT_chg_FldVal_UpCase(document.MAINFORM.X103_ORDCU_SW_50A);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        FLD_PYMT_CR_CALC_AMT_onchange(); //vadd
        FLD_PYMT_DB_CALC_AMT_onchange(); //vadd
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_ID_50A, "M");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "P"); //vadd
        }
        RATE_TYPE = "TT Selling";
        document.MAINFORM.CANCEL_FLG.value = "No";
        document.MAINFORM.LOCAL_CCY.value = SYS_LOCAL_CCY;
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_LoadTmpl", "_SaveTmpl");
        }
        //EEHtml.getElementById('audit_link').style.visibility = 'hidden';
        if (SYS_BANK_COUNTRY == "ZA") {
            showZALBIs();
            EEHtml.getElementById('REGOTT_COUNTRY_CODE').value = SYS_BANK_COUNTRY;
            SYT_ChangeFldClass(EEHtml.getElementById("APP_TYPE"), "O");
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "O");
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "O");
        }
        SYT_ConfigureHelpLink();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        FLD_PYMT_CR_CALC_AMT_onchange();
        FLD_PYMT_DB_CALC_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_APP_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_APP_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHANNEL_onchange = function(event) {
    try {
        var docChannel; // Utility Auto Fix Comments
        docChannel = document.MAINFORM.CHANNEL.value;
        switch (docChannel.toUpperCase()) {
            case "ICM":
                SYS_CheckError(document.MAINFORM.CHANNEL, "You have selected a restricted Channel, please select another.");
                EEHtml.getElementById("CHANNEL").value = "";
                break;
            case "INTERNETBANKING":
                if (SYS_BANK_COUNTRY != "MU") {
                    SYS_CheckError(document.MAINFORM.CHANNEL, "You have selected a restricted Channel, please select another.");
                    EEHtml.getElementById("CHANNEL").value = "";
                }
                break;
            case "ITRADE":
                SYS_CheckError(document.MAINFORM.CHANNEL, "You have selected a restricted Channel, please select another.");
                EEHtml.getElementById("CHANNEL").value = "";
                break;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function(event) {
    try {
        var CR_CALC_AMT; //Added 8/3/2019--H
        CR_CALC_AMT = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        if (CR_CALC_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CR_CALC_AMT.value = 0;
        }
        SYF_PYMT_Chg_CR_CALC_AMT();
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CR_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CALC_AMT_onchange = function(event) {
    try {
        var DB_CALC_AMT; //Added 8/3/2019--H
        DB_CALC_AMT = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
        if (DB_CALC_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DB_CALC_AMT.value = 0;
        }
        SYF_PYMT_Chg_DB_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Chg_DB_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_EXTERNAL_REF_onchange = function(event) {
    try {
        SYF_PYMT_Chg_EXTERNAL_REF(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_Ord_Cust_lookup_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_ORDCUACNO_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_ORDCU_ID_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_ORDCU_SW_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TAG_50A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_lookup1_onclick = function(event) {
    try {
        if (document.MAINFORM.DB_CALC_AMT.value > 0) {
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '4');
        } else {
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '5');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_RegOutPmt.js", e);
    }
}