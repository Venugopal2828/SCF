/**
 * $Id$
 *
 * Get doc details for select a record from TRX_IMAGES_DTAL table
 */
DV.writeLog("Start Server Side Script: getDocDtal");

var sImgIndx = DV.getParamFieldValue("DOC_LIST");
var sFlds = DV.addFieldList(null, "C_UNIT_CODE");
sFlds = DV.addFieldList(sFlds, "I_EVENT_TIMES");
sFlds = DV.addFieldList(sFlds, "C_UPLOAD_TYPE");
sFlds = DV.addFieldList(sFlds, "C_IMG_DOC_TYPE");
sFlds = DV.addFieldList(sFlds, "C_UPLOADED_STATE");
sFlds = DV.addFieldList(sFlds, "T_UPLOAD_TIME");
sFlds = DV.addFieldList(sFlds, "C_IMG_FILE_TYPE");

var sSrcTb = "TRX_IMAGES_DTAL";
var sSQLCond = DV.addSQLCondition(null, "C_IMG_INDX",sImgIndx);
var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);

//getBusiUnit is used to get company group
//getSysUnit is used to get current record's unit code
//var sCompId = DV.getBusiUnit(); 
var sUnitCode = DV.getSysUnit();
var sEventTimes = String(DV.getDBFieldValue(RS, "I_EVENT_TIMES"));
var sUploadType = String(DV.getDBFieldValue(RS, "C_UPLOAD_TYPE"));
var sImgDocType = String(DV.getDBFieldValue(RS, "C_IMG_DOC_TYPE"));
var sUploadState = String(DV.getDBFieldValue(RS, "C_UPLOADED_STATE"));
var sUploadTime = String(DV.getDBFieldValue(RS, "T_UPLOAD_TIME"));
var sImgFileType=String(DV.getDBFieldValue(RS, "C_IMG_FILE_TYPE"));

var amp = "&";
var formKeyValue= amp + "C_UNIT_CODE=" + sUnitCode +
                  amp + "I_EVENT_TIMES=" +  sEventTimes +
                  amp + "C_IMG_INDX=" + sImgIndx +
                  amp + "C_UPLOAD_TYPE=" + sUploadType +
                  amp + "C_IMG_DOC_TYPE=" + sImgDocType +
                  amp + "C_UPLOADED_STATE=" + sUploadState +
                  amp + "C_IMG_FILE_TYPE=" + sImgFileType +
                  amp + "T_UPLOAD_TIME="+ sUploadTime;

DV.updateTrxFieldValue("formKeyValue", formKeyValue);

DV.writeLog("End Server Side Script: getDocDtal");