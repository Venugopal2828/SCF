
function RtgSummry(fld) {
  this.fld = fld;
  this.full_path = ExSvr.get_path(this.fld);
}
RtgSummry.prototype.check = function () {
  var by_air = ExSvr.getflds(['IndvTrnsprt', 'TrnsprtByAir'], this.fld);
  var by_sea = ExSvr.getflds(['IndvTrnsprt', 'TrnsprtBySea'], this.fld);
  var by_road = ExSvr.getflds(['IndvTrnsprt', 'TrnsprtByRoad'], this.fld);
  var by_rail = ExSvr.getflds(['IndvTrnsprt', 'TrnsprtByRail'], this.fld);
  var count = by_air.length + by_sea.length + by_road.length + by_rail.length;
  if (count < 1) {
    ExSvr.add_err('Error.IndvTrnsprt', ['At least one.', this.full_path]);
    return;
  }
  Mx.chk_duplicate(['IndvTrnsprt', 'TrnsprtByAir'], ['DstnAirprt', 'AirprtCd'], this.fld);
  Mx.chk_duplicate(['IndvTrnsprt', 'TrnsprtBySea'], ['PortOfDschrge'], this.fld);
  Mx.chk_duplicate(['IndvTrnsprt', 'TrnsprtByRoad'], ['PlcOfDlvry'], this.fld);
  Mx.chk_duplicate(['IndvTrnsprt', 'TrnsprtByRail'], ['PlcOfDlvry'], this.fld);

}