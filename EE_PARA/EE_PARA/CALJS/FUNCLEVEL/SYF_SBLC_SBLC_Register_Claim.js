var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var clm_Balflag = true;
var sblc_Clmbal = 0;

csFuncLevelProto.SYF_SBLC_PRES_BK_ORDER_NO = function() {
    try {

        //var PRES_BK_ORDER_NO = document.MAINFORM.PRES_BK_ORDER_NO.value;
        //var PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //var sSQLWhere = "ORDER_NO =" + PRES_BK_ORDER_NO + "AND C_MAIN_REF='" + PRES_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "PRES_BK_NM;PRES_BK_ADD1;PRES_BK_ADD2;PRES_BK_ADD3";
        SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_Register_Claim_SYF_SBLC_PRES_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYT_CHG_INIT('SYF_SBLC_INIT_CHG_RUN');
        SYF_SBLC_ToDecimals();
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'P');
        SYT_DisableDivClass('partiesTab');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.DRAWING_REF.value;

        document.MAINFORM.STDBY_LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        // SWT FOR CHARGES
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
        //
        if (document.MAINFORM.MULTI_BENE.value == 'YES') {
            EEHtml.getElementById('C').style.display = '';
        } else {
            EEHtml.getElementById('C').style.display = 'none';
        }
        if (SYS_FUNCTION_TYPE == 'EC') {
            if (I_EVENT_TIMES != I_EVENT_TIMES + 1) {
                document.MAINFORM.LC_BAL.value = document.MAINFORM.ORIGIN_SBLC_BAL.value;
            } else {
                document.MAINFORM.LC_BAL.value = SYS_BeFloat(document.MAINFORM.ORIGIN_SBLC_BAL.value) - SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value);
                document.MAINFORM.ORIGIN_SBLC_BAL.value = document.MAINFORM.LC_BAL.value;
            }
        }
        //CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DRAWDN_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        document.MAINFORM.ORIGIN_SBLC_BAL.value = document.MAINFORM.LC_BAL.value;
        SYF_SBLC_Cal_No_of_Draw();
        document.MAINFORM.CURRNT_STATUS.value = 'Register_Claim';
        document.MAINFORM.NXT_STATUS.value = 'Active';
        document.MAINFORM.DRAWDN_AMT.value = "";
        sblc_Clmbal = document.MAINFORM.LC_BAL.value;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        var DRAW_DOWN_AMT = SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value);


        if (DRAW_DOWN_AMT > LC_BAL) {
            var r = confirm("The Drawdown Amount exceeds the LC Balance.");
            if (r == false) {
                document.MAINFORM.DRAWDN_AMT.value = '';
                return false;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_INIT_CHG_RUN = function() {
    try {

        /*
if(SYS_FUNCTION_TYPE!='RE' && SYS_FUNCTION_TYPE!='IQ' && SYS_FUNCTION_TYPE!='EC'){

//	SYM_SBLC_CAL_ADV_COMM();
//	SYM_SBLC_CAL_ISS_COMM();
//	SYM_SBLC_CAL_OTHER_CHARGE();
//	SYT_CAL_POST()
//	SYT_CAL_COURIER();
//	SYT_CAL_CABLE();

}
*/
        SYM_SBLC_chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYS_GetDataForDO_S("BneficiarySBLC", "N", false, '', "BneficiarySBLC");

        SYS_GetDataForDO_S("AdviceForBankCust", "N", false, '', "AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Drawing_Referencenumber = function() {
    try {

        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var DrawNo = SYS_BeInt(document.MAINFORM.NO_OF_DRAW.value);
        if (C_MAIN_REF != '') {
            SYS_GetTableDataByRule_S('SYF_SBLC_SBLC_Register_Claim_SYF_SBLC_Drawing_Referencenumber_1', '1', true);
            var TEMP_DRWE_REF = document.MAINFORM.TEMP_DRWE_REF.value;
            if (TEMP_DRWE_REF != '') {
                DrawNo = DrawNo + 1;
            } else {
                DrawNo = 1;
            }
            document.MAINFORM.TEMP_DRWE_REF.value = '';
        }
        if (C_MAIN_REF == '') {
            document.MAINFORM.DRAWING_REF.value = '';
        } else {

            document.MAINFORM.NO_OF_DRAW.value = DrawNo;
            if (DrawNo < 10) {
                document.MAINFORM.DRAWING_REF.value = C_MAIN_REF + '-0' + DrawNo;
            } else {
                document.MAINFORM.DRAWING_REF.value = C_MAIN_REF + '-' + DrawNo;
            }

        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_freeControlDOButton = function() {
    try {

        SYS_disableButton('BneficiarySBLC', 'addbutton');
        SYS_disableButton('BneficiarySBLC', 'editbutton');
        SYS_disableButton('BneficiarySBLC', 'deletebutton');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_No_of_Draw = function() {
    try {

        var NO_OF_DRAW = SYS_BeInt(document.MAINFORM.NO_OF_DRAW.value);

        if (NO_OF_DRAW == "" || NO_OF_DRAW == 0) {
            document.MAINFORM.NO_OF_DRAW.value = 1;

        } else {
            document.MAINFORM.NO_OF_DRAW.value = NO_OF_DRAW + 1;
        }
        SYF_SBLC_SetReferenc_no(document.MAINFORM.NO_OF_DRAW.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        document.MAINFORM.DRAWDN_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_ToDecimals = function() {
    try {

        document.MAINFORM.DRAWDN_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.DRAWDN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_SetReferenc_no = function(ref) {
    try {

        var NO_OF_DRAW = SYS_BeInt(ref);
        var Temp;
        if (NO_OF_DRAW < 10) {
            Temp = '-0' + NO_OF_DRAW;
        } else {
            Temp = '-' + NO_OF_DRAW;
        }
        document.MAINFORM.DRAWING_REF.value = document.MAINFORM.C_MAIN_REF.value + Temp;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_PRESENTED_BY = function() {
    try {

        if (document.MAINFORM.PRES_BY.value == "Beneficiary") {
            SYT_ChangeFldClass_New('PRES_CUST_BK', 'P');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'P');
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            document.MAINFORM.PRES_BK_SW_ADD.value = "";
            document.MAINFORM.PRES_BK_SW_TAG.value = "";
        } else if (document.MAINFORM.PRES_BY.value == "Advising Bank") {
            SYT_ChangeFldClass_New('PRES_CUST_BK', 'P');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'M');
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.ADV_BK_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.ADV_BK_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value;
            document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
            document.MAINFORM.PRES_BK_SW_TAG.value = document.MAINFORM.ADV_BK_SW_TAG.value;
        } else {
            SYT_ChangeFldClass_New('PRES_CUST_BK', 'O');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'O');
            document.MAINFORM.PRES_BK_ID.value = "";
            document.MAINFORM.PRES_BK_NM.value = "";
            document.MAINFORM.PRES_BK_ADD1.value = "";
            document.MAINFORM.PRES_BK_ADD2.value = "";
            document.MAINFORM.PRES_BK_ADD3.value = "";
            document.MAINFORM.PRES_BK_SW_ADD.value = "";
            document.MAINFORM.PRES_BK_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_Clear_CUST_BANK = function() {
    try {

        if (document.MAINFORM.PRES_CUST_BK.value == "Customer") {
            document.MAINFORM.PRES_ID_BTN.value = "CUST";
            document.MAINFORM.PRES_BK_ID.value = "";
            document.MAINFORM.PRES_BK_NM.value = "";
            document.MAINFORM.PRES_BK_ADD1.value = "";
            document.MAINFORM.PRES_BK_ADD2.value = "";
            document.MAINFORM.PRES_BK_ADD3.value = "";
            document.MAINFORM.PRES_BK_SW_ADD.value = "";
            document.MAINFORM.PRES_BK_SW_TAG.value = "";
        } else if (document.MAINFORM.PRES_CUST_BK.value == "Bank") {
            document.MAINFORM.PRES_ID_BTN.value = "BANK";
            document.MAINFORM.PRES_BK_ID.value = "";
            document.MAINFORM.PRES_BK_NM.value = "";
            document.MAINFORM.PRES_BK_ADD1.value = "";
            document.MAINFORM.PRES_BK_ADD2.value = "";
            document.MAINFORM.PRES_BK_ADD3.value = "";
            document.MAINFORM.PRES_BK_SW_ADD.value = "";
            document.MAINFORM.PRES_BK_SW_TAG.value = "";
        } else {
            document.MAINFORM.PRES_ID_BTN.value = "";
            document.MAINFORM.PRES_BK_ID.value = "";
            document.MAINFORM.PRES_BK_NM.value = "";
            document.MAINFORM.PRES_BK_ADD1.value = "";
            document.MAINFORM.PRES_BK_ADD2.value = "";
            document.MAINFORM.PRES_BK_ADD3.value = "";
            document.MAINFORM.PRES_BK_SW_ADD.value = "";
            document.MAINFORM.PRES_BK_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_PRES_CUST_BANK = function() {
    try {

        if (document.MAINFORM.PRES_CUST_BK.value == "Customer") {
            SYS_InqCUBK('PRES_CUST_ID', 'PRES_BK_ID', 'ID');
        } else if (document.MAINFORM.PRES_CUST_BK.value == "Bank") {
            SYS_InqCUBK('PRES_BK_ID', 'PRES_BK_ID', 'ID');
        } else {
            SYS_CheckError(document.MAINFORM.PRES_CUST_BK, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_SBLC_CheckClmBlnce();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CheckClmBlnce = function() {
    try {

        if (clm_Balflag) {
            if (SYS_BeFloat(sblc_Clmbal) >= SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value)) {
                document.MAINFORM.SBLC_CLM_BAL.value = SYS_BeFloat(sblc_Clmbal) - SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value);
                clm_Balflag = false;
            } else {
                alert("Drawdown Amount " + document.MAINFORM.SBLC_CLM_BAL.value + " Claim amount Execeeds LC Balance!!!");
                document.MAINFORM.DRAWDN_AMT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_SBLC_BAL = function() {
    try {

        var nORIGIN_SBLC_BAL = SYS_BeFloat(document.MAINFORM.ORIGIN_SBLC_BAL.value);
        var nCLM_AMT_TRXCCY = SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value);
        if (nCLM_AMT_TRXCCY > nORIGIN_SBLC_BAL) {
            alert("Claim Amount can not exceed the Outstanding lc Amount");
            document.MAINFORM.DRAWDN_AMT.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRAWDN_AMT_onchange = function(event) {
    try {
        var drawdn = SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value);
        if (SYS_BeFloat(document.MAINFORM.LC_BAL.value) < SYS_BeFloat(document.MAINFORM.DRAWDN_AMT.value)) {
            alert("Drawdown amount value cannot be Greater than LC Balance");
            document.MAINFORM.DRAWDN_AMT.value = '';
        }
        if (drawdn < 0) {
            alert("Drawdown amount value cannot be Negative");
            document.MAINFORM.DRAWDN_AMT.value = '';
        }
        SYF_SBLC_Cal_SBLC_BAL();
        clm_Balflag = true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_NM', 'PRES_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_CUST_BK.value == "Bank") {
            SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
        } else if (document.MAINFORM.PRES_CUST_BK.value == "Customer") {
            SYT_GetCUBK_All('PRES_CUST_ID', 'PRES_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        //SYT_CustLookUp(event.currentTarget);
        SYF_SBLC_Cal_PRES_CUST_BANK();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYF_SBLC_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_BY_onchange = function(event) {
    try {
        SYF_SBLC_PRESENTED_BY();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PRES_CUST_BK_onchange = function(event) {
    try {
        SYF_SBLC_Cal_Clear_CUST_BANK();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Register_Claim.js", e);
    }
}