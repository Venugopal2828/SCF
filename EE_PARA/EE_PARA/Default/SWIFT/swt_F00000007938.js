CPYT_PAY_ADV_MSG = DV.getFieldValue("CPYT_PAY_ADV_MSG");

if (CPYT_PAY_ADV_MSG == 'MT103') {
    DV.appendSWIFT("SSSS_CPYTMT103");
} else if (CPYT_PAY_ADV_MSG == 'MT202') {
    DV.appendSWIFT("SSSS_MT202");
} else if (CPYT_PAY_ADV_MSG == 'MT202COV') {
    DV.appendSWIFT("SSSS_CPYTMT103");
    DV.appendSWIFT("SSSS_CPYTMT202COV");
}