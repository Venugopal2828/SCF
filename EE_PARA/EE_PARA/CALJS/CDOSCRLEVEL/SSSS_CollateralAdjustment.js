"path:SCRN/DO/CollateralAdjustment.jsp";

var InitCollVal = '';

function CHK_COLLAT_OUT_QTY() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis' && SYS_BeInt(document.MAINFORM.COLLAT_OUT_QTY.value) > SYS_BeInt(document.MAINFORM.COLLAT_QTY.value)) {
            alert("The Delivery Collateral Quantity is more than Collateral Quantity,Please check.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function CHK_TEMP_REG_AMT() {
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
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function CHk_CMP_REL_QTY() {
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
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function Cal_COLLAT_RD_DATE() {
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
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function Cal_CollateralValue() {
    try {
        //document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(document.MAINFORM.COLLAT_QTY.value, document.MAINFORM.COLLAT_RD_PRICE.value));
        document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(document.MAINFORM.COLLAT_QTY.value, document.MAINFORM.COLLAT_PRICE.value));

    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function Cal_Complementary_Releaseable_Quantity() {
    try {

        var TolregCcy = SYS_getValueFromMain('FA_LMT_CCY');
        var TolregVal = SYS_getValueFromMain('REG_AMT');
        var lowregVal = SYS_getValueFromMain('REG_LOWEST_VAL');
        var exrate = SYS_getValueFromMain('EXCH_RATE');
        //var newprice = document.MAINFORM.COLLAT_RD_PRICE.value;
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
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function Cal_restCollateralValue() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis') {
            // document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value,document.MAINFORM.COLLAT_OUT_QTY.value), document.MAINFORM.COLLAT_RD_PRICE.value));
            document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value, document.MAINFORM.COLLAT_OUT_QTY.value), document.MAINFORM.COLLAT_PRICE.value));
        }
        /*else if(SYS_ORG_FUNCTION_SHORT_NAME == 'PriceCmpAdj'){
var Qty;
if(SYS_BeFloat(document.MAINFORM.COMPMT_QTY.value) >0){
Qty = SYS_FloatSub(0, document.MAINFORM.COMPMT_QTY.value) 
}else if(SYS_BeFloat(document.MAINFORM.RELE_QTY.value)){
Qty =document.MAINFORM.RELE_QTY.value;
}
//marked @20160517 for this function just output form
//document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value, Qty), document.MAINFORM.COLLAT_RD_PRICE.value));
}*/
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function Cal_restValue_PriceAdj() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'PriceCmpAdj') {
            var Qty;
            if (SYS_BeFloat(document.MAINFORM.COMPMT_QTY.value) > 0) {
                Qty = SYS_FloatSub(0, document.MAINFORM.COMPMT_QTY.value)
            } else if (SYS_BeFloat(document.MAINFORM.RELE_QTY.value)) {
                Qty = document.MAINFORM.RELE_QTY.value;
            }
            // document.MAINFORM.TEMP_COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value, Qty), document.MAINFORM.COLLAT_RD_PRICE.value));
            document.MAINFORM.TEMP_COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(SYS_FloatSub(document.MAINFORM.COLLAT_QTY.value, Qty), document.MAINFORM.COLLAT_PRICE.value));
            /* var temp_TolregVal = SYS_getValueFromMain('TEMP_REG_AMT');
            temp_TolregVal = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatAdd(SYS_FloatSub(SYS_BeFloat(temp_TolregVal), SYS_BeFloat(document.MAINFORM.COLLAT_VAL.value)), SYS_BeFloat(document.MAINFORM.TEMP_COLLAT_VAL.value)));
            SYS_setValueToMain('TEMP_REG_AMT', temp_TolregVal);*/
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function ConfirmBusinessCall() {
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
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function ConfirmBusinessCheck() {
    try {
        if (!CHK_COLLAT_OUT_QTY()) {
            return false;
        }
        if (!CHk_CMP_REL_QTY()) {
            return false;
        }
        /*if(!CHK_TEMP_REG_AMT()){
return false;
}*/
        return true;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function GetAdj_Ref() {
    try {
        //SYS_GetRefNo('ABLF_ADJ_REF', 'setAdjRef()');
        SYS_GetSubPageRefNo_S('ABLF_ADJ_REF', setAdjRef, '', 'AdjRef', 'AdjRef');
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function Hidden_Show_div() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            document.getElementById("Discharge").style.display = "none";
            EEHtml.getElementById("PriceAdjust").style.display = "none";
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
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function InitValues() {
    try {
        document.MAINFORM.COLLAT_RD_DATE.value = SYS_BUSI_DATE;

    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function LoadDODataOnInit() {
    try {
        SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function PostconditionOnInit() {
    try {
        Hidden_Show_div();
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            document.MAINFORM.COLLAT_ADJ_DATE.value = SYS_BUSI_DATE;
            /*
var COLLAT_ID = document.MAINFORM.COLLAT_ID.value;
var sSQLWhere = "C_MAIN_REF = \'" + COLLAT_ID + "\'";
var sDBFieldList = "UPDATE_DT;UNIT_PRICE";
var sJSPMappingList = "COLLAT_RD_DATE;TEMP_COLLAT_RD_PRICE";
//SYS_GetTableData_S("EXIMTRX.CMDT_MASTER", sSQLWhere, sDBFieldList, sJSPMappingList, true);
SYS_GetTableData("EXIMTRX.CMDT_MASTER",sSQLWhere,sDBFieldList,sJSPMappingList,'','',true);
*/
            InitCollVal = document.MAINFORM.COLLAT_VAL.value;
            Cal_COLLAT_RD_DATE();
            /*20160929 modify by chery for edit DO record cannot generate ref.*/
            //GetAdj_Ref();
            /*20160929 modify by chery for edit DO record cannot generate ref.*/
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollDis') {
            /*
var COLLAT_ID = document.MAINFORM.COLLAT_ID.value;
var sSQLWhere = "C_MAIN_REF = \'" + COLLAT_ID + "\'";
var sDBFieldList = "UPDATE_DT;UNIT_PRICE";
var sJSPMappingList = "COLLAT_RD_DATE;COLLAT_PRICE";
SYS_GetTableData_S("EXIMTRX.CMDT_MASTER", sSQLWhere, sDBFieldList, sJSPMappingList, true);
//SYS_GetTableData("EXIMTRX.CMDT_MASTER",sSQLWhere,sDBFieldList,sJSPMappingList,'Cal_CollateralValue','',true);
*/
            InitCollVal = document.MAINFORM.COLLAT_VAL.value;
            if (document.MAINFORM.OUT_DATE.value == "") {
                document.MAINFORM.OUT_DATE.value = SYS_BUSI_DATE;
            }
            if (document.MAINFORM.COLLAT_OUT_QTY.value == "") {
                document.MAINFORM.COLLAT_OUT_QTY.value = "";
            }
        } else {
            Cal_Complementary_Releaseable_Quantity();
            /*20160929 modify by chery for edit DO record cannot generate ref.*/
            //GetAdj_Ref();
            /*20160929 modify by chery for edit DO record cannot generate ref.*/
        }

    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function TEMP_COLLAT_RD_PRICE() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'CollAdjust') {
            if (document.MAINFORM.IF_CONF_PRICE.value == '1') {
                document.MAINFORM.TEMP_COLLAT_RD_PRICE.value = document.MAINFORM.COLLAT_PRICE.value;
            } else {
                document.MAINFORM.TEMP_COLLAT_RD_PRICE.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function setAdjRef(ref) {
    try {
        var strPrefix, strPostfix;
        strPrefix = ref.substr(0, 2);
        strPostfix = ref.substr(2, 8);
        document.MAINFORM.ADJ_REF.value = strPrefix + strPostfix;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}
window.onunload = OnLeave;

function OnLeave() {
    PreconditionOnUnload();
    SYS_OnLeave();
    PostconditionOnUnload();
}

function PreconditionOnUnload() {
    try {} catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function PostconditionOnUnload() {
    try {} catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function ConfirmBusinessCheckSave() {
    try {} catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
    return true;
}

function CancelCheck() {
    try {} catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
    return true;
}


function initFieldEvent() {
    try {
        document.MAINFORM.COLLAT_OUT_QTY.onchange = COLLAT_OUT_QTY_onchange;
        document.MAINFORM.COLLAT_QTY.onchange = COLLAT_QTY_onchange;
        document.MAINFORM.COMPMT_QTY.onchange = COMPMT_QTY_onchange;
        document.MAINFORM.IF_CONF_PRICE.onchange = IF_CONF_PRICE_onchange;
        document.MAINFORM.RELE_QTY.onchange = RELE_QTY_onchange;
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function PreInitValues() {
    try {} catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function PreconditionOnInit() {
    try {} catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function OnInitial() {
    try {
        PreconditionOnInit();
        SYS_OnInit();
        PostconditionOnInit();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function COLLAT_OUT_QTY_onchange() {
    try {
        CHK_COLLAT_OUT_QTY();
        Cal_restCollateralValue();

    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function COLLAT_QTY_onchange() {
    try {
        Cal_CollateralValue();

    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function COMPMT_QTY_onchange() {
    try {
        CHk_CMP_REL_QTY();
        //Cal_restCollateralValue();

    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function IF_CONF_PRICE_onchange() {
    try {
        Cal_COLLAT_RD_DATE();
        //TEMP_COLLAT_RD_PRICE();


    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}

function RELE_QTY_onchange() {
    try {
        CHk_CMP_REL_QTY();
        //Cal_restCollateralValue();
        //Cal_restValue_PriceAdj();
    } catch (e) {
        DisExcpt("SSSS_CollateralAdjustment.js", e);
    }
}