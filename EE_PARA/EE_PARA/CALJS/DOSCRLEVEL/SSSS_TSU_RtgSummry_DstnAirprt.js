"path:SCRN/DO/TSU_RtgSummry_DstnAirprt.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.CheckDstnAir = function() {
    try {
        var TSU_RTG_DT_AIRCD = document.MAINFORM.TSU_RTG_DT_AIRCD.value;
        var TSU_RTG_DT_AIRTWN = document.MAINFORM.TSU_RTG_DT_AIRTWN.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_RTG_DT_AIRCD != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_RTG_DT_AIRTWN != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (EEHtml.getElementById('Radio1').checked == true) {
            SwitchDsp(0);
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckDstnAir();
        XPathCheck();
        /*if (document.MAINFORM.TSU_RTG_DT_AIRCD.value != '' && document.MAINFORM.TSU_RTG_DT_AIRCD.value !=null)
   {   
      EEHtml.getElementById('Radio1').checked = "True";
   }
   else
   {  
      EEHtml.getElementById('Radio2').checked = "True";
   }*/
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_RTG_DT_AIRTWN").value = "";
                EEHtml.getElementById("TSU_RTG_DT_AIRNM").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRCD, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRNM, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRTWN, 'P', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_RTG_DT_AIRCD").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRCD, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRNM, 'O', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRTWN, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2TrnsprtDataSet017.R2TrnsprtInf017.RtgSummaryR2.IndvTrnsprtR2.TransportByAir2.DstnAirprt" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2InsrncDataSet017.Dt_Trnsprt.TransportByAir2.DstnAirprt" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.Dt_Trnsprt.TransportByAir2.DstnAirprt") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRCD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRTWN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DT_AIRNM, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DstnAirprt.js", e);
    }
}