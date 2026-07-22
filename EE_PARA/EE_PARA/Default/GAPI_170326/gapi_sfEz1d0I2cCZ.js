var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
var CUST_TYPE = DV.getFieldValue("CUST_TYPE");
var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");
var FA_ANCHOR_AMT = DV.getFieldValue("FA_ANCHOR_AMT");
/*var SELF_ENROL = DV.getFieldValue("SELF_ENROL");*/

/*var SELF_ENROL = DV.getFieldValue("FA_COUNTER_REG_NO");*/


/*DV.writeLog("FA_BUSI_TYPE=" + FA_BUSI_TYPE);

if (FA_BUSI_TYPE == 'SF' || FA_BUSI_TYPE == 'DD') {
    DV.appendField("FADA_SignAgreement_EE2CE_Buyer_ME");
} else if (FA_BUSI_TYPE == 'RD') {
    DV.appendField("FADA_SignAgreement_EE2CE_Seller_ME");
}*/

/*if((FA_BUSI_TYPE=='RD')&&(FA_SERVICE_REQ=='1'))
{
DV.appendField("FADA_Auto_AnchorLimit");
DV.appendField("FADA_Auto_CounterLimit_ME");
}
else
{
DV.appendField("FADA_Auto_AnchorLimit");  
}*/

/*if(SELF_ENROL =='YES')
{
DV.appendField("FADA_AgmToCE");
}*/

/* Loop through Counterparty records - if FA_COUNTER_ID is null, append FADA_AgmToCE */
var counterpartyRecords = DV.getRecords("Counterparty");
var hasSelfEnrol = false;
for (var i = 0; i < counterpartyRecords.length; i++) {
    var faCounterId = DV.getDOValue(counterpartyRecords[i], "FA_COUNTER_ID");
    if (faCounterId == null || faCounterId == "") {
        hasSelfEnrol = true;
    }
}
//if (hasSelfEnrol) {
    DV.appendField("FADA_AgmToCE");
//}

if(FA_SERVICE_REQ!='1' && FA_ANCHOR_AMT >0)
{
	DV.appendField("FADA_Auto_AnchorLimit");
}


if(CUST_TYPE=='T1')
{
	//DV.appendField("FADA_AGM_SEND_CE_ANCHOR");
}

  