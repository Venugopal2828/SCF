var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var amd_tp = document.MAINFORM.AMD_TYPE.value;
        if (amd_tp == 'Freeze') {
            document.MAINFORM.CLS_FLG.value = 'Yes';
            document.MAINFORM.TEMP_CHK_FLG.value = 'No';
        } else {
            document.MAINFORM.CLS_FLG.value = 'No';
            document.MAINFORM.TEMP_CHK_FLG.value = 'Yes';
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*UpdateCLS_FLG", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.TEMP_CHK_FLG.value = document.MAINFORM.CLS_FLG.value;

        SYF_TRCO_RefreshOptionsForAmdTp();
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_TRCO_DiableDIV();
        SYF_TRCO_RefreshOptionsForAmdTpEC();

    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRCO_DiableDIV = function() {
    try {
        var amd_tp = document.MAINFORM.AMD_TYPE.value;
        if (amd_tp == 'Freeze') {
            SYT_DisableDivClass('A_div');
            SYT_EnableFields(document.MAINFORM.AMD_TYPE);
        }
        if (amd_tp != 'Freeze') {
            SYT_EnableDivClass('A_div');
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*SYF_TRCO_DiableDIV", e);
    }
}

csFuncLevelProto.SYF_TRCO_RefreshOptionsForAmdTp = function() {
    try {
        var CLS_FLG = document.MAINFORM.CLS_FLG.value;
        var TEMP_CHK_FLG = document.MAINFORM.TEMP_CHK_FLG.value;
        if (CLS_FLG == 'Yes' ) {
            SYT_RemoveOption(document.MAINFORM.AMD_TYPE.name, "Freeze");
            SYT_RemoveOption(document.MAINFORM.AMD_TYPE.name, "Update");
        }
        if (CLS_FLG == 'No' ) {
            SYT_RemoveOption(document.MAINFORM.AMD_TYPE.name, "Reopen");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*SYF_TRCO_RefreshOptionsForAmdTp", e);
    }
}

csFuncLevelProto.SYF_TRCO_RefreshOptionsForAmdTpEC = function() {
    try {
    	
        var TEMP_CHK_FLG = document.MAINFORM.TEMP_CHK_FLG.value;
        if(SYS_FUNCTION_TYPE=='EC' ){
        if (TEMP_CHK_FLG=='Yes' ) {
            SYT_RemoveOption(document.MAINFORM.AMD_TYPE.name, "Freeze");
            SYT_RemoveOption(document.MAINFORM.AMD_TYPE.name, "Update");
        }
        if (TEMP_CHK_FLG=='No' ) {
            SYT_RemoveOption(document.MAINFORM.AMD_TYPE.name, "Reopen");
        }
      }
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*SYF_TRCO_RefreshOptionsForAmdTp", e);
    }
}

csFuncLevelProto.FLD_TRCO_AMD_TYPE_onchange = function(event) {
    try {
        SYF_TRCO_DiableDIV();
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBranch.js*FLD_TRCO_AMD_TYPE_onchange", e);
    }
}