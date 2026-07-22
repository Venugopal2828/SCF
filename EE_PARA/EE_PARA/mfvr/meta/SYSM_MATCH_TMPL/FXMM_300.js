// see MatchTemplateComparator.java
// m.put("book", ledgs);
// m.put("left", left.getMap());
// m.put("right", right.getMap());
// m.put("Result", info);
// fxmm see sysconf.json
stp.log(left.get('ENTRY_TYPE'));
stp.log(left.get('ENTRY_TYPE').charAt(0));
if (left.get('ENTRY_TYPE').substr(0, 1) == 'I') {
	var i300 = left;
	var o300 = right;
} else {
	var o300 = left;
	var i300 = right;
}
stp.log('i300 ?  ' + i300.get('ENTRY_TYPE') + ', o300 ? '
		+ o300.get('ENTRY_TYPE'));

var MatchConst = {
	E_MISMATCH : -4,
	STATUS_NULL : 0,
	STATUS_COMP : 20,
	STATUS_CLSD : 9000
};

function esun_match300() {
	var party_b = book[2];
	// 1. tag 22A
	if (i300.get('TRX_MARK') == 'CANC' || o300.get('TRX_MARK') == 'CANC') {
		return MatchConst.STATUS_CLSD;
	}
	// 82A,82D in merge class.
	// 77D, check NDF
	var ndf_77d = o300.get('ENTRY_BODY');
	stp.log('ndf_77d: ' + ndf_77d + ', o300 ? ' + o300.get('ENTRY_TYPE'));
	if (ndf_77d && ''+ndf_77d.substr(0, 6) == '/VALD/_') {
		// it is NDF,
		stp.log(i300.get('TRX_REF'));
		if (''+i300.get('ENTRY_BODY') != ''+ndf_77d) {
			Result.addMisMatch('I300.77D', i300.get('ENTRY_BODY'), 'O300.77D',
					ndf_77d);
		}
	} else {
		ndf_77d = null;
	}
	// 30V in book
	// 32B CCY, AMT in BOOK
	var ccy = book[6];
	// O300.F56A1 FLD_05
	var f56_a1 = o300.get('FLD_05');
	if (party_b.substr(0, 8) == 'BARCTWTP' && ccy == 'USD') {
		if (''+f56_a1.substr(0, 8) != 'BARCUS33') {
			Result.addMisMatch('I300.56A2', i300.get('FLD_05'), 'O300.56A1',
					f56_a1);
		}
	} else if (''+party_b.substr(0, 8) == 'OCBCTWTP' && ''+ccy == 'JPY') {
		if (''+f56_a1.substr(0, 8) != 'SMBCJPJT') {
			Result.addMisMatch('I300.56A2', i300.get('FLD_05'), 'O300.56A1',
					f56_a1);
		}
	} else if (''+f56_a1 != ''+i300.get('FLD_05')) {
		Result
				.addMisMatch('I300.56A2', i300.get('FLD_05'), 'O300.56A1',
						f56_a1);
	}
	// O300.F57B1 FLD_02
	var f57_a1 = o300.get('FLD_02');
	var cor_agent = ['UWCBTWTPXXX', 'UBSWCHZH80A', 'CHASHKHH', 'RBOSGB2LTCM',
			'HSBCHKHH', 'BARCGB5G', 'DEUTGB2L', 'GSILGB2X', 'CITIGB2L',
			'MSLNGB2XFXO', 'BARCGB50'];
	if (ndf_77d != null) {

	} else if (fxmm.indexBic(cor_agent, party_b) > -1) {

	} else if (''+f57_a1 != ''+i300.get('FLD_02')) {
		// stp.log('TBD '+f57_a1 +', '+ i300.get('FLD_02') +'. ' +(''+f57_a1 != ''+i300.get('FLD_02')) +' '+f57_a1.equals(i300.get('FLD_02')) );
		Result
				.addMisMatch('I300.57A2', i300.get('FLD_02'), 'O300.57A1',
						f57_a1);
	}
	// O300.F57B2 FLD_01
	// O300.F56A2 FLD_04
	var f56 = i300.get('FLD_04');
	// var left_json = eval('('+left_msg+')');\
	// Result.addMisMatch(leftPath, leftVal, rightPath, rightVal);
	// return pass;
	if (Result.getNbOfMisMtchs() > 0) {
		return MatchConst.E_MISMATCH;
	} else {
		return MatchConst.STATUS_COMP;
	}
	// left.
}
var result = esun_match300();
stp.log("RET: " + result);
stp.log("RET2: " + Result);