var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        //document.MAINFORM.PROD.value = document.MAINFORM.C_MAIN_REF.value.substring(0,2);
        SYF_PYMT_Set_Bank();
        document.MAINFORM.CORR_MSG.value = "";
        SYF_PYMT_Chg_CORR_MSG();
        SYM_PYMT_REF_20();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_SEND_TO_FLAG = function() {
    try {

        if (document.MAINFORM.SEND_TO_FLAG.value == "Return to Process Queue") {
            document.MAINFORM.CURRNT_STATUS.value = "ITT_INVESTIGATE";
            document.MAINFORM.NXT_STATUS.value = "ITT_PROCESS";
        }
        SYF_PYMT_Chk_SEND_TO_FLAG_MPO();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Corr_Details = function() {
    try {

        document.MAINFORM.SEND_CORR_BK_ID.value = '';
        document.MAINFORM.SEND_CORR_BK_NM.value = '';
        document.MAINFORM.SEND_CORR_BK_ADD1.value = '';
        document.MAINFORM.SEND_CORR_BK_ADD2.value = '';
        document.MAINFORM.SEND_CORR_BK_ADD3.value = '';
        document.MAINFORM.SEND_CORR_SW_TAG.value = '';
        document.MAINFORM.SEND_CORR_SW_ADD.value = '';

        document.MAINFORM.CORR_MSG.value = "";
        document.MAINFORM.CORRES_TYPE.value = "";
        document.MAINFORM.FAX_NO.value = "";
        document.MAINFORM.EMAIL.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_BK_CUS_TYPE = function() {
    try {

        document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
        document.MAINFORM.SEND_CORR_BK_NM.value = document.MAINFORM.X103_BENECU_NM_59A.value;
        document.MAINFORM.SEND_CORR_BK_ADD1.value = document.MAINFORM.X103BENECUADD1_59A.value;
        document.MAINFORM.SEND_CORR_BK_ADD2.value = document.MAINFORM.X103BENECUADD2_59A.value;
        document.MAINFORM.SEND_CORR_BK_ADD3.value = document.MAINFORM.X103BENECUADD3_59A.value;
        document.MAINFORM.SEND_CORR_SW_TAG.value = document.MAINFORM.X103_BENECU_SW_59A.value;
        document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.X103_TAG_59A.value;
        document.MAINFORM.X95_96_QUER_ANS.value = "";
        document.MAINFORM.XN95_96_NARRATIVE.value = "";
        document.MAINFORM.MT_DT_ISN.value = "";
        SYF_PYMT_Chg_BK_CUS_TYPE_MPO();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CORRES_TYPE = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        if (document.MAINFORM.CORRES_TYPE.value == "Fax") {
            document.MAINFORM.FAX_NO.value = "";
            Sql_Cond1 = "C_MAIN_REF=" + "'" + document.MAINFORM.SEND_CORR_BK_ID.value + "'" + "AND " + "PROD=" + "'" + document.MAINFORM.PROD.value + "'" + "AND " + "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
            Field_List = "FAX_NO1;FAX_NO2;FAX_NO3;FAX_NO4;FAX_NO5";
            Mapping_List = "FAX_NO1;FAX_NO2;FAX_NO3;FAX_NO4;FAX_NO5";
            /* SYS_Get22TableData_S('PROD_SPEC_INFO',Sql_Cond1,Field_List,Mapping_List,true);	*/
            document.MAINFORM.EMAIL.value = "";
            document.MAINFORM.FAX_NO.value = "";
            if (document.MAINFORM.FAX_NO1.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO1.value;
            } else if (document.MAINFORM.FAX_NO2.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO2.value;
            } else if (document.MAINFORM.FAX_NO3.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO3.value;
            } else if (document.MAINFORM.FAX_NO4.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO4.value;
            } else if (document.MAINFORM.FAX_NO5.value != "") {
                document.MAINFORM.FAX_NO.value = document.MAINFORM.FAX_NO5.value;
            }
            if (document.MAINFORM.FAX_NO.value == "") {
                if (document.MAINFORM.SEND_CORR_BK_ID.value != "") {
                    alert("Fax Number not found for this customer");
                }
            }
        } else if (document.MAINFORM.CORRES_TYPE.value == "Email") {
            Sql_Cond2 = "C_MAIN_REF=" + "'" + document.MAINFORM.SEND_CORR_BK_ID.value + "'" + "AND " + "PROD=" + "'" + document.MAINFORM.PROD.value + "'" + "AND " + "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
            Field_List2 = "EMAIL1;EMAIL2;EMAIL3;EMAIL4;EMAIL5";
            Mapping_List2 = "EMAIL1;EMAIL2;EMAIL3;EMAIL4;EMAIL5";
            /*SYS_Get22TableData_S('PROD_SPEC_INFO',Sql_Cond2,Field_List2,Mapping_List2,true);*/
            document.MAINFORM.EMAIL.value = "";
            document.MAINFORM.FAX_NO.value = "";
            if (document.MAINFORM.EMAIL1.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL1.value;
            } else if (document.MAINFORM.EMAIL2.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL2.value;
            } else if (document.MAINFORM.EMAIL3.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL3.value;
            } else if (document.MAINFORM.EMAIL4.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL4.value;
            } else if (document.MAINFORM.EMAIL5.value != "") {
                document.MAINFORM.EMAIL.value = document.MAINFORM.EMAIL5.value;
            }
            if (document.MAINFORM.EMAIL.value == "") {
                if (document.MAINFORM.SEND_CORR_BK_ID.value != "") {
                    alert("Email address not found for this customer");
                }
            }
        } else {
            document.MAINFORM.FAX_NO.value = "";
            document.MAINFORM.EMAIL.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Bank = function() {
    try {

        document.MAINFORM.RELA_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.INW_SNDBK_ID.value;
        document.MAINFORM.SEND_CORR_BK_NM.value = document.MAINFORM.INW_SNDBK_NM.value;
        document.MAINFORM.SEND_CORR_BK_ADD1.value = document.MAINFORM.INW_SNDBK_ADD1.value;
        document.MAINFORM.SEND_CORR_BK_ADD2.value = document.MAINFORM.INW_SNDBK_ADD2.value;
        document.MAINFORM.SEND_CORR_BK_ADD3.value = document.MAINFORM.INW_SNDBK_ADD3.value;
        document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.INW_SNDBK_SW.value;
        document.MAINFORM.SEND_CORR_SW_TAG.value = 'A';
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Fmt_MsgType = function() {
    try {

        document.MAINFORM.CORR_MSG.value = document.MAINFORM.MT_CATEGORY.value + document.MAINFORM.MT_SUBCAT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_SEND_CORR_BK_ID = function() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.SEND_CORR_BK_NM.value.trim();
        add1 = document.MAINFORM.SEND_CORR_BK_ADD1.value.trim();
        add2 = document.MAINFORM.SEND_CORR_BK_ADD2.value.trim();
        add3 = document.MAINFORM.SEND_CORR_BK_ADD3.value.trim();
        if (name != "") {
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                //SYS_InqCUBK_Sql('SEND_CORR_BK_ID', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'SEND_CORR_BK_NM', 'ADD1', 'SEND_CORR_BK_ADD1', 'ADD2', 'SEND_CORR_BK_ADD2', 'ADD3', 'SEND_CORR_BK_ADD3')));
                SYS_InqCUBK_byCondition('SEND_CORR_BK_ID', '1');
            } else if (document.MAINFORM.CU_TYPE.value == "Customer") {
                //SYS_InqCUBK_Sql('SEND_CORR_BK_ID_CUST', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'SEND_CORR_BK_NM', 'ADD1', 'SEND_CORR_BK_ADD1', 'ADD2', 'SEND_CORR_BK_ADD2', 'ADD3', 'SEND_CORR_BK_ADD3'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
                SYS_InqCUBK_byCondition('SEND_CORR_BK_ID_CUST', '1');
            }
        } else {
            alert("Search is not possible without Name"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        load_flg = "F";
        if (SYS_FUNCTION_TYPE != "IQ" && SYS_FUNCTION_TYPE != "RE") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_preswift", "_transaction");
            document.MAINFORM.TRX_HISTORY_TEMP.value = document.MAINFORM.TRX_HISTORY.value;
        }
        if (SYS_FUNCTION_TYPE != "EC") {
            document.MAINFORM.CU_TYPE.value = "Bank";
        }
        SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'P');
        document.MAINFORM.PROD.value = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        document.MAINFORM.NOTES.value = '';
        EEHtml.fireEvent(EEHtml.getElementById("A"), 'onclick');
        SYF_PYMT_Chg_CORR_MSG();
        SYF_PYMT_Chg_BK_CUS_TYPE_MPO();
        SYF_PYMT_Chk_SEND_TO_FLAG_MPO();
        load_flg = "T";
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        var note; // Utility Auto Fix Comments
        document.MAINFORM.CURRNT_STATUS.value = "ITT_INVESTIGATE";
        document.MAINFORM.NXT_STATUS.value = 'ITT_PROCESS';
        note = "\nDuring " + SYS_FUNCTION_DESC + ", " + SYS_USER_ID + " on " + SYS_BUSI_DATE + " " + SYS_TIME + '\n';
        if (document.MAINFORM.NOTES.value.trim() != "") {
            document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value + note + "Notes Added: " + document.MAINFORM.NOTES.value;
        } else {
            document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Inv_Cust = function() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value != '') {
            document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
            document.MAINFORM.SEND_CORR_BK_NM.value = document.MAINFORM.X103_BENECU_NM_59A.value;
            document.MAINFORM.SEND_CORR_BK_ADD1.value = document.MAINFORM.X103BENECUADD1_59A.value;
            document.MAINFORM.SEND_CORR_BK_ADD2.value = document.MAINFORM.X103BENECUADD2_59A.value;
            document.MAINFORM.SEND_CORR_BK_ADD3.value = document.MAINFORM.X103BENECUADD3_59A.value;
            document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.X103_BENECU_SW_59A.value;
            document.MAINFORM.SEND_CORR_SW_TAG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
            SYF_PYMT_Chg_CORRES_TYPE();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CustBankDetails = function() {
    try {

        if (document.MAINFORM.CU_TYPE.value == "Bank") {
            SYF_PYMT_Set_Bank();
            document.MAINFORM.CORRES_TYPE.value = "";
            document.MAINFORM.FAX_NO.value = "";
            document.MAINFORM.EMAIL.value = "";
        } else if (document.MAINFORM.CU_TYPE.value == "Customer") {
            SYF_PYMT_Set_Inv_Cust();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_SEND_CORR_BK_ID = function() {
    try {

        if (document.MAINFORM.SEND_CORR_BK_ID.value.trim() == '') {
            SYF_PYMT_Clr_Corr_Details();
        } else {
            if (document.MAINFORM.CU_TYPE.value == "Bank") {
                SYS_GetCUBK('SEND_CORR_BK_ID', 'SEND_CORR_BK_ID', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_success', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_failure', true);
                SYT_getSWADDFromRef(document.MAINFORM.SEND_CORR_BK_ID, 'SEND_CORR_SW_ADD');
            } else if (document.MAINFORM.CU_TYPE.value == "Customer") {
                SYS_GetCUBK('SEND_CORR_BK_ID_CUST', 'SEND_CORR_BK_ID', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_success1', 'SYM_PYMT_Chg_SEND_CORR_BK_ID_failure1', true);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_BK_CUS_TYPE = function() {
    try {

        var len; // Utility Auto Fix Comments
        len = document.MAINFORM.BK_CUS_TYPE.length;
        for (i = 0; i < len; i++) {
            if (document.MAINFORM.BK_CUS_TYPE[i].checked) {
                document.MAINFORM.CU_TYPE.value = document.MAINFORM.BK_CUS_TYPE[i].value;
            }
            if (document.MAINFORM.CU_TYPE.value == 'Customer') {
                SYF_PYMT_Clk_BK_CUS_TYPE();
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'P');
            }
        }

        if (document.MAINFORM.SEND_CORR_BK_ID.value != '') {
            SYF_PYMT_Clr_Corr_Details();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_SEND_TO_FLAG_MPO = function() {
    try {

        if (document.MAINFORM.SEND_TO_FLAG.value == "Return to Process Queue") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'O');
            document.MAINFORM.CORRES_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MT_CATEGORY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MT_SUBCAT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'M');
            SYF_PYMT_Chg_BK_CUS_TYPE_MPO();
            SYF_PYMT_Chg_CORR_MSG();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CORR_MSG = function() {
    try {

        if (document.MAINFORM.CORR_MSG.value == "MT192" || document.MAINFORM.CORR_MSG.value == "MT292" || document.MAINFORM.CORR_MSG.value == "MT992") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
            SYM_PYMT_clsdisableField(document.MAINFORM.X95_96_QUER_ANS);
            SYM_PYMT_clsdisableField(document.MAINFORM.XN95_96_NARRATIVE);
            SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
            SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
            if (load_flg == "T") { // Utility Auto Fix Comments
                SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        } else if (document.MAINFORM.CORR_MSG.value == "MT195" || document.MAINFORM.CORR_MSG.value == "MT295" || document.MAINFORM.CORR_MSG.value == "MT995") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
            SYM_PYMT_enableField(document.MAINFORM.Query_Ans_Button, 'O');
            SYM_PYMT_enableField(document.MAINFORM.NarrButton_95, 'O');
            if (load_flg == "T") { // Utility Auto Fix Comments
                SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        } else if (document.MAINFORM.CORR_MSG.value == "MT196" || document.MAINFORM.CORR_MSG.value == "MT296" || document.MAINFORM.CORR_MSG.value == "MT996") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
            SYM_PYMT_enableField(document.MAINFORM.Query_Ans_Button, 'O');
            SYM_PYMT_enableField(document.MAINFORM.NarrButton_95, 'O');
            if (load_flg == "T") { // Utility Auto Fix Comments
                SYM_PYMT_Cal_MT_DT_ISN("103", document.MAINFORM.INW_X103_VALUE_DT_32A.value); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        } else if (document.MAINFORM.CORR_MSG.value == "MT199" || document.MAINFORM.CORR_MSG.value == "MT299" || document.MAINFORM.CORR_MSG.value == "MT999") {
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
            SYM_PYMT_clsdisableField(document.MAINFORM.X95_96_QUER_ANS);
            SYM_PYMT_clsdisableField(document.MAINFORM.XN95_96_NARRATIVE);
            SYM_PYMT_clsdisableField(document.MAINFORM.MT_DT_ISN);
            document.MAINFORM.MT_DT_ISN.value = '';
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'P');
        } else {
            SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
            SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
            SYM_PYMT_clsdisableField(document.MAINFORM.MT_DT_ISN);
            document.MAINFORM.MT_DT_ISN.value = '';
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_BK_BANK_TYPE = function() {
    try {

        document.MAINFORM.MT_CATEGORY.disabled = false;
        document.MAINFORM.MT_SUBCAT.disabled = false;

        document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.INW_SNDBK_ID.value;
        SYS_GetCUBK('SEND_CORR_BK_ID', 'SEND_CORR_BK_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_BK_CUS_TYPE_MPO = function() {
    try {

        if (document.MAINFORM.CU_TYPE.value == 'Customer') {
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NarrButton_95, 'P');
            SYT_ChangeFldClass(document.MAINFORM.Query_Ans_Button, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_NM, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CORRES_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var note; // Utility Auto Fix Comments
        document.MAINFORM.CANCEL_FLG.value = "No";
        if (buttonType == 'Confirm') {
            note = "\nDuring " + SYS_FUNCTION_DESC + ", " + SYS_USER_ID + " on " + SYS_BUSI_DATE + " " + SYS_TIME + '\n';
            if (document.MAINFORM.NOTES.value.trim() != "") {
                document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value + note + "Notes Added: " + document.MAINFORM.NOTES.value;
            } else {
                document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value;
            }
        }
        SYT_setTag11forSwift();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_BK_CUS_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_BK_CUS_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORRES_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CORRES_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORR_MSG_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CORR_MSG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_MT_CATEGORY_onchange = function(event) {
    try {
        SYF_PYMT_Fmt_MsgType();
        SYF_PYMT_Chg_CORR_MSG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_MT_SUBCAT_onchange = function(event) {
    try {
        SYF_PYMT_Fmt_MsgType();
        SYF_PYMT_Chg_CORR_MSG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_NarrButton_95_onclick = function(event) {
    try {
        SYS_InsertClause('XN95_96_NARRATIVE');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_Query_Ans_Button_onclick = function(event) {
    try {
        SYS_InsertClause('X95_96_QUER_ANS');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_CORR_BK_ID_onchange = function(event) {
    try {
        SYF_PYMT_Chg_SEND_CORR_BK_ID();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_CORR_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.SEND_CORR_SW_ADD.value == '') { //Added by Priyanka
            document.MAINFORM.SEND_CORR_BK_ID.value = '';
            document.MAINFORM.SEND_CORR_BK_NM.value = '';
            document.MAINFORM.SEND_CORR_BK_ADD1.value = '';
            document.MAINFORM.SEND_CORR_BK_ADD2.value = '';
            document.MAINFORM.SEND_CORR_BK_ADD3.value = '';
            document.MAINFORM.SEND_CORR_SW_ADD.value = '';
        }
        SYM_PYMT_Chg_SEND_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_FLAG_onchange = function(event) {
    try {
        SYF_PYMT_Chg_SEND_TO_FLAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN99_NARRATIVE_79_Button_onclick = function(event) {
    try {
        SYS_InsertClause('XN99_NARRATIVE_79');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button_onclick = function(event) {
    try {
        SYF_PYMT_Clk_SEND_CORR_BK_ID();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_Invest.js", e);
    }
}