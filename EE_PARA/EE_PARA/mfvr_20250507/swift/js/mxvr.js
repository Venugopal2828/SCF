
var Mx = function () {
}
Mx.chk_ccyAmt = function (parent, sameccy) {
  // tsu amt 3 digist.
  // only one ccy  //*[@foo]
  var ccy = null;
  var flds = ExSvr.getflds('//*[@Ccy]', parent);
  for (var i = 0; i < flds.length; i++) {
    var item = flds[i];
    // ExSvr.debug(fld);
    var ok = ExSvr.chk_ccy('@Ccy', null, item);
    // var ok = ExSvr.chk_ccy('@Ccy', '.',item);
    if (!ok) {
      ExSvr.add_err('D00007', [ExSvr.get_path(item), ExSvr.get_val('@Ccy', item), ExSvr.get_val('.', item)]);
    }
    //
    if (sameccy) {
      var val = ExSvr.get_val('@Ccy', item);
      if (ccy == null) {
        ccy = val;
      } else if (!Ex.equals(ccy, val)) {
        ExSvr.add_err('Error.Unique', ['Should be same CCY', ExSvr.get_path(item), ccy, val]);
      }
    }
  }
}
// Ctry
Mx.chk_country = function (parent) {
  var ccy = null;
  var flds = ExSvr.getflds('//Ctry', parent);
  for (var i = 0; i < flds.length; i++) {
    var item = flds[i];
    var v = ExSvr.get_val('.', item);
    // ExSvr.debug(' --- ' + v);
    var ok = ExSvr.checkCountryCode(v);
    if (!ok) {
      ExSvr.add_err('D00004', [ExSvr.get_path(item), v]);
    }
  }
  var flds1 = ExSvr.getflds('//CtryOfBirth', parent);
  if (flds1 && flds1.length > 0) {
    for (var i = 0; i < flds1.length; i++) {
      var item = flds1[i];
      var v = ExSvr.get_val('.', item);
      // ExSvr.debug(' --- ' + v);
      var ok = ExSvr.checkCountryCode(v);
      if (!ok) {
        ExSvr.add_err('D00004', [ExSvr.get_path(item), v]);
      }
    }
  }
  flds1 = ExSvr.getflds('//CtryOfRes', parent);
  if (flds1 && flds1.length > 0) {
    for (var i = 0; i < flds1.length; i++) {
      var item = flds1[i];
      var v = ExSvr.get_val('.', item);
      // ExSvr.debug(' --- ' + v);
      var ok = ExSvr.checkCountryCode(v);
      if (!ok) {
        ExSvr.add_err('D00004', [ExSvr.get_path(item), v]);
      }
    }
  }
}
Mx.chk_iban = function (parent) {
  var ccy = null;
  var flds = ExSvr.getflds('//IBAN', parent);
  for (var i = 0; i < flds.length; i++) {
    var item = flds[i];
    var v = ExSvr.get_val('.', item);
    var ok = ExSvr.chk_iban_val(v);
    if (!ok) {
      ExSvr.add_err('D00003', [ ExSvr.get_path(item), v]);
    }
  }
}

// if left exist, then right is not allowed.
Mx.chk_either = function (left, right, parent) {
  if (ExSvr.exist(left, parent) && ExSvr.exist(right, parent)) {
    ExSvr.add_err('Error.Either', left, ' ', right);
  }
}
// if left exist, then right must exist.
Mx.chk_right = function (left, right, parent) {
  if (ExSvr.exist(left, parent) && !ExSvr.exist(right, parent) ) {
    ExSvr.add_err('Error.Must', ['Invalid message content for'].concat(left));
  }
}
Mx.chk_date = function (earlst, latst, parent) {
  // earlst
  var dt_e = ExSvr.get_val(earlst, parent);
  var dt_l = ExSvr.get_val(latst, parent);
  if (dt_e && dt_l && ExSvr.compare(dt_e, dt_l, 0) > 0) {
    // big than today, error!
    ExSvr.add_err('Error.Date', ['EarlstShipmntDt must before LatstShipmntDt.', 'Baseln/Goods/ShipmntDtRg/EarlstShipmntDt', dt_e]);
  }

}

Mx.sum_amt = function (name, key, parent, p_name) {
  if (!ExSvr.exist(name, parent)) return 0;
  var items = ExSvr.getflds(name, parent);
  var ttl = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var val = ExSvr.get_val(key, item);
    ttl += Number(val);
  }
  return Number(ttl);

}
Mx.sum_amt_rate = function (name, key, parent, base_amt) {
  if (!ExSvr.exist(name, parent)) return 0;
  var items = ExSvr.getflds(name, parent);
  var ttl = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var val = ExSvr.get_val(key, item);
    ttl += Number(val) * base_amt / 100;
  }
  return Number(ttl);

}
Mx.chk_tlrnce = function (name, parent, p_name) {
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
Mx.chk_duplicate = function (name, key, parent, p_name) {
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
Mx.loop2ary = function (name, key, parent, p_name) {
  var ids = [];
  if (!ExSvr.exist(name, parent)) return ids;
  var items = ExSvr.getflds(name, parent);
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
  return ids;
}

/**
 * TBD:
 * 001: '820','821','823','824'
 */
Ex.mfvr.ruleD00000 = function (mx) {
  ExSvr.debug('rule Sw.Stds.D00000 ');
}
Ex.mfvr.ruleActiveCurrency = function (mx, flds) {
  var pass = ExSvr.chk_ccy(flds, null, null);
  if (!pass) {
    ExSvr.add_err('Sw.Stds.D00005', ['Invalid currency code', flds]);
  }
}
Ex.mfvr.ruleAnyBIC = function (mx, flds) {
  ExSvr.debug('rule AnyBIC ');
  if (flds) {
    var v = ExSvr.bic_info(flds, null, null);
    if (v == null) {
      var v86 = ExSvr.get_val(flds, null);
      ExSvr.add_err('Sw.Stds.D00008', ['Invalid BIC or BEI', flds, v86]);
    } else {
      // ExSvr.debug('rule AnyBIC  ' + v);
    }
  }
  //	ExSvr.add_err('Sw.Stds.D00008', ['Invalid BIC or BEI', flds] );
}
Ex.mfvr.ruleBEI = function (mx, flds) {
}
Ex.mfvr.ruleBIC = function (mx, flds) {
}
Ex.mfvr.ruleConfirmationAndReturnInformation = function (mx, flds) {
  // If the InvestigationStatus is NOT a Confirmation with value MODI or CNCL, then ReturnInformation is not allowed.
}
Ex.mfvr.ruleCountry = function (mx, flds) {
  var pass = ExSvr.chk_cnty(flds);
  if (!pass) {
    ExSvr.add_err('Sw.Stds.D00007', ['Invalid currency code or too many decimal digits', 'SeqB', 'F32B']);
  }
}
Ex.mfvr.ruleCurrencyAmount = function (mx, flds) {
  // ExSvr.debug(' this ' + Ex.mfvr.ver + ', param ' +", " + this.ver);
  if (this.ver == '0905') {
    ExSvr.add_err('Sw.Stds.D00007', [' 0905 not support!']);
    return;
  }
  var pass = ExSvr.chk_ccy(flds + '/@Ccy', flds, null);
  if (!pass) {
    ExSvr.add_err('Sw.Stds.D00007', ['Invalid currency code or too many decimal digits', flds]);
  }
}
Ex.mfvr.ruleIBAN = function (mx, flds) {
  //Invalid IBAN format or invalid check digits
}
Ex.mfvr.ruleInstructedAmountAndRequestedExecutionDateRule = function (mx, flds) {
  var b1 = ExSvr.exist('//ReqdExctnDt');
  var b2 = ExSvr.exist('//InstdAmt');
  if (b1 != b2) {
    ExSvr.add_err('Sw.Camt.D0000X', ['Mandatory ', 'ReqdExctnDt', 'InstdAmt']);
  }
}
Ex.mfvr.ruleInterbankSettlementAmountAndDateRule = function (mx, flds) {
  var b1 = ExSvr.exist('//IntrBkSttlmAmt');
  var b2 = ExSvr.exist('//IntrBkSttlmDt');
  if (b1 != b2) {
    ExSvr.add_err('Sw.Camt.D00008', ['Mandatory ', 'IntrBkSttlmAmt', 'IntrBkSttlmDt']);
  }
}

Ex.mfvr.ruleD00001 = function (mx) {
  // var bic = ExSvr.get_val(['FinInstnId','BIC'], null);
  // ExSvr.debug('bic: ' + bic);
  // FinInstnId/BIC
  // var bic = ExSvr.getflds(['FinInstnId','BIC'], null);
  // var v = ExSvr.bic_info(ary, null, 'SUBTYPE_INDICATION');
  var loop1 = ExSvr.getflds(['FinInstnId'], null);
  ExSvr.debug('bic 000: ');
  for (var nd in loop1) {
    //if (typeof loop1[nd] == 'function') continue;
    var v = ExSvr.bic_info(['BICFI'], loop1[nd], 'SUBTYPE_INDICATION');
    if (v == null) {
      var v86 = ExSvr.get_val(['BICFI'], loop1[nd]);
      // ExSvr.debug('bic 2: ' + v86);
      ExSvr.add_err('Sw.Stds.D00001', ['Invalid BIC Code', 'FinInstnId', 'BIC', v86]);
    }
  }
  //		ExSvr.add_err('C05', 'a' );
}
Ex.mfvr.ruleD00099 = function (mx) {
}
Mx.chk_eitherError = function(left,right,parent,error){
  if (ExSvr.exist(left, parent) && ExSvr.exist(right, parent)) {
    ExSvr.add_err(error, [ExSvr.get_path(parent),' ', left, ' ', right]);
  }
}
Mx.chk_nonError = function(left,right,exist,parent,error){
  if(ExSvr.exist(exist, parent)){
    if (!ExSvr.exist(left, parent) && !ExSvr.exist(right, parent)) {
      ExSvr.add_err(error, left, right);
    }
  }
}
Mx.chk_rightError = function (left, right, parent,error) {
  if (ExSvr.exist(left, parent) && !ExSvr.exist(right, parent) ) {
    ExSvr.add_err(error, [ExSvr.get_path(parent), left]);
  }
}
Mx.Chk_equal = function(left,leftParent,right,rightParent,error){
  if(ExSvr.exist(left,leftParent)&&ExSvr.exist(right,rightParent)){
    var leftValue = ''+ExSvr.get_val(left,leftParent);
    var rightValue = ''+ExSvr.get_val(right,rightParent);
    if(leftValue!=rightValue){
      // ExSvr.debug(leftValue + '   ' + (typeof leftValue) )
      // ExSvr.debug(rightValue + '   ' + (typeof rightValue))
      ExSvr.add_err(error, [left,leftValue, ' Must equal ', right, rightValue]);
    }
  }
}
Mx.chk_eithers = function(left,right,parent,error){
  for(var i =0;i<right.length;i++){
    var item = right[i];
    Mx.chk_eitherError(left,item,parent,error);
  }
}
Mx.chk_Slash = function(value,error, index){
  if(value==null) return;
  if ( 'string' != (typeof value)) value = ''+value;
  if(value.length==0) return;
    if(value.length>=16){
      value = value.substring(0,16);
    }
    if (index > 1 ) {
      // check index pos is not /
      ExSvr.debug( ' ---- '+ value.length  + ' '+ (index) + '   ' + String(value.charAt(index-1))  + ' -- ' + (value.length>=index) );
      if(value.length>=index && value.charAt(index-1) == '/') {
        ExSvr.add_err(error, 'Slash error:'+value);
      }
    } else {
      index = value.length-1;
      if (value.charAt(index)=='/') ExSvr.add_err(error, 'Slash error:'+value);
    }
    if(value.charAt(0)=='/'||value.indexOf('//')!=-1){
      ExSvr.add_err(error, 'Slash error:'+value);
    }
}
Mx.chk_TwnNmAndCtry = function(path,parent){
  if(ExSvr.exist(path,parent)){
    //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
    var PstlAdr = ExSvr.getflds(path, parent);
    Mx.chk_eithers('AdrLine',['Dept','SubDept','StrtNm','BldgNb','BldgNm','Flr','PstBx','Room','PstCd','TwnNm','TwnLctnNm','DstrctNm','CtrySubDvsn','Ctry'],PstlAdr[0],
      'StructuredvsUnstructuredRule');
    if(!ExSvr.exist('AdrLine',PstlAdr[0])){
      if(!ExSvr.exist('Ctry',PstlAdr[0])||!ExSvr.exist('TwnNm',PstlAdr[0])){
        var pp = parent ? ExSvr.get_path(parent) : '';
        ExSvr.add_err('TownNameAndCountryRule',pp+path+' AdrLine absent,Ctry and TwnNm must exist!');
      }
    }
  }
}
Mx.chk_TwnNmAndCtryForPain = function(path,parent){
  if(ExSvr.exist(path,parent)){
    //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
    var PstlAdr = ExSvr.getflds(path, parent);
    Mx.chk_eithers('AdrLine',['Dept','SubDept','StrtNm','BldgNb','BldgNm','Flr','PstBx','Room','PstCd','TwnNm','TwnLctnNm','DstrctNm','CtrySubDvsn'],PstlAdr[0],
    'StructuredvsUnstructuredRule');
    if(!ExSvr.exist('AdrLine',PstlAdr[0])){
      if(!ExSvr.exist('Ctry',PstlAdr[0])||!ExSvr.exist('TwnNm',PstlAdr[0])){
        ExSvr.add_err('TownNameAndCountryRule',path+' AdrLine absent,Ctry and TwnNm must exist!');
      }
    }
  }
}
//normal FinInstnId
Mx.chk_nomalFinInstnId = function(path,parent){
  if(ExSvr.exist(path,parent)){
    var pathNodes = ExSvr.getflds(path,parent);
    for(var i=0;i<pathNodes.length;i++){
      var pathNode = pathNodes[i];
      //CBPR_Agent_Name_Postal_Address_FormalRule
      Mx.chk_rightError('FinInstnId/Nm','FinInstnId/PstlAdr',pathNode,'CBPR_Agent_Name_Postal_Address_FormalRule');
      Mx.chk_rightError('FinInstnId/PstlAdr', 'FinInstnId/Nm',pathNode,'CBPR_Agent_Name_Postal_Address_FormalRule');
      //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
      Mx.chk_TwnNmAndCtry('FinInstnId/PstlAdr',pathNode);
    }
  }
}

//regexp
Mx.chk_regexp = function(pattern,path,error){
  if(ExSvr.exist(path)){
    var OrgnlMsgNm =ExSvr.get_val(path);
    var reg = new RegExp(pattern);
    if(!reg.test(OrgnlMsgNm)){
      ExSvr.add_err(error,path + ',['+OrgnlMsgNm+'] not match rule '+pattern);
    }
  }
}
//noregexp
Mx.chk_noregexp = function(pattern,path,error){
  if(ExSvr.exist(path)){
    var OrgnlMsgNm =ExSvr.get_val(path);
    var reg = new RegExp(pattern);
    if(reg.test(OrgnlMsgNm)){
      ExSvr.add_err(error,path+' not match rule '+pattern);
    }
  }
}
//ccy rule
Mx.chk_ccyRule=function(path,parent,error){
  if(ExSvr.exist(path,parent)){
    var IntrBkSttlmAmt = ExSvr.getflds(path,parent)[0];
    var Ccy = IntrBkSttlmAmt.getAttributes().getNamedItem("Ccy").getTextContent();
    if(Ccy=='XAU'||Ccy=='XAG'||Ccy=='XPD'||Ccy=='XPT'){
      ExSvr.add_err(error,path+'@Ccy can not equal XAU|XAG|XPD|XPT');
    }
  }
}
//CBPR_Debtor_Creditor
Mx.chk_DCBICFI=function(path,parent,pattern,error){
  if(ExSvr.exist(path+'/CdtrAgt/FinInstnId/BICFI')&&ExSvr.exist(path+'/DbtrAgt/FinInstnId/BICFI')){
    var CdtrAgtBICFI=ExSvr.get_val(path+'/CdtrAgt/FinInstnId/BICFI');
    var DbtrAgtBICFI=ExSvr.get_val(path+'/DbtrAgt/FinInstnId/BICFI');
    var reg = new RegExp(pattern);
    if(reg.test(CdtrAgtBICFI)&&reg.test(DbtrAgtBICFI)){
      if(!ExSvr.exist(path+'/Dbtr/Nm')||!ExSvr.exist(path+'/DbtrAcct/Id/IBAN')||!ExSvr.exist(path+'/Cdtr/Nm')||!ExSvr.exist(path+'/CdtrAcct/Id/IBAN')){
        ExSvr.add_err(error,'name and IBAN must exist because Dbtr and Cdtr Agt/FinInstnId/BICFI');
      }
    }
  }
}
//BIC_1_FormalRule++++++++BIC_2_FormalRule
Mx.chk_FromTo=function(FromCorrespond,ToCorrespond,parent,error){
  var envelope =  ExSvr.getRoot();
  if(ExSvr.exist(['AppHdr','CpyDplct'],envelope)){
    var cpyDplct = ExSvr.get_val(['AppHdr','CpyDplct'],envelope)
    if(cpyDplct!='COPY'&&cpyDplct!='CODU'){
      Mx.Chk_equal('AppHdr/Fr/FIId/FinInstnId/BICFI',envelope,FromCorrespond+'/FinInstnId/BICFI',parent,error+'_BIC_1_FormalRule');
      Mx.Chk_equal('AppHdr/To/FIId/FinInstnId/BICFI',envelope,ToCorrespond+'/FinInstnId/BICFI',parent,error+'_BIC_1_FormalRule');
    }
  }else{
    Mx.Chk_equal('AppHdr/Fr/FIId/FinInstnId/BICFI',envelope,FromCorrespond+'/FinInstnId/BICFI',parent,error+'_BIC_2_FormalRule');
    Mx.Chk_equal('AppHdr/To/FIId/FinInstnId/BICFI',envelope,ToCorrespond+'/FinInstnId/BICFI',parent,error+'_BIC_2_FormalRule');
  }
}
//Page and Last_Page FormalRule
Mx.chk_BalCd=function(BalPath,Cd,judge,error){
  var num=0;
  var Bals=ExSvr.getflds(BalPath,null);
  for(var i=0;i<Bals.length;i++){
    var CdOrPrtry=ExSvr.get_val('Tp/CdOrPrtry/Cd',Bals[i]);
    if(CdOrPrtry==Cd){
      num=num+1;
      if(ExSvr.exist('Tp/SubTp/Cd',Bals[i])&&!(ExSvr.get_val('Tp/SubTp/Cd',Bals[i])=='INTM'^judge)){
        ExSvr.add_err(error,'SubTp/Cd related to INTM');
      }
    }
  }
  if(num!=1){
    ExSvr.add_err(error,cd+' can only appear once');
  }
}
//Ccy Equal FormalRule
Mx.chk_CcyEqual=function(TotalPath,AmtPath,error){
  if(ExSvr.exist(TotalPath)){
    var TtlAmt=ExSvr.getflds(TotalPath,null)[0];
    var TtlAmtCcy = ''+TtlAmt.getAttributes().getNamedItem("Ccy").getTextContent();
    var ItmAmt=ExSvr.getflds(AmtPath,null);
    for(var i=0;i<ItmAmt.length;i++){
      var Ccy = ''+ItmAmt[i].getAttributes().getNamedItem("Ccy").getTextContent();
      // ExSvr.debug('['+(typeof TtlAmtCcy) +'] ---- [' + (typeof Ccy) + ']   - ' + i + ' : ' + (TtlAmtCcy!=Ccy))
      if(TtlAmtCcy!=Ccy){
        ExSvr.add_err(error,TotalPath+' Ccy not equal '+AmtPath+' Ccy');
        break;
      }
    }
  }
}