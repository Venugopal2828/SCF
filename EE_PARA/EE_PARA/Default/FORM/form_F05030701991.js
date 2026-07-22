var APPL_RESP_DISC = DV.getFieldValue("APPL_RESP_DISC");
if(APPL_RESP_DISC == 'Discrepancies Rejected Hold Docs'|| APPL_RESP_DISC == 'Discrepancies Rejected Return Docs') {
	DV.appendField("IPLC_Cover_Letter_for_Rejection");
}

DV.appendField("IPLC_APPLICANT_RESPONSE");