var WHT_SEND_MT202_FLG = DV.getFieldValue("WHT_SEND_MT202_FLG");
if(WHT_SEND_MT202_FLG == "Yes"){
    DV.appendSWIFT("TRMM_MT202_Outgoing");
}