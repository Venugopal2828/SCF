var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var BASE_BAL; // Utility Auto Fix Comments
        var FINAL_LC_BAL; // Utility Auto Fix Comments
        var NEW_BASE_BAL; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var NEW_LIAB_BAL; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var lc_bal; // Utility Auto Fix Comments
        var sql1; // Utility Auto Fix Comments
        var sql2; // Utility Auto Fix Comments
        var sql3; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var str1; // Utility Auto Fix Comments
        var str2; // Utility Auto Fix Comments
        var str3; // Utility Auto Fix Comments
        var str4; // Utility Auto Fix Comments
        var unPaidAmt; // Utility Auto Fix Comments
        // FOR CLS FLAG NO
        if (document.MAINFORM.CLS_FLG.value == 'NO') {
            lc_bal = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            NEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
            FINAL_LC_BAL = lc_bal + NEW_LC_BAL;

            document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, FINAL_LC_BAL);
            BASE_BAL = SYS_BeFloat(document.MAINFORM.BASE_BAL.value);
            NEW_LIAB_BAL = SYS_BeFloat(document.MAINFORM.NEW_LIAB_BAL.value);
            NEW_BASE_BAL = BASE_BAL + NEW_LIAB_BAL;
            document.MAINFORM.BASE_BAL.value = SYT_AmtFormat('USD', NEW_BASE_BAL);

        }
        //
        document.MAINFORM.TEMP_DENTRMETL_FLG.value = '';
        document.MAINFORM.TEMP_DRAW_CLOSE_FLAG.value = '';
        document.MAINFORM.TEMP_C_TRX_STATUS.value = '';
        document.MAINFORM.TEMP_AMD_REF.value = '';
        if (document.MAINFORM.CLS_FLG.value == 'YES') {
            lc_bal = SYS_BeFloat(document.MAINFORM.LC_BAL.value); // Utility Auto Fix Comments
            NEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value); // Utility Auto Fix Comments
            FINAL_LC_BAL = lc_bal - NEW_LC_BAL; // Utility Auto Fix Comments
            document.MAINFORM.TEMP_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, FINAL_LC_BAL);
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_BAL.value);
            // FOR LOCAL BAL
            BASE_BAL = SYS_BeFloat(document.MAINFORM.BASE_BAL.value); // Utility Auto Fix Comments
            NEW_LIAB_BAL = SYS_BeFloat(document.MAINFORM.NEW_LIAB_BAL.value); // Utility Auto Fix Comments
            NEW_BASE_BAL = BASE_BAL - NEW_LIAB_BAL; // Utility Auto Fix Comments
            document.MAINFORM.TEMP_BASE_BAL.value = SYT_AmtFormat('USD', NEW_BASE_BAL);
            //
            ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
            unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));
            str = "";
            str1 = "";
            str2 = "";
            str3 = ""; // Utility Auto Fix Comments
            //sql1 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "'  AND C_TRX_STATUS='P'";
            //sql2 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "' AND DRAW_CLOSE_FLAG='NO'";
            //sql3 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "' AND DETRMNTL_FLG='YES'";


            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_Update_ConfirmBusinessCheck_0', '1', true);
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_Update_ConfirmBusinessCheck_1', '1', true);
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_Update_ConfirmBusinessCheck_2', '1', true);
            if (unPaidAmt > 0) {
                str = "You may not close the Standby LC due to outstanding charges";
            }
            if (document.MAINFORM.TEMP_DENTRMETL_FLG.value == 'YES') {
                str3 = "You may not close the Standby LC due to amendments pending beneficiary鈥檚 reply";
            }
            if (document.MAINFORM.TEMP_DRAW_CLOSE_FLAG.value == 'NO') {

                str2 = "You may not close the Standby LC due to open drawings";
            }
            if (document.MAINFORM.TEMP_C_TRX_STATUS.value == 'P') {
                str1 = "You may not close the Standby LC due to pending transactions";
            }
            if (str != '' || str1 != '' || str2 != '' || str3 != '') {
                str4 = str + "\n" + str1 + "\n" + str3 + "\n" + str2;
                alert(str4);
                return false;
            }

        } else {
            return true;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHK_ADD_CHARGES = function() {
    try {

        var ccy; // Utility Auto Fix Comments
        var unPaidAmt; // Utility Auto Fix Comments
        /*

ccy=document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;

unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));
if(unPaidAmt>0 &&  document.MAINFORM.CLS_FLG.value =='YES'){

SYS_CheckError(document.MAINFORM.CLS_FLG.value,"You may not close the Standby LC due to outstanding charges.");
return false;
}
*/
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYS_GetDataForDO_S("BneficiarySBLC", "N", false);

        SYS_GetDataForDO_S("SBLCSchedule", "N", false);

        //SYS_GetDataForDO_S("AdviceForBankCust","N",false);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_LCY_onChange = function() {
    try {

        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_BAL.value);
        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.NEW_LIAB_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_freeControlDOButton = function() {
    try {

        SYS_disableButton('SBLCSchedule', 'deletebutton');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_UpdateBalance = function() {
    try {

        var EXCH_RT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var UPDATE_BAL; // Utility Auto Fix Comments
        NEW_LC_BAL = document.MAINFORM.LC_BAL.value;
        EXCH_RT = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        UPDATE_BAL = NEW_LC_BAL * EXCH_RT;
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, UPDATE_BAL);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CloseFlagCheck = function() {
    try {

        var NEW_LC_BAL; // Utility Auto Fix Comments
        var NEW_LIAB_BAL; // Utility Auto Fix Comments
        if (document.MAINFORM.CLS_FLG.value == 'NO' || document.MAINFORM.CLS_FLG.value == '') {
            document.MAINFORM.NEW_LC_BAL.value = 0;
            document.MAINFORM.NEW_LIAB_BAL.value = 0;
            NEW_LC_BAL = document.MAINFORM.NEW_LC_BAL.value;
            NEW_LIAB_BAL = document.MAINFORM.NEW_LIAB_BAL.value;
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LIAB_BAL);
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYT_CHG_INIT('SYF_SBLC_INIT_RUN');
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
        SYF_SBLC_LCY_onChange();
        SYT_ChangeFldClass(document.MAINFORM.RENEWAL_STATUS, 'M');
        //
        if (document.MAINFORM.CLS_FLG.value == 'NO' && document.MAINFORM.SCHEDULED.value == 'YES') {

            EEHtml.getElementById('D').style.display = '';
        } else {
            EEHtml.getElementById('D').style.display = 'none';

        }
        //

        if (document.MAINFORM.CLS_FLG.value == 'NO' && document.MAINFORM.MULTI_BENE.value == 'YES') {

            EEHtml.getElementById('B').style.display = '';
        } else {
            EEHtml.getElementById('B').style.display = 'none';


        }

        if (document.MAINFORM.CLS_FLG.value == 'NO' && document.MAINFORM.AUTO_RENEW.value == 'YES') {
            EEHtml.getElementById('C').style.display = '';
        } else {
            EEHtml.getElementById('C').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.FREQUENCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RENEWAL_STATUS, 'O');

        }
        FLD_SBLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_INIT_RUN = function() {
    try {

        /*
if(SYS_FUNCTION_TYPE !='RE' && SYS_FUNCTION_TYPE !='IQ' && SYS_FUNCTION_TYPE !='EC')
{
//	SYM_SBLC_CAL_ADV_COMM();
//	SYM_SBLC_CAL_ISS_COMM();
//	SYT_CAL_CABLE();
	//SYT_CAL_COURIER();
	//SYT_CAL_POST();
//	SYM_SBLC_CAL_OTHER_CHARGE();

}
*/
        SYM_SBLC_chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        //SYF_SBLC_LCY_onChange();

        document.MAINFORM.CURRNT_STATUS.value = 'Update';
        document.MAINFORM.NXT_STATUS.value = 'ACTIVE';
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.ISSUE_DT.value = ISSUE_DT;
        // Add for check
        //();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CLS_FLG_onchange = function(event) {
    try {
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
        if (document.MAINFORM.CLS_FLG.value == 'YES') {
            SYF_SBLC_UpdateBalance();
            EEHtml.getElementById('B').style.display = 'none';
            EEHtml.getElementById('C').style.display = 'none';
            EEHtml.getElementById('D').style.display = 'none';
        } else if (document.MAINFORM.CLS_FLG.value == 'NO' || document.MAINFORM.CLS_FLG.value == "") {
            SYF_SBLC_CloseFlagCheck();
        }

        if (document.MAINFORM.CLS_FLG.value == 'NO' && document.MAINFORM.MULTI_BENE.value == 'YES') {
            EEHtml.getElementById('B').style.display = '';
        } else {
            EEHtml.getElementById('B').style.display = 'none';

        }

        if (document.MAINFORM.CLS_FLG.value == 'NO' && document.MAINFORM.AUTO_RENEW.value == 'YES') {
            EEHtml.getElementById('C').style.display = '';
        } else {
            EEHtml.getElementById('C').style.display = 'none';

        }
        // 

        if (document.MAINFORM.CLS_FLG.value == 'NO' && document.MAINFORM.SCHEDULED.value == 'YES') {
            EEHtml.getElementById('D').style.display = '';
        } else {
            EEHtml.getElementById('D').style.display = 'none';
        }

        //
        if (document.MAINFORM.CLS_FLG.value == '') {
            EEHtml.getElementById('B').style.display = 'none';
            EEHtml.getElementById('C').style.display = 'none';
            EEHtml.getElementById('D').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_LC_BAL_onchange = function(event) {
    try {
        SYF_SBLC_LCY_onChange();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Update.js", e);
    }
}