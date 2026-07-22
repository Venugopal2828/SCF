"path:SCRN/o2m/COMM_EPRPECFEE.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.Check_Charge_Frequency = function() {
    try {
        if (document.MAINFORM.FEE_TP.value == 'ETFP' && document.MAINFORM.CHG_FREQ_CD.value != 'E') {
            alert("The Charge Frequency of this Fee Type should be set as 'Deducted from EPR proceeds'.");
            return false;
        } else if (document.MAINFORM.FEE_TP.value == 'AIP3' && document.MAINFORM.CHG_FREQ_CD.value != 'S') {
            alert("The Charge Frequency of this Fee Type should be set as 'Time of settlement'.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.Check_FEE_AMT = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FEE_TP_AMT.value) >= 100) {
            SYS_CheckError(document.MAINFORM.FEE_TP_AMT, 'Please input a valid Percentage');
            document.MAINFORM.FEE_TP_AMT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.Check_FEE_Type = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("PercentageBaseFees");
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            FEE_TP = SYS_getValFromRec(record, 'FEE_TP');
            if (FEE_TP == document.MAINFORM.FEE_TP.value) {
                SYS_CheckError(document.MAINFORM.FEE_TP, 'The Fee Type added is duplicated, please check.');
                document.MAINFORM.FEE_TP.value = "";
                return false;
            }
        }
        /*if (document.MAINFORM.FEE_TP.value == 'ETFP')
{
         document.MAINFORM.CHG_FREQ_CD.value = 'E';
         document.MAINFORM.FEE_UNIT.value = 'E';
}else if (document.MAINFORM.FEE_TP.value == 'AIP3')
{
         document.MAINFORM.CHG_FREQ_CD.value = 'S';
         document.MAINFORM.FEE_UNIT.value = 'S';
}else if (document.MAINFORM.FEE_TP.value == '')
{
         document.MAINFORM.CHG_FREQ_CD.value = '';
         document.MAINFORM.FEE_UNIT.value = '';
}*/
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.Check_FEE_Unit = function() {
    try {
        if (document.MAINFORM.FEE_TP.value == 'ETFP' && document.MAINFORM.FEE_UNIT.value != 'E') {
            alert("The Fee Type Unit of this Fee Type should be set as 'EPR Based'.");
            return false;
        } else if (document.MAINFORM.FEE_TP.value == 'AIP3' && document.MAINFORM.FEE_UNIT.value != 'S') {
            alert("The Fee Type Unit of this Fee Type should be set as 'Payment / Settlement Based'.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.MAX_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.MIN_AMT.value) < 0) {
            alert("Min. Amount or Max. Amount must larger than 0!");
            return false;
        }
        if (SYS_BeFloat(document.MAINFORM.MIN_AMT.value) > SYS_BeFloat(document.MAINFORM.MAX_AMT.value)) {
            alert("The Min. Amount should be less than Max. Amount, please check.");
            return false;
        }
        if (document.MAINFORM.FEE_ID.value == '' || document.MAINFORM.FEE_ID.value == 'null') {
            alert("The Fee Reference NO. can not be null!");
            return false;
        }
        if (!Check_FEE_Unit()) {
            return false;
        }
        if (!Check_Charge_Frequency()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.FEE_ID = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var dt; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 4);
        dt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = dt.substr(2, 2);
        document.MAINFORM.FEE_ID.value = 'TP' + UnitCode + year + ref;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo('COMM_INT_FEE', FEE_ID, '', 'COMM_INT_FEE', 'COMM_INT_FEE'); //generate sub ref id
        document.MAINFORM.PP_TP_ID.value = parent.SYS_getValueFromMain('PP_TP_ID'); //get Template ID form main page
        document.MAINFORM.BASE_CD.value = 'P'; //set BASE_CD as 'PercentageFee' to different from 'TransactionFee'
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var PP_BS_TP; // Utility Auto Fix Comments
        var TEMP1; // Utility Auto Fix Comments
        var arrOptionV; // Utility Auto Fix Comments
        var arrOptionV1; // Utility Auto Fix Comments
        var arrOptionV2; // Utility Auto Fix Comments
        var chargefreq; // Utility Auto Fix Comments
        var feetp; // Utility Auto Fix Comments
        var feetpunit; // Utility Auto Fix Comments
        var tempobj; // Utility Auto Fix Comments
        document.MAINFORM.CCY.value = SYS_getValueFromMain("CCY");
        feetp = document.MAINFORM.FEE_TP.value;
        //feetpunit=document.MAINFORM.FEE_UNIT.value;
        PP_BS_TP = SYS_getValueFromMain("PP_BS_TP");
        //chargefreq=document.MAINFORM.CHG_FREQ_CD.value;
        // filter the "Fee Type" and "Fee Type Unit" dropdown options if Template Type is buyer
        if (PP_BS_TP == 'B') {
            arrOptionV = [''];
            SYS_FilterOptions('FEE_TP', arrOptionV);
            document.MAINFORM.FEE_TP.value = feetp;
        }
        //filter the "Fee Type" and "Fee Type Unit" dropdown options if Template Type is supplier
        if (PP_BS_TP == 'S') {
            arrOptionV = ['ETFP', 'AIP3'];
            //arrOptionV1=['E','S'];
            //arrOptionV2=['E','S'];
            SYS_FilterOptions('FEE_TP', arrOptionV);
            //SYS_FilterOptions('FEE_UNIT',arrOptionV1);
            //SYS_FilterOptions('CHG_FREQ_CD',arrOptionV2);
            document.MAINFORM.FEE_TP.value = feetp;
            //document.MAINFORM.FEE_UNIT.value=feetpunit;
            //document.MAINFORM.CHG_FREQ_CD.value=chargefreq;
        }
        //add by baibin on 2011-9-2 for Protect all fileds when enquire PT
        tempobj = parent.document.MAINFORM["TEMP1"];
        if (tempobj != null) {
            TEMP1 = SYS_getValueFromMain("TEMP1");
            if (TEMP1 == 'PT') {
                SYT_DisableDivClass("Other");
            }
        }

    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.FEE_TP_onchange = function(event) {
    try {
        Check_FEE_Type();
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}

csDOScreenProto.FEE_TP_AMT_onchange = function(event) {
    try {
        Check_FEE_AMT();
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRPECFEE.js", e);
    }
}