var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        if (document.MAINFORM.CLERK_ID != null) {
            SYT_CLERK_ID();
        }
        document.MAINFORM.CLS_FLG.value = "No";

        SYM_IMCO_INIT();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('B_div');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReopenFile.js", e);
    }
}