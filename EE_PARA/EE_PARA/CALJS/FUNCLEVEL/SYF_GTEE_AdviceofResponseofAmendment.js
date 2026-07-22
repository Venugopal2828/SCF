var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.X798_ADV_BK_REF_21P.value = document.MAINFORM.AMD_REF.value;
        document.MAINFORM.X798_ADD_BK_REF.value = document.MAINFORM.C_MAIN_REF.value;

        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            EEHtml.getElementById('C').style.display = '';
            SYT_EnableDivClass('C_div');

        } else {
            EEHtml.getElementById('C').style.display = 'none';

            SYT_DisableDivClass('C_div');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_DisableDivClass('G_div');
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CORR_MED.value == "SWIFT") {
            //swift
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.ADV_BK_CORR_MED.value == "Mail") {
            //Mail
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
        } else {
            //none
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
        SYM_GTEE_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == "SWIFT") {
            //swift
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == "Mail") {
            //mail
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
        } else {
            //none
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_NM.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_THU_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }

        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value == '' && document.MAINFORM.ADV_THU_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APLB_RULE_onchange = function(event) {
    try {
        SYM_GTEE_APLB_RULE();
        document.MAINFORM.TEMP_APLB_CODE.value = '/' + document.MAINFORM.APLB_RULE.value + '/';
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else if (document.MAINFORM.APPL_ID.value == document.MAINFORM.BENE_ID.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.APPL_ID.value = '';
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else {
            SYM_GTEE_APPL_ID_BTN();
        }
        //JACK 0918 GTEE
        //SYM_GTEE_Set_Risk_Party_Info();
        //document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else if (document.MAINFORM.APPL_ID.value == document.MAINFORM.BENE_ID.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.BENE_ID.value = '';
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else {
            SYM_GTEE_BENE_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_CONF_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + 'XXX';
        }
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_INSTR_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.CONF_INSTR.value == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'P');
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            document.MAINFORM.CONF_BK_ID.value = '';
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
            if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_AMD_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO_AMD_CODE.value + '/';
            if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_GTEE_Cal_MATURITY_DT();
        if (!SYS_Day1MustbeLaterThanDay2(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.REG_DT.name)) {
            document.MAINFORM.EXPIRY_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.GTEE_AMT.value < 0) {
            document.MAINFORM.GTEE_AMT.value = 0;
        }


        SYF_GTEE_Cal_GTEE_BAL();
        SYM_GTEE_BASE_CLY_BAL(); //add by amy wei in 2011.05.27
        SYM_GTEE_BASE_LCY(); //add by amy wei in 2011.05.27
        /*
		JCK 0918 GTEE
		Cal_Transmit_Base_Amount();
		Cal_CASH_COV_AMT_TXCCY_1();
		Cal_CASH_COV_BAL_TXCCY();
		JACK 0918 GTEE---222
		Cal_CASH_COV_AMT_TXCCY();
		document.MAINFORM.R_RISK_AMT.fireEvent('onchange');
		document.MAINFORM.CASH_COV_AMT_TXCCY.fireEvent('onchange');
		*/
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_CCY_onchange = function(event) {
    try {
        SYM_GTEE_BASE_CLY_BAL(); //add by amy wei in 2011.05.27
        SYM_GTEE_BASE_LCY(); //add by amy wei in 2011.05.27
        //JACK 0918 GTEE
        /*
Cal_CASH_COV_TXCCY();
Cal_Transmit_Base_Amount();
document.MAINFORM.R_RISK_AMT.fireEvent('onchange');
document.MAINFORM.R_RISK_CCY.fireEvent('onchange');
document.MAINFORM.R_RISK_LMT_CCY.fireEvent('onchange');
document.MAINFORM.CASH_COV_AMT_TXCCY.fireEvent('onchange');
document.MAINFORM.CASH_COV_TXCCY.fireEvent('onchange');
document.MAINFORM.CASH_COV_CCY.fireEvent('onchange');
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
JACK 0919 GTEE
SYM_GTEE_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ISSUE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_NEW_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_PURP_OF_MESS_onchange = function(event) {
    try {
        SYF_GTEE_Cal_Confirm_FLG();
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            document.MAINFORM.TRANS_INDICATOR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'P');
            document.MAINFORM.DELIV_OF_ORIG_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'P');
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
            document.MAINFORM.DELIVERY_TO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        } else if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU') {
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {
            document.MAINFORM.DOCS_PRESENTED_BY.value = document.MAINFORM.APPL_CUST_BK.value;
            document.MAINFORM.INDEMN_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.INDEMN_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.INDEMN_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.INDEMN_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.INDEMN_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            document.MAINFORM.INDEMN_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
            document.MAINFORM.INDEMN_CORR_MED.value = document.MAINFORM.APPL_CORR_MED1.value;
            document.MAINFORM.INDEMN_FAX.value = document.MAINFORM.APPL_FAX_NO_1.value;
            document.MAINFORM.INDEMN_EMAIL.value = document.MAINFORM.APPL_EMAIL_1.value;
            document.MAINFORM.INDEMN_SW_TAG.value = document.MAINFORM.APPL_SW_TAG.value;
            document.MAINFORM.INDEMN_SW_ADD.value = document.MAINFORM.APPL_SW_ADD.value;
            document.MAINFORM.INDEMN_REF.value = document.MAINFORM.APPL_REF.value;
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_REF, 'P');
        } else {
            SYM_GTEE_Cal_Clear_Indemn();
            document.MAINFORM.DOCS_PRESENTED_BY.value = "";
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_REF_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_AdviceofResponseofAmendment.js", e);
    }
}