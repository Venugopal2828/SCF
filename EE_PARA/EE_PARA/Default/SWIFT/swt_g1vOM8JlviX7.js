DV.appendSWIFT("PYMT_pacs008");
var Cov_Pyt = DV.getFieldValue("CPYT_PAY_COV_MSG");
if ( Cov_Pyt == 'PACS009COV') {
  DV.appendSWIFT("PYMT_pacs009COV");
}