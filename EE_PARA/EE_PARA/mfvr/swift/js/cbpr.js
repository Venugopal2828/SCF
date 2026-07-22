
var Cbpr = function () {
}
Cbpr.frParty = function (path) {
  Cbpr.frStructVsUnStruct(path+'/PstlAdr');
  if (ExSvr.exist(path+'/PstlAdr', null) && !ExSvr.exist(path+'/Nm', null)) {
    ExSvr.add_err('CBPR_Party_Name_Postal_Address_FormalRule', path);
  }
}
Cbpr.frStructVsUnStruct = function (parent) {
  // CBPR_Structured_vs_Unstructured_FormalRule"
  // If PostalAddress is used and if AddressLine is present, then all other optional elements in PostalAddress must be absent.
  // tsu amt 3 digist.
  // only one ccy  //*[@foo]
  var ccy = null;
  var nms = ExSvr.getChildNames(parent);
  if (nms != null && nms.length > 1){
    ExSvr.debug(nms);
    if (nms.indexOf('AdrLine') > -1){
      ExSvr.debug('2');
      var nn = nms.replaceAll('AdrLine', '').replaceAll(',', '');
      if (nn.length > 0){
        ExSvr.add_err('CBPR_Structured_vs_Unstructured_FormalRule', [parent]);
      }
    } else {
      ExSvr.debug('3');
      if (nms.indexOf('Ctry') == -1 && nms.indexOf('TwnNm') == -1){
        ExSvr.add_err('TownNameAndCountryRule', [parent]);
      }
    }
  }
}
