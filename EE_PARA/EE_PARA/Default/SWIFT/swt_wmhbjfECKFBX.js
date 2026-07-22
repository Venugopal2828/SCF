var SETL_ACTION = DV.getFieldValue("SETL_ACTION");
if(SETL_ACTION != "ReturnDoc" && SETL_ACTION != "RevertConf"){
    DV.appendSWIFT("TRMM_MT320_Outgoing");
}