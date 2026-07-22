var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var notshowError = 'true';

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var C_UNIT_CODE = "";
        C_UNIT_CODE = SYS_BUSI_UNIT;
        SYT_setFldValue("FINC_UNIT_CODE", SYS_BUSI_UNIT);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_C_MSG_ID = function() {
    try {

        var TSU_TID = SYT_getFldValue("TSU_TID");
        var C_MSG_TYPE = "tsmt.013.001.03";
        var sTableName = "EXIMSYS.TSU_MSGS";
        var sSQLWhere = "C_TID=\'" + TSU_TID + "\' AND C_MSG_TYPE=\'" + C_MSG_TYPE + "\' AND C_UNIT_CODE=\'" + SYS_BUSI_UNIT + "\'";
        var sFieldList = "C_MSG_ID";
        var sMappingList = "C_MSG_ID";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";

        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', notshowError);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //Edit on 2013/8/15 for the screen change no DO anymore
        /*if (SYS_FUNCTION_TYPE =='PM')
{ 
	SYS_GetDataForDO_S('getdata_tsu010');
	parent.getDOdataFromSes('N'); 
}*/
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_hideObj("Global Rejection Reason");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_PO_INFO = function() {
    try {

        var sTableName = "TSUM_GOODS_R2";
        var sSQLWhere = "C_MAIN_REF=\'" + document.MAINFORM.C_MAIN_REF.value + "\' AND C_UNIT_CODE=\'" + SYS_BUSI_UNIT + "\'";
        var sFieldList = "TSU_LINE_TTL_AMT;TSU_PO_DT;TSU_CCY";
        var sMappingList = "TSU_LINE_TTL_AMT;TSU_PO_DT;TSU_TTL_CCY";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', notshowError);
        document.MAINFORM.TSU_LINE_TTL_AMT.value = SYT_CCY_AMT(document.MAINFORM.TSU_TTL_CCY.value, document.MAINFORM.TSU_LINE_TTL_AMT.value);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var ACCPT = document.MAINFORM.TSU_ACCEPT_MISMATCH.value;
        if (ACCPT == 'Y') {
            var Prefix = 'MMA';
            document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
        } else if (ACCPT == 'N') {
            var Prefix = 'MMR';
            document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef()");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_Get_C_MSG_ID();
        SYF_TSUM_Get_PO_INFO();
        SYF_TSUM_Get_INV_INFO();
        document.MAINFORM.TSU_ACCEPT_MISMATCH.value = '';
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value.substr(0, 4);
        if (C_MAIN_REF == "OCBC") {
            SYF_TSUM_Get_014_Msg_ID();
        } else {
            SYF_TSUM_Get_017_MsgID();
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_ViewMag = function(msgid) {
    try {

        var wid = screen.width - 5;
        var hei = screen.height - 5;
        var winStyle = "toolbar=0,menubar=0,resizable=1,scrollbars=1,status=1,left=0,top=0,width=" + wid + ",height=" + hei;
        var url = "../servlets/WSSTSUInquireMsg?C_MSG_ID=" + msgid + "&type=message";
        openWin(url, "inqMsg", winStyle);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_showCancelButton = function() {
    try {

        parent.parent.toolbar.SYS_MakeButtonShow("_cancel");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_INV_INFO = function() {
    try {

        var sTableName = "TSUM_MASTER";
        var C_FUNC_SHORT_NAME = "tsmt.017.001.03A";
        var sSQLWhere = "TSU_TID=\'" + document.MAINFORM.TSU_TID.value + "\' AND C_UNIT_CODE=\'" + SYS_BUSI_UNIT + "\' AND C_FUNC_SHORT_NAME=\'" + C_FUNC_SHORT_NAME + "\'";
        var sFieldList = "tsu_comm_amt;tsu_comm_dt;TSU_CCY;tsu_comm_ref";
        var sMappingList = "TSU_COMM_AMT;TSU_COMM_DT;TSU_CCY;TSU_COMM_REF";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', notshowError);
        document.MAINFORM.TSU_COMM_AMT.value = SYT_CCY_AMT(document.MAINFORM.TSU_CCY.value, document.MAINFORM.TSU_COMM_AMT.value);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Onclick_View013 = function() {
    try {

        var msgid = document.MAINFORM.TSU_DS_RP_ID.value;
        SYF_TSUM_ViewMag(msgid);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_017_MsgID = function() {
    try {

        var TSU_TID = document.MAINFORM.TSU_TID.value;
        var C_MSG_TYPE = "tsmt.017.001.03";
        var sTableName = "EXIMSYS.TSU_MSGS";
        var sSQLWhere = "C_TID=\'" + TSU_TID + "\' AND C_MSG_TYPE=\'" + C_MSG_TYPE + "\' AND C_UNIT_CODE=\'" + SYS_BUSI_UNIT + "\'";
        var sFieldList = "C_MSG_ID";
        var sMappingList = "TSU_TEMP";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";

        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', notshowError);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Onclick_View017 = function() {
    try {

        var msgid = document.MAINFORM.TSU_TEMP.value;
        SYF_TSUM_ViewMag(msgid);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_ActionFlag = function() {
    try {

        var ACTION_FLG = document.MAINFORM.TSU_ACCEPT_MISMATCH.value;
        if (ACTION_FLG == "Y") {
            SYT_hideObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.className = "CHAR_P";
            document.MAINFORM.TSU_REJT_RSN2.value = "";
        } else if (ACTION_FLG == "N") {
            SYT_DisObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.className = "CHAR_M";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_014_Msg_ID = function() {
    try {

        var TSU_TID = document.MAINFORM.TSU_TID.value;
        var C_MSG_TYPE = "tsmt.014.001.03";
        var sTableName = "EXIMSYS.TSU_MSGS";
        var sSQLWhere = "C_TID=\'" + TSU_TID + "\' AND C_MSG_TYPE=\'" + C_MSG_TYPE + "\' AND C_UNIT_CODE=\'" + SYS_BUSI_UNIT + "\'";
        var sFieldList = "C_MSG_ID";
        var sMappingList = "TSU_TEMP";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";

        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', notshowError);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_ACCEPT_MISMATCH_onchange = function(event) {
    try {
        SYF_TSUM_ActionFlag();
        SYF_TSUM_getTSURef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessDataSetMatchReport.js", e);
    }
}