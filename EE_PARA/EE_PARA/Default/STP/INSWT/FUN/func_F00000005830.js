stp.setAutoProcess(true);
stp.writeLog("@@@@@@START@@@@@@");
stp.setEventTimes(0);

function SYT_getDOY() {
    var reqDate = stp.getSysBusiDate();
    var intMonth = stp.toInteger(reqDate.toString().substring(5, 7));
    intMonth = intMonth - 1;
    var thisDate = new Date(reqDate.toString().substring(0, 4), intMonth, reqDate.toString().substring(8, 10));
    var onejan = new Date(reqDate.toString().substr(0, 4), 0, 0);
    var retDate = Math.ceil((thisDate - onejan) / 86400000);
    if (retDate.toString().length == 1) {
        retDate = '00' + retDate;
    } else if (retDate.toString().length == 2) {
        retDate = '0' + retDate;
    }
    return retDate;
}

var seq = stp.SYS_getRefNo("PYMT_INW");
var reqDate = stp.getSysBusiDate();
var juldate = String(reqDate.toString().substr(2, 2) + String(SYT_getDOY()));
var sCntyCode = stp.getBusiUnit().substr(0, 4);
var prod = seq.substr(0, 2);
var seqNumber = seq.substr(2, 5);
var ss = prod + juldate + sCntyCode + seqNumber;

stp.updateFieldValue("C_MAIN_REF", ss);
stp.writeLog("STP: New Ref No is " + ss);

/*for 58 details*/
var TAG58A = stp.getSWIFTTagValue("58A");
if (TAG58A == "") {
    stp.updateFieldValue("X202_TAG_58A", "D");
    var TAG58D = stp.getSWIFTTagValue("58D");
    if (TAG58D.substr(0, 1) == "/") {
        stp.updateFieldValue("X202_BENEBKACNO58A", stp.getLineValue(TAG58D, 1));
        stp.updateFieldValue("X202_BENE_BKNM_58A", stp.getLineValue(TAG58D, 2));
        stp.updateFieldValue("X202BENEBKADD1_58A", stp.getLineValue(TAG58D, 3));
        stp.updateFieldValue("X202BENEBKADD2_58A", stp.getLineValue(TAG58D, 4));
        stp.updateFieldValue("X202BENEBKADD3_58A", stp.getLineValue(TAG58D, 5));
    } else {
        stp.updateFieldValue("X202_BENE_BKNM_58A", stp.getLineValue(TAG58D, 1));
        stp.updateFieldValue("X202BENEBKADD1_58A", stp.getLineValue(TAG58D, 2));
        stp.updateFieldValue("X202BENEBKADD2_58A", stp.getLineValue(TAG58D, 3));
        stp.updateFieldValue("X202BENEBKADD3_58A", stp.getLineValue(TAG58D, 4));
    }
} else {
    stp.updateFieldValue("X202_TAG_58A", "A");
    if (TAG58A.substr(0, 1) == "/") {
        stp.updateFieldValue("X202_BENEBKACNO58A", stp.getLineValue(TAG58A, 1));
        stp.updateFieldValue("X202_BENE_BKSW_58A", stp.getLineValue(TAG58A, 2));
    } else {
        stp.updateFieldValue("X202_BENE_BKSW_58A", stp.getLineValue(TAG58A, 1));
    }

}

/*for 59 details*/
var TAG59A = stp.getSWIFTTagValue("59A");
if (TAG59A == "") {
    stp.updateFieldValue("X103_TAG_59A", " ");
    var TAG59 = stp.getSWIFTTagValue("59");
    if (TAG59.substr(0, 1) == "/") {
        stp.updateFieldValue("X103_BENECUACNO59A", stp.getLineValue(TAG59, 1));
        stp.updateFieldValue("X103_BENECU_NM_59A", stp.getLineValue(TAG59, 2));
        stp.updateFieldValue("X103BENECUADD1_59A", stp.getLineValue(TAG59, 3));
        stp.updateFieldValue("X103BENECUADD2_59A", stp.getLineValue(TAG59, 4));
        stp.updateFieldValue("X103BENECUADD3_59A", stp.getLineValue(TAG59, 5));
    } else {
        stp.updateFieldValue("X103_BENECU_NM_59A", stp.getLineValue(TAG59, 1));
        stp.updateFieldValue("X103BENECUADD1_59A", stp.getLineValue(TAG59, 2));
        stp.updateFieldValue("X103BENECUADD2_59A", stp.getLineValue(TAG59, 3));
        stp.updateFieldValue("X103BENECUADD3_59A", stp.getLineValue(TAG59, 4));
    }
} else {
    stp.updateFieldValue("X103_TAG_59A", "A");
    if (TAG59A.substr(0, 1) == "/") {
        stp.updateFieldValue("X103_BENECUACNO59A", stp.getLineValue(TAG59A, 1));
        stp.updateFieldValue("X103_BENECU_SW_59A", stp.getLineValue(TAG59A, 2));
    } else {
        stp.updateFieldValue("X103_BENECU_SW_59A", stp.getLineValue(TAG59A, 1));
    }

}

/*for 50 details*/
var TAG50A = stp.getSWIFTTagValue("50A");
var TAG50K = stp.getSWIFTTagValue("50K");
if (TAG50A == "") {
    if (TAG50K == "") {
        stp.updateFieldValue("X103_TAG_50A", "F");
        var TAG50F = stp.getSWIFTTagValue("50F");
        if (TAG50F.substr(0, 1) == "/") {
            stp.updateFieldValue("X103_ORDCUACNO_50A", stp.getLineValue(TAG50F, 1));
            stp.updateFieldValue("X103_ORDCU_NM_50A", stp.getLineValue(TAG50F, 2));
            stp.updateFieldValue("X103_ORDCUADD1_50A", stp.getLineValue(TAG50F, 3));
            stp.updateFieldValue("X103_ORDCUADD2_50A", stp.getLineValue(TAG50F, 4));
            stp.updateFieldValue("X103_ORDCUADD3_50A", stp.getLineValue(TAG50F, 5));
        } else {
            stp.updateFieldValue("X103_ORDCU_NM_50A", stp.getLineValue(TAG50F, 1));
            stp.updateFieldValue("X103_ORDCUADD1_50A", stp.getLineValue(TAG50F, 2));
            stp.updateFieldValue("X103_ORDCUADD2_50A", stp.getLineValue(TAG50F, 3));
            stp.updateFieldValue("X103_ORDCUADD3_50A", stp.getLineValue(TAG50F, 4));
        }
    } else {
        stp.updateFieldValue("X103_TAG_50A", "K");
        var TAG50K = stp.getSWIFTTagValue("50K");
        if (TAG50K.substr(0, 1) == "/") {
            stp.updateFieldValue("X103_ORDCUACNO_50A", stp.getLineValue(TAG50K, 1));
            stp.updateFieldValue("X103_ORDCU_NM_50A", stp.getLineValue(TAG50K, 2));
            stp.updateFieldValue("X103_ORDCUADD1_50A", stp.getLineValue(TAG50K, 3));
            stp.updateFieldValue("X103_ORDCUADD2_50A", stp.getLineValue(TAG50K, 4));
            stp.updateFieldValue("X103_ORDCUADD3_50A", stp.getLineValue(TAG50K, 5));
        } else {
            stp.updateFieldValue("X103_ORDCU_NM_50A", stp.getLineValue(TAG50K, 1));
            stp.updateFieldValue("X103_ORDCUADD1_50A", stp.getLineValue(TAG50K, 2));
            stp.updateFieldValue("X103_ORDCUADD2_50A", stp.getLineValue(TAG50K, 3));
            stp.updateFieldValue("X103_ORDCUADD3_50A", stp.getLineValue(TAG50K, 4));
        }
    }
} else {
    stp.updateFieldValue("X103_TAG_50A", "A");
    if (TAG50A.substr(0, 1) == "/") {
        stp.updateFieldValue("X103_ORDCUACNO_50A", stp.getLineValue(TAG50A, 1));
        stp.updateFieldValue("X103_ORDCU_SW_50A", stp.getLineValue(TAG50A, 2));
    } else {
        stp.updateFieldValue("X103_ORDCU_SW_50A", stp.getLineValue(TAG50A, 1));
    }

}