DV.writeLog("-----RPFM_PartAutoTracer Start-----");
//DV.setTrxFunction("RPFM_AutoTracer");
//var sysdate = DV.getSysBusiDate();
//var tracer_no = DV.toInteger(DV.getFieldValue("TRACER_NO")) + 1;
//DV.updateField("TRACER_DATE", sysdate);
//DV.updateField("TRACER_NO", tracer_no);
//DV.writeLog("-----TRACER_NO =" + tracer_no);




var logKey = new Date().getTime() + "-";
DV.writeLog(logKey + "Begin Auto Release");
DV.setTrxFunction("RPFM_AutoTracer");

DV.SYS_getCUBK("FOR_BATCH_MT799_SEND_TO_BANK_SW_ADD", "SEND_TO_BANK_SW_ADD");
DV.SYS_getCUBK("SEND_TO_BANK_ID", "SEND_TO_BANK_ID");

DV.writeLog(logKey + "1");

var string1;
var string2;
var string3;
var str;
string1 = "ATTN:" + DV.getFieldValue('GRANTOR_NM') + "\nRE MATURITY OF RISK PARTICIPATION TRANSACTION \nPLEASE BE INFORMED THAT THE FOLLOWING FUNDED RISK PARTICIPATION WILL BE MATURED: \n";
string2 = "OUR REF NO:" + DV.getFieldValue('C_MAIN_REF') + "\nYOUR REF NO:" + DV.getFieldValue('GRANTOR_ID') + "\nPARTICIPATION AMOUNT:" + DV.getFieldValue('PART_RISK_CCY') + DV.getFieldValue('PART_RISK_AMT') + "\nPARTICIPATION START DATE:" + DV.getFieldValue('PART_START_DT') + "\nTENOR:" + DV.getFieldValue('PART_DAYS') + "DAYS \nMATURITY DATE:" + DV.getFieldValue('PART_MAT_DT') + "\n";
string3 = "KINDLY REMIT THE FUND TO OUR ACCOUNT NO XXXXX ACCOUNT NAME XXXXXX ON MATURITY DATE. \nTHANK YOU. \n\nREGARDS, \nBank Mandiri";
str = string1 + string2 + string3;


DV.writeLog(logKey + "2");

var nGRANTOR_BK_SW = DV.getFieldValue("GRANTOR_BK_SW");
var nC_MAIN_REF = DV.getFieldValue("C_MAIN_REF");

DV.updateField('SEND_TO_BK_SW_ADD', nGRANTOR_BK_SW);
DV.updateField('BANK_N90_REF_20', nC_MAIN_REF);
DV.updateField('BANK_N90_REF_21', nC_MAIN_REF);
DV.updateField('BANK_NARR_TAG_79', str);
DV.updateField('SEND_TO_BK_SW_TAG', "A");
DV.updateField('MESG_TYPE_BANK', "MT799");

DV.writeLog(logKey + "3");

DV.updateField("TRACER_DATE", DV.SYS_BUSI_DATE);
DV.writeLog(logKey + "4");

var Tracer_time;
Tracer_time = DV.getFieldValue("TRACER_NO") + 1;
DV.updateField("TRACER_NO", Tracer_time);
DV.writeLog(logKey + "5");
DV.updateField('ISSUE_FLAG', "Y");
DV.writeLog(logKey + "End Auto Release");

DV.writeLog("-----RPFM_PartAutoTracer End-----");