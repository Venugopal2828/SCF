ExSvr.require('mfvr.js');
ExSvr.require('mxvr/tsmt.js');

function DataSet(fld) {
  this.fld = fld;
  this.full_path = ExSvr.get_path(this.fld);
}
DataSet.prototype._party = function () {
  var bic = ExSvr.bic_info(['DataSetId', 'Submitr', 'BIC'], this.fld, null);
  if (bic == null) {
    ExSvr.add_err('Error.BIC', [this.full_path, 'DataSetId', 'Submitr', 'BIC']);
  }
  // should be message submitter's BIC
  var senderbk = ExSvr.getData('senderBk');
  var val = ExSvr.get_val('DataSetId/Submitr/BIC', this.fld);
  if (!Ex.equals(senderbk, val)) {
    ExSvr.add_err('Error.BIC', ['should be sender bank', this.full_path, 'DataSetId', 'Submitr', 'BIC', val, 'want:', senderbk]);
  }
  ExSvr.debug('' + val);
}
function TrnsprtDataSet(fld) {
  DataSet.call(this, fld);
}
TrnsprtDataSet.prototype = new DataSet();
TrnsprtDataSet.prototype.constructor = TrnsprtDataSet;
TrnsprtDataSet.prototype.check = function () {
  this._party();
  var goods = ExSvr.getflds(['TrnsprtInf', 'TrnsprtdGoods'], this.fld);
  var ids = [];
  for (var i = 0; i < goods.length; i++) {
    var item = goods[i];
    var item_id = ExSvr.get_val(['PurchsOrdrRef', 'Id'], item);
    if (Ex.in_list(item_id, ids)) {
      ExSvr.add_err('Error.Unique', ['Should be unique ', full_path, 'LineItmId', item_id]);
    } else {
      ids.push(item_id);
    }
  }
  // check rtg
  var rtgs = ExSvr.getflds(['TrnsprtInf', 'RtgSummry'], this.fld);
  for (var i = 0; i < rtgs.length; i++) {
    var item = rtgs[i];
    var rtg = new RtgSummry(item);
    rtg.check();
  }
}
function InsrncDataSet(fld) {
  DataSet.call(this, fld);
}
InsrncDataSet.prototype = new DataSet();
InsrncDataSet.prototype.constructor = InsrncDataSet;
InsrncDataSet.prototype.check = function () {
  this._party();
}

function ComrclDataSet(fld, po_ids) {
  DataSet.call(this, fld);
  this.ttlNetAmt = 0;
  this.po_ids = po_ids;
}
ComrclDataSet.prototype = new DataSet();// Object.create(DataSet.prototype);
ComrclDataSet.prototype.constructor = ComrclDataSet;
ComrclDataSet.prototype.check = function () {
  Mx.chk_ccyAmt(this.fld, true);
  this._party();
  var goods = ExSvr.getflds('Goods', this.fld);
  for (var i = 0; i < goods.length; i++) {
    var item = goods[i];
    var item_id = ExSvr.get_val(['PurchsOrdrRef', 'Id'], item);
    if (!Ex.in_list(item_id, this.po_ids)) {
      ExSvr.add_err('Error.PoRef', ['Should in list ', this.full_path, 'Goods', 'PurchsOrdrRef', 'Id', item_id]);
    }

    this._lineitems(item);
    Mx.chk_either('Adjstmnt', ['ComrclLineItms', 'Adjstmnt'], item);
    Mx.chk_either('FrghtChrgs', ['ComrclLineItms', 'FrghtChrgs'], item);
    Mx.chk_either('Tax', ['ComrclLineItms', 'Tax'], item);
  }
  this._pmtTerms(this.fld);
}
ComrclDataSet.prototype._pmtTerms = function (parent) {
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

ComrclDataSet.prototype._lineitems = function (parent) {
  var flds = ExSvr.getflds('ComrclLineItms', parent);
  var ttlamt = 0;
  var ids = [];
  for (var i = 0; i < flds.length; i++) {
    var item = flds[i];
    var full_path = ExSvr.get_path(item);
    var item_id = ExSvr.get_val(['LineItmId'], item);
    if (Ex.in_list(item_id, ids)) {
      ExSvr.add_err('Error.Unique', ['Should be unique ', full_path, 'LineItmId', item_id]);
    } else {
      ids.push(item_id);
    }
    // Qty
    if (ExSvr.exist(['UnitPric'], item)) {
      var qty_cd = ExSvr.get_val(['Qty', 'UnitOfMeasrCd'], item);
      var pric_cd = ExSvr.get_val(['UnitPric', 'UnitOfMeasrCd'], item);
      if (!Ex.equals(qty_cd, pric_cd)) {
        ExSvr.add_err('Error.Diff', ['Should be same as Qty', full_path, 'UnitPric/UnitOfMeasrCd', item_id, qty_cd, pric_cd]);
      }
      qty_cd = ExSvr.get_val(['Qty', 'OthrUnitOfMeasr'], item);
      pric_cd = ExSvr.get_val(['UnitPric', 'OthrUnitOfMeasr'], item);
      if (!Ex.equals(qty_cd, pric_cd)) {
        ExSvr.add_err('Error.Diff', ['Should be same as Qty', full_path, 'UnitPric/OthrUnitOfMeasr', item_id, qty_cd, pric_cd]);
      }
      qty_cd = ExSvr.get_val(['Qty', 'Fctr'], item);
      pric_cd = ExSvr.get_val(['UnitPric', 'Fctr'], item);
      if (!Ex.equals(qty_cd, pric_cd)) {
        ExSvr.add_err('Error.Diff', ['Should be same as Qty', full_path, 'UnitPric/Fctr', item_id, qty_cd, pric_cd]);
      }
    }
    var qty_val = ExSvr.get_val(['Qty', 'Val'], item);
    if (Number(qty_val) < 0) {
      ExSvr.add_err('Error.Number', ['Must be positive.', 'Qty', 'Val', qty_val])
    }
    // tax amt > 0 need check.
    // 
    Mx.chk_duplicate('PdctIdr', ['StrdPdctIdr', 'Tp'], item, full_path);
    Mx.chk_duplicate('PdctIdr', ['OthrPdctIdr', 'IdTp'], item, full_path);

    Mx.chk_duplicate('PdctChrtcs', ['StrdPdctChrtcs', 'Tp'], item, full_path);
    Mx.chk_duplicate('PdctChrtcs', ['OthrPdctChrtcs', 'IdTp'], item, full_path);

    Mx.chk_duplicate('PdctCtgy', ['StrdPdctCtgy', 'Tp'], item, full_path);
    Mx.chk_duplicate('PdctCtgy', ['OthrPdctCtgy', 'IdTp'], item, full_path);
    // total amount
    var pric_amt = ExSvr.get_val(['UnitPric', 'Amt'], item);
    var adjst_amt = Mx.sum_amt('Adjstmnt', 'Amt', item);
    var chrgs_amt = Mx.sum_amt('FrghtChrgs/Chrgs', 'Amt', item);
    var tax_amt = Mx.sum_amt('Tax', 'Amt', item);
    var line_amt = ExSvr.get_val(['TtlAmt'], item);
    ttlamt += Number(line_amt);
    var line_amt_cal = qty_val * pric_amt + adjst_amt + chrgs_amt + tax_amt;
    if (Number(line_amt_cal) != Number(line_amt)) {
      ExSvr.debug('line amt: ' + line_amt_cal + ', ' + line_amt);
      // ExSvr.add_err('Error.LineItmsAmt',[line_amt_cal,line_amt, 'Qty', qty_val , pric_amt, adjst_amt, chrgs_amt, tax_amt]);
    }
  }
  var lineitms_ttlamt = ExSvr.get_val(['LineItmsTtlAmt'], parent);
  if (Number(ttlamt) != Number(lineitms_ttlamt)) {
    ExSvr.debug('ttl net: ' + ttlamt_cal + ', ' + ttlamt_net);
    // ExSvr.add_err('Error.LineItmsTtlAmt',[ttlamt,lineitms_ttlamt ]);
  }
  var p_adjst_amt = Mx.sum_amt('Adjstmnt', 'Amt', parent);
  var p_chrgs_amt = Mx.sum_amt('FrghtChrgs/Chrgs', 'Amt', parent);
  var p_tax_amt = Mx.sum_amt('Tax', 'Amt', parent);
  var ttlamt_net = ExSvr.get_val(['TtlNetAmt'], parent);
  this.ttlNetAmt += Number(ttlamt_net);

  var ttlamt_cal = lineitms_ttlamt + p_adjst_amt + p_chrgs_amt + p_tax_amt;
  // ExSvr.debug('ttl net: ' + ttlamt_cal +', '+ ttlamt_net +'; '+Number(ttlamt_cal)+', '+Number(ttlamt_net));
  if (Number(ttlamt_cal) != Number(ttlamt_net)) {
    ExSvr.debug('ttl net: ' + ttlamt_cal + ', ' + ttlamt_net);
//		ExSvr.add_err('Error.LineItmsAmt',[ttlamt_cal,ttlamt_net,'cal:',lineitms_ttlamt,p_adjst_amt,p_chrgs_amt,p_tax_amt ]);
  }
}
function check_mfvr() {
  // ExSvr.debug('mfvr:');
  var flds = ExSvr.getflds('RltdTxRefs', null);
  var po_ids = [];
  for (var i = 0; i < flds.length; i++) {
    var item = flds[i];
    var item_id = ExSvr.get_val(['PurchsOrdrRef', 'Id'], item);
    po_ids.push(item_id);
  }
//	var val = ExSvr.get_val('Document/DataSetSubmissn/ComrclDataSet/DataSetId/Submitr/BIC', null);
//	ExSvr.debug(''+val);
  var flds = ExSvr.getflds('ComrclDataSet', null);
  if (!flds || flds.length == 0) {
  } else if (flds.length == 1) {
    var ds_com = new ComrclDataSet(flds[0], po_ids);
    ds_com.check();
  } else {
    ExSvr.add_err('Error. ComrclDataSet', [flds.length]);
  }
  flds = ExSvr.getflds('TrnsprtDataSet', null);
  if (!flds || flds.length == 0) {
  } else if (flds.length == 1) {
    var ds_com = new TrnsprtDataSet(flds[0], po_ids);
    ds_com.check();
  } else {
    ExSvr.add_err('Error. TrnsprtDataSet ', [flds.length]);
  }
}
