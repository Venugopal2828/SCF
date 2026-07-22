ExSvr.require('mfvr.js');
ExSvr.require('mxvr.js');
ExSvr.require('mxvr/tsmt.js');
ExSvr.require('mxvr/baseln.js');

function check_mfvr() {
  var mode = ExSvr.get_val('Instr/Tp', null);
  var flds = ExSvr.getflds('Baseln', null);
  if (!flds || flds.length == 0) {
  } else if (flds.length == 1) {
    var bs = new Baseln(flds[0], mode);
    bs.check();
    var msg_sender = ExSvr.getData("senderBk");
    var submtr = ExSvr.get_val('SubmitrBaselnId/Submitr/BIC', flds[0]);
    if (ExSvr.has(msg_sender) && !Ex.equals(msg_sender, submtr)) {
      ExSvr.add_err('MsgSubmttrNotDocSubmttr', ['Message submitter ', msg_sender, ' does not match document submitter ', submtr, '. [BUSINESS]']);
    }
  } else {
    ExSvr.add_err('Error.Baseln', [flds.length]);
  }
}