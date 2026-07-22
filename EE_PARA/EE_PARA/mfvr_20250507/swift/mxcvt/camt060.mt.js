function merge(){
    var now = new Date();
  	var t = now.toMxString();
  	stp.setData("/AcctRptgReq/GrpHdr/CreDtTm", t);
}
function demerge(){
  rule="fin.920.ESP";
  //console.log(' demerge test...');
}
