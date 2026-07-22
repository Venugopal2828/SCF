var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYT_Check_AMT();
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.TEMP_CHAR15.value = INTERFACE_BANCS_CR_TRX_CODE;
        document.MAINFORM.URP_AMT.value = SYS_BeFloat(document.MAINFORM.PMT_BAL.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'Payment';
        document.MAINFORM.PMT_AMT.value = 0.00;
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MT202 = function() {
    try {

        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.TRX_DT.value;
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.URP_CCY.value;
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.GRANTOR_BK_SW.value;

        SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'P', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');

        if (document.MAINFORM.X202_TAG_58A.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M', 'N');
        }
        if (document.MAINFORM.X202_TAG_58A.value == 'A') {
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
        }
        if (document.MAINFORM.X202_TAG_58A.value == 'D') {
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PMT_AMT = function() {
    try {

        document.MAINFORM.X202_AMT_32A.value = SYS_BeFloat(document.MAINFORM.PMT_AMT.value);
        document.MAINFORM.PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.PMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            //SYF_FFIT_VENT_TEMP_NO1();
            SYF_FFIT_TEMP_FLG1();
            document.MAINFORM.PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.PMT_AMT.value);
            document.MAINFORM.PMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.PMT_BAL.value);
            //document.MAINFORM.TEMP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.TEMP_AMT.value);
        }

        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_MT202();
            SYF_FFIT_TEMP_FLG1();
            document.MAINFORM.PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.PMT_AMT.value);
            document.MAINFORM.PMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.PMT_BAL.value);
            //document.MAINFORM.TEMP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.TEMP_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT6 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PMT_BAL.value) > 0) {
            document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.PMT_BAL.value;
            if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT6.value) - SYS_BeFloat(document.MAINFORM.PMT_AMT.value)) > 0) {
                document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.PMT_AMT.value;
            }
            document.MAINFORM.PMT_BAL.value = SYS_BeFloat(document.MAINFORM.PMT_BAL.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT6.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG1 = function() {
    try {

        var tdMT202 = EEHtml.getElementById('F');
        if (document.MAINFORM.TEMP_FLG1.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_ADD1, 'P', 'N');
            document.MAINFORM.TEMP_CHAR11.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR11, 'P', 'N');
            document.MAINFORM.TEMP_ADD1.value = GL9992;
            document.MAINFORM.OVER_AC_NO.value = GL9992;
            tdMT202.style.display = '';
            document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.TRX_DT.value;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.URP_CCY.value;
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR11, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_ADD1, 'M', 'N');
            tdMT202.style.display = 'none';
            document.MAINFORM.X202_VALUE_DT_32A.value = '';
            document.MAINFORM.X202_CCY_32A.value = '';
            document.MAINFORM.X202_TRX_REF_NO_20.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';

            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Payment_SYF_FFIT_VENT_TEMP_NO1_1', '1');



        // document.MAINFORM.OVER_AC_NO.value = GL9992;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_B2 = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Payment_SYF_FFIT_X202_1_B2_2', '1');
        } else {
            document.MAINFORM.TEMP_NM2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.PMT_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PMT_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.URP_AMT.value)) {
            alert("Payment amt should not be greater than URP amt");
            document.MAINFORM.PMT_AMT.value = 0.00;
        }
        if (SYS_BeFloat(document.MAINFORM.PMT_AMT.value) <= SYS_BeFloat(document.MAINFORM.URP_AMT.value)) {
            document.MAINFORM.PMT_BAL.value = SYS_BeFloat(document.MAINFORM.URP_AMT.value) - SYS_BeFloat(document.MAINFORM.PMT_AMT.value);
        }
        SYF_FFIT_PMT_AMT();
        FLD_FFIT_PMT_BAL_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_BAL_onchange = function(event) {
    try {
        tempBalAmt = SYS_BeFloat(document.MAINFORM.PMT_BAL.value);
        var PMT_AMT = SYS_BeFloat(document.MAINFORM.PMT_AMT.value);
        var PMT_BAL = SYS_BeFloat(document.MAINFORM.PMT_BAL.value);
        var URP_AMT = SYS_BeFloat(document.MAINFORM.URP_AMT.value);
        //alert(tempBalAmt);
        document.MAINFORM.PMT_BAL.value = SYT_AmtFormat(document.MAINFORM.URP_CCY.value, PMT_BAL);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_ADD1_onchange = function(event) {
    try {
        document.MAINFORM.OVER_AC_NO.value = document.MAINFORM.TEMP_ADD1.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_FLG1();
        if (document.MAINFORM.TEMP_FLG1.value == '3') {
            document.MAINFORM.TEMP_ADD1.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_AMT_32A_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_B2_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_B2_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ADV_BKADD_B2', 'X202_B2_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X202MEDIBKADD1_56A.value = '';
            document.MAINFORM.X202MEDIBKADD2_56A.value = '';
            document.MAINFORM.X202MEDIBKADD3_56A.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X202_MEDIBKACNO56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Payment.js", e);
    }
}