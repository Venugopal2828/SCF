DV.appendField("IPLC_Doc_Check_Internal");

var DOC_STAT = DV.getFieldValue("DOC_STAT");
if(DOC_STAT == 'Compliant'){
 DV.appendField("IPLC_NoticeofArrival_comply");
} else {
 DV.appendField("IPLC_NoticeofArrival_Discrepant");	
}