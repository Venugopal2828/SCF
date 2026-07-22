"path:SCRN/Library/COMMON/MsgViewAll.lbi";

var csLbiCompProto = {};

csLbiCompProto.MsgViewAll = function() {
    try {
        var arr_result; // Utility Auto Fix Comments
        var arr_result_sub; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var nRecord; // Utility Auto Fix Comments
        var oRe_toolbar; // Utility Auto Fix Comments
        var oTrx_toolbar; // Utility Auto Fix Comments
        var sFldName; // Utility Auto Fix Comments
        var sSQL; // Utility Auto Fix Comments
        var sheight; // Utility Auto Fix Comments
        var showx; // Utility Auto Fix Comments
        var showy; // Utility Auto Fix Comments
        var swidth; // Utility Auto Fix Comments
        var url; // Utility Auto Fix Comments
        var wStyle; // Utility Auto Fix Comments
        //add by mary on 08.10.18 for all incoming msg view
        sFldName = "";
        sSQL = "";
        switch (SYS_MODULE_NAME) {
            case "EPLC":
            case "IPLC":
                sFldName = "DRAWING_REF";
                break;
            case "GTEE":
            case "IWGT":
            case "REIM":
                sFldName = "CLM_REF";
                break;
        }
        SYS_MULTI_DATA = "";
        if (document.MAINFORM.elements[sFldName] != null) {
            if (SYS_MODULE_NAME == "IPLC" && MAINFORM.elements["MAST_C_MAIN_REF"] != null) {
                sSQL = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "' OR " + "C_MAIN_REF=" + "'" + document.MAINFORM.elements[sFldName].value + "' OR " + "C_MAIN_REF=" + "'" + document.MAINFORM.elements["MAST_C_MAIN_REF"].value + "'" + " ORDER BY T_RECV_TIME";
                SYS_GetTableDataByRule_S("MsgViewAll_0", "1", true, true);
            } else if (SYS_MODULE_NAME == "EPLC") {
                sSQL = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "' OR " + "C_MAIN_REF=" + "'" + document.MAINFORM.elements[sFldName].value + "'" + " OR C_TAG_20=" + "'" + document.MAINFORM.LC_NO.value + "'" + " ORDER BY T_RECV_TIME";
                SYS_GetTableDataByRule_S("MsgViewAll_0", "2", true, true);
            } else {
                sSQL = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "' OR " + "C_MAIN_REF=" + "'" + document.MAINFORM.elements[sFldName].value + "'" + " ORDER BY T_RECV_TIME";
                SYS_GetTableDataByRule_S("MsgViewAll_0", "3", true, true);
            }
        } else {
            if (SYS_MODULE_NAME == "IPLC" && MAINFORM.elements["MAST_C_MAIN_REF"] != null) {
                sSQL = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "' OR " + "C_MAIN_REF=" + "'" + document.MAINFORM.elements["MAST_C_MAIN_REF"].value + "'" + " ORDER BY T_RECV_TIME";
                SYS_GetTableDataByRule_S("MsgViewAll_0", "4", true, true);
            } else if (SYS_MODULE_NAME == "EPLC") {
                sSQL = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "'" + " OR C_TAG_20=" + "'" + document.MAINFORM.LC_NO.value + "'" + " ORDER BY T_RECV_TIME";
                SYS_GetTableDataByRule_S("MsgViewAll_0", "5", true, true);

            } else {
                sSQL = "C_MAIN_REF=" + "'" + document.MAINFORM.C_MAIN_REF.value + "'" + " ORDER BY T_RECV_TIME";
                SYS_GetTableDataByRule_S("MsgViewAll_0", "6", true, true);
            }
        }

        //SYS_MULTI_DATA="";
        //SYS_GetTableMultiDataToArray_S("STP_IN_MSG_STO",sSQL,"C_STP_CODE;T_RECV_TIME;C_MESSAGE_TYPE;C_ADBIC_LC;C_TAG_20;C_MAIN_REF",true);
        if (SYS_MULTI_DATA == "") {
            alert("There is no incoming SWIFT message to view.");
            return;
        }
        nRecord = SYS_MULTI_DATA[0][1].length;
        if (nRecord == 0) {
            alert("There is no incoming SWIFT message to view.");
            return;
        }

        //organize result data
        arr_result = new Array();
        for (i = 0; i < nRecord; i++) { // Utility Auto Fix Comments
            arr_result_sub = new Array();
            for (j = 0; j < 6; j++) {
                arr_result_sub.push(SYS_MULTI_DATA[j][1][i]);
            }
            arr_result.push(arr_result_sub.join("|"));
        }
        MAINFORM.STP_INQALL_RESULT.value = arr_result.join("||");

        url = '../SCRN/SYST_MsgViewList.jsp';
        swidth = screen.width - 200;
        sheight = screen.height - 400;
        showx = (window.screen.availWidth - swidth);
        //showy = (window.screen.availHeight - sheight)/2;
        showy = 0;
        wStyle = "width=" + swidth + ",height=" + sheight + ",left=" + showx + ",top=" + showy + ",scrollbars=yes,status=no,resizable=yes";

        window.open(url, "", wStyle);

        /*
        oTrx_toolbar = parent.toolbar;
        oRe_toolbar = parent.parent.toolbar;
        if (oTrx_toolbar) {
            oTrx_toolbar.SYS_MakeButtonShow("onUnload");
        }
        if (oRe_toolbar) {
            oRe_toolbar.SYS_MakeButtonShow("onUnload");
        }

        oTrx_toolbar = EEHtml.getFrameWindow("eeToolbar", parent);
        oRe_toolbar = EEHtml.getFrameWindow("eeToolbar", parent.parent);
        if (oTrx_toolbar) oTrx_toolbar.SYS_MakeButtonShow("onUnload");
        if (oRe_toolbar) oRe_toolbar.SYS_MakeButtonShow("onUnload");
        */
    } catch (e) {
        DisExcpt("SSSS_SRC_MsgViewAll.js*MsgViewAll", e);
    }
}