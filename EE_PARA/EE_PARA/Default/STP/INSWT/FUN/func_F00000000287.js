stp.writeLog('Begin process Incoming MT760');
stp.setAutoProcess(true);

var ref = stp.SYS_getRefNo('IWGT');
var d = new Date();
var yr = d.getFullYear();
var sys = yr.toString();
var year = sys.toString().substr(2, 2);
stp.writeLog('C_MAIN_REF=' + ref);
stp.setMainRef(ref);

var INWARD_RCV_DT = stp.getSWIFTTagValue("30");
var vYear = INWARD_RCV_DT.substr(0, 2);
var vMon = INWARD_RCV_DT.substr(2, 2);
var vday = INWARD_RCV_DT.substr(4, 2);
var nINWARD_RCV_DT = "20" + vYear + "-" + vMon + "-" + vday;
if (INWARD_RCV_DT != "") {
    stp.updateFieldValue("INWARD_RCV_DT", nINWARD_RCV_DT);
} else {
    var INWARD_RCV_DT = stp.getSysBusiDate();
    stp.updateFieldValue("INWARD_RCV_DT", INWARD_RCV_DT);
}

stp.writeLog('INWARD_RCV_DT' + INWARD_RCV_DT);
stp.writeLog('nINWARD_RCV_DT' + nINWARD_RCV_DT);

var tempB6 = stp.getSWIFTTagValue("B6");
var Bic1 = stp.getPartValue(tempB6, "15", "8");
var Bic2 = stp.getPartValue(tempB6, "25", "3");
var Bic = Bic1 + Bic2;
stp.updateFieldValue("RCV_FM_BK_SW_ADD", Bic);
stp.writeLog('RCV_FM_BK_SW_ADD' + Bic);

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
var b22D = MT.getTag(mt, '22D', pos15b, pos15c);
var c22D = MT.getTag(mt, '22D', pos15c);
stp.updateFieldValue("FORM_OF_UNDERTAKING", b22D);
stp.updateFieldValue("FORM_OF_UNDERTAKING_LOCAL", c22D);
var b40C = MT.getTag(mt, '40C', pos15b, pos15c);
var b40C_code = b40C.substr(0, 4);
var b40C_nar = b40C.substr(4);
var c40C = MT.getTag(mt, '40C', pos15c);
var c40C_code = c40C.substr(0, 4);
var c40C_nar = c40C.substr(4);
stp.updateFieldValue("APLB_RULE", b40C_code);
stp.updateFieldValue("APLB_RULE_LOCAL", c40C_code);
stp.updateFieldValue("APLB_RULE_NARR", b40C_nar);
stp.updateFieldValue("APLB_RULE_NARR_LOCAL", c40C_nar);
var b23B = MT.getTag(mt, '23B', pos15b, pos15c);
var c23B = MT.getTag(mt, '23B', pos15c);
stp.updateFieldValue("EXPIRY_TYPE", b23B);
stp.updateFieldValue("EXPIRY_TYPE_LOCAL", c23B);
var b31E = MT.getTag(mt, '31E', pos15b, pos15c);
var c31E = MT.getTag(mt, '31E', pos15c);
var vb31E_Year = b31E.substr(0, 2);
var vb31E_Mon = b31E.substr(2, 2);
var vb31E_day = b31E.substr(4, 2);
var b31E_DT = "20" + vb31E_Year + "-" + vb31E_Mon + "-" + vb31E_day;
if(vb31E_Year!=''&&vb31E_Year!=null){
stp.updateFieldValue("EXPIRY_DT", b31E_DT);
}
var vc31E_Year = c31E.substr(0, 2);
var vc31E_Mon = c31E.substr(2, 2);
var vc31E_day = c31E.substr(4, 2);
var c31E_DT = "20" + vc31E_Year + "-" + vc31E_Mon + "-" + vc31E_day;
if(vc31E_Year!=''&&vc31E_Year!=null){
stp.updateFieldValue("EXPIRY_DT_LOCAL", c31E_DT);
}
var b35G = MT.getTag(mt, '35G', pos15b, pos15c);
var c35G = MT.getTag(mt, '35G', pos15c);
stp.updateFieldValue("EXPIRY_COND", b35G);
stp.updateFieldValue("EXPIRY_COND_LOCAL", c35G);
var b50 = MT.getTag(mt, '50', pos15b, pos15c);
var c50 = MT.getTag(mt, '50', pos15c);
stp.updateFieldValue("APPL_NM", stp.getLineValue(b50, 1));
stp.updateFieldValue("APPL_ADD1", stp.getLineValue(b50, 2));
stp.updateFieldValue("APPL_ADD2", stp.getLineValue(b50, 3));
stp.updateFieldValue("APPL_ADD3", stp.getLineValue(b50, 4));
stp.updateFieldValue("APPL_NM_LOCAL", stp.getLineValue(c50, 1));
stp.updateFieldValue("APPL_ADD1_LOCAL", stp.getLineValue(c50, 2));
stp.updateFieldValue("APPL_ADD2_LOCAL", stp.getLineValue(c50, 3));
stp.updateFieldValue("APPL_ADD3_LOCAL", stp.getLineValue(c50, 4));
var b51 = MT.getTag(mt, '51', pos15b, pos15c);
var c51 = MT.getTag(mt, '51', pos15c);
stp.updateFieldValue("RCV_FM_BK_NM", stp.getLineValue(b51, 1));
stp.updateFieldValue("RCV_FM_BK_ADD1", stp.getLineValue(b51, 2));
stp.updateFieldValue("RCV_FM_BK_ADD2", stp.getLineValue(b51, 3));
stp.updateFieldValue("RCV_FM_BK_ADD3", stp.getLineValue(b51, 4));
stp.updateFieldValue("INDEMN_NM_LOCAL", stp.getLineValue(c51, 1));
stp.updateFieldValue("INDEMN_ADD1_LOCAL", stp.getLineValue(c51, 2));
stp.updateFieldValue("INDEMN_ADD2_LOCAL", stp.getLineValue(c51, 3));
stp.updateFieldValue("INDEMN_ADD3_LOCAL", stp.getLineValue(c51, 4));
var b52A = MT.getTag(mt, '52A', pos15b, pos15c);
var c52A = MT.getTag(mt, '52A', pos15c);
if (b52A.substr(0, 1) == "/") {
stp.updateFieldValue("ISSUE_BK_SW_ADD", stp.getLineValue(b52A, 2));
}else{
stp.updateFieldValue("ISSUE_BK_SW_ADD", stp.getLineValue(b52A, 1));	
}
if (c52A.substr(0, 1) == "/") {
stp.updateFieldValue("ISSUE_BK_SW_ADD_LOCAL", stp.getLineValue(c52A, 2));
}else{
stp.updateFieldValue("ISSUE_BK_SW_ADD_LOCAL", stp.getLineValue(c52A, 1));	
}
var b52D = MT.getTag(mt, '52D', pos15b, pos15c);
var c52D = MT.getTag(mt, '52D', pos15c);
if (b52D.substr(0, 1) == "/") {
    stp.updateFieldValue("ISSUE_BK_ID", stp.getLineValue(b52D, 1));
    stp.updateFieldValue("ISSUE_BK_NM", stp.getLineValue(b52D, 2));
    stp.updateFieldValue("ISSUE_BK_ADD1", stp.getLineValue(b52D, 3));
    stp.updateFieldValue("ISSUE_BK_ADD2", stp.getLineValue(b52D, 4));
    stp.updateFieldValue("ISSUE_BK_ADD3", stp.getLineValue(b52D, 5));
} else {
    stp.updateFieldValue("ISSUE_BK_NM", stp.getLineValue(b52D, 1));
    stp.updateFieldValue("ISSUE_BK_ADD1", stp.getLineValue(b52D, 2));
    stp.updateFieldValue("ISSUE_BK_ADD2", stp.getLineValue(b52D, 3));
    stp.updateFieldValue("ISSUE_BK_ADD3", stp.getLineValue(b52D, 4));
}
if (c52D.substr(0, 1) == "/") {
    stp.updateFieldValue("ISSUE_BK_ID_LOCAL", stp.getLineValue(c52D, 1));
    stp.updateFieldValue("ISSUE_BK_NM_LOCAL", stp.getLineValue(c52D, 2));
    stp.updateFieldValue("ISSUE_BK_ADD1_LOCAL", stp.getLineValue(c52D, 3));
    stp.updateFieldValue("ISSUE_BK_ADD2_LOCAL", stp.getLineValue(c52D, 4));
    stp.updateFieldValue("ISSUE_BK_ADD3_LOCAL", stp.getLineValue(c52D, 5));
} else {
    stp.updateFieldValue("ISSUE_BK_NM_LOCAL", stp.getLineValue(c52D, 1));
    stp.updateFieldValue("ISSUE_BK_ADD1_LOCAL", stp.getLineValue(c52D, 2));
    stp.updateFieldValue("ISSUE_BK_ADD2_LOCAL", stp.getLineValue(c52D, 3));
    stp.updateFieldValue("ISSUE_BK_ADD3_LOCAL", stp.getLineValue(c52D, 4));
}
var b59 = MT.getTag(mt, '59', pos15b, pos15c);
var c59 = MT.getTag(mt, '59', pos15c);
if (b59.substr(0, 1) == "/") {
    stp.updateFieldValue("BENE_ACNO", stp.getLineValue(b59, 1));
    stp.updateFieldValue("BENE_NM", stp.getLineValue(b59, 2));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(b59, 3));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(b59, 4));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(b59, 5));
} else {
    stp.updateFieldValue("BENE_NM", stp.getLineValue(b59, 1));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(b59, 2));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(b59, 3));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(b59, 4));
}
if (c59.substr(0, 1) == "/") {
    stp.updateFieldValue("BENE_ACC_NO_LOCAL", stp.getLineValue(c59, 1));
    stp.updateFieldValue("BENE_NM_LOCAL", stp.getLineValue(c59, 2));
    stp.updateFieldValue("BENE_ADD1_LOCAL", stp.getLineValue(c59, 3));
    stp.updateFieldValue("BENE_ADD2_LOCAL", stp.getLineValue(c59, 4));
    stp.updateFieldValue("BENE_ADD3_LOCAL", stp.getLineValue(c59, 5));
} else {
    stp.updateFieldValue("BENE_NM_LOCAL", stp.getLineValue(c59, 1));
    stp.updateFieldValue("BENE_ADD1_LOCAL", stp.getLineValue(c59, 2));
    stp.updateFieldValue("BENE_ADD2_LOCAL", stp.getLineValue(c59, 3));
    stp.updateFieldValue("BENE_ADD3_LOCAL", stp.getLineValue(c59, 4));
}
var b32B = MT.getTag(mt, '32B', pos15b, pos15c);
var b32B_ccy = b32B.substr(0, 3);
var b32B_amt = b32B.substr(3).replace(',', '.');
stp.writeLog('32B in block B is ' + b32B_ccy + '  ' + b32B_amt)
stp.updateFieldValue("GTEE_CCY", b32B_ccy);
stp.updateFieldValue("GTEE_AMT", b32B_amt);
var c32B = MT.getTag(mt, '32B', pos15c);
var c32B_ccy = c32B.substr(0, 3);
var c32B_amt = c32B.substr(3).replace(',', '.');
stp.writeLog('32B in block C is ' + c32B_ccy + '  ' + c32B_amt)
stp.updateFieldValue("GTEE_CCY_LOCAL", c32B_ccy);
stp.updateFieldValue("GTEE_AMT_LOCAL", c32B_amt);
var b39D = MT.getTag(mt, '39F', pos15b, pos15c);
var c39D = MT.getTag(mt, '39F', pos15c);
stp.updateFieldValue("ADD_AMT_INFO", b39D);
stp.updateFieldValue("ADD_AMT_INFO_LOCAL", c39D);
var b41F = MT.getTag(mt, '41F', pos15b, pos15c);
var c41F = MT.getTag(mt, '41F', pos15c);
stp.updateFieldValue("AVAL_WT_BK_SW_ADD", b41F);
stp.updateFieldValue("AVAL_WT_BK_SW_ADD_LOCAL", c41F);
var b41G = MT.getTag(mt, '41G', pos15b, pos15c);
var c41G = MT.getTag(mt, '41G', pos15c);
stp.updateFieldValue("AVAL_WT_BK_NM", stp.getLineValue(b41G, 1));
stp.updateFieldValue("AVAL_WT_BK_ADD1", stp.getLineValue(b41G, 2));
stp.updateFieldValue("AVAL_WT_BK_ADD2", stp.getLineValue(b41G, 3));
stp.updateFieldValue("AVAL_WT_BK_ADD3", stp.getLineValue(b41G, 4));
stp.updateFieldValue("AVAL_WT_BK_NM_LOCAL", stp.getLineValue(c41G, 1));
stp.updateFieldValue("AVAL_WT_BK_ADD1_LOCAL", stp.getLineValue(c41G, 2));
stp.updateFieldValue("AVAL_WT_BK_ADD2_LOCAL", stp.getLineValue(c41G, 3));
stp.updateFieldValue("AVAL_WT_BK_ADD3_LOCAL", stp.getLineValue(c41G, 4));
var b71D = MT.getTag(mt, '71D', pos15b, pos15c);
var c71D = MT.getTag(mt, '71D', pos15c);
stp.updateFieldValue("CHARGES", b71D);
stp.updateFieldValue("CHARGES_LOCAL", c71D);
var b45C = MT.getTag(mt, '45C', pos15b, pos15c);
var c45C = MT.getTag(mt, '45C', pos15c);
stp.updateFieldValue("DOC_PRES_INSTR", b45C);
stp.updateFieldValue("DOC_PRES_INSTR_LOCAL", c45C);
var b44H = MT.getTag(mt, '44J', pos15b, pos15c);
var b44H_CN = b44H.substr(0, 2);
var b44H_NAR = b44H.substr(2);
var c44H = MT.getTag(mt, '44J', pos15c);
var c44H_CN = c44H.substr(0, 2);
var c44H_NAR = c44H.substr(2);
stp.updateFieldValue("GOVERN_LAW_CNTY_CODE", b44H_CN);
stp.updateFieldValue("GOVERN_LAW", b44H_NAR);
stp.updateFieldValue("GOVERN_LAW_CNTY_CODE_LOCAL", c44H_CN);
stp.updateFieldValue("GOVERN_LAW_LOCAL", c44H_NAR);
var b23F = MT.getTag(mt, '23F', pos15b, pos15c);
var b23F_code = b23F.substr(0, 4);
var b23F_nar = b23F.substr(4);
var c23F = MT.getTag(mt, '23F', pos15c);
var c23F_code = c23F.substr(0, 4);
var c23F_nar = c23F.substr(4);
stp.updateFieldValue("AUTO_EXTEN_CODE", b23F_code);
stp.updateFieldValue("AUTO_EXTEN_PERIOD", b23F_nar);
stp.updateFieldValue("AUTO_EXTEN_CODE_LOCAL", c23F_code);
stp.updateFieldValue("AUTO_EXTEN_PERIOD_LOCAL", c23F_nar);
var b78 = MT.getTag(mt, '78', pos15b, pos15c);
var c78 = MT.getTag(mt, '78', pos15c);
stp.updateFieldValue("AUTO_EXTEN_NOTIF", b78);
stp.updateFieldValue("AUTO_EXTEN_NOTIF_LOCAL", c78);
var b26E = MT.getTag(mt, '26E', pos15b, pos15c);
stp.writeLog('26E in block B is ' + b26E);
var c26E = MT.getTag(mt, '26E', pos15c);
stp.writeLog('26E in block C is ' + c26E);
stp.updateFieldValue("AUTO_EXTEN_NOTIF_PERIOD", b26E);
stp.updateFieldValue("AUTO_EXTEN_NOTIF_PRD_LOCAL", c26E);
var b31S = MT.getTag(mt, '31S', pos15b, pos15c);
var c31S = MT.getTag(mt, '31S', pos15c);
stp.updateFieldValue("AUTO_EXTEN_EXPIRY_DT", b31S);
stp.updateFieldValue("AUTO_EXTEN_EXPIRY_DT_LOCAL", c31S);
var b48B = MT.getTag(mt, '48B', pos15b, pos15c);
var c48B = MT.getTag(mt, '48B', pos15c);
stp.updateFieldValue("DEMAND_INDICATOR", b48B);
stp.updateFieldValue("DEMAND_INDICATOR_LOCAL", c48B);
var b48D = MT.getTag(mt, '48D', pos15b, pos15c);
var c48D = MT.getTag(mt, '48D', pos15c);
stp.updateFieldValue("TRANS_INDICATOR", b48D);
stp.updateFieldValue("TRANS_INDICATOR_LOCAL", c48D);
var b39E = MT.getTag(mt, '39E', pos15b, pos15c);
var c39E = MT.getTag(mt, '39E', pos15c);
stp.updateFieldValue("TRANS_CONDITION", b39E);
stp.updateFieldValue("TRANS_CONDITION_LOCAL", c39E);
var b45L = MT.getTag(mt, '45L', pos15b, pos15c);
var c45L = MT.getTag(mt, '45L', pos15c);
stp.updateFieldValue("UNDERLYING_TRANS_DETAILS", b45L);
stp.updateFieldValue("UNDER_TRANS_DETAILS_LOCAL", c45L);
var b24E = MT.getTag(mt, '24E', pos15b, pos15c);
var b24E_code = b24E.substr(0, 4);
var b24E_nar = b24E.substr(4);
var c24E = MT.getTag(mt, '24E', pos15c);
var c24E_code = c24E.substr(0, 4);
var c24E_nar = c24E.substr(4);
stp.updateFieldValue("DELIV_OF_ORIG_CODE", b24E_code);
stp.updateFieldValue("DELIV_OF_ORIG_UNDERTAKING", b24E_nar);
stp.updateFieldValue("DELIV_OF_ORIG_CODE_LOCAL", c24E_code);
stp.updateFieldValue("DELIV_OF_ORIG_UNDER_LOCAL", c24E_nar);
var b24G = MT.getTag(mt, '24G', pos15b, pos15c);
var b24G_code = b24G.substr(0, 4);
var b24G_nar = b24G.substr(4);
var c24G = MT.getTag(mt, '24G', pos15c);
var c24G_code = c24G.substr(0, 4);
var c24G_nar = c24G.substr(4);
stp.updateFieldValue("DELIVERY_TO_CODE", b24G_code);
stp.updateFieldValue("DELIVERY_TO_NM_ADD", b24G_nar);
stp.updateFieldValue("DELIVERY_TO_CODE_LOCAL", c24G_code);
stp.updateFieldValue("DELIVERY_TO_NM_ADD_LOCAL", c24G_nar);

//15B + 15C Block same Tags value get --END--;

stp.updateFieldValue("CURR_STATUS", "Incoming760");
stp.updateFieldValue("NXT_STATUS", "DemergeMT760");

stp.setEventTimes(0);
stp.writeLog('End process Incoming MT760');