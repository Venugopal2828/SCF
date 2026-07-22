var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYS_GetTableDataByRule_S('Get_PO_Loan', '1', 'Y');
        SYS_GetTableDataByRule_S('Get_PO_Payment', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_POMM_EnquirePO.js*PostconditionOnInit", e);
    }
}