var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_EPLC_CONFIRM_CALL();
        SYF_EPLC_UPDATE_MASTER_BY_DETRMNTL_FLG();
        SYT_LIAB_VOUCHER();
        SYM_EPLC_TEMP_LC_AMT_707();

        //Add by amy for SMBC in 20120912
        SYM_EPLC_SET_NEW_CONF_COMM();
        SYM_EPLC_UPDATE_PAID_CONF_COMM();
        SYM_EPLC_SetTrxTempFieldVaule();
        SYM_EPLC_M_TOL_TAG39();

        Cal_SYND_ACTION_REF();
        /* if(SYS_FUNCTION_TYPE != 'RE'){
    			document.MAINFORM.LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
    		} */
        //SYM_EPLC_Cal_LC_Balance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        //added code for issue #74221 --start--
        if (document.MAINFORM.AMD_CHARGES.value != '') {
            document.MAINFORM.CHARGES.value = document.MAINFORM.AMD_CHARGES.value;
        }
        //added code for issue #74221 --end--
        return (SYF_EPLC_CHK_32B33B() && SYF_EPLC_CHK_LTST_SHIP_DT() && SYF_EPLC_CHK_NEW_EXPIRY_DT() && Cal_eloan_fields());
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        var FldName; // Utility Auto Fix Comments
        var FldName_Real; // Utility Auto Fix Comments
        var Prefix; // Utility Auto Fix Comments
        var frm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        SYF_EPLC_CHK_DETREMENTAL();
        SYM_EPLC_INIT();
        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;

        //define value
        document.MAINFORM.DETRMNTL_FLG.value = 'NO';
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        if (document.MAINFORM.TRM_TO_BK_REF.value == "") {
            document.MAINFORM.TRM_TO_BK_REF.value = "NONREF";
        }

        //AMD_REF
        document.MAINFORM.NO_OF_AMD.value = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value) + 1;
        document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + "-" + SYT_FillZero(document.MAINFORM.NO_OF_AMD.value);


        //blank value
        document.MAINFORM.BK_TO_BK_MT730.value = "";

        //TEMP_NO_OF_AMD
        document.MAINFORM.TEMP_NO_OF_AMD.value = SYT_FillZero(document.MAINFORM.NO_OF_AMD.value);

        //for MT730 Tag 30
        document.MAINFORM.TEMP_MT730_TAG30.value = document.MAINFORM.TRX_DT.value;
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.AVLB_LC_BAL.value;

        //keep conf_bal
        var old_liab_bal=document.MAINFORM.OLD_LIAB_BAL.value;
        var old_conf_bal=document.MAINFORM.OLD_CONF_BAL.value;
        //for display old value for OLD_XXXXX && NEW_XXXX 
        frm = document.MAINFORM;
        for (i = 0; i < frm.elements.length; i++) { // Utility Auto Fix Comments
            FldName = frm.elements[i].name;
            Prefix = FldName.substr(0, 4);
            FldName_Real = FldName.substr(4, FldName.length - 4);
            if (FldName.indexOf("_BTN") > -1 || FldName.indexOf("_ORDER_") > -1) {
                continue;
            }
            if (Prefix == "OLD_") {
                frm.elements[i].value = frm.elements[FldName_Real].value;
            }
            if (Prefix == "NEW_") {
                frm.elements[i].value = frm.elements[FldName_Real].value;
            }
        }
        if(document.MAINFORM.OLD_LIAB_BAL.value == 0){
        document.MAINFORM.OLD_LIAB_BAL.value=old_liab_bal;
        }
        if(document.MAINFORM.OLD_CONF_BAL.value == 0){
        document.MAINFORM.OLD_CONF_BAL.value=old_conf_bal;
        }

        document.MAINFORM.SENT_MT730_FLG.value='NO';
        document.MAINFORM.NEW_AVAL_BY.value='';
        document.MAINFORM.NEW_DRAFTS_AT.value='';
        //init run
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();
        SYF_EPLC_NEW_CONF_BAL();
        SYM_EPLC_Tenor_Narrative();
        document.MAINFORM.TEMP_TAG_79.value = '';

        SYF_EPLC_CLASS_BY_NEW_39B();
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        document.MAINFORM.NEW_POS_TOL.value = 0;
        document.MAINFORM.NEW_NEG_TOL.value = 0;
        document.MAINFORM.NEW_AMT_SPEC.value = '';
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        document.MAINFORM.NEW_EXPIRY_DT.value = '';
        document.MAINFORM.NEW_EXPIRY_PLC_NARR.value = '';
        document.MAINFORM.NEW_GOODS_DESC.value = '';
        document.MAINFORM.NEW_DOC_REQ.value = '';
        document.MAINFORM.NEW_ADDIT_CONDITION.value = '';
        document.MAINFORM.NEW_INSTR_TO_PAY_BK.value = '';
        document.MAINFORM.NEW_PARTIAL_SHIP.value = '';
        document.MAINFORM.NEW_PARTIAL_SHIP_NARR.value = '';
        document.MAINFORM.NEW_TNSHIP.value = '';
        document.MAINFORM.NEW_TNSHIP_NARR.value = '';
        document.MAINFORM.NEW_LOAD_PLACE.value = '';
        document.MAINFORM.NEW_LOAD_PORT.value = '';
        document.MAINFORM.NEW_DEST_PORT.value = '';
        document.MAINFORM.NEW_DEST_PLACE.value = '';
        document.MAINFORM.NEW_LTST_SHIP_DT.value = '';
        document.MAINFORM.NEW_SHIP_PRD.value = '';
        document.MAINFORM.NEW_BENE_ID.value = '';
        document.MAINFORM.NEW_BENE_NM.value = '';
        document.MAINFORM.NEW_BENE_ADD1.value = '';
        document.MAINFORM.NEW_BENE_ADD2.value = '';
        document.MAINFORM.NEW_BENE_ADD3.value = '';
        document.MAINFORM.NEW_BENE_MAIL_ADD.value = '';
        document.MAINFORM.NEW_BENE_LANG.value = '';
        document.MAINFORM.NEW_BENE_CORR_MED.value = '';
        document.MAINFORM.NEW_BENE_EMAIL.value = '';
        document.MAINFORM.NEW_BENE_FAX.value = '';
        document.MAINFORM.NEW_BENE_AC_OFF_CODE.value = '';
        document.MAINFORM.NEW_BENE_ACNO.value = '';
        document.MAINFORM.NEW_BENE_REF_NO.value = '';
        document.MAINFORM.NEW_CONF_BK_ADD1.value = '';
        document.MAINFORM.NEW_CONF_BK_ADD2.value = '';
        document.MAINFORM.NEW_CONF_BK_ADD3.value = '';
        document.MAINFORM.NEW_CONF_BK_ID.value = '';
        document.MAINFORM.NEW_CONF_BK_NM.value = '';
        document.MAINFORM.NEW_CONF_BK_SW_ADD.value = '';
        document.MAINFORM.NEW_CONF_INSTR.value = document.MAINFORM.CONF_INSTR.value;
        document.MAINFORM.NEW_REIM_BK_ADD1.value = '';
        document.MAINFORM.NEW_REIM_BK_ADD2.value = '';
        document.MAINFORM.NEW_REIM_BK_ADD3.value = '';
        document.MAINFORM.NEW_REIM_BK_ID.value = '';
        document.MAINFORM.NEW_REIM_BK_NM.value = '';
        document.MAINFORM.NEW_REIM_BK_SW_ADD.value = '';
        document.MAINFORM.NEW_ADV_THU_BK_ADD1.value = '';
        document.MAINFORM.NEW_ADV_THU_BK_ADD2.value = '';
        document.MAINFORM.NEW_ADV_THU_BK_ADD3.value = '';
        document.MAINFORM.NEW_ADV_THU_BK_ID.value = '';
        document.MAINFORM.NEW_ADV_THU_BK_NM.value = '';
        document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value = '';
        document.MAINFORM.NEW_APPL_ADD1.value = '';
        document.MAINFORM.NEW_APPL_ADD2.value = '';
        document.MAINFORM.NEW_APPL_ADD3.value = '';
        document.MAINFORM.NEW_APPL_ID.value = '';
        document.MAINFORM.NEW_APPL_NM.value = '';
        document.MAINFORM.NEW_DRWE_ADD1.value = '';
        document.MAINFORM.NEW_DRWE_ADD2.value = '';
        document.MAINFORM.NEW_DRWE_ADD3.value = '';
        document.MAINFORM.NEW_DRWE_ID.value = '';
        document.MAINFORM.NEW_DRWE_NM.value = '';
        document.MAINFORM.NEW_DRWE_SW_ADD.value = '';
        document.MAINFORM.NEW_DRWE_ADD1.value = '';
        document.MAINFORM.NEW_DRWE_ADD2.value = '';
        document.MAINFORM.NEW_DRWE_ADD3.value = '';
        document.MAINFORM.NEW_DRWE_ID.value = '';
        document.MAINFORM.NEW_DRWE_NM.value = '';
        document.MAINFORM.NEW_DRWE_SW_ADD.value = '';
        document.MAINFORM.NEW_FORM_OF_LC.value = '';
        document.MAINFORM.NEW_APLB_RULE.value = '';

        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'BASE_CCY', 'BASE_BAL', 'BASE_RT');
        SYF_EPLC_MPO_TenorInformation();
        FLD_EPLC_NEW_APLB_RULE_onchange();
        SYF_EPLC_NO_OF_DRAW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_EPLC_CHK_NEW_ADV_THU_BK_SW_TAG();
        InitRun();
        //for class
        SYF_EPLC_CLASS_BY_43P_NEW();
        SYF_EPLC_CLASS_BY_43P_OLD();
        SYF_EPLC_CLASS_BY_43T_NEW();
        SYF_EPLC_CLASS_BY_43T_OLD();
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYF_EPLC_CLASS_BY_NEW_39B();
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYF_EPLC_CLASS_ISSUE_BK_CHG_CCY();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYM_EPLC_MPO_LIAB_ACNO();
        //for chg
        SYT_CHG_INIT("SYF_EPLC_CHG_INIT_RUN");
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
        //SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD();
        SYM_EPLC_Alert_SYN_FLG();
        // SYM_EPLC_CHK_AVAL_BY_INIT();
        SYF_EPLC_MPO_TenorInformation();
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OUR_ROLE, 'O');
        //SYF_EPLC_OUR_ENG();
        var sCONF_INSTR = document.MAINFORM.NEW_CONF_INSTR.value;
        if (sCONF_INSTR == "CONFIRM") {
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
        } else if (sCONF_INSTR == 'WITHOUT') {
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            //EEHtml.fireEvent(document.MAINFORM.OUR_ENG, 'onchange');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
        }
        SYM_EPLC_CONF_INSTR_AMD(); 
        SYF_EPLC_MT798_FLG();
        CHG_DefCharge_chargeAtOnchange();
        FLD_EPLC_NEW_APLB_RULE_onchange();
        FLD_EPLC_NEW_TENOR_TYPE_onchange();
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYF_EPLC_NEW_CONF_INSTR();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CABLE = function() {
    try {
        var nTimes; // Utility Auto Fix Comments
        var nTimes_MT707; // Utility Auto Fix Comments
        var nTimes_MT730; // Utility Auto Fix Comments
        SYT_CAL_CABLE();
        return;
        /*
    nTimes_MT707 =(document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank")?1:0;
    nTimes_MT730 =(document.MAINFORM.SENT_MT730_FLG.value == "YES")?1:0;
    nTimes = nTimes_MT707 + nTimes_MT730;

    //if nTimes is zero, the system will run Chg.reset() then return
    SYT_CAL_CABLE(nTimes);
    */
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COMM = function() {
    try {
        var NEW_CONF_BAL; // Utility Auto Fix Comments
        var OLD_CONF_BAL; // Utility Auto Fix Comments
        //for ADV_AMND_COMM
        SYT_CAL_COMM("EPLC_AMEND_COMM", document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        return;

        /*
    //for CFM_COMM
    OLD_CONF_BAL =SYS_BeFloat(document.MAINFORM.OLD_CONF_BAL.value);
    NEW_CONF_BAL =SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value);
    if(NEW_CONF_BAL > OLD_CONF_BAL){
    	SYT_CAL_COMM("CONF_COMM",document.MAINFORM.LC_CCY.value,document.MAINFORM.NEW_CONF_BAL.value);
    }
    */
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CONF_BAL = function() {
    try {
        var nCONF_BAL; // Utility Auto Fix Comments
        var nCONF_PERCENT; // Utility Auto Fix Comments
        var nLC_BAL; // Utility Auto Fix Comments
        var nLIAB_BAL; // Utility Auto Fix Comments
        var nNO_PRD; // Utility Auto Fix Comments
        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
            if (document.MAINFORM.CONF_PCT.value <= 0) {
                document.MAINFORM.CONF_PCT.value = 100;
            }
            nCONF_PERCENT = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
            nLC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            nNO_PRD = SYS_BeInt(document.MAINFORM.NO_PRD.value) + 1;

            if (document.MAINFORM.REV_LC.value == 'YES') {
                if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                    nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100 * nNO_PRD);
                    document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                    document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                }
                if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                    nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100);
                    nLIAB_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100 * nNO_PRD);
                    document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                    document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nLIAB_BAL);
                }
            } else {
                nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100);
                document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
            }
        } else {
            document.MAINFORM.CONF_PCT.value = 0;
            document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COURIER = function() {
    try {
        SYT_CAL_COURIER();
        return;
        /*
    if(document.MAINFORM.ADV_LC_BY.value.indexOf("Mail") >-1){
    	SYT_CAL_COURIER();
    }else{
    	SYT_RESET_COURIER();
    }
    */
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INIT_RUN = function() {
    try {
        SYF_EPLC_CAL_COMM();
        SYF_EPLC_CAL_CABLE();
        SYF_EPLC_CAL_COURIER();
        SYT_CAL_POST();
        SYM_EPLC_CAL_PAID_CFM_COMM();
        SYM_EPLC_INIT_UNPAID_CONF_COMM();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_32B33B = function() {
    try {
        return SYM_EPLC_M_CHK_32B33B(document.MAINFORM.INC_AMT, document.MAINFORM.DEC_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_DETREMENTAL = function() {
    try {
        var NO_OF_AMD; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        var tempFldName; // Utility Auto Fix Comments
        if (document.MAINFORM.DETRMNTL_FLG.value == "YES") {
            //start add by Canny 2013-09-12
            NO_OF_AMD = SYT_FillZero(document.MAINFORM.NO_OF_AMD.value);
            tempFldName = "TEMP_NO_OF_AMD";
            obj = EEHtml.getElementById(tempFldName);
            if (obj == null || obj == "undefined") {
                obj = document.createElement("input");
                obj.name = tempFldName;
                obj.id = tempFldName;
                obj.setAttribute("type", "hidden");
                document.MAINFORM.appendChild(obj);
            }
            obj.value = NO_OF_AMD;
            SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_AmendmentOneStep_SYF_EPLC_CHK_DETREMENTAL_0', '1', 'Y');
            //end add by Canny 2013-09-12

            if (document.MAINFORM.TEMP_CHAR1.value == "" || document.MAINFORM.TEMP_CHAR1 == null) {
                alert("Warning:There is a detrimental amendment outstanding. Please process Beneficiary Response before proceeding!");
                //parent.toolbar.SYS_MakeButtonShow("_cancel");
                // Mark by jane user can Register Amendment Revolved if this amend is Detrimental  
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHIP_DT = function() {
    try {
        var oEXPIRY_DT; // Utility Auto Fix Comments
        oEXPIRY_DT = (document.MAINFORM.NEW_EXPIRY_DT.value != "") ? document.MAINFORM.NEW_EXPIRY_DT : document.MAINFORM.EXPIRY_DT;

        if (document.MAINFORM.NEW_LTST_SHIP_DT.value == "") {
            return SYM_EPLC_M_CHK_LTST_SHIP_DT_OLD(document.MAINFORM.OLD_LTST_SHIP_DT, oEXPIRY_DT);
        } else {
            return SYM_EPLC_M_CHK_LTST_SHIP_DT_NEW(document.MAINFORM.NEW_LTST_SHIP_DT, oEXPIRY_DT);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_NEW_EXPIRY_DT = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.AMD_DT.value.length > 0 && document.MAINFORM.NEW_EXPIRY_DT.value.length > 0) {
            nDays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
            if (nDays <= 0) {
                SYS_CheckError(document.MAINFORM.NEW_EXPIRY_DT, "New Expiry date should be later than Amendment Date!");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_REV_LC = function() {
    try {
        SYM_EPLC_M_CHK_REV_LC(document.MAINFORM.REV_LC, document.MAINFORM.OUR_ENG);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD_NEW = function() {
    try {
        SYM_EPLC_M_CHK_SHP_PRD_NEW(document.MAINFORM.NEW_LTST_SHIP_DT, document.MAINFORM.NEW_SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD_OLD = function() {
    try {
        SYM_EPLC_M_CHK_SHP_PRD_OLD(document.MAINFORM.OLD_LTST_SHIP_DT, document.MAINFORM.OLD_SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43P_NEW = function() {
    try {
        SYM_EPLC_M_CLASS_BY_43P_NEW(document.MAINFORM.NEW_PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43P_OLD = function() {
    try {
        SYM_EPLC_M_CLASS_BY_43P_OLD(document.MAINFORM.OLD_PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43T_NEW = function() {
    try {
        SYM_EPLC_M_CLASS_BY_43T_NEW(document.MAINFORM.NEW_TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43T_OLD = function() {
    try {
        SYM_EPLC_M_CLASS_BY_43T_OLD(document.MAINFORM.OLD_TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_ADV_LC_BY = function() {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_NEW_39B = function() {
    try {
        SYM_EPLC_M_CLASS_BY_NEW_39B(document.MAINFORM.NEW_AMT_SPEC.value);
        EEHtml.fireEvent(document.MAINFORM.NEW_POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_OUR_ENG = function() {
    try {
        SYM_EPLC_M_CLASS_BY_OUR_ENG(document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_TENOR_TYPE = function() {
    try {
        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_ISSUE_BK_CHG_CCY = function() {
    try {
        SYM_EPLC_M_CLASS_ISSUE_BK_CHG_CCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Chk_NEW_AVAL_BY = function() {
    try {
        if (document.MAINFORM.NEW_AVAL_BY.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DRWE_ID.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "O");
        }
        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "P");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "O");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "P");
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRWE_ID.value = '';
            SYM_EPLC_CAL_CLEAR_NEW_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "P");
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_DRWE_ID.value = '';
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYM_EPLC_CAL_CLEAR_NEW_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "P");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DETRMNTL_FLG = function() {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.DEC_AMT, document.MAINFORM.OLD_EXPIRY_DT, document.MAINFORM.NEW_EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DRWE_SW_TAG = function() {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        arr_BIC = new Array(document.MAINFORM.DRWE_SW_ADD);
        SYM_EPLC_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_ISSUE_BK_CHG = function() {
    try {
        SYM_EPLC_M_ISSUE_BK_CHG(document.MAINFORM.TEMP_ISSUE_BK_CHG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TenorInformation = function() {
    try {
        //Disable tenor;
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_PARTY_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
        //Enable New tenor;
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, 'O');
        //Enable New Drawee ID;

        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_TAG, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'O');
        //Enable New Available With Bank;
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD, 'O');
        SYT_EnableFields(document.MAINFORM.NEW_AVLBL_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT798_FLG = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('N').style.display = '';
            SYT_EnableDivClass('N_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
            document.MAINFORM.ADV_BK_ID_BTN.value = "...";
            document.MAINFORM.ADV_BK_ADD_BTN.value = "...";
            document.MAINFORM.ADV_BK_POST_ADD_BTN.value = "...";
        } else {
            EEHtml.getElementById('N').style.display = 'none';
            SYT_DisableDiv('N_div');

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_M_CHK_AMD_DT_LTST_SHIP_DT_NEW = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.NEW_LTST_SHIP_DT.name);
        if (nDays < 0) {
            SYS_CheckError(document.MAINFORM.NEW_LTST_SHIP_DT, "Latest shipment date should be later than today!");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_M_CHK_AMD_DT_LTST_SHIP_DT_OLD = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.OLD_LTST_SHIP_DT.name);
        if (nDays < 0) {
            SYS_CheckError(document.MAINFORM.OLD_LTST_SHIP_DT, "Latest shipment date should be later than today!");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_AVAL_BY_class = function() {
    try {
        var NO_OF_DRAW;
        NO_OF_DRAW = document.MAINFORM.NO_OF_DRAW.value;
        if (NO_OF_DRAW >= 1) {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, "O");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_CONF_BAL = function() {
    try {
        SYM_EPLC_M_NEW_CONF_BAL(document.MAINFORM.OLD_LC_BAL.value, document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_CONF_INSTR = function() {
    try {
        var Con_COMM;
        Con_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        if (document.MAINFORM.NEW_CONF_INSTR.value == 'CONFIRM') {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.ADV_DT.value, document.MAINFORM.AMD_DT.value); //added
            Con_COMM.display();
        } else {
            SYT_RESET_COMM("EPLC_CONF_COMM"); //added
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_LC_AMT = function() {
    try {
        SYM_EPLC_M_NEW_LC_AMT(document.MAINFORM.OLD_LC_AMT.value, document.MAINFORM.INC_AMT.value, document.MAINFORM.DEC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_LC_BAL = function() {
    try {
        var BAL_GAP; // Utility Auto Fix Comments
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var NEW_LC_BAL_NO_DRAW; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var OLD_LC_AMT; // Utility Auto Fix Comments
        var OLD_LC_BAL; // Utility Auto Fix Comments
        var OLD_LC_BAL_NO_DRAW; // Utility Auto Fix Comments
        var OLD_POS_TOL; // Utility Auto Fix Comments
        //eddit by zoe 20090115
        OLD_LC_AMT = Math.max(0, SYS_BeFloat(document.MAINFORM.OLD_LC_AMT.value));
        OLD_POS_TOL = SYS_BeFloat(document.MAINFORM.OLD_POS_TOL.value) / 100;
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value) / 100;
        if (NEW_POS_TOL == 0 && document.MAINFORM.NEW_AMT_SPEC.value == '') {
                NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.OLD_POS_TOL.value) / 100;
            }
        //call OLD_LC_BAL_NO_DRAW and NEW_LC_BAL_NO_DRAW without considering drawing
        OLD_LC_BAL_NO_DRAW = OLD_LC_AMT * (1 + OLD_POS_TOL);
        NEW_LC_BAL_NO_DRAW = (OLD_LC_AMT + INC_AMT - DEC_AMT) * (1 + NEW_POS_TOL);
        BAL_GAP = NEW_LC_BAL_NO_DRAW - OLD_LC_BAL_NO_DRAW;

        //cal NEW_LC_BAL with LC_BAL in Master Table (Drawing considered)
        OLD_LC_BAL = Math.max(0, SYS_BeFloat(document.MAINFORM.OLD_LC_BAL.value));
        NEW_LC_BAL = Math.max(0, OLD_LC_BAL + BAL_GAP);
        if (INC_AMT == 0 && DEC_AMT == 0 && NEW_POS_TOL==OLD_POS_TOL) {
            NEW_LC_BAL = 0;
        }
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NO_OF_DRAW = function() {
    try {
        SYS_GetCUBK('NO_OF_DRAW', document.MAINFORM.C_MAIN_REF.name, 'SYF_EPLC_NEW_AVAL_BY_class()');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {
        SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD(document.MAINFORM.NEW_CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_UPDATE_MASTER_BY_DETRMNTL_FLG = function() {
    try {
        var FldName; // Utility Auto Fix Comments
        var FldName_Real; // Utility Auto Fix Comments
        var FldName_TEMP; // Utility Auto Fix Comments
        var Prefix; // Utility Auto Fix Comments
        var frm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sFldClassName; // Utility Auto Fix Comments
        var sFldValue; // Utility Auto Fix Comments
        //added by zoe 20090112
        if (document.MAINFORM.DETRMNTL_FLG.value == "NO") {
            //update all NEW_XXXX to EPLC_MASTER 
            frm = document.MAINFORM;
            for (i = 0; i < frm.elements.length; i++) {
                FldName = frm.elements[i].name;
                if (FldName == null || FldName == undefined || FldName == "" || FldName.length < 5 || FldName.indexOf('__DESC__') > 0) {
                    continue;
                }
                Prefix = FldName.substr(0, 4);
                if (Prefix == "NEW_") {
                    sFldValue = frm.elements[i].value;
                    sFldClassName = frm.elements[i].className;
                    FldName_Real = FldName.substr(4, FldName.length - 4);
                    FldName_TEMP = 'TEMP_' + FldName_Real;

                    if (FldName_Real.indexOf("_BTN") > -1 || FldName_Real.indexOf("_ORDER_") > -1) {
                        continue;
                    }
                    if (sFldValue == "" || sFldValue == 0) {
                        continue;
                    }
                    if (frm.elements[FldName_Real].value != sFldValue) {
                        try {
                            frm.elements[FldName_TEMP].value = sFldValue;
                        } catch (e1) {}
                    }

                    frm.elements[FldName_Real].value = sFldValue;

                }
            }
            SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
        } else {
            //update all NEW_XXXX to EPLC_MASTER except AMT, Balances
            frm = document.MAINFORM;
            for (i = 0; i < frm.elements.length; i++) {
                FldName = frm.elements[i].name;
                if (FldName == null || FldName == undefined || FldName == "" || FldName.length < 5 || FldName.indexOf('__DESC__') > 0) {
                    continue;
                }
                Prefix = FldName.substr(0, 4);
                if (Prefix == "OLD_") {
                    sFldValue = frm.elements[i].value;
                    sFldClassName = frm.elements[i].className;
                    FldName_Real = FldName.substr(4, FldName.length - 4);
                    FldName_TEMP = 'TEMP_' + FldName_Real;
                    if (FldName_Real.indexOf("_BTN") > -1 || FldName_Real.indexOf("_ORDER_") > -1) {
                        continue;
                    }
                    if (frm.elements[FldName_Real].value != sFldValue) {
                        try {
                            frm.elements[FldName_TEMP].value = sFldValue;
                        } catch (e2) {}
                    }
                    //if(sFldClassName.indexOf("INT_")>-1) continue;
                    //if(sFldClassName.indexOf("AMT_")>-1) continue;

                    frm.elements[FldName_Real].value = sFldValue;

                }

            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('ADV_BK_ID', 'ADV_BK_ID');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_POST_ADD_BTN, 'P');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function() {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function() {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMD_DT_onchange = function() {
    try {
        //SYM_EPLC_AMD_DT_CHECK();
        SYF_EPLC_CHK_NEW_EXPIRY_DT();
        SYM_EPLC_CAL_PAID_CFM_COMM();
        SYM_EPLC_INIT_UNPAID_CONF_COMM();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPLY_FLG_onchange = function() {
    try {
        SYF_EPLC_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function() {
    try {
        SYM_EPLC_CHK_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_Tenor_Narrative();
        EEHtml.fireEvent(document.MAINFORM.DRAFTS_AT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function() {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function() {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function() {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function() {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function() {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_ADDED_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BAL_onchange = function() {
    try {
        SYF_EPLC_CAL_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_INSTR_onchange = function() {
    try {
        SYM_EPLC_CONF_INSTR_AMD();
        SYF_EPLC_OUR_ENG();
        if (document.MAINFORM.OUR_ENG.value = "ADVICE") {
        	  if(document.MAINFORM.OLD_CONF_BAL.value==0){
            document.MAINFORM.ASSET_ACNO.value = '';
            }
            if(document.MAINFORM.OLD_LIAB_BAL.value==0){
            document.MAINFORM.LIAB_ACNO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_PCT_onchange = function() {
    try {
        SYM_EPLC_CAL_CONF_BAL_BY_PERCENT_AMD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DEC_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_INSTR();
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }



        SYF_EPLC_CHK_32B33B();
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.LC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, 'onchange');

        SYF_EPLC_DETRMNTL_FLG();

        if (document.MAINFORM.INC_AMT.value == 0 && document.MAINFORM.DEC_AMT.value == 0) {
            document.MAINFORM.NEW_POS_TOL.value = 0;
            document.MAINFORM.NEW_NEG_TOL.value = 0;
        }
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DEF_PMT_DET_onchange = function() {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DETRMNTL_FLG_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function() {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_NM_onchange = function() {
    try {
        var nSYS_ORG_FUNCTION_SHORT_NAME; // Utility Auto Fix Comments
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_TAG));
        nSYS_ORG_FUNCTION_SHORT_NAME = SYS_ORG_FUNCTION_SHORT_NAME;
        switch (nSYS_ORG_FUNCTION_SHORT_NAME) {
            case "AdvLC":
            case "AdvLCOneStep":
            case "AmdOneStep":
            case "Proc700After705":
            case "ProcMT700X":
            case "ProcMT707":
            case "RegAmd":
            case "RegisterDocsnot":
            case "RegLC":
            case "RegLCAfter705":
                CLASS_42C42a();
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function() {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EVERGREEN_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function() {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INC_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_INSTR();
        if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }
        SYF_EPLC_CHK_32B33B();
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();

        if (document.MAINFORM.INC_AMT.value == 0 && document.MAINFORM.DEC_AMT.value == 0) {
            document.MAINFORM.NEW_POS_TOL.value = 0;
            document.MAINFORM.NEW_NEG_TOL.value = 0;
        }
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MIX_PMT_DETL_onchange = function() {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_ADDIT_CONDITION_onchange = function() {
    try {
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_ADV_THU_BK_ID_onchange = function() {
    try {
        SYM_EPLC_CAL_NEW_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        //SYM_EPLC_CHK_NEW_ADV_THU_BK_SW_TAG();
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AMT_SPEC_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_NEW_39B();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_APLB_RULE_onchange = function() {
    try {
        if (document.MAINFORM.NEW_APLB_RULE.value == 'OTHR') {
            EEHtml.getElementById('NEW_APLB_RULE_NARR').style.display = "block";
        } else {
            EEHtml.getElementById('NEW_APLB_RULE_NARR').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_APPL_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_APPL_ID', 'NEW_APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVAL_BY_onchange = function() {
    try {
        SYF_EPLC_Chk_NEW_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator_NEW();
        SYM_EPLC_showMixPayment_New();
        SYM_EPLC_addPaymentRecord();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_AVAL_WT_BK_ID', 'NEW_AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ACNO_onchange = function() {
    try {
        SYM_EPLC_M_AMD_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_EMAIL_onchange = function() {
    try {
        var chkemail = document.MAINFORM.NEW_BENE_EMAIL.value;
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            alert("enter valid email address");
            document.MAINFORM.NEW_BENE_EMAIL.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_BENE_ID', 'NEW_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BAL_onchange = function() {
    try {
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_CONF_BK_ID', 'NEW_CONF_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_INSTR_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_INSTR();
        SYM_EPLC_CONF_INSTR_AMD();
        SYM_EPLC_OUR_ENG_BY_CONF_INSTR(document.MAINFORM.NEW_CONF_INSTR.value);
        if (document.MAINFORM.OUR_ENG.value == "ADVICE") {
            if(document.MAINFORM.OLD_CONF_BAL.value==0){
            document.MAINFORM.ASSET_ACNO.value = '';
            }
            if(document.MAINFORM.OLD_LIAB_BAL.value==0){
            document.MAINFORM.LIAB_ACNO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DOC_REQ_onchange = function() {
    try {
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_DRWE_ID', 'NEW_DRWE_ID');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD_BTN, 'O');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_EXPIRY_DT_onchange = function() {
    try {
        SYF_EPLC_CHK_NEW_EXPIRY_DT();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
        //SYF_EPLC_CHK_NEW_EXPIRY_DT();
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_DETRMNTL_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_GOODS_DESC_onchange = function() {
    try {
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_BAL_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LTST_SHIP_DT_onchange = function() {
    try {
        SYF_EPLC_M_CHK_AMD_DT_LTST_SHIP_DT_NEW();
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CHK_SHIP_PRD_NEW();
        SYM_EPLC_CHK_NEW_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_PARTIAL_SHIP_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_43P_NEW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_POS_TOL_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_REIM_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_REIM_BK_ID', 'NEW_REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_REIM_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_SHIP_PRD_onchange = function() {
    try {
        SYF_EPLC_CHK_SHIP_PRD_NEW();
        SYM_EPLC_CHK_NEW_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_TENOR_DAYS_onchange = function() {
    try {
        SYM_EPLC_NEW_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_TENOR_TYPE_onchange = function() {
    try {
        SYM_EPLC_NEW_Pay_By_Acceptance();
        if (document.MAINFORM.NEW_TENOR_TYPE.value == 'OTHER') {
            EEHtml.getElementById('NEW_TENOR_TYPE_NARR').style.display = "block";
        } else {
            EEHtml.getElementById('NEW_TENOR_TYPE_NARR').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_TNSHIP_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_43T_NEW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NON_BANK_ISSUER_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NON_BANK_ISSUER_ID', 'NON_BANK_ISSUER_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_BENE_ID_onchange = function() {
    try {
        SYS_GetCUBK('OLD_BENE_ID', 'OLD_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_LTST_SHIP_DT_onchange = function() {
    try {
        SYF_EPLC_M_CHK_AMD_DT_LTST_SHIP_DT_OLD();
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CHK_SHIP_PRD_OLD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_PARTIAL_SHIP_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_43P_OLD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_SHIP_PRD_onchange = function() {
    try {
        SYF_EPLC_CHK_SHIP_PRD_OLD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_TNSHIP_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_43T_OLD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function() {
    try {
        SYM_EPLC_CONF_INSTR_AMD();
        SYF_EPLC_NEW_CONF_BAL();
        SYF_EPLC_CAL_CONF_BAL();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
        SYF_EPLC_CHK_REV_LC();
        SYM_EPLC_M_MPO_CONF_BAL();
        SYM_EPLC_MPO_LIAB_ACNO();
        if (document.MAINFORM.OUR_ENG.value == "ADVICE") {
            if(document.MAINFORM.OLD_CONF_BAL.value==0){
            document.MAINFORM.ASSET_ACNO.value = '';
            }
            if(document.MAINFORM.OLD_LIAB_BAL.value==0){
            document.MAINFORM.LIAB_ACNO.value = '';
            }
            SYT_RESET_COMM("EPLC_CONF_COMM");
        } else {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.ADV_DT.value, document.MAINFORM.AMD_DT.value); //added
        }
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.DEC_AMT, document.MAINFORM.OLD_EXPIRY_DT, document.MAINFORM.NEW_EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function() {
    try {
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        //EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function() {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TEMP_ISSUE_BK_CHG_onchange = function() {
    try {
        if (document.MAINFORM.TEMP_ISSUE_BK_CHG.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TEMP_ISSUE_BK_CHG.value = 0;
        }


        SYF_EPLC_ISSUE_BK_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function() {
    try {
        SYM_EPLC_Pay_By_Acceptance();
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function() {
    try {
        SYM_EPLC_Pay_By_Acceptance();
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
        SYM_EPLC_Tenor_Narrative();
        EEHtml.fireEvent(document.MAINFORM.DRAFTS_AT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ADV_BK_ID', 'ADV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMD_ADD_COND_BTN_onclick = function() {
    try {
        SYS_InsertClause('NEW_ADDIT_CONDITION');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMD_CHARGES_CLAUSE_BTN_onclick = function() {
    try {
        SYS_InsertClause('AMD_CHARGES');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function() {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function() {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function() {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function() {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function() {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_ADV_THU_BK_ID_BTN_onclick = function() {
    try {
        SYM_EPLC_SQL_NEW_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_APPL_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_APPL_ID', 'NEW_APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('NEW_AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVLBL_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('NEW_AVAL_WT_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_BENE_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_BENE_POST_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_CONF_BK_ID', 'NEW_CONF_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('NEW_DRWE_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('NEW_DRWE_ID', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_REIM_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_REIM_BK_ID', 'NEW_REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NON_BANK_ISSUER_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NON_BANK_ISSUER_ID', 'NON_BANK_ISSUER_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AmendmentOneStep.js", e);
    }
}