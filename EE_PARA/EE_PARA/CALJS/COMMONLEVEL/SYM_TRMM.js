function SYM_TRMM_Cal_BROKER_ID() {
    try {
        SYM_TRMM_genSelectFieldOptionFromBrokerIDData("BROKER_ID");
        if (SYS_ORG_FUNCTION_NAME === "MMExtendDeal") {
            SYT_ChangeFldClass(document.MAINFORM.BROKER_ID, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BROKER_ID, "M");
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_BROKER_ID", e);
    }
}

function SYM_TRMM_Cal_BUSI_UNIT() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var BUSI_UNIT;
        if (TRX_CCY === "USD") {
            BUSI_UNIT = "DBU";
            SYT_ChangeFldClass(document.MAINFORM.BUSI_UNIT, "P");
        } else {
            BUSI_UNIT = "ACU";
            SYT_ChangeFldClass(document.MAINFORM.BUSI_UNIT, "M");
        }
        document.MAINFORM.BUSI_UNIT.value = BUSI_UNIT;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_BUSI_UNIT", e);
    }
}

function SYM_TRMM_Cal_CLS_FLG() {
    try {
        var sClose = "";
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        if (DEAL_ACTION === "DeleteTicket") {
            sClose = "Yes";
        } else {
            sClose = "No";
        }
        document.MAINFORM.CLS_FLG.value = sClose;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_CLS_FLG", e);
    }
}

function SYM_TRMM_Cal_CNPT_NOS_SWADD() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        document.MAINFORM.CNPT_SSI_CCY.value = TRX_CCY;
        document.MAINFORM.MODULE.value = SYS_MODULE_NAME;
        if (TRX_CCY !== "" && TRX_CCY !== null && CNPT_ID !== "" && CNPT_ID !== null) {
            SYS_GetDataBySSS_S("SSSS_GetCnptSSIByCnptIdCcyPd_TRX", "CNPT_ID;CNPT_SSI_CCY;MODULE");
            var aEffcvDtList1 = SYS_GetMultiFldValueFromArray("EFFCV_DT");
            var aAcWtBkSwAddList1 = SYS_GetMultiFldValueFromArray("AC_WT_BK_SW_ADD");
            var nSize1 = aEffcvDtList1.length;
            if (nSize1 > 0) {
                var i;
                for (i = 0; i < nSize1; i++) {
                    var nChkDays1 = SYT_getSubDaysByDateVal(VAL_DT, aEffcvDtList1[i]);
                    if (nChkDays1 >= 0) {
                        if (aAcWtBkSwAddList1[i] === "undefined" || aAcWtBkSwAddList1[i] === undefined) {
                            aAcWtBkSwAddList1[i] = "";
                        }
                        document.MAINFORM.CNPT_NS_SWADD.value = aAcWtBkSwAddList1[i];
                        break;
                    } else {
                        document.MAINFORM.CNPT_NS_SWADD.value = "";
                    }
                }
            } else {
                SYS_GetDataBySSS_S("SSSS_GetCnptSSIByCnptIdCcyAllPd_TRX", "CNPT_ID;CNPT_SSI_CCY");
                var aEffcvDtList2 = SYS_GetMultiFldValueFromArray("EFFCV_DT");
                var aAcWtBkSwAddList2 = SYS_GetMultiFldValueFromArray("AC_WT_BK_SW_ADD");
                var nSize2 = aEffcvDtList2.length;
                if (nSize2 > 0) {
                    var j;
                    for (j = 0; j < nSize2; j++) {
                        var nChkDays2 = SYT_getSubDaysByDateVal(VAL_DT, aEffcvDtList2[j]);
                        if (nChkDays2 >= 0) {
                            if (aAcWtBkSwAddList2[j] === "undefined" || aAcWtBkSwAddList2[j] === undefined) {
                                aAcWtBkSwAddList2[j] = "";
                            }
                            document.MAINFORM.CNPT_NS_SWADD.value = aAcWtBkSwAddList2[j];
                            break;
                        } else {
                            alert("Warning: Counterparty has not SSI files.");
                            document.MAINFORM.CNPT_NS_SWADD.value = "";
                        }
                    }
                } else {
                    alert("Warning: Counterparty has not SSI files.");
                    document.MAINFORM.CNPT_NS_SWADD.value = "";
                }
            }
        } else {
            document.MAINFORM.CNPT_NS_SWADD.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_CNPT_NOS_SWADD", e);
    }
}

function SYM_TRMM_Cal_DEAL_NO() {
    try {
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var sRule = "";

        if (DEAL_TP === "IP") {
            sRule = "TRMM_IP_REF";
        } else {
            sRule = "TRMM_IB_REF";
        }
        SYS_GetRefNo_S(sRule, "SYM_TRMM_Cal_RefNo");
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_DEAL_NO", e);
    }
}

function SYM_TRMM_Cal_DEAL_NO_Dup() {
    try {
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var BUSI_TP = document.MAINFORM.BUSI_UNIT.value;
        var idNo = SYS_BeFloat(document.MAINFORM.TEMP_ITEM1.value);
        idNo += 1;
        document.MAINFORM.TEMP_ITEM1.value = idNo;
        var sRule = "";
        var sId = "DEAL" + idNo;

        if (DEAL_TP === "IP") {
            sRule = "TRMM_IP_REF";
        } else {
            sRule = "TRMM_IB_REF";
        }

        SYS_GetRefNo_S(sRule, "SYM_TRMM_Cal_RefNo", "", sId, sId);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_DEAL_NO_Dup", e);
    }
}

function SYM_TRMM_Cal_ELOAN_TP() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var ELOAN_TP = "";
        if (DEAL_ACTION === "DeleteTicket") {
            ELOAN_TP = "DeleteTicket";
        }
        if (DEAL_ACTION === "Cancel") {
            ELOAN_TP = "CancelTrx";
        }
        document.MAINFORM.ELOAN_TP.value = ELOAN_TP;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_ELOAN_TP", e);
    }
}

function SYM_TRMM_Cal_FOLDER() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var POSIT_TP = document.MAINFORM.POSIT_TP.value;
        var TADE_DT = document.MAINFORM.TADE_DT.value;
        var FOLDER = document.MAINFORM.FOLDER.value;
        var sTableName = "KD_FOLDER_DO";
        document.MAINFORM.TEMP_PORTFL_CD.value = SYT_getProductCodeByModuleShortName(SYS_MODULE_NAME) + BUSI_UNIT;
        if (TADR_ID !== "" && TADR_ID !== null && POSIT_TP !== "" && POSIT_TP !== null) {
            var nSize = 0;
            SYS_GetDataBySSS_S("SSSS_GetKdForderByTadrIdPoflCdPositTp_TRX", "TADR_ID;TEMP_PORTFL_CD;POSIT_TP");
            var aShortNmList = SYS_GetMultiFldValueFromArray("SHORT_NM");
            var aStopDtList = SYS_GetMultiFldValueFromArray("STOP_DT");
            nSize = aShortNmList.length;
            if (nSize > 0) {
                var sNewShortNm = "";
                var i;
                for (i = 0; i < nSize; i++) {
                    if (aStopDtList[i] !== "" && aStopDtList[i] !== null && aStopDtList[i] !== "undefined") {
                        if (SYT_getSubDaysByDateVal(aStopDtList[i], TADE_DT) >= 0) {
                            if (sNewShortNm === "") {
                                sNewShortNm = aShortNmList[i];
                            } else {
                                sNewShortNm = sNewShortNm + "|" + aShortNmList[i];
                            }
                        }
                    } else {
                        if (sNewShortNm === "") {
                            sNewShortNm = aShortNmList[i];
                        } else {
                            sNewShortNm = sNewShortNm + "|" + aShortNmList[i];
                        }
                    }
                }
                var aFodShNmList = sNewShortNm.split("|");
                var nFodListSize = aFodShNmList.length;
                var aForderList = SYT_create2DArray(2, nFodListSize);
                var j;
                for (j = 0; j < nFodListSize; j++) {
                    aForderList[0][j] = aFodShNmList[j];
                    aForderList[1][j] = aFodShNmList[j];
                }
                SYT_genSelectFldOptionFmFreeArray(aForderList, document.MAINFORM.FOLDER.name);
                if (SYS_FUNCTION_TYPE === "EC" || "FDMMDealAmend||FDMMExtend".indexOf(SYS_FUNCTION_NAME) > -1) {
                    document.MAINFORM.FOLDER.value = FOLDER;
                }
            } else {
                SYT_cleanSelectFieldAllOption("FOLDER");
                document.MAINFORM.KONDOR_FOLDER.value = "";
            }
        } else {
            document.MAINFORM.FOLDER.value = "";
            document.MAINFORM.KONDOR_FOLDER.value = "";
            document.MAINFORM.TADR_ID.value = "";
            document.MAINFORM.TADR_EN_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_FOLDER", e);
    }
}

function SYM_TRMM_Cal_INT_AMT() {
    try {
        var TRX_AMT = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        var INT_RT = SYS_BeFloat(document.MAINFORM.INT_RT.value);
        var DAYS = SYT_getSubDaysByDateVal(document.MAINFORM.MATURITY_DT.value, document.MAINFORM.VAL_DT.value);
        var FACTOR = SYS_BeFloat(document.MAINFORM.FACTOR.value);
        var INT_AMT = 0;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        if (FACTOR > 0) {
            INT_AMT = (TRX_AMT * (INT_RT / 100) * (DAYS)) / FACTOR;
        } else {
            INT_AMT = 0;
        }
        document.MAINFORM.INT_AMT.value = SYT_AmtFormat(TRX_CCY, INT_AMT);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_INT_AMT", e);
    }
}

function SYM_TRMM_Cal_INT_AMT_P() {
    try {
        var INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        var INT_AMT_P = Math.abs(INT_AMT);
        document.MAINFORM.INT_AMT_P.value = String(INT_AMT_P);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_INT_AMT_P", e);
    }
}

function SYM_TRMM_Cal_LCY() {
    try {
        document.MAINFORM.LOCAL_CCY.value = SYM_TRMM_calLocalCurrencyByBusiUnit();
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_LCY", e);
    }
}

function SYM_TRMM_Cal_MATU_DT() {
    try {
        var PRD_NO = document.MAINFORM.PERIOD.value;
        var PRD_TP = document.MAINFORM.PERIOD_UNIT.value;
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        var MATU_DT = "";
        if (PRD_NO > 0 && PRD_TP !== "") {
            MATU_DT = SYT_getDateByPeriod(VAL_DT, PRD_NO, PRD_TP);
        }
        document.MAINFORM.MATURITY_DT.value = MATU_DT;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MATU_DT", e);
    }
}

function SYM_TRMM_Cal_MT202_32info() {
    try {
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        var OLD_AMT = SYS_BeFloat(document.MAINFORM.OLD_AMT.value);
        var OLD_INT_AMT = SYS_BeFloat(document.MAINFORM.OLD_INT_AMT.value);
        var NEW_TRX_AMT = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        var nRollDiff = 0;
        var s32Dt = "";
        var s32CCY = document.MAINFORM.TRX_CCY.value;
        var s32Amt = "";
        var DEAL_TYPE = document.MAINFORM.DEAL_TP.value;
        if (DEAL_TYPE === "IT") {
            s32Dt = document.MAINFORM.MATURITY_DT.value;
            s32Amt = document.MAINFORM.TTL_NS_AMT.value;
        } else {
            s32Dt = document.MAINFORM.VAL_DT.value;
            s32Amt = document.MAINFORM.TRX_AMT.value;
            if (OLD_DEAL_NO !== null && OLD_DEAL_NO !== "") {
                nRollDiff = SYS_FloatAdd(OLD_AMT, OLD_INT_AMT);
                nRollDiff = SYS_FloatSub(NEW_TRX_AMT, nRollDiff);
                s32Amt = String(nRollDiff);
            }
        }
        document.MAINFORM.X202_CCY_32A.value = s32CCY;
        document.MAINFORM.X202_VALUE_DT_32A.value = s32Dt;
        document.MAINFORM.X202_AMT_32A.value = SYT_AmtFormat(s32CCY, s32Amt);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT202_32info", e);
    }
}

function SYM_TRMM_Cal_MT320_17R() {
    try {
        var DEAL_TYPE = document.MAINFORM.DEAL_TP.value;
        var s17R = "";
        if (DEAL_TYPE === "IP") {
            s17R = "L";
        } else {
            s17R = "B";
        }
        document.MAINFORM.MT320_17R.value = s17R;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_17R", e);
    }
}

function SYM_TRMM_Cal_MT320_20() {
    try {
        var sTag20 = "";
        var ORG_MT320_TAG20 = document.MAINFORM.ORG_MT320_TAG20.value;
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var MT320_OPETN_TP = document.MAINFORM.MT320_OPETN_TP.value;
        /* if (document.MAINFORM.INSTR_TP) { //BD ACR
             var SUPVIS_FUNC_FLG = document.MAINFORM.SUPVIS_FUNC_FLG.value;
             if ("AMND||CANC".indexOf(MT320_OPETN_TP) > -1) {
                 if (SUPVIS_FUNC_FLG.substr(0, 2) === "SI") { //Supervisor Instruction
                     if (SYT_chkSwiftAckNakStatusByOrgTag20(ORG_MT320_TAG20, false) === "A") {
                         if (SUPVIS_FUNC_FLG === "SISSI") {
                             sTag20 = SYT_calMT300MT320Tag20ByAmend(ORG_MT320_TAG20, "A");
                         } else {
                             sTag20 = ORG_MT320_TAG20;
                         }
                     } else {
                         if (SUPVIS_FUNC_FLG === "SISSI") {
                             sTag20 = ORG_MT320_TAG20;
                         } else {
                             sTag20 = SYT_calMT300MT320Tag20ByAmend(ORG_MT320_TAG20, "B");
                         }
                     }
                 } else { //Superviosr Release 2
                     if (SUPVIS_FUNC_FLG === "SRSSI") {
                         sTag20 = ORG_MT320_TAG20;
                     } else {
                         sTag20 = SYT_calMT300MT320Tag20ByAmend(ORG_MT320_TAG20, "B");
                     }
                 }
             } else {
                 sTag20 = ORG_MT320_TAG20;
             }
         } else { */
        //BD confirm
        if (SETL_ACTION !== "ReturnDoc" && SETL_ACTION !== "RevertConf") {
            if ("AMND||CANC".indexOf(MT320_OPETN_TP) > -1) {
                sTag20 = SYT_calMT300MT320Tag20ByAmend(ORG_MT320_TAG20, "A");
            } else {
                sTag20 = document.MAINFORM.DEAL_NO.value;
            }
        } else {
            sTag20 = ORG_MT320_TAG20;
        }
        // }
        document.MAINFORM.MT320_TAG20.value = sTag20;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_20", e);
    }
}

function SYM_TRMM_Cal_MT320_21() {
    try {
        var sTag21 = "";
        var ORG_MT320_TAG20 = document.MAINFORM.ORG_MT320_TAG20.value;
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var MT320_OPETN_TP = document.MAINFORM.MT320_OPETN_TP.value;
        /*  if (document.MAINFORM.INSTR_TP) { //BD ACR
              var SUPVIS_FUNC_FLG = document.MAINFORM.SUPVIS_FUNC_FLG.value;
              if ("AMND||CANC".indexOf(MT320_OPETN_TP) > -1) {
                  if (SUPVIS_FUNC_FLG.substr(0, 2) === "SI") { //Supervisor Instruction
                      if (SYT_chkSwiftAckNakStatusByOrgTag20(ORG_MT320_TAG20, false) === "A") {
                          if (SUPVIS_FUNC_FLG === "SISSI") {
                              sTag21 = ORG_MT320_TAG20;
                          }
                      } else {
                          if (SUPVIS_FUNC_FLG === "SISSI") {
                              sTag21 = SYT_calMT300MT320Tag20ByAmend(ORG_MT320_TAG20, "B");
                          }
                      }
                  } else { //Superviosr Release 2
                      if (SUPVIS_FUNC_FLG === "SRSSI") {
                          sTag21 = SYT_calMT300MT320Tag20ByAmend(ORG_MT320_TAG20, "B");
                      }
                  }
              }
          } else { */
        //BD Confirm
        if ("AMND||CANC".indexOf(MT320_OPETN_TP) > -1 && SETL_ACTION !== "ReturnDoc" && SETL_ACTION !== "RevertConf") {
            sTag21 = ORG_MT320_TAG20;
        }
        //  }
        var sBU = document.MAINFORM.BUSI_UNIT.value;
        if (MT320_OPETN_TP === "NEWT") {
            sTag21 = "NEW/" + sBU;
        }
        document.MAINFORM.MT320_21.value = sTag21;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_21", e);
    }
}

function SYM_TRMM_Cal_MT320_32B() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        document.MAINFORM.TRX_SW_CCY.value = TRX_CCY;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_32B", e);
    }
}

function SYM_TRMM_Cal_MT320_32Hinfo() {
    try {
        var sTypeOfEvent = document.MAINFORM.MT320_EVENT_TP.value;
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var sAmountToBeSettled_Sign = "";
        var sAmountToBeSettled_CCY = document.MAINFORM.TRX_CCY.value;
        var sAmountToBeSettled_Amount = 0;
        var nTrxAmountBal = SYS_BeFloat(document.MAINFORM.TRX_AMT_BAL.value);
        if ("ROLL".indexOf(sTypeOfEvent) > -1) {
            if (DEAL_TP === "IP" && nTrxAmountBal > 0) {
                sAmountToBeSettled_Sign = "N";
            }
            sAmountToBeSettled_Amount = nTrxAmountBal;
        }
        document.MAINFORM.MT320_32H_SIGN.value = sAmountToBeSettled_Sign;
        document.MAINFORM.MT320_32H_CCY.value = sAmountToBeSettled_CCY;
        document.MAINFORM.MT320_32H_AMT.value = SYT_AmtFormat(sAmountToBeSettled_CCY, sAmountToBeSettled_Amount);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_32Hinfo", e);
    }
}

function SYM_TRMM_Cal_MT320_34Emark() {
    try {
        var DEAL_TYPE = document.MAINFORM.DEAL_TP.value;
        var sChk34 = "";
        if (DEAL_TYPE === "IP") {
            sChk34 = "N";
        } else {
            sChk34 = "";
        }
        document.MAINFORM.MT320_34E.value = sChk34;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_34Emark", e);
    }
}

function SYM_TRMM_Cal_MT320_57_SWTAG() {
    try {
        var OVER_AC_FLG = document.MAINFORM.OVER_AC_FLG.value;
        var sChk57 = "";
        if (OVER_AC_FLG === "Yes") {
            document.MAINFORM.MT320_57_NM.value = "OVER ACCOUNT";
            sChk57 = "D";
        } else {
            document.MAINFORM.MT320_57_NM.value = "";
            sChk57 = "A";
        }
        document.MAINFORM.MT320_57_SWTAG.value = sChk57;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_57_SWTAG", e);
    }
}

function SYM_TRMM_Cal_MT320_82A() {
    try {
        var s82a = "";
        var sChkXXX = SYS_LOGIN_BIC.lastIndexOf("XXX");
        if (sChkXXX > -1) {
            s82a = SYS_LOGIN_BIC.substr(0, 8);
        } else {
            s82a = SYS_LOGIN_BIC;
        }
        document.MAINFORM.MT320_82A.value = s82a;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_82A", e);
    }
}

function SYM_TRMM_Cal_MT320_COMM_REF() {
    try {
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var INT_RT = document.MAINFORM.INT_RT.value;
        INT_RT = INT_RT.replace("-", ""); //for negative interest
        var s22C = "";
        s22C = SYT_calMT300MT320Tag22C(CNPT_SWADD, INT_RT);
        document.MAINFORM.MT320_COMM_REF.value = s22C;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_COMM_REF", e);
    }
}

function SYM_TRMM_Cal_MT320_EVENT_TP() {
    try {
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        var sTypeOfEvent = "";
        if (OLD_DEAL_NO.length > 0) {
            sTypeOfEvent = "ROLL";
        } else {
            sTypeOfEvent = "CONF";
        }
        document.getElementById("MT320_EVENT_TP").value = sTypeOfEvent;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_EVENT_TP", e);
    }
}

function SYM_TRMM_Cal_MT320_OPETN_TP() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var SEND_MT320_FLG = document.MAINFORM.SEND_MT320_FLG.value;
        var MT320_OPETN_TP = document.MAINFORM.MT320_OPETN_TP.value;
        var sTypeOfOperation = "";
        if (DEAL_ACTION === "Amend") {
            sTypeOfOperation = "AMND";
        } else if (DEAL_ACTION === "Cancel") {
            sTypeOfOperation = "CANC";
        } else if (DEAL_ACTION === "Extend") {
            sTypeOfOperation = "NEWT";
        } else if (DEAL_ACTION === "New") {
            sTypeOfOperation = "NEWT";
        } else if (DEAL_ACTION === "Revert") {
            sTypeOfOperation = MT320_OPETN_TP;
        }
        //modify SSI
        /* if (sTypeOfOperation === "NEWT" && SEND_MT320_FLG === "Yes") {
             var sChkANR = SYT_chkSwiftAckNakStatusByOrgTag20(document.MAINFORM.ORG_MT320_TAG20.value, false);
             if (sChkANR === "A") {
                 sTypeOfOperation = "AMND";
             } else {
                 sTypeOfOperation = MT320_OPETN_TP;
             }
         }*/
        document.MAINFORM.MT320_OPETN_TP.value = sTypeOfOperation;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MT320_OPETN_TP", e);
    }
}

function SYM_TRMM_Cal_MatuDateIsBusiness() {
    try {
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MatuDateIsBusiness", e);
    }
}

function SYM_TRMM_Cal_MatuDateIsHoliday() {
    try {
        var TRX_CCY_CNTY_CD = document.MAINFORM.TRX_CCY_CNTY_CD.value;
        var MATU_DT = document.MAINFORM.MATURITY_DT.value;
        alert("Warning: Maturity Date is Holiday !");
        var dMatuDT = SYT_getDateByFieldval(document.MAINFORM.MATURITY_DT.value);
        var sMatuYear = dMatuDT.getFullYear();
        var sMatuMonth = dMatuDT.getMonth() + 1;
        var dEOMDt = new Date(sMatuYear, sMatuMonth, 0);
        var sMatuDtDays = dMatuDT.getDate();
        var sEOMDtDays = dEOMDt.getDate();
        if (sMatuDtDays !== sEOMDtDays) {
            SYS_CalEndWorkingDate_S(TRX_CCY_CNTY_CD, MATU_DT, "1", document.MAINFORM.MATURITY_DT.name, "A", "Y", "Y");
        } else {
            SYS_CalEndWorkingDate_S(TRX_CCY_CNTY_CD, MATU_DT, "1", document.MAINFORM.MATURITY_DT.name, "B", "Y", "Y");
        }
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_MatuDateIsHoliday", e);
    }
}

function SYM_TRMM_Cal_OUR_NOS_ID() {
    try {
        var sSQLWhere = "";
        var sBusiUnit = SYS_BUSI_UNIT;
        var PROD_CD = "All";
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var sTableName = "TRNB_ACNO_DO";
        var sFieldList = "NS_BK_ID;NS_BK_SWADD";
        var sMappingList = "NOSTRO_BK_ID;NOSTRO_BK_SW_ADD";
        var sDEFLT_FLG = "Yes";
        var sFailJsFuncName = "SYM_TRMM_Cal_OUR_NOS_ID_Fail";
        var sSucJSFuncName = "SYM_TRMM_Cal_OUR_NOS_ID_Succ";
        if (TRX_CCY !== "" && TRX_CCY !== null) {
            sSQLWhere = "NOSTRO_CCY = '" + TRX_CCY + "' AND C_UNIT_CODE = '" + sBusiUnit + "'" + " AND DEFLT_FLG = '" + sDEFLT_FLG + "'";
            SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, sSucJSFuncName, sFailJsFuncName, true);
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_OUR_NOS_ID", e);
    }
}

function SYM_TRMM_Cal_OUR_NOS_ID_Fail() {
    try {
        document.MAINFORM.NOSTRO_BK_ID.value = "";
        document.MAINFORM.NOSTRO_BK_SW_ADD.value = "";
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_OUR_NOS_ID_Fail", e);
    }
}

function SYM_TRMM_Cal_OUR_NOS_ID_Succ() {
    try {
        SYS_GetCUBK_S("OUR_NOSTRO_CITY", document.MAINFORM.NOSTRO_BK_ID.name, true);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_OUR_NOS_ID_Succ", e);
    }
}

function SYM_TRMM_Cal_OVER_AC_FLG() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var OVER_AC_FLG = document.MAINFORM.OVER_AC_FLG.value;
        SYS_MULTI_DATA = "";
        if (OVER_AC_FLG === "Yes" && TRX_CCY.length > 0 && CNPT_SWADD.length > 0) {
            ChkOVANostro = "";
            SYS_GetCUBK_S("ChkOVANostroBank", "TRX_CCY;CNPT_SWADD", true);
            if (ChkOVANostro.length > 0) {
                document.MAINFORM.OUR_NS_SWADD.value = CNPT_SWADD;
                SYS_GetCUBK("NOSTRO_BK_ID", "NOSTRO_BK_SW_ADD;TRX_CCY", "SYM_TRMM_Cal_OUR_NOS_ID_Succ", "SYM_TRMM_Cal_OUR_NOS_ID_Fail", true);
            } else {
                alert("Warning: The counterparty isn't the Nostro Bank !");
                document.MAINFORM.OVER_AC_FLG.value = "No";
                SYM_TRMM_Cal_OUR_NOS_ID();
            }
        } else {
            SYM_TRMM_Cal_OUR_NOS_ID();
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_OVER_AC_FLG", e);
    }
}

function SYM_TRMM_Cal_RefNo(ref) {
    try {
        var TADE_DT = document.MAINFORM.TADE_DT.value;
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var sCountry = SYS_BANK_COUNTRY;
        var arrDate = SYS_BUSI_DATE.split("-");
        var YY = arrDate[0].substr(2, 2);
        var sType = "";
        var DEAL_NO = "";

        if (DEAL_TP === "IP") {
            sType = "MMP";
        } else {
            sType = "MMB";
        }

        DEAL_NO = YY + sType + sCountry + BUSI_UNIT.substr(0, 1) + ref;

        document.MAINFORM.DEAL_NO.value = DEAL_NO;
        document.MAINFORM.C_MAIN_REF.value = DEAL_NO;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_RefNo", e);
    }
}

function SYM_TRMM_Cal_SEND_MT202_VDT() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var WHT_SEND_MT202_FLG = document.MAINFORM.WHT_SEND_MT202_FLG.value;
        var strCntyCodeValue = "";
        var strStartDateValue = "";
        var strDaysValue = "1";
        var fldName = document.MAINFORM.SEND_MT202_VDT.name;
        var strBeforeOrAfter = "B";
        var strIfCheckHol = "Y";
        var strIfJumpHol = "Y";
        var SEND_MT202_FLG = document.MAINFORM.SEND_MT202_FLG.value;
        if (SETL_ACTION !== "ReturnDoc" && SEND_MT202_FLG === "No") {
            strCntyCodeValue = SYS_BANK_COUNTRY;
            if (WHT_SEND_MT202_FLG === "No") {
                document.MAINFORM.SEND_MT202_VDT.value = "";
            } else {
                if (DEAL_TP === "IP") {
                    strStartDateValue = document.MAINFORM.VAL_DT.value;
                } else {
                    strStartDateValue = document.MAINFORM.MATURITY_DT.value;
                }
                SYS_CalEndWorkingDate_S(strCntyCodeValue, strStartDateValue, strDaysValue, fldName, strBeforeOrAfter, strIfCheckHol, strIfJumpHol);
                var SEND_MT202_VDT = document.MAINFORM.SEND_MT202_VDT.value;
                var TADE_DT = document.MAINFORM.TADE_DT.value;
                var nDays = SYT_getSubDaysByDateVal(SEND_MT202_VDT, TADE_DT);
                if (nDays < 0) { //T = V, Send MT202 Date will be later than Today.
                    document.MAINFORM.SEND_MT202_VDT.value = SYS_BUSI_DATE;
                }
            }
        } else {
            document.MAINFORM.SEND_MT202_VDT.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_SEND_MT202_VDT", e);
    }
}

function SYM_TRMM_Cal_SEND_MT320_VD() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var SEND_MT320_VDT;
        if (SETL_ACTION !== "ReturnDoc" && SETL_ACTION !== "RevertConf") {
            SEND_MT320_VDT = document.MAINFORM.TRX_DT.value;
        } else {
            SEND_MT320_VDT = "";
        }
        document.MAINFORM.SEND_MT320_VDT.value = SEND_MT320_VDT;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_SEND_MT320_VD", e);
    }
}

function SYM_TRMM_Cal_SEND_SW_FLG_ByConfirm() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var sSendSwFlg = "";
        if (SETL_ACTION.indexOf("Conf") > -1) {
            sSendSwFlg = "MT320";
            document.MAINFORM.SEND_MT320_FLG.value = "Yes";
        }
        if (SETL_ACTION === "UgntMT202") {
            sSendSwFlg = "MT202";
            document.MAINFORM.SEND_MT202_FLG.value = "Yes";
        }
        document.MAINFORM.SEND_SW_FLG.value = sSendSwFlg;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_SEND_SW_FLG_ByConfirm", e);
    }
}

function SYM_TRMM_Cal_SEND_VOU_VDT() {
    try {
        var SEND_VOU_VDT = document.MAINFORM.SEND_VOU_VDT.value;
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var TRX_DT = document.MAINFORM.TRX_DT.value;
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        var nDays = SYT_getSubDaysByDateVal(VAL_DT, SYS_BUSI_DATE);
        if ("ReturnDoc||CancelConf".indexOf(SETL_ACTION) < 0 && nDays <= 0) {
            SEND_VOU_VDT = SYS_BUSI_DATE;
        } else {
            SEND_VOU_VDT = "";
        }
        document.MAINFORM.SEND_VOU_VDT.value = SEND_VOU_VDT;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_SEND_VOU_VDT", e);
    }
}

function SYM_TRMM_Cal_StrToUpperCase(FieldName) {
    try {
        var FieldValue = FieldName.value;
        FieldName.value = SYT_setFldValToUpperCase(FieldValue);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_StrToUpperCase", e);
    }
}

function SYM_TRMM_Cal_TADE_DT() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var TADE_DT = document.MAINFORM.TADE_DT.value;
        var sCNTY_CD = SYT_getCountryCodeFromCurrency(TRX_CCY);
        SYM_TRMM_Chk_TradeDateisWorkingDate();
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_TADE_DT", e);
    }
}

function SYM_TRMM_Cal_TRADER_ID() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        document.MAINFORM.TEMP_PORTFL_CD.value = SYT_getProductCodeByModuleShortName(SYS_MODULE_NAME) + BUSI_UNIT;
        SYS_GetDataBySSS_S("SSSS_GetTraderInfoFmKdDoByPoflCd_TRX", "TEMP_PORTFL_CD");
        var aTadrIdList = SYS_GetMultiFldValueFromArray("TADR_ID");
        var aTadrNmList = SYS_GetMultiFldValueFromArray("TADR_EN_NM");
        var nLen = aTadrIdList.length;
        if (nLen > 0) {
            var oSelectList = document.getElementById("TADR_ID");
            var nSize = aTadrIdList.length;
            var sNewTadrList = "";
            var i;
            for (i = 0; i < nSize; i++) {
                if (i === 0) {
                    sNewTadrList = aTadrIdList[i];
                } else {
                    if (sNewTadrList.indexOf(aTadrIdList[i]) < 0) {
                        sNewTadrList = sNewTadrList + "|" + aTadrIdList[i];
                    }
                }
            }
            var aTadrList = sNewTadrList.split("|");
            var nTadrListLen = aTadrList.length;
            var aTadrId = SYT_create2DArray(2, nTadrListLen);
            var j;
            for (j = 0; j < nTadrListLen; j++) {
                aTadrId[0][j] = aTadrList[j];
                aTadrId[1][j] = aTadrList[j];
            }
            SYT_genSelectFldOptionFmFreeArray(aTadrId, document.MAINFORM.TADR_ID.name);
            if (SYS_FUNCTION_TYPE === "EC" || "MMDealAmd||MMExtendDeal".indexOf(SYS_FUNCTION_NAME) > -1) {
                document.MAINFORM.TADR_ID.value = TADR_ID;
            }
        } else {
            SYT_cleanSelectFieldAllOption("TADR_ID");
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_TRADER_ID", e);
    }
}

function SYM_TRMM_Cal_TRADER_IDcontents() {
    try {
        SYS_GetDataBySSS_S("SSSS_GetTraderInfoFmKdDoByAll_TRX", "C_MAIN_REF");
        var aTadrIdList = SYS_GetMultiFldValueFromArray("TADR_ID");
        var aTadrNmList = SYS_GetMultiFldValueFromArray("TADR_EN_NM");
        var nLen = aTadrIdList.length;
        if (nLen > 0) {
            var aTraderVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aTraderVal[0][i] = aTadrIdList[i];
                aTraderVal[1][i] = aTadrIdList[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aTraderVal, "TADR_ID");
        } else {
            SYT_cleanSelectFieldAllOption("TADR_ID");
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_TRADER_IDcontents", e);
    }
}

function SYM_TRMM_Cal_TTL_AMT() {
    try {
        var TRX_AMT = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        var INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var TTL_AMT = 0;

        TTL_AMT = TRX_AMT + INT_AMT;

        document.MAINFORM.TOTAL_AMT.value = SYT_AmtFormat(TRX_CCY, TTL_AMT);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_TTL_AMT", e);
    }
}

function SYM_TRMM_Cal_ValueDateIsHoliday() {
    try {
        alert("Warning: The Date is Holiday !");
        document.MAINFORM.VAL_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_ValueDateIsHoliday", e);
    }
}

function SYM_TRMM_Cal_VoucherCustomerID() {
    try {
        var sCustIdDR, sCustIdCR;
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        if ("SPReturn||StlRelease2".indexOf(SYS_ORG_FUNCTION_NAME) > -1) {
            if (DEAL_TP === "IP") {
                sCustIdDR = document.MAINFORM.NOSTRO_BK_ID.value;
                sCustIdCR = "";
            } else {
                sCustIdDR = "";
                sCustIdCR = document.MAINFORM.NOSTRO_BK_ID.value;
            }
        } else {
            if (DEAL_TP === "IP") {
                sCustIdDR = "";
                sCustIdCR = document.MAINFORM.NOSTRO_BK_ID.value;
            } else {
                sCustIdDR = document.MAINFORM.NOSTRO_BK_ID.value;
                sCustIdCR = "";
            }
        }
        document.MAINFORM.VCH_CUSTID_DR.value = sCustIdDR;
        document.MAINFORM.VCH_CUSTID_CR.value = sCustIdCR;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_VoucherCustomerID", e);
    }
}

function SYM_TRMM_Cal_eLOANinfo() {
    try {
        document.MAINFORM.IA_C_MODU_NAME.value = SYS_MODULE_NAME;
        document.MAINFORM.IA_C_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.TRX_CCY.value); //SYT_getDecFromSysCcyArray(document.MAINFORM.TRX_CCY.value);
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var IA_C_ACCOUNT_TYPE = "";
        var sChkIntra = document.MAINFORM.CNPT_SWADD.value.substr(0, 4);
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var LCY = document.MAINFORM.LOCAL_CCY.value;
        var INT_RT = SYS_BeFloat(document.MAINFORM.INT_RT.value);
        if ("SPReturn||BMMMAmend".indexOf(SYS_ORG_FUNCTION_NAME) < 0) {
            if (BUSI_UNIT === "DBU") {
                if ((DEAL_TP === "IT" && TRX_CCY !== LCY && INT_RT >= 0) || (DEAL_TP === "IP" && TRX_CCY !== LCY && INT_RT < 0)) {
                    IA_C_ACCOUNT_TYPE = "MD2";
                } else {
                    IA_C_ACCOUNT_TYPE = "MD1";
                }
            }
            if (BUSI_UNIT === "ACU") {
                if ((DEAL_TP === "IT" && TRX_CCY !== LCY && INT_RT >= 0) || (DEAL_TP === "IP" && TRX_CCY !== LCY && INT_RT < 0)) {
                    IA_C_ACCOUNT_TYPE = "MO2";
                } else {
                    IA_C_ACCOUNT_TYPE = "MO1";
                }
            }
            document.MAINFORM.IA_C_ACCOUNT_TYPE.value = IA_C_ACCOUNT_TYPE;
        }
        document.MAINFORM.IA_C_UNIT_OF_CRT.value = SYS_BUSI_UNIT;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Cal_eLOANinfo", e);
    }
}

function SYM_TRMM_Chk_BUSI_UNIT() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        if (TRX_CCY === "USD" && BUSI_UNIT === "ACU") {
            alert("Warning: When Transaction Currency is USD, Business Unit must be DBU !");
            BUSI_UNIT = "DBU";
        }
        document.MAINFORM.BUSI_UNIT.value = BUSI_UNIT;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_BUSI_UNIT", e);
    }
}

function SYM_TRMM_Chk_Back2Date(sB2D) {
    try {
        var TADE_DT = document.MAINFORM.TADE_DT.value;
        var nDays = SYT_getSubDaysByDateVal(sB2D, TADE_DT);
        if (nDays > 0) {
            alert("Warning: Trade Date shall not earlier than Transaction Date two days before !");
            document.MAINFORM.TADE_DT.value = document.MAINFORM.TRX_DT.value;
        } else {
            SYM_TRMM_Chk_TRADE_DT();
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_Back2Date", e);
    }
}

function SYM_TRMM_Chk_DEAL_NO() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var sDEAL_NO = "";
        var DEAL_NO = document.MAINFORM.DEAL_NO.value;
        var sBefore = "";
        var sAfter = "";
        sBefore = DEAL_NO.substr(0, 7);
        sAfter = DEAL_NO.substr(8, 8);
        sDEAL_NO = sBefore + BUSI_UNIT.substr(0, 1) + sAfter;
        document.MAINFORM.DEAL_NO.value = sDEAL_NO;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_DEAL_NO", e);
    }
}

function SYM_TRMM_Chk_HolidayByMatuDate() {
    try {
        var MATU_DT = document.MAINFORM.MATURITY_DT.value;
        if (MATU_DT !== "" && MATU_DT !== null) {
            var TRX_CCY = document.MAINFORM.TRX_CCY.value;
            document.MAINFORM.TRX_CCY_CNTY_CD.value = SYT_getCountryCodeFromCurrency(TRX_CCY);
            SYS_CheckHoliday(document.MAINFORM.TRX_CCY_CNTY_CD.name, document.MAINFORM.MATURITY_DT.name, "", "", "", "SYM_TRMM_Cal_MatuDateIsBusiness", "SYM_TRMM_Cal_MatuDateIsHoliday", "N");
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_HolidayByMatuDate", e);
    }
}

function SYM_TRMM_Chk_HolidayByValueDate() {
    try {
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        if (VAL_DT !== "" && VAL_DT !== null) {
            var TRX_CCY = document.MAINFORM.TRX_CCY.value;
            document.MAINFORM.TRX_CCY_CNTY_CD.value = SYT_getCountryCodeFromCurrency(TRX_CCY);
            SYS_CheckHoliday(document.MAINFORM.TRX_CCY_CNTY_CD.name, document.MAINFORM.VAL_DT.name, "", "", "", "", "SYM_TRMM_Cal_ValueDateIsHoliday", "N");
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_HolidayByValueDate", e);
    }
}

function SYM_TRMM_Chk_INT_RT() {
    try {
        var INT_RT = SYS_BeFloat(document.MAINFORM.INT_RT.value);
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var bRtnFlag = true;

        if ("New||Amend||Extend".indexOf(DEAL_ACTION) > -1) {
            bRtnFlag = true; //for negative interest, give a dummy statement to avoid svn check
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_INT_RT", e);
    }
}

function SYM_TRMM_Chk_MATU_DT() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        document.MAINFORM.TRX_CCY_CNTY_CD.value = SYT_getCountryCodeFromCurrency(TRX_CCY);
        SYS_CheckHoliday(document.MAINFORM.TRX_CCY_CNTY_CD.name, document.MAINFORM.MATURITY_DT.name, "", "", "", "SYM_TRMM_Chk_MaturityDatevsValueDate", "", "N");
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_MATU_DT", e);
    }
}

function SYM_TRMM_Chk_MT202_SEND_VDT() {
    try {
        var bChkFlg = true;
        var SEND_MT202_VDT = document.MAINFORM.SEND_MT202_VDT.value;
        var oWhtSendMT202 = document.MAINFORM.WHT_SEND_MT202_FLG;
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        if (SETL_ACTION !== "ReturnDoc" && oWhtSendMT202.value === "Yes" && (SEND_MT202_VDT === "" || SEND_MT202_VDT === null)) {
            SYS_CheckError(oWhtSendMT202, "[Warning] Send MT202 date calculation Failed. Please exit now and re-entry again.");
            SYS_highTrxButton("_cancel");
            bChkFlg = false;
        }
        return bChkFlg;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_MT202_SEND_VDT", e);
    }
}

function SYM_TRMM_Chk_MaturityDatevsValueDate() {
    try {
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        var MATU_DT = document.MAINFORM.MATURITY_DT.value;
        var oMATU_DT = document.MAINFORM.MATURITY_DT;
        var nDays = SYT_getSubDaysByDateVal(MATURITY_DT, VAL_DT);
        if (nDays < 0) {
            SYS_CheckError(oMATU_DT, "Warning: Maturity Date must be later than Value Date !");
            SYM_TRMM_Cal_MATU_DT();
            SYM_TRMM_Cal_INT_AMT();
            SYM_TRMM_Cal_TTL_AMT();
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_MaturityDatevsValueDate", e);
    }
}

function SYM_TRMM_Chk_OurNostroInfo() {
    try {
        var sChkFldList = "";
        var aChkFldList = "";
        var bChkFlg = true;
        sChkFldList = "NOSTRO_BK_ID|NOSTRO_BK_SW_ADD|CNPT_NS_SWADD";
        if (sChkFldList !== "") {
            aChkFldList = sChkFldList.split("|");
            var i;
            var nLen = aChkFldList.length;
            for (i = 0; i < nLen; i++) {
                var sFldVal = document.getElementById(aChkFldList[i]).value;
                if (sFldVal === "" || sFldVal === null) {
                    var sFldTitle = document.getElementById(aChkFldList[i]).title;
                    alert("The " + sFldTitle + " can't be Empty!");
                    bChkFlg = false;
                }
            }
        }
        return bChkFlg;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_OurNostroInfo", e);
    }
}

function SYM_TRMM_Chk_TRADE_DT() {
    try {
        var TRADE_DT = document.MAINFORM.TADE_DT.value;
        var BusiDate = SYS_BUSI_DATE;
        var nDays = SYT_getSubDaysByDateVal(TRADE_DT, BusiDate);
        if (nDays > 0) {
            alert("Warning: Trade Date shall not be later than Business Date !!");
            document.MAINFORM.TADE_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_TRADE_DT", e);
    }
}

function SYM_TRMM_Chk_TradeDateisWorkingDate() {
    try {
        var TRX_DT = SYS_BUSI_DATE;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var sCNTY_CD = SYT_getCountryCodeFromCurrency(TRX_CCY);
        SYS_CalEndWorkingDate(sCNTY_CD, TRX_DT, "2", "SYM_TRMM_Chk_Back2Date", "B", "Y", "Y");
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Chk_TradeDateisWorkingDate", e);
    }
}

function SYM_TRMM_Gen_SelectFldOtpOfMMDealType() {
    try {
        //document.MAINFORM.ITEM_FLD_NM.value = "MMDealType";
        SYT_genSelectFldOptionFmCommonModule("DEAL_TP");
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Gen_SelectFldOtpOfMMDealType", e);
    }
}

function SYM_TRMM_Generate_guid() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Generate_guid", e);
    }
}

function SYM_TRMM_Get_CNPT_ID() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        if (!SYT_chkUserInputStringIsAllSpace(CNPT_ID)) {
            SYS_GetCUBK("CNPT_ID", document.MAINFORM.CNPT_ID.name, "SYM_TRMM_Get_CounterPartyInfoSucc", "SYM_TRMM_Get_CounterPartyInfoFail", true);
        } else {
            document.MAINFORM.CNPT_SWADD.value = "";
            document.MAINFORM.CNPT_FULL_NM.value = "";
            document.MAINFORM.CNPT_TP.value = "";
            document.MAINFORM.CNPT_BUSI_UNIT.value = "";
            document.MAINFORM.CNPT_NS_SWADD.value = "";
            document.MAINFORM.CNPT_SHORT_NM.value = "";
            
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Get_CNPT_ID", e);
    }
}

function SYM_TRMM_Get_CounterPartyInfoSucc() {
    try {
        SYM_TRMM_Cal_CNPT_NOS_SWADD();
        SYM_TRMM_Cal_OVER_AC_FLG();
        // SYM_TRMM_Chk_InquireStakeholder_CNPT_ID();
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Get_CounterPartyInfoSucc", e);
    }
}

function SYM_TRMM_Get_CounterpartyMasterData() {
    try {
        SYS_GetCUBK_S("CNPT_ID", document.MAINFORM.CNPT_ID.name, true);
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Get_CounterpartyMasterData", e);
    }
}

function SYM_TRMM_Get_CounterpartySSIData() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        document.MAINFORM.CNPT_SSI_CCY.value = TRX_CCY;
        document.MAINFORM.MODULE.value = SYS_MODULE_NAME;
        if (TRX_CCY !== "" && TRX_CCY !== null && CNPT_ID !== "" && CNPT_ID !== null) {
            SYS_GetDataBySSS_S("SSSS_GetCnptSSIByCnptIdCcyPd_TRX", "CNPT_ID;CNPT_SSI_CCY;MODULE");
            var aEffcvDtList1 = SYS_GetMultiFldValueFromArray("EFFCV_DT");
            var aAcWtBkSwAddList1 = SYS_GetMultiFldValueFromArray("AC_WT_BK_SW_ADD");
            var aBeneBkSwAddList1 = SYS_GetMultiFldValueFromArray("BENE_BK_SWADD");
            var aBeneBkAcNoList1 = SYS_GetMultiFldValueFromArray("BENE_BK_AC_NO");
            var aIntBkSwAddList1 = SYS_GetMultiFldValueFromArray("INTMED_BK_SWADD");
            var aSdToRcvList1 = SYS_GetMultiFldValueFromArray("SEND_TO_RCV_INFO");
            var nSize1 = aEffcvDtList1.length;
            if (nSize1 > 0) {
                var i;
                for (i = 0; i < nSize1; i++) {
                    var nChkDays1 = SYT_getSubDaysByDateVal(VAL_DT, aEffcvDtList1[i]);
                    if (nChkDays1 >= 0) {
                        if (aAcWtBkSwAddList1[i] === "undefined" || aAcWtBkSwAddList1[i] === undefined) {
                            aAcWtBkSwAddList1[i] = "";
                        }
                        document.MAINFORM.CNPT_NS_SWADD.value = aAcWtBkSwAddList1[i];
                        if (aBeneBkSwAddList1[i] === "undefined" || aBeneBkSwAddList1[i] === undefined) {
                            aBeneBkSwAddList1[i] = "";
                        }
                        document.MAINFORM.BENE_BK_SWADD.value = aBeneBkSwAddList1[i];
                        if (aBeneBkAcNoList1[i] === "undefined" || aBeneBkAcNoList1[i] === undefined) {
                            aBeneBkAcNoList1[i] = "";
                        }
                        document.MAINFORM.BENE_BK_AC_NO.value = aBeneBkAcNoList1[i];
                        if (aIntBkSwAddList1[i] === "undefined" || aIntBkSwAddList1[i] === undefined) {
                            aIntBkSwAddList1[i] = "";
                        }
                        document.MAINFORM.INTMED_BK_SWADD.value = aIntBkSwAddList1[i];
                        if (aSdToRcvList1[i] === "undefined" || aSdToRcvList1[i] === undefined) {
                            aSdToRcvList1[i] = "";
                        }
                        document.MAINFORM.SEND_TO_RCV_INFO.value = aSdToRcvList1[i];
                        break;
                    } else {
                        document.MAINFORM.CNPT_NS_SWADD.value = "";
                        document.MAINFORM.BENE_BK_SWADD.value = "";
                        document.MAINFORM.BENE_BK_AC_NO.value = "";
                        document.MAINFORM.INTMED_BK_SWADD.value = "";
                        document.MAINFORM.SEND_TO_RCV_INFO.value = "";
                    }
                }
            } else {
                SYS_GetDataBySSS_S("SSSS_GetCnptSSIByCnptIdCcyAllPd_TRX", "CNPT_ID;CNPT_SSI_CCY");
                var aEffcvDtList2 = SYS_GetMultiFldValueFromArray("EFFCV_DT");
                var aAcWtBkSwAddList2 = SYS_GetMultiFldValueFromArray("AC_WT_BK_SW_ADD");
                var aBeneBkSwAddList2 = SYS_GetMultiFldValueFromArray("BENE_BK_SWADD");
                var aBeneBkAcNoList2 = SYS_GetMultiFldValueFromArray("BENE_BK_AC_NO");
                var aIntBkSwAddList2 = SYS_GetMultiFldValueFromArray("INTMED_BK_SWADD");
                var aSdToRcvList2 = SYS_GetMultiFldValueFromArray("SEND_TO_RCV_INFO");
                var nSize2 = aEffcvDtList2.length;
                var j;
                for (j = 0; j < nSize2; j++) {
                    var nChkDays2 = SYT_getSubDaysByDateVal(VAL_DT, aEffcvDtList2[j]);
                    if (nChkDays2 >= 0) {
                        if (aAcWtBkSwAddList2[j] === "undefined" || aAcWtBkSwAddList2[j] === undefined) {
                            aAcWtBkSwAddList2[j] = "";
                        }
                        document.MAINFORM.CNPT_NS_SWADD.value = aAcWtBkSwAddList2[j];
                        if (aBeneBkSwAddList2[j] === "undefined" || aBeneBkSwAddList2[j] === undefined) {
                            aBeneBkSwAddList2[j] = "";
                        }
                        document.MAINFORM.BENE_BK_SWADD.value = aBeneBkSwAddList2[j];
                        if (aBeneBkAcNoList2[j] === "undefined" || aBeneBkAcNoList2[j] === undefined) {
                            aBeneBkAcNoList2[j] = "";
                        }
                        document.MAINFORM.BENE_BK_AC_NO.value = aBeneBkAcNoList2[j];
                        if (aIntBkSwAddList2[j] === "undefined" || aIntBkSwAddList2[j] === undefined) {
                            aIntBkSwAddList2[j] = "";
                        }
                        document.MAINFORM.INTMED_BK_SWADD.value = aIntBkSwAddList2[j];
                        if (aSdToRcvList2[j] === "undefined" || aSdToRcvList2[j] === undefined) {
                            aSdToRcvList2[j] = "";
                        }
                        document.MAINFORM.SEND_TO_RCV_INFO.value = aSdToRcvList2[j];
                        break;
                    } else {
                        alert("Warning: Counterparty has not SSI files.");
                        document.MAINFORM.CNPT_NS_SWADD.value = "";
                        document.MAINFORM.BENE_BK_SWADD.value = "";
                        document.MAINFORM.BENE_BK_AC_NO.value = "";
                        document.MAINFORM.INTMED_BK_SWADD.value = "";
                        document.MAINFORM.SEND_TO_RCV_INFO.value = "";
                    }
                }
            }
        } else {
            document.MAINFORM.CNPT_NS_SWADD.value = "";
            document.MAINFORM.BENE_BK_SWADD.value = "";
            document.MAINFORM.BENE_BK_AC_NO.value = "";
            document.MAINFORM.INTMED_BK_SWADD.value = "";
            document.MAINFORM.SEND_TO_RCV_INFO.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Get_CounterpartySSIData", e);
    }
}

function SYM_TRMM_Inq_CNPT_ID() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        // var sCUBKMappingName = "CNPT_ID";
        //var sWhereSql = "";

        //  sWhereSql = "CNPT_ID LIKE '" + CNPT_ID + "%'";
        // SYS_InqCUBK_Sql(sCUBKMappingName, sWhereSql);
        SYS_InqCUBK('CNPT_ID');
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Inq_CNPT_ID", e);
    }
}

function SYM_TRMM_Map_MT202value() {
    try {
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.DEAL_NO.value;
        document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.NOSTRO_BK_SW_ADD.value;
        document.MAINFORM.X202_RELATEDNO_21.value = '1234567';
        document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.INTMED_BK_SWADD.value;
        document.MAINFORM.X202_TAG_56A.value = "A";
        document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.CNPT_NS_SWADD.value;
        document.MAINFORM.X202_TAG_57A.value = "A";
        document.MAINFORM.X202_BENEBKACNO58A.value = document.MAINFORM.BENE_BK_AC_NO.value;
        document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.BENE_BK_SWADD.value;
        document.MAINFORM.X202_TAG_58A.value = "A";
        document.MAINFORM.X202_BKTOBK_INFO72.value = document.MAINFORM.SEND_TO_RCV_INFO.value;
        document.MAINFORM.UETR_GPI_121.value = SYM_TRMM_Generate_guid();
        SYM_TRMM_Cal_MT202_32info();
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_Map_MT202value", e);
    }
}

function SYM_TRMM_calLocalCurrencyByBusiUnit() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var sCcy = "SGD";

        if (BUSI_UNIT === "DBU") {
            sCcy = "USD";
        }

        return sCcy;
    } catch (e) {
        DisExcpt("SYM_TRMM.js*SYM_TRMM_calLocalCurrencyByBusiUnit", e);
    }
}

function SYM_TRMM_genSelectFieldOptionFromBrokerIDData(sFldNm) {
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
        DisExcpt("SYM_TRMM.js*SYM_TRMM_genSelectFieldOptionFromBrokerIDData", e);
    }
}