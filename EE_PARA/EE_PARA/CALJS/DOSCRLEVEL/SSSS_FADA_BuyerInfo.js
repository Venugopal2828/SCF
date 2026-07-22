"path:SCRN/o2m/FADA_BuyerInfo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_SBR_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.FA_SEL_ID.value = SYS_getValueFromMain('FA_SEL_ID');
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_buyer_indb()) {
            return false;
        }
        if (!checkbuyer()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        //SYS_GetSubPageRefNo_S('FADA_BUYER_REF', setDOref, '', 'DOREF', 'DOREF');

        document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain('FA_BUYER_ID');
        document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain('FA_BUYER_NM');
        document.MAINFORM.FA_SBR_CCY.value = SYS_getValueFromMain('FA_APPL_LMT_CCY');
        document.MAINFORM.FA_PCA_REF.value = SYS_getValueFromMain('C_MAIN_REF');

    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;

        document.MAINFORM.FA_SBR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_SBR_CCY.value, document.MAINFORM.FA_SBR_AMT.value);
        if (SYS_ORG_FUNCTION_NAME == "CreateSBR" || SYS_ORG_FUNCTION_NAME == "AmendSBR") {
            cal_disc();
        }


    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.buyer_contact_info = function() {
    try {
        var Fieldlist; // Utility Auto Fix Comments
        var Mappinglist; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O');
            //Fieldlist = 'FA_CONTACT_NM;FA_CONTACT_TEL2;FST_CNTC_EMAIL;FST_CNTC_FAX;FA_CONTACT_EMAIL2';
            //Mappinglist = 'FA_BUYER_CONT_NM;FA_BUYER_CONT_TEL;FA_BUYER_CONT_MAIL;FA_BUYER_CONT_FAX;FA_BUYER_CONT_ADDR';

            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_buyer_contact_info_1', '1');
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
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.calTotalSBRAmt = function() {
    try {
        var node;
        var docAmt;
        node = SYS_getDoByXpath('Buyer_Info');
        docAmt = SYS_getFieldSumValue(node, "FA_SBR_AMT", 2);
        SYS_setValueToMain("FA_APPL_LMT_AMT", docAmt);
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.cal_disc = function() {
    try {
        var FA_BUSI_TYPE = SYS_getValueFromMain('FA_BUSI_TYPE');
        if (FA_BUSI_TYPE == 'DISC') {
            SYT_DisableDivClass('A_div');
            document.MAINFORM.FA_SBR_CCY.value = '';
            document.MAINFORM.FA_SBR_AMT.value = '';
        } else {
            SYT_EnableDivClass('A_div');
            document.MAINFORM.FA_SBR_CCY.value = SYS_getValueFromMain('FA_APPL_LMT_CCY');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.check_buyer_indb = function() {
    try {
        document.MAINFORM.FA_TEMP5.value = '';
        SYS_GetTableDataByRule_S('BuyerInfo_Check_buyer_indb', '1', 'Y');
        if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_NM, 'This buyer already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.checkbuyer = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var curBuyerId; // Utility Auto Fix Comments
        var doBuyerId; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var orgRecId; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            state = parent.currentDo.getStatue();
            curBuyerId = document.MAINFORM.FA_BUYER_ID.value;
            arrayvalue = SYS_getRecords(parent.currentDo);
            orgRecId = -1;
            if ("E" == state) {
                orgRecId = SYS_getRecID(SYS_getEditedRecordForCurrentDo());
            }
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recID = SYS_getRecID(record);
                doBuyerId = SYS_getValFromRec(record, 'FA_BUYER_ID');
                if (doBuyerId == curBuyerId && orgRecId != recID) {
                    alert("Buyer Name [" + SYS_getValFromRec(record, "FA_BUYER_NM") + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.checkbuyer2 = function() {
    try {
        checkbuyer();
        check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.getBuyerID = function() {
    try {
        SYS_InqCUBK('FADA_BUY_ID');
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.getbuyerinfo = function() {
    try {
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('FADA_BUY_ID', 'FA_BUYER_ID', 'checkbuyer2');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.FA_PCA_REF.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.FA_BUSI_TYPE_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}
csDOScreenProto.FA_BUYER_CNTC_FLG_onchange = function(event) {
    try {
        buyer_contact_info();
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.FA_BUYER_ID_onchange = function(event) {
    try {
        getbuyerinfo();
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}

csDOScreenProto.FA_SBR_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_SBR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_SBR_CCY.value, document.MAINFORM.FA_SBR_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FADA_BuyerInfo.js", e);
    }
}