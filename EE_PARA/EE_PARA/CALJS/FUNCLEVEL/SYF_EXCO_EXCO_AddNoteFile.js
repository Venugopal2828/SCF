var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_viewDiaryHistory = function() {
    try {

        var condition; // Utility Auto Fix Comments
        var diaryMainRef; // Utility Auto Fix Comments
        var dirMainRef; // Utility Auto Fix Comments
        var hei; // Utility Auto Fix Comments
        var mainIndex; // Utility Auto Fix Comments
        var mainRef; // Utility Auto Fix Comments
        var trxWin; // Utility Auto Fix Comments
        var unitCode; // Utility Auto Fix Comments
        var url; // Utility Auto Fix Comments
        var wStyle; // Utility Auto Fix Comments
        var wid; // Utility Auto Fix Comments
        diaryMainRef = "";
        unitCode = "";
        condition = "";
        mainRef = "";
        unitCode = SYS_BUSI_UNIT;
        if (unitCode.trim() == "") {
            alert("SYS_BUSI_UNIT is empty!");
            return;
        }
        mainRef = document.MAINFORM.C_MAIN_REF.value;
        if (mainRef.trim() == "") {
            alert("C_MAIN_REF is empty!");
            return;
        }
        mainIndex = mainRef.indexOf("-");
        if (mainIndex > 0) {
            dirMainRef = mainRef.split("-");
            diaryMainRef = dirMainRef[0];
            condition = ""; // Utility Auto Fix Comments
            condition = "&DIARY_C_MAIN_REF=" + diaryMainRef + "&C_UNIT_CODE=" + unitCode + "&C_MODU_NAME=" + SYS_MODULE_NAME + "&C_USER_NAME=" + SYS_USER_ID;
        } else {
            diaryMainRef = mainRef;
            condition = "&C_MAIN_REF=" + diaryMainRef + "&C_UNIT_CODE=" + unitCode + "&C_MODU_NAME=" + SYS_MODULE_NAME + "&C_USER_NAME=" + SYS_USER_ID;
        }


        wid = screen.width - 200;
        hei = screen.height - 300;
        wStyle = "toolbar=0,menubar=0,resizable=1,scrollbars=1,status=1,top=100,left=100,width=" + wid + ",height=" + hei;

        url = "../screen/CDRY_InqDiary_listview.jsp?" + condition;

        trxWin = openWin(url, "transacviewdiary", wStyle);
        trxWin.focus();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ADD1_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ADD2_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ADD3_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ADD_BTN_onclick = function(event) {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_CUST_BANK_onchange = function(event) {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ID_onchange = function(event) {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_ID_BTN_onclick = function(event) {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_NM_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CORR_SW_ADD_onchange = function(event) {
    try {
        SQL_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        SYF_EXCO_viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AddNoteFile.js", e);
    }
}