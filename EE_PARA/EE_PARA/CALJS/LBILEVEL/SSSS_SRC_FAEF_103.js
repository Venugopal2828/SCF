"path:SCRN/Library/FAEF_103.lbi";

var csLbiCompProto = {};

csLbiCompProto.CAL_X103_RECCHGAMT_71G = function() {
    try {
        var X103_RECCHGAMT_71G; // Utility Auto Fix Comments
        X103_RECCHGAMT_71G = document.MAINFORM.X103_RECCHGAMT_71G.value;
        document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, X103_RECCHGAMT_71G);

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.CAL_X103_SENDCHGAMT71F = function() {
    try {
        var X103_SENDCHGAMT71F; // Utility Auto Fix Comments
        X103_SENDCHGAMT71F = document.MAINFORM.X103_SENDCHGAMT71F.value;
        document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, X103_SENDCHGAMT71F);

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_59_ORDER_NO = function() {
    try {
        var X103_59_ORDER_NO; // Utility Auto Fix Comments
        var X103_BENECU_ID_59A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_BENECU_NM_59A;X103BENECUADD1_59A;X103BENECUADD2_59A;X103BENECUADD3_59A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_59_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_ACC_BKSW_57A = function() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ACC_BKID_57A.value = "";
        if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + "XXX";
            }
            //nX103_ACC_BKSW_57A = document.MAINFORM.X103_ACC_BKSW_57A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX103_ACC_BKSW_57A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ACC_BKID_57A";
            Cal_X103_TAG_57A();
            if (document.MAINFORM.X103_ACC_BKID_57A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ACC_BKSW_57A_2', '1', true);
                if (document.MAINFORM.X103_ACC_BKID_57A.value != "") {
                    SYS_GetCUBK('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
                    SYS_changeClassName('X103_57A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ACC_BKID_57A, 'onchange');
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_ADV_BKSW_B2 = function() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {

            if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value + "XXX";
            }
            if (document.MAINFORM.X103_ADV_BKID_B2.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ADV_BKSW_B2_3', '1', true);
                Cal_X103_TAG_B2();
                if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
                    SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2', 'X103_ADV_BKID_B2_back()');
                    SYS_changeClassName(document.MAINFORM.X103_B2_ADD_BTN.name, 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ADV_BKID_B2, 'onchange');
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_BENECU_BKSW_59 = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_BENECU_BKSW_59.value.length == 11 || document.MAINFORM.X103_BENECU_BKSW_59.value.length == 8) {
            if (document.MAINFORM.X103_BENECU_BKSW_59.value.length == 8) {
                document.MAINFORM.X103_BENECU_BKSW_59.value = document.MAINFORM.X103_BENECU_BKSW_59.value + "XXX";
            }
            if (document.MAINFORM.X103_BENECU_ID_59A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_BENECU_BKSW_59_4', '1', true);
                //Cal_X103_TAG_59A();
                if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                    SYS_GetCUBK('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
                    SYS_changeClassName('X103_50_ADD_BTN', 'O');
                }
            }
        }
        //Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_MEDI_BKSW_56A = function() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + "XXX";
            }
            //nX103_MEDI_BKSW_56A = document.MAINFORM.X103_MEDI_BKSW_56A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '" + nX103_MEDI_BKSW_56A + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_MEDI_BKID_56A";
            if (document.MAINFORM.X103_MEDI_BKID_56A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_MEDI_BKSW_56A_5', '1', true);
                Cal_X103_TAG_56A();
                if (document.MAINFORM.X103_MEDI_BKID_56A.value != "") {
                    SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A_back()');
                    SYS_changeClassName('X103_56A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_MEDI_BKID_56A, 'onchange');
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_ORDCU_SW_50A = function() {
    try {
        var nX103_ORDCU_SW_50A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 11 || document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
            if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
                document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.X103_ORDCU_SW_50A.value + "XXX";
            }
            if (document.MAINFORM.X103_ORDCU_ID_50A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ORDCU_SW_50A_6', '1', true);
                Cal_X103_TAG_50A();
                if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
                    SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A_back()');
                    SYS_changeClassName(document.MAINFORM.X103_50_ADD_BTN.name, 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_ORD_BKSW_52A = function() {
    try {
        var nX103_ORD_BKSW_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ORD_BKID_52A.value = "";
        if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 11 || document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + "XXX";
            }
            if (document.MAINFORM.X103_ORD_BKID_52A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ORD_BKSW_52A_7', '1', true);
                Cal_X103_TAG_52A();
                if (document.MAINFORM.X103_ORD_BKID_52A.value != "") {
                    SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A', 'X103_ORD_BKID_52A_back()');
                    SYS_changeClassName('X103_52A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ORD_BKID_52A, 'onchange');
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_RECCORRSW_54A = function() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_RECCORRID_54A.value = "";
        if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + "XXX";
            }

            //nX103_RECCORRSW_54A = document.MAINFORM.X103_RECCORRSW_54A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_RECCORRSW_54A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_RECCORRID_54A";
            if (document.MAINFORM.X103_RECCORRID_54A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_RECCORRSW_54A_8', '1', true);
                Cal_X103_TAG_54A();
                if (document.MAINFORM.X103_RECCORRID_54A.value != "") {
                    SYS_GetCUBK('X103_RECCORRID_54A', 'X103_RECCORRID_54A', 'X103_RECCORRID_54A_back()');
                    SYS_changeClassName('X103_54A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_RECCORRID_54A, 'onchange');
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_SEND_BKSW_51A = function() {
    try {
        var nX103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_SEND_BKID_51A.value = "";
        if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 11 || document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + "XXX";
            }
            //nX103_SEND_BKSW_51A = document.MAINFORM.X103_SEND_BKSW_51A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_SEND_BKSW_51A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SEND_BKID_51A";
            if (document.MAINFORM.X103_SEND_BKID_51A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_SEND_BKSW_51A_10', '1', true);
                Cal_X103_TAG_51A();
                if (document.MAINFORM.X103_SEND_BKID_51A.value != "") {
                    SYS_GetCUBK('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A', 'X103_SEND_BKID_51A_back()');
                    SYS_changeClassName('X103_51_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_SEND_BKID_51A, 'onchange');
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_50A = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_SW_50A.value != '') {
            document.MAINFORM.X103_TAG_50A.value = 'A';
            if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
                document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.X103_ORDCU_SW_50A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ORDCU_NM_50A.value != "" || document.MAINFORM.X103_ORDCUADD1_50A.value != "" || document.MAINFORM.X103_ORDCUADD2_50A.value != "" || document.MAINFORM.X103_ORDCUADD3_50A.value != "") {
            document.MAINFORM.X103_TAG_50A.value = 'K';
        } else {
            document.MAINFORM.X103_TAG_50A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_51A = function() {
    try {
        if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            document.MAINFORM.X103_TAG_51A.value = 'A';
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + "XXX";
            }
        } else {
            document.MAINFORM.X103_TAG_51A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_52A = function() {
    try {
        if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
            document.MAINFORM.X103_TAG_52A.value = 'A';
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ORD_BKNM_52A.value != "" || document.MAINFORM.X103_ORDBKADD1_52A.value != "" || document.MAINFORM.X103_ORDBKADD2_52A.value != "" || document.MAINFORM.X103_ORDBKADD3_52A.value != "") {
            document.MAINFORM.X103_TAG_52A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_52A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_53A = function() {
    try {
        if (document.MAINFORM.X103_SENDCORRSW53A.value != '') {
            document.MAINFORM.X103_TAG_53A.value = 'A';
            if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_SENDCORRNM53A.value != "" || document.MAINFORM.X103SENDCORADD153A.value != "" || document.MAINFORM.X103SENDCORADD253A.value != "" || document.MAINFORM.X103SENDCORADD353A.value != "") {
            document.MAINFORM.X103_TAG_53A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_53A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_54A = function() {
    try {
        if (document.MAINFORM.X103_RECCORRSW_54A.value != '') {
            document.MAINFORM.X103_TAG_54A.value = 'A';
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + "XXX";
            }

        } else if (document.MAINFORM.X103_RECCORRNM_54A.value != "" || document.MAINFORM.X103_RECCORADD154A.value != "" || document.MAINFORM.X103_RECCORADD254A.value != "" || document.MAINFORM.X103_RECCORADD354A.value != "") {
            document.MAINFORM.X103_TAG_54A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_54A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_56A = function() {
    try {
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X103_TAG_56A.value = 'A';
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + "XXX";
            }
        } else if (document.MAINFORM.X103MEDIBKADD1_56A.value != "" || document.MAINFORM.X103MEDIBKADD2_56A.value != "" || document.MAINFORM.X103MEDIBKADD3_56A.value != "" || document.MAINFORM.X103_MEDI_BKNM_56A.value != "") {
            document.MAINFORM.X103_TAG_56A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_56A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_57A = function() {
    try {
        if (document.MAINFORM.X103_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X103_TAG_57A.value = 'A';
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ACC_BKNM_57A.value != "" || document.MAINFORM.X103_ACCBKADD1_57A.value != "" || document.MAINFORM.X103_ACCBKADD2_57A.value != "" || document.MAINFORM.X103_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_57A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_59A = function() {
    try {
        if (document.MAINFORM.X103_BENECU_BKSW_59.value != '') {
            document.MAINFORM.X103_TAG_59A.value = 'A';
        } else if (document.MAINFORM.X103_BENECU_NM_59A.value != "" || document.MAINFORM.X103BENECUADD1_59A.value != "" || document.MAINFORM.X103BENECUADD2_59A.value != "" || document.MAINFORM.X103BENECUADD3_59A.value != "") {
            document.MAINFORM.X103_TAG_59A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_59A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_B2 = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X103_TAG_B2.value = 'A';
            if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ADV_BKADD1_B2.value != "" || document.MAINFORM.X103_ADV_BKADD2_B2.value != "" || document.MAINFORM.X103_ADV_BKADD3_B2.value != "" || document.MAINFORM.X103_ADV_BKNM_B2.value != "") {
            document.MAINFORM.X103_TAG_B2.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_B2.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_50_ORDER_NO = function() {
    try {
        var X103_ORDCU_ID_50A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_50_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_50_ORDER_NO_16', '1');

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_51_ORDER_NO = function() {
    try {
        var X103_SEND_BKID_51A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_51_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_51_ORDER_NO_17', '1');

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_52_ORDER_NO = function() {
    try {
        var X103_ORD_BKID_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_52_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_52_ORDER_NO_18', '1');

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_53_ORDER_NO = function() {
    try {
        var X103_SENDCORRID53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_53_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_53_ORDER_NO_19', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_54_ORDER_NO = function() {
    try {
        var X103_RECCORRID_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_54_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_54_ORDER_NO_20', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_56_ORDER_NO = function() {
    try {
        var X103_MEDI_BKID_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_56_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_56_ORDER_NO_21', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_57_ORDER_NO = function() {
    try {
        var X103_ACC_BKID_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_57_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_57_ORDER_NO_22', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ACC_BKID_57Aonchange = function() {
    try {
        if (document.MAINFORM.X103_ACC_BKID_57A.value != "") {
            SYS_GetCUBK_S('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
            Cal_X103_TAG_57A();
            SYS_changeClassName('X103_57A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ACC_BKSW_57A.value = "";
            document.MAINFORM.X103_ACC_BKNM_57A.value = "";
            document.MAINFORM.X103_ACCBKADD1_57A.value = "";
            document.MAINFORM.X103_ACCBKADD2_57A.value = "";
            document.MAINFORM.X103_ACCBKADD3_57A.value = "";
            document.MAINFORM.X103_TAG_57A.value = "";
            document.MAINFORM.X103_ACC_BKACNO57A.value = "";
            SYS_changeClassName('X103_57A_ADD_BTN', 'P');
        }
        SYT_CHK_AC_NO(document.MAINFORM.X103_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ACC_BKID_57Aonclick = function() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ADV_BKID_B2_back = function() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ADV_BKID_B2onchange = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
            Cal_X103_TAG_B2();
            SYS_changeClassName('X103_B2_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ADV_BKSW_B2.value = "";
            document.MAINFORM.X103_ADV_BKNM_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
            document.MAINFORM.X103_TAG_B2.value = "";
            SYS_changeClassName(document.MAINFORM.X103_B2_ADD_BTN.name, 'P');
        }
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ADV_BKID_B2onclick = function() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_B2_ORDER_NO = function() {
    try {
        var X103_ADV_BKID_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_B2_ORDER_NO; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_B2_ORDER_NO_23', '1');

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_BENECU_ID_59Aonchange = function() {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                SYS_GetCUBK_S('X103_BENECU_ID_59A', 'X103_BENECU_ID_59A');
            } else {
                SYS_GetCUBK_S('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
               // Cal_X103_TAG_59A();
            }
            SYS_changeClassName('X103_59_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_BENECU_NM_59A.value = "";
            document.MAINFORM.X103BENECUADD1_59A.value = "";
            document.MAINFORM.X103BENECUADD2_59A.value = "";
            document.MAINFORM.X103BENECUADD3_59A.value = "";
            document.MAINFORM.X103_BENECU_BKSW_59.value = "";
            document.MAINFORM.X103_TAG_59A.value = "";
            document.MAINFORM.X103_BENECUACNO59A.value = "";
            SYS_changeClassName('X103_59_ADD_BTN', 'P');
        }
        SYT_CHK_AC_NO(document.MAINFORM.X103_BENECUACNO59A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_BENECU_ID_59Aonclick = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A', '1');
            } else {
                SYS_InqCUBK_byCondition('X103_BENECU_ID_BANK_59A', '1');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_MEDI_BKID_56A = function() {
    try {
        SYS_GetCUBK_S('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_MEDI_BKID_56A_back = function() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_MEDI_BKID_56Aonchange = function() {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value != "") {
            SYS_GetCUBK_S('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A');
            Cal_X103_TAG_56A();
            SYS_changeClassName('X103_56A_ADD_BTN', 'O');

        } else {
            document.MAINFORM.X103_MEDI_BKSW_56A.value = "";
            document.MAINFORM.X103_MEDI_BKNM_56A.value = "";
            document.MAINFORM.X103MEDIBKADD1_56A.value = "";
            document.MAINFORM.X103MEDIBKADD2_56A.value = "";
            document.MAINFORM.X103MEDIBKADD3_56A.value = "";
            document.MAINFORM.X103_TAG_56A.value = "";
            document.MAINFORM.X103_MEDIBKACNO56A.value = "";
            SYS_changeClassName('X103_56A_ADD_BTN', 'P');
        }
        Cal_X103_TAG_56A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_MEDI_BKID_56Aonclick = function() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORDCU_ID_50A = function() {
    try {
        SYS_GetCUBK_S('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORDCU_ID_50A_back = function() {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORDCU_ID_50Aonchange = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            if ("Bank" == document.MAINFORM.X103_ORDCU_ID_OP.value) {
                SYS_GetCUBK_S('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
            } else {
                SYS_GetCUBK_S('X103_ORDCU_CUST_ID_50A', 'X103_ORDCU_ID_50A'); // Utility Auto Fix Comments
            }
            SYS_changeClassName('X103_50_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            document.MAINFORM.X103_ORDCUADD1_50A.value = "";
            document.MAINFORM.X103_ORDCUADD2_50A.value = "";
            document.MAINFORM.X103_ORDCUADD3_50A.value = "";
            document.MAINFORM.X103_ORDCUACNO_50A.value = '';
            document.MAINFORM.X103_TAG_50A.value = "";
            SYS_changeClassName('X103_50_ADD_BTN', 'P');
            X103_TAG_50Achange();
        }
        Cal_X103_TAG_50A();
        //added by zoe for bug 1508
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORDCU_ID_50Aonclick = function() {
    try {
        var nX103_ORDCU_SW_50A;
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            if (document.MAINFORM.X103_ORDCU_ID_OP.value == "Bank") {
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
            } else {
                SYS_InqCUBK_byCondition('X103_ORDCU_CUST_ID_50A', '1');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORDCU_ID_OP_change = function() {
    try {
        document.MAINFORM.X103_50_NOTES.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
        SYS_changeClassName('X103_50_ADD_BTN', 'P');
        if ("Customer" == document.MAINFORM.X103_ORDCU_ID_OP.value) {
            SYS_changeClassName('X103_ORDCU_SW_50A', 'P');
            SYS_changeClassName('X103_TAG_50A', 'P');
        } else {
            SYS_changeClassName('X103_ORDCU_SW_50A', 'O');
            SYS_changeClassName('X103_TAG_50A', 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORD_BKID_52A_back = function() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORD_BKID_52Aonchange = function() {
    try {
        if (document.MAINFORM.X103_ORD_BKID_52A.value != "") {
            SYS_GetCUBK_S('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A');
            SYS_changeClassName('X103_52A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ORD_BKSW_52A.value = "";
            document.MAINFORM.X103_ORD_BKNM_52A.value = "";
            document.MAINFORM.X103_ORDBKADD1_52A.value = "";
            document.MAINFORM.X103_ORDBKADD2_52A.value = "";
            document.MAINFORM.X103_ORDBKADD3_52A.value = "";
            document.MAINFORM.X103_TAG_52A.value = "";
            document.MAINFORM.X103_ORDBKACNO_52A.value = "";
            SYS_changeClassName('X103_52A_ADD_BTN', 'P');
        }
        Cal_X103_TAG_52A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_ORD_BKID_52Aonclick = function() {
    try {
        var nX103_ORD_BKSW_52A;
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_RECCORRID_54Aonchange = function() {
    try {
        if (document.MAINFORM.X103_RECCORRID_54A.value != "") {
            SYS_GetCUBK_S('X103_RECCORRID_54A', 'X103_RECCORRID_54A');
            Cal_X103_TAG_54A();
            SYS_changeClassName('X103_54A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_RECCORRNM_54A.value = "";
            document.MAINFORM.X103_RECCORADD154A.value = "";
            document.MAINFORM.X103_RECCORADD254A.value = "";
            document.MAINFORM.X103_RECCORADD354A.value = "";
            document.MAINFORM.X103_RECCORRSW_54A.value = "";
            document.MAINFORM.X103_TAG_54A.value = "";
            document.MAINFORM.X103RECCORRACNO54A.value = "";

            SYS_changeClassName('X103_54A_ADD_BTN', 'P');
        }

        SYT_CHK_AC_NO(document.MAINFORM.X103RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_RECCORRID_54Aonclick = function() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_SENDCORRID53A_back = function() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_SENDCORRID53Aonchange = function() {
    try {
        if (document.MAINFORM.X103_SENDCORRID53A.value != "") {
            SYS_GetCUBK_S('X103_SENDCORRID53A', 'X103_SENDCORRID53A');
            Cal_X103_TAG_53A();
            SYS_changeClassName('X103_53A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_SENDCORRNM53A.value = "";
            document.MAINFORM.X103SENDCORADD153A.value = "";
            document.MAINFORM.X103SENDCORADD253A.value = "";
            document.MAINFORM.X103SENDCORADD353A.value = "";
            document.MAINFORM.X103_SENDCORRSW53A.value = "";
            document.MAINFORM.X103_TAG_53A.value = "";
            document.MAINFORM.X103SENDCORACNO53A.value = "";

            SYS_changeClassName('X103_53A_ADD_BTN', 'P');
        }
        Cal_X103_TAG_53A();

        SYT_CHK_AC_NO(document.MAINFORM.X103SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_SENDCORRID53Aonclick = function() {
    try {
        var nX103_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_SEND_BKID_51Aonchange = function() {
    try {
        if (document.MAINFORM.X103_SEND_BKID_51A.value != "") {
            SYS_GetCUBK_S('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A');
            Cal_X103_TAG_51A();
            SYS_changeClassName('X103_51_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_SEND_BKNM_51A.value = "";
            document.MAINFORM.X103SENDBKADD1_51A.value = "";
            document.MAINFORM.X103SENDBKADD2_51A.value = "";
            document.MAINFORM.X103SENDBKADD3_51A.value = "";
            document.MAINFORM.X103_SEND_BKSW_51A.value = "";
            document.MAINFORM.X103_TAG_51A.value = "";
            document.MAINFORM.X103_SENDBKACNO51A.value = "";

            SYS_changeClassName('X103_51_ADD_BTN', 'P');
        }
        Cal_X103_TAG_51A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_SENDBKACNO51A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_SEND_BKID_51Aonclick = function() {
    try {
        var X103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_SEND_BKID_51A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.X103_TAG_50Achange = function() {
    try {
        if ("A" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'O');
            SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
        }
        if ("F" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'P');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "" && document.MAINFORM.X103_ORDCUACNO_50A.value.substr(0, 1) == "/") {
                document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCUACNO_50A.value.substr(1, document.MAINFORM.X103_ORDCUACNO_50A.value.length - 1);
            }
        }
        if ("K" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'P');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
        }
        if ("" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'O');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'O');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.disable103 = function() {
    try {
        SYT_DisableDiv("J_div");
        document.MAINFORM.X103_SETT_CCY_32A.value = "";
        document.MAINFORM.X103_SETT_AMT_32A.value = "";
        document.MAINFORM.X103_INSTR_AMT_33B.value = '';
        document.MAINFORM.X103_INSTR_CCY_33B.value = '';
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.enable103 = function() {
    try {
        SYS_changeClassName('X103_ADV_BKID_B2', 'M');
        SYS_changeClassName('X103_ADV_BKNM_B2', 'M');
        SYS_changeClassName('X103_ADV_BKADD1_B2', 'O');
        SYS_changeClassName('X103_ADV_BKADD2_B2', 'O');
        SYS_changeClassName('X103_ADV_BKADD3_B2', 'O');
        SYS_changeClassName('X103_ADV_BKSW_B2', 'M');
        SYS_changeClassName('X103_B2_BTN', 'M');
        SYS_changeClassName('X103_BENECU_ID_59A', 'O');
        SYS_changeClassName('X103_BENECU_NM_59A', 'M');
        SYS_changeClassName('X103BENECUADD1_59A', 'O');
        SYS_changeClassName('X103BENECUADD2_59A', 'O');
        SYS_changeClassName('X103BENECUADD3_59A', 'O');
        SYS_changeClassName('X103_BENECUACNO59A', 'O');

        SYS_changeClassName('X103_ORDCU_ID_50A', 'O');
        SYS_changeClassName('X103_ORDCU_NM_50A', 'M');
        SYS_changeClassName('X103_ORDCUADD1_50A', 'O');
        SYS_changeClassName('X103_ORDCUADD2_50A', 'O');
        SYS_changeClassName('X103_ORDCUADD3_50A', 'O');
        SYS_changeClassName('X103_ORDCU_SW_50A', 'O');
        SYS_changeClassName('X103_ORDCUACNO_50A', 'O');

        SYS_changeClassName('X103_SEND_BKID_51A', 'O');
        SYS_changeClassName('X103_SEND_BKNM_51A', 'O');
        SYS_changeClassName('X103SENDBKADD1_51A', 'O');
        SYS_changeClassName('X103SENDBKADD2_51A', 'O');
        SYS_changeClassName('X103SENDBKADD3_51A', 'O');
        SYS_changeClassName('X103_SEND_BKSW_51A', 'O');
        SYS_changeClassName('X103_SENDBKACNO51A', 'O');

        SYS_changeClassName('X103_ORD_BKID_52A', 'O');
        SYS_changeClassName('X103_ORD_BKNM_52A', 'O');
        SYS_changeClassName('X103_ORDBKADD1_52A', 'O');
        SYS_changeClassName('X103_ORDBKADD2_52A', 'O');
        SYS_changeClassName('X103_ORDBKADD3_52A', 'O');
        SYS_changeClassName('X103_ORD_BKSW_52A', 'O');
        SYS_changeClassName('X103_ORDBKACNO_52A', 'O');

        SYS_changeClassName('X103_SENDCORRID53A', 'O');
        SYS_changeClassName('X103_SENDCORRNM53A', 'O');
        SYS_changeClassName('X103SENDCORADD153A', 'O');
        SYS_changeClassName('X103SENDCORADD253A', 'O');
        SYS_changeClassName('X103SENDCORADD353A', 'O');
        SYS_changeClassName('X103_SENDCORRSW53A', 'O');
        SYS_changeClassName('X103SENDCORACNO53A', 'O');

        SYS_changeClassName('X103_RECCORRID_54A', 'O');
        SYS_changeClassName('X103_RECCORRNM_54A', 'O');
        SYS_changeClassName('X103_RECCORADD154A', 'O');
        SYS_changeClassName('X103_RECCORADD254A', 'O');
        SYS_changeClassName('X103_RECCORADD354A', 'O');
        SYS_changeClassName('X103_RECCORRSW_54A', 'O');
        SYS_changeClassName('X103RECCORRACNO54A', 'O');

        SYS_changeClassName('X103_MEDI_BKID_56A', 'O');
        SYS_changeClassName('X103_MEDI_BKNM_56A', 'O');
        SYS_changeClassName('X103MEDIBKADD1_56A', 'O');
        SYS_changeClassName('X103MEDIBKADD2_56A', 'O');
        SYS_changeClassName('X103MEDIBKADD3_56A', 'O');
        SYS_changeClassName('X103_MEDI_BKSW_56A', 'O');
        SYS_changeClassName('X103_MEDIBKACNO56A', 'O');

        SYS_changeClassName('X103_ACC_BKID_57A', 'O');
        SYS_changeClassName('X103_ACC_BKNM_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD1_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD2_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD3_57A', 'O');
        SYS_changeClassName('X103_ACC_BKSW_57A', 'O');
        SYS_changeClassName('X103_ACC_BKACNO57A', 'O');
        SYS_changeClassName('X103_53A_BTN', 'M');

        SYS_changeClassName('X103_BKOP_CODE_23B', 'M');
        SYS_changeClassName('X103_DET_CHG_71A', 'M');
        SYS_changeClassName('X103_INSTRCODE_23E', 'O');
        SYS_changeClassName('X103_RECCHGCCY_71G', 'O');
        SYS_changeClassName('X103_RECCHGAMT_71G', 'O');
        SYS_changeClassName('X103_REMIT_INFO_70', 'O');
        SYS_changeClassName('X103_REG_REP_77B', 'O');
        SYS_changeClassName('X103_BKTOBK_INFO72', 'O');
        SYS_changeClassName('X103_ORDCU_ID_OP', 'O');

        SYS_changeClassName('X103_B2_BTN', 'O');
        SYS_changeClassName('X103_50_BTN', 'O');
        SYS_changeClassName('X103_51_BTN', 'O');
        SYS_changeClassName('X103_52A_BTN', 'O');
        SYS_changeClassName('X103_54A_BTN', 'O');
        SYS_changeClassName('X103_56A_BTN', 'O');
        SYS_changeClassName('X103_57A_BTN', 'O');
        SYS_changeClassName('X103_59_BTN', 'O');
        SYS_changeClassName('X103_53A_BTN', 'O');

        SYS_changeClassName('X103_BENECU_OP', 'O');
        SYS_changeClassName('X103_TAG_50A', 'M');
         SYS_changeClassName('X103_TAG_59A', 'O');

        SYS_changeClassName('X103_SENDCHGCCY71F', 'O');
        SYS_changeClassName('X103_SENDCHGAMT71F', 'M');
        SYS_changeClassName('X103_ENV_CONT_77T', 'O');
        document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
     //   document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                var REF_NO_20 = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X103_SEND_NO_20.value =REF_NO_20.substr(0, 16);

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103BENECUADD1_59A_onchange = function(event) {
    try {
      //  Cal_X103_TAG_59A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103BENECUADD1_59A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_BENECU_ADD_59A', 'X103_BENECU_ID_59A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103BENECUADD2_59A_onchange = function(event) {
    try {
       // Cal_X103_TAG_59A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103BENECUADD3_59A_onchange = function(event) {
    try {
       // Cal_X103_TAG_59A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103MEDIBKADD1_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103MEDIBKADD2_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103MEDIBKADD3_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103RECCORRACNO54A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDBKADD1_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDBKADD2_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDBKADD3_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDCORACNO53A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDCORADD153A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDCORADD253A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103SENDCORADD353A_onchange = function(event) {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_50_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ORDCU_ADD_50A', 'X103_ORDCU_ID_50A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_50_BTN_onclick = function(event) {
    try {
        X103_ORDCU_ID_50Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_50_ORDER_NO_onchange = function(event) {
    try {
        X103_50_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_51_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_SEND_BK_ADD_51A', 'X103_SEND_BKID_51A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_51_BTN_onclick = function(event) {
    try {
        X103_SEND_BKID_51Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_51_ORDER_NO_onchange = function(event) {
    try {
        X103_51_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_52A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ORD_BK_ADD_52A', 'X103_ORD_BKID_52A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_52A_BTN_onclick = function(event) {
    try {
        X103_ORD_BKID_52Aonclick()
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_52_ORDER_NO_onchange = function(event) {
    try {
        X103_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_53A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_SENDCORRADD53A', 'X103_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_53A_BTN_onclick = function(event) {
    try {
        X103_SENDCORRID53Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_53_ORDER_NO_onchange = function(event) {
    try {
        X103_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_54A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_RECCORRADD_54A', 'X103_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_54A_BTN_onclick = function(event) {
    try {
        X103_RECCORRID_54Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_54_ORDER_NO_onchange = function(event) {
    try {
        X103_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_56A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_MEDI_BKADD_56A', 'X103_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_56A_BTN_onclick = function(event) {
    try {
        X103_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_56_ORDER_NO_onchange = function(event) {
    try {
        X103_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_57A_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ACC_BKADD_57A', 'X103_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_57A_BTN_onclick = function(event) {
    try {
        X103_ACC_BKID_57Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_57_ORDER_NO_onchange = function(event) {
    try {
        X103_57_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_59_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_BENECU_ADD_59A', 'X103_BENECU_ID_59A');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_59_BTN_onclick = function(event) {
    try {
        X103_BENECU_ID_59Aonclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_59_ORDER_NO_onchange = function(event) {
    try {
        Cal_X103_59_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACCBKADD2_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACCBKADD3_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        X103_ACC_BKID_57Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        Cal_X103_ACC_BKSW_57A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ADV_BKADD1_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ADV_BKADD2_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ADV_BKADD3_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        X103_ADV_BKID_B2onchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ADV_BKNM_B2_onchange = function(event) {
    try {
        Cal_X103_TAG_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        Cal_X103_ADV_BKSW_B2();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_B2_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ADV_BKADD_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_B2_BTN_onclick = function(event) {
    try {
        X103_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_B2_ORDER_NO_onchange = function(event) {
    try {
        X103_B2_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_BENECU_BKSW_59_onchange = function(event) {
    try {
        Cal_X103_BENECU_BKSW_59();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        X103_BENECU_ID_59Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_BENECU_NM_59A_onchange = function(event) {
    try {
        //Cal_X103_TAG_59A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_BKTOBK_INFO72_onchange = function(event) {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_BKTOBK_INFO72);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_DET_CHG_71A_onchange = function(event) {
    try {
        document.MAINFORM.X103_SENDCHGAMT71F.value = 0;
        document.MAINFORM.X103_RECCHGAMT_71G.value = 0;
        if (document.MAINFORM.X103_DET_CHG_71A.value == 'BEN') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'P');
        }
        if (document.MAINFORM.X103_DET_CHG_71A.value == 'OUR') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'O');
        }

        if (document.MAINFORM.X103_DET_CHG_71A.value == 'SHA') {
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ENV_CONT_77T_onchange = function(event) {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_ENV_CONT_77T);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_MEDIBKACNO56A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        X103_MEDI_BKID_56Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        Cal_X103_MEDI_BKSW_56A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDBKACNO_52A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_TAG_50A.value == "A" || document.MAINFORM.X103_TAG_50A.value == "K") {
            SYT_CHK_AC_NO_IDNT(document.MAINFORM.X103_ORDCUACNO_50A);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        X103_ORDCU_ID_50Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCU_ID_OP_onchange = function(event) {
    try {
        X103_ORDCU_ID_OP_change();


    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        Cal_X103_ORDCU_SW_50A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        X103_ORD_BKID_52Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORD_BKNM_52A_onchange = function(event) {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        Cal_X103_ORD_BKSW_52A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCHGAMT_71G_onchange = function(event) {
    try {
        CAL_X103_RECCHGAMT_71G();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCHGCCY_71G_onchange = function(event) {
    try {
        CAL_X103_RECCHGAMT_71G();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCORADD154A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCORADD254A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCORADD354A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCORRID_54A_onchange = function(event) {
    try {
        X103_RECCORRID_54Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCORRNM_54A_onchange = function(event) {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        Cal_X103_RECCORRSW_54A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_REG_REP_77B_onchange = function(event) {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_REG_REP_77B);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_REMIT_INFO_70_onchange = function(event) {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_REMIT_INFO_70);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SENDBKACNO51A_onchange = function(event) {
    try {
        SYT_CHK_AC_NO_IDNT(document.MAINFORM.X103_SENDBKACNO51A);
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SENDCHGAMT71F_onchange = function(event) {
    try {
        CAL_X103_SENDCHGAMT71F();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SENDCHGCCY71F_onchange = function(event) {
    try {
        CAL_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SENDCORRID53A_onchange = function(event) {
    try {
        X103_SENDCORRID53Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        X103_SEND_BKID_51Aonchange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SEND_BKNM_51A_onchange = function(event) {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        Cal_X103_SEND_BKSW_51A();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_TAG_50A_onchange = function(event) {
    try {
        X103_TAG_50Achange();

    } catch (e) {
        DisExcpt("SSSS_SRC_FAEF_103.js", e);
    }
}