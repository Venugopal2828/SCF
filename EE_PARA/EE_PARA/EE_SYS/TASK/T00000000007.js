/*
Author : Vamsi Krishnan
Proj: SBLC-CSUC
Function : Auto Renewal
*/

DV.writeLog("Batch Process Auto Renewal Started");

/* Updating Expiary date with New Expiary date */

var cEXPIRY_DT = DV.getFieldValue("EXPIRY_DT");
var cNOTIFY_DAYS = DV.getFieldValue("NOTIFY_DAYS");
var cNEW_EXPIRY_DT = DV.getFieldValue("NEW_EXPIRY_DT");
var cNRENEW_ADV_PERIOD = DV.getFieldValue("NRENEW_ADV_PERIOD");
var cNOTIFY_DATE = DV.getFieldValue("NOTIFY_DATE");
var cNRENEW_ADV_DATE = DV.getFieldValue("NRENEW_ADV_DATE");
var cISSUE_DT = DV.getFieldValue("ISSUE_DT");
DV.writeLog("Issue Date:" + cISSUE_DT);
DV.writeLog("cEXPIRY_DT:" + cEXPIRY_DT);
DV.writeLog("cNOTIFY_DAYS:" + cNOTIFY_DAYS);
DV.writeLog("cNEW_EXPIRY_DT:" + cNEW_EXPIRY_DT);
DV.writeLog("cNRENEW_ADV_PERIOD:" + cNRENEW_ADV_PERIOD);
DV.writeLog("cNOTIFY_DATE:" + cNOTIFY_DATE);
DV.writeLog("cNRENEW_ADV_DATE:" + cNRENEW_ADV_DATE);
var sFINAL_RESU = '';
if (cEXPIRY_DT != '') {

    var date1 = cEXPIRY_DT.substring(8, 10);
    var month1 = cEXPIRY_DT.substring(5, 7);
    var year1 = cEXPIRY_DT.substring(0, 4);

    var tempDate = new Date(year1, month1 - 1, date1);


    var date1 = tempDate.getDate();
    var year1 = tempDate.getFullYear();
    var date2 = cEXPIRY_DT.substring(0, 2);
    DV.writeLog("date2:" + date2);

    var tempDate = new Date(year1, month1 - 1, date1);

    DV.writeLog("date1" + date1);
    DV.writeLog("month1" + month1);
    DV.writeLog("year1" + year1);

    /* Start Cal for new EX-DT */
    var sFREQUENCY = DV.getFieldValue("FREQUENCY");

    if (sFREQUENCY == "MONTH") {
        var month1 = tempDate.getMonth() + 2;
        if (date1.toString().length == 1) {
            date1 = "0" + date1;
        } else if (month1 == 2 && (date1 >= 29)) {
            if (year1 % 4 == 0) date1 = 29;
            else date1 = 28;
        } else if ((month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11) && date1 > 30) {
            date1 = 30;
        }
        if (month1.toString().length == 1) {
            month1 = "0" + month1;
        }
    }
    if (sFREQUENCY == "QUARTER") {
        var month1 = tempDate.getMonth() + 4;
        if (date2.toString().length == 1) {
            date2 = "0" + date2;
        } else if (month1 == 2 && (date2 >= 29)) {
            if (year1 % 4 == 0) date2 = 29;
            else date2 = 28;
        } else if ((month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11) && date1 > 30) {
            date2 = 30;
        }
        if (tempDate.getMonth().toString().length == 1) {
            month1 = month1;
        }
    }
    if (sFREQUENCY == "SEMIANNUAL") {
        var month1 = tempDate.getMonth() + 7;
        if (date2.toString().length == 1) {
            date2 = "0" + date2;
        } else if (month1 == 2 && (date2 >= 29)) {
            if (year1 % 4 == 0) date2 = 29;
            else date2 = 28;
        } else if ((month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11) && date1 > 30) {
            date2 = 30;
        }
        if (tempDate.getMonth().toString().length == 1) {
            month1 = "0" + month1;
        }
    }
    if (sFREQUENCY == "ANNUAL") {
        var month1 = tempDate.getMonth() + 1;
        year1 = tempDate.getFullYear() + 1;
        if (tempDate.getDate().toString().length == 1) {
            date2 = "0" + date2;
        }
        if (tempDate.getMonth().toString().length == 1) {
            month1 = "0" + month1;
        }
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
    sFINAL_RESU = year1 + "-" + month1 + "-" + date1;
    DV.updateField("EXPIRY_DT", sFINAL_RESU);
    DV.writeLog("EXPIRY DATE:----------->" + sFINAL_RESU);
    /* End */
    /* Updating Renewal Days */
    var arrEXPIRY_DT = sFINAL_RESU.split("-");
    var arrISSUE_DT = cEXPIRY_DT.split("-");

    var yn1 = arrEXPIRY_DT[0];
    var mn1 = arrEXPIRY_DT[1] - 1;
    var dn1 = arrEXPIRY_DT[2];

    var yn2 = arrISSUE_DT[0];
    var mn2 = arrISSUE_DT[1] - 1;
    var dn2 = arrISSUE_DT[2];

    var newEDT = new Date(yn1, mn1, dn1, 12, 0, 0);
    var IDT = new Date(yn2, mn2, dn2, 12, 0, 0);

    var DSTAdjust = 0;
    var sdiff = Math.abs(newEDT.getTime() - IDT.getTime()) - DSTAdjust;
    var sdays = Math.ceil(sdiff / (1000 * 60 * 60 * 24));

    if (sdays <= 0) {
        var res = '';
        DV.updateField("RENEWAL_DAYS", res);
    } else if (sdays > 0) {
        DV.updateField("RENEWAL_DAYS", sdays);
    }
    DV.writeLog("RENEWAL_DAYS:----------->" + sdays);
}
/* Updating Notification Date */

if (cNOTIFY_DAYS != '') {
    var tNOTIFY_DAYS = cNOTIFY_DAYS;

    var date1 = sFINAL_RESU.substring(8, 10);
    var month1 = sFINAL_RESU.substring(5, 7);
    var year1 = sFINAL_RESU.substring(0, 4);

    var tempDate = new Date(year1, month1 - 1, date1);

    var date1 = tempDate.getDate();
    var year1 = tempDate.getFullYear();
    var date2 = cEXPIRY_DT.substring(0, 2);
    DV.writeLog("date2:" + date2);

    var tempDate = new Date(year1, month1 - 1, date1 - tNOTIFY_DAYS);

    var resdate = tempDate.getDate();
    var resyear = tempDate.getFullYear();
    var resmonth = tempDate.getMonth() + 1;

    DV.writeLog("tempDate----->" + tempDate);
    DV.writeLog("tempDate----->" + resdate);
    DV.writeLog("tempDate----->" + resyear);
    DV.writeLog("tempDate----->" + resmonth);


    if (resdate <= 9) {
        resdate = "0" + resdate;
    } else {
        resdate = resdate;
    }
    if (resmonth <= 9) {
        resmonth = "0" + resmonth;
    } else {
        resmonth = resmonth;
    }
    var tNOTIFY_DATE_FINAL = resyear + "-" + resmonth + "-" + resdate;
    DV.updateField("NOTIFY_DATE", tNOTIFY_DATE_FINAL);
    DV.writeLog("NOTIFY_DATE:----------->" + tNOTIFY_DATE_FINAL);
}
/* Updating Non-Renewal Advice Period */
if (cNRENEW_ADV_PERIOD != '') {

    var uNRENEW_ADV_PERIOD = cNRENEW_ADV_PERIOD;

    var date1 = sFINAL_RESU.substring(8, 10);
    var month1 = sFINAL_RESU.substring(5, 7);
    var year1 = sFINAL_RESU.substring(0, 4);

    var tempDate = new Date(year1, month1 - 1, date1);

    var date1 = tempDate.getDate();
    var year1 = tempDate.getFullYear();
    var date2 = cEXPIRY_DT.substring(0, 2);
    DV.writeLog("date2:" + date2);

    var tempDate = new Date(year1, month1 - 1, date1 - cNRENEW_ADV_PERIOD);

    var resdate = tempDate.getDate();
    var resyear = tempDate.getFullYear();
    var resmonth = tempDate.getMonth() + 1;

    DV.writeLog("tempDate----->" + tempDate);
    DV.writeLog("tempDate----->" + resdate);
    DV.writeLog("tempDate----->" + resyear);
    DV.writeLog("tempDate----->" + resmonth);



    if (resmonth < 9) {
        resmonth = "0" + resmonth;
    } else {
        resmonth = resmonth;
    }
    if (resdate < 9) {
        resdate = "0" + resdate;
    } else {
        resdate = resdate;
    }
    var uNRENEW_ADV_DATE_FINAL = resyear + "-" + resmonth + "-" + resdate;
    DV.updateField("NRENEW_ADV_DATE", uNRENEW_ADV_DATE_FINAL);
    DV.writeLog("NRENEW_ADV_DATE:----------->" + uNRENEW_ADV_DATE_FINAL);
}