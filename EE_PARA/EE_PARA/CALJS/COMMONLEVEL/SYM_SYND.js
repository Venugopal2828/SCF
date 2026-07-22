function SYM_SYND_Cal_Chg_Screen() {
    try {

        Chg.Screen.setLocalCust(document.MAINFORM.LEAD_BK_ID.value, document.MAINFORM.LEAD_BK_NM.value);
        Chg.Screen.setForeignCust(document.MAINFORM.SYND_AC_WT_BK_NM.value, document.MAINFORM.PCPT_CCY.value);
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_Chg_Calculate() {
    try {

        var arr = ['Participation'];
        var amt = EEHtml.getElementById("PCPT_AMT").value;
        var ccy = EEHtml.getElementById("PCPT_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_Chg_Screen_Account() {
    try {

        Chg.Screen.setForeignCust(document.MAINFORM.SYND_AC_WT_BK_NM.value, document.MAINFORM.PCPT_CCY.value);
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegParticipation') {
            SYM_SYND_Cal_Chg_Calculate();
            SYM_SYND_Cal_Chg_Calculate_Other();
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'AmendPart') {
            SYM_SYND_Cal_Chg_Calculate_Amd();
            SYM_SYND_Cal_Chg_Calculate_Other();
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_Chg_Screen_Leader() {
    try {

        Chg.Screen.mapLocalCust('LEAD_BK_ID', 'LEAD_BK_NM');

        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegParticipation') {
            SYM_SYND_Cal_Chg_Calculate();
            SYM_SYND_Cal_Chg_Calculate_Other();
            SYM_SYND_Notes_part();
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'AmendPart') {
            SYM_SYND_Cal_Chg_Calculate_Amd();
            SYM_SYND_Cal_Chg_Calculate_Other();
            SYM_SYND_Notes_part();
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Get_LEAD_BK_ID() {
    try {

        if (document.MAINFORM.LEAD_BK_ID.value != '') {
            SYS_GetCUBK('LEAD_BK_ID', 'LEAD_BK_ID', 'SYM_SYND_Cal_Chg_Screen_Leader');
        } else {
            document.MAINFORM.LEAD_BK_NM.value = '';
            document.MAINFORM.LEAD_BK_ADD1.value = '';
            document.MAINFORM.LEAD_BK_ADD2.value = '';
            document.MAINFORM.LEAD_BK_ADD3.value = '';
            document.MAINFORM.LEAD_BK_SW_ADD.value = '';
            document.MAINFORM.LEAD_BK_SW_TAG.value = '';
            document.MAINFORM.LEAD_CNTY_CD.value = '';
            document.MAINFORM.LEAD_CORR_MED.value = '';
            document.MAINFORM.LEAD_EML_ADD.value = '';
            document.MAINFORM.LEAD_FAX_NO.value = '';
            document.MAINFORM.LEAD_LANG.value = '';
            document.MAINFORM.LEAD_LIAB_ACNO.value = '';
            document.MAINFORM.LEAD_MAIL_ADD.value = '';
            document.MAINFORM.LEAD_TLX_NO.value = '';
            document.MAINFORM.LEAD_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.LEAD_NOTES.name);
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Get_SYND_AC_WT_BK_ID() {
    try {

        if (document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
            SYS_GetCUBK('SYND_AC_WT_BK_ID', document.MAINFORM.SYND_AC_WT_BK_ID.name, 'SYM_SYND_Notes_awb');
            SYS_GetCUBK('SYND_AC_WT_BK_ID', document.MAINFORM.SYND_AC_WT_BK_ID.name);
        } else {
            document.MAINFORM.SYND_AC_WT_BK_NM.value = '';
            document.MAINFORM.SYND_AC_WT_BK_SWAD.value = '';
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = '';
            document.MAINFORM.SYND_AC_NO.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD1.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD2.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD3.value = '';
            document.MAINFORM.SYND_AC_WT_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_LEAD_BK_SW_TAG() {
    try {

        if (document.MAINFORM.LEAD_BK_ID.value != '' && document.MAINFORM.LEAD_BK_SW_ADD.value == '') {
            document.MAINFORM.LEAD_BK_SW_TAG.value = 'D';
        } else if (document.MAINFORM.LEAD_BK_ID.value != '' && document.MAINFORM.LEAD_BK_SW_ADD.value != '') {
            document.MAINFORM.LEAD_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_SYND_ACWT_BK_SWTAG() {
    try {

        if (document.MAINFORM.SYND_AC_WT_BK_SWAD.value == '' && document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = 'D';
        } else if (document.MAINFORM.SYND_AC_WT_BK_SWAD.value != '' && document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_INC_DEC_MAST_LC_AMT() {
    try {

        if (SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'P');
            document.MAINFORM.INC_MAST_LC_AMT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'O');
        }
        if (SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_MAST_LC_AMT, 'P');
            document.MAINFORM.DEC_MAST_LC_AMT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_MAST_LC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_MAST_RISK_AMT() {
    try {

        var POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value) / 100;
        var NEG_TOL = SYS_BeFloat(document.MAINFORM.NEG_TOL.value) / 100;
        var MAST_RISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        if (POS_TOL > 0) {
            MAST_RISK_AMT = (SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value)) * (1 + POS_TOL);
            if (SYS_BeFloat(MAST_RISK_AMT) < 0) {
                alert("Decrease amount should not exceed the master amount!")
                document.MAINFORM.DEC_MAST_LC_AMT.value = 0;
                SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'O');
            } else {
                document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, MAST_RISK_AMT);
            }
        }
        if (POS_TOL == 0) {
            MAST_RISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value);
            if (SYS_BeFloat(MAST_RISK_AMT) < 0) {
                alert("Decrease amount should not exceed the master amount!")
                document.MAINFORM.DEC_MAST_LC_AMT.value = 0;
                SYT_ChangeFldClass(document.MAINFORM.INC_MAST_LC_AMT, 'O');
            } else {
                document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, MAST_RISK_AMT);
            }
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_INC_DEC_PCPT_AMT() {
    try {

        if (SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_PCPT_AMT, 'P');
            document.MAINFORM.INC_PCPT_AMT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_PCPT_AMT, 'O');
        }

        if (SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_PCPT_AMT, 'P');
            document.MAINFORM.DEC_PCPT_AMT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_PCPT_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_LEAD_CORR_MED() {
    try {

        if (document.MAINFORM.LEAD_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_TLX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_TLX_NO, 'O');
        }
        if (document.MAINFORM.LEAD_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_FAX_NO, 'O');
        }
        if (document.MAINFORM.LEAD_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_EML_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_EML_ADD, 'O');
        }
        if (document.MAINFORM.LEAD_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD, 'O');
        }
        if (document.MAINFORM.LEAD_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_PCPT_CHG_CCY() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PCPT_CHG_AMT.value) != 0) {
            SYT_ChangeFldClass(document.MAINFORM.PCPT_CHG_CCY, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PCPT_CHG_CCY, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_Chg_Calculate_Amd() {
    try {

        var arr = ['AmdComm'];
        var amt = EEHtml.getElementById("PCPT_AMT").value;
        var ccy = EEHtml.getElementById("PCPT_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_Chg_Calculate_Other() {
    try {        
        var arr = ['OTHER_CHG'];
        var amt = EEHtml.getElementById("PCPT_AMT").value;
        var ccy = EEHtml.getElementById("PCPT_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}


function SYM_SYND_ChangeMainCCY() {
    try {

        SYND_CCYobj = SYS_getScreenObjByxpath('ParticipantHeader', 'SYND_CCY');
        SYND_CCYobj.value = document.MAINFORM.PCPT_CCY.value;
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Notes_synd() {
    try {

        SYT_Show_Notes(document.MAINFORM.SYND_PART_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Notes_part() {
    try {

        SYT_Show_Notes(document.MAINFORM.LEAD_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Notes_awb() {
    try {

        SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_SYND_PART_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('SYND_PART_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_SYND_AC_WT_BK_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('SYND_AC_WT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_SYND_AC_WT_BK_SWAD() {
    try {

        if (document.MAINFORM.SYND_AC_WT_BK_SWAD.value.length == 11) {
            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.SYND_AC_WT_BK_SWAD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "SYND_AC_WT_BK_ID";
            SYS_GetTableDataByRule_S('SYM_SYND_SYM_SYND_Cal_SYND_AC_WT_BK_SWAD_1', '1');
            SYS_GetCUBK('SYND_AC_WT_BK_ID', document.MAINFORM.SYND_AC_WT_BK_ID.name, 'SYM_SYND_Notes_awb');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_LEAD_BK_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('LEAD_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_LEAD_BK_SW_ADD() {
    try {

        if (document.MAINFORM.LEAD_BK_SW_ADD.value.length == 11) {
            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.LEAD_BK_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "LEAD_BK_ID";
            SYS_GetTableDataByRule_S('SYM_SYND_SYM_SYND_Cal_LEAD_BK_SW_ADD_2', '1');
            SYS_GetCUBK('LEAD_BK_ID', document.MAINFORM.LEAD_BK_ID.name, 'SYM_SYND_Notes_part');
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_CHK_NEG_VAL(value) {
    try {

        if (SYS_BeFloat(value) < 0) {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_SYND_AC_WT_BK_ADD1() {
    try {

        SYS_InqCUBK_byCondition('SYND_AC_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_LEAD_BK_ADD() {
    try {

        SYS_InqCUBK('LEAD_BK_ADD', 'LEAD_BK_ID');
        SYS_InqCUBK_byCondition('LEAD_BK_ADD1', '1');
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_CHK_EMAIL(chkemail) {
    try {

        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_chk_faxNo(faxNo) {
    try {

        var s = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?_";
        for (var i = 0; i < faxNo.length; i++) {
            if (s.indexOf(faxNo.charAt(i)) != -1) {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Set_VAL_PaymentTab() {
    try {

        changeCPYT_CR_TTL_AMT_TTLCCY();
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_changeCPYT_CR_TTL_AMT_TTLCCY() {
    try {

        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var CPYT_CR_TTL_AMT_TTLCCY; // Utility Auto Fix Comments
        var Obj_disflg; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        CPYT_CR_TTL_AMT_TTLCCY = SYS_getParentDo("PaymentCreditHeader").getFieldObj('CPYT_CR_TTL_AMT_TTLCCY').value;
        ccy = SYS_getParentDo("PaymentCreditHeader").getFieldObj('CPYT_CR_TRX_CCY').value;
        targetDo = SYS_GetObjByDoName("PaymentCredit");
        if (targetDo == null && targetDo.length == 0) {
            _do = SYS_GetObjByDoName("PaymentInstrDeal"); // Utility Auto Fix Comments
            targetDo = _do[0].getDoByName("PaymentCredit"); // Utility Auto Fix Comments
        }
        if (targetDo == null && targetDo.length == 0) {
            return;
        }
        len = targetDo.length;
        for (i = 0; i < len; i++) {
            vDo = targetDo[i];
            Obj_disflg = document.MAINFORM.DISCNT_FLG;
            if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity" && Obj_disflg != '' && Obj_disflg != 'null' && Obj_disflg != null && Obj_disflg != undefined && Obj_disflg.value == 'YES') {
                CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                rate = SYS_BeFloat(vDo.getDoValueByName('CPYT_CR_BUY_RATE'));
                totalamount = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
                trxamount = CFNC_N_AMT_LCCCY * rate;
                percent = trxamount / (totalamount * rate);
                realamount = CFNC_N_AMT_LCCCY;
            } else {
                percent = SYS_BeFloat(vDo.getDoValueByName('CPYT_CR_PER'));
                rate = SYS_BeFloat(vDo.getDoValueByName('CPYT_CR_BUY_RATE'));
                totalamount = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
                trxamount = totalamount * percent * rate / 100;
                realamount = totalamount * percent / 100;
            }
            //alert(trxamount);
            vDo.putDoValueByName('CPYT_CR_AMT_CRCCY', SYT_AmtFormat(ccy, trxamount));
            vDo.putDoValueByName('CPYT_CR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
        }
        SYS_RefreshDoGrid(targetDo);
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}

function SYM_SYND_Cal_COMM_DT() {
    try {

        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_START_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_SYND.js", e);
    }
}