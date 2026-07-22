var cancel = DV.getFieldValue("CANCEL_FLG");
if (cancel != "Yes") {
    DV.appendSWIFT("PYMT_DraftMT110");
}