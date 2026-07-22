function SYM_ABLF_For_cllateral_psot() {
    try {

        SYT_DisableDivClass('A_div');
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollateralEntry') {
            document.getElementById("AdjustLine").style.display = 'none';
        } else {
            document.getElementById("AdjustLine").style.display = '';
            SYT_DisableDivClass('B_div');
        }

        if (document.MAINFORM.CCY.value == document.MAINFORM.FA_LMT_CCY.value) {
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_For_cllateral_Init() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        if (document.MAINFORM.FA_LMT_CCY.value == document.MAINFORM.CCY.value) {
            document.MAINFORM.EXCH_RATE.value = 1;
        }

    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_For_cllateral_cfm() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) < 70) {
            alert("Max Loan Percentage% is less than 70%.");
        }
        if (SYS_BeFloat(document.MAINFORM.MAX_DEC_PERC.value) > 10) {
            alert("Max. % of Value Decline is more than 10%.");
        }
        SYM_ABLF_Update_Fun_Status();

    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Chk_Reg_Amt() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REG_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.REG_AMT.value) == 0) {
            alert("Total Collateral Value Under This Batch is less than 0.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Chk_Line() {
    try {

        if (document.MAINFORM.FA_MAX_LOAN_PERC.value < 70) {
            alert("Please note that Max Loan Percentage% is less than 70%");
        }
        if (document.MAINFORM.MAX_DEC_PERC.value > 10) {
            alert("Please note that Max Loan Percentage% is more than 10%");
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Cal_Uploaded_Coll_Val() {
    try {

        var reg_no = document.MAINFORM.REG_NO.value;
        var arrive_dt = SYS_BUSI_DATE;
        var contract_ref = document.MAINFORM.FA_CNTR_REF.value;
        var sSQLWhere = "FA_CNTR_REF = \'" + contract_ref + "\'";
        var sFieldList = "COLLAT_ID";
        SYS_MULTI_DATA = "";
        SYS_GetTableMultiDataToArray_S("EXIMTRX.ABLF_COLL_SCOPE", sSQLWhere, sFieldList, true);
        var targetDo = SYS_getDoByXpath("CollateralEntry");
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            var SumUplVal = 0;
            var SingCollVal = 0;
            for (var i = 0; i < len; i++) {
                document.MAINFORM.TEMP_BP_CCY1.value = "";
                document.MAINFORM.TEMP_AMT.value = 0.00;
                var record = records[i];
                var doCOLLAT_ID = record['COLLAT_ID'];
                //Check Collateral ID S
                if (SYS_MULTI_DATA == "") {
                    alert("There's no collateral scope infomation in this agreement.");
                    record = SYS_setValToRec(record, "recordType", 'D');
                    datarecords[i] = record;
                } else {
                    if (SYS_MULTI_DATA[0][0] === "COLLAT_ID") {
                        var Stri = SYM_ABLF_Arry_to_String(SYS_MULTI_DATA);
                        if (Stri.indexOf(doCOLLAT_ID) > -1) {
                            //Check Collateral ID E
                            var doCOLLAT_QTY = record['COLLAT_QTY'];
                            //get Batch no arrive date contract ref  S
                            record = SYS_setValToRec(record, "REG_NO", reg_no);
                            record = SYS_setValToRec(record, "FA_CNTR_REF", contract_ref);
                            record = SYS_setValToRec(record, "ARRIVAL_DATE", arrive_dt);
                            var sSQLWhere = "GOODS_ID = \'" + doCOLLAT_ID + "\'";
                            var sDBFieldList = "CCY;UNIT_PRICE;GOODS_CATE";
                            var sJSPMappingList = "TEMP_BP_CCY1;TEMP_AMT;TEMP_COLLAT_TP";
                            SYS_GetTableData_S("EXIMTRX.CMDT_MASTER", sSQLWhere, sDBFieldList, sJSPMappingList, true);
                            var ccy = document.MAINFORM.TEMP_BP_CCY1.value;
                            var coll_Price = document.MAINFORM.TEMP_AMT.value;
                            var coll_Tp = document.MAINFORM.TEMP_COLLAT_TP.value;
                            record = SYS_setValToRec(record, "COLLAT_CCY", ccy);
                            record = SYS_setValToRec(record, "COLLAT_PRICE", coll_Price);
                            record = SYS_setValToRec(record, "COLLAT_RD_PRICE", coll_Price);
                            record = SYS_setValToRec(record, "COLLAT_TP", coll_Tp);
                            //get Batch no arrive date contract ref  E  
                            var doCOLLAT_RD_PRICE = record['COLLAT_RD_PRICE'];
                            //SingCollVal = SYS_FloatMul(doCOLLAT_QTY, doCOLLAT_RD_PRICE);
                            var doCOLLAT_PRICE = record['COLLAT_PRICE'];
                            SingCollVal = SYS_FloatMul(doCOLLAT_QTY, doCOLLAT_PRICE);
                            record = SYS_setValToRec(record, "COLLAT_VAL", SingCollVal);
                            records[i] = record;
                            SumUplVal = SYS_FloatAdd(SumUplVal, SingCollVal);
                        } else {
                            alert("The Collateral " + doCOLLAT_ID + " is not exist in collateral scope of this agreement,Please check the upload excel.");
                            record = SYS_setValToRec(record, "recordType", 'D');
                            datarecords[i] = record;
                            //return;
                        }
                        //}
                    }
                }
            }
            SYS_reLoadGrid(targetDo, records);

        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollateralEntry') {
            document.MAINFORM.REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatMul(SumUplVal, document.MAINFORM.EXCH_RATE.value));
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            document.MAINFORM.REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatAdd(document.MAINFORM.REG_AMT.value, SYS_FloatMul(SumUplVal, document.MAINFORM.EXCH_RATE.value)));
        }


    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_ClearUploadCollDO() {
    try {

        /* var targetDo = SYS_getDoByXpath("CollateralEntry");
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = []; 
            for (var i = 0; i < len; i++) {
                var record = records[i];
                record = SYS_setValToRec(record, "recordType", 'D');
                datarecords[i] = record;
            }
            SYS_reLoadGrid(targetDo, datarecords);

        }*/
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Cal_Adj_Coll_Val() {
    try {

        var targetDo = SYS_getDoByXpath("CollateralAdjustment");
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            var SumAdjVal = 0;
            var SingCollVal = 0;
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doCOLLAT_VAL = record['COLLAT_VAL'];
                SingCollVal = SYS_BeFloat(doCOLLAT_VAL);
                SumAdjVal = SYS_FloatAdd(SumAdjVal, SingCollVal);
            }
            //SumAdjVal = SYS_FloatAdd(SumAdjVal, SingCollVal);

        }
        document.MAINFORM.REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatMul(document.MAINFORM.EXCH_RATE.value, SumAdjVal));

    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Cal_Succ() {
    try {

        document.MAINFORM.COLLAT_RD_PRICE.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, document.MAINFORM.COLLAT_PRICE.value);
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Arry_to_String(objarr) {
    try {


        var typeNO = objarr.length;
        var tree = "[";
        for (var i = 0; i < typeNO; i++) {
            tree += "[";
            tree += "'" + objarr[i][0] + "',";
            tree += "'" + objarr[i][1] + "'";
            tree += "]";
            if (i < typeNO - 1) {
                tree += ",";
            }
        }
        tree += "]";
        return tree;
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_CHK_Coll_CCY() {
    try {

        var targetDo = SYS_getDoByXpath("CollateralEntry");
        var main_ccy = document.MAINFORM.CCY.value;
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doCOLLAT_CCY = record['COLLAT_CCY'];
                var doCOLLAT_ID = record['COLLAT_ID'];
                if (doCOLLAT_CCY != main_ccy) {
                    alert("Please note that the collateral " + doCOLLAT_ID + " currency under this batch is diffrent with the collateral currency in main page.");
                    return false;
                } else {
                    return true;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Chk_Reg_Amt_Ajd() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value) > SYS_BeFloat(document.MAINFORM.REG_AMT.value)) {
            alert("The Total Collateral Value Under This Batch can not cover the Min. Collateral Value Required Under This Batch");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_ALERT_FLG_calculate() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value) > SYS_BeFloat(document.MAINFORM.REG_AMT.value)) {
            document.MAINFORM.ALERT_FLG.value = "1";
        } else {
            document.MAINFORM.ALERT_FLG.value = "2";
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_VAL_FLG_calculate() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value) > 0) {
            var temamt1 = SYS_FloatMul(SYS_FloatDiv(SYS_FloatSub(SYS_BeFloat(document.MAINFORM.REG_AMT.value), SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value)), SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value)), 100);
            var temamt2 = SYS_FloatMul(SYS_FloatDiv(SYS_FloatSub(SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value), SYS_BeFloat(document.MAINFORM.REG_AMT.value)), SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value)), 100);
            if ((document.MAINFORM.VAL_REL_FLG.value == "1" && temamt1 > SYS_BeFloat(document.MAINFORM.MAX_INC_PERC.value)) || temamt2 > SYS_BeFloat(document.MAINFORM.MAX_DEC_PERC.value)) {
                document.MAINFORM.VAL_FLG.value = "1";
            } else {
                document.MAINFORM.VAL_FLG.value = "2";
            }
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_setAdjRefM(ref) {
    try {

        var strPrefix, strPostfix;
        strPrefix = ref.substr(0, 2);
        strPostfix = ref.substr(2, 8);
        document.MAINFORM.TEMP_REF.value = strPrefix + strPostfix;
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_GetAdj_RefM() {
    try {

        SYS_GetSubPageRefNo_S('ABLF_ADJ_REF', SYM_ABLF_setAdjRefM, '', 'AdjRef', 'AdjRef');
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_ADJ_REF() {
    try {

        var targetDo = SYS_getDoByXpath("CollateralAdjustment");
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                SYM_ABLF_GetAdj_RefM();
                var record = records[i];
                var temp_ref = document.MAINFORM.TEMP_REF.value;
                record = SYS_setValToRec(record, "ADJ_REF", temp_ref);
                records[i] = record;
            }
            SYS_reLoadGrid(targetDo, records);
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_Update_Fun_Status() {
    try {

        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollateralEntry') {
            document.MAINFORM.CURRNT_STATUS.value = 'CollateralEntry';
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            document.MAINFORM.CURRNT_STATUS.value = 'CollAdjust';
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis') {
            document.MAINFORM.CURRNT_STATUS.value = 'CollDis';
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'PriceCmpAdj') {
            document.MAINFORM.CURRNT_STATUS.value = 'PriceCmpAdj';
        }
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_CHK_Duplicate_Coll_ID() {
    try {

        var targetDo = SYS_getDoByXpath("CollateralEntry");
        var main_ccy = document.MAINFORM.CCY.value;
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doCOLLAT_ID = record['COLLAT_ID'];
                for (var j = 0; j < len; j++) {
                    var record2 = records[j];
                    var doCOLLAT_ID2 = record2['COLLAT_ID'];
                    if (doCOLLAT_ID == doCOLLAT_ID2) {
                        alert("Please note that the collateral " + doCOLLAT_ID + " are duplicated.");
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}

function SYM_ABLF_CHK_COLLAT_OUT_QTY() {
    try {

        var targetDo = SYS_getDoByXpath("CollateralAdjustment");
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doCOLLAT_ID = record['COLLAT_ID'];
                var doCOLLAT_OUT_QTY = record['COLLAT_OUT_QTY'];
                var doCOLLAT_QTY = record['COLLAT_QTY'];
                if (SYS_BeInt(doCOLLAT_OUT_QTY) > SYS_BeInt(doCOLLAT_QTY)) {
                    alert("The Delivery Collateral Quantity of " + doCOLLAT_ID + " is more than Collateral Quantity,Please check.");
                    return false;
                }
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_ABLF.js", e);
    }
}