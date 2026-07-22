"path:SCRN/DO/GeneralAccount.jsp";

function GeneralAccount_CancelCheck() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function GeneralAccount_ConfirmBusinessCall() {
    try {
        //for voucher C_TRANS_CODE
        SYT_Cal_C_TRANS_CODE();

        //for voucher description
        var sPrefix = "";
        var sSuffix = "";
        switch (SYS_MODULE_NAME) {
            case "IPLC":
                sPrefix = "IPLC12";
                break;
            case "IMCO":
                sPrefix = "IMCO05";
                break;
            case "GTEE":
                /**
		GTEE05->	DOK-200059 A
		PUFI05-> DOK-900020		
		ESCR02->	DOK-2008 A
		**/
                if (document.MAINFORM.C_MAIN_REF.value.length == 12) {
                    sPrefix = "GTEE05";
                } else {
                    if (document.MAINFORM.C_MAIN_REF.value.substr(0, 5) == "DOK-9") {
                        sPrefix = "PUFI05";
                    } else {
                        sPrefix = "ESCR02";
                    }
                }
                break;
            case "EPLC":
                sPrefix = "EPLC12";
                break;
            case "EXCO":
                sPrefix = "EXCO03";
                break;
            case "IWGT":
                sPrefix = "IWGT05";
                break;
            case "REIM":
                sPrefix = "REIM12";
                break;
            case "SYND":
                if (document.MAINFORM.C_MAIN_REF.value.substr(0, 1) == "S") {
                    sPrefix = "SYND07";
                } else {
                    sPrefix = "PART08";
                }
                break;
        }

        //var sql = " WHERE C_AC_NUMBER='" + document.MAINFORM.GA_AC_NO.value + "'";
        SYS_GetTableDataByRule_S('SSSS_GeneralAccount_GeneralAccount_ConfirmBusinessCall_0', '1', true);
        var sTEMP_GA_VCH = document.MAINFORM.TEMP_GA_VCH.value;
        if (sTEMP_GA_VCH.length > 0) {
            sSuffix = sTEMP_GA_VCH;
        } else {
            sSuffix = "I";
        }
        document.MAINFORM.GA_VCH_DESC.value = sPrefix + "NULLNULLNULL" + sSuffix;
        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function GeneralAccount_ConfirmBusinessCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function GeneralAccount_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function GeneralAccount_InitValues() {
    try {
        document.MAINFORM.GA_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.GA_BOOKING_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function InqCUBK(GA_AC_NO) {
    try {
        var sql = "";
        var GA_CCY = document.MAINFORM.GA_CCY.value;
        if (GA_CCY.length > 0) {
            sql = "C_CURRENCY = '" + GA_CCY + "'";
        } else {
            sql = "1==1";
        }
        SYS_InqCUBK_Sql('GA_AC_NO', sql);
    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function GeneralAccount_PostconditionOnInit() {
    try {


    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function GeneralAccount_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}

function PreInitValues() {
    try {} catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}


function GeneralAccount_initFieldEvent() {
    try {} catch (e) {
        DisExcpt("SSSS_GeneralAccount.js", e);
    }
}