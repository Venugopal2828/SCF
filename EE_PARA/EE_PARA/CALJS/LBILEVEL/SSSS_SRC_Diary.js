"path:SCRN/Library/Diary/Diary.lbi";

var csLbiCompProto = {};

csLbiCompProto.calendarclick = function() {
    try {
        calendar(EEHtml.getElementById("DIARY_DT"));
    } catch (e) {
        DisExcpt("SSSS_SRC_Diary.js", e);
    }
}

csLbiCompProto.onChangeDiary = function() {
    try {
        var DiaryValue; // Utility Auto Fix Comments
        DiaryValue = document.MAINFORM.DIARY_NARRATIVE.value.trim();
        if (DiaryValue == "") {
            SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'O');
            document.MAINFORM.DIARY_RELATED_REF.value = "";
            document.MAINFORM.DIARY_DT.value = "";
            //EEHtml.detachEventListener(document.getElementById("DIARY_DT"),"onclick",calendarclick);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'M');
            document.MAINFORM.DIARY_DT.value = SYS_BUSI_DATE;
            EEHtml.attachEventListener(EEHtml.getElementById("DIARY_DT"), "onclick", calendarclick);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Diary.js", e);
    }
}

csLbiCompProto.viewDiaryHistory = function() {
    try {
        var condition; // Utility Auto Fix Comments
        var diaryMainRef; // Utility Auto Fix Comments
        var dirMainRef; // Utility Auto Fix Comments
        var hei; // Utility Auto Fix Comments
        var mainIndex; // Utility Auto Fix Comments
        var mainRef; // Utility Auto Fix Comments
        var trxWin; // Utility Auto Fix Comments
        var unitCode; // Utility Auto Fix Comments
        var url; // Utility Auto Fix Comments
        var wStyle; // Utility Auto Fix Comments
        var wid; // Utility Auto Fix Comments
        diaryMainRef = "";
        unitCode = "";
        condition = "";
        mainRef = "";
        unitCode = SYS_BUSI_UNIT;
        if (unitCode.trim() == "") {
            alert("SYS_BUSI_UNIT is empty!");
            return;
        }
        mainRef = document.MAINFORM.C_MAIN_REF.value;
        if (mainRef.trim() == "") {
            alert("C_MAIN_REF is empty!");
            return;
        }
        mainIndex = mainRef.indexOf("-");
        if (mainIndex > 0) {
            dirMainRef = mainRef.split("-");
            diaryMainRef = dirMainRef[0];
            condition = ""; // Utility Auto Fix Comments
            condition = "&DIARY_C_MAIN_REF=" + diaryMainRef + "&C_UNIT_CODE=" + unitCode + "&C_MODU_NAME=" + SYS_MODULE_NAME + "&C_USER_NAME=" + SYS_USER_ID;
        } else {
            diaryMainRef = mainRef;
            condition = "&C_MAIN_REF=" + diaryMainRef + "&C_UNIT_CODE=" + unitCode + "&C_MODU_NAME=" + SYS_MODULE_NAME + "&C_USER_NAME=" + SYS_USER_ID;
        }


        wid = screen.width - 200;
        hei = screen.height - 300;
        wStyle = "toolbar=0,menubar=0,resizable=1,scrollbars=1,status=1,top=100,left=100,width=" + wid + ",height=" + hei;

        url = "../screen/CDRY_InqDiary_listview.jsp?" + condition;

        trxWin = openWin(url, "transacviewdiary", wStyle);
        trxWin.focus();
    } catch (e) {
        DisExcpt("SSSS_SRC_Diary.js", e);
    }
}