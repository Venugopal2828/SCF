var sOrdInsBIC = DV.getFieldValue("X202_ORDBK_SW_52A");

if (sOrdInsBIC!= '' ) {
	DV.appendTag("52A");
}
var sOrdInsBIC = DV.getFieldValue("X202_ORDBK_SW_52A");

if (sOrdInsBIC == '' ) {
	DV.appendTag("52D");
}
var sSendCorresBIC = DV.getFieldValue("X202_SENDCORRSW53A");

if ( sSendCorresBIC != '' ) {
	DV.appendTag("53A");
}
var sSendCorresBIC = DV.getFieldValue("X202_SENDCORRSW53A");
var sSendCorresTag = DV.getFieldValue("X202_TAG_53A");

if ( sSendCorresBIC == ''  && sSendCorresTag.equals('B') ) {
	DV.appendTag("53B");
}
var sSendCorresBIC = DV.getFieldValue("X202_SENDCORRSW53A");
var sSendCorresTag = DV.getFieldValue("X202_TAG_53A");

if ( sSendCorresBIC == ''  && sSendCorresTag.equals('D') ) {
	DV.appendTag("53D");
}
var sRecCorrBIC = DV.getFieldValue("X202_RECCORRSW_54A");
if( sRecCorrBIC != '' ) {
	DV.appendTag("54A");
}
var sRecCorrBIC = DV.getFieldValue("X202_RECCORRSW_54A");
var sRecCorrTag = DV.getFieldValue("X202_TAG_54A");

if( sRecCorrBIC == '' && sRecCorrTag.equals('B')  ) {
	DV.appendTag("54B");
}
var sRecCorrBIC = DV.getFieldValue("X202_RECCORRSW_54A");
var sRecCorrTag = DV.getFieldValue("X202_TAG_54A");

if( sRecCorrBIC == '' && sRecCorrTag.equals('D')  ) {
	DV.appendTag("54D");
}
var sIntInsBIC = DV.getFieldValue("X202_MEDI_BKSW_56A");

if ( sIntInsBIC != '' ) {
	DV.appendTag("56A");
}
var sIntInsBIC = DV.getFieldValue("X202_MEDI_BKSW_56A");

if ( sIntInsBIC == '' ) {
	DV.appendTag("56D");
}
var sAcctWithInsBIC  = DV.getFieldValue("X202_ACC_BKSW_57A");

if ( sAcctWithInsBIC != '' ) {
	DV.appendTag("57A");
}
var sAcctWithInsBIC  = DV.getFieldValue("X202_ACC_BKSW_57A");
var sAcctWithInsTag = DV.getFieldValue("X202_TAG_57A");

if ( sAcctWithInsBIC == '' && sAcctWithInsTag.equals('B') ) {
	DV.appendTag("57B");
}
var sAcctWithInsBIC  = DV.getFieldValue("X202_ACC_BKSW_57A");
var sAcctWithInsTag = DV.getFieldValue("X202_TAG_57A");

if ( sAcctWithInsBIC == '' && sAcctWithInsTag.equals('D') ) {
	DV.appendTag("57D");
}
var sBenInsBIC = DV.getFieldValue("X202_BENE_BKSW_58A");

if ( sBenInsBIC != '' ) {
	DV.appendTag("58A");
}
var sBenInsBIC = DV.getFieldValue("X202_BENE_BKSW_58A");

if ( sBenInsBIC == '' ) {
	DV.appendTag("58D");
}