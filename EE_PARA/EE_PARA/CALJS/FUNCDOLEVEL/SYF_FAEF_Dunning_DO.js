function SYF_FAEF_getDOdata_Tracing(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var duedt; // Utility Auto Fix Comments
        var flg1; // Utility Auto Fix Comments
        var flg2; // Utility Auto Fix Comments
        var flg3; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var subdays; // Utility Auto Fix Comments
        var trxdt; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            SYS_GetDataForDO_S('Get_Dunning_EF');
        } else {
            if (document.MAINFORM.TEMP_FLG16.value == '0') {
                SYF_FAEF_Check_TracingDays();
            } else if (document.MAINFORM.TEMP_FLG16.value == '3' || document.MAINFORM.TEMP_FLG16.value == '4') {
                SYS_GetDataForDO_S('Get_Dunning_Other1');
            } else {
                SYS_GetDataForDO_S('Get_Dunning_Other2');
            }
            num = SYS_getcurrRecordCount("Tracing");
            if (num > 0) {
                SYT_ChangeFldClass_New('TEMP_FLG16', 'P');
            } else {
                SYT_ChangeFldClass_New('TEMP_FLG16', 'M');
            }
            node = SYS_getDoByXpath("Tracing");
            arrayvalue = SYS_getRecords(node);
            mData = [];
            flg1 = document.MAINFORM.TEMP_FLG1;
            flg2 = document.MAINFORM.TEMP_FLG2;
            flg3 = document.MAINFORM.TEMP_FLG3;
            flg1.value = 'FALSE';
            flg2.value = 'FALSE';
            flg3.value = 'FALSE';
            document.MAINFORM.FA_TEMP_AMT10.value = 0;
            document.MAINFORM.FA_TEMP_AMT11.value = 0;
            document.MAINFORM.FA_TEMP_AMT12.value = 0;
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                trxdt = document.MAINFORM.TRX_DT.value;
                duedt = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
                document.MAINFORM.TEMP_DATE1.value = duedt;
                subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE1.name, document.MAINFORM.TRX_DT.name);
                FA_TEMP2 = subdays;
                if (subdays >= 5 && subdays <= 15) {
                    document.MAINFORM.FA_TEMP_AMT10.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value) + SYS_BeFloat(SYS_getValFromRec(record, 'FA_DOC_AMT'));
                    if (subdays >= 5 && subdays <= 15 && flg1.value == 'FALSE') {
                        flg1.value = 'TRUE';
                    }
                }
                if (subdays >= 16 && subdays <= 30) {
                    document.MAINFORM.FA_TEMP_AMT11.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value) + SYS_BeFloat(SYS_getValFromRec(record, 'FA_DOC_AMT'));
                    if (subdays >= 16 && subdays <= 30 && flg2.value == 'FALSE') {
                        flg2.value = 'TRUE';
                    }
                }
                if (subdays > 30) {
                    document.MAINFORM.FA_TEMP_AMT12.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value) + SYS_BeFloat(SYS_getValFromRec(record, 'FA_DOC_AMT'));
                    if (subdays > 30 && flg3.value == 'FALSE') {
                        flg3.value = 'TRUE';
                    }
                }
                mData.push(record);
            }
            SYS_reLoadGrid(node, mData);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_DO.js", e);
    }
}

function Tracing(node, recordId, status) {
    try {
        var FA_MSG_TEXT; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var objRow; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Tracing"); // Utility Auto Fix Comments
        document.MAINFORM.FA_MSG_TEXT.value = '';
        pre = "Refer to the a.m. buyer, please be advised that the following invoices have been overdue, please kindly do the collection and effect payment: ";
        sub = 'Thank you very much for your kind support. BEST REGS.';
        FA_MSG_TEXT = '';
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            FA_DOC_NO = SYS_getValFromRec(record, 'FA_DOC_NO');
            FA_DOC_CCY = SYS_getValFromRec(record, 'FA_DOC_CCY');
            FA_DOC_AMT = SYS_getValFromRec(record, 'FA_DOC_AMT');
            FA_MSG_TEXT = FA_MSG_TEXT + "\n inv." + FA_DOC_NO + " amount of (" + FA_DOC_CCY + ":" + FA_DOC_AMT + " )";
        }
        document.MAINFORM.FA_MSG_TEXT.value = pre + FA_MSG_TEXT + '\n' + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_DO.js", e);
    }
}

function Tracing_OnDeSelected(node, record, recordId) {
    try {
        var num; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Tracing");
        if (num > 0) {
            SYT_ChangeFldClass_New('TEMP_FLG16', 'P');
        } else {
            SYT_ChangeFldClass_New('TEMP_FLG16', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_DO.js", e);
    }
}

function Tracing_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_DO.js", e);
    }
}