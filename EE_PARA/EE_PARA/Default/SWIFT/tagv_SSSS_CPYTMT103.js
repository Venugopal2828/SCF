var sOrdCustBIC = DV.getFieldValue("X103_ORDCU_SW_50A");

if (sOrdCustBIC != '') {
    DV.appendTag("50A");
}
var sOrdCustBIC = DV.getFieldValue("X103_ORDCU_SW_50A");
var sOrdCustTag = DV.getFieldValue("X103_TAG_50A");

if (sOrdCustBIC == '' && sOrdCustTag.equals('K')) {
    DV.appendTag("50K");
}
var sOrdInsBIC = DV.getFieldValue("X103_ORD_BKSW_52A");

if (sOrdInsBIC != '') {
    DV.appendTag("52A");
}
var sOrdInsBIC = DV.getFieldValue("X103_ORD_BKSW_52A");

if (sOrdInsBIC == '') {
    DV.appendTag("52D");
}
var sSendCorresBIC = DV.getFieldValue("X103_SENDCORRSW53A");

if (sSendCorresBIC != '') {
    DV.appendTag("53A");
}
var sSendCorresBIC = DV.getFieldValue("X103_SENDCORRSW53A");
var sSendCorresTag = DV.getFieldValue("X103_TAG_53A");

if (sSendCorresBIC == '' && sSendCorresTag.equals('D')) {
    DV.appendTag("53D");
}
var sSendCorresBIC = DV.getFieldValue("X103_SENDCORRSW53A");
var sSendCorresTag = DV.getFieldValue("X103_TAG_53A");

if (sSendCorresBIC == '' && sSendCorresTag.equals('B')) {
    DV.appendTag("53B");
}
var sRecCorrBIC = DV.getFieldValue("X103_RECCORRSW_54A");

if (sRecCorrBIC != '') {
    DV.appendTag("54A");
}
var sRecCorrBIC = DV.getFieldValue("X103_RECCORRSW_54A");
var sRecCorrTag = DV.getFieldValue("X103_TAG_54A");

if (sRecCorrBIC == '' && sRecCorrTag.equals('D')) {
    DV.appendTag("54D");
}
var sRecCorrBIC = DV.getFieldValue("X103_RECCORRSW_54A");
var sRecCorrTag = DV.getFieldValue("X103_TAG_54A");

if (sRecCorrBIC == '' && sRecCorrTag.equals('B')) {
    DV.appendTag("54B");
}
var sTrdReimBIC = DV.getFieldValue("X103_TRDREIMSW_55A");

if (sTrdReimBIC != '') {
    DV.appendTag("55A");
}
var sTrdReimBIC = DV.getFieldValue("X103_TRDREIMSW_55A");
var sTrdReimTag = DV.getFieldValue("X103_TAG_55A");

if (sTrdReimBIC == '' && sTrdReimTag.equals('D')) {
    DV.appendTag("55D");
}
var sTrdReimBIC = DV.getFieldValue("X103_TRDREIMSW_55A");
var sTrdReimTag = DV.getFieldValue("X103_TAG_55A");

if (sTrdReimBIC == '' && sTrdReimTag.equals('B')) {
    DV.appendTag("55B");
}
var sIntInsBIC = DV.getFieldValue("X103_MEDI_BKSW_56A");

if (sIntInsBIC != '') {
    DV.appendTag("56A");
}
var sIntInsBIC = DV.getFieldValue("X103_MEDI_BKSW_56A");
var sIntInsTag = DV.getFieldValue("X103_TAG_56A");

if (sIntInsBIC == '' && sIntInsTag.equals('D')) {
    DV.appendTag("56D");
}
var sIntInsBIC = DV.getFieldValue("X103_MEDI_BKSW_56A");
var sIntInsTag = DV.getFieldValue("X103_TAG_56A");

if (sIntInsBIC == '' && sIntInsTag.equals('C')) {
    DV.appendTag("56C");
}
var sAcctWithInsBIC = DV.getFieldValue("X103_ACC_BKSW_57A");

if (sAcctWithInsBIC != '') {
    DV.appendTag("57A");
}
var sAcctWithInsBIC = DV.getFieldValue("X103_ACC_BKSW_57A");

if (sAcctWithInsBIC == '') {
    DV.appendTag("57D");
}
var sAcctWithInsBIC = DV.getFieldValue("X103_ACC_BKSW_57A");
var sAcctWithInsTag = DV.getFieldValue("X103_TAG_57A");
var sAcctWithInsPartyId = DV.getFieldValue("X103_ACC_BKACNO57A");

if (sAcctWithInsBIC == '' && sAcctWithInsTag.equals('C') && sAcctWithInsPartyId != '') {
    DV.appendTag("57C");
}
var sAcctWithInsBIC = DV.getFieldValue("X103_ACC_BKSW_57A");
var sAcctWithInsTag = DV.getFieldValue("X103_TAG_57A");

if (sAcctWithInsBIC == '' && sAcctWithInsTag.equals('B')) {
    DV.appendTag("57B");
}
var sBenCustBIC = DV.getFieldValue("X103_BENECU_BKSW_59");

if (sBenCustBIC == '') {
    DV.appendTag("59");
}
var sBenCustBIC = DV.getFieldValue("X103_BENECU_BKSW_59");

if (sBenCustBIC != '') {
    DV.appendTag("59A");
}
var tag71A = DV.getFieldValue("X103_DET_CHG_71A");
if (tag71A == 'BEN' || tag71A == 'SHA')
    DV.appendTag("71F");
var tag71A = DV.getFieldValue("X103_DET_CHG_71A");
if (tag71A == 'OUR')
    DV.appendTag("71G");