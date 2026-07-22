"path:SCRN/DO/Discrepancies_Clause.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Discrepancies_Clause.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var DISCRE_CODE_value; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var statue; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("Discrepancies_Clause");
        arrayvalue = SYS_getRecords(node);
        DISCRE_CODE_value = '';
        statue = node.getStatue();
        if (statue != 'E') {
            for (i = 0; i < arrayvalue.length; i++) { // Utility Auto Fix Comments
                DISCRE_CODE_value += SYS_getValFromRec(arrayvalue[i], 'DISCRE_CLAUSE');
            }
            if (DISCRE_CODE_value.indexOf(document.MAINFORM.DISCRE_CODE.value) > -1) {
                alert('Please select another Discrepancy Code!');
                return false;
            }
        }
        setTimeout(setTimeout_Cal_DISCRE_CLAUSE, 100);
        return true;
    } catch (e) {
        DisExcpt("SSSS_Discrepancies_Clause.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Discrepancies_Clause.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var maxrecord; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("Discrepancies_Clause");
        arrayvalue = SYS_getRecords(node);

        maxrecord = SYS_BeInt(SYS_getValFromRec(arrayvalue[0], document.MAINFORM.ORDER_NO.name));

        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = SYS_BeInt(SYS_getValFromRec(arrayvalue[i], document.MAINFORM.ORDER_NO.name));
            if (record > maxrecord) {
                maxrecord = record;
            }
        }
        document.MAINFORM.ORDER_NO.value = maxrecord + 1;
    } catch (e) {
        DisExcpt("SSSS_Discrepancies_Clause.js", e);
    }
}

csDOScreenProto.setTimeout_Cal_DISCRE_CLAUSE = function() {
    try {
        var DISCRE_CLAUSE_value; // Utility Auto Fix Comments
        var M; // Utility Auto Fix Comments
        var Obj_DISC_DET; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("Discrepancies_Clause");
        arrayvalue = SYS_getRecords(node);
        DISCRE_CLAUSE_value = '';

        for (M = 0; M < arrayvalue.length; M++) {
            DISCRE_CLAUSE_value += '\n' + SYS_getValFromRec(arrayvalue[M], 'DISCRE_CLAUSE');
        }
        Obj_DISC_DET = SYS_getMainObj('DISC_DET');
        if (parent.DISC_DET_ORG != '') {
            Obj_DISC_DET.value = parent.DISC_DET_ORG + DISCRE_CLAUSE_value;
        } else {
            Obj_DISC_DET.value = DISCRE_CLAUSE_value;
        }
    } catch (e) {
        DisExcpt("SSSS_Discrepancies_Clause.js", e);
    }
}

csDOScreenProto.DISCRE_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('DISCRE_CODE', 'DISCRE_CODE');
    } catch (e) {
        DisExcpt("SSSS_Discrepancies_Clause.js", e);
    }
}