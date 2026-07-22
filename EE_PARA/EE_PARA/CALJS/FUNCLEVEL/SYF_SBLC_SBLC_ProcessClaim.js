var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SBLC_PRE_BK_ORDER_NO = function() {
    try {

        var PRES_BK_ID; // Utility Auto Fix Comments
        var PRES_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //PRES_BK_ORDER_NO = document.MAINFORM.PRES_BK_ORDER_NO.value;
        //PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //sSQLWhere = "ORDER_NO =" + PRES_BK_ORDER_NO + "AND C_MAIN_REF='" + PRES_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "PRES_BK_NM;PRES_BK_ADD1;PRES_BK_ADD2;PRES_BK_ADD3";
        SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_ProcessClaim_SYF_SBLC_PRE_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DRAW_CLOSE_FLAG.value = DRAW_CLOSE_FLAG;
        document.MAINFORM.CURRNT_STATUS.value = 'processclaim';
        document.MAINFORM.NXT_STATUS.value = 'Active';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.STDBY_LC_NO.value;
        document.MAINFORM.LC_BAL.value = LC_BAL;
        document.MAINFORM.DOC_STATUS.value = "";
        document.MAINFORM.REDC_BAL_AMT.value = "";
        document.MAINFORM.REDC_BAL_LOC_AMT.value = "";
        SYF_SBLC_ToDecimals();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_INT_CHG_RUN = function() {
    try {

        /*
if(SYS_FUNCTION_TYPE !='RE' && SYS_FUNCTION_TYPE!='IQ' && SYS_FUNCTION_TYPE!='EC'){
//	SYM_SBLC_CAL_ADV_COMM();
//	SYM_SBLC_CAL_ISS_COMM();
//	SYM_SBLC_CAL_OTHER_CHARGE();
//	SYT_CAL_CABLE();
//	SYT_CAL_COURIER();
//	SYT_CAL_POST();

}
*/
        SYM_SBLC_chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYT_DisableDivClass('partiesTab');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'P');
        EEHtml.getElementById('D').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_ToDecimals = function() {
    try {

        document.MAINFORM.DRAWDN_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.DRAWDN_AMT.value);
        document.MAINFORM.REDC_BAL_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.REDC_BAL_AMT.value);
        document.MAINFORM.REDC_BAL_LOC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.REDC_BAL_LOC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {


        SYS_GetDataForDO_S("BneficiarySBLC", "N", false, '', "BneficiarySBLC");
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_freeControlDOButton = function() {
    try {

        SYS_disableButton('BneficiarySBLC', 'addbutton');
        SYS_disableButton('BneficiarySBLC', 'editbutton');
        SYS_disableButton('BneficiarySBLC', 'deletebutton');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_PYMT_ADV_MSG = function() {
    try {

        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'FEDWIRE') {
            document.MAINFORM.TEMP_CPYT_PAY_ADV_MSG.value = document.MAINFORM.CPYT_PAY_ADV_MSG.value;
        } else {
            document.MAINFORM.TEMP_CPYT_PAY_ADV_MSG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var Draw_Amt; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var base_bal; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var lc_bal; // Utility Auto Fix Comments
        var red_bal; // Utility Auto Fix Comments
        var red_bal_local; // Utility Auto Fix Comments
        var reduce_bal_local; // Utility Auto Fix Comments
        var sql1; // Utility Auto Fix Comments
        var sql2; // Utility Auto Fix Comments
        var sql3; // Utility Auto Fix Comments
        var sql4; // Utility Auto Fix Comments
        var sql5; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var str1; // Utility Auto Fix Comments
        var str2; // Utility Auto Fix Comments
        var str3; // Utility Auto Fix Comments
        var str4; // Utility Auto Fix Comments
        var unPaidAmt; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_DENTRMETL_FLG.value = '';
        document.MAINFORM.TEMP_DRAW_CLOSE_FLAG.value = '';
        document.MAINFORM.TEMP_C_TRX_STATUS.value = '';
        document.MAINFORM.TEMP_AMD_REF.value = '';
        if (document.MAINFORM.DOC_STATUS.value == 'SETTLE') {

            //sql1 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "'";
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_ProcessClaim_ConfirmBusinessCheck_1', '1', true);

            Draw_Amt = SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value);
            lc_bal = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            red_bal = lc_bal - Draw_Amt;

            //by vamsi for Reduce Balance Local
            //sql2 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "'";
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_ProcessClaim_ConfirmBusinessCheck_2', '1', true);
            base_bal = SYS_BeFloat(document.MAINFORM.BASE_BAL.value);
            reduce_bal_local = SYS_BeFloat(document.MAINFORM.REDC_BAL_LOC_AMT.value);
            red_bal_local = base_bal - reduce_bal_local;
            document.MAINFORM.TEMP_BASE_BAL.value = SYT_AmtFormat("USD", red_bal_local);
            //

            document.MAINFORM.TEMP_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, red_bal);
            document.MAINFORM.REDC_BAL_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.REDC_BAL_AMT.value);
            //document.MAINFORM.LC_BAL.value=document.MAINFORM.REDC_BAL_AMT.value;
            //document.MAINFORM.CLS_FLG.value='YES';
            document.MAINFORM.DRAW_CLOSE_FLAG.value = 'YES';
            document.MAINFORM.TEMP_DRAW_CLOSE_FLAG.value = document.MAINFORM.DRAW_CLOSE_FLAG.value;
        }
        if (document.MAINFORM.DOC_STATUS.value == 'FINAL') {

            document.MAINFORM.LC_BAL.value = 0;
            document.MAINFORM.CLS_FLG.value = 'YES';
            document.MAINFORM.DRAW_CLOSE_FLAG.value = 'YES';
            document.MAINFORM.TEMP_DRAW_CLOSE_FLAG.value = document.MAINFORM.DRAW_CLOSE_FLAG.value;
            ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
            unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));
            str = "";
            str1 = "";
            str2 = "";
            str3 = "";
            //sql3 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "'  AND C_TRX_STATUS='P'";
            //sql4 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "' AND DRAW_CLOSE_FLAG='NO'";
            //sql5 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "' AND DETRMNTL_FLG='YES'";
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_ProcessClaim_ConfirmBusinessCheck_3', '1', true);
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_ProcessClaim_ConfirmBusinessCheck_4', '1', true);
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_ProcessClaim_ConfirmBusinessCheck_5', '1', true);

            if (unPaidAmt > 0) {
                str = "You may not close the Standby LC due to outstanding charges";
            }
            if (document.MAINFORM.TEMP_DENTRMETL_FLG.value == 'YES') {
                str3 = "You may not close the Standby LC due to amendments pending beneficiary reply";
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

        }
        if (document.MAINFORM.DOC_STATUS.value == 'CANCEL') {
            LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            document.MAINFORM.LC_BAL.value = LC_BAL;

            document.MAINFORM.CLS_FLG.value = 'NO';
            document.MAINFORM.DRAW_CLOSE_FLAG.value = 'YES';
            document.MAINFORM.TEMP_DRAW_CLOSE_FLAG.value = document.MAINFORM.DRAW_CLOSE_FLAG.value;
        }
        return Cal_eloan_fields_SBLC();
        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Charges_Fields = function() {
    try {

        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value == "0") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, 'O');
        }
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value == "1") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, 'P');
        }
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value == "3") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_REDUCE_LC_BAL_AMT_LOCAL = function() {
    try {

        var EXCH_RATE; // Utility Auto Fix Comments
        var REDUCE_BAL; // Utility Auto Fix Comments
        var Reduce_Bal_Local; // Utility Auto Fix Comments
        var lc_bal; // Utility Auto Fix Comments
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();

        lc_bal = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        EXCH_RATE = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        REDUCE_BAL = SYS_BeFloat(document.MAINFORM.REDC_BAL_AMT.value);
        Reduce_Bal_Local = SYS_BeFloat(REDUCE_BAL * EXCH_RATE);

        document.MAINFORM.REDC_BAL_LOC_AMT.value = SYT_AmtFormat(SYS_LOCAL_CCY, Reduce_Bal_Local);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();
        SYT_CHG_INIT('SYF_SBLC_INT_CHG_RUN');
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.STDBY_LC_NO.value;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
        SYF_SBLC_Charges_Fields();
        SYM_SBLC_Show_doc_status();
        SYM_SBLC_Show_Beneficiaries_Tab();
        SYF_SBLC_PYMT_ADV_MSG();
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            var curreny = document.MAINFORM.CHG_FLD_LOCAL_COLLECT_TOTAL.value;
            if (curreny == 0) {
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'P');
            }
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DOC_STATUS_onchange = function(event) {
    try {
        var DRAW_AMT; // Utility Auto Fix Comments
        var REDUC_BAL_AMT; // Utility Auto Fix Comments
        var Reduce_BAl_Amt_loc; // Utility Auto Fix Comments
        if (document.MAINFORM.DOC_STATUS.value == 'SETTLE' || document.MAINFORM.DOC_STATUS.value == 'FINAL') {
            EEHtml.getElementById('D').style.display = "";
        } else {
            EEHtml.getElementById('D').style.display = 'none';
        }


        if (document.MAINFORM.DOC_STATUS.value == 'SETTLE') {
            DRAW_AMT = document.MAINFORM.DRAWDN_AMT.value;
            document.MAINFORM.REDC_BAL_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, DRAW_AMT);
            //REDUC_BAL_AMT= document.MAINFORM.REDC_BAL_AMT.value;
            //document.MAINFORM.REDC_BAL_LOC_AMT.value=document.MAINFORM.DRAWDN_AMT.value;
            //document.MAINFORM.REDC_BAL_LOC_AMT.value=SYT_AmtFormat(document.MAINFORM.LC_CCY.value,DRAW_AMT);
            SYF_SBLC_REDUCE_LC_BAL_AMT_LOCAL();
            SYT_ChangeFldClass(document.MAINFORM.REDC_BAL_AMT, 'M');
            //modified by Logesh 21-08-2012
            document.MAINFORM.CLS_FLG.value = 'NO';
        } else if (document.MAINFORM.DOC_STATUS.value == 'FINAL') {
            document.MAINFORM.REDC_BAL_AMT.value = document.MAINFORM.LC_BAL.value;
            SYF_SBLC_REDUCE_LC_BAL_AMT_LOCAL();
            SYT_ChangeFldClass(document.MAINFORM.REDC_BAL_AMT, 'P');
            document.MAINFORM.DRAW_CLOSE_FLAG.value = 'YES';
            document.MAINFORM.CLS_FLG.value = 'YES';
        } else if (document.MAINFORM.DOC_STATUS.value == 'CANCEL') {
            document.MAINFORM.REDC_BAL_AMT.value = 0.0;
            Reduce_BAl_Amt_loc = 0.0;
            document.MAINFORM.REDC_BAL_LOC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, Reduce_BAl_Amt_loc);
            //Reduce_BAl_Amt_loc=document.MAINFORM.REDC_BAL_LOC_AMT.value;
            //document.MAINFORM.REDC_BAL_LOC_AMT.value=0.0;
            SYF_SBLC_REDUCE_LC_BAL_AMT_LOCAL();
            SYT_ChangeFldClass(document.MAINFORM.REDC_BAL_AMT, 'P');
            //document.MAINFORM.DRAW_CLOSE_FLAG.value='YES';
        } else {
            document.MAINFORM.REDC_BAL_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_LOCAL_CCY); // Utility Auto Fix Comments
            document.MAINFORM.REDC_BAL_LOC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_LOCAL_CCY);
        }

        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.REDC_BAL_AMT.value);
        getCPYT_CR_TTL_AMT_TTLCCY();
        getCPYT_DR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRAWDN_AMT_onchange = function(event) {
    try {
        SYF_SBLC_ToDecimals();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_NM', 'PRES_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYF_SBLC_PRE_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_REDC_BAL_AMT_onchange = function(event) {
    try {
        var REDAMT = SYS_BeFloat(document.MAINFORM.REDC_BAL_AMT.value); //Added
        var DRAWDN_AMT = SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value); //Jax 2020/6/2
        if (REDAMT < 0) {
            alert("amount field value cannot be Negative");
            document.MAINFORM.REDC_BAL_AMT.value = '';
        } else if (REDAMT > DRAWDN_AMT) {
            alert("Reduce Balance Amount cannot more than Drawdown Amount");
            document.MAINFORM.REDC_BAL_AMT.value = DRAWDN_AMT;
        }
        SYF_SBLC_ToDecimals();
        SYF_SBLC_REDUCE_LC_BAL_AMT_LOCAL();
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.REDC_BAL_AMT.value);
        getCPYT_CR_TTL_AMT_TTLCCY();
        getCPYT_DR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_ProcessClaim.js", e);
    }
}