var tLocalTime = DV.getBULocalTime();
DV.updateTrxFieldValue("LOCAL_TIME",tLocalTime);
DV.match("MT320", ";%EXIMTRX%.TRMM_MASTER;MT320_MATCH_STATUS");