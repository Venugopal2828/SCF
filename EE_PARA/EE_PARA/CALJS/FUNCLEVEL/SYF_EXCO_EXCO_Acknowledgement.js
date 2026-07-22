var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EXCO_INIT();

        document.MAINFORM.ACK_DT.value = SYS_DATE;
        document.MAINFORM.SEND_CCY.value = document.MAINFORM.COLL_CCY.value;
        document.MAINFORM.COLL_BK_REF.value = "";
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_ACK_DT = function() {
    try {

        if (document.MAINFORM.ACK_DT.value != "" && document.MAINFORM.REMT_DT.value != "") {
            var nDays = SYS_GetSubDays(document.MAINFORM.ACK_DT.name, document.MAINFORM.REMT_DT.name);
            if (nDays > 0) {
                SYS_CheckError(document.MAINFORM.ACK_DT, "Acknowledgement Date should be later than Remittance Date!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_ACK_DT_onchange = function(event) {
    try {
        SYF_EXCO_CHK_ACK_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_SEND_AMT_onchange = function(event) {
    try {
        SEND_AMT = SYS_BeFloat(document.MAINFORM.SEND_AMT.value);
        COLL_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value);
        if (SEND_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.SEND_AMT.value = 0;
        }
        if (SEND_AMT > COLL_TRX_CCY_AMT) {
            alert("The amount field do not more than Collection Amount");
            document.MAINFORM.SEND_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Acknowledgement.js", e);
    }
}