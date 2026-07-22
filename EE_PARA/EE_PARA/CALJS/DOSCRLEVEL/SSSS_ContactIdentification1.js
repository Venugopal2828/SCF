"path:SCRN/DO/ContactIdentification1.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2InvolvedPartyInfo.SellerBank.ContactIdentification1") {
            SYS_checkDoAdd('R2InvolvedPartyInfo.BuyerBank.ContactIdentification1');
        }
        if (SYS_DO_XPATH == "R2InvolvedPartyInfo.BuyerBank.ContactIdentification1") {
            SYS_checkDoAdd('R2InvolvedPartyInfo.SellerBank.ContactIdentification1');
        }
        if (SYS_DO_XPATH == "R2InvolvedPartyInfoRe.SellerBank.ContactIdentification1") {
            SYS_checkDoAdd('R2InvolvedPartyInfoRe.BuyerBank.ContactIdentification1');
        }
        if (SYS_DO_XPATH == "R2InvolvedPartyInfoRe.BuyerBank.ContactIdentification1") {
            SYS_checkDoAdd('R2InvolvedPartyInfoRe.SellerBank.ContactIdentification1');
        }
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        DO_XPATH();
        TSU_OT_BK_BIC();
        TSU_CONT_ID();
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_OT_BK_BIC();
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.TSU_CONT_ID = function() {
    try {
        if (SYS_DO_XPATH == "R2InvolvedPartyInfo.OtherBk" || SYS_DO_XPATH == "R2InvolvedPartyInfoRe.OtherBk") {
            document.MAINFORM.TSU_CONT_ID.value = "0";
        }
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}

csDOScreenProto.TSU_OT_BK_BIC = function() {
    try {
        if (SYS_DO_XPATH != "R2InvolvedPartyInfo.OtherBk") {
            SYT_hideObj("Other Bank BIC");
            document.MAINFORM.TSU_OT_BK_BIC.className = "CHAR_P";
        }
    } catch (e) {
        DisExcpt("SSSS_ContactIdentification1.js", e);
    }
}