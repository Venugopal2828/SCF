"path:SCRN/DO/103ForClean.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Chk_X103_BENECUACNO59A_IBAN = function() {
    try {
        var cresto; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nInc; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sCode; // Utility Auto Fix Comments
        var sVaIban; // Utility Auto Fix Comments
        sBenCustAcNO = document.MAINFORM.X103_BENECUACNO59A.value; // Utility Auto Fix Comments
        if (sBenCustAcNO.length == 0) {
            return;
        }
        if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
            sCode = sBenCustAcNO.toUpperCase().replace(/\W*/g, ''); //remove anything that is not an alphanumeric word character
            sCntyCode = sCode.substring(0, 2);
            sVaIban = sCode.substring(4);
            sVaIban = sVaIban + sCode.substring(0, 4);
            sTempIban = "";
            for (i = 0; i < sVaIban.length; i++) {
                sTempIban = sTempIban + Get_IbanNumFromAlpha(sVaIban.charAt(i));
            }
            //routine that checks the conformity of the iban string
            i = 0; // Utility Auto Fix Comments
            nInc = 9;
            cresto = "";

            while (sTempIban.substring(i, nInc + i).length > 0) {
                stringa = cresto + sTempIban.substring(i, nInc + i);
                i = i + nInc;
                cresto = stringa % 97;
                nInc = 7;
            }
            //IBAN conformity test end

            if (cresto != 1) {
                alert("The IBAN cannot be validated as some of the elements are wrong.");
                //document.MAINFORM.ORIG_IBAN_VALID.value = 'THE ACCOUNT NUMBER CANNOT BE VALIDATED AS AN IBAN';
                updateTrxHistory();
                document.MAINFORM.BEN_CUST_ACCT_NO.value = '';
                EnableAWB();
                CLR_ALL('Clear103');
            } else {
                document.MAINFORM.ORIG_IBAN_VALID.value = '';
                document.MAINFORM.ACCT_TYPE.value = "IBAN";
                updateTrxHistory();
                getBankIdent(countryCode, ICode);
            }
        } else {
            return;
        }
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_103_Banks = function(sForceClr103) {
    try {
        document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        //202 snd id


        if (sForceClr103 != null) {
            document.MAINFORM.AC_WT_INST_CNTY_CODE.value = "";
            document.MAINFORM.AC_WT_INST_CNTY_NM.value = "";
            document.MAINFORM.X103_ACC_BKID_57A.value = "";
            Clr_Acct_With_Ins();
        }
        Clr_Rec_Bank();
        Clr_Int_Ins();
        Clr_Ord_Ins();
        Clr_Send_Corres(); // Utility Auto Fix Comments
        Clr_Rec_Corres(); // Utility Auto Fix Comments
        Clr_Send_Ins(); // Utility Auto Fix Comments
        Clr_Thd_Reim_Ins();
        Clr_202_Rec_Bank();
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Acct_With_Ins = function() {
    try {
        document.MAINFORM.X103_ACC_BKID_57A.value = "";
        document.MAINFORM.X103_ACC_BKNM_57A.value = "";
        document.MAINFORM.X103_ACCBKADD1_57A.value = "";
        document.MAINFORM.X103_ACCBKADD2_57A.value = "";
        document.MAINFORM.X103_ACCBKADD3_57A.value = "";
        document.MAINFORM.X103_ACC_BKACNO57A.value = "";
        document.MAINFORM.X103_ACC_BKSW_57A.value = "";
        document.MAINFORM.X103_TAG_57A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Ben_Cust = function() {
    try {
        document.MAINFORM.X103_BENECU_ID_59A.value = "";
        document.MAINFORM.X103_BENECU_NM_59A.value = "";
        document.MAINFORM.X103BENECUADD1_59A.value = "";
        document.MAINFORM.X103BENECUADD2_59A.value = "";
        document.MAINFORM.X103BENECUADD3_59A.value = "";
        document.MAINFORM.X103_BENECU_SW_59A.value = "";
        document.MAINFORM.X103_BENECUACNO59A.value = "";
        document.MAINFORM.X103_TAG_59A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Int_Ins = function() {
    try {
        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        document.MAINFORM.X103_MEDI_BKNM_56A.value = "";
        document.MAINFORM.X103MEDIBKADD1_56A.value = "";
        document.MAINFORM.X103MEDIBKADD2_56A.value = "";
        document.MAINFORM.X103MEDIBKADD3_56A.value = "";
        document.MAINFORM.X103_MEDI_BKSW_56A.value = "";
        document.MAINFORM.X103_MEDIBKACNO56A.value = "";
        document.MAINFORM.X103_TAG_56A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Ord_Cust = function() {
    try {
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Ord_Ins = function() {
    try {
        document.MAINFORM.X103_ORD_BKID_52A.value = "";
        document.MAINFORM.X103_ORD_BKNM_52A.value = "";
        document.MAINFORM.X103_ORDBKADD1_52A.value = "";
        document.MAINFORM.X103_ORDBKADD2_52A.value = "";
        document.MAINFORM.X103_ORDBKADD3_52A.value = "";
        document.MAINFORM.X103_ORDBKACNO_52A.value = "";
        document.MAINFORM.X103_ORD_BKSW_52A.value = "";
        document.MAINFORM.X103_TAG_52A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Orig_Routing_Banks = function() {
    try {
        document.MAINFORM.ORIG_103_MEDI_BKID.value = "";
        document.MAINFORM.ORIG_103_REC_BKID.value = "";
        document.MAINFORM.ORIG_202SENDCORRID.value = "";
        document.MAINFORM.ORIG_202_REC_BKID.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Rec_Bank = function() {
    try {
        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        document.MAINFORM.X103_ADV_BKNM_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
        document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
        document.MAINFORM.X103_ADV_BKSW_B2.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Rec_Corres = function() {
    try {
        document.MAINFORM.X103_RECCORRID_54A.value = "";
        document.MAINFORM.X103_RECCORRNM_54A.value = "";
        document.MAINFORM.X103_RECCORADD154A.value = "";
        document.MAINFORM.X103_RECCORADD254A.value = "";
        document.MAINFORM.X103_RECCORADD354A.value = "";
        document.MAINFORM.X103_RECCORRSW_54A.value = "";
        document.MAINFORM.X103RECCORRACNO54A.value = "";
        document.MAINFORM.X103_TAG_54A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Send_Corres = function() {
    try {
        document.MAINFORM.X103_SENDCORRID53A.value = "";
        document.MAINFORM.X103_SENDCORRNM53A.value = "";
        document.MAINFORM.X103SENDCORADD153A.value = "";
        document.MAINFORM.X103SENDCORADD253A.value = "";
        document.MAINFORM.X103SENDCORADD353A.value = "";
        document.MAINFORM.X103SENDCORACNO53A.value = "";
        document.MAINFORM.X103_SENDCORRSW53A.value = "";
        document.MAINFORM.X103_TAG_53A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Send_Ins = function() {
    try {
        document.MAINFORM.X103_SEND_BKID_51A.value = "";
        document.MAINFORM.X103_SEND_BKNM_51A.value = "";
        document.MAINFORM.X103SENDBKADD1_51A.value = "";
        document.MAINFORM.X103SENDBKADD2_51A.value = "";
        document.MAINFORM.X103SENDBKADD3_51A.value = "";
        document.MAINFORM.X103_SEND_BKSW_51A.value = "";
        document.MAINFORM.X103_SENDBKACNO51A.value = "";
        document.MAINFORM.X103_TAG_51A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Clr_Thd_Reim_Ins = function() {
    try {
        document.MAINFORM.X103_TRDREIMID_55A.value = "";
        document.MAINFORM.X103_TRDREIMNM_55A.value = "";
        document.MAINFORM.X103TRDREIMADD155A.value = "";
        document.MAINFORM.X103TRDREIMADD255A.value = "";
        document.MAINFORM.X103TRDREIMADD355A.value = "";
        document.MAINFORM.X103_TRDREIMSW_55A.value = "";
        document.MAINFORM.X103TRDREIMACNO55A.value = "";
        document.MAINFORM.X103_TAG_55A.value = "";
        return;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.Get_BankIdent = function(sCntyCode, sChkCode) {
    try {
        var sSortCode; // Utility Auto Fix Comments
        switch (sCntyCode) {
            case 'AD': //ANDORRA *
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'AT': //AUSTRIA *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'BE': //BELGIUM
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'BA': //BOSNIA HERCEGOVINA
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'BG': //BULGARIA *
                sSortCode = sChkCode.substring(4, 10);
                break;
            case 'HR': //CROATIA
                sSortCode = sChkCode.substring(4, 11);
                break;
            case 'CY': //CYPRUS
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'CZ': //CZECH REPUBLIC *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'DK': //DENMARK *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'EE': //ESTONIA
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'FO': //FAEROE ISLANDS *
                sSortCode = sChkCode.substring(6, 8);
                break;
            case 'FI': //FINLAND *
                sSortCode = sChkCode.substring(4, 10);
                break;
            case 'FR': //FRANCE, FRENCH GUIANA, FRENCH POLYNESIA, GUADELOUPE, JERSEY CHANNEL ISLANDS (FR), MARTINIQUE, MAYOTTE, MONACO, NEW CALEDONIA, REUNION,SAINT PIERRE & MIQUELON, WALLIS & FUTUNA
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'DE': //GERMANY *
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'GI': //GIBRALTAR
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'GR': //GREECE *
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'GL': //GREENLAND *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'HU': //HUNGARY *
                sSortCode = sChkCode.substring(4, 7) + sChkCode.substring(11, 12) + sChkCode.substring(7, 11);
                break;
            case 'IS': //ICELAND *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'IE': //IRELAND *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'IT': //ITALY *
                sSortCode = sChkCode.substring(5, 15);
                break;
            case 'LV': //LATVIA * - uses 4-LETTER BIC BANK CODE
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'LI': //LIECHTENSTEIN
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'LT': //LITHUANIA
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'LU': //LUXEMBOURG *
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'MK': //MACEDONIA
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'MT': //MALTA
                sSortCode = sChkCode.substring(8, 13);
                break;
            case 'MX': //MEXICO *
                sSortCode = sChkCode.substring(0, 6);
                break;
            case 'ME': //MONTENEGRO
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'NL': //NETHERLANDS
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'PL': //POLAND
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'PT': //PORTUGAL
                sSortCode = sChkCode.substring(4, 12);
                break;
            case 'RO': //ROMANIA
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'SM': //SAN MARINO
                sSortCode = sChkCode.substring(5, 15);
                break;
            case 'RS': //SERBIA
                sSortCode = sChkCode.substring(4, 7);
                break;
            case 'SK': //SLOVAKIA
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'SI': //SLOVENIA *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'ES': //SPAIN *
                sSortCode = sChkCode.substring(4, 13);
                break;
            case 'SE': //SWEDEN *
                sSortCode = sChkCode.substring(4, 8);
                break;
            case 'CH': //SWITZERLAND *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'TN': //TUNISIA *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'TR': //TURKEY *
                sSortCode = sChkCode.substring(4, 9);
                break;
            case 'GB': //UNITED KINGDOM, GUERNSEY CHANNEL ISLANDS, ISLE OF MAN, JERSEY CHANNEL ISLANDS (GB), NORTHERN IRELAND *
                sSortCode = sChkCode.substring(8, 14);
                break;
        }
        document.MAINFORM.AC_WT_INST_CNTY_CODE.value = sCntyCode;
        document.MAINFORM.X103_ACC_BKNM_57A.value = sSortCode;

        //	checkUS(); //WILL POPULATE CHIPFED HIDDEN FIELD FOR GetAcct103ID SSS 
        //	getFullCntyDetails(); //USES CUBK TO GET FULL COUNTRY DETAILS
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X103_EXCH_RT_36.value = "1";
        document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE; // Utility Auto Fix Comments
        document.MAINFORM.CPYT_CR_VAL_DATE.value = SYS_BUSI_DATE; // Utility Auto Fix Comments
        document.MAINFORM.CPYT_DR_VAL_DATE.value = SYS_BUSI_DATE; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}

csDOScreenProto.AC_WT_INST_CNTY_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.AC_WT_INST_CNTY_CODE.value != "") {
            sCntyCode = document.MAINFORM.AC_WT_INST_CNTY_CODE.value;
            sResult = sCntyCode.toUpperCase();
            document.MAINFORM.AC_WT_INST_CNTY_CODE.value = sResult;
            SYS_GetCUBK('AC_WT_INST_CNTY_NM', 'AC_WT_INST_CNTY_NM', sSucJsFuncName, sFailJsFuncName); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_103ForClean.js", e);
    }
}