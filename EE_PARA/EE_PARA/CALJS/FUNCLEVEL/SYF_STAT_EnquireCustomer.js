var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.PostconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SYF_STAT_EnquireCustomer.js*PostconditionOnInit", e);
    }
}