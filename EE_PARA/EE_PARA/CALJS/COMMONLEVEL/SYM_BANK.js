function SYM_BANK_ACC1_VDO_SET() {
    try {
        var type = document.querySelector('#NOSTRO_AC_TYPE1');
        var ccy = document.querySelector('#NOSTRO_AC_CCY1');
        var acno = document.querySelector('#NOSTRO_AC_NO1');
        var vdo = document.querySelector('#MX_N_ACC1');
        var vdoval = vdo.value;

        var info = "";

        if (type.value == 'IBAN') {
            info = '{"Id": {"IBAN":"' + acno.value + '"}, "Ccy": "' + ccy.value + '"}';
        } else {
            info = '{"Id": {"Othr": {"Id": "' + acno.value + '"}}, "Ccy": "' + ccy.value + '"}';
        }
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_ACC1_VDO_SET", e);
    }
}

function SYM_BANK_ACC2_VDO_SET() {
    try {
        var type = document.querySelector('#NOSTRO_AC_TYPE2');
        var ccy = document.querySelector('#NOSTRO_AC_CCY2');
        var acno = document.querySelector('#NOSTRO_AC_NO2');
        var vdo = document.querySelector('#MX_N_ACC2');
        var vdoval = vdo.value;

        var info = "";

        if (type.value == 'IBAN') {
            info = '{"Id": {"IBAN":"' + acno.value + '"}, "Ccy": "' + ccy.value + '"}';
        } else {
            info = '{"Id": {"Othr": {"Id": "' + acno.value + '"}}, "Ccy": "' + ccy.value + '"}';
        }
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_ACC2_VDO_SET", e);
    }
}

function SYM_BANK_ARM_ID_ONCHANGE() {
    try {
        if (document.MAINFORM.ARM_ID.value != "") {
            SYS_GetCUBK('ARM_ID', 'ARM_ID');
        } else {
            document.MAINFORM.ARM_NM.value = "";

        }
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_ARM_ID_ONCHANGE", e);
    }
}

function SYM_BANK_GetRef() {
    try {
        //Add by jane at 2010-2-1
        SYS_GetRefNo('BANK_REF', 'SYM_BANK_SetRef');
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_GetRef", e);
    }
}

function SYM_BANK_MAIN_VDO_ACC_CHK() {
    try {
        var type = document.querySelector("#NOSTRO_AC_TYPE1");
        var ccy = document.querySelector('#NOSTRO_AC_CCY1');
        var acno = document.querySelector('#NOSTRO_AC_NO1');
        //var vdo = document.querySelector('#MX_N_ACC1');
		var v = new Vdo('MX_N_ACC1');
        var left = type.value;
		var I = v.get('Id/IBAN');
		var O = v.get('Id/Othr');
        if (left == "IBAN" && typeof(I) == "undefined") {
            alert("Nostro Account1 Type Mismatch!");
            return false;
        }
		if (left == "Othr" && typeof(O) == "undefined") {
            alert("Nostro Account1 Type Mismatch!");
            return false;
        }

        left = ccy.value;
		right = v.get('Ccy');
        if (left != right) {
            alert("Nostro Account1 Currency Mismatch!");
            return false;
        }

        left = acno.value;
        if (type.value == "IBAN") {
            right = v.get('Id/IBAN');
        } else if (type.value == "Othr") {
            right = v.get('Id/Othr/Id');
        }
        if (left != right) {
            alert("Nostro Account1 Number Mismatch!");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_MAIN_VDO_ACC_CHK", e);
    }
}

function SYM_BANK_MAIN_VDO_AGENT_CHK() {
    try {
        var elm = document.querySelector("input[name='SW_ADD']");
        var vdo = document.querySelector('#MX_AGENT');
		var v = new Vdo('MX_AGENT');
		var vdoval = vdo.value['FinInstnId'];
        var left = elm.value;
        var right = vdoval['BICFI'];
        if (left != right) {
            alert("SWIFT BIC Mismatch!");
            return false;
        }

        var node = SYS_getDoByXpath("SwFMTAddress");
        var arrayvalue = SYS_getRecords(node);
        left = "";
        record = arrayvalue[0];
        var nm = SYS_getValFromRec(record, 'SWF_FMT_NM');
        var add1 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD1');
        var add2 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD2');
        var add3 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD3');
        left = nm;
        right = vdoval['Nm'];
        if (left != right) {
            alert("SWIFT Name Mismatch!");
            return false;
        }
		if(add2 == '' && add3 == ''){
			left = '[{"AdrLine":"' + add1 + '"},{},{}]';
		}else if(add2 != '' && add3 == ''){
			left = '[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{}]';
		}else if(add2 != '' && add3 != ''){
			left = '[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]';
		}
		var adrs = v.get('FinInstnId/PstlAdr/AdrLine');
		right = JSON.stringify(adrs);
        if (left != right) {
            alert("SWIFT Address Mismatch!");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_MAIN_VDO_AGENT_CHK", e);
    }
}

function SYM_BANK_SetRef(ref) {
    try {
        //Add by jane at 2010-2-1
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_SetRef", e);
    }
}

function SYM_BANK_VACC_VDO_SET() {
    try {
        var type = document.querySelector('#VOSTRO_AC_TYPE');
        var ccy = document.querySelector('#AC1_CCY');
        var acno = document.querySelector('#AC1_NO');
		var v = new Vdo('MX_ACC');
       
        if (type.value == 'IBAN') {
			v.set('Id/IBAN', acno.value)
			 .set('Ccy', ccy.value);
        } else {
			v.set('Id/Othr/Id', acno.value)
			 .set('Ccy', ccy.value);
        }
		v.save();
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_VACC_VDO_SET", e);
    }
}

function SYM_BANK_VDO_SET() {
    try {
        var elm = document.querySelector("input[name='SW_ADD']");
        var vdo = document.querySelector('#MX_AGENT');
        var vdojs = JSON.stringify(vdo.value);
        //alert(elm.value);
        //alert(vdojs);

        var node = SYS_getDoByXpath("SwFMTAddress");
        var arrayvalue = SYS_getRecords(node);
        var info = "";

        record = arrayvalue[0];
        var nm = SYS_getValFromRec(record, 'SWF_FMT_NM');
        var add1 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD1');
        var add2 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD2');
        var add3 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD3');
        info = '{"FinInstnId": {"BICFI":"' + elm.value + '", "Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}}';

        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SYM_BANK.js*SYM_BANK_VDO_SET", e);
    }
}