stp.writeLog("Incoming MT767 Begin");
stp.setAutoProcess(true);
stp.setEventTimes(0);

var s21TAG = stp.getSWIFTTagValue("21");
s21TAG = s21TAG.trim();
stp.updateFieldValue("C_MAIN_REF", s21TAG);
stp.writeLog("s21TAG:" + s21TAG);

var s20TAG = stp.getSWIFTTagValue("20");
s20TAG = s20TAG.trim();
stp.writeLog("s20TAG:" + s20TAG);

/*stp.updateFieldValue("C_MAIN_REF",s20TAG);*/
stp.updateFieldValue("C_MAIN_REF", s21TAG);
stp.updateFieldValue("CURR_STATUS", 'IncomingMT767');
stp.updateFieldValue("NXT_STATUS", 'DemergeMT767');

//15B + 15C Block same Tags value get --START--;
var MT = (function() {
        // ---------------------------------------------------------
        // Get tag value from SWIFT body by range
        // @param mt: mandatory, full text of SWIFT text block.
        // @param tag: mandatory, tag name, suggest use format '20'.
        // @param start: optional, default is 0.
        // @param end: optional, default is length of mt.
        // example: 
        //    MT.getTag(mt, '20');
        //    MT.getTag(mt, '26E', pos15b, pos15c);
        // ---------------------------------------------------------
        var getTag = function(mt, tag, start, end) {
            if (!mt || !tag) return '';
            mt = '\n' + mt; // avoid start tag miss \n
            if (!start) start = 0;
            if (!end) end = mt.length;
            var p0 = mt.indexOf('\n:' + tag + ':', start);
            if (p0 > 0 && p0 < end) {
                p0 += tag.length + 3;
                var p1 = mt.indexOf('\n:', p0);
                if (p1 < p0) {
                    p1 = mt.indexOf('\n-}', p0);
                }
                if (p1 < p0) {
                    p1 = end;
                }
                var v = mt.substring(p0, p1);
                return v;
            } else {
                return '';
            }
        };
        return {
            getTag: getTag
        }
    }
    ());

var mt = '' + stp.getSWIFTBody();
stp.writeLog('body text  ' + mt);
var pos15a = mt.indexOf(':15A:', 0);
var pos15b = mt.indexOf('\n:15B:', pos15a);
// optional Seq C
var pos15c = mt.indexOf('\n:15C:', pos15a);
var txtLen = mt.length;
if (pos15c == -1) {
    pos15c = txtLen;
}
stp.writeLog(' -- 1 -- ');
var t20 = MT.getTag(mt, '20');
stp.writeLog(t20);
var b32B = MT.getTag(mt, '32B', pos15b, pos15c);
var b32B_ccy = b32B.substr(0, 3);
var b32B_amt = b32B.substr(3).replace(',', '.');
stp.writeLog('32B in block B is ' + b32B_ccy + '  ' + b32B_amt)
stp.updateFieldValue("GTEE_CCY", b32B_ccy);
stp.updateFieldValue("INC_AMT", b32B_amt);
var c32B = MT.getTag(mt, '32B', pos15c);
var c32B_ccy = c32B.substr(0, 3);
var c32B_amt = c32B.substr(3).replace(',', '.');
stp.writeLog('32B in block C is ' + c32B_ccy + '  ' + c32B_amt)
stp.updateFieldValue("GTEE_CCY_LOCAL", c32B_ccy);
stp.updateFieldValue("INC_AMT_LOCAL", c32B_amt);
var b33B = MT.getTag(mt, '33B', pos15b, pos15c);
var b33B_ccy = b33B.substr(0, 3);
var b33B_amt = b33B.substr(3).replace(',', '.');
stp.writeLog('33B in block B is ' + b33B_ccy + '  ' + b33B_amt)
stp.updateFieldValue("GTEE_CCY", b33B_ccy);
stp.updateFieldValue("DEC_AMT", b33B_amt);
var c33B = MT.getTag(mt, '33B', pos15c);
var c33B_ccy = c33B.substr(0, 3);
var c33B_amt = c33B.substr(3).replace(',', '.');
stp.writeLog('33B in block C is ' + c33B_ccy + '  ' + c33B_amt)
stp.updateFieldValue("GTEE_CCY_LOCAL", c32B_ccy);
stp.updateFieldValue("DEC_AMT_LOCAL", c32B_amt);
var b23B = MT.getTag(mt, '23B', pos15b, pos15c);
var c23B = MT.getTag(mt, '23B', pos15c);
stp.updateFieldValue("NEW_EXPIRY_TYPE", b23B);
stp.updateFieldValue("NEW_EXPIRY_TYPE_LOCAL", c23B);
var b31E = MT.getTag(mt, '31E', pos15b, pos15c);
var c31E = MT.getTag(mt, '31E', pos15c);
stp.updateFieldValue("NEW_EXPIRY_DT", b31E);
stp.updateFieldValue("NEW_EXPIRY_DT_LOCAL", c31E);
var b35G = MT.getTag(mt, '35G', pos15b, pos15c);
var c35G = MT.getTag(mt, '35G', pos15c);
stp.updateFieldValue("NEW_EXPIRY_COND", b35G);
stp.updateFieldValue("NEW_EXPIRY_COND_LOCAL", c35G);
var b59 = MT.getTag(mt, '59', pos15b, pos15c);
var c59 = MT.getTag(mt, '59', pos15c);
if (b59.substr(0, 1) == "/") {
    stp.updateFieldValue("NEW_BENE_NM", stp.getLineValue(b59, 2));
    stp.updateFieldValue("NEW_BENE_ADD1", stp.getLineValue(b59, 3));
    stp.updateFieldValue("NEW_BENE_ADD2", stp.getLineValue(b59, 4));
    stp.updateFieldValue("NEW_BENE_ADD3", stp.getLineValue(b59, 5));
} else {
    stp.updateFieldValue("NEW_BENE_NM", stp.getLineValue(b59, 1));
    stp.updateFieldValue("NEW_BENE_ADD1", stp.getLineValue(b59, 2));
    stp.updateFieldValue("NEW_BENE_ADD2", stp.getLineValue(b59, 3));
    stp.updateFieldValue("NEW_BENE_ADD3", stp.getLineValue(b59, 4));
}
if (c59.substr(0, 1) == "/") {
    stp.updateFieldValue("NEW_BENE_NM_LOCAL", stp.getLineValue(c59, 2));
    stp.updateFieldValue("NEW_BENE_ADD1_LOCAL", stp.getLineValue(c59, 3));
    stp.updateFieldValue("NEW_BENE_ADD2_LOCAL", stp.getLineValue(c59, 4));
    stp.updateFieldValue("NEW_BENE_ADD3_LOCAL", stp.getLineValue(c59, 5));
} else {
    stp.updateFieldValue("NEW_BENE_NM_LOCAL", stp.getLineValue(c59, 1));
    stp.updateFieldValue("NEW_BENE_ADD1_LOCAL", stp.getLineValue(c59, 2));
    stp.updateFieldValue("NEW_BENE_ADD2_LOCAL", stp.getLineValue(c59, 3));
    stp.updateFieldValue("NEW_BENE_ADD3_LOCAL", stp.getLineValue(c59, 4));
}
var b24E = MT.getTag(mt, '24E', pos15b, pos15c);
var b24E_code = b24E.substr(0, 4);
var b24E_nar = b24E.substr(4);
var c24E = MT.getTag(mt, '24E', pos15c);
var c24E_code = c24E.substr(0, 4);
var c24E_nar = c24E.substr(4);
stp.updateFieldValue("DELIV_OF_AMD_UNDER", b24E_code);
stp.updateFieldValue("DELIV_OF_AMD_UNDER_NAR", b24E_nar);
stp.updateFieldValue("DELIV_OF_AMD_UNDER_LOCAL", c24E_code);
stp.updateFieldValue("DELIV_OF_AMD_UNDER_NAR_LOCAL", c24E_nar);
var b24G = MT.getTag(mt, '24G', pos15b, pos15c);
stp.writeLog('24G in block B is ' + b24G);
var b24G_code = b24G.substr(0, 4);
var b24G_nar = b24G.substr(4);
var c24G = MT.getTag(mt, '24G', pos15c);
stp.writeLog('24G in block C is ' + c24G);
var c24G_code = c24G.substr(0, 4);
var c24G_nar = c24G.substr(4);
stp.updateFieldValue("DELIVERY_TO_AMD_CODE", b24G_code);
stp.updateFieldValue("DELIVERY_TO_NM_ADD_AMD", b24G_nar);
stp.updateFieldValue("DELIVERY_TO_AMD_CODE_L", c24G_code);
stp.updateFieldValue("DELIVERY_TO_NM_ADD_AMD_L", c24G_nar);

//15B + 15C Block same Tags value get --END--;




stp.writeLog('AMD REF Begin');
var amd_no = MT.getTag(mt, '26E', pos15b, pos15c);
//var amd_no=stp.getSWIFTTagValue("26E");
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
    var ref_21 = stp.getSWIFTTagValue("21");
    var fld_list = stp.addFieldList(null, "C_MAIN_REF");
    fld_list = stp.addFieldList(fld_list, "NO_OF_AMD");
    var sql_cond = stp.addSQLCondition(null, "C_MAIN_REF", ref_21);
    var result = stp.executeQuery("IWGT_MASTER", fld_list, sql_cond);
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
stp.setEventTimesFromTable('IWGT_MASTER');
stp.writeLog("Incoming MT767 End");