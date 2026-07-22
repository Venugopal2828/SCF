DV.writeLog('==== EE4609 Charge server side JS begin ====');
var trxAmt = DV.getCalPara().getTrxAmt();
var trxCcy = DV.getCalPara().getTrxCcy();
DV.writeLog('trxCcy & trxAmt = ' + trxCcy + trxAmt);

var chgCcy = DV.getCalPara().getChgCcy();
var flatAmt = DV.getRule().getFlatAmt();
var percentage = DV.getRule().getBasePercentage();
var MinAmt = DV.getRule().getMinAmt();
var MaxAmt = DV.getRule().getMaxAmt();

DV.writeLog('chgCcy= ' + chgCcy + '   flatAmt= ' + flatAmt);
DV.writeLog('percentage= ' + percentage);
DV.writeLog('MinAmt= ' + MinAmt + '   MaxAmt= ' + MaxAmt);

//Get exchange rate between chgCcy and trxCcy.
var rate = DV.SYS_GetExchangeRate(chgCcy, trxCcy, 'Booking Rate');
//If the priceDate is one of the primary key in exchange rate table, it should set priceDate in this API.
//var PriceDate = DV.SYS_BUSI_DATE;
//var rate = DV.SYS_GetExchangeRate(chgCcy,trxCcy,'Booking Rate', PriceDate);

DV.writeLog('Get Exchange Rate from CHGCCY (' + chgCcy + ') to TRXCCY (' + trxCcy + ')= ' + rate);

//Charge Fee = Flat Amount + Transaction Amount * Percentage 
if (DV.chkValue(trxCcy, chgCcy)) {
    var resultAmt = (trxAmt * percentage / 100) + flatAmt;
    DV.writeLog('CHGCCY=TRXCCY. chgCcy= ' + chgCcy + '  trxCcy= ' + trxCcy + '  resultAmt= ' + resultAmt);
} else {
    var exflatAmt = flatAmt * rate; //calculate flatAmt from chgCcy to trxCcy
    var resultAmt = (trxAmt * percentage / 100) + exflatAmt;
    DV.writeLog('CHGCCY!=TRXCCY. chgCcy= ' + chgCcy + '  trxCcy= ' + trxCcy + '  resultAmt= ' + resultAmt);
}
DV.setResultCcy(trxCcy);
DV.setResultAmt(resultAmt); //System retrieves the Charge Fee base on CHGCCY, so system will exchange the result from trxCcy to chgCcy automatically.
DV.writeLog('resultAmt= ' + trxCcy + resultAmt);

DV.writeLog('==== EE4609 Charge server side JS end ====');