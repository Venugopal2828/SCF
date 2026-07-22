var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_Bene_BK_BIC = function() {
    try {

        var sql; // Utility Auto Fix Comments
        //sql = "C_MAIN_REF=" + "'" + document.MAINFORM.X103_ACC_BKID_57A.value + "'";
        SYS_GetTableDataByRule('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Bene_BK_BIC_0', '1', '', 'SYF_PYMT_Invalid_bic', 'False');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CHK_X103_59A_1_IBAN_MATCH = function() {
    try {

        var bCNTY_CODE; // Utility Auto Fix Comments
        var bIBAN; // Utility Auto Fix Comments
        var bIDENPOSI; // Utility Auto Fix Comments
        var bNATLEN; // Utility Auto Fix Comments
        var bNAT_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        bIBAN = document.MAINFORM.X103_BENE_IBAN.value;
        //bCNTY_CODE = bIBAN.substr(0, 2);
        bIDENPOSI = document.MAINFORM.X103_59A_BANK_IDENPOSI.value - 1;
        bNATLEN = document.MAINFORM.X103_59A_IBAN_NATLEN.value;
        //bNAT_ID = bIBAN.substr(bIDENPOSI, bNATLEN);

        //sSQLWhere = "C_IBAN_COUNTRY = '" + bCNTY_CODE + "' AND C_UNIQIBAN_NATION = '" + bNAT_ID + "'";
        //sTableName = "BICIBAN";
        //sFieldList = "INSTITUTION;CITY";
        //sMappingList = "X103_ACC_BKNM_57A;X103_ACCBKADD1_57A";
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_CHK_X103_59A_1_IBAN_MATCH_1', '1', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CHK_X103_59A_1_IBAN_VALID = function() {
    try {

        var BENE_IBAN; // Utility Auto Fix Comments
        var IBAN_LENGTH; // Utility Auto Fix Comments
        var IBAN_MOD; // Utility Auto Fix Comments
        var bIBAN; // Utility Auto Fix Comments
        var fIBAN; // Utility Auto Fix Comments
        var fIBAN1; // Utility Auto Fix Comments
        var sIBAN; // Utility Auto Fix Comments
        var tIBAN; // Utility Auto Fix Comments
        BENE_IBAN = document.MAINFORM.X103_BENE_IBAN.value;
        IBAN_LENGTH = BENE_IBAN.length;

        if (IBAN_LENGTH != document.MAINFORM.X103_59A_IBAN_LENGTH.value) {
            //alert("The Beneficiary IBAN is invalid!");
            alert("The Beneficiary IBAN Length is not correct!");
            alert("The Beneficiary IBAN is invalid!");
            return false;
        }
        //Add by Sunny 20130608
        else {
            alert("The Beneficiary IBAN Length is correct! It is " + IBAN_LENGTH);
            /*
  fIBAN=String(BENE_IBAN.substr(0,1));
  fIBAN=parseInt(fIBAN,16);
  fIBAN1=String(BENE_IBAN.substr(1,1));
  fIBAN1=parseInt(fIBAN1,16);
  //alert("The first two character is "+fIBAN+fIBAN1);
  sIBAN=BENE_IBAN.substr(2,2);
  //alert("The second two character is "+sIBAN);
  tIBAN=BENE_IBAN.substr(4,IBAN_LENGTH-4);
  bIBAN=Number(tIBAN+fIBAN+sIBAN);
  //alert("The converted IBAN is "+bIBAN);
  IBAN_MOD=bIBAN%97;
  if( IBAN_MOD != 1){
 alert("The Beneficiary IBAN is invalid!");
 return false;
  }
 return true;*/
            if (!SYF_PYMT_ChecksumIBAN(BENE_IBAN)) {
                alert("The IBAN Validation fail at Mod97 check");
                alert("The Beneficiary IBAN is invalid!");
                return;
            } else {

                return true;
            }
            //return SYF_PYMT_ChecksumIBAN(BENE_IBAN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CPYT_ASSGN_ID_Back = function() {
    try {

        SYF_PYMT_Set_ASSGN_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CPYT_DR_ID_Back = function() {
    try {

        SYF_PYMT_Set_DR_MULTI_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_EMAIL_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_FAX_NO();
        SYF_PYMT_ChangClass_CPYT_DR_MAIL_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_TEL_NO();
        SYF_PYMT_PYMT_Charge();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_CPYT_ASSGN_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_CPYT_ASSGN_ORDER_NO_2', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_CPYT_ASSGN_OREDER_POST = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_CPYT_ASSGN_OREDER_POST_3', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_CPYT_DR_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_CPYT_DR_ORDER_NO_4', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_CPYT_DR_ORDER_POST = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_CPYT_DR_ORDER_POST_5', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_CPYT_STL_AMT = function() {
    try {

        document.MAINFORM.CPYT_STL_AMT.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value) + SYS_BeFloat(document.MAINFORM.REV_BK_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_DR_CHG_AMT = function() {
    try {

        document.MAINFORM.DR_CHG_AMT.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) + SYS_BeFloat(document.MAINFORM.REV_BK_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_Principle_Amount = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_TEMP_BOOK_RATE = function() {
    try {

        var FromCCy; // Utility Auto Fix Comments
        var ToCCy; // Utility Auto Fix Comments
        FromCCy = document.MAINFORM.CPYT_DR_CCY.value;
        ToCCy = SYS_LOCAL_CCY;

        if (FromCCy != "" && ToCCy != "" && FromCCy != ToCCy) {
            SYS_GetExchangeRate(FromCCy, ToCCy, "Booking Rate", "document.MAINFORM.TEMP_BOOK_RATE", "Cal_TEMP_BUY_RATE");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_TEMP_BUY_RATE = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_50_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_50_ORDER_NO_6', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_51_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_51_ORDER_NO_7', '1');
        SYF_PYMT_Chk_X103_TAG_51A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_52_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_52_ORDER_NO_8', '1');
        SYF_PYMT_Chk_X103_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_53_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_53_ORDER_NO_9', '1');
        SYF_PYMT_Chk_X103_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_54_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_54_ORDER_NO_10', '1');
        SYF_PYMT_Chk_X103_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_56_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_56_ORDER_NO_11', '1');
        SYF_PYMT_Chk_X103_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_57_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_57_ORDER_NO_12', '1');
        SYF_PYMT_Chk_X103_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_59_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_59_ORDER_NO_13', '1');
        SYF_PYMT_Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ACC_BKID_57A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_57_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_57_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ACC_BKID_57A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_ACC_BKID_57A_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ADV_BKID_B2_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ADV_BKID_B2_Back = function() {
    try {

        SYF_PYMT_Cal_X103_ADV_BKID_B2_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_B2_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_B2_ORDER_NO_14', '1');
        SYF_PYMT_Chk_X103_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_BENECU_BKSW_59 = function() {
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
                SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X103_BENECU_BKSW_59_15', '1', true);
                Cal_X103_TAG_59A();
                if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                    SYS_GetCUBK('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
                }
            }
        }
        SYF_PYMT_Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_BENECU_ID_59A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_BENECU_ID_59A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_BENECU_ID_59A_ADD_Back();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_INSTR_AMT_33B = function() {
    try {

        document.MAINFORM.X103_INSTR_AMT_33B.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_INSTR_CCY_33B = function() {
    try {

        document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_MEDI_BKID_56A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_56_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_56_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_MEDI_BKID_56A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_MEDI_BKID_56A_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ORDCU_ID_50A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ORDCU_ID_50A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_ORDCU_ID_50A_ADD_Back();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ORD_BKID_52A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_ORD_BKID_52A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_ORD_BKID_52A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_ORD_BKID_52A_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_RECCORRID_54A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_RECCORRID_54A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_54_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_54_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_RECCORRID_54A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_RECCORRID_54A_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_SENDCORRID53A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_53_ADD_BTN, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_53_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_SENDCORRID53A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_SENDCORRID53A_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_SEND_BKID_51A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X103_SEND_BKID_51A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X103_51_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_51_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_SEND_BKID_51A_Back = function() {
    try {

        SYF_PYMT_Cal_X103_SEND_BKID_51A_ADD_Back();
        SYF_PYMT_Chk_X103_TAG_51A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_SETT_AMT_32A = function() {
    try {

        document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_SETT_CCY_32A = function() {
    try {

        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_PAY_CCY.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_TAG_59A = function() {
    try {

        if (document.MAINFORM.X103_BENECU_BKSW_59.value != '') {
            document.MAINFORM.X103_TAG_59A.value = 'A';
        } else if (document.MAINFORM.X103_BENECU_NM_59A.value != "" || document.MAINFORM.X103BENECUADD1_59A.value != "" || document.MAINFORM.X103BENECUADD2_59A.value != "" || document.MAINFORM.X103BENECUADD3_59A.value != "") {
            document.MAINFORM.X103_TAG_59A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_59A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X103_VALUE_DT_32A = function() {
    try {

        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_52_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_52_ORDER_NO_16', '1');
        SYF_PYMT_Chk_X202_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_53_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_53_ORDER_NO_17', '1');
        SYF_PYMT_Chk_X202_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_54_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_54_ORDER_NO_18', '1');
        SYF_PYMT_Chk_X202_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_56_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_56_ORDER_NO_19', '1');
        SYF_PYMT_Chk_X202_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_57_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_57_ORDER_NO_20', '1');
        SYF_PYMT_Chk_X202_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_58_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_58_ORDER_NO_21', '1');
        SYF_PYMT_Chk_X202_TAG_58A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_ACC_BKID_57A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_57_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_57_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_ACC_BKID_57A_Back = function() {
    try {

        SYF_PYMT_Cal_X202_ACC_BKID_57A_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_57A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_ADV_BKID_B2_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_B2_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_B2_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_ADV_BKID_B2_Back = function() {
    try {

        SYF_PYMT_Cal_X202_ADV_BKID_B2_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_B2_ORDER_NO = function() {
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
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_Cal_X202_B2_ORDER_NO_22', '1');
        SYF_PYMT_Chk_X202_TAG_B2_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_BENE_BKID_58A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_58_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_58_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_BENE_BKID_58A_Back = function() {
    try {

        SYF_PYMT_Cal_X202_BENE_BKID_58A_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_58A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_CCY_32A = function() {
    try {

        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_MEDI_BKID_56A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_56_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_56_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_MEDI_BKID_56A_Back = function() {
    try {

        SYF_PYMT_Cal_X202_MEDI_BKID_56A_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_56A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_ORDBK_ID_52A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_52_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_52_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_ORDBK_ID_52A_Back = function() {
    try {

        SYF_PYMT_Cal_X202_ORDBK_ID_52A_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_52A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_RECCORRID_54A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_54_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_54_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_RECCORRID_54A_Back = function() {
    try {

        SYF_PYMT_Cal_X202_RECCORRID_54A_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_54A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_SENDCORRID53A_ADD_Back = function() {
    try {

        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_53_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_53_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_X202_SENDCORRID53A_Back = function() {
    try {

        SYF_PYMT_Cal_X202_SENDCORRID53A_ADD_Back();
        SYF_PYMT_Chk_X202_TAG_53A_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChangClass_CPYT_ASSGN_NM = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChangClass_CPYT_DR_EMAIL_ADD = function() {
    try {

        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChangClass_CPYT_DR_FAX_NO = function() {
    try {

        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChangClass_CPYT_DR_MAIL_ADD = function() {
    try {

        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChangClass_CPYT_DR_TEL_NO = function() {
    try {

        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TEL_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TEL_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Calculate_Payment_Comm = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['PAY_COMM'];
        amt = document.MAINFORM.CPYT_DR_AMT_DRCCY.value;
        ccy = document.MAINFORM.CPYT_DR_CCY.value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Screen = function() {
    try {

        Chg.Screen.setLocalCust(document.MAINFORM.CPYT_DR_ID.value, document.MAINFORM.CPYT_DR_NAME.value);
        Chg.Screen.mapForeignCust(document.MAINFORM.CPYT_ASSGN_ID.name, document.MAINFORM.CPYT_ASSGN_NM.name);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_CPYT_ASSGN_AC = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_ValueDates = function(sValueDateType) {
    try {

        if (document.MAINFORM.elements[sValueDateType].value != SYS_DATE && !SYS_Day1MustbeLaterThanDay2('CPYT_CR_VAL_DATE', 'CPYT_DR_VAL_DATE')) {
            document.MAINFORM.elements[sValueDateType].value = SYS_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_51A_TAG = function() {
    try {

        if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            document.MAINFORM.X103_TAG_51A.value = 'A';
        }
        if ((document.MAINFORM.X103_SEND_BKNM_51A.value != '' || document.MAINFORM.X103SENDBKADD1_51A.value != '' || document.MAINFORM.X103SENDBKADD2_51A.value != '' || document.MAINFORM.X103SENDBKADD3_51A.value != '') && document.MAINFORM.X103_SEND_BKSW_51A.value == '') {
            document.MAINFORM.X103_TAG_51A.value = 'D';
        }
        if (document.MAINFORM.X103_SEND_BKSW_51A.value == '' && document.MAINFORM.X103_SEND_BKNM_51A.value == '' && document.MAINFORM.X103SENDBKADD1_51A.value == '' && document.MAINFORM.X103SENDBKADD2_51A.value == '' && document.MAINFORM.X103SENDBKADD3_51A.value == '') {
            document.MAINFORM.X103_TAG_51A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_52A_TAG = function() {
    try {

        if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
            document.MAINFORM.X103_TAG_52A.value = 'A';
        }
        if ((document.MAINFORM.X103_ORD_BKNM_52A.value != '' || document.MAINFORM.X103_ORDBKADD1_52A.value != '' || document.MAINFORM.X103_ORDBKADD2_52A.value != '' || document.MAINFORM.X103_ORDBKADD3_52A.value != '') && document.MAINFORM.X103_ORD_BKSW_52A.value == '') {
            document.MAINFORM.X103_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X103_ORD_BKSW_52A.value == '' && document.MAINFORM.X103_ORD_BKNM_52A.value == '' && document.MAINFORM.X103_ORDBKADD1_52A.value == '' && document.MAINFORM.X103_ORDBKADD2_52A.value == '' && document.MAINFORM.X103_ORDBKADD3_52A.value == '') {
            document.MAINFORM.X103_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_53A_TAG = function() {
    try {

        if (document.MAINFORM.X103_SENDCORRSW53A.value != '') {
            document.MAINFORM.X103_TAG_53A.value = 'A';
        }
        if ((document.MAINFORM.X103_SENDCORRNM53A.value != '' || document.MAINFORM.X103SENDCORADD153A.value != '' || document.MAINFORM.X103SENDCORADD253A.value != '' || document.MAINFORM.X103SENDCORADD353A.value != '') && document.MAINFORM.X103_SENDCORRSW53A.value == '') {
            document.MAINFORM.X103_TAG_53A.value = 'D';
        }
        if (document.MAINFORM.X103_SENDCORRSW53A.value == '' && document.MAINFORM.X103_SENDCORRNM53A.value == '' && document.MAINFORM.X103SENDCORADD153A.value == '' && document.MAINFORM.X103SENDCORADD253A.value == '' && document.MAINFORM.X103SENDCORADD353A.value == '') {
            document.MAINFORM.X103_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_54A_TAG = function() {
    try {

        if (document.MAINFORM.X103_RECCORRSW_54A.value != '') {
            document.MAINFORM.X103_TAG_54A.value = 'A';
        }
        if ((document.MAINFORM.X103_RECCORRNM_54A.value != '' || document.MAINFORM.X103_RECCORADD154A.value != '' || document.MAINFORM.X103_RECCORADD254A.value != '' || document.MAINFORM.X103_RECCORADD354A.value != '') && document.MAINFORM.X103_RECCORRSW_54A.value == '') {
            document.MAINFORM.X103_TAG_54A.value = 'D';
        }
        if (document.MAINFORM.X103_RECCORRSW_54A.value == '' && document.MAINFORM.X103_RECCORRNM_54A.value == '' && document.MAINFORM.X103_RECCORADD154A.value == '' && document.MAINFORM.X103_RECCORADD254A.value == '' && document.MAINFORM.X103_RECCORADD354A.value == '') {
            document.MAINFORM.X103_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_56A_TAG = function() {
    try {

        if (document.MAINFORM.X103_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X103_TAG_56A.value = 'A';
        }
        if ((document.MAINFORM.X103_MEDI_BKNM_56A.value != '' || document.MAINFORM.X103MEDIBKADD1_56A.value != '' || document.MAINFORM.X103MEDIBKADD2_56A.value != '' || document.MAINFORM.X103MEDIBKADD3_56A.value != '') && document.MAINFORM.X103_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X103_TAG_56A.value = 'D';
        }
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value == '' && document.MAINFORM.X103_MEDI_BKNM_56A.value == '' && document.MAINFORM.X103MEDIBKADD1_56A.value == '' && document.MAINFORM.X103MEDIBKADD2_56A.value == '' && document.MAINFORM.X103MEDIBKADD3_56A.value == '') {
            document.MAINFORM.X103_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_57A_TAG = function() {
    try {

        if (document.MAINFORM.X103_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X103_TAG_57A.value = 'A';
        }
        if ((document.MAINFORM.X103_ACC_BKNM_57A.value != '' || document.MAINFORM.X103_ACCBKADD1_57A.value != '' || document.MAINFORM.X103_ACCBKADD2_57A.value != '' || document.MAINFORM.X103_ACCBKADD3_57A.value != '') && document.MAINFORM.X103_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X103_TAG_57A.value = 'D';
        }
        if (document.MAINFORM.X103_ACC_BKSW_57A.value == '' && document.MAINFORM.X103_ACC_BKNM_57A.value == '' && document.MAINFORM.X103_ACCBKADD1_57A.value == '' && document.MAINFORM.X103_ACCBKADD2_57A.value == '' && document.MAINFORM.X103_ACCBKADD3_57A.value == '') {
            document.MAINFORM.X103_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X103_TAG_B2_TAG = function() {
    try {

        if (document.MAINFORM.X103_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X103_TAG_B2.value = 'A';
        }
        if ((document.MAINFORM.X103_ADV_BKNM_B2.value != '' || document.MAINFORM.X103_ADV_BKADD1_B2.value != '' || document.MAINFORM.X103_ADV_BKADD2_B2.value != '' || document.MAINFORM.X103_ADV_BKADD3_B2.value != '') && document.MAINFORM.X103_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X103_TAG_B2.value = 'D';
        }
        if (document.MAINFORM.X103_ADV_BKSW_B2.value == '' && document.MAINFORM.X103_ADV_BKNM_B2.value == '' && document.MAINFORM.X103_ADV_BKADD1_B2.value == '' && document.MAINFORM.X103_ADV_BKADD2_B2.value == '' && document.MAINFORM.X103_ADV_BKADD3_B2.value == '') {
            document.MAINFORM.X103_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_52A_TAG = function() {
    try {

        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
        }
        if ((document.MAINFORM.X202_ORDBK_NM_52A.value != '' || document.MAINFORM.X202_ORDBKADD1_52A.value != '' || document.MAINFORM.X202_ORDBKADD2_52A.value != '' || document.MAINFORM.X202_ORDBKADD3_52A.value != '') && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X202_ORDBK_SW_52A.value == '' && document.MAINFORM.X202_ORDBK_NM_52A.value == '' && document.MAINFORM.X202_ORDBKADD1_52A.value == '' && document.MAINFORM.X202_ORDBKADD2_52A.value == '' && document.MAINFORM.X202_ORDBKADD3_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_53A_TAG = function() {
    try {

        if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            document.MAINFORM.X202_TAG_53A.value = 'A';
        }
        if ((document.MAINFORM.X202_SENDCORRNM53A.value != '' || document.MAINFORM.X202SENDCORADD153A.value != '' || document.MAINFORM.X202SENDCORADD253A.value != '' || document.MAINFORM.X202SENDCORADD353A.value != '') && document.MAINFORM.X202_SENDCORRSW53A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = 'D';
        }
        if (document.MAINFORM.X202_SENDCORRSW53A.value == '' && document.MAINFORM.X202_SENDCORRNM53A.value == '' && document.MAINFORM.X202SENDCORADD153A.value == '' && document.MAINFORM.X202SENDCORADD253A.value == '' && document.MAINFORM.X202SENDCORADD353A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_54A_TAG = function() {
    try {

        if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            document.MAINFORM.X202_TAG_54A.value = 'A';
        }
        if ((document.MAINFORM.X202_RECCORRNM_54A.value != '' || document.MAINFORM.X202_RECCORADD154A.value != '' || document.MAINFORM.X202_RECCORADD254A.value != '' || document.MAINFORM.X202_RECCORADD354A.value != '') && document.MAINFORM.X202_RECCORRSW_54A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = 'D';
        }
        if (document.MAINFORM.X202_RECCORRSW_54A.value == '' && document.MAINFORM.X202_RECCORRNM_54A.value == '' && document.MAINFORM.X202_RECCORADD154A.value == '' && document.MAINFORM.X202_RECCORADD254A.value == '' && document.MAINFORM.X202_RECCORADD354A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_56A_TAG = function() {
    try {

        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X202_TAG_56A.value = 'A';
        }
        if ((document.MAINFORM.X202_MEDI_BKNM_56A.value != '' || document.MAINFORM.X202MEDIBKADD1_56A.value != '' || document.MAINFORM.X202MEDIBKADD2_56A.value != '' || document.MAINFORM.X202MEDIBKADD3_56A.value != '') && document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = 'D';
        }
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value == '' && document.MAINFORM.X202_MEDI_BKNM_56A.value == '' && document.MAINFORM.X202MEDIBKADD1_56A.value == '' && document.MAINFORM.X202MEDIBKADD2_56A.value == '' && document.MAINFORM.X202MEDIBKADD3_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_57A_TAG = function() {
    try {

        if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X202_TAG_57A.value = 'A';
        }
        if ((document.MAINFORM.X202_ACC_BKNM_57A.value != '' || document.MAINFORM.X202_ACCBKADD1_57A.value != '' || document.MAINFORM.X202_ACCBKADD2_57A.value != '' || document.MAINFORM.X202_ACCBKADD3_57A.value != '') && document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = 'D';
        }
        if (document.MAINFORM.X202_ACC_BKSW_57A.value == '' && document.MAINFORM.X202_ACC_BKNM_57A.value == '' && document.MAINFORM.X202_ACCBKADD1_57A.value == '' && document.MAINFORM.X202_ACCBKADD2_57A.value == '' && document.MAINFORM.X202_ACCBKADD3_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_58A_TAG = function() {
    try {

        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_TAG_58A.value = 'A';
        }
        if ((document.MAINFORM.X202_BENE_BKNM_58A.value != '' || document.MAINFORM.X202BENEBKADD1_58A.value != '' || document.MAINFORM.X202BENEBKADD2_58A.value != '' || document.MAINFORM.X202BENEBKADD3_58A.value != '') && document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = 'D';
        }
        if (document.MAINFORM.X202_BENE_BKSW_58A.value == '' && document.MAINFORM.X202_BENE_BKNM_58A.value == '' && document.MAINFORM.X202BENEBKADD1_58A.value == '' && document.MAINFORM.X202BENEBKADD2_58A.value == '' && document.MAINFORM.X202BENEBKADD3_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_X202_TAG_B2_TAG = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X202_TAG_B2.value = 'A';
        }
        if ((document.MAINFORM.X202_ADV_BKNM_B2.value != '' || document.MAINFORM.X202_ADV_BKADD1_B2.value != '' || document.MAINFORM.X202_ADV_BKADD2_B2.value != '' || document.MAINFORM.X202_ADV_BKADD3_B2.value != '') && document.MAINFORM.X202_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = 'D';
        }
        if (document.MAINFORM.X202_ADV_BKSW_B2.value == '' && document.MAINFORM.X202_ADV_BKNM_B2.value == '' && document.MAINFORM.X202_ADV_BKADD1_B2.value == '' && document.MAINFORM.X202_ADV_BKADD2_B2.value == '' && document.MAINFORM.X202_ADV_BKADD3_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ben_Cust = function() {
    try {

        document.MAINFORM.CPYT_ASSGN_ID.value = "";
        document.MAINFORM.CPYT_ASSGN_NM.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD1.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD2.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD3.value = "";
        document.MAINFORM.CPYT_ASSGN_AC.value = "";
        return;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ord_Cust = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYS_GetRefNo_S("PYMT", 'SYF_PYMT_PYMT_SetRefNo');

        //for Tag 59 mapping
        if (document.MAINFORM.X103_BENECU_BKSW_59.value == '') {
            document.MAINFORM.TEMP_X103BENECUADD1_59A.value = document.MAINFORM.X103BENECUADD1_59A.value;
            document.MAINFORM.TEMP_X103BENECUADD2_59A.value = document.MAINFORM.X103BENECUADD2_59A.value;
            document.MAINFORM.TEMP_X103BENECUADD3_59A.value = document.MAINFORM.X103BENECUADD3_59A.value;
            if (document.MAINFORM.X103_BENE_IBAN.value != '') {
                document.MAINFORM.TEMP_X103_BENECUACNO59A.value = document.MAINFORM.X103_BENE_IBAN.value;
            } else {
                document.MAINFORM.TEMP_X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECUACNO59A.value;
            }
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
        //SYT_CHG_VOUCHER();
        //SYT_CLEANPAY_VOUCHER();
        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Disable103 = function() {
    try {

        SYT_DisableDivClass("F_div");
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Disable103_Acct_With_Ins = function() {
    try {

        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == "IBAN") {
            if (document.MAINFORM.CPYT_ASSGN_AC.value != "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "") {
                disableField(document.MAINFORM.X103_ACC_BKID_57A);
                disableField(document.MAINFORM.AWI_lookup);
                disableField(document.MAINFORM.X103_ACC_BKNM_57A);
                disableField(document.MAINFORM.X103_ACCBKADD1_57A);
                disableField(document.MAINFORM.X103_ACCBKADD2_57A);
                disableField(document.MAINFORM.X103_ACCBKADD3_57A);
                disableField(document.MAINFORM.X103_ACC_BKACNO57A);
                disableField(document.MAINFORM.X103_TAG_57A);
                disableField(document.MAINFORM.X103_ACC_BKSW_57A);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Disable202 = function() {
    try {

        /*
SYS_changeClassName('X202_RELATEDNO_21','P');
SYS_changeClassName('X202_ADV_BKID_B2','P');
SYS_changeClassName('X202_ADV_BKNM_B2','P');
SYS_changeClassName('X202_ADV_BKADD1_B2','P');
SYS_changeClassName('X202_ADV_BKADD2_B2','P');
SYS_changeClassName('X202_ADV_BKADD3_B2','P');
SYS_changeClassName('X202_ADV_BKSW_B2','P');      
SYS_changeClassName('X202_ORDBK_ID_52A','P');
SYS_changeClassName('X202_ORDBK_NM_52A','P');
SYS_changeClassName('X202_ORDBKADD1_52A','P');
SYS_changeClassName('X202_ORDBKADD2_52A','P');
SYS_changeClassName('X202_ORDBKADD3_52A','P');
SYS_changeClassName('X202_ORDBK_SW_52A','P');
SYS_changeClassName('X202_ORDBKACNO_52A','P');
SYS_changeClassName('X202_SENDCORRID53A','P');
SYS_changeClassName('X202_SENDCORRNM53A','P');
SYS_changeClassName('X202SENDCORADD153A','P');
SYS_changeClassName('X202SENDCORADD253A','P');
SYS_changeClassName('X202SENDCORADD353A','P');
SYS_changeClassName('X202_SENDCORRSW53A','P');
SYS_changeClassName('X202SENDCORACNO53A','P');
SYS_changeClassName('X202_RECCORRID_54A','P');
SYS_changeClassName('X202_RECCORRNM_54A','P');
SYS_changeClassName('X202_RECCORADD154A','P');
SYS_changeClassName('X202_RECCORADD254A','P');
SYS_changeClassName('X202_RECCORADD354A','P');
SYS_changeClassName('X202_RECCORRSW_54A','P');
SYS_changeClassName('X202RECCORRACNO54A','P');
SYS_changeClassName('X202_MEDI_BKSW_56A','P');
SYS_changeClassName('X202_MEDI_BKID_56A','P');
SYS_changeClassName('X202_MEDI_BKNM_56A','P');
SYS_changeClassName('X202MEDIBKADD1_56A','P');
SYS_changeClassName('X202MEDIBKADD2_56A','P');
SYS_changeClassName('X202MEDIBKADD3_56A','P');
SYS_changeClassName('X202_MEDIBKACNO56A','P');	
SYS_changeClassName('X202_ACC_BKID_57A','P');		
SYS_changeClassName('X202_ACC_BKNM_57A','P');
SYS_changeClassName('X202_ACCBKADD1_57A','P');
SYS_changeClassName('X202_ACCBKADD2_57A','P');
SYS_changeClassName('X202_ACCBKADD3_57A','P');
SYS_changeClassName('X202_ACC_BKSW_57A','P');
SYS_changeClassName('X202_ACC_BKACNO57A','P');		
SYS_changeClassName('X202_BENE_BKID_58A','P');
SYS_changeClassName('X202_BENE_BKNM_58A','P');
SYS_changeClassName('X202BENEBKADD1_58A','P');
SYS_changeClassName('X202BENEBKADD2_58A','P');
SYS_changeClassName('X202BENEBKADD3_58A','P');
SYS_changeClassName('X202_BENE_BKSW_58A','P');
SYS_changeClassName('X202_BENEBKACNO58A','P');
SYS_changeClassName('X202_BKTOBK_INFO72','P');
SYS_changeClassName('X202_B2_BTN','P');
SYS_changeClassName('X202_B2_ADD_BTN','P');
SYS_changeClassName('X202_52_BTN','P');
SYS_changeClassName('X202_52_ADD_BTN','P');
SYS_changeClassName('X202_53_BTN','P');
SYS_changeClassName('X202_53_ADD_BTN','P');
SYS_changeClassName('X202_54_BTN','P');
SYS_changeClassName('X202_54_ADD_BTN','P');
SYS_changeClassName('X202_56_BTN','P');
SYS_changeClassName('X202_56_ADD_BTN','P');
SYS_changeClassName('X202_57_BTN','P');
SYS_changeClassName('X202_57_ADD_BTN','P');
SYS_changeClassName('X202_58_BTN','P');
SYS_changeClassName('X202_58_ADD_BTN','P');
*/

        SYT_DisableDivClass("I_div");
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Disable_103_Acct_With_Ins = function() {
    try {

        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == "IBAN") {
            if (document.MAINFORM.CPYT_ASSGN_AC.value != "" && document.MAINFORM.X103_ACC_BKACNO57A.value != "") {
                disableField(document.MAINFORM.X103_ACC_BKID_57A);
                disableField(document.MAINFORM.AWI_lookup);
                disableField(document.MAINFORM.X103_ACC_BKNM_57A);
                disableField(document.MAINFORM.X103_ACCBKADD1_57A);
                disableField(document.MAINFORM.X103_ACCBKADD2_57A);
                disableField(document.MAINFORM.X103_ACCBKADD3_57A);
                disableField(document.MAINFORM.X103_ACC_BKACNO57A);
                disableField(document.MAINFORM.X103_TAG_57A);
                disableField(document.MAINFORM.X103_ACC_BKSW_57A);
            }
            /*
		else if(document.MAINFORM.CPYT_ASSGN_AC.value == "" || document.MAINFORM.X103_ACC_BKACNO57A.value != "")
			{
			
		}
             */
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enable103 = function() {
    try {

        SYT_ChangeFldClass_New('X103_ADV_BKID_B2', 'M');
        SYT_ChangeFldClass_New('X103_ADV_BKNM_B2', 'M');
        SYT_ChangeFldClass_New('X103_ADV_BKADD1_B2', 'O');
        SYT_ChangeFldClass_New('X103_ADV_BKADD2_B2', 'O');
        SYT_ChangeFldClass_New('X103_ADV_BKADD3_B2', 'O');
        SYT_ChangeFldClass_New('X103_ADV_BKSW_B2', 'M');
        SYT_ChangeFldClass_New('X103_B2_BTN', 'M');
        SYT_ChangeFldClass_New('X103_B2_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X103_BENECU_ID_59A', 'O');
        SYT_ChangeFldClass_New('X103_BENECU_NM_59A', 'M');
        SYT_ChangeFldClass_New('X103BENECUADD1_59A', 'O');
        SYT_ChangeFldClass_New('X103BENECUADD2_59A', 'O');
        SYT_ChangeFldClass_New('X103BENECUADD3_59A', 'O');
        SYT_ChangeFldClass_New('X103_BENECUACNO59A', 'O');
        SYT_ChangeFldClass_New('X103_ORDCU_ID_50A', 'O');
        SYT_ChangeFldClass_New('X103_ORDCU_NM_50A', 'M');
        SYT_ChangeFldClass_New('X103_ORDCUADD1_50A', 'O');
        SYT_ChangeFldClass_New('X103_ORDCUADD2_50A', 'O');
        SYT_ChangeFldClass_New('X103_ORDCUADD3_50A', 'O');
        SYT_ChangeFldClass_New('X103_ORDCU_SW_50A', 'O');
        SYT_ChangeFldClass_New('X103_ORDCUACNO_50A', 'O');
        SYT_ChangeFldClass_New('X103_SEND_BKID_51A', 'O');
        SYT_ChangeFldClass_New('X103_SEND_BKNM_51A', 'O');
        SYT_ChangeFldClass_New('X103SENDBKADD1_51A', 'O');
        SYT_ChangeFldClass_New('X103SENDBKADD2_51A', 'O');
        SYT_ChangeFldClass_New('X103SENDBKADD3_51A', 'O');
        SYT_ChangeFldClass_New('X103_SEND_BKSW_51A', 'O');
        SYT_ChangeFldClass_New('X103_SENDBKACNO51A', 'O');
        SYT_ChangeFldClass_New('X103_ORD_BKID_52A', 'O');
        SYT_ChangeFldClass_New('X103_ORD_BKNM_52A', 'O');
        SYT_ChangeFldClass_New('X103_ORDBKADD1_52A', 'O');
        SYT_ChangeFldClass_New('X103_ORDBKADD2_52A', 'O');
        SYT_ChangeFldClass_New('X103_ORDBKADD3_52A', 'O');
        SYT_ChangeFldClass_New('X103_ORD_BKSW_52A', 'O');
        SYT_ChangeFldClass_New('X103_ORDBKACNO_52A', 'O');
        SYT_ChangeFldClass_New('X103_SENDCORRID53A', 'O');
        SYT_ChangeFldClass_New('X103_SENDCORRNM53A', 'O');
        SYT_ChangeFldClass_New('X103SENDCORADD153A', 'O');
        SYT_ChangeFldClass_New('X103SENDCORADD253A', 'O');
        SYT_ChangeFldClass_New('X103SENDCORADD353A', 'O');
        SYT_ChangeFldClass_New('X103_SENDCORRSW53A', 'O');
        SYT_ChangeFldClass_New('X103SENDCORACNO53A', 'O');
        SYT_ChangeFldClass_New('X103_RECCORRID_54A', 'O');
        SYT_ChangeFldClass_New('X103_RECCORRNM_54A', 'O');
        SYT_ChangeFldClass_New('X103_RECCORADD154A', 'O');
        SYT_ChangeFldClass_New('X103_RECCORADD254A', 'O');
        SYT_ChangeFldClass_New('X103_RECCORADD354A', 'O');
        SYT_ChangeFldClass_New('X103_RECCORRSW_54A', 'O');
        SYT_ChangeFldClass_New('X103RECCORRACNO54A', 'O');

        SYT_ChangeFldClass_New('X103_MEDI_BKID_56A', 'O');
        SYT_ChangeFldClass_New('X103_MEDI_BKNM_56A', 'O');
        SYT_ChangeFldClass_New('X103MEDIBKADD1_56A', 'O');
        SYT_ChangeFldClass_New('X103MEDIBKADD2_56A', 'O');
        SYT_ChangeFldClass_New('X103MEDIBKADD3_56A', 'O');
        SYT_ChangeFldClass_New('X103_MEDI_BKSW_56A', 'O');
        SYT_ChangeFldClass_New('X103_MEDIBKACNO56A', 'O');
        SYT_ChangeFldClass_New('X103_ACC_BKID_57A', 'O');
        SYT_ChangeFldClass_New('X103_ACC_BKNM_57A', 'O');
        SYT_ChangeFldClass_New('X103_ACCBKADD1_57A', 'O');
        SYT_ChangeFldClass_New('X103_ACCBKADD2_57A', 'O');
        SYT_ChangeFldClass_New('X103_ACCBKADD3_57A', 'O');
        //SYT_ChangeFldClass_New('X103_ACCBKADD3_57A2','O');
        SYT_ChangeFldClass_New('X103_ACC_BKSW_57A', 'O');
        SYT_ChangeFldClass_New('X103_ACC_BKACNO57A', 'O');
        SYT_ChangeFldClass_New('X103_ID_50_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_51_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_53_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_52_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_54_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_56_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_57_BTN', 'O');
        SYT_ChangeFldClass_New('X103_ID_59_BTN', 'O');
        SYT_ChangeFldClass_New('X103_BENECU_OP', 'O');
        SYT_ChangeFldClass_New('X103_ORDCU_ID_OP', 'O');
        SYT_ChangeFldClass_New('X103_BKOP_CODE_23B', 'M');
        SYT_ChangeFldClass_New('X103_DET_CHG_71A', 'M');
        SYT_ChangeFldClass_New('X103_INSTRCODE_23E', 'O');
        SYT_ChangeFldClass_New('X103_RECCHGCCY_71G', 'O');
        SYT_ChangeFldClass_New('X103_RECCHGAMT_71G', 'O');
        SYT_ChangeFldClass_New('X103_REMIT_INFO_70', 'O');
        SYT_ChangeFldClass_New('X103_REG_REP_77B', 'O');
        SYT_ChangeFldClass_New('X103_BKTOBK_INFO72', 'O');
        SYT_ChangeFldClass_New('X103_ENV_CONT_77T', 'O');
        SYT_ChangeFldClass_New('X103_TAG_50A', 'M');
        SYT_ChangeFldClass_New('X103_BENE_IBAN', 'O');
        SYT_ChangeFldClass_New('X103_56_NAT_ID', 'O');
        SYT_ChangeFldClass_New('X103_56_SERVICES', 'O');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enable202 = function() {
    try {

        SYT_ChangeFldClass_New('X202_RELATEDNO_21', 'M');
        SYT_ChangeFldClass_New('X202_ADV_BKID_B2', 'M');
        SYT_ChangeFldClass_New('X202_ADV_BKNM_B2', 'M');
        SYT_ChangeFldClass_New('X202_ADV_BKADD1_B2', 'O');
        SYT_ChangeFldClass_New('X202_ADV_BKADD2_B2', 'O');
        SYT_ChangeFldClass_New('X202_ADV_BKADD3_B2', 'O');
        SYT_ChangeFldClass_New('X202_ADV_BKSW_B2', 'M');
        SYT_ChangeFldClass_New('X202_ORDBK_ID_52A', 'O');
        SYT_ChangeFldClass_New('X202_ORDBK_NM_52A', 'O');
        SYT_ChangeFldClass_New('X202_ORDBKADD1_52A', 'O');
        SYT_ChangeFldClass_New('X202_ORDBKADD2_52A', 'O');
        SYT_ChangeFldClass_New('X202_ORDBKADD3_52A', 'O');
        SYT_ChangeFldClass_New('X202_ORDBK_SW_52A', 'O');
        SYT_ChangeFldClass_New('X202_ORDBKACNO_52A', 'O');
        SYT_ChangeFldClass_New('X202_SENDCORRID53A', 'O');
        SYT_ChangeFldClass_New('X202_SENDCORRNM53A', 'O');
        SYT_ChangeFldClass_New('X202SENDCORADD153A', 'O');
        SYT_ChangeFldClass_New('X202SENDCORADD253A', 'O');
        SYT_ChangeFldClass_New('X202SENDCORADD353A', 'O');
        SYT_ChangeFldClass_New('X202_SENDCORRSW53A', 'O');
        SYT_ChangeFldClass_New('X202SENDCORACNO53A', 'O');
        SYT_ChangeFldClass_New('X202_RECCORRID_54A', 'O');
        SYT_ChangeFldClass_New('X202_RECCORRNM_54A', 'O');
        SYT_ChangeFldClass_New('X202_RECCORADD154A', 'O');
        SYT_ChangeFldClass_New('X202_RECCORADD254A', 'O');
        SYT_ChangeFldClass_New('X202_RECCORADD354A', 'O');
        SYT_ChangeFldClass_New('X202_RECCORRSW_54A', 'O');
        SYT_ChangeFldClass_New('X202RECCORRACNO54A', 'O');
        SYT_ChangeFldClass_New('X202_MEDI_BKID_56A', 'O');
        SYT_ChangeFldClass_New('X202_MEDI_BKNM_56A', 'O');
        SYT_ChangeFldClass_New('X202MEDIBKADD1_56A', 'O');
        SYT_ChangeFldClass_New('X202MEDIBKADD2_56A', 'O');
        SYT_ChangeFldClass_New('X202MEDIBKADD3_56A', 'O');
        SYT_ChangeFldClass_New('X202_MEDIBKACNO56A', 'O');
        SYT_ChangeFldClass_New('X202_MEDI_BKSW_56A', 'O');
        SYT_ChangeFldClass_New('X202_ACC_BKID_57A', 'O');
        SYT_ChangeFldClass_New('X202_ACC_BKNM_57A', 'O');
        SYT_ChangeFldClass_New('X202_ACCBKADD1_57A', 'O');
        SYT_ChangeFldClass_New('X202_ACCBKADD2_57A', 'O');
        SYT_ChangeFldClass_New('X202_ACCBKADD3_57A', 'O');
        SYT_ChangeFldClass_New('X202_ACC_BKSW_57A', 'O');
        SYT_ChangeFldClass_New('X202_ACC_BKACNO57A', 'O');
        SYT_ChangeFldClass_New('X202_BENE_BKID_58A', 'O');
        SYT_ChangeFldClass_New('X202_BENE_BKNM_58A', 'M');
        SYT_ChangeFldClass_New('X202BENEBKADD1_58A', 'O');
        SYT_ChangeFldClass_New('X202BENEBKADD2_58A', 'O');
        SYT_ChangeFldClass_New('X202BENEBKADD3_58A', 'O');
        //SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD3_58A2,'O');
        SYT_ChangeFldClass_New('X202_BENE_BKSW_58A', 'O');
        SYT_ChangeFldClass_New('X202_BENEBKACNO58A', 'O');
        SYT_ChangeFldClass_New('X202_BKTOBK_INFO72', 'O');
        SYT_ChangeFldClass_New('X202_B2_BTN', 'O');
        SYT_ChangeFldClass_New('X202_B2_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X202_52_BTN', 'O');
        SYT_ChangeFldClass_New('X202_52_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X202_53_BTN', 'O');
        SYT_ChangeFldClass_New('X202_53_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X202_54_BTN', 'O');
        SYT_ChangeFldClass_New('X202_54_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X202_56_BTN', 'O');
        SYT_ChangeFldClass_New('X202_56_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X202_57_BTN', 'O');
        SYT_ChangeFldClass_New('X202_57_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('X202_58_BTN', 'O');
        SYT_ChangeFldClass_New('X202_58_ADD_BTN', 'P');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Fail58 = function() {
    try {

        document.MAINFORM.X202_BENE_BKSW_58A.value = '';
        document.MAINFORM.X202_BENE_BKNM_58A.value = '';
        document.MAINFORM.X202BENEBKADD1_58A.value = '';
        document.MAINFORM.X202_TAG_58A.value = 'D';
        alert('Can not find Beneficiary Institution BIC');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
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
        SYF_PYMT_ChangClass_CPYT_DR_EMAIL_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_FAX_NO();
        SYF_PYMT_ChangClass_CPYT_DR_MAIL_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_TEL_NO();
        SYF_PYMT_Disable103();
        SYF_PYMT_Disable202();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Invalid_bic = function() {
    try {

        alert('The beneficiary bank BIC is invalid!');
        //Edit by Sunny 20130607
        document.MAINFORM.X103_ACC_BKSW_57A.value = '';
        //document.MAINFORM.X103_ACC_BKID_57A.value='';
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_PYMT_Charge = function() {
    try {

        SYF_PYMT_Chg_Screen();
        SYF_PYMT_Chg_Calculate_Payment_Comm();
        SYF_PYMT_SWIFT_CHARGE();
        Chg.calculate(['OTHER_CHG']);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_PYMT_SetRefNo = function(sRef) {
    try {

        document.MAINFORM.PYMT_C_MAIN_REF.value = sRef;
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = sRef;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust(document.MAINFORM.CPYT_DR_ID.name, document.MAINFORM.CPYT_DR_NAME.name);
        Chg.Screen.mapForeignCust(document.MAINFORM.CPYT_ASSGN_ID.name, document.MAINFORM.CPYT_ASSGN_NM.name);
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_PYMT_PYMT_Charge();
        }

        switch (document.MAINFORM.CPYT_PAY_ADV_MSG.value) {
            case "MT103":
                SYF_PYMT_Enable103();
                SYF_PYMT_Disable202();
                break;
            case "MT202":
                SYF_PYMT_Disable103();
                SYF_PYMT_Enable202();
                break;
            case "MT202COV":
                SYF_PYMT_Enable103();
                SYF_PYMT_Enable202();
                break;
            case "MT499":
            case "MT999":
            case "Mail":
            case "None":
                SYF_PYMT_Disable103();
                SYF_PYMT_Disable202();
                break;
        }

        SYF_PYMT_Set_DR_MULTI_ADD();
        SYF_PYMT_Set_ASSGN_MULTI_ADD();

        SYF_PYMT_Cal_X202_ADV_BKID_B2_Back();
        SYF_PYMT_Cal_X202_ORDBK_ID_52A_Back();
        SYF_PYMT_Cal_X202_SENDCORRID53A_Back();
        SYF_PYMT_Cal_X202_RECCORRID_54A_Back();
        SYF_PYMT_Cal_X202_MEDI_BKID_56A_Back();
        SYF_PYMT_Cal_X202_ACC_BKID_57A_Back();
        SYF_PYMT_Cal_X202_BENE_BKID_58A_Back();

        SYF_PYMT_Cal_X103_ADV_BKID_B2_Back();
        SYF_PYMT_Cal_X103_ORDCU_ID_50A_Back();
        SYF_PYMT_Cal_X103_SEND_BKID_51A_Back();
        SYF_PYMT_Cal_X103_ORD_BKID_52A_Back();
        SYF_PYMT_Cal_X103_SENDCORRID53A_Back();
        SYF_PYMT_Cal_X103_RECCORRID_54A_Back();
        SYF_PYMT_Cal_X103_MEDI_BKID_56A_Back();
        SYF_PYMT_Cal_X103_ACC_BKID_57A_Back();
        SYF_PYMT_Cal_X103_BENECU_ID_59A_Back();

        if ("Bank" == document.MAINFORM.X103_BENECU_OP.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_BKSW_59, 'O');
        }

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_PYMT_Set_CPYT_PAY_ADV_MSG();
        SYS_GetRefNo_S("PYMT", 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ACC_BKID_57A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_ACC_BKID_57A_BIC', '1');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ACC_BKSW_57A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_ACC_BKSW_57A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ACC_BKID_57A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_ACC_BKSW_57A_ADD_23', '1', true);
            if (document.MAINFORM.X103_ACC_BKID_57A.value != '') {
                SYS_GetCUBK('X103_ACC_BKID_57A_BIC', 'X103_ACC_BKID_57A', 'SYF_PYMT_Cal_X103_ACC_BKID_57A_Back');
            }
            //Edit by Sunny 20130607
            else {
                SYF_PYMT_Invalid_bic();

            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ADV_BKID_B2_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2_BIC');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ADV_BKSW_B2_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
            if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_ADV_BKSW_B2.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ADV_BKID_B2";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_ADV_BKSW_B2_ADD_24', '1', true);
            if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
                SYS_GetCUBK('X103_ADV_BKID_B2_BIC', 'X103_ADV_BKID_B2', 'SYF_PYMT_Cal_X103_ADV_BKID_B2_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_BENECU_ID_59A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_59A', sql);
                //SYS_InqCUBK_Sql('X103_BENECU_ID_59A_BIC', sql);
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_BIC');
            } else {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_BANK_59A', sql);	
                //SYS_InqCUBK_Sql('X103_BENECU_ID_BANK_59A_BIC', sql);
                SYS_InqCUBK_byCondition('X103_BENECU_ID_BANK_59A_BIC');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_MEDI_BKID_56A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_MEDI_BKSW_56A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_MEDI_BKSW_56A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_MEDI_BKID_56A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_MEDI_BKSW_56A_ADD_25', '1', true);
            if (document.MAINFORM.X103_MEDI_BKID_56A.value != '') {
                SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', 'SYF_PYMT_Cal_X103_MEDI_BKID_56A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ORDCU_ID_50A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            if (document.MAINFORM.X103_ORDCU_ID_OP.value == "Bank") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', sql);
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A_BIC', sql);
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A_BIC');
            } else {
                //SYS_InqCUBK_Sql('X103_ORDCU_CUST_ID_50A', sql);
                //SYS_InqCUBK_Sql('X103_ORDCU_CUST_ID_50A_BIC', sql);
                SYS_InqCUBK_byCondition('X103_ORDCU_CUST_ID_50A_BIC');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ORDCU_SW_50A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 11 || document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
            if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
                document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.X103_ORDCU_SW_50A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_ORDCU_SW_50A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ORDCU_ID_50A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_ORDCU_SW_50A_ADD_26', '1', true);
            if (document.MAINFORM.X103_ORDCU_SW_50A.value != '') {
                SYS_GetCUBK('X103_ORDCU_ID_50A_BIC', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Cal_X103_ORDCU_ID_50A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ORD_BKID_52A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_ORD_BKID_52A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_ORD_BKSW_52A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 11 || document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_ORD_BKSW_52A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ORD_BKID_52A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_ORD_BKSW_52A_ADD_27', '1', true);
            if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
                SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A', 'SYF_PYMT_Cal_X103_ORD_BKID_52A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_RECCORRID_54A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_RECCORRID_54A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_RECCORRSW_54A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_RECCORRSW_54A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_RECCORRID_54A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_RECCORRSW_54A_ADD_28', '1', true);
            if (document.MAINFORM.X103_RECCORRID_54A.value != '') {
                SYS_GetCUBK('X103_RECCORRID_54A', 'X103_RECCORRID_54A', 'SYF_PYMT_Cal_X103_RECCORRID_54A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_SENDCORRID53A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_SENDCORRID53A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_SENDCORRSW53A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 11 || document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
            if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_SENDCORRSW53A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SENDCORRID53A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_SENDCORRSW53A_ADD_29', '1', true);
            if (document.MAINFORM.X103_SENDCORRID53A.value != '') {
                SYS_GetCUBK('X103_SENDCORRID53A', 'X103_SENDCORRID53A', 'SYF_PYMT_Cal_X103_SENDCORRID53A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_SEND_BKID_51A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X103_SEND_BKID_51A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X103_SEND_BKSW_51A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 11 || document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_SEND_BKSW_51A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SEND_BKID_51A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X103_SEND_BKSW_51A_ADD_30', '1', true);
            if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
                SYS_GetCUBK('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A', 'SYF_PYMT_Cal_X103_SEND_BKID_51A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_ACC_BKID_57A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_ACC_BKID_57A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_ACC_BKSW_57A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_ACC_BKSW_57A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ACC_BKID_57A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_ACC_BKSW_57A_ADD_31', '1', true);
            if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
                SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYF_PYMT_Cal_X202_ACC_BKID_57A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_ADV_BKID_B2_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_ADV_BKID_B2_BIC');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_ADV_BKSW_B2_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_ADV_BKSW_B2.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ADV_BKID_B2";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_ADV_BKSW_B2_ADD_32', '1', true);
            if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
                SYS_GetCUBK('X202_ADV_BKID_B2_BIC', 'X202_ADV_BKID_B2', 'SYF_PYMT_Cal_X202_ADV_BKID_B2_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_BENE_BKID_58A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_BENE_BKID_58A_BIC');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_BENE_BKSW_58A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 11 || document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_BENE_BKSW_58A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_BENE_BKID_58A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_BENE_BKSW_58A_ADD_33', '1', true);
            if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
                SYS_GetCUBK('X202_BENE_BKID_58A_BIC', 'X202_BENE_BKID_58A', 'SYF_PYMT_Cal_X202_BENE_BKID_58A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_MEDI_BKID_56A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_MEDI_BKSW_56A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_MEDI_BKSW_56A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_MEDI_BKID_56A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_MEDI_BKSW_56A_ADD_34', '1', true);
            if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
                SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYF_PYMT_Cal_X202_MEDI_BKID_56A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_ORDBK_ID_52A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_ORDBK_SW_52A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 11 || document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_ORDBK_SW_52A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ORDBK_ID_52A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_ORDBK_SW_52A_ADD_35', '1', true);
            if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
                SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_PYMT_Cal_X202_ORDBK_ID_52A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_RECCORRID_54A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_RECCORRID_54A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_RECCORRSW_54A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_RECCORRSW_54A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_RECCORRID_54A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_RECCORRSW_54A_ADD_36', '1', true);
            if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
                SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYF_PYMT_Cal_X202_RECCORRID_54A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_SENDCORRID53A_BANK = function() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('X202_SENDCORRID53A');
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SQL_X202_SENDCORRSW53A_ADD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 11 || document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X202_SENDCORRSW53A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_SENDCORRID53A";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_SQL_X202_SENDCORRSW53A_ADD_37', '1', true);
            if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
                SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYF_PYMT_Cal_X202_SENDCORRID53A_Back');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SWIFT_CHARGE = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SWIFT_CHG'];
        amt = document.MAINFORM.CPYT_DR_AMT_DRCCY.value;
        ccy = document.MAINFORM.CPYT_DR_CCY.value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(sRef) {
    try {

        document.MAINFORM.C_MAIN_REF.value = sRef;
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = sRef;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_ASSGN_MULTI_ADD = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CPYT_BUY_RATE_Display = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CPYT_DR_AMT_DRCCY = function() {
    try {

        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = document.MAINFORM.DB_CALC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CPYT_N_PAY_AMT = function() {
    try {

        document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CPYT_PAY_ADV_MSG = function() {
    try {

        var valueArray; // Utility Auto Fix Comments
        /*
if(SYS_MODULE_NAME == 'IMCO' || SYS_MODULE_NAME == 'EXCO'){
	valueArray=['MT103','MT202','MT202COV','MT499','MT999','Mail','None'];
	descArray=['MT103','MT202','MT202COV','MT499','MT999','Mail','None'];
}
else{
	valueArray=['MT103','MT202','MT202COV','MT799','MT999','Mail','None'];
	descArray=['MT103','MT202','MT202COV','MT799','MT999','Mail','None'];
}	
SYS_RebuildOptions('CPYT_PAY_ADV_MSG',valueArray,descArray);
*/
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CPYT_PAY_CCY = function() {
    try {

        document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CPYT_CR_CCY.value;
        EEHtml.fireEvent(document.MAINFORM.CPYT_PAY_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_DR_MULTI_ADD = function() {
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
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Success58 = function() {
    try {

        alert("Beneficiary Institution BIC Code is " + document.MAINFORM.X202_BENE_BKSW_58A.value.substring(0, 8));
        document.MAINFORM.X202_TAG_58A.value = 'A';
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_X103_56A_1_IBAN = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ACC_BKNM_57A.value != '' && document.MAINFORM.X103_ACCBKADD1_57A.value != '') {
            //sSQLWhere = "PARTY_NM = '" + document.MAINFORM.X103_ACC_BKNM_57A.value + "' AND CITY = '" + document.MAINFORM.X103_ACCBKADD1_57A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "NAT_ID";
            //sMappingList = "X103_56_NAT_ID";
            SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_X103_56A_1_IBAN_38', '1', true);
            document.MAINFORM.X103_ACC_BKACNO57A.value = document.MAINFORM.X103_56_NAT_ID.value;
            document.MAINFORM.X103_TAG_57A.value = "C";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_X103_59A_1_IBAN = function() {
    try {

        var bCNTY_CODE; // Utility Auto Fix Comments
        var bIBAN; // Utility Auto Fix Comments
        var bIDENPOSI; // Utility Auto Fix Comments
        var bNATLEN; // Utility Auto Fix Comments
        var bNAT_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sFieldList1; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sMappingList1; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sSQLWhere1; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var sTableName1; // Utility Auto Fix Comments
        bIBAN = document.MAINFORM.X103_BENE_IBAN.value;
        ////bCNTY_CODE = bIBAN.substr(0, 2);

        //sSQLWhere = "C_IBAN_COUNTRY = '" + bCNTY_CODE + "'";
        //sTableName = "BICIS";
        //sFieldList = "I_BANK_IDENPOSI;I_IBAN_NATLEN;I_IBAN_LENGTH";
        //sMappingList = "X103_59A_BANK_IDENPOSI;X103_59A_IBAN_NATLEN;X103_59A_IBAN_LENGTH";
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_X103_59A_1_IBAN_39', '1', true);

        if (!SYF_PYMT_CHK_X103_59A_1_IBAN_VALID()) {
            return;
        }

        bIDENPOSI = document.MAINFORM.X103_59A_BANK_IDENPOSI.value - 1;
        bNATLEN = document.MAINFORM.X103_59A_IBAN_NATLEN.value;
        //bNAT_ID = bIBAN.substr(bIDENPOSI, bNATLEN);
        //Edit by Sunny

        //sSQLWhere1 = "C_ISO_CNTY_CODE = '" + bCNTY_CODE + "' AND C_IBAN_NAT_ID = '" + bNAT_ID + "'";
        //sTableName1 = "IBAN_PLUS";
        //sFieldList1 = "C_IBAN_BIC";
        //sMappingList1 = "X103_56A_BENE_BKBIC";
        SYS_GetTableDataByRule_S('SYF_PYMT_BICPlusIBAN_SYF_PYMT_X103_59A_1_IBAN_40', '1', true);
        //Add by Sunny 20130608
        if (document.MAINFORM.X103_56A_BENE_BKBIC.value != '') {
            alert("IBAN NATIONAL ID is correct! It is " + bNAT_ID);
            alert("IBAN Country code is correct! It is " + bCNTY_CODE);
            alert("Beneficiary bank BIC is " + document.MAINFORM.X103_56A_BENE_BKBIC.value);
            document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_56A_BENE_BKBIC.value;
            EEHtml.fireEvent(document.MAINFORM.X103_ACC_BKSW_57A, 'onchange');
            alert("The Beneficiary IBAN is valid!");
        }

        SYF_PYMT_CHK_X103_59A_1_IBAN_MATCH();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_X202_TAG_58A_1_IBAN = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //Edit by Sunny

        if (document.MAINFORM.X202_BENE_BKNM_58A.value != '' && document.MAINFORM.X202BENEBKADD1_58A.value != '') {
            //sSQLWhere = "PARTY_NM = '" + document.MAINFORM.X202_BENE_BKNM_58A.value + "' AND CITY = '" + document.MAINFORM.X202BENEBKADD1_58A.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "SW_ADD";
            //sMappingList = "X202_BENE_BKSW_58A";
            SYS_GetTableDataByRule('SYF_PYMT_BICPlusIBAN_SYF_PYMT_X202_TAG_58A_1_IBAN_41', '1', 'SYF_PYMT_Success58', 'SYF_PYMT_Fail58', 'false');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_FOR_103 = function() {
    try {

        if (EEHtml.getElementById('CPYT_PAY_ADV_MSG').options[2].selected) {
            document.MAINFORM.X102_TAG_119.value = 'STP';
            document.MAINFORM.X103_TAG_54A.value = 'A';
            SYT_ChangeFldClass(document.MAINFORM.X103_TAG_54A, 'P');
            document.MAINFORM.X103_TAG_56A.value = 'A';
            SYT_ChangeFldClass(document.MAINFORM.X103_TAG_56A, 'P');
            document.MAINFORM.X103_TAG_57A.value = 'A';
            SYT_ChangeFldClass(document.MAINFORM.X103_TAG_57A, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_ENV_CONT_77T, 'B');
        } else {

            document.MAINFORM.X102_TAG_119.value = '';
            SYT_ChangeFldClass(document.MAINFORM.X103_ENV_CONT_77T, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_capital2digits = function(ch) {
    try {

        var capitals; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (i = 0; i < capitals.length; ++i) { // Utility Auto Fix Comments
            if (ch == capitals.charAt(i)) {
                break;
            }
            return i + 10;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_mod97 = function(digit_string) {
    try {

        var i; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        m = 0;
        for (i = 0; i < digit_string.length; ++i) {
            m = (m * 10 + parseInt(digit_string.charAt(i), 0)) % 97;
        }
        return m;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChecksumIBAN = function(iban) {
    try {

        var bban; // Utility Auto Fix Comments
        var ch; // Utility Auto Fix Comments
        var checksum; // Utility Auto Fix Comments
        var code; // Utility Auto Fix Comments
        var digits; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        code = iban.substring(0, 2);
        checksum = iban.substring(2, 4);
        bban = iban.substring(4);

        // Assemble digit string
        digits = "";
        for (i = 0; i < bban.length; ++i) {
            ch = bban.charAt(i).toUpperCase();
            if ("0" <= ch && ch <= "9") {
                digits += ch;
            } else {
                digits += SYF_PYMT_capital2digits(ch);
            }
        }
        for (i = 0; i < code.length; ++i) {
            ch = code.charAt(i);
            digits += SYF_PYMT_capital2digits(ch);
        }
        digits += checksum;

        // Calculate checksum
        checksum = 98 - SYF_PYMT_mod97(digits);
        return checksum == 97;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_ASSGN_AC_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_ASSGN_AC.value != '') {
            SYF_PYMT_Chk_CPYT_ASSGN_AC();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_ASSGN_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_ASSGN_ID.value != "") {
            SYS_GetCUBK('CPYT_ASSGN_ID_BIC', 'CPYT_ASSGN_ID', 'SYF_PYMT_CPYT_ASSGN_ID_Back');
        }
        /*
        else {
            //SYM_PYMT_Clr_Ben_Cust();
        }
        */
        document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.CPYT_ASSGN_ID.value;
        EEHtml.fireEvent(document.MAINFORM.X103_BENECU_ID_59A, 'onchange');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_ASSGN_ID_BTN_onclick = function(event) {
    try {
        var retvalue; // Utility Auto Fix Comments
        if (document.MAINFORM.CPYT_ASSGN_NM.value != '' && document.MAINFORM.CPYT_ASSGN_ADD1.value != '' && document.MAINFORM.CPYT_ASSGN_ADD2.value != '' && document.MAINFORM.CPYT_ASSGN_ADD3.value != '') {
            //SYS_InqCUBK_Sql('CPYT_ASSGN_ID_BIC', SYT_SYS_buildSQLCond(new Array('SWF_FMT_NM', 'CPYT_ASSGN_NM', 'SWIFT_FMT_ADD1', 'CPYT_ASSGN_ADD1', 'SWIFT_FMT_ADD2', 'CPYT_ASSGN_ADD2', 'SWIFT_FMT_ADD3', 'CPYT_ASSGN_ADD3')));
            SYS_InqCUBK_byCondition('CPYT_ASSGN_ID_BIC', '1');
        } else {
            retvalue = window.confirm("Are you sure you wish to continue,event.currentTarget look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('CPYT_ASSGN_ID_BIC');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_ASSGN_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_CPYT_ASSGN_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_ASSGN_OREDER_POST_onchange = function(event) {
    try {
        SYF_PYMT_Cal_CPYT_ASSGN_OREDER_POST();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_AC_onclick = function(event) {
    try {
        if (document.MAINFORM.CPYT_ASSGN_ID.value == '') {
            SYS_InqCUBK('CPYT_CR_BK_AC');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_AC_TYPE_onchange = function(event) {
    try {
        var oACType; // Utility Auto Fix Comments
        var oIBAN; // Utility Auto Fix Comments
        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == "IBAN") {
            document.MAINFORM.CPYT_ASSGN_AC.className = "CHAR_M";
            oIBAN = document.MAINFORM.CPYT_ASSGN_AC;
            oACType = document.MAINFORM.CPYT_CR_AC_TYPE;
            SYT_IBANValidation(oIBAN, oACType); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.CPYT_ASSGN_AC.className = "CHAR_O";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_AMT_CRCCY_onchange = function(event) {
    try {
        document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        SYF_PYMT_Cal_CPYT_STL_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Set_CPYT_BUY_RATE_Display();
        SYF_PYMT_Cal_Principle_Amount();

        document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CR_CALC_AMT.value;
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CR_CALC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_VAL_DATE_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_VALUE_DT_32A();
        SYF_PYMT_Chk_ValueDates('CPYT_CR_VAL_DATE');
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_AC_onclick = function(event) {
    try {
        if (document.MAINFORM.CPYT_DR_ID.value == '') {
            SYS_InqCUBK('CPYT_DR_AC_103Clean');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_AMT_DRCCY_onchange = function(event) {
    try {
        SYF_PYMT_Cal_DR_CHG_AMT();
        SYF_PYMT_PYMT_Charge();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Set_CPYT_BUY_RATE_Display();
        SYF_PYMT_Cal_Principle_Amount();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_COR_MED_onchange = function(event) {
    try {
        SYF_PYMT_ChangClass_CPYT_DR_EMAIL_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_FAX_NO();
        SYF_PYMT_ChangClass_CPYT_DR_MAIL_ADD();
        SYF_PYMT_ChangClass_CPYT_DR_TEL_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_DR_ID.value != "") {
            //Edit by Sunny 20130607
            SYS_GetCUBK('CPYT_DR_ID_BIC', 'CPYT_DR_ID', 'SYF_PYMT_CPYT_DR_ID_Back');
        } else {
            SYF_PYMT_Clr_Ord_Cust();
        }
        document.MAINFORM.X103_ORDCU_ID_50A.value = document.MAINFORM.CPYT_DR_ID.value;
        EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_COR_MED, 'onchange');
        Chg.Screen.setLocalCust(document.MAINFORM.CPYT_DR_ID.value, document.MAINFORM.CPYT_DR_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_ID_BTN_onclick = function(event) {
    try {
        var retvalue; // Utility Auto Fix Comments
        if (document.MAINFORM.CPYT_DR_NAME.value != '' && document.MAINFORM.CPYT_DR_ADD1.value != '' && document.MAINFORM.CPYT_DR_ADD2.value != '' && document.MAINFORM.CPYT_DR_ADD3.value != '') {
            //SYS_InqCUBK_Sql('CPYT_DR_ID_BIC', SYT_SYS_buildSQLCond(new Array('SWF_FMT_NM', 'CPYT_DR_NAME', 'SWIFT_FMT_ADD1', 'CPYT_DR_ADD1', 'SWIFT_FMT_ADD2', 'CPYT_DR_ADD2', 'SWIFT_FMT_ADD3', 'CPYT_DR_ADD3')));
            SYS_InqCUBK_byCondition('CPYT_DR_ID_BIC', '1');
        } else {
            retvalue = window.confirm("Are you sure you wish to continue,event.currentTarget look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('CPYT_DR_ID_BIC');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_CPYT_DR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_ORDER_POST_onchange = function(event) {
    try {
        SYF_PYMT_Cal_CPYT_DR_ORDER_POST();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_VAL_DATE_onchange = function(event) {
    try {
        SYF_PYMT_Chk_ValueDates('CPYT_DR_VAL_DATE');
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_N_PAY_AMT_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_SETT_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_ADV_MSG_onchange = function(event) {
    try {
        SYF_PYMT_ChangClass_CPYT_ASSGN_NM();
        switch (document.MAINFORM.CPYT_PAY_ADV_MSG.value) {
            case "MT103":
                SYF_PYMT_Enable103();
                SYF_PYMT_Disable202();
                SYT_ChangeFldClass(document.MAINFORM.X103_SETT_AMT_32A, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X103_INSTR_AMT_33B, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGCCY71F, 'O');
                break;
            case "MT202":
                SYF_PYMT_Disable103();
                SYF_PYMT_Enable202();
                SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'O');
                break;
            case "MT202COV":
                SYF_PYMT_Enable103();
                SYF_PYMT_Enable202();
                SYT_ChangeFldClass(document.MAINFORM.X103_SETT_AMT_32A, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X103_INSTR_AMT_33B, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGCCY71F, 'O');
                break;
            case "MT499":
            case "MT999":
            case "Mail":
            case "None":
                SYF_PYMT_Disable103();
                SYF_PYMT_Disable202();
                break;
        }
        SYF_PYMT_FOR_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_SETT_CCY_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);

        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, 'O');
        }

        SYF_PYMT_Cal_Principle_Amount();
        SYF_PYMT_Cal_X103_SETT_AMT_32A();
        SYF_PYMT_Cal_X103_SETT_CCY_32A();
        SYF_PYMT_Cal_X103_INSTR_AMT_33B();
        SYF_PYMT_Cal_X103_INSTR_CCY_33B();


        document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, document.MAINFORM.CPYT_CR_AMT_CRCCY.value);
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CR_CALC_AMT.value;
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CR_CALC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, document.MAINFORM.DB_CALC_AMT.value);

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, 'O');
        }
        SYF_PYMT_Cal_Principle_Amount();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_50_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_50_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_51_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_52_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_53_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_54_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_56_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_57_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_57_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_59_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_59_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        SYF_PYMT_X103_56A_1_IBAN();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ACC_BKACNO57A.value != '') {
            if (document.MAINFORM.AC_WT_INST_CNTY_CODE.value == '') {
                alert('Please ensure that Account With Institution Country Code is entered before inputing a Bank Payment Code');
                document.MAINFORM.X103_ACC_BKACNO57A.value = '';
                document.MAINFORM.AC_WT_INST_CNTY_CODE.focus();
            } else {
                SYS_GetDataBySSS('X103_ACC_BKACNO57A_CHKMORE', 'X103_ACC_BKACNO57A;AC_WT_INST_CNTY_CODE;CHIPFED');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ACC_BKID_57A.value == '') {
            document.MAINFORM.X103_57_NOTES.value = '';
            document.MAINFORM.X103_ACC_BKSW_57A.value = "";
            document.MAINFORM.X103_ACC_BKNM_57A.value = "";
            document.MAINFORM.X103_ACCBKADD1_57A.value = "";
            document.MAINFORM.X103_ACCBKADD2_57A.value = "";
            document.MAINFORM.X103_ACCBKADD3_57A.value = "";
            document.MAINFORM.X103_ACC_BKACNO57A.value = "";
            SYF_PYMT_Cal_X103_ACC_BKID_57A_Back();
        } else {
            //SYS_GetCUBK('X103_ACC_BKID_57A','X103_ACC_BKID_57A','SYF_PYMT_Cal_X103_ACC_BKID_57A_Back');
            //Edit by Sunny 20130607
            //SYF_PYMT_Bene_BK_BIC();
            //SYS_GetCUBK('X103_ACC_BKID_57A','X103_ACC_BKID_57A','SYF_PYMT_Cal_X103_ACC_BKID_57A_Back','','false');
            SYS_GetCUBK('X103_ACC_BKID_57A_BIC', 'X103_ACC_BKID_57A', 'SYF_PYMT_Cal_X103_ACC_BKID_57A_Back', '', 'false');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        SYF_PYMT_X103_56A_1_IBAN();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_57A_TAG();
        SYF_PYMT_SQL_X103_ACC_BKSW_57A_ADD();
        SYF_PYMT_CHK_X103_59A_1_IBAN_MATCH(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value == '') {
            document.MAINFORM.X103_B2_NOTES.value = '';
            document.MAINFORM.X103_ADV_BKSW_B2.value = "";
            document.MAINFORM.X103_ADV_BKNM_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
            document.MAINFORM.X103_ACC_BKACNO57A.value = "";
            SYF_PYMT_Cal_X103_ADV_BKID_B2_Back();
        } else {
            //Edit by Sunny 20130607
            //SYS_GetCUBK('X103_ADV_BKID_B2','X103_ADV_BKID_B2','SYF_PYMT_Cal_X103_ADV_BKID_B2_Back');
            SYS_GetCUBK('X103_ADV_BKID_B2_BIC', 'X103_ADV_BKID_B2', 'SYF_PYMT_Cal_X103_ADV_BKID_B2_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_B2_TAG();
        SYF_PYMT_SQL_X103_ADV_BKSW_B2_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X103_B2_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                //Edit by Sunny 20130607
                //SYS_GetCUBK_S('X103_BENECU_ID_59A','X103_BENECU_ID_59A');
                SYS_GetCUBK_S('X103_BENECU_ID_59A_BIC', 'X103_BENECU_ID_59A');
            } else {
                //SYS_GetCUBK_S('X103_BENECU_ID_BANK_59A','X103_BENECU_ID_59A');
                SYS_GetCUBK_S('X103_BENECU_ID_BANK_59A_BIC', 'X103_BENECU_ID_59A');
                SYF_PYMT_Cal_X103_TAG_59A();
            }
            if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103") {
                SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'O');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'P');
            }
        } else {
            document.MAINFORM.X103_BENECU_NM_59A.value = "";
            document.MAINFORM.X103BENECUADD1_59A.value = "";
            document.MAINFORM.X103BENECUADD2_59A.value = "";
            document.MAINFORM.X103BENECUADD3_59A.value = "";
            document.MAINFORM.X103_BENECU_BKSW_59.value = "";
            document.MAINFORM.X103_TAG_59A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_59_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_OP_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD1_59A.value = "";
        document.MAINFORM.X103BENECUADD2_59A.value = "";
        document.MAINFORM.X103BENECUADD3_59A.value = "";
        document.MAINFORM.X103_59_NOTES.value = "";
        document.MAINFORM.X103_BENECUACNO59A.value = "";
        document.MAINFORM.X103_BENECU_BKSW_59.value = "";
        document.MAINFORM.X103_BENECU_ID_59A.value = "";
        document.MAINFORM.X103_BENECU_NM_59A.value = "";
        document.MAINFORM.X103_TAG_59A.value = "";
        if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_BKSW_59, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_BKSW_59, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENE_IBAN_onchange = function(event) {
    try {
        SYF_PYMT_X103_59A_1_IBAN();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BKOP_CODE_23B_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_BKOP_CODE_23B.value == 'SSTD' || document.MAINFORM.X103_BKOP_CODE_23B.value == 'SPAY') {
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE_23E, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE_23E, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_DET_CHG_71A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_DET_CHG_71A.value == "SHA") {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CHG_FROM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'M');
        } else if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CHG_FROM, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CHG_FROM, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value == '') {
            document.MAINFORM.X103_56_NOTES.value = '';
            document.MAINFORM.X103_MEDI_BKSW_56A.value = "";
            document.MAINFORM.X103_MEDI_BKNM_56A.value = "";
            document.MAINFORM.X103MEDIBKADD1_56A.value = "";
            document.MAINFORM.X103MEDIBKADD2_56A.value = "";
            document.MAINFORM.X103MEDIBKADD3_56A.value = "";
            document.MAINFORM.X103_MEDIBKACNO56A.value = "";
            SYF_PYMT_Cal_X103_MEDI_BKID_56A_Back();
        } else {
            SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', 'SYF_PYMT_Cal_X103_MEDI_BKID_56A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_56A_TAG();
        SYF_PYMT_SQL_X103_MEDI_BKSW_56A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        /*
if (document.MAINFORM.X103_TAG_50A.value=="A"||document.MAINFORM.X103_TAG_50A.value=="K"){
//SYT_CHK_AC_NO(event.currentTarget);
}
*/
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            if ("Bank" == document.MAINFORM.X103_ORDCU_ID_OP.value) {
                //Edit by Sunny 20130607
                //SYS_GetCUBK_S('X103_ORDCU_ID_50A','X103_ORDCU_ID_50A');
                SYS_GetCUBK_S('X103_ORDCU_ID_50A_BIC', 'X103_ORDCU_ID_50A');
            } else {
                //SYS_GetCUBK_S('X103_ORDCU_CUST_ID_50A','X103_ORDCU_ID_50A')
                SYS_GetCUBK_S('X103_ORDCU_CUST_ID_50A_BIC', 'X103_ORDCU_ID_50A'); // Utility Auto Fix Comments
            }
            if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103") {
                SYT_ChangeFldClass(document.MAINFORM.X103_ID_50_BTN, 'O');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.X103_ID_50_BTN, 'P');
            }
        } else {
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            document.MAINFORM.X103_ORDCUADD1_50A.value = "";
            document.MAINFORM.X103_ORDCUADD2_50A.value = "";
            document.MAINFORM.X103_ORDCUADD3_50A.value = "";
            document.MAINFORM.X103_TAG_50A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_ID_50_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_OP_onchange = function(event) {
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
        SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, 'P');
        if ("Customer" == document.MAINFORM.X103_ORDCU_ID_OP.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        SYF_PYMT_SQL_X103_ORDCU_SW_50A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ORD_BKID_52A.value == '') {
            document.MAINFORM.X103_52_NOTES.value = '';
            document.MAINFORM.X103_ORD_BKNM_52A.value = "";
            document.MAINFORM.X103_ORD_BKSW_52A.value = "";
            document.MAINFORM.X103_ORDBKADD1_52A.value = "";
            document.MAINFORM.X103_ORDBKADD2_52A.value = "";
            document.MAINFORM.X103_ORDBKADD3_52A.value = "";
            document.MAINFORM.X103_ORDBKACNO_52A.value = "";
            SYF_PYMT_Cal_X103_ORD_BKID_52A_Back();
        } else {
            SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A', 'SYF_PYMT_Cal_X103_ORD_BKID_52A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_52A_TAG();
        SYF_PYMT_SQL_X103_ORD_BKSW_52A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_RECCORRID_54A.value == '') {
            document.MAINFORM.X103_54_NOTES.value = '';
            document.MAINFORM.X103_RECCORRSW_54A.value = "";
            document.MAINFORM.X103_RECCORRNM_54A.value = "";
            document.MAINFORM.X103_RECCORADD154A.value = "";
            document.MAINFORM.X103_RECCORADD254A.value = "";
            document.MAINFORM.X103_RECCORADD354A.value = "";
            document.MAINFORM.X103RECCORRACNO54A.value = "";
            SYF_PYMT_Cal_X103_RECCORRID_54A_Back();
        } else {
            SYS_GetCUBK('X103_RECCORRID_54A', 'X103_RECCORRID_54A', 'SYF_PYMT_Cal_X103_RECCORRID_54A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_54A_TAG();
        SYF_PYMT_SQL_X103_RECCORRSW_54A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_SENDCORRID53A.value == '') {
            document.MAINFORM.X103_53_NOTES.value = '';
            document.MAINFORM.X103_SENDCORRNM53A.value = "";
            document.MAINFORM.X103_SENDCORRSW53A.value = "";
            document.MAINFORM.X103SENDCORADD153A.value = "";
            document.MAINFORM.X103SENDCORADD253A.value = "";
            document.MAINFORM.X103SENDCORADD353A.value = "";
            document.MAINFORM.X103SENDCORACNO53A.value = "";
            SYF_PYMT_Cal_X103_SENDCORRID53A_Back();
        } else {
            SYS_GetCUBK('X103_SENDCORRID53A', 'X103_SENDCORRID53A', 'SYF_PYMT_Cal_X103_SENDCORRID53A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_53A_TAG();
        SYF_PYMT_SQL_X103_SENDCORRSW53A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_SEND_BKID_51A.value == '') {
            document.MAINFORM.X103_51_NOTES.value = '';
            document.MAINFORM.X103_SEND_BKSW_51A.value = "";
            document.MAINFORM.X103_SEND_BKNM_51A.value = "";
            document.MAINFORM.X103SENDBKADD1_51A.value = "";
            document.MAINFORM.X103SENDBKADD2_51A.value = "";
            document.MAINFORM.X103SENDBKADD3_51A.value = "";
            document.MAINFORM.X103_SENDBKACNO51A.value = "";
            SYF_PYMT_Cal_X103_SEND_BKID_51A_Back();
        } else {
            SYS_GetCUBK('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A', 'SYF_PYMT_Cal_X103_SEND_BKID_51A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X103_TAG_51A_TAG();
        SYF_PYMT_SQL_X103_SEND_BKSW_51A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TAG_50A_onchange = function(event) {
    try {
        var ACNO_50A_FST; // Utility Auto Fix Comments
        var ACNO_50A_LEN; // Utility Auto Fix Comments
        if ("A" == document.MAINFORM.X103_TAG_50A.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, 'O');
        }
        if ("F" == document.MAINFORM.X103_TAG_50A.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                ACNO_50A_FST = document.MAINFORM.X103_ORDCUACNO_50A.value.substr(0, 1);
                ACNO_50A_LEN = document.MAINFORM.X103_ORDCUACNO_50A.value.length;
                if (ACNO_50A_FST == "/") {
                    document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCUACNO_50A.value.substr(1, ACNO_50A_LEN - 1);
                }
            }
        }
        if ("K" == document.MAINFORM.X103_TAG_50A.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        }
        if ("" == document.MAINFORM.X103_TAG_50A.value) {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_SW_50A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202BENEBKADD1_58A_onchange = function(event) {
    try {
        SYF_PYMT_X202_TAG_58A_1_IBAN();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_53_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_54_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_57_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_58_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value == '') {
            document.MAINFORM.X202_57_NOTES.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = "";
            document.MAINFORM.X202_ACC_BKNM_57A.value = "";
            document.MAINFORM.X202_ACCBKADD1_57A.value = "";
            document.MAINFORM.X202_ACCBKADD2_57A.value = "";
            document.MAINFORM.X202_ACCBKADD3_57A.value = "";
            document.MAINFORM.X202_ACC_BKACNO57A.value = "";
            SYF_PYMT_Cal_X202_ACC_BKID_57A_Back();
        } else {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYF_PYMT_Cal_X202_ACC_BKID_57A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_57A_TAG();
        SYF_PYMT_SQL_X202_ACC_BKSW_57A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value == '') {
            document.MAINFORM.X202_B2_NOTES.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = "";
            document.MAINFORM.X202_ADV_BKNM_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD3_B2.value = "";
            SYF_PYMT_Cal_X202_ADV_BKID_B2_Back();
        } else {
            SYS_GetCUBK('X202_ADV_BKID_B2_BIC', 'X202_ADV_BKID_B2', 'SYF_PYMT_Cal_X202_ADV_BKID_B2_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_B2_TAG();
        SYF_PYMT_SQL_X202_ADV_BKSW_B2_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_B2_ORDER_NO_onchange = function(event) {
    try {
        SYF_PYMT_Cal_X202_B2_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value == '') {
            document.MAINFORM.X202_58_NOTES.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = "";
            document.MAINFORM.X202_BENE_BKNM_58A.value = "";
            document.MAINFORM.X202BENEBKADD1_58A.value = "";
            document.MAINFORM.X202BENEBKADD2_58A.value = "";
            document.MAINFORM.X202BENEBKADD3_58A.value = "";
            document.MAINFORM.X202_BENEBKACNO58A.value = "";
            SYF_PYMT_Cal_X202_BENE_BKID_58A_Back();
        } else {
            SYS_GetCUBK('X202_BENE_BKID_58A_BIC', 'X202_BENE_BKID_58A', 'SYF_PYMT_Cal_X202_BENE_BKID_58A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKNM_58A_onchange = function(event) {
    try {
        SYF_PYMT_X202_TAG_58A_1_IBAN();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_58A_TAG();
        SYF_PYMT_SQL_X202_BENE_BKSW_58A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value == '') {
            document.MAINFORM.X202_56_NOTES.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = "";
            document.MAINFORM.X202_MEDI_BKNM_56A.value = "";
            document.MAINFORM.X202MEDIBKADD1_56A.value = "";
            document.MAINFORM.X202MEDIBKADD2_56A.value = "";
            document.MAINFORM.X202MEDIBKADD3_56A.value = "";
            document.MAINFORM.X202_MEDIBKACNO56A.value = "";
            SYF_PYMT_Cal_X202_MEDI_BKID_56A_Back();
        } else {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYF_PYMT_Cal_X202_MEDI_BKID_56A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_56A_TAG();
        SYF_PYMT_SQL_X202_MEDI_BKSW_56A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value == '') {
            document.MAINFORM.X202_52_NOTES.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = "";
            document.MAINFORM.X202_ORDBK_NM_52A.value = "";
            document.MAINFORM.X202_ORDBKADD1_52A.value = "";
            document.MAINFORM.X202_ORDBKADD2_52A.value = "";
            document.MAINFORM.X202_ORDBKADD3_52A.value = "";
            document.MAINFORM.X202_ORDBKACNO_52A.value = "";
            SYF_PYMT_Cal_X202_ORDBK_ID_52A_Back();
        } else {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_PYMT_Cal_X202_ORDBK_ID_52A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_52A_TAG();
        SYF_PYMT_SQL_X202_ORDBK_SW_52A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value == '') {
            document.MAINFORM.X202_54_NOTES.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = "";
            document.MAINFORM.X202_RECCORRNM_54A.value = "";
            document.MAINFORM.X202_RECCORADD154A.value = "";
            document.MAINFORM.X202_RECCORADD254A.value = "";
            document.MAINFORM.X202_RECCORADD354A.value = "";
            document.MAINFORM.X202RECCORRACNO54A.value = "";
            SYF_PYMT_Cal_X202_RECCORRID_54A_Back();
        } else {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYF_PYMT_Cal_X202_RECCORRID_54A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRSW_54A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_54A_TAG();
        SYF_PYMT_SQL_X202_RECCORRSW_54A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value == '') {
            document.MAINFORM.X202_53_NOTES.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = "";
            document.MAINFORM.X202_SENDCORRNM53A.value = "";
            document.MAINFORM.X202SENDCORADD153A.value = "";
            document.MAINFORM.X202SENDCORADD253A.value = "";
            document.MAINFORM.X202SENDCORADD353A.value = "";
            document.MAINFORM.X202SENDCORACNO53A.value = "";
            SYF_PYMT_Cal_X202_SENDCORRID53A_Back();
        } else {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYF_PYMT_Cal_X202_SENDCORRID53A_Back');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRSW53A_onchange = function(event) {
    try {
        SYF_PYMT_Chk_X202_TAG_53A_TAG();
        SYF_PYMT_SQL_X202_SENDCORRSW53A_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_PYMT_BICPlusIBAN.js", e);
    }
}