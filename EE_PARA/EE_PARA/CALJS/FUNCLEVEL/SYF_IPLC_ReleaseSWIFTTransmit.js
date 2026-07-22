var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        //For testing EE-10693 - Begin
        view_swfRel();
        //For testing EE-10693 - End
    } catch (e) {
        DisExcpt("SYF_IPLC_ReleaseSWIFTTransmit.js*PostconditionOnInit", e);
    }
}