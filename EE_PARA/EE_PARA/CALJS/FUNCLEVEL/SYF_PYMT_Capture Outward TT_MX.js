var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.UETR_GPI_121.value = SYF_PYMT_get_guid();
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYS_GetCUBK_S('Debtor', 'X103_ORDCU_ID_50A');
        } else {
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            var vagt = document.querySelector('#MX_DBTR');
            vagt.value = {};
        }
        SYF_PYMT_CPYT_PAY_COV_MSG();
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_PYMT_CPYT_PAY_COV_MSG = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == 'PACS009COV') {
            SYF_PYMT_enable009cov();
        } else {
            SYF_PYMT_disable009cov();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*SYF_PYMT_CPYT_PAY_COV_MSG", e);
    }
}

csFuncLevelProto.SYF_PYMT_VDO_Set_INSTDAGT = function() {
    try {
        var bic = document.MAINFORM.X103_ADV_BKSW_B2.value;
        var v = new Vdo('MX_INSTDAGT');
        v.set('FinInstnId/BICFI', bic);
        v.save();
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*SYF_PYMT_VDO_Set_INSTDAGT", e);
    }
}

csFuncLevelProto.SYF_PYMT_VDO_Set_INSTDAGT009 = function() {
    try {
        var bic = document.MAINFORM.X202_ADV_BKSW_B2.value;
        var v = new Vdo('MX_INSTDAGT_PACS009');
        v.set('FinInstnId/BICFI', bic);
        v.save();
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*SYF_PYMT_VDO_Set_INSTDAGT009", e);
    }
}

csFuncLevelProto.SYF_PYMT_disable009cov = function() {
    try {
        SYT_DisableDivClass("C_div");
		SYT_ClearFields("SETTLE_METHOD_PACS009,X202_ADV_BKID_B2,X202_ADV_BKNM_B2,X202_ADV_BKSW_B2,X202_ORDBK_ID_52A,X202_ORDBK_NM_52A,X202_SENDCORRID53A,X202_SENDCORRNM53A,X202_RECCORRID_54A,X202_RECCORRNM_54A,X202_MEDI_BKID_56A,X202_MEDI_BKNM_56A,X202_ACC_BKID_57A,X202_ACC_BKNM_57A,X202_BENE_BKID_58A,X202_BENE_BKNM_58A");
		document.querySelector('#MX_INSTDAGT_PACS009').value = {};
        document.querySelector('#MX_DBTR_PACS009').value = {};
		document.querySelector('#MX_INSTGRMBRSMNTAGT_PACS009').value = {};
		document.querySelector('#MX_INSTDRMBRSMNTAGT_PACS009').value = {};
		document.querySelector('#MX_INTRMYAGT1_PACS009').value = {};
		document.querySelector('#MX_CDTRAGT_PACS009').value = {};
		document.querySelector('#MX_CDTR_PACS009').value = {};
		EEHtml.getElementById('pacs009cov_SEPA').style.display = 'none';
		EEHtml.getElementById('C').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*SYF_PYMT_disable009cov", e);
    }
}

csFuncLevelProto.SYF_PYMT_enable009cov = function() {
    try {
		EEHtml.getElementById('pacs009cov_SEPA').style.display = '';
		EEHtml.getElementById('C').style.display = '';
        SYS_changeClassName('SETTLE_METHOD_PACS009', 'M');

        SYS_changeClassName('X202_ADV_BKID_B2', 'O');
        SYS_changeClassName('X202_B2_BTN', 'O');
        SYS_changeClassName('X202_ADV_BKNM_B2', 'O');
        SYS_changeClassName('X202_ADV_BKSW_B2', 'M');

        SYS_changeClassName('X202_ORDBK_ID_52A', 'O');
        SYS_changeClassName('X202_52_BTN', 'O');
        SYS_changeClassName('X202_ORDBK_NM_52A', 'M');

        SYS_changeClassName('X202_SENDCORRID53A', 'O');
        SYS_changeClassName('X202_53_BTN', 'O');
        SYS_changeClassName('X202_SENDCORRNM53A', 'O');

        SYS_changeClassName('X202_RECCORRID_54A', 'O');
        SYS_changeClassName('X202_54_BTN', 'O');
        SYS_changeClassName('X202_RECCORRNM_54A', 'O');

        SYS_changeClassName('X202_MEDI_BKID_56A', 'O');
        SYS_changeClassName('X202_56_BTN', 'O');
        SYS_changeClassName('X202_MEDI_BKNM_56A', 'O');

        SYS_changeClassName('X202_ACC_BKID_57A', 'O');
        SYS_changeClassName('X202_57_BTN', 'O');
        SYS_changeClassName('X202_ACC_BKNM_57A', 'O');

        SYS_changeClassName('X202_BENE_BKID_58A', 'O');
        SYS_changeClassName('X202_58_BTN', 'O');
        SYS_changeClassName('X202_BENE_BKNM_58A', 'M');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*SYF_PYMT_enable009cov", e);
    }
}

csFuncLevelProto.SYF_PYMT_get_guid = function() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*SYF_PYMT_get_guid", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_COV_MSG_onchange = function(event) {
    try {
        SYF_PYMT_CPYT_PAY_COV_MSG();
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_CPYT_PAY_COV_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ACC_BKID_57A.value != "") {
            SYS_GetCUBK_S('CreditorAgent', 'X103_ACC_BKID_57A');
        } else {
            document.MAINFORM.X103_ACC_BKNM_57A.value = "";
            var vagt = document.querySelector('#MX_CDTRAGT');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('InstructedAgent', 'X103_ADV_BKID_B2');
            SYF_PYMT_VDO_Set_INSTDAGT();
        } else {
            document.MAINFORM.X103_ADV_BKNM_B2.value = "";
            document.MAINFORM.X103_ADV_BKSW_B2.value = "";
            var vagt = document.querySelector('#MX_INSTDAGT');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_ADV_BKID_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ADV_BKSW_B2.value != "") {
            SYF_PYMT_VDO_Set_INSTDAGT();
        } else {
            var vagt = document.querySelector('#MX_INSTDAGT');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_ADV_BKSW_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            SYS_GetCUBK_S('Creditor', 'X103_BENECU_ID_59A');
        } else {
            document.MAINFORM.X103_BENECU_NM_59A.value = "";
            var vagt = document.querySelector('#MX_CDTR');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_BENECU_ID_59A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value != "") {
            SYS_GetCUBK_S('IntermediaryAgent1', 'X103_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X103_MEDI_BKNM_56A.value = "";
            var vagt = document.querySelector('#MX_INTRMYAGT1');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_MEDI_BKID_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYS_GetCUBK_S('Debtor', 'X103_ORDCU_ID_50A');
        } else {
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            var vagt = document.querySelector('#MX_DBTR');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_ORDCU_ID_50A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ORD_BKID_52A.value != "") {
            SYS_GetCUBK_S('InitiatingParty', 'X103_ORD_BKID_52A');
        } else {
            document.MAINFORM.X103_ORD_BKNM_52A.value = "";
            var vagt = document.querySelector('#MX_INITGPTY');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_ORD_BKID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_RECCORRID_54A.value != "") {
            SYS_GetCUBK_S('InstructedReimbursementAgent', 'X103_RECCORRID_54A');
        } else {
            document.MAINFORM.X103_RECCORRNM_54A.value = "";
            var vagt = document.querySelector('#MX_INSTDRMBRSMNTAGT');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_RECCORRID_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_SENDCORRID53A.value != "") {
            SYS_GetCUBK_S('InstructingReimbursementAgent', 'X103_SENDCORRID53A');
        } else {
            document.MAINFORM.X103_SENDCORRNM53A.value = "";
            var vagt = document.querySelector('#MX_INSTGRMBRSMNTAGT');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_SENDCORRID53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_SEND_BKID_51A.value != "") {
            SYS_GetCUBK_S('DebtorAgent', 'X103_SEND_BKID_51A');
        } else {
            document.MAINFORM.X103_SEND_BKNM_51A.value = "";
            var vagt = document.querySelector('#MX_DBTRAGT');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_SEND_BKID_51A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != "") {
            SYS_GetCUBK_S('CreditorAgent009', 'X202_ACC_BKID_57A');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = "";
            var vagt = document.querySelector('#MX_CDTRAGT_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('InstructedAgent009', 'X202_ADV_BKID_B2');
            SYF_PYMT_VDO_Set_INSTDAGT009();
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = "";
            document.MAINFORM.X202_ADV_BKSW_B2.value = "";
            var vagt = document.querySelector('#MX_INSTDAGT_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_ADV_BKID_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != "") {
            SYF_PYMT_VDO_Set_INSTDAGT009();
        } else {
            var vagt = document.querySelector('#MX_INSTDAGT_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_ADV_BKSW_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != "") {
            SYS_GetCUBK_S('Creditor009', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = "";
            var vagt = document.querySelector('#MX_CDTR_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_BENE_BKID_58A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != "") {
            SYS_GetCUBK_S('IntermediaryAgent1009', 'X202_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = "";
            var vagt = document.querySelector('#MX_INTRMYAGT1_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_MEDI_BKID_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != "") {
            SYS_GetCUBK_S('Debtor009', 'X202_ORDBK_ID_52A');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = "";
            var vagt = document.querySelector('#MX_DBTR_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_ORDBK_ID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != "") {
            SYS_GetCUBK_S('InstructedReimbursementAgent009', 'X202_RECCORRID_54A');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = "";
            var vagt = document.querySelector('#MX_INSTDRMBRSMNTAGT_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_RECCORRID_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != "") {
            SYS_GetCUBK_S('InstructingReimbursementAgent009', 'X202_SENDCORRID53A');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = "";
            var vagt = document.querySelector('#MX_INSTGRMBRSMNTAGT_PACS009');
            vagt.value = {};
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_SENDCORRID53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_50_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Debtor', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_50_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('DebtorAgent', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_51_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_52A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InitiatingParty', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_52A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_53A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InstructingReimbursementAgent', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_53A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_54A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InstructedReimbursementAgent', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_54A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_56A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('IntermediaryAgent1', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_56A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_57A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('CreditorAgent', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_57A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_59_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Creditor', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_59_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InstructedAgent', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X103_B2_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Debtor009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_52_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_53_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InstructingReimbursementAgent009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_53_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_54_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InstructedReimbursementAgent009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_54_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('IntermediaryAgent1009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_56_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('CreditorAgent009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_57_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('Creditor009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_58_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('InstructedAgent009', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_Capture Outward TT_MX.js*FLD_PYMT_X202_B2_BTN_onclick", e);
    }
}