var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        //EEHtml.getElementById('B').style.display = "none";
        //EEHtml.getElementById('G').style.display = "none";
        SYS_GetTableDataByRule_S('SYF_FADA_EFPricing_SYF_FADA_Get_Pricing_Info_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_FADA_InquireSBR.js*PostconditionOnInit", e);
    }
}