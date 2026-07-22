var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        SYM_PYMT_Copy50Fvalues();
        SYM_PYMT_set50FValues();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_PYMT_REF_20();
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT.value;
        document.MAINFORM.DB_CCY.value = document.MAINFORM.CR_CCY.value;
        SYT_ChangeFldClass(document.MAINFORM.CR_AMT, 'M');
        //document.MAINFORM.X103_SEND_NO_20.value = '';
        SYT_ChangeFldClass(document.MAINFORM.X103_SEND_NO_20, 'O');
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        SYF_PYMT_Set_MT299();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_DET_CHG_71A = function() {
    try {
        SYF_PYMT_ITT_MUP_TIS_AccountChargesRules();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*SYF_PYMT_Chg_X103_DET_CHG_71A", e);
    }
}

csFuncLevelProto.SYF_PYMT_ITT_MUP_TIS_AccountChargesRules = function() {
    try {
        if (SYF_PYMT_LocalMUP() || SYF_PYMT_LocalTIS()) {
            SYM_PYMT_Shw_Loc_Pymt_Chrgs(document.MAINFORM.MT103_DISTRBN, document.MAINFORM.INW_X103_DET_CHG_71A);
            SYF_PYMT_ITT_MUP_TIS_AccountDefault();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*SYF_PYMT_ITT_MUP_TIS_AccountChargesRules", e);
    }
}

csFuncLevelProto.SYF_PYMT_ITT_MUP_TIS_AccountDefault = function() {
    try {
        switch (SYS_BANK_COUNTRY) {
            case "MU":
                if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                    document.MAINFORM.CPYT_CR_BK_AC.value = "";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_11', '1', true);
                } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_12', '1', true);
                }
                break;
            case "TZ":
                if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                    document.MAINFORM.CPYT_CR_BK_AC.value = "";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_13', '1', true);
                } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_14', '1', true);
                }
                break;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*SYF_PYMT_ITT_MUP_TIS_AccountDefault", e);
    }
}

csFuncLevelProto.SYF_PYMT_LocalMUP = function() {
    try {
        if (SYS_BANK_COUNTRY == "MU" && document.MAINFORM.CR_CCY.value == "MUR") {
            document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.X103_B3_SERVICE_CODE_ORIGINAL.value;

            if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                if (document.MAINFORM.X103_B3_SERVICE_CODE.value == "MUP" &&
                    document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU" &&
                    document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) == "SBICMUMU") {
                    return true;
                } else {
                    SYT_DebugAlert("LocalMUP = False\r\nX103_B3_SERVICE_CODE.value=='MUP' (" + (document.MAINFORM.X103_B3_SERVICE_CODE.value == "MUP") + " '" + document.MAINFORM.X103_B3_SERVICE_CODE.value + "')\r\nINW_SNDBK_SW.value.substring(4, 6)=='MU' (" + (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU") + " '" + document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) + "')\r\nINW_X103_ACC_BKSW_57A.value.substr(0, 8)=='SBICMUMU' (" + (document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) == "SBICMUMU") + " '" + document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) + "')\r\n");
                }
            } else if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                if (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) != "MU" &&
                    document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) == "MU") {
                    document.MAINFORM.X103_B3_SERVICE_CODE.value = "MUP";
                    return true;
                } else {
                    SYT_DebugAlert("LocalMUP = False\r\nINW_SNDBK_SW.value.substring(4, 6)=='MU' (" + (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU") + " '" + document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) + "')\r\nX103_ACC_BKSW_57A.value.substring(4, 6)=='MU' (" + (document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) == "MU") + " '" + document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) + "')");
                }
            }
        }

        return false;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*SYF_PYMT_LocalMUP", e);
    }
}

csFuncLevelProto.SYF_PYMT_LocalTIS = function() {
    try {
        if (SYS_BANK_COUNTRY == "TZ" && document.MAINFORM.CR_CCY.value == "TZS") {
            document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.X103_B3_SERVICE_CODE_ORIGINAL.value;

            if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                if (document.MAINFORM.X103_B3_SERVICE_CODE.value == "TIS" &&
                    document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "TZ" &&
                    document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) == "SBICTZTX") {
                    return true;
                }
            } else if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                if (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) != "TZ" &&
                    document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) == "TZ") {
                    document.MAINFORM.X103_B3_SERVICE_CODE.value = "TIS";
                    return true;
                }
            }
        }

        return false;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*SYF_PYMT_LocalTIS", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT299 = function() {
    try {
        document.MAINFORM.XN99_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.XN99_RELATEDNO_21.value = document.MAINFORM.X103_SEND_NO_20.value;
        document.MAINFORM.TRACKER_SW_ADD.value = 'TRCKCHZ0';
        SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*SYF_PYMT_Set_MT299", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_CNTY_CODE_onchange = function() {
    try {
        if (document.MAINFORM.AC_WT_INST_CNTY_CODE.value.trim() != '') {
            document.MAINFORM.AC_WT_INST_CNTY_CODE.value = document.MAINFORM.AC_WT_INST_CNTY_CODE.value.toUpperCase();
            document.MAINFORM.X103_ACC_BKSW_57A.value = "";
            SYS_GetCUBK('AC_WT_INST_CNTY_NM', 'AC_WT_INST_CNTY_CODE');
        } else {
            document.MAINFORM.AC_WT_INST_CNTY_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_AC_WT_INST_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHIP_FED_onchange = function() {
    try {
        SYM_PYMT_Chg_Chip_Fed();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_CHIP_FED_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_COV_MSG_onchange = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CR_CCY.value;
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CR_AMT.value;
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value;
            document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.X103_SEND_NO_20.value;
            document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        }
        For_Swift_Mapping2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_CPYT_PAY_COV_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_AMT_onchange = function() {
    try {
        if (document.MAINFORM.CR_AMT.value < 0) {
            alert("Credit Amount should not be negative value");
            document.MAINFORM.CR_AMT.value = '';
        }
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT.value;
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_CR_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MERGE_FLAG_103_onchange = function() {
    try {
        MERGE_FALG_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_MERGE_FLAG_103_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MT103_DISTRBN_onchange = function() {
    try {
        if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds' || document.MAINFORM.MT103_DISTRBN.value == 'Return of Funds') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SEND_NO_20, "P");
            SYT_ChangeFldClass(document.MAINFORM.CUST_REF, "O");
            document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.CUST_REF.value = document.MAINFORM.X103_ORDCU_NM_50A.value; //Added by GOPI
        } else {
            document.MAINFORM.X103_SEND_NO_20.value = '';
            SYT_ChangeFldClass(document.MAINFORM.X103_SEND_NO_20, "P");
            SYT_ChangeFldClass(document.MAINFORM.CUST_REF, "P");
            document.MAINFORM.CUST_REF.value = ''; //Added by GOPI
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_MT103_DISTRBN_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_FLAG_onchange = function() {
    try {
        if (document.MAINFORM.SEND_TO_FLAG.value == "Send to Investigation Queue") {
            document.MAINFORM.INV_STATUS.value = "Investigations " + SYS_BUSI_DATE;
        } else {
            document.MAINFORM.INV_STATUS.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_SEND_TO_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD1_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD1_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ACCBKADD1_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD2_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD2_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ACCBKADD2_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD3_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD3_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ACCBKADD3_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKACNO57A_onchange = function() {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKACNO57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ACC_BKACNO57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKSW_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ACC_BKSW_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ADV_BKID_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ADV_BKSW_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF1_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BK2BK_INF1_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF2_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BK2BK_INF2_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF3_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BK2BK_INF3_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF4_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BK2BK_INF4_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF5_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BK2BK_INF5_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF6_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BK2BK_INF6_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BKOP_CODE_23B_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_BKOP_CODE_23B();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_BKOP_CODE_23B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ENV_CONT_77T_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ENV_CONT_77T();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ENV_CONT_77T_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_MEDI_BKID_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKSW_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_MEDI_BKSW_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ORD_BKID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKSW_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_ORD_BKSW_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRID_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_RECCORRID_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRSW_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_RECCORRSW_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP1_77B_onchange = function() {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REG_REP1_77B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP2_77B_onchange = function() {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REG_REP2_77B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP3_77B_onchange = function() {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REG_REP3_77B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF1_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REMIT_INF1_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF2_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REMIT_INF2_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF3_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REMIT_INF3_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF4_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_REMIT_INF4_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_SENDCORRID53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRSW53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_SENDCORRSW53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKID_51A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SEND_BKID_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_SEND_BKID_51A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKSW_51A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SEND_BKSW_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_SEND_BKSW_51A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMID_55A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_TRDREIMID_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_TRDREIMID_55A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMSW_55A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_TRDREIMSW_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_TRDREIMSW_55A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_VALUE_DT_32A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKSW_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_ACC_BKSW_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKID_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_ADV_BKID_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKSW_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_ADV_BKSW_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BENE_BKID_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BENE_BKID_58A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKSW_58A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BENE_BKSW_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BENE_BKSW_58A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF1_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF1_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BK2BK_INF1_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF2_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF2_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BK2BK_INF2_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF3_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF3_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BK2BK_INF3_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF4_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF4_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BK2BK_INF4_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF5_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF5_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BK2BK_INF5_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF6_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF6_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_BK2BK_INF6_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_MEDI_BKID_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKSW_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_MEDI_BKSW_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ORDBK_ID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_ORDBK_ID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_SW_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ORDBK_SW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_ORDBK_SW_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRID_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_RECCORRID_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRSW_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_RECCORRSW_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRID53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_SENDCORRID53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRSW53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_SENDCORRSW53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_ID_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_AC_WT_INST_CNTY_CODE_Lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_SEND_TO_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_SG_BIN_onclick = function() {
    try {
        SYM_PYMT_Clk_Trd_Reim_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_SG_BIN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('CPYT_DR_AC', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_51_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Send_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_51_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_52A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Ord_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_52A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_53A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Send_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_53A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_54A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Rec_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_54A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_56A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_IntIns_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_56A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_57A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_AWI_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_57A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_B2_lookup1();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X103_B2_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup5();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_52_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_53_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup6();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_53_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_54_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup7();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_54_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup8();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_56_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup9();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_57_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup4();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_58_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_B2_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup3();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_202COV.js*FLD_PYMT_X202_B2_BTN_onclick", e);
    }
}