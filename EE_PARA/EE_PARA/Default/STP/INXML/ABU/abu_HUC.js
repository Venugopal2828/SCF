var MsgType = stp.getNodeValue("MSG_TYPE");
if (MsgType != 'InInvoiceForm' && MsgType != 'InPOForm' && MsgType != 'TSU.006.PayInstr' && MsgType != 'TSU.005.InvInstr' && MsgType != 'ReceivePOResponse') {
    stp.writeLog("Incoming Xml Set BU Begin");
    var sellerID = stp.getNodeValue("SellerNr");
    stp.writeLog("sellerID***************:" + sellerID);
    if (sellerID == '' || sellerID == null || sellerID == ' ') {
        sellerID = stp.getNodeValue("FA_SEL_ID");
        stp.writeLog("sellerIDCE2EE1111***************:" + sellerID);
        var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
        var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", sellerID);
        var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
        var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
        stp.writeLog("sBusinessCode CE TO EE***************:" + sBusinessCode1);
        stp.setBU(sBusinessCode1);
        if (sBusinessCode1 == '' || sBusinessCode1 == null || sBusinessCode1 == ' ') {
            sellerID = stp.getNodeValue("FA_SEL_NM");
            stp.writeLog("sellerIDCE2EE2222***************:" + sellerID);
            var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
            var vCondition = stp.addSQLCondition(null, "PARTY_NM", sellerID);
            var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
            var sBusinessCode2 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
            stp.writeLog("sBusinessCode CE TO EE***************:" + sBusinessCode2);
            stp.setBU(sBusinessCode2);
        }
    } else {
        var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
        var vCondition = stp.addSQLCondition(null, "FA_EDI_MSG_ID", sellerID);
        var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
        var sBusinessCode = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
        stp.writeLog("sBusinessCode EDI***************:" + sBusinessCode);
        stp.setBU(sBusinessCode);
    }

    stp.writeLog("Incoming Xml Set BU Finish");
}


//FOR TF IMLC
stp.writeLog("TF Incoming Xml Set BU Starts");
var Module = stp.getNodeValue("module");
if (Module == 'IMLC') {
    var buyId_imlc = stp.getNodeValue("ApplId");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", buyId_imlc);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
    stp.writeLog("sBusinessCode1:" + sBusinessCode1);
}
//FOR TF EXLC
else if (Module == 'EXLC') {
    var CustId_exlc = stp.getNodeValue("CustId");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", CustId_exlc);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
    stp.writeLog("sBusinessCode1:" + sBusinessCode1);
}
//FOR TF IMCO
else if (Module == 'IMCO') {
    var buyId_imco = stp.getNodeValue("DrweNm");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "SWF_FMT_NM", buyId_imco);
    var vResult = stp.executeQuery("EXIMTRX.SWF_ADD_DO", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
}
//FOR TF EXCO
else if (Module == 'EXCO') {
    var selId_EXCO = stp.getNodeValue("DRWR_ID");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", selId_EXCO);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
}
//FOR TF IWGT
else if (Module == 'IWGT') {
    var sellNm_iwgt = stp.getNodeValue("CustId");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", sellNm_iwgt);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
}
//FOR TF OWGT
else if (Module == 'OWGT') {
    var buyId_OWGT = stp.getNodeValue("CustId");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", buyId_OWGT);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
}
stp.writeLog("TF Incoming Xml Set BU Finish");

stp.writeLog("MsgType:" + MsgType);
if (MsgType == 'InInvoiceForm') {
    stp.writeLog("Receive Invoice from CE business check start");
    var docamt = stp.getNodeValue("FA_DOC_AMT");
    var docno = stp.getNodeValue("FA_DOC_NO");
    var buyer = stp.getNodeValue("FA_BUYER_NM");
    var buyercheck = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + buyer + "'");
    var buyercheck2 = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + buyer + "' AND C_TRX_STATUS = 'M'");
    var seller = stp.getNodeValue("FA_SEL_NM");
    var sellercheck = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + seller + "'");
    var sellercheck2 = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + seller + "' AND C_TRX_STATUS = 'M'");
    var invcno = stp.getNodeValue("FA_DOC_NO");
    var invcnocheck = stp.checkRecExist("INVC_MASTER", " WHERE FA_DOC_NO = '" + invcno + "'")
    var sbrref = stp.getNodeValue("FSBC_REF");
    var sbrcheck = stp.checkRecExist("FADA_MASTER", " WHERE C_MAIN_REF = '" + sbrref + "' AND C_TRX_STATUS = 'M' AND (FA_BUSI_STATUS= 'SBR' OR FA_BUSI_STATUS='CCR' OR FA_BUSI_STATUS= 'CAR')");
    stp.writeLog("DOC AMT:" + docamt);
    if (docamt <= 0) {
        stp.throwException("100135");
        stp.writeLog("Invoice Amount should be more than zero!");
    }
    stp.writeLog("DOC NO:" + docno);
    if (docno == '' || docno == ' ' || docno == null) {
        stp.throwException("100136");
        stp.writeLog("Invoice Number cannot be blank!");
    }
    stp.writeLog("buyercheck:" + buyercheck);
    if (buyercheck == 0) {
        stp.throwException("100137");
        stp.writeLog("Buyer is not in EE System!");
    }
    stp.writeLog("buyercheck2:" + buyercheck2);
    if (buyercheck != 0 && buyercheck2 == 0) {
        stp.throwException("100138");
        stp.writeLog("Buyer Status is not active!");
    }
    stp.writeLog("sellercheck:" + sellercheck);
    if (sellercheck == 0) {
        stp.throwException("100139");
        stp.writeLog("Supplier is not in EE system!");
    }
    stp.writeLog("sellercheck2:" + sellercheck2);
    if (sellercheck != 0 && sellercheck2 == 0) {
        stp.throwException("100140");
        stp.writeLog("Supplier status is not active! ");
    }
    stp.writeLog("invcnocheck:" + invcnocheck);
    if (invcnocheck == 1) {
        stp.throwException("100142");
        stp.writeLog("Check invoice Number is duplicate in EE system!");
    }
    stp.writeLog("sbrcheck:" + sbrcheck);
    if (sbrcheck == 0) {
        stp.throwException("100146");
        stp.writeLog("Check SBR is not available!");
    }
    stp.writeLog("Receive Invoice from CE business check end");
}

stp.writeLog("MsgType:" + MsgType);
if (MsgType == 'InPOForm') {
    stp.writeLog("Receive PO from CE business check start");
    var poamt = stp.getNodeValue("PO_AMT");
    var pono = stp.getNodeValue("PO_NO");
    var buyer = stp.getNodeValue("FA_BUYER_NM");
    var buyercheck = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + buyer + "'");
    var buyercheck2 = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + buyer + "' AND C_TRX_STATUS = 'M'");
    var seller = stp.getNodeValue("FA_SEL_NM");
    var sellercheck = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + seller + "'");
    var sellercheck2 = stp.checkRecExist("STAT_MASTER", " WHERE PARTY_NM = '" + seller + "' AND C_TRX_STATUS = 'M'");
    var pono = stp.getNodeValue("PO_NO");
    var ponocheck = stp.checkRecExist("POMM_MASTER", " WHERE PO_NO = '" + pono + "'")
    var sbrref = stp.getNodeValue("FA_SBR_REF");
    var sbrcheck = stp.checkRecExist("FADA_MASTER", " WHERE C_MAIN_REF = '" + sbrref + "' AND C_TRX_STATUS = 'M' AND (FA_BUSI_STATUS= 'SBR' OR FA_BUSI_STATUS='CCR' OR FA_BUSI_STATUS= 'CAR')");
    stp.writeLog("PO AMT:" + poamt);
    if (poamt <= 0) {
        stp.throwException("100147");
        stp.writeLog("PO Amount should be more than zero!");
    }
    stp.writeLog("PO NO:" + pono);
    if (pono == '' || pono == ' ' || pono == null) {
        stp.throwException("100148");
        stp.writeLog("PO Number cannot be blank!");
    }
    stp.writeLog("buyercheck:" + buyercheck);
    if (buyercheck == 0) {
        stp.throwException("100149");
        stp.writeLog("Buyer is not in EE System!");
    }
    stp.writeLog("buyercheck2:" + buyercheck2);
    if (buyercheck != 0 && buyercheck2 == 0) {
        stp.throwException("100150");
        stp.writeLog("Buyer Status is not active!");
    }
    stp.writeLog("sellercheck:" + sellercheck);
    if (sellercheck == 0) {
        stp.throwException("100151");
        stp.writeLog("Supplier is not in EE system!");
    }
    stp.writeLog("sellercheck2:" + sellercheck2);
    if (sellercheck != 0 && sellercheck2 == 0) {
        stp.throwException("100152");
        stp.writeLog("Supplier status is not active! ");
    }
    stp.writeLog("ponocheck:" + ponocheck);
    if (ponocheck == 1) {
        stp.throwException("100153");
        stp.writeLog("Check PO Number is duplicate in EE system!");
    }
    stp.writeLog("sbrcheck:" + sbrcheck);
    if (sbrcheck == 0) {
        stp.throwException("100154");
        stp.writeLog("Check SBR is not available!");
    }
    stp.writeLog("Receive PO from CE business check end");
}

//FOR ABL Finance
stp.writeLog(Module);
var Msg1 = stp.getXMLNodeValue("msg-os-intf-id");
var Msg2 = stp.getNodeValue("msg-os-intf-id");
stp.writeLog(Msg1);
stp.writeLog(Msg2);
if (Module == 'ABLF') {
    stp.writeLog("ABLF Incoming Xml Set BU Starts");
    if (Msg1 == 'ABLF.002.ReqCollDischg' || Msg2 == 'ABLF.002.ReqCollDischg') {
        var Unit1 = stp.getXMLNodeValue("unti-code");
        var Unit2 = stp.getNodeValue("unti-code");
        stp.writeLog(Unit1);
        stp.writeLog(Unit2);
        stp.setBU("CSBANK");
    } else {
        var sApplId = stp.getNodeValue("ApplId");
        var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
        var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", sApplId);
        var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
        var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
        stp.setBU(sBusinessCode1);
        stp.writeLog("sBusinessCode1:" + sBusinessCode1);
    }
    stp.writeLog("ABLF Incoming Xml Set BU End");
}

//FOR TSU UPLOADPO and Receive PO Response
stp.writeLog(Module);
//var Msg = stp.getXMLNodeValue("msg-os-intf-id");
//stp.writeLog(Msg);
if (Module == 'TSUM') {
    stp.writeLog("TSU PO Incoming Xml Set BU Start");
    if (MsgType == 'TSU.001.ProPO') {
        stp.writeLog("UPLOADPO Incoming Xml Set BU Starts");
        stp.setBU("BUYERBANK");
        stp.writeLog("UPLOADPO Incoming Xml Set BU End");
    } else if (MsgType == 'TSU.002.RecPO') {
        stp.writeLog("TSU Receive PO Response Set BU Starts");
        stp.setBU("CSBANK");
        stp.writeLog("TSU Receive PO Response Set BU End");
    } else {
        var sTSU_BUYER_NM = stp.getNodeValue("TSU_BUYER_NM");
        var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
        var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", sTSU_BUYER_NM);
        var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
        var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
        stp.setBU(sBusinessCode1);
        stp.writeLog("sBusinessCode1:" + sBusinessCode1);
    }
    stp.writeLog("TSU PO Incoming Xml Set BU End");
}

//For TSU Receive Invoice Instruction && Payment Instruction 
stp.writeLog(Module);
if (Module == 'DOCM') {
    stp.writeLog("TSU Receive Payment Instruction Set BU Starts");
    if (MsgType == 'TSU.006.PayInstr') {
        stp.setBU("BUYERBANK");
        stp.writeLog("SET BU#####");
    } else if (MsgType == 'TSU.005.InvInstr') {
        stp.setBU("CSBANK");
        stp.writeLog("SET BU11111");
    } else {
        var TSU_CUST_ID = stp.getNodeValue("TSU_CUST_ID");
        stp.writeLog("TSU_CUST_ID=" + TSU_CUST_ID);
        var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
        var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", TSU_CUST_ID);
        var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
        var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
        stp.writeLog("SET BU22222");
    }
    stp.writeLog("TSU Receive Payment Instruction Set BU End");
}


//for Bolero General Correspondence
var msgId = stp.getNodeValue("msg-id");
stp.writeLog("Bolero General Correspondence*******Start******** msgId====" + msgId + MsgType);
if (MsgType == 'BLR.FMSG' || MsgType == 'BLR.BACK' || MsgType == 'BLR.BNAK' || MsgType == 'BLR.DNOT' || MsgType == 'BLR.FBRF' || MsgType == 'BLR.FNOT') {
    var beneId = stp.getNodeValue("RECEVER_RID");
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", beneId);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
    stp.writeLog("sBusinessCode1:" + sBusinessCode1);
}

//for Receive IMT From CE REMM
stp.writeLog("MsgType====" + MsgType);
if (MsgType == "REMM_IMT") {
    var APPL_ID = stp.getNodeValue("APPL_ID");
    stp.writeLog("APPL_ID:" + APPL_ID);
    var vFieldList = stp.addFieldList(null, "C_UNIT_CODE");
    var vCondition = stp.addSQLCondition(null, "C_MAIN_REF", APPL_ID);
    var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
    var sBusinessCode1 = stp.getDBFieldValue(vResult, "C_UNIT_CODE");
    stp.setBU(sBusinessCode1);
    stp.writeLog("sBusinessCode1:" + sBusinessCode1);
}