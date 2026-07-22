"path:SCRN/Library/RecoverCharges.lbi";

var csLbiCompProto = {};

csLbiCompProto.Chk_CHG_VALUE_DATE = function() {
    try {
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        if (document.MAINFORM.CHG_VALUE_DATE.value == "") {
            return;
        }
        sValDt = document.MAINFORM.CHG_VALUE_DATE.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                if (SYS_FUNCTION_TYPE == 'RE') {
                    SYT_restrictRelease();
                    return;
                } else {
                    document.MAINFORM.CHG_VALUE_DATE.value = "";
                }
                getDivByField(document.MAINFORM.CHG_VALUE_DATE);
                window.focus();
                document.MAINFORM.CHG_VALUE_DATE.focus();
            }
            if (document.MAINFORM.CHG_VALUE_DATE.value != "") {
                SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.CHG_VALUE_DATE.name, '', '', SYS_BUSI_UNIT, 'succLocalHoliday', 'failLocalHoliday');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}

csLbiCompProto.Chk_Confirm = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        if (document.MAINFORM.FRGN_AC_NO.value != "") {
            document.MAINFORM.C_ACCT_WITH_ID.value = "";
            //Sql_Cond1 = "C_ACCT_NR=" + "'" + document.MAINFORM.FRGN_AC_NO.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
            //Field_List = "C_ACCT_NR;C_ACCT_CCY;C_CLEAR_TYPE;C_ACCT_WITH_ID";
            //Mapping_List = "FRGN_AC_NO;FRGN_AC_CCY;FRGN_AC_TYPE;C_ACCT_WITH_ID";
            SYS_GetTableDataByRule_S('SSSS_SRC_RecoverCharges_Chk_Confirm_0', '1', true);

            if (document.MAINFORM.C_ACCT_WITH_ID.value == "") {
                alert("Invalid Account Number");
                document.MAINFORM.FRGN_AC_NO.focus();
                return false;
            } else {
                CHG_allPayCcy_onchange();
                return true;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}

csLbiCompProto.chk_SpotDay = function() {
    try {
        var dSpotDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        sValDt = document.MAINFORM.CHG_VALUE_DATE.value;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            sCntyCode = SYS_BANK_COUNTRY;
            sStDate = SYS_BUSI_DATE;
            spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
            reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
            dSpotDt = SYT_GetDateObjectFromStr(reqDate);
            if (dValDt > dSpotDt) {
                alert("The Value Date cannot be more than Spot");
                document.MAINFORM.CHG_VALUE_DATE.value = "";
                getDivByField(document.MAINFORM.CHG_VALUE_DATE);
                window.focus();
                document.MAINFORM.CHG_VALUE_DATE.focus();
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}

csLbiCompProto.failCntyHoliday = function() {
    try {
        document.MAINFORM.CHG_VALUE_DATE.value = "";
        getDivByField(document.MAINFORM.CHG_VALUE_DATE);
        window.focus();
        document.MAINFORM.CHG_VALUE_DATE.focus();
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}

csLbiCompProto.failLocalHoliday = function() {
    try {
        document.MAINFORM.CHG_VALUE_DATE.value = "";
        getDivByField(document.MAINFORM.CHG_VALUE_DATE);
        window.focus();
        document.MAINFORM.CHG_VALUE_DATE.focus();
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}

csLbiCompProto.succCntyHoliday = function() {
    try {
        chk_SpotDay();
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}

csLbiCompProto.succLocalHoliday = function() {
    try {
        var cntyCode; // Utility Auto Fix Comments
        var dbCcy; // Utility Auto Fix Comments
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value == "F") {
            dbCcy = document.MAINFORM.FRGN_AC_CCY.value;

        } else {
            dbCcy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        }
        cntyCode = dbCcy.substring(0, 2);
        document.MAINFORM.CNTY.value = cntyCode;
        SYS_CheckHoliday('CNTY', document.MAINFORM.CHG_VALUE_DATE.name, '', '', SYS_BUSI_UNIT, 'succCntyHoliday', 'failCntyHoliday');
    } catch (e) {
        DisExcpt("SSSS_SRC_RecoverCharges.js", e);
    }
}