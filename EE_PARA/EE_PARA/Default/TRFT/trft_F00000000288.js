stp.writeLog('Begin process Incoming MTr767');
stp.setAutoProcess(true);

var ref = stp.SYS_getRefNo('IWGTEERef');
var d = new Date();
var yr = d.getFullYear();
var sys = yr.toString();
var year = sys.toString().substr(2, 2);
var C_MAIN_REF = ref + "/" + year;
stp.writeLog('C_MAIN_REF=' + C_MAIN_REF);

var s77C = stp.getSWIFTTagValue("77C");
var s72 = stp.getSWIFTTagValue("72");
var s23 = stp.getSWIFTTagValue("23");
stp.writeLog('s77C' + s77C);
stp.writeLog('s72' + s72);

stp.updateFieldValue('C_MAIN_REF', C_MAIN_REF);
stp.updateFieldValue("FORM_OF_GTEE", "Inward");
stp.updateFieldValue("CURR_STATUS", "Incoming767");
stp.updateFieldValue("NXT_STATUS", "DemergeMT767");
stp.updateFieldValue("AMD_NON_STD_WORDNG", s77C);
stp.updateFieldValue("SEND_TO_RCV_INFO", s72);
stp.setEventTimes(0);
stp.writeLog('End process Incoming MTr767');