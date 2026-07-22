var globalRecs = {};

function EFRemitInv_OnDeSelected(scope, record, rowId) {
    try {
        var _do; // Utility Auto Fix Comments
        var curDoName; // Utility Auto Fix Comments
        var ds; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var keyID; // Utility Auto Fix Comments
        var keyValue; // Utility Auto Fix Comments
        var newrec; // Utility Auto Fix Comments
        var pos; // Utility Auto Fix Comments
        var row; // Utility Auto Fix Comments
        var selIdLen; // Utility Auto Fix Comments
        var selIdObj; // Utility Auto Fix Comments
        var sum_amt; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            return false;
        }
        curDoName = scope.getName();
        _do = SYS_getDoByXpath("ExpRemi"); // Utility Auto Fix Comments
        keyValue = SYS_getValFromRec(record, 'FA_SEL_ID');
        keyID = SYS_getValFromRec(record, 'recordID');
        newrec = SYF_FADA_Get_Exists_Record(_do, keyValue); // Utility Auto Fix Comments
        sum_amt = SYF_FADA_dcmAdd(SYS_BeFloat(newrec["FA_SEL_SUBTTL_AMT"]), -SYF_FADA_Get_Sum_FromRecord(record));
        selIdObj = globalRecs[keyValue];
        delete selIdObj[keyID];
        selIdLen = 0;
        for (k in selIdObj) { // Utility Auto Fix Comments
            if (k == "cloneA") {
                continue;
            }
            selIdLen++;
        }
        if (selIdLen == 0) {
            delete globalRecs[keyValue];
        }
        newrec["FA_SEL_SUBTTL_AMT"] = sum_amt;
        if (sum_amt > 0) {
            SYF_FADA_do_appendOrUpdate(_do, newrec, "FA_SEL_ID"); // Utility Auto Fix Comments
        } else {
            SYF_FADA_do_delete(_do, newrec, "FA_SEL_ID"); // Utility Auto Fix Comments
        }

        ds = scope.getDs();
        row = ds[rowId];
        pos = scope.getPosFromdFields("FA_IF_CHG_PAID_FLG");
        row[pos] = "N";
        SYF_FADA_computeData(_do);
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance_DO.js", e);
    }
}

function EFRemitInv_OnSelected(scope, record, rowId) {
    try {
        var _do; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var curDoName; // Utility Auto Fix Comments
        var ds; // Utility Auto Fix Comments
        var keyID; // Utility Auto Fix Comments
        var keyValue; // Utility Auto Fix Comments
        var newrec; // Utility Auto Fix Comments
        var pos; // Utility Auto Fix Comments
        var rec; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var row; // Utility Auto Fix Comments
        var seller; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            return false;
        }
        curDoName = scope.getName();
        _do = SYS_getDoByXpath("ExpRemi"); // Utility Auto Fix Comments
        keyValue = SYS_getValFromRec(record, 'FA_SEL_ID');
        keyID = SYS_getValFromRec(record, 'recordID');
        newrec = null;
        if (!globalRecs[keyValue]) {
            globalRecs[keyValue] = {};
        }
        globalRecs[keyValue][keyID] = record;
        amt = 0;
        for (seller in globalRecs) {
            amt = 0;
            if (seller == "cloneA") {
                continue;
            }
            recs = globalRecs[seller];
            for (rec in recs) {
                if (rec == "cloneA") {
                    continue;
                }
                if (recs[rec] == null) {
                    continue;
                }
                newrec = SYF_FADA_Get_Exists_Record(_do, SYS_getValFromRec(recs[rec], "FA_SEL_ID")); // Utility Auto Fix Comments
                if (newrec == null) {
                    newrec = {};
                    newrec["FA_SEL_ID"] = SYS_getValFromRec(recs[rec], "FA_SEL_ID");
                    newrec["FA_SEL_NM"] = SYS_getValFromRec(recs[rec], "FA_SEL_NM");
                    //newrec["CUST_ID"] =SYS_getValFromRec(recs[rec],"FA_SEL_ID");
                    newrec["FA_DOC_CCY"] = SYS_getValFromRec(recs[rec], "FA_DOC_CCY");
                    newrec["FA_SEL_SUBTTL_AMT"] = 0;
                    newrec["FA_SEL_SUBTTL_DEDUCT"] = 0;
                    newrec["FA_REMI_REF"] = document.MAINFORM.FA_REMI_REF.value;
                }
                amt = SYF_FADA_dcmAdd(amt, SYF_FADA_Get_Sum_FromRecord(recs[rec]));
            }
            newrec["FA_SEL_SUBTTL_AMT"] = amt;
            SYF_FADA_do_appendOrUpdate(_do, newrec, "FA_SEL_ID"); // Utility Auto Fix Comments
        }

        ds = scope.getDs();
        row = ds[rowId];
        pos = scope.getPosFromdFields("FA_IF_CHG_PAID_FLG");
        row[pos] = "Y";
        SYF_FADA_computeData(_do); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance_DO.js", e);
    }
}

function SYF_FADA_getDOdata_EFRemitInv(node, recordId, status) {
    try {
        var _do; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath("ExpRemi"); // Utility Auto Fix Comments
        _do.clearAll(); // Utility Auto Fix Comments
        document.MAINFORM.FA_REMI_AMT.value = 0;
        SYS_GetDataForDO_S('EFRemitInv');
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance_DO.js", e);
    }
}


function ExpRemi_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance_DO.js", e);
    }
}

function ExpRemi_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance_DO.js", e);
    }
}

function SYF_FADA_getDOdata_ExpRemi() {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance_DO.js", e);
    }
}

function ExpRemi_FA_SEL_SUBTTL_DEDUCT_onchange() {
    try {
        var _do; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath("ExpRemi"); // Utility Auto Fix Comments
        SYF_FADA_computeData(_do); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_FADACommissionRemittance_DO.js", e);
    }
}