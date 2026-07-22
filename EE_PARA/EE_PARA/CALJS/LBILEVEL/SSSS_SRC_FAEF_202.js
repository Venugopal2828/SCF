"path:SCRN/Library/FAEF_202.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_X202_52_ORDER_NO = function() {
    try {
        var X202_52_ORDER_NO; // Utility Auto Fix Comments
        var X202_ORDBK_ID_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_52_ORDER_NO_11', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_53_ORDER_NO = function() {
    try {
        var X202_53_ORDER_NO; // Utility Auto Fix Comments
        var X202_SENDCORRID53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_53_ORDER_NO_12', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_54_ORDER_NO = function() {
    try {
        var X202_54_ORDER_NO; // Utility Auto Fix Comments
        var X202_RECCORRID_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_54_ORDER_NO_13', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_56_ORDER_NO = function() {
    try {
        var X202_56_ORDER_NO; // Utility Auto Fix Comments
        var X202_MEDI_BKID_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_56_ORDER_NO_14', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_57_ORDER_NO = function() {
    try {
        var X202_57_ORDER_NO; // Utility Auto Fix Comments
        var X202_ACC_BKID_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_57_ORDER_NO_15', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_52A = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + "XXX";
            }

        } else if (document.MAINFORM.X202_ORDBK_NM_52A.value != "" || document.MAINFORM.X202_ORDBKADD1_52A.value != "" || document.MAINFORM.X202_ORDBKADD2_52A.value != "" || document.MAINFORM.X202_ORDBKADD3_52A.value != "") {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_52A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_53A = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            document.MAINFORM.X202_TAG_53A.value = 'A';

            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + "XXX";
            }
        } else if (document.MAINFORM.X202SENDCORADD153A.value != "" || document.MAINFORM.X202SENDCORADD253A.value != "" || document.MAINFORM.X202SENDCORADD353A.value != "" || document.MAINFORM.X202_SENDCORRNM53A.value != "") {
            document.MAINFORM.X202_TAG_53A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_53A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_54A = function() {
    try {
        if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            document.MAINFORM.X202_TAG_54A.value = 'A';
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + "XXX";
            }
        } else if (document.MAINFORM.X202_RECCORRNM_54A.value != "" || document.MAINFORM.X202_RECCORADD154A.value != "" || document.MAINFORM.X202_RECCORADD254A.value != "" || document.MAINFORM.X202_RECCORADD354A.value != "") {
            document.MAINFORM.X202_TAG_54A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_54A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_56A = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X202_TAG_56A.value = 'A';
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + "XXX";
            }
        } else if (document.MAINFORM.X202MEDIBKADD1_56A.value != "" || document.MAINFORM.X202MEDIBKADD2_56A.value != "" || document.MAINFORM.X202MEDIBKADD3_56A.value != "" || document.MAINFORM.X202_MEDI_BKNM_56A.value != "") {
            document.MAINFORM.X202_TAG_56A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_56A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_57A = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X202_TAG_57A.value = 'A';
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + "XXX";
            }
        } else if (document.MAINFORM.X202_ACC_BKNM_57A.value != "" || document.MAINFORM.X202_ACCBKADD1_57A.value != "" || document.MAINFORM.X202_ACCBKADD2_57A.value != "" || document.MAINFORM.X202_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_57A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_58A = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_TAG_58A.value = 'A';
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + "XXX";
            }
        } else if (document.MAINFORM.X202_BENE_BKNM_58A.value != "" || document.MAINFORM.X202BENEBKADD1_58A.value != "" || document.MAINFORM.X202BENEBKADD2_58A.value != "" || document.MAINFORM.X202BENEBKADD3_58A.value != "") {
            document.MAINFORM.X202_TAG_58A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_58A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.Cal_X202_TAG_B2 = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X202_TAG_B2.value = 'A';
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + "XXX";
            }

        } else if (document.MAINFORM.X202_ADV_BKNM_B2.value != "" || document.MAINFORM.X202_ADV_BKADD1_B2.value != "" || document.MAINFORM.X202_ADV_BKADD2_B2.value != "" || document.MAINFORM.X202_ADV_BKADD3_B2.value != "") {
            document.MAINFORM.X202_TAG_B2.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_B2.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ACC_BKID_57A_back = function() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ACC_BKID_57Aonchange = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != "") {
            SYS_GetCUBK_S('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
            SYS_changeClassName('X202_57_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = "";
            document.MAINFORM.X202_ACCBKADD1_57A.value = "";
            document.MAINFORM.X202_ACCBKADD2_57A.value = "";
            document.MAINFORM.X202_ACCBKADD3_57A.value = "";
            document.MAINFORM.X202_ACC_BKSW_57A.value = "";
            document.MAINFORM.X202_TAG_57A.value = "";
            document.MAINFORM.X202_ACC_BKACNO57A.value = "";

            SYS_changeClassName('X202_57_ADD_BTN', 'P');
        }
        Cal_X202_TAG_57A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ACC_BKID_57Aonclick = function() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ACC_BKSW_57Achange = function() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ACC_BKID_57A.value = "";
        if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + "XXX";
            }
            if (document.MAINFORM.X202_ACC_BKID_57A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_ACC_BKSW_57Achange_24', '1', true);
                Cal_X202_TAG_57A();
                SYS_changeClassName('X202_57_ADD_BTN', 'O');
                if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
                    SYS_GetCUBK_S('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'X202_ACC_BKID_57A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ACC_BKID_57A, "onchange");
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ADV_BKID_B2_back = function() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ADV_BKID_B2onchange = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
            Cal_X202_TAG_B2();
            SYS_changeClassName('X202_B2_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_ADV_BKSW_B2.value = "";
            document.MAINFORM.X202_ADV_BKNM_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD3_B2.value = "";
            document.MAINFORM.X202_TAG_B2.value = "";
            SYS_changeClassName('X202_B2_ADD_BTN', 'P');
        }
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ADV_BKID_B2onclick = function() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ADV_BKSW_B2change = function() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ADV_BKID_B2.value = "";
        if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + "XXX"; // Utility Auto Fix Comments
            }
            if (document.MAINFORM.X202_ADV_BKID_B2.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_ADV_BKSW_B2change_25', '1', true);
                Cal_X202_TAG_B2();
                SYS_changeClassName('X202_B2_ADD_BTN', 'O');
                if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
                    SYS_GetCUBK_S('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'X202_ADV_BKID_B2_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ADV_BKID_B2, 'onchange');
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_BENE_BKID_58A_back = function() {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_BENE_BKID_58Aonchange = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != "") {
            SYS_GetCUBK_S('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
            SYS_changeClassName('X202_58_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = "";
            document.MAINFORM.X202BENEBKADD1_58A.value = "";
            document.MAINFORM.X202BENEBKADD2_58A.value = "";
            document.MAINFORM.X202BENEBKADD3_58A.value = "";
            document.MAINFORM.X202_BENE_BKSW_58A.value = "";
            document.MAINFORM.X202_TAG_58A.value = "";
            document.MAINFORM.X202_BENEBKACNO58A.value = "";
            SYS_changeClassName('X202_58_ADD_BTN', 'P');
        }
        Cal_X202_TAG_58A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_BENEBKACNO58A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_BENE_BKID_58Aonclick = function() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_BENE_BKID_58A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_BENE_BKSW_58Achange = function() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_BENE_BKID_58A.value = "";
        if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 11 || document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + "XXX";
            }
            if (document.MAINFORM.X202_BENE_BKID_58A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_BENE_BKSW_58Achange_26', '1', true);
                Cal_X202_TAG_58A();
                SYS_changeClassName('X202_58_ADD_BTN', 'O');
                if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
                    SYS_GetCUBK_S('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'X202_BENE_BKID_58A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_BENE_BKID_58A, "onchange");
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_MEDI_BKID_56A_back = function() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_MEDI_BKID_56Aonchange = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != "") {
            SYS_GetCUBK_S('X202_MEDI_BKID_56A', document.MAINFORM.X202_MEDI_BKID_56A.name);
            SYS_changeClassName('X202_56_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = "";
            document.MAINFORM.X202MEDIBKADD1_56A.value = "";
            document.MAINFORM.X202MEDIBKADD2_56A.value = "";
            document.MAINFORM.X202MEDIBKADD3_56A.value = "";
            document.MAINFORM.X202_MEDI_BKSW_56A.value = "";
            document.MAINFORM.X202_TAG_56A.value = "";
            document.MAINFORM.X202_MEDIBKACNO56A.value = "";
            SYS_changeClassName('X202_56_ADD_BTN', 'P');
        }
        Cal_X202_TAG_56A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_MEDI_BKID_56Aonclick = function() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_MEDI_BKSW_56Achange = function() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_MEDI_BKID_56A.value = "";
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + "XXX";
            }
            if (document.MAINFORM.X202_MEDI_BKID_56A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_MEDI_BKSW_56Achange_27', '1', true);
                Cal_X202_TAG_56A();
                SYS_changeClassName('X202_56_ADD_BTN', 'O');
                if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
                    SYS_GetCUBK_S('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_MEDI_BKID_56A, "onchange");
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ORDBK_ID_52A_back = function() {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ORDBK_ID_52Aonchange = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != "") {
            SYS_GetCUBK_S('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
            SYS_changeClassName('X202_52_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = "";
            document.MAINFORM.X202_ORDBKADD1_52A.value = "";
            document.MAINFORM.X202_ORDBKADD2_52A.value = "";
            document.MAINFORM.X202_ORDBKADD3_52A.value = "";
            document.MAINFORM.X202_ORDBK_SW_52A.value = "";
            document.MAINFORM.X202_TAG_52A.value = "";
            document.MAINFORM.X202_ORDBKACNO_52A.value = "";
            SYS_changeClassName('X202_52_ADD_BTN', 'P');
        }
        Cal_X202_TAG_52A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ORDBK_ID_52Aonclick = function() {
    try {
        var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {;
            SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_ORDBK_SW_52Achange = function() {
    try {
        var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ORDBK_ID_52A.value = "";
        if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 11 || document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + "XXX"; // Utility Auto Fix Comments
            }
            if (document.MAINFORM.X202_ORDBK_ID_52A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_ORDBK_SW_52Achange_28', '1', true);
                Cal_X202_TAG_52A();
                SYS_changeClassName('X202_52_ADD_BTN', 'O');
                if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
                    SYS_GetCUBK_S('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ORDBK_ID_52A, 'onchange');
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_RECCORRID_54A_back = function() {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_RECCORRID_54Aonchange = function() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != "") {
            SYS_GetCUBK_S('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
            SYS_changeClassName('X202_54_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = "";
            document.MAINFORM.X202_RECCORADD154A.value = "";
            document.MAINFORM.X202_RECCORADD254A.value = "";
            document.MAINFORM.X202_RECCORADD354A.value = "";
            document.MAINFORM.X202_RECCORRSW_54A.value = "";
            document.MAINFORM.X202_TAG_54A.value = "";
            document.MAINFORM.X202RECCORRACNO54A.value = "";

            SYS_changeClassName('X202_54_ADD_BTN', 'P');
        }
        Cal_X202_TAG_54A();
        SYT_CHK_AC_NO(document.MAINFORM.X202RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_RECCORRID_54Aonclick = function() {
    try {
        var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_RECCORRSW_54Achange = function() {
    try {
        var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_RECCORRID_54A.value = "";
        if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + "XXX";
            }
            if (document.MAINFORM.X202_RECCORRID_54A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_RECCORRSW_54Achange_29', '1', true);
                Cal_X202_TAG_54A();
                SYS_changeClassName('X202_54_ADD_BTN', 'O');
                if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
                    SYS_GetCUBK_S('X202_RECCORRID_54A', document.MAINFORM.X202_RECCORRID_54A.name, 'X202_RECCORRID_54A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_RECCORRID_54A, "onchange");
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_SENDCORRID53A_back = function() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_SENDCORRID53Aonchange = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != "") {
            SYS_GetCUBK_S('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
            Cal_X202_TAG_53A();
            SYS_changeClassName('X202_53_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = "";
            document.MAINFORM.X202SENDCORADD153A.value = "";
            document.MAINFORM.X202SENDCORADD253A.value = "";
            document.MAINFORM.X202SENDCORADD353A.value = "";
            document.MAINFORM.X202_SENDCORRSW53A.value = "";
            document.MAINFORM.X202_TAG_53A.value = "";
            document.MAINFORM.X202SENDCORACNO53A.value = "";
            SYS_changeClassName('X202_53_ADD_BTN', 'P');
        }
        Cal_X202_TAG_53A();
        SYT_CHK_AC_NO(document.MAINFORM.X202SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_SENDCORRID53Aonclick = function() {
    try {
        var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.X202_SENDCORRSW53Achange = function() {
    try {
        var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_SENDCORRID53A.value = "";
        if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 11 || document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + "XXX";
            }
            if (document.MAINFORM.X202_SENDCORRID53A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_SENDCORRSW53Achange_30', '1', true);
                Cal_X202_TAG_53A();

                if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
                    SYS_GetCUBK_S('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'X202_SENDCORRID53A_back()');
                    SYS_changeClassName('X202_53_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_SENDCORRID53A, 'onchange');
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.disable202 = function() {
    try {
        SYT_DisableDiv("K_div");

        document.MAINFORM.X202_AMT_32A.value = 0.00;
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.enable202 = function() {
    try {
        SYS_changeClassName('X202_ADV_BKID_B2', 'M');
        SYS_changeClassName('X202_ADV_BKNM_B2', 'M');
        SYS_changeClassName('X202_ADV_BKADD1_B2', 'O');
        SYS_changeClassName('X202_ADV_BKADD2_B2', 'O');
        SYS_changeClassName('X202_ADV_BKADD3_B2', 'O');
        SYS_changeClassName('X202_ADV_BKSW_B2', 'M');
        SYS_changeClassName('X202RECCORRACNO54A', 'O');
        SYS_changeClassName('X202_ORDBK_ID_52A', 'O');
        SYS_changeClassName('X202_ORDBK_NM_52A', 'O');
        SYS_changeClassName('X202_ORDBKADD1_52A', 'O');
        SYS_changeClassName('X202_ORDBKADD2_52A', 'O');
        SYS_changeClassName('X202_ORDBKADD3_52A', 'O');
        SYS_changeClassName('X202_ORDBK_SW_52A', 'O');
        SYS_changeClassName('X202_ORDBKACNO_52A', 'O');
        SYS_changeClassName('X202_SENDCORRID53A', 'O');
        SYS_changeClassName('X202_SENDCORRNM53A', 'O');
        SYS_changeClassName('X202SENDCORADD153A', 'O');
        SYS_changeClassName('X202SENDCORADD253A', 'O');
        SYS_changeClassName('X202SENDCORADD353A', 'O');
        SYS_changeClassName('X202_SENDCORRSW53A', 'O');
        SYS_changeClassName('X202SENDCORACNO53A', 'O');
        SYS_changeClassName('X202_RECCORRID_54A', 'O');
        SYS_changeClassName('X202_RECCORRNM_54A', 'O');
        SYS_changeClassName('X202_RECCORADD154A', 'O');
        SYS_changeClassName('X202_RECCORADD254A', 'O');
        SYS_changeClassName('X202_RECCORADD354A', 'O');
        SYS_changeClassName('X202_RECCORRSW_54A', 'O');
        SYS_changeClassName('X202_MEDI_BKID_56A', 'O');
        SYS_changeClassName('X202_MEDI_BKNM_56A', 'O');
        SYS_changeClassName('X202MEDIBKADD1_56A', 'O');
        SYS_changeClassName('X202MEDIBKADD2_56A', 'O');
        SYS_changeClassName('X202MEDIBKADD3_56A', 'O');
        SYS_changeClassName('X202_MEDIBKACNO56A', 'O');
        SYS_changeClassName('X202_MEDI_BKSW_56A', 'O');
        SYS_changeClassName('X202_ACC_BKID_57A', 'O'); // Utility Auto Fix Comments
        SYS_changeClassName('X202_ACC_BKNM_57A', 'O');
        SYS_changeClassName('X202_ACCBKADD1_57A', 'O');
        SYS_changeClassName('X202_ACCBKADD2_57A', 'O');
        SYS_changeClassName('X202_ACCBKADD3_57A', 'O');
        SYS_changeClassName('X202_ACC_BKSW_57A', 'O');
        SYS_changeClassName('X202_ACC_BKACNO57A', 'O');
        SYS_changeClassName('X202_BENE_BKID_58A', 'O');
        SYS_changeClassName('X202_BENE_BKNM_58A', 'M');
        SYS_changeClassName('X202BENEBKADD1_58A', 'O');
        SYS_changeClassName('X202BENEBKADD2_58A', 'O');
        SYS_changeClassName('X202BENEBKADD3_58A', 'O');
        SYS_changeClassName('X202_BENE_BKSW_58A', 'O');
        SYS_changeClassName('X202_BENEBKACNO58A', 'O');
        SYS_changeClassName('X202_BKTOBK_INFO72', 'O');
        SYS_changeClassName('X202_B2_BTN', 'O');

        SYS_changeClassName('X202_RELATEDNO_21', 'M');
        SYS_changeClassName('X202_ACC_BKACNO57A', 'O');

        SYS_changeClassName('X202_B2_BTN', 'O');
        SYS_changeClassName('X202_52_BTN', 'O');
        SYS_changeClassName('X202_53_BTN', 'O');
        SYS_changeClassName('X202_54_BTN', 'O');
        SYS_changeClassName('X202_56_BTN', 'O');
        SYS_changeClassName('X202_57_BTN', 'O');
        SYS_changeClassName('X202_58_BTN', 'O');
        document.MAINFORM.X202_VALUE_DT_32A.value = SYS_BUSI_DATE;
      //  document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        var REF_NO_20 = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X202_TRX_REF_NO_20.value =REF_NO_20.substr(0, 16);
         
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202BENEBKADD1_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202BENEBKADD2_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202BENEBKADD3_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202MEDIBKADD1_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202MEDIBKADD2_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202MEDIBKADD3_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202RECCORRACNO54A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202SENDCORACNO53A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202SENDCORADD153A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202SENDCORADD253A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202SENDCORADD353A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_52_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_52_BTN_onclick = function(event) {
    try {
        X202_ORDBK_ID_52Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_52_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_53_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_53_BTN_onclick = function(event) {
    try {
        X202_SENDCORRID53Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_53_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_54_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_54_BTN_onclick = function(event) {
    try {
        X202_RECCORRID_54Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_54_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_56_ADD_BTN_onclick = function(event) {
    try {
        X202_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_56_BTN_onclick = function(event) {
    try {
        X202_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_56_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_57_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_57_BTN_onclick = function(event) {
    try {
        X202_ACC_BKID_57Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_57_ORDER_NO_onchange = function(event) {
    try {
        Cal_X202_57_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_58_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_58_BTN_onclick = function(event) {
    try {
        X202_BENE_BKID_58Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACCBKADD1_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACCBKADD2_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACCBKADD3_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACC_BKACNO57A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        X202_ACC_BKID_57Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACC_BKNM_57A_onchange = function(event) {
    try {
        Cal_X202_TAG_57A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        X202_ACC_BKSW_57Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKADD1_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKADD2_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKADD3_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        X202_ADV_BKID_B2onchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKNM_B2_onchange = function(event) {
    try {
        Cal_X202_TAG_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKSW_B2_onchange = function(event) {
    try {
        X202_ADV_BKSW_B2change();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_B2_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_B2_BTN_onclick = function(event) {
    try {
        X202_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_BENEBKACNO58A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_BENEBKACNO58A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        X202_BENE_BKID_58Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_BENE_BKNM_58A_onchange = function(event) {
    try {
        Cal_X202_TAG_58A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        X202_BENE_BKSW_58Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_MEDIBKACNO56A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        X202_MEDI_BKID_56Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Cal_X202_TAG_56A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        X202_MEDI_BKSW_56Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBKACNO_52A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBKADD1_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBKADD2_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBKADD3_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        X202_ORDBK_ID_52Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBK_NM_52A_onchange = function(event) {
    try {
        Cal_X202_TAG_52A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        X202_ORDBK_SW_52Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORADD154A_onchange = function(event) {
    try {
        Cal_X202_TAG_54A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORADD254A_onchange = function(event) {
    try {
        Cal_X202_TAG_54A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORADD354A_onchange = function(event) {
    try {
        Cal_X202_TAG_54A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORRID_54A_onchange = function(event) {
    try {
        X202_RECCORRID_54Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORRNM_54A_onchange = function(event) {
    try {
        Cal_X202_TAG_54A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORRSW_54A_onchange = function(event) {
    try {
        X202_RECCORRSW_54Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_SENDCORRID53A_onchange = function(event) {
    try {
        X202_SENDCORRID53Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_SENDCORRNM53A_onchange = function(event) {
    try {
        Cal_X202_TAG_53A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_SENDCORRSW53A_onchange = function(event) {
    try {
        X202_SENDCORRSW53Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_202.js", e);
    }
}