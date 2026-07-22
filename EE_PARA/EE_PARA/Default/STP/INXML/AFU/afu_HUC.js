stp.writeLog("Incoming XML Function start");
var Msg1 = stp.getXMLNodeValue("msg-os-intf-id");
if(Msg1=='ABLF.002.ReqCollDischg'){
stp.writeLog("ReceiveCollDisReqFromCE-START");
stp.mergeDO2TrxDom();
stp.setFunc("ReceiveCollDisReqFromCE");
stp.writeLog("ReceiveCollDisReqFromCE-END");
}else{

var EdiType= stp.getEdiType("");

stp.writeLog("EdiType="+EdiType);
if(EdiType=="MSG01"){
var selId=stp.getXMLNodeValue("SellerNr","MSG01.Seller",".");
stp.writeLog("MSG01selId"+selId);
var expFactor=stp.getXMLNodeValue("FactorCode","MSG01.EF",".");
stp.writeLog("MSG01expFactor"+expFactor);
var fld_list = stp.addFieldList(null,"C_MAIN_REF");
var sql_condition = stp.addSQLCondition(null,"upper(FA_SEL_EDI_ID)",selId);
var sql_condition = stp.addSQLCondition(sql_condition,"FA_EF_ID",expFactor);
var sql_condition = stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE","IF");
var result = stp.executeQuery("FADA_SEL_INFO",fld_list,sql_condition);
var mainRef = stp.getDBFieldValue(result,"C_MAIN_REF");

stp.writeLog("mainRef"+mainRef);
if(mainRef==''||mainRef==null){
stp.writeLog("IFRecvEDI01START");	
stp.setFunc("InEDI01");
stp.writeLog("IFRecvEDI01END");	
}
else{
stp.writeLog("IFRecEDI01USTART");
stp.setFunc("InEDI01U");
stp.writeLog("IFRecEDI01UEND");
}
}
if (EdiType=="MSG02"){
    var msgfunc= stp.getNodeValue("MsgFunction");
    if(msgfunc=='3'){
        stp.writeLog("InEDI02START");	
        stp.setFunc("InEDI02");
        stp.writeLog("InEDI02END");
    }
    else if(msgfunc=='4'){
        stp.writeLog("InEDI02USTART");
        stp.setFunc("InEDI02U");
        stp.writeLog("InEDI02END");
    }
}

if (EdiType=="MSG05"){
    var msgfunc= stp.getNodeValue("MsgFunction");
    var req = stp.getNodeValue("Request");
    if(req=='1'&& msgfunc!='4'){
        stp.writeLog("InEDI05START");	
        stp.setFunc("InEDI05");
        stp.writeLog("InEDI05END");
    }
    else{
        stp.writeLog("InEDI05USTART");
        stp.setFunc("InEDI05U");
        stp.writeLog("InEDI05UEND");
    }
}

if(EdiType=='MSG07'){
var msgfunc= stp.getNodeValue("MsgFunction");	
if(msgfunc=='3'){
stp.writeLog("InEDI07START");
stp.setFunc("InEDI07");
stp.writeLog("InEDI07END");
}
else if(msgfunc=='4'){
stp.writeLog("InEDI07USTART");
stp.setFunc("InEDI07U");
stp.writeLog("InEDI07UEND");	
}
}


if(EdiType=='MSG19'){
stp.setFunc("InEDI19");
}

if(EdiType=='MSG03'){
stp.writeLog("InEDI03USTART");
stp.setFunc("InEDI03");
stp.writeLog("InEDI03UEND");
}

if(EdiType=='MSG08'){
stp.writeLog("InEDI08START");
stp.setFunc("InEDI08");
stp.writeLog("InEDI08END");
}

if(EdiType=='MSG06'){
stp.setFunc("InEDI06");
}

if(EdiType=='MSG04'){
stp.setFunc("InEDI04");
}

if(EdiType=='MSG12'){
stp.writeLog("InEDI12START");
stp.setFunc("InEDI12");
stp.writeLog("InEDI12END");
}

if(EdiType=='MSG11' || EdiType=='MSG13'){
stp.writeLog("InEDI11or13START");
stp.setFunc("InEDI11or13");
stp.writeLog("InEDI11or13END");
}
if(EdiType=='MSG15'){
stp.writeLog("InEDI15START");
stp.setFunc("InEDI15");
stp.writeLog("InEDI15END");
}
if(EdiType=='MSG14'){
stp.writeLog("InEDI14START");
stp.setFunc("InEDI14");
stp.writeLog("InEDI14END");
}

if(EdiType=='MSG10'){
stp.writeLog("InEDI10START");
stp.setFunc("InEDI10");
stp.writeLog("InEDI10END");
}


if(EdiType=='MSG09'){
stp.writeLog("InEDI09START");
stp.setFunc("InEDI09");
stp.writeLog("InEDI09END");
}

if(EdiType=='MSG16'){
stp.writeLog("InEDI16START");
stp.setFunc("InEDI16");
stp.writeLog("InEDI16END");
}



var MsgType=stp.getNodeValue("MSG_TYPE");
stp.writeLog("MsgType="+MsgType);
	//EE-9660 @date 2020-04-09
	/*switch(MsgType) {
		case "Invoice":
      		stp.setFunc("ReceiveInvoice");
			return "";
		case "FADA.001.PCA":
      		stp.writeLog("ReceivePCAFromCE-START");
			stp.setFunc("ReceivePCAFromCE");
			stp.writeLog("ReceivePCAFromCE-END");
			return "";
		default:
			return;
	}*/
//	if("EXCEL_Invoice" == MsgType ||  "ISO_Invoice" == MsgType){
if("Invoice" == MsgType){
	 stp.setFunc("ReceiveInvoice");
	 }
	 
	 if("SBR" == MsgType){
	 stp.writeLog("UploadSBREE-START");
	 stp.setFunc("UploadAgreement");
	 }

//EE-9660 @date 2020-04-09
if(MsgType=='FADA.001.PCA'){
stp.writeLog("ReceivePCAFromCE-START");
stp.setFunc("ReceivePCAFromCE");
stp.writeLog("ReceivePCAFromCE-END");
}
if(MsgType=='FADA.004.RSA'){
stp.writeLog("ReceiveAgreementFromCE-START");
stp.mergeDO2TrxDom();
stp.setFunc("RecAgreementFrCE");
stp.writeLog("ReceiveAgreementFromCE-END");
}
if(MsgType=='FADA.004.RSA_ME'){
stp.writeLog("ReceiveAgreementFromCE_ME-START");
stp.mergeDO2TrxDom();
stp.setFunc("RecAgreementFrCE_ME");
stp.writeLog("ReceiveAgreementFromCE_ME-END");
}
if(MsgType=='FADA.006.RAA_ME'){
stp.writeLog("RecAmendAgreementFrCE_ME-START");
stp.mergeDO2TrxDom();
stp.setFunc("RecAmendAgreementFrCE");
stp.writeLog("RecAmendAgreementFrCE_ME-END");
}
if(MsgType=='FADA.006.RAA'){
stp.writeLog("RecAmendAgreementFrCE-START");
stp.mergeDO2TrxDom();
stp.setFunc("RecAmendAgreementFrCE");
stp.writeLog("RecAmendAgreementFrCE-END");
}
if(MsgType=='FADA.009.ReqAmdSBR_ME'){
stp.writeLog("RecSBRAmendFrCE_ME-START");
stp.mergeDO2TrxDom();
stp.setFunc("RecSBRAmendFrCE_ME");
stp.writeLog("RecSBRAmendFrCE_ME-END");
}

if(MsgType=='FAEF.001.CCA'){
stp.writeLog("ReceiveCCAFromCE-START");
stp.setFunc("ReceiveCCAFromCE");
stp.writeLog("ReceiveCCAFromCE-END");
}
if(MsgType=='FAEF.003.CCAR'){
stp.writeLog("ReceiveCAAFromCE-START");
stp.setFunc("ReceiveCAAFromCE");
stp.writeLog("ReceiveCAAFromCE-END");
}
if(MsgType=='FAEF.011.DISP'){
stp.writeLog("ReceiveDisputeFromCE-START");
stp.mergeDO2TrxDom();
stp.setFunc("ReceiveDisputeFromCE");
stp.writeLog("ReceiveDisputeFromCE-END");
}
if(MsgType=='FAEF.015.CNT'){
stp.writeLog("ReceiveCNTransferFromCE-START");
stp.mergeDO2TrxDom();
stp.setFunc("ReceiveCNTransferFromCE");
stp.writeLog("ReceiveCNTransferFromCE-END");
}
if(MsgType=='FAEF.005.INVTF'){
stp.writeLog("ReceiveINVFromCE-START");
stp.setFunc("ReceiveInvoiceFromCE");
stp.writeLog("ReceiveINVFromCE-END");
}

if(MsgType=='FAEF.005.INVTFME'){
stp.writeLog("ReceiveINVFromCEME-START");
stp.setFunc("ReceiveInvoiceFromCE_ME");
stp.writeLog("ReceiveINVFromCEME-END");
}

if(MsgType=='FAEF.018.StampInv'){
stp.writeLog("ReceiveInvoiceFromCEUPDATEME-START");
stp.setFunc("ReceiveInvoiceFromCEUPDATE_ME");
stp.writeLog("ReceiveInvoiceFromCEUPDATEME-END");
}

if(MsgType=='FAEF.016.PO'){
stp.writeLog("ReceivePOFromCE-START");
stp.setFunc("ReceivePOFromCE ");
stp.writeLog("ReceivePOFromCE-END");
}

if(MsgType=='TSU.005.InvInstr'){
stp.writeLog("ReceiveInvoiceInstruction-START");
stp.setFunc("R2ReceiveInvoiceData");
stp.writeLog("ReceiveInvoiceInstruction-END");
}

if(MsgType=='TSU.006.PayInstr'){
stp.writeLog("ReceivePaymentInstruction-START");
stp.mergeDO2TrxDom();
stp.setFunc("ReceivePaymentInstruction");
stp.writeLog("ReceivePaymentInstruction-END");
}

if(MsgType=='ABLF.001.ReqFin'){
stp.writeLog("ReceiveFinReqFromCE-START");
stp.setFunc("ReceiveFinReqFromCE");
stp.writeLog("ReceiveFinReqFromCE-END");
}

if(MsgType=='EXCO.001.CretExptColl'){
stp.writeLog("ReceiveEXCOromCE-START");
stp.setFunc("EXCO_CreateColl_STP");
stp.writeLog("ReceiveEXCOFromCE-END");
}
if(MsgType=='EXCO.003.CretExptCollAmd'){
stp.writeLog("ReceiveAmendFromCE-START");
stp.setFunc("EXCO_ReceiveAmtFromCE");
stp.writeLog("ReceiveAmendFromCE-END");
}
if(MsgType=='EXCO.005.PmtInstr'){
stp.writeLog("ReceivePaymentFromCE-START");
stp.setFunc("EXCO_ReceivePmtIns");
stp.writeLog("ReceivePaymentFromCE-END");
}

if(MsgType=='IMCO.004.PmtInstr'){
stp.writeLog("ReceivePaymentFromCE-START");
stp.setFunc("IMCO_ReceivePmtIns");
stp.writeLog("ReceivePaymentFromCE-END");
}


if(MsgType=='IMLC.001.ImpLcApplctn'){
stp.writeLog("ReceiveLCFromCE-START");
stp.setFunc("IPLC_RecLCFrCE");
stp.writeLog("ReceiveLCFromCE-END");
}

if(MsgType=='IMLC.003.ResmtImpLcApplctn'){
stp.writeLog("ReceiveResmtImpLcApplctnFromCE-START");
stp.setFunc("IPLC_RecResubmitLCFrCE");
stp.writeLog("ReceiveResmtImpLcApplctnFromCE-END");
}

if(MsgType=='IMLC.005.AmdApplctn'){
stp.writeLog("ReceiveAmtFromCE-START");
stp.setFunc("IPLC_RecAmtFrCE");
stp.writeLog("ReceiveAmtFromCE-END");
}

if(MsgType=='IMLC.007.ResmtAmdApplctn'){
stp.writeLog("ReceiveResubmitAmtFromCE-START");
stp.setFunc("IPLC_RecResubmitAmtFrCE");
stp.writeLog("ReceiveResubmitAmtFromCE-END");
}

if(MsgType=='IMLC.013.DiscrpcsDesin'){
stp.writeLog("ReceiveDiscrepanciesFromCE-START");
stp.setFunc("IPLC_RecDiscrepanciesFrCE");
stp.writeLog("ReceivecDiscrepanciesFromCE-END");
}

if(MsgType=='IMLC.014.PmtInstr'){
stp.writeLog("ReceivePmtInsFromCE-START");
stp.setFunc("IPLC_RecPmtInsFrCE");
stp.writeLog("ReceivecPmtInsFromCE-END");
}

if(MsgType=='EXLC.003.RsponAmdmntDesin'){
stp.writeLog("ReceiveAmtDecisionFromCE-START");
stp.setFunc("EPLC_RecAmtDecisionFrCE");
stp.writeLog("ReceiveAmtDecisionFromCE-END");
}

if(MsgType=='EXLC.006.DispolInstr'){
stp.writeLog("ReceiveDispolInstrFromCE-START");
stp.setFunc("EPLC_RecDiscrepanciesInsFrCE");
stp.writeLog("ReceiveDispolInstrFromCE-END");
}

if(MsgType=='EXLC.007.PmtInstr'){
stp.writeLog("ReceivePmtInstrFromCE-START");
stp.setFunc("EPLC_RecPmtInsFrCE");
stp.writeLog("ReceivePmtInstrFromCE-END");
}

if(MsgType=='OWGT.001.GteeApplctn'){
stp.writeLog("ReceiveGTEEFromCE-START");
stp.setFunc("OWGT_RecGTEEFrCE");
stp.writeLog("ReceiveGTEEFromCE-END");
}

if(MsgType=='OWGT.003.ResmtGteeApplctn'){
stp.writeLog("ReceiveResubmitGTEEFromCE-START");
stp.setFunc("OWGT_RecResubmitGTEEFrCE");
stp.writeLog("ReceiveResubmitGTEEFromCE-END");
}

if(MsgType=='OWGT.005.AmdApplctn'){
stp.writeLog("ReceiveGTEEAmtFromCE-START");
stp.setFunc("OWGT_RecGTEEAmtFrCE");
stp.writeLog("ReceiveGTEEAmtFromCE-END");
}

if(MsgType=='OWGT.007.ResmtAmdApplctn'){
stp.writeLog("ResubmitGTEEAmtFromCE-START");
stp.setFunc("OWGT_RecResubmitGTEEAmtFrCE");
stp.writeLog("ResubmitGTEEAmtFromCE-END");
}

if(MsgType=='OWGT.012.ClmRsponSttlmInstr'){
stp.writeLog("ReceiveSettlementInsFromCE-START");
stp.setFunc("OWGT_RecGTEESettlementInstFrCE");
stp.writeLog("ReceiveSettlementInsFromCE-END");
}

if(MsgType=='IWGT.003.AmdDesin'){
stp.writeLog("ReceiveGTEEAmtFromCE-START");
stp.setFunc("IWGT_RecGTEEAmtFrCE");
stp.writeLog("ReceiveGTEEAmtFromCE-END");
}

if(MsgType=='IWGT.005.ClmPmtInstr'){
stp.writeLog("ReceiveGTEEPaymentFromCE-START");
stp.setFunc("IWGT_RecGTEEPaymentFrCE");
stp.writeLog("ReceiveGTEEPaymentFromCE-END");
}
if(MsgType=='TSU.002.RecPO'){
stp.writeLog("ReceivePOResponse-START");
stp.setFunc("R2ReceivePOResponse");
stp.writeLog("ReceivePOResponse-END");
}
}

var msgid = stp.getNodeValue("msg-id");
var mainRef = stp.getXMLNodeValue("C_MAIN_REF");
stp.writeLog("=== Receive xml Start === " + MsgType +", " + msgid +", " + mainRef);
if (MsgType == 'BLR.FMSG') {
var fld_list = stp.addFieldList(null,"C_MAIN_REF");
var sql_condition = stp.addSQLCondition(null,"C_MAIN_REF",mainRef);
var result = stp.executeQuery("EPLC_MASTER",fld_list,sql_condition);
var Ref = stp.getDBFieldValue(result,"C_MAIN_REF");
stp.writeLog("Ref"+Ref);
if(Ref==''||Ref==null){
stp.writeLog("GeneralCorrespondenceInNew-START");
stp.setFunc("EPLC_GeneralCorrespondenceInNew");
stp.writeLog("GeneralCorrespondenceInNew-END");	
}
else{
stp.writeLog("GeneralCorrespondenceIn-START");
stp.setFunc("EPLC_GeneralCorrespondenceIn");
stp.writeLog("GeneralCorrespondenceIn-END");
}
}
if(MsgType == 'BLR.BACK'||MsgType == 'BLR.BNAK'||MsgType == 'BLR.DNOT'||MsgType == 'BLR.FBRF'||MsgType == 'BLR.FNOT'){
stp.writeLog("ProcessBoleroEBLIn-START");
stp.setFunc("EPLC_ProcessBoleroEBLIn");
stp.writeLog("ProcessBoleroEBLIn-END");
}

/*****Receive REMM IMT From CE Start******/
stp.writeLog("Receive REMM IMT From CE Start");
if(MsgType=='REMM_IMT'){
stp.setFunc("ReceiveIMT");
stp.writeLog("Receive REMM IMT From CE Successful");
}
stp.writeLog("Receive REMM IMT From CE End");
/*****Receive REMM IMT From CE End******/

stp.writeLog("Incoming XML Function End");