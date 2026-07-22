var APPL_RESP_DISC = DV.getFieldValue("APPL_RESP_DISC");
var DOC_STAT = DV.getFieldValue("DOC_STAT");
var ADV_APPL_FLG = DV.getFieldValue("ADV_APPL_FLG");

DV.writeLog("APPL_RESP_DISC " + APPL_RESP_DISC);
DV.writeLog("DOC_STAT " + DOC_STAT);
DV.writeLog("ADV_APPL_FLG " + ADV_APPL_FLG);

if (APPL_RESP_DISC == 'Discrepancies Rejected Hold Docs' || APPL_RESP_DISC == 'Discrepancies Rejected Return Docs' || (DOC_STAT == 'Discrepancy Found' && (ADV_APPL_FLG == 'Yes' || ADV_APPL_FLG == 'No'))) {
    DV.appendField("IPLC_RegDoc_PRES_BAL_toMaster_Discrepany");
}