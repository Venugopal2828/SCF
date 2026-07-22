"path:SCRN/DO/GeneralAccountHeader.jsp";

function GeneralAccountHeader_CancelCheck() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_ConfirmBusinessCheck() {
    try {
        var gTargetDO = SYS_GetObjByDoName('GeneralAccountHeader');
        var len = gTargetDO.length;
        for (var i = 0; i < len; i++) {
            var _Drdo = gTargetDO[i].getDoByName("GeneralAccount");
            if (_Drdo.length == 0) {
                alert("Please enter Accounting entries");
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_InitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_PostconditionOnInit() {
    try {


    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}

function GeneralAccountHeader_initFieldEvent() {
    try {} catch (e) {
        DisExcpt("SSSS_GeneralAccountHeader.js", e);
    }
}