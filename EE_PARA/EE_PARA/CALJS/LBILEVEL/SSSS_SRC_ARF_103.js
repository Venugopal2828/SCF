"path:SCRN/Library/ARF_103.lbi";

var csLbiCompProto = {};

csLbiCompProto.Inq_X103_ORDCU_ID_50A = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_OP.value == 'Customer') {
            SYS_InqCUBK('X103_ORDCU_CUST_ID_50A'); // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ORDCU_ID_OP.value == 'Bank') {
            SYS_InqCUBK('X103_ORDCU_ID_50A'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.Set_SwiftTags_103 = function() {
    try {
        //Tag 50

        if (document.MAINFORM.X103_ORDCU_ID_OP.value == 'Bank') {
            if (document.MAINFORM.X103_ORDCU_SW_50A.value != '') {
                document.MAINFORM.X103_TAG_50A.value = 'A';
            }
        } else {
            if (document.MAINFORM.X103_ORDCU_NM_50A.value !== '' || document.MAINFORM.X103_ORDCUADD1_50A.value != '' || document.MAINFORM.X103_ORDCUADD2_50A.value != '' || document.MAINFORM.X103_ORDCUADD3_50A.value != '') {
                document.MAINFORM.X103_TAG_50A.value = 'K';
            }
        }

        //Tag 51
        if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            document.MAINFORM.X103_TAG_51A.value = 'A';
        }

        //Tag 52 
        if (document.MAINFORM.X103_ORD_BKSW_52A.value != "") {
            document.MAINFORM.X103_TAG_52A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ORD_BKNM_52A.value != '' || document.MAINFORM.X103_ORDBKADD1_52A.value != '' || document.MAINFORM.X103_ORDBKADD2_52A.value != '' || document.MAINFORM.X103_ORDBKADD3_52A.value != '') {
            document.MAINFORM.X103_TAG_52A.value = "D"; // Utility Auto Fix Comments
        }

        //Tag 53 
        if (document.MAINFORM.X103_SENDCORRSW53A.value != "") {
            document.MAINFORM.X103_TAG_53A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_SENDCORRNM53A.value != "" || document.MAINFORM.X103SENDCORADD153A.value != "" || document.MAINFORM.X103SENDCORADD253A.value != '' || document.MAINFORM.X103SENDCORADD353A.value != '') {
            document.MAINFORM.X103_TAG_53A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_SENDCORRNM53A.value == "" && document.MAINFORM.X103SENDCORADD253A.value != "") {
            document.MAINFORM.X103_TAG_53A.value = "B"; // Utility Auto Fix Comments
        }

        //Tag 54
        if (document.MAINFORM.X103_RECCORRSW_54A.value != "") {
            document.MAINFORM.X103_TAG_54A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_RECCORRNM_54A.value != "" || document.MAINFORM.X103_RECCORADD154A.value != "" || document.MAINFORM.X103_RECCORADD254A.value != "" || document.MAINFORM.X103_RECCORADD354A.value != "") {
            document.MAINFORM.X103_TAG_54A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_RECCORRNM_54A.value == "" && document.MAINFORM.X103_RECCORADD254A.value != "") {
            document.MAINFORM.X103_TAG_54A.value = "B"; // Utility Auto Fix Comments
        }

        //Tag 56
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value != "") {
            document.MAINFORM.X103_TAG_56A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_MEDI_BKNM_56A.value != "" || document.MAINFORM.X103MEDIBKADD1_56A.value != "" || document.MAINFORM.X103MEDIBKADD2_56A.value != "" || document.MAINFORM.X103MEDIBKADD3_56A.value != "") {
            document.MAINFORM.X103_TAG_56A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_MEDI_BKNM_56A.value == "" && document.MAINFORM.X103_MEDIBKACNO56A.value != "") {
            document.MAINFORM.X103_TAG_56A.value = "C"; // Utility Auto Fix Comments
        }

        //Tag 57
        if (document.MAINFORM.X103_ACC_BKSW_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = "A"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ACC_BKNM_57A.value != "" || document.MAINFORM.X103_ACCBKADD1_57A.value != "" || document.MAINFORM.X103_ACCBKADD2_57A.value != "" || document.MAINFORM.X103_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = "D"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ACC_BKNM_57A.value == "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "" && document.MAINFORM.X103_ACCBKADD2_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = "B"; // Utility Auto Fix Comments
        } else if (document.MAINFORM.X103_ACC_BKNM_57A.value == "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "" && document.MAINFORM.X103_ACCBKADD2_57A.value == "") {
            document.MAINFORM.X103_TAG_57A.value = "C"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_ACC_BKID_57A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
            SYS_GetCUBK_S('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
        } else {
            document.MAINFORM.X103_ACC_BKNM_57A.value = '';
            document.MAINFORM.X103_ACCBKADD1_57A.value = '';
            document.MAINFORM.X103_ACCBKADD2_57A.value = '';
            document.MAINFORM.X103_ACCBKADD3_57A.value = '';
            document.MAINFORM.X103_ACC_BKSW_57A.value = '';
            document.MAINFORM.X103_ACC_BKACNO57A.value = '';
            document.MAINFORM.X103_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_ADV_BKID_B2_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            SYS_GetCUBK_S('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
        } else {
            document.MAINFORM.X103_ADV_BKNM_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X103_ADV_BKSW_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_BENECU_ID_59A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != '') {
            SYS_GetCUBK_S('X103_BENECU_ID_59A', 'X103_BENECU_ID_59A');
        } else {
            document.MAINFORM.X103_BENECU_NM_59A.value = '';
            document.MAINFORM.X103BENECUADD1_59A.value = '';
            document.MAINFORM.X103BENECUADD2_59A.value = '';
            document.MAINFORM.X103BENECUADD3_59A.value = '';
            document.MAINFORM.X103_BENECU_BKSW_59.value = '';
            document.MAINFORM.X103_BENECUACNO59A.value = '';
            document.MAINFORM.X103_TAG_59A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_MEDI_BKID_56A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK_S('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X103_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X103MEDIBKADD1_56A.value = '';
            document.MAINFORM.X103MEDIBKADD2_56A.value = '';
            document.MAINFORM.X103MEDIBKADD3_56A.value = '';
            document.MAINFORM.X103_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X103_MEDIBKACNO56A.value = '';
            document.MAINFORM.X103_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_ORDCU_ID_50A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_OP.value == 'Customer') {
            if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
                SYS_GetCUBK_S('X103_ORDCU_CUST_ID_50A', 'X103_ORDCU_ID_50A');
            } else {
                document.MAINFORM.X103_ORDCU_NM_50A.value = '';
                document.MAINFORM.X103_ORDCUADD1_50A.value = '';
                document.MAINFORM.X103_ORDCUADD2_50A.value = '';
                document.MAINFORM.X103_ORDCUADD3_50A.value = '';
                document.MAINFORM.X103_ORDCU_SW_50A.value = '';
                document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                document.MAINFORM.X103_TAG_50A.value = '';
            }
        } else if (document.MAINFORM.X103_ORDCU_ID_OP.value == 'Bank') {
            SYS_GetCUBK_S('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
        } else {
            document.MAINFORM.X103_ORDCU_NM_50A.value = '';
            document.MAINFORM.X103_ORDCUADD1_50A.value = '';
            document.MAINFORM.X103_ORDCUADD2_50A.value = '';
            document.MAINFORM.X103_ORDCUADD3_50A.value = '';
            document.MAINFORM.X103_ORDCU_SW_50A.value = '';
            document.MAINFORM.X103_ORDCUACNO_50A.value = '';
            document.MAINFORM.X103_TAG_50A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_ORD_BKID_52A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_ORD_BKID_52A.value != '') {
            SYS_GetCUBK_S('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A');
        } else {
            document.MAINFORM.X103_ORD_BKNM_52A.value = '';
            document.MAINFORM.X103_ORDBKADD1_52A.value = '';
            document.MAINFORM.X103_ORDBKADD2_52A.value = '';
            document.MAINFORM.X103_ORDBKADD3_52A.value = '';
            document.MAINFORM.X103_ORD_BKSW_52A.value = '';
            document.MAINFORM.X103_ORDBKACNO_52A.value = '';
            document.MAINFORM.X103_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_RECCORRID_54A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_RECCORRID_54A.value != '') {
            SYS_GetCUBK_S('X103_RECCORRID_54A', 'X103_RECCORRID_54A');
        } else {
            document.MAINFORM.X103_RECCORRNM_54A.value = '';
            document.MAINFORM.X103_RECCORADD154A.value = '';
            document.MAINFORM.X103_RECCORADD254A.value = '';
            document.MAINFORM.X103_RECCORADD354A.value = '';
            document.MAINFORM.X103_RECCORRSW_54A.value = '';
            document.MAINFORM.X103RECCORRACNO54A.value = '';
            document.MAINFORM.X103_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_SENDCORRID53A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
            SYS_GetCUBK_S('X103_SENDCORRID53A', 'X103_SENDCORRID53A');
        } else {
            document.MAINFORM.X103_SENDCORRNM53A.value = '';
            document.MAINFORM.X103SENDCORADD153A.value = '';
            document.MAINFORM.X103SENDCORADD253A.value = '';
            document.MAINFORM.X103SENDCORADD353A.value = '';
            document.MAINFORM.X103_SENDCORRSW53A.value = '';
            document.MAINFORM.X103SENDCORACNO53A.value = '';
            document.MAINFORM.X103_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}

csLbiCompProto.X103_SEND_BKID_51A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X103_SEND_BKID_51A.value != '') {
            SYS_GetCUBK_S('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A');
        } else {
            document.MAINFORM.X103_SEND_BKNM_51A.value = '';
            document.MAINFORM.X103SENDBKADD1_51A.value = '';
            document.MAINFORM.X103SENDBKADD2_51A.value = '';
            document.MAINFORM.X103SENDBKADD3_51A.value = '';
            document.MAINFORM.X103_SEND_BKSW_51A.value = '';
            document.MAINFORM.X103_SENDBKACNO51A.value = '';
            document.MAINFORM.X103_TAG_51A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_103.js", e);
    }
}