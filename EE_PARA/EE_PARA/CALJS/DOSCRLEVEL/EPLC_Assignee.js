"path:SCRN/DO/Assignee.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ASSIGNEE_BK_ID = function() {
    try {
        if (document.MAINFORM.ASSIGNEE_BK_ID.value == '') {
            document.MAINFORM.ASSIGNEE_BK_ADD1.value = '';
            document.MAINFORM.ASSIGNEE_BK_ADD2.value = '';
            document.MAINFORM.ASSIGNEE_BK_ADD3.value = '';
            document.MAINFORM.ASSIGNEE_BK_NM.value = '';
            document.MAINFORM.ASSIGNEE_BK_SW_ADD.value = '';
            document.MAINFORM.ASSIGNEE_BK_SW_TAG.value = '';
            document.MAINFORM.ASSIGNEE_BK_DTL.value = '';
        }
        SYS_GetCUBK('ASSIGNEE_BK_ID', document.MAINFORM.ASSIGNEE_BK_ID.name, '');
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGNEE_TYPE_BUTTON = function() {
    try {
        if (document.MAINFORM.ASSIGNEE_TYPE.value == "CUST") {
            SQL_ID_CUST();
        } else if (document.MAINFORM.ASSIGNEE_TYPE.value == "BANK") {
            SQL_ID_BANK();
        } else {
            SYS_CheckError(document.MAINFORM.DOCS_PRESENTED_BY, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGNEE_TYPE_ID = function() {
    try {
        if (document.MAINFORM.ASSIGNEE_ID.value == "") {
            document.MAINFORM.ASSIGNEE_ID.value = "";
            document.MAINFORM.ASSIGNEE_NM.value = "";
            document.MAINFORM.ASSIGNEE_ADD1.value = "";
            document.MAINFORM.ASSIGNEE_ADD2.value = "";
            document.MAINFORM.ASSIGNEE_ADD3.value = "";
            document.MAINFORM.ASSIGNEE_SW_TAG.value = "";
            document.MAINFORM.ASSIGNEE_SW_ADD.value = "";
            document.MAINFORM.ASSIGNEE_ACNO.value = "";
        }
        if (document.MAINFORM.ASSIGNEE_TYPE.value == 'BANK') {
            SYS_GetCUBK('ASSIGNEE_ID_BANK', document.MAINFORM.ASSIGNEE_ID.name, '');
        } else if (document.MAINFORM.ASSIGNEE_TYPE.value == 'CUST') {
            SYS_GetCUBK('ASSIGNEE_ID_CUST', document.MAINFORM.ASSIGNEE_ID.name, '');
            document.MAINFORM.ASSIGNEE_SW_ADD.value = "";
            document.MAINFORM.ASSIGNEE_SW_TAG.value.value = "";
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.CAL_ASSIGN_BAL = function() {
    try {
        var nASSIGN_AMT = document.MAINFORM.ASSIGN_AMT.value;
        var nASSIGN_CHG = document.MAINFORM.ASSIGN_CHG.value;

        var nChg = (document.MAINFORM.ASSIGN_CHG_BY.value == "Assignee") ? nASSIGN_CHG : 0;
        var nResult = SYS_BeFloat(nASSIGN_AMT) - SYS_BeFloat(nChg);

        document.MAINFORM.ASSIGN_BAL.value = SYT_AmtFormat(document.MAINFORM.ASSIGN_CCY.value, nResult);
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.CHK_ASSIGN_AMT = function(fieldName) {
    try {
        var sdoName = "Assignee";
        var sFldName = "ASSIGN_AMT";
        var sLC_CCY = MAINFORM.LC_CCY.value;
        var nLC_BAL = SYS_BeFloat(MAINFORM.LC_BAL.value);

        var nOLD_CURR_ASSIGN_AMT = 0;
        var nORIG_ASSIGN_AMT = 0;
        var nTTL_ASSIGN_AMT = 0;
        var nCURR_ASSIGN_AMT = SYS_BeFloat(document.MAINFORM.elements[sFldName].value);

        var oDo = SYS_GetCurrentEditDo(sdoName);
        if (oDo != null) {
            nOLD_CURR_ASSIGN_AMT = SYS_BeFloat(SYS_GetFldValueByDo(oDo, sFldName));
        }

        nORIG_ASSIGN_AMT = SYS_BeFloat(SYS_GetFldSumByDoName(sdoName, sFldName));
        nTTL_ASSIGN_AMT = nORIG_ASSIGN_AMT + nCURR_ASSIGN_AMT - nOLD_CURR_ASSIGN_AMT;

        if (nTTL_ASSIGN_AMT > nLC_BAL) {
            alert("Total Assign Amt is " + sLC_CCY + " " + nTTL_ASSIGN_AMT + ",But LC Balance is " + sLC_CCY + " " + nLC_BAL + ", Please Check!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.CLEAR_ID = function() {
    try {
        if (document.MAINFORM.ASSIGNEE_TYPE.value == "CUST") {
            document.MAINFORM.ASSIGNEE_ID.value = "";
            document.MAINFORM.ASSIGNEE_NM.value = "";
            document.MAINFORM.ASSIGNEE_ADD1.value = "";
            document.MAINFORM.ASSIGNEE_ADD2.value = "";
            document.MAINFORM.ASSIGNEE_ADD3.value = "";
            document.MAINFORM.ASSIGNEE_SW_TAG.value = "";
            document.MAINFORM.ASSIGNEE_SW_ADD.value = "";
            document.MAINFORM.ASSIGNEE_ACNO.value = "";
        }
        if (document.MAINFORM.ASSIGNEE_TYPE.value == "") {
            document.MAINFORM.ASSIGNEE_ID.value = "";
            document.MAINFORM.ASSIGNEE_NM.value = "";
            document.MAINFORM.ASSIGNEE_ADD1.value = "";
            document.MAINFORM.ASSIGNEE_ADD2.value = "";
            document.MAINFORM.ASSIGNEE_ADD3.value = "";
            document.MAINFORM.ASSIGNEE_SW_TAG.value = "";
            document.MAINFORM.ASSIGNEE_SW_ADD.value = "";
            document.MAINFORM.ASSIGNEE_ACNO.value = "";
        }
        if (document.MAINFORM.ASSIGNEE_TYPE.value == "BANK") {
            document.MAINFORM.ASSIGNEE_ID.value = "";
            document.MAINFORM.ASSIGNEE_NM.value = "";
            document.MAINFORM.ASSIGNEE_ADD1.value = "";
            document.MAINFORM.ASSIGNEE_ADD2.value = "";
            document.MAINFORM.ASSIGNEE_ADD3.value = "";
            document.MAINFORM.ASSIGNEE_SW_TAG.value = "";
            document.MAINFORM.ASSIGNEE_SW_TAG.value = "";
            document.MAINFORM.ASSIGNEE_ACNO.value = "";
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return CHK_ASSIGN_AMT();
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.GetCUBK = function(oFld) {
    try {

    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var oCCY = document.MAINFORM.LC_CCY;
        if (oCCY != null) {
            document.MAINFORM.ASSIGN_CCY.value = oCCY.value;
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.InqCUBK = function(oFld) {
    try {
        /*
var ID_fldName =oFld.name.replace("_BTN","");
	var sCUBKRule ="";
	if(oFld.name.indexOf("ASSIGNEE_ID")>-1){
		sCUBKRule ="ASSIGNEE_ID_" + document.MAINFORM.ASSIGNEE_TYPE.value;
	}else{
		sCUBKRule ="ASSIGNEE_BK_ID";
	}

	
	var sql="C_MAIN_REF LIKE '%'";
	SYS_InqCUBK_Sql(sCUBKRule,sql,null,ID_fldName);
*/
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.SQL_BANK_BUTTON = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ASSIGNEE_BK_SW_ADD = EEHtml.getElementById("ASSIGNEE_BK_SW_ADD").value;
        ASSIGNEE_BK_NM = EEHtml.getElementById("ASSIGNEE_BK_NM").value;
        ASSIGNEE_BK_ADD1 = EEHtml.getElementById("ASSIGNEE_BK_ADD1").value;
        ASSIGNEE_BK_ADD2 = EEHtml.getElementById("ASSIGNEE_BK_ADD2").value;
        ASSIGNEE_BK_ADD3 = EEHtml.getElementById("ASSIGNEE_BK_ADD3").value;
        var _string = ASSIGNEE_BK_SW_ADD + ASSIGNEE_BK_NM + ASSIGNEE_BK_ADD1 + ASSIGNEE_BK_ADD2 + ASSIGNEE_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('ASSIGNEE_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('ASSIGNEE_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.SQL_ID_BANK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ASSIGNEE_SW_ADD = EEHtml.getElementById("ASSIGNEE_SW_ADD").value;
        ASSIGNEE_NM = EEHtml.getElementById("ASSIGNEE_NM").value;
        ASSIGNEE_ADD1 = EEHtml.getElementById("ASSIGNEE_ADD1").value;
        ASSIGNEE_ADD2 = EEHtml.getElementById("ASSIGNEE_ADD2").value;
        ASSIGNEE_ADD3 = EEHtml.getElementById("ASSIGNEE_ADD3").value;
        var _string = ASSIGNEE_SW_ADD + ASSIGNEE_NM + ASSIGNEE_ADD1 + ASSIGNEE_ADD2 + ASSIGNEE_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('ASSIGNEE_ID_BANK', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('ASSIGNEE_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.SQL_ID_CUST = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ASSIGNEE_NM = EEHtml.getElementById("ASSIGNEE_NM").value;
        ASSIGNEE_ADD1 = EEHtml.getElementById("ASSIGNEE_ADD1").value;
        ASSIGNEE_ADD2 = EEHtml.getElementById("ASSIGNEE_ADD2").value;
        ASSIGNEE_ADD3 = EEHtml.getElementById("ASSIGNEE_ADD3").value;
        var _string = ASSIGNEE_NM + ASSIGNEE_ADD1 + ASSIGNEE_ADD2 + ASSIGNEE_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('ASSIGNEE_ID_CUST', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('ASSIGNEE_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGNEE_BK_ID_onchange = function(event) {
    try {
        ASSIGNEE_BK_ID();
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGN_AMT_onchange = function(event) {
    try {
        CAL_ASSIGN_BAL();
        EEHtml.fireEvent(document.MAINFORM.ASSIGN_BAL, 'onchange');
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGN_CCY_onchange = function(event) {
    try {
        CAL_ASSIGN_BAL();
        EEHtml.fireEvent(document.MAINFORM.ASSIGN_BAL, 'onchange');
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGN_CHG_onchange = function(event) {
    try {
        CAL_ASSIGN_BAL();
        EEHtml.fireEvent(document.MAINFORM.ASSIGN_BAL, 'onchange');
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}

csDOScreenProto.ASSIGN_CHG_BY_onchange = function(event) {
    try {
        CAL_ASSIGN_BAL();
        EEHtml.fireEvent(document.MAINFORM.ASSIGN_BAL, 'onchange');
    } catch (e) {
        DisExcpt("EPLC_Assignee.js", e);
    }
}