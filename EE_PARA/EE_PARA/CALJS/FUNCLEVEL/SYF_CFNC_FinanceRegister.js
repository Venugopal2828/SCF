var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_CFNC_MPO_FINCTYPEChange();
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            //initEC();
        }
        SYT_ChangeFldClass(document.MAINFORM.C_MAIN_REF, "P");
        SYT_ChangeFldClass(document.MAINFORM.DRAWING_REF, "P");
        SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, "P");
        SYT_ChangeFldClass(document.MAINFORM.ACPT_DT, "P");
        document.getElementById("RELA_DRAW_REF").style.display = "none";
        SYF_CFNC_Hidden_Show_Fields();
        FLD_CFNC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var nOriginalRef = document.MAINFORM.C_MAIN_REF.value;
        var nTrxAmount = document.MAINFORM.TRX_AMT.value;
        SYS_GetRefNo("CFNC", "SYF_CFNC_setRefNo"); //Generate Finance Ref. No.
        document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value; //save origin C_MAIN_REF
        SYF_CFNC_MPO_FINCTYPEChange();

    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_setRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_InqRefNo = function() {
    try {

        var sRule = "GET_REF_NO_ " + document.MAINFORM.FINC_TYPE.value.substr(0, 4);
        /*SYS_InqCUBK(sRule); */
        if (document.MAINFORM.FINC_TYPE.value == 'EPLC') {
            SYS_InqCUBK_byCondition('GET_EPLC_RELNO', '1');
        } else if (document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            SYS_InqCUBK_byCondition('GET_IPLC_RELNO', '1');
        } else if (document.MAINFORM.FINC_TYPE.value == 'EXCO') {
            SYS_InqCUBK_byCondition('GET_REF_NO_EXCO', '1');
        } else if (document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            SYS_InqCUBK_byCondition('GET_REF_NO_IMCO', '1');
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_GetInforByRefNo = function() {
    try {

        var sRule = "GET_REF_NO_ " + document.MAINFORM.FINC_TYPE.value.substr(0, 4);
        //var sSQLWhere = "C_MAIN_REF='" + document.MAINFORM.RELA_REF_NO.value + "'";
        SYS_GetTableDataByRule_S('SYF_CFNC_RegisterDiscountofExportLC_SYF_CFNC_GetInforByRefNo_0', '1');
        document.MAINFORM.TRX_AMT.value = SYT_AmtFormat(document.MAINFORM.TRX_CCY_CCY.value, document.MAINFORM.TRX_AMT.value);
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var FINC_TYPE = document.MAINFORM.FINC_TYPE.value;
        if (FINC_TYPE == 'EPLC' || FINC_TYPE == 'IPLC' || FINC_TYPE == 'EXCO' || FINC_TYPE == 'IMCO') {
            if (document.MAINFORM.RELA_MAIN_REF.value != '') {
                return true;
            } else {
                alert("Please Select Master Transaction related reference number");
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_MPO_FINCTYPEChange = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value == 'OTHER') {
            SYM_CFNC_MPO_Multi_Fields([
                ["RELA_MAIN_REF", "O"],
                ["TRX_CCY", "O"],
                ["TRX_AMT", "O"],
                ["CUST_ID", "M"],
                ["CUST_NM", "M"],
                ["CUST_ADD1", "M"],
                ["CUST_ADD2", "M"],
                ["CUST_ADD3", "M"],
                ["AVAL_BY", "O"],
                ["TENOR_DAYS", "O"],
                ["DELVR_DOC_AGST", "O"],
                ["TENOR_TYPE", "O"],
                ["DAY_MON_FLG", "O"]
            ]);
        } else {
            SYM_CFNC_MPO_Multi_Fields([
                ["RELA_MAIN_REF", "P"],
                ["TRX_CCY", "P"],
                ["TRX_AMT", "P"],
                ["CUST_ID", "P"],
                ["CUST_NM", "P"],
                ["CUST_ADD1", "P"],
                ["CUST_ADD2", "P"],
                ["CUST_ADD3", "P"],
                ["AVAL_BY", "P"],
                ["TENOR_DAYS", "P"],
                ["DELVR_DOC_AGST", "P"],
                ["TENOR_TYPE", "P"],
                ["DAY_MON_FLG", "P"]
            ]);
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_Hidden_Show_Fields = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value == 'EPLC' || document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            document.getElementById("AVALIABLE_BY").style.display = "";
            document.getElementById("DELIVER_DOC_AGAINST").style.display = "none";
            document.getElementById("DAY_MON_FLG").style.display = "none";
            document.getElementById("RELA_DRAW_REF").style.display = "";
        } else if (document.MAINFORM.FINC_TYPE.value == 'EXCO' || document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            document.getElementById("AVALIABLE_BY").style.display = "none";
            document.getElementById("DELIVER_DOC_AGAINST").style.display = "";
            document.getElementById("DAY_MON_FLG").style.display = "";
            document.getElementById("RELA_DRAW_REF").style.display = "none";
        } else {
            document.getElementById("AVALIABLE_BY").style.display = "";
            document.getElementById("DELIVER_DOC_AGAINST").style.display = "";
            document.getElementById("DAY_MON_FLG").style.display = "";
            document.getElementById("RELA_DRAW_REF").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_Cal_IMCO_TenorType = function() {
    try {

        if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'BE') {
            document.MAINFORM.TENOR_TYPE.value = "After date of Bill of Exchange";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'CC') {
            document.MAINFORM.TENOR_TYPE.value = "After customs clearance of goods";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'FD') {
            document.MAINFORM.TENOR_TYPE.value = "After goods pass food and drug administration";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'FP') {
            document.MAINFORM.TENOR_TYPE.value = "First presentation";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'GA') {
            document.MAINFORM.TENOR_TYPE.value = "After arrival of goods";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'ID') {
            document.MAINFORM.TENOR_TYPE.value = "After invoice date";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'ST') {
            document.MAINFORM.TENOR_TYPE.value = "After sight";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'TD') {
            document.MAINFORM.TENOR_TYPE.value = "After date of transport document";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'XX') {
            document.MAINFORM.TENOR_TYPE.value = "See Below";
        } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'XXX') {
            document.MAINFORM.TENOR_TYPE.value = "Fixed Maturity";
        }
        if (document.MAINFORM.TEMP_DAY_MON_FLG.value == 'D') {
            document.MAINFORM.DAY_MON_FLG.value = "Days";
        } else if (document.MAINFORM.TEMP_DAY_MON_FLG.value == 'M') {
            document.MAINFORM.DAY_MON_FLG.value = "Months";
        }

        document.MAINFORM.CUST_ID.value = document.MAINFORM.DRWE_ID.value;
        document.MAINFORM.CUST_NM.value = document.MAINFORM.DRWE_NM.value;
        document.MAINFORM.CUST_ADD1.value = document.MAINFORM.DRWE_ADD1.value;
        document.MAINFORM.CUST_ADD2.value = document.MAINFORM.DRWE_ADD2.value;
        document.MAINFORM.CUST_ADD3.value = document.MAINFORM.DRWE_ADD3.value;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_GETCUBK_Success = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value == 'EXCO') {
            document.MAINFORM.CUST_ID.value = document.MAINFORM.DRWR_ID.value;
            document.MAINFORM.CUST_NM.value = document.MAINFORM.DRWR_NM.value;
            document.MAINFORM.CUST_ADD1.value = document.MAINFORM.DRWR_ADD1.value;
            document.MAINFORM.CUST_ADD2.value = document.MAINFORM.DRWR_ADD2.value;
            document.MAINFORM.CUST_ADD3.value = document.MAINFORM.DRWR_ADD3.value;
        } else if (document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            document.MAINFORM.CUST_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.CUST_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.CUST_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.CUST_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.CUST_ADD3.value = document.MAINFORM.APPL_ADD3.value;
        } else if (document.MAINFORM.FINC_TYPE.value == 'EPLC') {
            document.MAINFORM.CUST_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.CUST_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.CUST_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.CUST_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.CUST_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        } else if (document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'BE') {
                document.MAINFORM.TENOR_TYPE.value = "After date of Bill of Exchange";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'CC') {
                document.MAINFORM.TENOR_TYPE.value = "After customs clearance of goods";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'FD') {
                document.MAINFORM.TENOR_TYPE.value = "After goods pass food and drug administration";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'FP') {
                document.MAINFORM.TENOR_TYPE.value = "First presentation";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'GA') {
                document.MAINFORM.TENOR_TYPE.value = "After arrival of goods";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'ID') {
                document.MAINFORM.TENOR_TYPE.value = "After invoice date";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'ST') {
                document.MAINFORM.TENOR_TYPE.value = "After sight";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'TD') {
                document.MAINFORM.TENOR_TYPE.value = "After date of transport document";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'XX') {
                document.MAINFORM.TENOR_TYPE.value = "See Below";
            } else if (document.MAINFORM.TEMP_TENOR_TYPE.value == 'XXX') {
                document.MAINFORM.TENOR_TYPE.value = "Fixed Maturity";
            }
            if (document.MAINFORM.TEMP_DAY_MON_FLG.value == 'D') {
                document.MAINFORM.DAY_MON_FLG.value = "Days";
            } else if (document.MAINFORM.TEMP_DAY_MON_FLG.value == 'M') {
                document.MAINFORM.DAY_MON_FLG.value = "Months";
            }

            document.MAINFORM.CUST_ID.value = document.MAINFORM.DRWE_ID.value;
            document.MAINFORM.CUST_NM.value = document.MAINFORM.DRWE_NM.value;
            document.MAINFORM.CUST_ADD1.value = document.MAINFORM.DRWE_ADD1.value;
            document.MAINFORM.CUST_ADD2.value = document.MAINFORM.DRWE_ADD2.value;
            document.MAINFORM.CUST_ADD3.value = document.MAINFORM.DRWE_ADD3.value;
        }
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('FincEstablishReg');
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_TRX_AMT", document.MAINFORM.TRX_AMT.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_AMT_LCCCY", document.MAINFORM.TRX_AMT.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_BAL", document.MAINFORM.TRX_AMT.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_AMT_TXCCY", document.MAINFORM.TRX_AMT.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_C_TRX_CCY", document.MAINFORM.TRX_CCY.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_C_CCY", document.MAINFORM.TRX_CCY.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_DRAWING_REF", document.MAINFORM.RELA_DRAW_REF.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_RELA_MAIN_REF", document.MAINFORM.RELA_MAIN_REF.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_C_ORIGIN_MAIN_REF", document.MAINFORM.RELA_MAIN_REF.value);
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_GET_CUBK_DATE = function() {
    try {

        SYS_GetTableDataByRule('GET_REF_NO_EPLC');
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_CUST_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.CUST_ID.value != "") {
            if (SYM_CFNC_SpecialCharacters_onchange(document.MAINFORM.CUST_ID.value) == false) {
                document.MAINFORM.CUST_ID.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_CUST_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.CUST_NM.value != "") {
            if (SYM_CFNC_SpecialCharacters_onchange(document.MAINFORM.CUST_NM.value) == false) {
                document.MAINFORM.CUST_NM.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_DAY_MON_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.DAY_MON_FLG.value == 'D') {
            document.MAINFORM.DAY_MON_FLG.value = "Days";
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_FINC_TYPE_onchange = function(event) {
    try {
        SYF_CFNC_MPO_FINCTYPEChange();
        SYM_CFNC_Clear_Field_Value(["RELA_MAIN_REF", "TRX_CCY", "TRX_AMT", "DELVR_DOC_AGST", "TENOR_DAYS", "DAY_MON_FLG", "TENOR_TYPE", "AVAL_BY", "CUST_ID", "CUST_NM", "CUST_ADD1", "CUST_ADD2", "CUST_ADD3", "RELA_DRAW_REF"]);
        SYF_CFNC_Hidden_Show_Fields();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_REF_INQ_BTN_onclick = function(event) {
    try {
        SYF_CFNC_InqRefNo();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_RELA_MAIN_REF_onchange = function(event) {
    try {
        if (document.MAINFORM.FINC_TYPE.value == 'EXCO') {
            SYS_GetCUBK('GET_REF_NO_EXCO', document.MAINFORM.RELA_MAIN_REF.name, 'SYF_CFNC_GETCUBK_Success()');
        } else if (document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            SYS_GetCUBK('GET_REF_NO_IMCO', document.MAINFORM.RELA_MAIN_REF.name, 'SYF_CFNC_GETCUBK_Success()');
        } else if (document.MAINFORM.FINC_TYPE.value == 'EPLC') {
            SYS_GetCUBK('GET_REF_NO_EPLC', document.MAINFORM.RELA_MAIN_REF.name, 'SYF_CFNC_GETCUBK_Success()');
        } else if (document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            SYS_GetCUBK('GET_REF_NO_IPLC', document.MAINFORM.RELA_MAIN_REF.name, 'SYF_CFNC_GETCUBK_Success()');
        } else if (document.MAINFORM.FINC_TYPE.value == 'OTHER') {
            if (document.MAINFORM.RELA_MAIN_REF.value != "") {
                if (SYM_CFNC_SpecialCharacters_onchange(document.MAINFORM.RELA_MAIN_REF.value) == false) {
                    document.MAINFORM.RELA_MAIN_REF.value = "";
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_TRX_AMT_onchange = function(event) {
    try {
        var nTrxAmount = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        if (nTrxAmount > 0) {
            var node; // Utility Auto Fix Comments
            node = SYS_getDoByXpath('FincEstablishReg');
            SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_TRX_AMT", document.MAINFORM.TRX_AMT.value);
            SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_AMT_LCCCY", document.MAINFORM.TRX_AMT.value);
            SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_AMT_TXCCY", document.MAINFORM.TRX_AMT.value);
            SYS_setFieldValue(node, "FincEstablishReg", "CFNC_N_BAL", document.MAINFORM.TRX_AMT.value);
        } else {
            SYS_CheckError(nTrxAmount, "The amount field do not accept negative values");
            document.MAINFORM.TRX_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_TRX_CCY_onclick = function(event) {
    try {
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('FincEstablishReg');
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_C_TRX_CCY", document.MAINFORM.TRX_CCY.value);
        SYS_setFieldValue(node, "FincEstablishReg", "CFNC_C_CCY", document.MAINFORM.TRX_CCY.value);
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRegister.js", e);
    }
}