var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.SG_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.CANCEL_FLG.value = 'No';

        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        document.MAINFORM.SG_AMT.value = SYT_AmtFormat(document.MAINFORM.SG_CCY.value, document.MAINFORM.SG_AMT.value);
        document.MAINFORM.X103_INSTR_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_INSTR_AMT_33B.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_LIAB_VOUCHER();
        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ASSET_ACNO_onchange = function(event) {
    try {
        SYS_GetCUBK('X205_ASSET_ACNO', document.MAINFORM.ASSET_ACNO.name);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_IS_GPI_MEMBER_onchange = function(event) {
    try {
        var GPI = document.MAINFORM.IS_GPI_MEMBER.value;
        if (GPI == 'YES') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '001';
        } else if (GPI == 'NO') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LC_AMT_onchange = function(event) {
    try {

        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) < 0) {
            alert("Currency and Amount[32A] amount should not be negative");
            document.MAINFORM.LC_AMT.value = 0;
        }
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SG_AMT_onchange = function(event) {
    try {
        var SG_AMT;
        SG_AMT = SYS_BeFloat(document.MAINFORM.SG_AMT.value);
        if (SG_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.SG_AMT.value = 0;
        }
        document.MAINFORM.SG_AMT.value = SYT_AmtFormat(document.MAINFORM.SG_CCY.value, document.MAINFORM.SG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SG_CCY_onchange = function(event) {
    try {
        document.MAINFORM.SG_AMT.value = SYT_AmtFormat(document.MAINFORM.SG_CCY.value, document.MAINFORM.SG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        SYM_PYMT_X103_ACC_BKID_57A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X103_ACC_BKID_57A.value = '';
            document.MAINFORM.X103_ACC_BKNM_57A.value = '';
            document.MAINFORM.X103_ACCBKADD1_57A.value = '';
            document.MAINFORM.X103_ACCBKADD2_57A.value = '';
            document.MAINFORM.X103_ACCBKADD3_57A.value = '';
            document.MAINFORM.X103_ACC_BKSW_57A.value = '';
            document.MAINFORM.X103_ACC_BKACNO57A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X103_ACC_BKSW_57A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        SYM_PYMT_X103_BENECU_ID_59A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_50_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X103_ORDCU_ID_50A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_52_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X103_ORD_BKID_52A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_53_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X103_SENDCORRID53A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_56_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X103_MEDI_BKID_56A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_57_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X103_ACC_BKID_57A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_59_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X103_BENECU_ID_59A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {
        var X103_INSTR_AMT_33B;
        X103_INSTR_AMT_33B = SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value);
        if (X103_INSTR_AMT_33B < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X103_INSTR_AMT_33B.value = 0;
        }
        document.MAINFORM.X103_INSTR_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_INSTR_AMT_33B.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {
        document.MAINFORM.X103_INSTR_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_INSTR_AMT_33B.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYM_PYMT_X103_MEDI_BKID_56A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X103_MEDI_BKID_56A.value = '';
            document.MAINFORM.X103_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X103MEDIBKADD1_56A.value = '';
            document.MAINFORM.X103MEDIBKADD2_56A.value = '';
            document.MAINFORM.X103MEDIBKADD3_56A.value = '';
            document.MAINFORM.X103_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X103_MEDIBKACNO56A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_X103_MEDI_BKSW_56A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        SYM_PYMT_X103_ORDCU_ID_50A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        SYM_PYMT_X103_ORD_BKID_52A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function(event) {
    try {
        SYM_PYMT_X103_SENDCORRID53A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_SENDCORRSW53A.value == '') {
            document.MAINFORM.X103_SENDCORRID53A.value = '';
            document.MAINFORM.X103_SENDCORRNM53A.value = '';
            document.MAINFORM.X103SENDCORADD153A.value = '';
            document.MAINFORM.X103SENDCORADD253A.value = '';
            document.MAINFORM.X103SENDCORADD353A.value = '';
            document.MAINFORM.X103_SENDCORRSW53A.value = '';
            document.MAINFORM.X103SENDCORACNO53A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X103_SENDCORRSW53A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X202_ORDBK_ID_52A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X202_MEDI_BKID_56A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X202_ACC_BKID_57A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_BTN_onclick = function(event) {
    try {
        SYM_PYMT_X202_BENE_BKID_58A_INQUIRE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        SYM_PYMT_X202_ACC_BKID_57A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_ACC_BKID_57A.value = '';
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X202_ACC_BKSW_57A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        SYM_PYMT_X202_BENE_BKID_58A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_BENE_BKID_58A.value = '';
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X202_BENE_BKSW_58A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYM_PYMT_X202_MEDI_BKID_56A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_MEDI_BKID_56A.value = '';
            document.MAINFORM.X202_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X202MEDIBKADD1_56A.value = '';
            document.MAINFORM.X202MEDIBKADD2_56A.value = '';
            document.MAINFORM.X202MEDIBKADD3_56A.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X202_MEDIBKACNO56A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X202_MEDI_BKSW_56A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        SYM_PYMT_X202_ORDBK_ID_52A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_ORDBK_ID_52A.value = '';
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X202_ORDBK_SW_52A_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button1_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('X205_ASSET_ACNO', 'C_CLEAR_TYPE = \'VOSTRO\' AND C_ACCT_CCY = \'<--LC_CCY-->\' AND C_ACCT_WITH_ID = \'<--X202_ORDBK_ID_52A-->\' AND C_CLEAR_VALID =\'T\' ');
        SYS_InqCUBK_byCondition('X205_ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button2_onclick = function(event) {
    try {
        if (document.MAINFORM.LC_CCY.value != SYS_LOCAL_CCY) {
            SYS_InqCUBK_byCondition('button2_205', '1');
        } else {
            SYS_InqCUBK_byCondition('button2_205', '1');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT205.js", e);
    }
}