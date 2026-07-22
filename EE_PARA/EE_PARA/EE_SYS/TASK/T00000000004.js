DV.writeLog("Begin auto SettleCharges");
DV.setTrxFunction("AUTO_SettleCharges");
DV.writeLog("End auto SettleCharges");


DV.init("Booking Rate", "Booking Rate", "Booking Rate", "Booking Rate");
DV.mapLocalCust("DRWR_ID", "DRWR_NM", "EUR", "987987SUNNY");
DV.writeLog("1");
DV.setDefChargeScope(DV.SCOPE_MAINREF);
DV.capureDefChargesByScope();
DV.writeLog("2");
DV.setAllLocalPayCcy("EUR");
DV.setAllCollCcy("USD");
DV.setAllUnpaidCcy("USD");
DV.writeLog("3");

DV.setAllPayAt(DV.CHG_AT_TRANSACTION);
DV.setAllPayBy(DV.CHG_FOR_LOCAL);
DV.writeLog("4");
DV.confirmCharge();
DV.writeLog("5");

DV.updateField("CHG_CUST_VCH_DESC_CR", "EXCO02COMMNULLNULLC");
DV.updateField("CHG_CUST_AC", "987987SUNNY");
DV.writeLog(DV.getFieldValue("CHG_CUST_AC"));

DV.updateField("CHG_CUST_AMT_DR", DV.getLocalTotalPayAmt());
DV.writeLog(DV.getFieldValue("CHG_CUST_AMT_DR"));

DV.updateField("CHG_CUST_CCY", "EUR");
DV.writeLog(DV.getFieldValue("CHG_CUST_CCY"));

DV.updateField("CHG_LOCAL_FX_AMT_CR", DV.getLocalTotalPayAmt());
DV.writeLog(DV.getFieldValue("CHG_LOCAL_FX_AMT_CR"));

DV.updateField("CHG_LOCAL_FX_CCY_CR", "EUR");
DV.writeLog(DV.getFieldValue("CHG_LOCAL_FX_CCY_CR"));

DV.updateField("CHG_LOCAL_FX_AMT_DR", DV.getLocalTotalCollectAmt());
DV.writeLog(DV.getFieldValue("CHG_LOCAL_FX_AMT_DR"));

DV.updateField("CHG_LOCAL_FX_CCY_DR", "USD");
DV.writeLog(DV.getFieldValue("CHG_LOCAL_FX_CCY_DR"));

DV.updateField("CHG_TRX_DATE", DV.SYS_BUSI_DATE);
DV.writeLog(DV.getFieldValue("CHG_TRX_DATE"));


var locaTotalCollAmt = DV.getLocalTotalCollectAmt();
var locaTotalCollVAT = DV.getLocalTotalCollectVAT();
var locaTotalCollChg = DV.getLocalTotalCollectCharge();
DV.writeLog("6");