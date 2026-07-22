function ChgDoDef_OnDeSelected(context, record, rowIndex) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("DO_ChgDoDef.js", e);
    }
}

function ChgDoDef_OnSelected(context, record, rowIndex) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalDefChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.defChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("DO_ChgDoDef.js", e);
    }
}

function SYF_BPOM_getDOdata_ChgDoDef() {
    try {

    } catch (e) {
        DisExcpt("SYF_BPOM_NoteAdditionalCharges_DO.js", e);
    }
}


function ChgDoTrx_OnDeSelected(context, record, rowIndex) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("DO_ChgDoTrx.js", e);
    }
}

function ChgDoTrx_OnSelected(context, record, rowIndex) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalTrxChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.trxChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("DO_ChgDoTrx.js", e);
    }
}

function SYF_BPOM_getDOdata_ChgDoTrx() {
    try {

    } catch (e) {
        DisExcpt("SYF_BPOM_NoteAdditionalCharges_DO.js", e);
    }
}