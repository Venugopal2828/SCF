var nsAlert = NS.createNotification("Correspondence Mesg Alert");
var nscurrentuser = NS.getCurrentUserInfo();
NS.setNotifyTo(nsAlert,nscurrentuser);
var sSub = "Message is submitted: "+NS.getFieldValue("C_MAIN_REF");
NS.setNotifySubject(nsAlert,sSub);

var nsTask = NS.createNotification("Correspondence Mesg Task");
var nextReleaseUser = NS.getNextReleaseUsers();
NS.setNotifyTo(nsTask,nextReleaseUser);
var sSubject = "Waiting for approve: "+NS.getFieldValue("C_MAIN_REF");
NS.setNotifySubject(nsTask,sSubject);
var comp = NS.getCompanyInfo("C_UNIT_CODE");
NS.setNotifyPara(nsTask,"C_MAIN_REF",NS.getFieldValue("C_MAIN_REF"));
NS.setNotifyPara(nsTask,"C_UNIT_CODE",comp[0]);
NS.setNotifyPara(nsTask,"I_EVENT_TIMES",NS.getEventTimes());
NS.setNotifyPara(nsTask,"CATA_FUNC_ID",NS.getFuncId());