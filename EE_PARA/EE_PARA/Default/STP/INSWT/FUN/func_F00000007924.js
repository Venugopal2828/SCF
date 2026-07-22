stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
var main_ref = 'RFCSBANK' + sTag21;
stp.updateFieldValue("C_MAIN_REF", main_ref);
stp.writeLog("main_ref===============" + main_ref);
stp.updateFieldValue("FA_BUSI_STATUS", "MT910");
var pre = 'RF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = '910';
var ref = stp.SYS_getRefNo("RF_PMT");
var PMTref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_PMT_REF", PMTref);
stp.writeLog("PMTref===============" + PMTref);

var TAG50A = stp.getSWIFTTagValue("50A");
var TAG50D = stp.getSWIFTTagValue("50D");
var TAG50K = stp.getSWIFTTagValue("50K");
if (TAG50D != "") {
    var TAG50D = stp.getSWIFTTagValue("50D");
    stp.updateFieldValue("X910_TAG_50A", "D");
    if (TAG50D.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_ORDCUACNO_50A", stp.getLineValue(TAG50D, 1));
        stp.updateFieldValue("X910_ORDCU_NM_50A", stp.getLineValue(TAG50D, 2));
        stp.updateFieldValue("X910_ORDCUADD1_50A", stp.getLineValue(TAG50D, 3));
        stp.updateFieldValue("X910_ORDCUADD2_50A", stp.getLineValue(TAG50D, 4));
        stp.updateFieldValue("X910_ORDCUADD3_50A", stp.getLineValue(TAG50D, 5));
    } else {
        stp.updateFieldValue("X910_ORDCUACNO_50A", "");
        stp.updateFieldValue("X910_ORDCU_NM_50A", stp.getLineValue(TAG50D, 1));
        stp.updateFieldValue("X910_ORDCUADD1_50A", stp.getLineValue(TAG50D, 2));
        stp.updateFieldValue("X910_ORDCUADD2_50A", stp.getLineValue(TAG50D, 3));
        stp.updateFieldValue("X910_ORDCUADD3_50A", stp.getLineValue(TAG50D, 4));
    }
} else if (TAG50K != "") {
    stp.updateFieldValue("X910_TAG_50A", "K");
    if (TAG50K.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_ORDCUACNO_50A", stp.getLineValue(TAG50K, 1));
        stp.updateFieldValue("X910_ORDCU_NM_50A", stp.getLineValue(TAG50K, 2));
        stp.updateFieldValue("X910_ORDCUADD1_50A", stp.getLineValue(TAG50K, 3));
        stp.updateFieldValue("X910_ORDCUADD2_50A", stp.getLineValue(TAG50K, 4));
        stp.updateFieldValue("X910_ORDCUADD3_50A", stp.getLineValue(TAG50K, 5));
    } else {
        stp.updateFieldValue("X910_ORDCUACNO_50A", "");
        stp.updateFieldValue("X910_ORDCU_NM_50A", stp.getLineValue(TAG50K, 1));
        stp.updateFieldValue("X910_ORDCUADD1_50A", stp.getLineValue(TAG50K, 2));
        stp.updateFieldValue("X910_ORDCUADD2_50A", stp.getLineValue(TAG50K, 3));
        stp.updateFieldValue("X910_ORDCUADD3_50A", stp.getLineValue(TAG50K, 4));
    }
} else if (TAG50A != "") {
    stp.updateFieldValue("X910_TAG_50A", "A");
    if (TAG50A.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_ORDCUACNO_50A", stp.getLineValue(TAG50A, 1));
        stp.updateFieldValue("X910_ORDCU_SW_50A", stp.getLineValue(TAG50A, 2));
    } else {
        stp.updateFieldValue("X910_ORDCUACNO_50A", "");
        stp.updateFieldValue("X910_ORDCU_SW_50A", stp.getLineValue(TAG50A, 1));
    }
}


var TAG52A = stp.getSWIFTTagValue("52A");
if (TAG52A == "") {
    stp.updateFieldValue("X910_TAG_52A", "D");
    var TAG52D = stp.getSWIFTTagValue("52D");
    if (TAG52D.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_ORDBKACNO_52A", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("X910_ORD_BKNM_52A", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("X910_ORDBKADD1_52A", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("X910_ORDBKADD2_52A", stp.getLineValue(TAG52D, 4));
        stp.updateFieldValue("X910_ORDBKADD3_52A", stp.getLineValue(TAG52D, 5));
    } else {
        stp.updateFieldValue("X910_ORDBKACNO_52A", "");
        stp.updateFieldValue("X910_ORD_BKNM_52A", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("X910_ORDBKADD1_52A", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("X910_ORDBKADD2_52A", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("X910_ORDBKADD3_52A", stp.getLineValue(TAG52D, 4));
    }
} else {
    stp.updateFieldValue("X910_TAG_52A", "A");
    if (TAG52A.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_ORDBKACNO_52A", stp.getLineValue(TAG52A, 1));
        stp.updateFieldValue("X910_ORD_BKSW_52A", stp.getLineValue(TAG52A, 2));
    } else {
        stp.updateFieldValue("X910_ORDBKACNO_52A", "");
        stp.updateFieldValue("X910_ORD_BKSW_52A", stp.getLineValue(TAG52A, 1));
    }
}


var TAG56A = stp.getSWIFTTagValue("56A");
if (TAG56A == "") {
    stp.updateFieldValue("X910_TAG_56A", "D");
    var TAG56D = stp.getSWIFTTagValue("56D");
    if (TAG56D.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_MEDIBKACNO_56A", stp.getLineValue(TAG56D, 1));
        stp.updateFieldValue("X910_MEDI_BKNM_56A", stp.getLineValue(TAG56D, 2));
        stp.updateFieldValue("X910_MEDIBKADD1_56A", stp.getLineValue(TAG56D, 3));
        stp.updateFieldValue("X910_MEDIBKADD2_56A", stp.getLineValue(TAG56D, 4));
        stp.updateFieldValue("X910_MEDIBKADD3_56A", stp.getLineValue(TAG56D, 5));
    } else {
        stp.updateFieldValue("X910_MEDIBKACNO_56A", "");
        stp.updateFieldValue("X910_MEDI_BKNM_56A", stp.getLineValue(TAG56D, 1));
        stp.updateFieldValue("X910_MEDIBKADD1_56A", stp.getLineValue(TAG56D, 2));
        stp.updateFieldValue("X910_MEDIBKADD2_56A", stp.getLineValue(TAG56D, 3));
        stp.updateFieldValue("X910_MEDIBKADD3_56A", stp.getLineValue(TAG56D, 4));
    }
} else {
    stp.updateFieldValue("X910_TAG_56A", "A");
    if (TAG56A.substr(0, 1) == "/") {
        stp.updateFieldValue("X910_MEDIBKACNO_56A", stp.getLineValue(TAG56A, 1));
        stp.updateFieldValue("X910_MEDI_BKSW_56A", stp.getLineValue(TAG56A, 2));
    } else {
        stp.updateFieldValue("X910_MEDIBKACNO_56A", "");
        stp.updateFieldValue("X910_MEDI_BKSW_56A", stp.getLineValue(TAG56A, 1));
    }
}