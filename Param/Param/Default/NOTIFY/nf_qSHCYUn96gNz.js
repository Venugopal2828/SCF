/* f (NS.isRelease()) {
    var sEmailId = NS.createMail("CSBankSupport", "Addcounterparty");
    NS.writeLog("=== Add Counterparty mail start ===");
    // maker
    var makerEmail = NS.getCurrentUserMail("EMAIL_ADD");
    if (makerEmail != null && makerEmail != "") {
        var mGrp = new Array();
        mGrp.push(makerEmail);
        NS.appendSendTo(sEmailId, mGrp);
    }
    // next authorizers only when not last authorizer
    if (!NS.isLastAuthorizer()) {
        var avalArr = NS.getNextAuthorizersMail("EMAIL_ADD");
        if (avalArr != null) {
            var nGrp = new Array();
            for (var i = 0; i < avalArr.length; i++) {
                if (avalArr[i] != null && avalArr[i] != "") {
                    nGrp.push(avalArr[i]);
                }
            }
            if (nGrp.length > 0) {
                NS.appendSendTo(sEmailId, nGrp);
            }
        }
        NS.setAwaitingAuthSend(sEmailId, true);
    }
    NS.setAutoSend(sEmailId, true);
    NS.writeLog("=== Add Counterparty mail end ===");
} */