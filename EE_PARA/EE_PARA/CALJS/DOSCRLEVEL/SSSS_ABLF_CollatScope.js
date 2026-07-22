"path:SCRN/DO/ABLF_CollatScope.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CheckCollatID_indb = function() {
    try {
        document.MAINFORM.FA_TEMP2.value = '';
        SYS_GetTableDataByRule_S('Check_COLLAT_ID_indb', '1', 'Y');
        if (document.MAINFORM.FA_TEMP2.value != null && document.MAINFORM.FA_TEMP2.value != '' && document.MAINFORM.FA_TEMP2.value != 'null') {
            SYS_CheckError(document.MAINFORM.COLLAT_NM, 'This Collateral already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}

csDOScreenProto.CheckCollatID_inlist = function() {
    try {
        var arrayvalue;
        var curCollatId;
        var doCollatId;
        var i;
        var orgRecId;
        var recID;
        var record;
        var state;
        state = parent.currentDo.getStatue();
        curCollatId = document.MAINFORM.COLLAT_ID.value;
        arrayvalue = SYS_getRecords(parent.currentDo);
        orgRecId = -1;
        if ("E" == state) {
            orgRecId = SYS_getRecID(SYS_getEditedRecordForCurrentDo());
        }
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            doCollatId = SYS_getValFromRec(record, 'COLLAT_ID');
            if (doCollatId == curCollatId && orgRecId != recID) {
                alert("Collateral [" + SYS_getValFromRec(record, "COLLAT_NM") + "] cannot be duplicated!");
                return false;
            }
        }
        return true;

    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}

csDOScreenProto.Check_CollatID = function() {
    try {
        CheckCollatID_inlist();
        //CheckCollatID_indb();
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CheckCollatID_inlist()) {
            return false;
        }
        /*if(!CheckCollatID_indb()){
	return false;
}*/
        return true;
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_CNTR_REF.value = SYS_getValueFromMain('FA_CNTR_REF');
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}

csDOScreenProto.getCollatID = function() {
    try {
        SYS_InqCUBK('COLLAT_ID');
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}

csDOScreenProto.COLLAT_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('COLLAT_ID', 'COLLAT_ID', 'Check_CollatID()');
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollatScope.js", e);
    }
}