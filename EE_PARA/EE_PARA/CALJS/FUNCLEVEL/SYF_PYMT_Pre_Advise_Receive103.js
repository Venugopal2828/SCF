var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var ChgCodeBS = '';
var ChgCodeOur = '';
var acctNumCUBK = '';
var inPostConditionOnInit = 'N';

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.SETL_FLAG.value = 'N';
        document.MAINFORM.CURRNT_STATUS.value = 'PreAdvice'; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_PYMT_Set_Init_Values();
        SYF_PYMT_Get_CPYT_DR_AC();
        SYF_PYMT_Set_CrAmt();
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Init_Values = function() {
    try {

        var strSQLWhere; // Utility Auto Fix Comments
        SYF_PYMT_Set_Inc_50F_Name(); // Utility Auto Fix Comments
        document.MAINFORM.NOTES.value = '';
        SYT_disableField(document.MAINFORM.X103_50_BTN);
        SYT_disableField(document.MAINFORM.X103_50_ADD_BTN);
        SYT_disableField(document.MAINFORM.APP_TYPE);


        //For ITT
        if (document.MAINFORM.SEND_TO_FLAG.value != "Send to Investigation Queue") {
            document.MAINFORM.INV_STATUS.value = "";
        }
        document.MAINFORM.INW_X103_SETT_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.INW_X103_SETT_CCY_32A.value, document.MAINFORM.INW_X103_SETT_AMT_32A.value);

        SYF_PYMT_Set_Orig_IncOrdCust();

        if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
            SYF_PYMT_Chk_BenAcctValid();
            if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
                alert("Beneficiary Account Number could not be validated,Please verify and update.");
                SYF_PYMT_Chg_Ben_Opt();
            }
        } else {
            if (SYS_FUNCTION_TYPE != 'EC') {
                SYT_disableField(document.MAINFORM.X103_ID_59_BTN);
            }

            strSQLWhere = "C_MAIN_REF = '" + document.MAINFORM.X103_BENECU_ID_59A.value + "' AND PROD = 'ITT'";
            /*SYS_Get22TableData_S("PROD_SPEC_INFO", strSQLWhere, "STAN_INSTR", "STAN_INSTR", true);*/

            //SYS_GetCUBK('GetContactInfo','X103_BENECU_ID_59A','','','TRUE');
            //SYS_GetCUBK('GetContProdSpecificInfo','X103_BENECU_ID_59A','','','TRUE');
            if (document.MAINFORM.X103_BENECU_ID_59A.value.trim() == '') {
                SYF_PYMT_Chg_Ben_Opt(); // Utility Auto Fix Comments
            } else {
                SYF_PYMT_Chg_Ben_Prot(); // Utility Auto Fix Comments
            }
        }
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_CPYT_DR_AC = function() {
    try {

        var bSNDBK_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //bSNDBK_ID = document.MAINFORM.INW_SNDBK_ID.value;

        //sSQLWhere = "C_ACCT_WITH_ID = '" + bSNDBK_ID + "'";
        //sTableName = "STD_CLEARING";
        //sFieldList = "C_ACCT_NR;C_CLEAR_TYPE";
        //sMappingList = "CPYT_DR_AC;VOSTRO_NOSTRO_FLAG";
        SYS_GetTableDataByRule_S('SYF_PYMT_Pre_Advise_Receive103_SYF_PYMT_Get_CPYT_DR_AC_0', '1', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Inc_50F_Name = function() {
    try {

        if (document.MAINFORM.INW_X103_TAG_50A.value == "F") {
            if (document.MAINFORM.INW_X103_ORDCU_NM_50A.value.indexOf("/") !== -1) {
                document.MAINFORM.INW_X103_ORDCU_NM_50A.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value.substring(2);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Ben_Opt = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_TAG_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_TYPE, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_SW_59A, "O");
        SYM_PYMT_enableField(document.MAINFORM.X103_ID_59_BTN, 'O');
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Ben_Prot = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_TAG_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_TYPE, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_SW_59A, "P");
        SYM_PYMT_disableField(document.MAINFORM.X103_ID_59_BTN);
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Chgs_Desc = function() {
    try {

        if (document.MAINFORM.INW_X103_DET_CHG_71A.value != "") {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                document.MAINFORM.OUR_CHGS.value = "All for Remitter";
            } else {
                document.MAINFORM.OUR_CHGS.value = "All for Beneficiary";
            }
        } else {
            document.MAINFORM.OUR_CHGS.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT103_Values = function() {
    try {

        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CUST_REF.value = document.MAINFORM.INW_CUST_REF.value;
        document.MAINFORM.X103_EXCH_RT_36.value = '1';
        //SYF_PYMT_Set_Orig_IncOrdCust();
        /*
if(document.MAINFORM.INW_X103_TAG_57A.value == "A"){
	if(document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC){
		document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;	
		document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;	
		document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;	
		document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;	
		document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;	
		document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;	
		document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;	
		document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
		SYF_PYMT_Chg_Ben_Prot();
	}else{
		document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;	
		document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;	
		document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;	
		document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;	
		document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;	
		document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;	
		document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;	
		document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
		SYF_PYMT_Chg_Ben_Opt()
	}
}else{
	document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;	
	document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;	
	document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;	
	document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;	
	document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;	
	document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;	
	document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;	
	document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
	SYF_PYMT_Chg_Ben_Opt();
}
*/
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Orig_IncOrdCust = function() {
    try {

        if (document.MAINFORM.INW_X103_TAG_50A.value == "A") {
            document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value;
            document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.INW_X103_ORDCUADD1_50A.value;
            document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.INW_X103_ORDCUADD2_50A.value;
            document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.INW_X103_ORDCUADD3_50A.value;
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.INW_X103_ORDCU_SW_50A.value;
            document.MAINFORM.X103_TAG_50A.value = document.MAINFORM.INW_X103_TAG_50A.value;
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.INW_X103_ORDCUACNO_50A.value.substring(1);
        } else if (document.MAINFORM.INW_X103_TAG_50A.value == "K") {
            document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value;
            document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.INW_X103_ORDCUADD1_50A.value;
            document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.INW_X103_ORDCUADD2_50A.value;
            document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.INW_X103_ORDCUADD3_50A.value;
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.INW_X103_ORDCU_SW_50A.value;
            document.MAINFORM.X103_TAG_50A.value = document.MAINFORM.INW_X103_TAG_50A.value;
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.INW_X103_ORDCUACNO_50A.value.substring(1);
        } else if (document.MAINFORM.INW_X103_TAG_50A.value == "F") {
            document.MAINFORM.X103_ORDCU_NM_50A.value = '1/' + document.MAINFORM.INW_X103_ORDCU_NM_50A.value;
            document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.INW_X103_ORDCUADD1_50A.value;
            document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.INW_X103_ORDCUADD2_50A.value;
            document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.INW_X103_ORDCUADD3_50A.value;
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.INW_X103_ORDCU_SW_50A.value;
            document.MAINFORM.X103_TAG_50A.value = document.MAINFORM.INW_X103_TAG_50A.value;
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.INW_X103_ORDCUACNO_50A.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_Valid_IncAcct = function() {
    try {

        var NumArr; // Utility Auto Fix Comments
        var RecvAcctNum; // Utility Auto Fix Comments
        var chkAcctNum; // Utility Auto Fix Comments
        RecvAcctNum = document.MAINFORM.INW_X103_BENECUACNO59A.value;
        chkAcctNum = ''; // Utility Auto Fix Comments
        if (RecvAcctNum != '') {
            NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            for (i = 0; i < RecvAcctNum.length; i++) {
                for (j = 0; j < NumArr.length; j++) {
                    if (RecvAcctNum.charAt(i) == NumArr[j]) {
                        chkAcctNum = chkAcctNum + RecvAcctNum.charAt(i);
                    }
                }
            }
        }
        return chkAcctNum;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Ben_Cust_lookup = function() {
    try {

        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
        if (name != "") {
            //SYS_InqCUBK_Sql('X103_BENECU_ID_59A_NONCU', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_BENECU_NM_59A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
            SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_NONCU', '1');
        } else {
            SYS_InqCUBK('X103_BENECU_ID_59A_NONCU');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_PYMT_Get_X103_BENECU_ID_59A();
        Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
        Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            if (document.MAINFORM.CR_CCY.value != '' && document.MAINFORM.CR_AMT.value != '') {
                SYF_PYMT_Chg_Calculate_PYMT_PREADV_COMM();
            }
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
            SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
        }

        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
            CHG_setAllChargeFor("F");
        } else {
            CHG_setAllChargeFor("L");
        }
        Chg.Screen.protectAllChargeFor();
        Chg.Screen.protectAllChargeAt();

        SYF_PYMT_Get_X103_BENECU_ID_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CrAmt = function() {
    try {

        var IncCredAmt; // Utility Auto Fix Comments
        var IncCredCcy; // Utility Auto Fix Comments
        document.MAINFORM.CR_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "P");
        IncCredCcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        IncCredAmt = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);

        document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt);

        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT.value;
        SYF_PYMT_Set_DB_AcctNo();
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Calculate_PYMT_PREADV_COMM = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['PYMT_PRE_ADV_COMM'];
        amt = EEHtml.getElementById('CR_AMT').value;
        ccy = EEHtml.getElementById('CR_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_X103_BENECU_ID_59A = function() {
    try {

        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        /*if(document.MAINFORM.X103_BENECU_ID_59A.value == ""){		
			table = "BENP_EVENT";
			document.MAINFORM.X103_BENECU_ID_59A.value = "";
	
			strSQLWhere = " where X103_BENECUACNO59A = '" + document.MAINFORM.X103_BENECUACNO59A.value + "' AND C_TRX_STATUS = 'M' AND I_EVENT_TIMES = (select MAX(I_EVENT_TIMES) from eximtrx.benp_LEDGER WHERE c_main_ref = EXIMTRX.BENP_EVENT.C_MAIN_REF)";

			SYS_Get22TableData_S(table, strSQLWhere, 'C_MAIN_REF', 'X103_BENECU_ID_59A', 'TRUE');
}*/


        /*else{
			SYS_GetCUBK('X103_BENEPROFILE_ID_59A','X103_BENECU_ID_59A');
}	*/
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_BenAcctValid = function() {
    try {

        var BENECUACNO59A; // Utility Auto Fix Comments
        var BenCustId; // Utility Auto Fix Comments
        var NumArr; // Utility Auto Fix Comments
        var X103_BENECUACNO59A; // Utility Auto Fix Comments
        BenCustId = "";
        X103_BENECUACNO59A = "";
        BENECUACNO59A = document.MAINFORM.INW_X103_BENECUACNO59A.value;
        if (BENECUACNO59A != "" && document.MAINFORM.INW_X103_ACC_BKSW_57A.value == SYS_LOGIN_BIC) {
            BENECUACNO59A = String(BENECUACNO59A);
            NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            for (i = 0; i < BENECUACNO59A.length; i++) {
                for (j = 0; j < NumArr.length; j++) {
                    if (BENECUACNO59A.charAt(i) == NumArr[j]) {
                        X103_BENECUACNO59A = X103_BENECUACNO59A + BENECUACNO59A.charAt(i);
                    }
                }
            }
            BenCustId = SYF_PYMT_ChkCustAccNum(X103_BENECUACNO59A);
            if (BenCustId != "") {
                document.MAINFORM.NXT_STATUS.value = "ITT_PROCESS";
                document.MAINFORM.X103_BENECU_ID_59A.value = BenCustId;
                SYS_GetCUBK_S('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A', 'TRUE');
                document.MAINFORM.X103_BENECUACNO59A.value = X103_BENECUACNO59A;
                document.MAINFORM.ORG_BEN_CUSTID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
                document.MAINFORM.ORG_BEN_CUSTACCT.value = document.MAINFORM.X103_BENECUACNO59A.value;
                SYF_PYMT_Chg_Ben_Prot();
            } else {
                if (SYS_BANK_COUNTRY == "MU") {
                    SYF_PYMT_Chk_IBANForMU();
                }
            }

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChkCustAccNum = function(acctNum) {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        acctNumCUBK = acctNum;
        document.MAINFORM.C_CUST_ID.value = "";
        //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_AC_NUMBER=" + "'" + acctNumCUBK + "'";
        //Field_List = "C_CUST_ID";
        //Mapping_List = "C_CUST_ID";
        SYS_GetTableDataByRule_S('SYF_PYMT_Pre_Advise_Receive103_SYF_PYMT_ChkCustAccNum_1', '1', true);
        if (document.MAINFORM.C_CUST_ID.value != "") {
            //Sql_Cond1 = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_MAIN_REF=" + "'" + document.MAINFORM.C_CUST_ID.value + "'";
            //Field_List1 = "RECORDER_TYPE";
            //Mapping_List1 = "RECORDER_TYPE";
            SYS_GetTableDataByRule_S('SYF_PYMT_Pre_Advise_Receive103_SYF_PYMT_ChkCustAccNum_2', '1', true);
            if (document.MAINFORM.RECORDER_TYPE.value == "Customer") {
                return document.MAINFORM.C_CUST_ID.value;
            } else {
                return "";
            }
        } else {
            return "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_DB_AcctNo = function() {
    try {

        var DebitId; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        ////DebitId = "";

        if (SYS_FUNCTION_TYPE == 'EC' && inPostConditionOnInit == 'Y') {
            return;
        }

        if (SYS_FUNCTION_TYPE != 'EC' && inPostConditionOnInit == 'Y' && SYS_BANK_COUNTRY == "NG") {
            return;
        }
        /*
        if (document.MAINFORM.INW_X103_RECCORRID_54A.value != "") {
            ////DebitId = document.MAINFORM.INW_X103_RECCORRID_54A.value;
        } else if (document.MAINFORM.INW_X103_SENDCORRID53A.value != "") {
            ////DebitId = document.MAINFORM.INW_X103_SENDCORRID53A.value;
        } else {
            ////DebitId = document.MAINFORM.INW_SNDBK_ID.value;
        }
        */
        if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
            //SYS_GetCUBK('BANK_CHRG_ACCT','INW_SNDBK_ID');
            //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + DebitId + "'";
            //Field_List = "C_ACCT_NR";
            //Mapping_List = "CPYT_DR_AC";
            SYS_GetTableDataByRule('SYF_PYMT_Pre_Advise_Receive103_SYF_PYMT_Set_DB_AcctNo_3', '1', '', '', true);
        } else if (document.MAINFORM.INW_X103_SETT_CCY_32A.value != SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
            //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + DebitId + "'";
            //Field_List1 = "C_ACCT_NR";
            //Mapping_List1 = "CPYT_DR_AC";
            SYS_GetTableDataByRule('SYF_PYMT_Pre_Advise_Receive103_SYF_PYMT_Set_DB_AcctNo_4', '1', '', '', true);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECUACNO59A_onchange = function(event) {
    try {
        SYF_PYMT_Get_X103_BENECU_ID_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        SYS_GetCUBK('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A');
        SYF_PYMT_Chg_Calculate_PYMT_PREADV_COMM();
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_59_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Clk_Ben_Cust_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Pre_Advise_Receive103.js", e);
    }
}