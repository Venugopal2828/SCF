// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
	var b4 = msg.get("TEXT");
    var now = new Date();
	var t = now.toMxString();
	stp.setData("/FIDrctDbt/GrpHdr/CreDtTm", t);

	Mxcvt.fin("/FIDrctDbt/CdtInstr/CdtrAgt", b4, 'SeqA/Choice_57ABD')
	Mxcvt.acc("/FIDrctDbt/CdtInstr/CdtrAgtAcct", b4, 'SeqA/Choice_57ABD')
	Mxcvt.fin("/FIDrctDbt/CdtInstr/Cdtr", b4, 'SeqA/Choice_58AD')
	Mxcvt.acc("/FIDrctDbt/CdtInstr/CdtrAcct", b4, 'SeqA/Choice_58AD')
	//

}

function demerge(){
  rule="fin.204.ESP";
  // party
   Mxcvt.mx2mtParty('SeqA/Choice_57ABD', root, "CdtInstr/CdtrAgt", "CdtInstr/CdtrAgtAcct", 'fin')
  Mxcvt.mx2mtParty('SeqA/Choice_58AD', root, "CdtInstr/Cdtr", "CdtInstr/CdtrAcct", 'fin')
	//
	var DbtDtTm = stp.xml(root, "CdtInstr/DrctDbtTxInf/IntrBkSttlmAmt","17d");
	stp.setData("TEXT/SeqA/F19", DbtDtTm);
	stp.log('test');
}


