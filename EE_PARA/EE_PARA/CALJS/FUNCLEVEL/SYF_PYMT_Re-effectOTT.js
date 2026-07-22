var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_Chg_CR_CALC_AMT = function() {
    try {

        var sCrCalAmt; // Utility Auto Fix Comments
        document.MAINFORM.CR_CALC_AMT.value = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        sCrCalAmt = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        if (sCrCalAmt > 0) {
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            Chg.calculate(['PYMT_COMM'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            //SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY,"P");		
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Remit_70 = function() {
    try {

        document.MAINFORM.X103_REMIT_INF1_70.value = '';
        document.MAINFORM.X103_REMIT_INF2_70.value = '';
        document.MAINFORM.X103_REMIT_INF3_70.value = '';
        document.MAINFORM.X103_REMIT_INF4_70.value = '';
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_SendRecInfo_72 = function() {
    try {

        document.MAINFORM.X103_BK2BK_INF1_72.value = '';
        document.MAINFORM.X103_BK2BK_INF2_72.value = '';
        document.MAINFORM.X103_BK2BK_INF3_72.value = '';
        document.MAINFORM.X103_BK2BK_INF4_72.value = '';
        document.MAINFORM.X103_BK2BK_INF5_72.value = '';
        document.MAINFORM.X103_BK2BK_INF6_72.value = '';
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Succ_OrgRefDet = function() {
    try {

        //document.MAINFORM.MLT_STLMT.value = 'Yes';
        SYS_GetCUBK_S('GetCustOtherInfo', 'X103_ORDCU_ID_50A');
        document.MAINFORM.CR_AMT_MAX.value = document.MAINFORM.CR_CALC_AMT.value;
        document.MAINFORM.X103_DET_CHG_71A.value = "SHA";
        SYF_PYMT_Chg_X103_DET_CHG_71A();
        document.MAINFORM.DB_CCY.value = document.MAINFORM.CR_CCY.value;
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        SYM_PYMT_Chg_X103_BKOP_CODE_23B();
        Chg.calculate(['SWIFT_CHG_PYT']);
        if (document.MAINFORM.X103_ORDCU_NM_50A.value.trim() != '') {
            if (document.MAINFORM.BENE_AC_TYPE.value == 'IBAN') {
                document.MAINFORM.X103_BENECUACNO59A.className = 'CHAR_M';
                EEHtml.fireEvent(document.MAINFORM.X103_BENECUACNO59A, 'onchange');
            } else if (document.MAINFORM.X103_ACC_BKSW_57A.value != '') {
                EEHtml.fireEvent(document.MAINFORM.X103_ACC_BKSW_57A, 'onchange');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_DET_CHG_71A = function() {
    try {

        var ChgSend; // Utility Auto Fix Comments
        var PymtCommChg; // Utility Auto Fix Comments
        var RecChgsObj; // Utility Auto Fix Comments
        var collectCcy; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        var obj71GChrgs; // Utility Auto Fix Comments
        var objLocPymtChrgs; // Utility Auto Fix Comments
        var objPymtCommChrgs; // Utility Auto Fix Comments
        var objSwiftChrgs; // Utility Auto Fix Comments
        var sDetChg; // Utility Auto Fix Comments
        var swift_chg; // Utility Auto Fix Comments
        objPymtCommChrgs = Chg.Screen.getTrxChargeByCommCode('PYMT_COMM');
        objSwiftChrgs = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        obj71GChrgs = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
        objLocPymtChrgs = Chg.Screen.getTrxChargeByCommCode('PYMT_OT_LOC_CHG');
        if ((SYS_BANK_COUNTRY == 'ZM' || SYS_BANK_COUNTRY == 'TZ') && (document.MAINFORM.CR_CCY.value == SYS_LOCAL_CCY) && (document.MAINFORM.AC_WT_INST_CNTY_CODE.value == SYS_BANK_COUNTRY)) {
            objLocPymtChrgs.display();
            Chg.calculate(['PYMT_OT_LOC_CHG']);
            objPymtCommChrgs.reset();
            objPymtCommChrgs.hide();
            objSwiftChrgs.reset();
            objSwiftChrgs.hide();
            obj71GChrgs.reset();
            obj71GChrgs.hide();
        } else {
            objPymtCommChrgs.display();
            objSwiftChrgs.display();
            objLocPymtChrgs.reset();
            objLocPymtChrgs.hide();
            if ((SYS_FUNCTION_TYPE == 'KP' || SYS_FUNCTION_TYPE == 'EC')) {
                if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                    Chg.calculate(['PYMT_COMM'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
                } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                    Chg.calculate(['PYMT_COMM'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
                }
            }
        }
        Chg.calculate(['SWIFT_CHG_PYT']);
        sDetChg = document.MAINFORM.X103_DET_CHG_71A.value;
        swift_chg = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        PymtCommChg = Chg.Screen.getTrxChargeByCommCode('PYMT_COMM');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");

        if (sDetChg == "OUR") {
            SYM_PYMT_setRecChgs();
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
            swift_chg.setChargeFor("L");
            PymtCommChg.setChargeFor("L");
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);

            document.MAINFORM.X103_RECCHGCCY_71G.value = document.MAINFORM.CR_CCY.value;
            SYM_PYMT_disableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_enableField(document.MAINFORM.X103_RECCHGAMT_71G, "P");
            document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, document.MAINFORM.X103_RECCHGAMT_71G.value);

            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN, "O");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'onchange');

            swift_chg.unprotectChargeAt();
            PymtCommChg.unprotectChargeAt();
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
            RecChgsObj.protectChargeAt();
        } else if (sDetChg == "SHA") {
            SYM_PYMT_setRecChgs();
            swift_chg.unprotectChargeAt();
            PymtCommChg.unprotectChargeAt();
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
            swift_chg.setChargeFor("L");
            PymtCommChg.setChargeFor("L");
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);

            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);

            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN, "O");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'onchange');

            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                Chg.calculate(['PYMT_COMM'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            }

        } else if (sDetChg == "BEN") {
            Chg.Screen.mapForeignCust("FOR_CHG_ID", "FOR_CHG_NAME", "CR_CCY", "FOR_CHG_AC");
            SYM_PYMT_setRecChgs();
            document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);

            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'onchange');
            collectCcy = Chg.Screen.getCollectCcy();
            foreignCustCcy = Chg.Screen.getNostroCcy();
            SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
            if (swift_chg.getChargeAt() == "3") {
                swift_chg.setChargeFor("F");
                swift_chg.setChargeAt("0");
                Chg.calculate(['SWIFT_CHG_PYT']);
            }
            swift_chg.setChargeFor("F");
            swift_chg.setChargeAt("0"); // Utility Auto Fix Comments
            PymtCommChg.setChargeFor("F");
            PymtCommChg.setChargeAt("0"); // Utility Auto Fix Comments
            if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
                Chg.calculate(['PYMT_COMM'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            }
            ChgSend = Chg.Screen.getForeignPayTotalAmt();

            document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.CR_CCY.value;
            SYM_PYMT_disableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);
            document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, ChgSend);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
            swift_chg.protectChargeAt();
            PymtCommChg.protectChargeAt();
        }
        SYM_PYMT_Set_ChgCashInd();
        SYT_Audit_Update_Charges(); //for audit
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Org_Ref_Lookup = function() {
    try {

        SYS_InqCUBK_Sql('ORG_MAIN_REF', 'CURRNT_STATUS = \'OTT_CAPTURE\' AND NXT_STATUS = \'OTT_RELEASE\' ');
        //SYS_InqCUBK_byCondition('ORG_MAIN_REF','1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var AccountType; // Utility Auto Fix Comments
        var Cash_chkMult; // Utility Auto Fix Comments
        var _Paymentdetail; // Utility Auto Fix Comments
        var Int_Acct; // Utility Auto Fix Comments
        var Int_Acct_Ccy; // Utility Auto Fix Comments
        var Int_Acct_Ccy_Loc; // Utility Auto Fix Comments
        var Int_Acct_Loc; // Utility Auto Fix Comments
        var Int_Amt; // Utility Auto Fix Comments
        var Int_Amt_Loc; // Utility Auto Fix Comments
        var Int_Cash_Ind; // Utility Auto Fix Comments
        var Int_Cash_Ind_Loc; // Utility Auto Fix Comments
        var Int_Override_Ind_Loc; // Utility Auto Fix Comments
        var PymtCommChg; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var bkeFlag; // Utility Auto Fix Comments
        var bkeFlag202; // Utility Auto Fix Comments
        var counterT; // Utility Auto Fix Comments
        var existingAccount; // Utility Auto Fix Comments
        var gapi_ind; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var indexArr; // Utility Auto Fix Comments
        var overDra_chkMult; // Utility Auto Fix Comments
        var resp; // Utility Auto Fix Comments
        var sDetChg; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        var swiftChg; // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > SYS_BeFloat(document.MAINFORM.CR_AMT_MAX.value)) {
            alert("Credit Amount should not be greater than the original Credit Amount");
            document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT_MAX.value;
            EEHtml.getElementById("B").click();
            document.MAINFORM.CR_CALC_AMT.focus();
            return false;
        }

        if (SYF_PYMT_Chk_DuplicateReeffect() == false) {
            alert("This OTT has already been re-effected by another transaction and cannot be re-effected again");
            return false;
        }

        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        //check whether the value of all class fields are correct
        if (!SYM_PYMT_match_trn_and_settlement_amts()) {
            return false;
        }
        SYT_Chk_FormAdv_CashInd();
        SYF_PYMT_Chk_ChgAcctNo();
        if (document.MAINFORM.X103_VALUE_DT_32A.value == '') {
            alert("The transaction cannot be processed without the value date");
            return false;
        } else {
            sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
            if (sResult == false) {
                return false;
            }
        }
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        //SYM_PYMT_Chk_Loaded_Chg();
        // added by Ravi for integration Balance Check 
        _Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_Paymentdetail); // Utility Auto Fix Comments
        Int_Acct = new Array(5);
        Int_Amt = new Array(5);
        Int_Acct_Ccy = new Array(5);
        Int_Cash_Ind = new Array(5);
        for (i = 0; i < Records.length; i++) { // Utility Auto Fix Comments
            Record = Records[i];
            Int_Acct[i] = SYS_getValFromRec(Record, "CPYT_DR_AC");
            Int_Amt[i] = SYS_getValFromRec(Record, "SETT_AMT");
            Int_Acct_Ccy[i] = SYS_getValFromRec(Record, "SETT_CCY");
            Int_Cash_Ind[i] = SYS_getValFromRec(Record, "MUL_CASH_IND");
        }
        document.MAINFORM.INT_ACT1.value = Int_Acct[0];
        document.MAINFORM.INT_ACT2.value = Int_Acct[1];
        document.MAINFORM.INT_ACT3.value = Int_Acct[2];
        document.MAINFORM.INT_ACT4.value = Int_Acct[3];
        document.MAINFORM.INT_ACT5.value = Int_Acct[4];
        document.MAINFORM.INT_AMT1.value = Int_Amt[0];
        document.MAINFORM.INT_AMT2.value = Int_Amt[1];
        document.MAINFORM.INT_AMT3.value = Int_Amt[2];
        document.MAINFORM.INT_AMT4.value = Int_Amt[3];
        document.MAINFORM.INT_AMT5.value = Int_Amt[4];
        document.MAINFORM.INT_ACT1_CCY.value = Int_Acct_Ccy[0];
        document.MAINFORM.INT_ACT2_CCY.value = Int_Acct_Ccy[1];
        document.MAINFORM.INT_ACT3_CCY.value = Int_Acct_Ccy[2];
        document.MAINFORM.INT_ACT4_CCY.value = Int_Acct_Ccy[3];
        document.MAINFORM.INT_ACT5_CCY.value = Int_Acct_Ccy[4];
        document.MAINFORM.INT_CASH_IND1.value = Int_Cash_Ind[0];
        document.MAINFORM.INT_CASH_IND2.value = Int_Cash_Ind[1];
        document.MAINFORM.INT_CASH_IND3.value = Int_Cash_Ind[2];
        document.MAINFORM.INT_CASH_IND4.value = Int_Cash_Ind[3];
        document.MAINFORM.INT_CASH_IND5.value = Int_Cash_Ind[4];

        document.MAINFORM.INT_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_I_EVENT_TIMES;
        document.MAINFORM.INT_ACCOUNTCOUNT.value = Records.length;
        //ENDS HERE

        /* for future
if(document.MAINFORM.X103_INSTRCODE1_23E.value != '' && document.MAINFORM.X103_INSTRCODE2_23E.value != ''){
document.MAINFORM.X103_INSTRCODE_23E.value = document.MAINFORM.X103_INSTRCODE1_23E.value +'/'+ document.MAINFORM.X103_INSTRCODE2_23E.value;
}else if(document.MAINFORM.X103_INSTRCODE1_23E.value != '' ){
document.MAINFORM.X103_INSTRCODE_23E.value = document.MAINFORM.X103_INSTRCODE1_23E.value;
}
*/
        SYM_PYMT_chk_CrAcctNo();
        bkeFlag = SYM_PYMT_chkRecBIC(document.MAINFORM.X103_ADV_BKSW_B2);
        if (!bkeFlag) {
            return false;
        }
        if (bkeFlag) {
            if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
                bkeFlag202 = SYM_PYMT_chkRecBIC(document.MAINFORM.X202_ADV_BKSW_B2);
                if (!bkeFlag202) {
                    return false;
                }
            }
        }
        SYM_PYMT_Set_Mt103Amt();
        swiftChg = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        PymtCommChg = Chg.Screen.getTrxChargeByCommCode('PYMT_COMM');
        document.MAINFORM.SWT_COMM_TMP.value = swiftChg.getCollectAmt();
        document.MAINFORM.PAY_COMM_TMP.value = PymtCommChg.getCollectAmt();
        sDetChg = document.MAINFORM.X103_DET_CHG_71A.value;
        if (sDetChg == "OUR") {
            document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) + SYS_BeFloat(document.MAINFORM.X103_RECCHGAMT_71G.value);
            //FOR REEFFECT
            //document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value)+SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value)+SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
            document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) + SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value) + SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
        } else if (sDetChg == "SHA") {
            //document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value)- SYS_BeFloat(document.MAINFORM.X103_SENDCHGAMT71F.value);
            //document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value)+SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value)+SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
            //document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value);//FOR REEFFECT
            document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value);

            document.MAINFORM.TOT_CHRG_AMT.value = SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value) + SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
        } else if (sDetChg == "BEN") {
            document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) - SYS_BeFloat(document.MAINFORM.X103_SENDCHGAMT71F.value);
            //document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value)-(SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value)+SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value));
            //document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value);//FOR REEFFECT
            document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value); //FOR REEFFECT
            document.MAINFORM.TOT_CHRG_AMT.value = SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value) + SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
        }
        SYM_PYMT_Chk_SwiftTags_103();
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
            SYM_PYMT_Set_202Values();
            SYM_PYMT_Set_SwiftTags_202();
        }


        document.MAINFORM.CURRNT_STATUS.value = 'OTT_CAPTURE';
        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
        document.MAINFORM.X103_EXCH_RT_36.value = '1.0';
        document.MAINFORM.TOT_DB_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.X103_SETT_AMT_32A.value);

        /*
if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0){
		duplicateExists = SYM_PYMT_chkDupCapTrans("14" , "Outward Payments",document.MAINFORM.CR_CCY.value,document.MAINFORM.CR_CALC_AMT.value,document.MAINFORM.X103_ORDCU_ID_50A.value,document.MAINFORM.X103_BENECUACNO59A.value);
	}else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0){
		if (document.MAINFORM.CR_CCY.value != document.MAINFORM.DB_CCY.value ){
			SYS_GetExchangeRate_S(document.MAINFORM.DB_CCY.value,document.MAINFORM.CR_CCY.value,'TT Selling' , 'X103_EXCH_RT_36','','','','','','9');				document.MAINFORM.CR_AMT.value = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value)* SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
		}else{
			document.MAINFORM.CR_AMT.value = document.MAINFORM.DB_CALC_AMT.value;
		}
		duplicateExists = SYM_PYMT_chkDupCapTrans("14" , "Outward Payments",document.MAINFORM.CR_CCY.value,document.MAINFORM.CR_AMT.value,document.MAINFORM.X103_ORDCU_ID_50A.value);
	}			
	if(duplicateExists == null || duplicateExists == "") {
		document.MAINFORM.REMIT_INFO_TMP_70.value = '';
		document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.X103_REMIT_INF1_70.value + document.MAINFORM.X103_REMIT_INF2_70.value+document.MAINFORM.X103_REMIT_INF3_70.value+document.MAINFORM.X103_REMIT_INF4_70.value;
		if(SYS_ERROR ==''){
			SYT_Cal_TRX_HISTORY();
			document.MAINFORM.NOTES.value = '';
		}
	}else{
		resp=confirm("A transaction has already been Processed with similar details under Reference " + duplicateExists + ". Do you want to continue?");
		if(resp==true) {
			document.MAINFORM.REMIT_INFO_TMP_70.value = '';
			document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.X103_REMIT_INF1_70.value + document.MAINFORM.X103_REMIT_INF2_70.value+document.MAINFORM.X103_REMIT_INF3_70.value+document.MAINFORM.X103_REMIT_INF4_70.value;
			if(SYS_ERROR ==''){
				SYT_Cal_TRX_HISTORY();
				document.MAINFORM.NOTES.value = '';
			}
			//document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY.value+"\n A transaction has already been Processed with similar details under Reference " + duplicateExists;			
		}else{
			return false;
		}
	}
*/

        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            duplicateExists = SYM_PYMT_checkDuplicateTransaction("14", "Outward Payments");
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            if (document.MAINFORM.CR_CCY.value != document.MAINFORM.DB_CCY.value) {
                SYS_GetExchangeRate_S(document.MAINFORM.DB_CCY.value, document.MAINFORM.CR_CCY.value, 'TT Selling', 'X103_EXCH_RT_36', '', '', '', '', '', '9');
                document.MAINFORM.CR_AMT.value = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
            } else {
                document.MAINFORM.CR_AMT.value = document.MAINFORM.DB_CALC_AMT.value;
            }
            duplicateExists = SYM_PYMT_checkDuplicateTransaction("14", "Outward Payments");
        }

        if (!duplicateExists) {
            return false;
        } else {
            document.MAINFORM.REMIT_INFO_TMP_70.value = '';
            document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.X103_REMIT_INF1_70.value + document.MAINFORM.X103_REMIT_INF2_70.value + document.MAINFORM.X103_REMIT_INF3_70.value + document.MAINFORM.X103_REMIT_INF4_70.value;
            if (SYS_ERROR == '') {
                SYT_Cal_TRX_HISTORY();
                document.MAINFORM.NOTES.value = '';
            }
        }

        document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.X103_REMIT_INF1_70.value + document.MAINFORM.X103_REMIT_INF2_70.value + document.MAINFORM.X103_REMIT_INF3_70.value + document.MAINFORM.X103_REMIT_INF4_70.value;
        SYT_Chk_FormAdv_CashInd();
        _Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_Paymentdetail); // Utility Auto Fix Comments
        Int_Acct_Loc = new Array();
        Int_Amt_Loc = new Array();
        Int_Acct_Ccy_Loc = new Array();
        Int_Cash_Ind_Loc = new Array();
        Int_Override_Ind_Loc = new Array();

        indexArr = new Array();
        existingAccount = "No";
        counterT = 0;

        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            Int_Acct_Loc[i] = SYS_getValFromRec(Record, "CPYT_DR_AC");
            Int_Amt_Loc[i] = SYS_getValFromRec(Record, "SETT_AMT");
            Int_Acct_Ccy_Loc[i] = SYS_getValFromRec(Record, "SETT_CCY");
            Int_Cash_Ind_Loc[i] = SYS_getValFromRec(Record, "MUL_CASH_IND");
            Int_Override_Ind_Loc[i] = SYS_getValFromRec(Record, "MUL_OVRIDE");

        }
        // for Release 
        document.MAINFORM.INT_ACT1.value = "";
        document.MAINFORM.INT_AMT1.value = "";
        document.MAINFORM.INT_ACT1_CCY.value = "";
        document.MAINFORM.INT_CASH_IND1.value = "";
        document.MAINFORM.INT_AC_IDENTIFIER.value = "";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = "";
        document.MAINFORM.C_AC_IDENTIFIER.value = "";
        document.MAINFORM.GAPI_IND_FLG.value = "";

        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + SYS_getValFromRec(Record, "CPYT_DR_AC") + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + SYS_getValFromRec(Record, "SETT_AMT") + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + SYS_getValFromRec(Record, "SETT_CCY") + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + SYS_getValFromRec(Record, "MUL_CASH_IND") + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + SYS_getValFromRec(Record, "MUL_OVRIDE") + ";";
            document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + SYS_getValFromRec(Record, "CPYT_DR_AC_TYPE") + ";"; // Utility Auto Fix Comments
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + SYS_getValFromRec(Record, "C_AC_IDENTIFIER") + ";"; // Utility Auto Fix Comments

        }
        if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN" || parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) == 0) {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + "undefined" + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + "undefined" + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + "undefined" + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + "undefined" + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + "undefined" + ";";
        } else {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + Chg.Screen.getLocalPayChgTotalAmt() + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + document.MAINFORM.CHG_CASH_IND.value + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + document.MAINFORM.CHG_OVERRIDE_IND.value + ";";
        }
        document.MAINFORM.INT_ACCOUNTCOUNT.value = Records.length + 1;
        document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + "CUSTOMER" + ";";
        //document.MAINFORM.INT_ACCT_CUNT.value=Int_Acct_Loc.length;
        document.MAINFORM.INT_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
        //alert("cc"+document.MAINFORM.INT_C_MAIN_REF.value);
        //alert("document.MAINFORM.INT_ACT1.value 1 :" +document.MAINFORM.INT_ACT1.value);
        //alert("document.MAINFORM.INT_AC_IDENTIFIER.value 1 :" +document.MAINFORM.INT_AC_IDENTIFIER.value);
        //alert("document.MAINFORM.INT_AMT1.value 1 :" +document.MAINFORM.INT_AMT1.value);
        //alert("document.MAINFORM.INT_ACT1_CCY.value 1 :" +document.MAINFORM.INT_ACT1_CCY.value);
        //	alert("document.MAINFORM.INT_CASH_IND1.value  1:" +document.MAINFORM.INT_CASH_IND1.value);
        //alert("document.MAINFORM.CPYT_DR_AC_TYPE.value  1:" +document.MAINFORM.CPYT_DR_AC_TYPE.value);
        //alert("document.MAINFORM.C_AC_IDENTIFIER.value  1:" +document.MAINFORM.C_AC_IDENTIFIER.value);

        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }

        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.INT_SW_DETAILS.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        document.MAINFORM.INT_FOR_BANK_SW.value = document.MAINFORM.X103_BK2BK_INF1_72.value;
        gapi_ind = true;
        overDra_chkMult = new Array();
        Cash_chkMult = new Array();
        AccountType = new Array();
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            Cash_chkMult[i] = SYS_getValFromRec(Record, "MUL_CASH_IND"); // Utility Auto Fix Comments
            overDra_chkMult[i] = SYS_getValFromRec(Record, "MUL_OVRIDE"); // Utility Auto Fix Comments
            AccountType[i] = SYS_getValFromRec(Record, "CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments

            //	alert("AccountType"+AccountType[i]);
            if (AccountType[i] == "CUSTOMER") {
                if (Cash_chkMult[i] == "No") {
                    if (overDra_chkMult[i] == "No") {
                        gapi_ind = false;
                        sec_gapi_Check = false;
                        break;
                    } else {
                        gapi_ind = true;
                    }
                } else {
                    gapi_ind = true;
                }
            }
        }



        if (document.MAINFORM.CHG_OVERRIDE_IND.value == 'No' && document.MAINFORM.CHG_CASH_IND.value == 'No' && parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) > 0) {
            if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
                if (!gapi_ind) {
                    gapi_ind = false;
                } else {
                    gapi_ind = true;
                    return gapi_ind;
                }
            }
            gapi_ind = false;
        } else {
            if (!gapi_ind) {
                gapi_ind = false;
            } else {
                gapi_ind = true;
            }
        }
        document.MAINFORM.GAPI_IND_FLG.value = gapi_ind;
        //------------------------------	Integration Ends----------------------
        if (SYS_ERROR == '') {
            SYT_addTrxHistory();
            document.MAINFORM.NOTES.value = '';
        }
        document.MAINFORM.CHG_VALUE_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        document.MAINFORM.X103_TAG_50A.value = 'F';
        SYM_PYMT_Copy50Fvalues();
        SYM_PYMT_set50FValues();
        SYT_Set_Int_Flds_CustId();

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ord_Cust = function() {
    try {

        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Succ_OrgRef = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() != '') {
            SYS_GetCUBK('ORG_MAIN_REF_Details', 'ORG_MAIN_REF', 'SYF_PYMT_Succ_OrgRefDet()', 'SYF_PYMT_Clr_OrigRef_Details()', 'TRUE'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CCY = function() {
    try {

        SYF_PYMT_Chg_CR_CALC_AMT();
        Chg.calculate(['PYMT_COMM'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        document.MAINFORM.X103_RECCHGCCY_71G.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.CR_CCY.value;
        SYM_PYMT_Get_103Routing();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_ORG_MAIN_REF = function() {
    try {

        _Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        _Paymentdetail.clearAll(true); // Utility Auto Fix Comments
        document.MAINFORM.X103_ORDCU_ID_50A.value = '';
        if (document.MAINFORM.ORG_MAIN_REF.value.trim() != '') {
            SYS_GetCUBK('ORG_MAIN_REF', 'ORG_MAIN_REF', 'SYF_PYMT_Succ_OrgRef()', 'SYF_PYMT_Fail_OrgRef()', 'TRUE');
        } else {
            SYF_PYMT_Clr_OrigRef_Details(); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Fail_OrgRef = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() == '') {
            alert("The original Payment reference entered cannot be reeffected");
            document.MAINFORM.ORG_MAIN_REF.value = '';
            SYF_PYMT_Clr_OrigRef_Details(); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_PYMT_CAL_CHG_AMT();
        if (document.MAINFORM.X103_DET_CHG_71A.value != "BEN") {
            MAINFORM.CHG_CUST_AMT.value = Chg.Screen.getLocalPayChgTotalAmt();
        } else {
            MAINFORM.CHG_CUST_AMT.value = 0.0;
        }
        SYF_PYMT_For_Swift_Mapping();
        document.MAINFORM.LC_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
        document.MAINFORM.LC_CCY.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        document.MAINFORM.CUTOFF_DAY.value = '';
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'OTT_CAPTURE';
        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_DuplicateReeffect = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_RESULT.value = "";

        //Sql_Cond = " WHERE ORG_MAIN_REF = '" + document.MAINFORM.ORG_MAIN_REF.value + "' AND " + " C_MAIN_REF <> '" + document.MAINFORM.C_MAIN_REF.value + "' AND " + "(SELECT COUNT(*) FROM EXIMTRX.PYMT_EVENT PE WHERE PE.C_MAIN_REF = PYMT_EVENT.C_MAIN_REF AND PE.CURRNT_STATUS = 'OTT_CANCEL') = 0 ";
        //Field_List = "COUNT(C_MAIN_REF) REF_COUNT";
        //Mapping_List = "TEMP_RESULT";
        SYS_GetTableDataByRule_S('SYF_PYMT_Re-effectOTT_SYF_PYMT_Chk_DuplicateReeffect_0', '1', '', '', true);

        if (SYS_BeFloat(document.MAINFORM.TEMP_RESULT.value) > 0) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust("123", "345"); //Add by Sunny 20150506
        Chg.Screen.mapForeignCust("FOR_CHG_ID", "FOR_CHG_NAME", "CR_CCY", "FOR_CHG_AC");

        EEHtml.fireEvent(EEHtml.getElementById('A'), 'onclick');
        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYM_PYMT_REF_20();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_OrdInsDetails = function() {
    try {

        document.MAINFORM.AVAL_WT_BK_ID.value = "";
        SYT_getIdFromBIC(document.MAINFORM.X103_ORD_BKSW_52A, document.MAINFORM.AVAL_WT_BK_ID);
        document.MAINFORM.X103_ORD_BKID_52A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
        document.MAINFORM.AVAL_WT_BK_ID.value = "";
        document.MAINFORM.X103_TAG_52A.value = 'A';
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_InitValues = function() {
    try {

        document.MAINFORM.BENE_AC_TYPE.value = 'Other';
        document.MAINFORM.BENE_CNTY_RES.value = '';
        document.MAINFORM.X103_BKOP_CODE_23B.value = 'CRED';
        document.MAINFORM.X103_DET_CHG_71A.value = 'SHA';
        document.MAINFORM.DB_CCY.value = document.MAINFORM.CR_CCY.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ben_Cust = function() {
    try {

        document.MAINFORM.X103_BENECU_ID_59A.value = "";
        document.MAINFORM.X103_BENECU_NM_59A.value = "";
        document.MAINFORM.X103BENECUADD1_59A.value = "";
        document.MAINFORM.X103BENECUADD2_59A.value = "";
        document.MAINFORM.X103BENECUADD3_59A.value = "";
        document.MAINFORM.X103_BENECU_SW_59A.value = "";
        document.MAINFORM.X103_BENECUACNO59A.value = "";
        document.MAINFORM.X103_TAG_59A.value = "";
        document.MAINFORM.BENE_CNTY_RES.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_OrigRef_Details = function() {
    try {

        document.MAINFORM.X103_BKOP_CODE_23B.value = 'CRED';
        document.MAINFORM.X103_INSTRCODE_23E.value = 'SDVA';
        document.MAINFORM.CR_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.CR_CALC_AMT.value = 0;
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        SYF_PYMT_Clr_Remit_70(); // Utility Auto Fix Comments
        SYF_PYMT_Clr_SendRecInfo_72(); // Utility Auto Fix Comments
        SYF_PYMT_Clr_Ord_Cust(); // Utility Auto Fix Comments
        SYF_PYMT_Clr_Ben_Cust(); // Utility Auto Fix Comments
        document.MAINFORM.CPYT_CR_BK_AC.value = '';
        document.MAINFORM.X103_BENECUACNO59A.value = '';
        EEHtml.fireEvent(document.MAINFORM.X103_BENECUACNO59A, 'onchange');
        document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "") {
            SYM_PYMT_Dis_2XX_div(); // Utility Auto Fix Comments
        } else {
            SYM_PYMT_Enb_2XX_Div(); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_ChgAcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        document.MAINFORM.C_CUST_ID.value = '';
        if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != '') {
            if (document.MAINFORM.X103_DET_CHG_71A.value != "BEN") {
                if (document.MAINFORM.CHG_CASH_IND.value != "Yes") {
                    if (document.MAINFORM.RECORDER_TYPE.value == "Customer") {
                        //Sql_Cond = "C_CURRENCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'";
                        //Field_List = "C_CUST_ID";
                        //Mapping_List = "C_CUST_ID";
                        SYS_GetTableDataByRule_S('SYF_PYMT_Re-effectOTT_SYF_PYMT_Chk_ChgAcctNo_1', '1', 'TRUE');
                        if (document.MAINFORM.C_CUST_ID.value != document.MAINFORM.X103_ORDCU_ID_50A.value) {
                            alert('The Charges Account number is invalid ');
                            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                            return false;
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYT_Audit_value_assign_WithSett();
        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var initDate; // Utility Auto Fix Comments
        var res; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        initDate = document.MAINFORM.X103_VALUE_DT_32A.value;
        SYT_MPO_Chrg_PaidBy();
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            Chg.Screen.mapForeignCust("FOR_CHG_ID", "FOR_CHG_NAME", "CR_CCY", "FOR_CHG_AC");
            SYF_PYMT_InitEC();
            SYT_Chgs_Without_Deferred_Terms();
            Chg.attchEvent(SYM_PYMT_Set_71GAmt);
            SYM_PYMT_Chg_X103_VALUE_DT_32A();
            SYM_PYMT_Chg_X103_BKOP_CODE_23B();
            if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_M";
            } else {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_O";
            }
            SYS_GetCUBK_S('GetCustOtherInfo', 'X103_ORDCU_ID_50A');
            if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "") {
                SYM_PYMT_Dis_2XX_div();
            } else {
                SYM_PYMT_Enb_2XX_Div();
            }
            SYM_PYMT_Chk_RefuseReason();
            SYM_PYMT_Set_MPO_Chrgs();
            if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            }
        } else if (SYS_FUNCTION_TYPE == 'RE') {
            document.MAINFORM.NOTES.value = '';
            if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_M";
            } else {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_O";
            }
            if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "") {
                SYM_PYMT_Dis_2XX_div();
            } else {
                SYM_PYMT_Enb_2XX_Div();
            }
            SYM_PYMT_Chg_X103_BKOP_CODE_23B();
            SYM_PYMT_Set_MPO_Chrgs();
            document.MAINFORM.DB_CCY.value = document.MAINFORM.CR_CCY.value;
            res = SYT_chkValDt_Rel();
            if (res == false) {
                SYT_restrictRelease();
            } else {
                sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
                if (sResult == false) {
                    SYT_restrictRelease();
                }
            }
        } else if (SYS_FUNCTION_TYPE == 'PM') { //for reeffect
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                Chg.calculate(['PYMT_COMM'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                Chg.calculate(['PYMT_COMM'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            }
            SYT_Chgs_Without_Deferred_Terms();
            SYM_PYMT_Chg_X103_VALUE_DT_32A();
            SYF_PYMT_Set_InitValues();
            Chg.attchEvent(SYM_PYMT_Set_71GAmt);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "M"); //Added
        }
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "OT");
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_InitEC = function() {
    try {

        document.MAINFORM.NOTES.value = "";
        SYS_GetCUBK_S('GetCustOtherInfo', 'X103_ORDCU_ID_50A');
        SYT_ChangeFldClass(document.MAINFORM.X103_50_BTN, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, "P");
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X103_INSTR_AMT_33B.value = DecimalFormat(document.MAINFORM.X103_INSTR_AMT_33B.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value));
        document.MAINFORM.X103_SETT_AMT_32A.value = DecimalFormat(document.MAINFORM.X103_SETT_AMT_32A.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value));
        //document.MAINFORM.X202_AMT_32A.value = DecimalFormat(document.MAINFORM.X202_AMT_32A.value,findDecFromCCY(document.MAINFORM.X202_CCY_32A.value));
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        SYM_PYMT_Get_CutOff();
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        document.MAINFORM.SYS_BUSI_UNIT.value = SYS_BUSI_UNIT;
        SYS_GetCUBK('BU_SWIFTADD', 'SYS_BUSI_UNIT', 'SYF_PYMT_Get_OrdInsDetails()', '', 'TRUE');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var objLocPymtChrgs; // Utility Auto Fix Comments
        document.MAINFORM.CURRNT_STATUS.value = 'OTT_CAPTURE';
        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        }
        SYT_ChangeFldClass(document.MAINFORM.X103_50_BTN, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, "P");
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X103_INSTR_AMT_33B.value = DecimalFormat(document.MAINFORM.X103_INSTR_AMT_33B.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value));
        document.MAINFORM.X103_SETT_AMT_32A.value = DecimalFormat(document.MAINFORM.X103_SETT_AMT_32A.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value));
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        Chg.calculate(['SWIFT_CHG_PYT']);
        Chg.calculate(['PYMT_OT_LOC_CHG']);
        objLocPymtChrgs = Chg.Screen.getTrxChargeByCommCode('PYMT_OT_LOC_CHG');
        objLocPymtChrgs.reset();
        objLocPymtChrgs.hide();
        SYM_PYMT_Get_CutOff();
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        document.MAINFORM.SYS_BUSI_UNIT.value = SYS_BUSI_UNIT;
        SYS_GetCUBK('BU_SWIFTADD', 'SYS_BUSI_UNIT', 'SYF_PYMT_Get_OrdInsDetails()');

        document.MAINFORM.LC_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
        document.MAINFORM.LC_CCY.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function(PaymentMultipleDebits) {
    try {

        var Records; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        if (document.MAINFORM.MLT_STLMT.value == 'No') {
            if (Records.length > 0) {
                alert("Max One Settlement row is allowed");
                return false;
            }
        } else {
            if (Records.length > 4) {
                alert("Max Five Settlement rows are allowed");
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_For_Swift_Mapping = function() {
    try {

        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != '') {
            if (document.MAINFORM.X103TRDREIMADD155A.value != '') {
                document.MAINFORM.X202MEDIBKADD1_56A.value = document.MAINFORM.X103_RECCORADD154A.value;
                document.MAINFORM.X202MEDIBKADD2_56A.value = document.MAINFORM.X103_RECCORADD254A.value;
                document.MAINFORM.X202MEDIBKADD3_56A.value = document.MAINFORM.X103_RECCORADD354A.value;
                document.MAINFORM.X202_MEDIBKACNO56A.value = document.MAINFORM.X103RECCORRACNO54A.value;
                document.MAINFORM.X202_MEDI_BKID_56A.value = document.MAINFORM.X103_RECCORRID_54A.value;
                document.MAINFORM.X202_MEDI_BKNM_56A.value = document.MAINFORM.X103_RECCORRNM_54A.value;
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X103_RECCORRSW_54A.value;
                document.MAINFORM.X202_TAG_56A.value = document.MAINFORM.X103_TAG_54A.value;

                document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.X103TRDREIMADD155A.value;
                document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.X103TRDREIMADD255A.value;
                document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.X103TRDREIMADD355A.value;
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X103TRDREIMACNO55A.value;
                document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.X103_TRDREIMID_55A.value;
                document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.X103_TRDREIMNM_55A.value;
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X103_TRDREIMSW_55A.value;
                document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.X103_TAG_55A.value;
            } else {
                document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.X103_RECCORADD154A.value;
                document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.X103_RECCORADD254A.value;
                document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.X103_RECCORADD354A.value;
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X103RECCORRACNO54A.value;
                document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.X103_RECCORRID_54A.value;
                document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.X103_RECCORRNM_54A.value;
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X103_RECCORRSW_54A.value;
                document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.X103_TAG_54A.value;
            }

            document.MAINFORM.X202_ADV_BKADD1_B2.value = document.MAINFORM.X103SENDCORADD153A.value;
            document.MAINFORM.X202_ADV_BKADD2_B2.value = document.MAINFORM.X103SENDCORADD253A.value;
            document.MAINFORM.X202_ADV_BKADD3_B2.value = document.MAINFORM.X103SENDCORADD353A.value;
            document.MAINFORM.X202_ADV_BKID_B2.value = document.MAINFORM.X103_SENDCORRID53A.value;
            document.MAINFORM.X202_ADV_BKNM_B2.value = document.MAINFORM.X103_SENDCORRNM53A.value;
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X103_SENDCORRSW53A.value;


            document.MAINFORM.X202_BENEBKACNO58A.value = document.MAINFORM.CPYT_CR_BK_AC.value;
            document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.X103_ADV_BKID_B2.value;
            document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X103_ADV_BKNM_B2.value;
            document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
            document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X103_ADV_BKADD1_B2.value;
            document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X103_ADV_BKADD2_B2.value;
            document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X103_ADV_BKADD3_B2.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Ord_Cust_lookup = function() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
        add1 = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
        add2 = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
        add3 = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
        if (name != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
            } else if (document.MAINFORM.APP_TYPE.value == "VOSTRO" || document.MAINFORM.APP_TYPE.value == "NOSTRO") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A_BANK', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A')));
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A_BANK', '1');
            }
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_CNTY_CODE_onchange = function(event) {
    try {
        SYM_PYMT_Chg_AC_WT_INST_CNTY_CODE();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_BENE_AC_TYPE_onchange = function(event) {
    try {
        SYM_PYMT_Chg_BENE_AC_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHIP_FED_onchange = function(event) {
    try {
        SYM_PYMT_Chg_Chip_Fed();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC_onchange = function(event) {
    try {
        SYM_PYMT_chk_CrAcctNo();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC1_onchange = function(event) {
    try {
        SYS_GetCUBK('CPYT_CR_BK_AC_202', 'CPYT_CR_BK_AC');
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_AC1_onchange = function(event) {
    try {
        SYS_GetCUBK('CPYT_DR_AC', 'CPYT_DR_AC');
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_ADV_MSG_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT103') {
            document.MAINFORM.X102_TAG_119.value = '';
        }
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT103+') {
            document.MAINFORM.X102_TAG_119.value = 'STP';

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_COV_MSG_onchange = function(event) {
    try {
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        For_Swift_Mapping2();
        /*
if(SYS_ORG_FUNCTION_SHORT_NAME=='CompOutPmt'){
}
*/
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CR_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CR_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_PYMT_SetRefNo();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_MERGE_FLAG_103_onchange = function(event) {
    try {
        MERGE_FALG_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORG_MAIN_REF_onchange = function(event) {
    try {
        if (document.MAINFORM.ORG_MAIN_REF.value == '') {
            document.MAINFORM.MLT_STLMT.value = '';
        }
        SYF_PYMT_Chg_ORG_MAIN_REF();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_AC_WT_INST_CNTY_CODE_Lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SG_BIN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Trd_Reim_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_TAG25_onchange = function(event) {
    try {
        SYT_ChangeFldClass(document.MAINFORM.X9N0_25P_IDENTIFIER, "M");
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_50_ADD_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value == '') {
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', SYM_PYMT_SYS_buildSQLCond(new Array('C_AC_NUMBER', 'X103_ORDCUACNO_50A')));
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '2');
        } else {
            SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', SYM_PYMT_SYS_buildSQLCond(new Array('c_cust_id', 'X103_ORDCU_ID_50A', 'C_AC_NUMBER', 'X103_ORDCUACNO_50A')));
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '3');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_50_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Ord_Cust_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Send_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_52A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Ord_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_53A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Send_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_54A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Rec_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_56A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_IntIns_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_57A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_AWI_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD1_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD2_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD2_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD3_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD3_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKACNO57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKNM_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_ADD_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "NOSTRO";
            SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '4');
        } else {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "VOSTRO";
            SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '4');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_B2_lookup1();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECUACNO59A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BENECUACNO59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BENECU_ID_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_SW_59A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BENECU_SW_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF1_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF2_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF3_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF4_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF5_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF6_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BKOP_CODE_23B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BKOP_CODE_23B();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_DET_CHG_71A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_DET_CHG_71A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ENV_CONT_77T_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ENV_CONT_77T();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_59_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Ben_Cust_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCHGAMT_71G_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_RECCHGAMT_71G();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRID_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP1_77B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP2_77B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP3_77B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF1_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF2_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF3_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF4_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCHGAMT71F_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_SENDCORRSW53A.value == '') { //Added by Priyanka
            document.MAINFORM.X103_SENDCORRID53A.value = '';
            document.MAINFORM.X103_SENDCORRNM53A.value = '';
            document.MAINFORM.X103SENDCORADD153A.value = '';
            document.MAINFORM.X103SENDCORADD253A.value = '';
            document.MAINFORM.X103SENDCORADD353A.value = '';
            document.MAINFORM.X103_SENDCORRSW53A.value = '';
            document.MAINFORM.X103SENDCORACNO53A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X103_SENDCORRSW53A_onchange', '1', '', '', true);
        //SYM_PYMT_Chg_X103_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SEND_BKID_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SEND_BKSW_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TAG_50A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMID_55A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_TRDREIMID_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMSW_55A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_TRDREIMSW_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup5();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_53_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup6();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_54_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup7();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup8();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup9();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup4();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_B2_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup3();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BENE_BKID_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BENE_BKSW_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF1_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF1_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF2_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF2_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF3_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF3_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF4_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF4_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF5_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF5_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF6_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF6_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "P"); //Added---
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "M"); //Added---
        }
        SYM_PYMT_Chg_X202_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ORDBK_ID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ORDBK_SW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRID_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRSW_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRID53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRSW53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Re-effectOTT.js", e);
    }
}