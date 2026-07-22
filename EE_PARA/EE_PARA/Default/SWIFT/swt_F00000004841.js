var Pyt_103 = DV.getFieldValue("CPYT_PAY_ADV_MSG");
var Cov_Pyt = DV.getFieldValue("CPYT_PAY_COV_MSG");
/*if (Pyt_103 == "MT103"){
if (Cov_Pyt == "MT202"){
DV.appendSWIFT("PYMT_PYTMT103");
DV.appendSWIFT("PYMT_PYTMT202");
}else{
DV.appendSWIFT("PYMT_PYTMT103");
}
} 
*/
if (Pyt_103 == "MT103") {
    if (Cov_Pyt == "MT202") {
        DV.appendSWIFT("PYMT_PYTMT103");
        //DV.appendSWIFT("PYMT_PYTMT202");
        DV.appendSWIFT("PYMT_PYTMT202COV");
    } else {
        DV.appendSWIFT("PYMT_PYTMT103");
    }
}