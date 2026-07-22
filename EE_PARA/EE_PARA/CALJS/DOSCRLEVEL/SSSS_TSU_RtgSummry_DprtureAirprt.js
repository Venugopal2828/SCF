"path:SCRN/DO/TSU_RtgSummry_DprtureAirprt.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.CheckDepAir = function() {
    try {
        var TSU_RTG_DP_AIRCD = document.MAINFORM.TSU_RTG_DP_AIRCD.value;
        var TSU_RTG_DP_AIRTWN = document.MAINFORM.TSU_RTG_DP_AIRTWN.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_RTG_DP_AIRCD != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_RTG_DP_AIRTWN != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (EEHtml.getElementById('Radio1').checked == true) {
            SwitchDsp(0);
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckDepAir();
        XPathCheck();
        /*if (document.MAINFORM.TSU_RTG_DP_AIRCD.value != null && document.MAINFORM.TSU_RTG_DP_AIRCD.value !='')
   {
      EEHtml.getElementById('Radio1').checked = "True";
   }
   else
   {
      EEHtml.getElementById('Radio2').checked = "True";
   }*/
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_RTG_DP_AIRTWN").value = "";
                EEHtml.getElementById("TSU_RTG_DP_AIRNM").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRCD, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRNM, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRTWN, 'P', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_RTG_DP_AIRCD").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRCD, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRNM, 'O', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRTWN, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2TrnsprtDataSet017.R2TrnsprtInf017.RtgSummaryR2.IndvTrnsprtR2.TransportByAir2.DprtureAirprt" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2InsrncDataSet017.Dt_Trnsprt.TransportByAir2.DprtureAirprt" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.Dt_Trnsprt.TransportByAir2.DprtureAirprt") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRCD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRTWN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_DP_AIRNM, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_DprtureAirprt.js", e);
    }
}