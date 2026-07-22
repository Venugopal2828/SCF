"path:SCRN/DO/CollateralAdjustment.jsp";

var InitCollVal = '';

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CHK_COLLAT_OUT_QTY = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis' && SYS_BeInt(document.MAINFORM.COLLAT_OUT_QTY.value) > SYS_BeInt(document.MAINFORM.COLLAT_QTY.value)) {
            alert("The Delivery Collateral Quantity is more than Collateral Quantity,Please check.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*CHK_COLLAT_OUT_QTY", e);
    }
}

csDOScreenProto.CHK_TEMP_REG_AMT = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'PriceCmpAdj') {
            var Temp_TolregVal = SYS_getValueFromMain('TEMP_REG_AMT');
            var minregVal = SYS_getValueFromMain('REG_LOWEST_VAL');
            if (SYS_BeFloat(minregVal) > SYS_BeFloat(Temp_TolregVal)) {
                alert("Total Collateral Value Under This Batch after Release can not cover the Loan Balance Under This Batch.");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*CHK_TEMP_REG_AMT", e);
    }
}

csDOScreenProto.CHk_CMP_REL_QTY = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'PriceCmpAdj') {
            if (SYS_BeInt(document.MAINFORM.COMPMTRY_QTY.value) > 0 && SYS_BeInt(document.MAINFORM.COMPMTRY_QTY.value) > SYS_BeInt(document.MAINFORM.COMPMT_QTY.value)) {
                alert("Complement Quantity can not be less than Complementary Quantity");
                return false;
            } else if (SYS_BeInt(document.MAINFORM.RELEBLE_QTY.value) > 0 && (SYS_BeInt(document.MAINFORM.RELE_QTY.value) > SYS_BeInt(document.MAINFORM.RELEBLE_QTY.value) || SYS_BeInt(document.MAINFORM.RELE_QTY.value) > SYS_BeInt(document.MAINFORM.COLLAT_QTY.value))) {
                alert("Release Quantity can not be more than Releaseble Quantity or Collateral Quantity");
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*CHk_CMP_REL_QTY", e);
    }
}

csDOScreenProto.Cal_COLLAT_RD_DATE = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            if (document.MAINFORM.IF_CONF_PRICE.value == '1') {
                document.MAINFORM.COLLAT_RD_DATE.value = document.MAINFORM.COLLAT_ADJ_DATE.value;
                document.MAINFORM.COLLAT_RD_PRICE.value = document.MAINFORM.COLLAT_PRICE.value;
            } else {
                var COLLAT_ID = document.MAINFORM.COLLAT_ID.value;
                var REG_NO = document.MAINFORM.REG_NO.value;
                var FA_CNTR_REF = document.MAINFORM.FA_CNTR_REF.value
                var sSQLWhere = "COLLAT_ID = \'" + COLLAT_ID + "\' AND REG_NO = \'" + REG_NO + "\' AND FA_CNTR_REF = \'" + FA_CNTR_REF + "\'";
                var sDBFieldList = "COLLAT_RD_DATE;COLLAT_RD_PRICE";
                var sJSPMappingList = "COLLAT_RD_DATE;COLLAT_RD_PRICE";
                SYS_GetTableData_S("EXIMTRX.ABLF_COLL", sSQLWhere, sDBFieldList, sJSPMappingList, true);
            }
            Cal_CollateralValue();
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*Cal_COLLAT_RD_DATE", e);
    }
}

csDOScreenProto.Cal_CollateralValue = function() {
    try {
        document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(document.MAINFORM.COLLAT_QTY.value, document.MAINFORM.COLLAT_PRICE.value));
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*Cal_CollateralValue", e);
    }
}

csDOScreenProto.Cal_Complementary_Releaseable_Quantity = function() {
    try {
        var TolregCcy = SYS_getValueFromMain('FA_LMT_CCY');
        var TolregVal = SYS_getValueFromMain('REG_AMT');
        var lowregVal = SYS_getValueFromMain('REG_LOWEST_VAL');
        var exrate = SYS_getValueFromMain('EXCH_RATE');
        var newprice = document.MAINFORM.COLLAT_PRICE.value;
        var CmpRlbQty = Math.max(0, SYS_FloatDiv(SYS_FloatDiv(Math.abs(SYS_FloatSub(lowregVal, TolregVal)), exrate), newprice));
        if (SYS_BeFloat(lowregVal) > SYS_BeFloat(TolregVal)) {
            document.MAINFORM.COMPMTRY_QTY.value = Math.ceil(CmpRlbQty);
            if (SYS_BeFloat(document.MAINFORM.DEC_PERC.value) > 0) {
                SYT_ChangeFldClass(document.MAINFORM.COMPMT_QTY, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.COMPMT_QTY, 'O');
            }
            SYT_ChangeFldClass(document.MAINFORM.RELE_QTY, 'P');
        } else if (SYS_BeFloat(lowregVal) < SYS_BeFloat(TolregVal)) {
            document.MAINFORM.RELEBLE_QTY.value = Math.floor(CmpRlbQty);
            SYT_ChangeFldClass(document.MAINFORM.RELE_QTY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.COMPMT_QTY, 'P');
        } else {
            document.MAINFORM.COMPMTRY_QTY.value = 0;
            document.MAINFORM.RELEBLE_QTY.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.RELE_QTY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COMPMT_QTY, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*Cal_Complementary_Releaseable_Quantity", e);
    }
}

csDOScreenProto.Cal_restCollateralValue = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis') {
            document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value, document.MAINFORM.COLLAT_OUT_QTY.value), document.MAINFORM.COLLAT_PRICE.value));
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*Cal_restCollateralValue", e);
    }
}

csDOScreenProto.Cal_restValue_PriceAdj = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'PriceCmpAdj') {
            var Qty;
            if (SYS_BeFloat(document.MAINFORM.COMPMT_QTY.value) > 0) {
                Qty = SYS_FloatSub(0, document.MAINFORM.COMPMT_QTY.value)
            } else if (SYS_BeFloat(document.MAINFORM.RELE_QTY.value)) {
                Qty = document.MAINFORM.RELE_QTY.value;
            }
            document.MAINFORM.TEMP_COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value, Qty), document.MAINFORM.COLLAT_PRICE.value));
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*Cal_restValue_PriceAdj", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            /*Caculate Total Collateral Value Under This Batch S*/
            var TolregCcy = SYS_getValueFromMain('FA_LMT_CCY');
            var TolregVal = SYS_getValueFromMain('REG_AMT');
            var exrate = SYS_getValueFromMain('EXCH_RATE');
            var subamt = SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_VAL.value, InitCollVal), exrate);
            var regamt = SYT_AmtFormat(TolregCcy, SYS_FloatAdd(TolregVal, subamt));
            SYS_setValueToMain('REG_AMT', regamt);
            /*Caculate Total Collateral Value Under This Batch E*/
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis') {
            Cal_restCollateralValue();
            /*Caculate Total Collateral Value Under This Batch S*/
            var TolregCcy = SYS_getValueFromMain('FA_LMT_CCY');
            var TolregVal = SYS_getValueFromMain('REG_AMT');
            var exrate = SYS_getValueFromMain('EXCH_RATE');
            var subamt = SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_VAL.value, InitCollVal), exrate);
            var regamt = SYT_AmtFormat(TolregCcy, SYS_FloatAdd(TolregVal, subamt));
            SYS_setValueToMain('REG_AMT', regamt);
            /*Caculate Total Collateral Value Under This Batch E*/
        }
        Cal_restValue_PriceAdj();
        document.MAINFORM.FA_CNTR_REF.value = SYS_getValueFromMain('FA_CNTR_REF');
        document.MAINFORM.ADJ_DATE.value = document.MAINFORM.ARRIVAL_DATE.value;
        document.MAINFORM.PRICE.value = document.MAINFORM.COLLAT_RD_PRICE.value;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CHK_COLLAT_OUT_QTY()) {
            return false;
        }
        if (!CHk_CMP_REL_QTY()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.GetAdj_Ref = function() {
    try {
        SYS_GetSubPageRefNo_S('ABLF_ADJ_REF', setAdjRef, '', 'AdjRef', 'AdjRef');
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*GetAdj_Ref", e);
    }
}

csDOScreenProto.Hidden_Show_div = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            document.getElementById("Discharge").style.display = "none";
            EEHtml.getElementById("PriceAdjust").style.display = "";
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis' || SYS_ORG_FUNCTION_SHORT_NAME == 'RecvCollDiFromCE') {
            document.getElementById("Adjust").style.display = "none";
            EEHtml.getElementById("PriceAdjust").style.display = "none";
            document.getElementById("unit").style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.COLLAT_ADJ_DATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.IF_CONF_PRICE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.OUT_DATE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COLLAT_OUT_QTY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COLLAT_QTY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PRICE_ADJ_FLG, 'P');
        } else {
            document.getElementById("Adjust").style.display = "none";
            document.getElementById("Discharge").style.display = "none";
            document.getElementById("unit").style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.COLLAT_QTY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COLLAT_ADJ_DATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.IF_CONF_PRICE, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*Hidden_Show_div", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.COLLAT_RD_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*InitValues", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*LoadDODataOnInit", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Hidden_Show_div();
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            document.MAINFORM.COLLAT_ADJ_DATE.value = SYS_BUSI_DATE;
            InitCollVal = document.MAINFORM.COLLAT_VAL.value;
            Cal_COLLAT_RD_DATE();
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis') {
            InitCollVal = document.MAINFORM.COLLAT_VAL.value;
            if (document.MAINFORM.OUT_DATE.value == "") {
                document.MAINFORM.OUT_DATE.value = SYS_BUSI_DATE;
            }
            if (document.MAINFORM.COLLAT_OUT_QTY.value == "") {
                document.MAINFORM.COLLAT_OUT_QTY.value = "";
            }
        } else {
            Cal_Complementary_Releaseable_Quantity();
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.TEMP_COLLAT_RD_PRICE = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            if (document.MAINFORM.IF_CONF_PRICE.value == '1') {
                document.MAINFORM.TEMP_COLLAT_RD_PRICE.value = document.MAINFORM.COLLAT_PRICE.value;
            } else {
                document.MAINFORM.TEMP_COLLAT_RD_PRICE.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*TEMP_COLLAT_RD_PRICE", e);
    }
}

csDOScreenProto.setAdjRef = function(ref) {
    try {
        var strPrefix, strPostfix;
        strPrefix = ref.substr(0, 2);
        strPostfix = ref.substr(2, 8);
        document.MAINFORM.ADJ_REF.value = strPrefix + strPostfix;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*setAdjRef", e);
    }
}

csDOScreenProto.COLLAT_OUT_QTY_onchange = function() {
    try {
        CHK_COLLAT_OUT_QTY();
        Cal_restCollateralValue();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*COLLAT_OUT_QTY_onchange", e);
    }
}

csDOScreenProto.COLLAT_QTY_onchange = function() {
    try {
        Cal_CollateralValue();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*COLLAT_QTY_onchange", e);
    }
}

csDOScreenProto.COMPMT_QTY_onchange = function() {
    try {
        CHk_CMP_REL_QTY();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*COMPMT_QTY_onchange", e);
    }
}

csDOScreenProto.IF_CONF_PRICE_onchange = function() {
    try {
        Cal_COLLAT_RD_DATE();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*IF_CONF_PRICE_onchange", e);
    }
}

csDOScreenProto.RELE_QTY_onchange = function() {
    try {
        CHk_CMP_REL_QTY();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js*RELE_QTY_onchange", e);
    }
}