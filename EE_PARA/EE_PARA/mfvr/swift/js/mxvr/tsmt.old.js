function check_mfvr() {
  var mode = 'FPTR';
  var sellr_bk = ExSvr.get_val('Baseln/SellrBk/BIC', null);
  var buyr_bk = ExSvr.get_val('Baseln/BuyrBk/BIC', null);
  var submtr = ExSvr.get_val('Baseln/SubmitrBaselnId/Submitr/BIC', null);
  var same_bk = sellr_bk == buyr_bk;
  if (mode == 'LODG') {
    if (!same_bk) {
      ExSvr.add_err('IdenticalBanks', 'LODG mode must same seller bank and buyer bank! ' + sellr_bk + ',' + buyr_bk);
    }
  } else if (mode == 'FPTR') {
    if (same_bk) {
      ExSvr.add_err('IdenticalBanks', 'FPTR mode must difference seller bank and buyer bank! ' + sellr_bk + ',' + buyr_bk);
    }
  } else {
  }
  if (submtr != sellr_bk && submtr != buyr_bk) {
    ExSvr.add_err('MsgSubmttrNotBuyrNorSellr', [submtr, sellr_bk, buyr_bk]);
  }

  var bic = ExSvr.bic_info(['Baseln', 'BuyrBk', 'BIC'], null, null);
  if (bic == null) {
    ExSvr.add_err('C05', 'BIC  /Baseln/BuyrBk/BIC ' + buyr_bk);
  }
//ExSvr.chk_bic(['Baseln','SellrBk','BIC']);
  bic = ExSvr.bic_info('Baseln/SellrBk/BIC', null, null);
  if (bic == null) {
    ExSvr.add_err('C05', 'BIC  /Baseln/SellrBk/BIC ' + sellr_bk);
  }
//ExSvr.bic_info(['Baseln','BuyrSdSubmitgBk','BIC']);

//ExSvr.chk_cnty(['Baseln','Buyr','PstlAdr','Ctry']);
//ExSvr.chk_cnty(['Baseln','Sellr','PstlAdr','Ctry']);

//ExSvr.chk_iban(['Baseln','PmtOblgtn','SttlmTerms','CdtrAcct','Id','IBAN']);


// AdjustmentFreightChargesAndTaxRule  [LineItem7]
// ExSvr.add_err('E99','Adjustments, freight charges and taxes must be entered at this level, or adjustments, freight charges and taxes must be entered at line item level.');
  if (ExSvr.exist(['Baseln', 'Goods', 'Adjstmnt']) || ExSvr.exist(['Baseln', 'Goods', 'FrghtChrgs']) || ExSvr.exist(['Baseln', 'Goods', 'Tax'])) {  //'FrghtChrgs'  'Tax'
    if (ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'Adjstmnt']))
      ExSvr.add_err('C05', 'Adjstmnt');
    if (ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'FrghtChrgs']))
      ExSvr.add_err('C05', 'FrghtChrgs');
    if (ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'Tax']))
      ExSvr.add_err('C05', 'Tax');

  }

// IncotermsRule   [LineItem7]
// ExSvr.add_err('E99','If Incoterms is present, then Incoterms is not allowed within each occurrence of LineItemDetails. If Incoterms is not present, then Incoterms is allowed within each occurrence of LineItemDetails.');
  if (ExSvr.exist(['Baseln', 'Goods', 'Incotrms']) && ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'Incotrms'])) {
    ExSvr.add_err('C05', 'Incotrms');
  }

//LatestShipmentDateRule  [LineItem7]
// ExSvr.add_err('E99','If LatestShipmentDate is present, then LatestShipmentDate is not allowed within each occurrence of LineItemDetails. If LatestShipmentDate is not present, then LatestShipmentDate is allowed within each occurrence of LineItemDetails.');
  if (ExSvr.exist(['Baseln', 'Goods', 'LatstShipmntDt']) && ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'LatstShipmntDt'])) {
    ExSvr.add_err('C05', 'LatstShipmntDt');
  }

// RoutingSummaryRule  [LineItem7]
// ExSvr.add_err('E99','If RoutingSummary is present, then RoutingSummary is not allowed within each occurrence of LineItemDetails. If RoutingSummary is not present, then RoutingSummary is allowed within each occurrence of LineItemDetails.');
  if (ExSvr.exist(['Baseln', 'Goods', 'RtgSummry']) && ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'RtgSummry'])) {
    ExSvr.add_err('C05', 'RtgSummry');
  }


// TransShipmentRule  [Baseline3]
// If TransportDataSetRequired is present, then Goods/TransShipment is mandatory. 
// If TransportDataSetRequired is absent, then Goods/TransShipment is optional.
  if (ExSvr.exist(['Baseln', 'TrnsprtDataSetReqrd']) && (!ExSvr.exist(['Baseln', 'Goods', 'TrnsShipmnt']))) {
    ExSvr.add_err('C05', 'TrnsShipmnt');
  }
//  No multiple currencies allowed. 

// For each line item 
//  TotalAmount = (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments + Sum of FreightCharges + Sum of  Taxes
//   -  Adjustment is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) 
//   -  FreightCharges is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments 
//   -  Tax is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments
//ExSvr.debug(" -----  ");
  var v = ExSvr.getflds(['Baseln', 'Goods', 'LineItmDtls'], null);
//ExSvr.debug(v);
// v = ['aaaa', 'a2'];
  var ttlamt = 0;
  for (var i = 0; i < v.length; i++) {
    var v0 = v[i];
//	ExSvr.debug(v0);
    var t0 = ExSvr.get_val(['TtlAmt'], v0);
    ttlamt += Number(t0);
    var a0 = ExSvr.get_val(['Qty', 'Val'], v0);
    var a1 = ExSvr.get_val(['UnitPric', 'Amt'], v0);
    var b0 = ExSvr.get_val(['Adjstmnt', 'Amt'], v0);
//	ExSvr.debug('t0: ' + t0);
  }

  var ttlamt_0 = ExSvr.get_val(['Baseln', 'Goods', 'LineItmsTtlAmt ']);
  if (ttlamt_0 != ttlamt) {
    ExSvr.add_err('E99', 'Not same: ' + ttlamt_0 + ', ' + ttlamt);
  } else {
    // ExSvr.add_err('E00', ' ----  ');
  }

//  At Goods level: 
//  Sum of TotalAmounts = LineItemsTotalAmount 
//  TotalNetAmount = LineItemsTotalAmount +/- Sum of Adjustments + Sum of FreightCharges + Sum of Taxes 
//   -  Adjustment is either an Amount, or a Rate and is computed based on LineItemsTotalAmount 
//   -  FreightCharges is either an Amount, or a Rate, computed based on (LineItemsTotalAmount +/- Sum of Adjustments) 
//   -  Tax is either an Amount, or a Rate, computed based on (LineItemsTotalAmount +/- Sum of Adjustments) 

//  Sum of PaymentTerms\Percentage = 100  (use of percentage is recommended) 
//    OR 
//  Sum of PaymentTerms\Amount = TotalNetAmount  

// In each PaymentObligation block : 
//   Sum of PaymentObligation\PaymentTerms\Percentage = 100  (if percentages are used, which is recommended) 


// alert('check end.');
// ExSvr.add_err('E00', 'fffff');
}
