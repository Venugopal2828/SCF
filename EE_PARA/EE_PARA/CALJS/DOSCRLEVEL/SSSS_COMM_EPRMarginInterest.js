"path:SCRN/o2m/COMM_EPRMarginInterest.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRMarginInterest.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (SYS_DO_XPATH == 'SupplierMarginInterest' && (SYS_BeFloat(document.MAINFORM.MIN_AMT.value) > SYS_BeFloat(document.MAINFORM.MAX_AMT.value))) {
            alert("Min Amount can not be greater than Max Amount.");
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRMarginInterest.js", e);
    }
}

csDOScreenProto.INT_CAL_ID = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 4);
        sub = 'MG';
        document.MAINFORM.INT_CAL_ID.value = UnitCode + ref + sub;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRMarginInterest.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo('COMM_INT_FEE', INT_CAL_ID, '', ''); //generate sub ref id
        document.MAINFORM.PP_TP_ID.value = parent.SYS_getValueFromMain('PP_TP_ID'); //get Template ID from main page
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRMarginInterest.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var BaseFrtTp; // Utility Auto Fix Comments
        var PP_BS_TP; // Utility Auto Fix Comments
        var arrOptionV; // Utility Auto Fix Comments
        document.MAINFORM.CCY.value = SYS_getValueFromMain("CCY");
        PP_BS_TP = SYS_getValueFromMain("PP_BS_TP");
        BaseFrtTp = document.MAINFORM.BASE_FRT_TP.value;
        //filter the Margin Type dropdown options if Template Type is Buyer
        if (PP_BS_TP == 'B') {
            arrOptionV = ['1'];
            SYS_FilterOptions('BASE_FRT_TP', arrOptionV);
            document.MAINFORM.BASE_FRT_TP.value = BaseFrtTp;
        }
        //filter the Margin Type dropdown options if Template Type is Supplier
        if (PP_BS_TP == 'S') {
            arrOptionV = ['2']; // Utility Auto Fix Comments
            SYS_FilterOptions('BASE_FRT_TP', arrOptionV);
            document.MAINFORM.BASE_FRT_TP.value = BaseFrtTp;
        }
        //Hide "MAX_AMT" and "MIN_AMT" fields in "MarginInterest" gird of Buyer Pricing Template
        if (SYS_DO_XPATH == 'MarginInterest') {
            SYT_hideObj("MinMax");
            document.MAINFORM.MAX_AMT.value = 0;
            document.MAINFORM.MIN_AMT.value = 0;
        }

    } catch (e) {
        DisExcpt("SSSS_COMM_EPRMarginInterest.js", e);
    }
}

csDOScreenProto.PreInitValues = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_EPRMarginInterest.js", e);
    }
}