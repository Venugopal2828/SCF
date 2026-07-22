var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Get_RemiCCY = function() {
    try {

        var sMappingList; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        sMappingList = "FA_DOC_CCY";
        SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_RemiCCY_0', '1', null, 'Y', "Y");
        SYF_FADA_Map_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

            window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
            tempFA_DOC_CCY = RegExp.$1;
            document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_REMI_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.FA_REMI_DT.value;
        document.MAINFORM.X202_RELATEDNO_21.value = 'NONREF';
        SYF_FADA_Get_RemiCCY();
        SYF_FADA_ChangeField_CCY_GetData();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'RMT';
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';

        document.MAINFORM.FA_IF_COMM_BK2.value = '';
        document.MAINFORM.FA_IF_AC_NO1.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo("FADA_REMI_REF", "SYF_FADA_Get_RemiRef");
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_RemiRef = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'RMT';
        document.MAINFORM.FA_REMI_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.FA_TEMP2.value = pre + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FactorInfo = function() {
    try {

        var IFCCY1; // Utility Auto Fix Comments
        var IFCCY2; // Utility Auto Fix Comments
        var IFCCY3; // Utility Auto Fix Comments
        var IFCCY4; // Utility Auto Fix Comments
        var IFCCY5; // Utility Auto Fix Comments
        var docCCY; // Utility Auto Fix Comments
        docCCY = document.MAINFORM.FA_DOC_CCY.value;
        IFCCY1 = document.MAINFORM.FA_IF_CCY1.value;
        IFCCY2 = document.MAINFORM.FA_IF_CCY2.value;
        IFCCY3 = document.MAINFORM.FA_IF_CCY3.value;
        IFCCY4 = document.MAINFORM.FA_IF_CCY4.value;
        IFCCY5 = document.MAINFORM.FA_IF_CCY5.value;
        if (docCCY != '' && docCCY == IFCCY1) {
            SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_FactorInfo_1', '1', null, null, false);
        } else if (docCCY != '' && docCCY == IFCCY2) {
            SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_FactorInfo_2', '1', null, null, false);
        } else if (docCCY != '' && docCCY == IFCCY3) {
            SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_FactorInfo_3', '1', null, null, false);
        } else if (docCCY != '' && docCCY == IFCCY4) {
            SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_FactorInfo_4', '1', null, null, false);
        } else if (docCCY != '' && docCCY == IFCCY5) {
            SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_FactorInfo_5', '1', null, null, false);
        } else if (docCCY == '') {
            document.MAINFORM.FA_IF_COMM_BK2.value = '';
            document.MAINFORM.FA_IF_AC_NO1.value = '';
        }
        SYF_FADA_Get_BIC();
        SYF_FADA_Get_B2_Info();
        SYF_FADA_Get_58_Info();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Map_RefreshOptions = function(mappingList) {
    try {

        var arrayValue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newOption; // Utility Auto Fix Comments
        var objFld; // Utility Auto Fix Comments
        var optionAry; // Utility Auto Fix Comments
        optionAry = new Array();
        newOption = new Array();
        try {
            for (i = 0; i < SYS_MULTI_DATA.length; i++) { // Utility Auto Fix Comments
                arrayValue = SYS_MULTI_DATA[i][1];
                for (j = 0; j < arrayValue.length; j++) {
                    optionAry.push(arrayValue[j]);
                }
            }
            while (true) {
                ary = optionAry.pop();
                if (!ary) {
                    break;
                }
                if (optionAry.contains(ary)) {
                    optionAry.splice(optionAry.indexOf(ary), 1, ary);
                } else {
                    newOption.push(ary);
                }
            }
            objFld = EEHtml.getElementById(mappingList);
            if (objFld) {
                objFld.options[0] = new Option("", "");
                for (i = 0; i < newOption.length; i++) {
                    fldValue = newOption[i];
                    objFld.options.add(new Option(fldValue, fldValue));
                }
            }
        } catch (e1) {
            alert("[RefreshOptions Error]: " + e1.expression);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_BIC = function() {
    try {

        document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.FA_IF_COMM_BK2.value;
        document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.FA_IF_COMM_BK2.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_B2_Info = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FADA_CommissionRemittance_SYF_FADA_Get_B2_Info_6', '1', null, null, false);
        }
        X202_ADV_BKID_B2_GetCUBK();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_58_Info = function() {
    try {

        document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_ADV_BKSW_B2.value;
        document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.X202_ADV_BKID_B2.value;
        document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X202_ADV_BKNM_B2.value;
        document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X202_ADV_BKADD1_B2.value;
        document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X202_ADV_BKADD2_B2.value;
        document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X202_ADV_BKADD3_B2.value;
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Exists_Record = function(_do, sKeyValue) {
    try {

        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        records = SYS_getRecords(_do); // Utility Auto Fix Comments
        len = records.length;
        for (i = 0; i < len; i++) {
            record = records[i];
            if (sKeyValue == record["FA_SEL_ID"]) {
                return record;
            }
        }
        return null;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_dcmAdd = function(arg1, arg2) {
    try {

        var val; // Utility Auto Fix Comments
        val = (arg1 + arg2).toFixed(2);
        return SYS_BeFloat(val);
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Sum_FromRecord = function(oRecord) {
    try {

        var amtValue; // Utility Auto Fix Comments
        var pamtValue; // Utility Auto Fix Comments
        pamtValue = SYS_BeFloat(SYS_getValFromRec(oRecord, "FA_IF_HAN_CHG_PAMT"));
        amtValue = SYS_BeFloat(SYS_getValFromRec(oRecord, "FA_IF_COMM_AMT"));
        return SYF_FADA_dcmAdd(pamtValue, amtValue);
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_do_appendOrUpdate = function(node, rec, keyName) {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var keyValue; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var newArray; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        fldValue = rec[keyName];
        if (fldValue == null || fldValue.length == 0) {
            return false;
        }

        mData = [];
        record = null;
        keyValue = "";
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            mData.push(arrayvalue[i]);
            keyValue = SYS_getValFromRec(arrayvalue[i], keyName);
            if (keyValue != fldValue) {
                continue;
            }
            record = arrayvalue[i];
        }
        if (record == null) {
            node.addRecord_click();
            newArray = SYS_getRecords(node);
            for (i = 0, len = newArray.length; i < len; i++) {
                keyValue = SYS_getValFromRec(newArray[i], keyName);
                if (keyValue != "") {
                    continue;
                }
                record = newArray[i];
                //break;
            }
            mData.push(record);
        }
        for (fldName in rec) {
            if (fldName == "cloneA") {
                continue;
            }
            record[fldName] = rec[fldName];
        }

        SYS_reLoadGrid(node, mData);
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_computeData = function(_do) {
    try {

        var computeValue; // Utility Auto Fix Comments
        var sumAmt; // Utility Auto Fix Comments
        var sumDebut; // Utility Auto Fix Comments
        sumAmt = SYS_getFieldSumValue(_do, "FA_SEL_SUBTTL_AMT", 2); // Utility Auto Fix Comments
        sumDebut = SYS_getFieldSumValue(_do, "FA_SEL_SUBTTL_DEDUCT", 2); // Utility Auto Fix Comments
        computeValue = SYF_FADA_dcmAdd(sumAmt, -sumDebut);
        document.MAINFORM.FA_REMI_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, computeValue);
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.FA_REMI_AMT.value;
        SYF_FADA_ChangeField_CCY_GetData();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_do_delete = function(node, rec, keyName) {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var keyValue; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        fldValue = rec[keyName];
        if (fldValue == null || fldValue.length == 0) {
            return false;
        }

        records = [];
        record = null;
        keyValue = "";
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            keyValue = SYS_getValFromRec(record, keyName);
            if (keyValue == fldValue) {
                record['recordType'] = 'D';
            }
            records[i] = record;
        }
        SYS_reLoadGrid(node, records);
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDODataCompleted = function() {
    try {

        var EFRemitInvDO; // Utility Auto Fix Comments
        var ex; // Utility Auto Fix Comments
        var flagField; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var pagesBar; // Utility Auto Fix Comments
        var pc; // Utility Auto Fix Comments
        var perPageCount; // Utility Auto Fix Comments
        var ps; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var start; // Utility Auto Fix Comments
        var store; // Utility Auto Fix Comments
        var totalRecs; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            EFRemitInvDO = SYS_getDoByXpath("EFRemitInv");
            flagField = "FA_IF_CHG_PAID_FLG";
            pagesBar = EFRemitInvDO.grid.bottomToolbar;
            ps = pagesBar.pageSize;
            store = pagesBar.store;
            totalRecs = store.getTotalCount();
            start = 0;
            perPageCount = 0;

            ex = totalRecs % ps;

            if (ex == 0) {
                pc = totalRecs / ps;
            } else {
                pc = (totalRecs - ex) / ps + 1;
            }
            while ((start = (pc - 1) * ps) >= 0) {
                pagesBar.doLoad(start);
                perPageCount = pagesBar.store.getCount();
                for (i = 0; i < perPageCount; i++) {
                    record = store.getAt(i);
                    if (record.data[flagField] == "Y") {
                        EFRemitInvDO.grid.selModel.selectRow(i, true, false);
                    }
                }
                pc--;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYF_FADA_LoadDODataCompleted();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.SYF_FADA_ChangeField_CCY_GetData = function() {
    try {

        var num; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("ExpRemi");
        if (num > 0) {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
            SYS_disableButton('EFRemitInv', 'GetData');
        } else {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'M');
            SYS_enableButton('EFRemitInv', 'GetData');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_DOC_CCY_onchange = function(event) {
    try {
        var _do; // Utility Auto Fix Comments
        SYF_FADA_Get_FactorInfo();
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.FA_DOC_CCY.value;
        _do = SYS_getDoByXpath("EFRemitInv"); // Utility Auto Fix Comments
        _do.clearAll(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IF_COMM_BK2_onchange = function(event) {
    try {
        SYF_FADA_Get_BIC();
        SYF_FADA_Get_B2_Info();
        SYF_FADA_Get_58_Info();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REMI_DT_onchange = function(event) {
    try {
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.FA_REMI_DT.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        X202_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        X202_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        X202_BENE_BKID_58A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        X202_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        X202_ORDBK_ID_52A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_RECCORRID_54A_onchange = function(event) {
    try {
        X202_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_SENDCORRID53A_onchange = function(event) {
    try {
        X202_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CommissionRemittance.js", e);
    }
}