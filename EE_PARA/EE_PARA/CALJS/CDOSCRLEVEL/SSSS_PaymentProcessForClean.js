"path:SCRN/DO/PaymentProcessForClean.jsp";

function CancelCheck() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function ConfirmBusinessCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function InitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function LoadDODataOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function PostconditionOnInit() {
    try {


    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function PostconditionOnUnload() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function PreInitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}

function PreconditionOnUnload() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}
window.onunload = OnLeave;

function OnLeave() {
    PreconditionOnUnload();
    SYS_OnLeave();
    PostconditionOnUnload();
}

function OnInitial() {
    PreconditionOnInit();
    SYS_OnInit();
    PostconditionOnInit();
}


function initFieldEvent() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentProcessForClean.js", e);
    }
}