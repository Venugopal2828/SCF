
DV.writeLog("Batch Process Auto Renewal Started");

/*Generate  a new eloan takedown with New due date and amount*/

var cDUE_DT = DV.getFieldValue("IA_D_LAST_ACCDATE");

var cOriginal_DT = DV.getFieldValue("IA_D_DUE_DATE");

DV.writeLog("cDUE_DT:" + cDUE_DT);

if (cDUE_DT != '') {

    var date1 = cDUE_DT.substring(8, 10);
    var month1 = cDUE_DT.substring(5, 7);
    var year1 = cDUE_DT.substring(0, 4);

    var tempDate = new Date(year1, month1 - 1, date1);


    var date1 = tempDate.getDate();
    var year1 = tempDate.getFullYear();
    var date2 = cDUE_DT.substring(0, 2);
    DV.writeLog("date2:" + date2);

    var tempDate = new Date(year1, month1 - 1, date1);

    DV.writeLog("date1" + date1);
    DV.writeLog("month1" + month1);
    DV.writeLog("year1" + year1);

    /* Start Cal for new EX-DT */

        var month1 = tempDate.getMonth() + 1;
        year1 = tempDate.getFullYear() + 1;
        if (tempDate.getDate().toString().length == 1) {
            date2 = "0" + date2;
        }
        if (tempDate.getMonth().toString().length == 1) {
            month1 = "0" + month1;
        }
    
    if (month1 > 12) {
        var tempmonth = month1 - 12;
        if (tempmonth < 12)
            var tempyear = year1 + 1;
        year1 = tempyear;
        month1 = tempmonth;
    }
    if (month1.toString().length == 1) {
        month1 = "0" + month1;
    }
    var sFINAL_RESU = year1 + "-" + month1 + "-" + date1;
    DV.updateField("IA_D_LAST_ACCDATE", sFINAL_RESU);
    DV.writeLog("IA_D_LAST_ACCDATE:----------->" + sFINAL_RESU);
      /* update the eloan ref */
  }
var c_main_ref = DV.getFieldValue("IA_C_REF_NO");
var i_event_times = DV.getFieldValue("I_EVENT_TIMES");
         var ref = DV.toFloat(i_event_times)+ 1; 
        DV.writeLog("I_EVENT_Times:----------->" + ref);
         ref=c_main_ref+"-"+ref;
   DV.writeLog("reference:----------->" + ref);
		DV.updateField("ACC_DOC_NO", ref);
  
    /* End */
var AMT = DV.getFieldValue("IA_Y_TRX_AMT");
        DV.writeLog("TRX AMT:----------->" + AMT);
		DV.updateField("TEMP_AMT1", AMT);
var bus_dt = DV.SYS_BUSI_DATE;
DV.writeLog("bus_dt:----------->" + bus_dt);
DV.updateField("IA_D_CREATE_DATE", bus_dt);
DV.updateField("IA_D_TRX_VALDATE", bus_dt);
  /*call function to generate gapi*/
    DV.setTrxFunction("AmortizationAmendRBHA");
    DV.writeLog("-----Set Trx Function-----");
 