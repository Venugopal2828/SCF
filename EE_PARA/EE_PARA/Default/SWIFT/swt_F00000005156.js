var SW_FORM = DV.getFieldValue("SW_FORM");

if (SW_FORM == 'MT205') {
    DV.appendSWIFT("PYMT_PYTMT205");
}

if (SW_FORM == 'MT205COV') {

    DV.appendSWIFT("PYMT_PYTMT205COV");
}