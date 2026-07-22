DV.writeLog("Begin auto tracer");
DV.setTrxFunction("EXCO_AutoTracer");

var no_of_tracers = DV.toInteger(DV.getFieldValue("NO_OF_TRACERS" ) )+1;
DV.updateField("NO_OF_TRACERS" ,no_of_tracers);

var sSysDt = DV.getSysBusiDate();
DV.updateField("TRACER_DATE",sSysDt);
var nxt_tracer_dt = DV.calEndWorkingDate(DV.SYS_BANK_COUNTRY, sSysDt, 7, 'A', 'N', 'N');
DV.writeLog("nxt_tracer_dt=" + nxt_tracer_dt);
DV.updateField("NXT_TRACER_DT",nxt_tracer_dt);
DV.updateField("TRX_DT",sSysDt);
var user_id= DV.SYS_USER_ID;
DV.updateField("CLERK_ID",user_id);
DV.updateField("SEND_TRACER","Yes");


DV.writeLog("End auto tracer");