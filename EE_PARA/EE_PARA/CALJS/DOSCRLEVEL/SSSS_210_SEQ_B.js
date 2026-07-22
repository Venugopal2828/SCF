"path:SCRN/DO/210_SEQ_B.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X210_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X210_32B_CCY.value, document.MAINFORM.X210_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56A_GETCUBK = function() {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', '', 'SYM_PYMT_Clr_Int_Ins()', 'TRUE');
        } else {
            SYM_PYMT_Clr_Int_Ins();
        }
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKID_56A_INQUIRE = function() {
    try {
        //SYS_InqCUBK_Sql('X103_MEDI_BKID_56A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_MEDI_BKNM_56A', 'ADD1', 'X103MEDIBKADD1_56A', 'ADD2', 'X103MEDIBKADD2_56A', 'ADD3', 'X103MEDIBKADD3_56A')));
        SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '2');
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50A_GETCUBK = function() {
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
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ORDCU_ID_50A_INQUIRE = function() {
    try {
        //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A')));
        SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '2');
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ORD_BKID_52A_GETCUBK = function() {
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
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ORD_BKID_52A_INQUIRE = function() {
    try {
        //SYS_InqCUBK_Sql('X103_ORD_BKID_52A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORD_BKNM_52A', 'ADD1', 'X103_ORDBKADD1_52A', 'ADD2', 'X103_ORDBKADD2_52A', 'ADD3', 'X103_ORDBKADD3_52A')));
        SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '2');
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ID_50_BTN_onclick = function(event) {
    try {
        X103_ORDCU_ID_50A_INQUIRE();
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ID_52_BTN_onclick = function(event) {
    try {
        X103_ORD_BKID_52A_INQUIRE();
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ID_56_BTN_onclick = function(event) {
    try {
        X103_MEDI_BKID_56A_INQUIRE();
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X103_MEDI_BKID_56A.value = '';
            document.MAINFORM.X103_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X103MEDIBKADD1_56A.value = '';
            document.MAINFORM.X103MEDIBKADD2_56A.value = '';
            document.MAINFORM.X103MEDIBKADD3_56A.value = '';
            document.MAINFORM.X103_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X103_MEDIBKACNO56A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_X103_MEDI_BKSW_56A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ORD_BKSW_52A.value == '') {
            document.MAINFORM.X103_ORD_BKID_52A.value = '';
            document.MAINFORM.X103_ORD_BKNM_52A.value = '';
            document.MAINFORM.X103_ORDBKADD1_52A.value = '';
            document.MAINFORM.X103_ORDBKADD2_52A.value = '';
            document.MAINFORM.X103_ORDBKADD3_52A.value = '';
            document.MAINFORM.X103_ORD_BKSW_52A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_X103_ORD_BKSW_52A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X210_32B_AMT_onchange = function(event) {
    try {
        document.MAINFORM.X210_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X210_32B_CCY.value, document.MAINFORM.X210_32B_AMT.value);
        if (SYS_BeFloat(document.MAINFORM.X210_32B_AMT.value) < 0) {
            alert("Currency and Amount[32B] cannot be negative value!");
            document.MAINFORM.X210_32B_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}

csDOScreenProto.X210_32B_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X210_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X210_32B_CCY.value, document.MAINFORM.X210_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_210_SEQ_B.js", e);
    }
}