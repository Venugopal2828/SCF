"path:SCRN/DO/102_SEQ_B.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_50 = function() {
    try {
        SYS_GetCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID', 'set50FValues()');
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_50_ADD = function() {
    try {
        SYS_InqCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.CallBack_21_REF = function() {
    try {
        SYT_Cal_DO_XXXX_SEQ_B_21_REF("X102_SEQ_B", document.MAINFORM.X102_21_REF);
        set50FValues();
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X102_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32B_CCY.value, document.MAINFORM.X102_32B_AMT.value);
        document.MAINFORM.X102_33B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_33B_CCY.value, document.MAINFORM.X102_33B_AMT.value);
        document.MAINFORM.X102_71G_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71G_CCY.value, document.MAINFORM.X102_71G_AMT.value);
        //var C_MAIN_REF=SYS_getValueFromMain('C_MAIN_REF');
        //document.MAINFORM.X102_21_REF.value=C_MAIN_REF.substr(2,C_MAIN_REF.length-2)+SYT_Cal_ORDER_NO('X102_SEQ_B');
        if (document.MAINFORM.X102_50F_PARTY_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.X102_50F_PARTY_NAME, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X102_50F_PARTY_NAME, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SEQ_B_SW_FORM();
        SEQ_B_59();
        //SYT_ChangeFldClass(document.MAINFORM.X102_21_REF,'P');

    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.SEQ_B_59 = function() {
    try {
        if (document.MAINFORM.X102_59_TAG.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.X102_59A_ACCOUNT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X102_59A_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_NAME, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_ADD3, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.X102_59A_ACCOUNT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X102_59A_IDENTIFIER, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_NAME, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_59_PARTY_ADD3, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.SEQ_B_SW_FORM = function() {
    try {
        var swform = SYS_getValueFromMain('SW_FORM');
        if (swform == 'MT102+') {
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_LOCATION, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_PARTY_IDENTIFIER, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52C_PARTY_IDENTIFIER, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X102_57C_PARTY_IDENTIFIER, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_57_TAG, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_LOCATION, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_PARTY_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52C_PARTY_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_57C_PARTY_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_57_TAG, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.set50FValues = function() {
    try {
        var line1Prefix = '1/';
        var line2Prefix = '2/';
        var line3Prefix = '3/';
        document.MAINFORM.X103_ORDCUACNO_50F.value = document.MAINFORM.X102_50A_ACCOUNT.value;
        document.MAINFORM.X103_ORDCU_NM_50F.value = document.MAINFORM.X102_50F_PARTY_NAME.value;
        document.MAINFORM.X103_ORDCUADD1_50F.value = document.MAINFORM.X102_50F_PARTY_ADD1.value;
        document.MAINFORM.X103_ORDCUADD2_50F.value = document.MAINFORM.X102_50F_PARTY_ADD2.value;
        document.MAINFORM.X103_ORDCUADD3_50F.value = document.MAINFORM.X102_50F_PARTY_ADD3.value;
        if (document.MAINFORM.X102_50_TAG.value == 'F') {
            /*
	if(document.MAINFORM.X102_50A_ACCOUNT.value != ''){
		if (document.MAINFORM.X102_50A_ACCOUNT.value.indexOf('/') == -1 ){
			document.MAINFORM.X103_ORDCUACNO_50F.value ='/'+ document.MAINFORM.X102_50A_ACCOUNT.value;
		}
	}
*/
            if (document.MAINFORM.X103_ORDCU_NM_50F.value != '') {
                document.MAINFORM.X103_ORDCU_NM_50F.value = line1Prefix + document.MAINFORM.X103_ORDCU_NM_50F.value;
            }
            if (document.MAINFORM.X103_ORDCUADD3_50F.value != '' && document.MAINFORM.APPL_CNTY_RES.value != '') {
                document.MAINFORM.X103_ORDCUADD3_50F.value = line3Prefix + document.MAINFORM.APPL_CNTY_RES.value + '/' + document.MAINFORM.X103_ORDCUADD3_50F.value;
            }
            if (document.MAINFORM.X103_ORDCUADD2_50F.value != '') {
                document.MAINFORM.X103_ORDCUADD2_50F.value = line2Prefix + document.MAINFORM.X103_ORDCUADD2_50F.value;
            }

            if (document.MAINFORM.X103_ORDCUADD1_50F.value != '') {
                document.MAINFORM.X103_ORDCUADD1_50F.value = line2Prefix + document.MAINFORM.X103_ORDCUADD1_50F.value;
            }

        }
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.PART_50A_ADD_BTN_onclick = function(event) {
    try {
        Cal_50_ADD();
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_21_REF_onchange = function(event) {
    try {
        SYS_GetCUBK('X102_21_REF', 'X102_21_REF', 'CallBack_21_REF()');
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_21_REF_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('X102_21_REF', 'C_TRX_STATUS = \'M\' AND (CPYT_PAY_ADV_MSG = \'MT103\' OR CPYT_PAY_ADV_MSG = \'MT103+\') ');
        SYS_InqCUBK_byCondition('X102_21_REF', '1');
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_32B_AMT_onchange = function(event) {
    try {
        //document.MAINFORM.X102_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32B_CCY.value, document.MAINFORM.X102_32B_AMT.value);
        var X102_32B_AMT;
        X102_32B_AMT = SYS_BeFloat(document.MAINFORM.X102_32B_AMT.value);
        if (X102_32B_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X102_32B_AMT.value = 0;
        }
        document.MAINFORM.X102_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32B_CCY.value, document.MAINFORM.X102_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_32B_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32B_CCY.value, document.MAINFORM.X102_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_33B_AMT_onchange = function(event) {
    try {
        //document.MAINFORM.X102_33B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_33B_CCY.value, document.MAINFORM.X102_33B_AMT.value);

        var X102_33B_AMT;
        X102_33B_AMT = SYS_BeFloat(document.MAINFORM.X102_33B_AMT.value);
        if (X102_33B_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X102_33B_AMT.value = 0;
        }
        document.MAINFORM.X102_33B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_33B_CCY.value, document.MAINFORM.X102_33B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_33B_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_33B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_33B_CCY.value, document.MAINFORM.X102_33B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_50F_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X102_50F_PARTY_ID.value.trim() != '') {
            Cal_50();
        } else {
            document.MAINFORM.X102_50F_PARTY_ID.value = '';
            document.MAINFORM.X102_50A_IDENTIFIER.value = '';
            document.MAINFORM.X102_50F_PARTY_NAME.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD1.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD2.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD3.value = '';
            document.MAINFORM.X102_50A_ACCOUNT.value = '';
        }
        if (document.MAINFORM.X102_50F_PARTY_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.X102_50F_PARTY_NAME, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X102_50F_PARTY_NAME, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_50_TAG_onchange = function(event) {
    try {
        set50FValues();
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_59_TAG_onchange = function(event) {
    try {
        SEQ_B_59();
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_71G_AMT_onchange = function(event) {
    try {
        document.MAINFORM.X102_71G_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71G_CCY.value, document.MAINFORM.X102_71G_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_71G_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_71G_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71G_CCY.value, document.MAINFORM.X102_71G_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B.js", e);
    }
}