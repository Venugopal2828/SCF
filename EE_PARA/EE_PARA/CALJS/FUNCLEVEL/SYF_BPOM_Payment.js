var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_BPOM_CAL_LIAB_ACNO = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_BPOM_Payment_SYF_BPOM_CAL_LIAB_ACNO_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHARGES = function() {
    try {

        SYF_BPOM_Chg_BPOM_SWIFT();
        SYM_BPOM_Chg_OtherFee();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Chg_BPOM_SWIFT = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_SWIFT'];
        amt = EEHtml.getElementById('TSU_TTL_NET_AMT').value;
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var chgEntry; // Utility Auto Fix Comments
        var commList; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            commList = "BPOM_SWIFT,BPOM_OTHER";
            Chg.LoadCommission(commList, 'MAINREF', '', null, '', '', 'false');
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_BPOM_CHARGES();
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("GET_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
        SYF_BPOM_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();

        SYM_BPOM_Change_BUYR_CORR_MED();
        SYM_BPOM_Change_SUPLR_CORR_MED();

        SYT_DisableDivClass('C_div');
        SYF_BPOM_Send_103();
        SYF_BPOM_Send_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYM_BPOM_CAL_BUYR();
        SYM_BPOM_CAL_SUPLR();
        SYM_BPOM_CAL_ISSUE_BK();
        SYM_BPOM_CAL_ADV_BK();
        SYF_BPOM_CAL_LIAB_ACNO();
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ADV_BK_SW_ADD));
        SYF_BPOM_GET_PO_C_MAIN_REF();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_MLDC_SetDebitCreditData = function() {
    try {

        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.TSU_CCY.value + "/" + document.MAINFORM.TSU_CCY.value;
        payAMTs = document.MAINFORM.TSU_PAY_AMT.value + "/" + document.MAINFORM.TSU_PAY_AMT.value;
        descs = "Payment Amount";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";

        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_GET_PO_C_MAIN_REF = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "C_MAIN_REF";
        //sMappingList = "PO_C_MAIN_REF";
        SYS_GetTableDataByRule_S('SYF_BPOM_Payment_SYF_BPOM_GET_PO_C_MAIN_REF_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Send_103 = function() {
    try {

        if (document.MAINFORM.TEMP_MESG_TYPE.value == 'YES') {
            EEHtml.getElementById('Y').style.display = '';
            SYT_EnableDivClass('Y_div');
            document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            EEHtml.getElementById('Y').style.display = 'none';
            SYT_DisableDiv('Y_div');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Send_202 = function() {
    try {

        if (document.MAINFORM.TEMP_FLG1.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BUSI_STATUS.value = 'Import Payment';
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_BUYR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_BUYR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_SUPLR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_BPOM_Send_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_TEMP_MESG_TYPE_onchange = function(event) {
    try {
        SYF_BPOM_Send_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103MEDIBKADD1_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103MEDIBKADD2_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103MEDIBKADD3_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103SENDCORADD153A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103SENDCORADD253A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103SENDCORADD353A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACCBKADD2_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACCBKADD3_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        X103_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        X103_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        X103_BENECU_ID_59A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_MEDIBKACNO56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        X103_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDBKADD1_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDBKADD2_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDBKADD3_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        X103_ORDCU_ID_50A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        X103_ORD_BKID_52A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORD_BKNM_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_RECCORADD154A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_RECCORADD254A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_RECCORADD354A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_RECCORRID_54A_onchange = function(event) {
    try {
        X103_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_RECCORRNM_54A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_SENDCORRID53A_onchange = function(event) {
    try {
        X103_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_SENDCORRNM53A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        X103_SEND_BKID_51A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        X202_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        X202_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        X202_BENE_BKID_58A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        X202_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        X202_ORDBK_ID_52A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_RECCORRID_54A_onchange = function(event) {
    try {
        X202_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_X202_SENDCORRID53A_onchange = function(event) {
    try {
        X202_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_BPOM_Payment.js", e);
    }
}