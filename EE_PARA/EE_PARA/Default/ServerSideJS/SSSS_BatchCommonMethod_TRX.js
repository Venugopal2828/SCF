//EE-7771 churchill 20150729 _S
String.prototype.toFixed = function(d) {
    return Number(this).toFixed(d);
};


Number.prototype.toFixed = function(d) {
    //EE-7771 churchill 20141211 _S
    var rtnStr = null;
    //EE-7771 churchill 20141211 _E
    var s = String(this);
    if (!d) {
        d = 0;
    }
    if (s.indexOf(".") == -1) {
        s += ".";
    }
    var j = 1;
    var sZenoStr = "";
    while (j <= d) {
        sZenoStr += "0";
        j++;
    }
    s += sZenoStr;
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
        var s1 = "0" + RegExp.$2,
            pm = RegExp.$1,
            a = RegExp.$3.length,
            b = true;
        if (a == d + 2) {
            a = s1.match(/\d/g);
            if (parseInt(a[a.length - 1], 10) > 4) {
                var i = 0;
                for (i = a.length - 2; i >= 0; i--) {
                    a[i] = parseInt(a[i], 10) + 1;
                    if (a[i] == 10) {
                        a[i] = 0;
                        b = i != 1;
                    } else {
                        break;
                    }
                }
            }
            s1 = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");
        }
        if (b) {
            s1 = s1.substr(1);
        }
        //EE-7771 churchill 20141211 _S
        //return (pm+s).replace(/\.$/,"");
        //}return this+"";
        rtnStr = (pm + s1).replace(/\.$/, "");
        return eToNumStr(rtnStr); //EE-7771_1
    }
    rtnStr = String(this);
    /*@ref EE-7771_2 @date 2015-01-13 @author yaoyao _S*/
    return eToNumStr(rtnStr);
    /*@ref EE-7771_2 @date 2015-01-13 @author yaoyao _E*/
    //EE-7771 churchill 20141211 _E
};

//EE-7771 churchill 20141211 _S
/*@ref EE-7771_2 @date 2015-01-13 @author yaoyao _S*/

function eToNumStr(pValue) {
    /*@ref EE-7771_2 @date 2015-01-13 @author yaoyao _E*/
    var tempValue = pValue;
    var tempValueStr = String(tempValue);
    if ((tempValueStr.indexOf('E') != -1) || (tempValueStr.indexOf('e') != -1)) {
        var regExp = new RegExp('^(-)?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$', 'ig');
        var result = regExp.exec(tempValue);
        var numStr = "";
        var power = "";
        if (result != null) {
            numStr = result[2];
            power = result[4].substring(1);
            var deciIndex = numStr.indexOf(".");
            if (deciIndex == -1) {
                deciIndex = numStr.length;
            }
            var i = 0;
            var baseStr = "";
            if (power > 0) {
                baseStr = numStr.substring(0, deciIndex);
                for (i = deciIndex; i < power; i++) {
                    var digStr = numStr.charAt(i);
                    if (digStr != '') {
                        baseStr += digStr;
                    } else {
                        baseStr += '0';
                    }
                }
                if (power < (numStr.length - deciIndex)) {
                    baseStr += "." + numStr.substring(deciIndex + power);
                }
                //return baseStr;
            } else {
                /*@ref EE-7771_2 @date 2015-01-13 @author yaoyao _S*/
                //power = 0 - power;
                power = power * -1;
                numStr += result[3].substr(1);
                /*@ref EE-7771_2 @date 2015-01-13 @author yaoyao _E*/
                baseStr = numStr.substring(deciIndex);
                for (i = 0; i < power; i++) {
                    var digStr1 = numStr.charAt(deciIndex - i - 1);
                    if (digStr1 != '') {
                        baseStr = digStr1 + baseStr;
                    } else {
                        baseStr = '0' + baseStr;
                    }
                }
                if (power < deciIndex - 1) {
                    baseStr = numStr.substring(0, (deciIndex - power)) + '.' + baseStr;
                }
                baseStr = "0." + baseStr;
                //return baseStr;
            }
            pValue = baseStr;
        }
    }
    return pValue;
}
//EE-7771 churchill 20141211 _E

/*--- Global Variable Start---*/
var sGvWriteLogInfo = "";
var sFrontendTrxStatus = "";
var sFrontendSyncRef = "";
var sFrontendRelRef = "";
var sWebSvcReqContent = "";
/*--- Global Variable End---*/

function SYB_calConvertDateToChineseDate(sDtVal) {
    var sReplaceKeyWord = "";
    var aDtFormat = null;
    var aDtVal = null;
    var sYear = "";
    var sMonth = "";
    var sDay = "";
    if (sDtVal == "" || sDtVal == null) {
        return;
    }
    if (sDtVal.indexOf("-") > -1) {
        sReplaceKeyWord = "-";
    } else if (sDtVal.indexOf("/") > -1) {
        sReplaceKeyWord = "/";
    }
    if (sReplaceKeyWord != "" && sReplaceKeyWord != null) {
        aDtVal = sDtVal.split(sReplaceKeyWord);
        /*
    aDtFormat = SYS_DATE_FORMAT.split(sReplaceKeyWord);
    var i=0;
    var nLen = aDtVal.length;
    for(i=0; i<nLen; i++){
        if(aDtFormat[i].toUpperCase().indexOf("Y") > -1){
            sYear = aDtVal[i];
        }
        if(aDtFormat[i].toUpperCase().indexOf("M") > -1){
            sMonth = aDtVal[i];
        }
        if(aDtFormat[i].toUpperCase().indexOf("D") > -1){
            sDay = aDtVal[i];
        }
    }
    */
        if (DV.SYS_BANK_GROUP == "ESUN" && (DV.SYS_BANK_COUNTRY == "TW" || DV.SYS_BANK_COUNTRY == "HK")) {
            sYear = aDtVal[0];
            sMonth = aDtVal[1];
            sDay = aDtVal[2];
        }
    }
    return sYear + "年" + sMonth + "月" + sDay + "日";
}

function SYB_getDecFromCcyTable(sCcyVal) {
    var nCcyDecimal = 2;
    var sSqlCond = DV.addSQLCondition(null, "C_CURRENCY", sCcyVal, "=", "AND");
    var sFldList = DV.addFieldList(null, "I_DECIMAL");
    var sOrderBy = "ORDER BY C_CURRENCY DESC";
    //DV.writeLog("*****sOrderBy = " + sOrderBy);
    var result = DV.getTableMultiDataToArray("STD_CURRENCY", sFldList, sSqlCond, sOrderBy);
    //DV.writeLog("*****result = " + result);
    var nLen = result.length;
    //DV.writeLog("*****result.length = " + nLen);
    if (nLen > 0) {
        nCcyDecimal = DV.toInteger(DV.getDOValue(result[0], "I_DECIMAL"));
    }
    return nCcyDecimal;
}

function SYB_setAmountFormat(sCcyVal, nAmtVal) {
    //DV.writeLog("Call Function: SYB_setAmountFormat()");
    var nFormatVal = 0;
    if (nAmtVal != "" && nAmtVal != null) {
        nFormatVal = DV.toFloat(nAmtVal);
    }
    if (sCcyVal != "" && sCcyVal != null && nAmtVal != "" && nAmtVal != null) {
        var nDeciNum = 0;
        var strAmtInteger = "";
        var strAmtDecimanl = "";
        nDeciNum = SYB_getDecFromCcyTable(sCcyVal);
        strAmtInteger = ",";
        strAmtDecimanl = ".";
        var nResult1 = nAmtVal;
        var nIndex = -1;
        var bKeepOrigValue = false;
        var sTemnAmtVal = "";
        var sTemp2 = "";
        var nLoop = 0;

        //DV.writeLog("nDeciNum = " + nDeciNum);
        //DV.writeLog("nResult1 = " + nResult1);
        if (nDeciNum == null) {
            //DV.writeLog("1");
            sTemnAmtVal = nResult1.toString();
            if (sTemnAmtVal.indexOf(strAmtDecimanl) == -1) {
                nDeciNum = 0;
            } else {
                nDeciNum = sTemnAmtVal.length - sTemnAmtVal.indexOf(strAmtDecimanl) - 1;
            }
        } else if (typeof(nDeciNum) != "number") {
            //DV.writeLog("2");
            nDeciNum = DV.toInteger(nDeciNum);
            sTemnAmtVal = SYB_setRoundNumber(nResult1, nDeciNum).toString();
        } else {
            //DV.writeLog("3");
            sTemnAmtVal = SYB_setRoundNumber(nResult1, nDeciNum).toString();
            //DV.writeLog("3-1");
        }
        //DV.writeLog("sTemnAmtVal = " + sTemnAmtVal);
        var sIntePart = ""; //integer part
        var sRemaPart = ""; //remainder part
        var i;
        if (nDeciNum > 0) {
            nIndex = sTemnAmtVal.indexOf(strAmtDecimanl);
            if (nIndex == -1) {
                sIntePart = sTemnAmtVal;
                sRemaPart = strAmtDecimanl;
                for (i = 1; i <= nDeciNum; i++) {
                    sRemaPart = sRemaPart + "0";
                }
            } else {
                sIntePart = sTemnAmtVal.substring(0, nIndex);
                sRemaPart = sTemnAmtVal.substring(nIndex, sTemnAmtVal.length);
                nLoop = nDeciNum - (sRemaPart.length - 1);
                if (nLoop > 0) {
                    for (i = 1; i <= nLoop; i++) {
                        sRemaPart = sRemaPart + "0";
                    }
                }
            }
        } else {
            sIntePart = sTemnAmtVal;
            sRemaPart = "";
        }
        //DV.writeLog("Amount Format: " + (sIntePart + sRemaPart));
        nFormatVal = DV.toFloat(sIntePart + sRemaPart);
    }
    return nFormatVal;
}

function SYB_setAmountFormatToString(sCcyVal, nAmtVal) {
    //DV.writeLog("Call Function: SYB_setAmountFormatToString()");
    var nDeciNum = 0;
    var strAmtInteger = "";
    var strAmtDecimanl = "";
    /*	
if (SYS_AMT_INT_FORMAT == null){
    strAmtInteger=",";
}else{
    strAmtInteger = SYS_AMT_INT_FORMAT;
}
if (SYS_AMT_DEC_FORMAT == null){
    strAmtDecimanl = ".";
}else{
    strAmtDecimanl = SYS_AMT_DEC_FORMAT;
}
*/
    nDeciNum = SYB_getDecFromCcyTable(sCcyVal);
    strAmtInteger = ",";
    strAmtDecimanl = ".";
    var nResult1 = nAmtVal;
    var nIndex = -1;
    var bKeepOrigValue = false;
    var sTemnAmtVal = "";
    var sTemp2 = "";
    var nLoop = 0;
    if (nDeciNum == null) {
        //DV.writeLog("1");
        sTemnAmtVal = nResult1.toString();
        if (sTemnAmtVal.indexOf(strAmtDecimanl) == -1) {
            nDeciNum = 0;
        } else {
            nDeciNum = sTemnAmtVal.length - sTemnAmtVal.indexOf(strAmtDecimanl) - 1;
        }
    } else if (typeof(nDeciNum) != "number") {
        //DV.writeLog("2");
        nDeciNum = DV.toInteger(nDeciNum);
        sTemnAmtVal = SYB_setRoundNumber(nResult1, nDeciNum).toString();
    } else {
        //DV.writeLog("3");
        sTemnAmtVal = SYB_setRoundNumber(nResult1, nDeciNum).toString();
        //DV.writeLog("3-1");
    }
    //DV.writeLog("sTemnAmtVal = " + sTemnAmtVal);
    var sIntePart = ""; //integer part
    var sRemaPart = ""; //remainder part
    var i;
    if (nDeciNum > 0) {
        nIndex = sTemnAmtVal.indexOf(strAmtDecimanl);
        if (nIndex == -1) {
            sIntePart = sTemnAmtVal;
            sRemaPart = strAmtDecimanl;
            for (i = 1; i <= nDeciNum; i++) {
                sRemaPart = sRemaPart + "0";
            }
        } else {
            sIntePart = sTemnAmtVal.substring(0, nIndex);
            sRemaPart = sTemnAmtVal.substring(nIndex, sTemnAmtVal.length);
            nLoop = nDeciNum - (sRemaPart.length - 1);
            if (nLoop > 0) {
                for (i = 1; i <= nLoop; i++) {
                    sRemaPart = sRemaPart + "0";
                }
            }
        }
    } else {
        sIntePart = sTemnAmtVal;
        sRemaPart = "";
    }
    var nComma = 0;
    if (sIntePart.charAt(0) == "-") {
        nComma = Math.ceil((sIntePart.length - 1) / 3) - 1; //exlusive minus sign, moduler 3 to get section number, minus 1 will get comma sign number would be needed.
    } else {
        nComma = Math.ceil(sIntePart.length / 3) - 1; // moduler 3 to get section number, minus 1 will get comma sign number would be needed.
    }
    //DV.writeLog("nComma = " + nComma);
    sTemnAmtVal = "";
    sTemp2 = "";
    sTemp3 = sIntePart.substring(0, sIntePart.length - 3);
    sTemp4 = sIntePart.substring(sIntePart.length - 3, sIntePart.length);
    for (i = 1; i <= nComma; i++) {
        sTemnAmtVal = sIntePart.substring(0, sIntePart.length - i * 3 - (i - 1));
        sTemp2 = strAmtInteger + sIntePart.substring(sIntePart.length - i * 3 - (i - 1), sIntePart.length);
        sIntePart = sTemnAmtVal + sTemp2;
    }
    if (DV.SYS_BANK_COUNTRY == "IN") {
        nComma = Math.ceil((sIntePart.length - 3) / 2) - 1;
        if (sTemp3 != "") {
            for (i = 1; i <= nComma; i++) {
                sTemnAmtVal = sTemp3.substring(0, sTemp3.length - i * 2 - (i - 1));
                sTemp2 = "," + sTemp3.substring(sTemp3.length - i * 2 - (i - 1), sTemp3.length);
                sTemp3 = sTemnAmtVal + sTemp2;
            }
            for (i = 1; i <= nComma; i++) {
                if (sTemp3.substring(0, 1) == ",") {
                    sTemp3 = sTemp3.substring(1, sTemp3.length);
                }
            }
            sIntePart = sTemp3 + "," + sTemp4.toString();
        }
    }
    return (sIntePart + sRemaPart);
}

function SYB_setRoundNumber(number, decimal) {
    //DV.writeLog("*****number = " + number);
    //DV.writeLog("*****decimal = " + decimal);
    number = DV.toFloat(number);
    decimal = DV.toInteger(decimal);
    var strAmtDecimanl = ".";
    var result = number.toFixed(decimal);
    //result = result.replace(".",strAmtDecimanl);
    //DV.writeLog("*****result = " + result);
    return result;
}

/*function SYB_chkHostVoucherIsSuccess(sModuleShNm) {
    var sInstrTp = DV.getFieldValue("INSTR_TP");
    DV.writeLog("*****sInstrTp = " + sInstrTp);
    var bChkVouFlg = true;
    if (sInstrTp != "" && sInstrTp != null) {
        if (sModuleShNm != "FXOP" && sModuleShNm != "CMOP" && sInstrTp.indexOf("ReturnDoc") > -1) {
            bChkVouFlg = SYB_getVoucherHostIndexNoByDealNo();
        }
        if ((sModuleShNm == "FXOP" || sModuleShNm == "CMOP") && sInstrTp.indexOf("ReturnDoc-EC") > -1) {
            bChkVouFlg = SYB_getVoucherHostIndexNoByDealNo();
        }
    }
    DV.writeLog("*****bChkVouFlg = " + bChkVouFlg);
    return bChkVouFlg;
}

function SYB_getVoucherHostIndexNoByDealNo() {
    var sMiscFuncIdList = "F00000000557|F00000000524|F00000000531|F00000000545|F00000000624|F00000000455|F00000000674|F00000000781";
    var sSysDt = DV.getSysDate();
    var sDealNo = DV.getFieldValue("DEAL_NO");
    DV.writeLog("*****sDealNo = " + sDealNo);
    DV.writeLog("*****sSysDt = " + sSysDt);

    var sSqlCond = DV.addSQLCondition(null, "C_TRX_REF", sDealNo, "=", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "SEND_DATE", sSysDt, "=", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "MSG_TYPE", "TG__001%", " LIKE ", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "MSG_TYPE", "TG__001R", " NOT LIKE ", "AND");

    var sFldList = DV.addFieldList(null, "TRX_REF");
    sFldList = DV.addFieldList(sFldList, "TRX_STATUS");
    sFldList = DV.addFieldList(sFldList, "C_FUNC_ID");

    var sOrderBy = "ORDER BY I_EVENT_TIMES DESC, TRX_REF DESC";
    DV.writeLog("*****sOrderBy = " + sOrderBy);

    var result = DV.getTableMultiDataToArray("TRX_HOST_LOG", sFldList, sSqlCond, sOrderBy);
    DV.writeLog("*****result = " + result);

    var sChkFlg = null;
    var sTrxRef = "";
    var nLen = result.length;
    DV.writeLog("*****result.length = " + nLen);

    if (nLen > 0) {
        var i;
        for (i = 0; i < nLen; i++) {
            var sHostStat = DV.getDOValue(result[i], "TRX_STATUS");
            var sFuncId = DV.getDOValue(result[i], "C_FUNC_ID");
            if ((sHostStat == "S" || sHostStat == "R") && sMiscFuncIdList.indexOf(sFuncId) == -1) {
                sTrxRef = DV.getDOValue(result[i], "TRX_REF");
                sChkFlg = true;
                break;
            } else {
                sChkFlg = false;
            }
        }
    } else {
        sChkFlg = true;
    }
    if (sChkFlg == true) {
        DV.updateField("RVSEQ", sTrxRef);
    } else {
        DV.writeLog("HOST still not reply Voucher Status， please Inquire HOST Message at first!");
    }
    return sChkFlg;
}*/

function SYB_create2DArray(nFristLevelCount, nSecLevelCount) {
    var arrTwoDim = [];
    var x;

    arrTwoDim.length = nFristLevelCount;

    for (x = 0; x < nFristLevelCount; x++) {
        arrTwoDim[x] = [];
        arrTwoDim[x].length = nSecLevelCount;
    }
    return arrTwoDim;
}

function SYB_genIndexRef() {
    var sUUID = java.util.UUID.randomUUID().toString().replaceAll("-", "");
    return sUUID;
}

function SYB_addNewRecordToTargetDo(sTargetDoNm, aDoFdNm, aDoFdVal) {
    var i;
    for (i = 0; i < aDoFdNm.length; i++) {
        var aDoFldList = DV.buildArray();
        var j;
        for (j = 0; j < aDoFdNm[i].length; j++) {
            DV.addField(aDoFldList, aDoFdNm[i][j], aDoFdVal[i][j]);
        }
        DV.addDORec(sTargetDoNm, "", aDoFldList);
    }
}

function SYB_getSubDaysByDateVal(sDate1Val, sDate2Val) {

    var dFirstDay = SYB_getDateByFieldval(sDate1Val);
    var dSecondDay = SYB_getDateByFieldval(sDate2Val);
    var nDays, nDaysVal;
    if (dFirstDay == null || dFirstDay == "" || dSecondDay == null || dSecondDay == "") {
        nDaysVal = 0;
    } else {
        nDays = (dFirstDay - dSecondDay) / (24 * 60 * 60 * 1000);
        var intDays = DV.toInteger(nDays);
        var floatDays = DV.toFloat(nDays);
        if (floatDays - intDays >= 0.5) {
            nDaysVal = intDays + 1;
        } else {
            nDaysVal = intDays;
        }
    }
    return nDaysVal;
}

function SYB_getDateByFieldval(sFieldVal) {

    if (sFieldVal == null || sFieldVal == "") {
        return null;
    }
    var sDtVal = sFieldVal;
    /*
if (SYS_DATE_FORMAT != "yyyy-MM-dd"){
    sDtVal = getDate(SYS_DATE_FORMAT,sDtVal);
}
*/
    var nLen = sDtVal.length;
    var ss;
    var ii1 = sDtVal.indexOf("-", 0);
    var ii2;
    var yy, mm, dd;
    var sD;
    if (ii1 > 0) {
        yy = DV.toInteger(sDtVal.substr(0, ii1));
        ii2 = sDtVal.indexOf("-", ii1 + 1);
        if (ii1 < 4) {
            yy += 2000;
        }
        ss = sDtVal.substr(ii1 + 1, 2);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        mm = DV.toInteger(ss) - 1;
        ss = sDtVal.substr(ii2 + 1);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        dd = DV.toInteger(ss);
    } else if (nLen == 6) {
        ss = sDtVal.substr(0, 2);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        yy = DV.toInteger(ss);
        ss = sDtVal.substr(2, 2);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        mm = DV.toInteger(ss) - 1;
        ss = sDtVal.substr(4, 2);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        dd = DV.toInteger(ss);
        yy += 2000;
    } else if (nLen == 8) {
        yy = DV.toInteger(sDtVal.substr(0, 4));
        ss = sDtVal.substr(4, 2);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        mm = DV.toInteger(ss) - 1;
        ss = sDtVal.substr(6, 2);
        if (ss.substr(0, 1) == "0") {
            ss = ss.substr(1, 1);
        }
        dd = DV.toInteger(ss);
    } else {
        return null;
    }
    var retDate = new Date(yy, mm, dd, 0, 0, 0, 0);
    return retDate;
}

function SYB_calFloatNumberProcess(nFloatNum1, nFloatNum2, sCalTp) {
    DV.writeLog("sCalTp = " + sCalTp);
    DV.writeLog("nFloatNum1 = " + nFloatNum1);
    DV.writeLog("nFloatNum2 = " + nFloatNum2);
    if (nFloatNum1 == "" || nFloatNum1 == null || nFloatNum2 == "" || nFloatNum2 == null) {
        return "";
    }
    //var nF1,nF2,nR;
    if (sCalTp == "+") {
        return DV.SYS_FloatAdd(nFloatNum1, nFloatNum2);
    }
    if (sCalTp == "-") {
        return DV.SYS_FloatSub(nFloatNum1, nFloatNum2);
    }
    if (sCalTp == "*") {
        return DV.SYS_FloatMul(nFloatNum1, nFloatNum2);
    }
    if (sCalTp == "/") {
        return DV.SYS_FloatDiv(nFloatNum1, nFloatNum2);
    }
}

function SYB_calMT300MT320Tag22C(sCnptSwAdd, nRate) {

    /*
SWIFT NETWORK VALIDATED RULES
This field consists of the bank and location codes (Error code(s): T95) (from the ISO Bank Identifier Code) of
both the Sender and the Receiver of the MT 320. These codes must appear in alphabetical order (letters take
precedence over numbers) (Error code(s): T96).
*/
    nRate = DV.toFloat(nRate);
    if (sCnptSwAdd == "" || sCnptSwAdd == null) {
        return;
    }
    var sRate = nRate.toString();
    var sRtStr = sRate.replace(".", "");
    var nRtLen = sRtStr.length;
    var sRtStrOf22C = "";
    var sNewRtStr = "";
    var sZenoStr = "";
    var j = 0;
    var bChkNonZeroFlg = false;
    var nRateCount = 0;
    for (j = 0; j < nRtLen; j++) {
        var sChkWord = sRtStr.substring(nRtLen - (j + 1), nRtLen - j);
        if (!bChkNonZeroFlg && sChkWord != "0") {
            bChkNonZeroFlg = true;
        }
        if (bChkNonZeroFlg && nRateCount < 4) {
            sNewRtStr = sChkWord + sNewRtStr;
            nRateCount++;
        }
    }
    nRtLen = sNewRtStr.length;
    var nJCount = 4 - nRtLen;
    for (j = 1; j <= nJCount; j++) {
        sZenoStr = "0" + sZenoStr;
    }
    sRtStrOf22C = sZenoStr + sNewRtStr;

    var sOurBkSwAdd = "";
    var sOurCntyCode = DV.getCountryCode();
    if (sOurCntyCode == "TW") {
        sOurBkSwAdd = "ESUNTWTP";
    }
    if (sOurCntyCode == "HK") {
        sOurBkSwAdd = "ESUNHKHH";
    }
    var sOurLocation = sOurBkSwAdd.substr(6, 2);
    var sSendLocation = sCnptSwAdd.substr(6, 2);
    var sOurBicOf22C = sOurBkSwAdd.substr(0, 4) + sOurLocation;
    var sSendBicOf22C = sCnptSwAdd.substr(0, 4) + sSendLocation;
    var i, sTag22CVal;
    var sOrderFlg = ""; //O:Our, C:Cnpt
    for (i = 0; i < 6; i++) {
        var sChkOurLoctn = sOurBicOf22C.substr(i, 1);
        var sChkSendLoctn = sSendBicOf22C.substr(i, 1);
        var nOurAscii = sChkOurLoctn.charCodeAt();
        var nSendAscii = sChkSendLoctn.charCodeAt();
        //N:Number; L:Letter; [0-9]Ascii:48-57; [A-Z]Ascii:65-90; [a-z]Ascii:97-122
        var sOurLoctnTp = "";
        var sSendLoctnTp = "";
        if (nOurAscii >= 48 && nOurAscii <= 57) {
            sOurLoctnTp = "N";
        } else {
            sOurLoctnTp = "L";
        }
        if (nSendAscii >= 48 && nSendAscii <= 57) {
            sSendLoctnTp = "N";
        } else {
            sSendLoctnTp = "L";
        }
        if (sOurLoctnTp == sSendLoctnTp) { //N VS N or L VS L
            if (nOurAscii < nSendAscii) {
                sOrderFlg = "O";
            } else if (nOurAscii > nSendAscii) {
                sOrderFlg = "C";
            }
        } else {
            if (sOurLoctnTp == "L" && sSendLoctnTp == "N") {
                sOrderFlg = "O";
            } else {
                sOrderFlg = "C";
            }
        }
        if (sOrderFlg != "") {
            break;
        }
    }
    if (sOrderFlg == "O") {
        sTag22CVal = sOurBicOf22C + sRtStrOf22C + sSendBicOf22C;
    } else {
        sTag22CVal = sSendBicOf22C + sRtStrOf22C + sOurBicOf22C;
    }
    return sTag22CVal;
}

function SYB_calSWIFTMappingCurrency(sTrxCcy) {

    if (sTrxCcy == null || sTrxCcy == "" || sTrxCcy == "undefind") {
        DV.writeLog("[SYT_calSWIFTMappingCurrency] method error: Please input parameter[sTrxCcy] value!");
        return;
    }
    var TrxSwCcy = sTrxCcy;
    if (sTrxCcy == "CNH") {
        TrxSwCcy = "CNY";
    }
    return TrxSwCcy;
}

function SYB_setDecimalFormat(nAmtVal, nDeciNum) {

    var strAmtInteger = "";
    var strAmtDecimanl = "";
    /*	
if (SYS_AMT_INT_FORMAT == null){
    strAmtInteger=",";
}else{
    strAmtInteger = SYS_AMT_INT_FORMAT;
}
if (SYS_AMT_DEC_FORMAT == null){
    strAmtDecimanl = ".";
}else{
    strAmtDecimanl = SYS_AMT_DEC_FORMAT;
}
*/
    strAmtInteger = ",";
    strAmtDecimanl = ".";
    var nResult1 = nAmtVal;
    var nIndex = -1;
    var bKeepOrigValue = false;
    var sTemnAmtVal = "";
    var sTemp2 = "";
    var nLoop = 0;
    var sAmtVal = nAmtVal.toString();
    if (sAmtVal.indexOf(".") > -1) {
        var aAmtVal = sAmtVal.split(".");
        nDeciNum = aAmtVal[1].length;
    }
    if (nDeciNum == null) {
        bKeepOrigValue = true;
        sTemnAmtVal = nResult1.toString();
        if (sTemnAmtVal.indexOf(strAmtDecimanl) == -1) {
            nDeciNum = 0;
        } else {
            nDeciNum = sTemnAmtVal.length - sTemnAmtVal.indexOf(strAmtDecimanl) - 1;
        }
    } else if (typeof(nDeciNum) != "number") {
        nDeciNum = DV.toInteger(nDeciNum);
        sTemnAmtVal = SYB_setRoundNumber(nResult1, nDeciNum).toString();
    } else {
        sTemnAmtVal = SYB_setRoundNumber(nResult1, nDeciNum).toString();
    }
    var sIntePart = ""; //integer part
    var sRemaPart = ""; //remainder part
    var i;
    if (nDeciNum > 0) {
        nIndex = sTemnAmtVal.indexOf(strAmtDecimanl);
        if (nIndex == -1) {
            sIntePart = sTemnAmtVal;
            sRemaPart = strAmtDecimanl;
            for (i = 1; i <= nDeciNum; i++) {
                sRemaPart = sRemaPart + "0";
            }
        } else {
            sIntePart = sTemnAmtVal.substring(0, nIndex);
            sRemaPart = sTemnAmtVal.substring(nIndex, sTemnAmtVal.length);
            nLoop = nDeciNum - (sRemaPart.length - 1);
            if (nLoop > 0) {
                for (i = 1; i <= nLoop; i++) {
                    sRemaPart = sRemaPart + "0";
                }
            }
        }
    } else {
        sIntePart = sTemnAmtVal;
        sRemaPart = "";
    }
    var nComma = 0;
    if (sIntePart.charAt(0) == "-") {
        nComma = Math.ceil((sIntePart.length - 1) / 3) - 1; //exlusive minus sign, moduler 3 to get section number, minus 1 will get comma sign number would be needed.
    } else {
        nComma = Math.ceil(sIntePart.length / 3) - 1; // moduler 3 to get section number, minus 1 will get comma sign number would be needed.
    }
    sTemnAmtVal = "";
    sTemp2 = "";
    sTemp3 = sIntePart.substring(0, sIntePart.length - 3);
    sTemp4 = sIntePart.substring(sIntePart.length - 3, sIntePart.length);
    for (i = 1; i <= nComma; i++) {
        sTemnAmtVal = sIntePart.substring(0, sIntePart.length - i * 3 - (i - 1));
        sTemp2 = strAmtInteger + sIntePart.substring(sIntePart.length - i * 3 - (i - 1), sIntePart.length);
        sIntePart = sTemnAmtVal + sTemp2;
    }
    if (DV.SYS_BANK_COUNTRY == "IN") {
        nComma = Math.ceil((sIntePart.length - 3) / 2) - 1;
        if (sTemp3 != "") {
            for (i = 1; i <= nComma; i++) {
                sTemnAmtVal = sTemp3.substring(0, sTemp3.length - i * 2 - (i - 1));
                sTemp2 = "," + sTemp3.substring(sTemp3.length - i * 2 - (i - 1), sTemp3.length);
                sTemp3 = sTemnAmtVal + sTemp2;
            }
            for (i = 1; i <= nComma; i++) {
                if (sTemp3.substring(0, 1) == ",") {
                    sTemp3 = sTemp3.substring(1, sTemp3.length);
                }
            }
            sIntePart = sTemp3 + "," + sTemp4.toString();
        }
    }
    return (sIntePart + sRemaPart);
}

function SYB_chkSwiftAckNakStatusByOrgTag20(sTag20, bIsShowMsg) {

    /*
return SWIFT Status
Status List:
A: Ack
N: Nak
W: Wait the SWIFT Host feedback status
R: SWIFT SuperV Reject
X: Can not Find SWIFT Info of this deal no
*/

    if (sTag20 == "" || sTag20 == null || sTag20 == "undifined") {
        DV.writeLog("[SYT_chkSwiftAckNakStatusByOrgTag20] method error: Please input parameter[sTag20] value!");
        return;
    }

    var sSqlCond = DV.addSQLCondition(null, "C_TAG_20", sTag20, "=", "AND");
    var sFldList = DV.addFieldList(null, "C_APRV_STATE");
    sFldList = DV.addFieldList(sFldList, "C_TRT_STATE");
    var sOrderBy = "ORDER BY C_SYS_TRT_DATE DESC, C_SYS_TRT_TIME DESC";
    DV.writeLog("*****sOrderBy = " + sOrderBy);
    var result = DV.getTableMultiDataToArray("TRX_SWIFT_TRT_LOG", sFldList, sSqlCond, sOrderBy);
    DV.writeLog("*****result = " + result);
    var sFebackStat = "";
    var nLen = result.length;
    DV.writeLog("*****result.length = " + nLen);
    if (nLen > 0) {
        var i;
        for (i = 0; i < nLen; i++) {
            var sAprvStat = DV.getDOValue(result[i], "C_APRV_STATE");
            var sTrtStat = DV.getDOValue(result[i], "C_TRT_STATE");
            if (sTrtStat != "R") {
                if (sAprvStat == "F" && sTrtStat == "A") {
                    sFebackStat = "A";
                }
                if (sAprvStat == "P" && sTrtStat == "N") {
                    sFebackStat = "N";
                }
                if (sAprvStat == "F" && sTrtStat == "Y") {
                    sFebackStat = "W";
                }
            } else {
                sFebackStat = "R";
            }
        }
    } else {
        sFebackStat = "X";
    }
    if (bIsShowMsg == true && sFebackStat != "A" && sFebackStat != "R") {
        var sSwiftMsg = "";
        if (sFebackStat == "N") {
            sSwiftMsg = "SWIFT Status is NAK， please Inquire SWIFT Message at first!";
        }
        if (sFebackStat == "W") {
            sSwiftMsg = "HOST still not reply SWIFT Status， please Check SWIFT Host at first!";
        }
        if (sFebackStat == "X") {
            sSwiftMsg = "System can not find Ref. No.:" + sTag20 + "，please Check it at first!";
        }
        if (sSwiftMsg != "") {
            DV.writeLog(sSwiftMsg);
        }
    }
    return sFebackStat;
}

function SYB_calMT300MT320Tag20ByAmend(sLastTag20Val, sAfterOrBackFlg) {

    if (sLastTag20Val == "" || sLastTag20Val == null) {
        return;
    }
    var sLastTag20Len = sLastTag20Val.length;
    var sLastWordOfTag20 = sLastTag20Val.substring(sLastTag20Len - 1, sLastTag20Len);
    var sNewTag20 = "";

    if (sLastWordOfTag20.charCodeAt() >= 65 && sLastWordOfTag20.charCodeAt() <= 90) {
        var sOrgRefNo = sLastTag20Val.substring(0, sLastTag20Len - 1);
        var sLastAmdIdx = sLastWordOfTag20;
        var nNewCharCd = 0;
        var sNewAmdIdx = "";
        if (sAfterOrBackFlg == "A") {
            nNewCharCd = sLastAmdIdx.charCodeAt(0) + 1;
        } else {
            if (sLastAmdIdx != "A") {
                nNewCharCd = sLastAmdIdx.charCodeAt(0) - 1;
            }
        }
        if (nNewCharCd != 0) {
            sNewAmdIdx = String.fromCharCode(nNewCharCd);
        }
        sNewTag20 = sOrgRefNo + sNewAmdIdx;
    } else {
        if (sAfterOrBackFlg == "A") {
            sNewTag20 = sLastTag20Val + "A";
        } else {
            sNewTag20 = "New";
        }
    }
    return sNewTag20;
}

function SYB_calLocalCurrencyByBusiUnit() {

    var BUSI_UNIT = DV.getFieldValue("BUSI_UNIT");
    var sCcy = "";
    if (DV.SYS_BANK_COUNTRY == "TW") {
        if (BUSI_UNIT == "DBU" || BUSI_UNIT == "ACC") {
            sCcy = "TWD";
        } else if (BUSI_UNIT == "OBU") {
            sCcy = "USD";
        }
    }
    if (DV.SYS_BANK_COUNTRY == "HK") {
        sCcy = "HKD";
    }
    if (DV.SYS_BANK_COUNTRY == "SG") {
        sCcy = "SGD";
    }
     if (DV.SYS_BANK_COUNTRY == "US") {
        sCcy = "USD";
    }
    DV.writeLog("*****Local CCY = " + sCcy);
    return sCcy;
}

//function SYB_chkVoucherHostByDealNoFuncId(sFuncId) {
    /* RV = Revert, RT = Return, WT = Wait Host Reply, NA = No Voucher */
    /*var sSysDt = DV.getSysDate();
    var sDealNo = DV.getFieldValue("DEAL_NO");
    DV.writeLog("*****sDealNo = " + sDealNo);
    DV.writeLog("*****sSysDt = " + sSysDt);

    var sSqlCond = DV.addSQLCondition(null, "C_TRX_REF", sDealNo, "=", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "C_FUNC_ID", sFuncId, "=", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "MSG_TYPE", "TG__001%", " LIKE ", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "MSG_TYPE", "TG__001R", " NOT LIKE ", "AND");

    var sFldList = DV.addFieldList(null, "TRX_REF");
    sFldList = DV.addFieldList(sFldList, "TRX_STATUS");
    sFldList = DV.addFieldList(sFldList, "SEND_DATE");
    sFldList = DV.addFieldList(sFldList, "REL_TRX_REF");

    var sOrderBy = "ORDER BY I_EVENT_TIMES DESC, TRX_REF DESC";
    DV.writeLog("*****sOrderBy = " + sOrderBy);

    var result = DV.getTableMultiDataToArray("TRX_HOST_LOG", sFldList, sSqlCond, sOrderBy);
    DV.writeLog("*****result = " + result);

    var sChkStatus = null;
    var sTrxRef = "";
    var nLen = result.length;
    DV.writeLog("*****result.length = " + nLen);

    if (nLen > 0) {
        var i = 0;
        var sHostStat = DV.getDOValue(result[i], "TRX_STATUS");
        var sSendDate = DV.getDOValue(result[i], "SEND_DATE");
        var sRelTrxRef = DV.getDOValue(result[i], "REL_TRX_REF");
        if (sHostStat == "S") {
            if (sSendDate == sSysDt) {
                sTrxRef = DV.getDOValue(result[i], "TRX_REF");
                DV.updateField("RVSEQ", sTrxRef);
                sChkStatus = "RV";
            } else {
                sChkStatus = "RT";
            }
        } else if (sHostStat == "X") {
            DV.writeLog("HOST still not reply Voucher Status， please Inquire HOST Message at first!");
            sChkStatus = "WT";
        } else if (sHostStat == "F") {
            sChkStatus = "FL";
        } else if (sHostStat == "R") {
            sChkStatus = "RF";
        }
        if (sRelTrxRef != "" && sRelTrxRef != null) {
            sChkStatus = "NA";
        }
    } else {
        sChkStatus = "NA";
    }
    return sChkStatus;
}
*/
function SYB_calRollBackDataProcess(sFldNmList, sSaveDataFldNm, sProcFlg) {

    /* Para Exp.
sFldNmList : "RCV_CCY|RCV_PRINCL|RCV_MATU_DT"
sSaveDataFldNm = "ROLL_BACK_DATA"
sProcFlg : S: Save Data, D: set value of roll back data field to trx field of field list
*/

    var aFldNmList = sFldNmList.split("|");
    var nFldNmcount = aFldNmList.length;
    var sSaveDataVal = "";
    var i;
    if (sProcFlg == "S") {
        for (i = 0; i < nFldNmcount; i++) {
            var sFldVal = String(DV.getFieldValue(aFldNmList[i]));
            if (i == 0) {
                sSaveDataVal = sFldVal;
            } else {
                sSaveDataVal = sSaveDataVal + "|" + sFldVal;
            }
        }
        DV.updateField(sSaveDataFldNm, sSaveDataVal);
    }
    if (sProcFlg == "D") {
        sSaveDataVal = String(DV.getFieldValue(sSaveDataFldNm));
        if (sSaveDataVal != "" && sSaveDataVal != null) {
            var aSaveDataVal = sSaveDataVal.split("|");
            for (i = 0; i < nFldNmcount; i++) {
                DV.updateField(aFldNmList[i], aSaveDataVal[i]);
            }
        } else {
            DV.writeLog("SYT_calRollBackDataProcess(): The " + sSaveDataFldNm + " field must have value, Please check it frist!");
        }
    }
}

function SYB_chkHasEverSendSwiftSuccessfully(sTrxRef, sMtTp) {
    /*
sTrxRef: Transaction Ref. No, Exp. Deal No
sMtTp: SWIFT MT Type, Exp. 300,320,305,306
*/
    if (sTrxRef == "" || sTrxRef == null || sTrxRef == "undifined") {
        DV.writeLog("[SYT_chkHasEverSendSwiftSuccessfully] method error: Please input parameter[sTrxRef] value!");
        return;
    }
    if (sMtTp == "" || sMtTp == null || sMtTp == "undifined") {
        DV.writeLog("[SYT_chkHasEverSendSwiftSuccessfully] method error: Please input parameter[sMtTp] value!");
        return;
    }

    var sSqlCond = DV.addSQLCondition(null, "C_TRX_REF", sTrxRef, "=", "AND");
    sSqlCond = DV.addSQLCondition(sSqlCond, "C_MT", sMtTp, "=", "AND");

    var sFldList = DV.addFieldList(null, "C_APRV_STATE");
    sFldList = DV.addFieldList(sFldList, "C_TRT_STATE");

    var sOrderBy = "ORDER BY C_SYS_TRT_DATE DESC, C_SYS_TRT_TIME DESC";
    DV.writeLog("*****sOrderBy = " + sOrderBy);

    var result = DV.getTableMultiDataToArray("TRX_SWIFT_TRT_LOG", sFldList, sSqlCond, sOrderBy);
    DV.writeLog("*****result = " + result);
    var nLen = result.length;
    DV.writeLog("*****result.length = " + nLen);
    var bChkFlg = false;
    if (nLen > 0) {
        var i = 0;
        for (i = 0; i < nLen; i++) {
            var sAprvStat = DV.getDOValue(result[i], "C_APRV_STATE");
            var sTrtStat = DV.getDOValue(result[i], "C_TRT_STATE");
            if (sAprvStat == "F" && sTrtStat == "A") {
                bChkFlg = true;
                break;
            }
        }
    }
    return bChkFlg;
}

function SYB_calWriteLogInfo(sLogInfo) {
    DV.writeLog(sLogInfo); //For Debug Used
    if (sGvWriteLogInfo == null || sGvWriteLogInfo == "") {
        sGvWriteLogInfo = "-----Run Date Time: " + DV.getServerDateTime() + "-----;" + sGvWriteLogInfo;
    } else {
        sGvWriteLogInfo = sGvWriteLogInfo + ";" + sLogInfo;
    }
}

function SYB_genUETR() {
    SYB_calWriteLogInfo("Call Function: SYB_genUETR()");

    //Standards MT Release 2018 Impact on Messaging Interfaces: mandatory presence of field 121 Unique end-to-end transaction reference (UETR)

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/*function SYB_getLocationShortCodeOfSWIFT(sLocationName) {
    SYB_calWriteLogInfo("Call Function: SYB_getLocationShortCodeOfSWIFT()");
    var sSwiftSNm = "";
    var i = 0;
    var sSqlCond = DV.addSQLCondition(null, "FLD_NM", "CutTimeSNmMap", "=", "AND");
    var sFldList = DV.addFieldList(null, "ITEM_LABEL");
    sFldList = DV.addFieldList(sFldList, "FLD_VAL");
    var sOrderBy = "ORDER BY FLD_VAL ASC";
    var result = DV.getTableMultiDataToArray("COMM_FLD_OPTN_DO", sFldList, sSqlCond, sOrderBy);
    var nLen = result.length;
    if (nLen > 0 && sLocationName != "" && sLocationName != null) {
        sLocationName = sLocationName.toUpperCase();
        SYB_calWriteLogInfo("sLocationName = " + sLocationName);
        for (i = 0; i < nLen; i++) {
            var sFName = DV.getDOValue(result[i], "ITEM_LABEL");
            var sSName = DV.getDOValue(result[i], "FLD_VAL");
            sFName = sFName.toUpperCase();
            SYB_calWriteLogInfo("sFName = " + sFName);
            if (sFName == sLocationName) {
                sSwiftSNm = sSName;
                break;
            }
        }
    }
    return sSwiftSNm;
}

function SYB_getSettlementRateSource(sModule, sCcyPair, sCountPage) {
    SYB_calWriteLogInfo("Call Function: SYB_getSettlementRateSource()");
    //Exp. sModule = FXOP, sCcyPair = USD/TWD, sCountPage = TAIFX1
    var sSetlRateSource = "";
    var sKeyVal = "";
    var nSize = 0;
    var sSqlCond = DV.addSQLCondition(null, "FLD_NM", "SetlRateSource", "=", "AND");
    var sFldList = DV.addFieldList(null, "ITEM_LABEL");
    sFldList = DV.addFieldList(sFldList, "FLD_VAL");
    var sOrderBy = "ORDER BY FLD_VAL ASC";
    var result = DV.getTableMultiDataToArray("COMM_FLD_OPTN_DO", sFldList, sSqlCond, sOrderBy);
    if (sCountPage == "" || sCountPage == null) {
        sCountPage = "XXX";
    }
    if (sModule == "FXOP") {
        sKeyVal = sCcyPair + "-" + sCountPage;
    } else {
        sKeyVal = sCcyPair;
    }
    var i;
    nSize = result.length;
    if (nSize > 0) {
        for (i = 0; i < nSize; i++) {
            var sItemLabel = DV.getDOValue(result[i], "ITEM_LABEL");
            var sFldVal = DV.getDOValue(result[i], "FLD_VAL");
            if (sItemLabel.indexOf(sKeyVal) > -1) {
                sSetlRateSource = sFldVal;
                break;
            }
        }
    }
    return sSetlRateSource;
}

function SYB_chkPositionTypeIsALOfPortfolio(sFldNm) {
    SYB_calWriteLogInfo("Call Function: SYB_chkPositionTypeIsALOfPortfolio()");
    if (sFldNm == "" || sFldNm == null) {
        SYB_calWriteLogInfo("[SYB_chkPositionTypeIsALOfPortfolio] method error: Please input parameter[sFldNm] value!");
        return;
    }
    var bChkFlg = false;
    var sPortfolio = String(DV.getFieldValue(sFldNm));
    var sFldList = null;
    var sSqlCond = null;
    var sOrderBy = "";
    var result = "";
    var nSize = 0;
    sFldList = DV.addFieldList(null, "FLD_VAL");
    sSqlCond = DV.addSQLCondition(null, "FLD_NM", "MXPortfolioAL", "=", "AND");
    sOrderBy = "ORDER BY FLD_VAL ASC";
    result = DV.getTableMultiDataToArray("COMM_FLD_OPTN_DO", sFldList, sSqlCond, sOrderBy);
    var i = 0;
    if (result != "") {
        nSize = result.length;
        if (nSize > 0) {
            for (i = 0; i < nSize; i++) {
                var sFldVal = String(DV.getDOValue(result[i], "FLD_VAL"));
                if (sPortfolio == sFldVal) {
                    bChkFlg = true;
                    break;
                }
            }
        }
    }
    return bChkFlg;
}
*/
function SYB_getFrontendData(sMainRef) {
    /**
     * get fronend log data by main ref
     */
    var sSqlCond = DV.addSQLCondition(null, "C_MAIN_REF", sMainRef);
    sSqlCond = DV.addSQLCondition(sSqlCond, "STP_SYSTEM", "MXINT");
    var sFldList = DV.addFieldList(null, "TRX_STATUS");
    sFldList = DV.addFieldList(sFldList, "SYNC_REF");
    sFldList = DV.addFieldList(sFldList, "REL_REF");
    var sOrderBy = "order by SYNC_DATE desc, SYNC_TIME desc fetch first 1 rows only";
    var aResultData = DV.getTableMultiDataToArray("TRX_FRONTEND_LOG", sFldList, sSqlCond, sOrderBy);
    SYB_calWriteLogInfo("SYB_getFrontendData(): sOrderBy = " + sOrderBy);
    var nResultCount = 0;
    nResultCount = aResultData.length;
    if (nResultCount > 0) {
        sFrontendTrxStatus = DV.getDOValue(aResultData[0], "TRX_STATUS");
        sFrontendSyncRef = DV.getDOValue(aResultData[0], "SYNC_REF");
        sFrontendRelRef = DV.getDOValue(aResultData[0], "REL_REF");
    }
}

function SYB_getWebSvcData(sMsgId) {
    /**
     * get request content by message id and status is S
     * the newline, tab characters are removed
     */
    var sJSON = "";
    var sSqlCond = DV.addSQLCondition(null, "MSG_ID", sMsgId);
    sSqlCond = DV.addSQLCondition(sSqlCond, "TRX_STATUS", "S");
    var sFldList = DV.addFieldList(null, "REQ_CONTENT");
    var sOrderBy = "order by DATA_TIMESTAMP desc";
    var aResultData = DV.getTableMultiDataToArray("TRX_WEBSVC_LOG", sFldList, sSqlCond, sOrderBy);
    SYB_calWriteLogInfo("SYB_getWebSvcData(): sOrderBy = " + sOrderBy);
    var nResultCount = 0;
    nResultCount = aResultData.length;
    if (nResultCount > 0) {
        sWebSvcReqContent = String(DV.getDOValue(aResultData[0], "REQ_CONTENT"));
        if (sWebSvcReqContent != "" && sWebSvcReqContent != "undefined" && sWebSvcReqContent != undefined) {
            sJSON = sWebSvcReqContent.replace(/\r?\n|\r|\t|\n/g, "");
        }
    }
    return sJSON;
}

function SYB_getMxReturnData(sMainRef) {
    var aLogMsg = [3];
    SYB_getFrontendData(sMainRef);

    var TRX_STATUS = sFrontendTrxStatus;
    if (TRX_STATUS != "") {
        if (TRX_STATUS == "X") {
            aLogMsg[0] = "No";
            aLogMsg[1] = "No process result from MXINT";
        } else {
            var SYNC_REF = sFrontendSyncRef;
            var REL_REF = sFrontendRelRef;
            var sJSON = SYB_getWebSvcData(REL_REF);
            if (sJSON.length != 0) {
                eval(("var json = " + sJSON + ";"));
                var header = json.header;
                var txnId = String(header.txnId);

                //check txnId = SYNC_REF
                if (txnId == SYNC_REF) {
                    var requestBody = json.requestBody;
                    var returnCode = String(requestBody.returnCode);
                    if (returnCode == "S") {
                        var arrFldMap = [
                            ["MX_PAKG", requestBody.packageId],
                            ["MX_CONTRT", requestBody.contractId],
                            ["MX_COMPNT", requestBody.component],
                            ["SERIAL_NO", requestBody.version]
                        ];
                        var nArrFldMap = arrFldMap.length;
                        var i = 0;
                        for (i = 0; i < nArrFldMap; i++) {
                            DV.updateField(arrFldMap[i][0], String(arrFldMap[i][1]));
                        }
                        aLogMsg[0] = "Yes";
                        aLogMsg[1] = "";
                    } else {
                        aLogMsg[0] = "No";
                        aLogMsg[1] = String(requestBody.returnDescription);
                    }
                } else {
                    aLogMsg[0] = "No";
                    aLogMsg[1] = "The txnId is " + txnId + " but the Sync Ref is " + SYNC_REF;
                }
            } else {
                aLogMsg[0] = "No";
                aLogMsg[1] = "No successful MXINT data found in web service table";
            }
        }
    } else {
        aLogMsg[0] = "No";
        aLogMsg[1] = "No MXINT record found in frontend table";
    }
    aLogMsg[2] = TRX_STATUS;
    return aLogMsg;
}