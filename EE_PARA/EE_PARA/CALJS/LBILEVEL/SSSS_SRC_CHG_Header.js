"path:SCRN/Library/CHG_Header.lbi";

var csLbiCompProto = {};

csLbiCompProto.CHG_CalDeferrCommcodeBalTotalAmt = function(Commcode) {
    try {
        var DeferrCommcodeBalTotalAmt; // Utility Auto Fix Comments
        var Obj_getAllDefCharge; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        DeferrCommcodeBalTotalAmt = 0;
        Obj_getAllDefCharge = Chg.Screen.getAllDefCharge();
        for (i = 0; i < Obj_getAllDefCharge.length; i++) { // Utility Auto Fix Comments
            if (Obj_getAllDefCharge[i].getCommCode() == Commcode) {
                DeferrCommcodeBalTotalAmt += Obj_getAllDefCharge[i].getBalAmt();
            }
        }
        return DeferrCommcodeBalTotalAmt;
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_CalDeferrCommcodePayTotalAmt = function(Commcode) {
    try {
        var DeferrCommcodePayTotalAmt; // Utility Auto Fix Comments
        var Obj_getAllDefCharge; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        DeferrCommcodePayTotalAmt = 0;
        Obj_getAllDefCharge = Chg.Screen.getAllDefCharge();
        for (i = 0; i < Obj_getAllDefCharge.length; i++) {
            if (Obj_getAllDefCharge[i].getCommCode() == Commcode) {
                DeferrCommcodePayTotalAmt += Obj_getAllDefCharge[i].getPayAmt();
            }
        }
        return DeferrCommcodePayTotalAmt;
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_Comp_CalcuCallBack = function() {
    try {
        CHG_changeACstatus();
        CHG_calcuTatalInPayCCY();
        CHG_TotalAmountOnChange();
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_DefCharge_chargeAtOnchange = function() {
    try {
        var arrDefObj = Chg.Screen.getAllDefCharge();
        if (arrDefObj) {
            for (var i = 0; i < arrDefObj.length; i++) {
                arrDefObj[i].chargeAtOnchange();
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        var ac = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
        if (!isEmpty(ac)) {
            localCustACClearFlag = "false";
            SYS_GetCUBK_S('CHG_GET_AC', 'CHG_FLD_LOCAL_CUST_AC_NO');
            CHG_setAllLocalPayCcy($('CHG_FLD_LOCAL_CUST_CCY').value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_Get_AC = function() {
    try {
        var ccy; // Utility Auto Fix Comments
        var condition; // Utility Auto Fix Comments
        var custId; // Utility Auto Fix Comments
        custId = Chg.Screen.getLocalCustId();
        ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        condition = " C_CUST_ID = '" + custId + "'";
        if (!isEmpty(ccy)) {
            condition += " AND C_CURRENCY='" + ccy + "'" + " AND (I_GL_TYPE <> '2' OR  I_GL_TYPE is null)";
        }
        condition += Chg.Screen.custActGetCond;
        SYS_InqCUBK_Sql('CHG_GET_AC', condition);
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_TotalAmountOnChange = function() {
    try {
        var foreignValue; // Utility Auto Fix Comments
        var localValue; // Utility Auto Fix Comments
        localValue = Chg.Screen.getLocalChgTotalAmt();
        foreignValue = Chg.Screen.getForeignChgTotalAmt();
        if (SYT_CHG_TotalAmt_onChange) {
            SYT_CHG_TotalAmt_onChange(localValue, foreignValue);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_UserInit = function() {
    try {
        CHG_set_UsedChgACFlag($('CHG_FLD_LOCAL_CUST_AC_USED').value);
        Chg.Screen.mapCollect2CustPayRate("CHG_LOCAL_CUST_PAY_RATE", "M", "CHG_FOREIGN_CUST_PAY_RATE", "M");
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_allBalCcy_onchange = function() {
    try {
        var balCcy; // Utility Auto Fix Comments
        var charge; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        balCcy = $('CHG_FLD_ALL_BAL_CCY').value;
        trxChgArr = Chg.Screen.getAllTrxCharge();
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            if (charge.isNotCalculated()) {
                continue;
            }
            charge.setBalCcy(balCcy);
            charge.balCcyOnchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_allChargeFor_onchange = function() {
    try {
        var charge; // Utility Auto Fix Comments
        var chgFor; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        chgFor = $('CHG_FLD_ALL_CHARGE_FOR').value;
        if (chgFor == Chg.FOR_FOREIGN) {
            if (isEmpty(Chg.Screen.getForeignCustName())) {
                showErrMsg('Foreign customer name is missing.');
                return false;
            }
            if (isEmpty(Chg.Screen.getNostroAcNo())) {
                $('CHG_FLD_ALL_CHARGE_AT').value = Chg.AT_DEFERRED;
            }
        }
        trxChgArr = Chg.Screen.getAllTrxCharge();

        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            if (charge.isNotCalculated()) {
                continue;
            }
            charge.setChargeFor(chgFor);
            charge.chargeForOnchange();
            CHG_allTrxChargeAt_onchange();//Add for bug fix by Adam
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_allDefChargeAt_onchange = function() {
    try {
        var charge; // Utility Auto Fix Comments
        var chargeAt; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        chargeAt = $('CHG_FLD_ALL_CHARGE_AT').value;
        defChgArr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < defChgArr.length; i++) {
            charge = defChgArr[i];
            charge.setChargeAt(chargeAt);
            if (charge.isNotCalculated()) {
                continue;
            }
            charge.chargeAtOnchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_allPayCcy_onchange = function() {
    try {
        var collectCcy; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        var funcType; // Utility Auto Fix Comments
        var localCustCcy; // Utility Auto Fix Comments
        collectCcy = Chg.Screen.getCollectCcy();
        localCustCcy = Chg.Screen.getLocalCustCcy();
        foreignCustCcy = Chg.Screen.getNostroCcy();
        funcType = "FUNCTION";
        funcType = funcType.toLowerCase();
        if (typeof SYT_calLocalColl2PayRate === 'function') {
            SYT_calLocalColl2PayRate(collectCcy, localCustCcy);
        }
        if (typeof SYT_calForeignColl2PayRate === 'function') {
            SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);
        }
        Chg.Screen.calcCustPayAmt();
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_allTrxChargeAt_onchange = function() {
    try {
        var charge; // Utility Auto Fix Comments
        var chargeAt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        chargeAt = $('CHG_FLD_ALL_CHARGE_AT').value;
        trxChgArr = Chg.Screen.getAllTrxCharge();
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            charge.setChargeAt(chargeAt);
            if (charge.isNotCalculated()) {
                continue;
            }
            charge.chargeAtOnchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_attachSetDefChargeAt = function() {
    try {
        var chargeAtFld; // Utility Auto Fix Comments
        chargeAtFld = $('CHG_FLD_ALL_CHARGE_AT');
        EEHtml.attachEventListener(chargeAtFld, "onchange", CHG_allDefChargeAt_onchange);
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_calcuTatalInPayCCY = function() {
    try {
        var foreignTotalInPayCCY; // Utility Auto Fix Comments
        var localTotalInPayCCY; // Utility Auto Fix Comments
        localTotalInPayCCY = Chg.Screen.getLocalChgCustPayTotalAmt() + Chg.Screen.getLocalVatCustPayTotalAmt();
        foreignTotalInPayCCY = Chg.Screen.getForeignChgCustPayTotalAmt() + Chg.Screen.getForeignVatCustPayTotalAmt();

        document.MAINFORM.CHG_FLD_LOCAL_PAY_TOTALE_IN_PAYCCY.value = localTotalInPayCCY;
        document.MAINFORM.CHG_FLD_FOREIGN_PAY_TOTALE_IN_PAYCCY.value = foreignTotalInPayCCY;
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_changeACstatus = function() {
    try {
        var objAcNo; // Utility Auto Fix Comments
        var objAcUseFlg; // Utility Auto Fix Comments
        var objBtnGetAC; // Utility Auto Fix Comments
        var objCcy; // Utility Auto Fix Comments
        var value; // Utility Auto Fix Comments
        value = Chg.Screen.getLocalChgTotalAmt();
        objAcUseFlg = $("CHG_FLD_LOCAL_CUST_AC_USED");
        objAcNo = $('CHG_FLD_LOCAL_CUST_AC_NO');
        objCcy = $('CHG_FLD_LOCAL_CUST_CCY');
        objBtnGetAC = $('CHG_GETAC_BTN');
        if (objAcUseFlg.value == 'true' && parseFloat(value) > 0) {
            objAcNo.className = 'CHAR_M';
            objAcNo.readOnly = false;
            objCcy.className = 'CHAR_M';
            objCcy.disabled = false;
            objBtnGetAC.disabled = false;
        } else {
            objAcNo.value = '';
            objAcNo.className = 'CHAR_P';
            objAcNo.readOnly = true;
            objCcy.className = 'CHAR_P';
            objCcy.disabled = true;
            objBtnGetAC.disabled = true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_hidden_TR = function(obj_nm) {
    try {
        var tr_obj; // Utility Auto Fix Comments
        tr_obj = EEHtml.getElementById(obj_nm);
        if (obj_nm != null) {
            tr_obj.style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_setAllBalCcy = function(balCcy) {
    try {
        var obj; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return false;
        }
        obj = $('CHG_FLD_ALL_BAL_CCY');
        obj.value = balCcy;
        EEHtml.fireEvent(obj, "onchange");
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_setAllChargeAt = function(chargeAt) {
    try {
        var obj; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return false;
        }
        obj = $('CHG_FLD_ALL_CHARGE_AT');
        obj.value = chargeAt;
        EEHtml.fireEvent(obj, "onchange");
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_setAllChargeFor = function(chgFor) {
    try {
        var obj; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return false;
        }
        obj = $('CHG_FLD_ALL_CHARGE_FOR');
        obj.value = chgFor;
        EEHtml.fireEvent(obj, "onchange");
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_setAllCollCcy = function(CollCcy) {
    try {
        var obj; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return false;
        }
        obj = $('CHG_FLD_COLLECT_CCY');
        obj.value = CollCcy;
        EEHtml.fireEvent(obj, "onchange");
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_setAllLocalPayCcy = function(PayCcy) {
    try {
        var obj; // Utility Auto Fix Comments
        var status; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return false;
        }
        obj = $('CHG_FLD_LOCAL_CUST_CCY');
        obj.value = PayCcy;
        status = obj.disabled;
        obj.disabled = false;
        EEHtml.fireEvent(obj, "onchange");
        obj.disabled = status;
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.CHG_set_UsedChgACFlag = function(flag) {
    try {
        if (typeof flag == 'string') {
            $('CHG_FLD_LOCAL_CUST_AC_USED').value = flag;
        }
        if (typeof flag == 'boolean') {
            if (flag) {
                $('CHG_FLD_LOCAL_CUST_AC_USED').value = "true";
            } else {
                $('CHG_FLD_LOCAL_CUST_AC_USED').value = "false";
            }
        }
        CHG_changeACstatus();
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.getFeeField = function(feeName, when) {
    try {
        var CHG_TRX_FEE_OBJ_COUNT; // Utility Auto Fix Comments
        var FieldArr; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        if (when == 'NOW') {
            CHG_TRX_FEE_OBJ_COUNT = Chg.Screen.getAllTrxCharge();
            for (i = 0; i < CHG_TRX_FEE_OBJ_COUNT.length; i++) {
                if (CHG_TRX_FEE_OBJ_COUNT[i].getCommDesc() == feeName) {
                    FieldArr = new Array();
                    FieldArr[0] = CHG_TRX_FEE_OBJ_COUNT[i].getCommDesc();
                    FieldArr[1] = CHG_TRX_FEE_OBJ_COUNT[i].getRuleCcy();
                    FieldArr[2] = CHG_TRX_FEE_OBJ_COUNT[i].getRuleAmt();
                    FieldArr[3] = CHG_TRX_FEE_OBJ_COUNT[i].getPayCcy();
                    FieldArr[4] = CHG_TRX_FEE_OBJ_COUNT[i].getPayAmt();
                    FieldArr[5] = CHG_TRX_FEE_OBJ_COUNT[i].getBalCcy();
                    FieldArr[6] = CHG_TRX_FEE_OBJ_COUNT[i].getBalAmt();
                    FieldArr[7] = CHG_TRX_FEE_OBJ_COUNT[i].getChargeFor();
                    FieldArr[8] = EEHtml.getElementById('CHG_FLD_ALL_CHARGE_AT').options[CHG_TRX_FEE_OBJ_COUNT[i].getChargeAt()].text;
                    FieldArr[9] = CHG_TRX_FEE_OBJ_COUNT[i].getVatRate();
                    return FieldArr;
                }
            }
            return null;
        } else if (when == 'DLY') {
            flg = '';
            for (m = 0; m < CHG_TRX_FEE_OBJ_COUNT.length; m++) {
                if (CHG_TRX_FEE_OBJ_COUNT[i].getCommDesc() == feeName) {
                    flg = 'Y'; // Utility Auto Fix Comments
                    return flg;
                    //break;


                }
            }
            if (flg != 'Y') {
                flg = 'N';
                return flg;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}

csLbiCompProto.FLD_SSSS_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        var ac = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
        if (!isEmpty(ac)) {
            localCustACClearFlag = "false";
            SYS_GetCUBK_S('CHG_GET_AC', 'CHG_FLD_LOCAL_CUST_AC_NO');
            CHG_setAllLocalPayCcy($('CHG_FLD_LOCAL_CUST_CCY').value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_CHG_Header.js", e);
    }
}