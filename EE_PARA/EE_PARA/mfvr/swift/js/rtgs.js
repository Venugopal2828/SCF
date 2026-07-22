
var Rtgs = function () {
}
Rtgs.hkiclMbid = function (path) {
  if ('HKNCC'==ExSvr.get_val(path+'/FinInstnId/ClrSysMmbId/ClrSysId/Cd', null)) {
    var id = ExSvr.get_val(path+'/FinInstnId/ClrSysMmbId/MmbId', null);
    if (!(/^[A-Z0-9]{3}$/.test(id))) {
      ExSvr.add_err('HKRTGS_ClearingMemberID', [path+'/FinInstnId/ClrSysMmbId/ClrSysId/MmbId', id]);
    }
  }
}
Rtgs.hkiclSysRef = function (path) {
  //  6!n1!a8!n1!a15d,
  var ref = ExSvr.get_val(path,null);
  if (!ref) return;
  ref = ''+ref;
  if (ref.length <17) {
    ExSvr.add_err('HKRTGS_ClearingSystemReference', [path, ref] );
    return;
  }
  var tm = ref.substring(0, 6);
  var r0 = ref.substring(6, 16);
  var amt = ref.substring(16);
  // ExSvr.debug(ref + '  ' + tm + '  ' + r0 + '  ' + amt);
  if (!ExSvr.checkTime('HHMMSS', tm) ){
    ExSvr.add_err('HKRTGS_ClearingSystemReference', [path, ref, ' HHMMSS: ', tm] );
  }
  if (/^(([A-Z]{1}[0-9]{8})|([A-Z]{1}P[0-9]{7}))(C|D)$/.test(r0)){
  } else {
    ExSvr.add_err('HKRTGS_ClearingSystemReference', [path, ref, ' HRN: ', r0] );
    return;
  }
  //  amt maybe ---OVERFLOW----
  if ('---OVERFLOW----' == amt) {
  return;
  }
  // ExSvr.debug( ' amt ' + amt + '  ' + amt.length);
  if (amt.length > 15) {
    ExSvr.add_err('HKRTGS_ClearingSystemReference', [path, ref, amt] );
  } else if (/^\d+(\.\d+)?$/.test(amt)){
    var a0 = Number(amt);
    if (a0 > 999999999999.99){
    ExSvr.add_err('HKRTGS_ClearingSystemReference', [path, ref, amt] );
    }
  } else {
    ExSvr.add_err('HKRTGS_ClearingSystemReference', [path, ref, amt] );
  }
}
Rtgs.hvpParties = function (path, parent) {
  if(!ExSvr.exist(path,parent)) return;
    if (!ExSvr.exist(path+'/Id/OrgId/AnyBIC', parent) && !( ExSvr.exist(path+'/Nm', parent) && ExSvr.exist(path+'/PstlAdr', parent))) {
      var pp = parent ? ExSvr.get_path(parent)+'/' : '';
      ExSvr.add_err('HVPPlus_PartiesRule', pp+path);
    }
}
Rtgs.hvpAgents = function (path, parent) {
  if(!ExSvr.exist(path,parent)) return;
    if (!ExSvr.exist(path+'/FinInstnId/BICFI', parent) && !( ExSvr.exist(path+'/FinInstnId/Nm', parent) && ExSvr.exist(path+'/FinInstnId/PstlAdr', parent))) {
      var pp = parent ? ExSvr.get_path(parent)+'/' : '';
      ExSvr.add_err('HVPPlus_AgentsRule', pp+path);
    }
}