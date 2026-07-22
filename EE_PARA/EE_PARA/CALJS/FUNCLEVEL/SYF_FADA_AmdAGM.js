var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        if (document.MAINFORM.FA_REBATE_RATE.value > 0 && document.MAINFORM.FA_REBATE_ACCOUNT.value == '') {
            document.MAINFORM.FA_REBATE_ACCOUNT.value = document.MAINFORM.FA_ANCHOR_ACC.value;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FADA_Chk_new_due_dt()) {
            return false;
        }
        //
        //            if(!SYF_FADA_Chk_SEL_ID()){
        //            	return false;
        //            }
        //            if(!SYF_FADA_Chk_BUY_ID()){
        //            	return false;
        //            }
        //            
        if (!SYF_FADA_Chk_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_CHECK_COMM_RATE()) {

            return false;
        }
        // if (!SYF_FADA_CHECK_DO_NO()) {
        //
        //                     return false;
        //                 }
        if (!SYF_FADA_Chk_MAX_LOAN_PER()) {

            return false;
        }

        if (!SYF_FADA_Chk_PO_MAX_LOAN_PER()) {

            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetTableDataByRule_S('Get_CE_MAIN_REF_AMD', '1', 'Y');
        SYS_GetTableDataByRule_S('GET_SBR_NO', '1', null, false);
        if (document.MAINFORM.FA_CE_MAIN_REF.value == '') {
            document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_AGM_DUE_DT.value;
        }
        document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
        document.MAINFORM.FA_TEMP6.value = document.MAINFORM.FA_EXTEND_TIMES.value;
        document.MAINFORM.FA_TEMP4.value = document.MAINFORM.FA_EXTEND_DT.value;
        document.MAINFORM.FA_ANCHOR_AMT_OLD.value = document.MAINFORM.FA_ANCHOR_AMT.value;
        SYF_FADA_CAL_init_TabBC();
        //if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
        //                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'P');
        //                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
        //                document.MAINFORM.REBATE_BT.style.visibility = 'hidden';
        //                document.MAINFORM.FA_REBATE_RATE.value = 0;
        //                document.MAINFORM.FA_REBATE_ACCOUNT.value = '';
        //            } else {
        //                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'O');
        //                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'O');
        //                document.MAINFORM.REBATE_BT.style.visibility = 'visible';
        //            }
        //            SYF_FADA_FA_REQ_BUYER_APR_FLG();
        document.MAINFORM.FA_BUSI_FUNC.value = ''; //zoe 20220624
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("AGM_AMD", "N", false, '', "SCF_CounterParty");
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.FA_TEMP_BK_ID1.value = document.MAINFORM.CHG_FREQ_CD.value;
            var arrOptionV;
            arrOptionV = ['D', 'M', 'Q', 'W','A'];
            SYS_FilterOptions('CHG_FREQ_CD', arrOptionV);
            document.MAINFORM.CHG_FREQ_CD.value = document.MAINFORM.FA_TEMP_BK_ID1.value;
        }

        SYF_FADA_MPO_busi_func_POST();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_ANCHOR_ACTOR = function() {
    try {
        var fa_busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (fa_busi_tp == 'PF') {
            document.MAINFORM.FA_ANCHOR_ROLE.value = 'BUYER';
            SYT_ChangeFldClass(document.MAINFORM.PO_MAX_LOAN_PERC, 'P');
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'M');
        }
        if (fa_busi_tp == 'RD') {
            document.MAINFORM.FA_ANCHOR_ROLE.value = 'SELLER';
            SYT_ChangeFldClass(document.MAINFORM.PO_MAX_LOAN_PERC, 'P');
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'M');

        }
        if (fa_busi_tp == 'POF') {
            document.MAINFORM.FA_ANCHOR_ROLE.value = 'SELLER';
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'M');
            document.MAINFORM.FA_MAX_LOAN_PERC.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.PO_MAX_LOAN_PERC, 'M');
            SYT_DisableDivClass('INV');
            SYT_ClearFields("FA_AUTO_FIN,FA_AUTO_DEBIT,FA_CUT_OFF_DAYS,FA_MIN_FIN_AMT,FA_MAX_FIN_AMT,INV_FIN_MODE");
            document.MAINFORM.FA_AUTO_FIN.value = 'No';
            document.MAINFORM.FA_AUTO_DEBIT.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.INV_FIN_MODE, 'P');
            SYT_DisableDivClass('POOL');
            SYT_ClearFields("POOL_INV_MIN_AMT,POOL_INV_MAX_AMT,POOL_INV_MIN_PERIOD,POOL_INV_MAX_PERIOD");
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_ANCHOR_ACTOR", e);
    }
}

csFuncLevelProto.SYF_FADA_AUTO_FINANCE = function() {
    try {
        var FA_AUTO_FIN = document.MAINFORM.FA_AUTO_FIN.value;
        if (FA_AUTO_FIN == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'M');
            document.MAINFORM.FA_MIN_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_AGM_CCY.value, document.MAINFORM.FA_MIN_FIN_AMT.value);
            document.MAINFORM.FA_MAX_FIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_AGM_CCY.value, document.MAINFORM.FA_MAX_FIN_AMT.value);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'P'); //zoe 20220520
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'P'); //zoe 20220520
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'P'); //zoe 20220520
            document.MAINFORM.FA_MIN_FIN_AMT.value = '';
            document.MAINFORM.FA_MAX_FIN_AMT.value = '';
            document.MAINFORM.FA_CUT_OFF_DAYS.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_AUTO_FINANCE", e);
    }
}

csFuncLevelProto.SYF_FADA_CAL_back_TabBC = function() {
    try {
        document.MAINFORM.FA_ACK_FLG.value = document.MAINFORM.FA_ACK_FLG_OLD.value;
        document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = document.MAINFORM.FA_REQ_BUYER_APR_FLG_OLD.value;
        document.MAINFORM.GRACE_DAYS.value = document.MAINFORM.GRACE_DAYS_OLD.value;
        document.MAINFORM.FA_AUTO_FIN.value = document.MAINFORM.FA_AUTO_FIN_OLD.value;
        document.MAINFORM.FA_AUTO_DEBIT.value = document.MAINFORM.FA_AUTO_DEBIT_OLD.value;
        document.MAINFORM.FA_CUT_OFF_DAYS.value = document.MAINFORM.FA_CUT_OFF_DAYS_OLD.value;
        document.MAINFORM.FA_MIN_FIN_AMT.value = document.MAINFORM.FA_MIN_FIN_AMT_OLD.value;
        document.MAINFORM.FA_MAX_FIN_AMT.value = document.MAINFORM.FA_MAX_FIN_AMT_OLD.value;
        document.MAINFORM.POOL_INV_MIN_AMT.value = document.MAINFORM.POOL_INV_MIN_AMT_OLD.value;
        document.MAINFORM.POOL_INV_MAX_AMT.value = document.MAINFORM.POOL_INV_MAX_AMT_OLD.value;
        document.MAINFORM.POOL_INV_MIN_PERIOD.value = document.MAINFORM.POOL_INV_MIN_PERIOD_OLD.value;
        document.MAINFORM.POOL_INV_MAX_PERIOD.value = document.MAINFORM.POOL_INV_MAX_PERIOD_OLD.value;

        document.MAINFORM.FA_EF_COMM_RT.value = document.MAINFORM.FA_EF_COMM_RT_OLD.value;
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = document.MAINFORM.FA_EF_HAN_CHG_AMT_OLD.value;
        document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_LOAN_IRATE_TYPE_OLD.value;
        document.MAINFORM.PO_MAX_LOAN_PERC.value = document.MAINFORM.PO_MAX_LOAN_PERC_OLD.value;
        document.MAINFORM.FA_MAX_LOAN_PERC.value = document.MAINFORM.FA_MAX_LOAN_PERC_OLD.value;
        document.MAINFORM.FA_IRT_SPREAD.value = document.MAINFORM.FA_IRT_SPREAD_OLD.value;
        document.MAINFORM.FA_REBATE_RATE.value = document.MAINFORM.FA_REBATE_RATE_OLD.value;
        document.MAINFORM.XBOR_RT.value = document.MAINFORM.XBOR_RT_OLD.value;
        document.MAINFORM.FA_REBATE_ACCOUNT.value = document.MAINFORM.FA_REBATE_ACCOUNT_OLD.value;
        document.MAINFORM.FA_OVD_IRT_SPREAD.value = document.MAINFORM.FA_OVD_IRT_SPREAD_OLD.value;
        document.MAINFORM.CHG_FREQ_CD.value = document.MAINFORM.CHG_FREQ_CD_OLD.value;
        document.MAINFORM.FA_FIN_INFO.value = document.MAINFORM.FA_FIN_INFO_OLD.value;
        document.MAINFORM.CHG_PAID_BY.value = document.MAINFORM.CHG_PAID_BY_OLD.value;
        document.MAINFORM.FA_DD_CHG_TP.value = document.MAINFORM.FA_DD_CHG_TP_OLD.value;
        document.MAINFORM.FA_DD_CHG_FIX.value = document.MAINFORM.FA_DD_CHG_FIX_OLD.value;
        document.MAINFORM.FA_DD_CHG_SHA.value = document.MAINFORM.FA_DD_CHG_SHA_OLD.value;
		document.MAINFORM.FA_ROLLOVER_FLAG.value = document.MAINFORM.FA_ROLLOVER_FLAG_OLD.value;
		document.MAINFORM.MAX_ROLLOVER_DAYS.value = document.MAINFORM.MAX_ROLLOVER_DAYS_OLD.value;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_CAL_back_TabBC", e);
    }
}

csFuncLevelProto.SYF_FADA_CAL_init_TabBC = function() {
    try {
        document.MAINFORM.FA_ACK_FLG_OLD.value = document.MAINFORM.FA_ACK_FLG.value;
        document.MAINFORM.FA_REQ_BUYER_APR_FLG_OLD.value = document.MAINFORM.FA_REQ_BUYER_APR_FLG.value;
        document.MAINFORM.GRACE_DAYS_OLD.value = document.MAINFORM.GRACE_DAYS.value;
        document.MAINFORM.FA_AUTO_FIN_OLD.value = document.MAINFORM.FA_AUTO_FIN.value;
        document.MAINFORM.FA_AUTO_DEBIT_OLD.value = document.MAINFORM.FA_AUTO_DEBIT.value;
        document.MAINFORM.FA_CUT_OFF_DAYS_OLD.value = document.MAINFORM.FA_CUT_OFF_DAYS.value;
        document.MAINFORM.FA_MIN_FIN_AMT_OLD.value = document.MAINFORM.FA_MIN_FIN_AMT.value;
        document.MAINFORM.FA_MAX_FIN_AMT_OLD.value = document.MAINFORM.FA_MAX_FIN_AMT.value;
        document.MAINFORM.POOL_INV_MIN_AMT_OLD.value = document.MAINFORM.POOL_INV_MIN_AMT.value;
        document.MAINFORM.POOL_INV_MAX_AMT_OLD.value = document.MAINFORM.POOL_INV_MAX_AMT.value;
        document.MAINFORM.POOL_INV_MIN_PERIOD_OLD.value = document.MAINFORM.POOL_INV_MIN_PERIOD.value;
        document.MAINFORM.POOL_INV_MAX_PERIOD_OLD.value = document.MAINFORM.POOL_INV_MAX_PERIOD.value;

        document.MAINFORM.FA_EF_COMM_RT_OLD.value = document.MAINFORM.FA_EF_COMM_RT.value;
        document.MAINFORM.FA_EF_HAN_CHG_AMT_OLD.value = document.MAINFORM.FA_EF_HAN_CHG_AMT.value;
        document.MAINFORM.FA_LOAN_IRATE_TYPE_OLD.value = document.MAINFORM.FA_LOAN_IRATE_TYPE.value;
        document.MAINFORM.PO_MAX_LOAN_PERC_OLD.value = document.MAINFORM.PO_MAX_LOAN_PERC.value;
        document.MAINFORM.FA_MAX_LOAN_PERC_OLD.value = document.MAINFORM.FA_MAX_LOAN_PERC.value;
        document.MAINFORM.FA_IRT_SPREAD_OLD.value = document.MAINFORM.FA_IRT_SPREAD.value;
        document.MAINFORM.FA_REBATE_RATE_OLD.value = document.MAINFORM.FA_REBATE_RATE.value;
        document.MAINFORM.XBOR_RT_OLD.value = document.MAINFORM.XBOR_RT.value;
        document.MAINFORM.FA_REBATE_ACCOUNT_OLD.value = document.MAINFORM.FA_REBATE_ACCOUNT.value;
        document.MAINFORM.FA_OVD_IRT_SPREAD_OLD.value = document.MAINFORM.FA_OVD_IRT_SPREAD.value;
        document.MAINFORM.CHG_FREQ_CD_OLD.value = document.MAINFORM.CHG_FREQ_CD.value;
        document.MAINFORM.FA_FIN_INFO_OLD.value = document.MAINFORM.FA_FIN_INFO.value;
        document.MAINFORM.CHG_PAID_BY_OLD.value = document.MAINFORM.CHG_PAID_BY.value;
        document.MAINFORM.FA_DD_CHG_TP_OLD.value = document.MAINFORM.FA_DD_CHG_TP.value;
        document.MAINFORM.FA_DD_CHG_FIX_OLD.value = document.MAINFORM.FA_DD_CHG_FIX.value;
        document.MAINFORM.FA_DD_CHG_SHA_OLD.value = document.MAINFORM.FA_DD_CHG_SHA.value;
		document.MAINFORM.FA_ROLLOVER_FLAG_OLD.value = document.MAINFORM.FA_ROLLOVER_FLAG.value;
		document.MAINFORM.MAX_ROLLOVER_DAYS_OLD.value = document.MAINFORM.MAX_ROLLOVER_DAYS.value;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_CAL_init_TabBC", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_BUSI_TYPE_FIELD = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('DevlId').style.display = "none";
            EEHtml.getElementById('DevlId1').style.display = "none";
            EEHtml.getElementById('DevlNm1').style.display = "none";
            EEHtml.getElementById('DevlNm12').style.display = "none";
            EEHtml.getElementById('DevlNm2').style.display = "none";

            EEHtml.getElementById('BuyId1').style.display = "";
            EEHtml.getElementById('BuyId12').style.display = "";
            EEHtml.getElementById('BuyNm1').style.display = "";
            EEHtml.getElementById('BuyNm12').style.display = "";
            EEHtml.getElementById('BuyNm2').style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID, 'B');
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'M');
            document.getElementById('BuyId1').innerHTML = 'Buyer ID';
            document.getElementById('BuyNm1').innerHTML = 'Buyer Name';
        } else {

            EEHtml.getElementById('DevlId').style.display = "";
            EEHtml.getElementById('DevlId1').style.display = "";
            EEHtml.getElementById('DevlNm1').style.display = "";
            EEHtml.getElementById('DevlNm12').style.display = "";
            EEHtml.getElementById('DevlNm2').style.display = "";

            EEHtml.getElementById('BuyId1').style.display = "none";
            EEHtml.getElementById('BuyId12').style.display = "none";
            EEHtml.getElementById('BuyNm1').style.display = "none";
            EEHtml.getElementById('BuyNm12').style.display = "none";
            EEHtml.getElementById('BuyNm2').style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'B');
            SYT_ChangeFldClass_New('FA_SEL_ID', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_CHECK_BUSI_TYPE_FIELD", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_COMM_RATE = function() {
    try {
        if (document.MAINFORM.FA_EF_COMM_RT.value < 0 || document.MAINFORM.FA_EF_COMM_RT.value > 100) {
            alert('Commission Rate must >= 0 and < 100,please check!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_CHECK_COMM_RATE", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'PF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') && document.MAINFORM.FA_NO_OF_COUNTER.value == 0) {
            alert('The transaction can not be confirmed without any Counter Party.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_CHECK_DO_NO", e);
    }
}

csFuncLevelProto.SYF_FADA_CUST_setRef = function(ref) {
    try {
        document.MAINFORM.TEMP_FA_BUYER_ID.value = ref;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_CUST_setRef", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_IRT_SPREAD = function() {
    try {
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M', 'N'); //Change from O to M for SCF change
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Cal_FA_IRT_SPREAD", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_MAX_ROLLOVER_DAYS = function() {
    try {
        var ROLL_FLAG = document.MAINFORM.FA_ROLLOVER_FLAG.value;
        if (ROLL_FLAG == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P', 'N');
            document.MAINFORM.MAX_ROLLOVER_DAYS.value = "0";
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Cal_MAX_ROLLOVER_DAYS", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_NEW_DUE_DT = function() {
    try {
        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            //
            //                	var sDate,s,sInt;
            //                	sDate =document.MAINFORM.FA_ORG_DUE_DT.value;
            //                	s = sDate.substr(0,4);
            //                	sInt = parseInt(s) + 1;
            //                	document.MAINFORM.FA_AGM_DUE_DT.value= sInt + sDate.substr(4,9);
            //                	SYS_CalEndWorkingDate(SYS_BANK_COUNTRY,document.MAINFORM.FA_AGM_DUE_DT.value, 0, 'SYF_FADA_Cal_NEW_DUE_DT_callback()','B', 'N', 'N');
            //                
            var sDate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_ORG_DUE_DT.value);
            var year = sDate.substr(2, 2);
            var month = sDate.substr(5, 2);
            var day = sDate.substr(8, 2);
            var nyear = parseInt(year, 0) + 1;
            document.MAINFORM.FA_AGM_DUE_DT.value = SYT_FORMAT_DATE(SYS_DATE_FORMAT, nyear, month, day);
            document.MAINFORM.FA_EXTEND_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_EXTEND_TIMES.value = SYS_BeInt(document.MAINFORM.FA_TEMP6.value) + 1;
        } else {
            document.MAINFORM.FA_AGM_DUE_DT.value = document.MAINFORM.FA_ORG_DUE_DT.value;
            document.MAINFORM.FA_EXTEND_DT.value = document.MAINFORM.FA_TEMP4.value;
            document.MAINFORM.FA_EXTEND_TIMES.value = document.MAINFORM.FA_TEMP6.value;
        }
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Cal_NEW_DUE_DT", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_NEW_DUE_DT_callback = function(duedate) {
    try {
        document.MAINFORM.FA_AGM_DUE_DT.value = duedate;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Cal_NEW_DUE_DT_callback", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_VALID_DAYS = function() {
    try {
        document.MAINFORM.FA_VALID_DAYS.value = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Cal_VALID_DAYS", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_BUY_ID = function() {
    try {
        document.MAINFORM.FA_TEMP5.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_AmendAgreement_SYF_FADA_Chk_BUY_ID_0', '1', 'Y');
        if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_ID, 'This buyer has already signed a contract!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_BUY_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DD_CHG = function() {
    try {
        var bu_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        var chg_tp = document.MAINFORM.FA_DD_CHG_TP.value;
        if (bu_tp == 'DD') {
            SYT_DisableDivClass('Common');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_TP, 'M');
            SYT_EnableDivClass('DD');
            SYT_ChangeFldClass(document.MAINFORM.CHG_FREQ_CD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_PAID_BY, 'M');
            if (chg_tp == 'F') {
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'P');
            } else if (chg_tp == 'S') {
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_DD_CHG", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_INV_FIN_MODE = function() {
    try {
        var FIN_MODE = document.MAINFORM.INV_FIN_MODE.value;
        var bu_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (FIN_MODE == 'INV') {
            SYT_DisableDivClass('POOL');
            SYT_ClearFields("POOL_INV_MIN_AMT,POOL_INV_MAX_AMT,POOL_INV_MIN_PERIOD,POOL_INV_MAX_PERIOD");
            SYT_EnableDivClass('INV');
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'M');
            if (bu_tp == 'DD') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AUTO_DEBIT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');//20250321 Niamh;
			}
        } else if (FIN_MODE == 'POOL') {
            SYT_DisableDivClass('INV');
            SYT_ClearFields("FA_AUTO_FIN,FA_CUT_OFF_DAYS,FA_MIN_FIN_AMT,FA_MAX_FIN_AMT,MAX_ROLLOVER_DAYS");
            SYT_EnableDivClass('POOL');
            SYT_ChangeFldClass(document.MAINFORM.FA_AUTO_DEBIT, 'M');
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');
			document.MAINFORM.FA_ROLLOVER_FLAG.value = 'No';
			SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P');

            document.MAINFORM.POOL_INV_MAX_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_AGM_CCY.value, document.MAINFORM.POOL_INV_MAX_AMT.value);
            document.MAINFORM.POOL_INV_MIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_AGM_CCY.value, document.MAINFORM.POOL_INV_MIN_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_INV_FIN_MODE", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_MAX_LOAN_PER = function() {
    try {
        if (document.MAINFORM.FA_MAX_LOAN_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, "Invoice Max Loan Percentage must between 0 and 100!");
            document.MAINFORM.FA_MAX_LOAN_PERC.value = '0';
            return false;
        }
        if (document.MAINFORM.FA_MAX_LOAN_PERC.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, "Invoice Max Loan Percentage must between 0 and 100!");
            document.MAINFORM.FA_MAX_LOAN_PERC.value = '0';
            return false;
        }
        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (busi_tp == 'POF') {
            if (document.MAINFORM.PO_MAX_LOAN_PERC.value > 0 && document.MAINFORM.FA_MAX_LOAN_PERC.value < document.MAINFORM.PO_MAX_LOAN_PERC.value) {
                SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, "Invoice Max Loan Percentage must be greater than PO Max Loan Percentage!");
                document.MAINFORM.FA_MAX_LOAN_PERC.value = '0';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_MAX_LOAN_PER", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_PO_MAX_LOAN_PER = function() {
    try {
        if (document.MAINFORM.PO_MAX_LOAN_PERC.value > 100) {
            SYS_CheckError(document.MAINFORM.PO_MAX_LOAN_PERC, "PO Max Loan Percentage must between 0 and 100!");
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '0';
            return false;
        }
        if (document.MAINFORM.PO_MAX_LOAN_PERC.value < 0) {
            SYS_CheckError(document.MAINFORM.PO_MAX_LOAN_PERC, "PO Max Loan Percentage must between 0 and 100!");
            document.MAINFORM.PO_MAX_LOAN_PERC.value = '0';
            return false;
        }
        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (busi_tp == 'POF') {
            if (document.MAINFORM.FA_MAX_LOAN_PERC.value > 0 && document.MAINFORM.FA_MAX_LOAN_PERC.value < document.MAINFORM.PO_MAX_LOAN_PERC.value) {
                SYS_CheckError(document.MAINFORM.FA_MAX_LOAN_PERC, "PO Max Loan Percentage must be less than Invoice Max Loan Percentage!");
                document.MAINFORM.PO_MAX_LOAN_PERC.value = '0';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_PO_MAX_LOAN_PER", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SEL_ID = function() {
    try {
        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_AmendAgreement_SYF_FADA_Chk_SEL_ID_1', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_ID, 'This seller has already signed a contract!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_SEL_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_VAL_DT = function() {
    try {
        if (document.MAINFORM.FA_AGM_VAL_DT.value != '' && document.MAINFORM.FA_AGM_VAL_DT.value != null) {
            if (document.MAINFORM.FA_AGM_VAL_DT.value == document.MAINFORM.TRX_DT.value) {
                return true;
            }
            var a1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_AGM_VAL_DT.name);
            if (a1 > 0) {
                alert('Valid Date cannot be later than transaction Date!');
                document.MAINFORM.FA_AGM_VAL_DT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_VAL_DT", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_new_due_dt = function() {
    try {
        var a1 = SYS_GetSubDays(document.MAINFORM.FA_AGM_DUE_DT.name, document.MAINFORM.FA_ORG_DUE_DT.name);
        if (a1 >= 0 && document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            alert('The new due date should be later than the original due date!');
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Chk_new_due_dt", e);
    }
}

csFuncLevelProto.SYF_FADA_DD_CHG_TP = function() {
    try {
        var chg_tp = document.MAINFORM.FA_DD_CHG_TP.value;
        if (chg_tp == 'F') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'P');
            document.MAINFORM.FA_DD_CHG_SHA.value = '0';
        } else if (chg_tp == 'S') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_FIX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DD_CHG_SHA, 'M');
            document.MAINFORM.FA_DD_CHG_FIX.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_DD_CHG_TP", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_REQ_BUYER_APR_FLG = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'P');
            document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_FA_REQ_BUYER_APR_FLG", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRefNo_BuyIDSub = function() {
    try {
        //Add by Effie 20190523
        SYS_GetSubPageRefNo('CUST', SYF_FADA_CUST_setRef(), "", "CUSTREF", "CUSTREF");
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_GetRefNo_BuyIDSub", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRefNo_DFAgreement = function() {
    try {
        //Add by Effie 20190524 
        SYS_GetSubPageRefNo('FADA_BUY_REF', SYF_FADA_setDOref(), "", "DOREF", "DOREF");
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_GetRefNo_DFAgreement", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_buy_id_check = function() {
    try {
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('FADA_BUY_ID2', document.MAINFORM.FA_BUYER_ID.name, 'SYF_FADA_Chk_BUY_ID');
        } else {
            document.MAINFORM.FA_BUYER_ID.value = '';
            document.MAINFORM.FA_BUYER_NM.value = '';
            document.MAINFORM.FA_BUYER_NM2.value = '';
            document.MAINFORM.FA_BUYER_ADD_ML.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Get_buy_id_check", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_sel_id_check = function() {
    try {
        if (document.MAINFORM.FA_SEL_ID.value != '') {
            SYS_GetCUBK('FADA_SEL_ID2', document.MAINFORM.FA_SEL_ID.name, 'SYF_FADA_Chk_SEL_ID');
        } else {
            document.MAINFORM.FA_SEL_ID.value = '';
            document.MAINFORM.FA_SEL_NM.value = '';
            document.MAINFORM.FA_SEL_NM2.value = '';
            document.MAINFORM.FA_SEL_ADDR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_Get_sel_id_check", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_BY_FA_AUTO_FIN = function() {
    try {
        var FA_AUTO_FIN = document.MAINFORM.FA_AUTO_FIN.value;
        if (FA_AUTO_FIN == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_MIN_FIN_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_MAX_FIN_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_CUT_OFF_DAYS, 'P');
        }
        //zoe 20220520
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_MPO_BY_FA_AUTO_FIN", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_AGM_DUE_DT = function() {
    try {
        if (document.MAINFORM.FA_BUSI_FUNC.value == '3') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
        }
        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_MPO_FA_AGM_DUE_DT", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_busi_func = function() {
    try {
        //1=extend; 2= end;3=change;
        var func = document.MAINFORM.FA_BUSI_FUNC.value;
        var tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (func == '1') {
            document.MAINFORM.FA_END_DT.value = '';
            //document.MAINFORM.FA_BUSI_STATUS.value = 'CNTR';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'M');
            //SYT_EnableDivClass('C_div');
            //SYF_FADA_ANCHOR_ACTOR(); //zoe
            //SYF_FADA_MPO_BY_FA_AUTO_FIN(); //zoe
            //SYT_EnableDivClass('B_div');
            //SYF_FADA_Chk_INV_FIN_MODE();
            SYT_DisableDivClass('C_div');
            SYT_DisableDivClass('B_div');
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');
			SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'B', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'P'); //zoe
            SYF_FADA_CAL_back_TabBC();
            SYF_FADA_refresh_DO_initial();
            document.MAINFORM.FA_ANCHOR_AMT.value = document.MAINFORM.FA_ANCHOR_AMT_OLD.value;
        } else if (func == '2') {

            var retvalue; // Utility Auto Fix Comments

            retvalue = window.confirm("All transactions under the Ended agreement could not be processed, Please confirm.");
            if (retvalue == true) {
                document.MAINFORM.FA_END_DT.value = SYS_BUSI_DATE;
                SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
                //document.MAINFORM.FA_BUSI_STATUS.value = 'End';
                document.MAINFORM.FA_AGM_SIGN_FLG.value = 'E';
                SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'M', 'N');
                SYT_DisableDivClass('C_div');
                SYT_DisableDivClass('B_div');
				document.MAINFORM.FA_ROLLOVER_FLAG.value = 'No';
				SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');
				SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'P'); //zoe
                SYF_FADA_CAL_back_TabBC();
                SYF_FADA_refresh_DO_initial();
                document.MAINFORM.FA_ANCHOR_AMT.value = document.MAINFORM.FA_ANCHOR_AMT_OLD.value;
            } else {
                document.MAINFORM.FA_BUSI_FUNC.value = '';
                return;
            }
        } else if (func == '3') {
            document.MAINFORM.FA_END_DT.value = '';
            //document.MAINFORM.FA_BUSI_STATUS.value = 'NORMAL';
            document.MAINFORM.FA_AGM_SIGN_FLG.value = 'Y';
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
            SYT_EnableDivClass('C_div');
            SYF_FADA_Cal_FA_IRT_SPREAD();
            SYF_FADA_ANCHOR_ACTOR(); //zoe
            SYF_FADA_MPO_BY_FA_AUTO_FIN(); //zoe
            SYF_FADA_FA_REQ_BUYER_APR_FLG();
			SYF_FADA_Cal_MAX_ROLLOVER_DAYS();
            // SYT_EnableDivClass('B_div');
            SYT_EnableDivClass('Common');
            SYF_FADA_Chk_INV_FIN_MODE();
            SYF_FADA_Chk_DD_CHG();
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
                document.MAINFORM.REBATE_BT.style.visibility = 'hidden';
                document.MAINFORM.FA_REBATE_RATE.value = 0;
                document.MAINFORM.FA_REBATE_ACCOUNT.value = '';
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'O');
                document.MAINFORM.REBATE_BT.style.visibility = 'visible';
            }
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'B');
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'O'); //zoe
        } else { //zoe
            document.MAINFORM.FA_END_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'B');
            SYT_DisableDivClass('C_div');
            SYT_DisableDivClass('B_div');
			SYT_ChangeFldClass(document.MAINFORM.FA_ROLLOVER_FLAG, 'P');
			SYT_ChangeFldClass(document.MAINFORM.MAX_ROLLOVER_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'P'); //zoe
            SYF_FADA_CAL_back_TabBC();
            SYF_FADA_refresh_DO_initial();
            document.MAINFORM.FA_ANCHOR_AMT.value = document.MAINFORM.FA_ANCHOR_AMT_OLD.value;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_MPO_busi_func", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_busi_func_POST = function() {
    try {
        //1=extend; 2= end;3=change; zoe20220624
        var func = document.MAINFORM.FA_BUSI_FUNC.value;
        if (func == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'M');
            SYT_DisableDivClass('C_div');
            SYT_DisableDivClass('B_div');
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'B');
        } else if (func == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
            SYT_DisableDivClass('C_div');
            SYT_DisableDivClass('B_div');
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'M');
        } else if (func == '3') {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
            SYT_EnableDivClass('C_div');
            SYT_EnableDivClass('Common');
            SYF_FADA_Cal_FA_IRT_SPREAD();
            SYF_FADA_ANCHOR_ACTOR(); //zoe
            SYF_FADA_MPO_BY_FA_AUTO_FIN(); //zoe           
            SYF_FADA_Chk_INV_FIN_MODE();
            SYF_FADA_Chk_DD_CHG();
			SYF_FADA_Cal_MAX_ROLLOVER_DAYS();
            SYF_FADA_FA_REQ_BUYER_APR_FLG();
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'P');
                document.MAINFORM.REBATE_BT.style.visibility = 'hidden';
                document.MAINFORM.FA_REBATE_RATE.value = 0;
                document.MAINFORM.FA_REBATE_ACCOUNT.value = '';
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_RATE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.FA_REBATE_ACCOUNT, 'O');
                document.MAINFORM.REBATE_BT.style.visibility = 'visible';
            }
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'B');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_AGM_DUE_DT, 'P');
            SYT_DisableDivClass('C_div');
            SYT_DisableDivClass('B_div');
            SYT_ChangeFldClass(document.MAINFORM.FA_ANCHOR_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_END_REASON, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_MPO_busi_func_POST", e);
    }
}

csFuncLevelProto.SYF_FADA_RT_DISABLE = function() {
    try {
        EEHtml.getElementById('RT1').style.display = "none";
        EEHtml.getElementById('RT2').style.display = "none";
        document.MAINFORM.FA_EF_COMM_RT.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_RT_DISABLE", e);
    }
}

csFuncLevelProto.SYF_FADA_UpLoadFile_DFAgreement = function() {
    try {
        SYS_UpLoadInvFile('UploadSelReqAmend', 'SYF_FADA_setID', null, "FI", "", "DFAgreement");
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_UpLoadFile_DFAgreement", e);
    }
}

csFuncLevelProto.SYF_FADA_freeControlDOButton = function() {
    try {
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") return;
        var func = document.MAINFORM.FA_BUSI_FUNC.value;
        if (SYS_getDoByXpath("SCF_CounterParty")) {
            if (func == '3') {
                SYS_enableButton('SCF_CounterParty', 'addbutton');
                SYS_enableButton('SCF_CounterParty', 'editbutton');
            } else {
                SYS_disableButton('SCF_CounterParty', 'addbutton');
                SYS_disableButton('SCF_CounterParty', 'editbutton');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_freeControlDOButton", e);
    }
}

csFuncLevelProto.SYF_FADA_refresh_DO_initial = function() {
    try {
        var targetDo = SYS_getDoByXpath('SCF_CounterParty');
        var records = SYS_getRecords(targetDo);
        var len = records.length;
        var datarecords = [];
        for (var i = 0; i < len; i++) {
            var record = records[i];
            record = SYS_setValToRec(record, "recordType", 'C');
            datarecords[i] = record;
        }
        SYS_reLoadGrid(targetDo, datarecords);
        SYS_GetDataForDO_S("AGM_AMD", "N", false, '', "SCF_CounterParty");
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_refresh_DO_initial", e);
    }
}

csFuncLevelProto.SYF_FADA_setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.TEMP_FA_REF_NO.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_setDOref", e);
    }
}

csFuncLevelProto.SYF_FADA_setID = function() {
    try {
        //Add by Effie 20190524
        var node = SYS_getDoByXpath("DFAgreement");
        var arrayvalue = SYS_getRecords(node);
        var mData = [];
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var record = arrayvalue[i];
            record["FA_SEL_ID"] = document.MAINFORM.FA_SEL_ID.value;
            record["FA_SEL_NM"] = document.MAINFORM.FA_SEL_NM.value;
            document.MAINFORM.TEMP_FA_REF_NO.value = '';
            if (record["FA_PCA_REF"] == "") {
                SYM_FADA_GetRefNo_DFAgreement();
                record["FA_PCA_REF"] = document.MAINFORM.TEMP_FA_REF_NO.value;
            }
            var id = record["FA_BUYER_ID"];
            var nm = record["FA_BUYER_NM"];
            document.MAINFORM.TEMP_FA_BUYER_NM.value = nm;
            if (id === "" && nm != "") {
                document.MAINFORM.TEMP_FA_BUYER_ID.value = "";
                SYS_GetTableDataByRule_S('GET_BUYER_ID_FROM_NAME', '1', true);
                if (document.MAINFORM.TEMP_FA_BUYER_ID.value != '') {
                    record["TEMP_FLG1"] = "CUST";
                    record["FA_BUYER_ID"] = document.MAINFORM.TEMP_FA_BUYER_ID.value;
                } else {
                    record["FA_CUST_FLAG"] = "2";
                    record["TEMP_FLG1"] = "NOCU";
                    if (record["FA_BUYER_ID"] == "") {
                        SYM_FADA_GetRefNo_BuyIDSub();
                        record["FA_BUYER_ID"] = document.MAINFORM.TEMP_FA_BUYER_ID.value;
                    }
                }
            }
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*SYF_FADA_setID", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_new_due_dt();
        EEHtml.fireEvent(document.MAINFORM.FA_VALID_DAYS, 'onChange');
        SYF_FADA_Cal_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_AGM_DUE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_FIN_onchange = function(event) {
    try {
        SYF_FADA_AUTO_FINANCE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_AUTO_FIN_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_FUNC_onchange = function(event) {
    try {
        //    SYF_FADA_MPO_FA_AGM_DUE_DT();
        SYF_FADA_Cal_NEW_DUE_DT();
        SYF_FADA_freeControlDOButton();
        SYF_FADA_MPO_busi_func();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_BUSI_FUNC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_buy_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_BUYER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_DD_CHG_TP_onchange = function(event) {
    try {
        SYF_FADA_DD_CHG_TP();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_DD_CHG_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_COMM_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_EF_COMM_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_LOAN_IRATE_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Chk_MAX_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_MAX_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_ROLLOVER_FLAG_onchange = function(event) {
    try {
        SYF_FADA_Cal_MAX_ROLLOVER_DAYS();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_ROLLOVER_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_sel_id_check();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_FA_SEL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_POOL_INV_MAX_PERIOD_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.POOL_INV_MIN_PERIOD.value) > 0 && SYS_BeFloat(document.MAINFORM.POOL_INV_MIN_PERIOD.value) > SYS_BeFloat(document.MAINFORM.POOL_INV_MAX_PERIOD.value)) {
            SYS_CheckError(document.MAINFORM.POOL_INV_MAX_PERIOD, "Invoice filter Max Period must greater than Min Period!");
            document.MAINFORM.POOL_INV_MAX_PERIOD.value = '0';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_POOL_INV_MAX_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_POOL_INV_MIN_PERIOD_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.POOL_INV_MAX_PERIOD.value) > 0 && SYS_BeFloat(document.MAINFORM.POOL_INV_MIN_PERIOD.value) > SYS_BeFloat(document.MAINFORM.POOL_INV_MAX_PERIOD.value)) {
            SYS_CheckError(document.MAINFORM.POOL_INV_MIN_PERIOD, "Invoice filter Min Period must be less than Max Period!");
            document.MAINFORM.POOL_INV_MIN_PERIOD.value = '0';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_POOL_INV_MIN_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_PO_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FADA_Chk_PO_MAX_LOAN_PER();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_PO_MAX_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_REBATE_BT_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('GET_REBATE_ACC_ME', '3');
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_REBATE_BT_onclick", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AmdAGM.js*FLD_FADA_view_1_onclick", e);
    }
}