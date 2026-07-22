var APPL_RESP_DISC = DV.getFieldValue("APPL_RESP_DISC");
if (APPL_RESP_DISC == "Discrepancies Accepted" || APPL_RESP_DISC == "Discrepancies Accepted Provided") {
    DV.appendField("IPLC_IMLC_015_PmtAdv");
}