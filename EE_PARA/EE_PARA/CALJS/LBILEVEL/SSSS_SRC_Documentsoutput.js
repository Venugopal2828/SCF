"path:SCRN/Library/COMMON/Documentsoutput.lbi";

var csLbiCompProto = {};

csLbiCompProto.FLD_SSSS_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SSSS_SRC_Documentsoutput.js", e);
    }
}

csLbiCompProto.FLD_SSSS_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SSSS_SRC_Documentsoutput.js", e);
    }
}

csLbiCompProto.FLD_SSSS_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SSSS_SRC_Documentsoutput.js", e);
    }
}

csLbiCompProto.FLD_SSSS_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SSSS_SRC_Documentsoutput.js", e);
    }
}

csLbiCompProto.FLD_SSSS_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SSSS_SRC_Documentsoutput.js", e);
    }
}