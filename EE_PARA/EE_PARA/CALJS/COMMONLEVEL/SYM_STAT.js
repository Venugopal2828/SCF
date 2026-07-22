function SYM_STAT_AGNT1_BK_ID() {
    try {
        if (document.MAINFORM.AGNT1_BK_ID.value != '') {
            SYS_GetCUBK('AGNT1_BK_ID', document.MAINFORM.AGNT1_BK_ID.name);
        } else {
            document.MAINFORM.AGNT1_AC_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_AGNT1_BK_ID", e);
    }
}

function SYM_STAT_APPL_ID() {
    try {
        SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name);
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_APPL_ID", e);
    }
}

function SYM_STAT_ARM_ID() {
    try {
        if ('' == document.MAINFORM.ARM_ID.value) {
            document.MAINFORM.ARM_NM.value = '';
        } else {
            SYS_GetCUBK('ARM_ID', document.MAINFORM.ARM_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_ARM_ID", e);
    }
}

function SYM_STAT_ARM_NM() {
    try {
        if ('' == document.MAINFORM.ARM_NM.value) {
            document.MAINFORM.ARM_ID.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_ARM_NM", e);
    }
}

function SYM_STAT_CUST_setRef(ref) {
    try {
        document.MAINFORM.C_MAIN_REF.value = ref; //add by jane at 2010-01-29
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_CUST_setRef", e);
    }
}

function SYM_STAT_EDI_setref(ediref) {
    try {
        document.MAINFORM.FA_EDI_MSG_ID.value = ediref;
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_EDI_setref", e);
    }
}

function SYM_STAT_FA_PARENT_COMP() {
    try {
        if (document.MAINFORM.FA_PARENT_COMP.value == '') {
            document.MAINFORM.FA_PARENT_COMP_NM.value = '';
        } else {
            SYS_GetCUBK('FA_PARENT_COMP', 'FA_PARENT_COMP');
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_FA_PARENT_COMP", e);
    }
}

function SYM_STAT_GetEDIRef() {
    try {
        SYS_GetRefNo('EDI', 'SYM_STAT_EDI_setref', "", "EDIREF", "", "EDIREF");
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_GetEDIRef", e);
    }
}

function SYM_STAT_GetRef() {
    try {
        SYS_GetRefNo('CUST', 'SYM_STAT_CUST_setRef', "", "CUSTREF", "", "CUSTREF"); //add by jane at 2010-01-29
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_GetRef", e);
    }
}

function SYM_STAT_INS_POLICY_NUM() {
    try {
        if (document.MAINFORM.INSU_POLICY_NO.value != '') {
            SYS_GetCUBK('INS_POLICY_NUM', document.MAINFORM.INSU_POLICY_NO.name);
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_INS_POLICY_NUM", e);
    }
}

function SYM_STAT_IS_FACTOR_FLAG() {
    try {
        if (document.MAINFORM.IS_FACTOR_FLAG.value == 'YES') {

            document.MAINFORM.FA_CUST_TYPE.className = 'CHAR_M';
            document.MAINFORM.FA_CUST_NM_ADD_DL.className = 'CHAR_M';
            document.MAINFORM.FA_CUST_NM_ADD_ML.className = 'CHAR_M';
            document.MAINFORM.FST_CNTC_NM.className = 'CHAR_M';
            document.MAINFORM.FA_CUST_FLAG.className = 'CHAR_M';
        } else {
            document.MAINFORM.FST_CNTC_NM.className = 'CHAR_O';
            document.MAINFORM.FA_CUST_NM_ADD_DL.className = 'CHAR_O';
            document.MAINFORM.FA_CUST_NM_ADD_ML.className = 'CHAR_O';
            document.MAINFORM.FA_CUST_FLAG.className = 'CHAR_O';
            document.MAINFORM.FA_CUST_TYPE.className = 'CHAR_O';

        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_IS_FACTOR_FLAG", e);
    }
}

function SYM_STAT_MAIN_VDO_PARTY_CHK() {
    try {
		var v = new Vdo('MX_PTY');
     
        var node = SYS_getDoByXpath("SwFMTAddress");
        var arrayvalue = SYS_getRecords(node);
        record = arrayvalue[0];
        var nm = SYS_getValFromRec(record, 'SWF_FMT_NM');
        var add1 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD1');
        var add2 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD2');
        var add3 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD3');
        var left = nm;
        var right = v.get('Nm');
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
		var adrs = v.get('PstlAdr/AdrLine');
		right = JSON.stringify(adrs);
        if (left != right) {
            alert("SWIFT Address Mismatch!");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_MAIN_VDO_PARTY_CHK", e);
    }
}

function SYM_STAT_Shown_Factor_Tab() {
    try {
        var obj = document.MAINFORM.IS_FACTOR_FLAG;
        if (obj.value == "YES") {
            EEHtml.getElementById('B').style.display = '';
            SYT_EnableDivClass('B_div');
        } else {
            EEHtml.getElementById('B').style.display = 'none';
            SYT_DisableDiv('B_div');
        }
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_Shown_Factor_Tab", e);
    }
}

function SYM_STAT_TEAM_ID() {
    try {
        SYS_GetCUBK('TEAM_ID', document.MAINFORM.TEAM_ID.name);
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_TEAM_ID", e);
    }
}

function SYM_STAT_VDO_SET() {
    try {	   
        var vdo = document.querySelector('#MX_PTY');
      
        var node = SYS_getDoByXpath("SwFMTAddress");
        var arrayvalue = SYS_getRecords(node);
        var info = "";

        record = arrayvalue[0];
        var nm = SYS_getValFromRec(record, 'SWF_FMT_NM');
        var add1 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD1');
        var add2 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD2');
        var add3 = SYS_getValFromRec(record, 'SWIFT_FMT_ADD3');
        info = '{"Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}';

        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SYM_STAT.js*SYM_STAT_VDO_SET", e);
    }
}

function SYM_STAT_AddCPDo() {
    try {
        var arrEPCDo = SYS_getDoByXpath('SwFMTAddress');
        var arrPOSTDo = SYS_getDoByXpath('PostAddress');
        doData = [];
        doData1 = [];
        var newRecord;
        var newRecord1;
        arrEPCDo.clearAll(true);
        arrPOSTDo.clearAll(true);
		var cMainRef = document.MAINFORM.TEMP_REF.value;
        var sqlCdtG1 = 'C_MAIN_REF =' + "'" + cMainRef + "'";
        var fieldListG1 = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3;ORDER_NO";
        var mapListG1 = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3;ORDER_NO";
        var TablenameG = "SWF_ADD_DO";
        SYS_GetTableData_S(TablenameG, sqlCdtG1, fieldListG1, mapListG1, true);
		var sqlCdtG1 = 'C_MAIN_REF =' + "'" + cMainRef + "'";
        var fieldListG1 = "POSTAL_FMT_ADD;ORDER_NO";
        var mapListG1 = "POSTAL_FMT_ADD;ORDER_NO";
        var TablenameG = "POST_ADD_DO";
        SYS_GetTableData_S(TablenameG, sqlCdtG1, fieldListG1, mapListG1, true);
                arrEPCDo.addRecord_click();
                arrPOSTDo.addRecord_click();
                index = arrEPCDo.currInstance.sequence;
                newRecord = arrEPCDo.getRecord(index - 1);
                newRecord1 = arrPOSTDo.getRecord(index - 1);
                SYS_setValToRec(newRecord, "SWF_FMT_NM", SWF_FMT_NM);
                SYS_setValToRec(newRecord, "SWIFT_FMT_ADD1", SWIFT_FMT_ADD1);
                SYS_setValToRec(newRecord, "SWIFT_FMT_ADD2", SWIFT_FMT_ADD2);			
                SYS_setValToRec(newRecord, "SWIFT_FMT_ADD3", SWIFT_FMT_ADD3);			
                SYS_setValToRec(newRecord, "ORDER_NO", 1);
                SYS_setValToRec(newRecord1, "POSTAL_FMT_ADD", POSTAL_FMT_ADD);
                SYS_setValToRec(newRecord1, "ORDER_NO", 1);
                doData.push(newRecord);
                doData1.push(newRecord1);
        SYS_reLoadGrid(arrEPCDo, doData);
        SYS_reLoadGrid(arrPOSTDo, doData1);
        
    } catch (e) {
         DisExcpt("SYM_STAT.js*SYM_STAT_AddCPDo", e);
    }
}

function acpt_rej(flag) {
	if (flag == true) {
		document.MAINFORM.REJ_REASON.disabled = false;
		document.MAINFORM.IsAgreeGroup.checked = false;
		document.MAINFORM.ACCEPT_REJECT.value = "REJECT";
		SYT_DisableDivClass("A_div");
			SYT_DisableDivClass("B_div");
			SYT_DisableDivClass("D_div");
			SYT_DisableDivClass("E_div");
			SYT_DisableDivClass("I_div");
			SYT_DisableDivClass("F_div");
			SYT_DisableDivClass("T_div");
			document.getElementById("REJ_REASON").className = "CHAR_M";
		SYT_ChangeFldClass(document.MAINFORM.REJ_REASON, "M");
		document.getElementById("REJ_REASON").focus();
	} else {
		document.MAINFORM.ACCEPT_REJECT.value = "ACCEPT";
		document.MAINFORM.REJ_REASON.disabled = true;
		document.MAINFORM.IsAgreeGroup1.checked = false;
		document.getElementById("REJ_REASON").className = "CHAR_P";
		SYT_ChangeFldClass(document.MAINFORM.REJ_REASON, "P");		
		var val = document.getElementById("REJ_REASON").value;
		if(null!=val||''!=val){
			document.getElementById("REJ_REASON").value = '';
		}
		SYT_EnableDivClass("A_div");
			SYT_EnableDivClass("B_div");
			SYT_EnableDivClass("D_div");
			SYT_EnableDivClass("E_div");
			SYT_EnableDivClass("I_div");
			SYT_EnableDivClass("F_div");
			SYT_EnableDivClass("T_div");
	}
}