function check_mfvr() {
  // msgs_scfu.properties
  // only one ccy  //*[@foo]
  var ccy = null;
  var flds = ExSvr.getflds('//*[@Ccy]', null);
  for (var i = 0; i < flds.length; i++) {
    var fld = flds[i];
    // ExSvr.debug(fld);
    var ok = ExSvr.chk_ccy('@Ccy', '.', fld);
    if (!ok) {
      ExSvr.add_err('Error.Amount', ['bad amount with ccy', ExSvr.get_path(fld), ExSvr.get_val('@Ccy', fld), ExSvr.get_val('.', fld)]);
    }

    var val = ExSvr.get_val('@Ccy', fld);
    if (ccy == null) {
      ccy = val;
    } else if (!Ex.equals(ccy, val)) {
      ExSvr.add_err('Error.Unique', ['Should be same CCY', ExSvr.get_path(fld), ccy, val]);
    }

  }
  // Ex._each(flds, function(fld){ExSvr.debug(fld);console.log(fld)});

  check_DtOfIsse();
  chk_duplicate('Baseln/BuyrSdSubmitgBk', 'BIC', null);
  chk_duplicate('Baseln/SellrSdSubmitgBk', 'BIC', null);
  // TransShipmentRule  [Baseline3]
  // If TransportDataSetRequired is present, then Goods/TransShipment is mandatory. 
// 	If TransportDataSetRequired is absent, then Goods/TransShipment is optional.
  if (ExSvr.exist(['Baseln', 'TrnsprtDataSetReqrd'])) {
    if (!ExSvr.exist(['Baseln', 'Goods', 'TrnsShipmnt'])) {
      ExSvr.add_err('Error.Mandatory', ['Baseln', 'Goods', 'TrnsShipmnt']);
    }
    if (!ExSvr.exist(['Baseln', 'Goods', 'RtgSummry']) && !ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'RtgSummry'])) {
      ExSvr.add_err('Error.Mandatory', ['Baseln', 'Goods', 'RtgSummry']);
    }
  }

  check_date('Baseln/Goods/ShipmntDtRg/EarlstShipmntDt', 'Baseln/Goods/ShipmntDtRg/LatstShipmntDt', null);
  check_Party();

  chk_either(['Baseln', 'Goods', 'ShipmntDtRg'], ['Baseln', 'Goods', 'LineItmDtls', 'ShipmntSchdl', 'ShipmntDtRg']);
  chk_either(['Baseln', 'Goods', 'ShipmntSchdl'], ['Baseln', 'Goods', 'LineItmDtls', 'ShipmntSchdl']);
  chk_either(['Baseln', 'Goods', 'Adjstmnt'], ['Baseln', 'Goods', 'LineItmDtls', 'Adjstmnt']);
  chk_either(['Baseln', 'Goods', 'FrghtChrgs'], ['Baseln', 'Goods', 'LineItmDtls', 'FrghtChrgs']);
  chk_either(['Baseln', 'Goods', 'Tax'], ['Baseln', 'Goods', 'LineItmDtls', 'Tax']);
  chk_either(['Baseln', 'Goods', 'RtgSummry'], ['Baseln', 'Goods', 'LineItmDtls', 'RtgSummry']);
  chk_either(['Baseln', 'Goods', 'Incotrms'], ['Baseln', 'Goods', 'LineItmDtls', 'Incotrms']);

  //LatestShipmentDateRule  [LineItem7]
  // ExSvr.add_err('E99','If LatestShipmentDate is present, then LatestShipmentDate is not allowed within each occurrence of LineItemDetails. If LatestShipmentDate is not present, then LatestShipmentDate is allowed within each occurrence of LineItemDetails.');
  if (ExSvr.exist(['Baseln', 'Goods', 'LatstShipmntDt']) && ExSvr.exist(['Baseln', 'Goods', 'LineItmDtls', 'LatstShipmntDt'])) {
    ExSvr.add_err('C05', 'LatstShipmntDt');
  }

  check_LineItmDtls();
  chk_PmtOblgtn();
  var dt = ExSvr.get_val('Baseln/LatstMtchDt', null);
  if (dt != null && ExSvr.compare(dt, null, 0) < 0) {
    // less than today, error!
    ExSvr.add_err('Error.Date', ['Date must be in the future. ', 'Baseln/LatstMtchDt', dt]);
  }


}
function chk_PmtOblgtn() {
}
function chk_either(left, right, parent) {
  if (ExSvr.exist(left, parent) && ExSvr.exist(right, parent)) {
    ExSvr.add_err('Error.Either', left, right);
  }
}

function check_DtOfIsse() {
  var dt = ExSvr.get_val('Baseln/PurchsOrdrRef/DtOfIsse', null);
  if (ExSvr.compare(dt, null, 0) > 0) {
    // big than today, error!
    ExSvr.add_err('Error.Date', ['Date may not be in the future. ', 'Baseln/PurchsOrdrRef/DtOfIsse', dt]);
  }
}
function check_date(earlst, latst, parent) {
  // earlst
  var dt_e = ExSvr.get_val(earlst, null);
  var dt_l = ExSvr.get_val(latst, null);
  if (dt_e && dt_l && ExSvr.compare(dt_e, dt_l, 0) > 0) {
    // big than today, error!
    ExSvr.add_err('Error.Date', ['EarlstShipmntDt must before LatstShipmntDt.', 'Baseln/Goods/ShipmntDtRg/EarlstShipmntDt', dt_e]);
  }

}

function check_LineItmDtls() {
  var flds = ExSvr.getflds(['Baseln', 'Goods', 'LineItmDtls'], null);
  var ttlamt = 0;
  var ids = [];
  for (var i = 0; i < flds.length; i++) {
    var item = flds[i];
    var item_id = ExSvr.get_val(['LineItmId'], item);
    if (Ex.in_list(item_id, ids)) {
      ExSvr.add_err('Error.Unique', ['Should be unique ', 'Baseln/Goods/LineItmDtls/LineItmId', item_id]);
    } else {
      ids.push(item_id);
    }
    // Qty
    if (ExSvr.exist(['UnitPric'], item)) {
      var qty_cd = ExSvr.get_val(['Qty', 'UnitOfMeasrCd'], item);
      var pric_cd = ExSvr.get_val(['UnitPric', 'UnitOfMeasrCd'], item);
      if (!Ex.equals(qty_cd, pric_cd)) {
        ExSvr.add_err('Error.Diff', ['Should be same as Qty', 'Baseln/Goods/LineItmDtls/UnitPric/UnitOfMeasrCd', item_id, qty_cd, pric_cd]);
      }
      qty_cd = ExSvr.get_val(['Qty', 'OthrUnitOfMeasr'], item);
      pric_cd = ExSvr.get_val(['UnitPric', 'OthrUnitOfMeasr'], item);
      if (!Ex.equals(qty_cd, pric_cd)) {
        ExSvr.add_err('Error.Diff', ['Should be same as Qty', 'Baseln/Goods/LineItmDtls/UnitPric/OthrUnitOfMeasr', item_id, qty_cd, pric_cd]);
      }
      qty_cd = ExSvr.get_val(['Qty', 'Fctr'], item);
      pric_cd = ExSvr.get_val(['UnitPric', 'Fctr'], item);
      if (!Ex.equals(qty_cd, pric_cd)) {
        ExSvr.add_err('Error.Diff', ['Should be same as Qty', 'Baseln/Goods/LineItmDtls/UnitPric/Fctr', item_id, qty_cd, pric_cd]);
      }
    }
    if (ExSvr.exist(['QtyTlrnce'], item)) {
      // if ShipmntSubSchdl eror
      if (ExSvr.exist(['ShipmntSubSchdl'], item)) {
        ExSvr.add_err('Error.Occur', ['May not present ', 'Baseln/Goods/LineItmDtls/QtyTlrnce', item_id]);
      }
      chk_tlrnce('QtyTlrnce', item, 'Baseln/Goods/LineItmDtls/QtyTlrnce');
    }
    chk_tlrnce('PricTlrnce', item, 'Baseln/Goods/LineItmDtls/PricTlrnce');

    chk_duplicate('PdctIdr', ['StrdPdctIdr', 'Tp'], item, 'Baseln/Goods/LineItmDtls');
    chk_duplicate('PdctIdr', ['OthrPdctIdr', 'IdTp'], item, 'Baseln/Goods/LineItmDtls');

    chk_duplicate('PdctChrtcs', ['StrdPdctChrtcs', 'Tp'], item, 'Baseln/Goods/LineItmDtls');
    chk_duplicate('PdctChrtcs', ['OthrPdctChrtcs', 'IdTp'], item, 'Baseln/Goods/LineItmDtls');

    chk_duplicate('PdctCtgy', ['StrdPdctCtgy', 'Tp'], item, 'Baseln/Goods/LineItmDtls');
    chk_duplicate('PdctCtgy', ['OthrPdctCtgy', 'IdTp'], item, 'Baseln/Goods/LineItmDtls');

    chk_duplicate('PdctOrgn', null, item, 'Baseln/Goods/LineItmDtls');

    check_date('ShipmntSchdl/ShipmntDtRg/EarlstShipmntDt', 'ShipmntSchdl/ShipmntDtRg/LatstShipmntDt', item);
    check_date('ShipmntSchdl/ShipmntSubSchdl/EarlstShipmntDt', 'ShipmntSchdl/ShipmntSubSchdl/LatstShipmntDt', item);


    var qty_val = ExSvr.get_val(['Qty', 'Val'], item);
    if (Number(qty_val) < 0) {
      ExSvr.add_err('Error.Number', ['Must be positive.', 'Qty', 'Val', qty_val])
    }
    var pric_amt = ExSvr.get_val(['UnitPric', 'Amt'], item);
    var adjst_amt = sum_amt('Adjstmnt', 'Amt', item);
    var chrgs_amt = sum_amt('FrghtChrgs/Chrgs', 'Amt', item);
    var tax_amt = sum_amt('Tax', 'Amt', item);
    var line_amt = ExSvr.get_val(['TtlAmt'], item);
    ttlamt += Number(line_amt);
    var line_amt_cal = qty_val * pric_amt + adjst_amt + chrgs_amt + tax_amt;
//	ExSvr.debug('line ca: ' + qty_val +', '+ pric_amt +'; '+adjst_amt+', '+chrgs_amt+', '+tax_amt);
    if (Number(line_amt_cal) != Number(line_amt)) {
      // ExSvr.debug('line t0: ' + line_amt_cal +', '+ line_amt +'; '+Number(line_amt_cal)+', '+Number(line_amt));
      ExSvr.add_err('Error.LineItmsAmt', [line_amt_cal, line_amt, 'Qty', qty_val, pric_amt, adjst_amt, chrgs_amt, tax_amt]);
    }
    // For each line item 
//  TotalAmount = (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments + Sum of FreightCharges + Sum of  Taxes
//   -  Adjustment is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) 
//   -  FreightCharges is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments 
//   -  Tax is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments
//ExSvr.debug(" -----  ");
  }
  var ttlamt_0 = ExSvr.get_val(['Baseln', 'Goods', 'LineItmsTtlAmt ']);
  if (ttlamt_0 != ttlamt) {
    ExSvr.add_err('E99', ['Not same amount.', 'Baseln/Goods/LineItmsTtlAmt', ttlamt_0, 'Baseln/Goods/LineItmDtls/TtlAmt', ttlamt]);
  } else {
    // ExSvr.add_err('E00', ' ----  ');
  }
  var adjst_amt = sum_amt('Baseln/Goods/Adjstmnt', 'Amt', null);
  var chrgs_amt = sum_amt('Baseln/Goods/FrghtChrgs/Chrgs', 'Amt', null);
  var tax_amt = sum_amt('Baseln/Goods/Tax', 'Amt', null);
  var ttlamt_net = ExSvr.get_val(['Baseln', 'Goods', 'TtlNetAmt ']);
  var ttlamt_cal = ttlamt_0 + adjst_amt + chrgs_amt + tax_amt;
  // ExSvr.debug('ttl net: ' + ttlamt_cal +', '+ ttlamt_net +'; '+Number(ttlamt_cal)+', '+Number(ttlamt_net));
  if (Number(ttlamt_cal) != Number(ttlamt_net)) {
//		ExSvr.debug('ttl net: ' + ttlamt_cal +', '+ ttlamt_net);
    ExSvr.add_err('Error.LineItmsAmt', [ttlamt_cal, ttlamt_net, 'cal:', ttlamt_0, adjst_amt, chrgs_amt, tax_amt]);
  }
  //  At Goods level: 
//  Sum of TotalAmounts = LineItemsTotalAmount 
//  TotalNetAmount = LineItemsTotalAmount +/- Sum of Adjustments + Sum of FreightCharges + Sum of Taxes 
//   -  Adjustment is either an Amount, or a Rate and is computed based on LineItemsTotalAmount 
//   -  FreightCharges is either an Amount, or a Rate, computed based on (LineItemsTotalAmount +/- Sum of Adjustments) 
//   -  Tax is either an Amount, or a Rate, computed based on (LineItemsTotalAmount +/- Sum of Adjustments)
  var pmt_pctg = sum_amt('Baseln/PmtTerms', 'Pctg', null);
  var pmt_amt = sum_amt('Baseln/PmtTerms', 'Amt', null);
  if (pmt_pctg > 0 && pmt_amt > 0) {
    ExSvr.add_err('Error.PaymentTerms', 'Either Pctg or Amt');
  } else if (pmt_pctg != 0) {
    if (pmt_pctg != 100) {
      ExSvr.add_err('Error.PaymentTerms', 'Pctg must 100');
    }
  } else {
    if (pmt_amt != ttlamt_net) {
      ExSvr.add_err('Error.PaymentTerms', 'Amt must equal net amt.');
    }
  }
//  Sum of PaymentTerms\Percentage = 100  (use of percentage is recommended) 
//    OR 
//  Sum of PaymentTerms\Amount = TotalNetAmount  

// In each PaymentObligation block : 
//   Sum of PaymentObligation\PaymentTerms\Percentage = 100  (if percentages are used, which is recommended) 
}
function sum_amt(name, key, parent, p_name) {
  if (!ExSvr.exist(name, parent)) return 0;
  var items = ExSvr.getflds(name, parent);
  var ttl = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var val = ExSvr.get_val(key, item);
    ttl += Number(val);
  }
  return ttl;

}
function chk_tlrnce(name, parent, p_name) {
  if (ExSvr.exist([name], parent)) {
    var pl = ExSvr.get_val([name, 'PlusPct'], parent);
    if (pl <= 0) {
      ExSvr.add_err('Error.Number', ['Should be positive ', p_name, 'PlusPct', pl]);
    }
    var mn = ExSvr.get_val([name, 'MnsPct'], parent);
    if (mn <= 0) {
      ExSvr.add_err('Error.Number', ['Should be positive ', p_name, 'MnsPct', mn]);
    }
    if (mn > 100) {
      ExSvr.add_err('Error.Number', ['Should less than 100 ', p_name, 'MnsPct', mn]);
    }
  }
}
function chk_duplicate(name, key, parent, p_name) {
  if (!ExSvr.exist(name, parent)) return;
  var items = ExSvr.getflds(name, parent);
  var ids = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (key == null) {
    }
    // if key is null, mean self value
    if (!ExSvr.exist(key, item)) continue;
    var val = ExSvr.get_val(key, item);
    if (Ex.in_list(val, ids)) {
      ExSvr.add_err('Error.Unique', ['Should be unique ', ExSvr.get_path(item), val]);
    } else {
      ids.push(val);
    }
  }
}

function check_Party() {
  var mode = ExSvr.get_val('Instr/Tp', null);
  var sellr_bk = ExSvr.get_val('Baseln/SellrBk/BIC', null);
  var buyr_bk = ExSvr.get_val('Baseln/BuyrBk/BIC', null);
  var submtr = ExSvr.get_val('Baseln/SubmitrBaselnId/Submitr/BIC', null);
  var same_bk = sellr_bk == buyr_bk;
  if (mode == 'LODG') {
    if (!same_bk) {
      // ExSvr.add_err('IdenticalBanks', 'LODG mode must same seller bank and buyer bank! ' + sellr_bk +','+ buyr_bk);
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
}