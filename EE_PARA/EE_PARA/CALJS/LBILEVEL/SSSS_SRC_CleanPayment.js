"path:SCRN/Library/COMMON/CleanPayment.lbi";

var csLbiCompProto = {};

csLbiCompProto.CPYT_ASSGN_ID_Back = function() {
    try {
        Set_ASSGN_MULTI_ADD();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.CPYT_DR_ID_Back = function() {
    try {
        Set_DR_MULTI_ADD();
        ChangClass_CPYT_DR_EMAIL_ADD();
        ChangClass_CPYT_DR_FAX_NO();
        ChangClass_CPYT_DR_MAIL_ADD();
        ChangClass_CPYT_DR_TEL_NO();
        PYMT_Charge();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_ORDER_NO = function() {
    try {
        var CPYT_ASSGN_ID; // Utility Auto Fix Comments
        var CPYT_ASSGN_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CPYT_ASSGN_ORDER_NO = document.MAINFORM.CPYT_ASSGN_ORDER_NO.value;
        //CPYT_ASSGN_ID = document.MAINFORM.CPYT_ASSGN_ID.value;
        //sSQLWhere = "ORDER_NO = " + CPYT_ASSGN_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_ASSGN_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "CPYT_ASSGN_NM;CPYT_ASSGN_ADD1;CPYT_ASSGN_ADD2;CPYT_ASSGN_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_CPYT_ASSGN_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_OREDER_POST = function() {
    try {
        var CPYT_ASSGN_ID; // Utility Auto Fix Comments
        var CPYT_ASSGN_OREDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CPYT_ASSGN_OREDER_POST = document.MAINFORM.CPYT_ASSGN_OREDER_POST.value;
        //CPYT_ASSGN_ID = document.MAINFORM.CPYT_ASSGN_ID.value;
        //sSQLWhere = "ORDER_NO = " + CPYT_ASSGN_OREDER_POST + " AND C_MAIN_REF = '" + CPYT_ASSGN_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "CPYT_ASSGN_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_CPYT_ASSGN_OREDER_POST_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ID = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        if (document.MAINFORM.CPYT_DR_NAME.value != '' && document.MAINFORM.CPYT_DR_ADD1.value != '' && document.MAINFORM.CPYT_DR_ADD2.value != '' && document.MAINFORM.CPYT_DR_ADD3.value != '') {
            //SYS_InqCUBK_Sql('CPYT_DR_ID', SYT_SYS_buildSQLCond(new Array('SWF_FMT_NM', 'CPYT_DR_NAME', 'SWIFT_FMT_ADD1', 'CPYT_DR_ADD1', 'SWIFT_FMT_ADD2', 'CPYT_DR_ADD2', 'SWIFT_FMT_ADD3', 'CPYT_DR_ADD3')));
            SYS_InqCUBK_byCondition('CPYT_DR_ID', '1');
        } else {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('CPYT_DR_ID');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ORDER_NO = function() {
    try {
        var CPYT_DR_ID; // Utility Auto Fix Comments
        var CPYT_DR_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CPYT_DR_ORDER_NO = document.MAINFORM.CPYT_DR_ORDER_NO.value;
        //CPYT_DR_ID = document.MAINFORM.CPYT_DR_ID.value;
        //sSQLWhere = "ORDER_NO = " + CPYT_DR_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_DR_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "CPYT_DR_NAME;CPYT_DR_ADD1;CPYT_DR_ADD2;CPYT_DR_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_CPYT_DR_ORDER_NO_2', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ORDER_POST = function() {
    try {
        var CPYT_DR_ID; // Utility Auto Fix Comments
        var CPYT_DR_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CPYT_DR_ORDER_POST = document.MAINFORM.CPYT_DR_ORDER_POST.value;
        //CPYT_DR_ID = document.MAINFORM.CPYT_DR_ID.value;
        //sSQLWhere = "ORDER_NO = " + CPYT_DR_ORDER_POST + " AND C_MAIN_REF = '" + CPYT_DR_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "CPYT_DR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_CPYT_DR_ORDER_POST_3', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_CPYT_STL_AMT = function() {
    try {
        document.MAINFORM.CPYT_STL_AMT.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value) + SYS_BeFloat(document.MAINFORM.REV_BK_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_DR_CHG_AMT = function() {
    try {
        document.MAINFORM.DR_CHG_AMT.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) + SYS_BeFloat(document.MAINFORM.REV_BK_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_Principle_Amount = function() {
    try {
        var RateOut2In; // Utility Auto Fix Comments
        RateOut2In = SYS_BeFloat(document.MAINFORM.CPYT_DR_BUY_RATE.value);

        if (RateOut2In == 0) {
            RateOut2In = 1;
        }
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value));
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, 0);
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * RateOut2In);
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value));
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, 0);
            if (RateOut2In == 0 || RateOut2In == null) {
                document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value, 0);
            } else {
                document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / RateOut2In);
            }
        } else {
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, 0);
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, 0);
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, 0);
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_TEMP_BOOK_RATE = function() {
    try {
        var FromCCy; // Utility Auto Fix Comments
        var ToCCy; // Utility Auto Fix Comments
        FromCCy = document.MAINFORM.CPYT_DR_CCY.value;
        ToCCy = SYS_LOCAL_CCY;

        if (FromCCy != "" && ToCCy != "" && FromCCy != ToCCy) {
            SYS_GetExchangeRate(FromCCy, ToCCy, "Booking Rate", "document.MAINFORM.TEMP_BOOK_RATE", "Cal_TEMP_BUY_RATE");
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_TEMP_BUY_RATE = function() {
    try {
        var FromCCy; // Utility Auto Fix Comments
        var ToCCy; // Utility Auto Fix Comments
        FXamount = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) * SYS_BeFloat(document.MAINFORM.TEMP_BOOK_RATE.value);
        FromCCy = document.MAINFORM.CPYT_DR_CCY.value;
        ToCCy = SYS_LOCAL_CCY;
        if (FromCCy != "" && ToCCy != "" && FromCCy != ToCCy) {
            if (FXamount < 50000) {
                SYS_GetExchangeRate(FromCCy, ToCCy, "Buying Rate", "document.MAINFORM.TEMP_BUY_RATE");
            } else {
                SYS_GetExchangeRate(FromCCy, ToCCy, "High Buy-Rate", "document.MAINFORM.TEMP_BUY_RATE");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_50_ORDER_NO = function() {
    try {
        var X103_50_ORDER_NO; // Utility Auto Fix Comments
        var X103_ORDCU_ID_50A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_50_ORDER_NO = document.MAINFORM.X103_50_ORDER_NO.value;
        //X103_ORDCU_ID_50A = document.MAINFORM.X103_ORDCU_ID_50A.value;
        //sSQLWhere = "ORDER_NO = " + X103_50_ORDER_NO + " AND C_MAIN_REF = '" + X103_ORDCU_ID_50A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ORDCU_NM_50A;X103_ORDCUADD1_50A;X103_ORDCUADD2_50A;X103_ORDCUADD3_50A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_50_ORDER_NO_4', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_51_ORDER_NO = function() {
    try {
        var X103_51_ORDER_NO; // Utility Auto Fix Comments
        var X103_SEND_BKID_51A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_51_ORDER_NO = document.MAINFORM.X103_51_ORDER_NO.value;
        //X103_SEND_BKID_51A = document.MAINFORM.X103_SEND_BKID_51A.value;
        //sSQLWhere = "ORDER_NO = " + X103_51_ORDER_NO + " AND C_MAIN_REF = '" + X103_SEND_BKID_51A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_SEND_BKNM_51A;X103SENDBKADD1_51A;X103SENDBKADD2_51A;X103SENDBKADD3_51A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_51_ORDER_NO_5', '1');
        Chk_X103_TAG_51A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_52_ORDER_NO = function() {
    try {
        var X103_52_ORDER_NO; // Utility Auto Fix Comments
        var X103_ORD_BKID_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_52_ORDER_NO = document.MAINFORM.X103_52_ORDER_NO.value;
        //X103_ORD_BKID_52A = document.MAINFORM.X103_ORD_BKID_52A.value;
        //sSQLWhere = "ORDER_NO = " + X103_52_ORDER_NO + " AND C_MAIN_REF = '" + X103_ORD_BKID_52A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ORD_BKNM_52A;X103_ORDBKADD1_52A;X103_ORDBKADD2_52A;X103_ORDBKADD3_52A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_52_ORDER_NO_6', '1');
        Chk_X103_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_53_ORDER_NO = function() {
    try {
        var X103_53_ORDER_NO; // Utility Auto Fix Comments
        var X103_SENDCORRID53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_53_ORDER_NO = document.MAINFORM.X103_53_ORDER_NO.value;
        //X103_SENDCORRID53A = document.MAINFORM.X103_SENDCORRID53A.value;
        //sSQLWhere = "ORDER_NO = " + X103_53_ORDER_NO + " AND C_MAIN_REF = '" + X103_SENDCORRID53A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_SENDCORRNM53A;X103SENDCORADD153A;X103SENDCORADD253A;X103SENDCORADD353A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_53_ORDER_NO_7', '1');
        Chk_X103_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_54_ORDER_NO = function() {
    try {
        var X103_54_ORDER_NO; // Utility Auto Fix Comments
        var X103_RECCORRID_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_54_ORDER_NO = document.MAINFORM.X103_54_ORDER_NO.value;
        //X103_RECCORRID_54A = document.MAINFORM.X103_RECCORRID_54A.value;
        //sSQLWhere = "ORDER_NO = " + X103_54_ORDER_NO + " AND C_MAIN_REF = '" + X103_RECCORRID_54A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_RECCORRNM_54A;X103_RECCORADD154A;X103_RECCORADD254A;X103_RECCORADD354A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_54_ORDER_NO_8', '1');
        Chk_X103_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_56_ORDER_NO = function() {
    try {
        var X103_56_ORDER_NO; // Utility Auto Fix Comments
        var X103_MEDI_BKID_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_56_ORDER_NO = document.MAINFORM.X103_56_ORDER_NO.value;
        //X103_MEDI_BKID_56A = document.MAINFORM.X103_MEDI_BKID_56A.value;
        //sSQLWhere = "ORDER_NO = " + X103_56_ORDER_NO + " AND C_MAIN_REF = '" + X103_MEDI_BKID_56A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_MEDI_BKNM_56A;X103MEDIBKADD1_56A;X103MEDIBKADD2_56A;X103MEDIBKADD3_56A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_56_ORDER_NO_9', '1');
        Chk_X103_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_57_ORDER_NO = function() {
    try {
        var X103_57_ORDER_NO; // Utility Auto Fix Comments
        var X103_ACC_BKID_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_57_ORDER_NO = document.MAINFORM.X103_57_ORDER_NO.value;
        //X103_ACC_BKID_57A = document.MAINFORM.X103_ACC_BKID_57A.value;
        //sSQLWhere = "ORDER_NO = " + X103_57_ORDER_NO + " AND C_MAIN_REF = '" + X103_ACC_BKID_57A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ACC_BKNM_57A;X103_ACCBKADD1_57A;X103_ACCBKADD2_57A;X103_ACCBKADD3_57A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_57_ORDER_NO_10', '1');
        Chk_X103_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
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
        //X103_59_ORDER_NO = document.MAINFORM.X103_59_ORDER_NO.value;
        //X103_BENECU_ID_59A = document.MAINFORM.X103_BENECU_ID_59A.value;
        //sSQLWhere = "ORDER_NO = " + X103_59_ORDER_NO + " AND C_MAIN_REF = '" + X103_BENECU_ID_59A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_BENECU_NM_59A;X103BENECUADD1_59A;X103BENECUADD2_59A;X103BENECUADD3_59A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_59_ORDER_NO_11', '1');
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ACC_BKID_57A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_57_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_57_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ACC_BKID_57A_Back = function() {
    try {
        Cal_X103_ACC_BKID_57A_ADD_Back();
        Chk_X103_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ADV_BKID_B2_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ADV_BKID_B2_Back = function() {
    try {
        Cal_X103_ADV_BKID_B2_ADD_Back();
        Chk_X103_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_B2_ORDER_NO = function() {
    try {
        var X103_ADV_BKID_B2; // Utility Auto Fix Comments
        var X103_B2_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_B2_ORDER_NO = document.MAINFORM.X103_B2_ORDER_NO.value;
        //X103_ADV_BKID_B2 = document.MAINFORM.X103_ADV_BKID_B2.value;
        //sSQLWhere = "ORDER_NO = " + X103_B2_ORDER_NO + " AND C_MAIN_REF = '" + X103_ADV_BKID_B2 + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ADV_BKNM_B2;X103_ADV_BKADD1_B2;X103_ADV_BKADD2_B2;X103_ADV_BKADD3_B2";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_B2_ORDER_NO_12', '1');
        Chk_X103_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
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
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_BENECU_BKSW_59.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_BENECU_ID_59A";
            if (document.MAINFORM.X103_BENECU_ID_59A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X103_BENECU_BKSW_59_13', '1', true);
                Cal_X103_TAG_59A();
                if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                    SYS_GetCUBK('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
                }
            }
        }
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_BENECU_ID_59A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_BENECU_ID_59A_Back = function() {
    try {
        Cal_X103_BENECU_ID_59A_ADD_Back();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_INSTR_AMT_33B = function() {
    try {
        document.MAINFORM.X103_INSTR_AMT_33B.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_INSTR_CCY_33B = function() {
    try {
        document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_MEDI_BKID_56A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_56_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_56_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_MEDI_BKID_56A_Back = function() {
    try {
        Cal_X103_MEDI_BKID_56A_ADD_Back();
        Chk_X103_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ORDCU_ID_50A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ORDCU_ID_50A_Back = function() {
    try {
        Cal_X103_ORDCU_ID_50A_ADD_Back();
        if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.X103_ORDCU_SW_50A.value + "XXX";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ORD_BKID_52A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_ORD_BKID_52A.value != '') {
            //SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN,'O');
            SYT_ChangeFldClass(document.MAINFORM.X103_52_ADD_BTN, 'O'); // Utility Auto Fix Comments
        } else {
            //SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN,'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_52_ADD_BTN, 'P'); // Utility Auto Fix Comments

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_ORD_BKID_52A_Back = function() {
    try {
        Cal_X103_ORD_BKID_52A_ADD_Back();
        Chk_X103_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_RECCORRID_54A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_RECCORRID_54A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_54_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_54_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_RECCORRID_54A_Back = function() {
    try {
        Cal_X103_RECCORRID_54A_ADD_Back();
        Chk_X103_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_SENDCORRID53A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_53_ADD_BTN, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_53_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_SENDCORRID53A_Back = function() {
    try {
        Cal_X103_SENDCORRID53A_ADD_Back();
        Chk_X103_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_SEND_BKID_51A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X103_SEND_BKID_51A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_51_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_51_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_SEND_BKID_51A_Back = function() {
    try {
        Cal_X103_SEND_BKID_51A_ADD_Back();
        Chk_X103_TAG_51A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_SETT_AMT_32A = function() {
    try {
        document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_SETT_CCY_32A = function() {
    try {
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_PAY_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_TAG_59A = function() {
    try {
        if (document.MAINFORM.X103_BENECU_BKSW_59.value != '') {
            document.MAINFORM.X103_TAG_59A.value = 'A';
        } else if (document.MAINFORM.X103_BENECU_NM_59A.value != "" || document.MAINFORM.X103BENECUADD1_59A.value != "" || document.MAINFORM.X103BENECUADD2_59A.value != "" || document.MAINFORM.X103BENECUADD3_59A.value != "") {
            document.MAINFORM.X103_TAG_59A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_59A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X103_VALUE_DT_32A = function() {
    try {
        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_52_ORDER_NO = function() {
    try {
        var X202_52_ORDER_NO; // Utility Auto Fix Comments
        var X202_ORDBK_ID_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_52_ORDER_NO = document.MAINFORM.X202_52_ORDER_NO.value;
        //X202_ORDBK_ID_52A = document.MAINFORM.X202_ORDBK_ID_52A.value;
        //sSQLWhere = "ORDER_NO = " + X202_52_ORDER_NO + " AND C_MAIN_REF = '" + X202_ORDBK_ID_52A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_ORDBK_NM_52A;X202_ORDBKADD1_52A;X202_ORDBKADD2_52A;X202_ORDBKADD3_52A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_52_ORDER_NO_14', '1');
        Chk_X202_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
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
        //X202_53_ORDER_NO = document.MAINFORM.X202_53_ORDER_NO.value;
        //X202_SENDCORRID53A = document.MAINFORM.X202_SENDCORRID53A.value;
        //sSQLWhere = "ORDER_NO = " + X202_53_ORDER_NO + " AND C_MAIN_REF = '" + X202_SENDCORRID53A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_SENDCORRNM53A;X202SENDCORADD153A;X202SENDCORADD253A;X202SENDCORADD353A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_53_ORDER_NO_15', '1');
        Chk_X202_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
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
        //X202_54_ORDER_NO = document.MAINFORM.X202_54_ORDER_NO.value;
        //X202_RECCORRID_54A = document.MAINFORM.X202_RECCORRID_54A.value;
        //sSQLWhere = "ORDER_NO = " + X202_54_ORDER_NO + " AND C_MAIN_REF = '" + X202_RECCORRID_54A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_RECCORRNM_54A;X202_RECCORADD154A;X202_RECCORADD254A;X202_RECCORADD354A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_54_ORDER_NO_16', '1');
        Chk_X202_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
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
        //X202_56_ORDER_NO = document.MAINFORM.X202_56_ORDER_NO.value;
        //X202_MEDI_BKID_56A = document.MAINFORM.X202_MEDI_BKID_56A.value;
        //sSQLWhere = "ORDER_NO = " + X202_56_ORDER_NO + " AND C_MAIN_REF = '" + X202_MEDI_BKID_56A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_MEDI_BKNM_56A;X202MEDIBKADD1_56A;X202MEDIBKADD2_56A;X202MEDIBKADD3_56A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_56_ORDER_NO_17', '1');
        Chk_X202_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
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
        //X202_57_ORDER_NO = document.MAINFORM.X202_57_ORDER_NO.value;
        //X202_ACC_BKID_57A = document.MAINFORM.X202_ACC_BKID_57A.value;
        //sSQLWhere = "ORDER_NO = " + X202_57_ORDER_NO + " AND C_MAIN_REF = '" + X202_ACC_BKID_57A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_ACC_BKNM_57A;X202_ACCBKADD1_57A;X202_ACCBKADD2_57A;X202_ACCBKADD3_57A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_57_ORDER_NO_18', '1');
        Chk_X202_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_58_ORDER_NO = function() {
    try {
        var X202_58_ORDER_NO; // Utility Auto Fix Comments
        var X202_BENE_BKID_58A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_58_ORDER_NO = document.MAINFORM.X202_58_ORDER_NO.value;
        //X202_BENE_BKID_58A = document.MAINFORM.X202_BENE_BKID_58A.value;
        //sSQLWhere = "ORDER_NO = " + X202_58_ORDER_NO + " AND C_MAIN_REF = '" + X202_BENE_BKID_58A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_BENE_BKNM_58A;X202BENEBKADD1_58A;X202BENEBKADD2_58A;X202BENEBKADD3_58A";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_58_ORDER_NO_19', '1');
        Chk_X202_TAG_58A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_ACC_BKID_57A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_57_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_57_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_ACC_BKID_57A_Back = function() {
    try {
        Cal_X202_ACC_BKID_57A_ADD_Back();
        Chk_X202_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_ADV_BKID_B2_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_B2_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_B2_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_ADV_BKID_B2_Back = function() {
    try {
        Cal_X202_ADV_BKID_B2_ADD_Back();
        Chk_X202_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_B2_ORDER_NO = function() {
    try {
        var X202_ADV_BKID_B2; // Utility Auto Fix Comments
        var X202_B2_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_B2_ORDER_NO = document.MAINFORM.X202_B2_ORDER_NO.value;
        //X202_ADV_BKID_B2 = document.MAINFORM.X202_ADV_BKID_B2.value;
        //sSQLWhere = "ORDER_NO = " + X202_B2_ORDER_NO + " AND C_MAIN_REF = '" + X202_ADV_BKID_B2 + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_ADV_BKNM_B2;X202_ADV_BKADD1_B2;X202_ADV_BKADD2_B2;X202_ADV_BKADD3_B2";
        SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_Cal_X202_B2_ORDER_NO_20', '1');
        Chk_X202_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_BENE_BKID_58A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_58_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_58_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_BENE_BKID_58A_Back = function() {
    try {
        Cal_X202_BENE_BKID_58A_ADD_Back();
        Chk_X202_TAG_58A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_CCY_32A = function() {
    try {
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_MEDI_BKID_56A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_56_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_56_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_MEDI_BKID_56A_Back = function() {
    try {
        Cal_X202_MEDI_BKID_56A_ADD_Back();
        Chk_X202_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_ORDBK_ID_52A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_52_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_52_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_ORDBK_ID_52A_Back = function() {
    try {
        Cal_X202_ORDBK_ID_52A_ADD_Back();
        Chk_X202_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_RECCORRID_54A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_54_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_54_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_RECCORRID_54A_Back = function() {
    try {
        Cal_X202_RECCORRID_54A_ADD_Back();
        Chk_X202_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_SENDCORRID53A_ADD_Back = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_53_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_53_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Cal_X202_SENDCORRID53A_Back = function() {
    try {
        Cal_X202_SENDCORRID53A_ADD_Back();
        Chk_X202_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ChangClass_CPYT_ASSGN_NM = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT202') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_AC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_AC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ChangClass_CPYT_DR_EMAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ChangClass_CPYT_DR_FAX_NO = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ChangClass_CPYT_DR_MAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ChangClass_CPYT_DR_TEL_NO = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TEL_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TEL_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chg_Calculate_Payment_Comm = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['PAY_COMM'];
        amt = document.MAINFORM.CPYT_DR_AMT_DRCCY.value;
        ccy = document.MAINFORM.CPYT_DR_CCY.value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chg_Screen = function() {
    try {
        Chg.Screen.setLocalCust(document.MAINFORM.CPYT_DR_ID.value, document.MAINFORM.CPYT_DR_NAME.value);
        Chg.Screen.mapForeignCust(document.MAINFORM.CPYT_ASSGN_ID.name, document.MAINFORM.CPYT_ASSGN_NM.name);
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_CPYT_ASSGN_AC = function() {
    try {
        var oACType; // Utility Auto Fix Comments
        var oIBAN; // Utility Auto Fix Comments
        if (document.MAINFORM.CPYT_ASSGN_AC.value.length > 35) {
            alert("Beneficiary account number must be prefixed with / and not exceed 34 characters");
            document.MAINFORM.CPYT_ASSGN_AC.value = "";
        } else {
            oIBAN = document.MAINFORM.CPYT_ASSGN_AC;
            oACType = document.MAINFORM.CPYT_CR_AC_TYPE;
            SYT_IBANValidation(oIBAN, oACType);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_ValueDates = function(sValueDateType) {
    try {
        if (document.MAINFORM.elements[sValueDateType].value != SYS_DATE && !SYS_Day1MustbeLaterThanDay2('CPYT_CR_VAL_DATE', 'CPYT_DR_VAL_DATE')) {
            document.MAINFORM.elements[sValueDateType].value = SYS_DATE;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_50A_TAG = function() {
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
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_51A_TAG = function() {
    try {
        if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            document.MAINFORM.X103_TAG_51A.value = 'A';
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_SEND_BKNM_51A.value != '' || document.MAINFORM.X103SENDBKADD1_51A.value != '' || document.MAINFORM.X103SENDBKADD2_51A.value != '' || document.MAINFORM.X103SENDBKADD3_51A.value != '') && document.MAINFORM.X103_SEND_BKSW_51A.value == '') {
            document.MAINFORM.X103_TAG_51A.value = 'D';
        }
        if (document.MAINFORM.X103_SEND_BKSW_51A.value == '' && document.MAINFORM.X103_SEND_BKNM_51A.value == '' && document.MAINFORM.X103SENDBKADD1_51A.value == '' && document.MAINFORM.X103SENDBKADD2_51A.value == '' && document.MAINFORM.X103SENDBKADD3_51A.value == '') {
            document.MAINFORM.X103_TAG_51A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_52A_TAG = function() {
    try {
        if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
            document.MAINFORM.X103_TAG_52A.value = 'A';
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_ORD_BKNM_52A.value != '' || document.MAINFORM.X103_ORDBKADD1_52A.value != '' || document.MAINFORM.X103_ORDBKADD2_52A.value != '' || document.MAINFORM.X103_ORDBKADD3_52A.value != '') && document.MAINFORM.X103_ORD_BKSW_52A.value == '') {
            document.MAINFORM.X103_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X103_ORD_BKSW_52A.value == '' && document.MAINFORM.X103_ORD_BKNM_52A.value == '' && document.MAINFORM.X103_ORDBKADD1_52A.value == '' && document.MAINFORM.X103_ORDBKADD2_52A.value == '' && document.MAINFORM.X103_ORDBKADD3_52A.value == '') {
            document.MAINFORM.X103_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_53A_TAG = function() {
    try {
        if (document.MAINFORM.X103_SENDCORRSW53A.value != '') {
            document.MAINFORM.X103_TAG_53A.value = 'A';
            if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_SENDCORRNM53A.value != '' || document.MAINFORM.X103SENDCORADD153A.value != '' || document.MAINFORM.X103SENDCORADD253A.value != '' || document.MAINFORM.X103SENDCORADD353A.value != '') && document.MAINFORM.X103_SENDCORRSW53A.value == '') {
            document.MAINFORM.X103_TAG_53A.value = 'D';
        }
        if (document.MAINFORM.X103_SENDCORRSW53A.value == '' && document.MAINFORM.X103_SENDCORRNM53A.value == '' && document.MAINFORM.X103SENDCORADD153A.value == '' && document.MAINFORM.X103SENDCORADD253A.value == '' && document.MAINFORM.X103SENDCORADD353A.value == '') {
            document.MAINFORM.X103_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_54A_TAG = function() {
    try {
        if (document.MAINFORM.X103_RECCORRSW_54A.value != '') {
            document.MAINFORM.X103_TAG_54A.value = 'A';
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_RECCORRNM_54A.value != '' || document.MAINFORM.X103_RECCORADD154A.value != '' || document.MAINFORM.X103_RECCORADD254A.value != '' || document.MAINFORM.X103_RECCORADD354A.value != '') && document.MAINFORM.X103_RECCORRSW_54A.value == '') {
            document.MAINFORM.X103_TAG_54A.value = 'D';
        }
        if (document.MAINFORM.X103_RECCORRSW_54A.value == '' && document.MAINFORM.X103_RECCORRNM_54A.value == '' && document.MAINFORM.X103_RECCORADD154A.value == '' && document.MAINFORM.X103_RECCORADD254A.value == '' && document.MAINFORM.X103_RECCORADD354A.value == '') {
            document.MAINFORM.X103_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_56A_TAG = function() {
    try {
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X103_TAG_56A.value = 'A';
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_MEDI_BKNM_56A.value != '' || document.MAINFORM.X103MEDIBKADD1_56A.value != '' || document.MAINFORM.X103MEDIBKADD2_56A.value != '' || document.MAINFORM.X103MEDIBKADD3_56A.value != '') && document.MAINFORM.X103_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X103_TAG_56A.value = 'D';
        }
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value == '' && document.MAINFORM.X103_MEDI_BKNM_56A.value == '' && document.MAINFORM.X103MEDIBKADD1_56A.value == '' && document.MAINFORM.X103MEDIBKADD2_56A.value == '' && document.MAINFORM.X103MEDIBKADD3_56A.value == '') {
            document.MAINFORM.X103_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_57A_TAG = function() {
    try {
        if (document.MAINFORM.X103_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X103_TAG_57A.value = 'A';
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_ACC_BKNM_57A.value != '' || document.MAINFORM.X103_ACCBKADD1_57A.value != '' || document.MAINFORM.X103_ACCBKADD2_57A.value != '' || document.MAINFORM.X103_ACCBKADD3_57A.value != '') && document.MAINFORM.X103_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X103_TAG_57A.value = 'D';
        }
        if (document.MAINFORM.X103_ACC_BKSW_57A.value == '' && document.MAINFORM.X103_ACC_BKNM_57A.value == '' && document.MAINFORM.X103_ACCBKADD1_57A.value == '' && document.MAINFORM.X103_ACCBKADD2_57A.value == '' && document.MAINFORM.X103_ACCBKADD3_57A.value == '') {
            document.MAINFORM.X103_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X103_TAG_B2_TAG = function() {
    try {
        if (document.MAINFORM.X103_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X103_TAG_B2.value = 'A';
            if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value + "XXX";
            }
        }
        if ((document.MAINFORM.X103_ADV_BKNM_B2.value != '' || document.MAINFORM.X103_ADV_BKADD1_B2.value != '' || document.MAINFORM.X103_ADV_BKADD2_B2.value != '' || document.MAINFORM.X103_ADV_BKADD3_B2.value != '') && document.MAINFORM.X103_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X103_TAG_B2.value = 'D';
        }
        if (document.MAINFORM.X103_ADV_BKSW_B2.value == '' && document.MAINFORM.X103_ADV_BKNM_B2.value == '' && document.MAINFORM.X103_ADV_BKADD1_B2.value == '' && document.MAINFORM.X103_ADV_BKADD2_B2.value == '' && document.MAINFORM.X103_ADV_BKADD3_B2.value == '') {
            document.MAINFORM.X103_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_52A_TAG = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_ORDBK_NM_52A.value != '' || document.MAINFORM.X202_ORDBKADD1_52A.value != '' || document.MAINFORM.X202_ORDBKADD2_52A.value != '' || document.MAINFORM.X202_ORDBKADD3_52A.value != '') && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X202_ORDBK_SW_52A.value == '' && document.MAINFORM.X202_ORDBK_NM_52A.value == '' && document.MAINFORM.X202_ORDBKADD1_52A.value == '' && document.MAINFORM.X202_ORDBKADD2_52A.value == '' && document.MAINFORM.X202_ORDBKADD3_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_53A_TAG = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            document.MAINFORM.X202_TAG_53A.value = 'A';
            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_SENDCORRNM53A.value != '' || document.MAINFORM.X202SENDCORADD153A.value != '' || document.MAINFORM.X202SENDCORADD253A.value != '' || document.MAINFORM.X202SENDCORADD353A.value != '') && document.MAINFORM.X202_SENDCORRSW53A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = 'D';
        }
        if (document.MAINFORM.X202_SENDCORRSW53A.value == '' && document.MAINFORM.X202_SENDCORRNM53A.value == '' && document.MAINFORM.X202SENDCORADD153A.value == '' && document.MAINFORM.X202SENDCORADD253A.value == '' && document.MAINFORM.X202SENDCORADD353A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_54A_TAG = function() {
    try {
        if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            document.MAINFORM.X202_TAG_54A.value = 'A';
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_RECCORRNM_54A.value != '' || document.MAINFORM.X202_RECCORADD154A.value != '' || document.MAINFORM.X202_RECCORADD254A.value != '' || document.MAINFORM.X202_RECCORADD354A.value != '') && document.MAINFORM.X202_RECCORRSW_54A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = 'D';
        }
        if (document.MAINFORM.X202_RECCORRSW_54A.value == '' && document.MAINFORM.X202_RECCORRNM_54A.value == '' && document.MAINFORM.X202_RECCORADD154A.value == '' && document.MAINFORM.X202_RECCORADD254A.value == '' && document.MAINFORM.X202_RECCORADD354A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_56A_TAG = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X202_TAG_56A.value = 'A';
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_MEDI_BKNM_56A.value != '' || document.MAINFORM.X202MEDIBKADD1_56A.value != '' || document.MAINFORM.X202MEDIBKADD2_56A.value != '' || document.MAINFORM.X202MEDIBKADD3_56A.value != '') && document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = 'D';
        }
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value == '' && document.MAINFORM.X202_MEDI_BKNM_56A.value == '' && document.MAINFORM.X202MEDIBKADD1_56A.value == '' && document.MAINFORM.X202MEDIBKADD2_56A.value == '' && document.MAINFORM.X202MEDIBKADD3_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_57A_TAG = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X202_TAG_57A.value = 'A';
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_ACC_BKNM_57A.value != '' || document.MAINFORM.X202_ACCBKADD1_57A.value != '' || document.MAINFORM.X202_ACCBKADD2_57A.value != '' || document.MAINFORM.X202_ACCBKADD3_57A.value != '') && document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = 'D';
        }
        if (document.MAINFORM.X202_ACC_BKSW_57A.value == '' && document.MAINFORM.X202_ACC_BKNM_57A.value == '' && document.MAINFORM.X202_ACCBKADD1_57A.value == '' && document.MAINFORM.X202_ACCBKADD2_57A.value == '' && document.MAINFORM.X202_ACCBKADD3_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_58A_TAG = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_TAG_58A.value = 'A';
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_BENE_BKNM_58A.value != '' || document.MAINFORM.X202BENEBKADD1_58A.value != '' || document.MAINFORM.X202BENEBKADD2_58A.value != '' || document.MAINFORM.X202BENEBKADD3_58A.value != '') && document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = 'D';
        }
        if (document.MAINFORM.X202_BENE_BKSW_58A.value == '' && document.MAINFORM.X202_BENE_BKNM_58A.value == '' && document.MAINFORM.X202BENEBKADD1_58A.value == '' && document.MAINFORM.X202BENEBKADD2_58A.value == '' && document.MAINFORM.X202BENEBKADD3_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Chk_X202_TAG_B2_TAG = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X202_TAG_B2.value = 'A';
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + "XXX";
            }
        }
        if ((document.MAINFORM.X202_ADV_BKNM_B2.value != '' || document.MAINFORM.X202_ADV_BKADD1_B2.value != '' || document.MAINFORM.X202_ADV_BKADD2_B2.value != '' || document.MAINFORM.X202_ADV_BKADD3_B2.value != '') && document.MAINFORM.X202_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = 'D';
        }
        if (document.MAINFORM.X202_ADV_BKSW_B2.value == '' && document.MAINFORM.X202_ADV_BKNM_B2.value == '' && document.MAINFORM.X202_ADV_BKADD1_B2.value == '' && document.MAINFORM.X202_ADV_BKADD2_B2.value == '' && document.MAINFORM.X202_ADV_BKADD3_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Clr_Ben_Cust = function() {
    try {
        document.MAINFORM.CPYT_ASSGN_ID.value = "";
        document.MAINFORM.CPYT_ASSGN_NM.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD1.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD2.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD3.value = "";
        document.MAINFORM.CPYT_ASSGN_AC.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Clr_Ord_Cust = function() {
    try {
        document.MAINFORM.CPYT_DR_ID.value = "";
        document.MAINFORM.CPYT_DR_NAME.value = "";
        document.MAINFORM.CPYT_DR_ADD1.value = "";
        document.MAINFORM.CPYT_DR_ADD2.value = "";
        document.MAINFORM.CPYT_DR_ADD3.value = "";
        document.MAINFORM.CPYT_DR_AC_PROC.value = "";
        document.MAINFORM.CPYT_DR_COR_MED.value = "";
        document.MAINFORM.CPYT_DR_FAX_NO.value = "";
        document.MAINFORM.CPYT_DR_EMAIL_ADD.value = "";

        return;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYS_GetRefNo_S("PYMT", 'PYMT_SetRefNo');

        //for Tag 59 mapping
        if (document.MAINFORM.X103_BENECU_BKSW_59.value == '') {
            document.MAINFORM.TEMP_X103BENECUADD1_59A.value = document.MAINFORM.X103BENECUADD1_59A.value;
            document.MAINFORM.TEMP_X103BENECUADD2_59A.value = document.MAINFORM.X103BENECUADD2_59A.value;
            document.MAINFORM.TEMP_X103BENECUADD3_59A.value = document.MAINFORM.X103BENECUADD3_59A.value;
            document.MAINFORM.TEMP_X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECUACNO59A.value;
            document.MAINFORM.TEMP_X103_BENECU_NM_59A.value = document.MAINFORM.X103_BENECU_NM_59A.value;
        } else {
            document.MAINFORM.TEMP_X103BENECUADD1_59A.value = '';
            document.MAINFORM.TEMP_X103BENECUADD2_59A.value = '';
            document.MAINFORM.TEMP_X103BENECUADD3_59A.value = '';
            document.MAINFORM.TEMP_X103_BENECUACNO59A.value = '';
            document.MAINFORM.TEMP_X103_BENECU_NM_59A.value = '';
        }

        //for voucher
        SYT_Cal_C_TRANS_CODE();
        SYT_CHG_VOUCHER();
        SYT_CLEANPAY_VOUCHER();
        
        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.ConfirmBusinessCheck = function() {
    try {
        var oACType; // Utility Auto Fix Comments
        var oIBAN; // Utility Auto Fix Comments
        //for IBAN Check
        oIBAN = document.MAINFORM.CPYT_ASSGN_AC;
        oACType = document.MAINFORM.CPYT_CR_AC_TYPE;
        if (!SYT_IBANValidation(oIBAN, oACType)) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Disable103 = function() {
    try {
        SYT_DisableDivClass("F_div");
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Disable202 = function() {
    try {
        SYT_DisableDivClass("I_div");
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Enable103 = function() {
    try {
        SYS_changeClassName('X103_ADV_BKID_B2', 'M');
        SYS_changeClassName('X103_ADV_BKNM_B2', 'M');
        SYS_changeClassName('X103_ADV_BKADD1_B2', 'O');
        SYS_changeClassName('X103_ADV_BKADD2_B2', 'O');
        SYS_changeClassName('X103_ADV_BKADD3_B2', 'O');
        SYS_changeClassName('X103_ADV_BKSW_B2', 'M');
        SYS_changeClassName('X103_B2_BTN', 'M');
        SYS_changeClassName('X103_B2_ADD_BTN', 'P');
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
        SYS_changeClassName('X103_ID_50_BTN', 'O');
        SYS_changeClassName('X103_ID_51_BTN', 'O');
        SYS_changeClassName('X103_ID_53_BTN', 'O');
        SYS_changeClassName('X103_ID_52_BTN', 'O');
        SYS_changeClassName('X103_ID_54_BTN', 'O');
        SYS_changeClassName('X103_ID_56_BTN', 'O');
        SYS_changeClassName('X103_ID_57_BTN', 'O');
        SYS_changeClassName('X103_ID_59_BTN', 'O');
        SYS_changeClassName('X103_BENECU_OP', 'O');
        SYS_changeClassName('X103_ORDCU_ID_OP', 'O');
        SYS_changeClassName('X103_BKOP_CODE_23B', 'M');
        SYS_changeClassName('X103_DET_CHG_71A', 'M');
        SYS_changeClassName('X103_INSTRCODE_23E', 'O');
        SYS_changeClassName('X103_RECCHGCCY_71G', 'O');
        SYS_changeClassName('X103_RECCHGAMT_71G', 'O');
        SYS_changeClassName('X103_REMIT_INFO_70', 'O');
        SYS_changeClassName('X103_REG_REP_77B', 'O');
        SYS_changeClassName('X103_BKTOBK_INFO72', 'O');
        SYS_changeClassName('X103_ENV_CONT_77T', 'O');
        SYS_changeClassName('X103_TAG_50A', 'M');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.Enable202 = function() {
    try {
        SYS_changeClassName('X202_RELATEDNO_21', 'M');
        SYS_changeClassName('X202_ADV_BKID_B2', 'M');
        SYS_changeClassName('X202_ADV_BKNM_B2', 'M');
        SYS_changeClassName('X202_ADV_BKADD1_B2', 'O');
        SYS_changeClassName('X202_ADV_BKADD2_B2', 'O');
        SYS_changeClassName('X202_ADV_BKADD3_B2', 'O');
        SYS_changeClassName('X202_ADV_BKSW_B2', 'M');
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
        SYS_changeClassName('X202RECCORRACNO54A', 'O');
        SYS_changeClassName('X202_MEDI_BKID_56A', 'O');
        SYS_changeClassName('X202_MEDI_BKNM_56A', 'O');
        SYS_changeClassName('X202MEDIBKADD1_56A', 'O');
        SYS_changeClassName('X202MEDIBKADD2_56A', 'O');
        SYS_changeClassName('X202MEDIBKADD3_56A', 'O');
        SYS_changeClassName('X202_MEDIBKACNO56A', 'O');
        SYS_changeClassName('X202_MEDI_BKSW_56A', 'O');
        SYS_changeClassName('X202_ACC_BKID_57A', 'O');
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
        SYS_changeClassName('X202_B2_ADD_BTN', 'P');
        SYS_changeClassName('X202_52_BTN', 'O');
        SYS_changeClassName('X202_52_ADD_BTN', 'P');
        SYS_changeClassName('X202_53_BTN', 'O');
        SYS_changeClassName('X202_53_ADD_BTN', 'P');
        SYS_changeClassName('X202_54_BTN', 'O');
        SYS_changeClassName('X202_54_ADD_BTN', 'P');
        SYS_changeClassName('X202_56_BTN', 'O');
        SYS_changeClassName('X202_56_ADD_BTN', 'P');
        SYS_changeClassName('X202_57_BTN', 'O');
        SYS_changeClassName('X202_57_ADD_BTN', 'P');
        SYS_changeClassName('X202_58_BTN', 'O');
        SYS_changeClassName('X202_58_ADD_BTN', 'P');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.InitValues = function() {
    try {
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.CPYT_CR_VAL_DATE.value = document.MAINFORM.CPYT_DR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_TRX_DT.value = SYS_BUSI_DATE;
        SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, document.MAINFORM.CPYT_CR_AMT_CRCCY.value);
        SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, document.MAINFORM.CPYT_DR_AMT_DRCCY.value);
        SYT_AmtFormat(document.MAINFORM.CPYT_PAY_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CPYT_PAY_ADV_MSG.value = 'None';
        ChangClass_CPYT_DR_EMAIL_ADD();
        ChangClass_CPYT_DR_FAX_NO();
        ChangClass_CPYT_DR_MAIL_ADD();
        ChangClass_CPYT_DR_TEL_NO();
        Disable103();
        Disable202();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.PYMT_Charge = function() {
    try {
        Chg_Screen();
        Chg_Calculate_Payment_Comm();
        Chg.calculate(['OTHER_CHG']);
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.PYMT_SetRefNo = function(sRef) {
    try {
        document.MAINFORM.PYMT_C_MAIN_REF.value = sRef;
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = sRef;
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.PostconditionOnInit = function() {
    try {
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust(document.MAINFORM.CPYT_DR_ID.name, document.MAINFORM.CPYT_DR_NAME.name);
        Chg.Screen.mapForeignCust(document.MAINFORM.CPYT_ASSGN_ID.name, document.MAINFORM.CPYT_ASSGN_NM.name);
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            PYMT_Charge();
        }

        switch (document.MAINFORM.CPYT_PAY_ADV_MSG.value) {
            case "MT103":
                Enable103();
                Disable202();
                EEHtml.fireEvent(document.MAINFORM.X103_DET_CHG_71A, 'onchange');
                break;
            case "MT202":
                Disable103();
                Enable202();
                break;
            case "MT202COV":
                Enable103();
                Enable202();
                EEHtml.fireEvent(document.MAINFORM.X103_DET_CHG_71A, 'onchange');
                break;
            case "MT499":
            case "MT999":
            case "Mail":
            case "None":
                Disable103();
                Disable202();
                break;
        }

        Set_DR_MULTI_ADD();
        Set_ASSGN_MULTI_ADD();

        Cal_X202_ADV_BKID_B2_Back();
        Cal_X202_ORDBK_ID_52A_Back();
        Cal_X202_SENDCORRID53A_Back();
        Cal_X202_RECCORRID_54A_Back();
        Cal_X202_MEDI_BKID_56A_Back();
        Cal_X202_ACC_BKID_57A_Back();
        Cal_X202_BENE_BKID_58A_Back();

        Cal_X103_ADV_BKID_B2_Back();
        Cal_X103_ORDCU_ID_50A_Back();
        Cal_X103_SEND_BKID_51A_Back();
        Cal_X103_ORD_BKID_52A_Back();
        Cal_X103_SENDCORRID53A_Back();
        Cal_X103_RECCORRID_54A_Back();
        Cal_X103_MEDI_BKID_56A_Back();
        Cal_X103_ACC_BKID_57A_Back();
        Cal_X103_BENECU_ID_59A_Back();

        if ("Bank" == document.MAINFORM.X103_BENECU_OP.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_BKSW_59, 'O');
        }

    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.PreconditionOnInit = function() {
    try {
        Set_CPYT_PAY_ADV_MSG();
        SYS_GetRefNo_S("PYMT", 'SetRefNo');
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ACC_BKID_57A_BANK = function() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ACC_BKSW_57A_ADD = function() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ACC_BKID_57A.value = "";
        if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + 'XXX';
            }
            //nX103_ACC_BKSW_57A = document.MAINFORM.X103_ACC_BKSW_57A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_ACC_BKSW_57A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ACC_BKID_57A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_ACC_BKSW_57A_ADD_21', '1', true);
            Chk_X103_TAG_57A_TAG();
            if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
                SYS_GetCUBK('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A', 'Cal_X103_ACC_BKID_57A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ACC_BKID_57A, 'onchange');
        Chk_X103_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ADV_BKID_B2_BANK = function() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ADV_BKSW_B2_ADD = function() {
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
            //nX103_ADV_BKSW_B2 = document.MAINFORM.X103_ADV_BKSW_B2.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_ADV_BKSW_B2 + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ADV_BKID_B2";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_ADV_BKSW_B2_ADD_22', '1', true);
            Chk_X103_TAG_B2_TAG();
            if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
                SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2', 'Cal_X103_ADV_BKID_B2_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ADV_BKID_B2, 'onchange');
        Chk_X103_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_BENECU_ID_59A_BANK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_59A', sql);
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A', '1');
            } else {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_BANK_59A', sql);
                SYS_InqCUBK_byCondition('X103_BENECU_ID_BANK_59A', '1');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_MEDI_BKID_56A_BANK = function() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_MEDI_BKSW_56A_ADD = function() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + 'XXX';
            }
            //nX103_MEDI_BKSW_56A = document.MAINFORM.X103_MEDI_BKSW_56A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_MEDI_BKSW_56A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_MEDI_BKID_56A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_MEDI_BKSW_56A_ADD_23', '1', true);
            Chk_X103_TAG_56A_TAG();
            if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
                SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', 'Cal_X103_MEDI_BKID_56A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_MEDI_BKID_56A, 'onchange');
        Chk_X103_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ORDCU_ID_50A_BANK = function() {
    try {
        var nX103_ORDCU_SW_50A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            if (document.MAINFORM.X103_ORDCU_ID_OP.value == "Bank") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', sql);
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
            } else {
                //SYS_InqCUBK_Sql('X103_ORDCU_CUST_ID_50A', sql);
                SYS_InqCUBK_byCondition('X103_ORDCU_CUST_ID_50A', '1');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ORDCU_SW_50A_ADD = function() {
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
            //nX103_ORDCU_SW_50A = document.MAINFORM.X103_ORDCU_SW_50A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_ORDCU_SW_50A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ORDCU_ID_50A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_ORDCU_SW_50A_ADD_24', '1', true);
            Chk_X103_TAG_50A_TAG();
            if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
                SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'Cal_X103_ORDCU_ID_50A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
        Chk_X103_TAG_50A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ORD_BKID_52A_BANK = function() {
    try {
        var nX103_ORD_BKSW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_ORD_BKSW_52A_ADD = function() {
    try {
        var nX103_ORD_BKSW_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ORD_BKID_52A.value = "";
        if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 11 || document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + 'XXX';
            }
            //nX103_ORD_BKSW_52A = document.MAINFORM.X103_ORD_BKSW_52A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_ORD_BKSW_52A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ORD_BKID_52A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_ORD_BKSW_52A_ADD_25', '1', true);
            Chk_X103_TAG_52A_TAG();
            if (document.MAINFORM.X103_ORD_BKID_52A.value != '') {
                SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A', 'Cal_X103_ORD_BKID_52A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ORD_BKID_52A, 'onchange');
        Chk_X103_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_RECCORRID_54A_BANK = function() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_RECCORRSW_54A_ADD = function() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_RECCORRID_54A.value = "";
        if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + 'XXX';
            }
            //nX103_RECCORRSW_54A = document.MAINFORM.X103_RECCORRSW_54A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_RECCORRSW_54A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_RECCORRID_54A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_RECCORRSW_54A_ADD_26', '1', true);
            Chk_X103_TAG_54A_TAG();
            if (document.MAINFORM.X103_RECCORRID_54A.value != '') {
                SYS_GetCUBK('X103_RECCORRID_54A', 'X103_RECCORRID_54A', 'Cal_X103_RECCORRID_54A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_RECCORRID_54A, 'onchange');
        Chk_X103_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_SENDCORRID53A_BANK = function() {
    try {
        var nX103_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_SENDCORRSW53A_ADD = function() {
    try {
        var nX103_SENDCORRSW53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_SENDCORRID53A.value = "";
        if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 11 || document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
            if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value + 'XXX';
            }
            //nX103_SENDCORRSW53A = document.MAINFORM.X103_SENDCORRSW53A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_SENDCORRSW53A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SENDCORRID53A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_SENDCORRSW53A_ADD_27', '1', true);
            Chk_X103_TAG_53A_TAG();
            if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
                SYS_GetCUBK('X103_SENDCORRID53A', 'X103_SENDCORRID53A', 'Cal_X103_SENDCORRID53A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_SENDCORRID53A, 'onchange');
        Chk_X103_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_SEND_BKID_51A_BANK = function() {
    try {
        var nX103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_SEND_BKID_51A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X103_SEND_BKSW_51A_ADD = function() {
    try {
        var nX103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_SEND_BKID_51A.value = "";
        if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 11 || document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + 'XXX';
            }
            //nX103_SEND_BKSW_51A = document.MAINFORM.X103_SEND_BKSW_51A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_SEND_BKSW_51A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SEND_BKID_51A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X103_SEND_BKSW_51A_ADD_28', '1', true);
            Chk_X103_TAG_51A_TAG();
            if (document.MAINFORM.X103_SEND_BKID_51A.value != '') {
                SYS_GetCUBK('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A', 'Cal_X103_SEND_BKID_51A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_SEND_BKID_51A, 'onchange');
        Chk_X103_TAG_51A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_ACC_BKID_57A_BANK = function() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_ACC_BKSW_57A_ADD = function() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ACC_BKID_57A.value = "";
        if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + 'XXX';
            }
            //nX202_ACC_BKSW_57A = document.MAINFORM.X202_ACC_BKSW_57A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_ACC_BKSW_57A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ACC_BKID_57A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_ACC_BKSW_57A_ADD_29', '1', true);
            Chk_X202_TAG_57A_TAG();
            if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
                SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'Cal_X202_ACC_BKID_57A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ACC_BKID_57A, 'onchange');
        Chk_X202_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_ADV_BKID_B2_BANK = function() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_ADV_BKSW_B2_ADD = function() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ADV_BKID_B2.value = "";
        if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + 'XXX';
            }
            //nX202_ADV_BKSW_B2 = document.MAINFORM.X202_ADV_BKSW_B2.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_ADV_BKSW_B2 + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ADV_BKID_B2";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_ADV_BKSW_B2_ADD_30', '1', true);
            Chk_X202_TAG_B2_TAG();
            if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
                SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'Cal_X202_ADV_BKID_B2_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ADV_BKID_B2, 'onchange');
        Chk_X202_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_BENE_BKID_58A_BANK = function() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_BENE_BKID_58A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_BENE_BKSW_58A_ADD = function() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_BENE_BKID_58A.value = "";
        if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 11 || document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + 'XXX';
            }
            //nX202_BENE_BKSW_58A = document.MAINFORM.X202_BENE_BKSW_58A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX202_BENE_BKSW_58A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_BENE_BKID_58A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_BENE_BKSW_58A_ADD_31', '1', true);
            Chk_X202_TAG_58A_TAG();
            if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
                SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'Cal_X202_BENE_BKID_58A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_BENE_BKID_58A, 'onchange');
        Chk_X202_TAG_58A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_MEDI_BKID_56A_BANK = function() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_MEDI_BKSW_56A_ADD = function() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_MEDI_BKID_56A.value = "";
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + 'XXX';
            }
            //nX202_MEDI_BKSW_56A = document.MAINFORM.X202_MEDI_BKSW_56A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_MEDI_BKSW_56A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_MEDI_BKID_56A";
            SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_MEDI_BKSW_56A_ADD_32', '1', true);
            Chk_X202_TAG_56A_TAG();
            if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
                SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'Cal_X202_MEDI_BKID_56A_Back');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_MEDI_BKID_56A, 'onchange');
        Chk_X202_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_CleanPayment.js", e);
    }
}

csLbiCompProto.SQL_X202_ORDBK_ID_52A_BANK = function() {
    try {
        var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments

        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A', '1');
            }
		}
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.SQL_X202_ORDBK_SW_52A_ADD = function() {
        try {
            var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
            var sFieldList; // Utility Auto Fix Comments
            var sMappingList; // Utility Auto Fix Comments
            var sSQLWhere; // Utility Auto Fix Comments
            var sTableName; // Utility Auto Fix Comments
            document.MAINFORM.X202_ORDBK_ID_52A.value = "";
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 11 || document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                    document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + 'XXX';
                }
                //nX202_ORDBK_SW_52A = document.MAINFORM.X202_ORDBK_SW_52A.value.substr(0, 8);
                //sSQLWhere = "SW_ADD like '%" + nX202_ORDBK_SW_52A + "%'";
                //sTableName = "BANK_MASTER";
                //sFieldList = "C_MAIN_REF";
                //sMappingList = "X202_ORDBK_ID_52A";
                SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_ORDBK_SW_52A_ADD_33', '1', true);
                Chk_X202_TAG_52A_TAG();
                if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
                    SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'Cal_X202_ORDBK_ID_52A_Back');
                }
            }
            EEHtml.fireEvent(document.MAINFORM.X202_ORDBK_ID_52A, 'onchange');
            Chk_X202_TAG_52A_TAG();
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.SQL_X202_RECCORRID_54A_BANK = function() {
        try {
            var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
            var retvalue; // Utility Auto Fix Comments

            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('X202_RECCORRID_54A', '1');
            }
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.SQL_X202_RECCORRSW_54A_ADD = function() {
        try {
            var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
            var sFieldList; // Utility Auto Fix Comments
            var sMappingList; // Utility Auto Fix Comments
            var sSQLWhere; // Utility Auto Fix Comments
            var sTableName; // Utility Auto Fix Comments
            document.MAINFORM.X202_RECCORRID_54A.value = "";
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                    document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + 'XXX';
                }
                nX202_RECCORRSW_54A = document.MAINFORM.X202_RECCORRSW_54A.value.substr(0, 8);
                //sSQLWhere = "SW_ADD like'%" + nX202_RECCORRSW_54A + "%'";
                //sTableName = "BANK_MASTER";
                //sFieldList = "C_MAIN_REF";
                //sMappingList = "X202_RECCORRID_54A";
                SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_RECCORRSW_54A_ADD_34', '1', true);
                Chk_X202_TAG_54A_TAG();
                if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
                    SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'Cal_X202_RECCORRID_54A_Back');
                }
            }
            EEHtml.fireEvent(document.MAINFORM.X202_RECCORRID_54A, 'onchange');
            Chk_X202_TAG_54A_TAG();
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.SQL_X202_SENDCORRID53A_BANK = function() {
        try {
            var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
            var retvalue; // Utility Auto Fix Comments

            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('X202_SENDCORRID53A', '1');
            }
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.SQL_X202_SENDCORRSW53A_ADD = function() {
        try {
            var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
            var sFieldList; // Utility Auto Fix Comments
            var sMappingList; // Utility Auto Fix Comments
            var sSQLWhere; // Utility Auto Fix Comments
            var sTableName; // Utility Auto Fix Comments
            document.MAINFORM.X202_SENDCORRID53A.value = "";
            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 11 || document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                    document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + 'XXX';
                }
                nX202_SENDCORRSW53A = document.MAINFORM.X202_SENDCORRSW53A.value.substr(0, 8);
                //sSQLWhere = "SW_ADD like '%" + nX202_SENDCORRSW53A + "%'";
                //sTableName = "BANK_MASTER";
                //sFieldList = "C_MAIN_REF";
                //sMappingList = "X202_SENDCORRID53A";
                SYS_GetTableDataByRule_S('SSSS_SRC_CleanPayment_SQL_X202_SENDCORRSW53A_ADD_35', '1', true);
                Chk_X202_TAG_53A_TAG();
                if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
                    SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'Cal_X202_SENDCORRID53A_Back');
                }
            }
            EEHtml.fireEvent(document.MAINFORM.X202_SENDCORRID53A, 'onchange');
            Chk_X202_TAG_53A_TAG();
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.SetRefNo = function(sRef) {
        try {
            document.MAINFORM.C_MAIN_REF.value = sRef;
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = sRef;
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_ASSGN_MULTI_ADD = function() {
        try {
            if (document.MAINFORM.CPYT_ASSGN_ID.value != '') {
                if (document.MAINFORM.CPYT_ASSGN_ID.className == 'CHAR_P') {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ADD_BTN, 'H');
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_POST_BTN, 'H');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ADD_BTN, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_POST_BTN, 'O');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ADD_BTN, 'H');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_POST_BTN, 'H');
            }
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_CPYT_BUY_RATE_Display = function() {
        try {
            /*
if(document.MAINFORM.CPYT_CR_CCY.value == document.MAINFORM.CPYT_DR_CCY.value) {
	SYT_ChangeFldClass(document.MAINFORM.CPYT_BUY_RATE,'P');
	document.MAINFORM.CPYT_BUY_RATE.value = 1.0;
} else {
	SYT_ChangeFldClass(document.MAINFORM.CPYT_BUY_RATE,'M');
}
*/
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_CPYT_DR_AMT_DRCCY = function() {
        try {
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = document.MAINFORM.DB_CALC_AMT.value;
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_CPYT_N_PAY_AMT = function() {
        try {
            document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_AMT, 'onchange');
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_CPYT_PAY_ADV_MSG = function() {
        try {
            var valueArray; // Utility Auto Fix Comments
            if (SYS_MODULE_NAME == 'IMCO' || SYS_MODULE_NAME == 'EXCO') {
                valueArray = ['MT103', 'MT202', 'MT202COV', 'MT499', 'MT999', 'Mail', 'None'];
                descArray = ['MT103', 'MT202', 'MT202COV', 'MT499', 'MT999', 'Mail', 'None'];
            } else {
                valueArray = ['MT103', 'MT202', 'MT202COV', 'Mail', 'None']; // Utility Auto Fix Comments
                descArray = ['MT103', 'MT202', 'MT202COV', 'Mail', 'None'];
            }
            SYS_RebuildOptions('CPYT_PAY_ADV_MSG', valueArray, descArray);
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_CPYT_PAY_CCY = function() {
        try {
            document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CPYT_CR_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.CPYT_PAY_CCY, 'onchange');
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.Set_DR_MULTI_ADD = function() {
        try {
            if (document.MAINFORM.CPYT_DR_ID.value != '') {
                if (document.MAINFORM.CPYT_DR_ID.className == 'CHAR_P') {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_ADD_BTN, 'H');
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_POST_BTN, 'H');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_ADD_BTN, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_POST_BTN, 'O');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_ADD_BTN, 'H');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_POST_BTN, 'H');
            }
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.calendarclick = function() {
        try {
            calendar(EEHtml.getElementById("DIARY_DT"));
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.onChangeDiary = function() {
        try {
            var DiaryValue; // Utility Auto Fix Comments
            DiaryValue = document.MAINFORM.DIARY_NARRATIVE.value.trim();
            if (DiaryValue == "") {
                SYT_ChangeFldClass('DIARY_DT', 'O');
                document.MAINFORM.DIARY_RELATED_REF.value = "";
                document.MAINFORM.DIARY_DT.value = "";
                EEHtml.getElementById("DIARY_DT").detachEvent("onclick", calendarclick);
            } else {
                SYT_ChangeFldClass('DIARY_DT', 'M');
                document.MAINFORM.DIARY_DT.value = SYS_BUSI_DATE;
                EEHtml.attachEventListener(EEHtml.getElementById("DIARY_DT"), "onclick", calendarclick);
            }
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }

    csLbiCompProto.viewDiaryHistory = function() {
        try {
            var condition; // Utility Auto Fix Comments
            var hei; // Utility Auto Fix Comments
            var mainRef; // Utility Auto Fix Comments
            var trxWin; // Utility Auto Fix Comments
            var unitCode; // Utility Auto Fix Comments
            var url; // Utility Auto Fix Comments
            var wStyle; // Utility Auto Fix Comments
            var wid; // Utility Auto Fix Comments
            mainRef = "";
            unitCode = "";
            mainRef = document.MAINFORM.C_MAIN_REF.value;
            if (mainRef.trim() == "") {
                alert("C_MAIN_REF is empty!");
                return;
            }

            unitCode = SYS_BUSI_UNIT;
            if (unitCode.trim() == "") {
                alert("SYS_BUSI_UNIT is empty!");
                return;
            }

            condition = "";
            condition = "&C_MAIN_REF=" + mainRef + "&C_UNIT_CODE=" + unitCode + "&C_MODU_NAME=" + SYS_MODULE_NAME + "&C_USER_NAME=" + SYS_USER_ID;

            wid = screen.width - 200;
            hei = screen.height - 300;
            wStyle = "toolbar=0,menubar=0,resizable=1,scrollbars=1,status=1,top=100,left=100,width=" + wid + ",height=" + hei;

            url = "../screen/CDRY_InqDiary_listview.jsp?" + condition;

            trxWin = openWin(url, "transacview", wStyle);
            trxWin.focus();
        } catch (e) {
            DisExcpt("SSSS_SRC_CleanPayment.js", e);
        }
    }