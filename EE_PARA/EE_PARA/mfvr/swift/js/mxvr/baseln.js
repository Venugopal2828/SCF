function Baseln(fld, mode) {
  this.fld = fld;
  this.mode = mode;
  this.full_path = ExSvr.get_path(this.fld);
  this.ttlNetAmt = 0;
}
Baseln.prototype.chk_DtOfIsse = function () {
  var dt = ExSvr.get_val('PurchsOrdrRef/DtOfIsse', this.fld);
  if (ExSvr.compare(dt, null, 0) > 0) {
    // big than today, error!
    ExSvr.add_err('Error.Date', ['Date may not be in the future. ', 'Baseln/PurchsOrdrRef/DtOfIsse', dt]);
  }
}

Baseln.prototype.check = function () {
  Mx.chk_ccyAmt(this.fld, true);
  this.chk_party(this.fld);
  this.chk_DtOfIsse();
  Mx.chk_duplicate('BuyrSdSubmitgBk', 'BIC', this.fld);
  Mx.chk_duplicate('SellrSdSubmitgBk', 'BIC', this.fld);
  // TransShipmentRule  [Baseline3]
  // If TransportDataSetRequired is present, then Goods/TransShipment is mandatory. 
// 	If TransportDataSetRequired is absent, then Goods/TransShipment is optional.
  if (ExSvr.exist(['TrnsprtDataSetReqrd'], this.fld)) {
    if (!ExSvr.exist(['Goods', 'TrnsShipmnt'], this.fld)) {
      ExSvr.add_err('Error.Mandatory', [this.full_path, 'Goods', 'TrnsShipmnt']);
    }
    if (!ExSvr.exist(['Goods', 'RtgSummry'], this.fld) && !ExSvr.exist(['Goods', 'LineItmDtls', 'RtgSummry'], this.fld)) {
      ExSvr.add_err('Error.Mandatory', ['Goods', 'RtgSummry']);
    }
  }

  Mx.chk_date('Goods/ShipmntDtRg/EarlstShipmntDt', 'Goods/ShipmntDtRg/LatstShipmntDt', this.fld);

  Mx.chk_either(['Goods', 'ShipmntDtRg'], ['Goods', 'LineItmDtls', 'ShipmntSchdl', 'ShipmntDtRg'], this.fld);
  Mx.chk_either(['Goods', 'ShipmntSchdl'], ['Goods', 'LineItmDtls', 'ShipmntSchdl'], this.fld);
  Mx.chk_either(['Goods', 'Adjstmnt'], ['Goods', 'LineItmDtls', 'Adjstmnt'], this.fld);
  Mx.chk_either(['Goods', 'FrghtChrgs'], ['Goods', 'LineItmDtls', 'FrghtChrgs'], this.fld);
  Mx.chk_either(['Goods', 'Tax'], ['Goods', 'LineItmDtls', 'Tax'], this.fld);
  Mx.chk_either(['Goods', 'RtgSummry'], ['Goods', 'LineItmDtls', 'RtgSummry'], this.fld);
  Mx.chk_either(['Goods', 'Incotrms'], ['Goods', 'LineItmDtls', 'Incotrms'], this.fld);

  //LatestShipmentDateRule  [LineItem7]
  // ExSvr.add_err('E99','If LatestShipmentDate is present, then LatestShipmentDate is not allowed within each occurrence of LineItemDetails. If LatestShipmentDate is not present, then LatestShipmentDate is allowed within each occurrence of LineItemDetails.');
  if (ExSvr.exist(['Goods', 'LatstShipmntDt'], this.fld) && ExSvr.exist(['Goods', 'LineItmDtls', 'LatstShipmntDt'], this.fld)) {
    ExSvr.add_err('C05', 'LatstShipmntDt');
  }

  this._lineItmDtls(this.fld);
  this._pmtTerms(this.fld);
  this.chk_PmtOblgtn();
  this.chk_Chrgs(this.fld);
  var dt = ExSvr.get_val('LatstMtchDt', this.fld);
  if (dt != null && ExSvr.compare(dt, null, 0) < 0) {
    // less than today, error!
    ExSvr.add_err('Error.Date', ['Date must be in the future. ', 'Baseln/LatstMtchDt', dt]);
  }

  Mx.chk_duplicate('ComrclDataSetReqrd/Submitr', 'BIC', this.fld);
}
Baseln.prototype.chk_Chrgs = function (parent) {
  if (ExSvr.exist(['Goods', 'FrghtChrgs'], parent)) {
    var chg_tp = ExSvr.get_val(['Goods', 'FrghtChrgs', 'Tp'], parent);
    if (!ExSvr.exist(['Goods', 'FrghtChrgs', 'Chrgs'], parent)) {
      ExSvr.add_err('Error.Consistency', ['At least one instance of Charges must be present in FreightCharges.', 'Baseln/Goods/FrghtChrgs']);
    }
  }
}
Baseln.prototype.chk_PmtOblgtn = function (parent) {
}
Baseln.prototype._lineItmDtls = function (parent) {
  var flds = ExSvr.getflds(['Goods', 'LineItmDtls'], parent);
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
      Mx.chk_tlrnce('QtyTlrnce', item, 'Baseln/Goods/LineItmDtls/QtyTlrnce');
    }
    Mx.chk_tlrnce('PricTlrnce', item, 'Baseln/Goods/LineItmDtls/PricTlrnce');

    Mx.chk_duplicate('PdctIdr', ['StrdPdctIdr', 'Tp'], item, 'Baseln/Goods/LineItmDtls');
    Mx.chk_duplicate('PdctIdr', ['OthrPdctIdr', 'IdTp'], item, 'Baseln/Goods/LineItmDtls');

    Mx.chk_duplicate('PdctChrtcs', ['StrdPdctChrtcs', 'Tp'], item, 'Baseln/Goods/LineItmDtls');
    Mx.chk_duplicate('PdctChrtcs', ['OthrPdctChrtcs', 'IdTp'], item, 'Baseln/Goods/LineItmDtls');

    Mx.chk_duplicate('PdctCtgy', ['StrdPdctCtgy', 'Tp'], item, 'Baseln/Goods/LineItmDtls');
    Mx.chk_duplicate('PdctCtgy', ['OthrPdctCtgy', 'IdTp'], item, 'Baseln/Goods/LineItmDtls');

    Mx.chk_duplicate('PdctOrgn', null, item, 'Baseln/Goods/LineItmDtls');

    Mx.chk_date('ShipmntSchdl/ShipmntDtRg/EarlstShipmntDt', 'ShipmntSchdl/ShipmntDtRg/LatstShipmntDt', item);
    Mx.chk_date('ShipmntSchdl/ShipmntSubSchdl/EarlstShipmntDt', 'ShipmntSchdl/ShipmntSubSchdl/LatstShipmntDt', item);


    var qty_val = ExSvr.get_val(['Qty', 'Val'], item);
    if (Number(qty_val) < 0) {
      ExSvr.add_err('Error.Number', ['Must be positive.', 'Qty', 'Val', qty_val])
    }
    var pric_amt = ExSvr.get_val(['UnitPric', 'Amt'], item);
    var base_amt = qty_val * pric_amt;
    var adjst_amt = Mx.sum_amt('Adjstmnt', 'Amt', item) + Mx.sum_amt_rate('Adjstmnt', 'Rate', item, base_amt);
    base_amt += adjst_amt;
    var chrgs_amt = Mx.sum_amt('FrghtChrgs/Chrgs', 'Amt', item) + Mx.sum_amt_rate('FrghtChrgs/Chrgs', 'Rate', item, base_amt);
    var tax_amt = Mx.sum_amt('Tax', 'Amt', item) + Mx.sum_amt_rate('Tax', 'Rate', item, base_amt);
    // var tax_amt_rate = Mx.sum_amt_rate('Tax','Rate', item, base_amt);

    var line_amt = ExSvr.get_val(['TtlAmt'], item);
    ttlamt += Number(line_amt);
    var line_amt_cal = qty_val * pric_amt + adjst_amt + chrgs_amt + tax_amt;
//	ExSvr.debug('line ca: ' + qty_val +', '+ pric_amt +'; '+adjst_amt+', '+chrgs_amt+', '+tax_amt);
    if (Number(line_amt_cal) != Number(line_amt)) {
      ExSvr.debug('line t0: ' + line_amt_cal + ', ' + line_amt + '; ' + Number(line_amt_cal) + ', ' + Number(line_amt));
      // ExSvr.add_err('Error.LineItmsAmt',[line_amt_cal,line_amt, 'Qty', qty_val , pric_amt, adjst_amt, chrgs_amt, tax_amt]);
    }
    // For each line item 
//  TotalAmount = (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments + Sum of FreightCharges + Sum of  Taxes
//   -  Adjustment is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) 
//   -  FreightCharges is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments 
//   -  Tax is either an Amount, or a Rate, computed based on (Quantity\Value * UnitPrice\Amount) +/- Sum of Adjustments
//ExSvr.debug(" -----  ");
  }
  var ttlamt_0 = ExSvr.get_val(['Goods', 'LineItmsTtlAmt '], parent);
  if (ttlamt_0 != ttlamt) {
    ExSvr.add_err('E99', ['Not same amount.', 'Baseln/Goods/LineItmsTtlAmt', ttlamt_0, 'Baseln/Goods/LineItmDtls/TtlAmt', ttlamt]);
  } else {
    // ExSvr.add_err('E00', ' ----  ');
  }
  var base_amt = Number(ttlamt_0);
  var adjst_amt = Mx.sum_amt('Goods/Adjstmnt', 'Amt', parent) + Mx.sum_amt_rate('Goods/Adjstmnt', 'Rate', parent, base_amt);
  base_amt += adjst_amt;
  var chrgs_amt = Mx.sum_amt('Goods/FrghtChrgs/Chrgs', 'Amt', parent) + Mx.sum_amt_rate('Goods/FrghtChrgs/Chrgs', 'Rate', parent, base_amt);
  var tax_amt = Mx.sum_amt('Goods/Tax', 'Amt', parent) + Mx.sum_amt_rate('Goods/Tax', 'Rate', parent, base_amt);
  var ttlamt_net = ExSvr.get_val(['Goods', 'TtlNetAmt '], parent);
  this.ttlNetAmt = Number(ttlamt_net);
  var ttlamt_cal = Number(ttlamt_0) + adjst_amt + chrgs_amt + tax_amt;
  // ExSvr.debug('ttl net: ' + ttlamt_cal +', '+ ttlamt_net +'; '+Number(ttlamt_cal)+', '+Number(ttlamt_net));
  if (Number(ttlamt_cal) != Number(ttlamt_net)) {
    ExSvr.debug('ttl net: ' + ttlamt_cal + ', ' + ttlamt_net);
    //ExSvr.add_err('Error.LineItmsAmt',[ttlamt_cal,ttlamt_net,'cal:',ttlamt_0,adjst_amt,chrgs_amt,tax_amt ]);
  }
  //  At Goods level: 
//  Sum of TotalAmounts = LineItemsTotalAmount 
//  TotalNetAmount = LineItemsTotalAmount +/- Sum of Adjustments + Sum of FreightCharges + Sum of Taxes 
//   -  Adjustment is either an Amount, or a Rate and is computed based on LineItemsTotalAmount 
//   -  FreightCharges is either an Amount, or a Rate, computed based on (LineItemsTotalAmount +/- Sum of Adjustments) 
//   -  Tax is either an Amount, or a Rate, computed based on (LineItemsTotalAmount +/- Sum of Adjustments)
}
Baseln.prototype._pmtTerms = function (parent) {
  var pmt_pctg = Mx.sum_amt('PmtTerms', 'Pctg', parent);
  var pmt_amt = Mx.sum_amt('PmtTerms', 'Amt', parent);
  if (pmt_pctg > 0 && pmt_amt > 0) {
    ExSvr.add_err('Error.PaymentTerms', 'Either Pctg or Amt');
  } else if (pmt_pctg != 0) {
    if (pmt_pctg != 100) {
      ExSvr.add_err('Error.PaymentTerms', ['Pctg must 100', this.full_path, 'PmtTerms', 'Pctg', pmt_pctg]);
    }
  } else {
    if (pmt_amt != this.ttlNetAmt) {
      ExSvr.add_err('Error.PaymentTerms', ['Amt must equal net amt.', this.full_path, pmt_amt, this.ttlNetAmt, 'pmt_pctg', pmt_pctg]);
    }
  }

}
Baseln.prototype.chk_party = function (parent) {
  var sellr_bk = ExSvr.get_val('SellrBk/BIC', parent);
  if (sellr_bk.length == 8) sellr_bk = sellr_bk + "XXX";
  var buyr_bk = ExSvr.get_val('BuyrBk/BIC', parent);
  if (buyr_bk.length == 8) buyr_bk = buyr_bk + "XXX";
  var submtr = ExSvr.get_val('SubmitrBaselnId/Submitr/BIC', parent);
  if (submtr.length == 8) submtr = submtr + "XXX";
  var ds_submtr = ExSvr.get_val('ComrclDataSetReqrd/Submitr/BIC', parent);
  if (ds_submtr.length == 8) ds_submtr = ds_submtr + "XXX";

  var same_bk = sellr_bk == buyr_bk;
  if (this.mode == 'LODG') {
    if (!same_bk) {
      // ExSvr.add_err('IdenticalBanks', 'LODG mode must same seller bank and buyer bank! ' + sellr_bk +','+ buyr_bk);
    }
  } else if (this.mode == 'FPTR') {
    if (same_bk) {
      ExSvr.add_err('IdenticalBanks', 'FPTR mode must difference seller bank and buyer bank! ' + sellr_bk + ',' + buyr_bk);
    }
  } else {
  }
  if (!Ex.equals(submtr, sellr_bk) && !Ex.equals(submtr, buyr_bk)) {
    // The BIC 'PTSABMAB' is not part of the designated submitting BICs (buyer, seller, buyer side submitting bank or seller side submitting bank). [CONSISTENCY]
    ExSvr.add_err('MsgSubmttrNotBuyrNorSellr', [submtr, sellr_bk, buyr_bk]);
  }
  if (ds_submtr && !Ex.equals(ds_submtr, sellr_bk) && !Ex.equals(ds_submtr, buyr_bk)) {
    // BuyrSdSubmitgBk   
    var ids_buyr = Mx.loop2ary('BuyrSdSubmitgBk', 'BIC', parent);
    var ids_sellr = Mx.loop2ary('SellrSdSubmitgBk', 'BIC', parent);
    if (Ex.in_list(ds_submtr, ids_buyr) || Ex.in_list(ds_submtr, ids_sellr)) {
      // ok
    } else {
      ExSvr.add_err('DatasetSubmttrNotBuyrNorSellr', [ds_submtr, sellr_bk, buyr_bk]);
    }
  }

  var bic = ExSvr.bic_info(['BuyrBk', 'BIC'], parent, null);
  if (bic == null) {
    ExSvr.add_err('C05', 'BIC  /Baseln/BuyrBk/BIC ' + buyr_bk);
  }
  //ExSvr.chk_bic(['SellrBk','BIC']);
  bic = ExSvr.bic_info('SellrBk/BIC', parent, null);
  if (bic == null) {
    ExSvr.add_err('C05', 'BIC  /Baseln/SellrBk/BIC ' + sellr_bk);
  }
  //ExSvr.bic_info(['BuyrSdSubmitgBk','BIC']);

  //ExSvr.chk_cnty(['Buyr','PstlAdr','Ctry']);
  //ExSvr.chk_cnty(['Sellr','PstlAdr','Ctry']);

  //ExSvr.chk_iban(['PmtOblgtn','SttlmTerms','CdtrAcct','Id','IBAN']);
}
