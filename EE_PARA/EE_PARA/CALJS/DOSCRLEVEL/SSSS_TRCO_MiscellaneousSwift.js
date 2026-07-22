"path:SCRN/o2m/TRCO_MiscellaneousSwift.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_MT202_B3_121 = function() {
    try {
        var SEND_SW_TP = document.MAINFORM.MESG_TYPE.value;
        var sMt202B3121 = "";
        if (SEND_SW_TP === "MT202") {
            sMt202B3121 = Generate_guid();
        }
        document.MAINFORM.UETR_GPI_121.value = sMt202B3121;
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*Cal_MT202_B3_121", e);
    }
}

csDOScreenProto.Generate_guid = function() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*Generate_guid", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo_S('TRCO_MISCE_REF', setDOref, "", "DOREF", "DOREF");
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*InitValues", e);
    }
}

csDOScreenProto.Mpo_SwFldClassBySendSwTp = function() {
    try {
        var SEND_SW_TP = document.MAINFORM.MESG_TYPE.value;
        if (SEND_SW_TP === "MT202") {
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, "M");
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, "M");
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, "M");
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, "M");
            SYT_ChangeFldClass(document.MAINFORM.NARR, "O");
            SYT_ChangeFldClass(document.MAINFORM.UETR_GPI_121, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, "O");
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, "O");
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, "O");
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, "O");
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, "O");
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKNM_58A, "O");
            SYT_ChangeFldClass(document.MAINFORM.NARR, "M");
            SYT_ChangeFldClass(document.MAINFORM.UETR_GPI_121, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*Mpo_SwFldClassBySendSwTp", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Mpo_SwFldClassBySendSwTp();
        Set_ShowMTTags();
        var sTrxRef = SYS_getValueFromMain("TRX_REF_NO");
        document.MAINFORM.X202_TRX_REF_NO_20.value = sTrxRef;
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_52A = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
        }
        if ((document.MAINFORM.X202_ORDBK_NM_52A.value != '' || document.MAINFORM.X202_ORDBKADD1_52A.value != '' || document.MAINFORM.X202_ORDBKADD2_52A.value != '' || document.MAINFORM.X202_ORDBKADD3_52A.value != '') && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X202_ORDBK_NM_52A.value == '' && document.MAINFORM.X202_ORDBKADD1_52A.value == '' && document.MAINFORM.X202_ORDBKADD2_52A.value == '' && document.MAINFORM.X202_ORDBKADD3_52A.value == '' && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_52A", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_53A = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            document.MAINFORM.X202_TAG_53A.value = 'A';
        }
        if ((document.MAINFORM.X202_SENDCORRNM53A.value != '' || document.MAINFORM.X202SENDCORADD153A.value != '' || document.MAINFORM.X202SENDCORADD253A.value != '' || document.MAINFORM.X202SENDCORADD353A.value != '') && document.MAINFORM.X202_SENDCORRSW53A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = 'D';
        }
        if (document.MAINFORM.X202_SENDCORRNM53A.value == '' && document.MAINFORM.X202SENDCORADD153A.value == '' && document.MAINFORM.X202SENDCORADD253A.value == '' && document.MAINFORM.X202SENDCORADD353A.value == '' && document.MAINFORM.X202_SENDCORRSW53A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_53A", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_54A = function() {
    try {
        if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            document.MAINFORM.X202_TAG_54A.value = 'A';
        }
        if ((document.MAINFORM.X202_RECCORRNM_54A.value != '' || document.MAINFORM.X202_RECCORADD154A.value != '' || document.MAINFORM.X202_RECCORADD254A.value != '' || document.MAINFORM.X202_RECCORADD354A.value != '') && document.MAINFORM.X202_RECCORRSW_54A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = 'D';
        }
        if (document.MAINFORM.X202_RECCORRNM_54A.value == '' && document.MAINFORM.X202_RECCORADD154A.value == '' && document.MAINFORM.X202_RECCORADD254A.value == '' && document.MAINFORM.X202_RECCORADD354A.value == '' && document.MAINFORM.X202_RECCORRSW_54A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_54A", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_56A = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X202_TAG_56A.value = 'A';
        }
        if ((document.MAINFORM.X202_MEDI_BKNM_56A.value != '' || document.MAINFORM.X202MEDIBKADD1_56A.value != '' || document.MAINFORM.X202MEDIBKADD2_56A.value != '' || document.MAINFORM.X202MEDIBKADD3_56A.value != '') && document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = 'D';
        }
        if (document.MAINFORM.X202_MEDI_BKNM_56A.value == '' && document.MAINFORM.X202MEDIBKADD1_56A.value == '' && document.MAINFORM.X202MEDIBKADD2_56A.value == '' && document.MAINFORM.X202MEDIBKADD3_56A.value == '' && document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_56A", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_57A = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X202_TAG_57A.value = 'A';
        }
        if ((document.MAINFORM.X202_ACC_BKNM_57A.value != '' || document.MAINFORM.X202_ACCBKADD1_57A.value != '' || document.MAINFORM.X202_ACCBKADD2_57A.value != '' || document.MAINFORM.X202_ACCBKADD3_57A.value != '') && document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = 'D';
        }
        if (document.MAINFORM.X202_ACC_BKNM_57A.value == '' && document.MAINFORM.X202_ACCBKADD1_57A.value == '' && document.MAINFORM.X202_ACCBKADD2_57A.value == '' && document.MAINFORM.X202_ACCBKADD3_57A.value == '' && document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_57A", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_58A = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_TAG_58A.value = 'A';
        }
        if ((document.MAINFORM.X202_BENE_BKNM_58A.value != '' || document.MAINFORM.X202BENEBKADD1_58A.value != '' || document.MAINFORM.X202BENEBKADD2_58A.value != '' || document.MAINFORM.X202BENEBKADD3_58A.value != '') && document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = 'D';
        }
        if (document.MAINFORM.X202_BENE_BKNM_58A.value == '' && document.MAINFORM.X202BENEBKADD1_58A.value == '' && document.MAINFORM.X202BENEBKADD2_58A.value == '' && document.MAINFORM.X202BENEBKADD3_58A.value == '' && document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_58A", e);
    }
}

csDOScreenProto.SYF_CHK_X202_TAG_B2 = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X202_TAG_B2.value = 'A';
        }
        if ((document.MAINFORM.X202_ADV_BKNM_B2.value != '' || document.MAINFORM.X202_ADV_BKADD1_B2.value != '' || document.MAINFORM.X202_ADV_BKADD2_B2.value != '' || document.MAINFORM.X202_ADV_BKADD3_B2.value != '') && document.MAINFORM.X202_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = 'D';
        }
        if (document.MAINFORM.X202_ADV_BKNM_B2.value == '' && document.MAINFORM.X202_ADV_BKADD1_B2.value == '' && document.MAINFORM.X202_ADV_BKADD2_B2.value == '' && document.MAINFORM.X202_ADV_BKADD3_B2.value == '' && document.MAINFORM.X202_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*SYF_CHK_X202_TAG_B2", e);
    }
}

csDOScreenProto.Set_ShowMTTags = function() {
    try {
        var SEND_SW_TP = document.MAINFORM.MESG_TYPE.value;
        if (SEND_SW_TP === "MT202") {
            SYT_DisObj("MT202");
            SYT_hideObj("MTX99Row1");
        } else {
            SYT_DisObj("MTX99Row1");
            SYT_hideObj("MT202");
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*Set_ShowMTTags", e);
    }
}

csDOScreenProto.setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.MISCLS_INDEX_NO.value = "SW" + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*setDOref", e);
    }
}

csDOScreenProto.IS_GPI_MEMBER_onchange = function(event) {
    try {
        var IS_GPI = document.MAINFORM.IS_GPI_MEMBER.value;

        if (IS_GPI == 'YES') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '001';
        } else if (IS_GPI == 'NO') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*IS_GPI_MEMBER_onchange", e);
    }
}

csDOScreenProto.MESG_TYPE_onchange = function(event) {
    try {
        Set_ShowMTTags();
        Mpo_SwFldClassBySendSwTp();
        Cal_MT202_B3_121();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*MESG_TYPE_onchange", e);
    }
}

csDOScreenProto.RCV_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.RCV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.RCV_BK_SW_ADD.value = document.MAINFORM.RCV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*RCV_BK_SW_ADD_onchange", e);
    }
}

csDOScreenProto.X202_52_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_52_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.X202_53_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_53_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.X202_54_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_54_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.X202_56_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_56_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.X202_57_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_57_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.X202_58_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_58_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.X202_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYF_CHK_X202_TAG_57A()');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_ACC_BKID_57A_onchange", e);
    }
}

csDOScreenProto.X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYF_CHK_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_ACC_BKSW_57A_onchange", e);
    }
}

csDOScreenProto.X202_BENE_BKID_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'SYF_CHK_X202_TAG_58A()');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_BENE_BKID_58A_onchange", e);
    }
}

csDOScreenProto.X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        SYF_CHK_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_BENE_BKSW_58A_onchange", e);
    }
}

csDOScreenProto.X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYF_CHK_X202_TAG_56A()');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_MEDI_BKID_56A_onchange", e);
    }
}

csDOScreenProto.X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYF_CHK_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_MEDI_BKSW_56A_onchange", e);
    }
}

csDOScreenProto.X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_CHK_X202_TAG_52A()');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_ORDBK_ID_52A_onchange", e);
    }
}

csDOScreenProto.X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        SYF_CHK_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_ORDBK_SW_52A_onchange", e);
    }
}

csDOScreenProto.X202_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYF_CHK_X202_TAG_54A()');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_RECCORRID_54A_onchange", e);
    }
}

csDOScreenProto.X202_RECCORRSW_54A_onchange = function(event) {
    try {
        SYF_CHK_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_RECCORRSW_54A_onchange", e);
    }
}

csDOScreenProto.X202_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYF_CHK_X202_TAG_53A()');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_SENDCORRID53A_onchange", e);
    }
}

csDOScreenProto.X202_SENDCORRSW53A_onchange = function(event) {
    try {
        SYF_CHK_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_SENDCORRSW53A_onchange", e);
    }
}

csDOScreenProto.X202_52_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_52_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.X202_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_CHK_X202_TAG_52A()');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_52_BTN_onclick", e);
    }
}

csDOScreenProto.X202_53_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_53_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.X202_53_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYM_FFIT_CHK_X202_TAG_53A()');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_53_BTN_onclick", e);
    }
}

csDOScreenProto.X202_54_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_54_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.X202_54_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYF_CHK_X202_TAG_54A()');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_54_BTN_onclick", e);
    }
}

csDOScreenProto.X202_56_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_56_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.X202_56_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYM_FFIT_CHK_X202_TAG_56A()');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_56_BTN_onclick", e);
    }
}

csDOScreenProto.X202_57_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_57_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.X202_57_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYM_FFIT_CHK_X202_TAG_57A()');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_57_BTN_onclick", e);
    }
}

csDOScreenProto.X202_58_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_58_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.X202_58_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'SYM_FFIT_CHK_X202_TAG_58A()');
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousSwift.js*X202_58_BTN_onclick", e);
    }
}