var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYM_EPLC_DRAWING_REF();
        SYM_EPLC_INIT_CCY();
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.TEMP_TTL_PRES_AMT.value = document.MAINFORM.TTL_PRES_AMT.value;
        document.MAINFORM.TEMP_PENDING_PRES_BAL.value = document.MAINFORM.PENDING_PRES_BAL.value;

        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
        document.MAINFORM.DRAW_NOTES.value = document.MAINFORM.NOTES.value;
        SYF_EPLC_CALL_PRSNTER_BENE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PRES_REF = function() {
    try {

        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_hideObj("PRES_BK_REF");
            SYT_DisObj("PRES_BENE_REF");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BENE_REF, 'M');
        } else {
            SYT_hideObj("PRES_BENE_REF");
            SYT_DisObj("PRES_BK_REF");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_PRES_BK_REF = function() {
    try {

        /*added by aac for PayAccept catalog requirement*/
        if (document.MAINFORM.DOC_PRES_BY.value == "Beneficiary's Bank") {
            document.MAINFORM.PRES_BENE_REF.value = document.MAINFORM.PRES_BK_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CALL_PRSNTER_BENE = function() {
    try {

        if (document.MAINFORM.DOC_PRES_BY.value == "Beneficiary") {
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            //document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
            //document.MAINFORM.PRES_BK_LANG.value = document.MAINFORM.BENE_LANG.value;
            //document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
            //document.MAINFORM.PRES_BK_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
            //document.MAINFORM.PRES_BK_FAX.value = document.MAINFORM.BENE_FAX.value;
            //document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.BENE_TLX.value;
            //document.MAINFORM.PRES_BK_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value; 
            //document.MAINFORM.PRES_BK_AC_NO.value = document.MAINFORM.BENE_ACNO.value;

            document.MAINFORM.PRES_BK_REF.value = document.MAINFORM.BENE_REF_NO.value;
            document.MAINFORM.PRES_BENE_REF.value = document.MAINFORM.BENE_REF_NO.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_DOC_PRES_BY = function() {
    try {

        SYM_EPLC_M_CLASS_BY_DOCPRES(document.MAINFORM.DOC_PRES_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();

        SYM_EPLC_M_CAL_TTL_PRES_AMT();
        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
        SYF_EPLC_PRES_BK_REF();
        document.MAINFORM.DOC_STAT.value = 'Discrepancy Found';
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_AC_WT_BK = function() {
    try {

        var arr_Flds = new Array(document.MAINFORM.AC_WT_BK_ID, document.MAINFORM.AC_WT_BK_ID_BTN, document.MAINFORM.AC_WT_BK_NM, document.MAINFORM.AC_WT_BK_ADD_BTN, document.MAINFORM.AC_WT_BK_ADD1, document.MAINFORM.AC_WT_BK_ADD2, document.MAINFORM.AC_WT_BK_ADD3, document.MAINFORM.AC_WT_BK_SW_TAG, document.MAINFORM.AC_WT_BK_SW_ADD);
        var arr_FldClass = new Array('P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P');

        SYT_ChangeFldStringClass(arr_Flds, arr_FldClass);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.DRAW_NOTES.value = document.MAINFORM.NOTES.value;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYF_EPLC_MPO_AC_WT_BK();
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYM_EPLC_M_MPO_PRES_REF(document.MAINFORM.DOC_PRES_BY.value);
        //SYF_EPLC_CALL_PRSNTER_BENE();--move to InitValues
        FLD_EPLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHG_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYM_EPLC_CLEAR_PRES_INFO();
        SYM_EPLC_M_MPO_PRES_REF(document.MAINFORM.DOC_PRES_BY.value);
        SYF_EPLC_CALL_PRSNTER_BENE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PENDING_PRES_BAL_onchange = function(event) {
    try {
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
        SYM_EPLC_Cal_LC_Balance();
        EEHtml.fireEvent(document.MAINFORM.AVLB_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_onchange = function(event) {
    try {
        var nPresAmt = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        var LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        if (nPresAmt > LC_AMT) {
            alert("The Presentation Amount should be lesser than LC Amount ");
            document.MAINFORM.PRES_AMT.value = 0;
        }
        if (nPresAmt < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_AMT.value = 0;
        }
        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_LC_CCY_onchange = function(event) {
    try {
        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_TTL_PRES_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_PRES_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PENDING_PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_REF_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_REF();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ADDIT_PRES_BK_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.ADV_BK_CHG_CCY.value = document.MAINFORM.PRES_CCY.value;

        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterWaiver.js", e);
    }
}