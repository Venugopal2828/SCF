"path:SCRN/DO/AdivceForBankCust.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CAL_MESG_TYPE = function() {
    try {
        if ("Mail" == document.MAINFORM.MESG_TYPE_CUST.value) {
            SYS_changeClassName('MAIL_MTHD_CUST', 'M');
        } else {
            SYS_changeClassName('MAIL_MTHD_CUST', 'P');
        }
        if ("Mail" == document.MAINFORM.MESG_TYPE_BANK.value) {
            SYS_changeClassName('MAIL_MTHD_BANK', 'M');
        } else {
            SYS_changeClassName('MAIL_MTHD_BANK', 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*CAL_MESG_TYPE", e);
    }
}

csDOScreenProto.Cal_CHECK_BOX_798 = function() {
    try {
        //
        //    if(SYS_FUNCTION_TYPE=="EC" || SYS_FUNCTION_TYPE=="RE"){
        //             ECtimes+=1;
        //    	if(ECtimes!=1){return;}
        //    	if(document.MAINFORM.SUB_MESS_TYPE.value!=''){
        //                  document.MAINFORM.CHECK_BOX_798.checked=true;
        //    	}
        //     }
        //
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_CHECK_BOX_798", e);
    }
}

csDOScreenProto.Cal_CUST_NARR_MAIL_BTN = function() {
    try {
        SYS_InsertClause('CUST_NARR_TAG_79');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_CUST_NARR_MAIL_BTN", e);
    }
}

csDOScreenProto.Cal_MESG_TYOE_CUST = function() {
    try {
        Set_SEND_TO_CUST_NM();
        Set_SEND_TO_CUST_MAIL();
        Set_SEND_TO_CUST_LANG();
        Set_SEND_TO_CUST_EMAIL();
        Set_SEND_TO_CUST_TLX();
        Set_SEND_TO_CUST_FAX();
        Set_CUST_NARR_TAG_79();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_MESG_TYOE_CUST", e);
    }
}

csDOScreenProto.Cal_MESG_TYPE_BANK = function() {
    try {
        Set_SEND_TO_BANK_NM();
        Set_SEND_TO_BK_SW_ADD();
        Set_SEND_TO_BANK_REF();
        Set_SEND_TO_BANK_LANG();
        Set_SEND_TO_BANK_MAIL();
        Set_SEND_TO_BANK_TLX();
        Set_BANK_NARR_MAIL();
        Set_BANK_NARR_TAG_79();
        Set_SEND_TO_BANK_FAX();
        Set_SEND_TO_BANK_EMAIL();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_MESG_TYPE_BANK", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        SEND_TO_BK_SW_ADD = EEHtml.getElementById("SEND_TO_BK_SW_ADD").value;
        SEND_TO_BANK_NM = EEHtml.getElementById("SEND_TO_BANK_NM").value;
        SEND_TO_BANK_ADD1 = EEHtml.getElementById("SEND_TO_BANK_ADD1").value;
        SEND_TO_BANK_ADD2 = EEHtml.getElementById("SEND_TO_BANK_ADD2").value;
        SEND_TO_BANK_ADD3 = EEHtml.getElementById("SEND_TO_BANK_ADD3").value;
        var _string = SEND_TO_BK_SW_ADD + SEND_TO_BANK_NM + SEND_TO_BANK_ADD1 + SEND_TO_BANK_ADD2 + SEND_TO_BANK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                //SYS_InqCUBK_byCondition('SEND_TO_BANK_ID', '2');
                SYS_InqCUBK('SEND_TO_BANK_ID');
            }
        } else {
            SYS_InqCUBK_byCondition('SEND_TO_BANK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK_ADD = function() {
    try {
        //SYS_InqCUBK_Sql('SEND_TO_BANK_ADD', 'C_MAIN_REF = \'<--SEND_TO_BANK_ID-->\'');
        SYS_InqCUBK_byCondition('SEND_TO_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK_ID = function() {
    try {
        if (document.MAINFORM.SEND_TO_BANK_ID.value == '') {
            document.MAINFORM.SEND_TO_BANK_NM.value = '';
            document.MAINFORM.SEND_TO_BANK_ADD1.value = '';
            document.MAINFORM.SEND_TO_BANK_ADD2.value = '';
            document.MAINFORM.SEND_TO_BANK_ADD3.value = '';
            document.MAINFORM.SEND_TO_BK_SW_ADD.value = '';
            document.MAINFORM.SEND_TO_BK_SW_TAG.value = '';
            document.MAINFORM.SEND_TO_BANK_NOTES.value = '';
            document.MAINFORM.SEND_TO_BANK_REF.value = '';
            document.MAINFORM.SEND_TO_BANK_POST_ADD.value = '';
            document.MAINFORM.SEND_TO_BANK_FAX.value = '';
            document.MAINFORM.BANK_NARR_TAG_79.value = '';
            document.MAINFORM.BANK_NARR_MAIL.value = '';
            SYT_Show_Notes(document.MAINFORM.SEND_TO_BANK_NOTES.name);
            Cal_SEND_TO_BK_MULI_ADD();
        } else {
            SYS_GetCUBK('SEND_TO_BANK_ID', document.MAINFORM.SEND_TO_BANK_ID.name, Cal_SEND_TO_BANK_ID_Back);
            //SYS_GetCUBK_S('SEND_TO_BANK_ID', document.MAINFORM.SEND_TO_BANK_ID.name, false, Cal_SEND_TO_BANK_ID_Back, 'Cal_SEND_TO_BANK_CLEAR_ID');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK_ID", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK_ID_Back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.SEND_TO_BANK_NOTES.name);
        Cal_SEND_TO_BK_SW_TAG();
        Cal_SEND_TO_BK_MULI_ADD();
        if (document.MAINFORM.SEND_TO_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.SEND_TO_BK_SW_ADD.value = document.MAINFORM.SEND_TO_BK_SW_ADD.value + "XXX";
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK_ID_Back", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK_ORDER_NO = function() {
    try {
        var SEND_TO_BANK_ID; // Utility Auto Fix Comments
        var SEND_TO_BANK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_BANK_ORDER_NO = document.MAINFORM.SEND_TO_BANK_ORDER_NO.value;
        //SEND_TO_BANK_ID = document.MAINFORM.SEND_TO_BANK_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_BANK_ORDER_NO + " AND C_MAIN_REF = '" + SEND_TO_BANK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SEND_TO_BANK_NM;SEND_TO_BANK_ADD1;SEND_TO_BANK_ADD2;SEND_TO_BANK_ADD3";
        SYS_GetTableDataByRule_S('SSSS_AdivceForBankCust_Cal_SEND_TO_BANK_ORDER_NO_0', '1', true);
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK_ORDER_NO", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK_POST_ADD = function() {
    try {
        var sql; // Utility Auto Fix Comments
        //sql = "C_MAIN_REF = '<--SEND_TO_BANK_ID-->'";
        //SYS_InqCUBK_Sql('SEND_TO_BANK_POST_ADD',sql);
        //SYS_InqCUBK('SEND_TO_BANK_POST_ADD','SEND_TO_BANK_ID','ID');
        //SYS_InqCUBK_Sql('SEND_TO_BANK_POST_ADD', 'C_MAIN_REF = \'<--SEND_TO_BANK_ID-->\'');
        SYS_InqCUBK_byCondition('SEND_TO_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK_POST_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BANK_POST_ORDER_NO = function() {
    try {
        var SEND_TO_BANK_ID; // Utility Auto Fix Comments
        var SEND_TO_BANK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_BANK_ORDER_NO = document.MAINFORM.SEND_TO_BANK_ORDER_POST.value;
        //SEND_TO_BANK_ID = document.MAINFORM.SEND_TO_BANK_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_BANK_ORDER_NO + " AND C_MAIN_REF = '" + SEND_TO_BANK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "SEND_TO_BANK_POST_ADD";
        SYS_GetTableDataByRule_S('SSSS_AdivceForBankCust_Cal_SEND_TO_BANK_POST_ORDER_NO_1', '1', true);
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BANK_POST_ORDER_NO", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BK_MULI_ADD = function() {
    try {
        if (document.MAINFORM.SEND_TO_BANK_ID.value != '') {
            if (document.MAINFORM.SEND_TO_BANK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_ADD_BTN, 'H');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_POST_ADD_BTN, 'H');
            } else {
            	  document.MAINFORM.SEND_TO_BANK_ADD_BTN.value = '...'; 
                document.MAINFORM.SEND_TO_BANK_POST_ADD_BTN.value = '...'; 
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_ADD_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_POST_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_ADD_BTN, 'H');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_POST_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BK_MULI_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BK_SW_ADD = function() {
    try {
        var nSEND_TO_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.SEND_TO_BANK_ID.value = "";
        if (document.MAINFORM.SEND_TO_BK_SW_ADD.value.length > 7) {
            if (document.MAINFORM.SEND_TO_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.SEND_TO_BK_SW_ADD.value = document.MAINFORM.SEND_TO_BK_SW_ADD.value + "XXX";
            }
            //nSEND_TO_BK_SW_ADD = document.MAINFORM.SEND_TO_BK_SW_ADD.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nSEND_TO_BK_SW_ADD + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "SEND_TO_BANK_ID";
            SYS_GetTableDataByRule_S('SSSS_AdivceForBankCust_Cal_SEND_TO_BK_SW_ADD_2', '1', true);
            if (document.MAINFORM.SEND_TO_BANK_ID.value != '') {
                SYS_GetCUBK('SEND_TO_BANK_ID', 'SEND_TO_BANK_ID', Cal_SEND_TO_BANK_ID_Back);
            }
        }
        EEHtml.fireEvent(document.MAINFORM.SEND_TO_BANK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BK_SW_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_BK_SW_TAG = function() {
    try {
        //if(document.MAINFORM.SEND_TO_BK_SW_ADD.value != ''){
        //    document.MAINFORM.SEND_TO_BK_SW_TAG.value = 'A';
        //    }else{
        //    document.MAINFORM.SEND_TO_BK_SW_TAG.value = 'D';
        //    }
        if (document.MAINFORM.SEND_TO_BK_SW_ADD.value != '') {
            document.MAINFORM.SEND_TO_BK_SW_TAG.value = 'A';
        } else if (document.MAINFORM.SEND_TO_BANK_NM.value != '' || document.MAINFORM.SEND_TO_BANK_ADD1.value != '' || document.MAINFORM.SEND_TO_BANK_ADD2.value != '' || document.MAINFORM.SEND_TO_BANK_ADD3.value != '') {
            document.MAINFORM.SEND_TO_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.SEND_TO_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_BK_SW_TAG", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        SEND_TO_CUST_NM = EEHtml.getElementById("SEND_TO_CUST_NM").value;
        SEND_TO_CUST_ADD1 = EEHtml.getElementById("SEND_TO_CUST_ADD1").value;
        SEND_TO_CUST_ADD2 = EEHtml.getElementById("SEND_TO_CUST_ADD2").value;
        SEND_TO_CUST_ADD3 = EEHtml.getElementById("SEND_TO_CUST_ADD3").value;
        var _string = SEND_TO_CUST_NM + SEND_TO_CUST_ADD1 + SEND_TO_CUST_ADD2 + SEND_TO_CUST_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('SEND_TO_CUST_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('SEND_TO_CUST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_ADD = function() {
    try {
        var sql; // Utility Auto Fix Comments
        //sql = "C_MAIN_REF = '<--SEND_TO_CUST_ID-->'";
        //SYS_InqCUBK_Sql('SEND_TO_CUST_ADD', sql);
        //SYS_InqCUBK('SEND_TO_CUST_ADD', 'SEND_TO_CUST_ID', 'ID');
        SYS_InqCUBK('SEND_TO_CUST_ADD', 'SEND_TO_CUST_ID');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_ID = function() {
    try {
        if (document.MAINFORM.SEND_TO_CUST_ID.value != '') {
            SYS_GetCUBK('SEND_TO_CUST_ID', document.MAINFORM.SEND_TO_CUST_ID.name, Cal_SEND_TO_CUST_ID_Back);
        } else {
            document.MAINFORM.SEND_TO_CUST_NM.value = '';
            document.MAINFORM.SEND_TO_CUST_ADD1.value = '';
            document.MAINFORM.SEND_TO_CUST_ADD2.value = '';
            document.MAINFORM.SEND_TO_CUST_ADD3.value = '';
            document.MAINFORM.SEND_TO_CUST_NOTES.value = '';
            document.MAINFORM.SEND_TO_CUST_POST_ADD.value = '';
            document.MAINFORM.SEND_TO_CUST_FAX.value = '';
            document.MAINFORM.SEND_TO_CUST_EMAIL.value = '';
            document.MAINFORM.CUST_NARR_TAG_79.value = '';
            document.MAINFORM.SEND_TO_CUST_LANG.value = 'English';
            SYT_Show_Notes(document.MAINFORM.SEND_TO_CUST_NOTES.name);
            Cal_SEND_TO_CUST_MULI_ADD();
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_ID", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_ID_Back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.SEND_TO_CUST_NOTES.name);
        Cal_SEND_TO_CUST_MULI_ADD();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_ID_Back", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_MULI_ADD = function() {
    try {
        if (document.MAINFORM.SEND_TO_CUST_ID.value != '') {
            if (document.MAINFORM.SEND_TO_CUST_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_ADD_BTN, 'H');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_POST_ADD_BTN, 'H');
            } else {
              	document.MAINFORM.SEND_TO_CUST_ADD_BTN.value = '...'; 
                document.MAINFORM.SEND_TO_CUST_POST_ADD_BTN.value = '...'; 
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_ADD_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_POST_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_ADD_BTN, 'H');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_POST_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_MULI_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_ORDER_NO = function() {
    try {
        var SEND_TO_CUST_ID; // Utility Auto Fix Comments
        var SEND_TO_CUST_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_CUST_ORDER_NO = document.MAINFORM.SEND_TO_CUST_ORDER_NO.value;
        //SEND_TO_CUST_ID = document.MAINFORM.SEND_TO_CUST_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_CUST_ORDER_NO + " AND C_MAIN_REF = '" + SEND_TO_CUST_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SEND_TO_CUST_NM;SEND_TO_CUST_ADD1;SEND_TO_CUST_ADD2;SEND_TO_CUST_ADD3";
        SYS_GetTableDataByRule_S('SSSS_AdivceForBankCust_Cal_SEND_TO_CUST_ORDER_NO_3', '1', true);
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_ORDER_NO", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_POST_ADD = function() {
    try {
        var sql; // Utility Auto Fix Comments
        //sql = "C_MAIN_REF = '<--SEND_TO_CUST_ID-->'";
        //SYS_InqCUBK_Sql('SEND_TO_CUST_POST_ADD',sql);
        //SYS_InqCUBK('SEND_TO_CUST_POST_ADD', 'SEND_TO_CUST_ID', 'ID');
        SYS_InqCUBK('SEND_TO_CUST_POST_ADD', 'SEND_TO_CUST_ID');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_POST_ADD", e);
    }
}

csDOScreenProto.Cal_SEND_TO_CUST_POST_ORDER_NO = function() {
    try {
        var SEND_TO_CUST_ID; // Utility Auto Fix Comments
        var SEND_TO_CUST_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_CUST_ORDER_NO = document.MAINFORM.SEND_TO_CUST_ORDER_POST.value;
        //SEND_TO_CUST_ID = document.MAINFORM.SEND_TO_CUST_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_CUST_ORDER_NO + " AND C_MAIN_REF = '" + SEND_TO_CUST_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "SEND_TO_CUST_POST_ADD";
        SYS_GetTableDataByRule_S('SSSS_AdivceForBankCust_Cal_SEND_TO_CUST_POST_ORDER_NO_4', '1', true);
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SEND_TO_CUST_POST_ORDER_NO", e);
    }
}

csDOScreenProto.Cal_SUB_MESS_TYPE = function() {
    try {
        //
        //    Cal_CHECK_BOX_798();
        //    if(document.MAINFORM.CHECK_BOX_798.checked){
        //    SYT_EnableDivClass('Z_div');
        //    document.MAINFORM.SUB_MESS_TYPE.value = '789';
        //    SYT_ChangeFldClass(document.MAINFORM.SUB_MESS_TYPE,'P');
        //    }
        //    else
        //    {
        //    SYT_DisableDiv('Z_div');
        //    }
        //
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Cal_SUB_MESS_TYPE", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*CancelCheck", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "EPLC_AdviseLC" || SYS_ORG_FUNCTION_NAME == "EPLC_AdviseLCOneStep") {
            if (document.MAINFORM.MESG_TYPE_CUST.value == 'None' && document.MAINFORM.MESG_TYPE_BANK.value == 'None') {
                SYS_CheckError(document.MAINFORM.MESG_TYPE_CUST, "Please choose message type!");
                return false;
            }
        } else {
            if (document.MAINFORM.MESG_TYPE_CUST.value == 'None' && document.MAINFORM.MESG_TYPE_BANK.value == 'None') {
                SYS_CheckError(document.MAINFORM.MESG_TYPE_BANK, "Please choose message type!");
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*ConfirmBusinessCheckSave", e);
    }
}

csDOScreenProto.Get_ADV_THU_BK_INFO = function() {
    try {
        document.MAINFORM.SEND_TO_BANK_ID.value = SYS_getValueFromMain('ADV_THU_BK_ID');
        document.MAINFORM.SEND_TO_BANK_NM.value = SYS_getValueFromMain('ADV_THU_BK_NM');
        document.MAINFORM.SEND_TO_BANK_ADD1.value = SYS_getValueFromMain('ADV_THU_BK_ADD1');
        document.MAINFORM.SEND_TO_BANK_ADD2.value = SYS_getValueFromMain('ADV_THU_BK_ADD2');
        document.MAINFORM.SEND_TO_BANK_ADD3.value = SYS_getValueFromMain('ADV_THU_BK_ADD3');
        document.MAINFORM.SEND_TO_BANK_NOTES.value = SYS_getValueFromMain('ADV_THU_BK_NOTES');
        document.MAINFORM.SEND_TO_BANK_REF.value = SYS_getValueFromMain('ADV_THU_BK_REF');
        document.MAINFORM.SEND_TO_BANK_POST_ADD.value = SYS_getValueFromMain('ADV_THU_BK_MAIL_ADD');
        document.MAINFORM.SEND_TO_BK_SW_ADD.value = SYS_getValueFromMain('ADV_THU_BK_SW_ADD');
        document.MAINFORM.SEND_TO_BK_SW_TAG.value = SYS_getValueFromMain('ADV_THU_BK_SW_TAG');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Get_ADV_THU_BK_INFO", e);
    }
}

csDOScreenProto.Get_BENE_VALUE_TO_CUST = function() {
    try {
        var obj_BENE_LANG; // Utility Auto Fix Comments
        obj_BENE_LANG = SYS_getMainObj('BENE_LANG');
        if (SYS_MODULE_NAME == "EPLC" && obj_BENE_LANG != null) {

            document.MAINFORM.SEND_TO_CUST_ID.value = SYS_getValueFromMain("BENE_ID");
            document.MAINFORM.SEND_TO_CUST_NM.value = SYS_getValueFromMain("BENE_NM");
            document.MAINFORM.SEND_TO_CUST_ADD1.value = SYS_getValueFromMain("BENE_ADD1");
            document.MAINFORM.SEND_TO_CUST_ADD2.value = SYS_getValueFromMain("BENE_ADD2");
            document.MAINFORM.SEND_TO_CUST_ADD3.value = SYS_getValueFromMain("BENE_ADD3");
            document.MAINFORM.SEND_TO_CUST_LANG.value = SYS_getValueFromMain("BENE_LANG");
            document.MAINFORM.SEND_TO_CUST_FAX.value = SYS_getValueFromMain("BENE_FAX");
            document.MAINFORM.SEND_TO_CUST_EMAIL.value = SYS_getValueFromMain("BENE_EMAIL");
            document.MAINFORM.SEND_TO_CUST_REF.value = SYS_getValueFromMain("BENE_REF_NO");
            document.MAINFORM.MESG_TYPE_CUST.value = SYS_getValueFromMain("BENE_CORR_MED");
            document.MAINFORM.SEND_TO_CUST_POST_ADD.value = SYS_getValueFromMain("BENE_MAIL_ADD");

        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Get_BENE_VALUE_TO_CUST", e);
    }
}

csDOScreenProto.Get_ISSUE_BY = function() {
    try {
        if (SYS_MODULE_NAME == "IWGT") {

            var ISSUE_BY = SYS_getValueFromMain('ISSUE_BY');
            var ADV_TO = SYS_getValueFromMain('ADV_FLG');
            if (ISSUE_BY == 'MT199') {
                document.MAINFORM.MESG_TYPE_BANK.value = 'MT199';
                Get_ADV_THU_BK_INFO();
            } else if (ISSUE_BY == 'MT299') {
                document.MAINFORM.MESG_TYPE_BANK.value = 'MT299';
                Get_ADV_THU_BK_INFO();
            } else if (ISSUE_BY == 'Other') {
                document.MAINFORM.MESG_TYPE_BANK.value = 'None';
            } else if (ISSUE_BY == 'Mail' && ADV_TO == 'BENE') {
                document.MAINFORM.MESG_TYPE_CUST.value = 'Mail';
                document.MAINFORM.SEND_TO_CUST_ID.value = SYS_getValueFromMain('BENE_ID');
                document.MAINFORM.SEND_TO_CUST_NM.value = SYS_getValueFromMain('BENE_NM');
                document.MAINFORM.SEND_TO_CUST_ADD1.value = SYS_getValueFromMain('BENE_ADD1');
                document.MAINFORM.SEND_TO_CUST_ADD2.value = SYS_getValueFromMain('BENE_ADD2');
                document.MAINFORM.SEND_TO_CUST_ADD3.value = SYS_getValueFromMain('BENE_ADD3');
                document.MAINFORM.SEND_TO_CUST_NOTES.value = SYS_getValueFromMain('BENE_NOTES');
                document.MAINFORM.SEND_TO_CUST_REF.value = SYS_getValueFromMain('BENE_REF');
                document.MAINFORM.SEND_TO_CUST_EMAIL.value = SYS_getValueFromMain('BENE_EMAIL');
            } else if (ISSUE_BY == 'Other' && ADV_TO == 'BENE') {
                document.MAINFORM.MESG_TYPE_CUST.value = 'None';

            }

        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Get_ISSUE_BY", e);
    }
}

csDOScreenProto.Get_MESG_TYPE_BANK = function() {
    try {
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var oMESG_TYPE_BANK; // Utility Auto Fix Comments
        var ops; // Utility Auto Fix Comments
        oMESG_TYPE_BANK = EEHtml.getElementById('MESG_TYPE_BANK');
        ops = oMESG_TYPE_BANK.options;
        len = ops.length;

        if (SYS_MODULE_NAME == 'IMCO' || SYS_MODULE_NAME == 'EXCO') {
            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                if (ops[i].value == "MT799") {
                    break;
                }
            }
            oMESG_TYPE_BANK.remove(i);
        } else {
            for (i = 0; i < len; i++) {
                if (ops[i].value == "MT499") {
                    break;
                }
            }
            oMESG_TYPE_BANK.remove(i);
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Get_MESG_TYPE_BANK", e);
    }
}

csDOScreenProto.Get_SEND_TO_BANK_REF = function() {
    try {
        document.MAINFORM.BANK_N90_REF_20.value = document.MAINFORM.TEMP_N90_REF_20.value;
        document.MAINFORM.BANK_N90_REF_21.value = SYS_getValueFromMain('TEMP_N90_REF_21');
        if (document.MAINFORM.BANK_N90_REF_21.value == '') {
            document.MAINFORM.BANK_N90_REF_21.value = 'NONREF';
            document.MAINFORM.SEND_TO_BANK_REF.value = 'NONREF';
        } else {
            document.MAINFORM.SEND_TO_BANK_REF.value = document.MAINFORM.BANK_N90_REF_21.value;
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Get_SEND_TO_BANK_REF", e);
    }
}

csDOScreenProto.HiddenBanktab = function() {
    try {
        var Bank; // Utility Auto Fix Comments
        var Customer; // Utility Auto Fix Comments
        var Separator; // Utility Auto Fix Comments
        Bank = EEHtml.getElementById('A');
        Customer = EEHtml.getElementById('B');
        Separator = EEHtml.getElementById('Separator');
        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "EPLC_AdviseLC" || SYS_ORG_FUNCTION_NAME == "EPLC_AdviseLCOneStep") {
            Bank.style.display = 'none';
            Separator.style.display = 'none';
            Customer.style.display = '';
            EEHtml.getElementById('A_div').style.display = 'none';
            EEHtml.getElementById('B_div').style.display = "block";
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*HiddenBanktab", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Get_SEND_TO_BANK_REF();

        //Get Beneficiary information to customer 

        Get_BENE_VALUE_TO_CUST();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*InitValues", e);
    }
}

csDOScreenProto.Set_BANK_N90_REF_21 = function() {
    try {
        document.MAINFORM.BANK_N90_REF_21.value = document.MAINFORM.SEND_TO_BANK_REF.value;
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_BANK_N90_REF_21", e);
    }
}

csDOScreenProto.Set_BANK_NARR_MAIL = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'Mail' || document.MAINFORM.MESG_TYPE_BANK.value == 'Telex' || document.MAINFORM.MESG_TYPE_BANK.value == 'Fax' || document.MAINFORM.MESG_TYPE_BANK.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.BANK_NARR_MAIL, 'M');
        } else {
            document.MAINFORM.BANK_NARR_MAIL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.BANK_NARR_MAIL, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_BANK_NARR_MAIL", e);
    }
}

csDOScreenProto.Set_BANK_NARR_TAG_79 = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value != 'None' && document.MAINFORM.MESG_TYPE_BANK.value != 'Telex' && document.MAINFORM.MESG_TYPE_BANK.value != 'Mail' && document.MAINFORM.MESG_TYPE_BANK.value != 'Email' && document.MAINFORM.MESG_TYPE_BANK.value != 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.BANK_NARR_TAG_79, 'M');
        } else {
            document.MAINFORM.BANK_NARR_TAG_79.value = '';
            SYT_ChangeFldClass(document.MAINFORM.BANK_NARR_TAG_79, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_BANK_NARR_TAG_79", e);
    }
}

csDOScreenProto.Set_CUST_NARR_TAG_79 = function() {
    try {
        //if (document.MAINFORM.MESG_TYPE_CUST.value == 'None'||document.MAINFORM.MESG_TYPE_CUST.value=='Fax'||document.MAINFORM.MESG_TYPE_CUST.value=='Email') 
        if (document.MAINFORM.MESG_TYPE_CUST.value == 'None') {
            document.MAINFORM.CUST_NARR_TAG_79.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CUST_NARR_TAG_79, 'P');
            document.MAINFORM.CUST_NARR_MAIL_BTN.className = "CHAR_P";
            document.MAINFORM.CUST_NARR_MAIL_BTN.disabled = true;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CUST_NARR_TAG_79, 'M');
            document.MAINFORM.CUST_NARR_MAIL_BTN.className = "CHAR_O";
            //EEHtml.getElementById('CUST_NARR_MAIL_BTN').disabled =false ;
            document.MAINFORM.CUST_NARR_MAIL_BTN.disabled = false;
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_CUST_NARR_TAG_79", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_EMAIL = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_EMAIL, 'O');
        }

        if (document.MAINFORM.MESG_TYPE_BANK.value == 'None' && document.MAINFORM.SEND_TO_BANK_ID.value == '') {
            document.MAINFORM.SEND_TO_BANK_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_EMAIL", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_FAX = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_FAX, 'O');
        }

        if (document.MAINFORM.MESG_TYPE_BANK.value == 'None' && document.MAINFORM.SEND_TO_BANK_ID.value == '') {
            document.MAINFORM.SEND_TO_BANK_FAX.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_FAX", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_LANG = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_LANG, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_LANG, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_LANG", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_MAIL = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_POST_ADD, 'M');
        } else {
            document.MAINFORM.SEND_TO_BANK_POST_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_POST_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_MAIL", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_NM = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'MT499' || document.MAINFORM.MESG_TYPE_BANK.value == 'MT999' ||
            document.MAINFORM.MESG_TYPE_BANK.value == 'MT799' || document.MAINFORM.MESG_TYPE_BANK.value == 'MT299' || document.MAINFORM.MESG_TYPE_BANK.value == 'MT199') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_NM, 'O');
        } else if (document.MAINFORM.MESG_TYPE_BANK.value == 'Mail' || document.MAINFORM.MESG_TYPE_BANK.value == 'Telex' || document.MAINFORM.MESG_TYPE_BANK.value == 'Email' || document.MAINFORM.MESG_TYPE_BANK.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_NM, 'M');
        }

        if (document.MAINFORM.MESG_TYPE_BANK.value == 'None') {
            document.MAINFORM.SEND_TO_BANK_NM.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_NM, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_NM", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_REF = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value != 'None' && document.MAINFORM.MESG_TYPE_BANK.value != 'Fax' && document.MAINFORM.MESG_TYPE_BANK.value != 'Mail' && document.MAINFORM.MESG_TYPE_BANK.value != 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_REF, 'M');
            document.MAINFORM.SEND_TO_BANK_REF.value = document.MAINFORM.BANK_N90_REF_21.value;
        } else if (document.MAINFORM.MESG_TYPE_BANK.value == 'None') {
            document.MAINFORM.SEND_TO_BANK_REF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_REF, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_REF, 'O');
            document.MAINFORM.SEND_TO_BANK_REF.value = document.MAINFORM.BANK_N90_REF_21.value;
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_REF", e);
    }
}

csDOScreenProto.Set_SEND_TO_BANK_TLX = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_TLX, 'M');
        } else if (document.MAINFORM.MESG_TYPE_BANK.value == 'None' && document.MAINFORM.SEND_TO_BANK_ID.value == '') {
            document.MAINFORM.SEND_TO_BANK_TLX.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_TLX, 'O');
        } else if (document.MAINFORM.MESG_TYPE_BANK.value != 'None' && document.MAINFORM.MESG_TYPE_BANK.value != 'Telex' && document.MAINFORM.MESG_TYPE_BANK.value != 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BANK_TLX, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BANK_TLX", e);
    }
}

csDOScreenProto.Set_SEND_TO_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_BANK.value != 'None' && document.MAINFORM.MESG_TYPE_BANK.value != 'Telex' && document.MAINFORM.MESG_TYPE_BANK.value != 'Mail' && document.MAINFORM.MESG_TYPE_BANK.value != 'Fax' && document.MAINFORM.MESG_TYPE_BANK.value != 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BK_SW_ADD, 'M');
        } else if (document.MAINFORM.MESG_TYPE_BANK.value == 'None') {
            document.MAINFORM.SEND_TO_BK_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BK_SW_ADD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_BK_SW_ADD, 'O');
        }

        //if(document.MAINFORM.SEND_TO_BK_SW_ADD.value != ''){
        //    document.MAINFORM.SEND_TO_BK_SW_TAG.value = 'A';
        //    }else{
        //    document.MAINFORM.SEND_TO_BK_SW_TAG.value = 'D';
        //    }
        Cal_SEND_TO_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_BK_SW_ADD", e);
    }
}

csDOScreenProto.Set_SEND_TO_CUST_EMAIL = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_CUST.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_EMAIL, 'O');
        }

        if (document.MAINFORM.MESG_TYPE_CUST.value == 'None' && document.MAINFORM.SEND_TO_CUST_ID.value == '') {
            document.MAINFORM.SEND_TO_CUST_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_CUST_EMAIL", e);
    }
}

csDOScreenProto.Set_SEND_TO_CUST_FAX = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_CUST.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_FAX, 'O');
        }

        if (document.MAINFORM.MESG_TYPE_CUST.value == 'None' && document.MAINFORM.SEND_TO_CUST_ID.value == '') {
            document.MAINFORM.SEND_TO_CUST_FAX.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_CUST_FAX", e);
    }
}

csDOScreenProto.Set_SEND_TO_CUST_LANG = function() {
    try {
        if (document.MAINFORM.SEND_TO_CUST_ID.value == '') {
            document.MAINFORM.SEND_TO_CUST_LANG.value = 'English';
        }

        if (document.MAINFORM.MESG_TYPE_CUST.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_LANG, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_LANG, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_CUST_LANG", e);
    }
}

csDOScreenProto.Set_SEND_TO_CUST_MAIL = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_CUST.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_POST_ADD, 'M');
        } else {
            //document.MAINFORM.SEND_TO_CUST_POST_ADD.value= '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_POST_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_CUST_MAIL", e);
    }
}

csDOScreenProto.Set_SEND_TO_CUST_NM = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_CUST.value == 'None') {
            //document.MAINFORM.SEND_TO_CUST_NM.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_NM, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_NM, 'M'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_CUST_NM", e);
    }
}

csDOScreenProto.Set_SEND_TO_CUST_TLX = function() {
    try {
        if (document.MAINFORM.MESG_TYPE_CUST.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_TLX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CUST_TLX, 'O');
        }

        if (document.MAINFORM.MESG_TYPE_CUST.value == 'None' && document.MAINFORM.SEND_TO_CUST_ID.value == '') {
            document.MAINFORM.SEND_TO_CUST_TLX.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*Set_SEND_TO_CUST_TLX", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var DivObj; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == 'REIM') {
            DivObj = EEHtml.getElementById("B");
          //  DivObj.innerHTML = "";
           DivObj.style.display = 'none';      
        }
        SYT_Init_Notes(document.MAINFORM.SEND_TO_BANK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_CUST_NOTES.name);
        Get_MESG_TYPE_BANK();
        Cal_MESG_TYPE_BANK();
        Cal_MESG_TYOE_CUST();
        //Cal_SEND_TO_BANK_ID();
        //Cal_SEND_TO_CUST_ID();
        Cal_SEND_TO_BK_MULI_ADD();
        Cal_SEND_TO_CUST_MULI_ADD();
        HiddenBanktab();
        if (SYS_MODULE_NAME == "SYND" || SYS_MODULE_NAME == "RPFM" || SYS_MODULE_NAME == "IPLC" || SYS_MODULE_NAME == "GTEE" || SYS_MODULE_NAME == "IWGT" || SYS_MODULE_NAME == "EPLC" || SYS_MODULE_NAME == "EXCO" || SYS_MODULE_NAME == "IMCO" || SYS_MODULE_NAME == "SHGT" || SYS_MODULE_NAME == "SBLC" || SYS_MODULE_NAME == "REIM") { //Added---H
            document.MAINFORM.TEMP_N90_REF_20.value = SYS_getValueFromMain('C_MAIN_REF');
        }
        if (SYS_ORG_FUNCTION_NAME == "EPLC_RegisterDocuments" || SYS_ORG_FUNCTION_NAME == "EPLC_DocsRefused" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAcceptFrCE") {
            document.MAINFORM.TEMP_N90_REF_20.value = SYS_getValueFromMain('C_MAIN_REF');
            document.MAINFORM.BANK_N90_REF_20.value = document.MAINFORM.TEMP_N90_REF_20.value;
        }
        Get_SEND_TO_BANK_REF();
        //Get_ISSUE_BY();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.MESG_TYPE_BANK_onchange = function(event) {
    try {
        //CAL_MESG_TYPE();
        Cal_MESG_TYPE_BANK();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*MESG_TYPE_BANK_onchange", e);
    }
}

csDOScreenProto.MESG_TYPE_CUST_onchange = function(event) {
    try {
        //CAL_MESG_TYPE();
        Cal_MESG_TYOE_CUST();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*MESG_TYPE_CUST_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ADD1_onchange = function(event) {
    try {
        Cal_SEND_TO_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ADD1_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ADD2_onchange = function(event) {
    try {
        Cal_SEND_TO_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ADD2_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ADD3_onchange = function(event) {
    try {
        Cal_SEND_TO_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ADD3_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.SEND_TO_BANK_EMAIL.value;
        //    if (SYM_SHGT_CHK_EMAIL(chkemail)) {
        //                alert("enter valid email address");
        //                document.MAINFORM.SEND_TO_BANK_EMAIL.value = '';
        //            } 
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            alert("enter valid email address");
            document.MAINFORM.SEND_TO_BANK_EMAIL.value = "";
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_EMAIL_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ID_onchange = function(event) {
    try {
        Cal_SEND_TO_BANK_ID();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ID_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_NM_onchange = function(event) {
    try {
        Cal_SEND_TO_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_NM_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ORDER_NO_onchange = function(event) {
    try {
        Cal_SEND_TO_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ORDER_POST_onchange = function(event) {
    try {
        Cal_SEND_TO_BANK_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ORDER_POST_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BANK_REF_onchange = function(event) {
    try {
        Set_BANK_N90_REF_21();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_REF_onchange", e);
    }
}

csDOScreenProto.SEND_TO_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_SEND_TO_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BK_SW_ADD_onchange", e);
    }
}

csDOScreenProto.SEND_TO_CUST_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.SEND_TO_CUST_EMAIL.value;
        //  if (SYM_SHGT_CHK_EMAIL(chkemail)) {
        //                alert("enter valid email address");
        //                document.MAINFORM.SEND_TO_CUST_EMAIL.value = '';
        //            } 
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            alert("enter valid email address");
            document.MAINFORM.SEND_TO_CUST_EMAIL.value = "";
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_CUST_EMAIL_onchange", e);
    }
}

csDOScreenProto.SEND_TO_CUST_ID_onchange = function(event) {
    try {
        Cal_SEND_TO_CUST_ID();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_CUST_ID_onchange", e);
    }
}

csDOScreenProto.SEND_TO_CUST_ORDER_NO_onchange = function(event) {
    try {
        Cal_SEND_TO_CUST_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_CUST_ORDER_NO_onchange", e);
    }
}

csDOScreenProto.SEND_TO_CUST_ORDER_POST_onchange = function(event) {
    try {
        Cal_SEND_TO_CUST_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_CUST_ORDER_POST_onchange", e);
    }
}

csDOScreenProto.CUST_NARR_MAIL_BTN_onclick = function(event) {
    try {
        Cal_CUST_NARR_MAIL_BTN();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*CUST_NARR_MAIL_BTN_onclick", e);
    }
}

csDOScreenProto.SEND_TO_BANK_ADD_BTN_onclick = function(event) {
    try {
        Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.SEND_TO_BANK_POST_ADD_BTN_onclick = function(event) {
    try {
        Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_BANK_POST_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.SEND_TO_CUST_ADD_BTN_onclick = function(event) {
    try {
        Cal_SEND_TO_CUST_ADD();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_CUST_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.SEND_TO_CUST_POST_ADD_BTN_onclick = function(event) {
    try {
        Cal_SEND_TO_CUST_POST_ADD();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SEND_TO_CUST_POST_ADD_BTN_onclick", e);
    }
}

csDOScreenProto.SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        Cal_SEND_TO_BANK();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SND_TO_ID_BANK_BTN_onclick", e);
    }
}

csDOScreenProto.SND_TO_ID_CUST_BTN_onclick = function(event) {
    try {
        Cal_SEND_TO_CUST();
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*SND_TO_ID_CUST_BTN_onclick", e);
    }
}

csDOScreenProto.button6_onclick = function(event) {
    try {
        SYS_InsertClause('BANK_NARR_TAG_79');
    } catch (e) {
        DisExcpt("SSSS_AdivceForBankCust.js*button6_onclick", e);
    }
}