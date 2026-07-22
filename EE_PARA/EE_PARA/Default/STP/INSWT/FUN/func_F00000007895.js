stp.writeLog("Incoming MT783 Begin");
stp.setAutoProcess(true);
stp.setEventTimes(0);

var s20TAG = stp.getSWIFTTagValue("20");
s20TAG = s20TAG.trim();
stp.updateFieldValue("C_MAIN_REF", s20TAG);
stp.writeLog("s20TAG:" + s20TAG);

stp.writeLog('AMD REF Begin');

var amd_no = stp.getSWIFTTagValue("26E");
if (amd_no != '') {
    stp.writeLog('AMD REF Begin1');
    stp.updateFieldValue("NO_OF_AMD", amd_no);
    if (amd_no < 10) {
        var AMD_REF = s20TAG + '/0' + amd_no;
    } else {
        var AMD_REF = s20TAG + '/' + amd_no;
    }
    stp.writeLog('AMD_REF:' + AMD_REF);
} else {
    stp.writeLog('AMD REF Begin2');
    var ref_20 = stp.getSWIFTTagValue("20");
    var fld_list = stp.addFieldList(null, "C_MAIN_REF");
    fld_list = stp.addFieldList(fld_list, "NO_OF_AMD");
    var sql_cond = stp.addSQLCondition(null, "C_MAIN_REF", ref_20);
    var result = stp.executeQuery("GTEE_MASTER", fld_list, sql_cond);
    var mainref = stp.getDBFieldValue(result, "C_MAIN_REF");
    var amdno_db = stp.getDBFieldValue(result, "NO_OF_AMD");
    stp.writeLog('C_MAIN_REF:' + mainref);
    stp.writeLog('NO_OF_AMD:' + amdno_db);
    var amdno = stp.toInteger(amdno_db) + 1;
    stp.writeLog('NO_OF_AMD:' + amdno);
    stp.updateFieldValue("NO_OF_AMD", amdno);
    if (amdno < 10) {
        var AMD_REF = s20TAG + '/0' + amdno;
    } else {
        var AMD_REF = s20TAG + '/' + amdno;
    }
}

stp.updateFieldValue("AMD_REF", AMD_REF);
stp.updateFieldValue("C_TRX_REF", AMD_REF);
stp.setEventTimesFromTable('GTEE_MASTER');
stp.writeLog("Incoming MT783 End");