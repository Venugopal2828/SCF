"path:SCRN/DO/R2TSU_TransprtDataset.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.CheckDate = function() {
    try {
        var TSU_PROPSD_SHIP_DT = document.MAINFORM.TSU_PROPSD_SHIP_DT.value;
        var TSU_ACTL_SHIP_DT = document.MAINFORM.TSU_ACTL_SHIP_DT.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_PROPSD_SHIP_DT != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_ACTL_SHIP_DT != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYT_setFldValue("TSU_SUBMITR_BIC", SYS_LOGIN_BIC);
        document.MAINFORM.TSU_DS_VRSN.value = '1';
        getTRANRef();
        document.MAINFORM.TSU_TRAN_INF.value = document.MAINFORM.TSU_DS_ID.value;
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        var TsuQtyOtunit = document.MAINFORM.TSU_CNSQTY_OTUNIT.value;
        var TsuVolOtunit = document.MAINFORM.TSU_TTLVOL_OTUNIT.value;
        var TsuWgtOtunit = document.MAINFORM.TSU_TTLWGT_OTUNIT.value;
        var TSU_CNSQTY_VAL = document.MAINFORM.TSU_CNSQTY_VAL.value;
        var TSU_TTLVOL_VAL = document.MAINFORM.TSU_TTLVOL_VAL.value;
        var TSU_TTLWGT_VAL = document.MAINFORM.TSU_TTLWGT_VAL.value;
        if (TsuQtyOtunit != '') {
            document.MAINFORM.TSU_CNSQTY_UNIT_CD.disp = "Other";
        }
        if (TsuVolOtunit != '') {
            document.MAINFORM.TSU_TTLVOL_UNIT_CD.disp = "Other";
        }
        if (TsuWgtOtunit != '') {
            document.MAINFORM.TSU_TTLWGTL_UNIT_CD.disp = "Other";
        }
        if (TSU_CNSQTY_VAL != '' && TSU_CNSQTY_VAL != '0') {
            TSU_CNSQTY_UNIT_CD();
        }
        if (TSU_TTLVOL_VAL != '' && TSU_TTLVOL_VAL != '0') {
            TSU_TTLVOL_UNIT_CD();
        }
        if (TSU_TTLWGT_VAL != '' && TSU_TTLWGT_VAL != '0') {
            TSU_TTLWGTL_UNIT_CD();
        }
        CheckDate();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intTp) {
    try {
        switch (intTp) {
            case 0:
                SYT_ChangeFldClass(document.MAINFORM.TSU_PROPSD_SHIP_DT, 'M', 'Y');
                document.MAINFORM.TSU_ACTL_SHIP_DT.value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_ACTL_SHIP_DT, 'P', 'Y');
                break;
            case 1:
                document.MAINFORM.TSU_PROPSD_SHIP_DT.value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PROPSD_SHIP_DT, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ACTL_SHIP_DT, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_OTUNIT = function() {
    try {
        var TSU_CNSQTY_OTUNIT = document.MAINFORM.TSU_CNSQTY_OTUNIT.value;
        if (TSU_CNSQTY_OTUNIT != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'M', 'N');
        } else if (TSU_CNSQTY_OTUNIT == '' && document.MAINFORM.TSU_CNSQTY_VAL.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'O', 'N');
            document.MAINFORM.TSU_CNSQTY_VAL.value = '0';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_UNIT_CD = function() {
    try {
        var TSU_CNSQTY_UNIT_CD = document.MAINFORM.TSU_CNSQTY_UNIT_CD.options[document.MAINFORM.TSU_CNSQTY_UNIT_CD.selectedIndex].text;
        if (TSU_CNSQTY_UNIT_CD == 'Other') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_UNIT_CD, 'O', 'N');
            document.MAINFORM.TSU_CNSQTY_OTUNIT.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'M', 'N');
        } else if (TSU_CNSQTY_UNIT_CD != 'Other' && TSU_CNSQTY_UNIT_CD != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_UNIT_CD, 'M', 'N');
            document.MAINFORM.TSU_CNSQTY_OTUNIT.style.visibility = "hidden";
            document.MAINFORM.TSU_CNSQTY_OTUNIT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'M', 'N');
        } else if (TSU_CNSQTY_UNIT_CD == '') {
            document.MAINFORM.TSU_CNSQTY_VAL.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_UNIT_CD, 'O', 'N');
            document.MAINFORM.TSU_CNSQTY_OTUNIT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'O', 'N');
            document.MAINFORM.TSU_CNSQTY_OTUNIT.style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_VAL = function() {
    try {
        var TSU_CNSQTY_VAL = document.MAINFORM.TSU_CNSQTY_VAL.value;
        var TSU_CNSQTY_UNIT_CD1 = document.MAINFORM.TSU_CNSQTY_UNIT_CD.options[document.MAINFORM.TSU_CNSQTY_UNIT_CD.selectedIndex].text;
        if (TSU_CNSQTY_VAL != '' && TSU_CNSQTY_VAL != '0') {
            if (document.MAINFORM.TSU_CNSQTY_OTUNIT.value != '') {
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'M', 'N');
            } else if (document.MAINFORM.TSU_CNSQTY_OTUNIT.value == '') {
                if (TSU_CNSQTY_UNIT_CD1 == 'Other') {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_UNIT_CD, 'O', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'M', 'N');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_UNIT_CD, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'M', 'N');
                }
            }
        } else if (TSU_CNSQTY_VAL == '' || TSU_CNSQTY_VAL == '0') {
            if (document.MAINFORM.TSU_CNSQTY_OTUNIT.value == '' && document.MAINFORM.TSU_CNSQTY_UNIT_CD.value == '') {
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_UNIT_CD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_OTUNIT, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNSQTY_VAL, 'O', 'N');
                document.MAINFORM.TSU_CNSQTY_VAL.value = '0';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_OTUNIT = function() {
    try {
        var TSU_TTLVOL_OTUNIT = document.MAINFORM.TSU_TTLVOL_OTUNIT.value;
        if (TSU_TTLVOL_OTUNIT != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'M', 'N');
        } else if (TSU_TTLVOL_OTUNIT == '' && document.MAINFORM.TSU_TTLVOL_VAL.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'O', 'N');
            document.MAINFORM.TSU_TTLVOL_VAL.value = '0';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_UNIT_CD = function() {
    try {
        var TSU_TTLVOL_UNIT_CD = document.MAINFORM.TSU_TTLVOL_UNIT_CD.options[document.MAINFORM.TSU_TTLVOL_UNIT_CD.selectedIndex].text;
        if (TSU_TTLVOL_UNIT_CD == 'Other') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_UNIT_CD, 'O', 'N');
            document.MAINFORM.TSU_TTLVOL_OTUNIT.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'M', 'N');
        } else if (TSU_TTLVOL_UNIT_CD != 'Other' && TSU_TTLVOL_UNIT_CD != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_UNIT_CD, 'M', 'N');
            document.MAINFORM.TSU_TTLVOL_OTUNIT.style.visibility = "hidden";
            document.MAINFORM.TSU_TTLVOL_OTUNIT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'M', 'N');
        } else if (TSU_TTLVOL_UNIT_CD == '') {
            document.MAINFORM.TSU_TTLVOL_VAL.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_UNIT_CD, 'O', 'N');
            document.MAINFORM.TSU_TTLVOL_OTUNIT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'O', 'N');
            document.MAINFORM.TSU_TTLVOL_OTUNIT.style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_VAL = function() {
    try {
        var TSU_TTLVOL_VAL = document.MAINFORM.TSU_TTLVOL_VAL.value;
        var TSU_TTLVOL_UNIT_CD1 = document.MAINFORM.TSU_TTLVOL_UNIT_CD.options[document.MAINFORM.TSU_TTLVOL_UNIT_CD.selectedIndex].text;
        if (TSU_TTLVOL_VAL != '' && TSU_TTLVOL_VAL != '0') {
            if (document.MAINFORM.TSU_TTLVOL_OTUNIT.value != '') {
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'M', 'N');
            } else if (document.MAINFORM.TSU_TTLVOL_OTUNIT.value == '') {
                if (TSU_TTLVOL_UNIT_CD1 == 'Other') {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_UNIT_CD, 'O', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'M', 'N');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_UNIT_CD, 'M', 'N');
                    //SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT,'O','N');Mark on 2013/8/27 by Hattie for value changed this field visable to inpu
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'M', 'N');
                }
            }
        } else if (TSU_TTLVOL_VAL == '' || TSU_TTLVOL_VAL == '0') {
            if (document.MAINFORM.TSU_TTLVOL_OTUNIT.value == '' && document.MAINFORM.TSU_TTLVOL_UNIT_CD.value == '') {
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_UNIT_CD, 'O', 'N');
                //SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_OTUNIT,'O','N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLVOL_VAL, 'O', 'N');
                document.MAINFORM.TSU_TTLVOL_VAL.value = '0';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLWGTL_UNIT_CD = function() {
    try {
        var TSU_TTLWGTL_UNIT_CD = document.MAINFORM.TSU_TTLWGTL_UNIT_CD.options[document.MAINFORM.TSU_TTLWGTL_UNIT_CD.selectedIndex].text;
        if (TSU_TTLWGTL_UNIT_CD == 'Other') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGTL_UNIT_CD, 'O', 'N');
            document.MAINFORM.TSU_TTLWGT_OTUNIT.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'M', 'N');
        } else if (TSU_TTLWGTL_UNIT_CD != 'Other' && TSU_TTLWGTL_UNIT_CD != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGTL_UNIT_CD, 'M', 'N');
            document.MAINFORM.TSU_TTLWGT_OTUNIT.style.visibility = "hidden";
            document.MAINFORM.TSU_TTLWGT_OTUNIT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'M', 'N');
        } else if (TSU_TTLWGTL_UNIT_CD == '') {
            document.MAINFORM.TSU_TTLWGT_VAL.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGTL_UNIT_CD, 'O', 'N');
            document.MAINFORM.TSU_TTLWGT_OTUNIT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'O', 'N');
            document.MAINFORM.TSU_TTLWGT_OTUNIT.style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLWGT_OTUNIT = function() {
    try {
        var TSU_TTLWGT_OTUNIT = document.MAINFORM.TSU_TTLWGT_OTUNIT.value;
        if (TSU_TTLWGT_OTUNIT != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'M', 'N');
        } else if (TSU_TTLWGT_OTUNIT == '' && document.MAINFORM.TSU_TTLWGT_VAL.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'O', 'N');
            document.MAINFORM.TSU_TTLWGT_VAL.value = '0';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLWGT_VAL = function() {
    try {
        var TSU_TTLWGT_VAL = document.MAINFORM.TSU_TTLWGT_VAL.value;
        var TSU_TTLWGTL_UNIT_CD1 = document.MAINFORM.TSU_TTLWGTL_UNIT_CD.options[document.MAINFORM.TSU_TTLWGTL_UNIT_CD.selectedIndex].text;
        if (TSU_TTLWGT_VAL != '' && TSU_TTLWGT_VAL != '0') {
            if (document.MAINFORM.TSU_TTLWGT_OTUNIT.value != '') {
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'M', 'N');
            } else if (document.MAINFORM.TSU_TTLWGT_OTUNIT.value == '') {
                if (TSU_TTLWGTL_UNIT_CD1 == 'Other') {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGTL_UNIT_CD, 'O', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'M', 'N');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGTL_UNIT_CD, 'M', 'N');
                    // SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT,'O','N');Mark on 2013/8/27 by Hattie for value changed this field visable to inpu
                    SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'M', 'N');
                }
            }
        } else if (TSU_TTLWGT_VAL == '' || TSU_TTLWGT_VAL == '0') {
            if (document.MAINFORM.TSU_TTLWGT_OTUNIT.value == '' && document.MAINFORM.TSU_TTLWGTL_UNIT_CD.value == '') {
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGTL_UNIT_CD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_OTUNIT, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TTLWGT_VAL, 'O', 'N');
                document.MAINFORM.TSU_TTLWGT_VAL.value = '0';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.getTRANRef = function() {
    try {
        var TSU_DATA_ID = "";
        var ref = parent.SYS_getValueFromMain('C_MAIN_REF');
        var Length = ref.length;
        Length = Length - 10;
        var DataIdSuf = ref.substr(10, Length);
        TSU_DATA_ID = SYS_LOGIN_BIC + "TRAN" + DataIdSuf;
        document.MAINFORM.TSU_DS_ID.value = TSU_DATA_ID;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_OTUNIT_onchange = function(event) {
    try {
        TSU_CNSQTY_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_UNIT_CD_onchange = function(event) {
    try {
        TSU_CNSQTY_UNIT_CD();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_VAL_onchange = function(event) {
    try {
        TSU_CNSQTY_VAL();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_OTUNIT_onchange = function(event) {
    try {
        TSU_TTLVOL_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_UNIT_CD_onchange = function(event) {
    try {
        TSU_TTLVOL_UNIT_CD();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_VAL_onchange = function(event) {
    try {
        TSU_TTLVOL_VAL();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLWGTL_UNIT_CD_onchange = function(event) {
    try {
        TSU_TTLWGTL_UNIT_CD();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLWGT_OTUNIT_onchange = function(event) {
    try {
        TSU_TTLWGT_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}

csDOScreenProto.TSU_TTLWGT_VAL_onchange = function(event) {
    try {
        TSU_TTLWGT_VAL();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TransprtDataset.js", e);
    }
}