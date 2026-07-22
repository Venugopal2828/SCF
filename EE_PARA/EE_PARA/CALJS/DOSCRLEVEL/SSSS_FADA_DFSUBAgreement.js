"path:SCRN/o2m/FADA_DFSUBAgreement.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CAL_APPL_RATE = function() {
    try {
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            document.MAINFORM.FA_TEMP1.value = (SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) / SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value));
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.CAL_DISCLOSE = function() {
    try {
        var FA_BUSI_TYPE = SYS_getValueFromMain('FA_BUSI_TYPE');
        var FA_ID_DISCLOSED = SYS_getValueFromMain('FA_ID_DISCLOSED');
        if (FA_BUSI_TYPE == 'DISC') {
            if (FA_ID_DISCLOSED == '2') {
                document.MAINFORM.FA_BUYER_CNTC_FLG.value = '2';
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CNTC_FLG, 'P');
            } else {
                document.MAINFORM.FA_BUYER_CNTC_FLG.value = '';
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CNTC_FLG, 'O');
            }
            document.MAINFORM.FA_SERVICE_REQ.value = '2';
            document.MAINFORM.FA_LMT_TYPE.value = '2';
            document.MAINFORM.FA_APPL_LMT_CCY.value = '';
            document.MAINFORM.FA_APPL_LMT_AMT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_SERVICE_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
        } else {
            document.MAINFORM.FA_SERVICE_REQ.value = '';
            document.MAINFORM.FA_LMT_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_SERVICE_REQ, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE, 'O');
            document.MAINFORM.FA_APPL_LMT_CCY.value = SYS_LOCAL_CCY;
            CHECK_SERVICE_REQ();
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.CHECK_DO_FIELDS = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('SE1').style.display = "";
            EEHtml.getElementById('SE2').style.display = "";
            EEHtml.getElementById('SE3').style.display = "";
            EEHtml.getElementById('SE4').style.display = "";
            EEHtml.getElementById('SE5').style.display = "";
            EEHtml.getElementById('SE6').style.display = "";
            EEHtml.getElementById('SE7').style.display = "";
            EEHtml.getElementById('SE8').style.display = "";
            EEHtml.getElementById('SE9').style.display = "";
            EEHtml.getElementById('SE10').style.display = "";
            EEHtml.getElementById('SE11').style.display = "";
            EEHtml.getElementById('SE12').style.display = "";
            EEHtml.getElementById('SE13').style.display = "";
            EEHtml.getElementById('SE14').style.display = "";
            EEHtml.getElementById('SE15').style.display = "";
            EEHtml.getElementById('SE16').style.display = "";

            EEHtml.getElementById('BR1').style.display = "none";
            EEHtml.getElementById('BR2').style.display = "none";
            EEHtml.getElementById('BR3').style.display = "none";
            EEHtml.getElementById('BR4').style.display = "none";
            EEHtml.getElementById('BR5').style.display = "none";
            EEHtml.getElementById('BR6').style.display = "none";
            EEHtml.getElementById('BR7').style.display = "none";
            EEHtml.getElementById('BR8').style.display = "none";
            EEHtml.getElementById('BR9').style.display = "none";
            EEHtml.getElementById('BR10').style.display = "none";
            EEHtml.getElementById('BR11').style.display = "none";
            EEHtml.getElementById('BR12').style.display = "none";
            EEHtml.getElementById('BR13').style.display = "none";
            EEHtml.getElementById('BR14').style.display = "none";
            EEHtml.getElementById('BR15').style.display = "none";
            EEHtml.getElementById('BR16').style.display = "none";
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_NM', 'P');
            SYT_ChangeFldClass_New('FA_SEL_ID', 'M');
            SYT_ChangeFldClass_New('FA_SEL_NM', 'M');

        } else {
            EEHtml.getElementById('SE1').style.display = "none";
            EEHtml.getElementById('SE2').style.display = "none";
            EEHtml.getElementById('SE3').style.display = "none";
            EEHtml.getElementById('SE4').style.display = "none";
            EEHtml.getElementById('SE5').style.display = "none";
            EEHtml.getElementById('SE6').style.display = "none";
            EEHtml.getElementById('SE7').style.display = "none";
            EEHtml.getElementById('SE8').style.display = "none";
            EEHtml.getElementById('SE9').style.display = "none";
            EEHtml.getElementById('SE10').style.display = "none";
            EEHtml.getElementById('SE11').style.display = "none";
            EEHtml.getElementById('SE12').style.display = "none";
            EEHtml.getElementById('SE13').style.display = "none";
            EEHtml.getElementById('SE14').style.display = "none";
            EEHtml.getElementById('SE15').style.display = "none";
            EEHtml.getElementById('SE16').style.display = "none";

            EEHtml.getElementById('BR1').style.display = "";
            EEHtml.getElementById('BR2').style.display = "";
            EEHtml.getElementById('BR3').style.display = "";
            EEHtml.getElementById('BR4').style.display = "";
            EEHtml.getElementById('BR5').style.display = "";
            EEHtml.getElementById('BR6').style.display = "";
            EEHtml.getElementById('BR7').style.display = "";
            EEHtml.getElementById('BR8').style.display = "";
            EEHtml.getElementById('BR9').style.display = "";
            EEHtml.getElementById('BR10').style.display = "";
            EEHtml.getElementById('BR11').style.display = "";
            EEHtml.getElementById('BR12').style.display = "";
            EEHtml.getElementById('BR13').style.display = "";
            EEHtml.getElementById('BR14').style.display = "";
            EEHtml.getElementById('BR15').style.display = "";
            EEHtml.getElementById('BR16').style.display = "";
            SYT_ChangeFldClass_New('FA_SEL_ID', 'P');
            SYT_ChangeFldClass_New('FA_SEL_NM', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_ID', 'M');
            SYT_ChangeFldClass_New('FA_BUYER_NM', 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.CHECK_SERVICE_REQ = function() {
    try {
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            SYT_ChangeFldClass_New('FA_APPL_LMT_AMT', 'M');
            SYT_ChangeFldClass_New('FA_LMT_TYPE', 'M');
        } else if (document.MAINFORM.FA_SERVICE_REQ.value == '2') {
            SYT_ChangeFldClass_New('FA_APPL_LMT_AMT', 'O');
        } else if (document.MAINFORM.FA_SERVICE_REQ.value == '3') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            SYT_ChangeFldClass_New('FA_APPL_LMT_AMT', 'P');
            SYT_ChangeFldClass_New('FA_LMT_TYPE', 'P');

        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.CUST_setRef = function(ref) {
    try {
        //Add by Effie on 20190522
        document.MAINFORM.FA_BUYER_ID.value = ref;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.Check_Combined_Limit = function() {
    try {
        if (document.MAINFORM.COMBN_LMT_FLG.value == 'Yes') {
            var sum = SYS_BeFloat(document.MAINFORM.BUYER_LMT_PERC.value) + SYS_BeFloat(document.MAINFORM.SEL_LMT_PERC.value) + SYS_BeFloat(document.MAINFORM.INCO_LMT_PERC.value);
            if (sum != 100) {
                alert('The sum of Buyer, Supplier and Insurance Combined Limit percentage should be 100%.');
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.Combined_Limit = function() {
    try {
        if (document.MAINFORM.COMBN_LMT_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.BUYER_LMT_PERC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEL_LMT_PERC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INCO_LMT_PERC, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BUYER_LMT_PERC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEL_LMT_PERC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INCO_LMT_PERC, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_buyer_lmt()) {
            return false;
        }

        if (!check_buyer_indb()) {
            return false;
        }
        if (!checkbuyer()) {
            return false;
        }
        if (!check_seller_indb()) {
            return false;
        }
        if (!checkseller()) {
            return false;
        }
        if (!Check_Combined_Limit()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FOR_AMD = function() {
    try {
        var currRec; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        currRec = parent.currentDo.getCurrentRecord();
        state = parent.currentDo.getStatue();
        if (state == 'E' && SYS_ORG_FUNCTION_SHORT_NAME == 'AmendAgreement') { //modified by liangfei 2013-05-07

            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_NM, 'P');
            EEHtml.getElementById('getBUYER_ID').style.display = 'none';
            EEHtml.getElementById('getBUYER_ID2').style.display = 'none';
        } else {
            EEHtml.getElementById('getBUYER_ID').style.display = '';
            EEHtml.getElementById('getBUYER_ID2').style.display = '';


        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.GetBuyerID_FromNM = function() {
    try {
        //Add by Effie 20190522
        var FACI_TYPE = SYS_getValueFromMain('FA_BUSI_TYPE');
        var currRec; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        currRec = parent.currentDo.getCurrentRecord();
        state = parent.currentDo.getStatue();
        if (state == 'E' && (SYS_ORG_FUNCTION_SHORT_NAME == 'SignAgreementFromCE' || SYS_ORG_FUNCTION_SHORT_NAME == 'SignAgreementFromCE_ME')) {
            if ((FACI_TYPE == 'SF' || FACI_TYPE == 'RF' || FACI_TYPE == 'DF' || FACI_TYPE == 'POF' || FACI_TYPE == 'RD') && document.MAINFORM.FA_BUYER_ID.value == '' && document.MAINFORM.FA_BUYER_NM.value != '') {
                SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_buyer_id', '1', true);
                if (document.MAINFORM.FA_BUYER_ID.value == '') {
                    document.MAINFORM.FA_CUST_FLAG.value = '2';
                    GetRefNo_BuyID();
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.GetInsuranceID = function() {
    try {
        var sqlWhere; // Utility Auto Fix Comments
        //sqlWhere = "C_MAIN_REF='" + document.MAINFORM.FA_BUYER_ID.value + "'";
        if (document.MAINFORM.FA_INSU_COMP_FLAG.value != '') {
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_GetInsuranceID_0', '1', true);
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.GetRefNo_BuyID = function() {
    try {
        //Add by Effie 20190522
        SYS_GetRefNo('CUST', CUST_setRef, "", "CUSTREF", "CUSTREF");
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        //SYS_GetRefNo('FADA_BUY_REF','setDOref',"","DOREF","","DOREF");

        document.MAINFORM.FA_SERVICE_REQ.value = '1';
        document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain('FA_BUYER_ID');
        document.MAINFORM.FA_SEL_ID.value = SYS_getValueFromMain('FA_SEL_ID');
        document.MAINFORM.FA_SEL_NM.value = SYS_getValueFromMain('FA_SEL_NM');
        document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain('FA_BUYER_NM');
        document.MAINFORM.FACI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE'); //Change require from paul
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        SYS_GetSubPageRefNo_S('FADA_BUY_REF', setDOref, "", "DOREF", "DOREF");
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.Margin_Percent = function() {
    try {
        if (SYS_BeInt(document.MAINFORM.MARGIN_PERC.value) == 100) {
            SYT_ChangeFldClass(document.MAINFORM.BUYER_LMT_PERC, 'B');
            SYT_ChangeFldClass(document.MAINFORM.SEL_LMT_PERC, 'B');
            SYT_ChangeFldClass(document.MAINFORM.INCO_LMT_PERC, 'B');
            SYT_ChangeFldClass(document.MAINFORM.MARGIN_AC_NO, 'M');
            document.MAINFORM.COMBN_LMT_FLG.value = 'No';
        } else if (SYS_BeInt(document.MAINFORM.MARGIN_PERC.value) == 0) {
            Combined_Limit();
            SYT_ChangeFldClass(document.MAINFORM.MARGIN_AC_NO, 'O');
        } else {
            Combined_Limit();
            SYT_ChangeFldClass(document.MAINFORM.MARGIN_AC_NO, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var currRec; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_APPL_LMT_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_TEMP_LMT.value = document.MAINFORM.FA_APPL_LMT_AMT.value;
        document.MAINFORM.FA_LMT_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        //document.MAINFORM.FA_TEMP_AMT8.value=1;
        //document.MAINFORM.FA_REMI_CCY1.value='EUR';
        document.MAINFORM.FA_REMI_AMT1.value = SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY1.value, document.MAINFORM.FA_REMI_AMT1.value);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        currRec = parent.currentDo.getCurrentRecord();
        state = parent.currentDo.getStatue();

        if (state != 'V') {
            get_buyer_lmt();
            exchangerate();
            //document.MAINFORM.FA_TEMP2.value=SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
            change_lmtamt_class();
        }

        CHECK_DO_FIELDS();
        CHECK_SERVICE_REQ();
        FOR_AMD();
        if (SYS_ORG_FUNCTION_NAME == "SignAgreement" || SYS_ORG_FUNCTION_NAME == "AmendAgreement") {
            //CAL_DISCLOSE();  //Mark on 20240701 no this business type now;
        }

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.TEMP_AMT8 = function() {
    try {
        var FA_TEMP_AMT8; // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP_LMT.value) == 0) {
            FA_TEMP_AMT8 = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value);
        } else {
           // FA_TEMP_AMT8 = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) - (SYS_BeFloat(document.MAINFORM.FA_TEMP_LMT.value) / SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value)); // Utility Auto Fix Comments
            FA_TEMP_AMT8 = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value),SYS_FloatDiv((SYS_BeFloat(document.MAINFORM.FA_TEMP_LMT.value),SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value))));
            
            
        }
        if (FA_TEMP_AMT8 > 0) {
            document.MAINFORM.FA_TEMP3.value = 'D';
        } else {
            document.MAINFORM.FA_TEMP3.value = 'C';
        }
        //FA_TEMP_AMT8=document.MAINFORM.FA_TEMP_AMT8.value;
        //FA_TEMP_AMT8=SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value)-(SYS_BeFloat(document.MAINFORM.FA_TEMP_LMT.value)/SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value))
        document.MAINFORM.FA_TEMP_AMT8.value = Math.abs(FA_TEMP_AMT8);
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.buyer_contact_info = function() {
    try {
        var Fieldlist; // Utility Auto Fix Comments
        var Mappinglist; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1' || document.MAINFORM.FA_BUYER_CNTC_FLG.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O');
            //Fieldlist = 'FA_CONTACT_NM;FA_CONTACT_TEL2;FST_CNTC_EMAIL;FST_CNTC_FAX;FA_CONTACT_EMAIL2';
            //Mappinglist = 'FA_BUYER_CONT_NM;FA_BUYER_CONT_TEL;FA_BUYER_CONT_MAIL;FA_BUYER_CONT_FAX;FA_BUYER_CONT_ADDR';

            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_buyer_contact_info_1', '1');
        } else {
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.change_fld_class = function() {
    try {
        if (document.MAINFORM.FA_BUYER_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.change_lmtamt_class = function() {
    try {
        /*
if(document.MAINFORM.FA_SERVICE_REQ.value=='1'){
    SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT,'M','N');
    SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE,'M');
}else if(document.MAINFORM.FA_SERVICE_REQ.value=='2'){
	    SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT,'O','N');
    SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE,'O');
	}
else {
    document.MAINFORM.FA_LMT_AMT.value=0;
    SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT,'P','N');
    SYT_ChangeFldClass(document.MAINFORM.FA_LMT_TYPE,'P','N');
   document.MAINFORM.FA_LMT_TYPE.value=''; keep original value from request
}*/
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.check_BUYER_LIMIT_DATE = function() {
    try {
        var strFieldList; // Utility Auto Fix Comments
        var strMappingList; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var strTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            //strTableName = 'STAT_MASTER';
            //strSQLWhere = "C_MAIN_REF='" + document.MAINFORM.FA_BUYER_ID.value + "'";
            //strFieldList = "FA_LMT_VAL_DT;FA_LMT_DUE_DT";
            //strMappingList = "FA_TEMP_IF_LMT_VAL_DT;FA_TEMP_IF_LMT_DUE_DT";
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_check_BUYER_LIMIT_DATE_2', '1');
            if (opener.document.MAINFORM.TRX_DT.value > document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value) {
                return confirm('The Date is later than buyer limit due date!');
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.check_buyer_indb = function() {
    try {
        document.MAINFORM.FA_TEMP5.value = '';
        SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_check_buyer_indb_3', '1', 'Y');
        if (document.MAINFORM.FA_TEMP5.value != null && document.MAINFORM.FA_TEMP5.value != '' && document.MAINFORM.FA_TEMP5.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_NM, 'This buyer already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.check_buyer_lmt = function() {
    try {
        var temp2; // Utility Auto Fix Comments
        temp2 = SYS_BeFloat(document.MAINFORM.FA_REMI_AMT1.value) - SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1' && temp2 < 0 && document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            alert('The Buyer limits is not enough!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.check_seller_indb = function() {
    try {
        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_check_seller_indb_4', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_SEL_NM, 'This seller already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.checkbuyer = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var curBuyerId; // Utility Auto Fix Comments
        var doBuyerId; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var orgRecId; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        // if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            state = parent.currentDo.getStatue();
            curBuyerId = document.MAINFORM.FA_BUYER_ID.value;
            arrayvalue = SYS_getRecords(parent.currentDo);
            orgRecId = -1;
            if ("E" == state) {

                orgRecId = SYS_getRecID(SYS_getEditedRecordForCurrentDo());
            }
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recID = SYS_getRecID(record);
                doBuyerId = SYS_getValFromRec(record, 'FA_BUYER_ID');
                if (doBuyerId == curBuyerId && orgRecId != recID) {
                    alert("Buyer Name [" + SYS_getValFromRec(record, "FA_BUYER_NM") + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.checkbuyer2 = function() {
    try {
        checkbuyer();
        check_buyer_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.checkseller = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var curBuyerId; // Utility Auto Fix Comments
        var doBuyerId; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var orgRecId; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            state = parent.currentDo.getStatue();
            curBuyerId = document.MAINFORM.FA_SEL_ID.value;
            arrayvalue = SYS_getRecords(parent.currentDo);
            orgRecId = -1;
            if ("E" == state) {
                orgRecId = SYS_getRecID(SYS_getEditedRecordForCurrentDo());
            }
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recID = SYS_getRecID(record);
                doBuyerId = SYS_getValFromRec(record, 'FA_SEL_ID');
                if (doBuyerId == curBuyerId && orgRecId != recID) {
                    alert("Seller Name [" + SYS_getValFromRec(record, "FA_SEL_NM") + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return check_seller_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.checkseller2 = function() {
    try {
        checkseller();
        check_seller_indb();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.exchangerate = function() {
    try {
        if (document.MAINFORM.FA_REMI_CCY1.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_REMI_CCY1.value, SYS_LOCAL_CCY, 'Booking Rate', 'FA_TEMP_RATE');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.getBuyerID = function() {
    try {
        var custName; // Utility Auto Fix Comments
        var where; // Utility Auto Fix Comments
        //added by Maria 20080918
        /*
custName=document.MAINFORM.FA_BUYER_NM.value;
custName=custName.trim();
	if(custName==""){
		return;
	}
where= "C_TRX_STATUS='M' and LOWER(FA_CUST_NM) LIKE '%" + custName.toLowerCase() + "%'";
*/
        SYS_InqCUBK('FADA_BUY_ID');
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.getSELID = function() {
    try {
        SYS_InqCUBK('FADA_SEL_ID');
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.get_buyer_lmt = function() {
    try {
        var FA_REMI_AMT1; // Utility Auto Fix Comments
        //SYS_GetTableDataByRule_S('SYF_FADA_CCAResponse_SYF_FADA_GET_BUYER_LIMIT_3', '1', 'Y');
        //FA_REMI_AMT1 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);

        //for SF, it should retrive the buyer's total sublimit of this business type, for RD, if without recource to supplier, the value should be the buyer's total sublimit of this business type, if with recource to supplier, this field value should be the supplier's total sublimit of this busieness type.

        if (document.MAINFORM.FACI_TYPE.value === 'SF' || document.MAINFORM.FACI_TYPE.value == 'RF' || (document.MAINFORM.FACI_TYPE.value === 'RD' && document.MAINFORM.FA_SERVICE_REQ.value !== '2')) {
            document.MAINFORM.CUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
            document.MAINFORM.RCUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
        } else if (document.MAINFORM.FA_SERVICE_REQ.value === '2') {
            document.MAINFORM.CUST_ID.value = document.MAINFORM.FA_SEL_ID.value;
            document.MAINFORM.RCUST_ID.value = document.MAINFORM.FA_SEL_ID.value;
        }

        SYS_GetTableDataByRule_S('Get_LM_CRED_LMT_STDS_CSFL', '1', 'Y');
        FA_REMI_AMT1 = document.MAINFORM.LM_CRED_LMT.value;
        document.MAINFORM.FA_REMI_CCY1.value = document.MAINFORM.ACC_TRX_CCY.value;
        document.MAINFORM.FA_REMI_AMT1.value = SYT_CCY_AMT(document.MAINFORM.ACC_TRX_CCY.value, FA_REMI_AMT1);
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.getbuyerinfo = function() {
    try {
        //SYS_GetCUBK('FA_BUYER_ID1','FA_BUYER_ID');
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('FADA_BUY_ID', 'FA_BUYER_ID', 'checkbuyer2');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.seller_contact_info = function() {
    try {
        var Fieldlist; // Utility Auto Fix Comments
        var Mappinglist; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SEL_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_ADDR, 'O');
            //Fieldlist = 'FA_CONTACT_NM;FA_CONTACT_TEL2;FST_CNTC_EMAIL;FST_CNTC_FAX;FA_CONTACT_EMAIL2';
            //Mappinglist = 'FA_SEL_CONT_NM;FA_SEL_CONT_TEL;FA_SEL_CONT_MAIL;FA_SEL_CONT_FAX;FA_SEL_CONT_ADDR';
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreement_seller_contact_info_5', '1');
        } else {
            document.MAINFORM.FA_SEL_CONT_NM.value = '';
            document.MAINFORM.FA_SEL_CONT_TEL.value = '';
            document.MAINFORM.FA_SEL_CONT_MAIL.value = '';
            document.MAINFORM.FA_SEL_CONT_FAX.value = '';
            document.MAINFORM.FA_SEL_CONT_ADDR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_CONT_ADDR, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = SYS_getValueFromMain('FA_BUSI_TYPE');
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.FA_PCA_REF.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.temp1 = function() {
    try {
        /*if(document.MAINFORM.FA_SERVICE_APPRVD.value=='1'){
document.MAINFORM.FA_TEMP1.value=(SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value)-SYS_BeFloat(document.MAINFORM.FA_TEMP2.value))/SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value);
document.MAINFORM.FA_TEMP1.value=SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY1.value,document.MAINFORM.FA_TEMP1.value);
}*/
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.COMBN_LMT_FLG_onchange = function(event) {
    try {
        Combined_Limit();

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        TEMP_AMT8();
        CAL_APPL_RATE();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_BUYER_CNTC_FLG_onchange = function(event) {
    try {
        buyer_contact_info();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_BUYER_ID_onchange = function(event) {
    try {
        getbuyerinfo();
        get_buyer_lmt();
        exchangerate();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_LMT_AMT_onchange = function(event) {
    try {
        /*
document.MAINFORM.FA_LMT_AMT.value=SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value,document.MAINFORM.FA_LMT_AMT.value);
temp1();
*/
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_REMI_CCY1_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}
csDOScreenProto.FA_SEL_CNTC_FLG_onchange = function(event) {
    try {
        seller_contact_info();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_SEL_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_SEL_ID.value != '') {
            SYS_GetCUBK('FADA_SEL_ID', 'FA_SEL_ID', 'checkseller2');
        }
        get_buyer_lmt();
        exchangerate();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_SERVICE_APPRVD_onchange = function(event) {
    try {
        change_lmtamt_class();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.FA_SERVICE_REQ_onchange = function(event) {
    try {
        CHECK_SERVICE_REQ();
        change_lmtamt_class();
        CAL_APPL_RATE();
        get_buyer_lmt();

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}

csDOScreenProto.MARGIN_PERC_onchange = function(event) {
    try {
        Margin_Percent();

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreement.js", e);
    }
}