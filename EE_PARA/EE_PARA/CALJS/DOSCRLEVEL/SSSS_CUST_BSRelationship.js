"path:SCRN/o2m/CUST_BSRelationship.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.CheckB_S_RELN_ID = function() {
    try {
        var SUPLR_ID; // Utility Auto Fix Comments
        var SUPLR_REF; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var rest; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        // check if the supplier has existed in the Grid
        node = SYS_getDoByXpath("BSRelationship");
        num = SYS_getcurrRecordCount("BSRelationship");
        arrayvalue = SYS_getRecords(node);
        state = parent.currentDo.getStatue();
        if (state == 'A') {
            if (num > 0) {
                for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                    record = arrayvalue[i];
                    SUPLR_ID = SYS_getValFromRec(record, 'SUPLR_ID');
                    /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 add_S */
                    SUPLR_REF = SYS_getValFromRec(record, 'SUPLR_REF');
                    /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 add_E */
                    if (document.MAINFORM.SUPLR_ID.value == SUPLR_ID) {
                        SYS_CheckError(document.MAINFORM.SUPLR_ID, 'This relationship with the supplier has already existed you can change one!');
                        return false;
                    }
                    /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 add_S */
                    if (document.MAINFORM.SUPLR_REF.value == SUPLR_REF) {
                        SYS_CheckError(document.MAINFORM.SUPLR_REF, 'This relationship with the supplier reference has already existed you can change one!');
                        return false;
                    }
                    /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 add_E */
                    if (document.MAINFORM.SUPLR_ID.value == 'null' || document.MAINFORM.SUPLR_ID.value == '') {
                        SYS_CheckError(document.MAINFORM.SUPLR_ID, 'Please add supplier!');
                        return false;
                    }

                }
                //return true;
            } else {
                if (document.MAINFORM.SUPLR_ID.value == 'null' || document.MAINFORM.SUPLR_ID.value == '') {
                    SYS_CheckError(document.MAINFORM.SUPLR_ID, 'Please add supplier!');
                    return false;
                }
            }
            rest = CheckDupByTable();
            if (rest != 'N') {
                SYS_CheckError(document.MAINFORM.SUPLR_ID, rest);
                return false;
            }
        } else if (state == 'E') {
            /**
for(i=0,len=arrayvalue.length;i<len;i++)
{
	record = arrayvalue[i];
	SUPLR_ID=SYS_getValFromRec(record,'SUPLR_ID');
	if (document.MAINFORM.SUPLR_ID.value==document.MAINFORM.TEMP1.value)
	{
	SYS_CheckError(document.MAINFORM.SUPLR_ID,'No any edit,if you sure please click Close to quit!');
         return false;
         }
	else if(document.MAINFORM.SUPLR_ID.value==SUPLR_ID)
	{
	SYS_CheckError(document.MAINFORM.SUPLR_ID,'This relationship with the supplier has already existed you can change one!');
         return false;	
	}	
}
*/
            return true;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.CheckDupByTable = function() {
    try {
        var strCustID; // Utility Auto Fix Comments
        var strSupID; // Utility Auto Fix Comments
        var strSupRef; // Utility Auto Fix Comments
        var url; // Utility Auto Fix Comments
        strCustID = document.MAINFORM.BUYR_ID.value;
        strSupID = document.MAINFORM.SUPLR_ID.value;
        /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 add_S */
        strSupRef = document.MAINFORM.SUPLR_REF.value;
        /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 add_E */
        /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 edit_S */
        url = "../servlets/WSTrxManager?_TRX_STATUS=SCF_CS&_CS_ACT_TYPE=SCF_CIM_CHK_DUP&C_CUST_ID=" + strCustID + "&C_SUPLY_ID=" + strSupID + "&C_SUPLR_REF=" + strSupRef;
        /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 edit_S */
        sendRequestByAjaxPost(url, false, callBack, null, null);
        return window["_CIMCheckDupResult"];
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;

        /*
if(!CheckB_S_RELN_ID()){
return false;
}
*/
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.GET_B_S_RELN_ID = function(ref) {
    try {
        var dt; // Utility Auto Fix Comments
        var state; // Utility Auto Fix Comments
        var unitCode; // Utility Auto Fix Comments
        state = parent.currentDo.getStatue();
        if (state == 'A') {
            unitCode = SYS_BUSI_UNIT;
            unitCode = unitCode.substr(0, 4);
            dt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
            year = dt.substr(2, 2);
            document.MAINFORM.B_S_RELN_ID.value = unitCode + year + "BSR" + ref;
        }
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo('BRSR', GET_B_S_RELN_ID, '', '');
        document.MAINFORM.RELN_STATUS.value = 'A';
        document.MAINFORM.BUYR_ID.value = parent.SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.BUYR_NM.value = parent.SYS_getValueFromMain('CUST_NM');
        document.MAINFORM.C_MAIN_REF.value = parent.SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.BUYR_SCFNET_ID.value = parent.SYS_getValueFromMain('CUST_BOS_ID');
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.TEMP1.value = document.MAINFORM.SUPLR_ID.value;

    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.SUPLR_ID = function() {
    try {
        SYS_GetCUBK('SUPLR_ID', 'C_MAIN_REF', 'CheckB_S_RELN_ID()');
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.SUPLR_ID_onBlur = function() {
    try {
        SYS_GetCUBK('SUPLR_ID_EXISTED', 'SUPLR_ID', 'CheckB_S_RELN_ID()');
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.callBack = function() {
    try {
        var result; // Utility Auto Fix Comments
        var rootElems; // Utility Auto Fix Comments
        var xml; // Utility Auto Fix Comments
        xml = xmlhttp.responseXML;
        rootElems = xml.getElementsByTagName("root")[0];
        result = "";
        if (rootElems != null) {
            result = rootElems.getAttribute("result");
        }
        window["_CIMCheckDupResult"] = result;
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.C_MAIN_REF_onchange = function(event) {
    try {
        SUPLR_ID();
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.SUPLR_ID_onchange = function(event) {
    try {
        SUPLR_ID_onBlur();
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}

csDOScreenProto.SUPLR_ID_onclick = function(event) {
    try {
        var where; // Utility Auto Fix Comments
        /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 edit_S (add SYS_BUSI_UNIT) */
        where = "C_MAIN_REF<>'" + document.MAINFORM.C_MAIN_REF.value + "' AND (CUST_TP='SP' OR CUST_TP='BH') AND (SUPLR_TP='B' OR (UPLOAD_BUYR_ID='" + document.MAINFORM.C_MAIN_REF.value + "' AND SUPLR_TP='O')) AND SUPLR_STATUS='A'";
        /*@author TonyJiang @date 2011-12-08 @ref ISC-EE-0233 edit_E */
        SYS_InqCUBK_Sql('SUPLR_ID', where);
    } catch (e) {
        DisExcpt("SSSS_CUST_BSRelationship.js", e);
    }
}