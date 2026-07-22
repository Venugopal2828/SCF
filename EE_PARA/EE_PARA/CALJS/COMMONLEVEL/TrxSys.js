function SYT_ACNO_GL(ACField) {
    try {
        var CcyCode; // Utility Auto Fix Comments
        CcyCode = ACField.substr(1, 2);
        return CcyCode;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ACNO_GL", e);
    }
}

function SYT_AC_NO_LIST(Fname) {
    try {
        var CustNoArr; // Utility Auto Fix Comments
        var ac_no; // Utility Auto Fix Comments
        var nEelement; // Utility Auto Fix Comments
        var nLoop; // Utility Auto Fix Comments
        var no; // Utility Auto Fix Comments
        CustNoArr = new Array(sSYS_CustNo1, sSYS_CustNo2, sSYS_CustNo3, sSYS_CustNo4, sSYS_CustNo5);
        Fname.options.length = 0;
        nEelement = 10;
        ac_no = 0;
        for (nLoop = 0; nLoop < nEelement; nLoop++) {

            if (CustNoArr[nLoop] != "" && CustNoArr[nLoop] != null) {
                no = new Option();
                no.value = CustNoArr[nLoop];
                no.text = CustNoArr[nLoop];
                Fname.options[ac_no] = no;
                ac_no++;

            }
            Fname.size = ac_no;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AC_NO_LIST", e);
    }
}

function SYT_ADD_CHK_AC_NO(oAC_NO) {
    try {
        if (oAC_NO.value != "" && oAC_NO.value.substr(0, 1) != "/") {
            oAC_NO.value = "/" + oAC_NO.value + "/";
            if (oAC_NO.value.length > 35) {
                SYS_CheckError(oAC_NO, "The max length for this field is 35!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ADD_CHK_AC_NO", e);
    }
}

function SYT_AMD_SWIFT_MAT() {
    try {
        var newCurrency = document.MAINFORM.COLL_CCY.value;
        var newAmount = document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value;
        var dayMonth = document.MAINFORM.NEW_DAY_MON_FLG.value;
        // FOR TENOR DAYS----------------->
        var newDays = document.MAINFORM.NEW_TENOR_DAYS.value;
        if (newDays.length == 1)
            newDays = "00" + '' + newDays;
        else if (newDays.length == 2)
            newDays = "0" + '' + newDays;
        //END FOR TENOR DAYS----------->
        // FOR TENOR EVENT FIXED MATURITY DATE ------------->

        matDate = null;
        matDate = document.MAINFORM.NEW_DUE_DT.value;
        var arr = matDate.split("-");
        var year = arr[0];
        year = year.substring(2, 4);
        var dateFormat = year + '' + arr[1] + '' + arr[2];


        //END TENOR EVENT FIXED MATURITY DATE ------------->

        if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/P') {
            if (SYS_MODULE_NAME == 'IMCO' && SYS_ORG_FUNCTION_NAME == "AmendDischarge") {
                document.MAINFORM.MT430_TAG_33K.value = 'K';
            } else {
                document.MAINFORM.MT430_TAG_33K.value = 'B';
            }
            document.MAINFORM.TEMP_TENOR_33K.value = "D000ST" + newCurrency + '' + SYS_BeFloat(newAmount);
        } else if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A and Aval') {
            if (document.MAINFORM.NEW_TENOR_EVENT.value != "XXX") {
                document.MAINFORM.MT430_TAG_33K.value = "K";
                SYT_TENOR_EVENT_FOR_32();
                document.MAINFORM.TEMP_TENOR_33K.value = dayMonth + '' + "" + newDays + document.MAINFORM.T_EVENT_32K.value + '' + newCurrency + '' + SYS_BeFloat(newAmount);
            } else {
                if (document.MAINFORM.NEW_TENOR_EVENT.value == 'XXX' && document.MAINFORM.NEW_DUE_DT.value != "") {

                    document.MAINFORM.MT430_TAG_33K.value = "A";
                    SYT_TENOR_EVENT_FOR_32();
                    document.MAINFORM.TEMP_TENOR_33K.value = dateFormat + '' + newCurrency + '' + SYS_BeFloat(newAmount);
                }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AMD_SWIFT_MAT", e);
    }
}

function SYT_AddMoreSpace(num) {
    try {
        var i; // Utility Auto Fix Comments
        var space; // Utility Auto Fix Comments
        if (num > 0) {
            space = "";
            for (i = 0; i < num; i++) {
                space += " ";
            }
            return space;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AddMoreSpace", e);
    }
}

function SYT_AddOnBlur(sFldNm) {
    try {
        var oFld; // Utility Auto Fix Comments
        var sOnBlur; // Utility Auto Fix Comments
        oFld = EEHtml.getElementById(sFldNm);
        sOnBlur = sFldNm + "_OnBlur";
        if (oFld) {
            attachObjEvent(oFld, "onblur", eval(sOnBlur));
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AddOnBlur", e);
    }
}

function SYT_AddOnChange(sFldNm) {
    try {
        var oFld; // Utility Auto Fix Comments
        var sOnChange; // Utility Auto Fix Comments
        oFld = EEHtml.getElementById(sFldNm);
        sOnChange = sFldNm + "_OnChange";
        if (oFld) {
            attachObjEvent(oFld, "onchange", eval(sOnChange));
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AddOnChange", e);
    }
}

function SYT_AddOnClick(sFldNm) {
    try {
        var oFld; // Utility Auto Fix Comments
        var sOnClick; // Utility Auto Fix Comments
        oFld = EEHtml.getElementById(sFldNm);
        sOnClick = sFldNm + "_OnClick";
        if (oFld) {
            attachObjEvent(oFld, "onclick", eval(sOnClick));
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AddOnClick", e);
    }
}

function SYT_AddOption(sFldName, optValue, optCaption) {
    try {
        var obj; // Utility Auto Fix Comments
        var opt; // Utility Auto Fix Comments
        SYT_RemoveOption(sFldName, optValue);
        obj = EEHtml.getElementById(sFldName);
        opt = new Option(optCaption, optValue);
        opt.id = optValue;
        obj.options.add(opt);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AddOption", e);
    }
}

function SYT_AddOptions(sFldName, optValue, optCaption) {
    try {
        var flds = null;
        if (typeof sFldName == 'object' && (sFldName.type == 'select' || sFldName.type == 'select-one')) {
            var flds = [sFldName];
        } else {
            flds = document.getElementsByName(sFldName);
        }

        var arr_option = flds[0].options;
        var org_option_length = arr_option.length;
        var optValue_length = optValue.length;
        for (i = 0; i < optValue_length; i++) {
            var opt = new Option(optCaption[i], optValue[i]);
            sFldName.options.add(opt);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AddOptions", e);
    }
}

function SYT_AdviceAutoPrint(mainRefNumber, custID, productCode) {
    try {
        var MappingList1; // Utility Auto Fix Comments
        var TEMPRESULT; // Utility Auto Fix Comments
        var TEMPRESULT2; // Utility Auto Fix Comments
        var allowedClasses; // Utility Auto Fix Comments
        var authLevel; // Utility Auto Fix Comments
        var canContinue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mainFrame; // Utility Auto Fix Comments
        var nextClass; // Utility Auto Fix Comments
        var sSQLWhere1; // Utility Auto Fix Comments
        //Check if this is a release
        CustIDCUBK = custID;
        productCodeCUBK = productCode;
        mainRefNumberCUBK = mainRefNumber;
        if (SYS_FUNCTION_TYPE == 'RE') {
            canContinue = false;
            TEMPRESULT = "TEMP_RESULT";
            TEMPRESULT2 = "TEMP_RESULT2";

            document.MAINFORM.TEMP_RESULT.value = "";

            //Check if the distribution method is electronic. If it isn't, display the
            //documents popup
            sSQLWhere1 = "C_MAIN_REF = '" + CustIDCUBK + "' AND " + "CNTY_CODE = '" + SYS_BANK_COUNTRY + "' AND " + "PROD = '" + productCodeCUBK + "' AND ( " + "UPPER(ELEC_DLV_METHOD1) = 'EMAIL' OR " + "UPPER(ELEC_DLV_METHOD1) = 'FAX' ) ";
            /* SYS_Get22TableData_S('PROD_SPEC_INFO', sSQLWhere1, 'C_MAIN_REF', TEMPRESULT, true);*/

            if (document.MAINFORM.TEMP_RESULT.value == custID) {
                document.MAINFORM.TEMP_RESULT.value = "";

                //Check if there is a cash voucher. If there is, display the documents popup
                //sSQLWhere2 = "C_MAIN_REF = '" + mainRefNumberCUBK + "' AND " + "UPPER(C_DOC_DESC) LIKE '%CASH VOUCHER%' AND I_EVENT_TIMES = " + SYS_I_EVENT_TIMES;
                SYS_GetTableDataByRule_S('TrxSys_SYT_AdviceAutoPrint_16', '1', true);

                if (document.MAINFORM.TEMP_RESULT.value == mainRefNumber) {
                    canContinue = true;
                }

            } else {
                canContinue = true;
            }

            if (canContinue == true) {
                document.MAINFORM.TEMP_RESULT.value = "";
                document.MAINFORM.TEMP_RESULT2.value = "";

                //Check if the current user is the last to release. Only popup the documents
                //window if this is the last user to release.
                //sSQLWhere3 = "C_MAIN_REF = '" + mainRefNumberCUBK + "' ";
                //MappingList1 = "TEMP_RESULT;TEMP_RESULT2";
                SYS_GetTableDataByRule_S('TrxSys_SYT_AdviceAutoPrint_17', '1', true);

                nextClass = document.MAINFORM.TEMP_RESULT.value;
                authLevel = "";

                if (document.MAINFORM.TEMP_RESULT2.value != "") {
                    document.MAINFORM.TEMP_RESULT.value = "";

                    //Check if there is a Function level auth value for the user
                    //sSQLWhere4 = "C_USER_ID = '" + SYS_USER_ID + "' AND " + "C_FUNC_ID = '" + document.MAINFORM.TEMP_RESULT2.value + "' ";
                    SYS_GetTableDataByRule_S('TrxSys_SYT_AdviceAutoPrint_18', '1', true);

                    authLevel = document.MAINFORM.TEMP_RESULT.value;
                }

                //If no Function level auth value, default to user auth level
                if (authLevel == "") {
                    //sSQLWhere5 = "C_USER_ID = '" + SYS_USER_ID + "' ";
                    SYS_GetTableDataByRule_S('TrxSys_SYT_AdviceAutoPrint_19', '1', true);

                    authLevel = document.MAINFORM.TEMP_RESULT.value;
                }

                if (authLevel != "" && nextClass != "") {
                    //Apply logic to determine if this is the last person releasing
                    allowedClasses = nextClass.split("/");

                    for (i = 0; i < allowedClasses.length; i++) {
                        //If one of the allowedClasses values matches the user auth level
                        //the user is allowed to be the last to release, so the documents
                        //popup can be displayed
                        if (allowedClasses[i] == authLevel) {
                            mainFrame = window.parent.openForm; //Remote print
                            if (mainFrame.Document) {
                                EEHtml.fireEvent(mainFrame.Document, 'onclick');
                            }

                            break;
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AdviceAutoPrint", e);
    }
}

function SYT_AmountFieldSelectAll() {
    try {
        if (SYS_BeFloat(this.value) == 0) {
            this.focus();
            this.select();
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AmountFieldSelectAll", e);
    }
}

function SYT_AmtFormat(CCY, AMT) {
    try {
        /* var Decimal; // Utility Auto Fix Comments
                                                                                                                                        Decimal = '';
                                                                                                                                        if (CCY == "JPY") {
                                                                                                                                            Decimal = 0;
                                                                                                                                        } else if (CCY == "JOD" || CCY == 'BHD') {
                                                                                                                                            Decimal = 3;
                                                                                                                                        } else {
                                                                                                                                            Decimal = 2;
                                                                                                                                        }*/
        var Decimal = findDecFromCCY(CCY);
        if (Decimal == "") {
            Decimal = 2;
        }
        return DecimalFormat(AMT, Decimal);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_AmtFormat", e);
    }
}

function SYT_Audit_Main() {
    try {
        var audit_code; // Utility Auto Fix Comments
        var fields; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "IQ") {


            switch (SYS_ORG_FUNCTION_NAME) {
                case "DI_Due_Diligence":
                    document.MAINFORM.DUP_CHK.value = 'No';
                    audit_code = "003001:003002:003001:003002:003003:003004:003005:002:002001:001:003006:003007:003008:003009";
                    fields = "X103_INSTR_CCY_33B:X103_INSTR_AMT_33B:X103_SETT_CCY_32A:X103_SETT_AMT_32A:X103_VALUE_DT_32A:X103_ORDCU_ID_50A:X103_ORDCUACNO_50A:OVRIDE:X103_ORDCUACNO_50A:DUP_CHK:VERF_SIGN:DOCS:CALBK:CONT_NM";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "DueDiliOutPmt":
                    document.MAINFORM.DUP_CHK.value = 'No';
                    audit_code = "003001:003002:003001:003002:003003:003004:003005:002:002001:001:003006:003007:003037:003009:003008:003038";
                    fields = "CR_CCY:CR_CALC_AMT:DB_CCY:DB_CALC_AMT:X103_VALUE_DT_32A:X103_ORDCU_ID_50A:X103_ORDCUACNO_50A:OVRIDE:X103_ORDCUACNO_50A:DUP_CHK:VERF_SIGN:DOCS:CALBK:CONT_NM:CONT_NO:CHANNEL";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "Due Diligence Register LC":
                    audit_code = "003001:003005:003006:003007:003008:003009:003010:003012:002:002001:003004:003002:003011:003014:003015:003016:003017:003018:003019:003001:003002";
                    fields = "APPL_MRGR_DR_AC_CCY:APPL_AC_MRGN:VERF_SIGN:DOCS:CALBK:CONT_NM:FORM_OF_LC:MRGN_RT:CASH_COV_OVRIDE:APPL_AC_MRGN:APPL_ID:LIAB_AMT:NO_PRD:AUTO_RENEW:CUMULATIVE:REV_TYPE:POS_TOL:LC_TENOR:EXPIRY_DT:LC_CCY:LC_AMT";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "CompOutPmt":
                    document.MAINFORM.DUP_CHK.value = 'No';
                    audit_code = "003001:003002:003001:003002:001:003005:002:002001:003003:003040:003041";
                    fields = "CR_CCY:CR_CALC_AMT:DB_CCY:DB_CALC_AMT:DUP_CHK:SETT_ACC_AUDIT:CHG_OVERRIDE_IND:CHG_FLD_LOCAL_CUST_AC_NO:X103_VALUE_DT_32A:X103_EXCH_RT_36:X103_ACC_BKSW_57A";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "DI_Capture":
                    document.MAINFORM.DUP_CHK.value = 'No';
                    audit_code = "003001:003002:003001:003002:001:003005";
                    fields = "X103_INSTR_CCY_33B:X103_INSTR_AMT_33B:X103_SETT_CCY_32A:X103_SETT_AMT_32A:DUP_CHK:SETT_ACC_AUDIT";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "Proc_Inc_103":
                    audit_code = "003005";
                    fields = "SETT_ACC_AUDIT";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "General Purpose Accounting":
                    audit_code = "003001:003002:003001:003002:003004:003005:003004:003005:002:002001";
                    fields = "CR_CCY:CR_CALC_AMT:DB_CCY:DB_CALC_AMT:X103_ORDCU_ID_50A:X103_ORDCUACNO_50A:X103_BENECU_ID_59A:X103_BENECUACNO59A:CHG_OVERRIDE_IND:CHG_FLD_LOCAL_CUST_AC_NO";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "ReversalOTT":
                    audit_code = "003002:003005:003005";
                    fields = "REVE_AMT:REVE_AC_NO:SETT_ACC_AUDIT";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "ReversePayment_ITT":
                    audit_code = "003002:003005";
                    fields = "REVE_AMT:REVE_AC_NO";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "Re-effect OTT":
                    audit_code = "002:002001:003042:003003:003043:003044";
                    fields = "CHG_OVERRIDE_IND:CHG_FLD_LOCAL_CUST_AC_NO:CR_CALC_AMT:X103_VALUE_DT_32A:X103_BENECU_NM_59A:X103_BENECUACNO59A";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "OTTRecoverDeferredCharges":
                    audit_code = "002:002001";
                    fields = "CHG_OVERRIDE_IND:CHG_FLD_LOCAL_CUST_AC_NO";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "ITTRecoverAdditionalCharges":
                    audit_code = "002:002001";
                    fields = "CHG_OVERRIDE_IND:CHG_FLD_LOCAL_CUST_AC_NO";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "OTTReverseCharges":
                    audit_code = "002001";
                    fields = "CHG_FLD_LOCAL_CUST_AC_NO";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;
                case "EditBenProfile":
                    audit_code = "003021:003022:003023:003024:003025:003026:003027:003028:003029:003030:003031:003032:003033:003034:003035:003036";
                    fields = "X103_BENECU_NM_59A:BENE_INITIALS:BENE_SURNAME:RESIDENT_INDICATOR:BENE_CNTY_RES:X103BENECUADD1_59A:X103BENECUADD2_59A:X103BENECUADD3_59A:X103_BENECU_SW_59A:X103_TAG_59A:BENE_ENT_CONTACT_NM:CONTACT_TYPE:CONTACT_TYPE_DETAIL:BENE_ENT_CORR_ADD1:BENE_ENT_CORR_ADD2:BENE_ENT_CORR_ADD3";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "AddBenProfile":
                    audit_code = "003021:003022:003023:003024:003025:003026:003027:003028:003029:003030:003031:003032:003033:003034:003035:003036";
                    fields = "X103_BENECU_NM_59A:BENE_INITIALS:BENE_SURNAME:RESIDENT_INDICATOR:BENE_CNTY_RES:X103BENECUADD1_59A:X103BENECUADD2_59A:X103BENECUADD3_59A:X103_BENECU_SW_59A:X103_TAG_59A:BENE_ENT_CONTACT_NM:CONTACT_TYPE:CONTACT_TYPE_DETAIL:BENE_ENT_CORR_ADD1:BENE_ENT_CORR_ADD2:BENE_ENT_CORR_ADD3";
                    SYT_Audit_value_assign(audit_code, fields);
                    break;
                case "InternalTrf":
                    audit_code = "003001:003002:003001:003002:003004:003005:003004:003005:002:002001:003039:003040:003003";
                    fields = "CR_CCY:CR_CALC_AMT:DB_CCY:DB_CALC_AMT:X103_ORDCU_ID_50A:X103_ORDCUACNO_50A:X103_BENECU_ID_59A:X103_BENECUACNO59A:CHG_OVERRIDE_IND:CHG_FLD_LOCAL_CUST_AC_NO:COV_NO:X103_EXCH_RT_36:X103_VALUE_DT_32A";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
                    break;

                default:
                    audit_code = "";
                    fields = "";
                    SYT_Audit_value_assign_WithCharges(audit_code, fields);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Audit_Main", e);
    }
}

function SYT_Audit_Update_Charges() {
    try {
        var Auditcode; // Utility Auto Fix Comments
        var FieldElements; // Utility Auto Fix Comments
        var TempTemp; // Utility Auto Fix Comments
        var finalFields; // Utility Auto Fix Comments
        var p; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        var trimstring; // Utility Auto Fix Comments
        Auditcode = document.MAINFORM.AUDIT_CODE.value.split(':');
        FieldElements = document.MAINFORM.FIELDs.value.split(':');
        finalFields = document.MAINFORM.OLDVALUES.value.split(':');
        TempTemp = ":";
        for (p = 0; p < FieldElements.length; p++) {
            temp = FieldElements[p];
            if (Auditcode[p] == "004") {
                finalFields[p] = document.MAINFORM.elements[temp].value;
            }
            //	TempTemp=TempTemp+finalFields[p];
        }
        trimstring = finalFields.join(":");
        Auditcode = Auditcode.join(":");
        FieldElements = FieldElements.join(":");
        //alert(Auditcode);
        //alert(FieldElements);
        //alert(trimstring);

        document.MAINFORM.AUDIT_CODE.value = Auditcode;

        document.MAINFORM.FIELDs.value = FieldElements;

        document.MAINFORM.OLDVALUES.value = trimstring;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Audit_Update_Charges", e);
    }
}

function SYT_Audit_value_assign(Auditcode, fields) {
    try {
        var FieldElements; // Utility Auto Fix Comments
        var TempTemp; // Utility Auto Fix Comments
        var finalFields; // Utility Auto Fix Comments
        var p; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        var trimstring; // Utility Auto Fix Comments
        FieldElements = fields.split(':');
        finalFields = new Array();
        TempTemp = ":";
        for (p = 0; p < FieldElements.length; p++) {
            temp = FieldElements[p];
            finalFields[p] = document.MAINFORM.elements[temp].value;
            //	TempTemp=TempTemp+finalFields[p];
        }
        trimstring = finalFields.join(":");

        document.MAINFORM.AUDIT_CODE.value = Auditcode;

        document.MAINFORM.FIELDs.value = fields;

        document.MAINFORM.OLDVALUES.value = trimstring;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Audit_value_assign", e);
    }
}

function SYT_Audit_value_assign_WithCharges(C, F) {
    try {
        var audit_code; // Utility Auto Fix Comments
        var both; // Utility Auto Fix Comments
        var chg_fields; // Utility Auto Fix Comments
        var code; // Utility Auto Fix Comments
        var count; // Utility Auto Fix Comments
        var fields; // Utility Auto Fix Comments
        var fieldsAmt; // Utility Auto Fix Comments
        var fieldsCcy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var intCount; // Utility Auto Fix Comments
        // Audit
        intCount = Chg.Screen.getAllTrxCharge().length;

        //	alert("Count of charges"+intCount);
        fieldsCcy = new Array();
        fieldsAmt = new Array();
        chg_fields = "";
        code = new Array();

        for (i = 0; i < intCount; i++) {

            count = 1;
            count = count + i; // Utility Auto Fix Comments
            fieldsAmt[i] = "CHG_FLD_ACTIVE_AMT_" + count;
            code[i] = "004";
            //fieldsCcy[i]="CHG_FLD_ACTIVE_CCY_"+count;
        }
        //	both=fieldsAmt.concat(fieldsCcy);

        fields = fieldsAmt.join(":");
        audit_code = code.join(":");
        if (C != "") {
            audit_code = audit_code + ":" + C;

            fields = fields + ":" + F;
        }
        SYT_Audit_value_assign(audit_code, fields);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Audit_value_assign_WithCharges", e);
    }
}

function SYT_Audit_value_assign_WithSett() {
    try {
        var _dodetail; // Utility Auto Fix Comments
        var acc_no; // Utility Auto Fix Comments
        var fieldsAcc; // Utility Auto Fix Comments
        var fieldsOvr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var intCount; // Utility Auto Fix Comments
        var ovr_flg; // Utility Auto Fix Comments
        // Audit
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        intCount = SYS_getcurrRecordCount('PaymentMultipleDebits');
        fieldsOvr = new Array();
        fieldsAcc = new Array();
        //alert(intCount);

        for (i = 0; i < intCount; i++) {
            //alert(SYS_getValFromRec(i,"MUL_OVRIDE"));
            //SYS_getRecord(node, rowId)
            ovr_flg = SYS_getFieldValue(_dodetail, i, "MUL_OVRIDE"); // Utility Auto Fix Comments
            fieldsOvr[i] = ovr_flg;
            acc_no = SYS_getFieldValue(_dodetail, i, "CPYT_DR_AC"); // Utility Auto Fix Comments
            fieldsAcc[i] = acc_no;


        }

        //alert (fieldsOvr.join(":"));
        //alert (fieldsAcc.join(":"));
        document.MAINFORM.OLDVALUES_OVR.value = fieldsOvr.join(":");

        document.MAINFORM.OLDVALUES_ACC.value = fieldsAcc.join(":");
        if (SYS_ORG_FUNCTION_NAME == 'Proc_Inc_103') {
            if (document.MAINFORM.OLDVALUES_ACC.value == "") {
                document.MAINFORM.SETT_ACC_AUDIT.value = document.MAINFORM.X103_BENECUACNO59A.value;
            } else {
                document.MAINFORM.SETT_ACC_AUDIT.value = fieldsAcc[0];
            }
            //alert(document.MAINFORM.SETT_ACC_AUDIT.value);

        }
        if (SYS_ORG_FUNCTION_NAME == 'CompOutPmt') {
            if (document.MAINFORM.OLDVALUES_ACC.value == "") {
                document.MAINFORM.SETT_ACC_AUDIT.value = document.MAINFORM.X103_ORDCUACNO_50A.value;
            } else {
                document.MAINFORM.SETT_ACC_AUDIT.value = fieldsAcc[0];
            }
            //alert(document.MAINFORM.SETT_ACC_AUDIT.value);

        }
        if (SYS_ORG_FUNCTION_NAME == 'DI_Capture') {
            if (document.MAINFORM.OLDVALUES_ACC.value == "") {
                document.MAINFORM.SETT_ACC_AUDIT.value = document.MAINFORM.X103_ORDCUACNO_50A.value;
            } else {
                document.MAINFORM.SETT_ACC_AUDIT.value = fieldsAcc[0];
            }
            //alert(document.MAINFORM.SETT_ACC_AUDIT.value);

        }
        if (SYS_ORG_FUNCTION_NAME == 'ReversalOTT') {
            if (document.MAINFORM.OLDVALUES_ACC.value == "") {
                document.MAINFORM.SETT_ACC_AUDIT.value = document.MAINFORM.X103_ORDCUACNO_50A.value;
            } else {
                document.MAINFORM.SETT_ACC_AUDIT.value = fieldsAcc[0];
            }
            //alert(document.MAINFORM.SETT_ACC_AUDIT.value);

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Audit_value_assign_WithSett", e);
    }
}

function SYT_BLACK_INS_TYP_REPLACE(selectObject, fieldObject) {
    try {
        var blackValue; // Utility Auto Fix Comments
        var reg; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        reg = /\(\d+/;
        blackValue = selectObject.options[selectObject.selectedIndex].text;
        temp = reg.exec(blackValue);
        if (temp != null && temp != 'null' && temp != '' && temp != 'undefined') {
            fieldObject.value = reg.exec(blackValue).toString().replace("(", "");
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BLACK_INS_TYP_REPLACE", e);
    }
}

function SYT_BankLookUp(oFld) {
    try {
        var sBKAdd1;
        var sBKAdd2;
        var sBKAdd3;
        var sBKBIC;
        var sBKID;
        var sBKIDValue;
        var sBKName;
        var sFldName;
        var sql;
        sFldName = oFld.name;
        if (sFldName.indexOf("ID_BTN") == -1) {
            return;
        }
        sql = "1=1";
        sBKID = sFldName.replace("ID_BTN", "ID");
        sBKName = sFldName.replace("ID_BTN", "NM");
        sBKAdd1 = sFldName.replace("ID_BTN", "ADD1");
        sBKAdd2 = sFldName.replace("ID_BTN", "ADD2");
        sBKAdd3 = sFldName.replace("ID_BTN", "ADD3");
        sBKBIC = sFldName.replace("ID_BTN", "SW_ADD");
        sBKIDValue = document.MAINFORM.elements[sBKID].value;
        /*if (sBKIDValue.length == 0) {
            if (MAINFORM.elements[sBKName].value != "") {
                sql += " AND SWF_FMT_NM like '%<--" + sBKName + "-->%'";
            }
            if (MAINFORM.elements[sBKAdd1].value != "") {
                sql += " AND SWIFT_FMT_ADD1 like '%<--" + sBKAdd1 + "-->%'";
            }
            if (MAINFORM.elements[sBKAdd2].value != "") {
                sql += " AND SWIFT_FMT_ADD2 like '%<--" + sBKAdd2 + "-->%'";
            }
            if (MAINFORM.elements[sBKAdd3].value != "") {
                sql += " AND SWIFT_FMT_ADD3 like '%<--" + sBKAdd3 + "-->%'";
            }
            if (MAINFORM.elements[sBKBIC].value != "") {
                sql += " AND SW_ADD like '%<--" + sBKBIC + "-->%'";
            }
        } else {
            sql += " AND T1.C_MAIN_REF like '%" + sBKIDValue + "%'";
        }

        if (sql == "1=1") {

            SYS_InqCUBK(sBKID);

        } else {
            SYS_InqCUBK_Sql(sBKID, sql);
        }*/
        SYS_InqCUBK_byCondition(sBKID, '1');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BankLookUp", e);
    }
}

function SYT_BaseSettlement_CleanDRCRAmount() {
    try {
        var i; // Utility Auto Fix Comments
        var sDCAcctFN; // Utility Auto Fix Comments
        var sDCAmtFN; // Utility Auto Fix Comments
        var sDCFlagFN; // Utility Auto Fix Comments
        var sDCTypeFN; // Utility Auto Fix Comments
        sDCFlagFN = "DC_FLAG_";
        sDCAmtFN = "DC_AMT";
        sDCAcctFN = "DC_ACCT";
        sDCTypeFN = "DC_TYPE";
        for (i = 1; i < 5; i++) {
            document.MAINFORM.elements[sDCFlagFN + i].value = "";
            document.MAINFORM.elements[sDCAmtFN + i].value = SYT_CCY_AMT(SYS_LOCAL_CCY, 0);
            document.MAINFORM.elements[sDCAcctFN + i].value = "";
            document.MAINFORM.elements[sDCTypeFN + i].value = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BaseSettlement_CleanDRCRAmount", e);
    }
}

function SYT_BaseSettlement_PaymentAccount_1() {
    try {
        document.MAINFORM.DC_FLAG_1.value = sDC_FLAG;
        document.MAINFORM.DC_AMT1.value = SYT_CCY_AMT(sCCY, nACCT_AMT);
        document.MAINFORM.DC_ACCT1.value = sACCT_NO;
        document.MAINFORM.DC_TYPE1.value = sDC_TYPE;

        if (SYS_BeFloat(document.MAINFORM.DC_AMT1.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT1, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT1, 'O');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BaseSettlement_PaymentAccount_1", e);
    }
}

function SYT_BaseSettlement_PaymentAccount_2() {
    try {
        document.MAINFORM.DC_FLAG_2.value = sDC_FLAG;
        document.MAINFORM.DC_AMT2.value = SYT_CCY_AMT(sCCY, nACCT_AMT);
        document.MAINFORM.DC_ACCT2.value = sACCT_NO;
        document.MAINFORM.DC_TYPE2.value = sDC_TYPE;


        if (SYS_BeFloat(document.MAINFORM.DC_AMT2.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT2, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT2, 'O');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BaseSettlement_PaymentAccount_2", e);
    }
}

function SYT_BaseSettlement_PaymentAccount_3() {
    try {
        document.MAINFORM.DC_FLAG_3.value = sDC_FLAG;
        document.MAINFORM.DC_AMT3.value = SYT_CCY_AMT(sCCY, nACCT_AMT);
        document.MAINFORM.DC_ACCT3.value = sACCT_NO;
        document.MAINFORM.DC_TYPE3.value = sDC_TYPE;

        if (SYS_BeFloat(document.MAINFORM.DC_AMT3.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT3, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT3, 'O');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BaseSettlement_PaymentAccount_3", e);
    }
}

function SYT_BaseSettlement_PaymentAccount_4() {
    try {
        document.MAINFORM.DC_CCY4.value = sCCY;
        document.MAINFORM.DC_FLAG_4.value = sDC_FLAG;
        document.MAINFORM.DC_AMT4.value = SYT_CCY_AMT(sCCY, nACCT_AMT);
        document.MAINFORM.DC_ACCT4.value = sACCT_NO;
        document.MAINFORM.DC_TYPE4.value = sDC_TYPE;

        if (SYS_BeFloat(document.MAINFORM.DC_AMT4.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT4, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DC_ACCT4, 'O');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BaseSettlement_PaymentAccount_4", e);
    }
}

function SYT_BaseSettlement_TotalPayment() {
    try {
        document.MAINFORM.PAY_CCY.value = sFCY_CCY;
        document.MAINFORM.TOT_AMT_PAY_FCY.value = SYT_CCY_AMT(sFCY_CCY, nFCY_AMT);
        document.MAINFORM.TOT_AMT_PAY.value = SYT_CCY_AMT(SYS_LOCAL_CCY, nLCY_AMT);
        document.MAINFORM.TOT_AMT_PAY_ORG.value = SYS_BeFloat(nLCY_AMT);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BaseSettlement_TotalPayment", e);
    }
}

function SYT_BeInt(Value) {
    try {
        var nInt; // Utility Auto Fix Comments
        var nValue; // Utility Auto Fix Comments
        var sValue; // Utility Auto Fix Comments
        sValue = String(Value);
        nInt = 0;

        if (sValue.length == 0 || sValue == null) {
            return nInt;
        }

        nValue = SYS_BeFloat(sValue);
        nValue = Math.floor(nValue);
        nInt = parseInt(nValue, 0);

        return nInt;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BeInt", e);
    }
}

function SYT_BlankGetCUBK(sBANK_CUST_ID) {
    try {
        var arr_GetCUBKFld; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var oFld; // Utility Auto Fix Comments
        var sFldName; // Utility Auto Fix Comments
        //add by mary on 08.09.17
        arr_GetCUBKFld = new Array("NM", "ADD1", "ADD2", "ADD3", "MAIL_ADD", "SW_TAG", "SW_ADD", "LANG", "CORR_MED", "EMAIL", "FAX", "TLX", "AC_OFF_CODE", "ACNO", "REF_NO", "NOTES");
        for (i = 0; i < arr_GetCUBKFld.length; i++) {
            sFldName = "";
            if (arr_GetCUBKFld[i] == "NOTES" && sBANK_CUST_ID.indexOf("ID_") > -1) {

                sFldName = sBANK_CUST_ID.replace("ID_", "") + "_NOTES";
            } else {

                sFldName = sBANK_CUST_ID.replace("ID", arr_GetCUBKFld[i]);
            }

            oFld = MAINFORM.elements[sFldName];
            if (oFld != null) {
                oFld.value = "";
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_BlankGetCUBK", e);
    }
}

function SYT_CAL_CABLE(nTimes) {
    try {
        var sName; // Utility Auto Fix Comments
        sName = SYS_MODULE_NAME + "_SWIFT_CHG";
        Chg.calculate([sName], null, null, null, null, null, null, null, nTimes, null);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CAL_CABLE", e);
    }
}

function SYT_CAL_COMM(sCommCode, sTrxCcy, nTrxAmt, dStartDate, dEndDate) {
    try {
        Chg.calculate([sCommCode], sTrxCcy, nTrxAmt, dStartDate, dEndDate);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CAL_COMM", e);
    }
}

function SYT_CAL_COURIER(nTimes) {
    try {
        var sFromCode; // Utility Auto Fix Comments
        var sName; // Utility Auto Fix Comments
        var sToCode; // Utility Auto Fix Comments
        // for further used
        sFromCode = null;
        sToCode = null;

        sName = SYS_MODULE_NAME + "_COURIER_CHG";
        Chg.calculate([sName], null, null, null, null, null, null, null, nTimes, null);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CAL_COURIER", e);
    }
}

function SYT_CAL_POST(nTimes) {
    try {
        var sFromCode; // Utility Auto Fix Comments
        var sName; // Utility Auto Fix Comments
        var sToCode; // Utility Auto Fix Comments
        // for further used
        sFromCode = null;
        sToCode = null;

        sName = SYS_MODULE_NAME + "_POST_CHG";
        Chg.calculate([sName], null, null, null, null, null, null, null, nTimes, null);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CAL_POST", e);
    }
}

function SYT_CCY_AMT(CCYField, AMT, ClassName) {
    try {
        var a; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var deciNum; // Utility Auto Fix Comments
        var eAmt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var oArray1; // Utility Auto Fix Comments
        var sTemp1; // Utility Auto Fix Comments
        if (CCYField != '' && CCYField != null && (AMT != '' || AMT == 0) && AMT != null) {
            c = CCYField;
            if (c == '') {
                return 0;
            }
            a = SYS_BeFloat(AMT);
            deciNum = findDecFromCCY(c, ClassName);
            eAmt = DecimalFormat(a, deciNum);
            sTemp1 = '';

            if (ClassName == "RATE") {
                oArray1 = eAmt.split(",");
                for (i = 0; i < oArray1.length; i++) {
                    sTemp1 = sTemp1 + oArray1[i];
                }
                return sTemp1;
            }
            return eAmt;
        }
        return 0;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CCY_AMT", e);
    }
}

function SYT_CCY_AMT_LCAMT() {
    try {
        document.MAINFORM.LC_AMT.value = SYS_formatAmt_Single(document.MAINFORM.LC_AMT.value, document.MAINFORM.LC_CCY.value);
        document.MAINFORM.LC_BAL.value = SYS_formatAmt_Single(document.MAINFORM.LC_BAL.value, document.MAINFORM.LC_CCY.value);
        document.MAINFORM.CONF_BAL_LCCCY.value = SYS_formatAmt_Single(document.MAINFORM.CONF_BAL_LCCCY.value, document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CCY_AMT_LCAMT", e);
    }
}

function SYT_CCY_LCY_BookingRate() {
    try {
        SYS_GetExchangeRate_S(document.MAINFORM.LC_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RT_CCY_LCY.value);
        EEHtml.fireEvent(document.MAINFORM.RT_CCY_LCY, 'onchange');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CCY_LCY_BookingRate", e);
    }
}

function SYT_CCY_RATE(CCY, AMT) {
    try {
        var Decimal; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var eAmt; // Utility Auto Fix Comments
        for (i = 0; i < SYS_CURRENCY.length; i++) {
            if (SYS_CURRENCY[i][0] == CCY) {
                Decimal = SYS_CURRENCY[i][3];
                continue;
            }
        }

        amt = SYS_BeFloat(AMT);
        eAmt = DecimalFormat(amt, Decimal);

        return eAmt;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CCY_RATE", e);
    }
}

function SYT_CHECK_DOFieldEmpty(xpath, field, msg) {
    try {
        var BankAccount; // Utility Auto Fix Comments
        var _do1; // Utility Auto Fix Comments
        var arrayvalue1; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var num1; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do1 = SYS_getDoByXpath(xpath); // Utility Auto Fix Comments
        num1 = SYS_getcurrRecordCount(xpath);
        if (num1 > 0) {
            arrayvalue1 = SYS_getRecords(_do1); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue1.length; i < len; i++) {
                record = arrayvalue1[i];
                BankAccount = SYS_getValFromRec(record, field);
                if (BankAccount == 'undefined' || BankAccount == null || BankAccount == '') {
                    alert(msg);
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHECK_DOFieldEmpty", e);
    }
}

function SYT_CHGDO_ACTIVE_AMT_dealer(val, doname, record, entry, originalValue, fieldName) {
    try {
        var chgAt; // Utility Auto Fix Comments
        var chgEntryIndex; // Utility Auto Fix Comments
        var collAmt; // Utility Auto Fix Comments
        var collVatAmt; // Utility Auto Fix Comments
        var divRate; // Utility Auto Fix Comments
        var flds; // Utility Auto Fix Comments
        var fromCcy; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCollRate; // Utility Auto Fix Comments
        var subVal; // Utility Auto Fix Comments
        var toCcy; // Utility Auto Fix Comments
        map = new HashMap();
        if (val < 0) {
            showErrMsg("Amount should not be less than zero.", "4638");
            map.put(Chg.FLD_ACTIVE_AMT, "0");
            Chg_setValToRec(doname, record, map);
            return;
        }
        val = Chg_AmtFormat(val, record, fieldName, doname);
        map.put(fieldName, val);
        val = Chg_AmtFormat(val, record, Chg.FLD_ACTIVE_AMT, doname);
        map.put(Chg.FLD_ACTIVE_AMT, val);
        fromCcy = record[Chg.FLD_ACTIVE_CCY];
        toCcy = record[Chg.FLD_COLLECT_CCY];
        ruleCollRate = Chg.getRule2ChgRate(fromCcy, toCcy);
        if (originalValue == 0) {
            flds = Chg.FLD_CHARGE_FOR + "," + Chg.FLD_CHARGE_AT + "," + Chg.FLD_DISCOUNT_RATE + "," + "," + Chg.FLD_DISCOUNT_AMT;
            SYS_enableCellflds(doname, record, flds);
            if (record[Chg.FLD_CHARGE_AT] == Chg.AT_TRX) {
                SYS_enableCellflds(doname, record, Chg.FLD_COLLECT_AMT + "," + Chg.FLD_COLLECT_CCY);
            }
        }
        collAmt = SYS_FloatMul(val, ruleCollRate);
        collAmt = Chg_AmtFormat(collAmt, record, Chg.FLD_COLLECT_AMT, doname);
        if (entry == null && val > 0) {
            map.put(Chg.FLD_COLLECT_AMT, collAmt);
            if (Chg.Screen.vat) {
                collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, collAmt);
                map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
            }
            map.put(Chg.FLD_DISCOUNT_RATE, "0");
            map.put(Chg.FLD_DISCOUNT_AMT, "0");
            map.put(Chg.FLD_BALANCE_AMT, "0");
            Chg_setValToRec(doname, record, map);
        } else if (entry != null && val > 0) {
            ruleAmt = SYS_BeFloat(entry.getChargeRuleAmt());
            subVal = SYS_FloatSub(ruleAmt, val);
            subVal = Chg_AmtFormat(subVal, record, Chg.FLD_DISCOUNT_AMT, doname);
            divRate = SYS_FloatDiv(subVal, ruleAmt);
            if (subVal < 0) {
                subVal = '0';
            }
            divRate = (divRate * 100).toFixed(3);
            if (ruleAmt == 0) {
                entry.setEmptyActiveAmt(val);
                map.put(Chg.FLD_DISCOUNT_RATE, "0");
                map.put(Chg.FLD_DISCOUNT_AMT, "0");
            } else {
                //monroe 20121113 add -s
                divRate = SYS_MidifyDecimal(divRate, true);
                //monroe 20121113 add -e
                map.put(Chg.FLD_DISCOUNT_RATE, divRate);
                map.put(Chg.FLD_DISCOUNT_AMT, subVal);
            }
            chgAt = record[Chg.FLD_CHARGE_AT];
            if (chgAt == Chg.AT_TRX) {
                map.put(Chg.FLD_COLLECT_AMT, collAmt);
                map.put(Chg.FLD_BALANCE_AMT, '0');
                if (Chg.Screen.vat) {
                    collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, collAmt);
                    map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
                }
            } else if (chgAt == Chg.AT_DEFERRED) {
                map.put(Chg.FLD_BALANCE_AMT, collAmt);
            }
            Chg_setValToRec(doname, record, map);
        }
        if (val == 0) {
            chgEntryIndex = record[Chg.FLD_CHARGE_INDEX];
            SYT_CHGDO_reSet(doname, record, chgEntryIndex);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_ACTIVE_AMT_dealer", e);
    }
}

function SYT_CHGDO_CHARGE_AT_dealer(value, doname, record, entry, originalValue, fieldName) {
    try {
        var chgEntryIndex; // Utility Auto Fix Comments
        var collAmt; // Utility Auto Fix Comments
        var collVatAmt; // Utility Auto Fix Comments
        var fromCcy; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var payFor; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleCollRate; // Utility Auto Fix Comments
        var toCcy; // Utility Auto Fix Comments
        map = new HashMap();
        ruleAmt = '0';
        ruleCCY = '';
        if (entry != null && typeof entry != 'undefined') {
            ruleAmt = entry.getChargeRuleAmt();
            ruleCCY = entry.getChargeRuleCcy();
        }
        collAmt = "0";
        fromCcy = record[Chg.FLD_ACTIVE_CCY];
        toCcy = record[Chg.FLD_COLLECT_CCY];
        ruleCollRate = Chg.getRule2ChgRate(fromCcy, toCcy);
        payFor = record[Chg.FLD_CHARGE_FOR];
        if (payFor == Chg.FOR_FOREIGN && isEmpty(getCharV(Chg.FLD_NOSTRO_AC_NO_MAPPING))) {
            if (value == Chg.AT_TRX || value == Chg.AT_TERM) {
                value = Chg.AT_DEFERRED;
                map.put(Chg.FLD_CHARGE_AT, Chg.AT_DEFERRED);
            }
        }
        if (value == Chg.AT_TRX) {
            if (originalValue == Chg.AT_DEFERRED) {
                ruleAmt = record[Chg.FLD_ACTIVE_AMT];
            } else {
                map.put(Chg.FLD_DISCOUNT_RATE, "0");
                map.put(Chg.FLD_DISCOUNT_AMT, "0");
            }
            map.put(Chg.FLD_ACTIVE_AMT, ruleAmt);
            collAmt = SYS_FloatMul(ruleAmt, ruleCollRate);
            collAmt = Chg_AmtFormat(collAmt, record, Chg.FLD_COLLECT_AMT, doname);
            map.put(Chg.FLD_COLLECT_AMT, collAmt);
            if (Chg.Screen.vat) {
                collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, collAmt);
                map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
            }
            map.put(Chg.FLD_BALANCE_AMT, "0");
            Chg_setValToRec(doname, record, map);
            if (originalValue == Chg.AT_FREE && ruleAmt == '0') {
                chgEntryIndex = record[Chg.FLD_CHARGE_INDEX];
                SYT_CHGDO_reSet(doname, record, chgEntryIndex);
            } else {
                Chg.Screen.setTrxFldsdisable(doname, record);
            }
        } else if (value == Chg.AT_DEFERRED) {
            if (originalValue == Chg.AT_TRX) {
                ruleAmt = record[Chg.FLD_ACTIVE_AMT];
            } else {
                map.put(Chg.FLD_DISCOUNT_RATE, "0");
                map.put(Chg.FLD_DISCOUNT_AMT, "0");
            }
            map.put(Chg.FLD_ACTIVE_AMT, ruleAmt);
            collAmt = SYS_FloatMul(ruleAmt, ruleCollRate);
            collAmt = Chg_AmtFormat(collAmt, record, Chg.FLD_COLLECT_AMT, doname);
            map.put(Chg.FLD_BALANCE_AMT, collAmt);
            map.put(Chg.FLD_COLLECT_AMT, "0");
            map.put(Chg.FLD_COLLECT_VAT_AMT, "0");
            Chg_setValToRec(doname, record, map);
            Chg.Screen.setDefFldsdisable(doname, record);
        } else if (value == Chg.AT_FREE) {
            map.put(Chg.FLD_ACTIVE_AMT, "0");
            map.put(Chg.FLD_COLLECT_AMT, "0");
            map.put(Chg.FLD_COLLECT_VAT_AMT, "0");
            map.put(Chg.FLD_BALANCE_AMT, "0");
            map.put(Chg.FLD_DISCOUNT_RATE, "100");
            map.put(Chg.FLD_DISCOUNT_AMT, ruleAmt);
            Chg_setValToRec(doname, record, map);
            Chg.Screen.setFreeFldsdisable(doname, record);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_CHARGE_AT_dealer", e);
    }
}

function SYT_CHGDO_COLLECT_AMT_dealer(value, doname, record, entry, originalValue, fieldName) {
    try {
        var balanceAmt; // Utility Auto Fix Comments
        var collVatAmt; // Utility Auto Fix Comments
        var fromCcy; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCollRate; // Utility Auto Fix Comments
        var toCcy; // Utility Auto Fix Comments
        map = new HashMap();
        value = SYS_BeFloat(value);
        value = Chg_AmtFormat(value, record, fieldName, doname);
        map.put(fieldName, value);
        fromCcy = entry.getChargeRuleCcy();
        toCcy = record[Chg.FLD_COLLECT_CCY];
        ruleCollRate = Chg.getRule2ChgRate(fromCcy, toCcy);
        ruleAmt = record[Chg.FLD_ACTIVE_AMT];
        ruleAmt = SYS_BeFloat(ruleAmt);
        ruleAmt = SYS_FloatMul(ruleAmt, ruleCollRate);
        ruleAmt = Chg_AmtFormat(ruleAmt, record, Chg.FLD_COLLECT_AMT, doname);
        if (value > ruleAmt) {
            showErrMsg('Pay amount cannot be bigger than the charge total amount.', '4637');
            map.put(fieldName, originalValue);
            Chg_setValToRec(doname, record, map);
        } else {
            balanceAmt = SYS_FloatSub(ruleAmt, value);
            if (Chg.Screen.vat) {
                collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, value);
                map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
            }
            map.put(Chg.FLD_BALANCE_AMT, balanceAmt);
            Chg_setValToRec(doname, record, map);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_COLLECT_AMT_dealer", e);
    }
}

function SYT_CHGDO_COLLECT_CCY_dealer(value, doname, record, entry, originalValue, fieldName) {
    try {
        var chgAt; // Utility Auto Fix Comments
        var collAmt; // Utility Auto Fix Comments
        var collVatAmt; // Utility Auto Fix Comments
        var disAmt; // Utility Auto Fix Comments
        var fromCcy; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCollRate; // Utility Auto Fix Comments
        if (value == "") {
            return;
        }
        map = new HashMap();
        fromCcy = entry.getChargeRuleCcy();
        ruleCollRate = Chg.getRule2ChgRate(fromCcy, value);
        ruleAmt = entry.getChargeRuleAmt();
        if (ruleAmt == '0') {
            ruleAmt = entry.getEmptyActiveAmt();
        }
        disAmt = record[Chg.FLD_DISCOUNT_AMT];
        collAmt = SYS_FloatSub(ruleAmt, disAmt);
        collAmt = SYS_FloatMul(collAmt, ruleCollRate);
        collAmt = Chg_AmtFormat(collAmt, record, Chg.FLD_COLLECT_AMT, doname);
        chgAt = record[Chg.FLD_CHARGE_AT];
        if (chgAt == Chg.AT_TRX) {
            map.put(Chg.FLD_COLLECT_AMT, collAmt);
            map.put(Chg.FLD_BALANCE_AMT, '0');
            if (Chg.Screen.vat) {
                collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, collAmt);
                map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
            }
        } else if (chgAt == Chg.AT_DEFERRED) {
            map.put(Chg.FLD_COLLECT_AMT, '0');
            map.put(Chg.FLD_BALANCE_AMT, collAmt);
        }
        if (chgAt != Chg.AT_FREE) {
            map.put(Chg.FLD_DISCOUNT_RATE, '0');
            map.put(Chg.FLD_DISCOUNT_AMT, '0');
        }
        map.put(Chg.FLD_ACTIVE_AMT, ruleAmt);
        Chg_setValToRec(doname, record, map);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_COLLECT_CCY_dealer", e);
    }
}

function SYT_CHGDO_DISCOUNT_AMT_dealer(value, doname, record, entry, originalValue, fieldName) {
    try {
        var activeAmt; // Utility Auto Fix Comments
        var chgAt; // Utility Auto Fix Comments
        var collAmt; // Utility Auto Fix Comments
        var collVatAmt; // Utility Auto Fix Comments
        var discRate; // Utility Auto Fix Comments
        var fromCcy; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var newActAmt; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleCollRate; // Utility Auto Fix Comments
        var toCcy; // Utility Auto Fix Comments
        map = new HashMap();
        value = Chg_AmtFormat(value, record, fieldName, doname);
        map.put(fieldName, value);
        ruleAmt = entry.getChargeRuleAmt();
        activeAmt = record[Chg.FLD_ACTIVE_AMT];
        if (ruleAmt > 0) {
            activeAmt = ruleAmt;
        }
        activeAmt = SYS_BeFloat(activeAmt);
        ruleAmt = SYS_BeFloat(ruleAmt);
        ruleCCY = entry.getChargeRuleCcy();
        chgAt = record[Chg.FLD_CHARGE_AT];
        fromCcy = record[Chg.FLD_ACTIVE_CCY];
        toCcy = record[Chg.FLD_COLLECT_CCY];
        ruleCollRate = Chg.getRule2ChgRate(fromCcy, toCcy);
        if (value > activeAmt) {
            showErrMsg("This discount amount should not be bigger than the charge total amount.", "4635");
            map.put(Chg.FLD_ACTIVE_AMT, ruleAmt);
            entry.setEmptyActiveAmt(ruleAmt);
            map.put(Chg.FLD_DISCOUNT_RATE, '0');
            map.put(Chg.FLD_DISCOUNT_AMT, '0');
            map.put(Chg.FLD_COLLECT_VAT_AMT, '0');
            collAmt = SYS_FloatMul(ruleAmt, ruleCollRate);
            collAmt = Chg_AmtFormat(collAmt, record, Chg.FLD_COLLECT_AMT, doname);
            if (chgAt == Chg.AT_TRX) {
                map.put(Chg.FLD_COLLECT_AMT, collAmt);
                map.put(Chg.FLD_BALANCE_AMT, '0');
            } else if (chgAt == Chg.AT_DEFERRED) {
                map.put(Chg.FLD_COLLECT_AMT, '0');
                map.put(Chg.FLD_BALANCE_AMT, collAmt);
            }
            Chg_setValToRec(doname, record, map);
            return;
        }
        if ((value == ruleAmt && ruleAmt > 0) || (value == activeAmt && ruleAmt == 0)) {
            map.put(Chg.FLD_ACTIVE_AMT, "0");
            map.put(Chg.FLD_COLLECT_AMT, "0");
            map.put(Chg.FLD_BALANCE_AMT, "0");
            map.put(Chg.FLD_COLLECT_VAT_AMT, '0');
            map.put(Chg.FLD_CHARGE_AT, Chg.AT_FREE);
            map.put(Chg.FLD_DISCOUNT_AMT, ruleAmt);
            Chg_setValToRec(doname, record, map);
            Chg.Screen.setFreeFldsdisable(doname, record);
            return;
        }
        activeAmt = SYS_BeFloat(activeAmt);
        discRate = SYS_FloatDiv(value, activeAmt);
        discRate = SYS_FloatMul(discRate, 100).toFixed(3);
        //monroe 20121113 add -s
        discRate = SYS_MidifyDecimal(discRate, true);
        //monroe 20121113 add -e
        map.put(Chg.FLD_DISCOUNT_RATE, discRate);
        newActAmt = SYS_FloatSub(activeAmt, value);
        newActAmt = Chg_AmtFormat(newActAmt, record, Chg.FLD_ACTIVE_AMT, doname);
        map.put(Chg.FLD_ACTIVE_AMT, newActAmt);
        entry.setEmptyActiveAmt(newActAmt);
        collAmt = SYS_FloatMul(newActAmt, ruleCollRate);
        collAmt = Chg_AmtFormat(collAmt, record, Chg.FLD_COLLECT_AMT, doname);
        if (chgAt == Chg.AT_TRX) {
            map.put(Chg.FLD_COLLECT_AMT, collAmt);
            map.put(Chg.FLD_BALANCE_AMT, '0');
            if (Chg.Screen.vat) {
                collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, collAmt);
                map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
            }
        } else if (chgAt == Chg.AT_DEFERRED) {
            map.put(Chg.FLD_COLLECT_AMT, '0');
            map.put(Chg.FLD_BALANCE_AMT, collAmt);
        }
        Chg_setValToRec(doname, record, map);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_DISCOUNT_AMT_dealer", e);
    }
}

function SYT_CHGDO_DISCOUNT_RATE_dealer(value, doname, record, entry, originalValue, fieldName) {
    try {
        var activeAmt; // Utility Auto Fix Comments
        var chgAt; // Utility Auto Fix Comments
        var collVatAmt; // Utility Auto Fix Comments
        var discAmt; // Utility Auto Fix Comments
        var discRate; // Utility Auto Fix Comments
        var fromCcy; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var newActAmt; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleCollRate; // Utility Auto Fix Comments
        var toCcy; // Utility Auto Fix Comments
        map = new HashMap();
        value = SYS_BeFloat(value);
        if (value > 100 || value < 0) {
            if (value > 100) {
                showErrMsg('This discount rate should not be bigger than 100.', '4636');
            }
            map.put(Chg.FLD_DISCOUNT_RATE, '0');
            map.put(Chg.FLD_DISCOUNT_RATE, '0');
            Chg_setValToRec(doname, record, map);
            return;
        }
        ruleAmt = entry.getChargeRuleAmt();
        ruleCCY = entry.getChargeRuleCcy();
        if (value == 100) {
            map.put(Chg.FLD_ACTIVE_AMT, "0");
            map.put(Chg.FLD_COLLECT_AMT, "0");
            map.put(Chg.FLD_COLLECT_VAT_AMT, "0");
            map.put(Chg.FLD_BALANCE_AMT, "0");
            map.put(Chg.FLD_CHARGE_AT, Chg.AT_FREE);
            map.put(Chg.FLD_DISCOUNT_AMT, ruleAmt);
            Chg_setValToRec(doname, record, map);
            Chg.Screen.setFreeFldsdisable(doname, record);
            return;
        }
        fromCcy = record[Chg.FLD_ACTIVE_CCY];
        toCcy = record[Chg.FLD_COLLECT_CCY];
        ruleCollRate = Chg.getRule2ChgRate(fromCcy, toCcy);
        activeAmt = record[Chg.FLD_ACTIVE_AMT];
        if (ruleAmt > 0) {
            activeAmt = ruleAmt;
        }
        activeAmt = SYS_BeFloat(activeAmt);
        discRate = SYS_FloatDiv(value, 100);
        discAmt = SYS_FloatMul(activeAmt, discRate).toFixed(3);
        discAmt = Chg_AmtFormat(discAmt, record, Chg.FLD_DISCOUNT_AMT, doname);
        map.put(Chg.FLD_DISCOUNT_AMT, discAmt);
        newActAmt = SYS_FloatSub(activeAmt, discAmt);
        newActAmt = Chg_AmtFormat(newActAmt, record, Chg.FLD_ACTIVE_AMT, doname);
        map.put(Chg.FLD_ACTIVE_AMT, newActAmt);
        entry.setEmptyActiveAmt(newActAmt);
        newActAmt = SYS_FloatMul(newActAmt, ruleCollRate);
        newActAmt = Chg_AmtFormat(newActAmt, record, Chg.FLD_COLLECT_AMT, doname);
        chgAt = record[Chg.FLD_CHARGE_AT];
        if (chgAt == Chg.AT_TRX) {
            map.put(Chg.FLD_COLLECT_AMT, newActAmt);
            if (Chg.Screen.vat) {
                collVatAmt = Chg.Screen.getVatCollectAmt(doname, record, newActAmt);
                map.put(Chg.FLD_COLLECT_VAT_AMT, collVatAmt);
            }
            map.put(Chg.FLD_BALANCE_AMT, '0');
        } else if (chgAt == Chg.AT_DEFERRED) {
            map.put(Chg.FLD_COLLECT_AMT, '0');
            map.put(Chg.FLD_BALANCE_AMT, newActAmt);
        }
        Chg_setValToRec(doname, record, map);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_DISCOUNT_RATE_dealer", e);
    }
}

function SYT_CHGDO_allChargeAt_changeDealer(chgAt, doName) {
    try {
        var charge; // Utility Auto Fix Comments
        var chgAtVal; // Utility Auto Fix Comments
        var chgFor; // Utility Auto Fix Comments
        var chgindex; // Utility Auto Fix Comments
        var commCodes; // Utility Auto Fix Comments
        var entry; // Utility Auto Fix Comments
        var fchgAt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        var oriChgAt; // Utility Auto Fix Comments
        var oriChgAtVal; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        node = SYS_getDoByXpath(doName); //Chg.Screen.trxChgDoNm
        if (node == null) {
            return;
        }
        trxChgArr = SYS_getRecords(node);
        mData = [];



        obj = {};
        commCodes = [];
        chgAtVal = [];
        oriChgAtVal = [];

        for (i = 0, len = trxChgArr.length; i < len; i++) {
            charge = trxChgArr[i];
            fchgAt = chgAt;
            chgFor = SYS_getValFromRec(charge, Chg.FLD_CHARGE_FOR);
            oriChgAt = SYS_getValFromRec(charge, Chg.FLD_CHARGE_AT);
            if (chgFor == Chg.FOR_FOREIGN && isEmpty(Chg.Screen.getNostroAcNo())) {
                fchgAt = Chg.AT_DEFERRED;
            }
            SYS_setValToRec(charge, Chg.FLD_CHARGE_AT, fchgAt);
            chgindex = SYS_getValFromRec(charge, Chg.FLD_CHARGE_INDEX);
            entry = Chg.Screen.getOrignalTrxChg(chgindex);
            if (entry != null && (entry.getChargeRuleAmt() > 0 || entry.getEmptyActiveAmt() > 0)) {
                commCodes.push(entry.getCommCode());
                chgAtVal.push(chgAt);
                oriChgAtVal.push(oriChgAt);
            }
            mData.push(charge);
        }
        SYS_reLoadGrid(node, mData);
        for (j = 0, len = commCodes.length; j < len; j++) {
            obj.value = chgAtVal[j];
            obj.originalValue = oriChgAtVal[j];
            obj.fieldName = Chg.FLD_CHARGE_AT;
            //charge = Chg.Screen.getTrxChargeByCommCode(commCodes[j]);
            //ChgDoTrx_CHG_CHARGE_AT_onchange(obj,Chg.Screen.trxChgDoNm,charge.record);
            if (Chg.Screen.trxChgDoNm == doName) {
                charge = Chg.Screen.getTrxChargeByCommCode(commCodes[j]);
                ChgDoTrx_CHG_CHARGE_AT_onChange(obj, Chg.Screen.trxChgDoNm, charge.record);
            } else if (Chg.Screen.defChgDoNm == doName) {
                charge = Chg.Screen.getOrignalDefChgByCommCode(commCodes[j]);
                ChgDoDef_CHG_CHARGE_AT_onChange(obj, Chg.Screen.defChgDoNm, charge.record);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_allChargeAt_changeDealer", e);
    }
}

function SYT_CHGDO_allChargeAt_onchange() {
    try {
        var chgAt; // Utility Auto Fix Comments
        chgAt = $('CHG_FLD_ALL_CHARGE_AT').value;
        SYT_CHGDO_allChargeAt_changeDealer(chgAt, Chg.Screen.trxChgDoNm);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_allChargeAt_onchange", e);
    }
}

function SYT_CHGDO_allChargeFor_onchange() {
    try {
        var charge; // Utility Auto Fix Comments
        var chgFor; // Utility Auto Fix Comments
        var chgindex; // Utility Auto Fix Comments
        var commCodes; // Utility Auto Fix Comments
        var entry; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        chgFor = $('CHG_FLD_ALL_CHARGE_FOR').value;
        if (chgFor == Chg.FOR_FOREIGN) {
            if (isEmpty(Chg.Screen.getForeignCustName())) {
                showErrMsg('Foreign customer name is missing.', '4639');
                return false;
            }
            if (isEmpty(Chg.Screen.getNostroAcNo())) {
                $('CHG_FLD_ALL_CHARGE_AT').value = Chg.AT_DEFERRED;
                //charge = SYS_setValToRec(charge,Chg.FLD_CHARGE_FOR,chgFor);
            }
        }
        node = SYS_getDoByXpath(Chg.Screen.trxChgDoNm);
        if (node == null) {
            return;
        }
        trxChgArr = SYS_getRecords(node);



        mData = [];
        commCodes = [];
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            if (chgFor == Chg.FOR_FOREIGN && isEmpty(Chg.Screen.getNostroAcNo())) {
                SYS_setValToRec(charge, Chg.FLD_CHARGE_AT, Chg.AT_DEFERRED);
            }
            SYS_setValToRec(charge, Chg.FLD_CHARGE_FOR, chgFor);
            chgindex = SYS_getValFromRec(charge, Chg.FLD_CHARGE_INDEX);
            entry = Chg.Screen.getOrignalTrxChg(chgindex);
            if (entry != null && entry.getChargeRuleAmt() > 0) {
                commCodes.push(entry.getCommCode());
            }
            mData.push(charge);
        }
        SYS_reLoadGrid(node, mData);
        Chg.recalculate(commCodes);
        Chg_MultiDebitInvoker();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_allChargeFor_onchange", e);
    }
}

function SYT_CHGDO_allCollectCCY_onchange() {
    try {
        var charge; // Utility Auto Fix Comments
        var chgindex; // Utility Auto Fix Comments
        var collCcy; // Utility Auto Fix Comments
        var commCodes; // Utility Auto Fix Comments
        var entry; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        var oriCollCcys; // Utility Auto Fix Comments
        var oriCollVal; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        collCcy = $('CHG_COLL_CCY').value;
        node = SYS_getDoByXpath(Chg.Screen.trxChgDoNm);
        if (node == null) {
            return;
        }
        trxChgArr = SYS_getRecords(node);
        mData = [];


        obj = {};
        commCodes = [];
        oriCollCcys = [];
        for (i = 0, len = trxChgArr.length; i < len; i++) {
            charge = trxChgArr[i];
            oriCollVal = SYS_getValFromRec(charge, Chg.FLD_COLLECT_CCY);

            chgindex = SYS_getValFromRec(charge, Chg.FLD_CHARGE_INDEX);
            entry = Chg.Screen.getOrignalTrxChg(chgindex);
            if (entry != null && (entry.getChargeRuleAmt() > 0 || entry.getEmptyActiveAmt() > 0)) {
                SYS_setValToRec(charge, Chg.FLD_COLLECT_CCY, collCcy);
                commCodes.push(entry.getCommCode());
                oriCollCcys.push(oriCollVal);
            }
            mData.push(charge);
        }
        SYS_reLoadGrid(node, mData);
        for (j = 0, len = commCodes.length; j < len; j++) {
            obj.value = collCcy;
            obj.originalValue = oriCollCcys[j];
            obj.fieldName = Chg.FLD_COLLECT_CCY;
            charge = Chg.Screen.getTrxChargeByCommCode(commCodes[j]);
            ChgDoTrx_CHG_COLLECT_CCY_onChange(obj, Chg.Screen.trxChgDoNm, charge.record);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_allCollectCCY_onchange", e);
    }
}

function SYT_CHGDO_allDefChargeAt_onchange() {
    try {
        var chgAt; // Utility Auto Fix Comments
        chgAt = $('CHG_FLD_ALL_CHARGE_AT').value;
        SYT_CHGDO_allChargeAt_changeDealer(chgAt, Chg.Screen.defChgDoNm);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_allDefChargeAt_onchange", e);
    }
}

function SYT_CHGDO_dealCommDescToolTip(entry, value) {
    try {
        var tip; // Utility Auto Fix Comments
        tip = "";
        if (entry != null && entry.getCommCode() != Chg.OTHER) {
            tip = entry.getRateInfo();
            if (tip != "") {
                tip = tip.replace(/\|\|/g, '||</br>');
                value = tip;
            }
        }
        return value;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_dealCommDescToolTip", e);
    }
}

function SYT_CHGDO_reSet(doName, record, chgEntryIndex) {
    try {
        var entry; // Utility Auto Fix Comments
        var map; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        map = new HashMap();
        Chg.Screen.setFreeFldsdisable(doName, record);
        //entry = Chg.Screen.getOrignalTrxChg(chgEntryIndex)
        entry = null;
        if (doName == Chg.Screen.defChgDoNm) {
            entry = Chg.Screen.getOrignalDefChg(chgEntryIndex);
        } else {
            entry = Chg.Screen.getOrignalTrxChg(chgEntryIndex);
        }
        if (entry == null) {
            map.put(Chg.FLD_ACTIVE_AMT, "0");
            map.put(Chg.FLD_COLLECT_AMT, "0");
            map.put(Chg.FLD_BALANCE_AMT, "0");
            map.put(Chg.FLD_DISCOUNT_RATE, "0");
            map.put(Chg.FLD_DISCOUNT_AMT, "0");
            map.put(Chg.FLD_VAT_RATE, "0");
            map.put(Chg.FLD_COLLECT_VAT_AMT, "0");
            Chg_setValToRec(doName, record, map);
        } else {
            ruleAmt = entry.getChargeRuleAmt();
            if (ruleAmt > 0) {
                map.put(Chg.FLD_CHARGE_AT, Chg.AT_FREE);
                map.put(Chg.FLD_BALANCE_AMT, "0");
                map.put(Chg.FLD_COLLECT_AMT, "0");
                map.put(Chg.FLD_DISCOUNT_RATE, "100");
                map.put(Chg.FLD_DISCOUNT_AMT, ruleAmt);
                //map.put(Chg.FLD_VAT_RATE,"0");
                map.put(Chg.FLD_COLLECT_VAT_AMT, "0");
            } else {
                SYS_enableCellflds(doName, record, Chg.FLD_ACTIVE_AMT);
                SYS_disableCellflds(doName, record, Chg.FLD_CHARGE_AT);
                map.put(Chg.FLD_COLLECT_AMT, "0");
                map.put(Chg.FLD_BALANCE_AMT, "0");
                map.put(Chg.FLD_DISCOUNT_RATE, "0");
                map.put(Chg.FLD_DISCOUNT_AMT, "0");
                //map.put(Chg.FLD_VAT_RATE,"0");
                map.put(Chg.FLD_COLLECT_VAT_AMT, "0");
            }
            Chg_setValToRec(doName, record, map);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHGDO_reSet", e);
    }
}

function SYT_CHG_INIT(sInitFuncName, sCallbackFuncName) {
    try {
        var arr; // Utility Auto Fix Comments
        var arr_Func; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sTrxFuncType; // Utility Auto Fix Comments
        sTrxFuncType = "PM||MM||KP";
        arr_Func = new Array("EPLC_PayAccept", "EPLC_PayAtMaturity", "EPLC_SettlePartialPayment", "EPLC_Discount", "EXCO_Payment", "EXCO_SettlementAtMaturity", "EXCO_Process400", "EXCO_Discount", "EXCO_Payment_FromCE", "EXCO_SettlementAtMaturityFrCE");

        switch (SYS_MODULE_NAME) {
            case "EPLC":
                Chg.Screen.mapLocalCust("BENE_ID", "BENE_NM");
                Chg.Screen.mapForeignCust("TEMP_APPL_ID", "APPL_NM");
                Chg.Screen.mapTrxMainRef('C_MAIN_REF');
                break;
            case "EXCO":
                Chg.Screen.mapLocalCust("DRWR_ID", "DRWR_NM");
                Chg.Screen.mapForeignCust("TEMP_DRWE_ID", "DRWE_NM");
                break;
            case "SBLC":
                Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
                Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM");
                break;
        }

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');

        /*DynamicPara*/
        arr = new Array();
        arr[0] = "C_BUSI_TYPE";
        arr[1] = "C_CUST_TYPE";
        arr[2] = "C_CHAN_TYPE";
        Chg.Screen.mapDynamicParas(arr);



        for (i = 0; i < arr_Func.length; i++) {
            if (SYS_ORG_FUNCTION_NAME == arr_Func[i]) {
                //define attach defer chg
                CHG_attachSetDefChargeAt();

                //re-mapForeignCust to allow select [paid at] as transaction
                if (SYS_ORG_FUNCTION_NAME != "EXCO_Discount" && SYS_ORG_FUNCTION_NAME != "EPLC_Discount" && SYS_ORG_FUNCTION_NAME != "EPLC_PayAccept") {
                    if (SYS_MODULE_NAME == "EPLC") {

                        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept") {

                            if ((document.MAINFORM.AVAL_BY.value == 'BY PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION' || document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT')) {
                                Chg.Screen.mapForeignCust("TEMP_APPL_ID", "APPL_NM", "PRES_CCY", "C_MAIN_REF");
                            }
                        } else {

                            Chg.Screen.mapForeignCust("TEMP_APPL_ID", "APPL_NM", "PRES_CCY", "C_MAIN_REF");
                        }
                    }
                    if (SYS_MODULE_NAME == "EXCO") {
                        Chg.Screen.mapForeignCust("TEMP_DRWE_ID", "DRWE_NM", "COLL_CCY", "C_MAIN_REF");
                        //Chg.Screen.mapForeignCust("TEMP_DRWE_ID", "DRWE_NM");//64666 20190225;	
                    }
                }
                //set init default value
                if (sTrxFuncType.indexOf(SYS_FUNCTION_TYPE) > -1) {
                    //set default value - Paid At
                    CHG_setAllChargeAt(0);
                }
            }
        }
        if (sTrxFuncType.indexOf(SYS_FUNCTION_TYPE) > -1) {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY(); //add by tracery for charge voucher - debit ccy
        }

        //for sCallBackFunc
        if (sCallbackFuncName != null) {
            Chg.attchEvent(sCallbackFuncName);
        }

        //sInitFuncName = need to run in Init
        if (sTrxFuncType.indexOf(SYS_FUNCTION_TYPE) > -1 && sInitFuncName != null) {
            eval(sInitFuncName + "()");

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHG_INIT", e);
    }
}

function SYT_CHG_PROTECT_Trx_Def_Charge_UnpaidCCY(COMM_CODE) {
    try {
        var Obj_CHG_DefCharge; // Utility Auto Fix Comments
        var Obj_CHG_DefCharge_length; // Utility Auto Fix Comments
        var Obj_CHG_TrxCharge; // Utility Auto Fix Comments
        var Obj_CHG_TrxCharge_length; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        Obj_CHG_TrxCharge = Chg.Screen.getAllTrxCharge();
        Obj_CHG_DefCharge = Chg.Screen.getAllDefCharge();
        Obj_CHG_TrxCharge_length = Obj_CHG_TrxCharge.length;
        Obj_CHG_DefCharge_length = Obj_CHG_DefCharge.length;
        for (m = 0; m < Obj_CHG_TrxCharge_length; m++) {
            if (Obj_CHG_TrxCharge[m].getCommCode() == COMM_CODE) {
                Obj_CHG_TrxCharge[m]._protectBalCcy(); // Utility Auto Fix Comments
            }
        }
        for (n = 0; n < Obj_CHG_DefCharge_length; n++) {
            if (Obj_CHG_DefCharge[n].getCommCode() == COMM_CODE) {
                Obj_CHG_DefCharge[n]._protectBalCcy(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHG_PROTECT_Trx_Def_Charge_UnpaidCCY", e);
    }
}

function SYT_CHG_TotalAmt_onChange(localTotalAmt, foreignTotalAmt) {
    try {
        var totalAmt; // Utility Auto Fix Comments
        if (localTotalAmt == "") {
            localTotalAmt = "0";
        }
        if (foreignTotalAmt == "") {
            foreignTotalAmt = "0";
        }
        totalAmt = parseFloat(localTotalAmt) + parseFloat(foreignTotalAmt);
        if (totalAmt > 0) {
            document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
            SYS_changeClassName('CHG_VALUE_DATE', 'M');
        } else {
            SYS_changeClassName('CHG_VALUE_DATE', 'P');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHG_TotalAmt_onChange", e);
    }
}

function SYT_CHG_VOUCHER() {
    try {
        var nAmt_Foreign; // Utility Auto Fix Comments
        var nAmt_Local; // Utility Auto Fix Comments
        var sACNO; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        //DR AC INFO
        sACNO = "";
        sMark = (SYS_ORG_FUNCTION_NAME.indexOf("_SettleCharges") > -1) ? "YES" : "NO";
        if (sMark == "YES") {
            if (document.MAINFORM.CHG_BANK_FLG.value == "Foreign") {
                sACNO = document.MAINFORM.STL_CHG_ACNO.value;
                document.MAINFORM.CHG_CUST_CCY.value = Chg.Screen.getNostroCcy();
            } else {
                if (typeof document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO != 'undefined') {
                    sACNO = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
                    document.MAINFORM.CHG_CUST_CCY.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
                }
            }
        } else {
            if (typeof document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO != 'undefined') {
                sACNO = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
                document.MAINFORM.CHG_CUST_CCY.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
            }
        }
        // modify by amy for PYMT module
        if (SYS_MODULE_NAME == "PYMT") {
            if (typeof document.MAINFORM.INW_X103_DET_CHG_71A != 'undefined' && document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                if (SYS_ORG_FUNCTION_NAME == "ITTRecoverAdditionalCharges") {
                    sACNO = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
                } else {
                    sACNO = document.MAINFORM.STL_CHG_ACNO.value;
                }
                document.MAINFORM.CHG_CUST_CCY.value = Chg.Screen.getNostroCcy();
            }
        }
        //FOR VOUCHER DEBIT AMT
        if (typeof document.MAINFORM.CHG_CUST_AC != 'undefined') {
            document.MAINFORM.CHG_CUST_AC.value = sACNO;
            nAmt_Local = Chg.Screen.getLocalChgCustPayTotalAmt(); //modify by sunny
            nAmt_Foreign = Chg.Screen.getForeignChgCustPayTotalAmt();
            if (sMark == "YES") {
                document.MAINFORM.CHG_CUST_AMT.value = Math.max(nAmt_Local, nAmt_Foreign);
            } else {
                document.MAINFORM.CHG_CUST_AMT.value = Chg.Screen.getLocalChgCustPayTotalAmt() + Chg.Screen.getLocalPayVatTotalAmt(); //modify by hiton
            }
            if (sACNO.length > 0) {
                document.MAINFORM.CHG_CUST_AMT_DR.value = document.MAINFORM.CHG_CUST_AMT.value;
            } else {
                document.MAINFORM.CHG_CUST_AMT_DR.value = 0;
            }
            document.MAINFORM.CHG_CUST_AMT.value = Math.max(nAmt_Local, nAmt_Foreign); //for charge voucher
            //FX for local customer
            if (SYS_ORG_FUNCTION_NAME != "SYND_SettleCharges") {
                if (document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value != document.MAINFORM.CHG_FLD_COLLECT_CCY.value) {
                    document.MAINFORM.CHG_LOCAL_FX_AMT_CR.value = Chg.Screen.getLocalPayTotalAmt();
                    document.MAINFORM.CHG_LOCAL_FX_AMT_DR.value = Chg.Screen.getLocalCollectTotalAmt();
                    document.MAINFORM.CHG_LOCAL_FX_CCY_CR.value = Chg.Screen.getLocalCustCcy();
                    document.MAINFORM.CHG_LOCAL_FX_CCY_DR.value = Chg.Screen.getCollectCcy();
                } else {
                    document.MAINFORM.CHG_LOCAL_FX_AMT_DR.value = 0;
                    document.MAINFORM.CHG_LOCAL_FX_AMT_CR.value = 0;
                }

                //FX for forgein customer
                document.MAINFORM.CHG_FCUST_CCY.value = Chg.Screen.getNostroCcy();
                if (document.MAINFORM.CHG_FCUST_CCY.value != document.MAINFORM.CHG_FLD_COLLECT_CCY.value) {
                    document.MAINFORM.CHG_FOREIGN_FX_AMT_DR.value = Chg.Screen.getForeignChgTotalAmt();
                    document.MAINFORM.CHG_FOREIGN_FX_AMT_CR.value = Chg.Screen.getForeignChgCustPayTotalAmt();
                    document.MAINFORM.CHG_FOREIGN_FX_CCY_CR.value = Chg.Screen.getNostroCcy();
                    document.MAINFORM.CHG_FOREIGN_FX_CCY_DR.value = Chg.Screen.getCollectCcy();
                } else {
                    document.MAINFORM.CHG_FOREIGN_FX_AMT_DR.value = 0;
                    document.MAINFORM.CHG_FOREIGN_FX_AMT_CR.value = 0;
                }
            }
        }
        //FOR VOUCHER BOOKING DATE
        if ('SYND' != SYS_MODULE_NAME && SYS_ORG_FUNCTION_NAME != "SYND_SettleCharges") {
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE;
        }
        //FOR VOUCHER DESCRIPTION
        SYT_Cal_C_VOUCHER_DESC('charge');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHG_VOUCHER", e);
    }
}

function SYT_CHK_AC_NO(oAC_NO) {
    try {
        if (oAC_NO.value != "" && oAC_NO.value.substr(0, 1) != "/") {
            oAC_NO.value = "/" + oAC_NO.value + "/";
            if (oAC_NO.value.length > 35) {
                SYS_CheckError(oAC_NO, "The max length for this field is 35!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHK_AC_NO", e);
    }
}

function SYT_CHK_AC_NO_IDNT(oAC_NO_ID) {
    try {
        if (oAC_NO_ID.value != "" && oAC_NO_ID.value.substr(0, 1) != "/") {
            oAC_NO_ID.value = "/" + oAC_NO_ID.value + "/";
            if (oAC_NO_ID.value.length > 35) {
                SYS_CheckError(oAC_NO_ID, "The max length for this field is 35!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHK_AC_NO_IDNT", e);
    }
}

function SYT_CHK_FOREIGN_CHG_ACNO() {
    try {
        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var strChgFor; // Utility Auto Fix Comments
        strChgFor = document.MAINFORM.CHG_BANK_FLG.value;
        if (strChgFor == "Foreign") {
            defChgArr = Chg.Screen.getAllDefCharge();
            for (i = 0; i < defChgArr.length; i++) {
                charge = defChgArr[i];
                if (charge.getChargeAt() == "1") {
                    alert('Please Input Foreign Payment Information Before Confirmed This Tranaction !');
                    return true;
                }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CHK_FOREIGN_CHG_ACNO", e);
    }
}

function SYT_CLEANPAY_VOUCHER() {
    try {
        if (document.MAINFORM.CPYT_DR_CCY.value != document.MAINFORM.CPYT_CR_CCY.value) {
            document.MAINFORM.TEMP_AC_AMT1.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value);
            document.MAINFORM.TEMP_AC_AMT2.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value);
        } else {
            document.MAINFORM.TEMP_AC_AMT1.value = 0;
            document.MAINFORM.TEMP_AC_AMT2.value = 0;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CLEANPAY_VOUCHER", e);
    }
}

function SYT_CLERK_ID() {
    try {
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.CNTY_CODE.value = SYS_BANK_COUNTRY;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CLERK_ID", e);
    }
}

function SYT_CONF_BAL_LCCCY() {
    try {
        var lc_bal; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.CONF_INSTR.value == 'MAY ADD') {
            lc_bal = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            per = SYS_BeFloat(document.MAINFORM.CONF_PCT.value) / 100;
            document.MAINFORM.CONF_BAL_LCCCY.value = lc_bal * per;
            document.MAINFORM.CONF_BAL_LCCCY.value = SYS_formatAmt_Single(document.MAINFORM.CONF_BAL_LCCCY.valuel, document.MAINFORM.LC_CCY.value);
        } else {
            document.MAINFORM.CONF_PCT.value = 0;
            document.MAINFORM.CONF_BAL_LCCCY.value = 0.00;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CONF_BAL_LCCCY", e);
    }
}

function SYT_Cal_BaseEquAmt(ccyObj, amtObj, rateType, rateObj) {
    try {
        var baseAmt; // Utility Auto Fix Comments
        amtObj.value = SYS_BeFloat(amtObj.value);

        if (ccyObj.value != "") {
            if (amtObj.value > 0) {
                if (ccyObj.value != SYS_LOCAL_CCY) {
                    SYS_GetExchangeRate_S(ccyObj.value, SYS_LOCAL_CCY, rateType, rateObj.name);
                    baseAmt = SYS_BeFloat(amtObj.value) * SYS_BeFloat(rateObj.value);

                } else {
                    baseAmt = SYS_BeFloat(amtObj.value);
                }
            }
            return baseAmt;
        } else {
            return 0;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_BaseEquAmt", e);
    }
}

function SYT_Cal_CHG_FLD_LOCAL_CUST_CCY() {
    try {
        var sTrxFuncType; // Utility Auto Fix Comments
        sTrxFuncType = "PM||MM||KP||EC";
        if (sTrxFuncType.indexOf(SYS_FUNCTION_TYPE) > -1) {
            if (SYS_MODULE_NAME == 'EPLC' || SYS_MODULE_NAME == 'IPLC' || SYS_MODULE_NAME == 'REIM' || SYS_MODULE_NAME == 'SBLC') {
                CHG_setAllLocalPayCcy(document.MAINFORM.LC_CCY.value);
                EEHtml.attachEventListener(document.MAINFORM.LC_CCY, "onchange", new Function("CHG_setAllLocalPayCcy(document.MAINFORM.LC_CCY.value)"));
            } else if (SYS_MODULE_NAME == 'IMCO' || SYS_MODULE_NAME == 'EXCO') {
                CHG_setAllLocalPayCcy(document.MAINFORM.COLL_CCY.value);
                EEHtml.attachEventListener(document.MAINFORM.COLL_CCY, "onchange", new Function("CHG_setAllLocalPayCcy(document.MAINFORM.COLL_CCY.value)"));
            } else if (SYS_MODULE_NAME == 'IWGT' || SYS_MODULE_NAME == 'GTEE') {
                CHG_setAllLocalPayCcy(document.MAINFORM.GTEE_CCY.value);
                EEHtml.attachEventListener(document.MAINFORM.GTEE_CCY, "onchange", new Function("CHG_setAllLocalPayCcy(document.MAINFORM.GTEE_CCY.value)"));
            } else if (SYS_MODULE_NAME == 'RPFM') {
                CHG_setAllLocalPayCcy(document.MAINFORM.PART_RISK_CCY.value);
                EEHtml.attachEventListener(document.MAINFORM.PART_RISK_CCY, "onchange", new Function("CHG_setAllLocalPayCcy(document.MAINFORM.PART_RISK_CCY.value)"));
            } else if (SYS_MODULE_NAME == 'SYND' && SYS_ORG_FUNCTION_NAME == 'RegParticipation') {
                CHG_setAllLocalPayCcy(document.MAINFORM.MAST_LC_CCY.value);
                EEHtml.attachEventListener(document.MAINFORM.MAST_LC_CCY, "onchange", new Function("CHG_setAllLocalPayCcy(document.MAINFORM.MAST_LC_CCY.value)"));
            } else if (SYS_MODULE_NAME == 'SHGT') {
                CHG_setAllLocalPayCcy(document.MAINFORM.SG_CCY.value);
                EEHtml.attachEventListener(document.MAINFORM.SG_CCY, "onchange", new Function("CHG_setAllLocalPayCcy(document.MAINFORM.SG_CCY.value)"));
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_CHG_FLD_LOCAL_CUST_CCY", e);
    }
}

function SYT_Cal_C_TRANS_CODE() {
    try {
        var i; // Utility Auto Fix Comments
        var len1; // Utility Auto Fix Comments
        var len2; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var resultValue; // Utility Auto Fix Comments
        var targetDo1; // Utility Auto Fix Comments
        var targetDo2; // Utility Auto Fix Comments
        var vGTEE_TYPE; // Utility Auto Fix Comments
        switch (SYS_MODULE_NAME) {
            case "EXCO":
                if (document.MAINFORM.DELVR_DOC_AGST != null) {
                    if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
                        document.MAINFORM.C_TRANS_CODE.value = '400';
                    } else {
                        document.MAINFORM.C_TRANS_CODE.value = '401';
                    }
                }
                break;
            case "IMCO":
                if (document.MAINFORM.DELVR_DOC_AGST != null) {
                    if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
                        document.MAINFORM.C_TRANS_CODE.value = '300';
                    } else {
                        document.MAINFORM.C_TRANS_CODE.value = '301';
                    }
                }
                break;
            case "GTEE":
            case "IWGT":
                if (document.MAINFORM.GTEE_TYPE2 != null && document.MAINFORM.GTEE_TYPE != null) {
                    vGTEE_TYPE = document.MAINFORM.GTEE_TYPE.value;
                    if (document.MAINFORM.GTEE_TYPE2.value == "abstract guarantee") {
                        switch (vGTEE_TYPE) {
                            case "bid bond":
                                document.MAINFORM.C_TRANS_CODE.value = '500';
                                break;
                            case "advance payment guarantee":
                                document.MAINFORM.C_TRANS_CODE.value = '510';
                                break;
                            case "performance guarantee":
                                document.MAINFORM.C_TRANS_CODE.value = '520';
                                break;
                            case "guarantee securing credit line":
                                document.MAINFORM.C_TRANS_CODE.value = '530';
                                break;
                            case "payment guarantee":
                                document.MAINFORM.C_TRANS_CODE.value = '540';
                                break;
                            case "guarantee securing rent":
                                document.MAINFORM.C_TRANS_CODE.value = '550';
                                break;
                            case "guarantee for court":
                                document.MAINFORM.C_TRANS_CODE.value = '560';
                                break;
                            case "guarantee for credit cards":
                                document.MAINFORM.C_TRANS_CODE.value = '570';
                                break;
                            case "letter of indemnity for missing documents":
                                document.MAINFORM.C_TRANS_CODE.value = '580';
                                break;
                            case "construction guarantee for projects in Switzerland":
                                document.MAINFORM.C_TRANS_CODE.value = '590';
                                break;
                            case "construction guarantee for projects outside of Switzerland":
                                document.MAINFORM.C_TRANS_CODE.value = '591';
                                break;
                            case "Standby":
                                document.MAINFORM.C_TRANS_CODE.value = '';
                                break;
                        }
                    } else {
                        switch (vGTEE_TYPE) {
                            case "bid bond":
                                document.MAINFORM.C_TRANS_CODE.value = '600';
                                break;
                            case "advance payment guarantee":
                                document.MAINFORM.C_TRANS_CODE.value = '610';
                                break;
                            case "performance guarantee":
                                document.MAINFORM.C_TRANS_CODE.value = '620';
                                break;
                            case "guarantee securing credit line":
                                document.MAINFORM.C_TRANS_CODE.value = '630';
                                break;
                            case "payment guarantee":
                                document.MAINFORM.C_TRANS_CODE.value = '640';
                                break;
                            case "guarantee securing rent":
                                document.MAINFORM.C_TRANS_CODE.value = '650';
                                break;
                            case "guarantee for court":
                                document.MAINFORM.C_TRANS_CODE.value = '660';
                                break;
                            case "guarantee for credit cards":
                                document.MAINFORM.C_TRANS_CODE.value = '670';
                                break;
                            case "letter of indemnity for missing documents":
                                document.MAINFORM.C_TRANS_CODE.value = '680';
                                break;
                            case "construction guarantee for projects in Switzerland":
                                document.MAINFORM.C_TRANS_CODE.value = '690';
                                break;
                            case "construction guarantee for projects outside of Switzerland":
                                document.MAINFORM.C_TRANS_CODE.value = '691';
                                break;
                            case "Standby":
                                document.MAINFORM.C_TRANS_CODE.value = '';
                                break;
                        }
                    }
                }
                break;
        }

        //modify by mary on 09.02.26 to fix bug
        if (document.MAINFORM.PaymentDealer == null && document.MAINFORM.PaymentInstructionDealer == null) {
            return;
        }
        targetDo1 = SYS_GetObjByDoName("PaymentCredit");
        len1 = targetDo1.length;
        targetDo2 = SYS_GetObjByDoName("PaymentDebit");
        len2 = targetDo2.length;
        resultValue = document.MAINFORM.C_TRANS_CODE.value;

        for (i = 0; i < len1; i++) {
            record = targetDo1[i];
            SYS_UpdateFldValueByDo(record, 'CPYT_CR_C_TRANS_CODE', resultValue);
        }
        for (i = 0; i < len2; i++) {
            record = targetDo2[i];
            SYS_UpdateFldValueByDo(record, 'CPYT_DR_C_TRANS_CODE', resultValue);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_C_TRANS_CODE", e);
    }
}

function SYT_Cal_C_VOUCHER_DESC(VCH_TYPE) {
    try {
        var sC_VOUCHER_DESC_CR; // Utility Auto Fix Comments
        var sC_VOUCHER_DESC_DR; // Utility Auto Fix Comments
        var sFUNC_SHORT_NAME; // Utility Auto Fix Comments
        sC_VOUCHER_DESC_DR = '';
        sC_VOUCHER_DESC_CR = '';
        sFUNC_SHORT_NAME = SYT_FUNC_SHORT_NAME();

        if (VCH_TYPE == 'charge') {
            switch (SYS_MODULE_NAME) {
                case "IMCO":
                    sC_VOUCHER_DESC_DR = 'IMCO04COMMNULLNULLC';
                    if (document.MAINFORM.SEPARATE_CHG_FLG != null && document.MAINFORM.SEPARATE_CHG_FLG.value == 'No') {
                        sC_VOUCHER_DESC_CR = 'IMCO03COMMNULLNULLI';
                    } else {
                        sC_VOUCHER_DESC_CR = 'IMCO04COMMNULLNULLI';
                    }
                    break;
                case "EXCO":
                    sC_VOUCHER_DESC_DR = 'EXCO02COMMNULLNULLC';
                    sC_VOUCHER_DESC_CR = 'EXCO02COMMNULLNULLI';
                    if (document.MAINFORM.STL_INSTR_FLG != null && document.MAINFORM.STL_INSTR_FLG.value == 'Take Charges Separately') {
                        sC_VOUCHER_DESC_CR = 'EXCO02COMMNULLNULLI';
                    } else {
                        if (SYT_FUNC_SHORT_NAME() == 'PAYMENT') {
                            sC_VOUCHER_DESC_CR = 'EXCO01COMMNULLNULLI';
                        } else if (SYT_FUNC_SHORT_NAME() == 'DISCOUNT') {
                            sC_VOUCHER_DESC_CR = 'EXCO04COMMNULLNULLI';
                        } else if (SYT_FUNC_SHORT_NAME() == 'STTLMNTATMTRT' && document.MAINFORM.DISCNT_FLG.value == "YES") {
                            sC_VOUCHER_DESC_CR = 'EXCO06COMMNULLNULLI';
                        }
                    }
                    break;
                case "IPLC":
                    sC_VOUCHER_DESC_DR = 'IPLC11COMMNULLNULLC';
                    sC_VOUCHER_DESC_CR = 'IPLC11COMMNULLNULLI';
                    break;
                case "EPLC":
                    sC_VOUCHER_DESC_DR = 'EPLC11COMMNULLNULLC';
                    sC_VOUCHER_DESC_CR = 'EPLC11COMMNULLNULLI';
                    break;
                case "IWGT":
                    sC_VOUCHER_DESC_DR = 'IWGT03COMMNULLNULLC';
                    sC_VOUCHER_DESC_CR = 'IWGT03COMMNULLNULLI';
                    if (document.MAINFORM.SEPARATE_CHG_FLG != null && document.MAINFORM.SEPARATE_CHG_FLG.value == 'No') {
                        sC_VOUCHER_DESC_CR = 'IWGT04COMMNULLNULLI';
                    }
                    break;
                case "GTEE":
                    if (sFUNC_SHORT_NAME == 'RegPLF' || sFUNC_SHORT_NAME == 'AMDPLF' || sFUNC_SHORT_NAME == 'SettleChgPLFESA') {
                        sC_VOUCHER_DESC_DR = 'GTEE04COMMNULLNULLC';
                        sC_VOUCHER_DESC_CR = 'GTEE04COMMNULLNULLI';
                    } else if (sFUNC_SHORT_NAME == 'RegEsAcRec' || sFUNC_SHORT_NAME == 'AMDESCA' || sFUNC_SHORT_NAME == 'SettleChgPLFESA') {
                        sC_VOUCHER_DESC_DR = '';
                        sC_VOUCHER_DESC_CR = '';
                    } else {
                        sC_VOUCHER_DESC_DR = 'GTEE03COMMNULLNULLC';
                        sC_VOUCHER_DESC_CR = 'GTEE03COMMNULLNULLI';
                    }
                    break;
                case "REIM":
                    sC_VOUCHER_DESC_DR = 'REIM11COMMNULLNULLC';
                    sC_VOUCHER_DESC_CR = 'REIM11COMMNULLNULLI';
                    break;
                case "SYND":
                    sC_VOUCHER_DESC_DR = 'SYND07COMMNULLNULLC';
                    sC_VOUCHER_DESC_CR = 'SYND07COMMNULLNULLI';
                    break;
                case "RPFM": //added
                    sC_VOUCHER_DESC_DR = 'RPFM07COMMNULLNULLC'; //ADDED
                    sC_VOUCHER_DESC_CR = 'RPFM07COMMNULLNULLI'; //ADDED
                    break;
            }
            if ('SYND' != SYS_MODULE_NAME && SYS_ORG_FUNCTION_NAME != "SYND_SettleCharges") {
                document.MAINFORM.CHG_CUST_VCH_DESC_DR.value = sC_VOUCHER_DESC_DR;
                document.MAINFORM.CHG_CUST_VCH_DESC_CR.value = sC_VOUCHER_DESC_CR;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_C_VOUCHER_DESC", e);
    }
}

function SYT_Cal_ChgAC() {
    try {
        var ChgCashInd; // Utility Auto Fix Comments
        var ChgPdAt; // Utility Auto Fix Comments
        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var o1; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        var v1; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            ChgPdAt = "";
            trxChgArr = Chg.Screen.getAllTrxCharge();
            for (i = 0; i < trxChgArr.length; i++) {
                charge = trxChgArr[i];
                v1 = charge._getFldId(Chg.FLD_CHARGE_AT); // Utility Auto Fix Comments
                o1 = EEHtml.getElementById(v1);
                if (o1.value == "0") {
                    ChgPdAt = "TRANSACTION";
                    break;
                }
            }
            defChgArr = Chg.Screen.getAllDefCharge();
            for (i = 0; i < defChgArr.length; i++) {
                charge = defChgArr[i];
                v1 = charge._getFldId(Chg.FLD_CHARGE_AT); // Utility Auto Fix Comments
                o1 = EEHtml.getElementById(v1);
                if (o1.value == "0") {
                    ChgPdAt = "TRANSACTION";
                    break;
                }
            }
            ChgCashInd = document.MAINFORM.CHG_CASH_IND.value;
            if (ChgCashInd == 'Yes') {
                if (ChgPdAt != "TRANSACTION") {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.disabled = true;
                } else {
                    SYT_DisableField(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO);
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = 'Not Applicable';
                }
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.className = 'CHAR_P';

                document.MAINFORM.CHG_GETAC_BTN.disabled = true;
            } else {
                if (ChgCashInd == 'No' && ChgPdAt == "TRANSACTION") {
                    if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value == 'Not Applicable') {
                        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                    }
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.className = 'CHAR_M';
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.disabled = false;
                    document.MAINFORM.CHG_GETAC_BTN.disabled = false;
                }
            }

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_ChgAC", e);
    }
}

function SYT_Cal_ChgCashInd() {
    try {
        var CustType; // Utility Auto Fix Comments
        CustType = document.MAINFORM.RECORDER_TYPE.value;
        if (document.MAINFORM.CHG_CASH_IND) {
            if (CustType == 'NonCustomer') {
                //alert("it is non customer");
                document.MAINFORM.CHG_CASH_IND.value = 'Yes';
                document.MAINFORM.CHG_CASH_IND.className = 'CHAR_P';
                document.MAINFORM.CHG_CASH_IND.disabled = true;
            } else {
                //alert("it is customer");
                document.MAINFORM.CHG_CASH_IND.className = 'CHAR_M';
                document.MAINFORM.CHG_CASH_IND.disabled = false;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_ChgCashInd", e);
    }
}

function SYT_Cal_DO_XXXX_SEQ_B_21_REF(DoName, RefFieldObj) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath(DoName);
        arrayvalue = SYS_getRecords(node);
        record = '';
        for (i = 0; i < arrayvalue.length; i++) {
            record += SYS_getValFromRec(arrayvalue[i], RefFieldObj.name);
        }
        if (record.indexOf(RefFieldObj.value) > -1) {
            alert('This transaction reference has been used!');
            RefFieldObj.value = '';
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_DO_XXXX_SEQ_B_21_REF", e);
    }
}

function SYT_Cal_LOCAL_AMT(TransactionCCYName, TransactionAMTName, LocalCCYName, LocalAMTName, RateFieldName) {
    try {
        var v_LOCAL_AMT_Obj; // Utility Auto Fix Comments
        var v_LOCAL_CCY_Obj; // Utility Auto Fix Comments
        var v_RATE_FIELD_Obj; // Utility Auto Fix Comments
        var v_TRX_AMT_Obj; // Utility Auto Fix Comments
        var v_TRX_CCY_Obj; // Utility Auto Fix Comments
        v_TRX_CCY_Obj = EEHtml.getElementById(TransactionCCYName);
        v_TRX_AMT_Obj = EEHtml.getElementById(TransactionAMTName);
        v_LOCAL_CCY_Obj = EEHtml.getElementById(LocalCCYName);
        v_LOCAL_AMT_Obj = EEHtml.getElementById(LocalAMTName);
        v_RATE_FIELD_Obj = EEHtml.getElementById(RateFieldName);
        if (!v_TRX_CCY_Obj) {
            return alert(TransactionCCYName + " doesn't exist!");
        }
        if (!v_TRX_AMT_Obj) {
            return alert(TransactionAMTName + " doesn't exist!");
        }
        if (!v_LOCAL_CCY_Obj) {
            return alert(LocalCCYName + " doesn't exist!");
        }
        if (!v_LOCAL_AMT_Obj) {
            return alert(LocalAMTName + " doesn't exist!");
        }
        if (!v_RATE_FIELD_Obj) {
            return alert(RateFieldName + " doesn't exist!");
        }
        v_LOCAL_CCY_Obj.value = SYS_LOCAL_CCY;
        if (v_TRX_CCY_Obj.value == SYS_LOCAL_CCY) {
            v_LOCAL_AMT_Obj.value = SYT_AmtFormat(SYS_LOCAL_CCY, v_TRX_AMT_Obj.value);
            v_RATE_FIELD_Obj.value = '1';
        } else {
            SYS_GetExchangeRate_S(v_TRX_CCY_Obj.value, SYS_LOCAL_CCY, 'Booking Rate', v_RATE_FIELD_Obj.name);
            v_LOCAL_AMT_Obj.value = SYT_AmtFormat(SYS_LOCAL_CCY, SYS_BeFloat(v_TRX_AMT_Obj.value) * SYS_BeFloat(v_RATE_FIELD_Obj.value));
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_LOCAL_AMT", e);
    }
}

function SYT_Cal_NUM_Month(Obj_FistDate, Obj_SecDate, String_Y_M_D) {
    try {
        var Days; // Utility Auto Fix Comments
        var FistDate_Day; // Utility Auto Fix Comments
        var FistDate_Month; // Utility Auto Fix Comments
        var FistDate_Year; // Utility Auto Fix Comments
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var SecDate_Day; // Utility Auto Fix Comments
        var SecDate_Month; // Utility Auto Fix Comments
        var SecDate_Year; // Utility Auto Fix Comments
        var Years; // Utility Auto Fix Comments
        var temp1; // Utility Auto Fix Comments
        var temp_M; // Utility Auto Fix Comments
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        FistDate_Year = parseFloat(Obj_FistDate.value.substr(Fist_Y, Last_Y - Fist_Y + 1));
        SecDate_Year = parseFloat(Obj_SecDate.value.substr(Fist_Y, Last_Y - Fist_Y + 1));
        FistDate_Month = parseFloat(Obj_FistDate.value.substr(Fist_M, Last_M - Fist_M + 1));
        SecDate_Month = parseFloat(Obj_SecDate.value.substr(Fist_M, Last_M - Fist_M + 1));
        FistDate_Day = parseFloat(Obj_FistDate.value.substr(Fist_D, Last_D - Fist_D + 1));
        SecDate_Day = parseFloat(Obj_SecDate.value.substr(Fist_D, Last_D - Fist_D + 1));

        if (String_Y_M_D == 'Y') {
            Years = SecDate_Year - FistDate_Year;
            if (Years > 0) {
                if (SecDate_Month > FistDate_Month) {
                    Years += 1;
                } else {
                    if (SecDate_Month == FistDate_Month) {
                        if (SecDate_Day - FistDate_Day >= 0) {
                            Years += 1;
                        } else {
                            return Years;
                        }
                    }
                }
                return Years;
            } else {
                //alert(Obj_SecDate.title+" must be Later than "+Obj_FistDate.title+"!");
                //Obj_SecDate.value="";
                if (SecDate_Month == FistDate_Month && SecDate_Day == FistDate_Day) {
                    return 0;
                }
                return 1;
            }
        }
        if (String_Y_M_D == 'M') {
            if (SecDate_Year - FistDate_Year == 0) {
                temp1 = SecDate_Month - FistDate_Month;
                if (temp1 > 0) {
                    if (SecDate_Day - FistDate_Day >= 0) {
                        temp1 += 1;
                    }
                    return temp1;
                } else {
                    if (temp1 == 0) {
                        if (SecDate_Day - FistDate_Day <= 0) {
                            //alert(Obj_SecDate.title+" must be Later than "+Obj_FistDate.title+"!");
                            //Obj_SecDate.value="";
                            return 0;
                        } else {
                            return 1;
                        }
                    }
                    //alert(Obj_SecDate.title+" must be Later than "+Obj_FistDate.title+"!");
                    //Obj_SecDate.value="";
                    return 0;
                }
            } else {
                if (SecDate_Year - FistDate_Year > 0) {
                    temp_M = SecDate_Month + 12 * (SecDate_Year - FistDate_Year) - FistDate_Month;
                    Days = SecDate_Day - FistDate_Day;
                    if (Days >= 0) {
                        return temp_M + 1;
                    } else {
                        return temp_M;
                    }
                } else {
                    //alert(Obj_SecDate.title+" must be Later than "+Obj_FistDate.title+"!");
                    //Obj_SecDate.value="";
                    return 0;
                }
            }
        }
        if (String_Y_M_D == 'D') {
            Days = SYS_GetSubDays(Obj_FistDate.name, Obj_SecDate.name);
            if (Days > 0) {
                return Days;
            } else {
                //alert(Obj_SecDate.title+" must be Later than "+Obj_FistDate.title+"!");
                //Obj_SecDate.value="";
                return 0;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_NUM_Month", e);
    }
}

function SYT_Cal_ORDER_NO(DoName) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath(DoName);
        arrayvalue = SYS_getRecords(node);
        //if(document.MAINFORM.ORDER_NO== null || document.MAINFORM.ORDER_NO=="undefined" || document.MAINFORM.ORDER_NO==undefined){return;}
        //maxrecord=SYS_BeInt(SYS_getValFromRec(arrayvalue[0],document.MAINFORM.ORDER_NO.name));
        maxrecord = arrayvalue.length;
        /*
        for(i=0;i<arrayvalue.length;i++){
        record = SYS_BeInt(SYS_getValFromRec(arrayvalue[i],document.MAINFORM.ORDER_NO.name));

         if(record > maxrecord){
          maxrecord=record ;
         }
        }
        */
        //document.MAINFORM.ORDER_NO.value = maxrecord+1;
        return (maxrecord + 1);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_ORDER_NO", e);
    }
}

function SYT_Cal_TRX_HISTORY() {
    try {
        var note; // Utility Auto Fix Comments
        if (buttonType == 'Confirm') {
            note = "\nDuring " + SYS_FUNCTION_DESC + ", " + SYS_USER_ID + " on " + SYS_BUSI_DATE + " " + SYS_TIME + '\n';

            if (document.MAINFORM.NOTES.value != "") {
                document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY.value + note + "Notes Added: " + document.MAINFORM.NOTES.value;
            }

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_TRX_HISTORY", e);
    }
}

function SYT_Cal_failure() {
    try {
        document.MAINFORM.FRGN_AC_NO.value = "";
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_failure", e);
    }
}

function SYT_Cal_success() {
    try {
        CHG_allPayCcy_onchange();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cal_success", e);
    }
}

function SYT_Cancel_Init() {
    try {
        var Orgtitle; // Utility Auto Fix Comments
        var elementsize; // Utility Auto Fix Comments
        var form; // Utility Auto Fix Comments
        var jj; // Utility Auto Fix Comments
        var oEle; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        var objValue; // Utility Auto Fix Comments
        Orgtitle = EEHtml.getElementById('AA').innerHTML;
        //alert(Orgtitle);
        EEHtml.getElementById('AA').innerHTML = 'Cancel ' + Orgtitle;
        disable_page('MAINFORM');
        form = document.MAINFORM;
        if (form == null || form == "undefined") {
            form = document.form(0);
        }
        if (form == null) {
            return;
        }

        oEle = form.elements;
        elementsize = oEle.length;
        //added by Amelia for EE-4250 2009-9-29 -s

        //added by Amelia for EE-4250 2009-9-29 -e
        for (jj = 0; jj < elementsize; jj++) {
            obj = oEle[jj];
            SYT_Disable_Fld(obj);
        }
        if (SYS_FUNCTION_TYPE != 'RE') {
            SYS_highTrxButton("_confirm", "_cancel", "_transaction");
        }
        document.MAINFORM.CANCEL_FLG.value = "Yes";
        document.MAINFORM.NOTES.value = "";
        SYT_ChangeFldClass(document.MAINFORM.NOTES, "O");
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Cancel_Init", e);
    }
}

function SYT_ChangeFldClass(oField, sFieldClass, YN) {
    try {
        var String_1; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        var sType; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        SYS_ChangeRichEditorClass(oField,sFieldClass);
        if (typeof oField != "object") {
            return;
        }
        if (oField.style == null || oField.style == "null" || oField.style == '' || oField.style == 'undefined') {
            String_1 = oField[0];
            if (String_1 != "" && String_1 != "null" && String_1 != null && String_1 != "undefined") {
                alert('There are duplicate fields on the Screen ....Please going to check your JSP file...id==' + String_1.id + '    Name==' + String_1.name);
                return;
            }
        }

        sclassName = oField.className;
        sType = oField.type;

        //*Update to EEV6.0 -Start;
        if (sclassName != null && sclassName.indexOf("errorOnField") > -1) //Adding this setting for New UI
        {
            sclassName = sclassName.replace("errorOnField", "").trim();
        }
        //*Update to EEV6.0 -End;

        //define className
        if (sclassName != null) {
            sMark = "_" + sclassName.substr(sclassName.indexOf("_") + 1, 1); // Utility Auto Fix Comments
            if (sFieldClass == "B") {
                oField.className = sclassName.replace(sMark, "_P");
            } else {
                oField.className = sclassName.replace(sMark, "_" + sFieldClass);
            }
        }
        if (sType == "select-one" || sType == "button") {
            oField.disabled = (sFieldClass == "P" || sFieldClass == "B") ? true : false;
        } else {
            oField.readOnly = (sFieldClass == "P" || sFieldClass == "B") ? true : false;
        }
        if (sFieldClass == "H") {
            oField.style.visibility = "hidden";
            //oField.style.display ="none";
        } else {
            oField.style.visibility = "visible";
            //oField.style.display ="block";
        }
        //blank field value
        if (sFieldClass == "H" || sFieldClass == "B") {
            if (sclassName.indexOf("AMT_") > -1 || sclassName.indexOf("FLOAT_") > -1 || sclassName.indexOf("INT_") > -1) {
                oField.value = 0;
            } else {
                oField.value = "";
            }
        }
        if (YN == 'Y') {
            EEHtml.fireEvent(oField, "onchange");
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ChangeFldClass", e);
    }
}

function SYT_ChangeFldClass_New(oField, sFieldClass, YN) {
    try {
        var oField_String; // Utility Auto Fix Comments
        var oField_name; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        var sType; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        oField_String = oField;
        oField = EEHtml.getElementById(oField);
        if (oField == null || oField == "null" || oField == '' || oField == 'undefined') {
            alert("The field < " + oField_String + " >does not exist on the Screen!Please going to check your JSP file or your javascript!"); // Utility Auto Fix Comments
            return;
        }
        oField_name = document.getElementsByName(oField_String);
        if (oField_name.length > 1) {
            alert('There are duplicate fields on the Screen !Please going to check your JSP file!id==' + '   The field Name is' + oField_String);
            return;
        }


        sclassName = oField.className;
        sType = oField.type;

        //Update to EEV6.0 - Satrt;
        if (sclassName != null && sclassName.indexOf("errorOnField") > -1) //Adding this setting for New UI
        {
            sclassName = sclassName.replace("errorOnField", "").trim();
        }
        //Update to EEV6.0 - End;

        //define className
        if (sclassName != null) {
            sMark = "_" + sclassName.substr(sclassName.indexOf("_") + 1, 1); // Utility Auto Fix Comments
            if (sFieldClass == "B") {
                oField.className = sclassName.replace(sMark, "_P");
            } else {
                oField.className = sclassName.replace(sMark, "_" + sFieldClass);
            }
        }
        if (sType == "select-one" || sType == "button") {
            oField.disabled = (sFieldClass == "P" || sFieldClass == "B") ? true : false;
        } else {
            oField.readOnly = (sFieldClass == "P" || sFieldClass == "B") ? true : false;
        }
        if (sFieldClass == "H") {
            oField.style.visibility = "hidden";
            //oField.style.display ="none";
        } else {
            oField.style.visibility = "visible";
            //oField.style.display ="block";
        }
        //blank field value
        if (sFieldClass == "H" || sFieldClass == "B") {
            if (sclassName.indexOf("AMT_") > -1 || sclassName.indexOf("FLOAT_") > -1 || sclassName.indexOf("INT_") > -1) {
                oField.value = 0;
            } else {
                oField.value = "";
            }
        }
        if (YN == 'Y') {
            EEHtml.fireEvent(oField, "onchange");
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ChangeFldClass_New", e);
    }
}

function SYT_ChangeFldStringClass(arr_Fld, arr_FldClass) {
    try {
        var i; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sClassName; // Utility Auto Fix Comments
        for (i = 0; i < arr_Fld.length; i++) {
            oField = arr_Fld[i];
            sClassName = arr_FldClass[i];
            SYT_ChangeFldClass(oField, sClassName);

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ChangeFldStringClass", e);
    }
}

function SYT_Charge_Clear(ottCharges) {
    try {
        var chargeObject; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        for (j = 0; j < ottCharges.length; j++) {
            chargeObject = Chg.Screen.getTrxChargeByCommCode(ottCharges[j]);
            chargeObject.reset();
            chargeObject.hide();
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Charge_Clear", e);
    }
}

function SYT_Charge_OTT_Calculate() {
    try {
        var objPymtCommChrgs; // Utility Auto Fix Comments
        objPymtCommChrgs = Chg.Screen.getTrxChargeByCommCode(chargeCode1);
        objPymtCommChrgs.display();

        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            Chg.calculate([chargeCode1], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            Chg.calculate([chargeCode1], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Charge_OTT_Calculate", e);
    }
}

function SYT_Charge_Set_Types(product) {
    try {
        var ottCharges; // Utility Auto Fix Comments
        if (product == 'OT') {
            ottCharges = ['PYMT_OT_LOC_CHG', 'PYMT_COMM', 'OT_CMSN_PVTR', 'OT_CMSN_PVTNR', 'OT_CMSN_NBOL_BUSNR', 'OT_CMSN_NBOL_BUSR', 'OT_CMSN_BUSR', 'OT_CMSN_BUSNR'];
            SYT_Charge_Clear(ottCharges);
        }


        switch (product) {
            case 'OT':

                if (SYS_BANK_COUNTRY == 'MU') {
                    SYT_Charge_Assign(product);
                }
                if ((SYS_ORG_FUNCTION_SHORT_NAME == "OTTRecAddChgs") && (SYS_BANK_COUNTRY == 'MU' || SYS_BANK_COUNTRY == 'TZ')) {
                    SYT_Charge_local_payment_assign();
                }
                SYT_Charge_OTT_Calculate();
                break;
            default:
                break;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Charge_Set_Types", e);
    }
}

function SYT_CheckBankID() {
    try {
        alert('The Area Code of BankID do not exist in the CUBK/REBK table!');
        return false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CheckBankID", e);
    }
}

function SYT_CheckChgUnpaid() {
    try {
        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        trxChgArr = Chg.Screen.getAllTrxCharge();
        defChgArr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            if (charge.getBalAmt() > 0) {
                return true;
            }
        }
        for (i = 0; i < defChgArr.length; i++) {
            charge = defChgArr[i];
            if (charge.getBalAmt() > 0) {
                return true;
            }
        }
        return false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CheckChgUnpaid", e);
    }
}

function SYT_CheckCountryCode(fieldName) {
    try {
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var valueArray; // Utility Auto Fix Comments
        if (fieldName.value != '' && fieldName.value != 'NULL') {
            fieldName.value = fieldName.value.toUpperCase();
            //sSQLWhere='1=1';
            flg = 'true';
            //SYS_GetTableMultiDataToArray_S('sec_country',sSQLWhere,'C_CNTY_CODE');
            SYS_GetTableDataByRule_S("CheckCountryCode_0", "1", true, true);
            valueArray = SYS_MULTI_DATA[0][1];
            for (i = 0; i < valueArray.length; i++) {
                if (valueArray[i] == fieldName.value) {
                    flg = 'false';
                    break;
                }
            }
            if (flg == 'true') {
                SYS_CheckError(fieldName, 'This is not a valid country code!');
                return false;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CheckCountryCode", e);
    }
}

function SYT_CheckHoliday_SCF(strCntyCodeValue, strDateValue, strCCYValue, sSucJsFuncName, sFailJsFuncName, isShowErr) {
    try {
        var url; // Utility Auto Fix Comments
        if (strCntyCodeValue == null || strCntyCodeValue == "") {
            alertErrMsg("The value of country code field is empty !Pls input it!");
            return false;
        }
        if (strDateValue == null || strDateValue == "") {
            alertErrMsg("The value of date field is empty !Pls input it!");
            return false;
        }
        url = "../servlets/WSTrxManager?_TRX_STATUS=TRX_HOLIDAY_CHECK";
        url += "&HOLI_CNTY_CODE=" + encodeURIComponent(strCntyCodeValue);
        url += "&HOLI_DATE=" + encodeURIComponent(strDateValue);
        url += "&IS_SHOW_ERR=" + encodeURIComponent(isShowErr);
        url += "&HOLI_CCY=" + encodeURIComponent(strCCYValue);
        sendRequestByAjaxPost(url, false, sendTextToPage, sSucJsFuncName, sFailJsFuncName);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CheckHoliday_SCF", e);
    }
}

function SYT_Check_AMT() {
    try {
        var nEleLeng; // Utility Auto Fix Comments
        var nIndex_amt; // Utility Auto Fix Comments
        var nIndex_float; // Utility Auto Fix Comments
        var nIndex_nameA; // Utility Auto Fix Comments
        var nIndex_nameR; // Utility Auto Fix Comments
        var nIndex_rate; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sFieldClass; // Utility Auto Fix Comments
        var sFieldName; // Utility Auto Fix Comments
        var sFieldValue; // Utility Auto Fix Comments
        nEleLeng = document.MAINFORM.elements.length;
        for (zz = 0; zz < nEleLeng; zz++) {
            oField = document.MAINFORM.elements[zz];
            sFieldValue = oField.value;
            sFieldClass = oField.className;
            sFieldName = oField.name;
            nIndex_float = sFieldClass.indexOf("FLOAT_");
            nIndex_amt = sFieldClass.indexOf("AMT_");
            nIndex_rate = sFieldClass.indexOf("RATE_");
            nIndex_nameA = sFieldName.indexOf("TEMP_AMT");
            nIndex_nameR = sFieldName.indexOf("TEMP_RT");
            if (oField.value == '') {
                if (nIndex_float != -1 || nIndex_amt != -1 || nIndex_rate != -1) {
                    oField.value = 0;
                }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Check_AMT", e);
    }
}

function SYT_Check_CUBK() {
    try {
        var str; // Utility Auto Fix Comments
        str = eval(oFN).value + ' does not exist in CUBK table';
        SYS_CheckError(eval(oFN), str);
        return false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Check_CUBK", e);
    }
}

function SYT_Check_Cov_Limit(Drt_Deal_Ind_Field, Cr_Amt_Field, Cr_CCY_Field, Db_Amt_Field, Db_CCY_Field) {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        /* Sql_Cond = "C_MAIN_REF=" +"'"+SYS_BANK_COUNTRY+"'";
        Field_List = "COV_AMT;COV_CCY";
        Mapping_List = "COV_AMT;COV_CCY";
        SYS_Get22TableData_S('COLT_MASTER',Sql_Cond,Field_List,Mapping_List,true);
        if (document.MAINFORM.COV_AMT.value != "") {
        	SYT_Check_Cov_LimitSuccess(Drt_Deal_Ind_Field, Cr_Amt_Field, Cr_CCY_Field, Db_Amt_Field, Db_CCY_Field);
        }*/
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Check_Cov_Limit", e);
    }
}

function SYT_Check_Cov_LimitSuccess(Drt_Deal_Ind_Field, Cr_Amt_Field, Cr_CCY_Field, Db_Amt_Field, Db_CCY_Field) {
    try {
        var COV_AMT_LOC; // Utility Auto Fix Comments
        var COV_CCY; // Utility Auto Fix Comments
        var CrAmt_loc; // Utility Auto Fix Comments
        var DbAmt_loc; // Utility Auto Fix Comments
        var Dir_cust; // Utility Auto Fix Comments
        var givenAmount; // Utility Auto Fix Comments
        var newAmt; // Utility Auto Fix Comments
        var rateList; // Utility Auto Fix Comments
        var strAmount; // Utility Auto Fix Comments
        Dir_cust = Drt_Deal_Ind_Field.value;
        COV_CCY = document.MAINFORM.COV_CCY.value;
        CrAmt_loc = 0;
        DbAmt_loc = 0;
        COV_AMT_LOC = 0;

        if (Cr_CCY_Field.value == COV_CCY) {
            if (SYS_BeFloat(Cr_Amt_Field.value) > SYS_BeFloat(document.MAINFORM.COV_AMT.value)) {
                Drt_Deal_Ind_Field.value = "Yes";
            } else {
                Drt_Deal_Ind_Field.value = Dir_cust;
            }
        } else {
            strAmount = SYS_BeFloat(document.MAINFORM.COV_AMT.value);
            givenAmount = SYS_BeFloat(Cr_Amt_Field.value);
            rateList = document.MAINFORM.RATE_TYPE.value + ";" + document.MAINFORM.RATE_TYPE.value + ";" + document.MAINFORM.RATE_TYPE.value;
            SYS_GetExchangeRateAMT_S(Cr_CCY_Field.value, COV_CCY, rateList, givenAmount, document.MAINFORM.COV_AMT.name, '', '1;1;1');
            newAmt = SYS_BeFloat(document.MAINFORM.COV_AMT.value);
            document.MAINFORM.COV_AMT.value = strAmount;
            if (SYS_BeFloat(newAmt) > SYS_BeFloat(strAmount)) {
                Drt_Deal_Ind_Field.value = "Yes";
            } else {
                Drt_Deal_Ind_Field.value = Dir_cust;
            }
        }




        /*
        if(COV_CCY!=SYS_LOCAL_CCY ){
            SYS_GetExchangeRate_S(COV_CCY,SYS_LOCAL_CCY,document.MAINFORM.RATE_TYPE,'COV_EXCH_RATE');
            COV_AMT_LOC=SYS_BeFloat(document.MAINFORM.COV_AMT.value)*SYS_BeFloat(document.MAINFORM.COV_EXCH_RATE.value);
            document.MAINFORM.COV_EXCH_RATE.value=0;
        }	
        if(SYS_BeFloat(Cr_Amt_Field.value)>0){
            if(Cr_CCY_Field.value==COV_CCY){
                if(SYS_BeFloat(Cr_Amt_Field.value)>SYS_BeFloat(document.MAINFORM.COV_AMT.value)){
                    Drt_Deal_Ind_Field.value="Yes";
                }else{
                    Drt_Deal_Ind_Field.value=Dir_cust;														
                }			
            }else{		
                SYS_GetExchangeRate_S(Cr_CCY_Field.value,SYS_LOCAL_CCY,document.MAINFORM.RATE_TYPE,'COV_EXCH_RATE');
                CrAmt_loc=SYS_BeFloat(Cr_Amt_Field.value*document.MAINFORM.COV_EXCH_RATE.value);
                if(SYS_BeFloat(CrAmt_loc)>SYS_BeFloat(COV_AMT_LOC)){
                    Drt_Deal_Ind_Field.value="Yes";
                }else{
                    Drt_Deal_Ind_Field.value=Dir_cust;				
                }			
            }
        }else{
            if(Db_CCY_Field.value==COV_CCY){
                if(SYS_BeFloat(Db_Amt_Field.value)>SYS_BeFloat(document.MAINFORM.COV_AMT.value)){
                    Drt_Deal_Ind_Field.value="Yes";
                }else{
                    Drt_Deal_Ind_Field.value=Dir_cust;
                }
            }else{			
                SYS_GetExchangeRate_S(Db_CCY_Field.value,SYS_LOCAL_CCY,document.MAINFORM.RATE_TYPE,'COV_EXCH_RATE');
                CrAmt_loc=SYS_BeFloat(Db_Amt_Field.value*document.MAINFORM.COV_EXCH_RATE.value);
                if(SYS_BeFloat(DbAmt_loc)>SYS_BeFloat(COV_AMT_LOC)){
                    Drt_Deal_Ind_Field.value="Yes";
                }else{
                    Drt_Deal_Ind_Field.value="Yes";
                }			
            }
        }
        */
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Check_Cov_LimitSuccess", e);
    }
}

function SYT_Check_GetData() {
    try {
        var nEleLeng; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sFIeldValue; // Utility Auto Fix Comments
        var sFieldName; // Utility Auto Fix Comments
        alert("Input error. Please input again!");



        nEleLeng = document.MAINFORM.elements.length;
        for (zz = 0; zz < nEleLeng; zz++) {
            oField = document.MAINFORM.elements[zz];
            sFieldName = oField.name;
            if (sFieldName == FieldName) {
                oField.value = '';
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Check_GetData", e);
    }
}

function SYT_Check_ShowField() {
    try {
        var sCheck_Field_Name; // Utility Auto Fix Comments
        sCheck_Field_Name = document.MAINFORM.elements[Check_Field_Name].value;
        if (sCheck_Field_Name == Check_Value) {
            document.MAINFORM.elements[Be_Change_Field_Name].style.visibility = "";
            document.MAINFORM.elements[Be_Change_Field_Name].value = "";
        } else {
            document.MAINFORM.elements[Be_Change_Field_Name].style.visibility = "hidden";
            document.MAINFORM.elements[Be_Change_Field_Name].value = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Check_ShowField", e);
    }
}

function SYT_Chg_INIT(sInitFuncName, sCallbackFuncName) {
    try {
        var sTrxFuncType; // Utility Auto Fix Comments
        /** 
        sInitFuncName		optional
        sCallbackFuncName		optional
        SYT_CHG_INIT("FLD_EXLC_SEND_CABLE_onchange","SYF_EXLC_CHG_CALLBACK");
        **/

        sTrxFuncType = "PM||MM||KP|EC";
        Chg.init('Sight Selling', 'Sight Selling', 'Sight Selling', 'Sight Selling');
        if (sCallbackFuncName != null) {
            Chg.attchEvent(sCallbackFuncName);
        }

        //sInitFuncName = need to run in InitValues(), it should execute after Chg.init()
        if (sTrxFuncType.indexOf(SYS_FUNCTION_TYPE) > -1 && sInitFuncName != null) {
            eval(sInitFuncName + "()");
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chg_INIT", e);
    }
}

function SYT_Chg_NegativeAmt(oField) {
    try {
        return oField.value;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chg_NegativeAmt", e);
    }
}

function SYT_Chg_Note_Additional(ModuName) {
    try {
        CHG_setAllChargeAt("1");
        Chg.Screen.protectAllChargeAt();
        SYT_Set_TRXCCY2CHG();
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by sunny for charge voucher
        document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
        Chg.Screen.unprotectAllBalAmt();
        //CHG_hidden_TR('tr_paid_by');
        //CHG_hidden_TR('tr_paid_at');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chg_Note_Additional", e);
    }
}

function SYT_Chgs_Without_Deferred_Terms() {
    try {
        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var o1; // Utility Auto Fix Comments
        var o4; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        var v1; // Utility Auto Fix Comments
        var v4; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, "P");
            Chg.Screen.protectAllChargeFor();
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.remove(1);
            trxChgArr = Chg.Screen.getAllTrxCharge();
            for (i = 0; i < trxChgArr.length; i++) {
                charge = trxChgArr[i];

                v1 = charge._getFldId(Chg.FLD_CHARGE_AT); // Utility Auto Fix Comments

                v4 = charge._getFldId(Chg.FLD_COMM_DESC); // Utility Auto Fix Comments

                o1 = EEHtml.getElementById(v1);

                o4 = EEHtml.getElementById(v4);

                o1.remove(1);

                SYT_ChangeFldClass(o4, "P");
            }
            defChgArr = Chg.Screen.getAllDefCharge();
            for (i = 0; i < defChgArr.length; i++) {
                charge = defChgArr[i];
                v1 = charge._getFldId(Chg.FLD_CHARGE_AT); // Utility Auto Fix Comments
                o1 = EEHtml.getElementById(v1);
                o1.remove(1);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chgs_Without_Deferred_Terms", e);
    }
}

function SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO() {
    try {
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Field_List3; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Mapping_List3; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        var Sql_Cond3; // Utility Auto Fix Comments
        LocalCustIdCUBK = Chg.Screen.getLocalCustId();
        if (document.MAINFORM.CHG_CASH_IND.value == "Yes") {
            return true;
        }
        if (document.MAINFORM.APP_TYPE) {
            if (document.MAINFORM.APP_TYPE.value != 'CUSTOMER' && SYS_ORG_FUNCTION_NAME != 'InternalTrf') {
                if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != "") {
                    document.MAINFORM.CHG_LOCAL_CUST_AC_NO_CHK.value = "";
                    LocalCustIdCUBK = Chg.Screen.getLocalCustId();
                    //Sql_Cond1 = "C_ACCT_NR=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'" + "AND " + "C_ACCT_WITH_ID=" + "'" + Chg.Screen.getLocalCustId() + "'" + "AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + "AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
                    //Field_List1 = "C_ACCT_WITH_ID";
                    //Mapping_List1 = "CHG_LOCAL_CUST_AC_NO_CHK";
                    SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO_13', '1', true);
                    if (document.MAINFORM.CHG_LOCAL_CUST_AC_NO_CHK.value == "") {
                        alert("The Charge Account number is invalid for the Customer");
                        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.focus();
                        return false;
                    } else {
                        return true;
                    }
                }
            } else {
                if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != "") {
                    document.MAINFORM.CHG_LOCAL_CUST_AC_NO_CHK.value = "";

                    if (SYS_ORG_FUNCTION_NAME == "DI_ReverseCharges" || SYS_ORG_FUNCTION_NAME == "OTTReverseCharges" || SYS_ORG_FUNCTION_NAME == "ITTReverseCharges") {
                        //Sql_Cond2 = "C_AC_NUMBER=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'" + "AND " + "C_CUST_ID=" + "'" + Chg.Screen.getLocalCustId() + "'" + "AND (C_DBT_CRDT='C' or C_DBT_CRDT='B' or C_DBT_CRDT is null)" + "AND " + "C_CURRENCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + "AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'"; //sathish
                        SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO_14', '1', true);
                    } else {
                        //Sql_Cond2 = "C_AC_NUMBER=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'" + "AND " + "C_CUST_ID=" + "'" + Chg.Screen.getLocalCustId() + "'" + "AND (C_DBT_CRDT='D' or C_DBT_CRDT='B' or C_DBT_CRDT is null)" + "AND " + "C_CURRENCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + "AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'"; //sathish
                        SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO_14', '2', true);
                    }
                    //Field_List2 = "C_CUST_ID";
                    //Mapping_List2 = "CHG_LOCAL_CUST_AC_NO_CHK";


                    if (document.MAINFORM.CHG_LOCAL_CUST_AC_NO_CHK.value == "") {
                        alert("The Charge Account number is invalid for the Customer");
                        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.focus();
                        return false;
                    } else {
                        //CHG_allPayCcy_onchange();

                        return true;
                    }
                }
            }
        } else {
            if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != "") {
                document.MAINFORM.CHG_LOCAL_CUST_AC_NO_CHK.value = "";

                if (SYS_ORG_FUNCTION_NAME == "DI_ReverseCharges" || SYS_ORG_FUNCTION_NAME == "OTTReverseCharges" || SYS_ORG_FUNCTION_NAME == "ITTReverseCharges") {
                    //Sql_Cond3 = "C_AC_NUMBER=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'" + "AND " + "C_CUST_ID=" + "'" + Chg.Screen.getLocalCustId() + "'" + "AND (C_DBT_CRDT='C' or C_DBT_CRDT='B' or C_DBT_CRDT is null)" + "AND " + "C_CURRENCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + "AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'"; //sathish
                    SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO_15', '1', true);
                } else {
                    //Sql_Cond3 = "C_AC_NUMBER=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'" + "AND " + "C_CUST_ID=" + "'" + Chg.Screen.getLocalCustId() + "'" + "AND (C_DBT_CRDT='D' or C_DBT_CRDT='B' or C_DBT_CRDT is null)" + "AND " + "C_CURRENCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + "AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'"; //sathish
                    SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO_15', '2', true);
                }
                //Field_List3 = "C_CUST_ID";
                //Mapping_List3 = "CHG_LOCAL_CUST_AC_NO_CHK";


                if (document.MAINFORM.CHG_LOCAL_CUST_AC_NO_CHK.value == "") {
                    alert("The Charge Account number is invalid for the Customer");
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.focus();
                    return false;
                } else {
                    //CHG_allPayCcy_onchange();

                    return true;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO", e);
    }
}

function SYT_Chk_FormAdv_CashInd() {
    try {
        var ChkVal; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        document.MAINFORM.TEMP_CASH_IND.value = "No";
        document.MAINFORM.CASH_CCY_IND.value = 'No';
        document.MAINFORM.CHG_CASH_IND.value = "No"; // Utility Auto Fix Comments
        document.MAINFORM.CASH_SETT_AMT.value = "";
        document.MAINFORM.CASH_TOT_AMT.value = 0;
        document.MAINFORM.CASH_SETT_CCY.value = "";
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");
            if (ChkVal == "Yes") {
                document.MAINFORM.TEMP_CASH_IND.value = "Yes";
                document.MAINFORM.CASH_SETT_AMT.value = SYS_BeFloat(SYS_getValFromRec(Record, "SETT_AMT"));
                document.MAINFORM.CASH_SETT_CCY.value = SYS_getValFromRec(Record, "SETT_CCY");

            }
        }
        if (document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value == document.MAINFORM.CASH_SETT_CCY.value) {
            document.MAINFORM.CASH_CCY_IND.value = 'Yes';
            document.MAINFORM.CASH_TOT_AMT.value = SYS_BeFloat(document.MAINFORM.CASH_SETT_AMT.value) + SYS_BeFloat(Chg.Screen.getLocalChgCustPayTotalAmt());
        }
        if (document.MAINFORM.CHG_CASH_IND.value == "Yes") {
            //Sql_Cond1 = "item_c=" + "'006'" + " AND " + "cnty_code=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "item_name=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'";
            //Field_List1 = "FIELD_1_X";
            //Mapping_List1 = "CHG_SUSP_AC";
            SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_FormAdv_CashInd_20', '1', true);


        }
        if (document.MAINFORM.TEMP_CASH_IND.value == "Yes") {
            //Sql_Cond2 = "item_c=" + "'006'" + " AND " + "cnty_code=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "item_name=" + "'" + document.MAINFORM.CASH_SETT_CCY.value + "'";
            //Field_List2 = "FIELD_1_X";
            //Mapping_List2 = "SUSP_AC";
            SYS_GetTableDataByRule_S('TrxSys_SYT_Chk_FormAdv_CashInd_21', '1', true);


        }
        SYT_Set_ExchRate_TrxChargeDO();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chk_FormAdv_CashInd", e);
    }
}

function SYT_Chk_PastDate(oValDt) {
    try {
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        sValDt = oValDt.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert(oValDt.title + " cannot be in the Past");
                if (SYS_FUNCTION_TYPE != "RE") {
                    oValDt.value = "";
                }
                //getDivByField(document.MAINFORM.CHG_VALUE_DATE);
                //window.focus();

                oValDt.focus();
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Chk_PastDate", e);
    }
}

function SYT_ClearFields(fields_name) {
    try {
        var a; // Utility Auto Fix Comments
        var classfields; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nIndex; // Utility Auto Fix Comments
        var rIndex; // Utility Auto Fix Comments
        var sClass; // Utility Auto Fix Comments
        // var fields_name;
        classfields = fields_name.split(",");



        for (i = 0; i < classfields.length; i++) {
            a = classfields[i];
            sClass = a.className;
            sClass = document.MAINFORM.elements[a].className;
            nIndex = sClass.indexOf("AMT_");
            rIndex = sClass.indexOf("FLOAT_");

            if (nIndex != -1 || rIndex != -1) {
                document.MAINFORM.elements[a].value = 0.00;
            } else {
                document.MAINFORM.elements[a].value = "";
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ClearFields", e);
    }
}

function SYT_CommPageConfirm() {
    try {
        var strPage; // Utility Auto Fix Comments
        strPage = EEHtml.getElementById("COMMPAGE").innerHTML;
        document.MAINFORM.TEMP_COMMPAGE.value = strPage;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CommPageConfirm", e);
    }
}

function SYT_CommPageInit() {
    try {
        var CommCont; // Utility Auto Fix Comments
        var CommDiv; // Utility Auto Fix Comments
        /*
        if(SYS_FUNCTION_TYPE=='PM'||SYS_FUNCTION_TYPE=='RE' || SYS_FUNCTION_TYPE=='EC' || SYS_FUNCTION_TYPE=='INQU' || SYS_FUNCTION_TYPE=='IQ' ){
        	CommDiv =EEHtml.getElementById("COMMPAGE");
        	CommCont = document.MAINFORM.TEMP_COMMPAGE.value;
        	CommDiv.innerHTML = CommCont;
        }
        */
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CommPageInit", e);
    }
}

function SYT_ConfigureHelpLink() {
    try {
        var strSQLWhere1; // Utility Auto Fix Comments
        //reset this variable to always check for correct help link for each screen 
        EEHtml.getElementById('HELP_LINK_URL').value = "";

        if (EEHtml.getElementById('help_link') != null) {
            //strSQLWhere1 = "COUNTRY_CODE = '" + SYS_BANK_COUNTRY + "' AND EVENT_SHORT_NAME ='" + SYS_ORG_FUNCTION_SHORT_NAME + "'";
            SYS_GetTableDataByRule_S('TrxSys_SYT_ConfigureHelpLink_22', '1', true);

            if (EEHtml.getElementById('HELP_LINK_URL').value == "") {
                //strSQLWhere2 = "COUNTRY_CODE is null AND EVENT_SHORT_NAME ='" + SYS_ORG_FUNCTION_SHORT_NAME + "'";
                SYS_GetTableDataByRule_S('TrxSys_SYT_ConfigureHelpLink_23', '1', true);
            }

            if (EEHtml.getElementById('HELP_LINK_URL').value != null && EEHtml.getElementById('HELP_LINK_URL').value != "") {
                EEHtml.getElementById('help_link').onclick = SYT_OpenHelpWindow;
                EEHtml.getElementById('help_link').style.visibility = 'visible';
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ConfigureHelpLink", e);
    }
}

function SYT_ContralDefChgAt() {
    try {
        var charge;
        var defChgArr;
        var i;
        var strChgFor;
        strChgFor = document.MAINFORM.CHG_BANK_FLG.value;
        if (strChgFor == "Local") {
            strChgFor = "L";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
        }
        if (strChgFor == "Foreign") {
            strChgFor = "F";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
        }
        defChgArr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < defChgArr.length; i++) {
            charge = defChgArr[i];
            if (charge.getChargeFor() == strChgFor) {
                charge.unprotectChargeAt();
                charge.setChargeAt("0");
                charge.chargeAtOnchange();
            } else {
                charge.setChargeAt("1");
                charge.chargeAtOnchange();
                var sMark = (SYS_ORG_FUNCTION_NAME.indexOf("_SettleCharges") > -1) ? "YES" : "NO"; 
                if (sMark == "NO") { 
                charge.protectChargeAt();
              }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ContralDefChgAt", e);
    }
}

function SYT_ConvDtObjToStr(objDt) {
    try {
        var arrDtFmt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sD; // Utility Auto Fix Comments
        var sDtFmt; // Utility Auto Fix Comments
        var sM; // Utility Auto Fix Comments
        var sSptChr; // Utility Auto Fix Comments
        var sY; // Utility Auto Fix Comments
        var strDt; // Utility Auto Fix Comments
        if (typeof objDt != "object") {
            return false;
        }

        strDt = "";
        sY = String(objDt.getFullYear());
        sM = String(objDt.getMonth() + 1);
        sD = String(objDt.getDate());

        if (sM.length == 1) {
            sM = "0" + sM;
        }

        if (sD.length == 1) {
            sD = "0" + sD;
        }

        sDtFmt = SYS_DATE_FORMAT.toLowerCase();
        sSptChr = "";

        //get split character, support -, / and .
        if (sDtFmt.indexOf("-", 0) > -1) {
            sSptChr = "-";
        } else if (sDtFmt.indexOf("/", 0) > -1) {
            sSptChr = "/";
        } else if (sDtFmt.indexOf(".", 0) > -1) {
            sSptChr = "."; // Utility Auto Fix Comments
        }

        //get index for year, month and day
        arrDtFmt = sDtFmt.split(sSptChr);

        for (i = 0; i < arrDtFmt.length; i++) {
            if (arrDtFmt[i].indexOf("y", 0) > -1) {
                strDt = strDt + sY + sSptChr;
            } else if (arrDtFmt[i].indexOf("m", 0) > -1) {
                strDt = strDt + sM + sSptChr;
            } else if (arrDtFmt[i].indexOf("d", 0) > -1) {
                strDt = strDt + sD + sSptChr;
            }
        }

        strDt = strDt.substr(0, strDt.length - 1);

        return strDt;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ConvDtObjToStr", e);
    }
}

function SYT_CustLookUp(oFld) {
    try {
        var sCUSTAdd1; // Utility Auto Fix Comments
        var sCUSTAdd2; // Utility Auto Fix Comments
        var sCUSTAdd3; // Utility Auto Fix Comments
        var sCUSTID; // Utility Auto Fix Comments
        var sCUSTIDValue; // Utility Auto Fix Comments
        var sCUSTName; // Utility Auto Fix Comments
        var sFldName; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sFldName = oFld.name;
        if (sFldName.indexOf("ID_BTN") == -1) {
            return;
        }

        sql = "1=1";
        sCUSTID = sFldName.replace("ID_BTN", "ID");
        sCUSTName = sFldName.replace("ID_BTN", "NM");
        sCUSTAdd1 = sFldName.replace("ID_BTN", "ADD1");
        sCUSTAdd2 = sFldName.replace("ID_BTN", "ADD2");
        sCUSTAdd3 = sFldName.replace("ID_BTN", "ADD3");
        sCUSTIDValue = document.MAINFORM.elements[sCUSTID].value;

        /*if (sCUSTIDValue.length == 0) {
            if (MAINFORM.elements[sCUSTName].value != "") {
                sql += " AND SWF_FMT_NM like '%<--" + sCUSTName + "-->%'";
            }
            if (MAINFORM.elements[sCUSTAdd1].value != "") {
                sql += " AND SWIFT_FMT_ADD1 like '%<--" + sCUSTAdd1 + "-->%'";
            }
            if (MAINFORM.elements[sCUSTAdd2].value != "") {
                sql += " AND SWIFT_FMT_ADD2 like '%<--" + sCUSTAdd2 + "-->%'";
            }
            if (MAINFORM.elements[sCUSTAdd3].value != "") {
                sql += " AND SWIFT_FMT_ADD3 like '%<--" + sCUSTAdd3 + "-->%'";
            }
        } else {
            sql += " AND T1.C_MAIN_REF like '%" + sCUSTIDValue + "%'";
        }

        if (sql == "1=1") {

            SYS_InqCUBK(sCUSTID);

        } else {
            SYS_InqCUBK_Sql(sCUSTID, sql);
        }*/
        SYS_InqCUBK_byCondition(sCUSTID, '1');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_CustLookUp", e);
    }
}

function SYT_DEF_PMT_DET() {
    try {
        var tenor_days; // Utility Auto Fix Comments
        tenor_days = SYS_BeInt(document.MAINFORM.TENOR_DAYS.value);
        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {

            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET.value, 'M', 'N');
            document.MAINFORM.DEF_PMT_DET.value = tenor_days + ' ' + document.MAINFORM.TENOR_TYPE.value;
        } else {

            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET.value, 'P', 'N');
            document.MAINFORM.DEF_PMT_DET.value = '';
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DEF_PMT_DET", e);
    }
}

function SYT_DOFieldEmpty(xpath, field, msg) {
    try {
        var BankAccount; // Utility Auto Fix Comments
        var _do1; // Utility Auto Fix Comments
        var arrayvalue1; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var num1; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do1 = SYS_getDoByXpath(xpath); // Utility Auto Fix Comments
        num1 = SYS_getcurrRecordCount(xpath);
        if (num1 > 0) {
            arrayvalue1 = SYS_getRecords(_do1); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue1.length; i < len; i++) {
                record = arrayvalue1[i];
                BankAccount = SYS_getValFromRec(record, field);
                if (BankAccount == 'undefined' || BankAccount == null || BankAccount == '') {
                    alert(msg);
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DOFieldEmpty", e);
    }
}

function SYT_DRAFTS_AT() {
    try {
        var tenor_days; // Utility Auto Fix Comments
        tenor_days = SYS_BeInt(document.MAINFORM.TENOR_DAYS.value);

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'O', 'N');
            document.MAINFORM.DRAFTS_AT.value = tenor_days + ' ' + document.MAINFORM.TENOR_TYPE.value;
        } else if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'O', 'N');
            document.MAINFORM.DRAFTS_AT.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'P', 'N');
            document.MAINFORM.DRAFTS_AT.value = '';
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DRAFTS_AT", e);
    }
}

function SYT_DateFormat(datetime) {
    try {
        var day; // Utility Auto Fix Comments
        var hour; // Utility Auto Fix Comments
        var minutes; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var returnStr; // Utility Auto Fix Comments
        var seconds; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        year = datetime.getFullYear();
        //month = datetime.getMonth() < 9 ? '0'+(datetime.getMonth() + 1) : '' + (datetime.getMonth() + 1);
        month = datetime.getMonth() < 9 ? '0' + (datetime.getMonth() + 1) : (datetime.getMonth() + 1).toString();

        //day = datetime.getDate() < 10 ? '0' : '' + datetime.getDate();
        //	day = datetime.getDate() < 10 ? '0'+datetime.getDate() : '' + datetime.getDate();
        day = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate().toString();
        hour = ((datetime.getHours() % 12 || 12) < 10 ? '0' : '') + (datetime.getHours() % 12 || 12);
        minutes = (datetime.getMinutes() < 10 ? '0' : '') + datetime.getMinutes();
        seconds = (datetime.getSeconds() < 10 ? '0' : '') + datetime.getSeconds();
        returnStr = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
        return returnStr;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DateFormat", e);
    }
}

function SYT_DateTRS() {
    try {
        var d; // Utility Auto Fix Comments
        var dd; // Utility Auto Fix Comments
        var index1; // Utility Auto Fix Comments
        var index2; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        var mm; // Utility Auto Fix Comments
        var sFV; // Utility Auto Fix Comments
        var sFieldValue; // Utility Auto Fix Comments
        var y; // Utility Auto Fix Comments
        sFieldValue = FV;

        if (sFieldValue.indexOf("-") != -1) {
            index1 = sFieldValue.indexOf("-");
            index2 = sFieldValue.lastIndexOf("-");
            y = sFieldValue.substring(2, index1);
            mm = sFieldValue.substring(index1 + 1, index2);
            dd = sFieldValue.substring(index2 + 1);
            if (mm.length == 1) {
                m = "0" + mm;
            }
            if (dd.length == 1) {
                d = "0" + dd;
            }
            sFV = y + m + d;
        } else {
            alert("Data format is incorrect!");
            return false;
        }
        return sFV;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DateTRS", e);
    }
}

function SYT_DebugAlert(message) {
    try {
        if (SYT_IsDev()) {
            alert("Debug Message:\r\n" + message);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DebugAlert", e);
    }
}

function SYT_DecimalCharges() {
    try {
        var nDecimalCharge; // Utility Auto Fix Comments
        nDecimalCharge = 0;
        nDecimalCharge = Math.round(SYS_BeFloat(nCharges));
        return nDecimalCharge;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DecimalCharges", e);
    }
}

function SYT_DecimalFormatRate() {
    try {
        var i; // Utility Auto Fix Comments
        var nFormatRate; // Utility Auto Fix Comments
        var nFormatRate_Digits; // Utility Auto Fix Comments
        var nFormatRate_Int; // Utility Auto Fix Comments
        var nMod; // Utility Auto Fix Comments
        var sFormatRate; // Utility Auto Fix Comments
        var sFormatRate_Decimal; // Utility Auto Fix Comments
        var sFormatRate_Digits; // Utility Auto Fix Comments
        var sFormatRate_Int; // Utility Auto Fix Comments
        var sFormatRate_IntLength; // Utility Auto Fix Comments
        var sRateTimes; // Utility Auto Fix Comments
        nFormatRate = SYS_BeFloat(nRate);
        sFormatRate_Decimal = '';
        sFormatRate_Int = '';
        sFormatRate_Digits = '';

        if (sCurrency != '') {
            sRateTimes = findDecFromCCY(sCurrency, 'RATE');
        } else {
            sRateTimes = 0;
        }



        nMod = 1;
        for (i = 1; i <= sRateTimes; i++) {
            nFormatRate = 10 * nFormatRate;
            nMod = 10 * nMod;
        }

        nFormatRate = Math.round(nFormatRate);

        nFormatRate_Digits = nFormatRate % nMod;
        nFormatRate_Int = SYS_BeInt((nFormatRate - nFormatRate_Digits) / nMod);
        sFormatRate_Int = SYS_BeInt(nFormatRate_Int).toString();
        sFormatRate_IntLength = sFormatRate_Int.length;
        sFormatRate = SYS_BeInt(nFormatRate).toString();

        sFormatRate_Digits = sFormatRate.substr(sFormatRate_Int.length, sRateTimes);

        if (sRateTimes > 0) {
            sFormatRate_Decimal = sFormatRate_Int + '.' + sFormatRate_Digits;

        } else {
            sFormatRate_Decimal = sFormatRate_Int;
        }

        return sFormatRate_Decimal;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DecimalFormatRate", e);
    }
}

function SYT_Delay_MilliSeconds(numberMillis) {
    try {
        var exitTime; // Utility Auto Fix Comments
        var now; // Utility Auto Fix Comments
        var nowtime; // Utility Auto Fix Comments
        now = new Date();
        nowtime = now.getTime();
        exitTime = now.getTime() + numberMillis;
        while (nowtime < exitTime) {
            now = new Date();
            nowtime = now.getTime();
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Delay_MilliSeconds", e);
    }
}

function SYT_DisExcpt(sJSFileName, ve) {
    try {
        var sFunc; // Utility Auto Fix Comments
        var sFuncName; // Utility Auto Fix Comments
        var strExcptMsg; // Utility Auto Fix Comments
        sFunc = DisExcpt.caller.toString();
        sFuncName = "";

        sFuncName = sFunc.substring(sFunc.indexOf(' ') + 1, sFunc.indexOf('('));

        strExcptMsg = "Function: " + sJSFileName + "." + sFuncName + "()\n";
        strExcptMsg += "exception name: " + ve.name + "\n";
        strExcptMsg += "exception message: " + ve.message;
        alert(strExcptMsg);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DisExcpt", e);
    }
}

function SYT_DisObj(sObjNm) {
    try {
        if (EEHtml.getElementById(sObjNm)) {
            EEHtml.getElementById(sObjNm).style.visibility = "visible";
            EEHtml.getElementById(sObjNm).style.display = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DisObj", e);
    }
}

function SYT_DisableDiv(sDivIdString) {
    try {
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var oDiv_input; // Utility Auto Fix Comments
        var oDiv_select; // Utility Auto Fix Comments
        var oDiv_textarea; // Utility Auto Fix Comments
        var oExceptFldName; // Utility Auto Fix Comments
        var temp_oDiv; // Utility Auto Fix Comments
        /** 
        		add by mary on 08.04
        para
        **********
        sDivIdString~Mantatory~sDivId + ExceptFldName

        usage:
        ***********
        SYT_DisableField("C_div")
        SYT_DisableField("G_div|SENT_MT730_FLG")

        **/
        oExceptFldName = sDivIdString.split("|")[1];
        temp_oDiv = EEHtml.getElementById(sDivIdString.split("|")[0]);
        oDiv_input = temp_oDiv.getElementsByTagName("input");
        oDiv_select = temp_oDiv.getElementsByTagName("select");
        oDiv_textarea = temp_oDiv.getElementsByTagName("textarea");

        for (i = 0; i < oDiv_input.length; i++) {

            if (oDiv_input[i].name != oExceptFldName) {
                SYT_DisableField(oDiv_input[i]);
            }
        }
        for (j = 0; j < oDiv_select.length; j++) {

            if (oDiv_select[j].name != oExceptFldName) {
                SYT_DisableField(oDiv_select[j]);
            }
        }
        for (k = 0; k < oDiv_textarea.length; k++) {

            if (oDiv_textarea[k].name != oExceptFldName) {
                SYT_DisableField(oDiv_textarea[k]);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DisableDiv", e);
    }
}

function SYT_DisableDivClass(sDivId, sExceptFldString) {
    try {
        var h; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var oDiv; // Utility Auto Fix Comments
        var oDiv_input; // Utility Auto Fix Comments
        var oDiv_select; // Utility Auto Fix Comments
        var oDiv_temp; // Utility Auto Fix Comments
        var oDiv_textarea; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        var sType; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        var start; // Utility Auto Fix Comments
        var vTitle; // Utility Auto Fix Comments
        oDiv_temp = EEHtml.getElementById(sDivId);
        oDiv_input = oDiv_temp.getElementsByTagName("input");
        oDiv_select = oDiv_temp.getElementsByTagName("select");
        oDiv_textarea = oDiv_temp.getElementsByTagName("textarea");
        oDiv = new Array();

        for (i = 0; i < oDiv_input.length; i++) {
            oDiv.push(oDiv_input[i]);
        }
        for (j = 0; j < oDiv_select.length; j++) {
            oDiv.push(oDiv_select[j]);
        }
        for (k = 0; k < oDiv_textarea.length; k++) {
            oDiv.push(oDiv_textarea[k]);
        }

        for (h = 0; h < oDiv.length; h++) {
            oField = oDiv[h];
            sclassName = oField.className;
            sType = oField.type;

            if (sclassName != null) {
                //store original class into Title
                vTitle = oField.title; // Utility Auto Fix Comments
                if (sclassName.indexOf("_O") > 0) {
                    vTitle = vTitle + '[O]';
                }
                if (sclassName.indexOf("_M") > 0) {
                    vTitle = vTitle + '[M]';
                }
                oField.title = vTitle;

                sMark = "_P";
                if (sExceptFldString != null) {
                    start = sExceptFldString.indexOf(oField.name + "~");
                    if (start > -1) {
                        sMark = "_" + sExceptFldString.substr(start + oField.name.length + 1, 1);
                    }
                }
                //Update to EEV6.0 - Start;
                if (sclassName.indexOf("errorOnField") > -1) //chasel EE-10000  #96020
                {
                    sclassName = sclassName.replace("errorOnField", "").trim();
                }
                //Update to EEV6.0 - End;

                sclassName = sclassName.replace("_O", sMark);
                sclassName = sclassName.replace("_M", sMark);
                oField.className = sclassName;

                if (sMark != "_P") {
                    continue;
                }

                if (sType == "select-one" || sType == "button") {
                    oField.disabled = true;
                } else {
                    oField.readOnly = true;
                }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DisableDivClass", e);
    }
}

function SYT_DisableField(oField) {
    try {
        var sType; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        var vTitle; // Utility Auto Fix Comments
        //edit by zoe 20081213 
        sclassName = oField.className;
        sType = oField.type;

        if (sclassName != null) {
            //for define field value
            if (sclassName.indexOf("AMT_") > -1 || sclassName.indexOf("FLOAT_") > -1 || sclassName.indexOf("INT_") > -1) {
                oField.value = 0;
            } else {
                oField.value = "";
            }

            //for define field class
            vTitle = oField.title; // Utility Auto Fix Comments
            if (sclassName.indexOf("_O") > 0) {
                vTitle = vTitle + '[O]';
            }
            if (sclassName.indexOf("_M") > 0) {
                vTitle = vTitle + '[M]';
            }
            oField.title = vTitle;
            sclassName = sclassName.replace("_O", "_P");
            sclassName = sclassName.replace("_M", "_P");
            oField.className = sclassName;
            if (sType == "select-one" || sType == "button") {
                oField.disabled = true;
            } else {
                oField.readOnly = true;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_DisableField", e);
    }
}

function SYT_Disable_Fld(oField) {
    try {
        var sClass; // Utility Auto Fix Comments
        var typeName; // Utility Auto Fix Comments
        if (!oField) {
            return;
        }
        sClass = oField.className;
        sClass = sClass.substr(0, (sClass.length - 1)) + 'P';
        oField.className = sClass;
        typeName = oField.type;
        if (typeName == "select-one" || typeName == "button" || typeName == "checkbox" || typeName == "radio") {
            oField.disabled = true;
        } else {
            oField.readOnly = true;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Disable_Fld", e);
    }
}

function SYT_Document_Against() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'Create_Coll' || SYS_ORG_FUNCTION_SHORT_NAME == 'RegCollection' || SYS_ORG_FUNCTION_SHORT_NAME == 'REG_COLL' || SYS_ORG_FUNCTION_SHORT_NAME == 'COLLECTION') {
            if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
                SYT_ChangeFldClass_New('TENOR_START_DT', 'P');
                SYT_ChangeFldClass_New('TENOR_DAYS', 'P');
                SYT_ChangeFldClass_New('DAY_MON_FLG', 'P');
                SYT_ChangeFldClass_New('TENOR_EVENT', 'P');
                SYT_ChangeFldClass_New('DUE_DT', 'P');
                SYT_ChangeFldClass_New('TENOR_DETAILS', 'P');
                document.MAINFORM.TENOR_START_DT.value = "";
                document.MAINFORM.TENOR_DAYS.value = "";
                document.MAINFORM.DAY_MON_FLG.value = "";
                document.MAINFORM.TENOR_EVENT.value = "";
                document.MAINFORM.TENOR_DETAILS.value = "";

                document.MAINFORM.DUE_DT.value = "";
                if (SYS_MODULE_NAME == 'IMCO') {
                    document.MAINFORM.TEMP_TENOR_32K.value = "";
                    document.MAINFORM.MT410_TAG_32K.value = "B";
                } else if (SYS_MODULE_NAME == 'EXCO') {
                    document.MAINFORM.TAG32.value = "K";
                }


            } else if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval') {
                if (document.MAINFORM.TENOR_EVENT.value != "XXX") {

                    SYT_ChangeFldClass_New('TENOR_START_DT', 'M');
                    SYT_ChangeFldClass_New('TENOR_DAYS', 'M');
                    SYT_ChangeFldClass_New('DAY_MON_FLG', 'M');
                    SYT_ChangeFldClass_New('TENOR_EVENT', 'M');
                    SYT_ChangeFldClass_New('DUE_DT', 'M');
                    SYT_ChangeFldClass_New('TENOR_DETAILS', 'M');
                    if (SYS_MODULE_NAME == 'IMCO') {
                        document.MAINFORM.MT410_TAG_32K.value = "K";
                    } else if (SYS_MODULE_NAME == 'EXCO') {
                        document.MAINFORM.TAG32.value = "K";
                    }


                } else {
                    SYT_ChangeFldClass_New('TENOR_START_DT', 'P');
                    SYT_ChangeFldClass_New('TENOR_DAYS', 'P');
                    SYT_ChangeFldClass_New('DAY_MON_FLG', 'P');
                    SYT_ChangeFldClass_New('TENOR_EVENT', 'M');
                    SYT_ChangeFldClass_New('DUE_DT', 'M');
                    SYT_ChangeFldClass_New('TENOR_DETAILS', 'P');
                    document.MAINFORM.TENOR_START_DT.value = "";
                    document.MAINFORM.TENOR_DAYS.value = "";
                    document.MAINFORM.DAY_MON_FLG.value = "";
                    document.MAINFORM.TENOR_DETAILS.value = "";
                    if (SYS_MODULE_NAME == 'IMCO') {
                        document.MAINFORM.TEMP_TENOR_32K.value = "";
                        document.MAINFORM.MT410_TAG_32K.value = "A";
                    } else if (SYS_MODULE_NAME == 'EXCO') {
                        document.MAINFORM.TAG32.value = "A";
                    }


                }
            }
        } else if (SYS_ORG_FUNCTION_NAME == "AmendDischarge") {

            if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/P') {
                SYT_ChangeFldClass_New('NEW_TENOR_START_DT', 'P');
                SYT_ChangeFldClass_New('NEW_TENOR_DAYS', 'P');
                SYT_ChangeFldClass_New('NEW_DAY_MON_FLG', 'P');
                SYT_ChangeFldClass_New('NEW_TENOR_EVENT', 'P');
                SYT_ChangeFldClass_New('NEW_DUE_DT', 'P');
                SYT_ChangeFldClass_New('NEW_TENOR_START_DT', 'P');
                document.MAINFORM.TENOR_START_DT.value = "";
                document.MAINFORM.NEW_TENOR_DAYS.value = "";
                document.MAINFORM.NEW_DAY_MON_FLG.value = "";
                document.MAINFORM.NEW_TENOR_EVENT.value = "";
                document.MAINFORM.NEW_TENOR_START_DT.value = "";
                document.MAINFORM.MT430_TAG_33K.value = "B";

            } else if (document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A and Aval') {

                if (document.MAINFORM.NEW_TENOR_EVENT.value == "XXX") {
                    SYT_ChangeFldClass_New('NEW_TENOR_START_DT', 'P');
                    SYT_ChangeFldClass_New('NEW_TENOR_DAYS', 'P');
                    SYT_ChangeFldClass_New('NEW_DAY_MON_FLG', 'P');
                    SYT_ChangeFldClass_New('NEW_TENOR_EVENT', 'M');
                    SYT_ChangeFldClass_New('NEW_DUE_DT', 'M');
                    SYT_ChangeFldClass_New('NEW_TENOR_DETAILS', 'P');
                    document.MAINFORM.NEW_TENOR_START_DT.value = "";
                    document.MAINFORM.NEW_TENOR_DAYS.value = "";
                    document.MAINFORM.NEW_DAY_MON_FLG.value = "";
                    document.MAINFORM.NEW_TENOR_DETAILS.value = "";
                    document.MAINFORM.TEMP_TENOR_32K.value = "";
                    document.MAINFORM.MT430_TAG_33K.value = "A";

                } else if (document.MAINFORM.NEW_TENOR_EVENT.value == "XX") {
                    document.MAINFORM.NEW_TENOR_DAYS.value = 0;
                    document.MAINFORM.NEW_DAY_MON_FLG.value = 'D';
                    document.MAINFORM.NEW_DUE_DT.value = '';
                    document.MAINFORM.NEW_TENOR_START_DT.value = '';
                    SYT_ChangeFldClass_New('NEW_TENOR_EVENT', "M");
                    SYT_ChangeFldClass_New('NEW_TENOR_START_DT', 'P');
                    SYT_ChangeFldClass_New('NEW_TENOR_DAYS', 'P');
                    SYT_ChangeFldClass_New('NEW_DUE_DT', 'B');
                    SYT_ChangeFldClass_New('NEW_DAY_MON_FLG', 'P');
                    SYT_ChangeFldClass_New('NEW_TENOR_DETAILS', "M");
                } else {
                    SYT_ChangeFldClass_New('NEW_TENOR_START_DT', 'M');
                    SYT_ChangeFldClass_New('NEW_TENOR_DAYS', 'M');
                    SYT_ChangeFldClass_New('NEW_DAY_MON_FLG', 'M');
                    SYT_ChangeFldClass_New('NEW_TENOR_EVENT', 'M');
                    SYT_ChangeFldClass_New('NEW_TENOR_START_DT', 'M');
                    SYT_ChangeFldClass_New('NEW_TENOR_DETAILS', 'O');
                    document.MAINFORM.MT430_TAG_33K.value = "K";


                }

            }

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Document_Against", e);
    }
}

function SYT_EnableDivClass(sDivIdString) {
    try {
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var oDiv_input; // Utility Auto Fix Comments
        var oDiv_select; // Utility Auto Fix Comments
        var oDiv_textarea; // Utility Auto Fix Comments
        var oExceptFldName; // Utility Auto Fix Comments
        var temp_oDiv; // Utility Auto Fix Comments
        //add by mary on 08.12.29 to enhance enable div
        oExceptFldName = sDivIdString.split("|")[1];
        temp_oDiv = EEHtml.getElementById(sDivIdString.split("|")[0]);
        oDiv_input = temp_oDiv.getElementsByTagName("input");
        oDiv_select = temp_oDiv.getElementsByTagName("select");
        oDiv_textarea = temp_oDiv.getElementsByTagName("textarea");
        for (i = 0; i < oDiv_input.length; i++) {
            if (oDiv_input[i].name == oExceptFldName) {
                continue;
            }
            SYT_EnableFields(oDiv_input[i]);
        }
        for (j = 0; j < oDiv_select.length; j++) {
            if (oDiv_select[j].name == oExceptFldName) {
                continue;
            }
            SYT_EnableFields(oDiv_select[j]);
        }
        for (k = 0; k < oDiv_textarea.length; k++) {
            if (oDiv_textarea[k].name == oExceptFldName) {
                continue;
            }
            SYT_EnableFields(oDiv_textarea[k]);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_EnableDivClass", e);
    }
}

function SYT_EnableField(oField) {
    try {
        var sType; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        var vTitle; // Utility Auto Fix Comments
        //edit by zoe 20081213
        sclassName = oField.className;
        sType = oField.type;

        if (sclassName != null) {
            //for define field value
            /*	if(sclassName.indexOf("AMT_")>-1 || sclassName.indexOf("FLOAT_")>-1 || sclassName.indexOf("INT_")>-1){
            			oField.value =0;					
            		}else{
            			oField.value ="";					
            		}
            	*/
            //for define field class

            vTitle = oField.title; // Utility Auto Fix Comments
            if (vTitle.indexOf("[O]") >= 0) {
                sclassName = sclassName.replace("_P", "_O");
                oField.title = vTitle.substring(0, vTitle.length - 3);
            }
            if (vTitle.indexOf("[M]") >= 0) {
                sclassName = sclassName.replace("_P", "_M");
                oField.title = vTitle.substring(0, vTitle.length - 3);
            }
            oField.className = sclassName;
            if (sType == "select-one" || sType == "button") {
                oField.disabled = false;
            } else {
                oField.readOnly = false;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_EnableField", e);
    }
}

function SYT_EnableFields(oField) {
    try {
        var sType; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        var vTitle; // Utility Auto Fix Comments
        sclassName = oField.className;
        sType = oField.type;

        if (sclassName != null) {
            //for define field class
            vTitle = oField.title; // Utility Auto Fix Comments
            if (vTitle.indexOf("[O]") >= 0) {
                sclassName = sclassName.replace("_P", "_O");
                oField.title = vTitle.substring(0, vTitle.length - 3);
            }
            if (vTitle.indexOf("[M]") >= 0) {
                sclassName = sclassName.replace("_P", "_M");
                oField.title = vTitle.substring(0, vTitle.length - 3);
            }
            oField.className = sclassName;

            if (sType == "select-one" || sType == "button") {
                oField.disabled = (sclassName.indexOf("_P") > -1) ? true : false;
            } else {
                oField.readOnly = (sclassName.indexOf("_P") > -1) ? true : false;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_EnableFields", e);
    }
}

function SYT_ExchRate_FIX_PENDING() {
    try {
        var FINC_AMT_O; // Utility Auto Fix Comments
        var FINC_TRX_FLG; // Utility Auto Fix Comments
        var MRGN_CUST_AC_NO; // Utility Auto Fix Comments
        var PMT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'EC') {
            SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO1');
            PMT_CUST_AC_NO = EEHtml.getElementById('PMT_CUST_AC_NO1');
            MRGN_CUST_AC_NO = EEHtml.getElementById('MRGN_CUST_AC_NO1');
            FINC_TRX_FLG = EEHtml.getElementById('FINC_TRX_FLG');
            FINC_AMT_O = EEHtml.getElementById('FINC_AMT_O');

            if (FINC_TRX_FLG != null && (FINC_TRX_FLG.value == 'FINC' || FINC_TRX_FLG.value == 'FINCMULTIPAY' || FINC_TRX_FLG.value == 'FINCEXTEN')) {

                FINC_EXCH_FIX_PENDING();
            }



            if (SETT_CUST_AC_NO != null) {

                SETT_EXCH_FIX_PENDING();
            }
            if (PMT_CUST_AC_NO != null) {

                PMT_EXCH_FIX_PENDING();
            }
            if (MRGN_CUST_AC_NO != null) {

                MRGN_EXCH_FIX_PENDING();
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ExchRate_FIX_PENDING", e);
    }
}

function SYT_FLD_PYMT_CHG_CASH_IND_onchange() {
    try {
        SYT_MPO_CASH_IND_Chk();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FLD_PYMT_CHG_CASH_IND_onchange", e);
    }
}

function SYT_FLD_PYMT_CHG_VALUE_DATE_onchange() {
    try {
        Chk_CHG_VALUE_DATE();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FLD_PYMT_CHG_VALUE_DATE_onchange", e);
    }
}

function SYT_FLD_PYMT_FRGN_AC_CCY_onchange() {
    try {
        document.MAINFORM.FRGN_AC_NO.value = "";
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FLD_PYMT_FRGN_AC_CCY_onchange", e);
    }
}

function SYT_FLD_PYMT_FRGN_AC_CCY_onchange1() {
    try {
        document.MAINFORM.FRGN_AC_NO.value = "";
        Chk_CHG_VALUE_DATE();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FLD_PYMT_FRGN_AC_CCY_onchange1", e);
    }
}

function SYT_FLD_PYMT_FRGN_AC_NO_onchange() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        if (document.MAINFORM.FRGN_AC_NO.value != "") {
            //SYS_GetCUBK('FRGN_AC_NO','FRGN_AC_NO',success,failure,'true');
            //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_ACCT_CCY= '" + document.MAINFORM.FRGN_AC_CCY.value + "' AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.FRGN_AC_NO.value + "'";
            //Field_List = "C_CLEAR_TYPE";
            //Mapping_List = "FRGN_AC_TYPE";
            SYS_GetTableDataByRule('TrxSys_SYT_FLD_PYMT_FRGN_AC_NO_onchange_28', '1', SYT_Cal_success, SYT_Cal_failure, true);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FLD_PYMT_FRGN_AC_NO_onchange", e);
    }
}

function SYT_FLD_PYMT_FRGN_AC_TYPE_onchange() {
    try {
        document.MAINFORM.FRGN_AC_NO.value = "";
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FLD_PYMT_FRGN_AC_TYPE_onchange", e);
    }
}

function SYT_FORMAT_DATE(dateFormat, yy, mm, dd) {
    try {
        var date; // Utility Auto Fix Comments
        if (mm.length == 1) {
            mm = "0" + mm;
        }
        if (dd.length == 1) {
            dd = "0" + dd;
        }

        if (dateFormat == "yyyy/MM/dd") {
            date = "20" + yy + "/" + mm + "/" + dd;
        } else if (dateFormat == "yy/MM/dd") {
            date = yy + "/" + mm + "/" + dd;
        } else if (dateFormat == "MM/dd/yyyy") {
            date = mm + "/" + dd + "/" + "20" + yy;
        } else if (dateFormat == "MM/dd/yy") {
            date = mm + "/" + dd + "/" + yy;
        } else if (dateFormat == "dd/MM/yy") {
            date = dd + "/" + mm + "/" + yy;
        } else if (dateFormat == "dd/MM/yyyy") {
            date = dd + "/" + mm + "/" + "20" + yy;
        } else if (dateFormat == "yyyy-MM-dd") {
            date = "20" + yy + "-" + mm + "-" + dd;
        } else if (dateFormat == "yy-MM-dd") {
            date = yy + "-" + mm + "-" + dd;
        } else if (dateFormat == "MM-dd-yyyy") {
            date = mm + "-" + dd + "-" + "20" + yy;
        } else if (dateFormat == "MM-dd-yy") {
            date = mm + "-" + dd + "-" + yy;
        } else if (dateFormat == "dd-MM-yyyy") {
            date = dd + "-" + mm + "-" + "20" + yy;
        } else if (dateFormat == "dd-MM-yy") {
            date = dd + "-" + mm + "-" + yy;
        }
        return date;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FORMAT_DATE", e);
    }
}

function SYT_FUNC_SHORT_NAME() {
    try {
        var sResult; // Utility Auto Fix Comments
        sResult = "";
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "IQ") {
            sResult = SYS_ORG_FUNCTION_SHORT_NAME;
        } else {
            sResult = SYS_ORG_FUNCTION_SHORT_NAME;
        }
        return sResult;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FUNC_SHORT_NAME", e);
    }
}

function SYT_FillZero(sFieldValue, nResult) {
    try {
        var i; // Utility Auto Fix Comments
        var nLen; // Utility Auto Fix Comments
        sFieldValue = sFieldValue.toString();
        if (nResult == null) {
            nResult = 2;
        }
        sResult = "";
        nLen = nResult - SYS_BeInt(sFieldValue.length);
        for (i = 0; i < nLen; i++) {
            sResult += "0";
        }
        sResult += sFieldValue;
        return sResult;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FillZero", e);
    }
}

function SYT_FormatDateToCurrent(sDate) {
    try {
        var dd; // Utility Auto Fix Comments
        var mm; // Utility Auto Fix Comments
        var newDate; // Utility Auto Fix Comments
        var yy; // Utility Auto Fix Comments
        yy = sDate.substr(2, 2);
        mm = sDate.substr(5, 2);
        dd = sDate.substr(8, 2);
        newDate = SYT_FORMAT_DATE(SYS_DATE_FORMAT, yy, mm, dd);
        return newDate;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_FormatDateToCurrent", e);
    }
}

function SYT_Format_Ref(seq) {
    try {
        var dateObj; // Utility Auto Fix Comments
        var finalDate; // Utility Auto Fix Comments
        var juldate; // Utility Auto Fix Comments
        var prod; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var seqNumber; // Utility Auto Fix Comments
        reqDate = SYS_BUSI_DATE;
        dateObj = SYT_GetDateObjectFromStr(reqDate);
        juldate = String(dateObj.getFullYear()).substring(2, 4) + String(SYT_getDOY(dateObj));
        sCntyCode = SYS_BUSI_UNIT.substr(0, 4);
        prod = seq.substr(0, 2);
        //seqNumber = seq.substr(5, 5);
        seqNumber = seq.substr(3, 9);
        //finalDate = prod + juldate + sCntyCode + seqNumber;
        finalDate = prod + juldate + seqNumber; //Edit by amy in 20141118 for control ref no length
        document.MAINFORM.C_MAIN_REF.value = finalDate;

        // Override C_MAIN_REF Function 
        if (SYS_FUNCTION_NAME == "AddBenProfile") {
            // Beneficiary Profile Reference Number 
            document.MAINFORM.C_MAIN_REF.value = SYS_BANK_COUNTRY + seq;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Format_Ref", e);
    }
}

function SYT_GET_RPT_DCLR_NO() {
    try {
        var i; // Utility Auto Fix Comments
        var rptDclNoArray; // Utility Auto Fix Comments
        rptDclNoArray = new Array();
        rptDclNoArray.push(EEHtml.getElementById("RPT_DCLR_NO_PMT"));
        rptDclNoArray.push(EEHtml.getElementById("RPT_DCLR_NO_SETT"));
        rptDclNoArray.push(EEHtml.getElementById("RPT_DCLR_NO"));

        for (i = 0; i < rptDclNoArray.length; i++) {
            if (rptDclNoArray[i] != null && rptDclNoArray[i].value != "") {
                return rptDclNoArray[i].value;
            }
        }

        return null;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GET_RPT_DCLR_NO", e);
    }
}

function SYT_GET_VERF_NO(VERF_COUNT_OBJ, VERF_NO_VALUE) {
    try {
        if (VERF_NO_VALUE != "" || VERF_NO_VALUE.indexOf(";") >= 0) {
            VERF_COUNT_OBJ.value = VERF_NO_VALUE.split(";").length;
        } else {
            VERF_COUNT_OBJ.value = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GET_VERF_NO", e);
    }
}

function SYT_GenMainRef() {
    try {
        var n; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        var sK; // Utility Auto Fix Comments
        var sMainRef; // Utility Auto Fix Comments
        var sPrefix; // Utility Auto Fix Comments
        var sRnd; // Utility Auto Fix Comments
        var sRnd2; // Utility Auto Fix Comments
        var sSufix; // Utility Auto Fix Comments
        var sTime; // Utility Auto Fix Comments
        sDate = SYS_BUSI_DATE.replace(/-/g, "").substr(2, 6);
        sTime = SYS_TIME.replace(/:/g, "").substr(0, 4);
        sPrefix = sDate + sTime;

        sRnd = Math.random().toString().replace(/\./g, "");
        n = sRnd.substr(sRnd.length - 1, 1);
        sSufix = sRnd.substr(n, 6);
        sMainRef = sPrefix + sSufix;
        if (sMainRef.length < 16) {
            sRnd2 = Math.random().toString().replace(/\./g, "");
            sK = sRnd2.substr(0, 16 - sMainRef.length);
            sMainRef += sK;
        }

        return sMainRef;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GenMainRef", e);
    }
}

function SYT_GetBKInfoByBIC(oBIC) {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var oPOST_ADD_BTN; // Utility Auto Fix Comments
        var sBKID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sFuncName; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (oBIC.value.length == 8) {
            oBIC.value = oBIC.value + "XXX";
        }
        oBICvlCUBK = oBIC.value;
        oBICvlstrCUBK = oBIC.value.substring(0, 8);
        //sSQLWhere = "SW_ADD = '" + oBICvlCUBK + "' OR SW_ADD='" + oBICvlstrCUBK + "'";
        //sTableName = "BANK_MASTER";
        //sFieldList = "C_MAIN_REF";
        sBKID = oBIC.name.replace("SW_ADD", "ID");

        if (oBIC.value.length == 11) {
            SYS_GetTableDataByRule_S('TrxSys_SYT_GetBKInfoByBIC_2', '1', true);
            document.all(sBKID).value = sBKIDCUBK;

            if (MAINFORM.elements[sBKID].value != "") {
                SYS_GetCUBK_S(sBKID, sBKID);
                if (oBIC.value.length == 8) {
                    oBIC.value = oBIC.value + "XXX";
                }
            }
        }

        if (oBIC != null && (SYS_MODULE_NAME == "EPLC" || SYS_MODULE_NAME == "EXCO")) {
            arr_BIC = new Array(oBIC);
            sFuncName = "SYM_" + SYS_MODULE_NAME + "_M_SW_TAG(arr_BIC)";
            eval(sFuncName);
        }

        oADD_BTN = MAINFORM.elements[sBKID.replace("ID", "ADD_BTN")];
        oPOST_ADD_BTN = MAINFORM.elements[sBKID.replace("ID", "POST_ADD_BTN")];
        if (MAINFORM.elements[sBKID].value == "") {
            if (oADD_BTN != null) { // Utility Auto Fix Comments
                oADD_BTN.disabled = true; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            if (oPOST_ADD_BTN != null) { // Utility Auto Fix Comments
                oPOST_ADD_BTN.disabled = true; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        } else {
            if (oADD_BTN != null) { // Utility Auto Fix Comments
                oADD_BTN.disabled = false; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            if (oPOST_ADD_BTN != null) { // Utility Auto Fix Comments
                oPOST_ADD_BTN.disabled = false; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetBKInfoByBIC", e);
    }
}

function SYT_GetCUBK_All(sCUBKMappingName, sfKeyFldName, sSucJsFuncName, sFailJsFuncName) {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var oBIC; // Utility Auto Fix Comments
        var oPOST_ADD_BTN; // Utility Auto Fix Comments
        var sBANK_CUST_ID; // Utility Auto Fix Comments
        var sFuncName; // Utility Auto Fix Comments
        //add by mary on 08.09.17
        sBANK_CUST_ID = MAINFORM.elements[sfKeyFldName].value;
        if (sBANK_CUST_ID == "") {
            SYT_BlankGetCUBK(sfKeyFldName);
            if (SYS_MODULE_NAME == "EPLC" && (SYS_ORG_FUNCTION_NAME == "EPLC_RegisterLC" || SYS_ORG_FUNCTION_NAME == "EPLC_RegisterLCAfterMT705" || SYS_ORG_FUNCTION_NAME == "EPLC_ProcessMT700AfterMT705" || SYS_ORG_FUNCTION_NAME == "EPLC_ProcessMT700MT710MT720" || SYS_ORG_FUNCTION_NAME == "EPLC_AdviseLC" || SYS_ORG_FUNCTION_NAME == "EPLC_RegisterAmendment" || SYS_ORG_FUNCTION_NAME == "EPLC_ProcessMT707" || SYS_ORG_FUNCTION_NAME == "EPLC_AmendmentOneStep" || SYS_ORG_FUNCTION_NAME == "EPLC_BeneAcceptsRejectsAmend")) {
                SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            }
        } else {
            SYS_GetCUBK_S(sCUBKMappingName, sfKeyFldName);

            if (sSucJsFuncName != null) {
                if (sSucJsFuncName.indexOf("(") == -1) {
                    sSucJsFuncName += "()";
                }
                eval(sSucJsFuncName);
            }

            //for SW_TAG
            oBIC = MAINFORM.elements[sfKeyFldName.replace("_ID", "_SW_ADD")];
            if (oBIC != null && (SYS_MODULE_NAME == "EPLC" || SYS_MODULE_NAME == "EXCO")) {
                arr_BIC = new Array(oBIC);
                sFuncName = "SYM_" + SYS_MODULE_NAME + "_M_SW_TAG(arr_BIC)";
                eval(sFuncName);
            }
        }

        //add by mary on 10.17 for ADD_BTN
        oADD_BTN = MAINFORM.elements[sfKeyFldName.replace("ID", "ADD_BTN")];
        oPOST_ADD_BTN = MAINFORM.elements[sfKeyFldName.replace("ID", "POST_ADD_BTN")];
        if (sBANK_CUST_ID == "") {
            if (oADD_BTN != null) {
                oADD_BTN.disabled = true;
            }
            if (oPOST_ADD_BTN != null) {
                oPOST_ADD_BTN.disabled = true;
            }
        } else {
            if (oADD_BTN != null) {
                oADD_BTN.disabled = false;
            }
            if (oPOST_ADD_BTN != null) {
                oPOST_ADD_BTN.disabled = false;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetCUBK_All", e);
    }
}

function SYT_GetCntyCode(cntyInfo, fieldName) {
    try {
        var cntyCode1; // Utility Auto Fix Comments
        var cntyCode1CUBK; // Utility Auto Fix Comments
        var cntyInfoCUBK2; // Utility Auto Fix Comments
        var fieldObject; // Utility Auto Fix Comments
        //cntyInfoCUBK = cntyInfo;
        //////fieldNameCUBK = fieldName;
        if (cntyInfo.length == 2) {
            SYS_GetTableDataByRule_S('TrxSys_SYT_GetCntyCode_5', '1');
            document.all(fieldName).value = fieldNameCUBK;
        } else if (cntyInfo.length == 11) {
            cntyCode1 = cntyInfo.substr(4, 2);
            cntyInfo1CUBK = cntyCode1;
            SYS_GetTableDataByRule_S('TrxSys_SYT_GetCntyCode_6', '1');
            document.all(fieldName).value = fieldNameCUBK;
        } else if (cntyInfo.length == 10) {
            cntyInfoCUBK2 = cntyInfo;
            SYS_GetTableDataByRule_S('TrxSys_SYT_GetCntyCode_4', '1');
            cntyCode1CUBK = cntyCode1;
            SYS_GetTableDataByRule_S('TrxSys_SYT_GetCntyCode_7', '1');
            document.all(fieldName).value = fieldNameCUBK;
        } else {
            fieldObject = EEHtml.getElementById(fieldName);
            fieldObject = '';
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetCntyCode", e);
    }
}

function SYT_GetCountryName() {
    try {
        var CType; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var oJsfFld_sCNTY_FeildName; // Utility Auto Fix Comments
        var sCNTY_CODE; // Utility Auto Fix Comments
        var sCNTY_CODE_sub; // Utility Auto Fix Comments
        var sCNTY_FeildName; // Utility Auto Fix Comments
        var sFunctionName; // Utility Auto Fix Comments
        var sI; // Utility Auto Fix Comments
        //CType is 1 indicates that get 3 bit letter code. CType is 2 indicates that get 3 bit number code.
        CType = '1';



        if (sCNTY_CODE != '') {
            sCNTY_CODE_sub = sCNTY_CODE.substr(1, 1);
            for (i = 0; i < 10; i++) {
                sI = i.toString();
                if (sI == sCNTY_CODE_sub) {
                    CType = '2';
                }
            }
        }
        sCNTY_CODECUBK = sCNTY_CODE;
        if (sCNTY_CODE != '') {

            oJsfFld_sCNTY_FeildName = document.MAINFORM.elements[sCNTY_FeildName];
            if (CType == '1') {
                SYS_GetTableDataByRule('TrxSys_SYT_GetCountryName_8', '1', sFunctionName);
            } else {
                SYS_GetTableDataByRule('TrxSys_SYT_GetCountryName_9', '1', sFunctionName);
            }
        } else {
            oJsfFld_sCNTY_FeildName = document.MAINFORM.elements[sCNTY_FeildName];
            oJsfFld_sCNTY_FeildName.value = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetCountryName", e);
    }
}

function SYT_GetCustAcNo(custID) {
    try {
        var condition; // Utility Auto Fix Comments
        condition = "C_CUST_ID='" + custID + "'";
        custAcno = '';
        custAcno = SYS_GetMultiData_Boc("STD_AC_NUMBER", condition, "I_TRX_AC_TYPE,C_AC_NUMBER,C_CURRENCY");
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetCustAcNo", e);
    }
}

function SYT_GetDateID(dt) {
    try {
        var dateid; // Utility Auto Fix Comments
        var dtvalue; // Utility Auto Fix Comments
        dtvalue = dt;
        dateid = dtvalue.replace("-", "");
        dateid = dateid.replace("-", "");
        return dateid;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetDateID", e);
    }
}

function SYT_GetDateObjectFromStr(sDate) {
    try {
        var dV; // Utility Auto Fix Comments
        var dd; // Utility Auto Fix Comments
        var ii1; // Utility Auto Fix Comments
        var ii2; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var mm; // Utility Auto Fix Comments
        var retDate; // Utility Auto Fix Comments
        var sD; // Utility Auto Fix Comments
        var ss; // Utility Auto Fix Comments
        var yy; // Utility Auto Fix Comments
        dV = sDate;
        if (SYS_DATE_FORMAT != "yyyy-MM-dd") {
            dV = getDate(SYS_DATE_FORMAT, dV);
        }


        len = dV.length;
        if (len == 0) {
            return null;
        }
        ii1 = dV.indexOf("-", 0);





        if (ii1 > 0) {
            yy = parseInt(dV.substr(0, ii1), 0);
            ii2 = dV.indexOf("-", ii1 + 1);
            if (ii1 < 4) {
                yy += 2000;
            }
            ss = dV.substr(ii1 + 1, 2);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }
            mm = parseInt(ss, 0) - 1;
            ss = dV.substr(ii2 + 1);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }

            dd = parseInt(ss, 0);
        } else if (len == 6) {
            ss = dV.substr(0, 2);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }
            yy = parseInt(ss, 0);
            ss = dV.substr(2, 2);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }
            mm = parseInt(ss, 0) - 1;
            ss = dV.substr(4, 2);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }
            dd = parseInt(ss, 0);
            yy += 2000;
        } else if (len == 8) {
            yy = parseInt(dV.substr(0, 4), 0);
            ss = dV.substr(4, 2);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }
            mm = parseInt(ss, 0) - 1;
            ss = dV.substr(6, 2);
            if (ss.substr(0, 1) == "0") {
                ss = ss.substr(1, 1);
            }
            dd = parseInt(ss, 0);
        } else {
            return null;
        }
        retDate = new Date(yy, mm, dd, 0, 0, 0, 0);
        return retDate;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetDateObjectFromStr", e);
    }
}

function SYT_GetEPRInvoiceLisResponse(xmlhttp, mode, sCUBKMappingName) {
    try {
        var sql; // Utility Auto Fix Comments
        var sqltemp; // Utility Auto Fix Comments
        var url; // Utility Auto Fix Comments
        sqltemp = xmlhttp.responseText;

        sql = DoFrame.reGetSqlMain(sqltemp);
        url = "../servlets/WSTrxManager?_TRX_STATUS=SCF_CS&_CS_ACT_TYPE=SELECT_INVOICE&CUBK_MAPPING_NAME=" + sCUBKMappingName;
        url += "&_EPR_REQ_AMT=" + window["_EPR_REQ_AMT"] + "&_CAL_AMT_FLD=" + window["_CAL_AMT_FLD"] + "&SQL=" + sql;
        sendRequestByAjaxPost(url, mode, processDODataForGetData);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetEPRInvoiceLisResponse", e);
    }
}

function SYT_GetMsgContent() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        if (document.MAINFORM.STP_CODE.value.length > 0) {
            //sql = " WHERE C_STP_CODE='" + document.MAINFORM.STP_CODE.value + "'";
            //sFieldList = "C_MSG_CONTENT;C_MESSAGE_TYPE;T_RECV_TIME;C_ADBIC_LC";
            //sMappingList = "STP_MSG_CONTENT;STP_MESSAGE_TYPE;STP_RECV_TIME;STP_ADBIC_LC";

            SYS_GetTableDataByRule_S('TrxSys_SYT_GetMsgContent_3', '1', true);
            //alert(MAINFORM.STP_MSG_CONTENT.value);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetMsgContent", e);
    }
}

function SYT_GetNote(sNotesName) {
    try {
        return false;
        var DivId; // Utility Auto Fix Comments
        var DivObj; // Utility Auto Fix Comments
        //add by mary on 08.09.18
        DivId = sNotesName + "_Layer";
        DivObj = EEHtml.getElementById(DivId);

        //for create note div
        if (DivObj == null) {
            SYT_Init_Notes(sNotesName);
        }
        //for set note value to note div
        SYT_Show_Notes(sNotesName);

        //for display note div
        SYT_VisibleNote(sNotesName);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetNote", e);
    }
}

function SYT_GetPostAdd(oFld) {
    try {
        var sC_MAIN_REF; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMailAdd; // Utility Auto Fix Comments
        var sORDER_NO; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sC_MAIN_REF = MAINFORM.elements[oFld.name.replace("ORDER_POST", "ID")].value;
        sORDER_NO = oFld.value;
        sMainRefCUBK = sC_MAIN_REF;
        sOrderNoCUBK = sORDER_NO;
        //sql = " WHERE C_MAIN_REF='" + sMainRefCUBK + "' AND ORDER_NO=" + sOrderNoCUBK;

        sMailAdd = oFld.name.replace("ORDER_POST", "MAIL_ADD");
        //sFieldList = "POSTAL_FMT_ADD";

        SYS_GetTableDataByRule_S('TrxSys_SYT_GetPostAdd_1', '1', true);
        document.all(sMailAdd).value = sMailAddCUBK;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetPostAdd", e);
    }
}

function SYT_GetSubDays_SCF(sfFirstDayName, sfSecondDayName, strCntyCodeValue, isGetWorkDay, strJsFuncName, strCCYValue) {
    try {
        var SecondADay; // Utility Auto Fix Comments
        var dFirstDay; // Utility Auto Fix Comments
        var dSecondDay; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var floatDays; // Utility Auto Fix Comments
        var intDays; // Utility Auto Fix Comments
        var oDate; // Utility Auto Fix Comments
        var vFirstDay; // Utility Auto Fix Comments
        if (sfFirstDayName == null || document.MAINFORM.elements[sfFirstDayName] == null) {
            alertErrMsg("Cannot find the " + sfFirstDayName + " field(first day)!");
            return false;
        }
        if (sfSecondDayName == null || document.MAINFORM.elements[sfSecondDayName] == null) {
            alertErrMsg("Cannot find the " + sfSecondDayName + " field(second day)!");
            return false;
        }
        dFirstDay = SYS_GetDateByStr(sfFirstDayName);
        dSecondDay = SYS_GetDateByStr(sfSecondDayName);
        days = 0;
        if (dFirstDay == null || dSecondDay == null) {
            return 0;
        } else if (isGetWorkDay == 'true' || isGetWorkDay == true) {
            vFirstDay = "";
            oDate = document.MAINFORM.elements[sfFirstDayName];
            if (oDate != null) {
                vFirstDay = oDate.value;
            }
            days = (dSecondDay - dFirstDay) / SecondADay;
            intDays = parseInt(days, 0);
            floatDays = parseFloat(days, 0);
            days = intDays;
            if (floatDays - intDays >= 0.5) {
                days = days + 1;
            }
            SYT_GetWorkingDays_SCF(strCntyCodeValue, vFirstDay, days, strJsFuncName, strCCYValue);
        } else {
            days = (dSecondDay - dFirstDay) / SecondADay;
            intDays = parseInt(days, 0);
            floatDays = parseFloat(days, 0);
            days = intDays;
            if (floatDays - intDays >= 0.5) {
                days = days + 1;
            }
        }
        return days;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetSubDays_SCF", e);
    }
}

function SYT_GetSuspenseAccount() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = "C_CNTY_CODE= '" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CURRENCY= '" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + " AND " + "C_AC_IDENTIFIER= " + "'I'";
        //Field_List = "C_AC_NUMBER";
        //Mapping_List = "SUSP_AC";
        SYS_GetTableDataByRule('TrxSys_SYT_GetSuspenseAccount_24', '1', SYT_success, SYT_failure, 'true');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetSuspenseAccount", e);
    }
}

function SYT_GetSwiftAdd(oFld) {
    try {
        var sADD1; // Utility Auto Fix Comments
        var sADD2; // Utility Auto Fix Comments
        var sADD3; // Utility Auto Fix Comments
        var sC_MAIN_REF; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sNM; // Utility Auto Fix Comments
        var sORDER_NO; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sC_MAIN_REF = MAINFORM.elements[oFld.name.replace("ORDER_NO", "ID")].value;
        sORDER_NO = oFld.value;
        sMainRefCUBK = sC_MAIN_REF;
        sOrderNoCUBK = sORDER_NO;
        //sql = " WHERE C_MAIN_REF='" + sMainRefCUBK + "' AND ORDER_NO=" + sOrderNoCUBK;

        sNM = oFld.name.replace("ORDER_NO", "NM");
        sADD1 = oFld.name.replace("ORDER_NO", "ADD1");
        sADD2 = oFld.name.replace("ORDER_NO", "ADD2");
        sADD3 = oFld.name.replace("ORDER_NO", "ADD3");

        //sMappingList = sNMCUBK + ";" + sADD1CUBK + ";" + sADD2CUBK + ";" + sADD3CUBK;
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";

        SYS_GetTableDataByRule_S('TrxSys_SYT_GetSwiftAdd_0', '1', true);

        document.all(sNM).value = sNMCUBK;
        document.all(sADD1).value = sADD1CUBK;
        document.all(sADD2).value = sADD2CUBK;
        document.all(sADD3).value = sADD3CUBK;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetSwiftAdd", e);
    }
}

function SYT_GetWorkingDays_SCF(strCntyCodeValue, strStartDateValue, days, strJsFuncName, strCCYValue) {
    try {
        var url; // Utility Auto Fix Comments
        url = "../servlets/WSTrxManager?_TRX_STATUS=TRX_HOLIDAY_CHECK&GET_WORK_DATE=YES";
        url += "&HOLI_CNTY_CODE=" + encodeURIComponent(strCntyCodeValue);
        url += "&HOLI_DATE=" + encodeURIComponent(strStartDateValue);
        url += "&DAYS=" + encodeURIComponent(days);
        url += "&HOLI_CCY=" + encodeURIComponent(strCCYValue);
        sendRequestByAjaxPost(url, false, sendTextToPage, strJsFuncName);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_GetWorkingDays_SCF", e);
    }
}

function SYT_Get_CentralReporting_DO(contextPath) {
    try {
        /*
                                                                                                                                                        var arrCRIncludeDO;// Utility Auto Fix Comments
                                                                                                                                                            var arrCRTabText;// Utility Auto Fix Comments
                                                                                                                                                            var sSQLWhere;// Utility Auto Fix Comments
                                                                                                                                                            var sfieldList;// Utility Auto Fix Comments
                                                                                                                                                        arrCRIncludeDO = new Array();
                                                                                                                                                                arrCRTabText = new Array();
                                                                                                                                                                sSQLWhere = "CR_REQUIRED_REF = '" + SYS_BANK_COUNTRY + SYS_ORG_FUNCTION_SHORT_NAME + "'";
                                                                                                                                                                sfieldList = "CR_INCLUDE_DO;CR_TAB_TEXT";

                                                                                                                                                                SYS_Get22TableMultiDataToArray_S("CR_TYPES", sSQLWhere, sfieldList, 'false');// Utility Auto Fix Comments

                                                                                                                                                                arrCRIncludeDO = SYS_GetMultiFldValueFromArray('CR_INCLUDE_DO');
                                                                                                                                                                arrCRTabText = SYS_GetMultiFldValueFromArray('CR_TAB_TEXT');

                                                                                                                                                                if (arrCRIncludeDO.length > 0) {
                                                                                                                                                                    DoFrame.init(contextPath);
                                                                                                                                                                    DoFrame.showDO(arrCRIncludeDO[0], "Z_div", arrCRTabText[0]);
                                                                                                                                                                    DoFrame.getTemplate();
                                                                                                                                                                }
                                                                                                                                                        */
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Get_CentralReporting_DO", e);
    }
}

function SYT_Get_GtsBrId(centerFlag, tableName, mainRef) {
    try {
        var branchId; // Utility Auto Fix Comments
        if (centerFlag == '1') { //branch start first step
            branchId = SYS_BUSI_UNIT;
            return branchId;
        }
        if (centerFlag == '2') { //center start first step
            branchId = '';
            /*	branchId=SYS_Get22TableData_FEE(tableName,"C_MAIN_REF='"+mainRef+"'",'C_UNIT_CODE','');*/
            return branchId;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Get_GtsBrId", e);
    }
}

function SYT_Get_R_ASSET_ACNO() {
    try {
        SYS_InqCUBK_byCondition('R_ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Get_R_ASSET_ACNO", e);
    }
}

function SYT_Get_R_LIAB_ACNO() {
    try {
        var SQL; // Utility Auto Fix Comments
        //Add by Jack on 20120912 for SMBC Workshop

        SYS_InqCUBK_byCondition('R_LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Get_R_LIAB_ACNO", e);
    }
}

function SYT_Get_Ref() {
    try {
        var prod; // Utility Auto Fix Comments
        prod = SYS_FUNCTION_NAME.substr(0, 2);
        SYS_GetRefNo(prod, 'SYT_Format_Ref');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Get_Ref", e);
    }
}

function SYT_HiddenNote(NotesName) {
    try {
        var DivID; // Utility Auto Fix Comments
        var Div_body; // Utility Auto Fix Comments
        var Div_header; // Utility Auto Fix Comments
        var NoteObj; // Utility Auto Fix Comments
        var Obj_body; // Utility Auto Fix Comments
        var Obj_header; // Utility Auto Fix Comments
        DivID = NotesName + "_Layer";
        Div_header = NotesName + "_header";
        Div_body = NotesName + "_body";
        NoteObj = EEHtml.getElementById(DivID);
        Obj_body = EEHtml.getElementById(Div_body);
        Obj_header = EEHtml.getElementById(Div_header);
        NoteObj.style.display = "none";
        Obj_body.style.display = "none";
        Obj_header.style.display = "none";
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_HiddenNote", e);
    }
}

function SYT_Hidden_COMM_CODE_TRX_show_DEF(COMM_NAME) {
    try {
        var Object_COMM_DEF; // Utility Auto Fix Comments
        var Object_COMM_TRX; // Utility Auto Fix Comments
        Object_COMM_DEF = Chg.Screen.getDefChargeByCommCode(COMM_NAME);
        Object_COMM_TRX = Chg.Screen.getTrxChargeByCommCode(COMM_NAME);
        if (Object_COMM_DEF) {
            if (Object_COMM_TRX) {
                Object_COMM_TRX.hide();
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Hidden_COMM_CODE_TRX_show_DEF", e);
    }
}

function SYT_HideAllChrgsExcept(AllChrgs, ExceptChrgs) {
    try {
        var i; // Utility Auto Fix Comments
        var objChrg; // Utility Auto Fix Comments
        for (i = 0; i < AllChrgs.length; i++) {
            objChrg = Chg.Screen.getTrxChargeByCommCode(AllChrgs[i]);
            objChrg.reset();
            objChrg.hide();
        }
        if (ExceptChrgs != '') {
            objChrg = Chg.Screen.getTrxChargeByCommCode(ExceptChrgs);
            objChrg.display();
            Chg.calculate([ExceptChrgs]);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_HideAllChrgsExcept", e);
    }
}

function SYT_Hide_Partchgfld() {
    try {
        if (EEHtml.getElementById("tr_paid_by")) {
            EEHtml.getElementById("tr_paid_by").style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Hide_Partchgfld", e);
    }
}

function SYT_Hide_partchgfld() {
    try {
        if (EEHtml.getElementById("tr_paid_by")) {
            EEHtml.getElementById("tr_paid_by").style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Hide_partchgfld", e);
    }
}

function SYT_HolidayCheck(sCCY, dateField) {
    try {
        if (dateField.value != '') {
            document.MAINFORM.CNTY_CODE.value = SYS_BANK_COUNTRY; //sCCY.substring(0, 2); 
            SYS_CheckHoliday('CNTY', dateField.name, '', '', SYS_BUSI_UNIT, '', '');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_HolidayCheck", e);
    }
}

function SYT_IBANValidation(oIBAN, oACType) {
    try {
        var BankCode; // Utility Auto Fix Comments
        var Check_UnderInvestigation; // Utility Auto Fix Comments
        var ICode; // Utility Auto Fix Comments
        var countryCode; // Utility Auto Fix Comments
        var cresto; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var step; // Utility Auto Fix Comments
        var vIban; // Utility Auto Fix Comments
        if (oIBAN.value.length == 0) {
            return true;
        }

        if (oACType.value == "IBAN") {




            ICode = oIBAN.value.toUpperCase().replace(/\W*/g, ''); //remove anything that is not an alphanumeric word character

            countryCode = ICode.substring(0, 2);

            vIban = ICode.substring(4);

            vIban = vIban + ICode.substring(0, 4);

            rIban = "";

            if (countryCode != 'LV' && countryCode != 'NL' && countryCode != 'RO') { //LATVIA,NETHERLANDS HAVE DIFFERENT NORMALISATION RULES, BECUASE THE BANK IDENTIFIER CODE ARE ALPHA CHARACTERS (4 LETTER FROM BIC) eg. LV80BANK0000435195001
                // Normalization of the chars in the iban string (returns all numbers)
                for (i = 0; i < vIban.length; i++) {
                    rIban = rIban + SYT_IbanAlpha2Num(vIban.charAt(i));
                }
            } else if (countryCode == 'LV' || countryCode == 'NL' || countryCode == 'RO') {
                for (i = 4; i < vIban.length; i++) {
                    rIban = rIban + SYT_IbanAlpha2Num(vIban.charAt(i));
                }
            }

            //routine that checks the conformity of the iban string
            i = 0;
            step = 9;
            cresto = "";

            while (rIban.substring(i, step + i).length > 0) {
                stringa = cresto + rIban.substring(i, step + i);
                i = i + step;
                cresto = stringa % 97;
                step = 7;
            }
            //IBAN conformity test end

            if (cresto != 1) {
                SYS_CheckError(oIBAN, "The IBAN cannot be validated as some of the elements are wrong.");
                return false;
            } else {
                alert('IBAN VALIDATION HAS PASSED');
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_IBANValidation", e);
    }
}

function SYT_IbanAlpha2Num(AlphaNumeric) {
    try {
        var vNumber; // Utility Auto Fix Comments
        switch (AlphaNumeric) {
            case "A":
                // return "10";
                vNumber = "10";
                break;

            case "B":
                // return "11";
                vNumber = "11";
                break;

            case "C":
                //return "12";
                vNumber = "12";
                break;

            case "D":
                // return "13";
                vNumber = "13";
                break;

            case "E":
                // return "14";
                vNumber = "14";
                break;

            case "F":
                // return "15";
                vNumber = "15";
                break;

            case "G":
                // return "16";
                vNumber = "16";
                break;

            case "H":
                //  return "17";
                vNumber = "17";
                break;

            case "I":
                //  return "18";
                vNumber = "18";
                break;

            case "J":
                //  return "19";
                vNumber = "19";
                break;

            case "K":
                //  return "20";
                vNumber = "20";
                break;

            case "L":
                // return "21";
                vNumber = "21";
                break;

            case "M":
                //  return "22";
                vNumber = "22";
                break;

            case "N":
                //  return "23";
                vNumber = "23";
                break;

            case "O":
                //  return "24";
                vNumber = "24";
                break;

            case "P":
                // return "25";
                vNumber = "25";
                break;

            case "Q":
                // return "26";
                vNumber = "26";
                break;

            case "R":
                // return "27";
                vNumber = "27";
                break;

            case "S":
                //  return "28";
                vNumber = "28";
                break;

            case "T":
                //  return "29";
                vNumber = "29";
                break;

            case "U":
                //  return "30";
                vNumber = "30";
                break;

            case "V":
                // return "31";
                vNumber = "31";
                break;

            case "W":
                //  return "32";
                vNumber = "32";
                break;

            case "X":
                // return "33";
                vNumber = "33";
                break;

            case "Y":
                // return "34";
                vNumber = "34";
                break;

            case "Z":
                // return "35";
                vNumber = "35";
                break;

            default:
                // return AlphaNumeric;
                vNumber = AlphaNumeric;

        }
        return vNumber;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_IbanAlpha2Num", e);
    }
}

function SYT_InitSettlement() {
    try {
        var LCY; // Utility Auto Fix Comments
        document.MAINFORM.INTER_OFF_AMT.value = 0;
        document.MAINFORM.INTER_OFF_AMT.value = SYT_CCY_AMT(LCY, document.MAINFORM.INTER_OFF_AMT.value);
        document.MAINFORM.BAHTNET_AMT.value = 0;
        document.MAINFORM.BAHTNET_AMT.value = SYT_CCY_AMT(LCY, document.MAINFORM.BAHTNET_AMT.value);
        document.MAINFORM.CASH_AMT.value = 0;
        document.MAINFORM.CASH_AMT.value = SYT_CCY_AMT(LCY, document.MAINFORM.CASH_AMT.value);
        document.MAINFORM.CHEQUE_AMT.value = 0;
        document.MAINFORM.CHEQUE_AMT.value = SYT_CCY_AMT(LCY, document.MAINFORM.CHEQUE_AMT.value);
        document.MAINFORM.DC_AMT1.value = 0;
        document.MAINFORM.DC_AMT1.value = SYT_CCY_AMT(LCY, document.MAINFORM.DC_AMT1.value);
        document.MAINFORM.DC_AMT2.value = 0;
        document.MAINFORM.DC_AMT2.value = SYT_CCY_AMT(LCY, document.MAINFORM.DC_AMT2.value);
        document.MAINFORM.DC_AMT3.value = 0;
        document.MAINFORM.DC_AMT3.value = SYT_CCY_AMT(LCY, document.MAINFORM.DC_AMT3.value);
        document.MAINFORM.DC_AMT4.value = 0;
        document.MAINFORM.DC_AMT4.value = SYT_CCY_AMT(LCY, document.MAINFORM.DC_AMT4.value);
        document.MAINFORM.INTER_OFF_FCY_AMT.value = 0;
        document.MAINFORM.INTER_OFF_FCY_AMT.value = SYT_CCY_AMT(LCY, document.MAINFORM.INTER_OFF_FCY_AMT.value);
        document.MAINFORM.TOT_AMT_PAY.value = 0;
        document.MAINFORM.TOT_AMT_PAY_FCY.value = 0;
        document.MAINFORM.ADJ_DR_AMT.value = 0;
        document.MAINFORM.ADJ_CR_AMT.value = 0;
        document.MAINFORM.PAY_CCY.value = "";
        document.MAINFORM.INTER_OFF_TYPE.value = "";
        document.MAINFORM.RECONCILE_INTER.value = "";
        document.MAINFORM.RECONCILE_BHTNET.value = "";
        document.MAINFORM.RECONCILE_CASH.value = "";
        document.MAINFORM.RECONCILE_CHQ.value = "";
        document.MAINFORM.CHEQUE_NO.value = "";
        document.MAINFORM.CHEQUE_DET.value = "";
        document.MAINFORM.DC_ACCT1.value = "";
        document.MAINFORM.DC_ACCT2.value = "";
        document.MAINFORM.DC_ACCT3.value = "";
        document.MAINFORM.DC_ACCT4.value = "";
        document.MAINFORM.DC_TYPE2.value = "";
        document.MAINFORM.DC_TYPE3.value = "";
        document.MAINFORM.DC_TYPE4.value = "";
        document.MAINFORM.DC_FLAG_2.value = "";
        document.MAINFORM.DC_FLAG_3.value = "";
        document.MAINFORM.DC_FLAG_4.value = "";
        document.MAINFORM.INTER_OFF_FCY_TYPE.value = "";
        document.MAINFORM.RECONCILE_INTER_FCY.className = 'CHAR_O';
        document.MAINFORM.RECONCILE_INTER.className = 'CHAR_O';
        document.MAINFORM.RECONCILE_BHTNET.className = 'CHAR_O';
        document.MAINFORM.RECONCILE_CASH.className = 'CHAR_O';
        document.MAINFORM.RECONCILE_CHQ.className = 'CHAR_O';
        document.MAINFORM.DC_ACCT1.className = 'CHAR_O';
        document.MAINFORM.DC_ACCT2.className = 'CHAR_O';
        document.MAINFORM.DC_ACCT3.className = 'CHAR_O';
        document.MAINFORM.DC_ACCT4.className = 'CHAR_O';
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_InitSettlement", e);
    }
}

function SYT_Init_Notes(NotesName) {
    try {
        return false;
        var Obj; // Utility Auto Fix Comments
        var sHTML; // Utility Auto Fix Comments
        sHTML = "<div id='";
        sHTML = sHTML + NotesName + "_Layer";
        sHTML = sHTML + "' style='display:none;position: absolute; z-index: 9999; width: 300; height: 410; background-color: white; layer-background-color: #66CCFF; border: thin solid #C0C0C0;'>";
        sHTML = sHTML + "<div align='right' style='display:none;width:300;valign:right; height:15px; background-image:url(../Images/gray/qtip/bg.gif);' id='" + NotesName + "_header'>";
        sHTML = sHTML + "<IMG src='../Images/gray/qtip/close.gif' onClick=\"javascript:SYT_HiddenNote('" + NotesName + "')\"";
        sHTML = sHTML + "</div>";
        sHTML = sHTML + "<div align='left' style='display:none;width:300; height:400;background-color: white; layer-background-color: #66CCFF; OVERFLOW: scroll; scrollbar-shadow-color: #ffffff; scrollbar-highlight-color: #ffffff; scrollbar-face-color: #d9d9d9; scrollbar-3dlight-color: #d9d9d9; scrollbar-darkshadow-color: #d9d9d9; scrollbar-track-color: #ffffff; scrollbar-arrow-color: #ffffff' id='" + NotesName + "_body'>";
        sHTML = sHTML + "</div>";
        sHTML = sHTML + "</div>";

        Obj = EEHtml.getElementById("MAINFORM");
        Obj.insertAdjacentHTML("afterBegin", sHTML);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Init_Notes", e);
    }
}

function SYT_IsDev() {
    try {
        if (SYS_USER_ID == "MU01JMV" || SYS_USER_ID == "ZM01JMV" || SYS_USER_ID == "TZ01JMV") {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_IsDev", e);
    }
}

function SYT_LC_BAL() {
    try {
        var LC_AMT; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        document.MAINFORM.LC_BAL.value = LC_AMT + (LC_AMT * POS_TOL / 100);
        //document.MAINFORM.LC_BAL.value=SYS_formatAmt_Single(document.MAINFORM.LC_BAL.value,document.MAINFORM.LC_CCY.value);
        // Modify by jane for change profile Decimal Delimiter to ',' Integer Delimiter to '.'

        document.MAINFORM.LC_BAL.value = SYS_FormatAMTbyCCY(document.MAINFORM.LC_BAL);
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, "onchange"); //sunny
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_LC_BAL", e);
    }
}

function SYT_LC_BAL_LCY() {
    try {
        var lc_bal; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        lc_bal = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        rate = SYS_BeFloat(document.MAINFORM.RT_CCY_LCY.value);
        document.MAINFORM.LC_BAL_LCY.value = lc_bal / rate;
        document.MAINFORM.LC_BAL_LCY.value = SYS_formatAmt_Single(document.MAINFORM.LC_BAL_LCY.value, SYS_LOCAL_CCY);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_LC_BAL_LCY", e);
    }
}

function SYT_LIAB_VOUCHER() {
    try {
        var amout_flag; // Utility Auto Fix Comments
        var arr_Func_Amend; // Utility Auto Fix Comments
        var arr_Func_Issue; // Utility Auto Fix Comments
        var arr_Func_Manag1; // Utility Auto Fix Comments
        var arr_Func_Manag2; // Utility Auto Fix Comments
        var arr_Func_Manag3; // Utility Auto Fix Comments
        var arr_Func_Manag4; // Utility Auto Fix Comments
        var arr_Func_Manag5; // Utility Auto Fix Comments
        var arr_Func_Manag6; // Utility Auto Fix Comments
        var arr_Func_Manag7; // Utility Auto Fix Comments
        var arr_Func_Manag8; // Utility Auto Fix Comments
        var arr_Func_Manag9; // Utility Auto Fix Comments
        var date_flag; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var issue_flag; // Utility Auto Fix Comments
        var str_func_name; // Utility Auto Fix Comments
        //add by tracery for Liability Voucher
        document.MAINFORM.TEMP_AC_VALUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_AC_BOOK_DT.value = SYS_BUSI_DATE;

        if (SYS_MODULE_NAME == 'IPLC') {
            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.LC_CCY.value;
            arr_Func_Issue = new Array("IPLC_ISS_LC", "IssueLCOne", "IPLC_ISS_B2B_LC", "ProcessMT771", "IPLC_ISS_TRN_LC", "IssueB2BOneStep", "TRN_LC_OneStep", "IssueLCFrCE");
            arr_Func_Amend = new Array("IPLC_ISS_LC_AMD", "IssuLCAmdOne", "BeneResAmd", "ProcessMT773", "BeneResToAmt", "IssuLCAmtFrCE");

            str_func_name = SYT_FUNC_SHORT_NAME();


            if (arr_Func_Issue.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.LC_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.LC_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC01CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC01CONTNULLNULLI';
            } else if (arr_Func_Amend.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.TEMP_ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.TEMP_LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO3.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO4.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.LC_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.LC_BAL.value;
                document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.NEW_LC_BAL.value;
                document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.NEW_LC_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC01CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC01CONTNULLNULLI';

                date_flag = (document.MAINFORM.NEW_EXPIRY_DT.value != '') ? true : false;
                amout_flag = (document.MAINFORM.LC_BAL.value != document.MAINFORM.NEW_LC_BAL.value) ? true : false;
                flag = (document.MAINFORM.DETRMNTL_FLG.value != 'Yes') ? true : false;
                if (str_func_name == "BeneResAmd") {
                    flag = (document.MAINFORM.DETRMNTL_FLG.value == 'Yes') ? true : false;
                }

                if (flag && amout_flag && date_flag) {
                    document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IPLC02CONTAMNTDATEI';
                    document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IPLC02CONTAMNTDATEI';
                } else if (flag && amout_flag) {
                    document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IPLC02CONTAMNTNULLI';
                    document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IPLC02CONTAMNTNULLI';
                } else if (flag && date_flag) {
                    document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IPLC02CONTNULLDATEI';
                    document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IPLC02CONTNULLDATEI';
                }
            } else if (str_func_name == "IPLC_PAY_ACCEPT" || str_func_name == "IPLC_PAY_ACP_DIS") {
                if (SYS_BeFloat(document.MAINFORM.STL_AMT.value) > 0) {
                    document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                    document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                    document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.STL_AMT.value;
                    document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.STL_AMT.value;
                    document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC03CONTNULLNULLI';
                    document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC03CONTNULLNULLI';
                } else {
                    if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0 && (document.MAINFORM.CPYT_C_SDA_FLAG.value == 'Sight')) {
                        document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.TEMP_ASSET_ACNO.value;
                        document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.TEMP_LIAB_ACNO.value;
                        document.MAINFORM.TEMP_AC_NO3.value = document.MAINFORM.LIAB_ACNO.value;
                        document.MAINFORM.TEMP_AC_NO4.value = document.MAINFORM.ASSET_ACNO.value;
                        document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.STL_AMT.value;
                        document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.STL_AMT.value;
                        document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.ACPT_AMT.value;
                        document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.ACPT_AMT.value;
                        document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC04CONTNULLNULLI';
                        document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC04CONTNULLNULLI';
                        document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IPLC04FIRMNULLNULLI';
                        document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IPLC04FIRMNULLNULLI';
                    }
                }
            } else if (str_func_name == "IPLC_PAY_AT_MATU") {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.STL_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.STL_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC06FIRMNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC06FIRMNULLNULLI';
            }
            //Add by amy for Close LC and Reopen LC
            else if (str_func_name == "IPLC_CLS_LC") {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.LC_BAL_CLS.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.LC_BAL_CLS.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC07FIRMNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC07FIRMNULLNULLI';
            } else if (str_func_name == "IPLC_REOPEN_LC") {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.LC_BAL_CLS.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.LC_BAL_CLS.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IPLC08FIRMNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IPLC08FIRMNULLNULLI';
            }
        } else if (SYS_MODULE_NAME == 'GTEE') {
            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.GTEE_CCY.value;
            arr_Func_Amend = new Array("AmdOutward1Step", "OutApReAmd", "AdviceReduction", "Process767763", "IssueGTAmtFrCE");
            arr_Func_Manag1 = new Array("CloseOutward", "ExpireGuarantee");
            arr_Func_Manag2 = new Array("RinstOutwardGtee", "RinstExpOut");

            str_func_name = SYT_FUNC_SHORT_NAME();
            if (str_func_name == 'RegisterOutward' || str_func_name == 'IssueGTEEFrCE') {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'GTEE01CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'GTEE01CONTNULLNULLI';
            } else if (arr_Func_Amend.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.TEMP_ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.TEMP_LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO3.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO4.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.TEMP_GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.TEMP_GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.NEW_GTEE_AMT.value;
                document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.NEW_GTEE_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'GTEE02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'GTEE02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'GTEE02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'GTEE02CONTNULLNULLI';
            } else if (str_func_name == "OutwardSett" || str_func_name == "OutwardSett(CE)") {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'GTEE04CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'GTEE04CONTNULLNULLI';
            } else if (arr_Func_Manag1.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.ORIGIN_GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.ORIGIN_GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'GTEE02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'GTEE02CONTNULLNULLI';
            } else if (arr_Func_Manag2.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'GTEE02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'GTEE02CONTNULLNULLI';
            }
        } else if (SYS_MODULE_NAME == 'IWGT') {
            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.GTEE_CCY.value;
            arr_Func_Amend = new Array("AdviseInAmend", "AppRejAmd");
            arr_Func_Manag1 = new Array("ReduceLiab", "ExpireInGtee");
            arr_Func_Manag2 = new Array("ReinstateGteeLia", "ReopenGtee");
            issue_flag = (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') ? true : false;
            str_func_name = SYT_FUNC_SHORT_NAME();
            if (str_func_name == 'InwardAdviseGtee' || str_func_name == 'AdviseGtee') {
                if (issue_flag) {
                    document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                    document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                    document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.GTEE_BAL.value;
                    document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.GTEE_BAL.value;
                    document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IWGT01CONTNULLNULLI';
                    document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IWGT01CONTNULLNULLI';
                }
            } else if (arr_Func_Amend.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.TEMP_ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.TEMP_LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO3.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO4.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.TEMP_NEW_GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.TEMP_NEW_GTEE_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IWGT02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IWGT02CONTNULLNULLC';

                date_flag = (document.MAINFORM.EXPIRY_DT.value != document.MAINFORM.NEW_EXPIRY_DT.value) ? true : false;
                amout_flag = (document.MAINFORM.GTEE_BAL.value != document.MAINFORM.TEMP_NEW_GTEE_BAL.value) ? true : false;
                issue_flag = (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') ? true : false;
                if (issue_flag && amout_flag && date_flag) {
                    document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IWGT02CONTAMNTDATEI';
                    document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IWGT02CONTAMNTDATEI';
                } else if (issue_flag && amout_flag) {
                    document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IWGT02CONTAMNTNULLI';
                    document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IWGT02CONTAMNTNULLI';
                } else if (issue_flag && date_flag) {
                    document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'IWGT02CONTNULLDATEI';
                    document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'IWGT02CONTNULLDATEI';
                }
            } else if (str_func_name == "SettleClaim") {
                if (issue_flag) {
                    document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                    document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                    document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
                    document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
                    document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IWGT04CONTNULLNULLC';
                    document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IWGT04CONTNULLNULLI';
                }
            } else if (arr_Func_Manag1.join().indexOf(str_func_name) > -1) {
                if (issue_flag) {
                    document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                    document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                    document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.GTEE_BAL.value;
                    document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.GTEE_BAL.value;
                    document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IWGT02CONTNULLNULLI';
                    document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IWGT02CONTNULLNULLC';
                }
            } else if (arr_Func_Manag2.join().indexOf(str_func_name) > -1) {
                if (issue_flag) {
                    document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                    document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                    document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.GTEE_BAL.value;
                    document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.GTEE_BAL.value;
                    document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IWGT02CONTNULLNULLC';
                    document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IWGT02CONTNULLNULLI';
                }
            }
        } else if (SYS_MODULE_NAME == 'PYMT') {
            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.LC_CCY.value;
            arr_Func_Manag5 = new Array("ProcessMT200");
            arr_Func_Manag6 = new Array("ProcessMT205");
            str_func_name = SYT_FUNC_SHORT_NAME();
            if (arr_Func_Manag5.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.LC_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.LC_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'Nostro Account1';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'Nostro Account2';
            }
            if (arr_Func_Manag6.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.LC_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.LC_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'Vostro/Nostro Account1';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'Vostro/Nostro Account2';
            }

        } else if (SYS_MODULE_NAME == 'SHGT') {
            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.SG_CCY.value;
            arr_Func_Manag5 = new Array("SG_LC", "SG_LC_OneStep", "SG_IC", "SG_IC_OneStep");
            arr_Func_Manag6 = new Array("Redemption");
            str_func_name = SYT_FUNC_SHORT_NAME();
            if (arr_Func_Manag5.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.SG_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.SG_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'SHGT01CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'SHGT01CONTNULLNULLI';

            } else if (arr_Func_Manag6.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.SG_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.SG_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'SHGT02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'SHGT02CONTNULLNULLC';

            }
        } else if (SYS_MODULE_NAME == 'IMCO') {
            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.COLL_CCY.value;
            arr_Func_Manag7 = new Array("AddAvalisation");
            arr_Func_Manag8 = new Array("RemoveAvalisation");
            arr_Func_Manag9 = new Array("SettlementDA");
            str_func_name = SYT_FUNC_SHORT_NAME();
            if (arr_Func_Manag7.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IMCO01CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IMCO01CONTNULLNULLI';

            } else if (arr_Func_Manag8.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IMCO02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IMCO02CONTNULLNULLI';

            } else if (arr_Func_Manag9.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.BILL_AMT_FM_DRWE.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.BILL_AMT_FM_DRWE.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'IMCO03CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'IMCO03CONTNULLNULLI';

            }
        } else if (SYS_MODULE_NAME == 'EPLC') {

            document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.LC_CCY.value;
            arr_Func_Manag1 = new Array("AddConf", "AdvLC", "AdvLCOneStep", "RevolveLC", "ReinstateExprdLC", "LCRecAndAdv");
            arr_Func_Manag2 = new Array("AdvAmd", "AmdOneStep", "AmtOneStep", "BeneAmdResponse","ProcessMT707");
            arr_Func_Manag3 = new Array("PayAccept", "PayAtMat", "SettlePartial", "PayAccept(CE)");
            arr_Func_Manag4 = new Array("CLSLC", "ExpiryLC");
            arr_Func_Manag5 = new Array("AddConf");
            str_func_name = SYT_FUNC_SHORT_NAME();
            if (arr_Func_Manag1.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.CONF_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.CONF_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'EPLC01CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'EPLC01CONTNULLNULLI';

            } else if (arr_Func_Manag2.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.TEMP_ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.TEMP_LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.OLD_CONF_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.OLD_CONF_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'EPLC02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'EPLC02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_NO3.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO4.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.NEW_CONF_BAL.value;
                document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.NEW_CONF_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'EPLC02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'EPLC02CONTNULLNULLI';

            } else if (arr_Func_Manag3.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.STL_AMT.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.STL_AMT.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'EPLC03CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.valuee = 'EPLC03CONTNULLNULLI';
            } else if (arr_Func_Manag4.join().indexOf(str_func_name) > -1) {
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.TEMP_AMT18.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.TEMP_AMT18.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'EPLC04CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'EPLC04CONTNULLNULLI';
            } else if (arr_Func_Manag5.join().indexOf(str_func_name) > -1) { //code added by Sarav for Defect Id 74461 starts here..
                document.MAINFORM.TEMP_AC_NO1.value = document.MAINFORM.TEMP_ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_NO2.value = document.MAINFORM.TEMP_LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.OLD_CONF_BAL.value;
                document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.OLD_CONF_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC1.value = 'EPLC02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC2.value = 'EPLC02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_NO3.value = document.MAINFORM.LIAB_ACNO.value;
                document.MAINFORM.TEMP_AC_NO4.value = document.MAINFORM.ASSET_ACNO.value;
                document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.CONF_BAL.value;
                document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.CONF_BAL.value;
                document.MAINFORM.TEMP_AC_VCH_DESC3.value = 'EPLC02CONTNULLNULLI';
                document.MAINFORM.TEMP_AC_VCH_DESC4.value = 'EPLC02CONTNULLNULLI';
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_LIAB_VOUCHER", e);
    }
}

function SYT_LMTSCal_LM_TK_RSV_LINK() {
    try {
        if (document.MAINFORM.LM_TK_RSV_LINK.value == '') {
            document.MAINFORM.LM_TK_RSV_LINK.value = document.MAINFORM.LM_RSV_LINK.value;
        }
        document.MAINFORM.LM_RSV_LINK.value = '';
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_LMTSCal_LM_TK_RSV_LINK", e);
    }
}

function SYT_MAIN_DISCR() {
    try {
        var CHECKBOX_ARRAY; // Utility Auto Fix Comments
        var DISCR; // Utility Auto Fix Comments
        var DISCR_ARRAY; // Utility Auto Fix Comments
        var a; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        a = 10;
        DISCR = "";

        CHECKBOX_ARRAY = new Array(a);
        for (b = 0; b < a; b++) {
            CHECKBOX_ARRAY[b] = document.MAINFORM.elements["DISCR_BOX_" + b];
        }

        DISCR_ARRAY = new Array("L/C EXPIRED", "LATE PRESENTATION", "LATE SHIPMENT", "PARTIAL SHIPMENT", "OVERDRAWN", "OVERSHIPMENT", "SHORTSHIPMENT", "SHORT DRAWN", "NOT SPECIFIED CAPACITY OF ISSUIER", "NOT SHOWING NAME OF CARRIER");

        for (i in CHECKBOX_ARRAY) {
            if (CHECKBOX_ARRAY[i].checked == true) {
                DISCR += "\n" + "- " + DISCR_ARRAY[i];
            }
        }
        return DISCR;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MAIN_DISCR", e);
    }
}

function SYT_MLDC_CrossMergeFromDC(comp) {
    try {
        //For Multi Debit Crdit
        var currDebitDO = SYS_getDoByXpath('MultiDebitSummary');
        var currCreditDO = SYS_getDoByXpath('MultiCreditSummary');
        if (currDebitDO == null || currCreditDO == null) {
            return;
        }
        var mDRef = new HashMap(),
            mCRef = new HashMap();
        var mDAccount = new HashMap(),
            mCAccount = new HashMap();
        var mDCCY = new HashMap(),
            mCCCY = new HashMap();
        var mDDesc = new HashMap(),
            mCDesc = new HashMap();
        var mDProtc = new HashMap(),
            mCProtc = new HashMap();
        var D_LEN = 0;
        var C_LEN = 0;
        var _debitRecords;;
        var _creditRecords;
        if (currDebitDO != null) {
            _debitRecords = SYS_getRecords(currDebitDO);
            D_LEN = _debitRecords.length;
        }
        if (currCreditDO != null) {
            _creditRecords = SYS_getRecords(currCreditDO);
            C_LEN = _creditRecords.length;
        }
        if (D_LEN > 0 || C_LEN > 0) { //both D-summary and C-summary can executive
            for (var i = 0; i < D_LEN; i++) {
                var _record = _debitRecords[i];
                var strSeq = SYS_getValFromRec(_record, 'I_MLDC_SEQ');
                var strCCY = SYS_getValFromRec(_record, 'C_MLDC_CCY');
                var strAmt = SYS_getValFromRec(_record, 'N_MLDC_AMT');
                var strDesc = SYS_getValFromRec(_record, 'C_MLDC_DESC');
                var strProtc = SYS_getValFromRec(_record, 'C_PROTECT_FLAG');
                var strMerge = SYS_getValFromRec(_record, 'I_MLDC_MERGE_TYPE');
                var strFrom = SYS_getValFromRec(_record, 'C_MLDC_FROM');
                if (strFrom == comp) {
                    if (strMerge == '2') {
                        if (mDCCY.containsKey(strCCY)) { //group by CCY
                            var totalAmt = SYS_BeFloat(strAmt);
                            var amtArr = mDAccount.keys();
                            for (var j = 0; j < amtArr.length; j++) {
                                if (amtArr[j] == strCCY) {
                                    var amt = mDAccount.get(amtArr[j]);
                                    totalAmt = SYS_FloatAdd(totalAmt, SYS_BeFloat(amt));
                                }
                            }
                            var summRef = (strCCY, mDRef, strSeq);
                            var descVal = (strCCY, mDDesc, strDesc);
                            var protcCCYVal = (strCCY, mDProtc, strProtc);
                            mDAccount.put(strCCY, totalAmt);
                            mDRef.put(strCCY, summRef);
                            mDDesc.put(strCCY, descVal);
                            mDProtc.put(strCCY, protcCCYVal);
                        } else {
                            mDCCY.put(strCCY, strCCY);
                            mDAccount.put(strCCY, strAmt);
                            mDRef.put(strCCY, strSeq);
                            mDDesc.put(strCCY, strDesc);
                            mDProtc.put(strCCY, strProtc);
                        }
                    }
                }
            }
            for (var j = 0; j < C_LEN; j++) {
                var _record = _creditRecords[j];
                var strSeq = SYS_getValFromRec(_record, 'I_MLDC_SEQ');
                var strCCY = SYS_getValFromRec(_record, 'C_MLDC_CCY');
                var strAmt = SYS_getValFromRec(_record, 'N_MLDC_AMT');
                var strDesc = SYS_getValFromRec(_record, 'C_MLDC_DESC');
                var strProtc = SYS_getValFromRec(_record, 'C_PROTECT_FLAG');
                var strMerge = SYS_getValFromRec(_record, 'I_MLDC_MERGE_TYPE');
                var strFrom = SYS_getValFromRec(_record, 'C_MLDC_FROM');
                if (strFrom == comp) {
                    if (strMerge == '2') {
                        if (mCCCY.containsKey(strCCY)) { //group by CCY
                            var totalAmt = SYS_BeFloat(strAmt);
                            var amtArr = mCAccount.keys();
                            for (var tt = 0; tt < amtArr.length; tt++) {
                                if (amtArr[tt] == strCCY) {
                                    var amt = mCAccount.get(amtArr[tt]);
                                    totalAmt = SYS_FloatAdd(totalAmt, SYS_BeFloat(amt));
                                }
                            }
                            var summRef = (strCCY, mCRef, strSeq);
                            var descVal = (strCCY, mCDesc, strDesc);
                            var protcCCYVal = (strCCY, mCProtc, strProtc);
                            mCAccount.put(strCCY, totalAmt);
                            mCRef.put(strCCY, summRef);
                            mCDesc.put(strCCY, descVal);
                            mCProtc.put(strCCY, protcCCYVal);
                        } else {
                            mCCCY.put(strCCY, strCCY);
                            mCAccount.put(strCCY, strAmt);
                            mCRef.put(strCCY, strSeq);
                            mCDesc.put(strCCY, strDesc);
                            mCProtc.put(strCCY, strProtc);
                        }
                    }
                }
            }

            if (mDRef.size() > 0 && mCRef.size() > 0) { // calculate the record that need to merge
                var D_data = [];
                var C_data = [];
                var currDo;
                var dTotalAmt = 0;
                var cTotalAmt = 0;
                var bNeedMerge = false;
                var recordMap = new HashMap();
                var D_CCY_LEN = 0;
                var C_CCY_LEN = 0;
                // the D C merge will delete all the record that need to merge firstly,then will load the data after remerge
                if (mDRef.size() > 0) {
                    SYT_MLDC_DeleteSummaryRec(currDebitDO, 'MultiDebitSummary.MultiDebit', mDRef);
                    var dCCYs = mDCCY.keys();
                    D_CCY_LEN = dCCYs.length;
                }
                if (mCRef.size() > 0) {
                    SYT_MLDC_DeleteSummaryRec(currCreditDO, 'MultiCreditSummary.MultiCredit', mCRef);
                    var cCCYs = mCCCY.keys();
                    C_CCY_LEN = cCCYs.length;
                }
                for (var dd = 0; dd < D_CCY_LEN; dd++) {
                    var D_CCY = mDCCY.get(dCCYs[dd]);
                    var D_REF = mDRef.get(dCCYs[dd]);
                    var D_AMT = mDAccount.get(dCCYs[dd]);
                    var D_DESC = mDDesc.get(dCCYs[dd]);
                    var D_PROTC = mDProtc.get(dCCYs[dd]);
                    for (var cc = 0; cc < C_CCY_LEN; cc++) {
                        var C_CCY = mCCCY.get(cCCYs[cc]);
                        var C_REF = mCRef.get(cCCYs[cc]);
                        var C_AMT = mCAccount.get(cCCYs[cc]);
                        var C_DESC = mCDesc.get(cCCYs[cc]);
                        var C_PROTC = mCProtc.get(cCCYs[cc]);
                        if (D_CCY == C_CCY) {
                            bNeedMerge = true;
                            if (D_AMT - C_AMT > 0) {
                                _debitRecords = SYS_getRecords(currDebitDO);
                                var sPara;
                                if (D_PROTC.length > 1) {
                                    sPara = 'N';
                                } else {
                                    sPara = D_PROTC;
                                }
                                var vDo = (currDebitDO, D_REF, D_CCY, D_AMT - C_AMT, D_DESC + "|" + C_DESC, sPara, '2', _debitRecords.length, comp);
                                D_data.push(vDo);
                            } else if (C_AMT - D_AMT > 0) {
                                _creditRecords = SYS_getRecords(currCreditDO);
                                var sPara;
                                if (C_PROTC.length > 1) {
                                    sPara = 'N';
                                } else {
                                    sPara = C_PROTC;
                                }
                                var vDo = (currCreditDO, C_REF, C_CCY, C_AMT - D_AMT, C_DESC + "|" + D_DESC, sPara, '2', _creditRecords.length, comp);
                                C_data.push(vDo);
                            } else {
                                continue;
                            }
                        } else {
                            recordMap.put(C_REF);
                        }
                    }
                    if (!bNeedMerge) {
                        _debitRecords = SYS_getRecords(currDebitDO);
                        var sPara;
                        if (D_PROTC.length > 1) {
                            sPara = 'N';
                        } else {
                            sPara = D_PROTC;
                        }
                        var vDo = (currDebitDO, D_REF, D_CCY, D_AMT, D_DESC, sPara, '2', _debitRecords.length, comp);
                        D_data.push(vDo);
                    }
                }
                if (recordMap.size() > 0) {
                    var C_REC_LEN = _creditRecords.length;
                    for (var p = 0; p < C_REC_LEN; p++) {
                        var vRec = _creditRecords[p];
                        var key = SYS_getValFromRec(vRec, "I_MLDC_SEQ");
                        if (recordMap.containsKey(key)) {
                            recordMap.remove(key);
                        }
                    }
                    var hMap = recordMap.keys();
                    var oriMap = mCRef.keys();
                    var O_LEN = oriMap.length;
                    var H_LEN = hMap.length;
                    for (var h = 0; h < H_LEN; h++) {
                        var keyVal = hMap[h];
                        for (var v = 0; v < O_LEN; v++) {
                            if (keyVal == oriMap[v]) {
                                _creditRecords = SYS_getRecords(currCreditDO);
                                var vDo = (currCreditDO, mCRef.get(keyVal), keyVal, mCAccount.get(keyVal), mCFrom.get(keyVal), mCProtc.get(keyVal), '2', _creditRecords.length, comp);
                                C_data.push(vDo);
                                break;
                            }
                        }
                    }
                }
                SYS_reLoadGrid(currCreditDO, C_data);
                SYS_reLoadGrid(currDebitDO, D_data);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_CrossMergeFromDC", e);
    }
}

function SYT_MLDC_DeleteDCChildRecords(childDo, parentRef) {
    try {
        var D_LEN; // Utility Auto Fix Comments
        var _data; // Utility Auto Fix Comments
        var data; // Utility Auto Fix Comments
        var dataset; // Utility Auto Fix Comments
        var fpos; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var kpos; // Utility Auto Fix Comments
        var lng; // Utility Auto Fix Comments
        var recordType; // Utility Auto Fix Comments
        dataset = childDo.getDataSets();
        kpos = childDo.getPosFromdFields('I_MLDC_IDX');
        lng = dataset.length;
        for (j = 0; j < lng; j++) {
            _data = dataset[j]; // Utility Auto Fix Comments
            D_LEN = _data.data.length; // Utility Auto Fix Comments
            for (i = 0; i < D_LEN; i++) {
                data = _data.data[i]; // Utility Auto Fix Comments
                if (parentRef == data[kpos]) {
                    fpos = data.length - 1;
                    recordType = data[fpos];
                    if ("C" == recordType || "D" == recordType) {
                        continue;
                    }
                    if (recordType == 'A' || recordType == 'N') {
                        data[fpos] = 'C';
                    }
                }
                _data.data[i] = data; // Utility Auto Fix Comments
            }
        }
        childDo.grid.getStore().reload();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_DeleteDCChildRecords", e);
    }
}

function SYT_MLDC_DeleteSummaryRec(currDO, childDoName, aPara) {
    try {
        var aRef = aPara.keys();
        var currDo = SYS_getDoByXpath(currDO);
        var childDo = SYS_getDoByXpath(childDoName);
        var _records = SYS_getRecords(currDo);
        var upos = currDo.currInstance.data[0].length - 1;
        var R_LEN = _records.length;
        var A_LEN = aRef.length;
        for (var j = 0; j < A_LEN; j++) {
            var newRef = aPara.get(aRef[j]);
            for (var i = 0; i < R_LEN; i++) {
                var record = _records[i];
                var key = SYS_getValFromRec(record, 'I_MLDC_SEQ');
                if (newRef.indexOf(key) > -1) {
                    var recordId = SYS_getRecID(record);
                    var recordType = SYS_getValFromRec(record, "recordType");
                    var selectedRecord = currDo.getRecordById(recordId);
                    if (recordType == 'A' || recordType == 'N') {
                        selectedRecord[upos] = 'D';
                    }
                    SYT_MLDC_DeleteDCChildRecords(childDo, key);
                }
            }
        }
        currDo.grid.getStore().reload();
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_DeleteSummaryRec", e);
    }
}

function SYT_MLDC_InsertAction(currDo, summref, ccy, amount, desc, ccyProtc, mergeType, index, comp) {
    try {
        var records; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        currDo.addRecord_click();
        records = SYS_getRecords(currDo);
        vDo = records[index];
        SYS_setValToRec(vDo, 'I_MLDC_SEQ', summref);
        SYS_setValToRec(vDo, 'C_MLDC_CCY', ccy);
        SYS_setValToRec(vDo, 'N_MLDC_AMT', parseFloat(getAmt(amount, SYS_AMT_INT_FORMAT, SYS_AMT_DEC_FORMAT)));
        SYS_setValToRec(vDo, 'C_MLDC_DESC', desc);
        SYS_setValToRec(vDo, 'C_PROTECT_FLAG', ccyProtc);
        SYS_setValToRec(vDo, 'I_MLDC_MERGE_TYPE', mergeType);
        SYS_setValToRec(vDo, 'C_MLDC_FROM', comp);
        SYS_setValToRec(vDo, 'C_MAIN_REF', document.MAINFORM.C_MAIN_REF.value);
        SYS_setValToRec(vDo, 'C_TRX_REF', document.MAINFORM.C_MAIN_REF.value);
        SYS_setValToRec(vDo, 'C_UNIT_CODE', SYS_BUSI_UNIT);
        return vDo;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_InsertAction", e);
    }
}

function SYT_MLDC_LoadDCSummaryData(dcTypeGrp, dcRefGrp, dcCCYGrp, dcAcctGrp, dcDescGrp, dcCCYProtcGrp, dcOperGrp, dcMergeGrp, comp) {
    try {
        var A_LEN; // Utility Auto Fix Comments
        var C_REF_LEN; // Utility Auto Fix Comments
        var DC_LEN; // Utility Auto Fix Comments
        var R_LEN; // Utility Auto Fix Comments
        var _records; // Utility Auto Fix Comments
        var aCCY; // Utility Auto Fix Comments
        var aCCYProtc; // Utility Auto Fix Comments
        var aCCYs; // Utility Auto Fix Comments
        var aCcount; // Utility Auto Fix Comments
        var aDesc; // Utility Auto Fix Comments
        var aMerge; // Utility Auto Fix Comments
        var aRef; // Utility Auto Fix Comments
        var amountMap; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var amtArr; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var cc; // Utility Auto Fix Comments
        var ccyLen; // Utility Auto Fix Comments
        var ccyMap; // Utility Auto Fix Comments
        var childDo; // Utility Auto Fix Comments
        var currDo; // Utility Auto Fix Comments
        var data; // Utility Auto Fix Comments
        var descMap; // Utility Auto Fix Comments
        var descVal; // Utility Auto Fix Comments
        var h; // Utility Auto Fix Comments
        var hLen; // Utility Auto Fix Comments
        var hMap; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var kLen; // Utility Auto Fix Comments
        var key; // Utility Auto Fix Comments
        var keyVal; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        var mergeType; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        var operation; // Utility Auto Fix Comments
        var oriAmt; // Utility Auto Fix Comments
        var oriCCY; // Utility Auto Fix Comments
        var oriComp; // Utility Auto Fix Comments
        var p; // Utility Auto Fix Comments
        var pLEN; // Utility Auto Fix Comments
        var protcCCYMap; // Utility Auto Fix Comments
        var protcCCYVal; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordId; // Utility Auto Fix Comments
        var recordMap; // Utility Auto Fix Comments
        var recordType; // Utility Auto Fix Comments
        var sPara; // Utility Auto Fix Comments
        var selectedRecord; // Utility Auto Fix Comments
        var strCCY; // Utility Auto Fix Comments
        var strDesc; // Utility Auto Fix Comments
        var strOriComp; // Utility Auto Fix Comments
        var strProtc; // Utility Auto Fix Comments
        var strSummaryRef; // Utility Auto Fix Comments
        var summRef; // Utility Auto Fix Comments
        var summaryRefMap; // Utility Auto Fix Comments
        var totalAmt; // Utility Auto Fix Comments
        var upos; // Utility Auto Fix Comments
        var v; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        var vRec; // Utility Auto Fix Comments
        kLen = dcTypeGrp.length;
        for (k = 0; k < kLen; k++) { //dcTypeGrp.length=2, 0=C,1=D
            if (k == 0) {
                currDo = SYS_getDoByXpath('MultiCreditSummary');
                if (currDo == null) {
                    continue;
                }
                childDo = SYS_getDoByXpath('MultiCreditSummary.MultiCredit');
            } else {
                currDo = SYS_getDoByXpath('MultiDebitSummary');
                if (currDo == null) {
                    continue;
                }
                childDo = SYS_getDoByXpath('MultiDebitSummary.MultiDebit');
            }
            _records = SYS_getRecords(currDo); // Utility Auto Fix Comments

            R_LEN = _records.length; // Utility Auto Fix Comments
            aRef = new Array();
            aCCY = new Array();
            aCcount = new Array();
            aDesc = new Array();
            aCCYProtc = new Array();
            aMerge = new Array();
            data = [];
            amountMap = new HashMap();
            ccyMap = new HashMap();
            summaryRefMap = new HashMap();
            descMap = new HashMap();
            protcCCYMap = new HashMap();
            recordMap = new HashMap();
            DC_LEN = dcTypeGrp[k].length;
            A_LEN = 0;
            for (i = 0; i < DC_LEN; i++) { //dLen: the length of D/C summary
                operation = dcOperGrp[k][i]; // if delete,ignore the current record
                if (operation == 'D') {
                    continue;
                } else {
                    mergeType = dcMergeGrp[k][i]; //mergeType: the value is 0/1/2
                    if (mergeType == '1') { // D-D/C-C: record the information that need merge
                        if (ccyMap.containsKey(dcCCYGrp[k][i])) { //group by CCY
                            totalAmt = SYS_BeFloat(dcAcctGrp[k][i]);
                            amtArr = amountMap.keys();
                            for (j = 0; j < amtArr.length; j++) {
                                if (amtArr[j] == dcCCYGrp[k][i]) {
                                    amt = amountMap.get(amtArr[j]);
                                    totalAmt = SYS_FloatAdd(totalAmt, SYS_BeFloat(amt));
                                }
                            }
                            summRef = SYT_MLDC_MergeMap(dcCCYGrp[k][i], summaryRefMap, dcRefGrp[k][i]);
                            descVal = SYT_MLDC_MergeMap(dcCCYGrp[k][i], descMap, dcDescGrp[k][i]);
                            protcCCYVal = SYT_MLDC_MergeMap(dcCCYGrp[k][i], protcCCYMap, dcCCYProtcGrp[k][i]);
                            amountMap.put(dcCCYGrp[k][i], totalAmt);
                            summaryRefMap.put(dcCCYGrp[k][i], summRef);
                            descMap.put(dcCCYGrp[k][i], descVal);
                            protcCCYMap.put(dcCCYGrp[k][i], protcCCYVal);
                        } else {
                            ccyMap.put(dcCCYGrp[k][i], dcCCYGrp[k][i]);
                            amountMap.put(dcCCYGrp[k][i], dcAcctGrp[k][i]);
                            summaryRefMap.put(dcCCYGrp[k][i], dcRefGrp[k][i]);
                            descMap.put(dcCCYGrp[k][i], dcDescGrp[k][i]);
                            protcCCYMap.put(dcCCYGrp[k][i], dcCCYProtcGrp[k][i]);
                        }
                    } else { //no merge
                        if (R_LEN > 0) { //it means that the DO grid have records, it should write down the current records
                            aRef[A_LEN] = dcRefGrp[k][i];
                            aCCY[A_LEN] = dcCCYGrp[k][i];
                            aCcount[A_LEN] = dcAcctGrp[k][i];
                            aDesc[A_LEN] = dcDescGrp[k][i];
                            aCCYProtc[A_LEN] = dcCCYProtcGrp[k][i];
                            aMerge[A_LEN] = dcMergeGrp[k][i];
                            A_LEN++;
                        } else { // add record
                            vDo = SYT_MLDC_InsertAction(currDo, dcRefGrp[k][i], dcCCYGrp[k][i], dcAcctGrp[k][i], dcDescGrp[k][i], dcCCYProtcGrp[k][i], dcMergeGrp[k][i], data.length, comp);
                            data.push(vDo);
                        }
                    }
                }
            }
            if (summaryRefMap.size() > 0) { // it means that D-D/C-C merge have records
                aCCYs = ccyMap.keys();
                ccyLen = aCCYs.length; // Utility Auto Fix Comments
                for (cc = 0; cc < ccyLen; cc++) {
                    strCCY = ccyMap.get(aCCYs[cc]);
                    strSummaryRef = summaryRefMap.get(aCCYs[cc]);
                    totalAmt = amountMap.get(aCCYs[cc]);
                    strDesc = descMap.get(aCCYs[cc]);
                    strProtc = protcCCYMap.get(aCCYs[cc]);

                    if (strProtc.length > 1) {
                        sPara = 'N';
                    } else {
                        sPara = strProtc;
                    }
                    if (R_LEN > 0) { //write down these records that the merge type is D-D/C-C
                        aRef[A_LEN] = strSummaryRef;
                        aCCY[A_LEN] = strCCY;
                        aCcount[A_LEN] = totalAmt;
                        aDesc[A_LEN] = strDesc;
                        aCCYProtc[A_LEN] = sPara;
                        aMerge[A_LEN] = '1';
                        A_LEN++;
                    } else { // add the record that merge type is D-D/C-C
                        vDo = SYT_MLDC_InsertAction(currDo, strSummaryRef, strCCY, totalAmt, strDesc, sPara, '1', data.length, comp);
                        data.push(vDo);
                    }
                }
            }

            if (R_LEN > 0) { // here we focus on how to modify the records that has existed in DO grid
                upos = currDo.currInstance.data[0].length - 1;
                C_REF_LEN = aRef.length;
                for (m = 0; m < R_LEN; m++) {
                    record = _records[m]; // Utility Auto Fix Comments
                    recordId = SYS_getRecID(record);
                    key = SYS_getValFromRec(record, "I_MLDC_SEQ");
                    oriCCY = SYS_getValFromRec(record, "C_MLDC_CCY");
                    oriAmt = SYS_getValFromRec(record, "N_MLDC_AMT");
                    oriComp = SYS_getValFromRec(record, "C_MLDC_FROM");
                    b = false;
                    for (n = 0; n < C_REF_LEN; n++) {
                        if (oriComp == comp) { //cannot effect other component's data
                            if (key == aRef[n]) { //modify current record,if ccy or amt changed,remove child records,at the same time,modify parent record
                                if (oriCCY != aCCY[n] || oriAmt != aCcount[n]) {
                                    SYT_MLDC_DeleteDCChildRecords(childDo, key);
                                }
                                SYS_setValToRec(record, "C_MLDC_CCY", aCCY[n]);
                                SYS_setValToRec(record, "N_MLDC_AMT", parseFloat(getAmt(aCcount[n], SYS_AMT_INT_FORMAT, SYS_AMT_DEC_FORMAT)));
                                SYS_setValToRec(record, "C_MLDC_DESC", aDesc[n]);
                                SYS_setValToRec(record, "C_PROTECT_FLAG", aCCYProtc[n]);
                                SYS_setValToRec(record, "I_MLDC_MERGE_TYPE", aMerge[n]);
                                SYS_setValToRec(record, 'C_MLDC_FROM', comp);
                                data.push(record);
                                b = true;
                            } else {
                                recordMap.put(aRef[n]);
                            }
                        } else {
                            recordMap.put(aRef[n]);
                            continue;
                        }
                    }
                    if (!b) { // if b is false,it means that this record will be removed from current DO(D-C/C-D)
                        if (oriComp == comp) {
                            recordType = SYS_getValFromRec(record, "recordType");
                            selectedRecord = currDo.getRecordById(recordId);
                            if (recordType == 'A' || recordType == 'N') {
                                selectedRecord[upos] = 'C';
                            }
                            SYT_MLDC_DeleteDCChildRecords(childDo, key);
                        }
                    }
                }
                if (recordMap.size() > 0) { // for the current do, if the record is new,then add it
                    for (p = 0; p < _records.length; p++) { // Utility Auto Fix Comments
                        vRec = _records[p]; // Utility Auto Fix Comments
                        strOriComp = SYS_getValFromRec(vRec, "C_MLDC_FROM");
                        if (strOriComp == comp) {
                            key = SYS_getValFromRec(vRec, "I_MLDC_SEQ");
                            if (recordMap.containsKey(key)) {
                                recordMap.remove(key);
                            }
                        }
                    }
                    hMap = recordMap.keys();
                    hLen = hMap.length;
                    pLEN = 0;
                    for (h = 0; h < hLen; h++) {
                        keyVal = hMap[h];
                        for (v = 0; v < C_REF_LEN; v++) {
                            if (keyVal == aRef[v]) {
                                _records = SYS_getRecords(currDo); // Utility Auto Fix Comments
                                vDo = SYT_MLDC_InsertAction(currDo, aRef[v], aCCY[v], aCcount[v], aDesc[v], aCCYProtc[v], aMerge[v], _records.length, comp); // Utility Auto Fix Comments
                                data.push(vDo);
                                break;
                            }
                        }
                    }
                }
            }
            SYS_reLoadGrid(currDo, data);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_LoadDCSummaryData", e);
    }
}

function SYT_MLDC_MergeMap(key, arrys, val) {
    try {
        var aLen; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var idx; // Utility Auto Fix Comments
        var s; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        str = "";
        arr = arrys.keys();

        for (i = 0, aLen = arr.length; i < aLen; i++) {
            if (key == arr[i]) {
                s = arrys.get(arr[i]);
                str = str + s;
                str += "|";
            }
        }
        if (str.length > 0) {
            idx = str.indexOf(val);
            if (idx > -1) {
                return str.substring(0, str.length - 1);
            } else {
                str += val;
                return str;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_MergeMap", e);
    }
}

function SYT_MLDC_SaveSummary(dcTypes, summaryRef, ccyValues, descValues, amountValues, ccyProtectedValues, actions, mergeCharges, comp) {
    try {
        var C_LEN; // Utility Auto Fix Comments
        var D_LEN; // Utility Auto Fix Comments
        var LEN; // Utility Auto Fix Comments
        var amountValPara; // Utility Auto Fix Comments
        var ccyValPara; // Utility Auto Fix Comments
        var dcAccGrp; // Utility Auto Fix Comments
        var dcCCYGrp; // Utility Auto Fix Comments
        var dcCCYProtcGrp; // Utility Auto Fix Comments
        var dcDescGrp; // Utility Auto Fix Comments
        var dcGrp; // Utility Auto Fix Comments
        var dcMergeGrp; // Utility Auto Fix Comments
        var dcOpGrp; // Utility Auto Fix Comments
        var dcPara; // Utility Auto Fix Comments
        var dcRefGrp; // Utility Auto Fix Comments
        var descValPara; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mergeValPara; // Utility Auto Fix Comments
        var opActPara; // Utility Auto Fix Comments
        var protCCYPara; // Utility Auto Fix Comments
        var sumRefPara; // Utility Auto Fix Comments
        /*@author: RicardoZhu @date: 2012-8-21 @ref no:EE-6462 _S*/
        dcGrp = new Array([], []);
        dcPara = new Array(); //array[0]=credit summary ,array[1]=debit summary
        dcRefGrp = new Array([], []);
        sumRefPara = new Array();
        dcCCYGrp = new Array([], []);
        ccyValPara = new Array();
        dcAccGrp = new Array([], []); // Utility Auto Fix Comments
        amountValPara = new Array();
        dcDescGrp = new Array([], []);
        descValPara = new Array();
        dcCCYProtcGrp = new Array([], []);
        protCCYPara = new Array();
        dcOpGrp = new Array([], []);
        opActPara = new Array();
        dcMergeGrp = new Array([], []);
        mergeValPara = new Array();
        if (dcTypes != null || dcTypes != '') {
            D_LEN = 0;
            C_LEN = 0;
            dcPara = dcTypes.split("/");
            sumRefPara = summaryRef.split("/");
            ccyValPara = ccyValues.split("/");
            amountValPara = amountValues.split("/");
            descValPara = descValues.split("/");
            protCCYPara = ccyProtectedValues.split("/");
            opActPara = actions.split("/");
            mergeValPara = mergeCharges.split("/");
            LEN = dcPara.length;
            for (i = 0; i < LEN; i++) {
                if (dcPara[i] == "C") {
                    dcGrp[0][C_LEN] = dcPara[i];
                    dcRefGrp[0][C_LEN] = sumRefPara[i];
                    dcCCYGrp[0][C_LEN] = ccyValPara[i];
                    dcAccGrp[0][C_LEN] = amountValPara[i];
                    dcDescGrp[0][C_LEN] = descValPara[i];
                    dcCCYProtcGrp[0][C_LEN] = protCCYPara[i];
                    dcOpGrp[0][C_LEN] = opActPara[i];
                    dcMergeGrp[0][C_LEN] = mergeValPara[i];
                    C_LEN++;
                } else {
                    dcGrp[1][D_LEN] = dcPara[i];
                    dcRefGrp[1][D_LEN] = sumRefPara[i];
                    dcCCYGrp[1][D_LEN] = ccyValPara[i];
                    dcAccGrp[1][D_LEN] = amountValPara[i];
                    dcDescGrp[1][D_LEN] = descValPara[i];
                    dcCCYProtcGrp[1][D_LEN] = protCCYPara[i];
                    dcOpGrp[1][D_LEN] = opActPara[i];
                    dcMergeGrp[1][D_LEN] = mergeValPara[i];
                    D_LEN++;
                }
            }
        }
        SYT_MLDC_LoadDCSummaryData(dcGrp, dcRefGrp, dcCCYGrp, dcAccGrp, dcDescGrp, dcCCYProtcGrp, dcOpGrp, dcMergeGrp, comp);
        SYT_MLDC_CrossMergeFromDC(comp);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_SaveSummary", e);
    }
}

function SYT_MLDC_ValidateBalance() {
    try {
        var C_LEN; // Utility Auto Fix Comments
        var D_LEN; // Utility Auto Fix Comments
        var SLEN; // Utility Auto Fix Comments
        var _cChildDO; // Utility Auto Fix Comments
        var _cRecords; // Utility Auto Fix Comments
        var _creditDO; // Utility Auto Fix Comments
        var _dChildDO; // Utility Auto Fix Comments
        var _dRecords; // Utility Auto Fix Comments
        var _data; // Utility Auto Fix Comments
        var _debitDO; // Utility Auto Fix Comments
        var amtPos; // Utility Auto Fix Comments
        var cAmt; // Utility Auto Fix Comments
        var cChildAmt; // Utility Auto Fix Comments
        var cDesc; // Utility Auto Fix Comments
        var cFrom; // Utility Auto Fix Comments
        var cKey; // Utility Auto Fix Comments
        var cRecord; // Utility Auto Fix Comments
        var d; // Utility Auto Fix Comments
        var dAmt; // Utility Auto Fix Comments
        var dChildAmt; // Utility Auto Fix Comments
        var dDesc; // Utility Auto Fix Comments
        var dFrom; // Utility Auto Fix Comments
        var dKey; // Utility Auto Fix Comments
        var dRecord; // Utility Auto Fix Comments
        var data; // Utility Auto Fix Comments
        var dataset; // Utility Auto Fix Comments
        var fpos; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var keyPos; // Utility Auto Fix Comments
        var recordType; // Utility Auto Fix Comments
        var total; // Utility Auto Fix Comments
        _creditDO = SYS_getDoByXpath('MultiCreditSummary'); // Utility Auto Fix Comments
        _debitDO = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        if (_debitDO != null) { // Utility Auto Fix Comments
            _dChildDO = SYS_getDoByXpath('MultiDebitSummary.MultiDebit'); // Utility Auto Fix Comments
            _dRecords = SYS_getRecords(_debitDO); // Utility Auto Fix Comments
            dataset = _dChildDO.getDataSets(); // Utility Auto Fix Comments
            SLEN = dataset.length;


            if (SLEN > 0) {
                keyPos = _dChildDO.getPosFromdFields('I_MLDC_IDX'); // Utility Auto Fix Comments
                amtPos = _dChildDO.getPosFromdFields('N_MLDC_DR_AMT_TXCCY'); // Utility Auto Fix Comments
            }
            for (i = 0; i < _dRecords.length; i++) { // Utility Auto Fix Comments
                dRecord = _dRecords[i]; // Utility Auto Fix Comments
                dKey = SYS_getValFromRec(dRecord, "I_MLDC_SEQ");
                dAmt = SYS_getValFromRec(dRecord, "N_MLDC_AMT");
                dFrom = SYS_getValFromRec(dRecord, "C_MLDC_FROM");
                dDesc = SYS_getValFromRec(dRecord, "C_MLDC_DESC");
                total = 0;
                for (d = 0; d < SLEN; d++) {
                    _data = dataset[d]; // Utility Auto Fix Comments
                    D_LEN = _data.data.length; // Utility Auto Fix Comments
                    for (j = 0; j < D_LEN; j++) {
                        data = _data.data[j]; // Utility Auto Fix Comments
                        if (dKey == data[keyPos]) {
                            fpos = data.length - 1;
                            recordType = data[fpos];
                            if ("C" == recordType || "D" == recordType) {
                                continue;
                            }
                            dChildAmt = data[amtPos];
                            dChildAmt = SYS_MidifyDecimal(dChildAmt, true);
                            total = SYS_FloatAdd(total, SYS_BeFloat(dChildAmt));
                        }
                    }
                }
                if (dAmt - total != 0) {
                    SYS_ThrowError_S("4620", 'debit#' + dFrom + '#' + dDesc);
                    return false;
                }
            }
        }
        if (_creditDO != null) { // Utility Auto Fix Comments
            _cChildDO = SYS_getDoByXpath('MultiCreditSummary.MultiCredit'); // Utility Auto Fix Comments
            _cRecords = SYS_getRecords(_creditDO); // Utility Auto Fix Comments
            dataset = _cChildDO.getDataSets(); // Utility Auto Fix Comments
            SLEN = dataset.length;

            if (SLEN > 0) {
                keyPos = _cChildDO.getPosFromdFields('I_MLDC_IDX'); // Utility Auto Fix Comments
                amtPos = _cChildDO.getPosFromdFields('N_MLDC_CR_AMT_TXCCY'); // Utility Auto Fix Comments
            }
            for (i = 0; i < _cRecords.length; i++) { // Utility Auto Fix Comments
                cRecord = _cRecords[i]; // Utility Auto Fix Comments
                cKey = SYS_getValFromRec(cRecord, "I_MLDC_SEQ");
                cAmt = SYS_getValFromRec(cRecord, "N_MLDC_AMT");
                cFrom = SYS_getValFromRec(cRecord, "C_MLDC_FROM");
                cDesc = SYS_getValFromRec(cRecord, "C_MLDC_DESC");
                total = 0;
                for (d = 0; d < SLEN; d++) {
                    _data = dataset[d]; // Utility Auto Fix Comments
                    C_LEN = _data.data.length; // Utility Auto Fix Comments
                    for (j = 0; j < C_LEN; j++) {
                        data = _data.data[j]; // Utility Auto Fix Comments
                        if (cKey == data[keyPos]) {
                            fpos = data.length - 1;
                            recordType = data[fpos];
                            if ("C" == recordType || "D" == recordType) {
                                continue;
                            }
                            cChildAmt = data[amtPos];
                            cChildAmt = SYS_MidifyDecimal(cChildAmt, true);
                            total = SYS_FloatAdd(total, SYS_BeFloat(cChildAmt));
                        }
                    }
                }
                if (cAmt - total != 0) {
                    SYS_ThrowError_S("4620", 'credit#' + cFrom + '#' + cDesc);
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MLDC_ValidateBalance", e);
    }
}

function SYT_MPO_CASH_IND_Chk() {
    try {
        var cashind; // Utility Auto Fix Comments
        var localAmt; // Utility Auto Fix Comments
        localAmt = Chg.Screen.getLocalTotalAmt();
        cashind = document.MAINFORM.CHG_CASH_IND.value;
        if (cashind == "No") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "M");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
        } else
        if (cashind == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MPO_CASH_IND_Chk", e);
    }
}

function SYT_MPO_Chrg_PaidBy() {
    try {
        EEHtml.getElementById('tr_paid_by').style.display = "none";
        EEHtml.getElementById('CHG_FOREIGN_CUST_PAY_RATE').style.display = "none";
        EEHtml.getElementById('CHG_FLD_ALL_CHARGE_FOR').style.display = "none";
        EEHtml.getElementById('LBL_VAL_DT').innerText = "";
        EEHtml.getElementById('CHG_VALUE_DATE').style.display = "none";
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MPO_Chrg_PaidBy", e);
    }
}

function SYT_MPO_SPEED(FieldName, MPO) {
    try {
        var Array_1; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var obj_Field; // Utility Auto Fix Comments
        Array_1 = FieldName.split(",");
        for (i = 0; i < Array_1.length; i++) {
            obj_Field = document.getElementsByName(Array_1[i]);
            if (obj_Field == null || obj_Field == "" || obj_Field == undefined) {
                continue;
            }
            SYT_ChangeFldClass(obj_Field[0], MPO);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MPO_SPEED", e);
    }
}

function SYT_MPO_chgCallback_Additional() {
    try {
        var cashind; // Utility Auto Fix Comments
        var charge; // Utility Auto Fix Comments
        var chargeAt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var rec_type; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        rec_type = document.MAINFORM.RECORDER_TYPE.value;
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value == "F") {
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO_BTN, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            document.MAINFORM.CHG_CASH_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
        } else {
            if (rec_type == "NonCustomer") {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "P");
                document.MAINFORM.FRGN_AC_TYPE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO_BTN, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
                document.MAINFORM.FRGN_AC_NO.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "M");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "P");
                document.MAINFORM.FRGN_AC_TYPE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO_BTN, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "M");
                document.MAINFORM.FRGN_AC_NO.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            }
        }
        cashind = document.MAINFORM.CHG_CASH_IND.value;
        if (cashind == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
        }
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "0";
        if (SYS_ORG_FUNCTION_SHORT_NAME == "OTTRecAddChgs") {
            if (document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value == "F") {
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = 1;
            }
        }
        chargeAt = $('CHG_FLD_ALL_CHARGE_AT').value;
        trxChgArr = Chg.Screen.getAllTrxCharge();
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            charge.setChargeAt(chargeAt);
        }
        if (SYS_FUNCTION_TYPE != 'IQ') {
            Chk_CHG_VALUE_DATE();
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MPO_chgCallback_Additional", e);
    }
}

function SYT_MPO_chgCallback_deferred() {
    try {
        var arr; // Utility Auto Fix Comments
        var cashind; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var localAmt; // Utility Auto Fix Comments
        var paidAt; // Utility Auto Fix Comments
        var paidFor; // Utility Auto Fix Comments
        SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "O");
        SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "O");
        SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "O");

        //localAmt = Chg.Screen.getLocalTotalAmt();
        arr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < arr.length; i++) {

            paidFor = arr[i].getChargeFor();
            paidAt = arr[i].getChargeAt();
            if (paidFor == "F" && paidAt == "0") {
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "M");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "M");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "M");
            }

        }
        cashind = document.MAINFORM.CHG_CASH_IND.value;
        localAmt = Chg.Screen.getLocalTotalAmt();
        if (cashind == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");


        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MPO_chgCallback_deferred", e);
    }
}

function SYT_MPO_chgCallback_reversecharge() {
    try {
        var cashind; // Utility Auto Fix Comments
        var rec_type; // Utility Auto Fix Comments
        rec_type = document.MAINFORM.RECORDER_TYPE.value;
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value == "F") {
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO_BTN, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            document.MAINFORM.CHG_CASH_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
            //	fccy1.style.visibility = 'hidden';

            //fccy.style.visibility = 'visible';
        } else {

            if (rec_type == "NonCustomer") {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "P");
                document.MAINFORM.FRGN_AC_TYPE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO_BTN, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
                document.MAINFORM.FRGN_AC_NO.value = "";

                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "M");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_TYPE, "P");
                document.MAINFORM.FRGN_AC_TYPE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_CCY, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.FRGN_AC_NO_BTN, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "M");
                document.MAINFORM.FRGN_AC_NO.value = "";

                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");

                // fccy1.style.visibility = 'visible';
                //fccy1.value = "";
                //	fccy.style.visibility = 'hidden';
            }
        }

        cashind = document.MAINFORM.CHG_CASH_IND.value;
        if (cashind == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
            SYT_GetSuspenseAccount();

        }
        if (SYS_FUNCTION_TYPE != 'IQ') {
            Chk_CHG_VALUE_DATE();
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_MPO_chgCallback_reversecharge", e);
    }
}

function SYT_NOTES() {
    try {
        document.MAINFORM.NOTES.value = 'WORKING HOURS WEEKDAYS 9.00-17.00 SATURDAY 10.00-12.30 SUNDAY CLOSED';
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_NOTES", e);
    }
}

function SYT_Object_validation(Object_Name) {
    try {
        if (Object_Name != null && Object_Name != "null" && Object_Name != "undefined" && Object_Name != "") {
            return true;
        }
        return false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Object_validation", e);
    }
}

function SYT_OpenHelpWindow() {
    try {
        var popup; // Utility Auto Fix Comments
        popup = window.open(EEHtml.getElementById('HELP_LINK_URL').value, "popup", "height=600,width=800");
        popup.focus();
        return false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_OpenHelpWindow", e);
    }
}

function SYT_POS_TOL() {
    try {
        if (document.MAINFORM.AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            // Added 12/11/03 by TG - Resets the LC Balance back to LC Amt.
        }
        document.MAINFORM.TAG39A.value = document.MAINFORM.POS_TOL.value + "/" + document.MAINFORM.NEG_TOL.value;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_POS_TOL", e);
    }
}

function SYT_ParseRateValue(xmlhttp, mode, sSucJsFuncName, sFailJsFuncName) {
    try {
        var nRateValue; // Utility Auto Fix Comments
        var nReturnMsg; // Utility Auto Fix Comments
        var rateValue; // Utility Auto Fix Comments
        var respType; // Utility Auto Fix Comments
        var returnMsg; // Utility Auto Fix Comments
        var xml; // Utility Auto Fix Comments
        xml = xmlhttp.responseXML;
        respType = xmlhttp.getResponseHeader("Content-Type");
        if (typeof xml == "object" && respType && respType.indexOf("text/xml") != -1) {
            nReturnMsg = xml.getElementsByTagName("repMess")[0];
            returnMsg = "";
            if (nReturnMsg != null) {
                returnMsg = nReturnMsg.lastChild.data;
            }
            if (returnMsg == "SUCCESS") {
                nRateValue = xml.getElementsByTagName("INT_RATE_PCET")[0];
                rateValue = nRateValue.lastChild.data;
                if (sSucJsFuncName) {
                    genJSFunc(sSucJsFuncName, rateValue);
                }

            } else {

                if (sFailJsFuncName) {
                    genJSFunc(sFailJsFuncName);
                }
            }

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ParseRateValue", e);
    }
}

function SYT_Protect_COMM_DESC() {
    try {
        var charge; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var o1; // Utility Auto Fix Comments
        var o4; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        var v1; // Utility Auto Fix Comments
        var v4; // Utility Auto Fix Comments
        trxChgArr = Chg.Screen.getAllTrxCharge();
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];

            //v1 = charge._getFldId(Chg.FLD_CHARGE_AT);

            v4 = charge._getFldId(Chg.FLD_COMM_DESC); // Utility Auto Fix Comments

            //o1 =EEHtml.getElementById(v1);

            o4 = EEHtml.getElementById(v4);

            //o1.remove(1);
            //o1.remove(1);


            SYT_ChangeFldClass(o4, "P");
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Protect_COMM_DESC", e);
    }
}

function SYT_RELE_CREA_BY() {
    try {} catch (e) {
        DisExcpt("TrxSys.js*SYT_RELE_CREA_BY", e);
    }
}

function SYT_RESET_CABLE() {
    try {
        var sName; // Utility Auto Fix Comments
        sName = SYS_MODULE_NAME + "_SWIFT_CHG";
        Chg.reset([sName]);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RESET_CABLE", e);
    }
}

function SYT_RESET_COMM(sCommCode) {
    try {
        Chg.reset([sCommCode]);
        Chg.Screen.setChargeValue([sCommCode], SYS_LOCAL_CCY, '0');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RESET_COMM", e);
    }
}

function SYT_RESET_COURIER() {
    try {
        var sName; // Utility Auto Fix Comments
        sName = SYS_MODULE_NAME + "_COURIER_CHG";
        Chg.reset([sName]);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RESET_COURIER", e);
    }
}

function SYT_RESET_POST() {
    try {
        var sName; // Utility Auto Fix Comments
        sName = SYS_MODULE_NAME + "_POST_CHG";
        Chg.reset([sName]);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RESET_POST", e);
    }
}

function SYT_RecoverAdditionalCharges() {
    try {
        var collectCcy; // Utility Auto Fix Comments
        var cust_id; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        var rec_type; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
        }
        collectCcy = Chg.Screen.getCollectCcy();
        foreignCustCcy = Chg.Screen.getNostroCcy();

        rec_type = document.MAINFORM.RECORDER_TYPE.value;

        switch (SYS_ORG_FUNCTION_NAME) {
            case "OTTRecoverAdditionalCharges":
                cust_id = document.MAINFORM.X103_ORDCU_ID_50A.value;
                break;
            case "ITTRecoverAdditionalCharges":
                cust_id = document.MAINFORM.X103_BENECU_ID_59A.value;
                break;
            case "DraftRecoverAdditionalCharges":
                cust_id = document.MAINFORM.X103_ORDCU_ID_50A.value;
                break;
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);
        }
        Chg.Screen.protectAllChargeFor();
        Chg.Screen.protectAllChargeAt();
        Chg.Screen.protectAllCollectAmt();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
        SYT_ChangeFldClass(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE, "P");
        SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, "M");
        SYT_Protect_COMM_DESC();
        //SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE,"P");
        //EEHtml.getElementById("date_icon").style.display = "block";

        SYT_MPO_chgCallback_Additional();
        Chg.attchEvent(SYT_MPO_chgCallback_Additional);
        SYT_MPO_chgCallback_Additional();
        //func(EEAuto) for charge value date
        document.MAINFORM.CHG_VALUE_DATE.onchange = SYT_FLD_PYMT_CHG_VALUE_DATE_onchange;

        //Validation of Nostro-Vostro Accounts
        document.MAINFORM.FRGN_AC_CCY.onchange = SYT_FLD_PYMT_FRGN_AC_CCY_onchange1;

        document.MAINFORM.FRGN_AC_TYPE.onchange = SYT_FLD_PYMT_FRGN_AC_TYPE_onchange;

        document.MAINFORM.FRGN_AC_NO.onblur = SYT_FLD_PYMT_FRGN_AC_NO_onchange;

        document.MAINFORM.CHG_CASH_IND.onchange = SYT_FLD_PYMT_CHG_CASH_IND_onchange;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RecoverAdditionalCharges", e);
    }
}

function SYT_RecoverDeferredCharges() {
    try {
        var collectCcy; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            collectCcy = Chg.Screen.getCollectCcy();
            foreignCustCcy = Chg.Screen.getNostroCcy();
            SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);
            CHG_attachSetDefChargeAt();
        }


        SYT_MPO_chgCallback_deferred();
        Chg.attchEvent(SYT_MPO_chgCallback_deferred);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RecoverDeferredCharges", e);
    }
}

function SYT_RegOTT_CrossRef() {
    try {
        if (SYS_BANK_COUNTRY == "ZA") {
            SYS_GetDataBySSS_S('System_CrossRef_CON', 'REGOTT_COUNTRY_CODE;EXTERNAL_REF;FRONT_OFFICE_CODE;C_MAIN_REF;CURRNT_STATUS');
            if (document.MAINFORM.ERROR_MESSAGE.value != "NO_ERRORS") {
                SYS_CheckError(document.MAINFORM.EXTERNAL_REF, document.MAINFORM.ERROR_MESSAGE.value);
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RegOTT_CrossRef", e);
    }
}

function SYT_RemoveOption(sFldName, sOptionValue) {
    try {
        var arr_option; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        //add by mary on 2009.02.03
        arr_option = EEHtml.getElementById(sFldName).options;
        if (arr_option.length == 0) {
            return;
        }
        for (i = 0; i < arr_option.length; i++) {
            if (arr_option[i].value == sOptionValue) {
                arr_option[i] = null;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RemoveOption", e);
    }
}

function SYT_RemoveOptionAll(fieldObj) {
    try {
        var flds = null;
        if (typeof fieldObj == 'object' && (fieldObj.type == 'select' || fieldObj.type == 'select-one')) {
            flds = [fieldObj];
        }
        for (var iFld = 0; iFld < flds.length; iFld++) {
            var arr_option = flds[iFld].options;
            if (arr_option.length == 0) return;
            var option_length = arr_option.length;
            for (var i = option_length - 1; i >= 0; i--) {
                arr_option[i] = null;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_RemoveOptionAll", e);
    }
}

function SYT_Reversals_CashVoucher() {
    try {
        var ChkVal; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        document.MAINFORM.TEMP_CASH_IND.value = "No";
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");
            if (ChkVal == "Yes") {
                document.MAINFORM.TEMP_CASH_IND.value = "Yes";
                document.MAINFORM.CASH_SETT_AMT.value = SYS_BeFloat(SYS_getValFromRec(Record, "SETT_AMT"));
                document.MAINFORM.CASH_SETT_CCY.value = SYS_getValFromRec(Record, "SETT_CCY");

            }
        }
        if (document.MAINFORM.TEMP_CASH_IND.value == "Yes") {
            //Sql_Cond1 = "item_c=" + "'006'" + " AND " + "cnty_code=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "item_name=" + "'" + document.MAINFORM.CASH_SETT_CCY.value + "'";
            //Field_List = "FIELD_1_X";
            //Mapping_List = "SUSP_AC";
            SYS_GetTableDataByRule_S('TrxSys_SYT_Reversals_CashVoucher_27', '1', true);


        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Reversals_CashVoucher", e);
    }
}

function SYT_ReverseCharges() {
    try {
        var charge; // Utility Auto Fix Comments
        var chgfor; // Utility Auto Fix Comments
        var cust_id; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var rec_type; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        if (document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == 'OT' || document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == 'IT') {
            Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        } else if (document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == 'DI') {
            Chg.init('Sight Selling', 'Sight Selling', 'Sight Selling', 'Sight Selling');
        } else {
            Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        }
        Chg.Screen.protectAllCollectAmt();
        Chg.Screen.protectAllChargeFor();
        SYT_protectSelectFld("CHG_FLD_COLLECT_CCY");
        SYT_protectSelectFld("CHG_FLD_ALL_CHARGE_FOR");
        SYT_protectSelectFld("CHG_FLD_ALL_BAL_CCY");
        SYT_protectSelectFld("CHG_FLD_ALL_CHARGE_AT");
        SYT_ChangeFldClass(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE, "P");
        SYT_Protect_COMM_DESC();
        SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, "M");
        //EEHtml.getElementById('tr_paid_at').style.display = "none";
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
        }
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "IQ") {
            trxChgArr = Chg.Screen.getAllTrxCharge();
            for (i = 0; i < trxChgArr.length; i++) {
                charge = trxChgArr[i];
                charge.setChargeAt(Chg.AT_IGNORE);
                charge.chargeAtOnchange();
                chgfor = charge.getChargeFor();
                if (chgfor != "") {
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = chgfor;
                }
            }
            defChgArr = Chg.Screen.getAllDefCharge();
            for (i = 0; i < defChgArr.length; i++) {
                charge = defChgArr[i];
                charge.setChargeAt(Chg.AT_IGNORE);
                charge.chargeAtOnchange();
            }
            CHG_allPayCcy_onchange();
        }


        rec_type = document.MAINFORM.RECORDER_TYPE.value;

        switch (SYS_ORG_FUNCTION_NAME) {
            case "OTTReverseCharges":
                cust_id = document.MAINFORM.X103_ORDCU_ID_50A.value;
                break;
            case "ITTReverseCharges":
                cust_id = document.MAINFORM.X103_BENECU_ID_59A.value;
                break;
            case "DraftReverseCharges":
                cust_id = document.MAINFORM.X103_ORDCU_ID_50A.value;
                break;
        }

        SYT_MPO_chgCallback_reversecharge();
        Chg.attchEvent(SYT_MPO_chgCallback_reversecharge);

        //func(EEAuto) for charge value date
        document.MAINFORM.CHG_VALUE_DATE.onchange = SYT_FLD_PYMT_CHG_VALUE_DATE_onchange;

        //Validation of Nostro-Vostro Accounts
        document.MAINFORM.FRGN_AC_CCY.onchange = SYT_FLD_PYMT_FRGN_AC_CCY_onchange;

        document.MAINFORM.FRGN_AC_TYPE.onchange = SYT_FLD_PYMT_FRGN_AC_TYPE_onchange;

        document.MAINFORM.FRGN_AC_NO.onchange = SYT_FLD_PYMT_FRGN_AC_NO_onchange;

        document.MAINFORM.CHG_CASH_IND.onchange = SYT_FLD_PYMT_CHG_CASH_IND_onchange;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ReverseCharges", e);
    }
}

function SYT_SWIFTTagControl() {
    try {
        var oJsfFld_BICButtonFldName; // Utility Auto Fix Comments
        var oJsfFld_BICFldName; // Utility Auto Fix Comments
        var oJsfFld_BranchNameFldName; // Utility Auto Fix Comments
        var oJsfFld_NameAndAddressFldName; // Utility Auto Fix Comments
        var oJsfFld_PartyIdenifyFldName; // Utility Auto Fix Comments
        var sBICButtonFldName; // Utility Auto Fix Comments
        var sBICFldName; // Utility Auto Fix Comments
        var sBranchNameFldName; // Utility Auto Fix Comments
        var sNameAndAddressFldName; // Utility Auto Fix Comments
        var sPartyIdenifyFldName; // Utility Auto Fix Comments
        var sTagValue; // Utility Auto Fix Comments
        switch (sTagValue) {
            case '':
                if (sPartyIdenifyFldName != '') {
                    oJsfFld_PartyIdenifyFldName = document.MAINFORM.elements[sPartyIdenifyFldName];
                    oJsfFld_PartyIdenifyFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'P', 'N');
                    //oJsfFld_PartyIdenifyFldName.className='CHAR_P';
                    oJsfFld_PartyIdenifyFldName.value = '';
                }
                if (sBICFldName != '') {
                    oJsfFld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    oJsfFld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BICFldName, 'P', 'N');
                    //oJsfFld_BICFldName.className='CHAR_P';
                    oJsfFld_BICFldName.value = '';
                }
                if (sBICButtonFldName != '') {
                    oJsfFld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    oJsfFld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAndAddressFldName != '') {
                    oJsfFld_NameAndAddressFldName = document.MAINFORM.elements[sNameAndAddressFldName];
                    oJsfFld_NameAndAddressFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_NameAndAddressFldName, 'P', 'N');
                    //oJsfFld_NameAndAddressFldName.className='CHAR_P';
                    oJsfFld_NameAndAddressFldName.value = '';
                }
                if (sBranchNameFldName != '') {
                    oJsfFld_BranchNameFldName = document.MAINFORM.elements[sBranchNameFldName];
                    oJsfFld_BranchNameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BranchNameFldName, 'P', 'N');
                    //oJsfFld_BranchNameFldName.className='CHAR_P';
                    oJsfFld_BranchNameFldName.value = '';
                }
                break;
            case 'A':
                if (sPartyIdenifyFldName != '') {
                    oJsfFld_PartyIdenifyFldName = document.MAINFORM.elements[sPartyIdenifyFldName];
                    oJsfFld_PartyIdenifyFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'O', 'N');
                    //oJsfFld_PartyIdenifyFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    oJsfFld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    oJsfFld_BICFldName.style.visibility = "visible";
                    //SYT_ChangeFldClass(oJsfFld_BICFldName,'O','N');
                    SYT_ChangeFldClass(oJsfFld_BICFldName, 'M', 'N');
                    //oJsfFld_BICFldName.className='CHAR_M';
                }
                if (sBICButtonFldName != '') {
                    oJsfFld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    oJsfFld_BICButtonFldName.style.visibility = "visible";
                }
                if (sNameAndAddressFldName != '') {
                    oJsfFld_NameAndAddressFldName = document.MAINFORM.elements[sNameAndAddressFldName];
                    oJsfFld_NameAndAddressFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_NameAndAddressFldName, 'P', 'N');
                    //oJsfFld_NameAndAddressFldName.className='CHAR_P';
                }
                if (sBranchNameFldName != '') {
                    oJsfFld_BranchNameFldName = document.MAINFORM.elements[sBranchNameFldName];
                    oJsfFld_BranchNameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BranchNameFldName, 'P', 'N');
                    //oJsfFld_BranchNameFldName.className='CHAR_P';
                }

                break;
            case 'B':
                if (sPartyIdenifyFldName != '') {
                    oJsfFld_PartyIdenifyFldName = document.MAINFORM.elements[sPartyIdenifyFldName];
                    oJsfFld_PartyIdenifyFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'O', 'N');
                    //oJsfFld_PartyIdenifyFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    oJsfFld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    oJsfFld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BICFldName, 'P', 'N');
                    //oJsfFld_BICFldName.className='CHAR_P';
                }
                if (sBICButtonFldName != '') {
                    oJsfFld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    oJsfFld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAndAddressFldName != '') {
                    oJsfFld_NameAndAddressFldName = document.MAINFORM.elements[sNameAndAddressFldName];
                    oJsfFld_NameAndAddressFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_NameAndAddressFldName, 'P', 'N');
                    //oJsfFld_NameAndAddressFldName.className='CHAR_P';
                }
                if (sBranchNameFldName != '') {
                    oJsfFld_BranchNameFldName = document.MAINFORM.elements[sBranchNameFldName];
                    oJsfFld_BranchNameFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_BranchNameFldName, 'M', 'N');
                    //oJsfFld_BranchNameFldName.className='CHAR_M';
                }

                break;
            case 'C':
                if (sPartyIdenifyFldName != '') {
                    oJsfFld_PartyIdenifyFldName = document.MAINFORM.elements[sPartyIdenifyFldName];
                    oJsfFld_PartyIdenifyFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'O', 'N');
                    //oJsfFld_PartyIdenifyFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    oJsfFld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    oJsfFld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'P', 'N');
                    //oJsfFld_BICFldName.className='CHAR_P';
                }
                if (sBICButtonFldName != '') {
                    oJsfFld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    oJsfFld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAndAddressFldName != '') {
                    oJsfFld_NameAndAddressFldName = document.MAINFORM.elements[sNameAndAddressFldName];
                    oJsfFld_NameAndAddressFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_NameAndAddressFldName, 'P', 'N');
                    //oJsfFld_NameAndAddressFldName.className='CHAR_P';
                }
                if (sBranchNameFldName != '') {
                    oJsfFld_BranchNameFldName = document.MAINFORM.elements[sBranchNameFldName];
                    oJsfFld_BranchNameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BranchNameFldName, 'P', 'N');
                    //oJsfFld_BranchNameFldName.className='CHAR_P';
                }

                break;
            case 'D':
                if (sPartyIdenifyFldName != '') {
                    oJsfFld_PartyIdenifyFldName = document.MAINFORM.elements[sPartyIdenifyFldName];
                    oJsfFld_PartyIdenifyFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'O', 'N');
                    //oJsfFld_PartyIdenifyFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    oJsfFld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    oJsfFld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BICFldName, 'P', 'N');
                    //oJsfFld_BICFldName.className='CHAR_P';
                }
                if (sBICButtonFldName != '') {
                    oJsfFld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    oJsfFld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAndAddressFldName != '') {
                    oJsfFld_NameAndAddressFldName = document.MAINFORM.elements[sNameAndAddressFldName];
                    oJsfFld_NameAndAddressFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_NameAndAddressFldName, 'M', 'N');
                    //oJsfFld_NameAndAddressFldName.className='CHAR_M';
                }
                if (sBranchNameFldName != '') {
                    oJsfFld_BranchNameFldName = document.MAINFORM.elements[sBranchNameFldName];
                    oJsfFld_BranchNameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BranchNameFldName, 'P', 'N');
                    //oJsfFld_BranchNameFldName.className='CHAR_P';
                }

                break;
            default:
                if (sPartyIdenifyFldName != '') {
                    oJsfFld_PartyIdenifyFldName = document.MAINFORM.elements[sPartyIdenifyFldName];
                    oJsfFld_PartyIdenifyFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_PartyIdenifyFldName, 'O', 'N');
                    //oJsfFld_PartyIdenifyFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    oJsfFld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    oJsfFld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BICFldName, 'P', 'N');
                    //oJsfFld_BICFldName.className='CHAR_P';
                }
                if (sBICButtonFldName != '') {
                    oJsfFld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    oJsfFld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAndAddressFldName != '') {
                    oJsfFld_NameAndAddressFldName = document.MAINFORM.elements[sNameAndAddressFldName];
                    oJsfFld_NameAndAddressFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(oJsfFld_NameAndAddressFldName, 'M', 'N');
                    //oJsfFld_NameAndAddressFldName.className='CHAR_M';
                }
                if (sBranchNameFldName != '') {
                    oJsfFld_BranchNameFldName = document.MAINFORM.elements[sBranchNameFldName];
                    oJsfFld_BranchNameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(oJsfFld_BranchNameFldName, 'P', 'N');
                    //oJsfFld_BranchNameFldName.className='CHAR_P';
                }
                break;

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_SWIFTTagControl", e);
    }
}

function SYT_SWIFTTagControl_new() {
    try {
        var Fld_AcnoFldName; // Utility Auto Fix Comments
        var Fld_BICButtonFldName; // Utility Auto Fix Comments
        var Fld_BICFldName; // Utility Auto Fix Comments
        var Fld_NameAddressFldName; // Utility Auto Fix Comments
        var Fld_NameFldName; // Utility Auto Fix Comments
        var sAcnoFldName; // Utility Auto Fix Comments
        var sBICButtonFldName; // Utility Auto Fix Comments
        var sBICFldName; // Utility Auto Fix Comments
        var sNameAddressFldName; // Utility Auto Fix Comments
        var sNameFldName; // Utility Auto Fix Comments
        var sTagValue; // Utility Auto Fix Comments
        var submit1; // Utility Auto Fix Comments
        var trId; // Utility Auto Fix Comments
        var trObject; // Utility Auto Fix Comments
        switch (sTagValue) {
            case '':
                if (sAcnoFldName != '') {
                    Fld_AcnoFldName = document.MAINFORM.elements[sAcnoFldName];
                    Fld_AcnoFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'P', 'N');
                    //Fld_AcnoFldName.className='CHAR_P';
                    Fld_AcnoFldName.value = '';
                    trId = "TR_" + sAcnoFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                if (sBICFldName != '') {
                    Fld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    Fld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_BICFldName, 'P', 'N');
                    //Fld_BICFldName.className='CHAR_P';
                    Fld_BICFldName.value = '';
                    trId = "TR_" + sBICFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                if (sBICButtonFldName != '') {
                    Fld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    Fld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAddressFldName != '') {
                    Fld_NameAddressFldName = document.MAINFORM.elements[sNameAddressFldName];
                    Fld_NameAddressFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameAddressFldName, 'P', 'N');
                    //Fld_NameAddressFldName.className='CHAR_P';
                    Fld_NameAddressFldName.value = '';
                    trId = "TR_" + sNameAddressFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                if (sNameFldName != '') {
                    Fld_NameFldName = document.MAINFORM.elements[sNameFldName];
                    Fld_NameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameFldName, 'P', 'N');
                    //Fld_NameFldName.className='CHAR_P';
                    Fld_NameFldName.value = '';
                    Fld_NameAddressFldName.value = '';
                    trId = "TR_" + sNameFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                break;
            case 'A':
                if (sAcnoFldName != '') {
                    Fld_AcnoFldName = document.MAINFORM.elements[sAcnoFldName];
                    Fld_AcnoFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'O', 'N');
                    //Fld_AcnoFldName.className='CHAR_O';
                    trId = "TR_" + sAcnoFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }
                if (sBICFldName != '') {
                    Fld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    Fld_BICFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_BICFldName, 'M', 'N');
                    //Fld_BICFldName.className='CHAR_M';
                    trId = "TR_" + sBICFldName;
                    submit1 = EEHtml.getElementById(trId);
                    submit1.style.display = "";
                }
                if (sBICButtonFldName != '') {
                    Fld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    Fld_BICButtonFldName.style.visibility = "visible";
                }
                if (sNameAddressFldName != '') {
                    Fld_NameAddressFldName = document.MAINFORM.elements[sNameAddressFldName];
                    Fld_NameAddressFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_NameAddressFldName, 'P', 'N');
                    //Fld_NameAddressFldName.className='CHAR_P';
                    trId = "TR_" + sNameAddressFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }
                if (sNameFldName != '') {
                    Fld_NameFldName = document.MAINFORM.elements[sNameFldName];
                    Fld_NameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameFldName, 'P', 'N');
                    //Fld_NameFldName.className='CHAR_P';
                    trId = "TR_" + sNameFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }

                break;
            case 'B':
                if (sAcnoFldName != '') {
                    Fld_AcnoFldName = document.MAINFORM.elements[sAcnoFldName];
                    Fld_AcnoFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'O', 'N');
                    //Fld_AcnoFldName.className='CHAR_O';
                    trId = "TR_" + sAcnoFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }
                if (sBICFldName != '') {
                    Fld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    Fld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_BICFldName, 'P', 'N');
                    //Fld_BICFldName.className='CHAR_P';
                    trId = "TR_" + sBICFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                if (sBICButtonFldName != '') {
                    Fld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    Fld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAddressFldName != '') {
                    Fld_NameAddressFldName = document.MAINFORM.elements[sNameAddressFldName];
                    Fld_NameAddressFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameAddressFldName, 'P', 'N');
                    //Fld_NameAddressFldName.className='CHAR_P';
                    trId = "TR_" + sNameAddressFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                if (sNameFldName != '') {
                    Fld_NameFldName = document.MAINFORM.elements[sNameFldName];
                    Fld_NameFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_NameFldName, 'M', 'N');
                    //Fld_NameFldName.className='CHAR_M';
                    trId = "TR_" + sNameFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }

                break;
            case 'C':
                if (sAcnoFldName != '') {
                    Fld_AcnoFldName = document.MAINFORM.elements[sAcnoFldName];
                    Fld_AcnoFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'O', 'N');
                    //Fld_AcnoFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    Fld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    Fld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'P', 'N');
                    //Fld_BICFldName.className='CHAR_P';
                }
                if (sBICButtonFldName != '') {
                    Fld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    Fld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAddressFldName != '') {
                    Fld_NameAddressFldName = document.MAINFORM.elements[sNameAddressFldName];
                    Fld_NameAddressFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameAddressFldName, 'P', 'N');
                    //Fld_NameAddressFldName.className='CHAR_P';
                }
                if (sNameFldName != '') {
                    Fld_NameFldName = document.MAINFORM.elements[sNameFldName];
                    Fld_NameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameFldName, 'P', 'N');
                    //Fld_NameFldName.className='CHAR_P';
                }

                break;
            case 'D':
                if (sAcnoFldName != '') {
                    Fld_AcnoFldName = document.MAINFORM.elements[sAcnoFldName];
                    Fld_AcnoFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'O', 'N');
                    //Fld_AcnoFldName.className='CHAR_O';
                    trId = "TR_" + sAcnoFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }
                if (sBICFldName != '') {
                    Fld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    Fld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_BICFldName, 'P', 'N');
                    //Fld_BICFldName.className='CHAR_P';
                    trId = "TR_" + sBICFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }
                if (sBICButtonFldName != '') {
                    Fld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    Fld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAddressFldName != '') {
                    Fld_NameAddressFldName = document.MAINFORM.elements[sNameAddressFldName];
                    Fld_NameAddressFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_NameAddressFldName, 'M', 'N');
                    //Fld_NameAddressFldName.className='CHAR_M';
                    trId = "TR_" + sNameAddressFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "";
                }
                if (sNameFldName != '') {
                    Fld_NameFldName = document.MAINFORM.elements[sNameFldName];
                    Fld_NameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameFldName, 'P', 'N');
                    //Fld_NameFldName.className='CHAR_P';
                    trId = "TR_" + sNameFldName;
                    trObject = EEHtml.getElementById(trId);
                    trObject.style.display = "none";
                }

                break;
            default:
                if (sAcnoFldName != '') {
                    Fld_AcnoFldName = document.MAINFORM.elements[sAcnoFldName];
                    Fld_AcnoFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_AcnoFldName, 'O', 'N');
                    //Fld_AcnoFldName.className='CHAR_O';
                }
                if (sBICFldName != '') {
                    Fld_BICFldName = document.MAINFORM.elements[sBICFldName];
                    Fld_BICFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_BICFldName, 'P', 'N');
                    //Fld_BICFldName.className='CHAR_P';
                }
                if (sBICButtonFldName != '') {
                    Fld_BICButtonFldName = document.MAINFORM.elements[sBICButtonFldName];
                    Fld_BICButtonFldName.style.visibility = "hidden";
                }
                if (sNameAddressFldName != '') {
                    Fld_NameAddressFldName = document.MAINFORM.elements[sNameAddressFldName];
                    Fld_NameAddressFldName.style.visibility = "visible";
                    SYT_ChangeFldClass(Fld_NameAddressFldName, 'M', 'N');
                    //Fld_NameAddressFldName.className='CHAR_M';
                }
                if (sNameFldName != '') {
                    Fld_NameFldName = document.MAINFORM.elements[sNameFldName];
                    Fld_NameFldName.style.visibility = "hidden";
                    SYT_ChangeFldClass(Fld_NameFldName, 'P', 'N');
                    //Fld_NameFldName.className='CHAR_P';
                }
                break;

        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_SWIFTTagControl_new", e);
    }
}

function SYT_SWIFT_MAT() {
    try {
        var newCurrency = document.MAINFORM.COLL_CCY.value;
        var newAmount = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        var dayMonth = document.MAINFORM.DAY_MON_FLG.value;
        // FOR TENOR DAYS----------------->
        var newDays = document.MAINFORM.TENOR_DAYS.value;
        if (newDays.length == 1)
            newDays = "00" + '' + newDays;
        else if (newDays.length == 2)
            newDays = "0" + '' + newDays;
        //END FOR TENOR DAYS----------->
        // FOR TENOR EVENT FIXED MATURITY DATE ------------->

        matDate = null;
        matDate = document.MAINFORM.DUE_DT.value;
        var arr = matDate.split("-");
        var year = arr[0];
        year = year.substring(2, 4);
        var dateFormat = year + '' + arr[1] + '' + arr[2];


        //END TENOR EVENT FIXED MATURITY DATE ------------->

        if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
            if (SYS_MODULE_NAME == 'IMCO') {
                document.MAINFORM.TAG_32.value = "K";
                //document.MAINFORM.TEMP_TENOR_32K.value = "D000ST" + newCurrency + '' + newAmount;
                document.MAINFORM.TEMP_TENOR_32K.value = "D000ST";
            } else if (SYS_MODULE_NAME == 'EXCO') {
                //document.MAINFORM.TAG32_MAP.value = "D000ST" + newCurrency + '' + newAmount;
                document.MAINFORM.TAG32_MAP.value = "D000ST";
            }


        } else if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval') {
            if (document.MAINFORM.TENOR_EVENT.value != "XXX") {
                if (SYS_MODULE_NAME == 'IMCO') {
                    document.MAINFORM.TAG_32.value = "K";
                }

                SYT_TENOR_EVENT_FOR_32();

                if (SYS_MODULE_NAME == 'IMCO') {
                    //document.MAINFORM.TEMP_TENOR_32K.value = dayMonth + '' + "" + newDays + document.MAINFORM.T_EVENT_32K.value + '' + newCurrency + '' + newAmount;
                    document.MAINFORM.TEMP_TENOR_32K.value = dayMonth + '' + "" + newDays + document.MAINFORM.T_EVENT_32K.value;
                } else if (SYS_MODULE_NAME == 'EXCO') {
                    if (dayMonth == 'Days') {
                        dayMonth = 'D';
                    } else if (dayMonth == 'Months') {
                        dayMonth = 'M';
                    }
                    //document.MAINFORM.TAG32_MAP.value = dayMonth + '' + "" + newDays + document.MAINFORM.T_EVENT_32K.value + '' + newCurrency + '' + newAmount;
                    document.MAINFORM.TAG32_MAP.value = dayMonth + '' + "" + newDays + document.MAINFORM.T_EVENT_32K.value;
                }




            } else {
                if (document.MAINFORM.TENOR_EVENT.value == 'XXX' && document.MAINFORM.DUE_DT.value != "") {

                    if (SYS_MODULE_NAME == 'IMCO') {
                        document.MAINFORM.TAG_32.value = "A";
                    } else if (SYS_MODULE_NAME == 'EXCO') {
                        document.MAINFORM.TAG32.value = "A";
                    }
                    SYT_TENOR_EVENT_FOR_32();

                    if (SYS_MODULE_NAME == 'IMCO') {
                        //document.MAINFORM.TEMP_TENOR_32K.value = dateFormat + '' + newCurrency + '' + newAmount;
                        document.MAINFORM.TEMP_TENOR_32K.value = dateFormat + '';
                    } else if (SYS_MODULE_NAME == 'EXCO') {
                        //document.MAINFORM.TAG32_MAP.value = dateFormat + '' + newCurrency + '' + newAmount;
                        document.MAINFORM.TAG32_MAP.value = dateFormat;
                    }

                }
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_SWIFT_MAT", e);
    }
}

function SYT_SYS_Diary_Add() {
    try {} catch (e) {
        DisExcpt("TrxSys.js*SYT_SYS_Diary_Add", e);
    }
}

function SYT_SYS_buildSQLCond(colsToFields, extColsToFields, manualAppend) {
    try {
        var addtCondCheck; // Utility Auto Fix Comments
        var sqlStr; // Utility Auto Fix Comments
        var sqlStrApnd; // Utility Auto Fix Comments
        sqlStr = "";
        sqlStrApnd = "";
        addtCondCheck = false;
        for (i = 0; i < colsToFields.length; i++) {
            if (document.MAINFORM.elements[colsToFields[i + 1]].value != "") {
                if (sqlStr.length > 0) {
                    sqlStr += " AND ";
                }
                sqlStr += colsToFields[i] + " LIKE \'<--" + colsToFields[i + 1] + "-->" + "%" + "\'";
            }
            i++;
        }
        if (manualAppend != null) {
            sqlStr += " AND " + manualAppend;
        }

        if (extColsToFields != null) {
            if (sqlStr.length != 0) {
                sqlStrApnd += " AND (";
            } else {
                sqlStrApnd += "((1=0) ";
            }
            for (i = 0; i < extColsToFields.length; i++) {
                if (document.MAINFORM.elements[extColsToFields[i + 1]].value != "") {
                    if (sqlStrApnd.charAt(sqlStrApnd.length - 1) != "(") {
                        sqlStrApnd += " OR ";
                    }
                    sqlStrApnd += extColsToFields[i] + " LIKE \'<--" + extColsToFields[i + 1] + "-->" + "%" + "\'";
                    addtCondCheck = true;
                }
                i++;
            }
            sqlStrApnd += ")";
        }

        if (addtCondCheck) {
            sqlStr += sqlStrApnd;
        }

        if (sqlStr.length == 0) {
            sqlStr += "1=1";
        }

        return sqlStr;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_SYS_buildSQLCond", e);
    }
}

function SYT_Set_ExchRate_TrxChargeDO() {
    try {
        var charge; // Utility Auto Fix Comments
        var comcode; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var trxChgArr; // Utility Auto Fix Comments
        trxChgArr = Chg.Screen.getAllTrxCharge();
        for (i = 0; i < trxChgArr.length; i++) {
            charge = trxChgArr[i];
            comcode = charge.getCommCode();
            Chg.Screen.setTrxTempFieldVaule(comcode, '5', document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE.value);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Set_ExchRate_TrxChargeDO", e);
    }
}

function SYT_Set_Int_Flds_CustId() {
    try {
        if (SYS_ORG_FUNCTION_NAME == "CompOutPmt") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "ReversalOTT") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "Re-effect OTT") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "OTTRecoverAdditionalCharges") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "OTTReverseCharges") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "Proc_Inc_103") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "ReversePayment_ITT") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "ITTRecoverAdditionalCharges") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "ITTReverseCharges") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "General Purpose Accounting") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        } else if (SYS_ORG_FUNCTION_NAME == "InternalTrf") {
            document.MAINFORM.INT_CUST_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Set_Int_Flds_CustId", e);
    }
}

function SYT_Set_TRXCCY2CHG() {
    try {
        if (SYS_MODULE_NAME == 'EPLC' || SYS_MODULE_NAME == 'IPLC' || SYS_MODULE_NAME == 'REIM') {
            Chg.Screen.mapTrxCcy('LC_CCY');
        } else if (SYS_MODULE_NAME == 'IMCO' || SYS_MODULE_NAME == 'EXCO') {
            Chg.Screen.mapTrxCcy('COLL_CCY');
        } else if (SYS_MODULE_NAME == 'IWGT' || SYS_MODULE_NAME == 'GTEE') {
            Chg.Screen.mapTrxCcy('GTEE_CCY');
        } else if (SYS_MODULE_NAME == 'RPFM') {
            Chg.Screen.mapTrxCcy('PART_RISK_CCY');
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Set_TRXCCY2CHG", e);
    }
}

function SYT_Set_Value_FLDS(arr_RV_FLDS, arr_TRX_VALUE, arr_TRX_FLDS, arr_RV_PMO) {
    try {
        var RVObj; // Utility Auto Fix Comments
        var TrxObj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        len = arr_RV_FLDS.length;
        for (i = 0; i < len; i++) {

            if (arr_TRX_VALUE[i] == "" && typeof arr_TRX_FLDS == 'object' && typeof arr_RV_PMO == 'object') {
                TrxObj = EEHtml.getElementById(arr_TRX_FLDS[i]);

                if (arr_RV_PMO[i] == "M") {
                    if (TrxObj == null) {
                        alert(arr_TRX_FLDS[i] + " doesn't exist in screen!");
                        break;
                    } else {
                        SYS_CheckError(TrxObj, TrxObj.title + " must be input a value!");
                        break;
                    }
                }

            } else {
                RVObj = EEHtml.getElementById(arr_RV_FLDS[i]);
                if (RVObj == null) {
                    alert("lost of screen:" + arr_RV_FLDS[i]);
                    break;
                }
                RVObj.value = arr_TRX_VALUE[i];
            }
        }
        if (i < arr_RV_FLDS.length) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Set_Value_FLDS", e);
    }
}

function SYT_Settlement() {
    try {
        var AdjCrAmt; // Utility Auto Fix Comments
        var AdjDrAmt; // Utility Auto Fix Comments
        var BahtNet; // Utility Auto Fix Comments
        var CashAmt; // Utility Auto Fix Comments
        var ChqAmt; // Utility Auto Fix Comments
        var ChrgPay; // Utility Auto Fix Comments
        var DCFlg1; // Utility Auto Fix Comments
        var DCFlg2; // Utility Auto Fix Comments
        var DCFlg3; // Utility Auto Fix Comments
        var DrCrAmt1; // Utility Auto Fix Comments
        var DrCrAmt2; // Utility Auto Fix Comments
        var DrCrAmt3; // Utility Auto Fix Comments
        var InterAmt; // Utility Auto Fix Comments
        var TotPay; // Utility Auto Fix Comments
        var nNewTotPay; // Utility Auto Fix Comments
        CashAmt = SYS_BeFloat(document.MAINFORM.CASH_AMT.value);
        ChqAmt = SYS_BeFloat(document.MAINFORM.CHEQUE_AMT.value);
        BahtNet = SYS_BeFloat(document.MAINFORM.BAHTNET_AMT.value);
        InterAmt = SYS_BeFloat(document.MAINFORM.INTER_OFF_AMT.value);
        DrCrAmt2 = SYS_BeFloat(document.MAINFORM.DC_AMT2.value);
        DrCrAmt3 = SYS_BeFloat(document.MAINFORM.DC_AMT3.value);

        DCFlg1 = document.MAINFORM.DC_FLAG_1.value;
        DCFlg2 = document.MAINFORM.DC_FLAG_2.value;
        DCFlg3 = document.MAINFORM.DC_FLAG_3.value;
        AdjDrAmt = SYS_BeFloat(document.MAINFORM.ADJ_DR_AMT.value);
        AdjCrAmt = SYS_BeFloat(document.MAINFORM.ADJ_CR_AMT.value);
        ChrgPay = SYS_BeFloat(document.MAINFORM.TOT_CHG_PAY_LCY.value);

        nNewTotPay = SYS_BeFloat(TotPay);
        DrCrAmt1 = nNewTotPay - CashAmt - ChqAmt - BahtNet - InterAmt - AdjCrAmt + AdjDrAmt + ChrgPay;

        if (DCFlg2 == DCFlg1) {
            DrCrAmt1 = DrCrAmt1 - DrCrAmt2;
        }

        if (DCFlg3 == DCFlg1) {
            DrCrAmt1 = DrCrAmt1 - DrCrAmt3;
        }

        document.MAINFORM.TOT_AMT_PAY_ORG.value = SYT_CCY_AMT(SYS_LOCAL_CCY, (nNewTotPay + ChrgPay));
        document.MAINFORM.DC_AMT1.value = SYT_CCY_AMT(SYS_LOCAL_CCY, DrCrAmt1);
        document.MAINFORM.TOT_AMT_PAY.value = SYT_CCY_AMT(SYS_LOCAL_CCY, DrCrAmt1);
        if (DrCrAmt1 > 0) {
            document.MAINFORM.DC_ACCT1.className = 'CHAR_M';
        } else {
            document.MAINFORM.DC_ACCT1.className = 'CHAR_O';
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Settlement", e);
    }
}

function SYT_SettlementFCY() {
    try {
        var FCYPayAmt; // Utility Auto Fix Comments
        var FCYPayCcy; // Utility Auto Fix Comments
        document.MAINFORM.PAY_CCY.value = FCYPayCcy;
        document.MAINFORM.TOT_AMT_PAY_FCY.value = FCYPayAmt;
        document.MAINFORM.DC_CCY4.value = SYT_CCY_AMT(SYS_LOCAL_CCY, FCYPayCcy);
        document.MAINFORM.DC_AMT4.value = SYT_CCY_AMT(SYS_LOCAL_CCY, FCYPayAmt);
        if (FCYPayAmt > 0) {
            document.MAINFORM.DC_ACCT4.className = 'CHAR_M';
        } else {
            document.MAINFORM.DC_ACCT4.className = 'CHAR_O';
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_SettlementFCY", e);
    }
}

function SYT_ShowBlankRow(Td_Id, Row_tr, IsHeader) {
    try {
        var Obj_td; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sHTML_content; // Utility Auto Fix Comments
        var sHTML_tableend; // Utility Auto Fix Comments
        var sHTML_tableheader; // Utility Auto Fix Comments
        Obj_td = EEHtml.getElementById(Td_Id);
        sHTML_tableheader = "<table width='100%' cellpadding='0' cellspacing='0'>";
        sHTML_tableend = "</table>";
        sHTML_content = "";
        if (IsHeader == "Y") {
            sHTML_content = sHTML_content + "<tr>";
            sHTML_content = sHTML_content + "<td class='title'>&nbsp;</td>";
            sHTML_content = sHTML_content + "</tr>";
            Row_tr = Row_tr - 1;
        }
        if (Row_tr > 0) {
            for (i = 1; i <= Row_tr; i++) { // Utility Auto Fix Comments
                sHTML_content = sHTML_content + "<tr>";
                sHTML_content = sHTML_content + "<td class='td_gray'>&nbsp;</td>";
                sHTML_content = sHTML_content + "</tr>";
            }
        }
        sHTML = sHTML_tableheader + sHTML_content + sHTML_tableend;

        Obj_td.insertAdjacentHTML("beforeEnd", sHTML);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ShowBlankRow", e);
    }
}

function SYT_Show_Notes(NotesName) {
    try {
        return false;
        var Notes; // Utility Auto Fix Comments
        var NotesObj; // Utility Auto Fix Comments
        var TdId; // Utility Auto Fix Comments
        var TdObj; // Utility Auto Fix Comments
        TdId = NotesName + "_body";
        TdObj = EEHtml.getElementById(TdId);
        NotesObj = EEHtml.getElementById(NotesName);
        Notes = NotesObj.value.toString();
        TdObj.innerHTML = Notes.replace(/\\n/ig, "<br>").replace(/\\+/ig, "<br>");
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Show_Notes", e);
    }
}

function SYT_Succ_LocalHoliday() {
    try {
        var cntyCode; // Utility Auto Fix Comments
        cntyCode = document.MAINFORM.CR_CCY.value.substring(0, 2);
        document.MAINFORM.CNTY.value = cntyCode;
        SYS_CheckHoliday('CNTY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_CntyHoliday()', 'SYM_PYMT_Fail_CntyHoliday()');
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Succ_LocalHoliday", e);
    }
}

function SYT_Sum_of_Amount_19(DoName, FieldObj) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath(DoName);
        arrayvalue = SYS_getRecords(node);
        ccy = SYS_getValFromRec(arrayvalue[0], 'X203_32B_CCY');
        if (arrayvalue == null || arrayvalue == '') {
            return;
        }
        for (i = 0; i < arrayvalue.length; i++) {
            record += SYS_BeFloat(SYS_getValFromRec(arrayvalue[i], FieldObj));
        }
        record = SYT_AmtFormat(ccy, record);
        SYS_setValueToMain('X203_19_CCY', ccy);
        SYS_setValueToMain('X203_19_AMT', record);
        record = 0;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_Sum_of_Amount_19", e);
    }
}

function SYT_TENOR_EVENT_FOR_32() {
    try {
        var event;
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'Create_Coll' || SYS_ORG_FUNCTION_SHORT_NAME == 'RegCollection')
            event = document.MAINFORM.TENOR_EVENT.value;
        else if (SYS_ORG_FUNCTION_NAME == "AmendDischarge")
            event = document.MAINFORM.NEW_TENOR_EVENT.value;
        var event_32K = "";

        switch (event) {
            case "BE":
                event_32K = "BE";
                break;
            case "CC":
                event_32K = "CC";
                break;
            case "FD":
                event_32K = "FD";
                break;
            case "FP":
                event_32K = "FP";
                break;
            case "GA":
                event_32K = "GA";
                break;
            case "ID":
                event_32K = "ID";
                break;
            case "ST":
                event_32K = "ST";
                break;
            case "TD":
                event_32K = "TD";
                break;
            case "XX":
                event_32K = "XX";
                break;
            default:
                sT_event_32K = "";
        }
        document.MAINFORM.T_EVENT_32K.value = event_32K;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_TENOR_EVENT_FOR_32", e);
    }
}

function SYT_ValidateCustAcctPortfolio(strCustID, strAcctNum) {
    try {
        var url; // Utility Auto Fix Comments
        url = "../servlets/WSTrxManager?_TRX_STATUS=SCF_CS&_CS_ACT_TYPE=SCF_CIM_VALI&C_CUST_ID=" + strCustID + "&C_AC_NUMBER=" + strAcctNum;
        sendRequestByAjaxPost(url, false, SYT_parseCIMValidateResponse, null, null);
        return window["_CIMVailResult"];
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_ValidateCustAcctPortfolio", e);
    }
}

function SYT_VisibleNote(NotesName) {
    try {
        return false;
        var DivID; // Utility Auto Fix Comments
        var Div_body; // Utility Auto Fix Comments
        var Div_header; // Utility Auto Fix Comments
        var ObjDiv; // Utility Auto Fix Comments
        var ObjDiv_body; // Utility Auto Fix Comments
        var ObjDiv_header; // Utility Auto Fix Comments
        var PostLeft; // Utility Auto Fix Comments
        var PostTop; // Utility Auto Fix Comments
        Div_header = NotesName + "_header";
        Div_body = NotesName + "_body";
        DivID = NotesName + "_Layer";
        PostLeft = document.body.scrollLeft + event.clientX;
        PostTop = document.body.scrollTop + event.clientY;
        ObjDiv = EEHtml.getElementById(DivID);
        ObjDiv_header = EEHtml.getElementById(Div_header);
        ObjDiv_body = EEHtml.getElementById(Div_body);

        ObjDiv.style.posLeft = PostLeft;
        ObjDiv.style.posTop = PostTop;
        if (ObjDiv.innerHTML != "") {
            ObjDiv.style.display = "block";
            ObjDiv_header.style.display = "block";
            ObjDiv_body.style.display = "block";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_VisibleNote", e);
    }
}

function SYT_WHZH_TRX_CODE_CHECK() {
    try {
        var CUST_CHG_ACNO; // Utility Auto Fix Comments
        var FINC_AMT_O; // Utility Auto Fix Comments
        var FINC_TRX_FLG; // Utility Auto Fix Comments
        var MRGN_CUST_AC_NO; // Utility Auto Fix Comments
        var PMT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO1');
            PMT_CUST_AC_NO = EEHtml.getElementById('PMT_CUST_AC_NO1');
            MRGN_CUST_AC_NO = EEHtml.getElementById('MRGN_CUST_AC_NO1');
            FINC_TRX_FLG = EEHtml.getElementById('FINC_TRX_FLG');
            FINC_AMT_O = EEHtml.getElementById('FINC_AMT_O');
            CUST_CHG_ACNO = EEHtml.getElementById('CUST_CHG_ACNO');

            if (SETT_CUST_AC_NO != null) {
                if (!SETT_WHZH_TRX_CODE_CHECK()) {
                    SYS_CheckError(document.MAINFORM.WHZH_TRX_CODE, 'The Transaction Codes for Forex Account Interface cannot be empty!');
                    return false;
                }
            }
            if (PMT_CUST_AC_NO != null) {
                if (!PMT_WHZH_TRX_CODE_CHECK()) {
                    SYS_CheckError(document.MAINFORM.WHZH_TRX_CODE, 'The Transaction Codes for Forex Account Interface cannot be empty!');
                    return false;
                }
            }
            if (MRGN_CUST_AC_NO != null) {
                if (!MRGN_WHZH_TRX_CODE_CHECK()) {
                    SYS_CheckError(document.MAINFORM.WHZH_TRX_CODE, 'The Transaction Codes for Forex Account Interface cannot be empty!');
                    return false;
                }
            }
            if (CUST_CHG_ACNO != null) {
                if (!CHG_WHZH_TRX_CODE_CHECK()) {
                    SYS_CheckError(document.MAINFORM.WHZH_TRX_CODE, 'The Transaction Codes for Forex Account Interface cannot be empty!');
                    return false;
                }
            }
        }

        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_WHZH_TRX_CODE_CHECK", e);
    }
}

function SYT_addTrxHistory() {
    try {
        var OldTrxHist; // Utility Auto Fix Comments
        var notesToAdd; // Utility Auto Fix Comments
        OldTrxHist = document.MAINFORM.TRX_HISTORY.value;
        if (document.MAINFORM.NOTES.value != "") {
            notesToAdd = "Notes Added by " + SYS_USER_ID + " on " + SYS_BUSI_DATE + " " + SYS_TIME + " during " + SYS_FUNCTION_DESC + '\n' + document.MAINFORM.NOTES.value;
            if (OldTrxHist != "") {
                document.MAINFORM.TRX_HISTORY.value = OldTrxHist + '\n' + notesToAdd;
            } else {
                document.MAINFORM.TRX_HISTORY.value = notesToAdd;
            }
        } else {
            document.MAINFORM.TRX_HISTORY.value = OldTrxHist;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_addTrxHistory", e);
    }
}

function SYT_base64_decode(data) {
    try {
        var ac; // Utility Auto Fix Comments
        var b64; // Utility Auto Fix Comments
        var bits; // Utility Auto Fix Comments
        var h1; // Utility Auto Fix Comments
        var h2; // Utility Auto Fix Comments
        var h3; // Utility Auto Fix Comments
        var h4; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var o1; // Utility Auto Fix Comments
        var o2; // Utility Auto Fix Comments
        var o3; // Utility Auto Fix Comments
        var tmp_arr; // Utility Auto Fix Comments
        b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";











        i = 0;

        ac = 0;
        dec = "";
        tmp_arr = [];

        if (!data) {
            return data;
        }

        data += '';

        do { // unpack four hexets into three octets using index points in b64
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));

            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;

            if (h3 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1);
            } else if (h4 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1, o2);
            } else {
                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }
        } while (i < data.length);


        dec = tmp_arr.join('');
        //  dec = this.utf8_decode(dec);

        return dec;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_base64_decode", e);
    }
}

function SYT_calDateByDays(sStrDtVal, nDays) {
    try {
        var sNewDate = "";
        if (sStrDtVal !== "" && sStrDtVal !== null) {
            var dDtVal = SYT_convDateStrToObj(sStrDtVal);
            var msPerDay = 24 * 60 * 60 * 1000;
            var nNewDays = SYS_BeInt(nDays);
            var nNewDate = dDtVal.getTime() + (msPerDay * nNewDays);
            var oNewDate = new Date();
            oNewDate.setTime(nNewDate);
            sNewDate = SYT_ConvDtObjToStr(oNewDate);
        }
        return sNewDate;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_calDateByDays", e);
    }
}

function SYT_calDateByMonth(sStrDateVal, nMonth) {
    try {
        if (sStrDateVal === "" || sStrDateVal === null) {
            return;
        }
        var dDate = SYT_convDateStrToObj(sStrDateVal);
        var nStartYear = SYS_BeInt(dDate.getFullYear());
        var nStartMon = SYS_BeInt(dDate.getMonth()) + 1;
        var nStartDays = SYS_BeInt(dDate.getDate());
        var sStartYear = "";
        var sStartMon = "";
        var dStartEomDt = "";
        var nEomDays = 0;
        var nCalMon = 0;
        var nCalYear = 0;
        var nNewYear = 0;
        var nNewMon = 0;
        var nNewDays = 0;
        var sNwDays = "";
        var sNwMon = "";
        var sNwYear = "";
        var sNewDate = "";
        var dNewEomDt = "";
        var sIncDecFlg = "";
        var nNewFebEomDay = 0;

        if (nMonth !== 0) {
            if (nMonth > 0) {
                sIncDecFlg = "I";
            } else {
                sIncDecFlg = "D";
                nMonth = Math.abs(nMonth);
            }
        } else {
            return sStrDateVal;
        }
        if (sIncDecFlg !== "") {
            if (nMonth > 12) {
                nCalYear = Math.floor(nMonth / 12);
                nCalMon = nMonth % 12;
                if (sIncDecFlg === "I") {
                    nNewMon = nStartMon + nCalMon;
                    if (nNewMon > 12) {
                        nNewYear = nStartYear + nCalYear + 1;
                        nNewMon = nNewMon - 12;
                    } else {
                        nNewYear = nStartYear + nCalYear;
                    }
                } else {
                    nNewMon = nStartMon - nCalMon;
                    if (nNewMon <= 0) {
                        nNewYear = nStartYear - nCalYear - 1;
                        nNewMon = nNewMon + 12;
                    } else {
                        nNewYear = nStartYear - nCalYear;
                    }
                }
            } else {
                nCalMon = nMonth;
                if (sIncDecFlg === "I") {
                    nNewMon = nStartMon + nCalMon;
                    if (nNewMon > 12) {
                        nNewYear = nStartYear + 1;
                        nNewMon = nNewMon - 12;
                    } else {
                        nNewYear = nStartYear;
                    }
                } else {
                    nNewMon = nStartMon - nCalMon;
                    if (nNewMon <= 0) {
                        nNewYear = nStartYear - 1;
                        nNewMon = nNewMon + 12;
                    } else {
                        nNewYear = nStartYear;
                    }
                }
            }
        }
        sStartYear = nStartYear.toString();
        sStartMon = nStartMon.toString();
        sNewYear = nNewYear.toString();
        sNewMonth = nNewMon.toString();
        dStartEomDt = new Date(sStartYear, sStartMon, 0);
        nEomDays = dStartEomDt.getDate();
        nNewFebEomDay = SYT_getRunnianDays(nNewYear);
        if (nStartDays === nEomDays || (nStartDays >= nNewFebEomDay && nNewMon === 2)) {
            dNewEomDt = new Date(sNewYear, sNewMonth, 0);
            nNewDays = dNewEomDt.getDate();
        } else {
            nNewDays = nStartDays;
        }
        sNewDays = nNewDays.toString();
        if (sNewMonth.length === 1) {
            sNewMonth = "0" + sNewMonth;
        }
        if (sNewDays.length === 1) {
            sNewDays = "0" + sNewDays;
        }
        var sDtFmt = SYS_DATE_FORMAT.toLowerCase();
        var sSptChr = "";
        //get split character, support -, / and .
        if (sDtFmt.indexOf("-", 0) > -1) {
            sSptChr = "-";
        } else if (sDtFmt.indexOf("/", 0) > -1) {
            sSptChr = "/";
        } else if (sDtFmt.indexOf(".", 0) > -1) {
            sSptChr = ".";
        }
        sNewDate = sNewYear + sSptChr + sNewMonth + sSptChr + sNewDays;
       sNewDate= SYT_FormatDateToCurrent(sNewDate);
        return sNewDate;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_calDateByMonth", e);
    }
}

function SYT_getRunnianDays(nYear) {
    try {

        var nDays = 28;
        nYear = SYS_BeInt(nYear);

        if ((nYear % 4 === 0) && (nYear % 100 !== 0 || nYear % 400 === 0)) {
            nDays = 29;
        }

        return nDays;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getRunnianDays", e);
    }
}


function SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy) {
    try {
        if (collectCcy != null && foreignCustCcy != null && collectCcy != foreignCustCcy) {
            SYS_GetExchangeRate_S(collectCcy, foreignCustCcy, 'Booking Rate', document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE.name, '', '', '', '', '', '', 'true');
        } else {
            document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE.value = 1;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_calForeignColl2PayRate", e);
    }
}

function SYT_calLocalColl2PayRate(collectCcy, localCustCcy) {
    try {
        if (collectCcy != null && localCustCcy != null && collectCcy != localCustCcy) {
            SYS_GetExchangeRate_S(collectCcy, localCustCcy, 'Booking Rate', document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE.name, '', '', '', '', '', '', 'true');
        } else {
            document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE.value = 1;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_calLocalColl2PayRate", e);
    }
}

function SYT_calMT300MT320Tag22C(sCnptSwAdd, nRate) {
    try {
        /*
                                    SWIFT NETWORK VALIDATED RULES
                                    This field consists of the bank and location codes (Error code(s): T95) (from the ISO Bank Identifier Code) of
                                    both the Sender and the Receiver of the MT 320. These codes must appear in alphabetical order (letters take
                                    precedence over numbers) (Error code(s): T96).
                                    */
        nRate = SYS_BeFloat(nRate);
        if (sCnptSwAdd === "" || sCnptSwAdd === null) {
            return;
        }
        var sRate = nRate.toString();
        var sRtStr = sRate.replace(".", "");
        var nRtLen = sRtStr.length;
        var sRtStrOf22C = "";
        var sNewRtStr = "";
        var sZenoStr = "";
        var j = 0;
        var bChkNonZeroFlg = false;
        var nRateCount = 0;
        for (j = 0; j < nRtLen; j++) {
            var sChkWord = sRtStr.substring(nRtLen - (j + 1), nRtLen - j);
            if (!bChkNonZeroFlg && sChkWord !== "0") {
                bChkNonZeroFlg = true;
            }
            if (bChkNonZeroFlg && nRateCount < 4) {
                sNewRtStr = sChkWord + sNewRtStr;
                nRateCount++;
            }
        }
        nRtLen = sNewRtStr.length;
        var nJCount = 4 - nRtLen;
        for (j = 1; j <= nJCount; j++) {
            sZenoStr = "0" + sZenoStr;
        }
        sRtStrOf22C = sZenoStr + sNewRtStr;

        var sOurBkSwAdd = SYS_LOGIN_BIC;
        var sOurLocation = sOurBkSwAdd.substr(6, 2);
        var sSendLocation = sCnptSwAdd.substr(6, 2);
        var sOurBicOf22C = sOurBkSwAdd.substr(0, 4) + sOurLocation;
        var sSendBicOf22C = sCnptSwAdd.substr(0, 4) + sSendLocation;
        var i, sTag22CVal;
        var sOrderFlg = ""; //O:Our, C:Cnpt
        for (i = 0; i < 6; i++) {
            var sChkOurLoctn = sOurBicOf22C.substr(i, 1);
            var sChkSendLoctn = sSendBicOf22C.substr(i, 1);
            var nOurAscii = sChkOurLoctn.charCodeAt();
            var nSendAscii = sChkSendLoctn.charCodeAt();
            //N:Number; L:Letter; [0-9]Ascii:48-57; [A-Z]Ascii:65-90; [a-z]Ascii:97-122
            var sOurLoctnTp = "";
            var sSendLoctnTp = "";
            if (nOurAscii >= 48 && nOurAscii <= 57) {
                sOurLoctnTp = "N";
            } else {
                sOurLoctnTp = "L";
            }
            if (nSendAscii >= 48 && nSendAscii <= 57) {
                sSendLoctnTp = "N";
            } else {
                sSendLoctnTp = "L";
            }
            if (sOurLoctnTp === sSendLoctnTp) { //N VS N or L VS L
                if (nOurAscii < nSendAscii) {
                    sOrderFlg = "O";
                } else if (nOurAscii > nSendAscii) {
                    sOrderFlg = "C";
                }
            } else {
                if (sOurLoctnTp === "L" && sSendLoctnTp === "N") {
                    sOrderFlg = "O";
                } else {
                    sOrderFlg = "C";
                }
            }
            if (sOrderFlg !== "") {
                break;
            }
        }
        if (sOrderFlg === "O") {
            sTag22CVal = sOurBicOf22C + sRtStrOf22C + sSendBicOf22C;
        } else {
            sTag22CVal = sSendBicOf22C + sRtStrOf22C + sOurBicOf22C;
        }
        return sTag22CVal;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_calMT300MT320Tag22C", e);
    }
}

function SYT_checkErrorDescription() {
    try {
        var alertmsg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var strArr; // Utility Auto Fix Comments
        alertmsg = "";
        strArr = new Array();
        //to check for the error description in the response
        //alert("document.MAINFORM.INT_RESPONSE.value1"+document.MAINFORM.INT_RESPONSE.value);
        if (document.MAINFORM.INT_RESPONSE.value != "") {
            str = document.MAINFORM.INT_RESPONSE.value;
            strArr = str.split('.END.');
            for (i = 0; i < strArr.length; i++) {
                alertmsg = alertmsg + strArr[i] + "\n";
            }
            alert(alertmsg);
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_checkErrorDescription", e);
    }
}

function SYT_checkFactoringChildRecord(doName) {
    try {
        var num; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount(doName);

        if (num > 0) {
            return true;
        }
        alert('The transaction can not be confirmed without any record!');
        return false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_checkFactoringChildRecord", e);
    }
}

function SYT_chg_FldVal_UpCase(obj) {
    try {
        if (obj.value != "") {
            obj.value = obj.value.toUpperCase();
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_chg_FldVal_UpCase", e);
    }
}

function SYT_chkDate1MustBeLaterDate2ByDateVal(sDate1Val, sDate2Val, bShowError) {
    try {
        if (sDate1Val === null || sDate1Val === "") {
            return false;
        }
        if (sDate2Val === null || sDate2Val === "") {
            return false;
        }
        var nDays = SYT_getSubDaysByDateVal(sDate1Val, sDate2Val);
        var bRtnFlag = true;

        if (nDays <= 0) {
            if (bShowError) {
                alert("Warrning: Date 1 is not later than Date 2, Please chek!");
            }
            bRtnFlag = false;
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_chkDate1MustBeLaterDate2ByDateVal", e);
    }
}

function SYT_chkSwiftAckNakStatusByOrgTag20(sTag20, bIsShowMsg) {
    try {
        /*
    return SWIFT Status
    Status List:
    A: Ack
    N: Nak
    W: Wait the SWIFT Host feedback status
    R: SWIFT SuperV Reject
    X: Can not Find SWIFT Info of this deal no
    */

        if (sTag20 === "" || sTag20 === null || sTag20 === "undifined") {
            alert("[SYT_chkSwiftAckNakStatusByOrgTag20] method error: Please input parameter[sTag20] value!");
            return;
        }

        SYS_MULTI_DATA = "";
        var sWhereSql = "C_TAG_20 = '" + sTag20 + "' ORDER BY C_SYS_TRT_DATE DESC, C_SYS_TRT_TIME DESC";
        SYS_GetTableMultiDataToArray_S("TRX_SWIFT_TRT_LOG", sWhereSql, "C_APRV_STATE;C_TRT_STATE", true);
        var aAprvStatList = "";
        var aTrtStatList = "";
        var sFebackStat = "";
        var nLen = 0;
        if (SYS_MULTI_DATA !== "" && SYS_MULTI_DATA !== null) {
            aAprvStatList = SYS_MULTI_DATA[0][1].toString().split(",");
            aTrtStatList = SYS_MULTI_DATA[1][1].toString().split(",");
            nLen = aAprvStatList.length;
        }
        if (nLen > 0) {
            var sAprvStat = aAprvStatList[0];
            var sTrtStat = aTrtStatList[0];
            if (sTrtStat !== "R") {
                if (sAprvStat === "F" && sTrtStat === "A") {
                    sFebackStat = "A";
                }
                if (sAprvStat === "P" && sTrtStat === "N") {
                    sFebackStat = "N";
                }
                if (sAprvStat === "F" && sTrtStat === "Y") {
                    sFebackStat = "W";
                    SYS_highTrxButton("_cancel");
                }
            } else {
                sFebackStat = "R";
            }
        } else {
            sFebackStat = "X";
        }
        if (bIsShowMsg === true && sFebackStat !== "A" && sFebackStat !== "R") {
            var sSwiftMsg = "";
            if (sFebackStat === "N") {
                sSwiftMsg = "SWIFT Status is NAK， please Inquire SWIFT Message at first!";
            }
            if (sFebackStat === "W") {
                sSwiftMsg = "HOST still not reply SWIFT Status， please Check SWIFT Host at first!";
            }
            if (sFebackStat === "X") {
                sSwiftMsg = "System can not find Ref. No.:" + sTag20 + "，please Check it at first!";
            }
            if (sSwiftMsg !== "") {
                alert(sSwiftMsg);
            }
        }
        return sFebackStat;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_chkSwiftAckNakStatusByOrgTag20", e);
    }
}

function SYT_chkUserInputStringIsAllSpace(sFldVal) {
    try {
        var sFldTrimVal = sFldVal.replace(/(^\s*)|(\s*$)/g, "");
        var bRtnFlag = false;

        if (sFldTrimVal === "" || sFldTrimVal === null) {
            bRtnFlag = true;
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_chkUserInputStringIsAllSpace", e);
    }
}

function SYT_chkValDt_Rel() {
    try {
        var cntyCode; // Utility Auto Fix Comments
        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        cntyCode = SYS_BANK_COUNTRY;
        sValDt = document.MAINFORM.X103_VALUE_DT_32A.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past.This transaction cannot be released");
                return false;
            }
            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_LocalHoliday', 'SYM_PYMT_Fail_LocalHoliday');
            }
        }
        //SYF_PYMT_getCutOffDetails();
        SYM_PYMT_Get_CutOff();
        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
        reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
        dSpotDt = SYT_GetDateObjectFromStr(reqDate);
        if (dValDt > dSpotDt) {
            alert("The Value Date cannot be more than Spot");
            EEHtml.getElementById("A").click();
            document.MAINFORM.X103_VALUE_DT_32A.focus();
            return false;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_chkValDt_Rel", e);
    }
}

function SYT_cleanAllFieldValuOfDiv(sDivId, sExceptFdNmList) {
    try {
        var oDiv = document.getElementById(sDivId);
        var oDiv_input = oDiv.getElementsByTagName("input");
        var oDiv_select = oDiv.getElementsByTagName("select");
        var oDiv_textarea = oDiv.getElementsByTagName("textarea");
        var bChkFlag = false;
        var i, s, t, b;
        if (sExceptFdNmList !== "" && sExceptFdNmList !== null) {
            bChkFlag = true;
        }
        //Input Type Field Have All Class: CHAR,AMT,INT,FLOAT,RATE,DATE,TIME
        for (i = 0; i < oDiv_input.length; i++) {
            if (oDiv_input[i].type === "button") {
                continue;
            }
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_input[i].name) > -1) {
                    continue;
                }
                SYT_setFieldValue(oDiv_input[i].name, "");
            } else {
                SYT_setFieldValue(oDiv_input[i].name, "");
            }
        }
        //Select Type Field Only CHAR_
        for (s = 0; s < oDiv_select.length; s++) {
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_select[s].name) > -1) {
                    continue;
                }
                oDiv_select[s].value = "";
            } else {
                oDiv_select[s].value = "";
            }
        }
        //Textarea Type Field Only CHAR_
        for (t = 0; t < oDiv_textarea.length; t++) {
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_textarea[t].name) > -1) {
                    continue;
                }
                oDiv_textarea[t].value = "";
            } else {
                oDiv_textarea[t].value = "";
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_cleanAllFieldValuOfDiv", e);
    }
}

function SYT_cleanSelectFieldAllOption(sFldNm) {
    try {
        var oSelectList = document.getElementById(sFldNm);
        oSelectList.options.length = 0;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_cleanSelectFieldAllOption", e);
    }
}

function SYT_convDateStrToObj(sStrDtVal) {
    try {
        if (sStrDtVal.length === 0) {
            return false;
        }
        var sDtFmt = SYS_DATE_FORMAT.toLowerCase();
        var sSptChr = "";
        //get split character, support -, / and .
        if (sDtFmt.indexOf("-", 0) > -1) {
            sSptChr = "-";
        } else if (sDtFmt.indexOf("/", 0) > -1) {
            sSptChr = "/";
        } else if (sDtFmt.indexOf(".", 0) > -1) {
            sSptChr = ".";
        }
        //get index for year, month and day
        var aDtFmt = sDtFmt.split(sSptChr);
        var i, nidxY, nidxM, nidxD;
        for (i = 0; i < aDtFmt.length; i++) {
            if (aDtFmt[i].indexOf("y", 0) > -1) {
                nidxY = i;
            } else if (aDtFmt[i].indexOf("m", 0) > -1) {
                nidxM = i;
            } else if (aDtFmt[i].indexOf("d", 0) > -1) {
                nidxD = i;
            }
        }
        //parse date string
        var aDtStr = sStrDtVal.split(sSptChr);
        var sY = String(aDtStr[nidxY]);
        var sM = String(aDtStr[nidxM]);
        var sD = String(aDtStr[nidxD]);
        if (sM.substr(0, 1) === "0") {
            sM = sM.substr(1, 1);
        }
        if (sD.substr(0, 1) === "0") {
            sD = sD.substr(1, 1);
        }
        var nY = SYS_BeInt(sY);
        var nM = SYS_BeInt(sM) - 1;
        var nD = SYS_BeInt(sD);
        if (String(nY).length < 2) {
            nY = 2000 + nY;
        }
        var objDt = new Date(nY, nM, nD, 0, 0, 0, 0);
        return objDt;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_convDateStrToObj", e);
    }
}

function SYT_create2DArray(nFristLevelCount, nSecLevelCount) {
    try {
        var arrTwoDim = [];
        var x;

        arrTwoDim.length = nFristLevelCount;

        for (x = 0; x < nFristLevelCount; x++) {
            arrTwoDim[x] = [];
            arrTwoDim[x].length = nSecLevelCount;
        }
        return arrTwoDim;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_create2DArray", e);
    }
}

function SYT_disableAllFields() {
    try {
        var nEleLeng; // Utility Auto Fix Comments
        var oEle; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        oEle = document.MAINFORM.elements;
        nEleLeng = oEle.length;
        for (j = 0; j < nEleLeng; j++) {
            oField = oEle[j];
            SYT_disableField(oField);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_disableAllFields", e);
    }
}

function SYT_disableField(Field, nClsFlag) {
    try {
        var arrClass; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sClass; // Utility Auto Fix Comments
        var sDataType; // Utility Auto Fix Comments
        var sFldNm; // Utility Auto Fix Comments
        var typeName; // Utility Auto Fix Comments
        oField = "";
        sFldNm = "";

        if (typeof Field == "string") {
            oField = EEHtml.getElementById(Field);
            sFldNm = Field;
        } else if (typeof Field == "object") {
            oField = Field;
            sFldNm = oField.id;
        }

        if (!oField) {
            return;
        }

        sClass = oField.className;
        arrClass = sClass.split("_");
        sDataType = arrClass[0];
        sClass = sClass.substr(0, (sClass.length - 1)) + 'P';
        oField.className = sClass;

        if (nClsFlag == undefined) {
            nClsFlag = 0;
        }
        nClsFlag = SYS_BeInt(nClsFlag);

        if (nClsFlag == 1) {
            SYT_setFldValue(sFldNm, "");

        }

        typeName = oField.type;
        if (typeName == "select-one" || typeName == "button" ||
            typeName == "checkbox" || typeName == "radio") {
            oField.disabled = true;
        } else {
            oField.readOnly = true;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_disableField", e);
    }
}

function SYT_doCalendar(oField) {
    try {
        var sClass; // Utility Auto Fix Comments
        sClass = oField.className.substr(oField.className.length - 1, 1);
        if (sClass == "O" || sClass == "M") {
            calendar(oField);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_doCalendar", e);
    }
}

function SYT_enableField(Field, sStatus) {
    try {
        var arrClass; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sClass; // Utility Auto Fix Comments
        var sDataType; // Utility Auto Fix Comments
        oField = "";

        if (typeof Field == "string") {
            oField = EEHtml.getElementById(Field);
            sFldNm = Field;
        } else if (typeof Field == "object") {
            oField = Field;
            sFldNm = oField.id;
        }

        if (!oField) {
            return;
        }

        sClass = oField.className;
        arrClass = sClass.split("_");
        sDataType = arrClass[0];
        sClass = sClass.substr(0, (sClass.length - 1)) + sStatus;
        oField.className = sClass;

        if (SYS_FUNCTION_TYPE != "IQ" && SYS_FUNCTION_TYPE != "RE") {
            oField.removeAttribute('disabled');
            oField.removeAttribute('readOnly');
        }



        if (sDataType == "AMT") {
            CovAmtToStr(sFldNm);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_enableField", e);
    }
}

function SYT_failure() {
    try {
        document.MAINFORM.SUSP_AC.value = "";
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_failure", e);
    }
}

function SYT_genIndexRef() {
    try {
        sJavascriptUUID = "";
        SYS_GetUUID_S("sJavascriptUUID", "");
        return sJavascriptUUID;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genIndexRef", e);
    }
}

function SYT_genSelectFieldOptionFromBrokerIDData(sFldNm) {
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetBrokerDataByAll_TRX", "C_MAIN_REF");
        var aBrkValList = SYS_GetMultiFldValueFromArray("BROKER_ID");
        var nLen = aBrkValList.length;
        if (nLen > 0) {
            var aBrokerIdVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aBrokerIdVal[0][i] = aBrkValList[i];
                aBrokerIdVal[1][i] = aBrkValList[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aBrokerIdVal, sFldNm);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genSelectFieldOptionFromBrokerIDData", e);
    }
}

function SYT_genSelectFieldOptionFromProductCodeData(sFldNm) {
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetProductDataByAll_TRX", "C_MAIN_REF");
        var aPrdCdValList = SYS_GetMultiFldValueFromArray("C_PRODUCT_CODE");
        var aPrdDesValList = SYS_GetMultiFldValueFromArray("C_PRODUCT_DESC");
        var nLen = aPrdCdValList.length;
        if (nLen > 0) {
            var aTeamIdVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aTeamIdVal[0][i] = aPrdCdValList[i];
                aTeamIdVal[1][i] = aPrdDesValList[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aTeamIdVal, sFldNm);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genSelectFieldOptionFromProductCodeData", e);
    }
}

function SYT_genSelectFldOptionFmCommonModule(sTrxFdNm) {
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetItemFldDataByKeyFldNm_TRX", "ITEM_FLD_NM");
        var aFdValList = SYS_GetMultiFldValueFromArray("FLD_VAL");
        var aItemLabList = SYS_GetMultiFldValueFromArray("ITEM_LABEL");
        var nSize = 0;
        var oSelectList = document.getElementById(sTrxFdNm);
        nSize = aFdValList.length;
        oSelectList.options.length = 0;
        var i;
        for (i = 0; i < nSize; i++) {
            var oItem = new Option(aItemLabList[i], aFdValList[i]);
            oSelectList.options.add(oItem);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genSelectFldOptionFmCommonModule", e);
    }
}

function SYT_genSelectFldOptionFmFreeArray(aFree2D, sTrxFldNm) {
    try {
        if (aFree2D === "" || aFree2D === null) {
            return;
        }
        var aFldValRs = [];
        var aItemLabRs = [];
        var nSize1 = aFree2D[0].length;
        var j;
        for (j = 0; j < nSize1; j++) {
            aFldValRs[j] = aFree2D[0][j];
            aItemLabRs[j] = aFree2D[1][j];
        }
        var oSelectList = document.getElementById(sTrxFldNm);
        var nSize2 = aFldValRs.length;
        oSelectList.options.length = 0;
        var i;
        for (i = 0; i < nSize2; i++) {
            var oItem;
            /*
            if(i === 0){
                oItem = new Option("","");
                oSelectList.options.add(oItem);        
            }
            oItem = "";
            */
            oItem = new Option(aItemLabRs[i], aFldValRs[i]);
            oSelectList.options.add(oItem);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genSelectFldOptionFmFreeArray", e);
    }
}

function SYT_genSelectFldOtpFmDropBoxValueOnly(sTrxFdNm) {
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetItemFldDataByKeyFldNm_TRX", "ITEM_FLD_NM");
        var aFdValList = SYS_GetMultiFldValueFromArray("FLD_VAL");
        var nSize = 0;
        var oSelectList = document.getElementById(sTrxFdNm);
        nSize = aFdValList.length;
        oSelectList.options.length = 0;
        var i;
        for (i = 0; i < nSize; i++) {
            var oItem = new Option(aFdValList[i], aFdValList[i]);
            oSelectList.options.add(oItem);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genSelectFldOtpFmDropBoxValueOnly", e);
    }
}

function SYT_genSerialNo(sTargetDoNm) {
    try {
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nDoCount = oDoAllRecs.length;
        var i = 0;
        var nMaxSerialNo = 0;
        var sFinalSerialNo = "";
        for (i = 0; i < oDoAllRecs.length; i++) {
            var oDoRec = oDoAllRecs[i];
            var nDOSerialNo = SYS_BeInt(SYS_getValFromRec(oDoRec, "SERIAL_NO"));
            if (nDOSerialNo > nMaxSerialNo) {
                nMaxSerialNo = nDOSerialNo;
            }
        }
        nMaxSerialNo = nMaxSerialNo + 1;
        sFinalSerialNo = nMaxSerialNo.toString();
        return sFinalSerialNo;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genSerialNo", e);
    }
}

function SYT_genTsuSeqNum() {
    try {
        var elements = Ext.query("input[eetype=DO]");
        var element;
        var doName;
        var oDO;



        var getXPathByDONode = function(node) {
            var doName;
            var names = [];
            var parentNode;
            parentNode = node;
            while (parentNode != null) {
                if (parentNode.attributes["nodetype"] == "D") {
                    parentNode = parentNode.parentNode;
                    continue;
                }
                if (parentNode.attributes["name"] == null) {
                    parentNode = parentNode.parentNode;
                    continue;
                }
                names.push(parentNode.attributes["name"]);
                parentNode = parentNode.parentNode;
            }
            names.reverse();
            return names.join(".");
        }

        var genDOTsuSeqNum = function(node) {
            var records;
            var record;
            var childNode;
            var doName;
            var xpath;

            var maxSeqNum = 0;
            var iTsuSeqNum = -1;

            xpath = getXPathByDONode(node);
            if (node.attributes["nodetype"] != "D") {
                records = parent.SYS_getRecords(node);
                for (var i = 0, l = records.length; i < l; i++) {
                    record = records[i];
                    if (record["TSU_SEQ_NUM"] == null || record["TSU_SEQ_NUM"] == "") continue;
                    iTsuSeqNum = SYS_BeInt(record["TSU_SEQ_NUM"]);
                    if (iTsuSeqNum > maxSeqNum) {
                        maxSeqNum = iTsuSeqNum;
                    }
                }
                for (var i = 0, l = records.length; i < l; i++) {
                    record = records[i];
                    if ("A".indexOf(record["recordType"]) > -1 && (record["TSU_SEQ_NUM"] == null || record["TSU_SEQ_NUM"] == "")) {
                        parent.SYS_setFieldValue(node, record["recordID"], "TSU_SEQ_NUM", ++maxSeqNum);
                    }
                }
            }

            for (var i = 0, l = node.childNodes.length; i < l; i++) {
                childNode = node.childNodes[i];
                genDOTsuSeqNum(childNode);
            }
        }

        for (var i = 0, l = elements.length; i < l; i++) {
            element = elements[i];
            doName = element.name;
            oDO = parent.SYS_getNodeByXpath(doName);
            genDOTsuSeqNum(oDO, doName);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genTsuSeqNum", e);
    }
}

function SYT_genUETR() {
    try {
        //Standards MT Release 2018 Impact on Messaging Interfaces: mandatory presence of field 121 Unique end-to-end transaction reference (UETR)

        var sTag121 = "";
        sTag121 = SYS_GenTag121();
        return sTag121;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_genUETR", e);
    }
}

function SYT_getBICFromRef(ref, trgtFld) {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var refVal; // Utility Auto Fix Comments
        var tgtFldName; // Utility Auto Fix Comments
        var tgtFldVal; // Utility Auto Fix Comments
        refVal = ref.value;
        refValCUBK = refVal;
        trgtFldCUBK = trgtFld;
        tgtFldName = "document.MAINFORM." + trgtFldCUBK;
        tgtFldVal = tgtFldName.value;
        if (tgtFldVal == null) {
            //Sql_Cond1 = "C_MAIN_REF=" + "'" + refValCUBK + "'" + " AND " + "ROUT_TYPE=" + "'BIC' ORDER BY ROUT_CODE DESC";
            //Field_List = "ROUT_CODE";
            //Mapping_List = trgtFldCUBK;
            SYS_GetTableDataByRule_S('TrxSys_SYT_getBICFromRef_10', '1', 'T');
            if (eval("trgtFldCUBK") == '') {
                alert("There is no Swift Address linked with the Bank."); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getBICFromRef", e);
    }
}

function SYT_getCountryCodeFromCurrency(sCcy) {
    try {
        var sCntyCode = "";
        var i;
        for (i = 0; i < SYS_CURRENCY.length; i++) {
            if (sCcy === SYS_CURRENCY[i][0]) {
                sCntyCode = SYS_CURRENCY[i][2];
            }
        }
        return sCntyCode;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getCountryCodeFromCurrency", e);
    }
}

function SYT_getCountryCodeFromSwiftBIC(sBICFldValue, sCntyCodeFldNm) {
    try {
        var sCntyCode = "";
        if (sBICFldValue !== "" && sBICFldValue !== null) {
            sCntyCode = sBICFldValue.substr(4, 2);
        }
        document.getElementById(sCntyCodeFldNm).value = sCntyCode;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getCountryCodeFromSwiftBIC", e);
    }
}

function SYT_getCountryName(sCntyCdVal, sCntyNmFldNm) {
    try {
        if (sCntyCdVal !== null && sCntyCdVal !== "" && sCntyNmFldNm !== null && sCntyNmFldNm !== "") {
            var sSQLWhere = "C_CNTY_CODE = '" + sCntyCdVal + "'";
            var sTableName = "SEC_COUNTRY";
            var sFieldList = "C_CNTY_NAME";
            var sMappingList = sCntyNmFldNm;
            SYS_GetTableData_S(sTableName, sSQLWhere, sFieldList, sMappingList, true);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getCountryName", e);
    }
}

function SYT_getDOY(thisDate) {
    try {
        var onejan; // Utility Auto Fix Comments
        var retDate; // Utility Auto Fix Comments
        onejan = new Date(thisDate.getFullYear(), 0, 0);
        //return Math.ceil((thisDate - onejan) / 86400000);
        retDate = Math.ceil((thisDate - onejan) / 86400000); // Utility Auto Fix Comments
        if (retDate.toString().length == 1) {
            retDate = '00' + retDate;
        } else if (retDate.toString().length == 2) {
            retDate = '0' + retDate;
        }
        return retDate;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getDOY", e);
    }
}

function SYT_getDateByFieldval(sFieldVal) {
    try {
        if (sFieldVal === null || sFieldVal === "") {
            return null;
        }
        var sDtVal = sFieldVal;
        if (SYS_DATE_FORMAT !== "yyyy-MM-dd") {
            sDtVal = getDate(SYS_DATE_FORMAT, sDtVal);
        }
        var nLen = sDtVal.length;
        var ss;
        var ii1 = sDtVal.indexOf("-", 0);
        var ii2;
        var yy, mm, dd;
        var sD;
        if (ii1 > 0) {
            yy = SYS_BeInt(sDtVal.substr(0, ii1));
            ii2 = sDtVal.indexOf("-", ii1 + 1);
            if (ii1 < 4) {
                yy += 2000;
            }
            ss = sDtVal.substr(ii1 + 1, 2);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            mm = SYS_BeInt(ss) - 1;
            ss = sDtVal.substr(ii2 + 1);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            dd = SYS_BeInt(ss);
        } else if (nLen === 6) {
            ss = sDtVal.substr(0, 2);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            yy = SYS_BeInt(ss);
            ss = sDtVal.substr(2, 2);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            mm = SYS_BeInt(ss) - 1;
            ss = sDtVal.substr(4, 2);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            dd = SYS_BeInt(ss);
            yy += 2000;
        } else if (nLen === 8) {
            yy = SYS_BeInt(sDtVal.substr(0, 4));
            ss = sDtVal.substr(4, 2);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            mm = SYS_BeInt(ss) - 1;
            ss = sDtVal.substr(6, 2);
            if (ss.substr(0, 1) === "0") {
                ss = ss.substr(1, 1);
            }
            dd = SYS_BeInt(ss);
        } else {
            return null;
        }
        var retDate = new Date(yy, mm, dd, 0, 0, 0, 0);
        return retDate;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getDateByFieldval", e);
    }
}

function SYT_getDateByPeriod(sStartDtVal, nPrdNum, sPrdTp) {
    try {
        if (sStartDtVal === "" || sStartDtVal === null || sPrdTp === "" || sPrdTp === null) {
            return;
        }
        var sRtDtVal = "";
        nPrdNum = SYS_BeInt(nPrdNum);
        if (sPrdTp === "D") {
            sRtDtVal = SYT_calDateByDays(sStartDtVal, nPrdNum);
        }
        if (sPrdTp === "W") {
            var nWeekDays = nPrdNum * 7;
            sRtDtVal = SYT_calDateByDays(sStartDtVal, nWeekDays);
        }
        if (sPrdTp === "M") {
            sRtDtVal = SYT_calDateByMonth(sStartDtVal, nPrdNum);
        }
        return sRtDtVal;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getDateByPeriod", e);
    }
}

function SYT_getExchangeRateSB(oFromCCY, oToCCY, sRateType, oAmt1, oAmt2, oRate) {
    try {
        var sRateTypeL; // Utility Auto Fix Comments
        oRate.value = "";
        sRateTypeL = sRateType.split(";");
        document.MAINFORM.MD_I.value = "";
        if (oFromCCY.value == oToCCY.value) {
            oAmt2.value = oAmt1.value;
            oRate.value = 1;
        } else {
            SYS_GetExchangeRate_S(oFromCCY.value, oToCCY.value, sRateTypeL[0], oRate.name, '', document.MAINFORM.MD_I.name, '', '', '', '6');

            if (document.MAINFORM.MD_I.value == 'M') {
                oAmt2.value = SYT_AmtFormat(oToCCY.value, SYS_BeFloat(oAmt1.value) * SYS_BeFloat(oRate.value));
            } else if (document.MAINFORM.MD_I.value == 'D') {
                oAmt2.value = SYT_AmtFormat(oToCCY.value, SYS_BeFloat(oAmt1.value) / SYS_BeFloat(oRate.value));
            } else {
                oAmt2.value = SYT_AmtFormat(oToCCY.value, SYS_BeFloat(0.00));
            }
            if (oRate.value != "") {
                oRate.value = SYS_BeFloat(oRate.value);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getExchangeRateSB", e);
    }
}

function SYT_getExchangeRate_Settl(oFromCCY, oToCCY, sRateType, oAmt1, oAmt2, oRate, oMdInd, oCovNo) {
    try {
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        var sRateTypeL; // Utility Auto Fix Comments
        var vCurency1; // Utility Auto Fix Comments
        var vCurency2; // Utility Auto Fix Comments
        var vMDFlag; // Utility Auto Fix Comments
        var vCurency1CUBK; //Added
        var oMdIndCUBK; //Added
        oMdInd.value = ""; // Utility Auto Fix Comments
        vMDFlag = "";
        sRateTypeL = sRateType.split(";");
        SYT_getExchangeRateSB(oFromCCY, oToCCY, sRateType, oAmt1, oAmt2, oRate);
        if (oRate.value == "") {
            oMdInd.value = "";
            vCurency1 = oFromCCY.value + oToCCY.value;
            vCurency1CUBK = vCurency1;
            //Sql_Cond1 = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_C= '008'" + "AND " + "ITEM_NAME=" + "'" + vCurency1 + "'";
            //Field_List1 = "FIELD_1_X";
            //Mapping_List1 = oMdInd.name;

            SYS_GetTableDataByRule_S('TrxSys_SYT_getExchangeRate_Settl_25', '1', 'false');
            document.all(oMdInd.name).value = oMdIndCUBK;
            if (oMdInd.value == "" || oMdInd.value == null) {
                vCurency2 = oToCCY.value + oFromCCY.value;
                vCurency2CUBK = vCurency2;
                //Sql_Cond2 = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_C= '008'" + "AND " + "ITEM_NAME=" + "'" + vCurency2 + "'";
                //Field_List2 = "FIELD_1_X";
                //Mapping_List2 = oMdInd.name;
                SYS_GetTableDataByRule_S('TrxSys_SYT_getExchangeRate_Settl_26', '1', 'false');
                document.all(oMdInd.name).value = oMdIndCUBK;
                if (oMdInd.value == 'M') {
                    oMdInd.value = 'D';
                } else if (oMdInd.value == 'D') {
                    oMdInd.value = 'M';
                }
            }
            if (oMdInd.value == "" || oMdInd.value == null) {
                //alert("Exchange Rate for "+oFromCCY.value+" to "+oToCCY.value+" not loaded. Transaction cannot be processed.")
                alert("MD Flag not loaded.Please contact Technical Support ."); // Utility Auto Fix Comments
                oCovNo.value = "";
                oRate.value = "";
                SYT_ChangeFldClass(oCovNo, "M");
                SYT_ChangeFldClass(oRate, "P");
            } else {
                SYT_ChangeFldClass(oCovNo, "M");
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getExchangeRate_Settl", e);
    }
}

function SYT_getFldDataType(sFldNm) {
    try {
        var arrClassName; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sClassName; // Utility Auto Fix Comments
        var sDataType; // Utility Auto Fix Comments
        sDataType = "";

        if (sFldNm.length == 0) {
            return sDataType;
        }

        oField = EEHtml.getElementById(sFldNm);

        if (!oField) {
            return false;
        }

        if (oField.className) {
            sClassName = oField.className;
            arrClassName = oField.className.split("_");
            sDataType = String(arrClassName[0]);
        }

        return sDataType;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getFldDataType", e);
    }
}

function SYT_getFldObjType(sFldNm) {
    try {
        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById(sFldNm);
        return obj.type;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getFldObjType", e);
    }
}

function SYT_getFldValue(sFldNm, sPageType) {
    try {
        var FldValue; // Utility Auto Fix Comments
        var arrClassName; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sClassName; // Utility Auto Fix Comments
        var sDataType; // Utility Auto Fix Comments
        var sFldObjType; // Utility Auto Fix Comments
        FldValue = "";

        if (sFldNm.length == 0) {
            return FldValue;
        }

        if (sPageType != undefined) {
            if (sPageType == "O2M") {
                oField = opener.EEHtml.getElementById(sFldNm);
            } else if (sPageType == "tree") {
                //The (operner != undefined) is for popup window, i.e. record details;
                //another is for dispaly details in iframe.
                if (opener != undefined) {
                    oField = opener.parent.EEHtml.getElementById(sFldNm);
                } else {
                    oField = parent.EEHtml.getElementById(sFldNm);
                }
            }
        } else {
            oField = EEHtml.getElementById(sFldNm);
        }
        if (!oField) {
            return;
        }

        sFldObjType = SYT_getFldObjType(sFldNm);

        if (sFldObjType !== "radio") {
            sClassName = oField.className;
            arrClassName = oField.className.split("_");
            sDataType = arrClassName[0];
            FldValue = oField.value;

            if (sDataType == "AMT" || sDataType == "FLOAT") {
                FldValue = SYS_BeFloat(FldValue);
            } else if (sDataType == "INT") {
                FldValue = BeInt(FldValue);
            } else if (sDataType == "DATE") {
                if (FldValue.length == 0 || FldValue == false) {
                    FldValue = "";
                } else if (ChkDate(sFldNm)) {
                    FldValue = SYT_ConvDtStrToObj(FldValue);
                } else {
                    FldValue = "";
                }
            } else if (sDataType == "CHAR") {
                if (FldValue == "undefined") {
                    FldValue = "";
                }
            }
        } else {
            FldValue = SYT_getRadioBtnValue(sFldNm);
        }

        return FldValue;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getFldValue", e);
    }
}

function SYT_getIdFromBIC(oBIC, oBank_id) {
    try {
        var Sql_Cond1 = "ROUT_CODE=" + "'" + oBIC.value + "'";
        var Field_List = "C_MAIN_REF";
        var Mapping_List = oBank_id.name;
        SYS_GetTableData_S('EXIMTRX.BANK_ROUTCODES', Sql_Cond1, Field_List, Mapping_List, true); //Added	
        if (oBIC.value.trim().length > 0) {
            if (oBank_id.value == '') {
                alert("The SWIFT Address is invalid");
                oBIC.value = "";
                return false;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getIdFromBIC", e);
    }
}

function SYT_getInterestBaseRate(instFinCode, cntyCode, ccy, termDays, rateTypeCode, rateDate, sSucJsFuncName, sFailJsFuncName) {
    try {
        var url; // Utility Auto Fix Comments
        if (rateDate == null || typeof rateDate == 'undefined') {
            rateDate = "";
        }
        url = "../servlets/WSTrxManager?_TRX_STATUS=SCF_CS&_CS_ACT_TYPE=SCF_RATE&CCY=" + ccy + "&CNTY_CODE=" + cntyCode + "&RATE_TYPE_CODE=" + rateTypeCode;
        url += "&RATE_DATE=" + rateDate + "&INST_FIN_CD=" + instFinCode + "&TERM_DAYS=" + termDays;
        sendRequestByAjaxPost(url, false, SYT_ParseRateValue, sSucJsFuncName, sFailJsFuncName);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getInterestBaseRate", e);
    }
}

function SYT_getProductCodeByModuleShortName(sModuleStNmVal) {
    try {
        SYS_MULTI_DATA = "";
        var sTableNm = "STD_PRODUCT";
        var sWhereSql = "C_PRODUCT_SHORTNAME = '" + sModuleStNmVal + "' ORDER BY C_PRODUCT_CODE ASC";
        var sGetFdList = "C_PRODUCT_CODE";
        SYS_GetTableMultiDataToArray_S(sTableNm, sWhereSql, sGetFdList, true);
        if (SYS_MULTI_DATA === "" || SYS_MULTI_DATA === null) {
            return null;
        }
        var nLen = SYS_MULTI_DATA[0].length;
        var aProdCode = "";
        if (nLen > 0) {
            aProdCode = SYS_MULTI_DATA[0][1].toString().split(",");
            return aProdCode[0];
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getProductCodeByModuleShortName", e);
    }
}

function SYT_getRows(sLine, cols) {
    try {
        var arr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var isFlag; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var preCh; // Utility Auto Fix Comments
        var retRow; // Utility Auto Fix Comments
        var sRow; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        arr = new Array();
        isFlag = false;
        len = sLine.length;
        preCh = "";
        temp = "";
        isFlag = (sLine.charAt(0) == " " ? true : false);
        for (i = 0; i < len; i++) {
            ch = sLine.charAt(i);
            if (preCh == " " && ch != " ") {
                if (isFlag) {
                    isFlag = false;
                    temp += ch;
                } else {
                    arr[arr.length] = temp;
                    temp = ch;
                }
            } else {
                temp += ch;
            }
            preCh = ch;
        }
        arr[arr.length] = temp;
        len = arr.length;
        retRow = 0;
        sRow = "";
        for (i = 0; i < arr.length; i++) {
            str = arr[i];
            if (sRow.length + str.length > cols) {
                sRow = str;

                if (i == 0) {
                    retRow++;
                }
                while (true) {
                    if (sRow.length >= cols) {
                        sRow = sRow.substring(cols, sRow.length);
                        retRow++;
                    } else {
                        break;
                    }
                }
            } else {
                sRow += str;
            }
        }
        if (sRow.length > 0) {
            retRow++;
        }


        return retRow;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getRows", e);
    }
}

function SYT_getSWADDFromRef(ref, trgtFld) {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var refVal; // Utility Auto Fix Comments
        if (ref.value != "") {
            document.MAINFORM.elements[trgtFld].value = "";
            refVal = ref.value;
            refValCUBK = refVal;
            //Sql_Cond = "C_MAIN_REF=" + "'" + refValCUBK + "'" + " AND " + "ROUT_TYPE=" + "'SWIFT' ORDER BY ROUT_CODE DESC";
            //Field_List = "ROUT_CODE";
            SYS_GetTableDataByRule_S('TrxSys_SYT_getSWADDFromRef_12', '1', 'TRUE');
            document.all(trgtFld).value = trgtFldCUBK;
            if (eval("document.MAINFORM." + trgtFld + ".value") == '') {
                SYT_getBICFromRef(ref, trgtFld);
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getSWADDFromRef", e);
    }
}

function SYT_getSubDaysByDateVal(sDate1Val, sDate2Val) {
    try {
        var dFirstDay = SYT_getDateByFieldval(sDate1Val);
        var dSecondDay = SYT_getDateByFieldval(sDate2Val);
        var nDays, nDaysVal;
        if (dFirstDay === null || dFirstDay === "" || dSecondDay === null || dSecondDay === "") {
            nDaysVal = 0;
        } else {
            nDays = (dFirstDay - dSecondDay) / (24 * 60 * 60 * 1000);
            var intDays = SYS_BeInt(nDays);
            var floatDays = SYS_BeFloat(nDays);
            if (floatDays - intDays >= 0.5) {
                nDaysVal = intDays + 1;
            } else {
                nDaysVal = intDays;
            }
        }
        return nDaysVal;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_getSubDaysByDateVal", e);
    }
}

function SYT_hideObj(sObjNm) {
    try {
        if (EEHtml.getElementById(sObjNm)) {
            EEHtml.getElementById(sObjNm).style.visibility = "hidden";
            EEHtml.getElementById(sObjNm).style.display = "none";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_hideObj", e);
    }
}

function SYT_inList() {
    try {
        var aarray; // Utility Auto Fix Comments
        var aelm; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        var z; // Utility Auto Fix Comments
        var zz; // Utility Auto Fix Comments
        z = aelm.value.toUpperCase();
        zz = "-" + z + "-";
        x = "-" + aarray + "-";
        if (x.indexOf(zz) == -1) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_inList", e);
    }
}

function SYT_loadExchRate() {
    try {
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'INQU' && SYS_FUNCTION_TYPE != 'IQ') {
            allExchRateArr = SYS_GetMultiData_Boc('STD_EXCHAN_RATE', "C_RATE_STATE='U'", 'C_FROM_CCY,C_DESC_ID,F_VALUE');
            return allExchRateArr;
            //alert(allExchRateArr);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_loadExchRate", e);
    }
}

function SYT_parseCIMValidateResponse(xmlhttp) {
    try {
        var result; // Utility Auto Fix Comments
        var retRes; // Utility Auto Fix Comments
        var rootElems; // Utility Auto Fix Comments
        var xml; // Utility Auto Fix Comments
        xml = xmlhttp.responseXML;
        rootElems = xml.getElementsByTagName("root")[0];
        result = "F";
        if (rootElems != null) {
            result = rootElems.getAttribute("result");
        }
        retRes = false;
        if (result == "T") {
            retRes = true;
        }
        window["_CIMVailResult"] = retRes;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_parseCIMValidateResponse", e);
    }
}

function SYT_protectSelectFld(fldID) {
    try {
        var objFld; // Utility Auto Fix Comments
        objFld = EEHtml.getElementById(fldID);
        objFld.className = 'CHAR_P';
        objFld.disabled = true;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_protectSelectFld", e);
    }
}

function SYT_relAuthBlack() {
    try {
        if (SYS_FUNCTION_TYPE == 'RE') {
            if (document.MAINFORM.AUTH_BLACK.value == 1) {
                alert("In Black List");
            }


        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_relAuthBlack", e);
    }
}

function SYT_restrictRelease() {
    try {
        var mainFrame; // Utility Auto Fix Comments
        mainFrame = window.parent.openForm;
        mainFrame.IsAgreeGroup[0].checked = false;
        mainFrame.IsAgreeGroup[0].disabled = true;
        mainFrame.IsAgreeGroup[1].checked = true;
        mainFrame.C_REFUSE_REASON.readOnly = false;
        mainFrame.C_REFUSE_REASON.disabled = false;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_restrictRelease", e);
    }
}

function SYT_setDOGridButtonDisable(sDoNm, sButtonTp) {
    try {
        sButtonTp = sButtonTp.toUpperCase();
        switch (sButtonTp) {
            case "A":
                SYS_disableButton(sDoNm, "addbutton");
                break;
            case "E":
                SYS_disableButton(sDoNm, "editbutton");
                break;
            case "D":
                SYS_disableButton(sDoNm, "deletebutton");
                break;
            case "V":
                SYS_disableButton(sDoNm, "viewbutton");
                break;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setDOGridButtonDisable", e);
    }
}

function SYT_setDOGridButtonEnable(sDoNm, sButtonTp) {
    try {
        sButtonTp = sButtonTp.toUpperCase();
        switch (sButtonTp) {
            case "A":
                SYS_enableButton(sDoNm, "addbutton");
                break;
            case "E":
                SYS_enableButton(sDoNm, "editbutton");
                break;
            case "D":
                SYS_enableButton(sDoNm, "deletebutton");
                break;
            case "V":
                SYS_enableButton(sDoNm, "viewbutton");
                break;
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setDOGridButtonEnable", e);
    }
}

function SYT_setDecimalFormat(nAmtVal, nDeciNum) {
    try {
        var strAmtInteger = "";
        var strAmtDecimanl = "";
        if (SYS_AMT_INT_FORMAT === null) {
            strAmtInteger = ",";
        } else {
            strAmtInteger = SYS_AMT_INT_FORMAT;
        }
        if (SYS_AMT_DEC_FORMAT === null) {
            strAmtDecimanl = ".";
        } else {
            strAmtDecimanl = SYS_AMT_DEC_FORMAT;
        }
        var nResult1 = nAmtVal;
        var nIndex = -1;
        var bKeepOrigValue = false;
        var sTemnAmtVal = "";
        var sTemp2 = "";
        var nLoop = 0;
        if (nDeciNum === null) {
            bKeepOrigValue = true;
            sTemnAmtVal = nResult1.toString();
            if (sTemnAmtVal.indexOf(strAmtDecimanl) === -1) {
                nDeciNum = 0;
            } else {
                nDeciNum = sTemnAmtVal.length - sTemnAmtVal.indexOf(strAmtDecimanl) - 1;
            }
        } else if (typeof(nDeciNum) !== "number") {
            nDeciNum = SYS_BeFloat(nDeciNum);
            sTemnAmtVal = setRoundNumber(nResult1, nDeciNum).toString();
        } else {
            sTemnAmtVal = setRoundNumber(nResult1, nDeciNum).toString();
        }
        var sIntePart = ""; //integer part
        var sRemaPart = ""; //remainder part
        var i;
        if (nDeciNum > 0) {
            nIndex = sTemnAmtVal.indexOf(strAmtDecimanl);
            if (nIndex === -1) {
                sIntePart = sTemnAmtVal;
                sRemaPart = strAmtDecimanl;
                for (i = 1; i <= nDeciNum; i++) {
                    sRemaPart = sRemaPart + "0";
                }
            } else {
                sIntePart = sTemnAmtVal.substring(0, nIndex);
                sRemaPart = sTemnAmtVal.substring(nIndex, sTemnAmtVal.length);
                nLoop = nDeciNum - (sRemaPart.length - 1);
                if (nLoop > 0) {
                    for (i = 1; i <= nLoop; i++) {
                        sRemaPart = sRemaPart + "0";
                    }
                }
            }
        } else {
            sIntePart = sTemnAmtVal;
            sRemaPart = "";
        }
        var nComma = 0;
        if (sIntePart.charAt(0) === "-") {
            nComma = Math.ceil((sIntePart.length - 1) / 3) - 1; //exlusive minus sign, moduler 3 to get section number, minus 1 will get comma sign number would be needed.
        } else {
            nComma = Math.ceil(sIntePart.length / 3) - 1; // moduler 3 to get section number, minus 1 will get comma sign number would be needed.
        }
        sTemnAmtVal = "";
        sTemp2 = "";
        sTemp3 = sIntePart.substring(0, sIntePart.length - 3);
        sTemp4 = sIntePart.substring(sIntePart.length - 3, sIntePart.length);
        for (i = 1; i <= nComma; i++) {
            sTemnAmtVal = sIntePart.substring(0, sIntePart.length - i * 3 - (i - 1));
            sTemp2 = strAmtInteger + sIntePart.substring(sIntePart.length - i * 3 - (i - 1), sIntePart.length);
            sIntePart = sTemnAmtVal + sTemp2;
        }
        if (SYS_BANK_COUNTRY === "IN") {
            nComma = Math.ceil((sIntePart.length - 3) / 2) - 1;
            if (sTemp3 !== "") {
                for (i = 1; i <= nComma; i++) {
                    sTemnAmtVal = sTemp3.substring(0, sTemp3.length - i * 2 - (i - 1));
                    sTemp2 = "," + sTemp3.substring(sTemp3.length - i * 2 - (i - 1), sTemp3.length);
                    sTemp3 = sTemnAmtVal + sTemp2;
                }
                for (i = 1; i <= nComma; i++) {
                    if (sTemp3.substring(0, 1) === ",") {
                        sTemp3 = sTemp3.substring(1, sTemp3.length);
                    }
                }
                sIntePart = sTemp3 + "," + sTemp4.toString();
            }
        }
        return (sIntePart + sRemaPart);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setDecimalFormat", e);
    }
}

function SYT_setEnableDivToOptional(sDivId, sExceptFdNmList) {
    try {
        var oDiv = document.getElementById(sDivId);
        var oDiv_input = oDiv.getElementsByTagName("input");
        var oDiv_select = oDiv.getElementsByTagName("select");
        var oDiv_textarea = oDiv.getElementsByTagName("textarea");
        var oDiv_Button = oDiv.getElementsByTagName("button");
        var bChkFlag = false;
        var i, s, t, b;
        if (sExceptFdNmList !== "" && sExceptFdNmList !== null && sExceptFdNmList !== undefined) {
            bChkFlag = true;
        }
        for (i = 0; i < oDiv_input.length; i++) {
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_input[i].name) > -1) {
                    continue;
                }
                SYT_ChangeFldClass(oDiv_input[i], "O");
            } else {
                SYT_ChangeFldClass(oDiv_input[i], "O");
            }
        }
        for (s = 0; s < oDiv_select.length; s++) {
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_select[s].name) > -1) {
                    continue;
                }
                SYT_ChangeFldClass(oDiv_select[s], "O");
            } else {
                SYT_ChangeFldClass(oDiv_select[s], "O");
            }
        }
        for (t = 0; t < oDiv_textarea.length; t++) {
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_textarea[t].name) > -1) {
                    continue;
                }
                SYT_ChangeFldClass(oDiv_textarea[t], "O");
            } else {
                SYT_ChangeFldClass(oDiv_textarea[t], "O");
            }
        }
        for (b = 0; b < oDiv_Button.length; b++) {
            if (bChkFlag) {
                if (sExceptFdNmList.indexOf(oDiv_Button[b].name) > -1) {
                    continue;
                }
                SYT_ChangeFldClass(oDiv_Button[b], "O");
            } else {
                SYT_ChangeFldClass(oDiv_Button[b], "O");
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setEnableDivToOptional", e);
    }
}

function SYT_setFieldValue(sFldNm, setVal) {
    try {
        var rtVal = "";
        var oFld = document.getElementById(sFldNm);
        if (!oFld) {
            return rtVal;
        }
        var sDataType = SYT_getFldDataType(sFldNm);
        switch (sDataType) {
            case "AMT":
                var sCcyVal = "";
                var sCcyFdNm = SYT_getCcyFromSysAmtFormatArray(sFldNm);
                var oCcyFld = document.getElementById(sCcyFdNm);
                if (!oCcyFld) {
                    return rtVal;
                }
                sCcyVal = oCcyFld.value;
                if (sCcyVal !== null && sCcyVal !== "") {
                    rtVal = SYT_setAmountFormat(sCcyVal, setVal);
                } else {
                    rtVal = 0;
                }
                break;
            case "INT":
                rtVal = SYS_BeInt(setVal);
                break;
            case "FLOAT":
                rtVal = SYS_BeFloat(setVal);
                break;
            case "RATE":
                rtVal = SYS_BeFloat(setVal);
                break;
            case "DATE":
                if (setVal.length > 10) {
                    rtVal = "";
                } else {
                    rtVal = setVal;
                }
                break;
            case "TIME":
                rtVal = setVal;
                break;
            case "CHAR":
                rtVal = setVal;
                break;
        }
        oFld.value = rtVal;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setFieldValue", e);
    }
}

function SYT_setFldValToUpperCase(sFldVal) {
    try {
        var rtnVal = sFldVal;

        if (sFldVal !== "" && sFldVal !== null) {
            if (typeof(sFldVal) === "string") {
                rtnVal = sFldVal.toUpperCase();
            } else {
                alert("[SYT_setFldValToUpperCase] method: The value type is not string, Please System OP to check it frist!");
            }
        }

        return rtnVal;
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setFldValToUpperCase", e);
    }
}

function SYT_setFldValue(sFldNm, FldValue) {
    try {
        var oField; // Utility Auto Fix Comments
        var sDataType; // Utility Auto Fix Comments
        var sFldObjType; // Utility Auto Fix Comments
        oField = EEHtml.getElementById(sFldNm);

        if (!oField) {
            return;
        }

        sDataType = SYT_getFldDataType(sFldNm);
        sFldObjType = SYT_getFldObjType(sFldNm);

        if (sFldObjType !== "radio") {
            if (sDataType == "AMT") {
                oField.value = FldValue;
                CovAmtToStr(sFldNm);
            } else if (sDataType == "FLOAT") {
                oField.value = SYS_BeFloat(FldValue);
            } else if (sDataType == "INT") {
                oField.value = BeInt(FldValue);

            } else if (sDataType == "DATE") {
                if (FldValue.length == 0) {
                    oField.value = "";
                } else {
                    oField.value = SYT_ConvDtObjToStr(FldValue);
                }
            } else if (sDataType == "CHAR") {
                oField.value = FldValue;
            } else {
                //for no class setting
                oField.value = FldValue;
            }
        } else {
            oField.value = SYT_setRadioBtnValue(sFldNm, FldValue);
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setFldValue", e);
    }
}

function SYT_setRadioBtnValue(sFldNm, sValue) {
    try {
        var arrObj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nLen; // Utility Auto Fix Comments
        var sFldValue; // Utility Auto Fix Comments
        arrObj = document.getElementsByName(sFldNm);
        nLen = arrObj.length;
        sFldValue = "";

        for (i = 0; i < nLen; i++) {
            arrObj[i].checked = false;

            if (arrObj[i].value == String(sValue)) {
                arrObj[i].checked = true;
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setRadioBtnValue", e);
    }
}

function SYT_setRateFormatByCurrency(nRtVal, sRtCcy) {
    try {
        var nRateVal = SYS_BeFloat(nRtVal);
        var nDecimal = 0;
        var i;
        for (i = 0; i < SYS_CURRENCY.length; i++) {
            if (sRtCcy === SYS_CURRENCY[i][0]) {
                nDecimal = SYS_CURRENCY[i][3];
            }
        }
        return SYT_setDecimalFormat(nRateVal, nDecimal);
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setRateFormatByCurrency", e);
    }
}

function SYT_setTag11forSwift() {
    try {
        if (document.MAINFORM.MT_DT_ISN.value != '') {
            document.MAINFORM.MT_DT_ISN_1.value = document.MAINFORM.MT_DT_ISN.value.substring(0, 3);
            document.MAINFORM.MT_DT_ISN_2.value = document.MAINFORM.MT_DT_ISN.value.substring(3, 9);
            document.MAINFORM.MT_DT_ISN_3.value = document.MAINFORM.MT_DT_ISN.value.substring(9, 19);
        } else {
            document.MAINFORM.MT_DT_ISN_1.value = "";
            document.MAINFORM.MT_DT_ISN_2.value = "";
            document.MAINFORM.MT_DT_ISN_3.value = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_setTag11forSwift", e);
    }
}

function SYT_success() {
    try {} catch (e) {
        DisExcpt("TrxSys.js*SYT_success", e);
    }
}

function SYT_switchButton(onType, objButton) {
    try {
        if (onType) {
            if (objButton.disabled == true) {
                objButton.disabled = false;
                objButton.src = "../image/" + objButton.value + "t.gif";
                objButton.style.cursor = "hand";
            }
        } else {
            if (objButton.disabled == false) {
                objButton.disabled = true;
                objButton.src = "../image/" + objButton.value + "f.gif";
                objButton.style.cursor = "default";
            }
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_switchButton", e);
    }
}

function SYT_switchDisplay() {
    try {
        var elementID; // Utility Auto Fix Comments
        var sObject; // Utility Auto Fix Comments
        var sObjectDisplay; // Utility Auto Fix Comments
        sObject = EEHtml.getElementById(elementID);
        sObjectDisplay = sObject.style.display;
        if (sObjectDisplay != 'none') {
            sObject.style.display = "none";
        } else {
            sObject.style.display = "";
        }
    } catch (e) {
        DisExcpt("TrxSys.js*SYT_switchDisplay", e);
    }
}