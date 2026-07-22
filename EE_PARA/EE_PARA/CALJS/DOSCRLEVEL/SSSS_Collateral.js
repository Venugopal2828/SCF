"path:SCRN/DO/Collateral.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CHK_COLLT_CCY = function() {
    try {
        var ccy = SYS_getValueFromMain('CCY');
        if (document.MAINFORM.COLLAT_CCY.value != ccy) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*CHK_COLLT_CCY", e);
    }
}

csDOScreenProto.Cal_CollateralValue = function() {
    try {
        //document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value,SYS_FloatMul(document.MAINFORM.COLLAT_QTY.value,document.MAINFORM.COLLAT_RD_PRICE.value));
        document.MAINFORM.COLLAT_VAL.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, SYS_FloatMul(document.MAINFORM.COLLAT_QTY.value, document.MAINFORM.COLLAT_PRICE.value));
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*Cal_CollateralValue", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.COLLAT_CCY.value = SYS_getValueFromMain('CCY');
        document.MAINFORM.ADJ_DATE.value = document.MAINFORM.ARRIVAL_DATE.value;
        document.MAINFORM.PRICE.value = document.MAINFORM.COLLAT_RD_PRICE.value;
        var TolregCcy = SYS_getValueFromMain('FA_LMT_CCY');
        var TolregVal = SYS_getValueFromMain('REG_AMT');
        var regamt = SYT_AmtFormat(TolregCcy, TolregVal);
        SYS_setValueToMain('REG_AMT', regamt);
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CHK_COLLT_CCY()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.GetAdj_Ref = function() {
    try {
        //SYS_GetRefNo('ABLF_ADJ_REF', 'setAdjRef()');
        SYS_GetSubPageRefNo_S('ABLF_ADJ_REF', setAdjRef, '', 'AdjRef', 'AdjRef');
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*GetAdj_Ref", e);
    }
}

csDOScreenProto.Get_CollateralID_Duplicate = function() {
    try {
        var targetDo = SYS_getDoByXpath("CollateralEntry");
        var collat_id = document.MAINFORM.COLLAT_ID.value;
        if (targetDo != null) {
            var records = SYS_getRecords(targetDo);
            var len = records.length;
            var datarecords = [];
            for (var i = 0; i < len; i++) {
                var record = records[i];
                var doCOLLAT_ID = record['COLLAT_ID'];
                if (doCOLLAT_ID == collat_id) {
                    alert("Please note that the collateral " + doCOLLAT_ID + " already exist.");
                    document.MAINFORM.COLLAT_ID.value = '';
                    document.MAINFORM.COLLAT_NM.value = '';
                    document.MAINFORM.COLLAT_TP.value = '';
                    document.MAINFORM.COLLAT_PRICE.value = 0.00;
                    document.MAINFORM.COLLAT_UNIT.value = '';
                    document.MAINFORM.COLLAT_RD_PRICE.value = 0.00;
                    document.MAINFORM.COLLAT_SPEC.value = '';
                    return false;
                } else {
                    return true;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*Get_CollateralID_Duplicate", e);
    }
}

csDOScreenProto.Get_CollateralID_Succ = function() {
    try {
        Get_CollateralID_Duplicate();
        document.MAINFORM.COLLAT_PRICE.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, document.MAINFORM.COLLAT_PRICE.value);
        document.MAINFORM.COLLAT_RD_PRICE.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, document.MAINFORM.COLLAT_PRICE.value);
        Cal_CollateralValue();
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*Get_CollateralID_Succ", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        //GetAdj_Ref();
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.FA_CNTR_REF.value = SYS_getValueFromMain('FA_CNTR_REF');
        document.MAINFORM.REG_NO.value = SYS_getValueFromMain('REG_NO');
        document.MAINFORM.COLLAT_CCY.value = SYS_getValueFromMain('CCY');
        document.MAINFORM.ARRIVAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.PRICE_ADJ_FLG.value = '1';
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*InitValues", e);
    }
}

csDOScreenProto.setAdjRef = function(ref) {
    try {
        var strPrefix, strPostfix;
        strPrefix = ref.substr(0, 2);
        strPostfix = ref.substr(2, 8);
        document.MAINFORM.ADJ_REF.value = strPrefix + strPostfix;
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*setAdjRef", e);
    }
}

csDOScreenProto.COLLAT_ID_onchange = function() {
    try {
        if (document.MAINFORM.COLLAT_ID.value != "") {
            SYS_GetCUBK('COLLAT_ID_AGR', document.MAINFORM.COLLAT_ID.name, 'Get_CollateralID_Succ', '', true);
        } else {
            document.MAINFORM.COLLAT_NM.value = '';
            document.MAINFORM.COLLAT_TP.value = '';
            document.MAINFORM.COLLAT_PRICE.value = 0.00;
            document.MAINFORM.COLLAT_UNIT.value = '';
            document.MAINFORM.COLLAT_RD_PRICE.value = 0.00;
            document.MAINFORM.COLLAT_SPEC.value = '';
            document.MAINFORM.COLLAT_VAL.value = 0.00;
        }
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*COLLAT_ID_onchange", e);
    }
}

csDOScreenProto.COLLAT_QTY_onchange = function() {
    try {
        Cal_CollateralValue();
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*COLLAT_QTY_onchange", e);
    }
}

csDOScreenProto.COLLAT_ID_BT_onclick = function() {
    try {
        var sql = "1=1";
        /*sql = sql + " AND T0.C_MAIN_REF = '<--C_MAIN_REF-->'";
    sql = sql + " AND T1.CCY = '<--COLLAT_CCY-->'";
    SYS_InqCUBK_Sql('COLLAT_ID_AGR', sql);*/
        SYS_InqCUBK_byCondition('COLLAT_ID_AGR', '2');
    } catch (e) {
        DisExcpt("SSSS_Collateral.js*COLLAT_ID_BT_onclick", e);
    }
}