"path:SCRN/DO/ABLF_InspectScope.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CheckInspectID_indb = function() {
    try {
        document.MAINFORM.FA_TEMP2.value = '';
        SYS_GetTableDataByRule_S('Check_INSPEC_ID_indb', '1', 'Y');
        if (document.MAINFORM.FA_TEMP2.value != null && document.MAINFORM.FA_TEMP2.value != '' && document.MAINFORM.FA_TEMP2.value != 'null') {
            SYS_CheckError(document.MAINFORM.INSPEC_NM, 'This Inspect Institution already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}

csDOScreenProto.CheckInspectID_inlist = function() {
    try {
        var arrayvalue;
        var curInspecId;
        var doInspecId;
        var i;
        var orgRecId;
        var recID;
        var record;
        var state;
        state = parent.currentDo.getStatue();
        curInspecId = document.MAINFORM.INSPEC_ID.value;
        arrayvalue = SYS_getRecords(parent.currentDo);
        orgRecId = -1;
        if ("E" == state) {
            orgRecId = SYS_getRecID(SYS_getEditedRecordForCurrentDo());
        }
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            doInspecId = SYS_getValFromRec(record, 'INSPEC_ID');
            if (doInspecId == curInspecId && orgRecId != recID) {
                alert("Inspect Institution [" + SYS_getValFromRec(record, "INSPEC_NM") + "] cannot be duplicated!");
                return false;
            }
        }
        return true;

    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}

csDOScreenProto.Check_InspectID = function() {
    try {
        CheckInspectID_inlist();
        //CheckInspectID_indb();
    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CheckInspectID_inlist()) {
            return false;
        }
        /*if(!CheckInspectID_indb()){
	return false;
}*/
        return true;
    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_CNTR_REF.value = SYS_getValueFromMain('FA_CNTR_REF');
    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}

csDOScreenProto.getInspectID = function() {
    try {
        SYS_InqCUBK('INSPEC_ID');
    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}

csDOScreenProto.INSPEC_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('INSPEC_ID', 'INSPEC_ID', 'Check_InspectID()');
    } catch (e) {
        DisExcpt("SSSS_ABLF_InspectScope.js", e);
    }
}