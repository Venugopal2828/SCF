var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Cal_FA_IRT_SPREAD = function() {
    try {

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_setBA_FLG = function() {
    try {

        var servApprv; // Utility Auto Fix Comments
        servApprv = document.MAINFORM.FA_SERVICE_APPRVD.value;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            if (servApprv == '1' || servApprv == '2') {
                document.MAINFORM.FA_BA_FLG.value = '1';
            } else {
                document.MAINFORM.FA_BA_FLG.value = '2';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DuplicateSBR = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        document.MAINFORM.FA_TEMP4.value = '';
        //sFieldList = "C_MAIN_REF";
        //sMappingList = "FA_TEMP4";
        SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Chk_DuplicateSBR_0', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'Duplicate Seller-Buyer relation!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_DUE_DT = function() {
    try {

        var day; // Utility Auto Fix Comments
        var day1; // Utility Auto Fix Comments
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name); // Utility Auto Fix Comments
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date must be later than it's Valid From Date!"); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }

        day1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_LMT_DUE_DT2.name); // Utility Auto Fix Comments
        if (day1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than buyer Limit End Date!"); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_VAL_DT = function() {
    try {

        var day; // Utility Auto Fix Comments
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name); // Utility Auto Fix Comments
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_VAL_DT.name, "SBR Valid From Date cannot be later than SBR End Date!"); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_VAL_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FADA_Cal_setBA_FLG();
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == '1' && document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            LMTS.Ext.createFSBC(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.FA_LMT_AMT.value, document.MAINFORM.FA_LMT_CCY.value, 'Y', 'Y', SYS_BUSI_DATE, document.MAINFORM.FA_LMT_VAL_DT.value, document.MAINFORM.FA_LMT_DUE_DT.value);
        }

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            document.MAINFORM.FA_APPL_LMT_CCY.value = SYS_LOCAL_CCY;
            document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_APPL_LMT_AMT.value;
            document.MAINFORM.FA_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_FA_LMT_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_DUE_DT()) {
            return false;
        }


        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Factoring commission rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_EF_HAN_CHG_AMT.value == 0) {
            if (!confirm('Handling charge is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_IRT_SPREAD.value == 0) {
            if (!confirm('Financing Interest Margin Rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_OVD_IRT_SPREAD.value == 0) {
            if (!confirm('Penalty Interest Spread Rate is 0!')) {
                return false;
            }
        }
        if (!SYF_FADA_CheckDOEdit()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Buyer = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('GET_BUYER_ID', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_BuyerLimitEndDate = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            //sFieldList = "LM_DUE_DAY ";
            //sMappingList = "FA_LMT_DUE_DT2";
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_BuyerLimitEndDate_1', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_BUYER_INFO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            //sFieldList = "FA_CUST_NM_ADD_ML;FA_CUST_BK_NM;FA_CUST_ACC_NO";
            //sMappingList = "FA_BUYER_ADD_ML;FA_BUYER_BK_NM;FA_BUYER_AC_NO";
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_BUYER_INFO_2', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_INCO_ID = function() {
    try {

        if (document.MAINFORM.FA_INCO_ID.value != '') {
            SYS_GetCUBK('FA_INCO_ID', 'FA_INCO_ID'); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.FA_INCO_ID.value = '';
            document.MAINFORM.FA_INCO_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_SEL_INFO = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            //sFieldList = "FA_CUST_NM_ADD_ML;FA_CUST_BK_NM;FA_CUST_ACC_NO";
            //sMappingList = "FA_SEL_ADD_ML;FA_SEL_BK_NM;FA_SEL_AC_NO";
            SYS_GetTableDataByRule_S('SYF_FADA_CreateSBR_SYF_FADA_Get_FA_SEL_INFO_3', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetTableDataByRule_S('Get_FADA_CONTRACT_Info', '1', true);
        SYS_GetTableDataByRule_S('Get_FADA_CONTRACT_Info1', '1', true);
        SYS_GetTableDataByRule_S('Get_FADA_CONTRACT_Info2', '1', true);
        document.MAINFORM.FA_BUSI_STATUS.value = 'SBR';
        document.MAINFORM.FA_SERVICE_APPRVD.value = document.MAINFORM.FA_SERVICE_REQ.value;
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
        document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_APPL_LMT_AMT.value;
        document.MAINFORM.FA_INCO_ID.value = document.MAINFORM.FA_IF_ID.value;
        document.MAINFORM.FA_INCO_NM.value = document.MAINFORM.FA_IF_NM.value;

        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        //SYF_FADA_Get_FA_BUYER_INFO();
        //SYF_FADA_Get_FA_SEL_INFO();
        document.MAINFORM.FA_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            document.MAINFORM.FA_PCA_REF.value = document.MAINFORM.FA_CNTR_REF.value;
            document.MAINFORM.FA_PMT_COND.value = '1';
            //EEHtml.getElementById('discount1').style.display = "";
            //EEHtml.getElementById('discount2').style.display = "";
            document.MAINFORM.FA_APPL_LMT_CCY.value = SYS_LOCAL_CCY;
        } else {
            //EEHtml.getElementById('discount1').style.display = "none";
            //EEHtml.getElementById('discount2').style.display = "none";
        }



        document.MAINFORM.ASSET_ACNO.value = 'Bank Liability Account';
        document.MAINFORM.CURRNT_STATUS.value = 'RegisterBPOFin';
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("GET_BPO_PO_INFO", "N", false, '', "BPO_PAY_OBLIGOR");
            SYF_FADA_TTL_OBLIG_AMT();

        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FADA_Get_BuyerLimitEndDate();
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_NM', 'P');

            //EEHtml.getElementById('ServiceInfo').style.display = "none";
            //SYT_ChangeFldClass_New('FA_LMT_CCY','M');
            //SYT_ChangeFldClass_New('FA_LMT_AMT','M');
            //SYT_ChangeFldClass_New('FA_LMT_TYPE','M');
        } else {
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_NM', 'P');

        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYT_ChangeFldClass_New('FA_EF_HAN_CHG_CCY', 'O');
        } else {
            SYT_ChangeFldClass_New('FA_EF_HAN_CHG_CCY', 'P');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            SYT_ChangeFldClass_New('FA_LMT_CCY', 'O');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'O');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            EEHtml.getElementById('buyerLimitEndDate').style.display = "none";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('F').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "none";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('F').style.display = "none";
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('C').style.display = "none";
            SYT_DisableDiv('C_div');
        }
        SYF_FADA_Cal_FA_IRT_SPREAD();
        document.MAINFORM.TSU_TTL_NET_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, document.MAINFORM.TSU_TTL_NET_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //SYS_GetRefNo('DF_MAIN_REF', 'SYF_FADA_setMainRef');
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_setMainRef = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'SBR';
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("GET_BPO_PO_INFO", "N", false, '', "BPO_PAY_OBLIGOR");
        SYF_FADA_TTL_OBLIG_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_TTL_OBLIG_AMT = function() {
    try {

        var ttlamt = 0;
        var pmtamt = 0;
        var _do;
        var arrayvalue;
        var i;
        var id;
        var mData;
        var num;
        var record;
        _do = SYS_getDoByXpath('BPO_PAY_OBLIGOR');
        num = SYS_getcurrRecordCount("BPO_PAY_OBLIGOR");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                pmtamt = SYS_getValFromRec(record, 'TSU_PMTOBLGR_AMT');
                ttlamt = SYS_BeFloat(ttlamt) + SYS_BeFloat(pmtamt)
                document.MAINFORM.TTL_OBLIG_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, ttlamt);


            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CheckDOEdit = function() {
    try {

        var _do;
        var arrayvalue;
        var i;
        var mData;
        var num;
        var record;
        var type;
        _do = SYS_getDoByXpath('BPO_PAY_OBLIGOR');
        num = SYS_getcurrRecordCount("BPO_PAY_OBLIGOR");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                type = SYS_getRecState(record);
                if ('E' == type) {
                    return true;
                } else {
                    alert("Should edit the Payment Obligation DO first!");
                    return false;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_Buyer();
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INCO_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_FA_INCO_ID();
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_RegisterBPOFinInfor.js", e);
    }
}