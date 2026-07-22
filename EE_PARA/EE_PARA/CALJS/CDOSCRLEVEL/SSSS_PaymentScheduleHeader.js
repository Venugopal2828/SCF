"path:SCRN/DO/PaymentScheduleHeader.jsp";

var initScheFlag = false;
var row = false;

function ATTACH_CPYT_C_TRX_CCY() {
    try {
        document.MAINFORM.CPYT_C_TRX_CCY.value = EEHtml.getElementById("PRES_CCY").value;
        EEHtml.fireEvent(document.MAINFORM.CPYT_C_TRX_CCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY() {
    try {
        document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(EEHtml.getElementById("PRES_CCY").value, EEHtml.getElementById("PRES_AMT").value);
        EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function CLASS_BY_AVAL_BY() {
    try {
        var oAVAL_BY; // Utility Auto Fix Comments
        var sDivLabel; // Utility Auto Fix Comments
        //show MixPayment Div
        oAVAL_BY = EEHtml.getElementById("AVAL_BY");
        sDivLabel = "";
        switch (SYS_MODULE_NAME) {
            case "EPLC":
                sDivLabel = "D";
                break;
            case "IPLC":
                sDivLabel = "K";
                break;
            default:
                sDivLabel = "";
        }

        if (sDivLabel == "") {
            return;
        }
        if (oAVAL_BY.value == "BY MIXED PYMT") {
            EEHtml.getElementById(sDivLabel).style.display = "block";
        } else {
            EEHtml.getElementById(sDivLabel).style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function CPYT_N_PAY_AMT() {
    try {
        var amount; // Utility Auto Fix Comments
        var arrDos; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var resultValue; // Utility Auto Fix Comments
        var sCcy; // Utility Auto Fix Comments
        var ta; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var tm; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        var vPayPer; // Utility Auto Fix Comments
        var vPresAmt; // Utility Auto Fix Comments
        vPresAmt = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value);
        arrDos = SYS_GetObjByDoName("PaymentSchedule");
        len = arrDos.length;




        tempSum = 0;
        tm = 0;
        sCcy = document.MAINFORM.CPYT_C_TRX_CCY.value;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            vDo = arrDos[i];
            if (document.MAINFORM.INDIVID_DRAW_FLG.value == "Yes") {
                vPayPer = 100;
            } else {
                vPayPer = SYS_BeFloat(vDo.getDoValueByName("CPYT_C_PAY_PER"));
            }
            resultValue = SYT_AmtFormat(sCcy, (vPresAmt * vPayPer) / 100);
            vDo.putDoValueByName("CPYT_N_PAY_AMT", resultValue);
        }
        SYS_RefreshDoGrid(arrDos);
        for (j = 0; j < len; j++) {
            vDo = arrDos[j];
            tempSum += SYS_BeFloat(vDo.getDoValueByName("CPYT_N_PAY_AMT"));
        }
        if (vPresAmt != tempSum) {
            for (j = 0; j < len - 1; j++) {
                vDo = arrDos[j];
                tm += SYS_BeFloat(vDo.getDoValueByName("CPYT_N_PAY_AMT"));
            }
            ta = vPresAmt - tm;
            for (j = 0; j < len; j++) {
                if (j == len - 1) {
                    vDo = arrDos[j];
                    resultValue = SYT_AmtFormat(sCcy, ta);
                    vDo.putDoValueByName("CPYT_N_PAY_AMT", resultValue);
                }
            }
            SYS_RefreshDoGrid(arrDos);
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_ConfirmBusinessCall() {
    try {
        var CCY; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        CCY = document.MAINFORM.CPYT_C_TRX_CCY.value;
        targetDo = SYS_GetObjByDoName("PaymentSchedule");
        len = targetDo.length;

        for (i = 0; i < len; i++) {
            record = targetDo[i];
            SYS_UpdateFldValueByDo(record, 'CPYT_PAY_CCY', CCY);
        }
        SYS_RefreshDoGrid(targetDo);
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_ConfirmBusinessCheck() {
    try {
        var CPYT_N_PAY_TTL_AMT_TXCCY; // Utility Auto Fix Comments
        var sum_CPYT_C_PAY_PER; // Utility Auto Fix Comments
        var sum_CPYT_N_PAY_AMT; // Utility Auto Fix Comments
        sum_CPYT_C_PAY_PER = SYS_GetFldSumByDoName("PaymentSchedule", "CPYT_C_PAY_PER");
        sum_CPYT_N_PAY_AMT = SYS_GetFldSumByDoName("PaymentSchedule", "CPYT_N_PAY_AMT");
        CPYT_N_PAY_TTL_AMT_TXCCY = document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value;

        if (sum_CPYT_C_PAY_PER < 100 && sum_CPYT_N_PAY_AMT != SYS_BeFloat(CPYT_N_PAY_TTL_AMT_TXCCY)&&document.MAINFORM.AVAL_BY.value!='') {
            alert("Please Check the Total Percentage Must be 100% and the Total Amount Must Equal to the Total Transaction Amount !");
            return false;
        } else {
            return true;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function EEAuto_select_sche() {
    try {
        var allTd; // Utility Auto Fix Comments
        var allTr; // Utility Auto Fix Comments
        var doFlds; // Utility Auto Fix Comments
        var doObj; // Utility Auto Fix Comments
        var fldName; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var input; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var nAmt; // Utility Auto Fix Comments
        var oVal; // Utility Auto Fix Comments
        var sClass; // Utility Auto Fix Comments
        var src; // Utility Auto Fix Comments
        var tBody; // Utility Auto Fix Comments
        var tr; // Utility Auto Fix Comments
        src = event.srcElement;
        tr = src.parentNode.parentNode;
        tBody = tr.parentNode;
        sClass = "td_gray";
        id = src.getAttribute("sId");
        if (src.checked) {
            sClass = "td_gray_select"; // Utility Auto Fix Comments
        }
        allTr = tBody.getElementsByTagName("TR");
        for (i = 0; i < allTr.length; i++) {
            if (allTr[i] != tr && i != 0) {
                allTd = allTr[i].getElementsByTagName("TD");
                allTr[i].firstChild.firstChild.checked = false;
                for (j = 0; j < allTd.length; j++) {
                    allTd[j].className = "td_gray";
                }
            }
        }

        allTd = tr.getElementsByTagName("TD");
        for (i = 0; i < allTd.length; i++) {
            allTd[i].className = sClass;
        }
        SYS_DeleteDoRecord("PaymentSchedule");
        if (src.checked) {
            doObj = SYS_AddOneDoRecord("PaymentSchedule");
            oVal = new Object();
            fldName = null;
            for (i = 0; i < allTd.length; i++) {
                input = allTd[i].firstChild;
                if (input != src) {
                    fldName = input.name.substring(0, input.name.lastIndexOf("_"));
                    oVal[fldName] = input.value;
                }
            }
            doFlds = doObj.getFields();
            len = doFlds.length;
            for (i = 0; i < len; i++) {
                fldName = doFlds[i];
                if (fldName in oVal) {
                    SYS_UpdateFldValueByDo(doObj, fldName, oVal[fldName]);
                }
            }
            nAmt = SYT_AmtFormat(document.MAINFORM.CPYT_C_TRX_CCY.value, SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value));
            SYS_UpdateFldValueByDo(doObj, "CPYT_N_PAY_AMT", nAmt);
            SYS_UpdateFldValueByDo(doObj, "CPYT_C_PAY_PER", "100");
            SYS_UpdateFldValueByDo(doObj, "CPYT_PAY_CCY", document.MAINFORM.CPYT_C_TRX_CCY.value);
            SYS_RefreshDoGrid(doObj);
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_InitValues() {
    try {
        if (SYS_MODULE_NAME == "IPLC" || SYS_MODULE_NAME == "EPLC") {
            //document.MAINFORM.CPYT_C_TRX_CCY.value =SYS_getValueFromMain("PRES_CCY");
            //document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value=SYS_getValueFromMain('PRES_AMT');
            document.MAINFORM.CPYT_C_TRX_CCY.value = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = document.MAINFORM.PRES_AMT.value;

            document.MAINFORM.CPYT_C_LOCAL_CCY.value = SYS_LOCAL_CCY;
        } else {
            document.MAINFORM.CPYT_C_TRX_CCY.value = "";
            document.MAINFORM.CPYT_C_LOCAL_CCY.value = SYS_LOCAL_CCY;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_PostconditionOnInit() {
    try {
        CLASS_BY_AVAL_BY();
        SYS_DisableDoButton("PaymentSchedule", "ADD,EDIT,DEL", true);
		if (SYS_ORG_FUNCTION_SHORT_NAME =="Acceptance412"||SYS_ORG_FUNCTION_SHORT_NAME =="Create_Coll412"){
			SYS_DisableDoButton("PaymentSchedule", "ADD,EDIT,DEL", false);
		}
        if (SYS_FUNCTION_TYPE != "RE") {
            initScheduleList();
        }
        if (("PM||MM||KP||EC".indexOf(SYS_FUNCTION_TYPE) > -1) && SYS_ORG_FUNCTION_SHORT_NAME!="Acceptance412"&& SYS_ORG_FUNCTION_SHORT_NAME!="Create_Coll412") {
            EEHtml.attachEventListener(document.MAINFORM.PRES_CCY, "onchange", new Function("ATTACH_CPYT_C_TRX_CCY()"));
            EEHtml.attachEventListener(document.MAINFORM.PRES_AMT, "onchange", new Function("ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY()"));
        }

    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PreInitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function getFormatValue(name, value) {
    try {
        if (value == '') { // Utility Auto Fix Comments
            return ""; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (name == 'CPYT_D_TENOR_START_DATE' || name == 'CPYT_D_MAT_DATE') {
            return formatDateForSubmit(SYS_DATE_FORMAT, value);
        }
        if (name == 'CPYT_N_PAY_AMT') {
            return SYT_AmtFormat('CPYT_C_TRX_CCY', value);
        } else {
            return value;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function initScheduleList() {
    try {
        var arrField; // Utility Auto Fix Comments
        var arrFldName; // Utility Auto Fix Comments
        var arrRecord; // Utility Auto Fix Comments
        var checkbox; // Utility Auto Fix Comments
        var div; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var input; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newTd; // Utility Auto Fix Comments
        var oBody; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sFieldNm; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var td; // Utility Auto Fix Comments
        var tr; // Utility Auto Fix Comments
        str = document.MAINFORM.CPYT_SCHE_TEMP_DATA.value;
        if (str.length == 0 || str == "NO_RECORD" || initScheFlag) {
            return;
        }
        initScheFlag = true;
        oBody = EEHtml.getElementById("_SCHE_TEMP_TABLE");
        div = EEHtml.getElementById("_SCHE_TEMP_DIV");
        sFieldNm = "CPYT_C_PAY_PER,CPYT_C_SDA_FLAG,CPYT_C_TENOR_DESC,CPYT_C_TENOR_TYPE,CPYT_D_TENOR_START_DATE,CPYT_D_MAT_DATE,CPYT_I_TENOR_DAYS,CPYT_N_PAY_AMT"; // Utility Auto Fix Comments
        arrFldName = sFieldNm.split(",");
        arrRecord = str.split(";");
        for (i = 0; i < arrRecord.length; i++) {
            record = arrRecord[i];
            arrField = record.split(":");
            tr = document.createElement("TR");
            td = document.createElement("TD");
            td.className = "td_gray";
            checkbox = document.createElement("INPUT");
            checkbox.setAttribute("type", "checkbox");
            checkbox.name = "_SCHE_TEMP_CHECKBOX";
            EEHtml.attachEventListener(checkbox, "onclick", EEAuto_select_sche); // Utility Auto Fix Comments
            checkbox.setAttribute("sId", i);
            td.appendChild(checkbox);
            tr.appendChild(td);
            for (j = 0; j < arrField.length; j++) {
                newTd = document.createElement("TD");
                newTd.className = "td_gray";
                input = document.createElement("INPUT");
                input.setAttribute("type", "text");
                input.setAttribute("name", arrFldName[j] + "_" + i);
                input.className = "sinput_noborder";
                input.readOnly = true;
                input.value = getFormatValue(arrFldName[j], arrField[j]);
                newTd.appendChild(input);
                tr.appendChild(newTd);
            }
            oBody.appendChild(tr);
        }
        div.style.display = "block";
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function PaymentScheduleHeader_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_C_TRX_CCY.onchange = CPYT_C_TRX_CCY_onchange;
        document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.onchange = CPYT_N_PAY_TTL_AMT_TXCCY_onchange;
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function CPYT_C_TRX_CCY_onchange() {
    try {
        CPYT_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}

function CPYT_N_PAY_TTL_AMT_TXCCY_onchange() {
    try {
        CPYT_N_PAY_AMT();
    } catch (e) {
        DisExcpt("SSSS_PaymentScheduleHeader.js", e);
    }
}