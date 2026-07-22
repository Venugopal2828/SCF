var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CUTOFF_DAY.value = '';
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = "OTT_DUE_DILIGENCE";
        document.MAINFORM.NXT_STATUS.value = "OTT_CAPTURE";
        SYM_PYMT_move_notes_to_history();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var crossref;
        var dup;
        var sResult;
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P");
        } else {
            SYS_CheckError(document.MAINFORM.CR_CALC_AMT, "To complete the due diligence, You have to enter either debit or credit amount");
            return false;
        }
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        if (document.MAINFORM.CALBK.value == 'Yes') {
            if (document.MAINFORM.CONT_NM.value.trim() == '' || document.MAINFORM.CONT_NO.value.trim() == '') {
                if (document.MAINFORM.CONT_NM.value.trim() == '') {
                    SYS_CheckError(document.MAINFORM.CONT_NM, "Contact Person cant be empty, please check it");
                    return false;
                } else {
                    SYS_CheckError(document.MAINFORM.CONT_NO, "Contact Number cant be empty, please check it");
                    document.MAINFORM.CONT_NO.focus();
                    return false;
                }
            }
        }
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        document.MAINFORM.CURRNT_STATUS.value = "OTT_DUE_DILIGENCE";
        document.MAINFORM.NXT_STATUS.value = "OTT_CAPTURE";
        regBaseAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
        if (document.MAINFORM.VERF_SIGN.value == 'No') {
            alert("The Field Signature Verified is No, Please select Yes or Save the transaction");
            EEHtml.getElementById("A").click();
            document.MAINFORM.VERF_SIGN.focus();
            return false;
        } else if (document.MAINFORM.FDS_AVAL.value == 'No' && document.MAINFORM.OVRIDE.value == 'No') {
            alert("The Field Funds Available is No, Please select Yes or Save the transaction");
            alert("The Field Override Sufficient Funds is No, Please select Yes or Save the transaction");
            EEHtml.getElementById("A").click();
            document.MAINFORM.FDS_AVAL.focus();
            return false;
        } else if (document.MAINFORM.CALBK.value == 'No' && regBaseAmt > ClbkAmt) {
            alert("The Field Callback is No, Please select Yes or Save the transaction");
            EEHtml.getElementById("A").click();
            document.MAINFORM.CALBK.focus();
            return false;
        } else if (CntyType == "CMA") {
            if (document.MAINFORM.EXCH_CTRL.value == 'No') {
                alert("The Field Exchange Control is No, Please select Yes or Save the transaction");
                EEHtml.getElementById("A").click();
                document.MAINFORM.EXCH_CTRL.focus();
                return false;
            }
        } else {
            sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
            if (sResult == false) {
                return false;
            }
            if (!SYM_PYMT_PayAmtChk()) {
                return false;
            }
            document.MAINFORM.C_CUST_ID.value = '';
            if (document.MAINFORM.APP_TYPE.value == 'CUSTOMER') {
                if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                    if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                        SYS_GetTableDataByRule_S('SYF_PYMT_DueDiliOutPmt_ConfirmBusinessCheck_1', '1', true);
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
                }
            } else if (document.MAINFORM.APP_TYPE.value == 'BANK') {
                if (document.MAINFORM.DB_CCY.value == SYS_LOCAL_CCY) {
                    document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
                } else {
                    document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
                }
                if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                    SYS_GetTableDataByRule_S('SYF_PYMT_DueDiliOutPmt_ConfirmBusinessCheck_2', '1', true);
                    if (document.MAINFORM.C_CUST_ID.value != document.MAINFORM.X103_ORDCU_ID_50A.value) {
                        alert('The Account number is invalid for the entered customer');
                        document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                        return false;
                    }
                }
            }
            dup = SYF_PYMT_Chk_DD_Duplicate('14');
            if (dup == false) {
                return false;
            }
            SYM_PYMT_move_notes_to_history();
        }
        crossref = SYT_RegOTT_CrossRef();
        if (!crossref) {
            return crossref;
        }
        if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
            if (document.MAINFORM.CHANNEL.value.toUpperCase() == "EMAIL" || document.MAINFORM.CHANNEL.value.toUpperCase() == "FAX") {
                if (document.MAINFORM.FAX_INDTY.value == "") {
                    alert("The Field Fax / Email Indemnity is not captured, please Save the transaction.");
                    return false;
                }
                if (document.MAINFORM.FAX_INDTY.value.toUpperCase() == "NO") {
                    alert("The Field Fax / Email Indemnity is No, please Save the transaction.");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYF_PYMT_Init_Common();
        document.MAINFORM.MLT_STLMT.value = "No";
        document.MAINFORM.DOCS.value = "No";
        document.MAINFORM.NOTES.value = "";
        SYF_PYMT_Enb_DD_Fields();
        SYF_PYMT_Chg_FDS_AVAL();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        var CallBackName;
        var CallBackNo;
        var CallBackYN;
        RATE_TYPE = "Selling Rate";
        if ((SYS_FUNCTION_NAME == "Cancel_OTT" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            SYT_Cancel_Init();
            return;
        } else {
            document.MAINFORM.CANCEL_FLG.value = "No";
        }
        if (SYS_FUNCTION_TYPE == 'KP') {
            //SYM_PYMT_Chg_X103_VALUE_DT_32A();
            SYF_PYMT_Chg_FDS_AVAL();
            SYM_PYMT_Cal_BaseEquAmt();
            SYM_PYMT_getAcctDCFlag();
        } else if (SYS_FUNCTION_TYPE == 'EC') {
            SYM_PYMT_getAcctDCFlag();
            SYF_PYMT_Init_Common();
            SYM_PYMT_Cal_BaseEquAmt();
            //SYM_PYMT_Chg_X103_VALUE_DT_32A();
            if (document.MAINFORM.FDS_AVAL.value == "Yes") {
                document.MAINFORM.OVRIDE.value = "No";
                SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "M");
            }
            if (document.MAINFORM.OVRIDE.value == 'Yes') {
                document.MAINFORM.OVRIDE.value = 'Yes';
            }
            if (document.MAINFORM.PRIORITY.value == 'Urgent') {
                document.MAINFORM.PRIORITY.value = 'Urgent';
            }
            if (document.MAINFORM.CALBK.value == 'No') {
                EEHtml.getElementById("CALLBACK_ROW").style.display = "none";
            } else {
                EEHtml.getElementById("CALLBACK_ROW").style.display = "";
                if (SYS_BeFloat(document.MAINFORM.DB_AMT.value) > ClbkAmt) {
                    SYT_ChangeFldClass(document.MAINFORM.CALBK, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "M");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "M");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CALBK, "O");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "O");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "O");
                }
            }
        } else if (SYS_FUNCTION_TYPE == 'IQ') {
            SYF_PYMT_Decide_EXCH_CTRL_ROW();
            SYF_PYMT_Get_CallbackLimit();
            SYM_PYMT_Cal_BaseEquAmt();
            if (document.MAINFORM.CALBK.value == 'No') {
                EEHtml.getElementById("CALLBACK_ROW").style.display = "none";
            } else {
                EEHtml.getElementById("CALLBACK_ROW").style.display = "";
                if (SYS_BeFloat(document.MAINFORM.DB_AMT.value) > ClbkAmt) {
                    SYT_ChangeFldClass(document.MAINFORM.CALBK, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "M");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "M");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CALBK, "O");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "O");
                    SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "O");
                }
            }
            SYM_PYMT_Cal_BaseEquAmt();
        } else {
            SYF_PYMT_Chg_FDS_AVAL();
            SYM_PYMT_Cal_BaseEquAmt();
        }
        if (SYS_BANK_COUNTRY == "ZA") {
            showZALBIs();
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "O");
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "O");
            EEHtml.getElementById("WFREF").style.visibility = 'visible';
        }
        SYT_Audit_Main();
        SYT_ConfigureHelpLink();
        SYF_PYMT_CustomerIndemnityCheck();
        CallBackName = document.MAINFORM.CONT_NM.value;
        CallBackNo = document.MAINFORM.CONT_NO.value;
        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            SYF_PYMT_Chg_DB_CALC_AMT();
        }
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            if (SYS_FUNCTION_TYPE != 'EC') {
                SYF_PYMT_Chg_CR_CALC_AMT();
            }
        }
        CallBackYN = document.MAINFORM.CALBK.value;
        document.MAINFORM.CALBK.value = CallBackYN;
        if (CallBackYN == "Yes") {
            EEHtml.getElementById("CALLBACK_ROW").style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "M");
        } else {
            EEHtml.getElementById("CALLBACK_ROW").style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "O");
            SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "O");
        }
        document.MAINFORM.CONT_NM.value = CallBackName;
        document.MAINFORM.CONT_NO.value = CallBackNo;
        SYF_PYMT_Decide_EXCH_CTRL_ROW();
        SYS_highTrxButton("_confirm", "_cancel", "_save", "_LoadTmpl", "_SaveTmpl");
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_APP_TYPE = function() {
    try {
        SYF_PYMT_Clr_Ord_Cust();
        if (document.MAINFORM.APP_TYPE.value == 'CUSTOMER') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
        } else if (document.MAINFORM.APP_TYPE.value == 'BANK') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CALBK = function() {
    try {
        var regBaseAmt;
        if (document.MAINFORM.CALBK.value == 'No') {
            EEHtml.getElementById("CALLBACK_ROW").style.display = "none";
            document.MAINFORM.CONT_NM.value = "";
            document.MAINFORM.CONT_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "P");
        } else {
            EEHtml.getElementById("CALLBACK_ROW").style.display = "";
            SYF_PYMT_Get_CallbackLimit();
            regBaseAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
            document.MAINFORM.CONT_NM.value = "";
            document.MAINFORM.CONT_NO.value = "";
            if (regBaseAmt > ClbkAmt) {
                SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "M");
                SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "M");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CONT_NM, "M");
                SYT_ChangeFldClass(document.MAINFORM.CONT_NO, "M");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
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
        SYM_PYMT_Cal_BaseEquAmt();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CCY = function() {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        SYF_PYMT_Chg_CR_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
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
        SYM_PYMT_Cal_BaseEquAmt();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_DB_CCY = function() {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value != "NonCustomer") {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        }
        SYF_PYMT_Chg_DB_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_EXTERNAL_REF = function() {
    try {
        SYT_chg_FldVal_UpCase(document.MAINFORM.EXTERNAL_REF);
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_FDS_AVAL = function() {
    try {
        if (document.MAINFORM.FDS_AVAL.value == "No") {
            SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "M");
            document.MAINFORM.OVRIDE.value = "No";
        } else {
            document.MAINFORM.OVRIDE.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCUACNO_50A = function() {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
        if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() == '') {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                if (document.MAINFORM.APP_TYPE.value.toUpperCase() == 'CUSTOMER') {
                    SYS_GetCUBK('X103_ORDCUACNO_50A', 'X103_ORDCUACNO_50A');
                } else {
                    SYS_GetCUBK('X103_ORDCUACNO_50A_BANK', 'X103_ORDCUACNO_50A');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCU_SW_50A = function() {
    try {
        var ApplicantType;
        ApplicantType = document.MAINFORM.APP_TYPE.value;
        if (ApplicantType == "BANK") {
            if (document.MAINFORM.X103_ORDCU_SW_50A.value.trim() != '') {
                SYM_PYMT_getIdFromBIC(document.MAINFORM.X103_ORDCU_SW_50A, document.MAINFORM.AVAL_WT_BK_ID);
                document.MAINFORM.X103_ORDCU_ID_50A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
                document.MAINFORM.AVAL_WT_BK_ID.value = "";
                EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
            }
        } else {
            SYT_chg_FldVal_UpCase(document.MAINFORM.X103_ORDCU_SW_50A);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_DD_Duplicate = function(noOfDaysBack) {
    try {
        var answer;
        var duplicateTrn;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, noOfDaysBack, "SEVEN_DAYS_BACK", 'B', 'Y', 'Y');
        document.MAINFORM.DUPLICATE_TRN.value = "";
        SYS_GetTableDataByRule_S('SYF_PYMT_DueDiliOutPmt_SYF_PYMT_Chk_DD_Duplicate_0', '1', 'Y');
        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "" || duplicateTrn == document.MAINFORM.C_MAIN_REF.value) {
            return true;
        } else {
            answer = confirm("POSSIBLE DUPLICATE TRANSACTION\r\n\nA transaction has already been issued with similar details under reference - " + duplicateTrn + ".\r\n\nClick OK - If you wish to complete the confirmation of this transaction.\r\nClick Cancel - If you wish to go back to the Due Diligence screen to edit the transaction.");
            if (answer) {
                document.MAINFORM.DUP_CHK.value = 'Yes';
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ord_Cust = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            alert("The Customer Id is invalid");
            document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        }
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        SYF_PYMT_Clr_Part_Ord_Cust();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Part_Ord_Cust = function() {
    try {
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";

        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, "O");
        SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CustomerIndemnityCheck = function() {
    try {
        if (document.MAINFORM.CHANNEL.value.toUpperCase() != "EMAIL" && document.MAINFORM.CHANNEL.value.toUpperCase() != "FAX") {
            document.MAINFORM.FAX_INDTY.value = "N/A";
        }
        if (document.MAINFORM.FAX_INDTY.value == "") {
            document.MAINFORM.FAX_INDTY.value = "No";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Decide_EXCH_CTRL_ROW = function() {
    try {
        if (CntyType != "CMA") {
            SYF_PYMT_Hide_EXCH_CTRL_ROW();
        } else {
            SYF_PYMT_Disp_EXCH_CTRL_ROW();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Disp_EXCH_CTRL_ROW = function() {
    try {
        EEHtml.getElementById('EXCH_CTRL_ROW').style.display = 'block';
        EEHtml.getElementById('EXCH_CTRL').style.display = 'block';
        document.MAINFORM.EXCH_CTRL.value = 'No';
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enb_DD_Fields = function() {
    try {
        document.MAINFORM.VERF_SIGN.value = "No";
        document.MAINFORM.EXCH_CTRL.value = "No";
        document.MAINFORM.FDS_AVAL.value = "No";
        document.MAINFORM.CALBK.value = "No";
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_CallbackLimit = function() {
    try {
        regBaseAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
        if (document.MAINFORM.CCY.value != SYS_LOCAL_CCY) {
            SYS_GetExchangeRate_S(document.MAINFORM.CCY.value, SYS_LOCAL_CCY, RATE_TYPE, 'X103_EXCH_RT_36');
            ClbkAmt = SYS_BeFloat(document.MAINFORM.AMOUNT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
        } else {
            ClbkAmt = SYS_BeFloat(document.MAINFORM.AMOUNT.value);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_OverDrawnInd = function() {
    try {
        var AcctType; // Utility Auto Fix Comments
        AcctType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
            if (AcctType == "CUSTOMER") {
                if (document.MAINFORM.CPYT_DR_AC.value != '') {
                    SYS_GetCUBK('CPYT_DR_AC', 'CPYT_DR_AC', 'SYF_PYMT_Succ_GetOverdrawnInd()', '', 'TRUE');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Hide_EXCH_CTRL_ROW = function() {
    try {
        EEHtml.getElementById('EXCH_CTRL_ROW').style.display = 'none';
        EEHtml.getElementById('EXCH_CTRL').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Init_Common = function() {
    try {
        SYS_highTrxButton("_save", "_confirm", "_cancel", "_transaction");
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        document.MAINFORM.CUTOFF_REF.value = SYS_BANK_COUNTRY + document.MAINFORM.CR_CCY.value;
        SYF_PYMT_Init_RegData();
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
            SYM_PYMT_ProtOrdCust();
            SYF_PYMT_MPO_CustAccNo();
        }
        SYF_PYMT_Decide_EXCH_CTRL_ROW();
        document.MAINFORM.BUSI_UNIT.value = SYS_BUSI_UNIT + document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Init_RegData = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
        } else {
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P");
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_MPO_CustAccNo = function() {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
            SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
        } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYM_PYMT_disableField(document.MAINFORM.lookup1);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_MPO_DD_Acct = function() {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
            SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
        } else if (document.MAINFORM.RECORDER_TYPE.valuee == 'NonCustomer') {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYT_Disable_Fld(document.MAINFORM.lookup1);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Succ_GetOverdrawnInd = function() {
    try {
        if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
            if (document.MAINFORM.FDS_AVAL.value == 'No') {
                if (document.MAINFORM.C_AC_IDENTIFIER.value != '' && document.MAINFORM.C_AC_IDENTIFIER.value == 'N') {
                    alert("The entered Account number cannot be overdrawn.");
                    document.MAINFORM.MUL_OVRIDE.value = "No";
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CALBK_onchange = function() {
    try {
        SYF_PYMT_Chg_CALBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHANNEL_onchange = function() {
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

        if ((docChannel.toUpperCase() != 'EMAIL' && docChannel.toUpperCase() != 'FAX') || document.MAINFORM.APP_TYPE.value.toUpperCase() != "CUSTOMER") {
            EEHtml.getElementById("FAX_INDTY").value = "N/A";
        } else {
            SYF_PYMT_CustomerIndemnityCheck();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function() {
    try {
        var CR_CALC_AMT; //Added 8/3/2019--H
        CR_CALC_AMT = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        if (CR_CALC_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CR_CALC_AMT.value = 0;
        }
        SYF_PYMT_Chg_CR_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CCY_onchange = function() {
    try {
        SYF_PYMT_Chg_CR_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CALC_AMT_onchange = function() {
    try {
        var DB_CALC_AMT; //Added 8/3/2019--H
        DB_CALC_AMT = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
        if (DB_CALC_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DB_CALC_AMT.value = 0;
        }
        SYF_PYMT_Chg_DB_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CCY_onchange = function() {
    try {
        SYF_PYMT_Chg_DB_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_EXTERNAL_REF_onchange = function() {
    try {
        SYF_PYMT_Chg_EXTERNAL_REF(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_FDS_AVAL_onchange = function() {
    try {
        SYF_PYMT_Chg_FDS_AVAL();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function() {
    try {
        SYF_PYMT_Chg_X103_ORDCUACNO_50A();
        SYF_PYMT_CustomerIndemnityCheck();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function() {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function() {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function() {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value == '') {
            document.MAINFORM.X103_ORDCU_NM_50A.value = '';
            document.MAINFORM.X103_ORDCUADD1_50A.value = '';
            document.MAINFORM.X103_ORDCUADD2_50A.value = '';
            document.MAINFORM.X103_ORDCUADD3_50A.value = '';
            document.MAINFORM.RELATED_REF_NO.value = '';
            document.MAINFORM.X103_ORDCU_SW_50A.value = '';
            document.MAINFORM.X103_ORDCUACNO_50A.value = '';
        } else {
            SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function() {
    try {
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_SW_50A_onchange = function() {
    try {
        SYF_PYMT_Chg_X103_ORDCU_SW_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TAG_50A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_Ord_Cust_lookup_onclick = function() {
    try {
        SYM_PYMT_Clk_Ord_Cust_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_lookup1_onclick = function() {
    try {
        SYM_PYMT_Clk_Ord_Cust_Acct_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_DueDiliOutPmt.js", e);
    }
}