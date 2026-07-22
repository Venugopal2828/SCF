"path:SCRN/DO/BneficiarySBLC.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BneficiarySBLC.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BneficiarySBLC.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("BneficiarySBLC");
        arrayvalue = SYS_getRecords(node);

        maxrecord = SYS_BeInt(SYS_getValFromRec(arrayvalue[0], document.MAINFORM.BENE_ORDER_NO.name));

        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = SYS_BeInt(SYS_getValFromRec(arrayvalue[i], document.MAINFORM.BENE_ORDER_NO.name));
            if (record > maxrecord) {
                maxrecord = record;
            }
        }
        document.MAINFORM.BENE_ORDER_NO.value = maxrecord + 1;
    } catch (e) {
        DisExcpt("SSSS_BneficiarySBLC.js", e);
    }
}

csDOScreenProto.BENE_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('BENE_NM', '1');
    } catch (e) {
        DisExcpt("SSSS_BneficiarySBLC.js", e);
    }
}

csDOScreenProto.BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
        if (document.MAINFORM.BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_BneficiarySBLC.js", e);
    }
}

csDOScreenProto.BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SSSS_BneficiarySBLC.js", e);
    }
}