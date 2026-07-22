var sendMT111 = DV.getFieldValue("SEND_FLAG");
if (sendMT111 == 'Y') {
    DV.appendSWIFT("PYMT_DraftMT111");
}