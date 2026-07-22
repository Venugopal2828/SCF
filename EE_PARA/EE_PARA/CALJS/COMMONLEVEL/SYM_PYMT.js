function SYM_PYMT_Chk_CntyCode(sCntyCode) {
    try {

        var bFlag; // Utility Auto Fix Comments
        var cntyCode; // Utility Auto Fix Comments
        cntyCode = new Array("AF",
            "AL",
            "DZ",
            "AS",
            "AD",
            "AO",
            "AI",
            "AQ",
            "AG",
            "AR",
            "AM",
            "AW",
            "AU",
            "AT",
            "AZ",
            "BS",
            "BH",
            "BD",
            "BB",
            "BY",
            "BE",
            "BZ",
            "BJ",
            "BM",
            "BT",
            "BO",
            "BA",
            "BW",
            "BV",
            "BR",
            "IO",
            "BN",
            "BG",
            "BF",
            "BI",
            "KH",
            "CM",
            "CA",
            "CV",
            "KY",
            "CF",
            "TD",
            "CL",
            "CN",
            "CX",
            "CC",
            "KM",
            "CG",
            "CD",
            "CK",
            "CR",
            "CI",
            "HR",
            "CU",
            "CY",
            "CZ",
            "DK",
            "DJ",
            "DM",
            "DO",
            "TP",
            "EC",
            "EG",
            "SV",
            "GQ",
            "ER",
            "EE",
            "ET",
            "FK",
            "FO",
            "FJ",
            "FI",
            "FR",
            "FX",
            "GF",
            "PF",
            "TF",
            "GA",
            "GM",
            "GE",
            "DE",
            "GH",
            "GI",
            "GR",
            "GL",
            "GD",
            "GP",
            "GU",
            "GT",
            "GN",
            "GW",
            "GY",
            "HT",
            "HM",
            "VA",
            "HN",
            "HK",
            "HU",
            "IS",
            "IN",
            "ID",
            "IR",
            "IQ",
            "IE",
            "IL",
            "IT",
            "JM",
            "JP",
            "JO",
            "KZ",
            "KE",
            "KI",
            "KP",
            "KR",
            "KW",
            "KG",
            "LA",
            "LV",
            "LB",
            "LS",
            "LR",
            "LY",
            "LI",
            "LT",
            "LU",
            "MO",
            "MK",
            "MG",
            "MW",
            "MY",
            "MV",
            "ML",
            "MT",
            "MH",
            "MQ",
            "MR",
            "MU",
            "YT",
            "MX",
            "FM",
            "MD",
            "MC",
            "MN",
            "MS",
            "MA",
            "MZ",
            "MM",
            "NA",
            "NR",
            "NP",
            "NL",
            "AN",
            "NC",
            "NZ",
            "NI",
            "NE",
            "NG",
            "NU",
            "NF",
            "MP",
            "NO",
            "OM",
            "PK",
            "PW",
            "PA",
            "PG",
            "PY",
            "PE",
            "PH",
            "PN",
            "PL",
            "PT",
            "PR",
            "QA",
            "RE",
            "RO",
            "RU",
            "RW",
            "KN",
            "LC",
            "VC",
            "WS",
            "SM",
            "ST",
            "SA",
            "SN",
            "SC",
            "SL",
            "SG",
            "SK",
            "SI",
            "SB",
            "SO",
            "ZA",
            "GS",
            "ES",
            "LK",
            "SH",
            "PM",
            "SD",
            "SR",
            "SJ",
            "SZ",
            "SE",
            "CH",
            "SY",
            "TW",
            "TJ",
            "TZ",
            "TH",
            "TG",
            "TK",
            "TO",
            "TT",
            "TN",
            "TR",
            "TM",
            "TC",
            "TV",
            "UG",
            "UA",
            "AE",
            "GB",
            "US",
            "UM",
            "UY",
            "UZ",
            "VU",
            "VE",
            "VN",
            "VG",
            "VI",
            "WF",
            "EH",
            "YE",
            "YU",
            "ZM",
            "ZW");


        bFlag = false;

        for (i = 0; i < sCntyCode.length; i++) {
            if (sCntyCode[i] == sCntyCode) {
                bFlag = true;
                break;
            }
        }
        return bFlag;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SYS_buildSQLCond(colsToFields, extColsToFields, manualAppend) {
    try {

        var addtCondCheck;
        var sqlStr;
        var sqlStrApnd;
        sqlStr = "";
        sqlStrApnd = "";
        addtCondCheck = false;
        for (i = 0; i < colsToFields.length; i++) { //6
            if (document.MAINFORM.elements[colsToFields[i + 1]].value != "") {
                if (sqlStr.length > 0) {
                    sqlStr += " AND ";
                }
                sqlStr += colsToFields[i] + " LIKE \'<--" + colsToFields[i + 1] + "-->" + "%" + "\'";
            }
            i++;
        }
        if (manualAppend != null) {
            sqlStr += " AND " + manualAppend;
        }
        if (extColsToFields != null) {
            if (sqlStr.length != 0) {
                sqlStrApnd += " AND (";
            } else {
                sqlStrApnd += "((1=0) ";
            }
            for (i = 0; i < extColsToFields.length; i++) {
                if (document.MAINFORM.elements[extColsToFields[i + 1]].value != "") {
                    if (sqlStrApnd.charAt(sqlStrApnd.length - 1) != "(") {
                        sqlStrApnd += " OR ";
                    }
                    sqlStrApnd += extColsToFields[i] + " LIKE \'<--" + extColsToFields[i + 1] + "-->" + "%" + "\'";
                    addtCondCheck = true;
                }
                i++;
            }
            sqlStrApnd += ")";
        }
        if (addtCondCheck) {
            sqlStr += sqlStrApnd;
        }
        if (sqlStr.length == 0) {
            sqlStr += "1=1";
        }
        return sqlStr;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_IbanNumFromAlpha(sVal) {
    try {

        var IbanNo; // Utility Auto Fix Comments
        switch (sVal) {
            case "A":
                IbanNo = "10";
                break;

            case "B":
                IbanNo = "11";
                break;

            case "C":
                IbanNo = "12";
                break;

            case "D":
                IbanNo = "13";
                break;
            case "E":
                IbanNo = "14";
                break;
            case "F":
                IbanNo = "15";
                break;

            case "G":
                IbanNo = "16";
                break;

            case "H":
                IbanNo = "17";
                break;

            case "I":
                IbanNo = "18";
                break;
            case "J":
                IbanNo = "19";
                break;

            case "K":
                IbanNo = "20";
                break;

            case "L":
                IbanNo = "21";
                break;

            case "M":
                IbanNo = "22";
                break;

            case "N":
                IbanNo = "23";
                break;

            case "O":
                IbanNo = "24";
                break;

            case "P":
                IbanNo = "25";
                break;

            case "Q":
                IbanNo = "26";
                break;

            case "R":
                IbanNo = "27";
                break;

            case "S":
                IbanNo = "28";
                break;

            case "T":
                IbanNo = "29";
                break;

            case "U":
                IbanNo = "30";
                break;

            case "V":
                IbanNo = "31";
                break;

            case "W":
                IbanNo = "32";
                break;

            case "X":
                IbanNo = "33";
                break;

            case "Y":
                IbanNo = "34";
                break;

            case "Z":
                IbanNo = "35";
                break;
            default:
                IbanNo = sVal;
                break;
        }
        return IbanNo;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_add_to_trx_history(type, message) {
    try {

        var a; // Utility Auto Fix Comments
        var lines; // Utility Auto Fix Comments
        var maxChar; // Utility Auto Fix Comments
        var maxLines; // Utility Auto Fix Comments
        var note; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        var templines; // Utility Auto Fix Comments
        var temptext; // Utility Auto Fix Comments
        switch (type) {
            case 'A':
                note = "Notes added : ";
                break;
            case 'B':
                note = "Fields Changed : ";
                break;
            default:
                note = "Please note : ";
                break;
        }
        note = note + 'in ' + SYS_FUNCTION_DESC + '\r\n(' + SYS_USER_NAME + ' ' + SYS_DATE + '-' + SYS_TIME + ')\r\n' + message + '\r\n';
        temp = note + document.MAINFORM.TRX_HISTORY.value;
        lines = temp.replace(/\r/g, '').split('\n');
        maxLines = document.MAINFORM.TRX_HISTORY.rows;
        maxChar = document.MAINFORM.TRX_HISTORY.cols;
        templines = lines;
        temptext = '';

        if (maxLines && lines.length > maxLines) {
            templines = lines.slice(0, maxLines);
        }
        for (i = 0; i < templines.length; i++) {
            if (templines[i].length > maxChar) {
                a = templines[i];
                templines[i] = a.substring(0, maxChar);
            }
        }
        lines = templines.join('\n');
        document.MAINFORM.TRX_HISTORY.value = lines;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_BalanceCheck_init() {
    try {

        /*document.MAINFORM.INT_ACT1.value=undefined;
	document.MAINFORM.INT_ACT2.value=undefined;
	document.MAINFORM.INT_ACT3.value=undefined;
	document.MAINFORM.INT_ACT4.value=undefined;
	document.MAINFORM.INT_ACT5.value=undefined; 
	document.MAINFORM.INT_AMT1.value=undefined;
	document.MAINFORM.INT_AMT2.value=undefined;
	document.MAINFORM.INT_AMT3.value=undefined;
	document.MAINFORM.INT_AMT4.value=undefined;
	document.MAINFORM.INT_AMT5.value=undefined;
	document.MAINFORM.INT_ACT1_CCY.value=undefined;
	document.MAINFORM.INT_ACT2_CCY.value=undefined;
	document.MAINFORM.INT_ACT3_CCY.value=undefined;
	document.MAINFORM.INT_ACT4_CCY.value=undefined;
	document.MAINFORM.INT_ACT5_CCY.value=undefined;
	document.MAINFORM.INT_CASH_IND1.value=undefined;
	document.MAINFORM.INT_CASH_IND2.value=undefined;
	document.MAINFORM.INT_CASH_IND3.value=undefined;
	document.MAINFORM.INT_CASH_IND4.value=undefined;
	document.MAINFORM.INT_CASH_IND5.value=undefined;*/
        // overrideindicator
        /*	document.MAINFORM.INT_OVERRIDE_IND1.value=undefined;
	document.MAINFORM.INT_OVERRIDE_IND2.value=undefined;
	document.MAINFORM.INT_OVERRIDE_IND3.value=undefined;
	document.MAINFORM.INT_OVERRIDE_IND4.value=undefined;
	document.MAINFORM.INT_OVERRIDE_IND5.value=undefined;
	document.MAINFORM.INT_OVERRIDE_IND6.value="undefined";*/
        document.MAINFORM.INT_ACT1.value = "";
        document.MAINFORM.INT_AMT1.value = "";
        document.MAINFORM.INT_ACT1_CCY.value = "";
        document.MAINFORM.INT_CASH_IND1.value = "";
        document.MAINFORM.INT_AC_IDENTIFIER.value = "";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = "";
        document.MAINFORM.C_AC_IDENTIFIER.value = "";
        document.MAINFORM.GAPI_IND_FLG.value = "";
        document.MAINFORM.INT_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;

        //if (document.MAINFORM.CHG_CASH_IND.value != 'Yes'){
        document.MAINFORM.INT_ACT1.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + ";";
        document.MAINFORM.INT_AMT1.value = Chg.Screen.getLocalPayChgTotalAmt() + ";";
        //alert("amount"+document.MAINFORM.INT_AMT1.value);
        document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + ";";
        document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.CHG_CASH_IND.value + ";";
        document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + document.MAINFORM.CHG_OVERRIDE_IND.value + ";";
        //document.MAINFORM.CPYT_DR_AC_TYPE.value=document.MAINFORM.CPYT_DR_AC_TYPE.value+"undefined"+";";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + "CUSTOMER" + ";";
        document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + "undefined" + ";";
        document.MAINFORM.INT_ACCOUNTCOUNT.value = 1;

        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        //document.MAINFORM.INT_SW_DETAILS.value=document.MAINFORM.X103_ADV_BKSW_B2.value;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        //document.MAINFORM.INT_FOR_BANK_SW.value= document.MAINFORM.X103_BK2BK_INF1_72.value;

        //}
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_beneaccnonotfound() {
    try {

        //SYS_CheckError(document.MAINFORM.X103_BENECUACNO59A,'The Beneficiary account no not found.');
        //document.MAINFORM.X103_BENECUACNO59A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Cal_BaseEquAmt() {
    try {

        var crAmt; // Utility Auto Fix Comments
        var crCCY; // Utility Auto Fix Comments
        var dbAmt; // Utility Auto Fix Comments
        var dbCCY; // Utility Auto Fix Comments
        var sDbAmt; // Utility Auto Fix Comments
        crAmt = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        dbAmt = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
        crCCY = document.MAINFORM.CR_CCY.value;
        dbCCY = document.MAINFORM.DB_CCY.value;

        if (crAmt > 0) {
            if (crCCY != SYS_LOCAL_CCY) {
                SYS_GetExchangeRate_S(crCCY, SYS_LOCAL_CCY, RATE_TYPE, 'X103_EXCH_RT_36');
                sDbAmt = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.CCY.value, sDbAmt);
            } else {
                document.MAINFORM.DB_AMT.value = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
            }
        } else if (dbAmt > 0) {
            if (dbCCY != SYS_LOCAL_CCY) {
                SYS_GetExchangeRate_S(dbCCY, SYS_LOCAL_CCY, RATE_TYPE, 'X103_EXCH_RT_36');
                sDbAmt = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value); // Utility Auto Fix Comments
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.CCY.value, sDbAmt);
            } else {
                document.MAINFORM.DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
            }
        } else {
            document.MAINFORM.DB_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_CAL_CHG_AMT() {
    try {

        var amt1; // Utility Auto Fix Comments
        var amt2; // Utility Auto Fix Comments
        var chg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        document.MAINFORM.VAT_IND1.value = "N";
        amt1 = 0;
        amt2 = 0;
        for (i = 0; i < Chg.Screen.trx.length; i++) { // Utility Auto Fix Comments
            chg = Chg.Screen.trx[i];
            if (SYS_BeFloat(chg.getPayVatAmt()) > 0) {
                amt1 = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, (chg.getPayAmt() + chg.getPayVatAmt()));
                amt2 = SYS_BeFloat(amt1) + amt2;
                document.MAINFORM.VAT_IND1.value = "Y";
            }
        }
        document.MAINFORM.SECOND_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value, amt2);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Cal_MsgType() {
    try {

        document.MAINFORM.CORR_MSG.value = document.MAINFORM.MT_CATEGORY.value + document.MAINFORM.MT_SUBCAT.value;
        if (document.MAINFORM.CORR_MSG_DI) {
            document.MAINFORM.CORR_MSG_DI.value = document.MAINFORM.MT_CATEGORY_DI.value + document.MAINFORM.MT_SUBCAT_DI.value;
            if (document.MAINFORM.CORR_MSG_DI.value == "MT911") {
                alert("MT911 not a valid SWIFT message type");
                document.MAINFORM.CORR_MSG_DI.value = "";
                document.MAINFORM.MT_CATEGORY_DI.value = "";
                document.MAINFORM.MT_SUBCAT_DI.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Cal_MT_DT_ISN(mtcode, valdate) {
    try {

        var Sys_date; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        Sys_date = getDate(SYS_DATE_FORMAT, valdate);
        year = Sys_date.toString().substr(2, 2);
        month = Sys_date.toString().substr(5, 2);
        day = Sys_date.toString().substr(8, 2);
        document.MAINFORM.MT_DT_ISN.value = mtcode + year + month + day;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkErrorDescription() {
    try {

        var alertmsg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var strArr; // Utility Auto Fix Comments
        alertmsg = "";
        strArr = new Array();
        //to check for the error description in the response
        //alert("document.MAINFORM.INT_RESPONSE.value1"+document.MAINFORM.INT_RESPONSE.value);
        if (document.MAINFORM.INT_RESPONSE.value != "") {
            str = document.MAINFORM.INT_RESPONSE.value;
            strArr = str.split('.END.');
            for (i = 0; i < strArr.length; i++) {
                alertmsg = alertmsg + strArr[i] + "\n";
            }
            alert(alertmsg);
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_BENE_AC_TYPE() {
    try {

        if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
            document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_M";
        } else {
            document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_O";
        }
        SYM_PYMT_Chk_X103_BENECUACNO59A_IBAN();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_BK_CUS_TYPE() {
    try {

        var len; // Utility Auto Fix Comments
        len = document.MAINFORM.BK_CUS_TYPE.length;
        for (i = 0; i < len; i++) {
            if (document.MAINFORM.BK_CUS_TYPE[i].checked) {
                document.MAINFORM.CU_TYPE.value = document.MAINFORM.BK_CUS_TYPE[i].value;
            }
        }
        SYM_PYMT_Clr_Corr_Details();
        SYM_PYMT_Set_Corr_Bank();
        SYM_PYMT_Shw_MPO_MsgType();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_CHG_CASH_IND() {
    try {

        if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
        } else {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "O");
        }
        /* from itt file
	if (document.MAINFORM.CHG_CASH_IND.value == 'Yes'){
		document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
		SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO,"P");
		SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN,"P");
	}else{
		document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
		if(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value != "3"){		
			SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO,"M");
			SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN,"O");
		}
	}
*/
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_Chip_Fed() {
    try {

        var len; // Utility Auto Fix Comments
        len = document.MAINFORM.CHIP_FED.length;
        for (i = 0; i < len; i++) {
            if (document.MAINFORM.CHIP_FED[i].checked) {
                document.MAINFORM.CHIPFED.value = document.MAINFORM.CHIP_FED[i].value;
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_CORRES_TYPE() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        if (document.MAINFORM.CORRES_TYPE.value == "Fax") {
            Sql_Cond1 = "C_MAIN_REF=" + "'" + document.MAINFORM.SEND_CORR_BK_ID.value + "'" + "AND " + "PROD=" + "'" + document.MAINFORM.PROD.value + "'" + "AND " + "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
            Field_List = "FAX_NO1;FAX_NO2;FAX_NO3;FAX_NO4;FAX_NO5";
            Mapping_List = "FAX_NO1;FAX_NO2;FAX_NO3;FAX_NO4;FAX_NO5";
            /* SYS_Get22TableData_S('PROD_SPEC_INFO',Sql_Cond1,Field_List,Mapping_List,true);*/
            document.MAINFORM.EMAIL.value = "";
            document.MAINFORM.FAX_NO.value = "";
            if (document.MAINFORM.FAX_NO1.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO1.value;
            } else if (document.MAINFORM.FAX_NO2.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO2.value;
            } else if (document.MAINFORM.FAX_NO3.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO3.value;
            } else if (document.MAINFORM.FAX_NO4.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO4.value;
            } else if (document.MAINFORM.FAX_NO5.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO5.value;
            }
            if (document.MAINFORM.FAX_NO.value == "") {
                if (document.MAINFORM.SEND_CORR_BK_ID.value != "") {
                    alert("Fax Number not found for this customer");
                }
            }
        } else if (document.MAINFORM.CORRES_TYPE.value == "Email") {
            Sql_Cond2 = "C_MAIN_REF=" + "'" + document.MAINFORM.SEND_CORR_BK_ID.value + "'" + "AND " + "PROD=" + "'" + document.MAINFORM.PROD.value + "'" + "AND " + "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
            Field_List2 = "EMAIL1;EMAIL2;EMAIL3;EMAIL4;EMAIL5";
            Mapping_List2 = "EMAIL1;EMAIL2;EMAIL3;EMAIL4;EMAIL5";
            /* SYS_Get22TableData_S('PROD_SPEC_INFO',Sql_Cond2,Field_List2,Mapping_List2,true);*/
            document.MAINFORM.EMAIL.value = "";
            document.MAINFORM.FAX_NO.value = "";
            if (document.MAINFORM.EMAIL1.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL1.value;
            } else if (document.MAINFORM.EMAIL2.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL2.value;
            } else if (document.MAINFORM.EMAIL3.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL3.value;
            } else if (document.MAINFORM.EMAIL4.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL4.value;
            } else if (document.MAINFORM.EMAIL5.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL5.value;
            }
            if (document.MAINFORM.EMAIL.value == "") {
                if (document.MAINFORM.SEND_CORR_BK_ID.value != "") {
                    alert("Email address not found for this customer");
                }
            }
        } else {
            document.MAINFORM.FAX_NO.value = "";
            document.MAINFORM.EMAIL.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_CORR_MSG() {
    try {

        if (document.MAINFORM.CORR_MSG.value == "MT192" || document.MAINFORM.CORR_MSG.value == "MT292" || document.MAINFORM.CORR_MSG.value == "MT992") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'O');
            SYM_PYMT_clsdisableField(document.MAINFORM.X95_96_QUER_ANS);
            SYM_PYMT_clsdisableField(document.MAINFORM.XN95_96_NARRATIVE);
            SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
            SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
            if (prod == "IT") {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
                if (load_flg == "T") { // Utility Auto Fix Comments
                    SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
                } // Utility Auto Fix Comments

            } else {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'P');
            }
        } else if (document.MAINFORM.CORR_MSG.value == "MT195" || document.MAINFORM.CORR_MSG.value == "MT295" || document.MAINFORM.CORR_MSG.value == "MT995") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'P');
            if (prod == "IT") {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
                if (load_flg == "T") { // Utility Auto Fix Comments
                    SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'P');
            }
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'O');
            SYM_PYMT_enableField(document.MAINFORM.Query_Ans_Button, 'O');
            SYM_PYMT_enableField(document.MAINFORM.NarrButton_95, 'O');
        } else if (document.MAINFORM.CORR_MSG.value == "MT196" || document.MAINFORM.CORR_MSG.value == "MT296" || document.MAINFORM.CORR_MSG.value == "MT996") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'P');
            if (prod == "IT") {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
                if (load_flg == "T") { // Utility Auto Fix Comments
                    SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'P');
            }
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'O');
            SYM_PYMT_enableField(document.MAINFORM.Query_Ans_Button, 'O');
            SYM_PYMT_enableField(document.MAINFORM.NarrButton_95, 'O');
        } else if (document.MAINFORM.CORR_MSG.value == "MT199" || document.MAINFORM.CORR_MSG.value == "MT299" || document.MAINFORM.CORR_MSG.value == "MT999") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'P');
            if (prod == "IT") {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'O');
                if (load_flg == "T") { // Utility Auto Fix Comments
                    SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'P');
            }
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'O');
            SYM_PYMT_clsdisableField(document.MAINFORM.X95_96_QUER_ANS);
            SYM_PYMT_clsdisableField(document.MAINFORM.XN95_96_NARRATIVE);
            SYM_PYMT_clsdisableField(document.MAINFORM.MT_DT_ISN);
            SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
            SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
        } else {
            SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
            SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
            document.MAINFORM.XN95_96_NARRATIVE.value = '';
            document.MAINFORM.X95_96_QUER_ANS.value = '';
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'P');
            if (prod == "IT") {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'O');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'P');
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_CPYT_PAY_COV_MSG() {
    try {

        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "") {
            SYM_PYMT_Dis_2XX_div();
        } else {
            SYM_PYMT_Enb_2XX_Div();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_MT_CATEGORY() {
    try {

        SYM_PYMT_Cal_MsgType();
        SYM_PYMT_Chg_CORR_MSG();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_MT_SUBCAT() {
    try {

        SYM_PYMT_Cal_MsgType();
        SYM_PYMT_Chg_CORR_MSG();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_ORDCU_ID_50A() {
    try {

        if ((document.MAINFORM.X103_ORDCU_ID_50A.value).trim() != "") {
            if (document.MAINFORM.X103_ORDCU_NM_50A.value == '') {
                document.MAINFORM.X103_ORDCU_NM_50A.value = "";
                document.MAINFORM.X103_ORDCUADD1_50A.value = "";
                document.MAINFORM.X103_ORDCUADD2_50A.value = "";
                document.MAINFORM.X103_ORDCUADD3_50A.value = "";
                document.MAINFORM.X103_ORDCUACNO_50A.value = "";
                document.MAINFORM.X103_ORDCU_SW_50A.value = "";
                document.MAINFORM.X103_TAG_50A.value = "";
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "O");
                SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
            }
            if (document.MAINFORM.X103_TAG_50A.value != "F") {
                if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                    if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYM_PYMT_getAccounts()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
                        SYM_PYMT_ProtOrdCust();
                    } else {
                        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYM_PYMT_ProtOrdCust()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
                        SYM_PYMT_ProtOrdCust();
                    }
                } else if (document.MAINFORM.APP_TYPE.value == "BANK") {
                    if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                        SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYM_PYMT_getBanksAccounts()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
                        SYM_PYMT_ProtOrdCust();
                    } else {
                        SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYM_PYMT_ProtOrdCust()', 'SYM_PYMT_Clr_Ord_Cust_RegDD()', 'TRUE');
                    }
                }
            } else {
                alert("Tag 50F is selected. Please input Applicant data as specified by the SWIFT standard");
                document.MAINFORM.X103_ORDCU_ID_50A.value = "";
            }
        } else {
            document.MAINFORM.FAX_INDTY.value = "N/A";
            document.MAINFORM.X103_ORDCU_ID_50A.value = "";
            SYM_PYMT_Clr_Ord_Cust_RegDD();
            SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SEND_CORR_BK_ID() {
    try {

        if (document.MAINFORM.SEND_CORR_BK_ID.value.trim() == '') {
            SYM_PYMT_Clr_Corr_Details();
        } else {
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                SYS_GetCUBK('SEND_CORR_BK_ID', 'SEND_CORR_BK_ID', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_success', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_failure', true);
                SYT_getSWADDFromRef(document.MAINFORM.SEND_CORR_BK_ID, 'SEND_CORR_SW_ADD');
            } else if (document.MAINFORM.CU_TYPE.value == "Customer") {
                SYS_GetCUBK('SEND_CORR_BK_ID_CUST', 'SEND_CORR_BK_ID', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_success1', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_failure1', true);
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SEND_CORR_SW_ADD() {
    try {

        if (document.MAINFORM.SEND_CORR_SW_ADD.value.trim() == '') { //Added---
            SYM_PYMT_Clr_Corr_Details();
        }
        if (document.MAINFORM.SEND_CORR_SW_ADD.value.trim() != '') {
            document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.SEND_CORR_SW_ADD.value.toUpperCase(); // Utility Auto Fix Comments
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                document.MAINFORM.SEND_CORR_BK_ID.value = '';
                document.MAINFORM.SEND_CORR_BK_NM.value = '';
                document.MAINFORM.SEND_CORR_BK_ADD1.value = '';
                document.MAINFORM.SEND_CORR_BK_ADD2.value = '';
                document.MAINFORM.SEND_CORR_BK_ADD3.value = '';
                SYT_getIdFromBIC(document.MAINFORM.SEND_CORR_SW_ADD, document.MAINFORM.SEND_CORR_BK_ID);
                EEHtml.fireEvent(document.MAINFORM.SEND_CORR_BK_ID, 'onchange');
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACC_BKACNO57A() {
    try {

        document.MAINFORM.X103_ACC_BKID_57A.value = "";
        document.MAINFORM.X103_ACC_BKNM_57A.value = "";
        document.MAINFORM.X103_ACCBKADD1_57A.value = "";
        document.MAINFORM.X103_ACCBKADD2_57A.value = "";
        document.MAINFORM.X103_ACCBKADD3_57A.value = "";
        document.MAINFORM.X103_ACC_BKSW_57A.value = "";
        document.MAINFORM.X103_TAG_57A.value = "";
        SYM_PYMT_Clr_All_Banks();
        if (document.MAINFORM.X103_ACC_BKACNO57A.value != '') {
            if (document.MAINFORM.AC_WT_INST_CNTY_CODE.value == '') {
                alert('Please ensure that Account With Institution Country Code is entered before inputing a Bank Payment Code');
                document.MAINFORM.X103_ACC_BKACNO57A.value = '';
                document.MAINFORM.AC_WT_INST_CNTY_CODE.focus();
            } else {
                //SYS_GetDataBySSS('PYMT_X103_ACC_BKID_57A_CHKMORE_TRX', 'X103_ACC_BKACNO57A;AC_WT_INST_CNTY_CODE;CHIPFED', 'AC_WT_INST_ChkForMore','AC_WT_INST_ChkForMore');
                SYM_PYMT_Chk_AC_WT_INST_More();
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACC_BKID_57A() {
    try {

        var SORTCODE; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A', 'SYM_PYMT_Get_CntyName()'); //Get_103Routing
            if (SORTCODE != '') {
                document.MAINFORM.X103_ACC_BKACNO57A.value = SORTCODE;
                SORTCODE = '';
            }
            if (document.MAINFORM.X103_ACC_BKSW_57A.value == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_ACC_BKID_57A, 'X103_ACC_BKSW_57A');
            }
        } else {
            //any string arg will clear all including acct with 103 details, as well as all routing parties
            SYM_PYMT_Clr_All_Banks('clear103');
        }
        if (SYS_FUNCTION_NAME == "CompOutPmt") {
            SYF_PYMT_Field72Checker();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACC_BKSW_57A() {
    try {

        if (document.MAINFORM.X103_ACC_BKSW_57A.value == '') {
            SYM_PYMT_Clr_Acct_With_Ins();
        }
        if (document.MAINFORM.X103_ACC_BKSW_57A.value.trim() != '') {
            document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_ACC_BKSW_57A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X103_ACC_BKID_57A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_ACC_BKID_57A();
        }

        // CFC Compliancy on Field 72 
        if (SYS_FUNCTION_NAME == "CompOutPmt") {
            SYF_PYMT_Field72Checker();
        }

        //MUP TIS Account default
        if (SYS_ORG_FUNCTION_SHORT_NAME == "Proc_Inc_103" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleRec9xx") {
            if (SYF_PYMT_LocalMUP() || SYF_PYMT_LocalTIS()) {
                SYF_PYMT_ITT_MUP_TIS_AccountDefault();
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_BENECUACNO59A() {
    try {

        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_BENECUACNO59A.value != '') {
            /*if (document.MAINFORM.X103_BENECUACNO59A.value.charAt(0) != '/'){
		document.MAINFORM.X103_BENECUACNO59A.value = '/'+document.MAINFORM.X103_BENECUACNO59A.value;
		}*/
            //Chk_X103_BENECUACNO59A();
            SYM_PYMT_Chk_X103_BENECUACNO59A_IBAN();
            /*
            if (document.MAINFORM.BENE_AC_TYPE.value != "IBAN") {
                //SYM_PYMT_Clk_Ben_Cust_lookup();
            }
            */
            if (document.MAINFORM.X103_BENECU_ID_59A.value == "") {
                table = "BENP_EVENT";
                document.MAINFORM.X103_BENECU_ID_59A.value = "";

                strSQLWhere = " where X103_BENECUACNO59A = '" + document.MAINFORM.X103_BENECUACNO59A.value + "' AND C_TRX_STATUS = 'M' AND I_EVENT_TIMES = (select MAX(I_EVENT_TIMES) from eximtrx.benp_LEDGER WHERE c_main_ref = EXIMTRX.BENP_EVENT.C_MAIN_REF)";

                /*SYS_Get22TableData_S(table, strSQLWhere, 'C_MAIN_REF', 'X103_BENECU_ID_59A', 'TRUE');*/

                if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                    SYS_GetCUBK('X103_BENEPROFILE_ID_59A', 'X103_BENECU_ID_59A');
                } else {
                    SYM_PYMT_beneaccnonotfound();
                }
            }
        } else {
            SYM_PYMT_Enb_103_Acct_With_Ins(); // Utility Auto Fix Comments
            SYM_PYMT_Clr_All_Banks('Clear103');
            document.MAINFORM.CPYT_CR_BK_AC.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_BENECU_ID_59A() {
    try {

        var BeneFullName; // Utility Auto Fix Comments
        var BeneSurname; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            SYS_GetCUBK('X103_BENECU_ID_59A', 'X103_BENECU_ID_59A', 'SYM_PYMT_Chg_X103_BENECUACNO59A()', 'true');
            //SYS_GetCUBK('X103_BENEPROFILE_ID_59A','X103_BENECU_ID_59A','SYM_PYMT_Chg_X103_BENECUACNO59A()', 'SYM_PYMT_bene_customer_not_found', 'TRUE');

            table = "BENP_MASTER";
            strSQLWhere = " where C_MAIN_REF = '" + document.MAINFORM.X103_BENECU_ID_59A.value + "'";

            /*SYS_Get22TableData_S(table, strSQLWhere, 'BENE_INITIALS', 'BENEINITIALS', 'TRUE');
		SYS_Get22TableData_S(table, strSQLWhere, 'BENE_SURNAME', 'BENESURNAME', 'TRUE');
		SYS_Get22TableData_S(table, strSQLWhere, 'CUST_TYPE', 'BENECUSTTYPE', 'TRUE');*/

            if (EEHtml.getElementById('BENECUSTTYPE').value.toUpperCase() == "INDIVIDUAL") {
                BeneSurname = EEHtml.getElementById('BENESURNAME').value;
                if (BeneSurname.trim().length > 0) {
                    BeneSurname = BeneSurname.substring(0, 1).toUpperCase() + BeneSurname.substring(1, BeneSurname.length).toLowerCase();
                }
                BeneFullName = EEHtml.getElementById('BENEINITIALS').value.toUpperCase() + ' ' + BeneSurname;
                document.MAINFORM.X103_BENECU_NM_59A.value = BeneFullName;
            }
            SYM_PYMT_Chg_X103_ACC_BKID_57A();
        } else {
            SYM_PYMT_Clr_Ben_Cust();
            SYM_PYMT_Enb_103_Acct_With_Ins();
            SYM_PYMT_Clr_All_Banks('Clear103');
            document.MAINFORM.CPYT_CR_BK_AC.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_BKOP_CODE_23B() {
    try {

        var sTag23BVal; // Utility Auto Fix Comments
        sTag23BVal = document.MAINFORM.X103_BKOP_CODE_23B.value;
        if (sTag23BVal == "SSTD" || sTag23BVal == "SPAY") {
            //document.MAINFORM.X103_INSTRCODE1_23E.value = "";
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_INSTRCODE1_23E);
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE2_23E, "P");
        } else {
            SYM_PYMT_enableField(document.MAINFORM.X103_INSTRCODE1_23E, "O");
            document.MAINFORM.X103_INSTRCODE1_23E.value = "SDVA";
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE2_23E, "O");
            SYM_PYMT_Chg_X103_INSTRCODE1_23E();
        }
        if (sTag23BVal == "CRED" || sTag23BVal == "SPRI" || sTag23BVal == "CRTS") {
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A, "M");
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE2_23E, "O");
        } else {
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A, "O");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_INSTRCODE1_23E() {
    try {

        var sTag23BVal; // Utility Auto Fix Comments
        var sTag23EVal; // Utility Auto Fix Comments
        sTag23BVal = document.MAINFORM.X103_BKOP_CODE_23B.value;
        sTag23EVal = document.MAINFORM.X103_INSTRCODE1_23E.value;
        if (sTag23BVal == "SPRI") {
            if (sTag23EVal !== "SDVA" && sTag23EVal !== "TELB" && sTag23EVal !== "PHOB" && sTag23EVal !== "INTC") {

                alert('Only one of these values SDVA,TELB,PHOB,INTC are allowed for Instruction Code1 23E'); // Utility Auto Fix Comments
                document.MAINFORM.X103_INSTRCODE1_23E.value = "SDVA";
            }
        }
        if (sTag23EVal == 'CHQB') {
            document.MAINFORM.BENE_AC_TYPE.value = "Other";
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_BENECUACNO59A);
        } else {
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A, "O");
        }
        if (sTag23EVal == "PHON" || sTag23EVal == "PHOB" || sTag23EVal == "PHOI" || sTag23EVal == "TELE" || sTag23EVal == "TELB" || sTag23EVal == "TELI" || sTag23EVal == "HOLD" || sTag23EVal == "REPA") {
            SYM_PYMT_enableField(document.MAINFORM.X103_INSTRCODE2_23E, "O");
        } else {
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_INSTRCODE2_23E);
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ORD_BKID_52A() {
    try {

        if (document.MAINFORM.X103_ORD_BKID_52A.value.trim() != "") {
            SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A', '', 'SYM_PYMT_Clr_Ord_Ins()', 'TRUE');
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.trim() == "") {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_ORD_BKID_52A, 'X103_ORD_BKSW_52A');
            }
        } else {
            SYM_PYMT_Clr_Ord_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_RECCHGAMT_71G() {
    try {

        SYT_Chg_NegativeAmt(document.MAINFORM.X103_RECCHGAMT_71G);
        document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, document.MAINFORM.X103_RECCHGAMT_71G.value);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_SENDCHGAMT71F() {
    try {

        SYT_Chg_NegativeAmt(document.MAINFORM.X103_SENDCHGAMT71F);
        document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, document.MAINFORM.X103_SENDCHGAMT71F.value);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_TAG_50A() {
    try {

        var sTag50; // Utility Auto Fix Comments
        sTag50 = document.MAINFORM.X103_TAG_50A.value;
        if (sTag50 == "A") {
            SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCU_NM_50A, "M");
            SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUACNO_50A, "O");
            EEHtml.getElementById('Tag50_AC_Label').innerText = "Account";
        } else if (sTag50 == "K") {
            SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCU_NM_50A, "M");
            SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUACNO_50A, 'O');
            EEHtml.getElementById('Tag50_AC_Label').innerText = "Account";
        } else if (sTag50 == "F") {
            SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCU_NM_50A, "M");
            SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUACNO_50A, "M");
            EEHtml.getElementById('Tag50_AC_Label').innerText = "Party Identifier";
        }
        SYM_PYMT_Chk_Tag50FFormat();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_VALUE_DT_32A() {
    try {

        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        sValDt = document.MAINFORM.X103_VALUE_DT_32A.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.X103_VALUE_DT_32A.value = "";
                getDivByField(document.MAINFORM.X103_VALUE_DT_32A);
                window.focus();
                document.MAINFORM.X103_VALUE_DT_32A.focus();
            }
            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                //if debit country = base currency country, check public holiday using credit currency country
                //if(document.MAINFORM.DB_CCY){
                //if (document.MAINFORM.DB_CCY.value != "") {
                document.MAINFORM.DB_CNTY.value = document.MAINFORM.DB_CCY.value.substring(0, 2);
                if (document.MAINFORM.DB_CCY.value.substring(0, 2) == SYS_BANK_COUNTRY) {
                    //SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name,'','', SYS_BUSI_UNIT,'SYM_PYMT_Chk_SpotDay()','SYM_PYMT_Fail_LocalHoliday()');
                    SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_LocalHoliday()', 'SYM_PYMT_Fail_LocalHoliday()');
                } else {
                    SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Chk_SpotDay()', 'SYM_PYMT_Fail_LocalHoliday()');
                }
                //After applying the Check Holiday rule and Value Date is blank/emtpy, return false - 
                if (document.MAINFORM.X103_VALUE_DT_32A.value == "") {
                    return false;
                }
                //}
                //}			
            }
        } else {
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_XN90_ORD_BKID_52A() {
    try {

        if (document.MAINFORM.XN90_ORD_BKID_52A.value.trim() == '') {
            SYM_PYMT_Clr_MT190_52A();
        } else {
            SYS_GetCUBK('XN90_ORD_BKID_52A', 'XN90_ORD_BKID_52A', '', '', 'TRUE');
            if (document.MAINFORM.XN90_ORD_BKSW_52A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.XN90_ORD_BKID_52A, 'XN90_ORD_BKSW_52A');
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_XN90_ORD_BKSW_52A() {
    try {

        if (document.MAINFORM.XN90_ORD_BKSW_52A.value.trim() != '') {
            document.MAINFORM.XN90_ORD_BKSW_52A.value = document.MAINFORM.XN90_ORD_BKSW_52A.value.toUpperCase();
            document.MAINFORM.XN90_ORD_BKID_52A.value = '';
            document.MAINFORM.XN90_ORD_BKNM_52A.value = '';
            document.MAINFORM.XN90_ORDBKADD1_52A.value = '';
            document.MAINFORM.XN90_ORDBKADD2_52A.value = '';
            document.MAINFORM.XN90_ORDBKADD3_52A.value = '';
            document.MAINFORM.XN90_TAG_52A.value = '';
            SYT_getIdFromBIC(document.MAINFORM.XN90_ORD_BKSW_52A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.XN90_ORD_BKID_52A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            EEHtml.fireEvent(document.MAINFORM.XN90_ORD_BKID_52A, 'onChange');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_XN91_ACC_BKID_57A() {
    try {

        if (document.MAINFORM.XN91_ACC_BKID_57A.value.trim() == '') {
            SYM_PYMT_Clr_MT191_57A();
        } else {
            SYS_GetCUBK('XN91_ACC_BKID_57A', 'XN91_ACC_BKID_57A', '', '', 'TRUE');
            if (document.MAINFORM.INW_X103_RECCORRID_54A.value != "") {
                if (document.MAINFORM.INW_X103_RECCORRID_54A.value == document.MAINFORM.XN91_ACC_BKID_57A.value) {
                    document.MAINFORM.XN91_ACC_BKSW_57A.value = document.MAINFORM.INW_X103_RECCORRSW_54A.value;
                }
            } else if (document.MAINFORM.INW_X103_SENDCORRID53A.value != "") {
                if (document.MAINFORM.INW_X103_SENDCORRID53A.value == document.MAINFORM.XN91_ACC_BKID_57A.value) {
                    document.MAINFORM.XN91_ACC_BKSW_57A.value = document.MAINFORM.INW_X103_SENDCORRSW53A.value;
                }
            }
            if (document.MAINFORM.XN91_ACC_BKSW_57A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.XN91_ACC_BKID_57A, 'XN91_ACC_BKSW_57A');
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_XN91_ACC_BKSW_57A() {
    try {

        if (document.MAINFORM.XN91_ACC_BKSW_57A.value.trim() != '') {
            document.MAINFORM.XN91_ACC_BKSW_57A.value = document.MAINFORM.XN91_ACC_BKSW_57A.value.toUpperCase();
            document.MAINFORM.XN91_ACC_BKID_57A.value = '';
            document.MAINFORM.XN91_ACC_BKNM_57A.value = '';
            document.MAINFORM.XN91_ACCBKADD1_57A.value = '';
            document.MAINFORM.XN91_ACCBKADD2_57A.value = '';
            document.MAINFORM.XN91_ACCBKADD3_57A.value = '';
            document.MAINFORM.XN91_TAG_57A.value = '';
            SYT_getIdFromBIC(document.MAINFORM.XN91_ACC_BKSW_57A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.XN91_ACC_BKID_57A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            //document.MAINFORM.XN91_ACC_BKID_57A.fireEvent('onChange');
            SYM_PYMT_Chg_XN91_ACC_BKID_57A();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_chkRecBIC(objBICFld) {
    try {

        var BICValue; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        BICValue = objBICFld.value.trim();
        BICValueCUBK = BICValue;
        document.MAINFORM.AVAL_WT_BK_ID.value = '';
        //Sql_Cond = "C_SENDER_BANK_ID =" + "'" + SYS_LOGIN_BIC + "' and " + "C_BANK_ID IN (" + "'" + BICValue.substring(0, 4) + "','" + BICValue.substring(0, 6) + "','" + BICValue.substring(0, 8) + "','" + BICValue.substring(0, 11) + "')";
        //Field_List = "C_CORR_ID";
        //Mapping_List = "AVAL_WT_BK_ID";
        SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_chkRecBIC_0', '1', true);
        if (document.MAINFORM.AVAL_WT_BK_ID.value.trim() == '') {
            alert("Test Keys are not available with " + objBICFld.value);
            return false;
        } else {
            document.MAINFORM.AVAL_WT_BK_ID.value = '';
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_AC_WT_INST_More() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var SORTCODE; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = "CNTY_CODE=" + "'" + document.MAINFORM.AC_WT_INST_CNTY_CODE.value + "'" + " AND " + "(ROUT_TYPE=" + "'CHIPS'" + " OR " + "ROUT_TYPE=" + "'NAT_ID'" + ")AND " + "ROUT_CODE=" + "'" + document.MAINFORM.X103_ACC_BKACNO57A.value + "'";
        //Field_List = "C_MAIN_REF";
        //Mapping_List = "X103_ACC_BKID_57A";
        SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_Chk_AC_WT_INST_More_1', '1', true);
        if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
            SORTCODE = document.MAINFORM.X103_ACC_BKACNO57A.value;
            SYM_PYMT_Chg_X103_ACC_BKID_57A();
        } else {
            if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
                if (document.MAINFORM.X103_BENECUACNO59A.value != "") {
                    alert("The entered IBAN could not be parsed.Capture Account with Institution Details"); // Utility Auto Fix Comments
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_BkPartyIds_103() {
    try {

        var sAcctChar; // Utility Auto Fix Comments
        sAcctChar = '/';
        /*
	if (document.MAINFORM.X103_ORDCUACNO_50A.value != ""){				
		if (document.MAINFORM.X103_TAG_50A != "F"){
			if(document.MAINFORM.X103_ORDCUACNO_50A.value.charAt(0) != sAcctChar){
				document.MAINFORM.X103_ORDCUACNO_50A.value = sAcctChar + document.MAINFORM.X103_ORDCUACNO_50A.value;
			}
		}
	}
	*/
        if (document.MAINFORM.X103_BENECUACNO59A.value != "") {
            if (document.MAINFORM.X103_BENECUACNO59A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECUACNO59A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103_ACC_BKACNO57A.value != "") {
            if (document.MAINFORM.X103_ACC_BKACNO57A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103_ACC_BKACNO57A.value = document.MAINFORM.X103_ACC_BKACNO57A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103_MEDIBKACNO56A.value != "") {
            if (document.MAINFORM.X103_MEDIBKACNO56A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103_MEDIBKACNO56A.value = document.MAINFORM.X103_MEDIBKACNO56A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103_ORDBKACNO_52A.value != "") {
            if (document.MAINFORM.X103_ORDBKACNO_52A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103_ORDBKACNO_52A.value = document.MAINFORM.X103_ORDBKACNO_52A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103SENDCORACNO53A.value != "") {
            if (document.MAINFORM.X103SENDCORACNO53A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103SENDCORACNO53A.value = document.MAINFORM.X103SENDCORACNO53A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103RECCORRACNO54A.value != "") {
            if (document.MAINFORM.X103RECCORRACNO54A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103RECCORRACNO54A.value = document.MAINFORM.X103RECCORRACNO54A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103TRDREIMACNO55A.value != "") {
            if (document.MAINFORM.X103TRDREIMACNO55A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103TRDREIMACNO55A.value = document.MAINFORM.X103TRDREIMACNO55A.value.substring(1);
            }
        }
        if (document.MAINFORM.X103_SENDBKACNO51A.value != "") {
            if (document.MAINFORM.X103_SENDBKACNO51A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X103_SENDBKACNO51A.value = document.MAINFORM.X103_SENDBKACNO51A.value.substring(1);
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_BkPartyIds_202() {
    try {

        var sAcctChar; // Utility Auto Fix Comments
        sAcctChar = '/';
        if (document.MAINFORM.X202_BENEBKACNO58A.value != "") {
            if (document.MAINFORM.X202_BENEBKACNO58A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X202_BENEBKACNO58A.value = document.MAINFORM.X202_BENEBKACNO58A.value.substring(1);
            }
        }
        if (document.MAINFORM.X202_ORDBKACNO_52A.value != "") {
            if (document.MAINFORM.X202_ORDBKACNO_52A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X202_ORDBKACNO_52A.value = document.MAINFORM.X202_ORDBKACNO_52A.value.substring(1);
            }
        }
        if (document.MAINFORM.X202SENDCORACNO53A.value != "") {
            if (document.MAINFORM.X202SENDCORACNO53A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X202SENDCORACNO53A.value = document.MAINFORM.X202SENDCORACNO53A.value.substring(1);
            }
        }
        if (document.MAINFORM.X202RECCORRACNO54A.value != "") {
            if (document.MAINFORM.X202RECCORRACNO54A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X202RECCORRACNO54A.value = document.MAINFORM.X202RECCORRACNO54A.value.substring(1);
            }
        }
        if (document.MAINFORM.X202_MEDIBKACNO56A.value != "") {
            if (document.MAINFORM.X202_MEDIBKACNO56A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X202_MEDIBKACNO56A.value = document.MAINFORM.X202_MEDIBKACNO56A.value.substring(1);
            }
        }
        if (document.MAINFORM.X202_ACC_BKACNO57A.value != "") {
            if (document.MAINFORM.X202_ACC_BKACNO57A.value.charAt(0) == sAcctChar) {
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X202_ACC_BKACNO57A.value.substring(1);
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_chk_CrAcctNo() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var sAcctType; // Utility Auto Fix Comments
        /*
        if (document.MAINFORM.X103_SENDCORRID53A.value != '' || document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            ////sAcctType = '';
            if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
                ////sAcctType = 'NOSTRO';
            } else {
                ////sAcctType = 'VOSTRO';
            }
            */
        if (document.MAINFORM.CPYT_CR_BK_AC.value.trim() != '') {
            if (document.MAINFORM.X103_SENDCORRID53A.value.trim() != '') {
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE= '" + sAcctType + "' AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.CPYT_CR_BK_AC.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.X103_SENDCORRID53A.value + "'";
                //Field_List = "C_ACCT_WITH_ID";
                //Mapping_List = "AVAL_WT_BK_ID";
                SYS_GetTableDataByRule('SYM_PYMT_SYM_PYMT_chk_CrAcctNo_2', '1', 'SYM_PYMT_chk_Fail_CrAcctNo()', 'SYM_PYMT_chk_Fail_CrAcctNo()', true);
            } else if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE= '" + sAcctType + "' AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.CPYT_CR_BK_AC.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.X103_ADV_BKID_B2.value + "'";
                //Field_List1 = "C_ACCT_WITH_ID";
                //Mapping_List1 = "AVAL_WT_BK_ID";
                SYS_GetTableDataByRule('SYM_PYMT_SYM_PYMT_chk_CrAcctNo_3', '1', 'SYM_PYMT_chk_Fail_CrAcctNo()', 'SYM_PYMT_chk_Fail_CrAcctNo()', true);


            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_Duplicate_Capt(noOfDaysBack) {
    try {

        var amt; // Utility Auto Fix Comments
        var amtDb; // Utility Auto Fix Comments
        var answer; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var duplicateTrn; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere1; // Utility Auto Fix Comments
        var strSQLWhere2; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, noOfDaysBack, "SEVEN_DAYS_BACK", 'B', 'Y', 'Y');
        ////date = document.MAINFORM.SEVEN_DAYS_BACK.value;
        ////amt = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        ////amtDb = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
        eventName = 'Outward Payments';
        ////table = "PYMT_EVENT";
        document.MAINFORM.DUPLICATE_TRN.value = "";

        if (document.MAINFORM.X103_BENECUACNO59A.value.trim() != "") {
            //strSQLWhere1 = " where C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and ((CR_CCY = '" + document.MAINFORM.CR_CCY.value + "' and cr_calc_amt = '" + amt + "') and  (DB_CCY = '" + document.MAINFORM.DB_CCY.value + "' and DB_CALC_AMT = '" + amtDb + "')) and to_char(D_SYS_OP_DATE, 'YYYY-MM-DD') > '" + date + "' " + " and X103_BENECUACNO59A = '" + document.MAINFORM.X103_BENECUACNO59A.value.trim() + "'" + " and X103_ORDCU_ID_50A = '" + document.MAINFORM.X103_ORDCU_ID_50A.value + "' and c_main_ref <> '" + document.MAINFORM.C_MAIN_REF.value + "' AND I_EVENT_TIMES = (select MAX(I_EVENT_TIMES) from eximtrx.pymt_LEDGER WHERE c_main_ref = EXIMTRX.PYMT_EVENT.C_MAIN_REF ) and CANCEL_FLG <> 'Yes' and APPL_CNTY_RES = '" + SYS_BANK_COUNTRY + "'";
            SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_Chk_Duplicate_Capt_4', '1', 'Y');
        } else {
            //strSQLWhere2 = " where C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and ((CR_CCY = '" + document.MAINFORM.CR_CCY.value + "' and cr_calc_amt = '" + amt + "') and  (DB_CCY = '" + document.MAINFORM.DB_CCY.value + "' and DB_CALC_AMT = '" + amtDb + "')) and to_char(D_SYS_OP_DATE, 'YYYY-MM-DD') > '" + date + "' " + " and X103_ORDCU_ID_50A = '" + document.MAINFORM.X103_ORDCU_ID_50A.value + "' and c_main_ref <> '" + document.MAINFORM.C_MAIN_REF.value + "' AND I_EVENT_TIMES = (select MAX(I_EVENT_TIMES) from eximtrx.pymt_LEDGER WHERE c_main_ref = EXIMTRX.PYMT_EVENT.C_MAIN_REF ) and CANCEL_FLG <> 'Yes' and APPL_CNTY_RES = '" + SYS_BANK_COUNTRY + "'";
            SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_Chk_Duplicate_Capt_5', '1', 'Y');
        }


        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "" || duplicateTrn == document.MAINFORM.C_MAIN_REF.value) {
            return true;
        } else {
            answer = confirm("POSSIBLE DUPLICATE TRANSACTION\r\n\nA transaction has already been issued with similar details under reference - " + duplicateTrn + ".\r\n\nClick OK - If you wish to complete the confirmation of this transaction.\r\nClick Cancel - If you wish to go back to the Complete screen to edit the transaction.");
            if (answer) {
                document.MAINFORM.DUP_CHK.value = 'Yes'; //for audit
                return true;
            } else {
                document.MAINFORM.DUP_CHK.value = 'No'; //for audit
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_chk_Fail_CrAcctNo() {
    try {

        if (document.MAINFORM.CPYT_CR_BK_AC.value.trim() != '') {
            if (document.MAINFORM.X103_SENDCORRID53A.value.trim() != '') {
                if (document.MAINFORM.AVAL_WT_BK_ID.value.trim() != document.MAINFORM.X103_SENDCORRID53A.value.trim()) {
                    SYS_CheckError(document.MAINFORM.CPYT_CR_BK_AC, "Invalid Credit Account Number");
                    document.MAINFORM.CPYT_CR_BK_AC.value = '';
                    document.MAINFORM.AVAL_WT_BK_ID.value = '';
                }
            } else if (document.MAINFORM.X103_ADV_BKID_B2.value.trim() != '') {
                if (document.MAINFORM.AVAL_WT_BK_ID.value.trim() != document.MAINFORM.X103_ADV_BKID_B2.value.trim()) {
                    SYS_CheckError(document.MAINFORM.CPYT_CR_BK_AC, "Invalid Credit Account Number");
                    document.MAINFORM.CPYT_CR_BK_AC.value = '';
                    document.MAINFORM.AVAL_WT_BK_ID.value = '';
                }
            } else {
                SYS_CheckError(document.MAINFORM.CPYT_CR_BK_AC, "Invalid Credit Account Number");
                document.MAINFORM.CPYT_CR_BK_AC.value = '';
                document.MAINFORM.AVAL_WT_BK_ID.value = '';

            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_RefuseReason() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = " WHERE I_EVENT_TIMES in (select max(I_EVENT_TIMES) from eximtrx.pymt_LEDGER WHERE c_main_ref = '" + document.MAINFORM.C_MAIN_REF.value + "') and c_main_ref = '" + document.MAINFORM.C_MAIN_REF.value + "'";
        //Field_List = "C_REFUSE_REASON";
        //Mapping_List = "C_REFUSE_REASON";
        SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_Chk_RefuseReason_6', '1', true);
        if (document.MAINFORM.C_REFUSE_REASON.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_VALUE_DT_32A.value, "M");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_SpotDay() {
    try {

        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var dfinalDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        var sreqDay; // Utility Auto Fix Comments
        var sreqDt; // Utility Auto Fix Comments
        var sreqMon; // Utility Auto Fix Comments
        var sreqYear; // Utility Auto Fix Comments
        document.MAINFORM.CUTOFF_REF.value = SYS_BANK_COUNTRY + document.MAINFORM.CR_CCY.value;
        document.MAINFORM.CCY_CUTOFF_DAY.value = "";
        document.MAINFORM.CUTOFF_DAY.value = "";
        document.MAINFORM.CUTOFF_TIME.value = "";
        sCntyCode = SYS_BANK_COUNTRY;
        SYS_GetCUBK_S('GET_CUTOFF', 'CUTOFF_REF', 'TRUE');
        if (document.MAINFORM.CUTOFF_TIME.value == "") {
            alert('CutOff Time is not loaded for the Selected Currency');
        } else {
            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                if (document.MAINFORM.CCY_CUTOFF_DAY.value == 'Day_Before') {
                    sSysDt = document.MAINFORM.X103_VALUE_DT_32A.value;
                    dSysDt = SYT_GetDateObjectFromStr(sSysDt);
                    SYS_CalEndWorkingDate_S(sCntyCode, document.MAINFORM.X103_VALUE_DT_32A.value, '1', 'TWO_DAYS_BACK', 'B', 'N', 'N');
                    dSysDt = SYT_GetDateObjectFromStr(document.MAINFORM.TWO_DAYS_BACK.value);
                    document.MAINFORM.TWO_DAYS_BACK.value = '';
                    sreqDt = SYS_DateToStr(dSysDt);
                    sreqYear = sreqDt.substring(0, 4) + "-";
                    sreqMon = sreqDt.substring(4, 6) + "-";
                    sreqDay = sreqDt.substring(6, 8);
                    dfinalDt = sreqYear + sreqMon + sreqDay;
                    document.MAINFORM.CUTOFF_DAY.value = dfinalDt;
                } else if (document.MAINFORM.CCY_CUTOFF_DAY.value == 'Today') {
                    document.MAINFORM.CUTOFF_DAY.value = document.MAINFORM.X103_VALUE_DT_32A.value;
                }
            }
        }

        sValDt = document.MAINFORM.X103_VALUE_DT_32A.value;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            sCntyCode = SYS_BANK_COUNTRY;

            //if SA, then spot date calculation is not done using bank country
            //if(SYS_BANK_COUNTRY=="ZA" & SYS_ORG_FUNCTION_SHORT_NAME == "RegOutPmt")
            //{
            //	sCntyCode = document.MAINFORM.DB_CCY.value.substring(0,2);
            //}

            if (document.MAINFORM.DB_CCY.value.substring(0, 2) != SYS_BANK_COUNTRY) {
                if (document.MAINFORM.DB_CCY.value.substring(0, 2) != 'EU') {
                    sCntyCode = document.MAINFORM.DB_CCY.value.substring(0, 2);
                }
            }

            sStDate = SYS_BUSI_DATE;
            spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
            reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
            dSpotDt = SYT_GetDateObjectFromStr(reqDate);
            if (dValDt > dSpotDt) {
                alert("The Value Date cannot be more than Spot");
                document.MAINFORM.X103_VALUE_DT_32A.value = "";
                getDivByField(document.MAINFORM.X103_VALUE_DT_32A);
                window.focus();
                document.MAINFORM.X103_VALUE_DT_32A.focus();
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_SwiftTags_103() {
    try {

        //Tag 52 
        if (document.MAINFORM.X103_ORD_BKNM_52A.value != "") {
            if (document.MAINFORM.X103_ORD_BKSW_52A.value == "") {
                document.MAINFORM.X103_TAG_52A.value = "D"; // Utility Auto Fix Comments
            } else {
                document.MAINFORM.X103_TAG_52A.value = "A"; // Utility Auto Fix Comments
            }
        }

        //Tag 53 
        if (document.MAINFORM.X103_SENDCORRSW53A.value != "") {
            document.MAINFORM.X103_TAG_53A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_SENDCORRNM53A.value != "" && document.MAINFORM.X103SENDCORADD353A.value != "" && document.MAINFORM.X103_SENDCORRSW53A.value == "") {
            document.MAINFORM.X103_TAG_53A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_SENDCORRNM53A.value == "" && document.MAINFORM.X103SENDCORADD253A.value != "" && document.MAINFORM.X103_SENDCORRSW53A.value == "") {
            document.MAINFORM.X103_TAG_53A.value = "B"; // Utility Auto Fix Comments
        }

        //Tag 54
        if (document.MAINFORM.X103_RECCORRSW_54A.value != "") {
            document.MAINFORM.X103_TAG_54A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_RECCORRNM_54A.value != "" && document.MAINFORM.X103_RECCORADD354A.value != "" && document.MAINFORM.X103_RECCORRSW_54A.value == "") {
            document.MAINFORM.X103_TAG_54A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_RECCORRNM_54A.value == "" && document.MAINFORM.X103_RECCORADD254A.value != "" && document.MAINFORM.X103_RECCORRSW_54A.value == "") {
            document.MAINFORM.X103_TAG_54A.value = "B"; // Utility Auto Fix Comments
        }

        //Tag 55
        if (document.MAINFORM.X103_TRDREIMSW_55A.value != "") {
            document.MAINFORM.X103_TAG_55A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_TRDREIMNM_55A.value != "" && document.MAINFORM.X103TRDREIMADD355A.value != "" && document.MAINFORM.X103_TRDREIMSW_55A.value == "") {
            document.MAINFORM.X103_TAG_55A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_TRDREIMNM_55A.value == "" && document.MAINFORM.X103TRDREIMADD255A.value != "" && document.MAINFORM.X103_TRDREIMSW_55A.value == "") {
            document.MAINFORM.X103_TAG_55A.value = "B"; // Utility Auto Fix Comments
        }

        //Tag 56
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value != "") {
            document.MAINFORM.X103_TAG_56A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_MEDI_BKNM_56A.value != "" && document.MAINFORM.X103MEDIBKADD3_56A.value != "" && document.MAINFORM.X103_MEDI_BKSW_56A.value == "") {
            document.MAINFORM.X103_TAG_56A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_MEDI_BKNM_56A.value == "" && document.MAINFORM.X103_MEDIBKACNO56A.value != "" && document.MAINFORM.X103_MEDI_BKSW_56A.value == "") {
            document.MAINFORM.X103_TAG_56A.value = "C"; // Utility Auto Fix Comments
        }

        //Tag 57
        if (document.MAINFORM.X103_ACC_BKSW_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ACC_BKSW_57A.value == "" && document.MAINFORM.X103_ACC_BKNM_57A.value != "" && document.MAINFORM.X103_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ACC_BKSW_57A.value == "" && document.MAINFORM.X103_ACC_BKNM_57A.value == "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "" && document.MAINFORM.X103_ACCBKADD2_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = "B"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ACC_BKSW_57A.value == "" && document.MAINFORM.X103_ACC_BKNM_57A.value == "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "" && document.MAINFORM.X103_ACCBKADD2_57A.value == "") {
            document.MAINFORM.X103_TAG_57A.value = "C"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_Tag50FFormat() {
    try {

        var ChkCntyCode; // Utility Auto Fix Comments
        var Chk_Tag50_Date; // Utility Auto Fix Comments
        var PICode; // Utility Auto Fix Comments
        var nUsedNums; // Utility Auto Fix Comments
        var rawPartyIdentifier; // Utility Auto Fix Comments
        var sFieldPrefix1Char; // Utility Auto Fix Comments
        var sFieldPrefix2Char; // Utility Auto Fix Comments
        var sFieldTitle; // Utility Auto Fix Comments
        var sOrdCustArr; // Utility Auto Fix Comments
        var sTag50FMainCode; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_TAG_50A.value != "F") { // Utility Auto Fix Comments
            return; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        sOrdCustArr = new Array('X103_ORDCU_NM_50A', 'X103_ORDCUADD1_50A', 'X103_ORDCUADD2_50A', 'X103_ORDCUADD3_50A');
        nUsedNums = new Array();
        //sFieldPrefix2Char = new String();
        //sFieldPrefix1Char = new String();
        sTag50FMainCode = new RegExp("/[12345678][\\/]/"); // Utility Auto Fix Comments





        for (i = 0; i < sOrdCustArr.length; i++) {
            sFieldPrefix2Char = document.MAINFORM.elements[sOrdCustArr[i]].value.substring(0, 2);
            sFieldTitle = document.MAINFORM.elements[sOrdCustArr[i]].title;
            if (sFieldPrefix2Char == "") { // Utility Auto Fix Comments
                continue; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments

            if (sTag50FMainCode.test(sFieldPrefix2Char)) { /*if the 2 field prefix is correct*/
                sFieldPrefix1Char = sFieldPrefix2Char.substring(0, 1); //get Number
                if (nUsedNums.length > 0) { //check to see if the number isnt used already
                    for (j = 0; j < nUsedNums.length; j++) {
                        if (nUsedNums[j] == sFieldPrefix1Char) {
                            alert('The number prefix of ' + sFieldTitle + ' is being used already');
                            document.MAINFORM.elements[sOrdCustArr[i]].value = document.MAINFORM.elements[sOrdCustArr[i]].value.substring(1);
                            return;
                        }
                    }
                }
                nUsedNums.push(sFieldPrefix1Char); //if loop check is ok add the number

                switch (sFieldPrefix1Char) {
                    case '3':
                        if (!ChkCntyCode(document.MAINFORM.elements[sOrdCustArr[i]].value.substring(2, 4))) {
                            alert('The country code for SWIFT entry 3/ in ' + sFieldTitle + ' (characters 3 and 4) is not valid.');
                        }
                        break;
                    case '4':
                        if (document.MAINFORM.elements[sOrdCustArr[i]].value.length != 10) {
                            alert('The date for SWIFT entry 4/ in ' + sFieldTitle + ' is not valid');
                        } else {
                            Chk_Tag50_Date(document.MAINFORM.elements[sOrdCustArr[i]].value.substring(2));
                        }
                        break;
                    case '5':
                        if (!ChkCntyCode(document.MAINFORM.elements[sOrdCustArr[i]].value.substring(2, 4))) {
                            alert('The country code for SWIFT entry 5/ in ' + sFieldTitle + ' (characters 3 and 4) is not valid.');
                        }
                        break;
                    case '6':
                        if (!ChkCntyCode(document.MAINFORM.elements[sOrdCustArr[i]].value.substring(2, 4))) {
                            alert('The country code for SWIFT entry 6/ in ' + sFieldTitle + ' (characters 3 and 4) is not valid.');
                        }
                        break;
                    case '7':
                        if (!ChkCntyCode(document.MAINFORM.elements[sOrdCustArr[i]].value.substring(2, 4))) {
                            alert('The country code for SWIFT entry 7/ in ' + sFieldTitle + ' (characters 3 and 4) is not valid.');
                        }
                        break;
                }
            } else {
                alert("Please make sure " + sFieldTitle + " has the correct number/ prefix");
                return;
            }

            //Party Identifier Options:
            rawPartyIdentifier = document.MAINFORM.X103_ORDCUACNO_50A.value;
            if (rawPartyIdentifier != '') {
                PICode = rawPartyIdentifier.substring(0, 5);
                if (PICode == 'ARNU/' || PICode == 'CCPT/' || PICode == 'CUST/' || PICode == 'DRLC/' || PICode == 'EMPL/' || PICode == 'NIDN/' || PICode == 'SOSE/' || PICode == 'TXID/') {
                    if (!ChkCntyCode(rawPartyIdentifier(5, 7))) {
                        alert('The country code for SWIFT entry Party Identifier (characters 6 and 7) is not valid.');
                    }
                } else if (PICode != 'IBEI/' && rawPartyIdentifier.charAt(0) != '/') {
                    alert('The SWIFT entry for Party Identifier (characters 1 to 5) is not valid.');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_ValDt_Rel() {
    try {

        var cntyCode; // Utility Auto Fix Comments
        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        cntyCode = SYS_BANK_COUNTRY;
        sValDt = document.MAINFORM.X103_VALUE_DT_32A.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past.This transaction cannot be released");
                return false;
            }
            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                //SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name,'','', SYS_BUSI_UNIT,'SYM_PYMT_Succ_LocalHoliday()','SYM_PYMT_Fail_LocalHoliday()');

                // Apply the standard Value Date validations
                if (document.MAINFORM.DB_CCY.value != "") {
                    document.MAINFORM.DB_CNTY.value = document.MAINFORM.DB_CCY.value.substring(0, 2);
                    if (document.MAINFORM.DB_CCY.value.substring(0, 2) == SYS_BANK_COUNTRY) {
                        //SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name,'','', SYS_BUSI_UNIT,'SYM_PYMT_Chk_SpotDay()','SYM_PYMT_Fail_LocalHoliday()');
                        SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_LocalHoliday()', 'SYM_PYMT_Fail_LocalHoliday()');
                    } else {
                        SYS_CheckHoliday('DB_CNTY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Chk_SpotDay()', 'SYM_PYMT_Fail_LocalHoliday()');
                    }
                    //After applying the Check Holiday rule ABOVE and Value Date is blank/emtpy/resetted, return false
                    if (document.MAINFORM.X103_VALUE_DT_32A.value == "") {
                        return false;
                    }
                }
            }
        }

        //getCutOffDetails();
        SYM_PYMT_Get_CutOff();
        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
        reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
        dSpotDt = SYT_GetDateObjectFromStr(reqDate);
        if (dValDt > dSpotDt) {
            alert("The Value Date cannot be more than Spot");
            EEHtml.getElementById("A").click();
            document.MAINFORM.X103_VALUE_DT_32A.focus();
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_ValueDate_CutOffTime() {
    try {

        var CutOffDt; // Utility Auto Fix Comments
        var SysDt; // Utility Auto Fix Comments
        var cutOffDayDesc; // Utility Auto Fix Comments
        var dCutOffDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var nCutOffTime; // Utility Auto Fix Comments
        var nSysTime; // Utility Auto Fix Comments
        var sCutOffDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        sValDt = document.MAINFORM.X103_VALUE_DT_32A.value;
        sCutOffDt = document.MAINFORM.CUTOFF_DAY.value;
        nSysTime = SYS_TIME;
        nCutOffTime = document.MAINFORM.CUTOFF_TIME.value;
        if (sValDt != "" && sCutOffDt != "" && nCutOffTime != "") {
            dCutOffDt = SYT_GetDateObjectFromStr(sCutOffDt);
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            sSysDt = SYS_BUSI_DATE;
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            SysDt = new Date(dSysDt.getFullYear(), dSysDt.getMonth(), dSysDt.getDate(), nSysTime.substring(0, 2), nSysTime.substring(3, 5), nSysTime.substring(6, 8));
            CutOffDt = new Date(dCutOffDt.getFullYear(), dCutOffDt.getMonth(), dCutOffDt.getDate(), nCutOffTime.substring(0, 2), nCutOffTime.substring(2, 4), 0);
            if (SysDt > CutOffDt) {
                cutOffDayDesc = '';
                if (document.MAINFORM.CCY_CUTOFF_DAY.value == 'Day_Before') {
                    cutOffDayDesc = "yesterday";
                } else if (document.MAINFORM.CCY_CUTOFF_DAY.value == 'Today') {
                    cutOffDayDesc = "today";
                }
                alert("The Cut Off time of the Currency is " + nCutOffTime.substring(0, 2) + ":" + nCutOffTime.substring(2) + " Hrs " + cutOffDayDesc + ". Hence please change Value Date");
                document.MAINFORM.X103_VALUE_DT_32A.value = "";
                getDivByField(document.MAINFORM.X103_VALUE_DT_32A);
                window.focus();
                document.MAINFORM.X103_VALUE_DT_32A.focus();
                return false;
            } else {
                document.MAINFORM.CUTOFF_DAY.value = SYT_DateFormat(CutOffDt);
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_X103_BENECUACNO59A_IBAN() {
    try {

        var BankCode; // Utility Auto Fix Comments
        var Check_UnderInvestigation; // Utility Auto Fix Comments
        var nInc; // Utility Auto Fix Comments
        var nInit; // Utility Auto Fix Comments
        var nRes; // Utility Auto Fix Comments
        var sChkIBAN; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sTmpIBAN; // Utility Auto Fix Comments
        var sTmpval; // Utility Auto Fix Comments
        var sValBenAcct; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_BENECUACNO59A.value.length == 0) {
            return;
        }
        if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {


            sValBenAcct = document.MAINFORM.X103_BENECUACNO59A.value.toUpperCase().replace(/\W*/g, ''); //remove anything that is not an alphanumeric word character
            sCntyCode = sValBenAcct.substring(0, 2);
            sChkIBAN = sValBenAcct.substring(4);
            sChkIBAN = sChkIBAN + sValBenAcct.substring(0, 4);
            sTmpIBAN = "";

            for (i = 0; i < sChkIBAN.length; i++) {
                sTmpIBAN = sTmpIBAN + SYM_PYMT_Get_IbanNumFromAlpha(sChkIBAN.charAt(i));
            }

            //routine that checks the conformity of the iban string
            nInit = 0;
            nInc = 9;
            nRes = "";
            while (sTmpIBAN.substring(nInit, nInc + nInit).length > 0) {
                sTmpval = nRes + sTmpIBAN.substring(nInit, nInc + nInit);
                nInit = nInit + nInc;
                nRes = sTmpval % 97;
                nInc = 7;
            }

            if (nRes != 1) {
                alert("The IBAN cannot be validated as some of the elements are wrong.");
                document.MAINFORM.ORIG_IBAN_VALID.value = 'THE ACCOUNT NUMBER CANNOT BE VALIDATED AS AN IBAN';
                //SetTrxHistory();
                document.MAINFORM.X103_BENECUACNO59A.value = '';
                SYM_PYMT_Enb_103_Acct_With_Ins();
                SYM_PYMT_Clr_All_Banks('Clear103');
            } else {
                SYM_PYMT_Clr_All_Banks('Clear103');
                document.MAINFORM.ORIG_IBAN_VALID.value = '';
                document.MAINFORM.BENE_AC_TYPE.value = "IBAN";
                //SetTrxHistory();
                SYM_PYMT_Get_BankIdent(sCntyCode, sValBenAcct);
            }
        } else {
            return;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Ben_Cust_lookup() {
    try {

        var beneAccNo; // Utility Auto Fix Comments
        var beneAdd1; // Utility Auto Fix Comments
        var beneAdd2; // Utility Auto Fix Comments
        var beneAdd3; // Utility Auto Fix Comments
        var beneName; // Utility Auto Fix Comments
        var unitcode; // Utility Auto Fix Comments
        SYS_InqCUBK_byCondition('X103_BENECU_ID_59A', '1');
        /*
beneName = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
beneAdd1 = document.MAINFORM.X103BENECUADD1_59A.value.trim();
beneAdd2 = document.MAINFORM.X103BENECUADD2_59A.value.trim();
beneAdd3 = document.MAINFORM.X103BENECUADD3_59A.value.trim();
beneAccNo = document.MAINFORM.X103_BENECUACNO59A.value.trim();

unitcode = SYS_ORI_UNIT_CODE;
if(beneName != "" | beneAccNo != ""){
	if(beneName != ""){
		SYS_InqCUBK_Sql('X103_BENEPROFILE_ID_59A', SYM_PYMT_SearchLookUp(new Array('X103_BENECU_NM_59A','X103_BENECU_NM_59A','X103_BENECU_NM_59A','X103_BENECU_NM_59A','X103BENECUADD1_59A','X103BENECUADD1_59A','X103BENECUADD2_59A','X103BENECUADD2_59A','X103BENECUADD3_59A','X103BENECUADD3_59A','C_TRX_STATUS','M')));		
		//SYS_GetCUBK_S('X103_BENEPROFILE_ID_59A', 'X103_BENECUACNO59A','TRUE');
	}else if( beneAccNo != ""){
		SYS_InqCUBK_Sql('X103_BENEPROFILE_ID_59A', SYM_PYMT_SearchLookUp(new Array('X103_BENECUACNO59A','X103_BENECUACNO59A','X103_BENECUACNO59A','X103_BENECUACNO59A','X103BENECUADD1_59A','X103BENECUADD1_59A','X103BENECUADD2_59A','X103BENECUADD2_59A','X103BENECUADD3_59A','X103BENECUADD3_59A','C_TRX_STATUS','M')));		
		//SYS_GetCUBK_S('X103_BENEPROFILE_ID_59A', 'X103_BENECU_NM_59A','TRUE');
	}
}else{
	alert("Search is not possible without Beneficiary Name or Account No");
}
*/
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_103_Banks(sForceClr103) {
    try {

        document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        document.MAINFORM.X202_ADV_BKID_B2.value = "";
        if (sForceClr103 != null) {
            document.MAINFORM.AC_WT_INST_CNTY_CODE.value = "";
            document.MAINFORM.AC_WT_INST_CNTY_NM.value = "";
            document.MAINFORM.X103_ACC_BKID_57A.value = "";
            SYM_PYMT_Clr_Acct_With_Ins();
        }
        SYM_PYMT_Clr_Rec_Bank();
        SYM_PYMT_Clr_Int_Ins();
        SYM_PYMT_Clr_Send_Corres();
        SYM_PYMT_Clr_Rec_Corres();
        SYM_PYMT_Clr_Send_Ins();
        SYM_PYMT_Clr_Thd_Reim_Ins();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Acct_With_Ins() {
    try {

        document.MAINFORM.X202_ACC_BKID_57A.value = "";
        document.MAINFORM.X202_ACC_BKNM_57A.value = "";
        document.MAINFORM.X202_ACCBKADD1_57A.value = "";
        document.MAINFORM.X202_ACCBKADD2_57A.value = "";
        document.MAINFORM.X202_ACCBKADD3_57A.value = "";
        document.MAINFORM.X202_ACC_BKACNO57A.value = "";
        document.MAINFORM.X202_ACC_BKSW_57A.value = "";
        document.MAINFORM.X202_TAG_57A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Ben_Ins() {
    try {

        document.MAINFORM.X202_BENE_BKID_58A.value = "";
        document.MAINFORM.X202_BENE_BKNM_58A.value = "";
        document.MAINFORM.X202BENEBKADD1_58A.value = "";
        document.MAINFORM.X202BENEBKADD2_58A.value = "";
        document.MAINFORM.X202BENEBKADD3_58A.value = "";
        document.MAINFORM.X202_BENE_BKSW_58A.value = "";
        document.MAINFORM.X202_BENEBKACNO58A.value = "";
        document.MAINFORM.X202_TAG_58A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Int_Ins() {
    try {

        document.MAINFORM.X202_MEDI_BKID_56A.value = "";
        document.MAINFORM.X202_MEDI_BKNM_56A.value = "";
        document.MAINFORM.X202MEDIBKADD1_56A.value = "";
        document.MAINFORM.X202MEDIBKADD2_56A.value = "";
        document.MAINFORM.X202MEDIBKADD3_56A.value = "";
        document.MAINFORM.X202_MEDI_BKSW_56A.value = "";
        document.MAINFORM.X202_MEDIBKACNO56A.value = "";
        document.MAINFORM.X202_TAG_56A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Ord_Ins() {
    try {

        document.MAINFORM.X202_ORDBK_ID_52A.value = "";
        document.MAINFORM.X202_ORDBK_NM_52A.value = "";
        document.MAINFORM.X202_ORDBKADD1_52A.value = "";
        document.MAINFORM.X202_ORDBKADD2_52A.value = "";
        document.MAINFORM.X202_ORDBKADD3_52A.value = "";
        document.MAINFORM.X202_ORDBK_SW_52A.value = "";
        document.MAINFORM.X202_ORDBKACNO_52A.value = "";
        document.MAINFORM.X202_TAG_52A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Rec_Bank() {
    try {

        document.MAINFORM.X202_ADV_BKID_B2.value = "";
        document.MAINFORM.X202_ADV_BKNM_B2.value = "";
        document.MAINFORM.X202_ADV_BKADD1_B2.value = "";
        document.MAINFORM.X202_ADV_BKADD2_B2.value = "";
        document.MAINFORM.X202_ADV_BKADD3_B2.value = "";
        document.MAINFORM.X202_ADV_BKSW_B2.value = "";
        document.MAINFORM.X202_ADV_BKMED_B2.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Rec_Corres() {
    try {

        document.MAINFORM.X202_RECCORRID_54A.value = "";
        document.MAINFORM.X202_RECCORRNM_54A.value = "";
        document.MAINFORM.X202_RECCORADD154A.value = "";
        document.MAINFORM.X202_RECCORADD254A.value = "";
        document.MAINFORM.X202_RECCORADD354A.value = "";
        document.MAINFORM.X202_SENDCORRSW53A.value = "";
        document.MAINFORM.X202_TAG_54A.value = "";
        document.MAINFORM.X202_RECCORRSW_54A.value = "";
        document.MAINFORM.X202RECCORRACNO54A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_202_Send_Corres() {
    try {

        document.MAINFORM.X202_SENDCORRID53A.value = "";
        document.MAINFORM.X202_SENDCORRNM53A.value = "";
        document.MAINFORM.X202SENDCORADD153A.value = "";
        document.MAINFORM.X202SENDCORADD253A.value = "";
        document.MAINFORM.X202SENDCORADD353A.value = "";
        document.MAINFORM.X202SENDCORACNO53A.value = "";
        document.MAINFORM.X202_SENDCORRSW53A.value = "";
        document.MAINFORM.X202_TAG_53A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Acct_With_Ins() {
    try {

        document.MAINFORM.X103_ACC_BKID_57A.value = "";
        document.MAINFORM.X103_ACC_BKNM_57A.value = "";
        document.MAINFORM.X103_ACCBKADD1_57A.value = "";
        document.MAINFORM.X103_ACCBKADD2_57A.value = "";
        document.MAINFORM.X103_ACCBKADD3_57A.value = "";
        document.MAINFORM.X103_ACC_BKACNO57A.value = "";
        document.MAINFORM.X103_ACC_BKSW_57A.value = "";
        document.MAINFORM.X103_TAG_57A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_All_202_Banks() {
    try {

        SYM_PYMT_Clr_202_Acct_With_Ins();
        SYM_PYMT_Clr_202_Ben_Ins();
        SYM_PYMT_Clr_202_Int_Ins();
        SYM_PYMT_Clr_202_Ord_Ins();
        SYM_PYMT_Clr_202_Rec_Bank();
        SYM_PYMT_Clr_202_Rec_Corres();
        SYM_PYMT_Clr_202_Send_Corres();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_All_Banks(sForceClr103) {
    try {

        SYM_PYMT_Clr_103_Banks(); // Utility Auto Fix Comments
        SYM_PYMT_Clr_All_202_Banks(); // Utility Auto Fix Comments
        //Clr_Orig_Routing_Banks();
        if (sForceClr103 != null) {
            SYM_PYMT_Clr_103_Banks(sForceClr103);
            SYM_PYMT_Clr_All_202_Banks(); // Utility Auto Fix Comments
            //Clr_Orig_Routing_Banks();
        }
        document.MAINFORM.CPYT_CR_BK_AC.value = '';
        document.MAINFORM.X202_BENE_BKSW_58A.className = "CHAR_P";
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        SYM_PYMT_Enb_103_Acct_With_Ins();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Ben_Cust() {
    try {

        document.MAINFORM.X103_BENECU_ID_59A.value = "";
        document.MAINFORM.X103_BENECU_NM_59A.value = "";
        document.MAINFORM.X103BENECUADD1_59A.value = "";
        document.MAINFORM.X103BENECUADD2_59A.value = "";
        document.MAINFORM.X103BENECUADD3_59A.value = "";
        document.MAINFORM.X103_TAG_59A.value = "";
        document.MAINFORM.BENE_CNTY_RES.value = "";
        document.MAINFORM.X103_BENECU_SW_59A.value = "";
        document.MAINFORM.X103_BENECUACNO59A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Corr_Details() {
    try {

        document.MAINFORM.SEND_CORR_BK_ID.value = "";
        document.MAINFORM.SEND_CORR_BK_NM.value = "";
        document.MAINFORM.SEND_CORR_BK_ADD1.value = "";
        document.MAINFORM.SEND_CORR_BK_ADD2.value = "";
        document.MAINFORM.SEND_CORR_BK_ADD3.value = "";
        document.MAINFORM.SEND_CORR_SW_TAG.value = "";
        document.MAINFORM.SEND_CORR_SW_ADD.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Int_Ins() {
    try {

        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        document.MAINFORM.X103_MEDI_BKNM_56A.value = "";
        document.MAINFORM.X103MEDIBKADD1_56A.value = "";
        document.MAINFORM.X103MEDIBKADD2_56A.value = "";
        document.MAINFORM.X103MEDIBKADD3_56A.value = "";
        document.MAINFORM.X103_MEDI_BKSW_56A.value = "";
        document.MAINFORM.X103_MEDIBKACNO56A.value = "";
        document.MAINFORM.X103_TAG_56A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_MT190_52A() {
    try {

        if (document.MAINFORM.XN90_ORD_BKID_52A.value.trim() == "") {
            document.MAINFORM.XN90_ORD_BKNM_52A.value = "";
            document.MAINFORM.XN90_ORDBKADD1_52A.value = "";
            document.MAINFORM.XN90_ORDBKADD2_52A.value = "";
            document.MAINFORM.XN90_ORDBKADD3_52A.value = "";
            document.MAINFORM.XN90_ORDBKACNO_52A.value = "";
            document.MAINFORM.XN90_TAG_52A.value = "";
            document.MAINFORM.XN90_ORD_BKSW_52A.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_MT191_57A() {
    try {

        if (document.MAINFORM.XN91_ACC_BKID_57A.value == "") {
            document.MAINFORM.XN91_ACC_BKNM_57A.value = "";
            document.MAINFORM.XN91_ACCBKADD1_57A.value = "";
            document.MAINFORM.XN91_ACCBKADD2_57A.value = "";
            document.MAINFORM.XN91_ACCBKADD3_57A.value = "";
            document.MAINFORM.XN91_ACC_BKACNO57A.value = "";
            document.MAINFORM.XN91_TAG_57A.value = "";
            document.MAINFORM.XN91_ACC_BKSW_57A.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Ord_Cust_RegDD() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            alert("The Customer Id is invalid"); // Utility Auto Fix Comments
        }

        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";

        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, "O");
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Ord_Ins() {
    try {

        document.MAINFORM.X103_ORD_BKID_52A.value = "";
        document.MAINFORM.X103_ORD_BKNM_52A.value = "";
        document.MAINFORM.X103_ORDBKADD1_52A.value = "";
        document.MAINFORM.X103_ORDBKADD2_52A.value = "";
        document.MAINFORM.X103_ORDBKADD3_52A.value = "";
        document.MAINFORM.X103_ORDBKACNO_52A.value = "";
        document.MAINFORM.X103_ORD_BKSW_52A.value = "";
        document.MAINFORM.X103_TAG_52A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Rec_Bank() {
    try {

        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        document.MAINFORM.X103_ADV_BKNM_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
        document.MAINFORM.X103_ADV_BKSW_B2.value = "";
        document.MAINFORM.X103_TAG_B2.value = "";
        if (SYS_FUNCTION_NAME != 'Proc_Inc_103' || SYS_FUNCTION_NAME != 'Settle_after_Receive9xx') {
            //SYM_PYMT_setRecChgs();
            SYF_PYMT_Chg_X103_DET_CHG_71A();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Rec_Corres() {
    try {

        document.MAINFORM.X103_RECCORRID_54A.value = "";
        document.MAINFORM.X103_RECCORRNM_54A.value = "";
        document.MAINFORM.X103_RECCORADD154A.value = "";
        document.MAINFORM.X103_RECCORADD254A.value = "";
        document.MAINFORM.X103_RECCORADD354A.value = "";
        document.MAINFORM.X103_RECCORRSW_54A.value = "";
        document.MAINFORM.X103RECCORRACNO54A.value = "";
        document.MAINFORM.X103_TAG_54A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Send_Corres() {
    try {

        document.MAINFORM.X103_SENDCORRID53A.value = "";
        document.MAINFORM.X103_SENDCORRNM53A.value = "";
        document.MAINFORM.X103SENDCORADD153A.value = "";
        document.MAINFORM.X103SENDCORADD253A.value = "";
        document.MAINFORM.X103SENDCORADD353A.value = "";
        document.MAINFORM.X103SENDCORACNO53A.value = "";
        document.MAINFORM.X103_SENDCORRSW53A.value = "";
        document.MAINFORM.X103_TAG_53A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Send_Ins() {
    try {

        document.MAINFORM.X103_SEND_BKID_51A.value = "";
        document.MAINFORM.X103_SEND_BKNM_51A.value = "";
        document.MAINFORM.X103SENDBKADD1_51A.value = "";
        document.MAINFORM.X103SENDBKADD2_51A.value = "";
        document.MAINFORM.X103SENDBKADD3_51A.value = "";
        document.MAINFORM.X103_SEND_BKSW_51A.value = "";
        document.MAINFORM.X103_SENDBKACNO51A.value = "";
        document.MAINFORM.X103_TAG_51A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Thd_Reim_Ins() {
    try {

        document.MAINFORM.X103_TRDREIMID_55A.value = "";
        document.MAINFORM.X103_TRDREIMNM_55A.value = "";
        document.MAINFORM.X103TRDREIMADD155A.value = "";
        document.MAINFORM.X103TRDREIMADD255A.value = "";
        document.MAINFORM.X103TRDREIMADD355A.value = "";
        document.MAINFORM.X103TRDREIMACNO55A.value = "";
        document.MAINFORM.X103_TRDREIMSW_55A.value = "";
        document.MAINFORM.X103_TAG_55A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_clsdisableField(oField) {
    try {

        SYM_PYMT_SYT_clsdisableField(oField);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Copy50Fvalues() {
    try {

        document.MAINFORM.X103_ORDCUACNO_50F.value = '';
        document.MAINFORM.X103_ORDCUADD1_50F.value = '';
        document.MAINFORM.X103_ORDCUADD2_50F.value = '';
        document.MAINFORM.X103_ORDCUADD3_50F.value = '';
        document.MAINFORM.X103_ORDCU_NM_50F.value = '';

        document.MAINFORM.X103_ORDCU_NM_50F.value = document.MAINFORM.X103_ORDCU_NM_50A.value;
        document.MAINFORM.X103_ORDCUADD1_50F.value = document.MAINFORM.X103_ORDCUADD1_50A.value;
        document.MAINFORM.X103_ORDCUADD2_50F.value = document.MAINFORM.X103_ORDCUADD2_50A.value;
        document.MAINFORM.X103_ORDCUADD3_50F.value = document.MAINFORM.X103_ORDCUADD3_50A.value;
        document.MAINFORM.X103_ORDCUACNO_50F.value = document.MAINFORM.X103_ORDCUACNO_50A.value;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_disableField(oField) {
    try {

        var sClass; // Utility Auto Fix Comments
        var typeName; // Utility Auto Fix Comments
        if (!oField) { // Utility Auto Fix Comments
            return; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        sClass = oField.className;
        sClass = sClass.substr(0, (sClass.length - 1)) + 'P';
        oField.className = sClass;
        typeName = oField.type;
        if (typeName == "select-one" || typeName == "button" || typeName == "checkbox" || typeName == "radio") {
            oField.disabled = true;
        } else {
            oField.readOnly = true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Dis_2XX_div() {
    try {

        if (SYS_ORG_FUNCTION_NAME != 'Proc_Inc_103' || SYS_ORG_FUNCTION_NAME != 'Settle_after_Receive9xx') {
            SYT_DisableDiv("F_div");
            SYT_DisableDiv("G_div"); // Utility Auto Fix Comments
        } else {
            SYT_DisableDiv("Main_2xx"); // Utility Auto Fix Comments
            SYT_DisableDiv("Main_2xx_Details"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_enableField(oField, sStatus) {
    try {

        SYM_PYMT_SYT_enableField(oField, sStatus);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Enb_103_Acct_With_Ins() {
    try {

        if (document.MAINFORM.X103_BENECUACNO59A.value == "" || parseInt(document.MAINFORM.ACCT103_DUP.value, 0) > 1) {
            SYM_PYMT_enableField(document.MAINFORM.X103_ACC_BKID_57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_57A_BTN, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_ACC_BKNM_57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_ACCBKADD1_57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_ACCBKADD2_57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_ACCBKADD3_57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_ACC_BKACNO57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_TAG_57A, 'O');
            SYM_PYMT_enableField(document.MAINFORM.X103_ACC_BKSW_57A, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Enb_2XX_Div() {
    try {

        if (SYS_FUNCTION_NAME != 'Proc_Inc_103' || SYS_FUNCTION_NAME != 'Settle_after_Receive9xx') {
            SYT_EnableDivClass("F_div");
            SYT_EnableDivClass("G_div");
        } else {
            SYT_EnableDivClass("Main_2xx"); // Utility Auto Fix Comments
            SYT_EnableDivClass("Main_2xx_Details"); // Utility Auto Fix Comments
        }
        SYM_PYMT_Set_202Values();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Fail_LocalHoliday() {
    try {

        if (SYS_ORG_FUNCTION_NAME == "ProcessMT102") { //Added
            document.MAINFORM.X102_32A_DATE.value = "";
            getDivByField(document.MAINFORM.X102_32A_DATE);
            window.focus();
            document.MAINFORM.X102_32A_DATE.focus();
            return;
        }
        if (SYS_ORG_FUNCTION_NAME == "ProcessMT201") { //vadd
            document.MAINFORM.X203_30_VALUE_DATE.value = "";
            getDivByField(document.MAINFORM.X203_30_VALUE_DATE);
            window.focus();
            document.MAINFORM.X203_30_VALUE_DATE.focus();
            return;
        }
        if (SYS_ORG_FUNCTION_NAME == "ProcessMT102") { //vadd
            document.MAINFORM.X102_32A_DATE.value = "";
            getDivByField(document.MAINFORM.X102_32A_DATE);
            window.focus();
            document.MAINFORM.X102_32A_DATE.focus();
            return;
        }
        document.MAINFORM.X103_VALUE_DT_32A.value = "";
        getDivByField(document.MAINFORM.X103_VALUE_DT_32A);
        window.focus();
        document.MAINFORM.X103_VALUE_DT_32A.focus();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getAccounts() {
    try {

        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            SYS_GetDataBySSS('PYMT_X103_ORDCU_ID_50A_CHKMORE_TRX', 'X103_ORDCU_ID_50A;DB_CCY;FIELD_6_X', 'SYM_PYMT_showAccounts'); // Utility Auto Fix Comments
            SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
        } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYM_PYMT_disableField(document.MAINFORM.lookup1);

        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getAcctDCFlag() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var PRODREF; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var mainRef; // Utility Auto Fix Comments
        mainRef = document.MAINFORM.C_MAIN_REF.value;
        PRODREF = mainRef.substring(0, 2); // Utility Auto Fix Comments
        //Sql_Cond = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_C=" + "'002'" + " AND " + "ITEM_NAME = " + "'" + PRODREF + "'";
        //Field_List = "FIELD_6_X";
        //Mapping_List = "FIELD_6_X";
        SYS_GetTableDataByRule('SYM_PYMT_SYM_PYMT_getAcctDCFlag_7', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getBanksAccounts() {
    try {

        document.MAINFORM.document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        SYS_GetDataBySSS('PYMT_X103_ORDCU_ID_50A_NONCUSTCHKMORE_TRX', 'X103_ORDCU_ID_50A;DB_CCY;LOCAL_CCY', 'SYM_PYMT_Clk_Ord_Cust_Acct_lookup');
        SYM_PYMT_enableField(document.MAINFORM.lookup1, 'O');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getBICFromRef(ref, trgtFld) {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var refVal; // Utility Auto Fix Comments
        var tgtFldName; // Utility Auto Fix Comments
        var tgtFldVal; // Utility Auto Fix Comments
        refVal = ref.value;
        tgtFldName = "document.MAINFORM." + trgtFld;
        tgtFldVal = tgtFldName.value;
        refValCUBK = refVal;
        if (tgtFldVal == null) {
            //Sql_Cond1 = "C_MAIN_REF=" + "'" + refValCUBK + "'" + " AND " + "ROUT_TYPE=" + "'BIC'";
            //Field_List = "ROUT_CODE";
            SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_getBICFromRef_8', '1', 'T');
            document.all(trgtFld).value = trgtFldCUBK;

        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getIdFromBIC(BIC) {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        BICCUBK = BIC;
        //Sql_Cond1 = "ROUT_CODE=" + "'" + BICCUBK + "'";
        //Field_List = "C_MAIN_REF";
        //Mapping_List = "AVAL_WT_BK_ID";
        SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_getIdFromBIC_9', '1', true);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getSWADDFromRef(ref, trgtFld) {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var refVal; // Utility Auto Fix Comments
        refVal = ref.value;
        refValCUBK = refVal;
        //Sql_Cond = "C_MAIN_REF=" + "'" + refValCUBK + "'" + " AND " + "ROUT_TYPE=" + "'SWIFT'";
        //Field_List = "ROUT_CODE";
        SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_getSWADDFromRef_10', '1', 'TRUE');
        document.all(trgtFld).value = trgtFldCUBK;
        if (eval("document.MAINFORM." + trgtFld + ".value") == '') {
            SYM_PYMT_getBICFromRef(ref, trgtFld); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_103Routing() {
    try {

        var sAWBId; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sCrCCY; // Utility Auto Fix Comments
        var sMsgType; // Utility Auto Fix Comments
        var sRoutPriority; // Utility Auto Fix Comments
        var sSwAdd; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ACC_BKSW_57A.value != "") {
            sSwAdd = document.MAINFORM.X103_ACC_BKSW_57A.value;
            sCrCCY = document.MAINFORM.CR_CCY.value;
            sCntyCode = document.MAINFORM.AC_WT_INST_CNTY_CODE.value;
            sRoutPriority = document.MAINFORM.ROUT_PRIORITY.value;
            sMsgType = "MT103";
            SYM_PYMT_Clr_All_Banks(); //no string param will NOT clear acct with 103 details, only everything else routing related			
            //SYS_GetPaymentRouting(sCntyCode, sSwAdd, sCrCCY, sRoutPriority, sMsgType, 'SYM_PYMT_PostRouting()');
        } else {
            sAWBId = document.MAINFORM.X103_ACC_BKID_57A.value;
            sSwAdd = document.MAINFORM.X103_ACC_BKSW_57A.value;
            sCrCCY = document.MAINFORM.CR_CCY.value;
            sCntyCode = document.MAINFORM.AC_WT_INST_CNTY_CODE.value;
            sRoutPriority = document.MAINFORM.ROUT_PRIORITY.value;
            sMsgType = "MT103_NOBIC";
            SYM_PYMT_Clr_All_Banks(); //no string param will NOT clear acct with 103 details, only everything else routing related			
            SYS_GetPaymentRouting(sCntyCode, sSwAdd, sCrCCY, sRoutPriority, sMsgType, 'SYM_PYMT_PostRouting()');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_BankIdent(sCntyCode, sChkCode) {
    try {

        var sSortCode; // Utility Auto Fix Comments
        switch (sCntyCode) {
            case 'AD': //ANDORRA *
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'AT': //AUSTRIA *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'BE': //BELGIUM
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'BA': //BOSNIA HERCEGOVINA
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'BG': //BULGARIA *
                sSortCode = sChkCode.substring(4, 10);
                break;
            case 'HR': //CROATIA
                sSortCode = sChkCode.substring(4, 11);
                break;
            case 'CY': //CYPRUS
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'CZ': //CZECH REPUBLIC *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'DK': //DENMARK *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'EE': //ESTONIA
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'FO': //FAEROE ISLANDS *
                sSortCode = sChkCode.substring(6, 8);
                break;
            case 'FI': //FINLAND *
                sSortCode = sChkCode.substring(4, 10);
                break;
            case 'FR': //FRANCE, FRENCH GUIANA, FRENCH POLYNESIA, GUADELOUPE, JERSEY CHANNEL ISLANDS (FR), MARTINIQUE, MAYOTTE, MONACO, NEW CALEDONIA, REUNION,SAINT PIERRE & MIQUELON, WALLIS & FUTUNA
                //sSortCode = sChkCode.substring(4,9);
                sSortCode = sChkCode.substring(4, 14); //CHANGED BY SATHISH FOR ACCUITY
                break;
            case 'DE': //GERMANY *
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'GI': //GIBRALTAR
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'GR': //GREECE *
                //sSortCode = sChkCode.substring(4,7);
                sSortCode = sChkCode.substring(4, 11); //CHANGED BY SATHISH FOR ACCUITY
                break;
            case 'GL': //GREENLAND *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'HU': //HUNGARY *
                sSortCode = sChkCode.substring(4, 7) + sChkCode.substring(11, 12) + sChkCode.substring(7, 11);
                break;
            case 'IS': //ICELAND *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'IE': //IRELAND *
                //sSortCode = sChkCode.substring(4,8);
                sSortCode = sChkCode.substring(8, 14); //changed by sathish for accuity
                break;
            case 'IL': //Israel-- added by sathish
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'IT': //ITALY *
                sSortCode = sChkCode.substring(5, 15);
                break;
            case 'LV': //LATVIA * - uses 4-LETTER BIC BANK CODE
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'LI': //LIECHTENSTEIN
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'LT': //LITHUANIA
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'LU': //LUXEMBOURG *
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'MK': //MACEDONIA
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'MT': //MALTA
                sSortCode = sChkCode.substring(8, 13);
                break;
            case 'MX': //MEXICO *
                sSortCode = sChkCode.substring(0, 6);
                break;
            case 'ME': //MONTENEGRO
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'MC':
                //Monaco
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'MU': //Mauritius added by sathish
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'NL': //NETHERLANDS
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'NO': //NORWAY//added by sathish
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'PL': //POLAND
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'PT': //PORTUGAL
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'RO': //ROMANIA
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'SM': //SAN MARINO
                sSortCode = sChkCode.substring(5, 15);
                break;
            case 'RS': //SERBIA
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'SK': //SLOVAKIA
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'SI': //SLOVENIA *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'ES': //SPAIN *
                sSortCode = sChkCode.substring(4, 13);
                break;
            case 'SE': //SWEDEN *
                //sSortCode = sChkCode.substring(4,8);
                sSortCode = sChkCode.substring(4, 7); //CHANGED BY SATHISH
                break;
            case 'CH': //SWITZERLAND *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'TN': //TUNISIA *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'TR': //TURKEY *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'GB': //UNITED KINGDOM, GUERNSEY CHANNEL ISLANDS, ISLE OF MAN, JERSEY CHANNEL ISLANDS (GB), NORTHERN IRELAND *
                sSortCode = sChkCode.substring(8, 14);
                break;
        }

        document.MAINFORM.AC_WT_INST_CNTY_CODE.value = sCntyCode;
        document.MAINFORM.X103_ACC_BKACNO57A.value = sSortCode;
        SYM_PYMT_Chg_Chip_Fed();
        SYS_GetCUBK('AC_WT_INST_CNTY_NM', 'AC_WT_INST_CNTY_CODE', 'SYM_PYMT_Chg_X103_ACC_BKACNO57A()');
        //X103_ACC_BKACNO57A_onchange();
        //getFullCntyDetails(); //USES CUBK TO GET FULL COUNTRY DETAILS
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_CntyName() {
    try {

        if (document.MAINFORM.AC_WT_INST_CNTY_CODE.value != '') {
            SYS_GetCUBK_S('AC_WT_INST_CNTY_NM', 'AC_WT_INST_CNTY_CODE');
        }
        SYM_PYMT_Get_103Routing();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_CutOff() {
    try {

        var dSysDt; // Utility Auto Fix Comments
        var dfinalDt; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sreqDay; // Utility Auto Fix Comments
        var sreqDt; // Utility Auto Fix Comments
        var sreqMon; // Utility Auto Fix Comments
        var sreqYear; // Utility Auto Fix Comments
        document.MAINFORM.CUTOFF_REF.value = SYS_BANK_COUNTRY + document.MAINFORM.CR_CCY.value;
        document.MAINFORM.CCY_CUTOFF_DAY.value = "";
        document.MAINFORM.CUTOFF_DAY.value = "";
        document.MAINFORM.CUTOFF_TIME.value = "";
        SYS_GetCUBK_S('GET_CUTOFF', 'CUTOFF_REF', 'TRUE');
        if (document.MAINFORM.CUTOFF_TIME.value == "") {
            alert('CutOff Time is not loaded for the Selected Currency');
        } else {
            sCntyCode = SYS_BANK_COUNTRY;
            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                if (document.MAINFORM.CCY_CUTOFF_DAY.value == 'Day_Before') {
                    sSysDt = document.MAINFORM.X103_VALUE_DT_32A.value;
                    dSysDt = SYT_GetDateObjectFromStr(sSysDt);
                    SYS_CalEndWorkingDate_S(sCntyCode, document.MAINFORM.X103_VALUE_DT_32A.value, '1', 'TWO_DAYS_BACK', 'B', 'N', 'N');
                    dSysDt = SYT_GetDateObjectFromStr(document.MAINFORM.TWO_DAYS_BACK.value);
                    document.MAINFORM.TWO_DAYS_BACK.value = '';
                    sreqDt = SYS_DateToStr(dSysDt); //20090415			
                    sreqYear = sreqDt.substring(0, 4) + "-";
                    sreqMon = sreqDt.substring(4, 6) + "-";
                    sreqDay = sreqDt.substring(6, 8);
                    dfinalDt = sreqYear + sreqMon + sreqDay;
                    document.MAINFORM.CUTOFF_DAY.value = dfinalDt;
                } else if (document.MAINFORM.CCY_CUTOFF_DAY.value == 'Today') {
                    document.MAINFORM.CUTOFF_DAY.value = document.MAINFORM.X103_VALUE_DT_32A.value;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_Ord_Ins() {
    try {

        document.MAINFORM.AVAL_WT_BK_ID.value = "";
        SYT_getIdFromBIC(document.MAINFORM.X103_ORD_BKSW_52A, document.MAINFORM.AVAL_WT_BK_ID);
        document.MAINFORM.X103_ORD_BKID_52A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
        document.MAINFORM.AVAL_WT_BK_ID.value = "";
        document.MAINFORM.X103_TAG_52A.value = 'A';
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Hide_Chgs_PaidByRow() {
    try {

        EEHtml.getElementById('tr_paid_by').style.display = "none";
        EEHtml.getElementById('CHG_FOREIGN_CUST_PAY_RATE').style.display = "none";
        EEHtml.getElementById('CHG_FLD_ALL_CHARGE_FOR').style.display = "none";
        EEHtml.getElementById('LBL_VAL_DT').innerText = "";
        EEHtml.getElementById('CHG_VALUE_DATE').style.display = "none";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_initialize() {
    try {

        document.MAINFORM.INT_AMT6.value = Chg.Screen.getLocalChgTotalAmt();
        Int_Acct[0] = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
        //Int_Amt[0]=Chg.Screen.getLocalChgTotalAmt();
        Int_Amt[0] = Chg.Screen.getLocalPayChgTotalAmt();
        Int_Acct_Ccy[0] = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        if (parseInt(document.MAINFORM.INT_RESPONCECOUNT.value, 0) > 0) {
            accountCount = document.MAINFORM.INT_RESPONCECOUNT.value;
        } else {
            accountCount = 0;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_move_notes_to_history() {
    try {

        var len; // Utility Auto Fix Comments
        len = limitTextarea(document.MAINFORM.NOTES, document.MAINFORM.NOTES.rows, document.MAINFORM.NOTES.cols, document.MAINFORM.NOTES);
        if (len == false) {
            return false;
        } else if (document.MAINFORM.NOTES.value != "") {
            SYM_PYMT_add_to_trx_history('A', document.MAINFORM.NOTES.value);
            document.MAINFORM.NOTES.value = "";
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_PayAmtChk() {
    try {

        var crAmt; // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {


            if (SYS_BeFloat(document.MAINFORM.DB_AMT.value) >= 1000000000000000) {
                alert("The Credit Amount is too large to Process");
                return false;
            }

            return true;

        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {

            if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
                SYS_GetExchangeRate_S(document.MAINFORM.CR_CCY.value, SYS_LOCAL_CCY, 'TT Selling', 'EXCH_RT_CR_CCY');
                crAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value) / SYS_BeFloat(document.MAINFORM.EXCH_RT_CR_CCY.value);
                crAmt = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, crAmt);
                crAmt = crAmt.replace(/,/g, '');

            } else {
                crAmt = document.MAINFORM.DB_AMT.value;
                //crAmt = SYS_BeFloat(crAmt);
                crAmt = crAmt.replace(/,/g, '');
                // crStr = "" + crAmt;  
            }

            if (crAmt.length > 15) {
                alert("The Length of Credit Amount is over the limit of SWIFT Standard");
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.DB_AMT.value) >= 1000000000000000) {

                alert("The Debit Amount is too large to Process");
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_PostRouting() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var sClrBkId; // Utility Auto Fix Comments
        var sClrType; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ACC_BKID_57A.value.trim() != "" && document.MAINFORM.X103_ADV_BKID_B2.value.trim() == "") {
            //alert("No correspondent loaded for this currency");
        }

        if (document.MAINFORM.X103_ACC_BKSW_57A.value.trim() == '') {
            document.MAINFORM.X103_TAG_57A.value = 'D';
        }
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        SYM_PYMT_Set_202FieldsFrom103();
        document.MAINFORM.X202_ADV_BKMED_B2.value = "SWIFT auth";
        ////sClrType = '';
        /*
        if (document.MAINFORM.CR_CCY.value == SYS_LOCAL_CCY) {
            ////sClrType = 'VOSTRO';
        } else {
            ////sClrType = 'NOSTRO';
        }
        */
        sClrBkId = '';
        if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
            sClrBkId = document.MAINFORM.X103_SENDCORRID53A.value;
            if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
                //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_DEF=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + sClrType + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + sClrBkId + "'";
                //Field_List = "C_ACCT_NR";
                //Mapping_List = "CPYT_CR_BK_AC";
                SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_PostRouting_11', '1', true);
                if (document.MAINFORM.CPYT_CR_BK_AC.value == '') {
                    //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + sClrType + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + sClrBkId + "'";
                    //Field_List1 = "C_ACCT_NR";
                    //Mapping_List1 = "CPYT_CR_BK_AC";
                    SYS_GetTableDataByRule('SYM_PYMT_SYM_PYMT_PostRouting_12', '1', '', '', true);
                }
            }
        } else if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            sClrBkId = document.MAINFORM.X103_ADV_BKID_B2.value;
            if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
                //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_DEF=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + sClrType + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + sClrBkId + "'";
                //Field_List = "C_ACCT_NR";
                //Mapping_List = "CPYT_CR_BK_AC";
                SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_PostRouting_11', '2', true);
                if (document.MAINFORM.CPYT_CR_BK_AC.value == '') {
                    //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + sClrType + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + sClrBkId + "'";
                    //Field_List1 = "C_ACCT_NR";
                    //Mapping_List1 = "CPYT_CR_BK_AC";
                    SYS_GetTableDataByRule('SYM_PYMT_SYM_PYMT_PostRouting_12', '2', '', '', true);
                }
            }
        }

        //SYM_PYMT_setRecChgs();
        SYF_PYMT_Chg_X103_DET_CHG_71A();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_ProtOrdCust() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "P");
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_REF_20() {
    try {

        var nLc_no;
        nLc_no = document.MAINFORM.C_MAIN_REF.value.substr(2, 10) + SYS_I_EVENT_TIMES + document.MAINFORM.C_MAIN_REF.value.substr(12, 16);
        document.MAINFORM.RELATED_REF.value = nLc_no;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_set50FValues() {
    try {

        var line1Prefix; // Utility Auto Fix Comments
        var line2Prefix; // Utility Auto Fix Comments
        var line3Prefix; // Utility Auto Fix Comments
        line1Prefix = '1/';
        line2Prefix = '2/';
        line3Prefix = '3/';

        if (document.MAINFORM.X103_TAG_50A.value == 'F') {
            if (document.MAINFORM.X103_ORDCUACNO_50F.value != '') {
                if (document.MAINFORM.X103_ORDCUACNO_50F.value.indexOf('/') == -1) {
                    document.MAINFORM.X103_ORDCUACNO_50F.value = '/' + document.MAINFORM.X103_ORDCUACNO_50F.value; // Utility Auto Fix Comments
                }
            }

            if (document.MAINFORM.X103_ORDCU_NM_50F.value != '') {
                document.MAINFORM.X103_ORDCU_NM_50F.value = line1Prefix + document.MAINFORM.X103_ORDCU_NM_50F.value; // Utility Auto Fix Comments
            }
            if (document.MAINFORM.X103_ORDCUADD3_50F.value != '' && document.MAINFORM.APPL_CNTY_RES.value != '') {
                document.MAINFORM.X103_ORDCUADD3_50F.value = line3Prefix + document.MAINFORM.APPL_CNTY_RES.value + '/' + document.MAINFORM.X103_ORDCUADD3_50F.value; // Utility Auto Fix Comments
            }
            if (document.MAINFORM.X103_ORDCUADD2_50F.value != '') {
                document.MAINFORM.X103_ORDCUADD2_50F.value = line2Prefix + document.MAINFORM.X103_ORDCUADD2_50F.value; // Utility Auto Fix Comments
            }

            if (document.MAINFORM.X103_ORDCUADD1_50F.value != '') {
                document.MAINFORM.X103_ORDCUADD1_50F.value = line2Prefix + document.MAINFORM.X103_ORDCUADD1_50F.value; // Utility Auto Fix Comments
            }

        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SetRateType_Reversal() {
    try {

        var ref; // Utility Auto Fix Comments
        document.MAINFORM.RATE_TYPE.value = "";
        ref = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);

        if (ref == "DI") {
            document.MAINFORM.RATE_TYPE.value = "TT Buying;";
        } else if (ref == "OT") {
            document.MAINFORM.RATE_TYPE.value = "TT Buying;"; // Utility Auto Fix Comments
        } else if (ref == "IT") {
            document.MAINFORM.RATE_TYPE.value = "TT Selling;";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_setRecChgs() {
    try {

        var RecChgsObj; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var rec71gCollAmt; // Utility Auto Fix Comments
        if (SYS_FUNCTION_NAME != "Proc_Inc_103" || SYS_FUNCTION_NAME != "Settle_after_Receive9xx") {
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
            Chg.Screen.setTrxTempFieldVaule('OTT_71GCHG', '1', "exclude");
            if (document.MAINFORM.X103_DET_CHG_71A.value == "OUR") {
                document.MAINFORM.CHG_CNTY_BANKID.value = '';
                document.MAINFORM.CHG_CNTY_BANKID.value = SYS_BANK_COUNTRY + document.MAINFORM.X103_ADV_BKID_B2.value;
                if (SYS_BANK_COUNTRY != 'ZM') {
                    if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
                        Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "X103_ADV_BKNM_B2", "CR_CCY", "CPYT_CR_BK_AC");
                    }
                    RecChgsObj.display();
                    Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "X103_ADV_BKNM_B2", "CR_CCY", "CPYT_CR_BK_AC");

                } else {
                    if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
                        Chg.Screen.mapForeignCust("X103_ADV_BKID_B2", "X103_ADV_BKNM_B2", "CR_CCY", "CPYT_CR_BK_AC");
                    }
                    RecChgsObj.display();
                    Chg.Screen.mapForeignCust("X103_ADV_BKID_B2", "X103_ADV_BKNM_B2", "CR_CCY", "CPYT_CR_BK_AC");
                }
                if (document.MAINFORM.X103_ADV_BKID_B2.value == "" || document.MAINFORM.X103_ADV_BKID_B2.value == null) {
                    Chg.Screen.mapForeignCust("FOR_CHG_ID", "FOR_CHG_NAME", "CR_CCY", "FOR_CHG_AC");
                }

                if (SYS_BANK_COUNTRY != 'ZM') {
                    if (document.MAINFORM.X103_ADV_BKID_B2.value.trim() != '') {
                        aResult = Chg.callCalcService(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value, 'OTT_71GCHG', 'F', document.MAINFORM.CHG_CNTY_BANKID.value, 'ZMK', 'TT Selling');
                    } else {
                        aResult = Chg.callCalcService(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value, 'OTT_71GCHG', 'F', document.MAINFORM.FOR_CHG_ID.value, 'ZMK', 'TT Selling');
                    }
                    Chg.Screen.setChargeValue('OTT_71GCHG', aResult[1], aResult[2]);
                } else {
                    if (document.MAINFORM.X103_ADV_BKID_B2.value.trim() != '') {
                        aResult = Chg.callCalcService(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value, 'OTT_71GCHG', 'F', document.MAINFORM.X103_ADV_BKID_B2.value, 'ZMK', 'TT Selling');
                    } else {
                        aResult = Chg.callCalcService(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value, 'OTT_71GCHG', 'F', document.MAINFORM.FOR_CHG_ID.value, 'ZMK', 'TT Selling');
                    }

                    //aResult =	Chg.callCalcService(document.MAINFORM.CR_CCY.value,document.MAINFORM.CR_CALC_AMT.value,'OTT_71GCHG','F',document.MAINFORM.X103_ADV_BKID_B2.value,'ZMK','TT Selling');
                    Chg.Screen.setChargeValue('OTT_71GCHG', aResult[1], aResult[2]);
                }
                rec71gCollAmt = RecChgsObj.getCollectAmt();
                if (document.MAINFORM.CR_CCY.value != RecChgsObj.getCollectCcy()) {
                    SYS_GetExchangeRate_S(RecChgsObj.getCollectCcy(), document.MAINFORM.CR_CCY.value, "TT Selling", "EXCH_RATE", '', '', '', '', '', '9');
                    document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, SYS_BeFloat(rec71gCollAmt * document.MAINFORM.EXCH_RATE.value));
                } else {
                    document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, SYS_BeFloat(rec71gCollAmt));
                }
            } else {
                RecChgsObj.reset();
                RecChgsObj.hide();
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_202FieldsFrom103() {
    try {

        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
            document.MAINFORM.X202_ADV_BKSW_B2.className = "CHAR_M";
            document.MAINFORM.X202_BENE_BKNM_58A.className = "CHAR_M";
            document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.X103_ADV_BKID_B2.value;
            document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X103_ADV_BKNM_B2.value;
            document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X103_ADV_BKADD1_B2.value;
            document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X103_ADV_BKADD2_B2.value;
            document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X103_ADV_BKADD3_B2.value;
            document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
            document.MAINFORM.X202_TAG_58A.value = 'A';

            document.MAINFORM.X103_SENDCORRID53A.value = document.MAINFORM.X202_ADV_BKID_B2.value;
            document.MAINFORM.X103_SENDCORRNM53A.value = document.MAINFORM.X202_ADV_BKNM_B2.value;
            document.MAINFORM.X103SENDCORADD153A.value = document.MAINFORM.X202_ADV_BKADD1_B2.value;
            document.MAINFORM.X103SENDCORADD253A.value = document.MAINFORM.X202_ADV_BKADD2_B2.value;
            document.MAINFORM.X103SENDCORADD353A.value = document.MAINFORM.X202_ADV_BKADD3_B2.value;
            document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X202_ADV_BKSW_B2.value;

            document.MAINFORM.X103_RECCORRID_54A.value = document.MAINFORM.X202_ACC_BKID_57A.value;
            document.MAINFORM.X103_RECCORRNM_54A.value = document.MAINFORM.X202_ACC_BKNM_57A.value;
            document.MAINFORM.X103_RECCORADD154A.value = document.MAINFORM.X202_ACCBKADD1_57A.value;
            document.MAINFORM.X103_RECCORADD254A.value = document.MAINFORM.X202_ACCBKADD2_57A.value;
            document.MAINFORM.X103_RECCORADD354A.value = document.MAINFORM.X202_ACCBKADD3_57A.value;
            document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X202_ACC_BKSW_57A.value;
            document.MAINFORM.X103_TAG_54A.value = document.MAINFORM.X202_TAG_57A.value;
            document.MAINFORM.X103RECCORRACNO54A.value = document.MAINFORM.X202_ACC_BKACNO57A.value;
        } else {
            document.MAINFORM.X202_ADV_BKSW_B2.className = "CHAR_P";
            document.MAINFORM.X202_BENE_BKNM_58A.className = "CHAR_P";
            SYM_PYMT_Clr_202_Ben_Ins();
            SYM_PYMT_Clr_Send_Corres();
            SYM_PYMT_Clr_Rec_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_202Values() {
    try {

        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.X103_SETT_CCY_32A.value;
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.X103_SETT_AMT_32A.value;
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value;
            document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.X103_SEND_NO_20.value;
            document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.X103_VALUE_DT_32A.value;
            //document.MAINFORM.X202_TIME_INDI_13C.value = document.MAINFORM.X103_TIME_INDI_13C.value;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_71GAmt() {
    try {

        var ChgCcy; // Utility Auto Fix Comments
        var ChgSend; // Utility Auto Fix Comments
        var CrCcy; // Utility Auto Fix Comments
        var PymtCommChg; // Utility Auto Fix Comments
        var RecChgsObj; // Utility Auto Fix Comments
        var SendChg; // Utility Auto Fix Comments
        var collCcy; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var rec71gCollAmt; // Utility Auto Fix Comments
        var swift_chg; // Utility Auto Fix Comments
        swift_chg = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        PymtCommChg = Chg.Screen.getTrxChargeByCommCode(chargeCode1);

        if (document.MAINFORM.X103_DET_CHG_71A.value == "OUR") {
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
            RecChgsObj.display();
            RecChgsObj.protectChargeAt();
            rec71gCollAmt = RecChgsObj.getCollectAmt();
            collCcy = RecChgsObj.getCollectCcy();
            if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
                SYS_GetExchangeRate_S(SYS_LOCAL_CCY, document.MAINFORM.CR_CCY.value, "TT Selling", "EXCH_RATE", '', 'MD_I', '', '', '', '9');
                if (document.MAINFORM.MD_I.value == "M") {
                    document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, SYS_BeFloat(rec71gCollAmt * document.MAINFORM.EXCH_RATE.value));
                } else {
                    document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, SYS_BeFloat(rec71gCollAmt / document.MAINFORM.EXCH_RATE.value));
                }
            } else {
                document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, SYS_BeFloat(rec71gCollAmt));
            }
            swift_chg.unprotectChargeAt();
            PymtCommChg.unprotectChargeAt();
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "SHA") {
            swift_chg.unprotectChargeAt();
            PymtCommChg.unprotectChargeAt();
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
            swift_chg.protectChargeAt();
            PymtCommChg.protectChargeAt();
        }
        //SendChg=Chg.Screen.getLocalTotalAmt();//to be tested
        //SendChg=Chg.Screen.getLocalCollectChgTotalAmt();
        CrCcy = document.MAINFORM.CR_CCY.value;
        ChgCcy = SYS_LOCAL_CCY;
        rate = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
            document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.CR_CCY.value;
            ChgSend = Chg.Screen.getForeignPayTotalAmt();
            document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, ChgSend);
        }
        if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_set_charge_recovery_currency() {
    try {

        var chg_ccy; // Utility Auto Fix Comments
        if (SYS_BANK_COUNTRY == "ZM" || SYS_BANK_COUNTRY == "TZ" || SYS_BANK_COUNTRY == "MU") {
            chg_ccy = "USD";
        } else {
            chg_ccy = SYS_LOCAL_CCY;
        }
        return chg_ccy;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_ChgCashInd() {
    try {

        if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
            document.MAINFORM.CHG_CASH_IND.value = "No";
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "OUR") {
            if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
                document.MAINFORM.CHG_CASH_IND.value = "No";
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "O");
            } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            }
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "SHA") {
            if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
                document.MAINFORM.CHG_CASH_IND.value = "No";
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "O");
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_Corr_Bank() {
    try {

        if (document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == "OT" || document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == "DI") {
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.X103_ADV_BKID_B2.value;
                SYM_PYMT_Chg_SEND_CORR_BK_ID();
                document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
            } else {
                document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
                SYM_PYMT_Chg_SEND_CORR_BK_ID();
            }
        } else if (document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == "IT") {
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                document.MAINFORM.RELA_REF.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.INW_SNDBK_ID.value;
                document.MAINFORM.SEND_CORR_BK_NM.value = document.MAINFORM.INW_SNDBK_NM.value;
                document.MAINFORM.SEND_CORR_BK_ADD1.value = document.MAINFORM.INW_SNDBK_ADD1.value;
                document.MAINFORM.SEND_CORR_BK_ADD2.value = document.MAINFORM.INW_SNDBK_ADD2.value;
                document.MAINFORM.SEND_CORR_BK_ADD3.value = document.MAINFORM.INW_SNDBK_ADD3.value;
                document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.INW_SNDBK_SW.value;
            } else {
                document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
                SYM_PYMT_Chg_SEND_CORR_BK_ID();
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_EC_ChgCashInd() {
    try {

        if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
            document.MAINFORM.CHG_CASH_IND.value = "No";
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "OUR") {
            if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "O");
            } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            }
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "SHA") {
            if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_MPO_Chrgs() {
    try {

        var RecChgsObj; // Utility Auto Fix Comments
        var sDetChg; // Utility Auto Fix Comments
        sDetChg = document.MAINFORM.X103_DET_CHG_71A.value;
        Chg.Screen.protectAllCollectAmt();
        if (sDetChg == "OUR") {
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);
            SYM_PYMT_disableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_enableField(document.MAINFORM.X103_RECCHGAMT_71G, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN, "O");
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
            RecChgsObj.protectChargeAt();
        } else if (sDetChg == "SHA") {
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN, "O");
        } else if (sDetChg == "BEN") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);
            SYM_PYMT_disableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);
        }
        SYM_PYMT_Set_EC_ChgCashInd();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_Mt103Amt() {
    try {

        var _dodetail; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            document.MAINFORM.CR_AMT.value = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, SYS_BeFloat(document.MAINFORM.CR_AMT.value));
        } else {
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value));
        }
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_OtherFields_MT103() {
    try {

        var sTag23BVal; // Utility Auto Fix Comments
        var sTag23EVal; // Utility Auto Fix Comments
        sTag23BVal = document.MAINFORM.X103_BKOP_CODE_23B.value;
        sTag23EVal = document.MAINFORM.X103_INSTRCODE1_23E.value;
        if (sTag23BVal == "SSTD" || sTag23BVal == "SPAY") {
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_INSTRCODE1_23E);
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE2_23E, "P");
        } else {
            SYM_PYMT_enableField(document.MAINFORM.X103_INSTRCODE1_23E, "O");
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE2_23E, "O");
        }
        if (sTag23BVal == "SSTD" || sTag23BVal == "SPAY" || sTag23BVal == "SPRI") {
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A, "M");
        } else {
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A, "O");
        }
        if (sTag23EVal == 'CHQB') {
            document.MAINFORM.BENE_AC_TYPE.value = "Other";
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_BENECUACNO59A);
        } else {
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A, "O");
        }
        if (sTag23EVal == "PHON" || sTag23EVal == "PHOB" || sTag23EVal == "PHOI" || sTag23EVal == "TELE" || sTag23EVal == "TELB" || sTag23EVal == "TELI" || sTag23EVal == "HOLD" || sTag23EVal == "REPA") {
            SYM_PYMT_enableField(document.MAINFORM.X103_INSTRCODE2_23E, "O");
        } else {
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_INSTRCODE2_23E);
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_OverrideFlag() {
    try {

        var ChkVal; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var tempOvride; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        tempOvride = "No";
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_OVRIDE");
            if (ChkVal == "Yes") {
                tempOvride = "Yes";
            }
        }
        if (tempOvride == "Yes") {
            document.MAINFORM.OVRIDE.value = "Yes";
        } else {
            document.MAINFORM.OVRIDE.value = "No";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_SwiftTags_202() {
    try {

        //Tag 52
        if (document.MAINFORM.X202_ORDBK_NM_52A.value != "") {
            if (document.MAINFORM.X202_ORDBK_SW_52A.value == "") {
                document.MAINFORM.X202_TAG_52A.value = "D";
            } else {
                document.MAINFORM.X202_TAG_52A.value = "A"; // Utility Auto Fix Comments
            }
        }

        //Tag 53
        if (document.MAINFORM.X202_SENDCORRSW53A.value != "") {
            document.MAINFORM.X202_TAG_53A.value = "A";
        } else if (document.MAINFORM.X202_SENDCORRNM53A.value != "" && document.MAINFORM.X202SENDCORADD353A.value != "" && document.MAINFORM.X202_SENDCORRSW53A.value == "") {
            document.MAINFORM.X202_TAG_53A.value = "D";
        } else if (document.MAINFORM.X202_SENDCORRNM53A.value == "" && document.MAINFORM.X202SENDCORADD253A.value != "" && document.MAINFORM.X202_SENDCORRSW53A.value == "") {
            document.MAINFORM.X202_TAG_53A.value = "B";
        }

        //Tag 54
        if (document.MAINFORM.X202_RECCORRSW_54A.value != "") {
            document.MAINFORM.X202_TAG_54A.value = "A";
        } else if (document.MAINFORM.X202_RECCORRNM_54A.value != "" && document.MAINFORM.X202_RECCORADD354A.value != "" && document.MAINFORM.X202_RECCORRSW_54A.value == "") {
            document.MAINFORM.X202_TAG_54A.value = "D";
        } else if (document.MAINFORM.X202_RECCORRNM_54A.value == "" && document.MAINFORM.X202_RECCORADD254A.value != "" && document.MAINFORM.X202_RECCORRSW_54A.value == "") {
            document.MAINFORM.X202_TAG_54A.value = "B";
        }

        //Tag 56
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != "") {
            document.MAINFORM.X202_TAG_56A.value = "A";
        } else if (document.MAINFORM.X202_MEDI_BKNM_56A.value != "" && document.MAINFORM.X202MEDIBKADD3_56A.value != "" && document.MAINFORM.X202_MEDI_BKSW_56A.value == "") {
            document.MAINFORM.X202_TAG_56A.value = "D";
        } else if (document.MAINFORM.X202_MEDI_BKNM_56A.value == "" && document.MAINFORM.X202_MEDIBKACNO56A.value != "" && document.MAINFORM.X202_MEDI_BKSW_56A.value == "") {
            document.MAINFORM.X202_TAG_56A.value = "C";
        }

        //Tag 57
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = "A";
        } else if (document.MAINFORM.X202_ACC_BKSW_57A.value == "" && document.MAINFORM.X202_ACC_BKNM_57A.value != "" && document.MAINFORM.X202_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = "D";
        } else if (document.MAINFORM.X202_ACC_BKSW_57A.value == "" && document.MAINFORM.X202_ACC_BKNM_57A.value == "" && document.MAINFORM.X202_ACC_BKACNO57A.value != "" && document.MAINFORM.X202_ACCBKADD2_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = "B";
        } else if (document.MAINFORM.X202_ACC_BKSW_57A.value == "" && document.MAINFORM.X202_ACC_BKNM_57A.value == "" && document.MAINFORM.X202_ACC_BKACNO57A.value != "" && document.MAINFORM.X202_ACCBKADD2_57A.value == "") {
            document.MAINFORM.X202_TAG_57A.value = "C";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_set_X103_ADV_BKSW_B2_onchange() {
    try {

        if (document.MAINFORM.X103_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X103_ADV_BKID_B2.value = '';
            document.MAINFORM.X103_ADV_BKNM_B2.value = '';
            document.MAINFORM.X103_ADV_BKSW_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD3_B2.value = '';
        }
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = "C_MAIN_REF=" + "'" + document.MAINFORM.X103_ADV_BKSW_B2.value + "'";
        //Field_List = "C_MAIN_REF;PARTY_NM;ADD1;ADD2;ADD3";
        //Mapping_List = "X103_ADV_BKID_B2;X103_ADV_BKNM_B2;X103_ADV_BKADD1_B2;X103_ADV_BKADD2_B2;X103_ADV_BKADD3_B2";
        SYS_GetTableDataByRule('SYM_PYMT_SYM_PYMT_set_X103_ADV_BKSW_B2_onchange_13', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Shw_MPO_MsgType() {
    try {

        EEHtml.getElementById('inv1').style.display = "none";
        EEHtml.getElementById('INV_STATUS').style.display = "none";
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD1, 'M');
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD3, 'P');
        prod = document.MAINFORM.PROD.value;
        if (document.MAINFORM.CU_TYPE.value == 'Customer') {
            EEHtml.getElementById('msgtype').style.display = "none";
            EEHtml.getElementById('msgtype_di').style.display = "block";
            SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY_DI, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT_DI, 'P');
            document.MAINFORM.MT_CATEGORY.value = "";
            document.MAINFORM.MT_SUBCAT.value = "";
            document.MAINFORM.MT_CATEGORY_DI.value = "";
            document.MAINFORM.MT_SUBCAT_DI.value = "";
            document.MAINFORM.CORR_MSG.value = "";
            document.MAINFORM.CORR_MSG_DI.value = "";
            document.MAINFORM.SEND_CORR_SW_TAG.value = "";
            document.MAINFORM.X95_96_QUER_ANS.value = "";
            document.MAINFORM.MT111_QUER.value = "";
            document.MAINFORM.XN95_96_NARRATIVE.value = "";
            document.MAINFORM.MT_DT_ISN.value = "";
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT111_QUER, 'P');
            SYT_ChangeFldClass(document.MAINFORM.Query_Button, 'P');
            SYT_ChangeFldClass(document.MAINFORM.Query_Ans_Button, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NarrButton_95, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'M');
            document.MAINFORM.CORRES_TYPE.disabled = false;
            if (document.MAINFORM.SEND_CORR_BK_ID.value != "") {
                if (SYS_FUNCTION_TYPE != "IQ" && SYS_FUNCTION_TYPE != "RE") { // Utility Auto Fix Comments
                    SYM_PYMT_Chg_CORRES_TYPE(); // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
                else { // Utility Auto Fix Comments
                    document.MAINFORM.CORRES_TYPE.disabled = true; // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
            }
        } else {
            if (prod == "IT") {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'O');
                document.MAINFORM.RELA_REF.value = document.MAINFORM.C_MAIN_REF.value;
                SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value);
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'P');
                document.MAINFORM.RELA_REF.value = document.MAINFORM.C_MAIN_REF.value;
                SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.X103_VALUE_DT_32A.value);
            }
            document.MAINFORM.FAX_NO.value = "";
            document.MAINFORM.EMAIL.value = "";
            document.MAINFORM.CORRES_TYPE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'P');
            document.MAINFORM.CORRES_TYPE.disabled = true;
            switch (prod) {
                case "DI":
                    EEHtml.getElementById('msgtype_di').style.display = "block";
                    EEHtml.getElementById('msgtype').style.display = "none";
                    SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT, 'P');
                    document.MAINFORM.MT_CATEGORY.value = "";
                    document.MAINFORM.MT_SUBCAT.value = "";
                    SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY_DI, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT_DI, 'M');
                    document.MAINFORM.CORR_MSG.value = "";
                    EEHtml.getElementById('B').style.display = "none";
                    EEHtml.getElementById('D').style.display = "block";
                    document.MAINFORM.SEND_CORR_SW_TAG.value = 'A';
                    SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, 'M');
                    document.MAINFORM.RELA_REF.value = document.MAINFORM.CHEQ_NO.value;
                    break;

                default:
                    EEHtml.getElementById('msgtype_di').style.display = "none";
                    EEHtml.getElementById('msgtype').style.display = "block";
                    SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY_DI, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT_DI, 'P');
                    document.MAINFORM.MT_CATEGORY_DI.value = "";
                    document.MAINFORM.MT_SUBCAT_DI.value = "";
                    SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT, 'M');
                    document.MAINFORM.CORR_MSG_DI.value = "";
                    EEHtml.getElementById('B').style.display = "block";
                    EEHtml.getElementById('D').style.display = "none";
                    document.MAINFORM.SEND_CORR_SW_TAG.value = 'A';
                    SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, 'M');
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Succ_LocalHoliday() {
    try {

        if (SYS_ORG_FUNCTION_NAME == "ProcessMT201" || SYS_ORG_FUNCTION_NAME == "ProcessMT102") { //vadd
            return true;
        }
        var cntyCode; // Utility Auto Fix Comments
        cntyCode = document.MAINFORM.CR_CCY.value.substring(0, 2);
        document.MAINFORM.CNTY.value = cntyCode;
        if (cntyCode != 'EU') {
            SYS_CheckHoliday('CNTY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_CntyHoliday()', 'SYM_PYMT_Fail_CntyHoliday()');
        } else {
            SYM_PYMT_Succ_CntyHoliday();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SYT_clsdisableField(oField) {
    try {

        var sClass; // Utility Auto Fix Comments
        var typeName; // Utility Auto Fix Comments
		var substr;
        sClass = oField.className;
        sClass = sClass.substr(0, (sClass.length - 1)) + 'P';
        oField.className = sClass;
        typeName = oField.type;
        oField.value = "";
        if (typeName == "select-one" || typeName == "button") {
            oField.disabled = true;
        } else {
            oField.readOnly = true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SYT_enableField(oField, sStatus) {
    try {

        var sClass; // Utility Auto Fix Comments
        sClass = oField.className;
        sClass = sClass.substr(0, (sClass.length - 1)) + sStatus;
        if (sClass != "") {
            oField.className = sClass;
            oField.setAttribute('readOnly', false);
            oField.setAttribute('disabled', false);
            oField.removeAttribute('disabled');
            oField.removeAttribute('readOnly');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_TIS_MUP_Payments() {
    try {

        var obj71GChrgs; // Utility Auto Fix Comments
        var objLocPymtChrgs; // Utility Auto Fix Comments
        var objPymtCommChrgs; // Utility Auto Fix Comments
        var objSwiftChrgs; // Utility Auto Fix Comments
        objPymtCommChrgs = Chg.Screen.getTrxChargeByCommCode(chargeCode1);
        objSwiftChrgs = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        obj71GChrgs = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
        objLocPymtChrgs = Chg.Screen.getTrxChargeByCommCode('PYMT_OT_LOC_CHG');

        if ((document.MAINFORM.CR_CCY.value == "MUR" || document.MAINFORM.CR_CCY.value == "TZS") && (document.MAINFORM.AC_WT_INST_CNTY_CODE.value == document.MAINFORM.CR_CCY.value.substring(0, 2)) && (SYS_BANK_COUNTRY == document.MAINFORM.AC_WT_INST_CNTY_CODE.value)) {

            objLocPymtChrgs.display();
            if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != 'IQ') {
                Chg.calculate(['PYMT_OT_LOC_CHG']);
            }
            objPymtCommChrgs.reset();
            objPymtCommChrgs.hide();
            objSwiftChrgs.reset();
            objSwiftChrgs.hide();
            obj71GChrgs.reset();
            obj71GChrgs.hide();

            return true;
        } else {
            //If not MUP or TIS Payment, reset Charges and process normally
            objPymtCommChrgs.display();
            objSwiftChrgs.display();
            objLocPymtChrgs.reset();
            objLocPymtChrgs.hide();
            //if ((SYS_FUNCTION_TYPE == 'KP' || SYS_FUNCTION_TYPE == 'EC'))//SATHISH
            if (SYS_FUNCTION_TYPE == 'KP') {
                if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                    Chg.calculate([chargeCode1], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
                } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                    Chg.calculate([chargeCode1], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
                }
            }
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ACC_BKID_57A_GETCUBK() {
    try {

        if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
        } else {
            document.MAINFORM.X103_ACC_BKID_57A.value = '';
            document.MAINFORM.X103_ACC_BKNM_57A.value = '';
            document.MAINFORM.X103_ACCBKADD1_57A.value = '';
            document.MAINFORM.X103_ACCBKADD2_57A.value = '';
            document.MAINFORM.X103_ACCBKADD3_57A.value = '';
            document.MAINFORM.X103_ACC_BKSW_57A.value = '';
            document.MAINFORM.X103_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_BENECU_ID_59A_GETCUBK() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            SYS_GetCUBK('X103_BENECU_ID_59A', 'X103_BENECU_ID_59A');
        } else {

            document.MAINFORM.X103_BENECU_ID_59A.value = "";
            document.MAINFORM.X103_BENECU_NM_59A.value = "";
            document.MAINFORM.X103BENECUADD1_59A.value = "";
            document.MAINFORM.X103BENECUADD2_59A.value = "";
            document.MAINFORM.X103BENECUADD3_59A.value = "";
            document.MAINFORM.X103_TAG_59A.value = "";
            document.MAINFORM.X103_BENECU_BKSW_59.value = "";
            document.MAINFORM.X103_BENECUACNO59A.value = "";

        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_MEDI_BKID_56A_GETCUBK() {
    try {

        if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', '', 'SYM_PYMT_Clr_Int_Ins()', 'TRUE');
        } else {
            SYM_PYMT_Clr_Int_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ORDCU_ID_50A_GETCUBK() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
            SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
        } else {
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            document.MAINFORM.X103_ORDCUADD1_50A.value = "";
            document.MAINFORM.X103_ORDCUADD2_50A.value = "";
            document.MAINFORM.X103_ORDCUADD3_50A.value = "";
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            document.MAINFORM.X103_TAG_50A.value = "";

        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ORD_BKID_52A_GETCUBK() {
    try {

        if (document.MAINFORM.X103_ORD_BKID_52A.value != '') {
            SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A');
        } else {
            document.MAINFORM.X103_ORD_BKID_52A.value = "";
            document.MAINFORM.X103_ORD_BKNM_52A.value = "";
            document.MAINFORM.X103_ORDBKADD1_52A.value = "";
            document.MAINFORM.X103_ORDBKADD2_52A.value = "";
            document.MAINFORM.X103_ORDBKADD3_52A.value = "";
            document.MAINFORM.X103_ORDBKACNO_52A.value = "";
            document.MAINFORM.X103_ORD_BKSW_52A.value = "";
            document.MAINFORM.X103_TAG_52A.value = "";

        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_SENDCORRID53A_GETCUBK() {
    try {

        if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X103_SENDCORRID53A', 'X103_SENDCORRID53A');
        } else {
            document.MAINFORM.X103_SENDCORRID53A.value = '';
            document.MAINFORM.X103_SENDCORRNM53A.value = '';
            document.MAINFORM.X103_SENDCORRSW53A.value = '';
            document.MAINFORM.X103SENDCORACNO53A.value = '';
            document.MAINFORM.X103SENDCORADD153A.value = '';
            document.MAINFORM.X103SENDCORADD253A.value = '';
            document.MAINFORM.X103SENDCORADD353A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_ACC_BKID_57A_GETCUBK() {
    try {

        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
        } else {
            document.MAINFORM.X202_ACC_BKID_57A.value = '';
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_BENE_BKID_58A_GETCUBK() {
    try {

        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKID_58A.value = '';
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_MEDI_BKID_56A_GETCUBK() {
    try {

        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X202_MEDI_BKID_56A.value = '';
            document.MAINFORM.X202_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X202MEDIBKADD1_56A.value = '';
            document.MAINFORM.X202MEDIBKADD2_56A.value = '';
            document.MAINFORM.X202MEDIBKADD3_56A.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X202_MEDIBKACNO56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_ORDBK_ID_52A_GETCUBK() {
    try {

        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
        } else {
            document.MAINFORM.X202_ORDBK_ID_52A.value = '';
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Ord_Cust_lookup() {
    try {

        var name;
        name = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
        if (name != "") {
            if (document.MAINFORM.X103_TAG_50A.value != "F") {
                if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                    SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
                } else if (document.MAINFORM.APP_TYPE.value == "BANK") {
                    SYS_InqCUBK_byCondition('GetNostroVostroBanks', '1');
                }
            } else {
                alert("Tag 50F is selected. Please input Applicant data as specified by the SWIFT standard");
            }
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Ord_Cust_Acct_lookup() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() == '') {
            alert("Search is not possible without Ordering Customer ID"); // Utility Auto Fix Comments
        } else if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A',SYM_PYMT_SYS_buildSQLCond(new Array('c_cust_id','X103_ORDCU_ID_50A','C_AC_NUMBER','X103_ORDCUACNO_50A','C_CURRENCY','DB_CCY')));
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', 'C_CUST_ID like \'<--X103_ORDCU_ID_50A-->%\' AND C_AC_NUMBER like \'<--X103_ORDCUACNO_50A-->%\' AND C_CURRENCY like \'<--DB_CCY-->%\' AND (C_DBT_CRDT = \'B\' OR  C_DBT_CRDT=\'<--FIELD_6_X-->\')');
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '4');
        } else if (document.MAINFORM.APP_TYPE.value == "BANK") {
            if (document.MAINFORM.DB_CCY.value == SYS_LOCAL_CCY) {
                document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
                SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A_BANK', '2');
            } else {
                document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
                SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A_BANK', '3');
            }
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A_BANK', 'C_ACCT_WITH_ID like \'<--X103_ORDCU_ID_50A-->%\' AND C_ACCT_NR like \'<--X103_ORDCUACNO_50A-->%\' AND C_ACCT_CCY like \'<--DB_CCY-->%\' AND C_CLEAR_TYPE like \'<--C_CLEAR_TYPE-->%\' ');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Succ_CntyHoliday() {
    try {

        SYM_PYMT_Chk_SpotDay();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_TRDREIMID_55A() {
    try {

        if (document.MAINFORM.X103_TRDREIMID_55A.value.trim() != '') {
            SYS_GetCUBK('X103_TRDREIMID_55A', 'X103_TRDREIMID_55A', '', 'SYM_PYMT_Clr_Thd_Reim_Ins()', 'TRUE');
            if (document.MAINFORM.X103_TRDREIMSW_55A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_TRDREIMID_55A, 'X103_TRDREIMSW_55A');
            }
        } else {
            SYM_PYMT_Clr_Thd_Reim_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_RECCORRID_54A() {
    try {

        if (document.MAINFORM.X103_RECCORRID_54A.value.trim() != '') {
            SYS_GetCUBK('X103_RECCORRID_54A', 'X103_RECCORRID_54A', '', 'SYM_PYMT_Clr_Rec_Corres()', 'TRUE');
            if (document.MAINFORM.X103_RECCORRSW_54A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_RECCORRID_54A, 'X103_RECCORRSW_54A');
            }
        } else {
            SYM_PYMT_Clr_Rec_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_TRDREIMSW_55A() {
    try {

        if (document.MAINFORM.X103_TRDREIMSW_55A.value.trim() != '') {
            document.MAINFORM.X103_TRDREIMSW_55A.value = document.MAINFORM.X103_TRDREIMSW_55A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_TRDREIMSW_55A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X103_TRDREIMID_55A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_TRDREIMID_55A();
        } else {
            SYM_PYMT_Clr_Thd_Reim_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_SENDCORRSW53A() {
    try {

        if (document.MAINFORM.X103_SENDCORRSW53A.value.trim() != '') {
            document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_SENDCORRSW53A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X103_SENDCORRID53A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_SENDCORRID53A();
        } else {
            SYM_PYMT_Clr_Send_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_SENDCORRID53A() {
    try {

        if (document.MAINFORM.X103_SENDCORRID53A.value.trim() != '') {
            SYS_GetCUBK('X103_SENDCORRID53A', 'X103_SENDCORRID53A', '', 'SYM_PYMT_Clr_Send_Corres()', 'TRUE');
            if (document.MAINFORM.X103_SENDCORRSW53A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_SENDCORRID53A, 'X103_SENDCORRSW53A');
            }
        } else {
            SYM_PYMT_Clr_Send_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_RECCORRSW_54A() {
    try {

        if (document.MAINFORM.X103_RECCORRSW_54A.value.trim() != '') {
            document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_RECCORRSW_54A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X103_RECCORRID_54A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_RECCORRID_54A();
        } else {
            SYM_PYMT_Clr_Rec_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_SEND_BKSW_51A() {
    try {

        if (document.MAINFORM.X103_SEND_BKSW_51A.value.trim() != '') {
            document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_SEND_BKSW_51A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X103_SEND_BKID_51A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_SEND_BKID_51A();
        } else {
            SYM_PYMT_Clr_Send_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_SEND_BKID_51A() {
    try {

        if (document.MAINFORM.X103_SEND_BKID_51A.value.trim() != '') {
            SYS_GetCUBK('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A', '', 'SYM_PYMT_Clr_Send_Ins()', 'TRUE');
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_SEND_BKID_51A, 'X103_SEND_BKSW_51A'); // Utility Auto Fix Comments
            }
        } else {
            SYM_PYMT_Clr_Send_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_BENECU_SW_59A() {
    try {

        SYT_chg_FldVal_UpCase(document.MAINFORM.X103_BENECU_SW_59A);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ENV_CONT_77T() {
    try {

        if (document.MAINFORM.X103_ENV_CONT_77T.value.length > 0) {
            alert("The content of this field is subject to bilateral agreements existing between the ordering customer and the Beneficiary");
        }
        SYM_PYMT_Chk_CrossValidation("ENVELOPE_CONT");
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_CrossValidation(from) {
    try {

        if (from == "REMIT_INFO" && document.MAINFORM.X103_ENV_CONT_77T.value != "") {
            document.MAINFORM.X103_REMIT_INF1_70.value = "";
            document.MAINFORM.X103_REMIT_INF2_70.value = "";
            document.MAINFORM.X103_REMIT_INF3_70.value = "";
            document.MAINFORM.X103_REMIT_INF4_70.value = "";
            alert("SWIFT Fields 70 MT103 and Field 77T MT103 should not have values together");
        }
        if (from == "ENVELOPE_CONT" &&
            (document.MAINFORM.X103_REMIT_INF1_70.value != "" || document.MAINFORM.X103_REMIT_INF2_70.value != "" ||
                document.MAINFORM.X103_REMIT_INF3_70.value != "" || document.MAINFORM.X103_REMIT_INF4_70.value != "")) {
            document.MAINFORM.X103_ENV_CONT_77T.value = "";
            alert("SWIFT Fields 70 MT10X and Field 77T MT103 should not have values together");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SND_TO_REC_103() {
    try {

        var obj; // Utility Auto Fix Comments
        obj = window.event.srcElement;
        SYM_PYMT_Chk_SND_TO_REC_103(obj, true);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_SND_TO_REC_103(objToCheck, bolShowAlerts) {
    try {

        var bolReturn; // Utility Auto Fix Comments
        bolReturn = false;
        // the following test are only done if there is some info that the user has placed in the parameter
        if (objToCheck.value.length == 0) {
            return true;
        }
        if (objToCheck.name.substring(objToCheck.name.length - 4, objToCheck.name.length).charAt(0) == "1") {
            if (SYM_PYMT_Chk_SubStrAtStrStart(objToCheck.value, new Array('/ACC/', '/INS/', '/INT/', '/REJT/', '/RETN/')) == '') {
                if (bolShowAlerts == true) {
                    alert(objToCheck.title + " value is not valid.One of the codes ACC, INS, INT, REJT or RETN may be used, placed between slashes(\'/\')");
                    objToCheck.value = '';
                }
                bolReturn = true;
            }
        } else {
            // Check the condition of this tag and give warning messages to the user
            if (SYM_PYMT_Chk_SubStrAtStrStart(objToCheck.value, new Array('//', '/ACC/', '/INS/', '/INT/')) == '') {
                if (bolShowAlerts == true) {
                    alert(objToCheck.title + " value is not valid.One of the codes ACC, INS, INT must be used, placed between slashes ('/'). Narrative text relating to a preceding code, must start with a double slash '//'");
                    objToCheck.value = '';
                }
                bolReturn = true;
            }
        }
        return bolReturn;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_SubStrAtStrStart(theString, strValuesToCheck) {
    try {

        for (i = 0; i < strValuesToCheck.length; i++) {
            if (theString.substring(0, strValuesToCheck[i].length) == strValuesToCheck[i]) {
                return strValuesToCheck[i];
            }
        }
        return "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SearchLookUp(colsToFields, extColsToFields, manualAppend) {
    try {

        var addtCondCheck; // Utility Auto Fix Comments
        var sqlStr; // Utility Auto Fix Comments
        var sqlStrApnd; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        sqlStr = "";
        sqlStrApnd = "";
        addtCondCheck = false;
        for (i = 0; i < 2; i++) {
            x = document.MAINFORM.elements[colsToFields[i + 1]];
            x.value = x.value.trim();
            x.value = x.value.toLowerCase();
            if (document.MAINFORM.elements[colsToFields[i + 1]].value != "") {
                if (sqlStr.length > 0) {
                    sqlStr += " AND ";
                }
                if (x.value != "") { // Utility Auto Fix Comments
                    sqlStr += 'LOWER(' + colsToFields[i] + ')' + " LIKE \'<--" + colsToFields[i + 1] + "-->" + "%" + "\'"; // Utility Auto Fix Comments
                } // Utility Auto Fix Comments
            }
            i++;
        }
        if (manualAppend != null) {
            sqlStr += " AND " + manualAppend;
        }

        if (extColsToFields != null) {
            if (sqlStr.length != 0) {
                sqlStrApnd += " AND (";
            } else {
                sqlStrApnd += "((1=0) ";
            }
            for (i = 0; i < extColsToFields.length; i++) {
                if (document.MAINFORM.elements[extColsToFields[i + 1]].value != "") {
                    if (sqlStrApnd.charAt(sqlStrApnd.length - 1) != "(") {
                        sqlStrApnd += " OR ";
                    }
                    sqlStrApnd += extColsToFields[i] + " LIKE \'<--" + extColsToFields[i + 1] + "-->" + "%" + "\'";
                    addtCondCheck = true;
                }
                i++;
            }
            sqlStrApnd += ")";
        }

        if (addtCondCheck) {
            sqlStr += sqlStrApnd;
        }

        if (sqlStr.length == 0) {
            sqlStr += "1=1";
        }

        return sqlStr;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_REG_REPORTING() {
    try {

        var obj; // Utility Auto Fix Comments
        var sValue; // Utility Auto Fix Comments
        obj = window.event.srcElement;
        sValue = obj.value;
        if (sValue != "") {
            if (SYM_PYMT_Chk_SubStrAtStrStart(sValue, new Array('BENEFRES', 'ORDERRES')) != '') {
                alert("One of the codes BENEFRES, ORDERRES may be used, placed between slashes ('/'), formatted /8a/2!a[//additional information.]");
                sValue = "";
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_REMIT_INFO() {
    try {

        var obj; // Utility Auto Fix Comments
        var value; // Utility Auto Fix Comments
        // Check the condition of this tag and give warning messages to the user            
        obj = window.event.srcElement;
        value = obj.value;
        if (obj.value != "") {
            //if ( SYM_PYMT_Chk_SubStrAtStrStart( value, new Array('/INV/', '/IPI/', '/RFB/', '/ROC/','/TSU/')) == '') {
            //alert ("One of the codes INV, IPI, RFB, ROC or TSU may be used, placed between slashes(\'/\')");
            //obj.value = "";
            //} else {
            //	SYM_PYMT_Chk_RemitInfo( obj, true );
            //}
            SYM_PYMT_Chk_CrossValidation("REMIT_INFO");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ADV_BKSW_B2() {
    try {

        if (document.MAINFORM.X103_ADV_BKSW_B2.value.trim() != '') {
            document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_ADV_BKSW_B2, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X103_ADV_BKID_B2.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_ADV_BKID_B2();
        } else {
            SYM_PYMT_Clr_Rec_Bank();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ADV_BKID_B2() {
    try {

        if (document.MAINFORM.X103_ADV_BKID_B2.value.trim() != '') {
            //SYS_GetCUBK('X103_ADV_BKID_B2','X103_ADV_BKID_B2','SYM_PYMT_setRecChgs()','SYM_PYMT_Clr_Rec_Bank()','true');
            SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2', 'SYF_PYMT_Chg_X103_DET_CHG_71A()', 'SYM_PYMT_Clr_Rec_Bank()', 'true');
            if (document.MAINFORM.X103_ADV_BKSW_B2.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_ADV_BKID_B2, 'X103_ADV_BKSW_B2');
                if (document.MAINFORM.X103_ADV_BKSW_B2.value.trim() != "") {
                    //SYM_PYMT_LocalBankCurrencyPaymentInstruction();
                    document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
                    SYS_GetDataBySSS_S('System_LocalBankPaymentInstruction_TRX', 'CR_CCY;AC_WT_INST_CNTY_CODE;COUNTRY;C_MAIN_REF');
                }
            }
        } else {
            SYM_PYMT_Clr_Rec_Bank();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACCBKADD2_57A() {
    try {

        if (document.MAINFORM.X103_ACCBKADD2_57A.value.trim() != '') {
            SYM_PYMT_Get_103Routing_NOBIC();
        } else {
            SYM_PYMT_Clr_All_Banks('clear103');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Get_103Routing_NOBIC() {
    try {

        var sCntyCode; // Utility Auto Fix Comments
        var sCrCCY; // Utility Auto Fix Comments
        var sMsgType; // Utility Auto Fix Comments
        var sRoutPriority; // Utility Auto Fix Comments
        var sSwAdd; // Utility Auto Fix Comments
        sSwAdd = '';
        sCrCCY = document.MAINFORM.CR_CCY.value;
        sCntyCode = document.MAINFORM.AC_WT_INST_CNTY_CODE.value;
        sRoutPriority = document.MAINFORM.ROUT_PRIORITY.value;
        sMsgType = 'MT103_NOBIC';
        SYM_PYMT_Clr_All_Banks(); //no string param will NOT clear acct with 103 details, only everything else routing related
        SYS_GetPaymentRouting(sCntyCode, sSwAdd, sCrCCY, sRoutPriority, sMsgType, '', 'SYM_PYMT_PostRouting()');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ORD_BKSW_52A() {
    try {

        if (document.MAINFORM.X103_ORD_BKSW_52A.value.trim() != "") {
            document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_ORD_BKSW_52A, document.MAINFORM.X103_ORD_BKID_52A);
            SYM_PYMT_Chg_X103_ORD_BKID_52A();
        } else {
            SYM_PYMT_Clr_Ord_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_MEDI_BKID_56A() {
    try {

        if (document.MAINFORM.X103_MEDI_BKID_56A.value.trim() != '') {
            SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', '', 'SYM_PYMT_Clr_Int_Ins()', 'TRUE');
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_MEDI_BKID_56A, 'X103_MEDI_BKSW_56A');
            }
        } else {
            SYM_PYMT_Clr_Int_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACC_BKNM_57A() {
    try {

        if (document.MAINFORM.X103_ACC_BKNM_57A.value.trim() != '') {
            SYM_PYMT_Get_103Routing_NOBIC();
        } else {
            SYM_PYMT_Clr_All_Banks('clear103');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_MEDI_BKSW_56A() {
    try {

        if (document.MAINFORM.X103_MEDI_BKSW_56A.value.trim() != '') {
            document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X103_MEDI_BKSW_56A, document.MAINFORM.AVAL_WT_BK_ID); // Utility Auto Fix Comments
            document.MAINFORM.X103_MEDI_BKID_56A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X103_MEDI_BKID_56A();
        } else {
            SYM_PYMT_Clr_Int_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACCBKADD3_57A() {
    try {

        if (document.MAINFORM.X103_ACCBKADD3_57A.value.trim() != '') {
            SYM_PYMT_Get_103Routing_NOBIC();
        } else {
            SYM_PYMT_Clr_All_Banks('clear103');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X103_ACCBKADD1_57A() {
    try {

        if (document.MAINFORM.X103_ACCBKADD1_57A.value.trim() != '') {
            SYM_PYMT_Get_103Routing_NOBIC();
        } else {
            SYM_PYMT_Clr_All_Banks('clear103');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_AC_WT_INST_CNTY_CODE() {
    try {

        if (document.MAINFORM.AC_WT_INST_CNTY_CODE.value.trim() != '') {
            document.MAINFORM.AC_WT_INST_CNTY_CODE.value = document.MAINFORM.AC_WT_INST_CNTY_CODE.value.toUpperCase();
            document.MAINFORM.X103_ACC_BKSW_57A.value = "";
            SYS_GetCUBK('AC_WT_INST_CNTY_NM', 'AC_WT_INST_CNTY_CODE', 'SYM_PYMT_Chg_X103_ACC_BKACNO57A()');
        } else {
            document.MAINFORM.AC_WT_INST_CNTY_NM.value = "";
        }

        if (SYS_FUNCTION_NAME == "CompOutPmt") {
            SYF_PYMT_Field72Checker();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BENE_BKSW_58A() {
    try {

        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_BENE_BKSW_58A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_BENE_BKID_58A();
        } else {
            SYM_PYMT_Clr_202_Ben_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BENE_BKID_58A() {
    try {

        if (document.MAINFORM.X202_BENE_BKID_58A.value.trim() != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', '', 'SYM_PYMT_Clr_202_Ben_Ins()', 'TRUE');
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_BENE_BKID_58A, 'X202_BENE_BKSW_58A');
            }
        } else {
            SYM_PYMT_Clr_202_Ben_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_ADV_BKSW_B2() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value.trim() != '') {
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_ADV_BKSW_B2, document.MAINFORM.AVAL_WT_BK_ID); // Utility Auto Fix Comments
            document.MAINFORM.X202_ADV_BKID_B2.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_ADV_BKID_B2();
        } else {
            SYM_PYMT_Clr_202_Rec_Bank();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_ADV_BKID_B2() {
    try {

        if (document.MAINFORM.X202_ADV_BKID_B2.value.trim() != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', '', 'SYM_PYMT_Clr_202_Rec_Bank()', 'TRUE');
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_ADV_BKID_B2, 'X202_ADV_BKSW_B2');
            }
        } else {
            SYM_PYMT_Clr_202_Rec_Bank();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_MEDI_BKSW_56A() {
    try {

        if (document.MAINFORM.X202_MEDI_BKSW_56A.value.trim() != "") {
            document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_MEDI_BKSW_56A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X202_MEDI_BKID_56A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_MEDI_BKID_56A();
        } else {
            SYM_PYMT_Clr_202_Int_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_MEDI_BKID_56A() {
    try {

        if (document.MAINFORM.X202_MEDI_BKID_56A.value.trim() != "") {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', '', 'SYM_PYMT_Clr_202_Int_Ins()', 'TRUE');
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.trim() == "") {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_MEDI_BKID_56A, 'X202_MEDI_BKSW_56A');
            }
        } else {
            SYM_PYMT_Clr_202_Int_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_SENDCORRSW53A() {
    try {

        if (document.MAINFORM.X202_SENDCORRSW53A.value.trim() != "") {
            document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_SENDCORRSW53A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X202_SENDCORRID53A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.X202_SENDCORRID53A.value = document.MAINFORM.X202_SENDCORRSW53A.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_SENDCORRID53A();
        } else {
            SYM_PYMT_Clr_202_Send_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_SENDCORRID53A() {
    try {

        if (document.MAINFORM.X202_SENDCORRID53A.value.trim() != "") {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', '', 'SYM_PYMT_Clr_202_Send_Corres()', 'TRUE');
            if (document.MAINFORM.X202_SENDCORRSW53A.value.trim() == "") {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_SENDCORRID53A, 'X202_SENDCORRSW53A');
            }
        } else {
            SYM_PYMT_Clr_202_Send_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_ACC_BKID_57A() {
    try {

        if (document.MAINFORM.X202_ACC_BKID_57A.value.trim() != "") {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', '', 'SYM_PYMT_Clr_202_Acct_With_Ins()', 'TRUE');
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.trim() == "") {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_ACC_BKID_57A, 'X202_ACC_BKSW_57A');
            }
        } else {
            SYM_PYMT_Clr_202_Acct_With_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_RECCORRID_54A() {
    try {

        if (document.MAINFORM.X202_RECCORRID_54A.value.trim() != "") {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', '', 'SYM_PYMT_Clr_202_Rec_Corres()', 'TRUE');
            if (document.MAINFORM.X202_RECCORRSW_54A.value.trim() == "") {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_RECCORRID_54A, 'X202_RECCORRSW_54A');
            }
        } else {
            SYM_PYMT_Clr_202_Rec_Corres(); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_RECCORRSW_54A() {
    try {

        if (document.MAINFORM.X202_RECCORRSW_54A.value.trim() != "") {
            document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_RECCORRSW_54A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X202_RECCORRID_54A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_RECCORRID_54A();
        } else {
            SYM_PYMT_Clr_202_Rec_Corres();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_ORDBK_ID_52A() {
    try {

        if (document.MAINFORM.X202_ORDBK_ID_52A.value.trim() != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', '', 'SYM_PYMT_Clr_202_Ord_Ins()', 'TRUE');
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.trim() == '') {
                SYM_PYMT_getSWADDFromRef(document.MAINFORM.X202_ORDBK_ID_52A, 'X202_ORDBK_SW_52A'); // Utility Auto Fix Comments
            }
        } else {
            SYM_PYMT_Clr_202_Ord_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_ACC_BKSW_57A() {
    try {

        if (document.MAINFORM.X202_ACC_BKSW_57A.value.trim() != "") {
            document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_ACC_BKSW_57A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_ACC_BKID_57A();
        } else {
            SYM_PYMT_Clr_202_Acct_With_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_showAccounts() {
    try {

        SYM_PYMT_ProtOrdCust();
        if (document.MAINFORM.NUM_ACCTS.value != 1) {
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', SYM_PYMT_SYS_buildSQLCond(new Array('c_cust_id','X103_ORDCU_ID_50A','C_AC_NUMBER','X103_ORDCUACNO_50A','C_CURRENCY','DB_CCY')));
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', 'C_CUST_ID like \'<--X103_ORDCU_ID_50A-->%\' AND C_AC_NUMBER like \'<--X103_ORDCUACNO_50A-->%\' AND C_CURRENCY like \'<--DB_CCY-->%\' AND (C_DBT_CRDT = \'B\' OR  C_DBT_CRDT=\'<--FIELD_6_X-->\')');
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '4');
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_ORDBK_SW_52A() {
    try {

        if (document.MAINFORM.X202_ORDBK_SW_52A.value.trim() != "") {
            document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value.toUpperCase();
            SYT_getIdFromBIC(document.MAINFORM.X202_ORDBK_SW_52A, document.MAINFORM.AVAL_WT_BK_ID);
            document.MAINFORM.X202_ORDBK_ID_52A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
            SYM_PYMT_Chg_X202_ORDBK_ID_52A();
        } else {
            SYM_PYMT_Clr_202_Ord_Ins();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BK2BK_INF1_72() {
    try {

        SYM_PYMT_Chk_ContentsValid(MAINFORM.X202_BK2BK_INF1_72, 3);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_ContentsValid(fname, number) {
    try {

        var fval; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        var subs1; // Utility Auto Fix Comments
        var subs2; // Utility Auto Fix Comments
        var subs3; // Utility Auto Fix Comments
        var subs4; // Utility Auto Fix Comments
        var subs5; // Utility Auto Fix Comments
        var subs6; // Utility Auto Fix Comments
        var subs7; // Utility Auto Fix Comments
        var subs8; // Utility Auto Fix Comments
        var subs9; // Utility Auto Fix Comments
        var test; // Utility Auto Fix Comments
        var totlength; // Utility Auto Fix Comments
        var tt; // Utility Auto Fix Comments
        tt = fname.value;
        name = fname.name;
        test = tt.toUpperCase();
        fval = number;
        totlength = test.length;
        subs1 = test.substring(0, 1); // Start '/' for string
        subs2 = test.substring(0, 2); // Start position '//' for string
        subs3 = test.substring(1, 4); // Check 3 digit string
        subs4 = test.substring(5, 4); // Check 5th position for '/'
        subs5 = test.substring(6, 5); // end '/' for 4 digit code.
        subs7 = test.substring(1, 5); // 4 Digit code
        subs6 = test.substring(9, 8); // end '/' for 7 digit code
        subs8 = test.substring(1, 8); // 7 Digit code
        subs9 = subs8.length;
        if (test != "") {
            if ((subs2 != "//") && (subs1 == "/") && (subs4 == "/" || subs5 == '/' || subs6 == '/')) {}
            if ((subs3 == "INV" && fval == 1 && subs4 == "/") ||
                (subs3 == "IPI" && fval == 1 && subs4 == "/") ||
                (subs3 == "RFB" && fval == 1 && subs4 == "/") ||
                (subs3 == "ROC" && fval == 1 && subs4 == "/") ||
                (subs3 == "ACC" && fval == 2 || fval == 3 && subs4 == "/") ||
                (subs3 == "INS" && fval == 2 || fval == 3 && subs4 == "/") ||
                (subs3 == "INT" && fval == 2 || fval == 3 && subs4 == "/") ||
                (subs3 == "BNF" && fval == 3 && subs4 == "/") ||
                (subs7 == "PHON" && fval == 3 && subs5 == "/") ||
                (subs7 == "TELE" && fval == 3 && subs5 == '/') ||
                (subs7 == "REJT" && fval == 2 || fval == 3 && subs5 == "/") ||
                (subs7 == "RETN" && fval == 2 || fval == 3 && subs5 == "/") ||
                (subs8 == "PHONBEN" && fval == 3) ||
                (subs8 == "PHONIBK" && fval == 3) ||
                (subs8 == "TELEBEN" && fval == 3) ||
                (subs8 == "TELEIBK" && fval == 3)) {
                if (subs3 == "IPI" && fval == 1 && subs4 == "/" && totlength > 25) {
                    alert("Only max 20 characters allowed after code.");
                } else if (subs3 == "RFB" && fval == 1 && subs4 == "/" && totlength > 21) {
                    alert("Only max 16 characters allowed after code.");
                } else if (subs9 == 7 && fval == 3) {
                    if (subs8 != "PHONBEN" && subs8 != "PHONIBK" && subs8 != "TELEBEN" && subs8 != "TELEIBK") {
                        // alert("Error0: Valid codes are ACC, BNF, INS, INT, PHON, PHONBEN, PHONIBK, TELE, TELEBEN, TELEIBK,TSU");
                        return;
                    }
                } else {
                    return;
                }
            } else {
                if (fval == 1) {
                    alert("Error1: Valid codes are INV, IPI, RFB or ROC");
                }
                if (fval == 2) {
                    alert("Error2: Valid codes are ACC, INS, INT,REJT or RETN");
                }
                if (fval == 3) {
                    alert("Error3: Valid codes are ACC, BNF, INS, INT, PHON, PHONBEN, PHONIBK, TELE, TELEBEN, TELEIBK, REJT or RETN");
                    if (name == "X202_BK2BK_INF3_72") {
                        document.MAINFORM.X202_BK2BK_INF3_72.value = '';
                    } else if (name == "X202_BK2BK_INF4_72") {
                        document.MAINFORM.X202_BK2BK_INF4_72.value = '';
                    } else if (name == "X202_BK2BK_INF5_72") {
                        document.MAINFORM.X202_BK2BK_INF5_72.value = '';
                    } else if (name == "X202_BK2BK_INF6_72") {
                        document.MAINFORM.X202_BK2BK_INF6_72.value = '';
                    }
                }
                return false;
            }

        } else if (subs2 == "//" && totlength > 2) {
            if (fval == 2 && name == "X103_BK2BK_INF1_72" && subs2 == "//") {
                alert("You cannot start this line with a '//'");
            }
            if (fval == 3 && name == "X202_BK2BK_INF1_72" && subs2 == "//") {
                alert("You cannot start this line with a '//'");
            }
            return true;
        } else {
            alert("The line must start with either / followed by a valid code, or //");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BK2BK_INF2_72() {
    try {

        SYM_PYMT_Chk_ContentsValid(MAINFORM.X202_BK2BK_INF2_72, 3);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BK2BK_INF3_72() {
    try {

        SYM_PYMT_Chk_ContentsValid(MAINFORM.X202_BK2BK_INF3_72, 3);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BK2BK_INF4_72() {
    try {

        SYM_PYMT_Chk_ContentsValid(MAINFORM.X202_BK2BK_INF4_72, 3);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BK2BK_INF5_72() {
    try {

        SYM_PYMT_Chk_ContentsValid(MAINFORM.X202_BK2BK_INF5_72, 3);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_X202_BK2BK_INF6_72() {
    try {

        SYM_PYMT_Chk_ContentsValid(MAINFORM.X202_BK2BK_INF6_72, 3);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_lookup_CrAcctNo() {
    try {

        if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "NOSTRO";
            if (document.MAINFORM.X103_SENDCORRID53A.value.trim() != '') {
                //SYS_InqCUBK_Sql('CPYT_CR_BK_AC_INQ', 'C_CLEAR_TYPE = \'NOSTRO\' AND C_ACCT_CCY = \'<--CR_CCY-->\' AND C_ACCT_WITH_ID = \'<--X103_SENDCORRID53A-->\' AND C_CLEAR_VALID =\'T\' ');
                SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '1');
            } else if (document.MAINFORM.X103_ADV_BKID_B2.value.trim() != '') {
                //SYS_InqCUBK_Sql('CPYT_CR_BK_AC_INQ', 'C_CLEAR_TYPE = \'NOSTRO\' AND C_ACCT_CCY = \'<--CR_CCY-->\' AND C_ACCT_WITH_ID = \'<--X103_ADV_BKID_B2-->\' AND C_CLEAR_VALID =\'T\' ');
                SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '2');
            } else {
                //SYS_InqCUBK_Sql('CPYT_CR_BK_AC_INQ', 'C_CLEAR_TYPE = \'NOSTRO\' AND C_ACCT_CCY = \'<--CR_CCY-->\' AND C_CLEAR_VALID =\'T\' ');
                SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '3');
            }
        } else {
            if (document.MAINFORM.X103_SENDCORRID53A.value.trim() != '') {
                document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "VOSTRO";
                //SYS_InqCUBK_Sql('CPYT_CR_BK_AC_INQ', 'C_CLEAR_TYPE = \'VOSTRO\' AND C_ACCT_CCY = \'<--CR_CCY-->\' AND C_ACCT_WITH_ID = \'<--X103_SENDCORRID53A-->\' AND C_CLEAR_VALID =\'T\' ');
                SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '1');
            } else if (document.MAINFORM.X103_ADV_BKID_B2.value.trim() != '') {
                //SYS_InqCUBK_Sql('CPYT_CR_BK_AC_INQ', 'C_CLEAR_TYPE = \'VOSTRO\' AND C_ACCT_CCY = \'<--CR_CCY-->\' AND C_ACCT_WITH_ID = \'<--X103_ADV_BKID_B2-->\' AND C_CLEAR_VALID =\'T\' ');
                SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '2');
            } else {
                //SYS_InqCUBK_Sql('CPYT_CR_BK_AC_INQ', 'C_CLEAR_TYPE = \'VOSTRO\' AND C_ACCT_CCY = \'<--CR_CCY-->\' AND C_CLEAR_VALID =\'T\' ');
                SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '3');
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_AC_WT_INST_CNTY_CODE_Lookup() {
    try {

        SYS_InqCUBK('AC_WT_INST_CNTY_NM');

        if (SYS_FUNCTION_NAME == "CompOutPmt") {
            SYF_PYMT_Field72Checker();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_B2_lookup1() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_ADV_BKNM_B2.value.trim();
        bkAdd1 = document.MAINFORM.X103_ADV_BKADD1_B2.value.trim();
        bkAdd2 = document.MAINFORM.X103_ADV_BKADD2_B2.value.trim();
        bkAdd3 = document.MAINFORM.X103_ADV_BKADD3_B2.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_ADV_BKID_B2','PARTY_NM like \'<--X103_ADV_BKNM_B2-->%\' AND ADD1 like \'<--X103_ADV_BKADD1_B2-->%\' AND ADD2 like \'<--X103_ADV_BKADD2_B2-->%\' AND ADD3 like \'<--X103_ADV_BKADD3_B2-->%\' ');
            //SYS_InqCUBK_Sql('X103_ADV_BKID_B2', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ADV_BKNM_B2', 'ADD1', 'X103_ADV_BKADD1_B2', 'ADD2', 'X103_ADV_BKADD2_B2', 'ADD3', 'X103_ADV_BKADD3_B2')));
            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_IntIns_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_MEDI_BKNM_56A.value.trim();
        bkAdd1 = document.MAINFORM.X103MEDIBKADD1_56A.value.trim();
        bkAdd2 = document.MAINFORM.X103MEDIBKADD2_56A.value.trim();
        bkAdd3 = document.MAINFORM.X103MEDIBKADD3_56A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_MEDI_BKID_56A','PARTY_NM like \'<--X103_MEDI_BKNM_56A-->%\' AND ADD1 like \'<--X103MEDIBKADD1_56A-->%\' AND ADD2 like \'<--X103MEDIBKADD2_56A-->%\' AND ADD3 like \'<--X103MEDIBKADD13_56A-->%\' ');
            //SYS_InqCUBK_Sql('X103_MEDI_BKID_56A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_MEDI_BKNM_56A', 'ADD1', 'X103MEDIBKADD1_56A', 'ADD2', 'X103MEDIBKADD2_56A', 'ADD3', 'X103MEDIBKADD3_56A')));
            SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_AWI_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_ACC_BKNM_57A.value.trim();
        bkAdd1 = document.MAINFORM.X103_ACCBKADD1_57A.value.trim();
        bkAdd2 = document.MAINFORM.X103_ACCBKADD2_57A.value.trim();
        bkAdd3 = document.MAINFORM.X103_ACCBKADD3_57A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_ACC_BKID_57A','PARTY_NM like \'<--X103_ACC_BKNM_57A-->%\' AND ADD1 like \'<--X103_ACCBKADD1_57A-->%\' AND ADD2 like \'<--X103_ACCBKADD2_57A-->%\' AND ADD3 like \'<--X103_ACCBKADD3_57A-->%\' ');
            //SYS_InqCUBK_Sql('X103_ACC_BKID_57A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ACC_BKNM_57A', 'ADD1', 'X103_ACCBKADD1_57A', 'ADD2', 'X103_ACCBKADD2_57A', 'ADD3', 'X103_ACCBKADD3_57A')));
            SYS_InqCUBK_byCondition('X103_ACC_BKID_57A', '1');
        } else {
            alert("Search is not possible without Name");
        }
        if (SYS_FUNCTION_NAME == "CompOutPmt") {
            SYF_PYMT_Field72Checker();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Ord_Ins_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_ORD_BKNM_52A.value.trim();
        bkAdd1 = document.MAINFORM.X103_ORDBKADD1_52A.value.trim();
        bkAdd2 = document.MAINFORM.X103_ORDBKADD2_52A.value.trim();
        bkAdd3 = document.MAINFORM.X103_ORDBKADD3_52A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_ORD_BKID_52A','PARTY_NM like \'<--X103_ORD_BKNM_52A-->%\' AND ADD1 like \'<--X103_ORDBKADD1_52A-->%\' AND ADD2 like \'<--X103_ORDBKADD2_52A-->%\' AND ADD3 like \'<--X103_ORDBKADD3_52A-->%\' ');
            //SYS_InqCUBK_Sql('X103_ORD_BKID_52A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORD_BKNM_52A', 'ADD1', 'X103_ORDBKADD1_52A', 'ADD2', 'X103_ORDBKADD2_52A', 'ADD3', 'X103_ORDBKADD3_52A')));
            SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Send_Corr_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_SENDCORRNM53A.value.trim();
        bkAdd1 = document.MAINFORM.X103SENDCORADD153A.value.trim();
        bkAdd2 = document.MAINFORM.X103SENDCORADD253A.value.trim();
        bkAdd3 = document.MAINFORM.X103SENDCORADD353A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_SENDCORRID53A','PARTY_NM like \'<--X103_SENDCORRNM53A-->%\' AND ADD1 like \'<--X103SENDCORADD153A-->%\' AND ADD2 like \'<--X103SENDCORADD253A-->%\' AND ADD3 like \'<--X103SENDCORADD353A-->%\' ');
            //SYS_InqCUBK_Sql('X103_SENDCORRID53A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_SENDCORRNM53A', 'ADD1', 'X103SENDCORADD153A', 'ADD2', 'X103SENDCORADD253A', 'ADD3', 'X103SENDCORADD353A')));
            SYS_InqCUBK_byCondition('X103_SENDCORRID53A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Trd_Reim_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_TRDREIMNM_55A.value.trim();
        bkAdd1 = document.MAINFORM.X103TRDREIMADD155A.value.trim();
        bkAdd2 = document.MAINFORM.X103TRDREIMADD255A.value.trim();
        bkAdd3 = document.MAINFORM.X103TRDREIMADD355A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_TRDREIMID_55A','PARTY_NM like \'<--X103_TRDREIMNM_55A-->%\' AND ADD1 like \'<--X103TRDREIMADD155A-->%\' AND ADD2 like \'<--X103TRDREIMADD255A-->%\' AND ADD3 like \'<--X103TRDREIMADD355A-->%\' ');
            //SYS_InqCUBK_Sql('X103_TRDREIMID_55A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_TRDREIMNM_55A', 'ADD1', 'X103TRDREIMADD155A', 'ADD2', 'X103TRDREIMADD255A', 'ADD3', 'X103TRDREIMADD355A')));
            SYS_InqCUBK_byCondition('X103_TRDREIMID_55A', '1');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Rec_Corr_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_RECCORRNM_54A.value.trim();
        bkAdd1 = document.MAINFORM.X103_RECCORADD154A.value.trim();
        bkAdd2 = document.MAINFORM.X103_RECCORADD254A.value.trim();
        bkAdd3 = document.MAINFORM.X103_RECCORADD354A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_RECCORRID_54A','PARTY_NM like \'<--X103_RECCORRNM_54A-->%\' AND ADD1 like \'<--X103_RECCORADD154A-->%\' AND ADD2 like \'<--X103_RECCORADD254A-->%\' AND ADD3 like \'<--X103_RECCORADD354A-->%\' ');
            //SYS_InqCUBK_Sql('X103_RECCORRID_54A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_RECCORRNM_54A', 'ADD1', 'X103_RECCORADD154A', 'ADD2', 'X103_RECCORADD254A', 'ADD3', 'X103_RECCORADD354A')));
            SYS_InqCUBK_byCondition('X103_RECCORRID_54A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_Send_Ins_lookup() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X103_SEND_BKNM_51A.value.trim();
        bkAdd1 = document.MAINFORM.X103SENDBKADD1_51A.value.trim();
        bkAdd2 = document.MAINFORM.X103SENDBKADD2_51A.value.trim();
        bkAdd3 = document.MAINFORM.X103SENDBKADD3_51A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X103_SEND_BKID_51A','PARTY_NM like \'<--X103_SEND_BKNM_51A-->%\' AND ADD1 like \'<--X103SENDBKADD1_51A-->%\' AND ADD2 like \'<--X103SENDBKADD2_51A-->%\' AND ADD3 like \'<--X103SENDBKADD3_51A-->%\' ');
            //SYS_InqCUBK_Sql('X103_SEND_BKID_51A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_SEND_BKNM_51A', 'ADD1', 'X103SENDBKADD1_51A', 'ADD2', 'X103SENDBKADD2_51A', 'ADD3', 'X103SENDBKADD3_51A')));
            SYS_InqCUBK_byCondition('X103_SEND_BKID_51A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup3() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_ADV_BKNM_B2.value.trim();
        bkAdd1 = document.MAINFORM.X202_ADV_BKADD1_B2.value.trim();
        bkAdd2 = document.MAINFORM.X202_ADV_BKADD2_B2.value.trim();
        bkAdd3 = document.MAINFORM.X202_ADV_BKADD3_B2.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_ADV_BKID_B2','PARTY_NM like \'<--X202_ADV_BKNM_B2-->%\' AND ADD1 like \'<--X202_ADV_BKADD1_B2-->%\' AND ADD2 like \'<--X202_ADV_BKADD2_B2-->%\' AND ADD3 like \'<--X202_ADV_BKADD3_B2-->%\' ');
            //SYS_InqCUBK_Sql('X202_ADV_BKID_B2', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_ADV_BKNM_B2', 'ADD1', 'X202_ADV_BKADD1_B2', 'ADD2', 'X202_ADV_BKADD2_B2', 'ADD3', 'X202_ADV_BKADD3_B2')));
            SYS_InqCUBK_byCondition('X202_ADV_BKID_B2', '1');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup4() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_BENE_BKNM_58A.value.trim();
        bkAdd1 = document.MAINFORM.X202BENEBKADD1_58A.value.trim();
        bkAdd2 = document.MAINFORM.X202BENEBKADD2_58A.value.trim();
        bkAdd3 = document.MAINFORM.X202BENEBKADD3_58A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_BENE_BKID_58A','PARTY_NM like \'<--X202_BENE_BKNM_58A-->%\' AND ADD1 like \'<--X202BENEBKADD1_58A-->%\' AND ADD2 like \'<--X202BENEBKADD2_58A-->%\' AND ADD3 like \'<--X202BENEBKADD3_58A-->%\' ');
            //SYS_InqCUBK_Sql('X202_BENE_BKID_58A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_BENE_BKNM_58A', 'ADD1', 'X202BENEBKADD1_58A', 'ADD2', 'X202BENEBKADD2_58A', 'ADD3', 'X202BENEBKADD3_58A')));
            SYS_InqCUBK_byCondition('X202_BENE_BKID_58A', '1');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup5() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_ORDBK_NM_52A.value.trim();
        bkAdd1 = document.MAINFORM.X202_ORDBKADD1_52A.value.trim();
        bkAdd2 = document.MAINFORM.X202_ORDBKADD2_52A.value.trim();
        bkAdd3 = document.MAINFORM.X202_ORDBKADD3_52A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_ORDBK_ID_52A','PARTY_NM like \'<--X202_ORDBK_NM_52A-->%\' AND ADD1 like \'<--X202_ORDBKADD1_52A-->%\' AND ADD2 like \'<--X202_ORDBKADD2_52A-->%\' AND ADD3 like \'<--X202_ORDBKADD3_52A-->%\' ');
            //SYS_InqCUBK_Sql('X202_ORDBK_ID_52A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_ORDBK_NM_52A', 'ADD1', 'X202_ORDBKADD1_52A', 'ADD2', 'X202_ORDBKADD2_52A', 'ADD3', 'X202_ORDBKADD3_52A')));
            SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup8() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_MEDI_BKNM_56A.value.trim();
        bkAdd1 = document.MAINFORM.X202MEDIBKADD1_56A.value.trim();
        bkAdd2 = document.MAINFORM.X202MEDIBKADD2_56A.value.trim();
        bkAdd3 = document.MAINFORM.X202MEDIBKADD3_56A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_MEDI_BKID_56A','PARTY_NM like \'<--X202_RECCORRNM_54A-->%\' AND ADD1 like \'<--X202MEDIBKADD1_56A-->%\' AND ADD2 like \'<--X202MEDIBKADD2_56A-->%\' AND ADD3 like \'<--X202MEDIBKADD3_56A-->%\' ');
            //SYS_InqCUBK_Sql('X202_MEDI_BKID_56A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_MEDI_BKNM_56A', 'ADD1', 'X202MEDIBKADD1_56A', 'ADD2', 'X202MEDIBKADD2_56A', 'ADD3', 'X202MEDIBKADD3_56A')));
            SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup6() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_SENDCORRNM53A.value.trim();
        bkAdd1 = document.MAINFORM.X202SENDCORADD153A.value.trim();
        bkAdd2 = document.MAINFORM.X202SENDCORADD253A.value.trim();
        bkAdd3 = document.MAINFORM.X202SENDCORADD353A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_SENDCORRID53A','PARTY_NM like \'<--X202_SENDCORRNM53A-->%\' AND ADD1 like \'<--X202SENDCORADD153A-->%\' AND ADD2 like \'<--X202SENDCORADD253A-->%\' AND ADD3 like \'<--X202SENDCORADD253A-->%\' ');
            //SYS_InqCUBK_Sql('X202_SENDCORRID53A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_SENDCORRNM53A', 'ADD1', 'X202SENDCORADD153A', 'ADD2', 'X202SENDCORADD253A', 'ADD3', 'X202SENDCORADD253A')));
            SYS_InqCUBK_byCondition('X202_SENDCORRID53A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup9() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_ACC_BKNM_57A.value.trim();
        bkAdd1 = document.MAINFORM.X202_ACCBKADD1_57A.value.trim();
        bkAdd2 = document.MAINFORM.X202_ACCBKADD2_57A.value.trim();
        bkAdd3 = document.MAINFORM.X202_ACCBKADD3_57A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_ACC_BKID_57A','PARTY_NM like \'<--X202_ACC_BKNM_57A-->%\' AND ADD1 like \'<--X202_ACCBKADD1_57A-->%\' AND ADD2 like \'<--X202_ACCBKADD2_57A-->%\' AND ADD3 like \'<--X202_ACCBKADD2_57A-->%\' ');
            //SYS_InqCUBK_Sql('X202_ACC_BKID_57A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_ACC_BKNM_57A', 'ADD1', 'X202_ACCBKADD1_57A', 'ADD2', 'X202_ACCBKADD2_57A', 'ADD3', 'X202_ACCBKADD2_57A')));
            SYS_InqCUBK_byCondition('X202_ACC_BKID_57A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_X202_lookup7() {
    try {

        var bkAdd1; // Utility Auto Fix Comments
        var bkAdd2; // Utility Auto Fix Comments
        var bkAdd3; // Utility Auto Fix Comments
        var bkName; // Utility Auto Fix Comments
        bkName = document.MAINFORM.X202_RECCORRNM_54A.value.trim();
        bkAdd1 = document.MAINFORM.X202_RECCORADD154A.value.trim();
        bkAdd2 = document.MAINFORM.X202_RECCORADD254A.value.trim();
        bkAdd3 = document.MAINFORM.X202_RECCORADD354A.value.trim();
        if (bkName != "") {
            //SYS_InqCUBK_Sql('X202_RECCORRID_54A','PARTY_NM like \'<--X202_RECCORRNM_54A-->%\' AND ADD1 like \'<--X202_RECCORADD154A-->%\' AND ADD2 like \'<--X202_RECCORADD254A-->%\' AND ADD3 like \'<--X202_RECCORADD354A-->%\' ');
            //SYS_InqCUBK_Sql('X202_RECCORRID_54A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_RECCORRNM_54A', 'ADD1', 'X202_RECCORADD154A', 'ADD2', 'X202_RECCORADD254A', 'ADD3', 'X202_RECCORADD354A')));
            SYS_InqCUBK_byCondition('X202_RECCORRID_54A', '2');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_match_trn_and_settlement_amts() {
    try {

        var Tot_Sett_Amt; // Utility Auto Fix Comments
        Tot_Sett_Amt = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');
        Tot_Sett_Amt = SYS_BeFloat(Tot_Sett_Amt);
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
            Tot_Sett_Amt = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');
            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != Tot_Sett_Amt) {
                alert(' Credit Amount of ' + document.MAINFORM.CR_CALC_AMT.value + ' does not match total on Settlement tab total of ' + DecimalFormat(Tot_Sett_Amt, findDecFromCCY(document.MAINFORM.CR_CCY.value)));
                return false;
            }
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != 0) {
            Tot_Sett_Amt = SYS_getFieldSumByXpath('SETT_AMT', 'PaymentMultipleDebits');
            if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != Tot_Sett_Amt) {
                alert(' Debit Amount of ' + document.MAINFORM.DB_CALC_AMT.value + ' does not match total on Settlement tab total of ' + DecimalFormat(Tot_Sett_Amt, findDecFromCCY(document.MAINFORM.DB_CCY.value)));
                return false;
            }
        } else {
            alert('Error in checking amounts on settlements');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_addToNotes(field) {
    try {

        var notes; // Utility Auto Fix Comments
        notes = document.MAINFORM.NOTES.value;
        document.MAINFORM.NOTES.value = notes + "\n " + field + " has been set to yes on " + SYS_BUSI_DATE + " by the user " + SYS_USER_ID + ".Please Note";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_audit_transaction() {
    try {

        var errorMess; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        errorMess = "";
        for (i = 0; i < auditFieldNames.length; i++) {
            if (auditBeforeValues[i] != auditAfterValues[i]) {
                errorMess = errorMess + auditFieldNames[i] + ' from ' + auditBeforeValues[i] + ' to ' + auditAfterValues[i] + '\r\n';
            }
        }
        if (errorMess != "") {
            SYM_PYMT_add_to_trx_history('B', errorMess);
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_BalanceCheckSuccess() {
    try {

        SYM_PYMT_initialize();
        if (!SYM_PYMT_checkErrorDescription()) { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (!SYM_PYMT_checkAccountNumberSyncAndBalanceNumeric()) { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (!SYM_PYMT_checkAccountStatus()) { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (!SYM_PYMT_checkAccountCurrenciesSync()) { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (!SYM_PYMT_checkAccountStyle()) { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (!SYM_PYMT_checkSufficientFunds()) { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        document.MAINFORM.BALANCECHECK_RESPONSE.value = "true";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_bene_customer_not_found() {
    try {

        SYS_CheckError(document.MAINFORM.X103_BENECU_ID_59A, 'The beneficiary id is invalid');
        document.MAINFORM.X103_BENECU_ID_59A.value = "";
        document.MAINFORM.X103_BENECU_NM_59A.value = "";
        document.MAINFORM.X103BENECUADD1_59A.value = "";
        document.MAINFORM.X103BENECUADD2_59A.value = "";
        document.MAINFORM.X103BENECUADD3_59A.value = "";
        document.MAINFORM.X103_BENECU_SW_59A.value = "";
        document.MAINFORM.X103_TAG_59A.value = "";
        document.MAINFORM.X103_BENECUACNO59A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_callgapi() {
    try {

        if (document.MAINFORM.CHG_CASH_IND.value == 'No') {
            if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != '') {
                SYS_InqGapi_S('BalanceCheck'); //SYS_InqGapi('BalanceCheck','BalanceCheckSuccess');
                SYM_PYMT_BalanceCheckSuccess();
                if (document.MAINFORM.BALANCECHECK_RESPONSE.value == 'false' || document.MAINFORM.BALANCECHECK_RESPONSE.value == '') {
                    //alert("Request for Balance Check Failed");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkAccountCurrenciesSync() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "";
        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1_CCY.value != Int_Acct_Ccy[0]) {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT6.value + " has Invalid Currency. " + "\n";
                accountStat = "Yes";
            }
        }
        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }
        if (accountStat == "Yes") {
            alert(alertmsg);
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkAccountNumberSyncAndBalanceNumeric() {
    try {

        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT6.value != Int_Acct[0] || isNaN(document.MAINFORM.INT_AMT6.value)) {
                alert("Request for Balance Check Failed");
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
                return false;
            }
            if (accountCount == 0) {
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkAccountStatus() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "No";
        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1_STATUS.value != "Open") {
                alertmsg = "Account " + document.MAINFORM.INT_ACT6.value + " is not Active. " + "\n";
                accountStat = "Yes";
                //alert("inside");
            }
            if (accountStat == "Yes") {
                alert(alertmsg);
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "true";
                return false;
            }
            if (accountCount == 0) {
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkAccountStyle() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "No";
        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1_TYPE.value == "N") {
                alertmsg = "Account " + document.MAINFORM.INT_ACT6.value + " has an Invalid Style. " + "\n";
                accountStat = "Yes";
            }
        }
        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }
        if (accountStat == "Yes") {
            alert(alertmsg);
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkDuplicateTransaction(noOfDaysBack, eventName) {
    try {

        var amt; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var duplicateTrn; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        //eventNameCUBK = eventName;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_DATE, noOfDaysBack, "SEVEN_DAYS_BACK", 'B', 'Y', 'Y');
        //date = document.MAINFORM.SEVEN_DAYS_BACK.value;
        //amt = SYM_PYMT_getUnformatAmount(document.MAINFORM.X103_INSTR_AMT_33B.value);
        //table = "PYMT_MASTER";
        //strSQLWhere = "C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and C_TRX_STATUS = 'M' and X103_INSTR_CCY_33B = '" + document.MAINFORM.X103_INSTR_CCY_33B.value + "' and X103_INSTR_AMT_33B = " + amt + " and X103_BENECU_NM_59A = '" + document.MAINFORM.X103_BENECU_NM_59A.value + "' and C_EVENT_NAME = '" + eventNameCUBK + "' and NXT_STATUS = 'Released' and to_char(d_rele_date, 'YYYY-MM-DD') > '" + date + "'";;
        SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_checkDuplicateTransaction_14', '1', 'TRUE');
        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "") {
            return true;
        } else {
            alert(" A transaction has already been issued with similar details under Reference " + duplicateTrn + ". Please verify");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_checkSufficientFunds() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var accountStat1; // Utility Auto Fix Comments
        var accountStat2; // Utility Auto Fix Comments
        var accountStat3; // Utility Auto Fix Comments
        var accountStat4; // Utility Auto Fix Comments
        var accountStat5; // Utility Auto Fix Comments
        var accountStat6; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "";
        accountStat1 = "No";
        accountStat2 = "No";
        accountStat3 = "No";
        accountStat4 = "No";
        accountStat5 = "No";
        accountStat6 = "No";
        if (accountCount == 1) {
            if (SYS_BeFloat(Int_Amt[0]) <= SYS_BeFloat(document.MAINFORM.INT_AMT1.value)) {

                //alertmsg = alertmsg  + "Account " + document.MAINFORM.INT_ACT6.value + " has Insufficient Funds " + "\n";
                accountStat1 = "No";
            } else {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT6.value + " has Insufficient Funds " + "\n";
                accountStat1 = "Yes";

            }
        }
        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }
        if (accountStat1 == "Yes") {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            alert(alertmsg);
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Check_CashEntry() {
    try {

        var ChkVal; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var cashRes; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        cashRes = false;
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");

            if (ChkVal == "Yes") {
                cashRes = true;
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Check_nBOL_AT() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var RelatedRefNo; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        if (document.MAINFORM.CHANNEL.value.toUpperCase() == "NBOL") {
            RelatedRefNo = document.MAINFORM.X103_BENECU_SW_59A.value;
            //Sql_Cond = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "'";
            //Field_List = "RELATED_REF_NO";

            // Internal transfer related_ref_no
            document.MAINFORM.AT_RELATED_REF_NO.value = "";
            SYS_GetTableDataByRule_S('SYM_PYMT_SYM_PYMT_Check_nBOL_AT_15', '1', 'TRUE');

            // If Internal transfer exist, get the status of the current internal transfer
            /*
            if (document.MAINFORM.AT_RELATED_REF_NO.value != "") {

            }
            */
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_CallBackLimit() {
    try {

        var crAmt; // Utility Auto Fix Comments
        var dbAmt; // Utility Auto Fix Comments
        var givenAmt; // Utility Auto Fix Comments
        var holdAmt; // Utility Auto Fix Comments
        var newAmt; // Utility Auto Fix Comments
        var rateList; // Utility Auto Fix Comments
        crAmt = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        dbAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
        if (document.MAINFORM.CCY.value == document.MAINFORM.X103_INSTR_CCY_33B.value) {
            SYM_PYMT_compair_callback_amounts(document.MAINFORM.CR_AMT.value, document.MAINFORM.AMOUNT.value); // Utility Auto Fix Comments
        } else if (document.MAINFORM.CCY.value == document.MAINFORM.X103_SETT_CCY_32A.value) {
            SYM_PYMT_compair_callback_amounts(document.MAINFORM.DB_AMT.value, document.MAINFORM.AMOUNT.value); // Utility Auto Fix Comments
        } else {
            rateList = document.MAINFORM.RATE_TYPE.value + ";" + document.MAINFORM.RATE_TYPE.value + ";" + document.MAINFORM.RATE_NAME.value;
            givenAmt = crAmt;
            holdAmt = document.MAINFORM.AMOUNT.value;
            SYS_GetExchangeRateAMT_S(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.CCY.value, rateList, givenAmt, document.MAINFORM.AMOUNT.name, '', '1;1;1');
            newAmt = document.MAINFORM.AMOUNT.value;
            document.MAINFORM.AMOUNT.value = holdAmt;
            if (newAmt != 0) {
                SYM_PYMT_compair_callback_amounts(newAmt, document.MAINFORM.AMOUNT.value);
            } else {
                rateList = document.MAINFORM.RATE_NAME.value + ";" + document.MAINFORM.RATE_NAME.value + ";" + document.MAINFORM.RATE_TYPE.value;
                givenAmt = dbAmt;
                holdAmt = document.MAINFORM.AMOUNT.value;
                SYS_GetExchangeRateAMT_S(document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.CCY.value, rateList, givenAmt, document.MAINFORM.AMOUNT.name, '', '1;1;1');
                newAmt = document.MAINFORM.AMOUNT.value;
                document.MAINFORM.AMOUNT.value = holdAmt;
                //if (newAmt != 0) {
                SYM_PYMT_compair_callback_amounts(newAmt, document.MAINFORM.AMOUNT.value);
                //} else {
                //	alert ('Error comparing callback limit');	
                //}
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_Loaded_Chg() {
    try {

        var Chg_Obj; // Utility Auto Fix Comments
        var chgActiveAmt; // Utility Auto Fix Comments
        var chgRuleAmt; // Utility Auto Fix Comments
        var comm; // Utility Auto Fix Comments
        var commCodeArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var initNotes; // Utility Auto Fix Comments
        commCodeArr = Chg.Screen.getAllTrxCharge();

        initNotes = document.MAINFORM.NOTES.value;
        for (i = 0; i < commCodeArr.length; i++) {
            comm = commCodeArr[i];
            Chg_Obj = Chg.Screen.getTrxChargeByCommCode(comm.getCommCode());
            chgRuleAmt = Chg_Obj.getRuleAmt();
            chgActiveAmt = Chg_Obj.getActiveAmt();

            if (chgActiveAmt != chgRuleAmt) {
                //document.MAINFORM.NOTES.value = '\n'+ comm.getCommDesc() + " :changed from "+ chgRuleAmt +" to "+ chgActiveAmt;
                document.MAINFORM.NOTES.value = '\n' + comm.getCommDesc() + " :changed from " + chgRuleAmt + " to " + chgActiveAmt + " on " + SYS_BUSI_DATE + " by the user " + SYS_USER_ID; //+".Please Note";
            }
        }
        //alert('sathish test')
        document.MAINFORM.NOTES.value = document.MAINFORM.NOTES.value + '\n' + initNotes;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_MT103_SW_OtherInfo() {
    try {

        if (SYM_PYMT_Chk_RemitInfo(document.MAINFORM.X103_REMIT_INF1_70, false) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_RemitInfo(document.MAINFORM.X103_REMIT_INF2_70, false) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_RemitInfo(document.MAINFORM.X103_REMIT_INF3_70, false) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_RemitInfo(document.MAINFORM.X103_REMIT_INF4_70, false) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_103(document.MAINFORM.X103_BK2BK_INF1_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_103(document.MAINFORM.X103_BK2BK_INF2_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_103(document.MAINFORM.X103_BK2BK_INF3_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_103(document.MAINFORM.X103_BK2BK_INF4_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_103(document.MAINFORM.X103_BK2BK_INF5_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_103(document.MAINFORM.X103_BK2BK_INF6_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        //call202DoFunc("ChkMT202PreventTransaction");
        return false;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_MT2XX_SW_OtherInfo() {
    try {

        if (SYM_PYMT_Chk_SND_TO_REC_202_Values(document.MAINFORM.X202_BK2BK_INF1_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_202_Values(document.MAINFORM.X202_BK2BK_INF2_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_202_Values(document.MAINFORM.X202_BK2BK_INF3_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_202_Values(document.MAINFORM.X202_BK2BK_INF4_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_202_Values(document.MAINFORM.X202_BK2BK_INF5_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        if (SYM_PYMT_Chk_SND_TO_REC_202_Values(document.MAINFORM.X202_BK2BK_INF6_72, true) == true) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        return false;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_RemitInfo(oToCheck, bShowAlerts) {
    try {

        var bReturn; // Utility Auto Fix Comments
        bReturn = false;
        if (SYM_PYMT_Chk_StrIniValIsXandSizeIsY(oToCheck.value, "/IPI/", 5 + 20)) {
            if (bShowAlerts) {
                alert("A maximum of 20 characters are allowed after /IPI/");
            }
            bReturn = true;
        } else if (SYM_PYMT_Chk_StrIniValIsXandSizeIsY(oToCheck.value, "/RFB/", 5 + 16)) {
            if (bShowAlerts) {
                alert("A maximum of 16 characters are allowed after /RFB/");
            }
            bReturn = true;
        }
        return bReturn;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_SND_TO_REC_202_Values(objToCheck, bolShowAlerts) {
    try {

        var bolReturn; // Utility Auto Fix Comments
        bolReturn = false;
        if (objToCheck.value.length == 0) {
            return true;
        }

        if (objToCheck.name.substring(objToCheck.name.length - 4, objToCheck.name.length).charAt(0) == "1") {
            // Check the condition of this tag and give warning messages to the user
            if (checkSubStrAtStrStart(objToCheck.value, new Array('/ACC/', '/BNC/', '/INS/', '/INT/', '/PHON/', '/PHONBEN/', '/PHONIBK/', '/TELE/', '/TELEBEN/', '/TELEIBK/', '/REJT/', '/RETN/')) == '') {
                if (bolShowAlerts == true) {
                    alert("One of the codes ACC, BNC, INS, INT, PHON, PHONBEN, PHONIBK, TELE, TELEBEN, TELEIBK, REJT, RETN may be used, placed between slashes(\'/\')");
                }
                bolReturn = true;
            }
        } else {
            // Check the condition of this tag and give warning messages to the user
            if (checkSubStrAtStrStart(objToCheck.value, new Array('//', '/ACC/', '/BNC/', '/INS/', '/INT/', '/PHON/', '/PHONBEN/', '/PHONIBK/', '/TELE/', '/TELEBEN/', '/TELEIBK/', '/REJT/', '/RETN/')) == '') {
                if (bolShowAlerts == true) {
                    alert("One of the codes ACC, BNC, INS, INT, PHON, PHONBEN, PHONIBK, TELE, TELEBEN, TELEIBK, REJT, RETN must be used, placed between slashes ('/'). Narrative text relating to a preceding code, must start with a double slash '//'");
                }
                bolReturn = true;
            }
        }
        return bolReturn;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_StrIniValIsXandSizeIsY(theString, theInitialSubString, theMaxSize) {
    try {

        if (theString.substring(0, theInitialSubString.length) == theInitialSubString && theString.length > theMaxSize) { // Utility Auto Fix Comments
            return true; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        else { // Utility Auto Fix Comments
            return false; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_Tag50_Date(nChkDate) {
    try {

        var sChkField; // Utility Auto Fix Comments
        sChkField = {
            title: "Tag 50 line 4/ ",
            focus: function() {
                document.MAINFORM.X103_ORDCUACNO_50A.focus();
            }
        }; // Utility Auto Fix Comments
        SYM_PYMT_SYS_ValidateDate(nChkDate.substring(0, 4), nChkDate.substring(4, 6), nChkDate.substring(6, 8), sChkField);
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_TIS_MUP_Payments_AccNo() {
    try {

    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chk_ValDates(sValDt) {
    try {

        if (document.MAINFORM.elements[sValDt].value != SYS_DATE && !SYS_Day1MustbeLaterThanDay2('CPYT_CR_VAL_DATE', 'CPYT_DR_VAL_DATE')) {
            document.MAINFORM.elements[sValDt].value = SYS_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_SEND_CORR_BK_ID_lookup() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.SEND_CORR_BK_NM.value.trim();
        add1 = document.MAINFORM.SEND_CORR_BK_ADD1.value.trim();
        add2 = document.MAINFORM.SEND_CORR_BK_ADD2.value.trim();
        add3 = document.MAINFORM.SEND_CORR_BK_ADD3.value.trim();
        if (name != "") {
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                //SYS_InqCUBK_Sql('SEND_CORR_BK_ID', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'SEND_CORR_BK_NM', 'ADD1', 'SEND_CORR_BK_ADD1', 'ADD2', 'SEND_CORR_BK_ADD2', 'ADD3', 'SEND_CORR_BK_ADD3')));
                SYS_InqCUBK_byCondition('SEND_CORR_BK_ID', '1');
            } else if (document.MAINFORM.CU_TYPE.value == "Customer") {
                //SYS_InqCUBK_Sql('SEND_CORR_BK_ID_CUST', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'SEND_CORR_BK_NM', 'ADD1', 'SEND_CORR_BK_ADD1', 'ADD2', 'SEND_CORR_BK_ADD2', 'ADD3', 'SEND_CORR_BK_ADD3'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
                SYS_InqCUBK_byCondition('SEND_CORR_BK_ID_CUST', '1');
            }
        } else {
            alert("Search is not possible without Name"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_XN90_ORD_BKID_52A_lookup() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.XN90_ORD_BKNM_52A.value.trim();
        add1 = document.MAINFORM.XN90_ORDBKADD1_52A.value.trim();
        add2 = document.MAINFORM.XN90_ORDBKADD2_52A.value.trim();
        add3 = document.MAINFORM.XN90_ORDBKADD3_52A.value.trim();
        if (name != "" || add1 != "" || add2 != "" || add3 != "") {
            //SYS_InqCUBK_Sql('XN90_ORD_BKID_52A', SYM_PYMT_SYS_buildSQLCond(new Array('PARTY_NM', 'XN90_ORD_BKNM_52A', 'ADD1', 'XN90_ORDBKADD1_52A', 'ADD2', 'XN90_ORDBKADD2_52A', 'ADD3', 'XN90_ORDBKADD3_52A')));
            SYS_InqCUBK_byCondition('XN90_ORD_BKID_52A', '1');
        } else {
            alert("Search is not possible without Name or Address"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clk_XN91_ACC_BKID_57A_lookup() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.XN91_ACC_BKNM_57A.value.trim();
        add1 = document.MAINFORM.XN91_ACCBKADD1_57A.value.trim();
        add2 = document.MAINFORM.XN91_ACCBKADD2_57A.value.trim();
        add3 = document.MAINFORM.XN91_ACCBKADD3_57A.value.trim();
        if (name != "" || add1 != "" || add2 != "" || add3 != "") {
            //SYS_InqCUBK_Sql('XN91_ACC_BKID_57A', SYM_PYMT_SYS_buildSQLCond(new Array('PARTY_NM', 'XN91_ACC_BKNM_57A', 'ADD1', 'XN91_ACCBKADD1_57A', 'ADD2', 'XN91_ACCBKADD2_57A', 'ADD3', 'XN91_ACCBKADD3_57A')));
            SYS_InqCUBK_byCondition('XN91_ACC_BKID_57A', '1');
        } else {
            alert("Search is not possible without Name or Address"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Clr_Ord_Cust() {
    try {

        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_compair_callback_amounts(trnAmount, callBackAmount) {
    try {

        trnAmount = SYS_BeFloat(trnAmount);
        callBackAmount = SYS_BeFloat(callBackAmount);
        if (trnAmount >= callBackAmount) {
            document.MAINFORM.CALBK.value = "Yes";
            document.MAINFORM.CallBackReq.value = 'Y';
            SYT_ChangeFldClass(document.MAINFORM.CALBK, "P");
        } else {
            document.MAINFORM.CallBackReq.value = 'N';
            SYT_ChangeFldClass(document.MAINFORM.CALBK, "O");
        }
        SYM_PYMT_DD_changeOfCallBack();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_DD_changeOfCallBack() {
    try {

        if (document.MAINFORM.CALBK.value == 'No') {
            EEHtml.getElementById("CALLBACK_ROW").style.display = "none";
            SYM_PYMT_clsdisableField(document.MAINFORM.CONT_NM);
            SYM_PYMT_clsdisableField(document.MAINFORM.CONT_NO);
        } else {
            EEHtml.getElementById("CALLBACK_ROW").style.display = "block";
            if (SYS_FUNCTION_TYPE != 'IQ') {
                SYM_PYMT_enableField(document.MAINFORM.CONT_NM, "M");
                SYM_PYMT_enableField(document.MAINFORM.CONT_NO, "M");

            } else {
                document.MAINFORM.CONT_NM.disable = true;
                document.MAINFORM.CONT_NO.disable = true;

            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_DD_changeOfFundsAvail() {
    try {

        if (document.MAINFORM.FDS_AVAL.value == "No") {
            SYM_PYMT_enableField(document.MAINFORM.OVRIDE, 'M');
            if (document.MAINFORM.OVRIDE.value != 'Yes') {
                document.MAINFORM.OVRIDE.value = "No";
            }
        } else {
            SYM_PYMT_disableField(document.MAINFORM.OVRIDE); // Utility Auto Fix Comments
            document.MAINFORM.OVRIDE.value = "No";
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_disableAllFields() {
    try {

        var nEleLeng; // Utility Auto Fix Comments
        var oEle; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        oEle = document.MAINFORM.elements;
        nEleLeng = oEle.length;
        for (j = 0; j < nEleLeng; j++) {
            oField = oEle[j];
            SYM_PYMT_disableField(oField);
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Dis_103_Acct_With_Ins() {
    try {

        if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
            if (document.MAINFORM.X103_BENECUACNO59A.value != "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "") {
                SYM_PYMT_disableField(document.MAINFORM.X103_ACC_BKID_57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_57A_BTN);
                SYM_PYMT_disableField(document.MAINFORM.X103_ACC_BKNM_57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_ACCBKADD1_57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_ACCBKADD2_57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_ACCBKADD3_57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_ACC_BKACNO57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_TAG_57A);
                SYM_PYMT_disableField(document.MAINFORM.X103_ACC_BKSW_57A);
            } else if (document.MAINFORM.X103_BENECUACNO59A.value == "" || document.MAINFORM.X103_ACC_BKACNO57A.value != "") {
                SYM_PYMT_Enb_103_Acct_With_Ins();
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_DI_calculate_amounts() {
    try {

        document.MAINFORM.CR_AMT.value = SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value);
        document.MAINFORM.DB_AMT.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value);
        if (document.MAINFORM.DB_AMT.value != '0') {
            SYM_PYMT_disableField(document.MAINFORM.X103_INSTR_AMT_33B);
            if (document.MAINFORM.MD_I.value == 'M') {
                document.MAINFORM.CR_AMT.value = document.MAINFORM.DB_AMT.value / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
            } else {
                document.MAINFORM.CR_AMT.value = document.MAINFORM.DB_AMT.value * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
            }
            document.MAINFORM.CR_AMT.value = SYS_BeFloat(DecimalFormat(document.MAINFORM.CR_AMT.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value)));
        } else {
            if (document.MAINFORM.CR_AMT.value != '0') {
                SYM_PYMT_disableField(document.MAINFORM.X103_SETT_AMT_32A);
                if (document.MAINFORM.MD_I.value == 'M') {
                    document.MAINFORM.DB_AMT.value = document.MAINFORM.CR_AMT.value * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
                } else {
                    document.MAINFORM.DB_AMT.value = document.MAINFORM.CR_AMT.value / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
                }
                document.MAINFORM.DB_AMT.value = SYS_BeFloat(DecimalFormat(document.MAINFORM.DB_AMT.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value)));
            } else {
                SYM_PYMT_enableField(document.MAINFORM.X103_INSTR_AMT_33B, 'M');
                SYM_PYMT_enableField(document.MAINFORM.X103_SETT_AMT_32A, 'M');
            }
        }
        document.MAINFORM.DB_AMT.value = SYS_BeFloat(DecimalFormat(document.MAINFORM.DB_AMT.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value)));
        document.MAINFORM.CR_AMT.value = SYS_BeFloat(DecimalFormat(document.MAINFORM.CR_AMT.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value)));
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_DI_get_exchange_rate(rateName, oppositeRateName) {
    try {

        var givenAmt; // Utility Auto Fix Comments
        var newAmt; // Utility Auto Fix Comments
        var rateList; // Utility Auto Fix Comments
        document.MAINFORM.CR_AMT.value = "";
        document.MAINFORM.DB_AMT.value = "";
        document.MAINFORM.X103_EXCH_RT_36.value = 0;
        if (document.MAINFORM.X103_INSTR_CCY_33B.value == document.MAINFORM.X103_SETT_CCY_32A.value) {
            document.MAINFORM.X103_EXCH_RT_36.value = 1;
            document.MAINFORM.MD_I.value = 'M';
            SYM_PYMT_DI_calculate_amounts();
        } else {
            try {
                SYS_GetExchangeRate_S(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_SETT_CCY_32A.value, rateName, 'X103_EXCH_RT_36', 'SYM_PYMT_DI_calculate_amounts', 'MD_I', '', '', '', '6');
            } catch (e1) {
                DisExcpt("SYF_PYMT_DI_Capture.js", e1);
            }
            if (document.MAINFORM.X103_EXCH_RT_36.value == '0') {
                rateList = rateName + ";" + rateName + ";" + oppositeRateName;
                givenAmt = 10000;
                newAmt = 0;
                document.MAINFORM.DB_AMT.value = newAmt;
                try {
                    SYS_GetExchangeRateAMT_S(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_SETT_CCY_32A.value, rateList, givenAmt, document.MAINFORM.DB_AMT.name, '', '1;1;1');
                } catch (e2) { // Utility Auto Fix Comments
                    DisExcpt("SYF_PYMT_DI_Capture.js", e2);
                }
                newAmt = document.MAINFORM.DB_AMT.value;
                document.MAINFORM.DB_AMT.value = ""; // Utility Auto Fix Comments
                if (newAmt != 0) {
                    document.MAINFORM.X103_EXCH_RT_36.value = newAmt / givenAmt;
                    document.MAINFORM.MD_I.value = 'M';
                    SYM_PYMT_DI_calculate_amounts();
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_DI_PayAmtChk() {
    try {

        if (SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value) > 0) {
            if (SYS_BeFloat(document.MAINFORM.DB_AMT.value) >= 1000000000000000) {
                alert("The Credit Amount is too large to Process");
                return false;
            }
            return true;
        } else if (SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) > 0) {
            crAmt = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
            crAmt = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, crAmt);
            crAmt = crAmt.replace(/,/g, '');
            if (crAmt.length > 15) {
                alert("The Length of Credit Amount is over the limit of SWIFT Standard");
                return false;
            }
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.X103_INSTR_AMT_33B, "Please enter at least one amount field");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Fail_CntyHoliday() {
    try {

        document.MAINFORM.X103_VALUE_DT_32A.value = "";
        getDivByField(document.MAINFORM.X103_VALUE_DT_32A);
        window.focus();
        document.MAINFORM.X103_VALUE_DT_32A.focus();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_formRefNo() {
    try {

        var dateObj; // Utility Auto Fix Comments
        var finalDate; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var reqYear; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var vDay; // Utility Auto Fix Comments
        var vMonth; // Utility Auto Fix Comments
        var vYear; // Utility Auto Fix Comments
        reqDate = SYS_BUSI_DATE;
        dateObj = SYT_GetDateObjectFromStr(reqDate);
        vYear = dateObj.getFullYear();
        vMonth = dateObj.getMonth() + 1;
        vDay = dateObj.getDate();
        if (vMonth.toString().length < 2) {
            vMonth = '0' + vMonth.toString();
        }
        if (vDay.toString().length < 2) {
            vDay = '0' + vDay.toString();
        }
        reqYear = vYear.toString().substring(2, 4);
        sCntyCode = SYS_BUSI_UNIT;
        finalDate = reqYear + vMonth + vDay + sCntyCode;
        return finalDate;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getOrderingCustomer() {
    try {

        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYM_PYMT_getAccounts', 'SYM_PYMT_ordering_customer_not_found');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_getUnformatAmount(amtValue) {
    try {

        var decimalSep; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var intSep; // Utility Auto Fix Comments
        var length; // Utility Auto Fix Comments
        var newP1; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        //get number for a amount field without any format, just like 123455.12

        intSep = SYS_AMT_INT_FORMAT;
        decimalSep = SYS_AMT_DEC_FORMAT;
        if (typeof amtValue == "number") {
            return amtValue;
        }

        length = amtValue.length;
        temp = "";
        newP1 = "";
        for (i = 0; i < length; i++) {
            temp = amtValue.substr(i, 1);
            if (temp == intSep) { // Utility Auto Fix Comments
                newP1 += ""; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else if (temp == decimalSep) { // Utility Auto Fix Comments
                newP1 += "."; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else { // Utility Auto Fix Comments
                newP1 += temp; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        }
        return newP1;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Hide_LocPymtChrgs() {
    try {

        var LocChrgs; // Utility Auto Fix Comments
        LocChrgs = new Array('PYMT_IT_LOC_CHG_BEN_FF', 'PYMT_IT_LOC_CHG_SHA_FF', 'PYMT_IT_LOC_CHG_OUR_FF', 'PYMT_IT_LOC_CHG_BEN_SS', 'PYMT_IT_LOC_CHG_SHA_SS', 'PYMT_IT_LOC_CHG_OUR_SS');
        SYT_HideAllChrgsExcept(LocChrgs, '');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_listOrderingCustomer() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
        add1 = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
        add2 = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
        add3 = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();

        if (name != "") {
            //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
            SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_LocalBankCurrencyPaymentInstruction() {
    try {

        var bResult; // Utility Auto Fix Comments
        var bUserInputCheck; // Utility Auto Fix Comments
        var sCrCurr; // Utility Auto Fix Comments
        var sProduct; // Utility Auto Fix Comments
        var sSendingToBankCountryCd; // Utility Auto Fix Comments
        var sysBankCountry; // Utility Auto Fix Comments
        sProduct = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        sCrCurr = document.MAINFORM.CR_CCY.value.trim();
        sysBankCountry = SYS_BANK_COUNTRY;
        sSendingToBankCountryCd = document.MAINFORM.AC_WT_INST_CNTY_CODE.value;
        bResult = false;

        bUserInputCheck = SYM_PYMT_LocalBankPymtUserInputCheck(sCrCurr, sysBankCountry, sProduct, sSendingToBankCountryCd);

        if (bUserInputCheck) {
            switch (sProduct) {
                case 'OT':
                    switch (sysBankCountry) {
                        case "MU":
                            SYM_PYMT_TIS_MUP_Payments();
                            break;
                        case "TZ":
                            SYM_PYMT_TIS_MUP_Payments();
                            break;
                        case "ZA":
                            SYM_PYMT_ZAR_Payments();
                            break;
                    }
                    break;
                case 'IT':
                    switch (sysBankCountry) {
                        case "MU":
                            bResult = SYF_PYMT_LocalMUP();
                            //return bResult;
                            break;
                        case "TZ":
                            bResult = SYF_PYMT_LocalTIS();
                            //return bResult;
                            break;
                        case "ZA":
                            SYM_PYMT_ZAR_Payments();
                            break;
                    }
                    return bResult;
                    //break;
            }
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_LocalBankPaymentField72() {
    try {

        var oldField72_1; // Utility Auto Fix Comments
        var oldField72_2; // Utility Auto Fix Comments
        var oldField72_3; // Utility Auto Fix Comments
        var oldField72_4; // Utility Auto Fix Comments
        var oldField72_5; // Utility Auto Fix Comments
        oldField72_1 = "";
        oldField72_2 = "";
        oldField72_3 = "";
        oldField72_4 = "";
        oldField72_5 = "";

        if (document.MAINFORM.X103_BK2BK_INF1_72.value.trim() == "" | (document.MAINFORM.X103_BK2BK_INF1_72.value.trim() == "/REC/DTCUS" | document.MAINFORM.X103_BK2BK_INF1_72.value.trim() == "/REC/DTROF")) {
            if (document.MAINFORM.X103_BK2BK_INF1_72.value == "") {
                document.MAINFORM.X103_BK2BK_INF1_72.value = "/REC/DTCUS";
            } else if (document.MAINFORM.X103_BK2BK_INF1_72.value != "/REC/DTCUS") {
                document.MAINFORM.X103_BK2BK_INF1_72.value = "/REC/DTROF";
            }
        } else {
            oldField72_1 = document.MAINFORM.X103_BK2BK_INF1_72.value;
            oldField72_2 = document.MAINFORM.X103_BK2BK_INF2_72.value;
            oldField72_3 = document.MAINFORM.X103_BK2BK_INF3_72.value;
            oldField72_4 = document.MAINFORM.X103_BK2BK_INF4_72.value;
            oldField72_5 = document.MAINFORM.X103_BK2BK_INF5_72.value;

            document.MAINFORM.X103_BK2BK_INF1_72.value = "/REC/DTCUS";
            document.MAINFORM.X103_BK2BK_INF2_72.value = oldField72_1;
            document.MAINFORM.X103_BK2BK_INF3_72.value = oldField72_2;
            document.MAINFORM.X103_BK2BK_INF4_72.value = oldField72_3;
            document.MAINFORM.X103_BK2BK_INF5_72.value = oldField72_4;
            document.MAINFORM.X103_BK2BK_INF6_72.value = oldField72_5;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_LocalBankPymtUserInputCheck(crCurrency, SysBankCountry, Product, SendingToBankCountryCd) {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var sSQL1; // Utility Auto Fix Comments
        var sSQL2; // Utility Auto Fix Comments
        var sSQL3; // Utility Auto Fix Comments
        var sSQL4; // Utility Auto Fix Comments
        /* crCurrencyCUBK=crCurrency;
SysBankCountryCUBK=SysBankCountry;
ProductCUBK=Product;
SendingToBankCountryCdCUBK=SendingToBankCountryCd;
Field_List = "CR_ACC_NO;BIC_CODE;BLOCK3";
Mapping_List = "CR_ACC_NO;BIC_CODE;BLOCK3";
if(crCurrencyCUBK !=""){
	sSQL1 =" CR_CURRENCY=" + "'" + crCurrencyCUBK + "'" + " AND "+ "SYS_BANK_COUNTRY = " +"'" + SysBankCountryCUBK + "' AND " + "ProductCUBK=" + "'" + ProductCUBK + "'";
        SYS_Get22TableData_S('LOCAL_BANK_PYMT_INSTR',sSQL1,Field_List,Mapping_List,true);
}else{
	sSQL2 =" CR_CURRENCY IS NULL AND "+ "SYS_BANK_COUNTRY = " +"'" + SysBankCountryCUBK + "' AND " + "ProductCUBK=" + "'" + ProductCUBK + "'";
     SYS_Get22TableData_S('LOCAL_BANK_PYMT_INSTR',sSQL2,Field_List,Mapping_List,true);
}

if(SendingToBankCountryCdCUBK !=""){
	sSQL3 =" SENDING_TO_BANK_CNTY_CD=" + "'"+ SendingToBankCountryCdCUBK +"'" + " AND "+ "SYS_BANK_COUNTRY = " +"'" + SysBankCountryCUBK + "' AND " + "ProductCUBK=" + "'" + ProductCUBK + "'";
           SYS_Get22TableData_S('LOCAL_BANK_PYMT_INSTR',sSQL3,Field_List,Mapping_List,true);
}else{
	sSQL4 =" SENDING_TO_BANK_CNTY_CD IS NULL AND "+ "SYS_BANK_COUNTRY = " +"'" + SysBankCountryCUBK + "' AND " + "ProductCUBK=" + "'" + ProductCUBK + "'";
      SYS_Get22TableData_S('LOCAL_BANK_PYMT_INSTR',sSQL4,Field_List,Mapping_List,true);
}




if(document.MAINFORM.CR_ACC_NO.value.trim() != '' && document.MAINFORM.BIC_CODE.value.trim() != '' && document.MAINFORM.BLOCK3.value.trim() != ''){
	
	return true;
}else{
	return false;
} */
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_ordering_customer_not_found() {
    try {

        SYS_CheckError(document.MAINFORM.X103_ORDCU_ID_50A, 'The Applicant cannot be found');
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCU_NM_50A, 'M');
        SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUADD1_50A, 'O');
        SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUADD2_50A, 'O');
        SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUADD3_50A, 'O');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_ProtectOrdCust() {
    try {

        SYM_PYMT_ProtOrdCust(); // Utility Auto Fix Comments
        SYM_PYMT_getSWADDFromRef(document.MAINFORM.X103_ORDCU_ID_50A, 'X103_ORDCU_SW_50A');
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, "P");
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_CancelFun_Flds_Disable() {
    try {

        if (SYS_FUNCTION_NAME == 'Cancel_OTT' && SYS_FUNCTION_TYPE == 'EC') {
            SYM_PYMT_disableAllFields();
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_set_drafts_purchase_rates() {
    try {

        document.MAINFORM.RATE_TYPE.value = 'Airmail  Buying';
        // rate name holds the opposite rate
        document.MAINFORM.RATE_NAME.value = 'Sight Selling';
        document.MAINFORM.FIELD_6_X.value = 'D';
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_set_drafts_sale_rates() {
    try {

        document.MAINFORM.RATE_TYPE.value = 'Sight Selling';
        // rate name holds the opposite rate
        document.MAINFORM.RATE_NAME.value = 'Airmail  Buying';
        document.MAINFORM.FIELD_6_X.value = 'D';
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Set_InitValues() {
    try {

        document.MAINFORM.BENE_AC_TYPE.value = 'Other';
        document.MAINFORM.BENE_CNTY_RES.value = '';
        document.MAINFORM.X103_BKOP_CODE_23B.value = 'CRED';
        document.MAINFORM.X103_DET_CHG_71A.value = 'SHA';
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_set_values_for_settlement_screen() {
    try {

        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
        document.MAINFORM.CR_CCY.value = document.MAINFORM.X103_INSTR_CCY_33B.value;
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.X103_INSTR_AMT_33B.value;
        document.MAINFORM.DB_CALC_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Shw_Loc_Pymt_Chrgs(objFld1, objFld2) {
    try {

        var AllChrgs; // Utility Auto Fix Comments
        var ChgCodeBS; // Utility Auto Fix Comments
        var ChgCodeOu; // Utility Auto Fix Comments
        var ChgCodeOur;
        AllChrgs = new Array('PYMT_IT_LOC_CHG_BEN_FF', 'PYMT_IT_LOC_CHG_SHA_FF', 'PYMT_IT_LOC_CHG_OUR_FF', 'PYMT_IT_LOC_CHG_BEN_SS', 'PYMT_IT_LOC_CHG_SHA_SS', 'PYMT_IT_LOC_CHG_OUR_SS', 'RET_FDS_FEE', '71G_REC_CHGS', 'INW_PYT_COMM', 'PAID_71G');
        switch (objFld1.value) {
            case 'Single Settlement':
                switch (objFld2.value) {
                    case 'BEN':
                        SYT_HideAllChrgsExcept(AllChrgs, 'PYMT_IT_LOC_CHG_BEN_SS');
                        ChgCodeBS = 'PYMT_IT_LOC_CHG_BEN_SS';
                        break;
                    case 'SHA':
                        SYT_HideAllChrgsExcept(AllChrgs, 'PYMT_IT_LOC_CHG_SHA_SS');
                        ChgCodeBS = 'PYMT_IT_LOC_CHG_SHA_SS';
                        break;
                    case 'OUR':
                        SYT_HideAllChrgsExcept(AllChrgs, 'PYMT_IT_LOC_CHG_OUR_SS');
                        ChgCodeOur = 'PYMT_IT_LOC_CHG_OUR_SS'; // Utility Auto Fix Comments
                        SYF_PYMT_Set_RecChgs(ChgCodeOur);
                        SYF_PYMT_Set_MT191(ChgCodeOur);
                        break;
                }
                break;
            case 'Forward Funds':
                switch (objFld2.value) {
                    case 'BEN':
                        SYT_HideAllChrgsExcept(AllChrgs, 'PYMT_IT_LOC_CHG_BEN_FF');
                        ChgCodeBS = 'PYMT_IT_LOC_CHG_BEN_FF';
                        SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
                        SYF_PYMT_Set_CrAmt();
                        break;
                    case 'SHA':
                        SYT_HideAllChrgsExcept(AllChrgs, 'PYMT_IT_LOC_CHG_SHA_FF');
                        ChgCodeBS = 'PYMT_IT_LOC_CHG_SHA_FF';
                        SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
                        SYF_PYMT_Set_CrAmt();
                        break;
                    case 'OUR':
                        SYT_HideAllChrgsExcept(AllChrgs, 'PYMT_IT_LOC_CHG_OUR_FF');
                        ChgCodeOur = 'PYMT_IT_LOC_CHG_OUR_FF'; // Utility Auto Fix Comments
                        SYF_PYMT_Set_RecChgs(ChgCodeOur);
                        SYF_PYMT_Set_MT191(ChgCodeOur);
                        break;
                }
                break;
            case 'Return of Funds':
                SYT_HideAllChrgsExcept(AllChrgs, 'RET_FDS_FEE');
                break;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SYS_ValidateDate(yy, mm, dd, o) {
    try {

        var sName; // Utility Auto Fix Comments
        sName = "";
        if (o.title.length > 0) {
            sName = o.title;
        } else {
            sName = o.name;
        }
        if (yy < 1800 || yy > 2500) {
            SYS_CheckError(o, sName + " isn't right.Please check it and input again or check your date format which you've chosen.");
            return false;
        }
        if ((mm > 12) || (mm <= 0) || (dd <= 0) || (dd > 31)) {
            SYS_CheckError(o, sName + " isn't right.Please check it and input again or check your date format which you've chosen.");
            return false;
        }
        if ((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) { //check month-day
            if (dd > 30) {
                SYS_CheckError(o, "There are 30 days in the month.Please input the rightful date  or check your date format which you've chosen!");
                return false;
            }
        }
        if (mm == 2) { //the leap year
            if (((yy % 4 == 0) && (yy % 100 != 0)) || (yy % 400 == 0)) {
                if (dd > 29) {
                    SYS_CheckError(o, "There are 29 days at best in February.Please input the rightful date  or check your date format which you've chosen!");
                    return false;
                }
            } else {
                if (dd > 28) {
                    SYS_CheckError(o, "There are 28 days at best in February of Leap year .Please input the rightful date  or check your date format which you've chosen!");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_SYT_disableField(oField) {
    try {

        var sClass; // Utility Auto Fix Comments
        var typeName; // Utility Auto Fix Comments
        if (!oField) { // Utility Auto Fix Comments
            return; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments

        sClass = oField.className;
        sClass = sClass.substr(0, (sClass.length - 1)) + 'P';
        oField.className = sClass;
        typeName = oField.type;
        oField.disabled = true;
        oField.readOnly = true;
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ACC_BKID_57A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X103_ACC_BKID_57A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ACC_BKNM_57A', 'ADD1', 'X103_ACCBKADD1_57A', 'ADD2', 'X103_ACCBKADD2_57A', 'ADD3', 'X103_ACCBKADD3_57A')));
        SYS_InqCUBK_byCondition('X103_ACC_BKID_57A', '1');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_BENECU_ID_59A_INQUIRE() {
    try {

        SYS_InqCUBK('X103_BENECU_ID_59A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_MEDI_BKID_56A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X103_MEDI_BKID_56A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_MEDI_BKNM_56A', 'ADD1', 'X103MEDIBKADD1_56A', 'ADD2', 'X103MEDIBKADD2_56A', 'ADD3', 'X103MEDIBKADD3_56A')));
        SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '2');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ORDCU_ID_50A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A')));
        SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ORD_BKID_52A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X103_ORD_BKID_52A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORD_BKNM_52A', 'ADD1', 'X103_ORDBKADD1_52A', 'ADD2', 'X103_ORDBKADD2_52A', 'ADD3', 'X103_ORDBKADD3_52A')));
        SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '2');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_SENDCORRID53A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X103_SENDCORRID53A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_SENDCORRNM53A', 'ADD1', 'X103SENDCORADD153A', 'ADD2', 'X103SENDCORADD253A', 'ADD3', 'X103SENDCORADD353A')));
        SYS_InqCUBK_byCondition('X103_SENDCORRID53A', '2');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_ACC_BKID_57A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X202_ACC_BKID_57A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_ACC_BKNM_57A', 'ADD1', 'X202_ACCBKADD1_57A', 'ADD2', 'X202_ACCBKADD2_57A', 'ADD3', 'X202_ACCBKADD2_57A')));
        SYS_InqCUBK_byCondition('X202_ACC_BKID_57A', '2');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_BENE_BKID_58A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X202_BENE_BKID_58A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_BENE_BKNM_58A', 'ADD1', 'X202BENEBKADD1_58A', 'ADD2', 'X202BENEBKADD2_58A', 'ADD3', 'X202BENEBKADD3_58A')));
        SYS_InqCUBK_byCondition('X202_BENE_BKID_58A', '1');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_MEDI_BKID_56A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X202_MEDI_BKID_56A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_MEDI_BKNM_56A', 'ADD1', 'X202MEDIBKADD1_56A', 'ADD2', 'X202MEDIBKADD2_56A', 'ADD3', 'X202MEDIBKADD3_56A')));
        SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A', '2');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X202_ORDBK_ID_52A_INQUIRE() {
    try {

        //SYS_InqCUBK_Sql('X202_ORDBK_ID_52A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X202_ORDBK_NM_52A', 'ADD1', 'X202_ORDBKADD1_52A', 'ADD2', 'X202_ORDBKADD2_52A', 'ADD3', 'X202_ORDBKADD3_52A')));
        SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A', '2');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_ZAR_Payments() {
    try {

        var crCurrency; // Utility Auto Fix Comments
        var crSendToBankCountry; // Utility Auto Fix Comments
        var sIntermediaryBankSwiftCntyCd; // Utility Auto Fix Comments
        var sLocalBank; // Utility Auto Fix Comments
        var sOriginalServiceCdBlock3; // Utility Auto Fix Comments
        var sProduct; // Utility Auto Fix Comments
        var sReceiverBankSwiftCntyCd; // Utility Auto Fix Comments
        var sServiceCdBlock3; // Utility Auto Fix Comments
        crCurrency = document.MAINFORM.CR_CCY.value;
        crSendToBankCountry = document.MAINFORM.AC_WT_INST_CNTY_CODE.value;
        sProduct = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        sReceiverBankSwiftCntyCd = document.MAINFORM.X103_ADV_BKSW_B2.value.substring(4, 6);
        sIntermediaryBankSwiftCntyCd = document.MAINFORM.X103_MEDI_BKSW_56A.value.substring(4, 6);
        sServiceCdBlock3 = document.MAINFORM.X103_B3_SERVICE_CODE.value;
        sOriginalServiceCdBlock3 = "";
        sLocalBank = document.MAINFORM.X103_ADV_BKSW_B2.value.substring(0, 4).trim();

        switch (sProduct) {
            case "OT":
                document.MAINFORM.X103_B3_SERVICE_CODE.value = "";
                document.MAINFORM.X202_B3_SERVICE_CODE.value = "";

                if (crCurrency == "ZAR" &&
                    crSendToBankCountry == "ZA" &&
                    sReceiverBankSwiftCntyCd == "ZA" &&
                    sLocalBank != "SBZA") {
                    document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
                    if (document.MAINFORM.BLOCK3.value.trim() != "") {
                        document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.BLOCK3.value.trim();
                    }
                    if (document.MAINFORM.CR_ACC_NO.value != "") {
                        document.MAINFORM.CPYT_CR_BK_AC.value = document.MAINFORM.CR_ACC_NO.value;
                    }
                    SYM_PYMT_LocalBankPaymentField72();
                }
                if (crCurrency == "ZAR" &&
                    crSendToBankCountry != "ZA" &&
                    sReceiverBankSwiftCntyCd == "ZA") {
                    if (document.MAINFORM.BLOCK3.value.trim() != "") {
                        document.MAINFORM.X202_B3_SERVICE_CODE.value = document.MAINFORM.BLOCK3.value.trim();
                    }
                    if (document.MAINFORM.CR_ACC_NO.value != "") {
                        document.MAINFORM.CPYT_CR_BK_AC.value = document.MAINFORM.CR_ACC_NO.value;
                    }
                    SYM_PYMT_LocalBankPaymentField72();
                }
                break;
            case "IT":
                sOriginalServiceCdBlock3 = document.MAINFORM.X103_B3_SERVICE_CODE_ORIGINAL.value;
                document.MAINFORM.X103_B3_SERVICE_CODE.value = "";
                document.MAINFORM.X202_B3_SERVICE_CODE.value = "";
                if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds" &&
                    crCurrency == "ZAR" &&
                    crSendToBankCountry == "ZA" &&
                    sReceiverBankSwiftCntyCd == "ZA" &&
                    sLocalBank != "SBZA") {
                    document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
                    if (document.MAINFORM.BLOCK3.value.trim() != "") {
                        document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.BLOCK3.value.trim();
                    }
                    if (document.MAINFORM.CR_ACC_NO.value != "") {
                        document.MAINFORM.CPYT_CR_BK_AC.value = document.MAINFORM.CR_ACC_NO.value;
                    }
                    SYM_PYMT_LocalBankPaymentField72();
                }

                if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds" &&
                    crCurrency == "ZAR" &&
                    crSendToBankCountry == "ZA" &&
                    sReceiverBankSwiftCntyCd != "ZA") {
                    document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
                    if (document.MAINFORM.BLOCK3.value.trim() != "") {
                        document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.BLOCK3.value.trim();
                    }
                    if (document.MAINFORM.CR_ACC_NO.value != "") {
                        document.MAINFORM.CPYT_CR_BK_AC.value = document.MAINFORM.CR_ACC_NO.value;
                    }
                    SYM_PYMT_LocalBankPaymentField72();
                }

                if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement" &&
                    crCurrency == "ZAR" &&
                    crSendToBankCountry == "ZA" &&
                    document.MAINFORM.X103_B3_SERVICE_CODE.value == "ZDS") {
                    document.MAINFORM.CPYT_PAY_COV_MSG.value = "";

                    if (document.MAINFORM.CR_ACC_NO.value != "") {
                        document.MAINFORM.CPYT_CR_BK_AC.value = document.MAINFORM.CR_ACC_NO.value;
                    }
                }

                break;
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_X103_ADV_BKID_B2_GETCUBK() {
    try {

        if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
        } else {
            document.MAINFORM.X103_ADV_BKID_B2.value = '';
            document.MAINFORM.X103_ADV_BKNM_B2.value = '';
            document.MAINFORM.X103_ADV_BKSW_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD3_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_MEDI_BKID_56A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_MEDI_BKID_56A', 'INW_X103_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_SNDBK_ID_GETCUBK() {
    try {

        SYS_GetCUBK('INW_SNDBK_ID', 'INW_SNDBK_ID');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_ACC_BKID_57A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_ACC_BKSW_57A', 'INW_X103_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_BENECU_ID_59A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_BENECU_ID_59A', 'INW_X103_BENECU_ID_59A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_ORDCU_ID_50A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_ORDCU_ID_50A', 'INW_X103_ORDCU_ID_50A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_ORD_BKID_52A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_ORD_BKID_52A', 'INW_X103_ORD_BKID_52A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_RECCORRID_54A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_RECCORRID_54A', 'INW_X103_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_SENDCORRID53A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_SENDCORRID53A', 'INW_X103_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_SEND_BKID_51A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_SEND_BKID_51A', 'INW_X103_SEND_BKID_51A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_INW_X103_TRDREIMID_55A_GETCUBK() {
    try {

        SYS_GetCUBK('INW_X103_TRDREIMID_55A', 'INW_X103_TRDREIMID_55A');
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SEND_CORR_BK_ID_success() {
    try {

        document.MAINFORM.SEND_CORR_SW_TAG.value = 'A';
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SEND_CORR_BK_ID_failure() {
    try {

        alert("Bank Not Found");
        document.MAINFORM.SEND_CORR_BK_ID.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SEND_CORR_BK_ID_success1() {
    try {

        SYM_PYMT_Chg_CORRES_TYPE();
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}

function SYM_PYMT_Chg_SEND_CORR_BK_ID_failure1() {
    try {

        alert("Customer Not Found");
        document.MAINFORM.SEND_CORR_BK_ID.value = "";
    } catch (e) {
        DisExcpt("SYM_PYMT.js", e);
    }
}