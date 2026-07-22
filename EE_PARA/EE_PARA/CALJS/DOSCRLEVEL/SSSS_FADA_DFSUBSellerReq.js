"path:SCRN/o2m/FADA_DFSUBSellerReq.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var buyerNameCUBK = '';

csDOScreenProto.APPL_LMT_AMT = function() {
    try {
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE, 'M');
        } else if (document.MAINFORM.FA_SERVICE_REQ.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE, 'O', 'N');
        } else {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE, 'P');
            document.MAINFORM.FA_LMT_TYPE.value = '';
        }

        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_buyer_lmt()) {
            return false;
        }
        if (!check_buyer_indb()) {
            return false;
        }
        if (!checkbuyer()) {
            return false;
        }
        return true;

        /*
if(!check_BUYER_LMT_DATE()){
return false;
}
*/
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        APPL_LMT_AMT();

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SYS_GetSubPageRefNo('FADA_BUY_REF', setbuyref, null, "", 'FA_PCA_REF');

        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_TEMP_AMT8.value = 1;
        document.MAINFORM.FA_APPL_LMT_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        document.MAINFORM.FA_REMI_CCY1.value = 'EUR';
        document.MAINFORM.FA_REMI_AMT1.value = 0;
        document.MAINFORM.FA_REMI_AMT1.value = SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY1.value, document.MAINFORM.FA_REMI_AMT1.value);
        exchangerate();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.amtformat = function() {
    try {
        document.MAINFORM.FA_REMI_AMT1.value = SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY1.value, document.MAINFORM.FA_REMI_AMT1.value);
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.buyer_contact_info = function() {
    try {
        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O');
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBSellerReq_buyer_contact_info_0', '1');
        } else {
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.buyer_lmt = function() {
    try {
        document.MAINFORM.FA_TEMP2.value = 0;
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            document.MAINFORM.FA_TEMP2.value = SYS_BeFloat(document.MAINFORM.FA_REMI_AMT1.value) - (SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) / (SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value) * 100));
            document.MAINFORM.FA_TEMP2.value = SYT_CCY_AMT('EUR', document.MAINFORM.FA_TEMP2.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.check_BUYER_LMT_DATE = function() {
    try {
        var strFieldList; // Utility Auto Fix Comments
        var strMappingList; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var strTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            //strTableName = 'STAT_MASTER';
            //strSQLWhere = "C_MAIN_REF='" + document.MAINFORM.FA_BUYER_ID.value + "'"
            //strFieldList = "FA_LMT_VAL_DT;FA_LMT_DUE_DT";
            //strMappingList = "FA_TEMP_IF_LMT_VAL_DT;FA_TEMP_IF_LMT_DUE_DT";
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBSellerReq_check_BUYER_LMT_DATE_1', '1');
            if (opener.document.MAINFORM.TRX_DT.value > document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value) {
                return confirm('The date is later then buyer limit due date!');
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.check_buyer_indb = function() {
    try {
        var buyerName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        document.MAINFORM.FA_TEMP3.value = '';
        buyerName = document.MAINFORM.FA_BUYER_NM.value.replace("'", "''");
        buyerNameCUBK = buyerName.replace("&", "'||'&'||'");
        //buyerName = buyerName.replace("&", "'||'&'||'");
        //strSQLWhere = "FA_SEL_ID='" + opener.document.MAINFORM.FA_SEL_ID.value + "' AND FA_BUSI_TYPE='" + document.MAINFORM.FA_BUSI_TYPE.value + "' AND FA_BUYER_NM='" + buyerName + "'AND FA_PCA_REF <> '" + document.MAINFORM.FA_PCA_REF.value + "'";
        SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBSellerReq_check_buyer_indb_2', '1', 'Y');
        if (document.MAINFORM.FA_TEMP3.value != null && document.MAINFORM.FA_TEMP3.value != '' && document.MAINFORM.FA_TEMP3.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_NM, 'This buyer already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.check_buyer_lmt = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP2.value) < 0 && document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_CheckError(document.MAINFORM.FA_TEMP2, 'The buyer limits is not enough!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.checkbuyer = function() {
    try {
        var BuyNM; // Utility Auto Fix Comments
        var BuyNMFromSCR; // Utility Auto Fix Comments
        var arrayRecord; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var status; // Utility Auto Fix Comments
        id = -1;
        arrayRecord = SYS_getEditRecord(opener.currentDo);
        if (arrayRecord) {
            id = arrayRecord[arrayRecord.length - 2];
        }

        BuyNMFromSCR = document.MAINFORM.FA_BUYER_NM.value;
        arrayvalue = SYS_getRecords(opener.currentDo);
        status = opener.currentDo.getStatue();

        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            if (id == recID) {
                BuyNM = SYS_getValFromRec(record, 'FA_BUYER_NM');
                if (BuyNM == BuyNMFromSCR) {
                    alert("Buyer Name [" + BuyNM + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.checkbuyer2 = function() {
    try {
        checkbuyer();
        check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.exchangerate = function() {
    try {
        SYS_GetExchangeRate_S(document.MAINFORM.FA_REMI_CCY1.value, SYS_LOCAL_CCY, 'Booking Rate', 'FA_TEMP_RATE');
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.getbuyerinfo = function() {
    try {
        SYS_GetCUBK('FA_DF_BUY_ID', document.MAINFORM.FA_BUYER_ID.name, 'checkbuyer');
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.setbuyref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = 'DF';
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 5);
        year = SYS_BUSI_DATE;
        year = year.substr(2, 2);
        sub = 'BUY';
        document.MAINFORM.FA_PCA_REF.value = pre + UnitCode + year + ref + sub;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        buyer_lmt();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_BUYER_CNTC_FLG_onchange = function(event) {
    try {
        buyer_contact_info();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_BUYER_ID_onchange = function(event) {
    try {
        getbuyerinfo();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_BUYER_NM_onchange = function(event) {
    try {
        checkbuyer();
        check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_REMI_AMT1_onchange = function(event) {
    try {
        amtformat();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_REMI_CCY1_onchange = function(event) {
    try {
        amtformat();
        EEHtml.fireEvent(document.MAINFORM.FA_REMI_AMT1, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}

csDOScreenProto.FA_SERVICE_REQ_onchange = function(event) {
    try {
        APPL_LMT_AMT();
        buyer_lmt();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBSellerReq.js", e);
    }
}