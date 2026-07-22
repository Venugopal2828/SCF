var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_ABLF_For_cllateral_cfm();
        SYM_ABLF_Chk_Line();
        /*20160929 modify by chery for edit DO record cannot generate ref.*/
        //SYM_ABLF_ADJ_REF();
        document.MAINFORM.VAL_FLG.value = '2';
        document.MAINFORM.ALERT_FLG.value = '2';
        document.MAINFORM.PRICE_ADJ_FLG.value = '2';
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_ABLF_CHK_TEMP_REG_AMT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_ABLF_For_cllateral_Init();
        document.MAINFORM.TEMP_REG_AMT.value = document.MAINFORM.REG_AMT.value;
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        /* if ('RE' != SYS_FUNCTION_TYPE && 'EC' != SYS_FUNCTION_TYPE && 'IQ' != SYS_FUNCTION_TYPE) {
            SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
        }*/

    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_ABLF_For_cllateral_psot();
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_GET_TEMP_COLLAT_VAL = function() {
    try {

        var targetDo = SYS_getDoByXpath("CollateralAdjustment");
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doCOLLAT_VAL = record['COLLAT_VAL'];
                record = SYS_setValToRec(record, "TEMP_COLLAT_VAL", doCOLLAT_VAL);
                datarecords[i] = record;
            }
            SYS_reLoadGrid(targetDo, datarecords);
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_LoadDoComplete = function() {
    try {

        if ('RE' != SYS_FUNCTION_TYPE && 'EC' != SYS_FUNCTION_TYPE && 'IQ' != SYS_FUNCTION_TYPE) {
            SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
        }
        SYF_ABLF_GET_TEMP_COLLAT_VAL();
        SYF_ABLF_GET_COLLAT_RD_PRICE_DT();
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CHK_TEMP_REG_AMT = function() {
    try {

        var Temp_TolregVal = document.MAINFORM.TEMP_REG_AMT.value;
        var minregVal = document.MAINFORM.REG_LOWEST_VAL.value;
        if (SYS_BeFloat(minregVal) > SYS_BeFloat(Temp_TolregVal)) {
            alert("Total Collateral Value Under This Batch after Release can not cover the Loan Balance Under This Batch.");
            return false;
        } else {
            return true;
        }

    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_GET_COLLAT_RD_PRICE_DT = function() {
    try {


        var targetDo = SYS_getDoByXpath("CollateralAdjustment");
        var sys_dt = SYS_BUSI_DATE;
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doPRICE_ADJ_FLG = record['PRICE_ADJ_FLG'];
                var doCOLLAT_PRICE = record['COLLAT_PRICE'];
                if (doPRICE_ADJ_FLG == '1') {
                    record = SYS_setValToRec(record, "COLLAT_RD_PRICE", doCOLLAT_PRICE);
                    record = SYS_setValToRec(record, "COLLAT_RD_DATE", sys_dt);
                }
                datarecords[i] = record;
            }
            SYS_reLoadGrid(targetDo, datarecords);
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust.js", e);
    }
}