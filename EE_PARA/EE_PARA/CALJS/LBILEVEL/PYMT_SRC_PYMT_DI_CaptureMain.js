"path:SCRN/Library/Payment/PYMT_DI_CaptureMain.lbi";

var csLbiCompProto = {};

csLbiCompProto.clear_receiving_bank = function() {
    try {
        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        document.MAINFORM.X103_ADV_BKNM_B2.value = "";
        document.MAINFORM.X103_ADV_BKSW_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
        document.MAINFORM.CPYT_CR_BK_AC.value = "";
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_CaptureMain.js", e);
    }
}

csLbiCompProto.get_receiving_bank_details_using_id = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2', '', '', 'TRUE');
        } else {
            clear_receiving_bank();
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_CaptureMain.js", e);
    }
}

csLbiCompProto.get_receiving_bank_id_using_nostro_account = function() {
    try {
        if (document.MAINFORM.CPYT_CR_BK_AC.value != '') {
            //	SYS_GetCUBK_S('CPYT_CR_BK_AC_INQ', 'CPYT_CR_BK_AC');
            //var Sql_Cond = "C_ACCT_NR= '" + document.MAINFORM.CPYT_CR_BK_AC.value + "'";
            //var Field_List = "C_ACCT_WITH_ID;BIC_CODE";
            //var Mapping_List = "X103_ADV_BKID_B2;X103_ADV_BKSW_B2";
            SYS_GetTableDataByRule('PYMT_SRC_PYMT_DI_CaptureMain_get_receiving_bank_id_using_nostro_account_0', '1', 'get_receiving_bank_details_using_id');
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_CaptureMain.js", e);
    }
}

csLbiCompProto.list_Nostro_receiving_banks_per_currency = function() {
    try {
        /*var sql = "C_ACCT_CCY= '<--X103_INSTR_CCY_33B-->'";
        SYS_InqCUBK_Sql('CPYT_CR_BK_AC_per_Receiver_Bank', sql);*/
        SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_per_Receiver_Bank', '1');
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_DI_CaptureMain.js", e);
    }
}