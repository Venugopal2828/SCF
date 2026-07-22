"path:SCRN/Library/Payment/PYMT_DI_RegisterMain.lbi";

var csLbiCompProto = {};

csLbiCompProto.DI_validate_value_date = function() {
    try {
        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.X103_VALUE_DT_32A, 'Value date is not current date. The Value date has been changed to todays date');
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.change_of_applicant_id = function() {
    try {
        document.MAINFORM.X103_ORDCU_ID_50A.value = document.MAINFORM.X103_ORDCU_ID_50A.value.trim();
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYT_CAL_COURIER();
        }
        if (document.MAINFORM.X103_ORDCU_ID_50A.value == "") {
            clear_applicant_details();
        } else {
            protect_applicant_details();
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.clear_applicant_details = function() {
    try {
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.APPL_CNTY_RES.value = "";
        document.MAINFORM.RECORDER_TYPE.value = "";
        SYM_IMCO_SetRefNo(document.MAINFORM.X103_ORDCU_NM_50A, 'M');
        SYM_IMCO_SetRefNo(document.MAINFORM.X103_ORDCUADD1_50A, 'O');
        SYM_IMCO_SetRefNo(document.MAINFORM.X103_ORDCUADD2_50A, 'O');
        SYM_IMCO_SetRefNo(document.MAINFORM.X103_ORDCUADD3_50A, 'O');
        if (document.MAINFORM.NXT_STATUS.value == 'CAPTURE') {
            SYM_IMCO_SetRefNo(document.MAINFORM.X103_ORDCUACNO_50A, 'M');
        } else {
            SYM_IMCO_SetRefNo(document.MAINFORM.X103_ORDCUACNO_50A, 'O');
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.debit_account_changed = function() {
    try {
        document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCUACNO_50A.value.trim();
        if (document.MAINFORM.X103_ORDCUACNO_50A.value != '') {
            //var sTableName = 'STD_AC_NUMBER';
            //var sSQLWhere = " C_AC_NUMBER = '" + document.MAINFORM.X103_ORDCUACNO_50A.value + "' and (C_DBT_CRDT= 'B' OR C_DBT_CRDT=" + "'" + document.MAINFORM.FIELD_6_X.value + "')";
            //var sFieldList = "C_CURRENCY;C_CUST_ID";
            //var sMappingList = "X103_SETT_CCY_32A;X103_ORDCU_ID_50A";
            SYS_GetTableDataByRule('PYMT_SRC_PYMT_DI_RegisterMain_debit_account_changed_0', '1', 'get_applicant_details_no_lookup', 'debit_account_clear', 'TRUE');
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.debit_account_clear = function() {
    try {
        document.MAINFORM.X103_ORDCUACNO_50A.value = '';
        alert("The Account number is invalid for the entered customer");
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.debit_account_lookup = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value == '') {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                SYS_CheckError(document.MAINFORM.X103_ORDCUACNO_50A, 'Search for customer accounts is not allowed without Applicant ID');
            }
        } else {
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', 'C_CUST_ID like \'<--X103_ORDCU_ID_50A-->%\' AND C_AC_NUMBER like \'<--X103_ORDCUACNO_50A-->%\' AND C_CURRENCY like \'<--DB_CCY-->%\' AND (C_DBT_CRDT = \'B\' OR  C_DBT_CRDT=\'<--FIELD_6_X-->\')');
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '1');
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.get_applicant_details_no_lookup = function() {
    try {
        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', '', '', 'TRUE');
        protect_applicant_details();
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.protect_applicant_details = function() {
    try {
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD1_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD2_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD3_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCU_NM_50A);
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}

csLbiCompProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_RegisterMain.js", e);
    }
}