var CANCEL_AMD_FLG = DV.getFieldValue("CANCEL_AMD_FLG");
if (CANCEL_AMD_FLG == 'No') {
    DV.appendField("REIM_REIM_Amendment_master");
    DV.appendField("REIM_REIM_Amendment_event_self");
    DV.appendField("REIM_REIM_Amendment_event_register");
}