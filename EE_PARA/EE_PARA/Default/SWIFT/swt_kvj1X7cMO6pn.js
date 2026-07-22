var SETL_ACTION = DV.getFieldValue("SETL_ACTION");
var SEND_SW_FLG = DV.getFieldValue("SEND_SW_FLG");
if(SETL_ACTION != "ReturnDoc"){
    if(SEND_SW_FLG == "MT320"){
        DV.appendSWIFT("TRMM_MT320_Outgoing ");
    }
    if(SEND_SW_FLG == "MT202"){
        DV.appendSWIFT("TRMM_MT202_Outgoing");
    }
}