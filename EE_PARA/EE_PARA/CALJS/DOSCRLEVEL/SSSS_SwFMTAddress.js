"path:SCRN/DO/SwFMTAddress.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SwFMTAddress.js*CancelCheck", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {

        return true;

    } catch (e) {
        DisExcpt("SSSS_SwFMTAddress.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SwFMTAddress.js*ConfirmBusinessCheckSave", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var maxrecord; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("SwFMTAddress");
        arrayvalue = SYS_getRecords(node);

        maxrecord = SYS_BeInt(SYS_getValFromRec(arrayvalue[0], document.MAINFORM.ORDER_NO.name));

        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = SYS_BeInt(SYS_getValFromRec(arrayvalue[i], document.MAINFORM.ORDER_NO.name));
            if (record > maxrecord) {
                maxrecord = record;
            }
        }
        document.MAINFORM.ORDER_NO.value = maxrecord + 1;
    } catch (e) {
        DisExcpt("SSSS_SwFMTAddress.js*InitValues", e);
    }
}



