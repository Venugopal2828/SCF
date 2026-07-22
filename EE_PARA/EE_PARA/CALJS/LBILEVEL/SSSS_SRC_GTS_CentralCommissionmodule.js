"path:SCRN/Library/FFIT/GTS_CentralCommissionmodule.lbi";

var csLbiCompProto = {};

var BUSI_TYPE_GL = 'GL';
var CUST_ID = '';
var custidArrCUBK = '';
var feeAmtName = '';
var feeName = 0;
var feeNumber = '';
var fieldText1 = '';
var fieldText2 = '';
var fieldText3 = '';
var groupID = '';
var id_counter = 0;
var initdisplayflg = 0;
var lastFeeNumber = 0;
var mthdText1 = '';
var mthdText2 = '';
var mthdText3 = '';
var mthdText4 = '';
var mthdText5 = '';
var nowNumber = 0;
var sBankIdCUBK = '';
var sCntyCodeCUBK = '';
var sellingRate = '';
var trxCcySellingRT = '';
var usdRt = 1;

csLbiCompProto.Add_LastRow = function() {
    try {
        var i; // Utility Auto Fix Comments
        var newCell; // Utility Auto Fix Comments
        var newRow; // Utility Auto Fix Comments
        var numberfee; // Utility Auto Fix Comments
        numberfee = SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value);
        for (i = numberfee; i < SYS_BeFloat(numberfee) + SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i++) { // Utility Auto Fix Comments
            newRow = '';
            newCell = '';
            newRow = ChgforAccount_DLY.insertRow(-1);
            newCell = newRow.insertCell(0);
            newCell.innerHTML = "<tr class='td_gray'><td align='center'  class='td_gray' ><input  type='hidden' name='CHG_DESC_" + i + "'id='CHG_DESC_" + i + "' class='CHAR_P' title='CHG_DESC_" + i + "' size='16' maxlength='18'> </td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(1);
            newCell.innerHTML = "<td align='center'><input type='hidden' name='CHG_CCY_" + i + "'  title='CHG_CCY_" + i + "' size='3' maxlength='3' class='CHAR_P'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(2);
            newCell.innerHTML = "<td align='center'><input type='hidden' name='LEDG_CODE_" + i + "' class='CHAR_O' id='LEDG_CODE_" + i + "' title='LEDG_CODE_" + i + "' size='12'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(3);
            newCell.innerHTML = "<td align='center'><input  type='hidden'name='TEMP_ID_" + i + "' class='CHAR_O' id='TEMP_ID_" + i + "' title='TEMP_ID_" + i + "' size='12'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(4);
            newCell.innerHTML = "<td align='center'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(5);
            newCell.innerHTML = "<td align='center'><select style='display:none ' name='CHG_BY_" + i + "' size='1' class='CHAR_O' id='CHG_BY_" + i + "' title='CHG_BY" + i + "' onChange='CHG_BY_onchange(this.name)' ><option value=''></option><option value='Our Customer'>" + fieldText1 + "</option> <option value='Counter Party'>" + fieldText2 + "</option><option value='Second Bene'>" + fieldText3 + "</option></select></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(6);
            newCell.innerHTML = "<td align='center'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(7);
            newCell.innerHTML = "<td align='center'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(8);
            newCell.innerHTML = "<td align='center' style='display:none '></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';


            newCell = newRow.insertCell(9);
            newCell.innerHTML = "<td align='center'><input type='hidden'name='CHG_AMT_BA_" + i + "' class='AMT_O' title='CHG_AMT_BA_" + i + "' size='12' maxlength='18' value='0.00'><input type='hidden'name='CHG_CNY_CCY_" + i + "' class='CHAR_O' title='CHG_CNY_CCY_" + i + "' size='4' maxlength='4' onchange='CHG_CNY_CCY_onchange(this.name)'><input type='hidden' name='CHG_AMT_HO_" + i + "' class='AMT_O' title='CHG_AMT_HO_" + i + "' size='12' maxlength='18' value=0.00 onchange='CHG_AMT_HO_onchange(this.name)'><input type='hidden'name='CHG_AMT_BR_" + i + "' class='AMT_O' title='CHG_AMT_BR_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_BR_onchange(this.name)'><input type='hidden'name='CHG_AMT_CUST_" + i + "' class='AMT_O' title='CHG_AMT_CUST_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_CUST_onchange(this.name)'><br><input type='hidden'name='CHG_USD_CCY_" + i + "' class='CHAR_O' title='CHG_USD_CCY_" + i + "' size='4' maxlength='4' onchange='CHG_USD_CCY_onchange(this.name)'><input type='hidden'name='CHG_USD_HO_" + i + "' class='AMT_O' title='CHG_USD_HO_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_USD_HO_onchange(this.name)'><input type='hidden'name='CHG_USD_BR_" + i + "' class='AMT_O' title='CHG_USD_BR_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_USD_BR_onchange(this.name)'><input type='hidden'name='BANA_" + i + "' class='CHAR_O' title='BANA_" + i + "' size='3' maxlength='3' value='Y'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            lastFeeNumber = i;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.BANA = function() {
    try {
        var i; // Utility Auto Fix Comments
        for (i = 0; i < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i++) {
            rcvamtnm = 'RCV_AMT_' + i;
            rcvamtObject = getObject(rcvamtnm, 'RCV_AMT_');
            bananm = 'BANA_' + i;
            banaObject = getObject(rcvamtnm, 'BANA_');
            dlyamtnm = 'DLY_AMT_' + i;
            dlyamtObject = getObject(dlyamtnm, 'DLY_AMT_');
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            chgfavrmbnm = 'CHG_FAV_RMB_' + i;
            chgfavrmbObject = getObject(chgfavrmbnm, 'CHG_FAV_RMB_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgbynm = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbynm, 'CHG_BY_');
            chgbylastnm = 'CHG_BY_LAST_' + i;
            chgbylastObject = getObject(chgbylastnm, 'CHG_BY_LAST_');
            chgfavrtnm = 'CHG_FAV_RT_' + i;
            chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
            chgdescnm = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            chgccynm = 'CHG_CCY_' + i;
            chgccyObject = getObject(chgccynm, 'CHG_CCY_');
            chgccylastnm = 'CHG_CCY_LAST_' + i;
            chgccylastObject = getObject(chgccylastnm, 'CHG_CCY_LAST_');
            if ((SYS_BeFloat(chgfavrmbObject.value) > 0) || (chgmthdObject.value == 'WRITEOFF') || SYS_BeFloat(rcvamtObject.value) > 0 || chgbyObject.value != chgbylastObject.value ||
                (chgccyObject.value != chgccylastObject.value)) {
                banaObject.value = 'N';
            } else {
                banaObject.value = 'Y';
            }
            if (SYS_MODULE_NAME == 'FFIT' && chgmthdObject.value == 'DEFERRED' && chgdescObject.value == 'CommitmentChg') {
                banaObject.value = 'Y';
            }
        }
        for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < document.MAINFORM.FEE_NUMBER.value; i++) {
            rcvamtnm = 'RCV_AMT_' + i;
            rcvamtObject = getObject(rcvamtnm, 'RCV_AMT_');
            bananm = 'BANA_' + i;
            banaObject = getObject(rcvamtnm, 'BANA_');
            dlyamtnm = 'DLY_AMT_' + i;
            dlyamtObject = getObject(dlyamtnm, 'DLY_AMT_');
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            chgfavrmbnm = 'CHG_FAV_RMB_' + i;
            chgfavrmbObject = getObject(chgfavrmbnm, 'CHG_FAV_RMB_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgfavrtnm = 'CHG_FAV_RT_' + i;
            chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
            chgdescnm = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            if ((SYS_BeFloat(chgamtoriginObject.value) > 0 && (SYS_BeFloat(rcvamtObject.value) > 0 || SYS_BeFloat(dlyamtObject.value) > 0)) || (SYS_BeFloat(chgfavrmbObject.value) > 0)) {
                banaObject.value = 'N';
            } else {
                banaObject.value = 'Y';
            }

            if (SYS_MODULE_NAME == 'FFIT' && (chgmthdObject.value == 'DEFERRED' || chgmthdObject.value == 'TERM') && chgdescObject.value == 'CommitmentChg') {
                banaObject.value = 'Y';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.BA_AddRow = function(id_counter) {
    try {
        var newCell; // Utility Auto Fix Comments
        var newRow; // Utility Auto Fix Comments
        SelectText();
        newRow = '';
        newCell = '';
        newRow = ChgforAccount_DLY.insertRow(-1);
        newCell = newRow.insertCell(0);
        newCell.innerHTML = "<tr class='td_gray'><td align='center'  class='td_gray' ><input  type='text'name='CHINESE_DESC_" + id_counter + "'id='CHINESE_DESC_" + id_counter + "' class='CHAR_P' title='CHINESE_DESC_" + id_counter + "' size='16' maxlength='54'  value='' readonly><input  type='hidden' name='CHG_DESC_" + id_counter + "'id='CHG_DESC_" + id_counter + "' class='CHAR_P' title='CHG_DESC_" + id_counter + "' size='16' maxlength='18'> <input type='hidden' name='ORDER_" + id_counter + "'  title='ORDER_" + id_counter + "' class='CHAR_P' value='" + id_counter + "'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(1);
        newCell.innerHTML = "<td align='center'><input type='text' name='CHG_CCY_" + id_counter + "'  title='CHG_CCY_" + id_counter + "' size='3' maxlength='3' class='CHAR_P' onChange='CHG_CCY_onchange(this.name)' readonly><input type='hidden' name='CHG_CCY_RT_" + id_counter + "'  title='CHG_CCY_RT_" + id_counter + "' size='3' maxlength='3' class='RATE_O'  onChange='CHG_CCY_RT_onchange(this.name)'>&nbsp;" + "<input name='CHG_AMT_ORIGIN_" + id_counter + "' class='AMT_P' title='CHG_AMT_ORIGIN_" + id_counter + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_ORIGIN_onchange(this.name)' readonly><input type='hidden' name='CHG_AMT_SHOW_" + id_counter + "' class='AMT_O' title='CHG_AMT_SHOW_" + id_counter + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_SHOW_onchange(this.name)' ><input type='hidden'name='CHG_AMT_TEMP_" + id_counter + "' class='AMT_O' title='CHG_AMT_TEMP_" + id_counter + "' size='12' maxlength='18' value='0.00'><input type='hidden' name='CHG_CCY_TEMP_" + id_counter + "'  title='CHG_CCY_TEMP_" + id_counter + "' size='3' maxlength='3' class='CHAR_O'></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(2);
        newCell.innerHTML = "<td align='center'><input type='text' name='RCV_CCY_" + id_counter + "'  title='RCV_CCY_" + id_counter + "'  id='RCV_CCY_" + id_counter + "'size='3' maxlength='3' class='CHAR_P'  onChange='RCV_CCY_onchange(this.name)' readonly><input type='hidden' name='RCV_CCY_RT" + id_counter + "'  title='RCV_CCY_RT_" + id_counter + "'  id='RCV_CCY_RT_" + id_counter + "'size='3' maxlength='3' class='RATE_O'  onChange='RCV_CCY_RT_onchange(this.name)' >&nbsp;" + "<input name='RCV_AMT_" + id_counter + "'  id='RCV_AMT_" + id_counter + "' class='AMT_P' title='RCV_AMT_" + id_counter + "' size='12' maxlength='18'  value='0.00'   onChange='RCV_AMT_onchange(this.name)' readonly></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(3);
        newCell.innerHTML = "<td align='center'><input name='RCV_EQ_AMT_TEMP_" + id_counter + "'  id='RCV_EQ_AMT_TEMP_" + id_counter + "' class='AMT_O' title='RCV_EQ_AMT_TEMP_" + id_counter + "' size='12' maxlength='18'  value='0.00'   onChange='RCV_EQ_AMT_TEMP_onchange(this.name)'></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(4);
        newCell.innerHTML = "<td align='center'><input type='text' name='DLY_CCY_" + id_counter + "' class='CHAR_P' title='DLY_CCY_" + id_counter + "' id='DLY_CCY_" + id_counter + "' size='3' maxlength='3' onchange='DLY_CCY_onchange(this.name)' readonly>&nbsp;" + "<input name='DLY_AMT_" + id_counter + "' class='AMT_P' title='DLY_AMT_" + id_counter + "' size='12' maxlength='18'  value='0.00' onchange='DLY_AMT_onchange(this.name)' readonly></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(5);
        newCell.innerHTML = "<td align='center'><select name='CHG_BY_" + id_counter + "' size='1' class='CHAR_O' id='CHG_BY_" + id_counter + "' title='CHG_BY" + id_counter + "' onChange='CHG_BY_onchange(this.name)' ><option value=''></option><option value='Our Customer'>" + fieldText1 + "</option> <option value='Counter Party'>" + fieldText2 + "</option><option value='Second Bene'>" + fieldText3 + "</option></select></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(6);
        newCell.innerHTML = "<td align='center'><select name='CHG_MTHD_" + id_counter + "' size='1' class='CHAR_O' id='CHG_MTHD_" + id_counter + "' onChange='CHG_MTHD_onchange(this.name)' ><option value=''></option><option value='TRANSACTION'>" + mthdText1 + "</option><option value='TERM'>" + mthdText2 + "</option> <option value='DEFERRED'>" + mthdText3 + "</option><option value='FREE'>" + mthdText4 + "</option><option value='WRITEOFF'>" + mthdText5 + "</option></select></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(7);
        newCell.innerHTML = "<td align='center'><input  type='hidden' name='CHG_FAV_RT_" + id_counter + "' class='RATE_O' id='CHG_FAV_RT_" + id_counter + "' title='CHG_FAV_RT_" + id_counter + "' size='3' maxlength='3'  value='0' onchange='CHG_FAV_RT_onchange(this.name)' ><input name='CHG_FAV_RMB_" + id_counter + "' class='AMT_P' id='CHG_FAV_RMB_" + id_counter + "' title='CHG_FAV_RMB_" + id_counter + "' size='12' maxlength='18'  value='0.00' onchange='CHG_FAV_RMB_onchange(this.name)' readonly><input type='Button' name='SHOW_TIME_" + id_counter + "' value='Time' onClick='SET_BUTTON_onclick(this.name)'><input  type='hidden'name='CHG_TEMP_RMB_" + id_counter + "' class='AMT_P' id='CHG_TEMP_RMB_" + id_counter + "' title='CHG_TEMP_RMB_" + id_counter + "' size='12' maxlength='18'  value='0.00'  ></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(8);
        newCell.innerHTML = "<td align='center' style='display:none '><input type='hidden' name='CHG_EXCH_RT_" + id_counter + "'  title='CHG_EXCH_RT_" + id_counter + "'  id='CHG_EXCH_RT_" + id_counter + "'size='3' maxlength='3' class='RATE_O'  onchange='CHG_EXCH_RT_onchange(this.name)'><input type='hidden' name='TRX_AMT_" + id_counter + "' class='AMT_O' id='TRX_AMT_" + id_counter + "' title='TRX_AMT_" + id_counter + "' size='12' maxlength='18' value=0><input  type='hidden' name='TRX_RT_" + id_counter + "' class='RATE_O' id='TRX_RT_" + id_counter + "' title='TRX_RT_" + id_counter + "' size='10' maxlength='10'><input  type='hidden' name='PERIOD_" + id_counter + "' class='INT_O' id='PERIOD_" + id_counter + "' title='PERIOD_" + id_counter + "' size='10' maxlength='10' value=0><input type='hidden'name='TRX_CCY_" + id_counter + "' class='CHAR_O' id='TRX_CCY_" + id_counter + "' title='TRX_CCY_" + id_counter + "' size='4' maxlength='4'><input type='hidden'name='FEE_NAME_" + id_counter + "' class='CHAR_O' id='FEE_NAME_" + id_counter + "' title='FEE_NAME_" + id_counter + "' size='20' maxlength='20'></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(9);
        newCell.innerHTML = "<td align='center' style='display:none '><input type='hidden' name='CHG_VCH_ACNO_" + id_counter + "'  title='CHG_VCH_ACNO_" + id_counter + "'  id='CHG_VCH_ACNO_" + id_counter + "'size='20' maxlength='20' class='CHAR_O' ><input type='hidden' name='CHG_VCH_AMT_" + id_counter + "' class='AMT_O' id='CHG_VCH_AMT_" + id_counter + "' title='CHG_VCH_AMT_" + id_counter + "' size='12' maxlength='18'><input  type='hidden' name='CHG_VCH_CCY_" + id_counter + "' class='CHAR_O' id='CHG_VCH_CCY_" + id_counter + "' title='CHG_VCH_CCY_" + id_counter + "' size='3' maxlength='3'><input  type='hidden' name='COUNT_CODE_" + id_counter + "' class='CHAR_O' id='COUNT_CODE_" + id_counter + "' title='COUNT_CODE_" + id_counter + "' size='20' maxlength='20'><input  type='hidden' name='PROD_CODE_" + id_counter + "' class='CHAR_O' id='PROD_CODE_" + id_counter + "' title='PROD_CODE_" + id_counter + "' size='20' maxlength='20'><input  type='hidden' name='CHG_PROD_CODE_" + id_counter + "' class='CHAR_O' id='CHG_PROD_CODE_" + id_counter + "' title='CHG_PROD_CODE_" + id_counter + "' size='20' maxlength='20'></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(10);
        newCell.innerHTML = "<td align='center'><input type='hidden'name='CHG_AMT_BA_" + id_counter + "' class='AMT_O' title='CHG_AMT_BA_" + id_counter + "' size='12' maxlength='18' value='0.00'><input type='hidden'name='CHG_CNY_CCY_" + id_counter + "' class='CHAR_O' title='CHG_CNY_CCY_" + id_counter + "' size='4' maxlength='4' onchange='CHG_CNY_CCY_onchange(this.name)'><input type='hidden' name='CHG_AMT_HO_" + id_counter + "' class='AMT_O' title='CHG_AMT_HO_" + id_counter + "' size='12' maxlength='18' value=0.00 onchange='CHG_AMT_HO_onchange(this.name)'><input type='hidden'name='CHG_AMT_BR_" + id_counter + "' class='AMT_O' title='CHG_AMT_BR_" + id_counter + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_BR_onchange(this.name)'><input type='hidden'name='CHG_AMT_CUST_" + id_counter + "' class='AMT_O' title='CHG_AMT_CUST_" + id_counter + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_CUST_onchange(this.name)'><br><input type='hidden'name='CHG_USD_CCY_" + id_counter + "' class='CHAR_O' title='CHG_USD_CCY_" + id_counter + "' size='4' maxlength='4' onchange='CHG_USD_CCY_onchange(this.name)'><input type='hidden'name='CHG_USD_HO_" + id_counter + "' class='AMT_O' title='CHG_USD_HO_" + id_counter + "' size='12' maxlength='18' value='0.00' onchange='CHG_USD_HO_onchange(this.name)'><input type='hidden'name='CHG_USD_BR_" + id_counter + "' class='AMT_O' title='CHG_USD_BR_" + id_counter + "' size='12' maxlength='18' value='0.00' onchange='CHG_USD_BR_onchange(this.name)'><input type='hidden'name='BANA_" + id_counter + "' class='CHAR_O' title='BANA_" + id_counter + "' size='3' maxlength='3' value='Y'></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(11);
        newCell.innerHTML = "<td align='center'><input type='hidden' name='RCV_EQ_AMT_" + id_counter + "'  id='RCV_EQ_AMT_" + id_counter + "' class='AMT_O' title='RCV_EQ_AMT_" + id_counter + "' size='12' maxlength='18'  value='0.00'   onChange='RCV_EQ_AMT_onchange(this.name)'></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';



        newRow = ChgforAccount_DLY.insertRow(-1);
        newCell = newRow.insertCell(0);
        newCell.innerHTML = "<td align='center'  class='td_gray' >LG ISSUE FEE Date</td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';

        newCell = newRow.insertCell(1);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text'name='START_DT_COMM_" + id_counter + "'  readonly='true' class='CHAR_P' id='START_DT_COMM_" + id_counter + "' title='START_DT_COMM_" + id_counter + "' size='12'></td> ";

        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(2);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text'name='END_DT_" + id_counter + "' class='CHAR_O' id='END_DT_" + id_counter + "' title='END_DT_" + id_counter + "' size='12'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(3);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text'name='COMM_FIELD_" + id_counter + "' class='CHAR_O' id='COMM_FIELD_" + id_counter + "' title='COMM_FIELD_" + id_counter + "' size='12'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(4);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text'name='TEMP_ID_" + id_counter + "' class='CHAR_O' id='TEMP_ID_" + id_counter + "' title='TEMP_ID_" + id_counter + "' size='12'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(5);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input type='text' name='LEDG_CODE_" + id_counter + "' class='CHAR_O' id='LEDG_CODE_" + id_counter + "' title='LEDG_CODE_" + id_counter + "' size='12'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(6);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input type='text' name='CHG_BY_LAST_" + id_counter + "' class='CHAR_O' id='CHG_BY_LAST_" + id_counter + "' title='CHG_BY_LAST_" + id_counter + "' size='12'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(7);
        newCell.innerHTML = "<td align='center'  class='td_gray' ><input type='text' name='CHG_CCY_LAST_" + id_counter + "' id='CHG_CCY_LAST_" + id_counter + "' title='CHG_CCY_LAST_" + id_counter + "' size='3' maxlength='3' class='CHAR_P'></td> ";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newCell = newRow.insertCell(8);
        newCell.innerHTML = "<td align='center'   style='display:none ' class='td_gray' ></td>";
        newCell.className = 'td_gray';
        newCell.align = 'center';
        newRow.style.display = 'none';
        newRow.id = 'time_' + id_counter;
        document.MAINFORM.FEE_NUMBER.value = id_counter + 1;
        document.MAINFORM.NOW_NUMBER.value = id_counter + 1;
        dlyNumber = id_counter;
        InitDisPlay();
        SelectRemoveText_DLY(id_counter);
        if (id_counter == 0) {
            TTLSelectText_DLY();
        }
        chgmthdnm = 'CHG_MTHD_' + id_counter;
        chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
        chgbyName = 'CHG_BY_' + id_counter;
        chgbyObject = getObject(chgbyName, 'CHG_BY_');
        SYT_ChangeFldClass(chgmthdObject, 'M');
        SYT_ChangeFldClass(chgbyObject, 'M');
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_AMT_BR_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_AMT_CUST_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_AMT_HO_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_AMT_ORIGIN_onchange = function(fieldName) {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_BGL_AC_NO = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_BUSI_TYPE = function() {
    try {
        document.MAINFORM.CHG_GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        if (document.MAINFORM.CUST_CHG_ACNO.value != '' && document.MAINFORM.CUST_CHG_ACNO_S.value != '' && document.MAINFORM.CUST_CHG_ACNO_S.value != BUSI_TYPE_GL && document.MAINFORM.CUST_CHG_CCY.value == 'USD') {
            document.MAINFORM.CHG_BUSI_TYPE1.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (document.MAINFORM.CUST_CHG_ACNO.value != '' && document.MAINFORM.CUST_CHG_ACNO_S.value != BUSI_TYPE_GL && document.MAINFORM.CUST_CHG_CCY.value != '' && document.MAINFORM.CUST_CHG_CCY.value != 'USD') {
            if (SYS_MODULE_NAME.indexOf("FINC") == -1) {
                document.MAINFORM.CHG_BUSI_TYPE1.value = INTERFACE_BANCS_DR_TRX_CODE + "|" + INTERFACE_BANCS_AC_TRX_CODE;
            } else {
                document.MAINFORM.CHG_BUSI_TYPE1.value = INTERFACE_BANCS_DR_TRX_CODE;
            }
        } else if (document.MAINFORM.CUST_CHG_ACNO.value != '' && document.MAINFORM.CUST_CHG_ACNO_S.value == BUSI_TYPE_GL) {
            document.MAINFORM.CHG_BUSI_TYPE1.value = INTERFACE_GL_TRX_CODE;
        } else {
            document.MAINFORM.CHG_BUSI_TYPE1.value = '';
        }
        if (EEHtml.getElementById('CUST_CHG_ACNO2').value != '' && document.MAINFORM.CUST_CHG_ACNO2_S.value != '' && document.MAINFORM.CUST_CHG_ACNO2_S.value != BUSI_TYPE_GL) {
            document.MAINFORM.CHG_BUSI_TYPE2.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (document.MAINFORM.CUST_CHG_ACNO2_S.value != '' && document.MAINFORM.CUST_CHG_ACNO2_S.value != BUSI_TYPE_GL && document.MAINFORM.CUST_CHG_CCY2.value != '' && document.MAINFORM.CUST_CHG_CCY.value != 'USD') {
            if (SYS_MODULE_NAME.indexOf("FINC") == -1) {
                document.MAINFORM.CHG_BUSI_TYPE2.value = INTERFACE_BANCS_DR_TRX_CODE + "|" + INTERFACE_BANCS_AC_TRX_CODE;
            } else {
                document.MAINFORM.CHG_BUSI_TYPE2.value = INTERFACE_BANCS_DR_TRX_CODE;
            }
        } else if (EEHtml.getElementById('CUST_CHG_ACNO2').value != '' && document.MAINFORM.CUST_CHG_ACNO2_S.value == BUSI_TYPE_GL) {
            document.MAINFORM.CHG_BUSI_TYPE2.value = INTERFACE_GL_TRX_CODE;
        } else {
            document.MAINFORM.CHG_BUSI_TYPE2.value = '';
        }
        if (document.MAINFORM.FOR_CHG_ACNO.value != '' && (document.MAINFORM.FOR_CHG_TYPE.value == '1' || document.MAINFORM.FOR_CHG_TYPE.value == '4')) {
            document.MAINFORM.CHG_FOR_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        } else if (document.MAINFORM.FOR_CHG_ACNO.value != '' && document.MAINFORM.FOR_CHG_TYPE.value == '2') {
            document.MAINFORM.CHG_FOR_BUSI_TYPE.value = INTERFACE_BANCS_BGLDR_TRX_CODE;
        } else if (document.MAINFORM.FOR_CHG_ACNO.value != '' && document.MAINFORM.FOR_CHG_TYPE.value == '3') {
            document.MAINFORM.CHG_FOR_BUSI_TYPE.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else {
            document.MAINFORM.CHG_FOR_BUSI_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_BY = function(callnm) {
    try {
        var q; // Utility Auto Fix Comments
        for (q = (SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)); q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
            chgbyName = 'CHG_BY_' + q;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            chgbyObject.value = document.MAINFORM.TTL_CHG_BY.value;
            getFeeFinal_Comm(q, '', callnm, document.MAINFORM.FEE_NUMBER.value);
            changeFieldClass(q);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_BY_DLY = function(callnm) {
    try {
        var q; // Utility Auto Fix Comments
        for (q = 0; q < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); q++) {
            chgbyName = 'CHG_BY_' + q;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            chgbyObject.value = document.MAINFORM.TTL_CHG_BY_DLY.value;
            getFeeFinal_Comm(q, '', callnm, document.MAINFORM.NOW_NUMBER.value);
            changeFieldClass(q);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_BY_LAST = function() {
    try {
        var i; // Utility Auto Fix Comments
        for (i = 0; i < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i++) {
            chgbynm = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbynm, 'CHG_BY_');
            chgbylastName = 'CHG_BY_LAST_' + i;
            chgbylastObject = getObject(chgbylastName, 'CHG_BY_LAST_');
            chgccynm = 'CHG_CCY_' + i;
            chgccyObject = getObject(chgccynm, 'CHG_CCY_');
            chgccylastName = 'CHG_CCY_LAST_' + i;
            chgccylastObject = getObject(chgccylastName, 'CHG_CCY_LAST_');
            chgbylastObject.value = chgbyObject.value;
            chgccylastObject.value = chgccyObject.value;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_BY_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
        changeFieldClass(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_CCY_RT_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_CNY_CCY_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_DR_AMT = function() {
    try {
        if (document.MAINFORM.CHG_INOUT_FLG.value == '') {
            document.MAINFORM.TTL_CUST_DR_AMT.value = SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY.value, document.MAINFORM.TTL_CUST_CHG_AMT.value);
            document.MAINFORM.TTL_FOR_DR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FOR_CHG_CCY.value, document.MAINFORM.TTL_FOR_CHG_AMT.value);
            document.MAINFORM.TTL_CUST_DR_AMT2.value = SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY2.value, document.MAINFORM.TTL_CUST_CHG_AMT2.value);
        } else if (document.MAINFORM.CHG_INOUT_FLG.value == 'OUT') {
            document.MAINFORM.TTL_CUST_DR_AMT.value = SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY.value, document.MAINFORM.TTL_CUST_CHG_AMT.value);
            document.MAINFORM.TTL_FOR_DR_AMT.value = 0.00;
            document.MAINFORM.TTL_CUST_DR_AMT2.value = SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY2.value, document.MAINFORM.TTL_CUST_CHG_AMT2.value);
        } else if (document.MAINFORM.CHG_INOUT_FLG.value == 'IN') {
            document.MAINFORM.TTL_CUST_DR_AMT.value = 0.00;
            document.MAINFORM.TTL_FOR_DR_AMT.value = 0.00;
            document.MAINFORM.TTL_CUST_DR_AMT2.value = 0.00;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_EC = function() {
    try {
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgamtoriginnm; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chgdescnm; // Utility Auto Fix Comments
        var chgfavrmbObject; // Utility Auto Fix Comments
        var chgfavrmbnm; // Utility Auto Fix Comments
        var chgflgnm; // Utility Auto Fix Comments
        var chgflgobject; // Utility Auto Fix Comments
        var countcodeObject; // Utility Auto Fix Comments
        var countcodenm; // Utility Auto Fix Comments
        var feenameObject; // Utility Auto Fix Comments
        var feenamenm; // Utility Auto Fix Comments
        var funcnamenm; // Utility Auto Fix Comments
        var funcnameobject; // Utility Auto Fix Comments
        var lastNumber; // Utility Auto Fix Comments
        var periodObject; // Utility Auto Fix Comments
        var periodnm; // Utility Auto Fix Comments
        var prodcodeObject; // Utility Auto Fix Comments
        var prodcodenm; // Utility Auto Fix Comments
        var trxamtObject; // Utility Auto Fix Comments
        var trxamtnm; // Utility Auto Fix Comments
        var trxccyObject; // Utility Auto Fix Comments
        var trxccynm; // Utility Auto Fix Comments
        var trxrtObject; // Utility Auto Fix Comments
        var trxrtnm; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'EC') {
            for (lastNumber = 0; lastNumber < document.MAINFORM.FEE_NUMBER.value; lastNumber++) {
                chgfavrmbnm = 'CHG_FAV_RMB_' + lastNumber;
            }
            chgfavrmbObject = getObject(chgfavrmbnm, 'CHG_FAV_RMB_');
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + lastNumber;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            feenamenm = 'FEE_NAME_' + lastNumber;
            feenameObject = getObject(feenamenm, 'FEE_NAME_');
            chgdescnm = 'CHG_DESC_' + lastNumber;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            trxamtnm = 'TRX_AMT_' + lastNumber;
            trxamtObject = getObject(trxamtnm, 'TRX_AMT_');
            trxrtnm = 'TRX_RT_' + lastNumber;
            trxrtObject = getObject(trxrtnm, 'TRX_RT_');
            periodnm = 'PERIOD_' + lastNumber;
            periodObject = getObject(periodnm, 'PERIOD_');
            trxccynm = 'TRX_CCY_' + lastNumber;
            trxccyObject = getObject(trxccynm, 'TRX_CCY_');
            countcodenm = 'COUNT_CODE_' + lastNumber;
            countcodeObject = getObject(countcodenm, 'COUNT_CODE_');
            prodcodenm = 'PROD_CODE_' + lastNumber;
            prodcodeObject = getObject(prodcodenm, 'PROD_CODE_');
            chgdescnm = 'CHG_DESC_' + lastNumber;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            funcnamenm = 'FUNC_NAME_' + lastNumber;
            funcnameobject = getObject(funcnamenm, 'FUNC_NAME_');
            chgflgnm = 'CHG_FLG_' + lastNumber;
            chgflgobject = getObject(chgflgnm, 'CHG_FLG_');
            if (SYS_BeFloat(chgfavrmbObject.value) > 0 || SYS_BeFloat(chgamtoriginObject.value) > 0) {
                if (lastNumber < document.MAINFORM.NOW_NUMBER.value) {
                    RCV_DLY_AMT(lastNumber, 'n', 'EC');
                } else if (lastNumber >= document.MAINFORM.NOW_NUMBER.value) {
                    if (funcnameobject.value == 'GetComm' && chgflgobject.value == 'Y') {
                        GetComm(feenameObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', '', 'EC', false, false);
                    } else if (funcnameobject.value == 'getLOFGFee' && chgflgobject.value == 'Y') {
                        getLOFGFee(feenameObject.value, chgdescObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '');
                    } else if (SYS_BeFloat(chgamtoriginObject.value) > 0 || SYS_BeFloat(chgfavrmbObject.value) >= 0) {
                        getFeeFinal_Comm(lastNumber, 'EC');
                    }
                }
            }
            if (lastNumber == SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value) - 1) {
                TTL_CHG_AMT();
                TTL_DLY_AMT();
                COMM_PAGE_ONCHANGE();
            }

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_EXCH_RT_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_FAV_RMB_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFavRmbTemp(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_FAV_RT_onchange = function(fieldName) {
    try {
        var chgdescObject; // Utility Auto Fix Comments
        var chgdescnm; // Utility Auto Fix Comments
        var chgfavrtObject; // Utility Auto Fix Comments
        var chgfavrtnm; // Utility Auto Fix Comments
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        chgfavrtnm = 'CHG_FAV_RT_' + lastNumber;
        chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
        chgdescnm = 'CHG_DESC_' + lastNumber;
        chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
        if (SYS_BeFloat(chgfavrtObject.value) > 0) {
            if (SYS_MODULE_NAME == 'EXLC')
                SYF_EXLC_FavFee_onchange(true, chgdescObject.value);
            else if (SYS_MODULE_NAME == 'EXCL')
                SYF_EXCL_FavFee_onchange(true, chgdescObject.value);
            else if (SYS_MODULE_NAME == 'IMLC')
                SYF_IMLC_FavFee_onchange(true, chgdescObject.value);
            else if (SYS_MODULE_NAME == 'IMCL')
                SYF_IMCL_FavFee_onchange(true, chgdescObject.value);


        } else {

            if (SYS_MODULE_NAME == 'EXLC')
                SYF_EXLC_FavFee_onchange(false, chgdescObject.value);
            else if (SYS_MODULE_NAME == 'EXCL')
                SYF_EXCL_FavFee_onchange(false, chgdescObject.value);
            else if (SYS_MODULE_NAME == 'IMLC')
                SYF_IMLC_FavFee_onchange(false, chgdescObject.value);
            else if (SYS_MODULE_NAME == 'IMCL')
                SYF_IMCL_FavFee_onchange(false, chgdescObject.value);
        }
        getFeeFinal_Comm(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_FOR_BR_ID = function() {
    try {
        if (document.MAINFORM.FOR_CHG_TYPE.value == '1') {
            SYS_GetTableDataByRule_S('SSSS_SRC_GTS_CentralCommissionmodule_CHG_FOR_BR_ID_0', '1');
            //COVER_BRANCH_ID ---> BR_ID
        } else {
            document.MAINFORM.CHG_FOR_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_INOUT_FLAG = function(flg, trxCcy) {
    try {
        document.MAINFORM.CHG_INOUT_FLG.value = flg;

        if (flg == 'IN') {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY2, 'P');
            document.MAINFORM.CUST_CHG_ACNO.onclick = '';
            document.MAINFORM.CUST_CHG_ACNO.value = '';
            document.MAINFORM.CUST_CHG_ACNO2.value = '';
            document.MAINFORM.CUST_CHG_CCY.value = trxCcy;
            document.MAINFORM.CUST_CHG_CCY2.value = trxCcy;
            GET_CUST_RT();
            GET_CUST2_RT();
        } else if (flg == 'OUT') {
            document.MAINFORM.CUST_CHG_ACNO.onclick = CUST_CHG_ACNO_O_style;
            document.MAINFORM.CUST_CHG_ACNO.value = '';
            document.MAINFORM.CUST_CHG_ACNO2.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY2, 'O');
            document.MAINFORM.CUST_CHG_CCY.value = '';
            document.MAINFORM.CUST_CHG_CCY2.value = '';
            GET_CUST_RT();
            GET_CUST2_RT();
        }
        document.MAINFORM.FOR_CHG_ACNO.value = '';
        SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_ACNO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_TYPE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_TYPE, 'P');
        document.MAINFORM.FOR_CHG_CCY.value = trxCcy;
        document.MAINFORM.FOR_CHG_ACNO.onclick = FOR_CHG_ACNO_O_style;
        changeCustAmtClass();
        GET_FOR_RT();
        for (q = 0; q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
            RCV_DLY_AMT(q, 'y', '', document.MAINFORM.FEE_NUMBER.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_INOUT_FLG_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_MTHD = function(callnm) {
    try {
        var q; // Utility Auto Fix Comments
        for (q = (SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)); q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
            chgmthdName = 'CHG_MTHD_' + q;
            chgmthdObject = getObject(chgmthdName, 'CHG_MTHD_');
            chgmthdObject.value = document.MAINFORM.TTL_CHG_MTHD.value;
            getFeeFinal_Comm(q, '', callnm, document.MAINFORM.FEE_NUMBER.value);
            changeFieldClass(q);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_MTHD_DLY = function(callnm) {
    try {
        for (q = 0; q < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); q++) {
            chgmthdName = 'CHG_MTHD_' + q;
            chgmthdObject = getObject(chgmthdName, 'CHG_MTHD_');
            chgmthdObject.value = document.MAINFORM.TTL_CHG_MTHD_DLY.value;
            getFeeFinal_Comm(q, '', callnm, document.MAINFORM.NOW_NUMBER.value);
            changeFieldClass(q);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_MTHD_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
        changeFieldClass(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_SECD_ACNO_CHECK = function() {
    try {
        var acnoFlag; // Utility Auto Fix Comments
        var cust_chg_acno; // Utility Auto Fix Comments
        var cust_chg_acno_o; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        cust_chg_acno_o = EEHtml.getElementById("CUST_CHG_ACNO_O");
        cust_chg_acno = EEHtml.getElementById("CUST_CHG_ACNO");
        acnoFlag = false;
        if (cust_chg_acno && cust_chg_acno.value != "") {
            for (i = 0; i < cust_chg_acno_o.length; i++) {
                temp = cust_chg_acno_o.options[i].value.split(' ');
                if (temp[1] != null && cust_chg_acno.value == temp[1]) {
                    acnoFlag = true;
                    break;
                } else if (temp[1] == null && cust_chg_acno.value == temp[0]) {
                    acnoFlag = true;
                    break;
                }
            }
        } else {
            return;
        }
        if (!acnoFlag) {
            cust_chg_acno.select();
            EEHtml.fireEvent(cust_chg_acno_o, "onclick");
            return;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_SECD_BENE_onchange = function(appl_id) {
    try {
        var condition; // Utility Auto Fix Comments
        document.MAINFORM.CHG_SECD_BENE_ID.value = appl_id;
        if (appl_id == '') {
            chgSecdBeneCustAcno = new Array();
            ChgAcNoInitValue();
            return true;
        }
        chgSecdBeneCustAcno = new Array();
        condition = "CUST_ID='" + appl_id + "'";
        chgSecdBeneCustAcno = SYS_GetMultiData_Boc("ACNO_MASTER", condition, "CUST_AC_TYPE,CUST_AC_NO,CUST_AC_CCY,AC_TYPE,AC_SUB_TYPE");
        ChgAcNoInitValue();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_SECD_CUST_ID_onchange = function() {
    try {
        var condition; // Utility Auto Fix Comments
        var isGetCustData; // Utility Auto Fix Comments
        if (document.MAINFORM.CHG_SECD_CUST_ID.value == '') {
            document.MAINFORM.CHG_SECD_CUST_NM.value = '';
            chgSecdCustAcno.length = 0;
            ChgAcNoInitValue();
            CHG_SECD_ACNO_CHECK();
            return true;
        }

        if (isGetCustData == 'N') {
            alert('?????????????????ID!');
            document.MAINFORM.CHG_SECD_CUST_ID.value = '';
            document.MAINFORM.CHG_SECD_CUST_NM.value = '';
            chgSecdCustAcno.length = 0;
        }
        if (isGetCustData != 'N') {
            chgSecdCustAcno.length = 0;
            condition = "CUST_ID='" + document.MAINFORM.CHG_SECD_CUST_ID.value + "'";
            chgSecdCustAcno = SYS_GetMultiData_Boc("ACNO_MASTER", condition, "CUST_AC_TYPE,CUST_AC_NO,CUST_AC_CCY,AC_TYPE,AC_SUB_TYPE");
            CHG_SECOND_ARRAY = SYS_GetMultiData_Boc("CUST_MASTER", condition, "CUST_ORGAN_ID,CUST_NM,CUST_NM_C");
            CUST_NM_ORGAN['CHG_SECOND_ORGAN'] = CHG_SECOND_ARRAY[0][0];
            CUST_NM_ORGAN['CHG_SECOND_NM'] = CHG_SECOND_ARRAY[0][1];
            CUST_NM_ORGAN['CHG_SECOND_NM_C'] = CHG_SECOND_ARRAY[0][2];
        }
        ChgAcNoInitValue();
        CHG_SECD_ACNO_CHECK();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_USD_BR_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_USD_CCY_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_USD_HO_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        getFeeFinal_Comm(lastNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_VCH = function(fieldNumber) {
    try {
        var countCode; // Utility Auto Fix Comments
        chgvchacnonm = 'CHG_VCH_ACNO_' + fieldNumber;
        chgvchacnoObject = getObject(chgvchacnonm, 'CHG_VCH_ACNO_');
        chgvchamtnm = 'CHG_VCH_AMT_' + fieldNumber;
        chgvchamtObject = getObject(chgvchamtnm, 'CHG_VCH_AMT_');
        chgvchccynm = 'CHG_VCH_CCY_' + fieldNumber;
        chgvchccyObject = getObject(chgvchccynm, 'CHG_VCH_CCY_');
        rcvamtnm = 'RCV_AMT_' + fieldNumber;
        rcvamtObject = getObject(rcvamtnm, 'RCV_AMT_');
        rcvccynm = 'RCV_CCY_' + fieldNumber;
        rcvccyObject = getObject(rcvccynm, 'RCV_CCY_');
        chgbynm = 'CHG_BY_' + fieldNumber;
        chgbyObject = getObject(chgbynm, 'CHG_BY_');
        countcodenm = 'COUNT_CODE_' + fieldNumber;
        countcodeObject = getObject(countcodenm, 'COUNT_CODE_');
        chgprodcodenm = 'CHG_PROD_CODE_' + fieldNumber;
        chgprodcodeObject = getObject(chgprodcodenm, 'CHG_PROD_CODE_');
        chgvchamtObject.value = SYS_BeFloat(rcvamtObject.value);
        chgvchccyObject.value = rcvccyObject.value;
        countCode = countcodeObject.value.split(';');
        chgvchacnoObject.value = countCode[0];
        chgprodcodeObject.value = countCode[1];
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CHG_WHZH_TRX_CODE_CHECK = function() {
    try {
        var TTL_CUST_CHG_AMT; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        for (i = 1; i <= 2; i++) {
            if (i == 1) {
                TTL_CUST_CHG_AMT = EEHtml.getElementById("TTL_CUST_CHG_AMT");
            } else {
                TTL_CUST_CHG_AMT = EEHtml.getElementById("TTL_CUST_CHG_AMT" + i);
            }
            if (EEHtml.getElementById("CHG_BUSI_TYPE" + i) && EEHtml.getElementById("CHG_BUSI_TYPE" + i).value.indexOf(INTERFACE_BANCS_AC_TRX_CODE) >= 0) {
                if (EEHtml.getElementById('WHZH_TRX_CODE').value == '' && SYS_BeFloat(TTL_CUST_CHG_AMT.value) > 0) {
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.COMM_LIST = function() {
    try {
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgdescName; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chinesedescName; // Utility Auto Fix Comments
        var chinesedescObject; // Utility Auto Fix Comments
        var counter1; // Utility Auto Fix Comments
        var counter2; // Utility Auto Fix Comments
        var counter3; // Utility Auto Fix Comments
        var counter4; // Utility Auto Fix Comments
        var counter5; // Utility Auto Fix Comments
        var dlyamtName; // Utility Auto Fix Comments
        var dlyamtObject; // Utility Auto Fix Comments
        var dlyccyName; // Utility Auto Fix Comments
        var dlyccyObject; // Utility Auto Fix Comments
        var rcvamtName; // Utility Auto Fix Comments
        var rcvamtObject; // Utility Auto Fix Comments
        var rcvccyName; // Utility Auto Fix Comments
        var rcvccyObject; // Utility Auto Fix Comments
        var sFeeName; // Utility Auto Fix Comments
        var sFtime; // Utility Auto Fix Comments
        var sdlyAmt; // Utility Auto Fix Comments
        var spaceNumberAMT; // Utility Auto Fix Comments
        var spaceNumberNM; // Utility Auto Fix Comments
        var srcvAmt; // Utility Auto Fix Comments
        var startdtcomm; // Utility Auto Fix Comments
        var startdtcommObject; // Utility Auto Fix Comments
        document.MAINFORM.RCV_LIST.value = '';
        document.MAINFORM.DLY_LIST.value = '';
        document.MAINFORM.FOR_DLY_LIST.value = '';
        document.MAINFORM.CUST2_DLY_LIST.value = '';
        document.MAINFORM.CUST2_RCV_LIST.value = '';
        counter1 = 1;
        counter2 = 1;
        counter3 = 1;
        counter4 = 1;
        counter5 = 1;
        for (q = 0; q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
            rcvamtName = 'RCV_AMT_' + q;
            rcvamtObject = getObject(rcvamtName, 'RCV_AMT_');
            rcvccyName = 'RCV_CCY_' + q;
            rcvccyObject = getObject(rcvccyName, 'RCV_CCY_');
            dlyccyName = 'DLY_CCY_' + q;
            dlyccyObject = getObject(dlyccyName, 'DLY_CCY_');
            dlyamtName = 'DLY_AMT_' + q;
            dlyamtObject = getObject(dlyamtName, 'DLY_AMT_');
            chgdescName = 'CHG_DESC_' + q;
            chgdescObject = getObject(chgdescName, 'CHG_DESC_');
            chinesedescName = 'CHINESE_DESC_' + q;
            chinesedescObject = getObject(chinesedescName, 'CHINESE_DESC_');
            chgbyName = 'CHG_BY_' + q;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            startdtcomm = 'START_DT_COMM_' + q;
            startdtcommObject = getObject(startdtcomm, 'START_DT_COMM_');
            if (SYS_BeFloat(rcvamtObject.value) > 0 && chgbyObject.value == 'Our Customer') {
                sFeeName = chinesedescObject.value;
                srcvAmt = rcvamtObject.value;
                sFtime = startdtcommObject.value;
                if (sFeeName.length < 6) {
                    spaceNumberNM = 6 - SYS_BeFloat(sFeeName.length);
                    for (i = 0; i <= spaceNumberNM; i++) {
                        sFeeName += ' ';
                    }
                }
                if (srcvAmt.length < 10) {
                    spaceNumberAMT = 10 - SYS_BeFloat(srcvAmt.length);
                    for (i = 1; i <= spaceNumberAMT; i++) {
                        srcvAmt += ' ';
                    }
                }
                if ((counter1 % 2) > 0) {
                    document.MAINFORM.RCV_LIST.value += sFeeName + ':' + rcvccyObject.value + ' ' + srcvAmt + '   ' + sFtime + '     ';
                }
                if ((counter1 % 2) == 0) {
                    document.MAINFORM.RCV_LIST.value += sFeeName + ':' + rcvccyObject.value + ' ' + srcvAmt + '   ' + sFtime + '\n';
                }
                counter1++;
            }
            if (SYS_BeFloat(rcvamtObject.value) > 0 && chgbyObject.value == 'Second Bene') {
                sFeeName = chinesedescObject.value;
                srcvAmt = rcvamtObject.value;
                if (sFeeName.length < 6) {
                    spaceNumberNM = 6 - SYS_BeFloat(sFeeName.length);
                    for (i = 0; i <= spaceNumberNM; i++) {
                        sFeeName += ' ';
                    }
                }
                if (srcvAmt.length < 10) {
                    spaceNumberAMT = 10 - SYS_BeFloat(srcvAmt.length);
                    for (i = 1; i <= spaceNumberAMT; i++) {
                        srcvAmt += ' ';
                    }
                }
                if ((counter5 % 2) > 0) {
                    document.MAINFORM.CUST2_RCV_LIST.value += sFeeName + ':' + rcvccyObject.value + ' ' + srcvAmt + '     ';
                }
                if ((counter5 % 2) == 0) {
                    document.MAINFORM.CUST2_RCV_LIST.value += sFeeName + ':' + rcvccyObject.value + ' ' + srcvAmt + '\n';
                }
                counter5++;
            }
            if (SYS_BeFloat(dlyamtObject.value) > 0 && chgbyObject.value == 'Our Customer') {
                sFeeName = chinesedescObject.value;
                sdlyAmt = dlyamtObject.value;
                if (sFeeName.length < 6) {
                    spaceNumberNM = 6 - SYS_BeFloat(sFeeName.length);
                    for (i = 0; i <= spaceNumberNM; i++) {
                        sFeeName += ' ';
                    }
                }
                if (sdlyAmt.length < 10) {
                    spaceNumberAMT = 10 - SYS_BeFloat(sdlyAmt.length);
                    for (i = 1; i <= spaceNumberAMT; i++) {
                        sdlyAmt += ' ';
                    }
                }
                if ((counter2 % 2) > 0) {
                    document.MAINFORM.DLY_LIST.value += sFeeName + ':' + dlyccyObject.value + ' ' + sdlyAmt + '     ';
                }
                if ((counter2 % 2) == 0) {
                    document.MAINFORM.DLY_LIST.value += sFeeName + ':' + dlyccyObject.value + ' ' + sdlyAmt + '\n';
                }
                counter2++;
            }
            if (SYS_BeFloat(dlyamtObject.value) > 0 && chgbyObject.value == 'Counter Party') {
                sFeeName = chgdescObject.value;
                sdlyAmt = dlyamtObject.value;
                if (sFeeName.length < 6) {
                    spaceNumberNM = 6 - SYS_BeFloat(sFeeName.length);
                    for (i = 0; i <= spaceNumberNM; i++) {
                        sFeeName += ' ';
                    }
                }
                if (sdlyAmt.length < 10) {
                    spaceNumberAMT = 10 - SYS_BeFloat(sdlyAmt.length);
                    for (i = 1; i <= spaceNumberAMT; i++) {
                        sdlyAmt += ' ';
                    }
                }
                if ((counter3 % 2) > 0) {
                    document.MAINFORM.FOR_DLY_LIST.value += sFeeName + ':' + dlyccyObject.value + ' ' + sdlyAmt + '     ';
                }
                if ((counter3 % 2) == 0) {
                    document.MAINFORM.FOR_DLY_LIST.value += sFeeName + ':' + dlyccyObject.value + ' ' + sdlyAmt + '\n';
                }
                counter3++;
            }
            if (SYS_BeFloat(dlyamtObject.value) > 0 && chgbyObject.value == 'Second Bene') {
                sFeeName = chinesedescObject.value;
                sdlyAmt = dlyamtObject.value;
                if (sFeeName.length < 6) {
                    spaceNumberNM = 6 - SYS_BeFloat(sFeeName.length);
                    for (i = 0; i <= spaceNumberNM; i++) {
                        sFeeName += ' ';
                    }
                }
                if (sdlyAmt.length < 10) {
                    spaceNumberAMT = 10 - SYS_BeFloat(sdlyAmt.length);
                    for (i = 1; i <= spaceNumberAMT; i++) {
                        sdlyAmt += ' ';
                    }
                }
                if ((counter3 % 2) > 0) {
                    document.MAINFORM.CUST2_DLY_LIST.value += sFeeName + ':' + dlyccyObject.value + ' ' + sdlyAmt + '     ';
                }
                if ((counter3 % 2) == 0) {
                    document.MAINFORM.CUST2_DLY_LIST.value += sFeeName + ':' + dlyccyObject.value + ' ' + sdlyAmt + '\n';
                }
                counter4++;

            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.COMM_PAGE_ONCHANGE = function() {
    try {
        if (SYS_MODULE_NAME == 'IMLC') {
            SYF_IMLC_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'LOFG') {
            SYF_LOFG_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'EXLC') {
            SYF_EXLC_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'FFIT') {
            SYF_FFIT_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'EXCL') {
            SYF_EXCL_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'IMCL') {
            SYF_IMCL_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'LGAD') {
            SYF_LGAD_COMM_onchange();
        } else if (SYS_MODULE_NAME == 'FINC') {
            SYF_FINC_COMM_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CUST_CHG_ACNO_O_style = function() {
    try {
        document.MAINFORM.CUST_CHG_ACNO_O.style.display = '';
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CUST_CHG_CCY2_onchange = function() {
    try {
        GET_CUST2_RT();
        for (q = 0; q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
            RCV_DLY_AMT(q, 'y', '', document.MAINFORM.FEE_NUMBER.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CUST_RT = function(fieldNumber) {
    try {
        chgbyName = 'CHG_BY_' + fieldNumber;
        chgbyObject = getObject(chgbyName, 'CHG_BY_');
        chgexchrtName = 'CHG_EXCH_RT_' + fieldNumber;
        chgexchObject = getObject(chgexchrtName, 'CHG_EXCH_RT_');
        chgccyName = 'CHG_CCY_' + fieldNumber;
        chgccyObject = getObject(chgccyName, 'CHG_CCY_');
        if (chgbyObject.value == 'Our Customer' && SYS_BeFloat(document.MAINFORM.TTL_CUST_BUYING_RT.value) > 0) {
            //if(chgccyObject.value=='CNY')
            //{
            //chgexchObject.value=SYS_BeFloat(document.MAINFORM.CNY_SELLING_RT.value)/SYS_BeFloat(document.MAINFORM.TTL_CUST_BUYING_RT.value);
            //}
            if (chgccyObject.value == 'USD') {
                chgexchObject.value = SYS_BeFloat(document.MAINFORM.USD_SELLING_RT.value) / SYS_BeFloat(document.MAINFORM.TTL_CUST_BUYING_RT.value);
            } else if (chgccyObject.value == document.MAINFORM.TRX_CCY_COMM.value) {
                chgexchObject.value = SYS_BeFloat(document.MAINFORM.TRX_SELLING_RT.value) / SYS_BeFloat(document.MAINFORM.TTL_CUST_BUYING_RT.value);
            }
        } else if (chgbyObject.value == 'Second Bene' && SYS_BeFloat(document.MAINFORM.TTL_CUST2_BUYING_RT.value) > 0) {
            //if(chgccyObject.value=='CNY' && document.MAINFORM.TTL_CUST2_BUYING_RT.value>0)
            //{
            //chgexchObject.value=SYS_BeFloat(document.MAINFORM.CNY_SELLING_RT.value)/SYS_BeFloat(document.MAINFORM.TTL_CUST2_BUYING_RT.value);
            //}
            if (chgccyObject.value == 'USD') {
                chgexchObject.value = SYS_BeFloat(document.MAINFORM.USD_SELLING_RT.value) / SYS_BeFloat(document.MAINFORM.TTL_CUST2_BUYING_RT.value);
            } else if (chgccyObject.value == document.MAINFORM.TRX_CCY_COMM.value) {
                chgexchObject.value = SYS_BeFloat(document.MAINFORM.TRX_SELLING_RT.value) / SYS_BeFloat(document.MAINFORM.TTL_CUST2_BUYING_RT.value);
            }
        } else if (chgbyObject.value == 'Counter Party' && SYS_BeFloat(document.MAINFORM.TTL_FOR_BUYING_RT.value) > 0) {
            chgexchObject.value = SYS_BeFloat(document.MAINFORM.TRX_SELLING_RT.value) / SYS_BeFloat(document.MAINFORM.TTL_FOR_BUYING_RT.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.ChgAcNoGetValue = function(fieldList) {
    try {
        var acnoNumber; // Utility Auto Fix Comments
        var beneNum; // Utility Auto Fix Comments
        var cust_chg_acno2; // Utility Auto Fix Comments
        var fieldArray; // Utility Auto Fix Comments
        var fieldObject; // Utility Auto Fix Comments
        var for_chg_acno; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        fieldArray = fieldList.split(',');
        for_chg_acno = EEHtml.getElementById("FOR_CHG_ACNO_O");
        cust_chg_acno2 = EEHtml.getElementById("CUST_CHG_ACNO2_O");
        cust_chg_acno2.length = 0;
        for (i = 0; i <= fieldArray.length - 1; i++) {
            fieldObject = EEHtml.getElementById(fieldArray[i]);
            fieldObject.length = 0;
        }
        for (i = 0; i <= fieldArray.length - 1; i++) {
            fieldObject = EEHtml.getElementById(fieldArray[i]);
            acnoNumber = 0;
            beneNum = 0;
            fieldObject.size = custAcno.length + 1;
            fieldObject[0] = new Option('Acno of First Cust');
            fieldObject[0].value = '';
            for (j = 0; j <= custAcno.length - 1; j++) {
                if (custAcno[j][0] != '8401' || custAcno[j][0] != '8402') {
                    fieldObject[acnoNumber + 1] = new Option(custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2]);
                    fieldObject[acnoNumber + 1].value = custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2] + ' FIRST';
                    acnoNumber++;
                }

            }
            if (chgSecdCustAcno.length > 0) {
                fieldObject[acnoNumber + 1] = new Option('');
                fieldObject[acnoNumber + 1].value = '';
                acnoNumber++;
                fieldObject[acnoNumber + 1] = new Option('Acno of Second Cust');
                fieldObject[acnoNumber + 1].value = '';
                acnoNumber++;
            }
            for (j = 0; j <= chgSecdCustAcno.length - 1; j++) {
                fieldObject[acnoNumber + 1] = new Option(chgSecdCustAcno[j][3] + chgSecdCustAcno[j][4] + ' ' + chgSecdCustAcno[j][1] + ' ' + chgSecdCustAcno[j][2]);
                fieldObject[acnoNumber + 1].value = chgSecdCustAcno[j][3] + chgSecdCustAcno[j][4] + ' ' + chgSecdCustAcno[j][1] + ' ' + chgSecdCustAcno[j][2] + ' CHG_SECOND';
                acnoNumber++;
            }
            if (chgSecdBeneCustAcno && chgSecdBeneCustAcno.length && chgSecdBeneCustAcno.length > 0) {
                cust_chg_acno2[beneNum] = new Option('Acno of Second Cust');
                cust_chg_acno2[beneNum].value = '';
                beneNum++;
                for (k = 0; k <= chgSecdBeneCustAcno.length - 1; k++) {
                    cust_chg_acno2[beneNum] = new Option(chgSecdBeneCustAcno[k][3] + chgSecdBeneCustAcno[k][4] + ' ' + chgSecdBeneCustAcno[k][1] + ' ' + chgSecdBeneCustAcno[k][2]);
                    cust_chg_acno2[beneNum].value = chgSecdBeneCustAcno[k][3] + chgSecdBeneCustAcno[k][4] + ' ' + chgSecdBeneCustAcno[k][1] + ' ' + chgSecdBeneCustAcno[k][2];
                    beneNum++;
                }
                cust_chg_acno2[beneNum] = new Option('');
                cust_chg_acno2[beneNum].value = '';
                beneNum++;
            }

            fieldObject[acnoNumber + 1] = new Option('');
            fieldObject[acnoNumber + 1].value = '';
            acnoNumber++;
            fieldObject[acnoNumber + 1] = new Option('Acno of GL');
            fieldObject[acnoNumber + 1].value = '';
            acnoNumber++;
            fieldObject[acnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + CGL9991); //20090611
            fieldObject[acnoNumber + 1].value = BUSI_TYPE_GL + ' ' + CGL9991;
            acnoNumber++;
            if (SYS_MODULE_NAME != "LOFG" && SYS_MODULE_NAME != "LGAD" && SYS_MODULE_NAME != "IMLC" && SYS_MODULE_NAME != "IMCL") {
                fieldObject[acnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + GL8421);
                fieldObject[acnoNumber + 1].value = BUSI_TYPE_GL + ' ' + GL8421;
                acnoNumber++;
            }
            fieldObject.size = fieldObject.length;


            for_chg_acno[0] = new Option('Acno of GL');
            for_chg_acno[0].value = '';
            for_chg_acno[1] = new Option(BUSI_TYPE_GL + ' ' + CGL9991); //20090611
            for_chg_acno[1].value = BUSI_TYPE_GL + ' ' + CGL9991;
            if (SYS_MODULE_NAME != "LOFG" && SYS_MODULE_NAME != "LGAD" && SYS_MODULE_NAME != "IMLC" && SYS_MODULE_NAME != "IMCL") {
                for_chg_acno[2] = new Option(BUSI_TYPE_GL + ' ' + GL8421);
                for_chg_acno[2].value = BUSI_TYPE_GL + ' ' + GL8421;
            }
            for_chg_acno.size = for_chg_acno.length;


            cust_chg_acno2[beneNum] = new Option('Acno of GL');
            cust_chg_acno2[beneNum].value = '';
            beneNum++;
            cust_chg_acno2[beneNum] = new Option(BUSI_TYPE_GL + " " + CGL9991); //20090611
            cust_chg_acno2[beneNum].value = BUSI_TYPE_GL + " " + CGL9991;
            beneNum++;
            if (SYS_MODULE_NAME != "LOFG" && SYS_MODULE_NAME != "LGAD" && SYS_MODULE_NAME != "IMLC" && SYS_MODULE_NAME != "IMCL") {
                cust_chg_acno2[beneNum] = new Option(BUSI_TYPE_GL + ' ' + GL8421);
                cust_chg_acno2[beneNum].value = BUSI_TYPE_GL + ' ' + GL8421;
                beneNum++;
            }

            cust_chg_acno2.size = cust_chg_acno2.length;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.ChgAcNoInitValue = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ') {
            return;
        }
        ChgAcNoGetValue("CUST_CHG_ACNO_O");
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.ChgAcNoOnchange = function(selectValue, subjectFieldName, acnoFieldName, ccyFieldName, chgAcCcyName) {
    try {
        var acno; // Utility Auto Fix Comments
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var chgAcCcyNameObject; // Utility Auto Fix Comments
        var subjectFieldNameObject; // Utility Auto Fix Comments
        acno = selectValue.split(' ');
        chgAcCcyNameObject = EEHtml.getElementById(chgAcCcyName);
        subjectFieldNameObject = EEHtml.getElementById(subjectFieldName);
        acnoFieldNameObject = EEHtml.getElementById(acnoFieldName);
        chgAcCcyNameObject = EEHtml.getElementById(ccyFieldName);
        if (acno[3] != null) {
            document.MAINFORM.COMM_ORGAN_ID.value = CUST_NM_ORGAN[acno[3] + '_ORGAN'];
            document.MAINFORM.COMM_CUST_NM.value = CUST_NM_ORGAN[acno[3] + '_NM'];
            document.MAINFORM.COMM_CUST_NM_C.value = CUST_NM_ORGAN[acno[3] + '_NM_C'];
        }
        if (acno[0] == BUSI_TYPE_GL) {
            if (subjectFieldNameObject) {
                subjectFieldNameObject.value = acno[0];
                SYT_ChangeFldClass(chgAcCcyNameObject, 'M');
                if (document.MAINFORM.CHG_INOUT_FLG.value == 'IN' || document.MAINFORM.CHG_INOUT_FLG.value == 'OUT') {

                    SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'P');
                }

            }

            acnoFieldNameObject.value = acno[1];
            chgAcCcyNameObject.value = document.MAINFORM.TRX_CCY_COMM.value;
            document.MAINFORM.COMM_CUST_NM.value = '';

        } else

        if (selectValue == '') {
            if (subjectFieldNameObject) {
                subjectFieldNameObject.value = "";
            }
            acnoFieldNameObject.value = '';
            chgAcCcyNameObject.value = '';
            document.MAINFORM.COMM_ORGAN_ID.value = '';
            document.MAINFORM.COMM_CUST_NM.value = '';
        } else {
            if (subjectFieldNameObject) {
                subjectFieldNameObject.value = acno[0];
            }
            acnoFieldNameObject.value = acno[1];
            if (acnoFieldNameObject.value.length > 4 && SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value) > 0) {

                SYT_ChangeFldClass(chgAcCcyNameObject, 'P');

            } else {
                if (document.MAINFORM.CHG_INOUT_FLG.value == 'OUT') {
                    SYT_ChangeFldClass(chgAcCcyNameObject, 'P');
                } else if (acnoFieldNameObject.value.length < 5 && SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value) > 0) {
                    SYT_ChangeFldClass(chgAcCcyNameObject, 'M');
                }
            }
            chgAcCcyNameObject.value = acno[2];
        }
        CUST_CHG_CCY_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CommCustId = function(trxno, cntycode, custid) {
    try {
        cntycodeArr = cntycode.split(';');
        document.MAINFORM.COMM_TRX_NO.value = trxno;
        document.MAINFORM.COMM_CNTY_CODE.value = 'CHN';
        document.MAINFORM.COMM_CNTY_CODE2.value = 'CHN';
        document.MAINFORM.COMM_BGL_AC_NO.value = '9991';
        document.MAINFORM.COMM_CUST_ID.value = custid;
        custidArr = custid.split(';');
        custidArrCUBK = custidArr[1];
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CommInitCnty1 = function() {
    try {
        var c; // Utility Auto Fix Comments
        var rptNoComm; // Utility Auto Fix Comments
        c = 0;
        if (document.MAINFORM.CUST_CHG_ACNO.value != '' && document.MAINFORM.CUST_CHG_ACNO_S.value != BUSI_TYPE_GL && document.MAINFORM.CUST_CHG_CCY.value != '' && document.MAINFORM.CUST_CHG_CCY.value != 'USD') {
            c = 1;
        }

        if (c == 1) {
            rptNoComm = SYT_GET_RPT_DCLR_NO();
            if (document.MAINFORM.COMM_CNTY_CODE.value == 'CHN') {
                if (rptNoComm) {
                    CommRef1(rptNoComm); // Utility Auto Fix Comments
                } else {
                    SYS_GetRefNo_S('IBPD09', 'CommRef1', '', 'IBPD09');
                }
                //rptNoComm?CommRef1(rptNoComm):SYS_GetRefNo_S('IBPD09','CommRef1','','IBPD09');
            } else {
                document.MAINFORM.COMM_DCLR_NO1.value = '';
            }
        } else {
            document.MAINFORM.COMM_DCLR_NO1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CommInitCnty2 = function() {
    try {
        var c; // Utility Auto Fix Comments
        var rptNoComm; // Utility Auto Fix Comments
        c = 0;
        if (document.MAINFORM.CUST_CHG_ACNO2_S.value != '' && document.MAINFORM.CUST_CHG_ACNO2_S.value != BUSI_TYPE_GL && document.MAINFORM.CUST_CHG_CCY2.value != '' && document.MAINFORM.CUST_CHG_CCY.value != 'USD') {
            c = 1;
        }
        if (c == 1) {
            rptNoComm = SYT_GET_RPT_DCLR_NO();
            if (document.MAINFORM.COMM_CNTY_CODE2.value == 'CHN') {
                if (rptNoComm) {
                    CommRef2(rptNoComm); // Utility Auto Fix Comments
                } else {
                    SYS_GetRefNo_S('IBPD09', 'CommRef2', '', 'IBPD09');
                }

                //rptNoComm?CommRef2(rptNoComm):SYS_GetRefNo_S('IBPD09','CommRef2','','IBPD09');
            } else {
                document.MAINFORM.COMM_DCLR_NO2.value = '';
            }
        } else {
            document.MAINFORM.COMM_DCLR_NO2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CommRef1 = function(ref) {
    try {
        if (document.MAINFORM.COMM_CNTY_CODE.value == 'CHN') {
            document.MAINFORM.COMM_DCLR_NO1.value = '2' + ref;
        } else {
            document.MAINFORM.COMM_DCLR_NO1.value = ref;
        }
        GetVoucherDesc_COMM();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.CommRef2 = function(ref) {
    try {
        if (document.MAINFORM.COMM_CNTY_CODE2.value == 'CHN') {
            document.MAINFORM.COMM_DCLR_NO2.value = '2' + ref;
        } else {
            document.MAINFORM.COMM_DCLR_NO2.value = ref;
        }
        GetVoucherDesc_COMM();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.ConfirmBuinessCheck_COMM = function() {
    try {
        var chgamtoriginName; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var feildNumber; // Utility Auto Fix Comments
        var rcveqamtName; // Utility Auto Fix Comments
        var rcveqamtName_TEMP; // Utility Auto Fix Comments
        var rcveqamtObject; // Utility Auto Fix Comments
        var rcveqamtObject_TEMP; // Utility Auto Fix Comments
        for (feildNumber = 0; feildNumber < document.MAINFORM.FEE_NUMBER.value; feildNumber++) {
            chgamtoriginName = "CHG_AMT_ORIGIN_" + feildNumber;
            chgamtoriginObject = getObject(chgamtoriginName, 'CHG_AMT_ORIGIN_');
            rcveqamtName = "RCV_EQ_AMT_" + feildNumber;
            rcveqamtObject = getObject(rcveqamtName, 'RCV_EQ_AMT_');
            rcveqamtName_TEMP = "RCV_EQ_AMT_TEMP_" + feildNumber; //20090604
            rcveqamtObject_TEMP = getObject(rcveqamtName_TEMP, 'RCV_EQ_AMT_TEMP_'); //20090604

            if (SYS_BeFloat(rcveqamtObject.value) > SYS_BeFloat(chgamtoriginObject.value)) {
                SYS_CheckError(rcveqamtObject, 'EQ AMT must be smaller CHG_AMT!');
                rcveqamtObject.value = SYS_BeFloat(chgamtoriginObject.value);
                rcveqamtObject_TEMP.value = rcveqamtObject.value; //20090604
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.ConfirmBusinessCall_COMM = function() {
    try {
        var i; // Utility Auto Fix Comments
        CHG_BUSI_TYPE();
        CommInitCnty1();
        CommInitCnty2();
        COMM_LIST();
        tranBAFiled();
        BANA();
        CHG_DR_AMT();
        for (i = 0; i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            CHG_VCH(i);
        }
        getCustId(CUST_ID);
        CHG_FOR_BR_ID();
        SYT_CommPageConfirm();
        GET_TRX_RT();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.DLY_AMT_onchange = function(fieldName) {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.DLY_CCY = function(fieldNumber) {
    try {
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgmthdName; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var dluccyObject; // Utility Auto Fix Comments
        var dlyccyName; // Utility Auto Fix Comments
        dlyccyName = 'DLY_CCY_' + fieldNumber;
        dlyccyObject = getObject(dlyccyName, 'DLY_CCY_');
        chgbyName = 'CHG_BY_' + fieldNumber;
        chgbyObject = getObject(chgbyName, 'CHG_BY_');
        chgmthdName = 'CHG_MTHD_' + fieldNumber;
        chgmthdObject = getObject(chgmthdName, 'CHG_MTHD_');
        chgccyName = 'CHG_CCY_' + fieldNumber;
        chgccyObject = getObject(chgccyName, 'CHG_CCY_');
        chgamtoriginName = 'CHG_AMT_ORIGIN_' + fieldNumber;
        chgamtoriginObject = getObject(chgamtoriginName, 'CHG_AMT_ORIGIN_');
        rcveqamtName = 'RCV_EQ_AMT_' + fieldNumber;
        rcveqamtObject = getObject(rcveqamtName, 'RCV_EQ_AMT_');

        if (chgbyObject.value != '' && chgmthdObject.value != '' && (chgmthdObject.value != 'FREE' || chgmthdObject.value != 'WRITEOFF' || chgmthdObject.value != 'TRANSACTION')) {

            dlyccyObject.value = chgccyObject.value;
        } else {
            dlyccyObject.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.DLY_CCY_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_CHG_ACNO = function() {
    try {
        var ccygl; // Utility Auto Fix Comments
        var coberACNO; // Utility Auto Fix Comments
        if (document.MAINFORM.FOR_CHG_CCY.value != '') {
            ccygl = SYT_CCY_GL_BOC(document.MAINFORM.FOR_CHG_CCY.value);
        }
        if (document.MAINFORM.FOR_CHG_TYPE.value == '1') {
            SYS_GetTableDataByRule('SSSS_SRC_GTS_CentralCommissionmodule_FOR_CHG_ACNO_1', '1');
            coberACNO += ccygl;
            document.MAINFORM.FOR_CHG_ACNO.value = coberACNO;
        } else if (document.MAINFORM.FOR_CHG_TYPE.value == '4') {
            document.MAINFORM.FOR_CHG_ACNO.value = CGL9991; //20090611
        } else {
            document.MAINFORM.FOR_CHG_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_CHG_ACNO_O_style = function() {
    try {
        document.MAINFORM.FOR_CHG_ACNO_O.style.display = 'none';
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_CHG_ACNO_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_CHG_CCY_onchange = function() {
    try {
        if (CORE_INTERFACE_FLAG != 'NEW') {
            FOR_CHG_ACNO();
        }
        GET_FOR_RT();
        for (q = 0; q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
            RCV_DLY_AMT(q, 'y', '', document.MAINFORM.FEE_NUMBER.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_CHG_TYPE_onchange = function() {
    try {
        var ccygl; // Utility Auto Fix Comments
        var coberACNO; // Utility Auto Fix Comments
        if (CORE_INTERFACE_FLAG == 'NEW') {
            if (document.MAINFORM.FOR_CHG_TYPE.value == '1') {
                document.MAINFORM.FOR_CHG_ACNO.value = GL9992;
            } else if (document.MAINFORM.FOR_CHG_TYPE.value == '4') {
                document.MAINFORM.FOR_CHG_ACNO.value = CGL9991;
            } else {
                document.MAINFORM.FOR_CHG_ACNO.value = '';
            }
            if (document.MAINFORM.FOR_CHG_TYPE.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_ACNO, 'M');
            }

            changeCustAmtClass();
            document.MAINFORM.FOR_CHG_CCY.value = document.MAINFORM.TRX_CCY_COMM.value;
            EEHtml.fireEvent(document.MAINFORM.FOR_CHG_CCY, 'onchange');
        } else {
            document.MAINFORM.FOR_CHG_CCY.value = document.MAINFORM.TRX_CCY_COMM.value;
            if (document.MAINFORM.FOR_CHG_CCY.value != '') {
                ccygl = SYT_CCY_GL_BOC(document.MAINFORM.FOR_CHG_CCY.value);
            }
            if (document.MAINFORM.FOR_CHG_TYPE.value == '1') {

                SYS_GetTableDataByRule('SSSS_SRC_GTS_CentralCommissionmodule_FOR_CHG_TYPE_onchange_2', '1');
                coberACNO += ccygl;
                document.MAINFORM.FOR_CHG_ACNO.value = coberACNO;
            } else if (document.MAINFORM.FOR_CHG_TYPE.value == '4') {
                document.MAINFORM.FOR_CHG_ACNO.value = CGL9991;
            } else {
                document.MAINFORM.FOR_CHG_ACNO.value = '';
            }

            if (document.MAINFORM.FOR_CHG_TYPE.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_ACNO, 'M');
            }

            changeCustAmtClass();
            EEHtml.fireEvent(document.MAINFORM.FOR_CHG_CCY, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_DLY_CCY = function() {
    try {
        var ttlForAmt; // Utility Auto Fix Comments
        ttlForAmt = 0;
        for (i = 0; i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            dlyamtName = 'DLY_AMT_' + i;
            dlyamtObject = getObject(dlyamtName, 'DLY_AMT_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            ttlForAmt += SYS_BeFloat(dlyamtObject.value);
        }
        if (SYS_BeFloat(ttlForAmt) > 0) {

            document.MAINFORM.FOR_DLY_CCY.value = document.MAINFORM.TRX_CCY_COMM.value;
            document.MAINFORM.FOR_DLY_CCY_ALL.value = document.MAINFORM.TRX_CCY_COMM.value;

        } else {

            document.MAINFORM.FOR_DLY_CCY.value = '';
            document.MAINFORM.FOR_DLY_CCY_ALL.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.FOR_DLY_CCY_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GET_ALL_RT = function() {
    try {
        GET_RATE();
        GET_CUST_RT();
        GET_CUST2_RT();
        GET_FOR_RT();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GET_CUST2_RT = function() {
    try {
        if (document.MAINFORM.CUST_CHG_CCY2.value != '') {
            SYS_GetExchangeRate_Boc(document.MAINFORM.CUST_CHG_CCY2.value, 'USD', 'Buying Rate', 'TTL_CUST2_BUYING_RT');
            SYS_GetExchangeRate_Boc(document.MAINFORM.CUST_CHG_CCY2.value, 'USD', 'Selling Rate', 'TTL_CUST2_SELLING_RT');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GET_CUST_RT = function() {
    try {
        if (document.MAINFORM.CUST_CHG_CCY.value != '') {
            SYS_GetExchangeRate_Boc(document.MAINFORM.CUST_CHG_CCY.value, 'USD', 'Buying Rate', 'TTL_CUST_BUYING_RT');
            SYS_GetExchangeRate_Boc(document.MAINFORM.CUST_CHG_CCY.value, 'USD', 'Selling Rate', 'TTL_CUST_SELLING_RT');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GET_FOR_RT = function() {
    try {
        if (document.MAINFORM.FOR_CHG_CCY.value != '') {
            SYS_GetExchangeRate_Boc(document.MAINFORM.FOR_CHG_CCY.value, 'USD', 'Buying Rate', 'TTL_FOR_BUYING_RT');
            SYS_GetExchangeRate_Boc(document.MAINFORM.FOR_CHG_CCY.value, 'USD', 'Selling Rate', 'TTL_FOR_SELLING_RT');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GET_RATE = function() {
    try {
        document.MAINFORM.CNY_SELLING_RT.value = 100;
        document.MAINFORM.CNY_BUYING_RT.value = 100;
        SYS_GetExchangeRate_Boc('USD', 'USD', 'Buying Rate;Selling Rate', 'USD_BUYING_RT;USD_SELLING_RT');
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GET_TRX_RT = function(trxccy) {
    try {
        trxccy = document.MAINFORM.TRX_CCY_COMM.value;
        SYS_GetExchangeRate_Boc(trxccy, 'USD', 'Buying Rate;Selling Rate', 'TRX_BUYING_RT;TRX_SELLING_RT');
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GetCablePost = function(FeeNameList, BR_Code) {
    try {
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ') {
            return;
        }
        try {
            BR_Code = SYS_BUSI_UNIT;
        } catch (e1) {
            cpArr = SYS_GetCablePost('COMM_MASTER', FeeNameList, 'USD', BR_Code);
        }
        cpArr = SYS_GetCablePost('COMM_MASTER', FeeNameList, 'USD', BR_Code);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GetCablePostFee = function(sFeeName, sBankId, trxCcy, chgFlg, code, favFlag) {
    try {
        var FEE_LEVEL; // Utility Auto Fix Comments
        var FLAT_AMT; // Utility Auto Fix Comments
        var favRtFlag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nPostcable; // Utility Auto Fix Comments
        var nu; // Utility Auto Fix Comments
        var placecode; // Utility Auto Fix Comments
        var placecodeArray; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        favRtFlag = false;
        if (favFlag) {
            favRtFlag = favFlag;
        }
        if (cpArr.length <= 0) {
            return;
        }
        if (sBankId.length == 11) {
            sCntyCode = sBankId.substr(4, 2);
            sCntyCodeCUBK = sCntyCode;

            SYS_GetTableDataByRule('SSSS_SRC_GTS_CentralCommissionmodule_GetCablePostFee_3', '1');
            placecode = placecodeArray;
        } else if (sBankId.length == 3) {
            placecode = sBankId;
        } else if (sBankId != '') {

            sBankIdCUBK = sBankId;

            SYS_GetTableDataByRule('SSSS_SRC_GTS_CentralCommissionmodule_GetCablePostFee_4', '1');
            sCntyCodeCUBK = sCntyCode;

            SYS_GetTableDataByRule('SSSS_SRC_GTS_CentralCommissionmodule_GetCablePostFee_5', '1');
            placecode = placecodeArray;
        }
        for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            feenamenm = 'FEE_NAME_' + i;
            feenameObject = getObject(feenamenm, 'FEE_NAME_');
            chgdescnm = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            trxamtnm = 'TRX_AMT_' + i;
            trxamtObject = getObject(trxamtnm, 'TRX_AMT_');
            trxrtnm = 'TRX_RT_' + i;
            trxrtObject = getObject(trxrtnm, 'TRX_RT_');
            periodnm = 'PERIOD_' + i;
            periodObject = getObject(periodnm, 'PERIOD_');
            trxccynm = 'TRX_CCY_' + i;
            trxccyObject = getObject(trxccynm, 'TRX_CCY_');
            prodcodeName = 'PROD_CODE_' + i;
            prodcodeObject = getObject(prodcodeName, 'PROD_CODE_');
            countcodeName = 'COUNT_CODE_' + i;
            countcodeObject = getObject(countcodeName, 'COUNT_CODE_');
            codeArr = code.split(';');
            if ((chgdescObject.value == 'POST' && (sFeeName == 'EXP' || sFeeName == 'MAIL')) || (chgdescObject.value == 'CABLE' && (sFeeName == 'CABLEF' || sFeeName == 'CABLEB'))) {
                feenameObject.value = sFeeName;
                trxccyObject.value = trxCcy;
                countcodeObject.value = code;
            }
        }
        for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            chgdescnm = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            chgcnyccynm = 'CHG_CNY_CCY_' + i;
            chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
            chgamttempnm = 'CHG_AMT_TEMP_' + i;
            chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
            chgccytempnm = 'CHG_CCY_TEMP_' + i;
            chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
            chgamthonm = 'CHG_AMT_HO_' + i;
            chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
            chgamtbrnm = 'CHG_AMT_BR_' + i;
            chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');

            if (chgFlg == 'N' && ((chgdescObject.value == 'POST' && (sFeeName == 'EXP' || sFeeName == 'MAIL')) || (chgdescObject.value == 'CABLE' && (sFeeName == 'CABLEF' || sFeeName == 'CABLEB')))) {
                nPostcable = 0;
                chgcnyccyObject.value = '';
                chgamtbrObject.value = nPostcable;
                chgamthoObject.value = nPostcable;
                chgamtoriginObject.value = nPostcable;
                SYT_ChangeFldClass(chgmthdObject, 'O');
                SYT_ChangeFldClass(chgbyObject, 'O');
                getFeeFinal_Comm(i);
                return nPostcable;
            }
        }
        for (number = 0; number < cpArr.length; number++) {
            if (sFeeName == cpArr[number][3] && chgFlg == 'Y' && cpArr[number][1] == placecode && (cpArr[number][3] == 'EXP' || cpArr[number][3] == 'MAIL')) {
                FLAT_AMT = SYS_BeFloat(cpArr[number][2]);
                for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                    chgdescnm = 'CHG_DESC_' + i;
                    chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                    chgcnyccynm = 'CHG_CNY_CCY_' + i;
                    chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                    chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                    chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                    chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                    chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                    chgusdccynm = 'CHG_USD_CCY_' + i;
                    chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                    chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                    chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                    chgamttempnm = 'CHG_AMT_TEMP_' + i;
                    chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                    chgccytempnm = 'CHG_CCY_TEMP_' + i;
                    chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                    chgamthonm = 'CHG_AMT_HO_' + i;
                    chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                    chgamtbrnm = 'CHG_AMT_BR_' + i;
                    chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                    chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                    chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                    chginesedescnm = 'CHINESE_DESC_' + i;
                    chgineseObject = getObject(chginesedescnm, 'CHINESE_DESC_');
                    chgmthdnm = 'CHG_MTHD_' + i;
                    chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                    chgbyName = 'CHG_BY_' + i;
                    chgbyObject = getObject(chgbyName, 'CHG_BY_');
                    if (chgdescObject.value == 'POST' && (sFeeName == 'EXP' || sFeeName == 'MAIL')) {
                        chgineseObject.value = '???Chinese';
                        chgcnyccyObject.value = cpArr[number][4];
                        chgcnybrccyObject.value = cpArr[number][4];
                        SYT_ChangeFldClass(chgmthdObject, 'M');
                        SYT_ChangeFldClass(chgbyObject, 'M');
                        EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                        FEE_LEVEL = cpArr[number][5];
                        if (FEE_LEVEL == 'HEADOFFICE') {
                            chgamthoObject.value = SYS_BeFloat(chgamthoObject.value) + SYS_BeFloat(FLAT_AMT);
                            chgamthoObject.value = SYT_CCY_AMT(chgcnyccyObject.value, chgamthoObject.value);
                            EEHtml.fireEvent(chgamthoObject, 'onchange');
                        } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                            chgamtbrObject.value = SYS_BeFloat(chgamtbrObject.value) + SYS_BeFloat(FLAT_AMT);
                            chgamtbrObject.value = SYT_CCY_AMT(chgcnyccyObject.value, chgamtbrObject.value);
                            EEHtml.fireEvent(chgamtbrObject, 'onchange');

                        }
                    }
                }
            } else if (cpArr[number][3] == sFeeName && chgFlg == 'Y' && (cpArr[number][3] == 'CABLEF' || cpArr[number][3] == 'CABLEB')) {
                if (placecode != 'DOM' && placecode != 'HKM' && placecode != '') {

                    placecode = 'OVR';
                    if (SYS_MODULE_NAME == 'DELC' || SYS_MODULE_NAME == 'DILC') {
                        placecode = 'DOM';
                    }
                }
                if (cpArr[number][1] == placecode) {
                    FLAT_AMT = SYS_BeFloat(cpArr[number][2]);

                    for (nu = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); nu < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); nu++) {
                        chgdescnm = 'CHG_DESC_' + nu;
                        chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                        chgcnyccynm = 'CHG_CNY_CCY_' + nu;
                        chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                        chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + nu;
                        chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                        chgcnybrccynm = 'CHG_CNY_BRCCY_' + nu;
                        chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                        chgusdccynm = 'CHG_USD_CCY_' + nu;
                        chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                        chgusdbrccynm = 'CHG_USD_BRCCY_' + nu;
                        chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                        chgamttempnm = 'CHG_AMT_TEMP_' + nu;
                        chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                        chgccytempnm = 'CHG_CCY_TEMP_' + nu;
                        chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                        chgamthonm = 'CHG_AMT_HO_' + nu;
                        chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                        chgamtbrnm = 'CHG_AMT_BR_' + nu;
                        chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                        chgamtoriginnm = 'CHG_AMT_ORIGIN_' + nu;
                        chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                        chginesedescnm = 'CHINESE_DESC_' + nu;
                        chgineseObject = getObject(chginesedescnm, 'CHINESE_DESC_');
                        chgmthdnm = 'CHG_MTHD_' + nu;
                        chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                        chgbyName = 'CHG_BY_' + nu;
                        chgbyObject = getObject(chgbyName, 'CHG_BY_');
                        if (chgdescObject.value == 'CABLE' && (sFeeName == 'CABLEF' || sFeeName == 'CABLEB')) {
                            chgineseObject.value = '???';
                            chgcnyccyObject.value = cpArr[number][4];
                            chgcnybrccyObject.value = cpArr[number][4];
                            SYT_ChangeFldClass(chgmthdObject, 'M');
                            SYT_ChangeFldClass(chgbyObject, 'M');
                            EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                            FEE_LEVEL = cpArr[number][5];
                            if (FEE_LEVEL == 'HEADOFFICE') {
                                chgamthoObject.value = SYS_BeFloat(chgamthoObject.value) + SYS_BeFloat(FLAT_AMT);
                                chgamthoObject.value = SYT_CCY_AMT(chgcnyccyObject.value, chgamthoObject.value);
                                EEHtml.fireEvent(chgamthoObject, 'onchange');
                            } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                                chgamtbrObject.value = SYS_BeFloat(chgamtbrObject.value) + SYS_BeFloat(FLAT_AMT);
                                chgamtbrObject.value = SYT_CCY_AMT(chgcnyccyObject.value, chgamtbrObject.value);
                                EEHtml.fireEvent(chgamtbrObject, 'onchange');
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GetComm = function(feeName, trxAmt, trxRt, period, trxCcy, chgFlg, code, date1, date2, ecFlag, favFlag, usdccyFlag) {
    try {
        var FEE_CCY; // Utility Auto Fix Comments
        var FEE_LEVEL; // Utility Auto Fix Comments
        var FEE_ORIGIN; // Utility Auto Fix Comments
        var FEE_ORIGIN1; // Utility Auto Fix Comments
        var FEE_ORIGIN2; // Utility Auto Fix Comments
        var FEE_RT; // Utility Auto Fix Comments
        var FEE_STAN; // Utility Auto Fix Comments
        var FEE_STAN1; // Utility Auto Fix Comments
        var FEE_STAN2; // Utility Auto Fix Comments
        var FEE_TYPE; // Utility Auto Fix Comments
        var FLAT_AMT; // Utility Auto Fix Comments
        var INCR_FEE_RT; // Utility Auto Fix Comments
        var MAX_FEE; // Utility Auto Fix Comments
        var MINIMUM; // Utility Auto Fix Comments
        var MIN_FEE; // Utility Auto Fix Comments
        var a; // Utility Auto Fix Comments
        var chgamtbrObject; // Utility Auto Fix Comments
        var chgamtbrnm; // Utility Auto Fix Comments
        var chgamtcustObject; // Utility Auto Fix Comments
        var chgamtcustnm; // Utility Auto Fix Comments
        var chgamthoObject; // Utility Auto Fix Comments
        var chgamthonm; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgamtoriginnm; // Utility Auto Fix Comments
        var chgamttempObject; // Utility Auto Fix Comments
        var chgamttempnm; // Utility Auto Fix Comments
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgccynm; // Utility Auto Fix Comments
        var chgccytempObject; // Utility Auto Fix Comments
        var chgccytempnm; // Utility Auto Fix Comments
        var chgcnybrccyObject; // Utility Auto Fix Comments
        var chgcnybrccynm; // Utility Auto Fix Comments
        var chgcnyccyObject; // Utility Auto Fix Comments
        var chgcnyccynm; // Utility Auto Fix Comments
        var chgcnycustccyObject; // Utility Auto Fix Comments
        var chgcnycustccynm; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chgdescnm; // Utility Auto Fix Comments
        var chgflgnm; // Utility Auto Fix Comments
        var chgflgobject; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var chgmthdnm; // Utility Auto Fix Comments
        var chgusdbrObject; // Utility Auto Fix Comments
        var chgusdbrccyObject; // Utility Auto Fix Comments
        var chgusdbrccynm; // Utility Auto Fix Comments
        var chgusdbrccyobject; // Utility Auto Fix Comments
        var chgusdbrnm; // Utility Auto Fix Comments
        var chgusdccyObject; // Utility Auto Fix Comments
        var chgusdccynm; // Utility Auto Fix Comments
        var chgusdhoObject; // Utility Auto Fix Comments
        var chgusdhonm; // Utility Auto Fix Comments
        var chineseObject; // Utility Auto Fix Comments
        var chinesedescName; // Utility Auto Fix Comments
        var countcodeObject; // Utility Auto Fix Comments
        var countcodenm; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var enddtName; // Utility Auto Fix Comments
        var enddtObject; // Utility Auto Fix Comments
        var favRtFlag; // Utility Auto Fix Comments
        var feeCcyRt; // Utility Auto Fix Comments
        var feenameObject; // Utility Auto Fix Comments
        var feenamenm; // Utility Auto Fix Comments
        var feestanName; // Utility Auto Fix Comments
        var feestanObject; // Utility Auto Fix Comments
        var funcnamenm; // Utility Auto Fix Comments
        var funcnameobject; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var iii; // Utility Auto Fix Comments
        var maxfeeObject; // Utility Auto Fix Comments
        var maxfeeccyName; // Utility Auto Fix Comments
        var maxfeeheadName; // Utility Auto Fix Comments
        var maxfeeheadObject; // Utility Auto Fix Comments
        var number; // Utility Auto Fix Comments
        var period1; // Utility Auto Fix Comments
        var period2; // Utility Auto Fix Comments
        var period3; // Utility Auto Fix Comments
        var periodObject; // Utility Auto Fix Comments
        var periodlist; // Utility Auto Fix Comments
        var periodnm; // Utility Auto Fix Comments
        var periods; // Utility Auto Fix Comments
        var periods1; // Utility Auto Fix Comments
        var periods2; // Utility Auto Fix Comments
        var periods3; // Utility Auto Fix Comments
        var periodss; // Utility Auto Fix Comments
        var prodcodeObject; // Utility Auto Fix Comments
        var prodcodenm; // Utility Auto Fix Comments
        var startdtName; // Utility Auto Fix Comments
        var startdtObject; // Utility Auto Fix Comments
        var trxAmt1; // Utility Auto Fix Comments
        var trxAmt2; // Utility Auto Fix Comments
        var trxAmtlist; // Utility Auto Fix Comments
        var trxCcyRt; // Utility Auto Fix Comments
        var trxamtObject; // Utility Auto Fix Comments
        var trxamtnm; // Utility Auto Fix Comments
        var trxccyObject; // Utility Auto Fix Comments
        var trxccynm; // Utility Auto Fix Comments
        var trxrtObject; // Utility Auto Fix Comments
        var trxrtnm; // Utility Auto Fix Comments
        var usdFlag; // Utility Auto Fix Comments
        favRtFlag = false;
        usdFlag = false;
        if (favFlag) {
            favRtFlag = true;
        }
        if (usdccyFlag) {
            usdFlag = true;
        }

        if (ecFlag != 'EC' && !favRtFlag) {
            for (a = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); a < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); a++) {
                feenamenm = 'FEE_NAME_' + a;
                feenameObject = getObject(feenamenm, 'FEE_NAME_');
                chgdescnm = 'CHG_DESC_' + a;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                trxamtnm = 'TRX_AMT_' + a;
                trxamtObject = getObject(trxamtnm, 'TRX_AMT_');
                trxrtnm = 'TRX_RT_' + a;
                trxrtObject = getObject(trxrtnm, 'TRX_RT_');
                periodnm = 'PERIOD_' + a;
                periodObject = getObject(periodnm, 'PERIOD_');
                trxccynm = 'TRX_CCY_' + a;
                trxccyObject = getObject(trxccynm, 'TRX_CCY_');
                countcodenm = 'COUNT_CODE_' + a;
                countcodeObject = getObject(countcodenm, 'COUNT_CODE_');
                prodcodenm = 'PROD_CODE_' + a;
                prodcodeObject = getObject(prodcodenm, 'PROD_CODE_');
                funcnamenm = 'FUNC_NAME_' + a; // Utility Auto Fix Comments
                funcnameobject = getObject(funcnamenm, 'FUNC_NAME_');
                chgflgnm = 'CHG_FLG_' + a; // Utility Auto Fix Comments
                chgflgobject = getObject(chgflgnm, 'CHG_FLG_');
                if (chgdescObject.value == feeName) // && feenameObject.value=='')
                {
                    feenameObject.value = feeName;
                    trxamtObject.value = trxAmt;
                    trxrtObject.value = trxRt;
                    periodObject.value = period;
                    trxccyObject.value = trxCcy;
                    countcodeObject.value = code;
                    funcnameobject.value = 'GetComm';
                    chgflgobject.value = chgFlg;
                }
            }
        }
        for (number = 0; number < feeArr.length; number++)
        // Utility Auto Fix Comments
        { // Utility Auto Fix Comments
            FEE_TYPE = feeArr[number][4]; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments
        FEE_LEVEL = feeArr[number][3];
        if (FEE_TYPE == 'Flat Amount' && ecFlag != 'EC') {
            FLAT_AMT = SYS_BeFloat(feeArr[number][5]);
            FLAT_AMT = SYT_CCY_AMT(feeArr[number][2], FLAT_AMT);
            for (iii = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); iii < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); iii++) {
                chgdescnm = 'CHG_DESC_' + iii;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + iii;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + iii;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + iii;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + iii;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + iii;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + iii;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + iii;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + iii;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + iii;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + iii;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + iii;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + iii;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + iii;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + iii;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + iii;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + iii;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + iii;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FLAT_AMT;
                        chgcnycustccyObject.value = feeArr[number][2];
                        EEHtml.fireEvent(chgamtcustObject, 'onchange');
                        EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FLAT_AMT;
                            chgcnyccyObject.value = feeArr[number][2];
                            EEHtml.fireEvent(chgamthoObject, 'onchange');
                            EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                        } else if (!usdFlag) {
                            chgccyObject.value = feeArr[number][2];
                            chgamtoriginObject.value = FLAT_AMT;
                        }
                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FLAT_AMT;
                        chgcnybrccyObject.value = feeArr[number][2];
                        EEHtml.fireEvent(chgamtbrObject, 'onchange');
                        EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FLAT_AMT;
                            chgusdccyObject.value = feeArr[number][2];
                            EEHtml.fireEvent(chgusdhoObject, 'onchange');
                            EEHtml.fireEvent(chgusdccyObject, 'onchange');
                        } else if (usdFlag) {
                            chgccyObject.value = feeArr[number][2];
                            chgamtoriginObject.value = FLAT_AMT;
                        }


                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FLAT_AMT;
                        chgusdbrccyobject.value = feeArr[number][2];
                        EEHtml.fireEvent(chgusdbrObject, 'onchange');
                        EEHtml.fireEvent(chgusdccyObject, 'onchange');
                    } else if (FEE_LEVEL == 'CUST' && !favRtFlag) {

                        chgamtcustObject.value = FLAT_AMT;
                        chgusdccyObject.value = feeArr[number][2];
                        EEHtml.fireEvent(chgamtcustObject, 'onchange');
                        EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                    }
                }
            }
        } else if (FEE_TYPE == 'Flat per Period(MINIMUM)') {
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            MINIMUM = SYS_BeFloat(feeArr[number][7]);
            days = SYS_BeFloat(feeArr[number][22]);
            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
            periods = Math.ceil(SYS_BeFloat(period) / days);
            if ((SYS_BeFloat(period) / days) > 1) {
                periods = SYS_BeFloat(periods) - 1;
                a = SYS_BeFloat(period) - days * periods;
                if (SYS_BeFloat(a) > 10) {
                    periods += 1;
                }
            }

            FEE_ORIGIN = SYS_BeFloat(trxAmt) * FEE_RT * (SYS_BeFloat(periods)) / 1000;
            if (feeCcyRt.length > 0) { // Utility Auto Fix Comments
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1]); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < SYS_BeFloat(periods) * SYS_BeFloat(MINIMUM) && !favRtFlag) {

                FEE_ORIGIN = SYS_BeFloat(periods) * SYS_BeFloat(MINIMUM);
                FEE_CCY = feeArr[number][2];
            }

            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                startdtName = 'START_DT_COMM_' + i;
                startdtObject = getObject(startdtName, 'START_DT_COMM_');
                enddtName = 'END_DT_' + i;
                enddtObject = getObject(enddtName, 'END_DT_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    if (ecFlag != 'EC' && !favRtFlag) {
                        startdtObject.value = date1 + date2;
                        SYT_ChangeFldClass(chgmthdObject, 'M');
                        SYT_ChangeFldClass(chgbyObject, 'M');
                    }
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {

                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Flat per Period') {
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            MINIMUM = feeArr[number][7];
            days = feeArr[number][22];
            periods = Math.ceil(SYS_BeFloat(period) / SYS_BeFloat(days));
            if (SYS_BeFloat(periods) == 0) {
                periods = 1;
            }
            FEE_ORIGIN = SYS_BeFloat(trxAmt) * FEE_RT * (SYS_BeFloat(periods)) / 1000;
            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) {
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1]);
            }
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods) && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods);
                FEE_CCY = feeArr[number][2];
            }
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }


                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Fixed% per Amout Period') {
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            // //////////////////////////alert('1233333'+feeArr[number][23]);
            INCR_FEE_RT = SYS_BeFloat(feeArr[number][23]);
            // ////alert('ffff'+INCR_FEE_RT);
            MINIMUM = feeArr[number][7];
            days = feeArr[number][22];
            ////////////////////////////alert('period'+period+'days'+days);
            periodss = Math.ceil(SYS_BeFloat(period) / SYS_BeFloat(days));
            // alert('period'+period+'periodss'+periodss);

            periods = SYS_BeFloat(periodss) - 1;
            if (periods < 0) {
                periods = 0;
            }
            // alert(periods);
            ////////////////////////////alert('periods'+periods);
            //alert('xiaobai'+trxAmt+'.....'+FEE_RT+'....'+INCR_FEE_RT+'.......'+periods);
            FEE_ORIGIN = SYS_BeFloat(trxAmt) * FEE_RT / 1000 + SYS_BeFloat(trxAmt) * SYS_BeFloat(INCR_FEE_RT) * SYS_BeFloat(periods) / 1000;
            //alert('ty'+FEE_ORIGIN);


            FEE_CCY = trxCcy;
            ////////////////////////////////////////////////////////////////////////////////////////////alert('trxCcy'+trxCcy+'rt'+trxRt);
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) {
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1]);
            }
            //////alert('fd'+FEE_STAN);
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < MINIMUM && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MINIMUM);
                FEE_CCY = feeArr[number][2];

            }
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            ////////////////////////////////////////////////////////////////////////////////////////////alert(FEE_CCY+':'+'FEE_CCY');
            //////////////////////////////////////////////////////////////////////////////////////////////////alert('1'+FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) { // alert(FEE_LEVEL)
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');

                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');

                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyObject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') { //////////////////////////////////////////////////////////////////////////////////////////////////alert('chgdescObject'+chgdescObject.value);
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    //////////////////////////////////////////////////////////////////////////////////////////////////alert(chineseObject.value);
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;

                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Fixed% per Amout Period-1') {
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            INCR_FEE_RT = SYS_BeFloat(feeArr[number][23]);
            MINIMUM = feeArr[number][7];
            days = feeArr[number][22];
            periods = Math.ceil(SYS_BeFloat(period) / SYS_BeFloat(days));
            FEE_ORIGIN = SYS_BeFloat(trxAmt) * SYS_BeFloat(periods) * SYS_BeFloat(INCR_FEE_RT) / 1000;

            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');

            if (feeCcyRt.length > 0) { // Utility Auto Fix Comments
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxRt) / SYS_BeFloat(feeCcyRt[0][1]); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < MINIMUM && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MINIMUM);
                FEE_CCY = feeArr[number][2];
            }
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        //							chgamtcustObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        //							chgamtbrObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        //							chgusdbrObject.fireEvent('onchange');
                        //							chgusdccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Fixed per Amout & Period') {
            trxAmtlist = trxAmt.split(';');
            trxAmt1 = SYS_BeFloat(trxAmtlist[0]);
            trxAmt2 = SYS_BeFloat(trxAmtlist[1]);
            // //////////////////////////////////////////////////alert(period);
            periodlist = period.split(';');
            period1 = periodlist[0];
            period2 = periodlist[1];
            period3 = periodlist[2];
            days = feeArr[number][22];
            ////////////////////////////////////////////////////alert(periodlist[2]);
            periods1 = Math.ceil(SYS_BeFloat(period1) / SYS_BeFloat(days));
            periods2 = Math.ceil(SYS_BeFloat(period2) / SYS_BeFloat(days));
            periods3 = Math.ceil(SYS_BeFloat(period3) / SYS_BeFloat(days));
            periods = periods1 - periods2;
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            INCR_FEE_RT = SYS_BeFloat(feeArr[number][23]);
            MINIMUM = feeArr[number][7];
            ////////////////////////////////////////////////////alert('trxAmt1:'+trxAmt1+'----periods3:'+periods3+'------INCR_FEE_RT:'+INCR_FEE_RT)
            FEE_ORIGIN1 = SYS_BeFloat(trxAmt1) * SYS_BeFloat(periods3) * INCR_FEE_RT / 1000;
            //  //////////////////////////////////////////////////alert('FEE_ORIGIN1'+FEE_ORIGIN1);
            FEE_ORIGIN2 = SYS_BeFloat(trxAmt2) * (SYS_BeFloat(INCR_FEE_RT) / 1000 * (1 + SYS_BeFloat(periods)));
            // //////////////////////////////////////////////////alert('FEE_ORIGIN2'+FEE_ORIGIN2);
            FEE_ORIGIN = SYS_BeFloat(FEE_ORIGIN1) + SYS_BeFloat(FEE_ORIGIN2);
            //  //////////////////////////////////////////////////alert('2'+FEE_ORIGIN);
            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) { // Utility Auto Fix Comments
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxRt) / SYS_BeFloat(feeCcyRt[0][1]); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < MINIMUM && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MINIMUM);
                FEE_CCY = feeArr[number][2];
            }
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        //							chgamtcustObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        //							chgamtbrObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        //							chgusdbrObject.fireEvent('onchange');
                        //							chgusdccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Fixed% Per Mounth') {
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            MINIMUM = feeArr[number][7];
            periods = Math.ceil(SYS_BeFloat(period) / 30);
            FEE_ORIGIN = SYS_BeFloat(trxAmt) * SYS_BeFloat(periods) * SYS_BeFloat(FEE_RT) / 1000;
            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) { // Utility Auto Fix Comments
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1]); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < MINIMUM && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MINIMUM);
                FEE_CCY = feeArr[number][2];
            }
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        //							chgamtcustObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        //							chgamtbrObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        if (chgusdbrccyObject.value == '') {
                            chgusdbrccyObject.value = FEE_CCY;
                        }
                        //
                        //							chgusdbrObject.fireEvent('onchange');
                        //							chgusdccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Flat per Period(Period MINIMUM)') {
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            MINIMUM = feeArr[number][7];
            days = feeArr[number][22];
            periods = Math.ceil(SYS_BeFloat(period) / SYS_BeFloat(days));
            if (SYS_BeFloat(periods) == 0) {
                periods = 1;
            }
            FEE_ORIGIN = SYS_BeFloat(trxAmt) * FEE_RT * (SYS_BeFloat(periods)) / 1000;
            ////////////////////////////////////////////////alert('FEE_ORIGIN'+FEE_ORIGIN);
            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) {
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1]);
                //alert('FEE_STAN'+FEE_STAN);
            }
            if (trxCcy == feeArr[number][2]) { ////////////////////////////////////////////////////////////////////////////////////////////////////////////////alert('FEE_STAN'+FEE_STAN);
                FEE_STAN = FEE_ORIGIN;
            }
            if (SYS_BeFloat(FEE_STAN) < SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods) && !favRtFlag) {
                //////////////////////////////////////////////////alert('min'+SYS_BeFloat(MINIMUM)*SYS_BeFloat(periods));
                FEE_ORIGIN = SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods);
                //////////////////////////////////////////////////alert('FEE_ORIGIN'+FEE_ORIGIN);
                FEE_CCY = feeArr[number][2];
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////alert('feeccy'+FEE_CCY)
            }

            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        //							chgamtcustObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        //							chgusdbrObject.fireEvent('onchange');
                        //							chgusdccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (FEE_TYPE == 'Flat per Period Sub(Period MINIMUM)') {
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////alert('trxAmt'+trxAmtlist);
            trxAmtlist = trxAmt.split(';');
            trxAmt1 = SYS_BeFloat(trxAmtlist[0]);
            trxAmt2 = SYS_BeFloat(trxAmtlist[1]);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////alert('trxAmt1'+trxAmt1);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////alert('trxAmt2'+trxAmt2);
            periodlist = period.split(';');
            period1 = periodlist[0];
            period2 = periodlist[1];
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            MINIMUM = feeArr[number][7];
            days = feeArr[number][22];
            periods1 = Math.ceil(SYS_BeFloat(period1) / SYS_BeFloat(days));
            periods2 = Math.ceil(SYS_BeFloat(period2) / SYS_BeFloat(days));
            FEE_ORIGIN1 = SYS_BeFloat(trxAmt1) * FEE_RT * (SYS_BeFloat(periods1)) / 1000;
            FEE_ORIGIN2 = SYS_BeFloat(trxAmt2) * FEE_RT * (SYS_BeFloat(periods2)) / 1000;
            FEE_CCY = trxCcy;
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) {
                FEE_STAN1 = SYS_BeFloat(FEE_ORIGIN1) * SYS_BeFloat(trxRt) / SYS_BeFloat(feeCcyRt[0][1]);
                FEE_STAN2 = SYS_BeFloat(FEE_ORIGIN2) * SYS_BeFloat(trxRt) / SYS_BeFloat(feeCcyRt[0][1]);
            }
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN1 = FEE_ORIGIN1;
                FEE_STAN2 = FEE_ORIGIN2;
            }
            if (SYS_BeFloat(FEE_STAN1) < SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods1) && !favRtFlag) {

                FEE_ORIGIN1 = SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods1);
                FEE_CCY = feeArr[number][2];
            }
            if (SYS_BeFloat(FEE_STAN2) < SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods2) && !favRtFlag) {

                FEE_ORIGIN2 = SYS_BeFloat(MINIMUM) * SYS_BeFloat(periods2);
                FEE_CCY = feeArr[number][2];
            }
            FEE_ORIGIN = SYS_BeFloat(FEE_ORIGIN2) - SYS_BeFloat(FEE_ORIGIN1);
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        EEHtml.fireEvent(chgamtcustObject, 'onchange');
                        EEHtml.fireEvent(chgcnyccyObject, 'onchange');

                    } else if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;
                            EEHtml.fireEvent(chgamthoObject, 'onchange');
                            EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        chgcnybrccyObject.value = FEE_CCY;
                        EEHtml.fireEvent(chgamtbrObject, 'onchange');
                        EEHtml.fireEvent(chgcnyccyObject, 'onchange');

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {
                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            EEHtml.fireEvent(chgusdhoObject, 'onchange');
                            EEHtml.fireEvent(chgusdccyObject, 'onchange');
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        EEHtml.fireEvent(chgusdbrObject, 'onchange');
                        EEHtml.fireEvent(chgusdccyObject, 'onchange');

                    }
                }
            }
        } else if (FEE_TYPE == 'Percentage(Min/Max)') {
            ////alert('TRXCCY'+trxCcy+'feearr[2][]'+feeArr[number][2]);

            //////////////////////////////////////////////////////alert('FEE_ORIGIN'+FEE_ORIGIN);
            FEE_CCY = '';
            FEE_RT = SYS_BeFloat(feeArr[number][8]);
            MIN_FEE = SYS_BeFloat(feeArr[number][7]);
            MAX_FEE = SYS_BeFloat(feeArr[number][6]);
            feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
            trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
            if (feeCcyRt.length > 0) {

                FEE_STAN = SYS_BeFloat(trxAmt) * (SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1])) * FEE_RT / 1000;
                ////alert(FEE_STAN);
                FEE_ORIGIN = SYS_BeFloat(trxAmt) * FEE_RT / 1000;
            }
            ////alert('FEE_ORIGIN'+FEE_ORIGIN+'trxAmt'+trxAmt);
            if (trxCcy == feeArr[number][2]) {
                FEE_STAN = SYS_BeFloat(FEE_ORIGIN);
            }
            FEE_CCY = trxCcy;
            //alert('FEE_STAN'+FEE_STAN+'\nMAX_FEE:'+MAX_FEE);
            if (FEE_STAN < MIN_FEE && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MIN_FEE);
                FEE_CCY = feeArr[number][2];

            } else if (FEE_STAN > MAX_FEE && SYS_BeFloat(MAX_FEE) > 0 && !favRtFlag) {
                FEE_ORIGIN = SYS_BeFloat(MAX_FEE);
                FEE_CCY = feeArr[number][2];
            }
            FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
            //alert('1684 FEE_CCY'+FEE_CCY);
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                chinesedescName = 'CHINESE_DESC_' + i;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                maxfeeheadName = 'MAX_FEE_HEAD_' + i;
                maxfeeheadObject = getObject(maxfeeheadName, 'MAX_FEE_HEAD_');
                feestanName = 'FEE_STAN_' + i;
                feestanObject = getObject(feestanName, 'FEE_STAN_');
                //					maxfeeccyName='MAX_FEE_CCY_'+i;
                //					maxfeeObject=getObject(maxfeeccyName,'MAX_FEE_CCY_');
                if (chgdescObject.value == feeName && feeArr[number][2] == 'CNY') {
                    chineseObject.value = feeArr[number][24];
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                        chgamtcustObject.value = FEE_ORIGIN;
                        chgcnycustccyObject.value = FEE_CCY;
                        //alert('xiaobai2  1748 head'+chgcnycustccyObject.value+' feename'+feeName+'\nchgamthoObject'+chgamtcustObject.value);	
                        if (ecFlag != 'EC') { //alert('cust diao'+i+':'+number);
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    } else if (FEE_LEVEL == 'HEADOFFICE') { //alert('xiaobai'+chgcnyccyObject.value+feeName+':favRtFlag'+favRtFlag);
                        if (!favRtFlag) {
                            chgamthoObject.value = FEE_ORIGIN;
                            chgcnyccyObject.value = FEE_CCY;

                            //alert('FEE_ORIGIN'+FEE_ORIGIN);
                            //alert('xiaobai2  1748 head'+chgcnyccyObject.value+' feename'+feeName+'\nchgamthoObject'+chgamthoObject.value+'\nchgcnyccyObject'+chgcnyccyObject.value);	

                            if (ecFlag != 'EC') {
                                //alert('head diao'+i);
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (!usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                            maxfeeheadObject.value = MAX_FEE;
                            feestanObject.value = FEE_STAN;
                            //alert('favcomm1761  chgamtoriginObject.value'+chgamtoriginObject.value);
                        }
                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgamtbrObject.value = FEE_ORIGIN;
                        //////alert('BRANCH'+chgamtbrObject.value);
                        chgcnybrccyObject.value = FEE_CCY;
                        //							chgamtbrObject.fireEvent('onchange');
                        //							chgcnyccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                } else if (chgdescObject.value == feeName && feeArr[number][2] == 'USD') {
                    chineseObject.value = feeArr[number][24];
                    if (FEE_LEVEL == 'HEADOFFICE') {

                        if (!favRtFlag) {
                            chgusdhoObject.value = FEE_ORIGIN;
                            chgusdccyObject.value = FEE_CCY;
                            if (ecFlag != 'EC') {
                                getFeeFinal_Comm(i);
                            } else {
                                getFeeFinal_Comm(i, 'EC');
                            }
                        } else if (usdFlag) {
                            chgccyObject.value = FEE_CCY;
                            chgamtoriginObject.value = FEE_ORIGIN;
                        }

                    } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                        chgusdbrObject.value = FEE_ORIGIN;
                        chgusdbrccyObject.value = FEE_CCY;
                        //							chgusdbrObject.fireEvent('onchange');
                        //							chgusdccyObject.fireEvent('onchange');
                        if (ecFlag != 'EC') {
                            getFeeFinal_Comm(i);
                        } else {
                            getFeeFinal_Comm(i, 'EC');
                        }

                    }
                }
            }
        } else if (feeArr[number][1] == feeName && chgFlg == 'N') { ////alert('xiaobai');
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + i;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgcnyccynm = 'CHG_CNY_CCY_' + i;
                chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                chgusdccynm = 'CHG_USD_CCY_' + i;
                chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                chgamttempnm = 'CHG_AMT_TEMP_' + i;
                chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                chgccytempnm = 'CHG_CCY_TEMP_' + i;
                chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgamthonm = 'CHG_AMT_HO_' + i;
                chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                chgamtbrnm = 'CHG_AMT_BR_' + i;
                chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                chgusdhonm = 'CHG_USD_HO_' + i;
                chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                chgusdbrnm = 'CHG_USD_BR_' + i;
                chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                chgamtcustnm = 'CHG_AMT_CUST_' + i;
                chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                startdtName = 'START_DT_COMM_' + i;
                startdtObject = getObject(startdtName, 'START_DT_COMM_');
                enddtName = 'END_DT_' + i;
                enddtObject = getObject(enddtName, 'END_DT_');
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgbyName = 'CHG_BY_' + i;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                if (chgdescObject.value == feeName) {
                    //alert('1874    chgflg=n '+'number'+number+'\ni'+i);
                    chgamtoriginObject.value = 0;
                    chgamthoObject.value = 0;
                    chgamtbrObject.value = 0;
                    chgamtcustObject.value = 0;
                    chgusdhoObject.value = 0;
                    chgusdbrObject.value = 0;
                    chgccyObject.value = '';
                    ////////////////////////////////////////////////////////////////////alert(chgusdccyObject);
                    chgcnyccyObject.value = '';
                    chgcnycustccyObject.value = '';
                    chgcnybrccyObject.value = '';
                    chgusdccyObject.value = '';
                    startdtObject.value = '';
                    enddtObject.value = '';
                    SYT_ChangeFldClass(chgmthdObject, 'O');
                    SYT_ChangeFldClass(chgbyObject, 'O');
                    getFeeFinal_Comm(i);

                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GetFee = function(FeeNameList, BR_Code, Cust_ID) {
    try {
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ') {
            //return;
            feeArr = SYS_GetFee('COMM_MASTER', FeeNameList, 'CNY;USD', BR_Code, Cust_ID);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.GetVoucherDesc_COMM = function() {
    try {
        var t1; // Utility Auto Fix Comments
        var t2; // Utility Auto Fix Comments
        t1 = '';
        t2 = '';

        t1 = document.MAINFORM.COMM_CUST_NM.value + '|';
        t2 = document.MAINFORM.COMM_CUST_NM2.value + '|';

        t1 = t1 + document.MAINFORM.COMM_DCLR_NO1.value + '|';
        t2 = t2 + document.MAINFORM.COMM_DCLR_NO2.value + '|';

        document.MAINFORM.COMM_VCH_DESC1.value = t1;
        document.MAINFORM.COMM_VCH_DESC2.value = t2;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.InitChg = function() {
    try {
        var ChgforAccount; // Utility Auto Fix Comments
        var argumentsNumber; // Utility Auto Fix Comments
        var newCell; // Utility Auto Fix Comments
        var newRow; // Utility Auto Fix Comments
        feeNumber = InitChg.arguments.length;
        argumentsNumber = 0;
        SelectText();
        for (i = (SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)); i < (feeNumber + SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)); i++) {
            newRow = '';
            newCell = '';
            newRow = ChgforAccount.insertRow(-1);
            newCell = newRow.insertCell(0);
            newCell.innerHTML = "<tr class='td_gray'><td align='center'  class='td_gray' ><input type='text'  readonly='true' name='CHINESE_DESC_" + i + "'id='CHINESE_DESC_" + i + "' class='CHAR_P' title='CHINESE_DESC_" + i + "' size='16' maxlength='54'  value=''><input type='text' name='CHG_DESC_" + i + "'id='CHG_DESC_" + i + "' class='CHAR_P' title='CHG_DESC_" + i + "' size='16' maxlength='18'  value='" + InitChg.arguments[argumentsNumber] + "'><input type='hidden'  readonly='true' name='FUNC_NAME_" + i + "'id='FUNC_NAME_" + i + "' class='CHAR_P' title='FUNC_NAME_" + i + "' size='16' maxlength='54'  value=''><input type='hidden'  readonly='true' name='CHG_FLG_" + i + "'id='CHG_FLG_" + i + "' class='CHAR_P' title='CHG_FLG_" + i + "' size='2' maxlength='2'  value=''></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            argumentsNumber++;

            newCell = newRow.insertCell(1);
            newCell.innerHTML = "<td align='center'><input type='text' name='CHG_CCY_" + i + "'  title='CHG_CCY_" + i + "' size='3' maxlength='3' class='CHAR_P' readonly='true' onChange='CHG_CCY_onchange(this.name)'><input type='hidden' name='CHG_CCY_RT_" + i + "'  title='CHG_CCY_RT_" + i + "' size='3' maxlength='3' class='RATE_O'  onChange='CHG_CCY_RT_onchange(this.name)'>&nbsp;" + "<input name='CHG_AMT_ORIGIN_" + i + "'  readonly='true' class='AMT_P' title='CHG_AMT_ORIGIN_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_ORIGIN_onchange(this.name)' ><input type='hidden'name='CHG_AMT_TEMP_" + i + "' class='AMT_O' title='CHG_AMT_TEMP_" + i + "' size='12' maxlength='18' value='0.00'><input type='hidden' name='CHG_CCY_TEMP_" + i + "'  title='CHG_CCY_TEMP_" + i + "' size='3' maxlength='3' class='CHAR_O'><input type='hidden'name='MAX_FEE_HEAD_" + i + "' class='AMT_O' title='MAX_FEE_HEAD_" + i + "' size='12' maxlength='18' value='0.00' onchange=''><input type='hidden'name='FEE_STAN_" + i + "' class='AMT_O' title='FEE_STAN_" + i + "' size='12' maxlength='18' value='0.00' onchange=''></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(2);
            newCell.innerHTML = "<td align='center'><input type='text'  readonly='true' name='RCV_CCY_" + i + "'  title='RCV_CCY_" + i + "'  id='RCV_CCY_" + i + "'size='3' maxlength='3' class='CHAR_P'  onChange='RCV_CCY_onchange(this.name)'><input type='hidden' name='RCV_CCY_RT" + i + "'  title='RCV_CCY_RT_" + i + "'  id='RCV_CCY_RT_" + i + "'size='3' maxlength='3' class='RATE_O'  onChange='RCV_CCY_RT_onchange(this.name)'>&nbsp;" + "<input  readonly='true' name='RCV_AMT_" + i + "'  id='RCV_AMT_" + i + "' class='AMT_P' title='RCV_AMT_" + i + "' size='12' maxlength='18'  value='0.00'   onChange='RCV_AMT_onchange(this.name)'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(3);
            newCell.innerHTML = "<td align='center'><input name='RCV_EQ_AMT_TEMP_" + i + "'  id='RCV_EQ_AMT_TEMP_" + i + "' class='AMT_O' title='RCV_EQ_AMT_TEMP_" + i + "' size='12' maxlength='18'  value='0.00'  onChange='RCV_EQ_AMT_TEMP_onchange(this.name)'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(4);
            newCell.innerHTML = "<td align='center'><input type='text'  readonly='true' name='DLY_CCY_" + i + "' class='CHAR_P' title='DLY_CCY_" + i + "' id='DLY_CCY_" + i + "' size='3' maxlength='3' onchange='DLY_CCY_onchange(this.name)'>&nbsp;" + "<input readonly='true' name='DLY_AMT_" + i + "' class='AMT_P' title='DLY_AMT_" + i + "' size='12' maxlength='18'  value='0.00' onchange='DLY_AMT_onchange(this.name)'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(5);
            newCell.innerHTML = "<td align='center'><select name='CHG_BY_" + i + "' size='1' class='CHAR_O' id='CHG_BY_" + i + "' title='CHG_BY" + i + "' onChange='CHG_BY_onchange(this.name)' ><option value=''></option><option value='Our Customer'>" + fieldText1 + "</option><option value='Counter Party'>" + fieldText2 + "</option><option value='Second Bene'>" + fieldText3 + "</option></select></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(6);
            newCell.innerHTML = "<td align='center'><select name='CHG_MTHD_" + i + "' size='1' class='CHAR_O' id='CHG_MTHD_" + i + "' onChange='CHG_MTHD_onchange(this.name)' ><option value=''></option><option value='TRANSACTION'>" + mthdText1 + "</option><option value='TERM'>" + mthdText2 + "</option> <option value='DEFERRED'>" + mthdText3 + "</option><option value='FREE'>" + mthdText4 + "</option></select></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(7);
            newCell.innerHTML = "<td align='center'><input  type='text' name='CHG_FAV_RT_" + i + "' class='RATE_O' id='CHG_FAV_RT_" + i + "' title='CHG_FAV_RT_" + i + "' size='6' maxlength='6'  value='0' onchange='CHG_FAV_RT_onchange(this.name)' >%</td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(8);
            newCell.innerHTML = "<td align='center'><input  readonly='true' name='CHG_FAV_RMB_" + i + "' class='AMT_P' id='CHG_FAV_RMB_" + i + "' title='CHG_FAV_RMB_" + i + "' size='12' maxlength='18'  value='0.00' onchange='CHG_FAV_RMB_onchange(this.name)' ><input type='Button' name='SHOW_TIME_" + i + "' value='Time' onClick='SET_BUTTON_onclick(this.name)'><input  type='hidden'name='CHG_TEMP_RMB_" + i + "' class='AMT_P' id='CHG_TEMP_RMB_" + i + "' title='CHG_TEMP_RMB_" + i + "' size='12' maxlength='18'  value='0.00'  ></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(9);
            newCell.innerHTML = "<td align='center' style='display:none '><input type='hidden' name='CHG_EXCH_RT_" + i + "'  title='CHG_EXCH_RT_" + i + "'  id='CHG_EXCH_RT_" + i + "'size='3' maxlength='3' class='RATE_O'  onchange='CHG_EXCH_RT_onchange(this.name)'><input type='hidden' name='TRX_AMT_" + i + "' class='AMT_O' id='TRX_AMT_" + i + "' title='TRX_AMT_" + i + "' size='12' maxlength='18' value=0.00><input  type='hidden' name='TRX_RT_" + i + "' class='RATE_O' id='TRX_RT_" + i + "' title='TRX_RT_" + i + "' size='10' maxlength='10'><input  type='hidden' name='PERIOD_" + i + "' class='INT_O' id='PERIOD_" + i + "' title='PERIOD_" + i + "' size='10' maxlength='10' value=0><input type='hidden'name='TRX_CCY_" + i + "' class='CHAR_O' id='TRX_CCY_" + i + "' title='TRX_CCY_" + i + "' size='4' maxlength='4'><input type='hidden'name='FEE_NAME_" + i + "' class='CHAR_O' id='FEE_NAME_" + i + "' title='FEE_NAME_" + i + "' size='20' maxlength='20'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(10);
            newCell.innerHTML = "<td align='center' style='display:none '><input type='hidden' name='CHG_VCH_ACNO_" + i + "'  title='CHG_VCH_ACNO_" + i + "'  id='CHG_VCH_ACNO_" + i + "'size='20' maxlength='20' class='CHAR_O' ><input type='hidden' name='CHG_VCH_AMT_" + i + "' class='AMT_O' id='CHG_VCH_AMT_" + i + "' title='CHG_VCH_AMT_" + i + "' size='12' maxlength='18'><input  type='hidden' name='COUNT_CODE_" + i + "' class='CHAR_O' id='COUNT_CODE_" + i + "' title='COUNT_CODE_" + i + "' size='20' maxlength='20'><input  type='hidden' name='PROD_CODE_" + i + "' class='CHAR_O' id='PROD_CODE_" + i + "' title='PROD_CODE_" + i + "' size='20' maxlength='20'><input  type='hidden' name='CHG_VCH_CCY_" + i + "' class='CHAR_O' id='CHG_VCH_CCY_" + i + "' title='CHG_VCH_CCY_" + i + "' size='3' maxlength='3'><input  type='hidden' name='CHG_PROD_CODE_" + i + "' class='CHAR_O' id='CHG_PROD_CODE_" + i + "' title='CHG_PROD_CODE_" + i + "' size='20' maxlength='20'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(11);
            newCell.innerHTML = "<td align='center'><input type='hidden' name='BA_MAIN_REF" + i + "' class='CHAR_O' title='BA_MAIN_REF" + i + "' size='15'><input type='hidden' name='CHG_AMT_BA_" + i + "' class='AMT_O' title='CHG_AMT_BA_" + i + "' size='12' maxlength='18' value='0.00'><input type='hidden'name='CHG_CNY_CCY_" + i + "' class='CHAR_O' title='CHG_CNY_CCY_" + i + "' size='4' maxlength='4' onchange='CHG_CNY_CCY_onchange(this.name)'><input type='hidden'name='CHG_CNY_CUSTCCY_" + i + "' class='CHAR_O' title='CHG_CNY_CUSTCCY_" + i + "' size='4' maxlength='4' onchange=''><input type='hidden'name='CHG_CNY_BRCCY_" + i + "' class='CHAR_O' title='CHG_CNY_BRCCY_" + i + "' size='4' maxlength='4' onchange=''><input type='hidden' name='CHG_AMT_HO_" + i + "' class='AMT_O' title='CHG_AMT_HO_" + i + "' size='12' maxlength='18' value=0.00 onchange='CHG_AMT_HO_onchange(this.name)'><input type='hidden'name='CHG_AMT_BR_" + i + "' class='AMT_O' title='CHG_AMT_BR_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_BR_onchange(this.name)'><input type='hidden'name='CHG_AMT_CUST_" + i + "' class='AMT_O' title='CHG_AMT_CUST_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_AMT_CUST_onchange(this.name)'><br><input type='hidden'name='CHG_USD_CCY_" + i + "' class='CHAR_O' title='CHG_USD_CCY_" + i + "' size='4' maxlength='4' onchange='CHG_USD_CCY_onchange(this.name)'><input type='hidden'name='CHG_USD_BRCCY_" + i + "' class='CHAR_O' title='CHG_USD_BRCCY_" + i + "' size='4' maxlength='4' onchange=''><input type='hidden'name='CHG_USD_HO_" + i + "' class='AMT_O' title='CHG_USD_HO_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_USD_HO_onchange(this.name)'><input type='hidden'name='CHG_USD_BR_" + i + "' class='AMT_O' title='CHG_USD_BR_" + i + "' size='12' maxlength='18' value='0.00' onchange='CHG_USD_BR_onchange(this.name)'><input type='hidden'name='BANA_" + i + "' class='CHAR_O' title='BANA_" + i + "' size='3' maxlength='3' value='Y'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(12);
            newCell.innerHTML = "<td align='center'><input type='hidden' name='RCV_EQ_AMT_" + i + "'  id='RCV_EQ_AMT_" + i + "' class='AMT_O' title='RCV_EQ_AMT_" + i + "' size='12' maxlength='18'  value='0.00'   onChange='RCV_EQ_AMT_onchange(this.name)'></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';


            newRow = ChgforAccount.insertRow(-1);
            newCell = newRow.insertCell(0);
            newCell.innerHTML = "<td align='center'  class='td_gray' >LG ISSUE FEE Date</td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';

            newCell = newRow.insertCell(1);
            newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text'name='START_DT_COMM_" + i + "' class='CHAR_P'  readonly='true' id='START_DT_COMM_" + i + "' title='START_DT_COMM_" + i + "' size='20'></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(2);
            newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text'name='END_DT_" + i + "' class='CHAR_O' id='END_DT_" + i + "' title='END_DT_" + i + "' size='20'></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(3);
            newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='hidden'name='COMM_FIELD_" + i + "' class='CHAR_O' id='COMM_FIELD_" + i + "' title='COMM_FIELD_" + i + "' size='12'></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(4);
            newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='hidden'name='TEMP_ID_" + i + "' class='CHAR_O' id='TEMP_ID_" + i + "' title='TEMP_ID_" + i + "' size='12'></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(5);
            newCell.innerHTML = "<td align='center'  class='td_gray' ><input  type='text' name='LEDG_CODE_" + i + "' class='CHAR_O' id='LEDG_CODE_" + i + "' title='LEDG_CODE_" + i + "' size='12'></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(6);
            newCell.innerHTML = "<td align='center'  class='td_gray' ></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(7);
            newCell.innerHTML = "<td align='center'  class='td_gray' ></td> ";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newCell = newRow.insertCell(8);
            newCell.innerHTML = "<td align='center' style='display:none ' class='td_gray' ></td>";
            newCell.className = 'td_gray';
            newCell.align = 'center';
            newRow.style.display = 'none';
            newRow.id = 'time_' + i;
            SelectRemoveText(i);

        }
        document.MAINFORM.FEE_NUMBER.value = i;
        InitDisPlay();
        TTLSelectText();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.InitDisPlay = function() {
    try {
        var tableObject; // Utility Auto Fix Comments
        var tabledlyObject; // Utility Auto Fix Comments
        tableObject = EEHtml.getElementById('ChgforAccount');
        tabledlyObject = EEHtml.getElementById('ChgforAccount_DLY');
        tableObject.style.display = '';
        if (SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value) == 0) {
            tabledlyObject.style.display = 'none';
        }
        if (feeNumber == 0) {
            tableObject.style.display = 'none';
        }
        initdisplayflg++;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.InitFieldEvent_COMM = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ') {
            return;
        }
        document.MAINFORM.FOR_CHG_ACNO.onchange = FOR_CHG_ACNO_onchange;
        document.MAINFORM.CUST_CHG_CCY.onchange = CUST_CHG_CCY_onchange;
        document.MAINFORM.CUST_CHG_CCY2.onchange = CUST_CHG_CCY2_onchange;
        document.MAINFORM.FOR_CHG_CCY.onchange = FOR_CHG_CCY_onchange;
        document.MAINFORM.CHG_INOUT_FLG.onchange = CHG_INOUT_FLG_onchange;
        document.MAINFORM.TTL_CUST_CHG_AMT.onchange = TTL_CUST_CHG_AMT_onchange;
        document.MAINFORM.TTL_FOR_CHG_AMT.onchange = TTL_FOR_CHG_AMT_onchange;
        document.MAINFORM.TTL_CUST_CHG_AMT2.onchange = TTL_CUST_CHG_AMT2_onchange;
        document.MAINFORM.FOR_DLY_CCY.onchange = FOR_DLY_CCY_onchange;
        document.MAINFORM.TRX_CCY_COMM.onchange = TRX_CCY_COMM_onchange;
        document.MAINFORM.TTL_FOR_DLY_AMT.onchange = TTL_FOR_DLY_AMT_onchange;
        document.MAINFORM.FOR_CHG_TYPE.onchange = FOR_CHG_TYPE_onchange;
        GET_RATE();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.InitValues_COMM = function(chgMthd, chgBy) {
    try {
        Add_LastRow();
        if (initdisplayflg == 0) {
            InitDisPlay();
            CHG_BY_LAST();
        }
        if (chgMthd == '' || chgBy == '' || chgMthd == undefined || chgBy == undefined) {
            return;
        }
        TTL_CHG_MTHD_BY(chgMthd, chgBy);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_AMT_onchange = function(fieldName) {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_CCY = function(fieldNumber) {
    try {
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgmthdName; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var rcvccyName; // Utility Auto Fix Comments
        var rcvccyObject; // Utility Auto Fix Comments
        if (fieldNumber == 'all') {
            for (q = 0; q < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); q++) {
                chgbyName = 'CHG_BY_' + q;
                chgbyObject = getObject(chgbyName, 'CHG_BY_');
                rcvccyName = 'RCV_CCY_' + q;
                rcvccyObject = getObject(rcvccyName, 'RCV_CCY_');
                chgmthdName = 'CHG_MTHD_' + q;
                chgmthdObject = getObject(chgmthdName, 'CHG_MTHD_');
                if (document.MAINFORM.CUST_CHG_CCY.value != '' && chgmthdObject.value == 'TRANSACTION' && (chgbyObject.value == 'Our Customer' || chgbyObject.value == 'Second Bene')) {
                    rcvccyObject.value = document.MAINFORM.CUST_CHG_CCY.value;
                } else if (document.MAINFORM.FOR_CHG_CCY.value != '' && chgmthdObject.value == 'TRANSACTION' && chgbyObject.value == 'Counter Party') {
                    rcvccyObject.value = document.MAINFORM.FOR_CHG_CCY.value;
                } else if (document.MAINFORM.CUST_CHG_CCY2.value != '' && chgmthdObject.value == 'TRANSACTION' && chgbyObject.value == 'Second Bene') {
                    rcvccyObject.value = document.MAINFORM.CUST_CHG_CCY2.value;
                } else {
                    rcvccyObject.value = '';
                }
                EEHtml.fireEvent(rcvccyObject, 'onchange');
            }

        } else {
            rcvccyName = 'RCV_CCY_' + fieldNumber;
            rcvccyObject = getObject(rcvccyName, 'RCV_CCY_');
            chgbyName = 'CHG_BY_' + fieldNumber;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            chgmthdName = 'CHG_MTHD_' + fieldNumber;
            chgmthdObject = getObject(chgmthdName, 'CHG_MTHD_');
            if (chgbyObject.value == 'Counter Party' && document.MAINFORM.FOR_CHG_CCY.value != '' && chgmthdObject.value == 'TRANSACTION') {
                rcvccyObject.value = document.MAINFORM.FOR_CHG_CCY.value;
            } else if ((chgbyObject.value == 'Our Customer' || chgbyObject.value == 'Second Bene') && document.MAINFORM.CUST_CHG_CCY.value != '' && chgmthdObject.value == 'TRANSACTION') {
                rcvccyObject.value = document.MAINFORM.CUST_CHG_CCY.value;
            } else if (document.MAINFORM.CUST_CHG_CCY2.value != '' && chgmthdObject.value == 'TRANSACTION' && chgbyObject.value == 'Second Bene') {
                rcvccyObject.value = document.MAINFORM.CUST_CHG_CCY2.value;
            } else {
                rcvccyObject.value = '';
            }
            EEHtml.fireEvent(rcvccyObject, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_CCY_RT_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_CCY_onchange = function(fieldName) {
    try {
        var lastNumber; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_DLY_AMT = function(fieldNumber, revolveFlg, ecFlag, feelastNumber) {
    try {
        var buyrt; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgexchObject; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var dlyamtObject; // Utility Auto Fix Comments
        var dlyccyObject; // Utility Auto Fix Comments
        var rcvamtObject; // Utility Auto Fix Comments
        var rcvccyObject; // Utility Auto Fix Comments
        var rcveqamtObject; // Utility Auto Fix Comments
        var rcveqamtObject_temp; // Utility Auto Fix Comments
        var sellrt; // Utility Auto Fix Comments
        dlyccyObject = EEHtml.getElementById('DLY_CCY_' + fieldNumber);
        chgbyObject = EEHtml.getElementById('CHG_BY_' + fieldNumber);
        chgmthdObject = EEHtml.getElementById('CHG_MTHD_' + fieldNumber);
        chgbyObject = EEHtml.getElementById('CHG_BY_' + fieldNumber);
        chgccyObject = EEHtml.getElementById('CHG_CCY_' + fieldNumber);
        chgamtoriginObject = EEHtml.getElementById('CHG_AMT_ORIGIN_' + fieldNumber);
        rcveqamtObject = EEHtml.getElementById('RCV_EQ_AMT_' + fieldNumber);

        rcvccyObject = EEHtml.getElementById('RCV_CCY_' + fieldNumber);
        dlyccyObject = EEHtml.getElementById('DLY_CCY_' + fieldNumber);
        rcvamtObject = EEHtml.getElementById('RCV_AMT_' + fieldNumber);
        chgexchObject = EEHtml.getElementById('CHG_EXCH_RT_' + fieldNumber);
        dlyamtObject = EEHtml.getElementById('DLY_AMT_' + fieldNumber);

        rcveqamtObject_temp = EEHtml.getElementById('RCV_EQ_AMT_TEMP_' + fieldNumber);

        rcveqamtObject.value = rcveqamtObject_temp.value;



        if (chgbyObject.value == 'Counter Party' && document.MAINFORM.FOR_CHG_CCY.value != '' && chgmthdObject.value == 'TRANSACTION') {
            rcvccyObject.value = document.MAINFORM.FOR_CHG_CCY.value;
            if (rcvccyObject.value != '' && chgccyObject.value != '') {
                if (rcvccyObject.value == chgccyObject.value) {
                    rcvamtObject.value = rcveqamtObject.value;
                } else {
                    buyrt = SYS_GetExchangeRate_Fee(rcvccyObject.value, 'CNY', 'Buying Rate', '');
                    sellrt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                    chgexchObject.value = SYS_BeFloat(sellrt[0][1]) / SYS_BeFloat(buyrt[0][1]);
                    if (SYS_BeFloat(chgexchObject.value) > 0) {
                        rcvamtObject.value = SYS_BeFloat(rcveqamtObject.value) * SYS_BeFloat(chgexchObject.value);
                        rcvamtObject.value = SYT_CCY_AMT(rcvccyObject.value, rcvamtObject.value);
                    }
                }
            } else {
                rcvamtObject.value = 0;
            }
        } else if ((chgbyObject.value == 'Our Customer') && document.MAINFORM.CUST_CHG_CCY.value != '' && chgmthdObject.value == 'TRANSACTION') {
            rcvccyObject.value = document.MAINFORM.CUST_CHG_CCY.value;
            if (rcvccyObject.value != '' && chgccyObject.value != '') {
                if (rcvccyObject.value == chgccyObject.value) {
                    rcvamtObject.value = rcveqamtObject.value;
                } else {
                    buyrt = SYS_GetExchangeRate_Fee(rcvccyObject.value, 'CNY', 'Buying Rate', '');
                    sellrt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                    chgexchObject.value = SYS_BeFloat(sellrt[0][1]) / SYS_BeFloat(buyrt[0][1]);
                    if (SYS_BeFloat(chgexchObject.value) > 0) {
                        rcvamtObject.value = SYS_BeFloat(rcveqamtObject.value) * SYS_BeFloat(chgexchObject.value);
                        rcvamtObject.value = SYT_CCY_AMT(rcvccyObject.value, rcvamtObject.value);
                    }
                }
            } else {
                rcvamtObject.value = 0;
            }

        } else if ((chgbyObject.value == 'Second Bene') && document.MAINFORM.CUST_CHG_CCY2.value != '' && chgmthdObject.value == 'TRANSACTION') {
            rcvccyObject.value = document.MAINFORM.CUST_CHG_CCY2.value;
            if (rcvccyObject.value != '' && chgccyObject.value != '') {
                if (rcvccyObject.value == chgccyObject.value) {
                    rcvamtObject.value = rcveqamtObject.value;
                } else {
                    buyrt = SYS_GetExchangeRate_Fee(rcvccyObject.value, 'CNY', 'Buying Rate', '');
                    sellrt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                    chgexchObject.value = SYS_BeFloat(sellrt[0][1]) / SYS_BeFloat(buyrt[0][1]);
                    if (SYS_BeFloat(chgexchObject.value) > 0) {
                        rcvamtObject.value = SYS_BeFloat(rcveqamtObject.value) * SYS_BeFloat(chgexchObject.value);
                        rcvamtObject.value = SYT_CCY_AMT(rcvccyObject.value, rcvamtObject.value);
                        TTL_CHG_AMT();
                    }
                }
            } else {
                rcvamtObject.value = 0;
            }
        } else {
            rcvccyObject.value = '';
            rcvamtObject.value = 0;
        }
        if (chgbyObject.value != '' && chgmthdObject.value != '' && chgmthdObject.value != 'FREE' && chgmthdObject.value != 'WRITEOFF') {
            dlyccyObject.value = chgccyObject.value;
            if (dlyccyObject.value != '') {
                dlyamtObject.value = SYS_BeFloat(chgamtoriginObject.value) - SYS_BeFloat(rcveqamtObject.value);
                ConfirmBuinessCheck_COMM();
                dlyamtObject.value = SYT_CCY_AMT(dlyccyObject.value, dlyamtObject.value);
            } else {
                dlyamtObject.value = 0.00;
            }
        } else {
            dlyccyObject.value = '';
            dlyamtObject.value = 0.00;
        }
        if (revolveFlg == 'n' && ecFlag != 'EC') {
            FOR_DLY_CCY();
            TTL_CHG_AMT();
            TTL_DLY_AMT();
            COMM_PAGE_ONCHANGE();
            return;
        } else if (revolveFlg == 'y' && fieldNumber == SYS_BeFloat(feelastNumber) - 1) {
            FOR_DLY_CCY();
            TTL_CHG_AMT();
            TTL_DLY_AMT();
            COMM_PAGE_ONCHANGE();
            return;
        } else if (ecFlag == 'EC' && revolveFlg == 'n') {
            return;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_EQ_AMT = function(fieldNumber) {
    try {
        var chgamtoriginName; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgccyName; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgmthdName; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var rcvamtName; // Utility Auto Fix Comments
        var rcvamtObject; // Utility Auto Fix Comments
        var rcveqamtName; // Utility Auto Fix Comments
        var rcveqamtName_TEMP; // Utility Auto Fix Comments
        var rcveqamtObject; // Utility Auto Fix Comments
        var rcveqamtObject_TEMP; // Utility Auto Fix Comments
        chgamtoriginName = "CHG_AMT_ORIGIN_" + fieldNumber;
        chgamtoriginObject = getObject(chgamtoriginName, 'CHG_AMT_ORIGIN_');
        chgccyName = "CHG_CCY_" + fieldNumber;
        chgccyObject = getObject(chgccyName, 'CHG_CCY_');
        rcvamtName = "RCV_AMT_" + fieldNumber;
        rcvamtObject = getObject(rcvamtName, 'RCV_AMT_');
        rcveqamtName = "RCV_EQ_AMT_" + fieldNumber;
        rcveqamtObject = getObject(rcveqamtName, 'RCV_EQ_AMT_');
        chgmthdName = "CHG_MTHD_" + fieldNumber;
        chgmthdObject = getObject(chgmthdName, 'CHG_MTHD_');
        chgbyName = "CHG_BY_" + fieldNumber;
        chgbyObject = getObject(chgbyName, 'CHG_BY_');
        rcveqamtName_TEMP = "RCV_EQ_AMT_TEMP_" + fieldNumber;
        rcveqamtObject_TEMP = getObject(rcveqamtName_TEMP, 'RCV_EQ_AMT_TEMP_');

        if (chgmthdObject.value == 'TRANSACTION' && chgbyObject.value != '') {

            rcveqamtObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
            rcveqamtObject_TEMP.value = rcveqamtObject.value;
        } else {
            rcveqamtObject.value = 0.00;
            rcveqamtObject_TEMP.value = rcveqamtObject.value;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_EQ_AMT_TEMP_onchange = function(fieldName) {
    try {
        RCV_EQ_AMT_onchange(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.RCV_EQ_AMT_onchange = function(fieldName) {
    try {
        var chgamtoriginObject; // Utility Auto Fix Comments
        var lastNumber; // Utility Auto Fix Comments
        var rcveqamtObject; // Utility Auto Fix Comments
        var rcveqamtObject_temp; // Utility Auto Fix Comments
        lastNumber = getLastChar(fieldName);
        rcveqamtObject = EEHtml.getElementById('RCV_EQ_AMT_' + lastNumber);
        rcveqamtObject_temp = EEHtml.getElementById('RCV_EQ_AMT_TEMP_' + lastNumber);
        chgamtoriginObject = EEHtml.getElementById('CHG_AMT_ORIGIN_' + lastNumber);
        if (SYS_BeFloat(rcveqamtObject_temp.value) > SYS_BeFloat(chgamtoriginObject.value)) {
            SYS_CheckError(rcveqamtObject, 'EQ AMT must be smaller CHG_AMT!');
            rcveqamtObject.value = SYS_BeFloat(chgamtoriginObject.value);
            rcveqamtObject_temp.value = rcveqamtObject.value;
            rcveqamtObject.focus();
            rcveqamtObject_temp.focus();
            return false;
        } else {
            RCV_DLY_AMT(lastNumber, 'n');
        }
        if (SYS_BeFloat(rcveqamtObject.value) == 0 || rcveqamtObject.value == '') {
            checkcustchg_ccy();
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.SET_BUTTON_onclick = function(buttonName) {
    try {
        var buttonNumber; // Utility Auto Fix Comments
        var showdtobject; // Utility Auto Fix Comments
        var showtimeobject; // Utility Auto Fix Comments
        buttonNumber = getLastChar(buttonName);
        showtimeobject = EEHtml.getElementById('SHOW_TIME_' + buttonNumber);
        showdtobject = EEHtml.getElementById('time_' + buttonNumber);
        if (showtimeobject.value == 'Time') {
            showtimeobject.value = 'Hide';
            showdtobject.style.display = '';
        } else {
            showtimeobject.value = 'Time';
            showdtobject.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.SelectRemoveText = function(fieldNumber) {
    try {
        var chgbyobject; // Utility Auto Fix Comments
        var chgmthdobject; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'EXLC' && SYS_MODULE_NAME != 'FFIT') {
            chgbyobject = EEHtml.getElementById('CHG_BY_' + fieldNumber);
            chgbyobject.options[3].removeNode(true);
        }
        if (SYS_MODULE_NAME !== 'FFIT') {
            chgmthdobject = EEHtml.getElementById('CHG_MTHD_' + fieldNumber);
            chgmthdobject.options[2].removeNode(true);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.SelectRemoveText_DLY = function(fieldNumber) {
    try {
        var chgbyobject; // Utility Auto Fix Comments
        var chgmthdobject; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME != 'EXLC' && SYS_MODULE_NAME != 'FFIT') {
            chgbyobject = EEHtml.getElementById('CHG_BY_' + fieldNumber);
            chgbyobject.options[3].removeNode(true);
        }
        if (SYS_MODULE_NAME !== 'FFIT') {
            chgmthdobject = EEHtml.getElementById('CHG_MTHD_' + fieldNumber);
            chgmthdobject.options[2].removeNode(true);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.SelectText = function() {
    try {
        if (SYS_MODULE_NAME == 'EXLC') {
            fieldText1 = 'BENE';
            fieldText2 = 'APPL';
            fieldText3 = '2ND BENE';
        } else if (SYS_MODULE_NAME == 'FFIT') {
            fieldText1 = 'fieldText1';
            fieldText2 = 'fieldText2';
            fieldText3 = 'fieldText3';
        } else if (SYS_MODULE_NAME == 'EXCL') {
            fieldText1 = 'DRAWER';
            fieldText2 = 'DRAWEE';
        } else if (SYS_MODULE_NAME == 'IMLC' || SYS_MODULE_NAME == 'TEST') {
            fieldText1 = 'APPL';
            fieldText2 = 'BENE';
        } else if (SYS_MODULE_NAME == 'IMCL') {
            fieldText1 = 'DRAWEE';
            fieldText2 = 'DRAWER';
        } else if (SYS_MODULE_NAME == 'FAEF') {
            fieldText1 = 'APPL';
        } else if (SYS_MODULE_NAME == 'LOFG' || SYS_MODULE_NAME == 'LGAD') {
            fieldText1 = '???';
            fieldText2 = '???';
        } else if (SYS_MODULE_NAME == 'FINC') {
            fieldText1 = '???';
        } else if (SYS_MODULE_NAME == 'DILC') {
            fieldText1 = '???';
            fieldText2 = '???';
        } else if (SYS_MODULE_NAME == 'DELC') {
            fieldText1 = '???';
            fieldText2 = '???';
        }

        if (SYS_MODULE_NAME == 'IMLC' || SYS_MODULE_NAME == 'IMCL' || SYS_MODULE_NAME == 'EXLC' || SYS_MODULE_NAME == 'EXCL' || SYS_MODULE_NAME == 'FAFE') {
            mthdText1 = 'TRANSACTION';
            mthdText3 = 'DEFERRED';
            mthdText4 = 'FREE';
            mthdText5 = 'WRITEOFF';
        } else if (SYS_MODULE_NAME == 'DELC' || SYS_MODULE_NAME == 'DILC' || SYS_MODULE_NAME == 'LOFG' || SYS_MODULE_NAME == 'LGAD') {
            mthdText1 = '???';
            mthdText3 = '???';
            mthdText4 = '???';
            mthdText5 = '???';
        } else {
            mthdText1 = '???';
            mthdText2 = '???';
            mthdText3 = '???';
            mthdText4 = '???';
            mthdText5 = '???';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TRX_CCY_COMM = function(trxCcy) {
    try {
        document.MAINFORM.TRX_CCY_COMM.value = trxCcy;
        EEHtml.fireEvent(document.MAINFORM.TRX_CCY_COMM, 'onchange');
        GET_TRX_RT(trxCcy);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TRX_CCY_COMM_onchange = function() {
    try {
        var i; // Utility Auto Fix Comments
        for (i = 0; i < document.MAINFORM.NOW_NUMBER.value; i++) {
            getFeeFinal_Comm(i, '', 'TRX_CCY_COMM_onchange', document.MAINFORM.NOW_NUMBER.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTLSelectText = function() {
    try {
        var options3; // Utility Auto Fix Comments
        var options4; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == 'EXLC') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = 'BENE';
            document.MAINFORM.TTL_CHG_BY.options[2].text = 'APPL';
            document.MAINFORM.TTL_CHG_BY.options[3].text = '2ND BENE';
        } else if (SYS_MODULE_NAME == 'FFIT') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = '????';
            document.MAINFORM.TTL_CHG_BY.options[2].text = '????';
            document.MAINFORM.TTL_CHG_BY.options[3].text = '????';
        } else if (SYS_MODULE_NAME == 'EXCL') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = 'DRAWER';
            document.MAINFORM.TTL_CHG_BY.options[2].text = 'DRAWEE';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'IMLC') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = 'APPL';
            document.MAINFORM.TTL_CHG_BY.options[2].text = 'BENE';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'IMCL') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = 'DRAWEE';
            document.MAINFORM.TTL_CHG_BY.options[2].text = 'DRAWER';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'FAEF') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = 'APPL';
            document.MAINFORM.TTL_CHG_BY.options[2].removeNode(true);
            document.MAINFORM.TTL_CHG_BY.options[2].removeNode(true);
        } else if (SYS_MODULE_NAME == 'LOFG' || SYS_MODULE_NAME == 'LGAD') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[2].text = '????';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'FINC') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = '????';
            document.MAINFORM.TTL_CHG_BY.options[2].text = '';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'DILC' || SYS_MODULE_NAME == 'TEST') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'DELC') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[3].removeNode(true);
        }

        if (SYS_MODULE_NAME == 'IMLC' || SYS_MODULE_NAME == 'IMCL' || SYS_MODULE_NAME == 'EXLC' || SYS_MODULE_NAME == 'EXCL' || SYS_MODULE_NAME == 'FAFE') {
            document.MAINFORM.TTL_CHG_MTHD.options[1].text = 'TRANSACTION';
            document.MAINFORM.TTL_CHG_MTHD.options[2].removeNode(true);
            options3 = SYS_BeFloat(document.MAINFORM.TTL_CHG_MTHD.length) - 2;
            document.MAINFORM.TTL_CHG_MTHD.options[options3].text = 'DEFERRED';
            options4 = SYS_BeFloat(document.MAINFORM.TTL_CHG_MTHD.length) - 1;
            document.MAINFORM.TTL_CHG_MTHD.options[options4].text = 'FREE';
        } else if (SYS_MODULE_NAME == 'DELC' || SYS_MODULE_NAME == 'DILC' || SYS_MODULE_NAME == 'LOFG' || SYS_MODULE_NAME == 'LGAD') {
            document.MAINFORM.TTL_CHG_MTHD.options[1].text = '???';
            document.MAINFORM.TTL_CHG_MTHD.options[2].removeNode(true);
            options3 = SYS_BeFloat(document.MAINFORM.TTL_CHG_MTHD.length) - 2;
            document.MAINFORM.TTL_CHG_MTHD.options[options3].text = '???';
            options4 = SYS_BeFloat(document.MAINFORM.TTL_CHG_MTHD.length) - 1;
            document.MAINFORM.TTL_CHG_MTHD.options[options4].text = '???';
        } else if (SYS_MODULE_NAME == 'FINC') {
            document.MAINFORM.TTL_CHG_MTHD.options[1].text = '???';
            document.MAINFORM.TTL_CHG_MTHD.options[2].removeNode(true);
            options3 = SYS_BeFloat(document.MAINFORM.TTL_CHG_MTHD.length) - 2;
            document.MAINFORM.TTL_CHG_MTHD.options[options3].text = '???';
            options4 = SYS_BeFloat(document.MAINFORM.TTL_CHG_MTHD.length) - 1;
            document.MAINFORM.TTL_CHG_MTHD.options[options4].text = '???';
        } else {
            document.MAINFORM.TTL_CHG_MTHD.options[1].text = '???';
            document.MAINFORM.TTL_CHG_MTHD.options[2].text = '???';
            document.MAINFORM.TTL_CHG_MTHD.options[3].text = '???';
            document.MAINFORM.TTL_CHG_MTHD.options[4].text = '???';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTLSelectText_DLY = function() {
    try {
        var option3; // Utility Auto Fix Comments
        var option4; // Utility Auto Fix Comments
        var option5; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == 'EXLC') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = 'BENE';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = 'APPL';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].text = '2ND BENE';
        } else if (SYS_MODULE_NAME == 'FFIT') {
            document.MAINFORM.TTL_CHG_BY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_BY.options[3].text = '???';
        } else if (SYS_MODULE_NAME == 'EXCL') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = 'DRAWER';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = 'DRAWEE';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'IMLC') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = 'APPL';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = 'BENE';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'IMCL') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = 'DRAWEE';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = 'DRAWER';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'FAEF') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = 'APPL';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].removeNode(true);
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if ((SYS_MODULE_NAME == 'LOFG' || SYS_MODULE_NAME == 'LGAD')) {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if ((SYS_MODULE_NAME == 'FINC')) {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = '';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'DILC' || SYS_MODULE_NAME == 'TEST') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        } else if (SYS_MODULE_NAME == 'DELC') {
            document.MAINFORM.TTL_CHG_BY_DLY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_BY_DLY.options[3].removeNode(true);
        }

        if (SYS_MODULE_NAME == 'IMLC' || SYS_MODULE_NAME == 'IMCL' || SYS_MODULE_NAME == 'EXLC' || SYS_MODULE_NAME == 'EXCL' || SYS_MODULE_NAME == 'FAFE') {
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[1].text = 'TRANSACTION';
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[2].removeNode(true);
            option3 = document.MAINFORM.TTL_CHG_MTHD_DLY.length - 3;
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[option3].text = 'DEFERRED';
            option4 = document.MAINFORM.TTL_CHG_MTHD_DLY.length - 2;
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[option4].text = 'FREE';
            option5 = document.MAINFORM.TTL_CHG_MTHD_DLY.length - 1;
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[option5].text = 'WRITEOFF';
        } else if (SYS_MODULE_NAME == 'DELC' || SYS_MODULE_NAME == 'DILC' || SYS_MODULE_NAME == 'LOFG' || SYS_MODULE_NAME == 'LGAD') {
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[2].removeNode(true);
            option3 = document.MAINFORM.TTL_CHG_MTHD_DLY.length - 3;
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[option3].text = '???';
            option4 = document.MAINFORM.TTL_CHG_MTHD_DLY.length - 2;
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[option4].text = '???';
            option5 = document.MAINFORM.TTL_CHG_MTHD_DLY.length - 1;
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[option5].text = '???';
        } else {
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[1].text = '???';
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[2].text = '???';
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[3].text = '???';
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[4].text = '???';
            document.MAINFORM.TTL_CHG_MTHD_DLY.options[5].text = '???';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CHG_AMT = function() {
    try {
        var rcvamtName; // Utility Auto Fix Comments
        var ttlChgAmt; // Utility Auto Fix Comments
        var ttlChgAmt2; // Utility Auto Fix Comments
        var ttlForAmt; // Utility Auto Fix Comments
        ttlChgAmt = 0;
        ttlForAmt = 0;
        ttlChgAmt2 = 0;

        for (i = 0; i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            rcvamtName = 'RCV_AMT_' + i;
            rcvamtObject = getObject(rcvamtName, 'RCV_AMT_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            if (SYS_BeFloat(rcvamtObject.value) > 0 && chgbyObject.value == 'Our Customer') {
                ttlChgAmt += SYS_BeFloat(rcvamtObject.value);
            }
            if (SYS_BeFloat(rcvamtObject.value) > 0 && chgbyObject.value == 'Counter Party') {
                ttlForAmt += SYS_BeFloat(rcvamtObject.value);
            }
            if (SYS_BeFloat(rcvamtObject.value) > 0 && chgbyObject.value == 'Second Bene') {
                ttlChgAmt2 += SYS_BeFloat(rcvamtObject.value);
            }

        }
        document.MAINFORM.TTL_CUST_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY.value, ttlChgAmt);
        document.MAINFORM.TTL_FOR_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FOR_CHG_CCY.value, ttlForAmt);
        document.MAINFORM.TTL_CUST_CHG_AMT2.value = SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY2.value, ttlChgAmt2);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CHG_BY_DLY_onchange = function() {
    try {
        var callfunctionnm; // Utility Auto Fix Comments
        callfunctionnm = "TTL_CHG_onchange";
        CHG_BY_DLY('TTL_CHG_onchange');
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CHG_BY_onchange = function() {
    try {
        var callfunctionnm; // Utility Auto Fix Comments
        callfunctionnm = "TTL_CHG_onchange";
        CHG_BY("TTL_CHG_onchange");
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CHG_MTHD_BY = function(chgMthd, chgBy) {
    try {
        for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < document.MAINFORM.FEE_NUMBER.value; i++) {
            chgbynm = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbynm, 'CHG_BY_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgbyObject.value = chgBy;
            chgmthdObject.value = chgMthd;
            document.MAINFORM.TTL_CHG_MTHD.value = chgMthd;
            document.MAINFORM.TTL_CHG_BY.value = chgBy;
            changeFieldClass(i);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CHG_MTHD_DLY_onchange = function() {
    try {
        var callfunctionnm; // Utility Auto Fix Comments
        callfunctionnm = "TTL_CHG_onchange";
        CHG_MTHD_DLY('TTL_CHG_onchange');
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CHG_MTHD_onchange = function() {
    try {
        var callfunctionnm; // Utility Auto Fix Comments
        callfunctionnm = "TTL_CHG_onchange";
        CHG_MTHD('TTL_CHG_onchange');
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_CUST_CHG_AMT2_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_DLY_AMT = function() {
    try {
        var dlyccyName; // Utility Auto Fix Comments
        var ttlForAmt; // Utility Auto Fix Comments
        var ttlForAmtAll; // Utility Auto Fix Comments
        ttlForAmt = 0;
        ttlForAmtAll = 0;

        for (i = 0; i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            dlyamtName = 'DLY_AMT_' + i;
            dlyamtObject = getObject(dlyamtName, 'DLY_AMT_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            dlyccyName = 'DLY_CCY_' + i;
            dlyccyObject = getObject(dlyccyName, 'DLY_CCY_');

            if (SYS_BeFloat(dlyamtObject.value) > 0 && chgbyObject.value == 'Counter Party' && i >= SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)) {
                ttlForAmt += SYS_BeFloat(dlyamtObject.value);
            }
            if (SYS_BeFloat(dlyamtObject.value) > 0 && chgbyObject.value == 'Counter Party') {
                ttlForAmtAll += SYS_BeFloat(dlyamtObject.value);
            }

        }

        document.MAINFORM.TTL_FOR_DLY_AMT.value = SYT_CCY_AMT(document.MAINFORM.FOR_DLY_CCY.value, ttlForAmt);
        document.MAINFORM.TTL_FOR_DLY_AMTALL.value = SYT_CCY_AMT(document.MAINFORM.FOR_DLY_CCY_ALL.value, ttlForAmtAll);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_DLY_CHG_MTHD = function(chgMthd) {
    try {
        if (SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value) > 0) {
            for (i = 0; i < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i++) {
                chgmthdnm = 'CHG_MTHD_' + i;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgmthdObject.value = chgMthd;
                document.MAINFORM.TTL_CHG_MTHD.value = chgMthd;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_FOR_BUYING_RT_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.TTL_FOR_DLY_AMT_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto._save_onclick = function() {
    try {
        SYT_CommPageConfirm();
        SYS_CONFIRM_FLAG = "true";
        OPEN();
        document.MAINFORM.action = "../servlets/WSTrxManager?_SYS_PENDING_STATUS=SAVE";
        document.MAINFORM.method = "post";
        document.MAINFORM.target = "work";
        postFormByAjax(document.MAINFORM);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.changeCustAmtClass = function() {
    try {
        var amt1; // Utility Auto Fix Comments
        var amt2; // Utility Auto Fix Comments
        var amt3; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var fieldNumber; // Utility Auto Fix Comments
        var rcveqamtObject; // Utility Auto Fix Comments
        amt1 = 0;
        amt2 = 0;
        amt3 = 0;

        for (fieldNumber = 0; fieldNumber < document.MAINFORM.FEE_NUMBER.value; fieldNumber++) {
            rcveqamtObject = EEHtml.getElementById('RCV_EQ_AMT_' + fieldNumber);
            chgbyObject = EEHtml.getElementById('CHG_BY_' + fieldNumber);
            if (rcveqamtObject == null) {
                return;
            }
            if (chgbyObject.value == 'Our Customer' && SYS_BeFloat(rcveqamtObject.value) > 0) {
                amt1 += SYS_BeFloat(rcveqamtObject.value);
            }
            if (chgbyObject.value == 'Second Bene' && SYS_BeFloat(rcveqamtObject.value) > 0) {
                amt2 += SYS_BeFloat(rcveqamtObject.value);
            }
            if (chgbyObject.value == 'Counter Party' && SYS_BeFloat(rcveqamtObject.value) > 0) {
                amt3 += SYS_BeFloat(rcveqamtObject.value);
            }
        }
        if (SYS_BeFloat(amt1) > 0 && (document.MAINFORM.CHG_INOUT_FLG.value != 'IN')) {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'M');
        } else if (document.MAINFORM.CHG_INOUT_FLG.value != 'IN') {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'O');
        }
        if (SYS_BeFloat(amt2) > 0 && document.MAINFORM.CHG_INOUT_FLG.value != 'IN') {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY2, 'M');
        } else if (document.MAINFORM.CHG_INOUT_FLG.value != 'IN') {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_ACNO2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY2, 'O');
        }
        if (SYS_BeFloat(amt3) > 0 && (document.MAINFORM.CHG_INOUT_FLG.value == '' || document.MAINFORM.CHG_INOUT_FLG.value == undefined)) {
            SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_ACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_TYPE, 'M');
        } else if (document.MAINFORM.CHG_INOUT_FLG.value == '' || document.MAINFORM.CHG_INOUT_FLG.value == undefined) {
            SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_ACNO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_CCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FOR_CHG_TYPE, 'O');
        }
        if (document.MAINFORM.FOR_CHG_TYPE.value != '3' && document.MAINFORM.FOR_CHG_TYPE.value != '2') {
            document.MAINFORM.FOR_CHG_ACNO.readOnly = true;
        } else {
            document.MAINFORM.FOR_CHG_ACNO.readOnly = false;
        }
        document.MAINFORM.CUST_CHG_ACNO.readOnly = true;
        document.MAINFORM.CUST_CHG_ACNO2.readOnly = true;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.changeFieldClass = function(fieldNumber) {
    try {
        var rcveqamtnm; // Utility Auto Fix Comments
        var rcveqamtnm_temp; // Utility Auto Fix Comments
        chgbynm = 'CHG_BY_' + fieldNumber;
        chgbyObject = getObject(chgbynm, 'CHG_BY_');
        chgmthdnm = 'CHG_MTHD_' + fieldNumber;
        chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
        rcveqamtnm = 'RCV_EQ_AMT_' + fieldNumber;
        rcveqamtObject = getObject(rcveqamtnm, 'RCV_EQ_AMT_');
        rcveqamtnm_temp = 'RCV_EQ_AMT_TEMP_' + fieldNumber;
        rcveqamtObject_temp = getObject(rcveqamtnm_temp, 'RCV_EQ_AMT_TEMP_');
        if (chgmthdObject.value == 'TRANSACTION' && chgbyObject.value != '') {
            SYT_ChangeFldClass(rcveqamtObject, 'O');
            SYT_ChangeFldClass(rcveqamtObject_temp, 'O');
        } else {
            SYT_ChangeFldClass(rcveqamtObject, 'P');
            SYT_ChangeFldClass(rcveqamtObject_temp, 'P');
        }

        checkcustchg_ccy();
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.checkcustchg_ccy = function() {
    try {
        if (document.MAINFORM.CHG_INOUT_FLG.value == 'OUT') {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'P');
        }
        if (document.MAINFORM.CUST_CHG_ACNO.value.length > 4 && SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'O');
            if (SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value) > 0 && document.MAINFORM.CUST_CHG_ACNO.value != '') {
                SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CUST_CHG_CCY, 'P');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getChgCcyAmtTemp = function(fieldNumber) {
    try {
        var chgamtempnm; // Utility Auto Fix Comments
        chgccynm = 'CHG_CCY_' + fieldNumber;
        chgccyObject = getObject(chgccynm, 'CHG_CCY_');
        chgamtoriginnm = 'CHG_AMT_ORIGIN_' + fieldNumber;
        chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
        chgccytempnm = 'CHG_CCY_TEMP_' + fieldNumber;
        chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
        chgamtempnm = 'CHG_AMT_TEMP_' + fieldNumber;
        chgamttempObject = getObject(chgamtempnm, 'CHG_AMT_TEMP_');
        if (chgccyObject.value != '') {
            chgccytempObject.value = chgccyObject.value;
            chgamttempObject.value = SYT_CCY_AMT(chgccytempObject.value, chgamtoriginObject.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getCommitmentFEE = function(chName, feeName, trxAmt, feeRt, days, ccy, trxccy, chgFlg, code) {
    try {
        var chgamtbrObject; // Utility Auto Fix Comments
        var chgamtbrnm; // Utility Auto Fix Comments
        var chgamtcustObject; // Utility Auto Fix Comments
        var chgamtcustnm; // Utility Auto Fix Comments
        var chgamthoObject; // Utility Auto Fix Comments
        var chgamthonm; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgamtoriginnm; // Utility Auto Fix Comments
        var chgamttempObject; // Utility Auto Fix Comments
        var chgamttempnm; // Utility Auto Fix Comments
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgccynm; // Utility Auto Fix Comments
        var chgccytempObject; // Utility Auto Fix Comments
        var chgccytempnm; // Utility Auto Fix Comments
        var chgcnybrccyObject; // Utility Auto Fix Comments
        var chgcnybrccynm; // Utility Auto Fix Comments
        var chgcnyccyObject; // Utility Auto Fix Comments
        var chgcnyccynm; // Utility Auto Fix Comments
        var chgcnycustccyObject; // Utility Auto Fix Comments
        var chgcnycustccynm; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chgdescnm; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var chgmthdnm; // Utility Auto Fix Comments
        var chgusdbrObject; // Utility Auto Fix Comments
        var chgusdbrccynm; // Utility Auto Fix Comments
        var chgusdbrccyobject; // Utility Auto Fix Comments
        var chgusdbrnm; // Utility Auto Fix Comments
        var chgusdccyObject; // Utility Auto Fix Comments
        var chgusdccynm; // Utility Auto Fix Comments
        var chgusdhoObject; // Utility Auto Fix Comments
        var chgusdhonm; // Utility Auto Fix Comments
        var chineseObject; // Utility Auto Fix Comments
        var chinesedescName; // Utility Auto Fix Comments
        var codeArr; // Utility Auto Fix Comments
        var commAmt; // Utility Auto Fix Comments
        var countcodeName; // Utility Auto Fix Comments
        var countcodeObject; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var prodcodeName; // Utility Auto Fix Comments
        var prodcodeObject; // Utility Auto Fix Comments
        commAmt = 0.00;
        if (chgFlg == undefined) {
            chgFlg = '';
            commAmt = SYS_BeFloat(trxAmt) * SYS_BeFloat(feeRt) / 100 * SYS_BeFloat(days) / 360;
        }
        for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            chgdescnm = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            chgccynm = 'CHG_CCY_' + i;
            chgccyObject = getObject(chgccynm, 'CHG_CCY_');
            chgcnyccynm = 'CHG_CNY_CCY_' + i;
            chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
            chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
            chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
            chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
            chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
            chgusdccynm = 'CHG_USD_CCY_' + i;
            chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
            chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
            chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
            chgamttempnm = 'CHG_AMT_TEMP_' + i;
            chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
            chgccytempnm = 'CHG_CCY_TEMP_' + i;
            chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            chgamthonm = 'CHG_AMT_HO_' + i;
            chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
            chgamtbrnm = 'CHG_AMT_BR_' + i;
            chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
            chgusdhonm = 'CHG_USD_HO_' + i;
            chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
            chgusdbrnm = 'CHG_USD_BR_' + i;
            chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
            chgamtcustnm = 'CHG_AMT_CUST_' + i;
            chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
            chinesedescName = 'CHINESE_DESC_' + i;
            chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            countcodeName = 'COUNT_CODE_' + i;
            countcodeObject = getObject(countcodeName, 'COUNT_CODE_');
            prodcodeName = 'PROD_CODE_' + i;
            prodcodeObject = getObject(prodcodeName, 'PROD_CODE_');
            codeArr = code.split(';');
            if (chgdescObject.value == feeName && (chgFlg == 'Y' || chgFlg == '')) {
                chineseObject.value = chName;
                chgcnyccyObject.value = ccy;
                chgamthoObject.value = SYS_BeFloat(commAmt);
                chgamthoObject.value = SYT_CCY_AMT(chgcnyccyObject.value, chgamthoObject.value);
                countcodeObject.value = code;
                SYT_ChangeFldClass(chgmthdObject, 'M');
                SYT_ChangeFldClass(chgbyObject, 'M');
                EEHtml.fireEvent(chgamthoObject, 'onchange');
            } else if (chgdescObject.value == feeName && chgFlg == 'N') {
                chineseObject.value = chName;
                chgcnyccyObject.value = '';
                chgamthoObject.value = 0.00;
                chgamtoriginObject.value = 0.00;
                SYT_ChangeFldClass(chgmthdObject, 'O');
                SYT_ChangeFldClass(chgbyObject, 'O');
                EEHtml.fireEvent(chgamthoObject, 'onchange');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getCustId = function(custid) {
    try {
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var countcodeObject; // Utility Auto Fix Comments
        var countcodearr; // Utility Auto Fix Comments
        var countcodenm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var snumber; // Utility Auto Fix Comments
        var sstring; // Utility Auto Fix Comments
        for (i = 0; i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            countcodenm = 'COUNT_CODE_' + i;
            countcodeObject = getObject(countcodenm, 'COUNT_CODE_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            countcodearr = countcodeObject.value.split(';');
            if (countcodearr.length > 2) {
                snumber = countcodeObject.value.lastIndexOf(';');
                sstring = countcodeObject.value.substring(0, snumber);
                countcodeObject.value = sstring;
            }
            if (chgbyObject.value == 'Counter Party') {
                countcodeObject.value += ";0000001";
            } else {
                countcodeObject.value += ";" + custid;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getFavComm = function(fieldNumber) {
    try {
        var chgamtbrObject; // Utility Auto Fix Comments
        var chgamtbrnm; // Utility Auto Fix Comments
        var chgamtcustObject; // Utility Auto Fix Comments
        var chgamtcustnm; // Utility Auto Fix Comments
        var chgamthoObject; // Utility Auto Fix Comments
        var chgamthonm; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgamtorigincny; // Utility Auto Fix Comments
        var chgamtoriginnm; // Utility Auto Fix Comments
        var chgamttempObject; // Utility Auto Fix Comments
        var chgamttempnm; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgbynm; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgccynm; // Utility Auto Fix Comments
        var chgcnyccyObject; // Utility Auto Fix Comments
        var chgcnyccynm; // Utility Auto Fix Comments
        var chgdesc; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chgfavrmbObject; // Utility Auto Fix Comments
        var chgfavrmbnm; // Utility Auto Fix Comments
        var chgfavrtObject; // Utility Auto Fix Comments
        var chgfavrtnm; // Utility Auto Fix Comments
        var chghoamtcny; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var chgmthdnm; // Utility Auto Fix Comments
        var chgtemprmbObject; // Utility Auto Fix Comments
        var chgtemprmbnm; // Utility Auto Fix Comments
        var chgusdbrObject; // Utility Auto Fix Comments
        var chgusdbrnm; // Utility Auto Fix Comments
        var chgusdccyObject; // Utility Auto Fix Comments
        var chgusdccynm; // Utility Auto Fix Comments
        var chgusdhoObject; // Utility Auto Fix Comments
        var chgusdhonm; // Utility Auto Fix Comments
        var sellingRateChgCcy; // Utility Auto Fix Comments
        var sellingRateUsdCcy; // Utility Auto Fix Comments
        var sellingRatecnyccy; // Utility Auto Fix Comments
        var usdhoamtcny; // Utility Auto Fix Comments
        chgamtoriginnm = 'CHG_AMT_ORIGIN_' + fieldNumber;
        chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
        chgccynm = 'CHG_CCY_' + fieldNumber;
        chgccyObject = getObject(chgccynm, 'CHG_CCY_');
        chgamthonm = 'CHG_AMT_HO_' + fieldNumber;
        chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
        chgamtbrnm = 'CHG_AMT_BR_' + fieldNumber;
        chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
        chgamtcustnm = 'CHG_AMT_CUST_' + fieldNumber;
        chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
        chgamttempnm = 'CHG_AMT_TEMP_' + fieldNumber;
        chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
        chgfavrtnm = 'CHG_FAV_RT_' + fieldNumber;
        chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
        chgfavrmbnm = 'CHG_FAV_RMB_' + fieldNumber;
        chgfavrmbObject = getObject(chgfavrmbnm, 'CHG_FAV_RMB_');
        chgtemprmbnm = 'CHG_TEMP_RMB_' + fieldNumber;
        chgtemprmbObject = getObject(chgtemprmbnm, 'CHG_TEMP_RMB_');
        chgmthdnm = 'CHG_MTHD_' + fieldNumber;
        chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
        chgcnyccynm = 'CHG_CNY_CCY_' + fieldNumber;
        chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
        chgbynm = 'CHG_BY_' + fieldNumber;
        chgbyObject = getObject(chgbynm, 'CHG_BY_');
        chgusdccynm = 'CHG_USD_CCY_' + fieldNumber;
        chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
        chgusdhonm = 'CHG_USD_HO_' + fieldNumber;
        chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
        chgusdbrnm = 'CHG_USD_BR_' + fieldNumber;
        chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
        chgdesc = 'CHG_DESC_' + fieldNumber;
        chgdescObject = getObject(chgdesc, 'CHG_DESC_');

        chgfavrmbObject.value = 0.00;

        if ((chgmthdObject.value != '' && chgbyObject.value != '' && chgbyObject.value == 'Counter Party' || chgcnyccyObject.value == '') && (chgusdccyObject.value != '' && chgmthdObject.value != 'WRITEOFF')) {
            if (chgusdccyObject.value != '' && chgccyObject.value != '' && chgfavrtObject.value > 0) {
                sellingRateUsdCcy = SYS_GetExchangeRate_Fee(chgusdccyObject.value, 'CNY', 'Selling Rate', '');
                usdhoamtcny = SYS_BeFloat(chgusdhoObject.value) * SYS_BeFloat(sellingRateUsdCcy[0][1]) / 100;
                sellingRateChgCcy = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                chgamtorigincny = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(sellingRateChgCcy[0][1]) / 100;
                chgfavrmbObject.value = usdhoamtcny - chgamtorigincny;
            }
        } else if (chgmthdObject.value != '' && chgbyObject.value != '' && chgmthdObject.value != 'WRITEOFF' && (chgbyObject.value != 'Counter Party' || chgfavrtObject.value > 0)) {
            if (chgcnyccyObject.value != '' && chgccyObject.value != '' && chgfavrtObject.value > 0) {
                sellingRatecnyccy = SYS_GetExchangeRate_Fee(chgcnyccyObject.value, 'CNY', 'Selling Rate', '');
                chghoamtcny = SYS_BeFloat(chgamthoObject.value) * SYS_BeFloat(sellingRatecnyccy[0][1]) / 100;
                sellingRateChgCcy = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                chgamtorigincny = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(sellingRateChgCcy[0][1]) / 100;
                chgfavrmbObject.value = chghoamtcny - chgamtorigincny;
            }
        }
        getFavRmbTemp(fieldNumber);
        chgfavrmbObject.value = SYT_CCY_AMT('CNY', chgfavrmbObject.value);
        if (SYS_MODULE_NAME == 'FFIT') {
            if ((chgccyObject.value == 'USD' || chgccyObject.value == 'CNY') && chgmthdObject.value == 'FREE' && chgdescObject.value == 'FFITCHG') {
                chgccyObject.value = 'USD';
                sellingRateChgCcy = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                chgfavrmbObject.value = 100 * SYS_BeFloat(sellingRateChgCcy[0][1]) / 100;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getFavRmbTemp = function(fieldNumber) {
    try {
        var chgtemprmbObject; // Utility Auto Fix Comments
        var chgtemprmbnm; // Utility Auto Fix Comments
        chgfavrmbnm = 'CHG_FAV_RMB_' + fieldNumber;
        chgfavrmbObject = getObject(chgfavrmbnm, 'CHG_FAV_RMB_');
        chgtemprmbnm = 'CHG_TEMP_RMB_' + fieldNumber;
        chgtemprmbObject = getObject(chgtemprmbnm, 'CHG_TEMP_RMB_');
        chgtemprmbObject.value = SYT_CCY_AMT('CNY', chgfavrmbObject.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getFeeCommon = function(feeName, favflg) {
    try {
        var favrtflg; // Utility Auto Fix Comments
        var feeType; // Utility Auto Fix Comments
        var feebr; // Utility Auto Fix Comments
        var feebrarr; // Utility Auto Fix Comments
        var feecust; // Utility Auto Fix Comments
        var feecustarr; // Utility Auto Fix Comments
        var feehead; // Utility Auto Fix Comments
        var feeheadarr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var returnArr; // Utility Auto Fix Comments
        feecust = false;
        feehead = false;
        feebr = false;
        feecustarr = new Array();
        feebrarr = new Array();
        feeheadarr = new Array();
        returnArr = new Array();
        favrtflg = false;
        if (favflg) {
            favrtflg = favflg;
        }
        for (i = 0; i < feeArr.length; i++) {
            feeType = feeArr[i][3];
            if (feeArr[i][1] == feeName && feeArr[i][2] == 'CNY') {
                if (feeType == "HEADOFFICE") {
                    for (j = 0; j < feeArr[i].length; j++) {
                        feeheadarr[j] = "'" + feeArr[i][j] + "'";
                    }
                    feehead = true;
                } else if (feeType == "BRANCH") {
                    for (j = 0; j < feeArr[i].length; j++) {
                        feebrarr[j] = "'" + feeArr[i][j] + "'";
                    }
                    feebr = true;
                } else if (feeType == "CUST") {
                    for (j = 0; j < feeArr[i].length; j++) {
                        feecustarr[j] = "'" + feeArr[i][j] + "'";
                    }
                    feecust = true;
                }
            }
        }
        if (feecust && !favrtflg) {
            returnArr = feecustarr;
            return returnArr;
        } else if (!feecust && feebr && !favrtflg) {
            returnArr = feebrarr;
            return returnArr;
        } else if (!feecust && !feebr && feehead && !favrtflg) {
            returnArr = feeheadarr;
            return returnArr;
        } else if (favrtflg) {
            returnArr = feeheadarr;
            return returnArr;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getFeeField = function(feeName, when) {
    try {
        var FieldArr; // Utility Auto Fix Comments
        var chineseObject; // Utility Auto Fix Comments
        var chinesedescName; // Utility Auto Fix Comments
        var dlyccyName; // Utility Auto Fix Comments
        var fieldNumber; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var rcvamtName; // Utility Auto Fix Comments
        var rcvccyName; // Utility Auto Fix Comments
        if (when == 'NOW') {
            for (fieldNumber = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); fieldNumber < document.MAINFORM.FEE_NUMBER.value; fieldNumber++) {
                chgbynm = 'CHG_BY_' + fieldNumber;
                chgbyObject = getObject(chgbynm, 'CHG_BY_');
                chgmthdnm = 'CHG_MTHD_' + fieldNumber;
                chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                chgdescnm = 'CHG_DESC_' + fieldNumber;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                chgccynm = 'CHG_CCY_' + fieldNumber;
                chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                chgamtoriginnm = 'CHG_AMT_ORIGIN_' + fieldNumber;
                chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                chgfavrtnm = 'CHG_FAV_RT_' + fieldNumber;
                chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
                chinesedescName = 'CHINESE_DESC_' + fieldNumber;
                chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                rcvccyName = 'RCV_CCY_' + fieldNumber;
                rcvccyObject = getObject(rcvccyName, 'RCV_CCY_');
                rcvamtName = 'RCV_AMT_' + fieldNumber;
                rcvamtObject = getObject(rcvamtName, 'RCV_AMT_');
                dlyccyName = 'DLY_CCY_' + fieldNumber;
                dlyccyObject = getObject(dlyccyName, 'DLY_CCY_');
                dlyamtName = 'DLY_AMT_' + fieldNumber;
                dlyamtObject = getObject(dlyamtName, 'DLY_AMT_');
                if (chgdescObject.value == feeName) {
                    FieldArr = [chineseObject.value, chgccyObject.value, chgamtoriginObject.value, rcvccyObject.value, rcvamtObject.value, dlyccyObject.value, dlyamtObject.value, chgbyObject.value, chgmthdObject.value, chgfavrtObject.value];
                    return FieldArr;
                }
            }
            return null;
        } else if (when == 'DLY') {
            flg = '';
            for (fieldNumber = 0; fieldNumber < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); fieldNumber++) {
                chgdescnm = 'CHG_DESC_' + fieldNumber;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                if (chgdescObject.value == feeName) {
                    flg = 'Y';
                    return flg;
                    //break;


                }
            }
            if (flg != 'Y') {
                flg = 'N';
                return flg;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getFeeFinal_Comm = function(ecFlag, fieldNumber, callfunctionname, feelastNumber) {
    try {
        var chgamtbrObject; // Utility Auto Fix Comments
        var chgamtbrnm; // Utility Auto Fix Comments
        var chgamtcustObject; // Utility Auto Fix Comments
        var chgamtcustnm; // Utility Auto Fix Comments
        var chgamthoObject; // Utility Auto Fix Comments
        var chgamthonm; // Utility Auto Fix Comments
        var chgamtorigin; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgamtoriginnm; // Utility Auto Fix Comments
        var chgamtshowObject; // Utility Auto Fix Comments
        var chgamtshownm; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgbynm; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgccynm; // Utility Auto Fix Comments
        var chgcnybrccyObject; // Utility Auto Fix Comments
        var chgcnybrccynm; // Utility Auto Fix Comments
        var chgcnyccyObject; // Utility Auto Fix Comments
        var chgcnyccynm; // Utility Auto Fix Comments
        var chgcnycustccyObject; // Utility Auto Fix Comments
        var chgcnycustccynm; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chgdescnm; // Utility Auto Fix Comments
        var chgfavrtObject; // Utility Auto Fix Comments
        var chgfavrtnm; // Utility Auto Fix Comments
        var chgflgnm; // Utility Auto Fix Comments
        var chgflgobject; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var chgmthdnm; // Utility Auto Fix Comments
        var chgusdbrObject; // Utility Auto Fix Comments
        var chgusdbrccyObject; // Utility Auto Fix Comments
        var chgusdbrccynm; // Utility Auto Fix Comments
        var chgusdbrnm; // Utility Auto Fix Comments
        var chgusdccyObject; // Utility Auto Fix Comments
        var chgusdccynm; // Utility Auto Fix Comments
        var chgusdhoObject; // Utility Auto Fix Comments
        var chgusdhonm; // Utility Auto Fix Comments
        var chineseObject; // Utility Auto Fix Comments
        var chinesedescName; // Utility Auto Fix Comments
        var feeCcysRt; // Utility Auto Fix Comments
        var feelastnu; // Utility Auto Fix Comments
        var feenameObject; // Utility Auto Fix Comments
        var feenamenm; // Utility Auto Fix Comments
        var feestanName; // Utility Auto Fix Comments
        var feestanObject; // Utility Auto Fix Comments
        var funcnamenm; // Utility Auto Fix Comments
        var funcnameobject; // Utility Auto Fix Comments
        var maxfeeheadName; // Utility Auto Fix Comments
        var maxfeeheadObject; // Utility Auto Fix Comments
        var periodObject; // Utility Auto Fix Comments
        var periodnm; // Utility Auto Fix Comments
        var trxCcyRt; // Utility Auto Fix Comments
        var trxamtObject; // Utility Auto Fix Comments
        var trxamtnm; // Utility Auto Fix Comments
        var trxccyObject; // Utility Auto Fix Comments
        var trxccynm; // Utility Auto Fix Comments
        var trxrtObject; // Utility Auto Fix Comments
        var trxrtnm; // Utility Auto Fix Comments
        chgbynm = 'CHG_BY_' + fieldNumber;
        chgbyObject = getObject(chgbynm, 'CHG_BY_');
        chgmthdnm = 'CHG_MTHD_' + fieldNumber;
        chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
        chgdescnm = 'CHG_DESC_' + fieldNumber;
        chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
        chgcnyccynm = 'CHG_CNY_CCY_' + fieldNumber;
        chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
        chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + fieldNumber;
        chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
        chgcnybrccynm = 'CHG_CNY_BRCCY_' + fieldNumber;
        chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
        chgusdccynm = 'CHG_USD_CCY_' + fieldNumber;
        chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
        chgusdbrccynm = 'CHG_USD_BRCCY_' + fieldNumber;
        chgusdbrccyObject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
        chgccynm = 'CHG_CCY_' + fieldNumber;
        chgccyObject = getObject(chgccynm, 'CHG_CCY_');
        chgamtoriginnm = 'CHG_AMT_ORIGIN_' + fieldNumber;
        chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
        chgamthonm = 'CHG_AMT_HO_' + fieldNumber;
        chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
        chgamtbrnm = 'CHG_AMT_BR_' + fieldNumber;
        chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
        chgamtcustnm = 'CHG_AMT_CUST_' + fieldNumber;
        chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
        chgusdhonm = 'CHG_USD_HO_' + fieldNumber;
        chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
        chgusdbrnm = 'CHG_USD_BR_' + fieldNumber;
        chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
        chgfavrtnm = 'CHG_FAV_RT_' + fieldNumber;
        chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
        trxccynm = 'TRX_CCY_' + fieldNumber;
        trxccyObject = getObject(trxccynm, 'TRX_CCY_');
        chgamtshownm = 'CHG_AMT_SHOW_' + fieldNumber;
        chgamtshowObject = getObject(chgamtshownm, 'CHG_AMT_SHOW_');
        chinesedescName = 'CHINESE_DESC_' + fieldNumber;
        chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
        feenamenm = 'FEE_NAME_' + fieldNumber;
        feenameObject = getObject(feenamenm, 'FEE_NAME_');
        chgdescnm = 'CHG_DESC_' + fieldNumber;
        chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
        trxamtnm = 'TRX_AMT_' + fieldNumber;
        trxamtObject = getObject(trxamtnm, 'TRX_AMT_');
        trxrtnm = 'TRX_RT_' + fieldNumber;
        trxrtObject = getObject(trxrtnm, 'TRX_RT_');
        periodnm = 'PERIOD_' + fieldNumber;
        periodObject = getObject(periodnm, 'PERIOD_');
        funcnamenm = 'FUNC_NAME_' + fieldNumber;
        funcnameobject = getObject(funcnamenm, 'FUNC_NAME_');
        chgflgnm = 'CHG_FLG_' + fieldNumber;
        chgflgobject = getObject(chgflgnm, 'CHG_FLG_');
        maxfeeheadName = 'MAX_FEE_HEAD_' + fieldNumber;
        maxfeeheadObject = getObject(maxfeeheadName, 'MAX_FEE_HEAD_');
        feestanName = 'FEE_STAN_' + fieldNumber;
        feestanObject = getObject(feestanName, 'FEE_STAN_');
        feelastnu = feelastNumber;
        removeSelectText(chgbyObject, chgmthdObject, fieldNumber);
        chgamtorigin = 0;
        if (chgusdccyObject.value != '') {
            if (chgbyObject.value != 'Counter Party' && (chgmthdObject.value != '' && chgmthdObject.value != 'FREE' && chgmthdObject.value != 'WRITEOFF') && chgbyObject.value != '') {
                if (chgcnyccyObject.value != '') {
                    if (chgfavrtObject.value == 0) {
                        if (SYS_BeFloat(chgamtcustObject.value) > 0) {
                            chgccyObject.value = chgcnycustccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgamtcustObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (SYS_BeFloat(chgamtbrObject.value) > 0) {
                            chgccyObject.value = chgcnybrccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgamtbrObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (SYS_BeFloat(chgamthoObject.value) > 0 && SYS_BeFloat(chgamtcustObject.value) <= 0 && SYS_BeFloat(chgamtbrObject.value) <= 0) {
                            chgccyObject.value = chgcnyccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value) * (1 - chgfavrtObject.value / 100);
                        }
                    } else if (chgfavrtObject.value > 0 && chgfavrtObject.value <= 100) {
                        if (funcnameobject.value == 'GetComm' && chgflgobject.value == 'Y') {
                            GetComm(feenameObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', '', '', true);
                            chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                            if (SYS_BeFloat(feestanObject.value) * (1 - chgfavrtObject.value / 100) >= SYS_BeFloat(maxfeeheadObject.value) && maxfeeheadObject.value > 0) {
                                chgamtoriginObject.value = maxfeeheadObject.value;
                                chgccyObject.value = 'CNY';
                            }
                        } else if (funcnameobject.value == 'getLOFGFee' && chgflgobject.value == 'Y') {
                            getLOFGFee(feenameObject.value, chgdescObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', true);
                            chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (funcnameobject.value != 'GetComm' || funcnameobject.value != 'getLOFGFee') {
                            chgccyObject.value = chgcnyccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value) * (1 - chgfavrtObject.value / 100);
                        }
                    }
                    chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
                } else {
                    if (chgfavrtObject.value == 0) {
                        if (SYS_BeFloat(chgamtcustObject.value) > 0) {
                            chgccyObject.value = chgusdbrccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgamtcustObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (SYS_BeFloat(chgusdbrObject.value) > 0) {
                            chgccyObject.value = chgusdbrccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgusdbrObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (SYS_BeFloat(chgusdhoObject.value) > 0 && SYS_BeFloat(chgusdbrObject.value) <= 0) {
                            chgccyObject.value = chgusdccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgusdhoObject.value) * (1 - chgfavrtObject.value / 100);
                        }
                    } else if (chgfavrtObject.value > 0 && chgfavrtObject.value <= 100) {
                        if (funcnameobject.value == 'GetComm' && chgflgobject.value == 'Y') {
                            GetComm(feenameObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', '', '', true, true);
                            chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (funcnameobject.value == 'getLOFGFee' && chgflgobject.value == 'Y') {
                            getLOFGFee(feenameObject.value, chgdescObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', true, true);
                            chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                        } else if (funcnameobject.value != 'GetComm' || funcnameobject.value != 'getLOFGFee') {
                            chgccyObject.value = chgusdccyObject.value;
                            chgamtoriginObject.value = SYS_BeFloat(chgusdhoObject.value) * (1 - chgfavrtObject.value / 100);
                        }
                    }
                    chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
                }
            } else if (chgbyObject.value == 'Counter Party' && (chgmthdObject.value != '' && chgmthdObject.value != 'FREE')) {
                if (chgfavrtObject.value == 0) {
                    chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                    if (SYS_BeFloat(chgusdbrObject.value) > 0) {
                        chgamtoriginObject.value = SYS_BeFloat(chgusdbrObject.value);
                    } else if (SYS_BeFloat(chgusdhoObject.value) > 0 && SYS_BeFloat(chgusdbrObject.value) <= 0) {
                        chgamtoriginObject.value = SYS_BeFloat(chgusdhoObject.value);
                    }
                    if (chgusdccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                        feeCcysRt = SYS_GetExchangeRate_Fee(chgusdccyObject.value, 'CNY', 'Selling Rate', '');
                        trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                        if (feeCcysRt.length > 0) {
                            chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]); {}
                        } else if (chgfavrtObject.value > 0 && chgfavrtObject.value <= 100) {
                            if (funcnameobject.value == 'GetComm' && chgflgobject.value == 'Y') {
                                GetComm(feenameObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', '', '', true, true);
                                chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                                if (chgccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                    feeCcysRt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                                    trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                    if (feeCcysRt.length > 0) {
                                        chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                        chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                                    }
                                }
                            } else if (funcnameobject.value == 'getLOFGFee' && chgflgobject.value == 'Y') {
                                getLOFGFee(feenameObject.value, chgdescObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', true, true);
                                chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                                if (chgccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                    feeCcysRt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                                    trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                    if (feeCcysRt.length > 0) {
                                        chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                        chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                                    }
                                }
                            } else if (funcnameobject.value != 'getLOFGFee' || funcnameobject.value != 'GetComm') {
                                chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                                chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value) * (1 - chgfavrtObject.value / 100);
                                if (chgusdccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                    feeCcysRt = SYS_GetExchangeRate_Fee(chgusdccyObject.value, 'CNY', 'Selling Rate', '');
                                    trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                    if (feeCcysRt.length > 0) {
                                        chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                    }
                                }
                            }
                        }
                        chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
                    } else if (chgbyObject.value == '' || chgmthdObject.value == '' || chgmthdObject.value == 'FREE') {
                        chgamtoriginObject.value = 0.00;
                        if (chgccyObject.value == '') {
                            chgccyObject.value = 'CNY';
                        }
                    }
                } else {
                    if (chgbyObject.value != 'Counter Party' && (chgmthdObject.value != '' && chgmthdObject.value != 'FREE' && chgmthdObject.value != 'WRITEOFF') && chgbyObject.value != '') {
                        if (chgfavrtObject.value == 0) {
                            if (SYS_BeFloat(chgamtcustObject.value) > 0) {
                                chgccyObject.value = chgcnycustccyObject.value;
                                chgamtoriginObject.value = SYS_BeFloat(chgamtcustObject.value) * (1 - chgfavrtObject.value / 100);
                            } else if (SYS_BeFloat(chgamtbrObject.value) > 0 && SYS_BeFloat(chgamtcustObject.value) <= 0 && SYS_BeFloat(chgamthoObject.value) <= SYS_BeFloat(chgamtbrObject.value)) { //WT 20100825 EXLC--Negotiation--charges--3--post
                                chgccyObject.value = chgcnybrccyObject.value;
                                chgamtoriginObject.value = SYS_BeFloat(chgamtbrObject.value) * (1 - chgfavrtObject.value / 100);
                            } else if (SYS_BeFloat(chgamthoObject.value) > 0 && SYS_BeFloat(chgamtcustObject.value) <= 0 && SYS_BeFloat(chgamthoObject.value) > SYS_BeFloat(chgamtbrObject.value)) { //WT 20100825 EXLC--Negotiation--charges--3--post
                                chgccyObject.value = chgcnyccyObject.value;
                                chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value) * (1 - chgfavrtObject.value / 100);
                            }
                        } else if (chgfavrtObject.value > 0 && chgfavrtObject.value <= 100) {
                            if (funcnameobject.value == 'GetComm' && chgflgobject.value == 'Y') {
                                GetComm(feenameObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', '', '', true);
                                chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                                if (SYS_BeFloat(feestanObject.value) * (1 - chgfavrtObject.value / 100) >= SYS_BeFloat(maxfeeheadObject.value) && maxfeeheadObject.value > 0) {
                                    chgamtoriginObject.value = maxfeeheadObject.value;
                                    chgccyObject.value = 'CNY';
                                }
                            } else if (funcnameobject.value == 'getLOFGFee' && chgflgobject.value == 'Y') {
                                getLOFGFee(feenameObject.value, chgdescObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', true);
                                chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                            } else if (funcnameobject.value != 'GetComm' || funcnameobject.value != 'getLOFGFee') {
                                chgccyObject.value = chgcnyccyObject.value;
                                chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value) * (1 - chgfavrtObject.value / 100);
                            }
                        }
                        chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
                    } else if (chgbyObject.value == 'Counter Party' && (chgmthdObject.value != '' && chgmthdObject.value != 'WRITEOFF' && chgmthdObject.value != 'FREE') && fieldNumber >= SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)) {
                        if (chgfavrtObject.value == 0) {
                            chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                            if (SYS_BeFloat(chgamtbrObject.value) > 0) {
                                chgamtoriginObject.value = SYS_BeFloat(chgamtbrObject.value);
                            } else if (SYS_BeFloat(chgamthoObject.value) > 0 && SYS_BeFloat(chgamtbrObject.value) <= 0) {
                                chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value);
                            }
                            if ((chgcnyccyObject.value == document.MAINFORM.TRX_CCY_COMM.value) && chgdescObject.value == 'EXLCCHECKDOC') {
                                chgcnyccyObject.value = 'CNY';
                            }
                            if (chgcnyccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                                feeCcysRt = SYS_GetExchangeRate_Fee(chgcnyccyObject.value, 'CNY', 'Selling Rate', '');
                                trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                try {
                                    chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                } catch (e1) {
                                    if (document.MAINFORM.TRX_CCY_COMM.value == '') {
                                        SYS_CheckError(document.MAINFORM.TRX_CCY_COMM, 'TRX_CCY_COMM input error');
                                    }
                                }
                            }
                        } else if (chgfavrtObject.value > 0 && chgfavrtObject.value <= 100) {
                            if (funcnameobject.value == 'GetComm' && chgflgobject.value == 'Y') {
                                GetComm(feenameObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', '', '', true);
                                chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                                if (SYS_BeFloat(feestanObject.value) * (1 - chgfavrtObject.value / 100) >= SYS_BeFloat(maxfeeheadObject.value) && maxfeeheadObject.value > 0) {
                                    chgamtoriginObject.value = maxfeeheadObject.value;
                                    chgccyObject.value = 'CNY';
                                }
                                if (chgccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                    feeCcysRt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                                    trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                    try {
                                        chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                    } catch (e2) {
                                        if (document.MAINFORM.TRX_CCY_COMM.value == '') {
                                            SYS_CheckError(document.MAINFORM.TRX_CCY_COMM, 'TRX_CCY_COMM input error');
                                        }
                                    }
                                }
                                chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                            } else if (funcnameobject.value == 'getLOFGFee' && chgflgobject.value == 'Y') {
                                getLOFGFee(feenameObject.value, chgdescObject.value, trxamtObject.value, '', periodObject.value, trxccyObject.value, 'Y', '', '', true);
                                chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * (1 - chgfavrtObject.value / 100);
                                if (chgccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {

                                    feeCcysRt = SYS_GetExchangeRate_Fee(chgccyObject.value, 'CNY', 'Selling Rate', '');
                                    trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                    try {
                                        chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                    } catch (e3) {
                                        if (document.MAINFORM.TRX_CCY_COMM.value == '') {
                                            SYS_CheckError(document.MAINFORM.TRX_CCY_COMM, 'TRX_CCY_COMM input error');
                                        }
                                    }
                                }
                                chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                            } else if (funcnameobject.value != 'GetComm' || funcnameobject.value != 'getLOFGFee') {
                                chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                                chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value) * (1 - chgfavrtObject.value / 100);
                                if (chgcnyccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                    chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                                    feeCcysRt = SYS_GetExchangeRate_Fee(chgcnyccyObject.value, 'CNY', 'Selling Rate', '');
                                    trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                    try {
                                        chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                    } catch (e4) {
                                        if (document.MAINFORM.TRX_CCY_COMM.value == '') {
                                            SYS_CheckError(document.MAINFORM.TRX_CCY_COMM, 'TRX_CCY_COMM input error');
                                        }
                                    }

                                }
                            }
                        }

                        chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
                    } else if (chgbyObject.value == 'Counter Party' && (chgmthdObject.value != '' && chgmthdObject.value != 'WRITEOFF' && chgmthdObject.value != 'FREE') && fieldNumber < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)) {
                        if (chgcnyccyObject.value != 'CNY' && chgcnyccyObject.value != '') {
                            chgccyObject.value = chgcnyccyObject.value;
                            chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamthoObject.value);
                        } else if (chgcnyccyObject.value == 'CNY') {
                            chgccyObject.value = document.MAINFORM.TRX_CCY_COMM.value;
                            if (SYS_BeFloat(chgamtbrObject.value) > 0) {
                                chgamtoriginObject.value = SYS_BeFloat(chgamtbrObject.value);
                            } else if (SYS_BeFloat(chgamthoObject.value) > 0 && SYS_BeFloat(chgamtbrObject.value) <= 0)
                                chgamtoriginObject.value = SYS_BeFloat(chgamthoObject.value);
                            if (chgcnyccyObject.value != document.MAINFORM.TRX_CCY_COMM.value) {
                                feeCcysRt = SYS_GetExchangeRate_Fee(chgcnyccyObject.value, 'CNY', 'Selling Rate', '');
                                trxCcyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.TRX_CCY_COMM.value, 'CNY', 'Buying Rate', '');
                                try {
                                    chgamtoriginObject.value = SYS_BeFloat(chgamtoriginObject.value) * SYS_BeFloat(feeCcysRt[0][1]) / SYS_BeFloat(trxCcyRt[0][1]);
                                } catch (e5) {
                                    if (document.MAINFORM.TRX_CCY_COMM.value == '') {}
                                }

                            }
                            chgamtoriginObject.value = SYT_CCY_AMT(chgccyObject.value, chgamtoriginObject.value);
                        }
                    } else if (chgmthdObject.value == '' || chgbyObject.value == '' || (chgmthdObject.value == 'FREE' && chgbyObject.value != 'Counter Party') || chgmthdObject.value == 'WRITEOFF') {
                        chgamtoriginObject.value = 0.00;
                        if (chgccyObject.value == '') {
                            chgccyObject.value = 'CNY';
                        }
                    }

                }
                lastNumber = getLastChar(chgamtoriginnm);
                if (ecFlag != 'EC') {
                    RCV_EQ_AMT(lastNumber);
                    if (callfunctionname != 'TRX_CCY_COMM_onchange' && callfunctionname != "TTL_CHG_onchange") {
                        RCV_DLY_AMT(lastNumber, 'n');
                    } else {
                        RCV_DLY_AMT(lastNumber, 'y', '', feelastNumber);
                    }
                    changeCustAmtClass();
                    getFavComm(lastNumber);
                    getChgCcyAmtTemp(lastNumber);
                    getFavRmbTemp(lastNumber);
                } else if (ecFlag == 'EC') {
                    RCV_EQ_AMT(lastNumber);
                    if (callfunctionname != 'TRX_CCY_COMM_onchange' && callfunctionname != "TTL_CHG_onchange") {
                        RCV_DLY_AMT(lastNumber, 'n', 'EC');
                    } else {
                        RCV_DLY_AMT(lastNumber, 'y', 'EC', '', feelastNumber);
                    }
                    changeCustAmtClass();
                    getFavComm(lastNumber);
                    getChgCcyAmtTemp(lastNumber);
                    getFavRmbTemp(lastNumber);
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getLOFGFee = function(feeName1, feeName2, trxAmt, trxRt, period, trxCcy, chgFlg, code, ecFlag, favFlag, usdccyFlag) {
    try {
        var FEE_CCY; // Utility Auto Fix Comments
        var FEE_LEVEL; // Utility Auto Fix Comments
        var FEE_ORIGIN; // Utility Auto Fix Comments
        var FEE_RT; // Utility Auto Fix Comments
        var FEE_STAN; // Utility Auto Fix Comments
        var MINIMUM; // Utility Auto Fix Comments
        var a; // Utility Auto Fix Comments
        var chgamtbrObject; // Utility Auto Fix Comments
        var chgamtbrnm; // Utility Auto Fix Comments
        var chgamtcustObject; // Utility Auto Fix Comments
        var chgamtcustnm; // Utility Auto Fix Comments
        var chgamthoObject; // Utility Auto Fix Comments
        var chgamthonm; // Utility Auto Fix Comments
        var chgamtoriginObject; // Utility Auto Fix Comments
        var chgamtoriginnm; // Utility Auto Fix Comments
        var chgamttempObject; // Utility Auto Fix Comments
        var chgamttempnm; // Utility Auto Fix Comments
        var chgbyName; // Utility Auto Fix Comments
        var chgbyObject; // Utility Auto Fix Comments
        var chgccyObject; // Utility Auto Fix Comments
        var chgccynm; // Utility Auto Fix Comments
        var chgccytempObject; // Utility Auto Fix Comments
        var chgccytempnm; // Utility Auto Fix Comments
        var chgcnybrccyObject; // Utility Auto Fix Comments
        var chgcnybrccynm; // Utility Auto Fix Comments
        var chgcnyccyObject; // Utility Auto Fix Comments
        var chgcnyccynm; // Utility Auto Fix Comments
        var chgcnycustccyObject; // Utility Auto Fix Comments
        var chgcnycustccynm; // Utility Auto Fix Comments
        var chgdescObject; // Utility Auto Fix Comments
        var chgdescnm; // Utility Auto Fix Comments
        var chgmthdObject; // Utility Auto Fix Comments
        var chgmthdnm; // Utility Auto Fix Comments
        var chgusdbrObject; // Utility Auto Fix Comments
        var chgusdbrccynm; // Utility Auto Fix Comments
        var chgusdbrccyobject; // Utility Auto Fix Comments
        var chgusdbrnm; // Utility Auto Fix Comments
        var chgusdccyObject; // Utility Auto Fix Comments
        var chgusdccynm; // Utility Auto Fix Comments
        var chgusdhoObject; // Utility Auto Fix Comments
        var chgusdhonm; // Utility Auto Fix Comments
        var countcodeName; // Utility Auto Fix Comments
        var countcodeObject; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var favRtFlag; // Utility Auto Fix Comments
        var feeCcyRt; // Utility Auto Fix Comments
        var feenameObject; // Utility Auto Fix Comments
        var feenamenm; // Utility Auto Fix Comments
        var funcnamenm; // Utility Auto Fix Comments
        var funcnameobject; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var periodObject; // Utility Auto Fix Comments
        var periodnm; // Utility Auto Fix Comments
        var periods; // Utility Auto Fix Comments
        var prodcodeName; // Utility Auto Fix Comments
        var prodcodeObject; // Utility Auto Fix Comments
        var trxCcyRt; // Utility Auto Fix Comments
        var trxamtObject; // Utility Auto Fix Comments
        var trxamtnm; // Utility Auto Fix Comments
        var trxccyObject; // Utility Auto Fix Comments
        var trxccynm; // Utility Auto Fix Comments
        var trxrtObject; // Utility Auto Fix Comments
        var trxrtnm; // Utility Auto Fix Comments
        var usdFlag; // Utility Auto Fix Comments
        favRtFlag = false;
        usdFlag = false;
        if (favFlag) {
            favRtFlag = favFlag;
        }
        if (usdccyFlag) {
            usdFlag = usdccyFlag;
        }
        if (ecFlag != 'EC') {
            for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                feenamenm = 'FEE_NAME_' + i;
                feenameObject = getObject(feenamenm, 'FEE_NAME_');
                chgdescnm = 'CHG_DESC_' + i;
                chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                trxamtnm = 'TRX_AMT_' + i;
                trxamtObject = getObject(trxamtnm, 'TRX_AMT_');
                trxrtnm = 'TRX_RT_' + i;
                trxrtObject = getObject(trxrtnm, 'TRX_RT_');
                periodnm = 'PERIOD_' + i;
                periodObject = getObject(periodnm, 'PERIOD_');
                trxccynm = 'TRX_CCY_' + i;
                trxccyObject = getObject(trxccynm, 'TRX_CCY_');
                prodcodeName = 'PROD_CODE_' + i;
                prodcodeObject = getObject(prodcodeName, 'PROD_CODE_');
                countcodeName = 'COUNT_CODE_' + i;
                countcodeObject = getObject(countcodeName, 'COUNT_CODE_');
                funcnamenm = 'FUNC_NAME_' + i
                funcnameobject = getObject(funcnamenm, 'FUNC_NAME_');
                if ((chgdescObject.value == feeName2) && feenameObject.value == '') {
                    feenameObject.value = feeName1;
                    trxamtObject.value = trxAmt;
                    trxrtObject.value = trxRt;
                    periodObject.value = period;
                    trxccyObject.value = trxCcy;
                    countcodeObject.value = code;
                    funcnameobject.value = 'GetComm ';
                }
            }
        }
        for (number = 0; number < feeArr.length; number++) {
            if (feeArr[number][1] == feeName1 && chgFlg == 'N') {
                for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                    chgdescnm = 'CHG_DESC_' + i;
                    chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                    chgccynm = 'CHG_CCY_' + i;
                    chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                    chgcnyccynm = 'CHG_CNY_CCY_' + i;
                    chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                    chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                    chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                    chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                    chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                    chgusdccynm = 'CHG_USD_CCY_' + i;
                    chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                    chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                    chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                    chgamttempnm = 'CHG_AMT_TEMP_' + i;
                    chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                    chgccytempnm = 'CHG_CCY_TEMP_' + i;
                    chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                    chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                    chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                    chgamthonm = 'CHG_AMT_HO_' + i;
                    chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                    chgamtbrnm = 'CHG_AMT_BR_' + i;
                    chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                    chgusdhonm = 'CHG_USD_HO_' + i;
                    chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                    chgusdbrnm = 'CHG_USD_BR_' + i;
                    chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_ ');
                    chgamtcustnm = 'CHG_AMT_CUST_' + i;
                    chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                    chgmthdnm = 'CHG_MTHD_ ' + i;
                    chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_ ');
                    chgbyName = 'CHG_BY_ ' + i;
                    chgbyObject = getObject(chgbyName, 'CHG_BY_ ');
                    if (chgdescObject.value == feeName2) {
                        chgamtoriginObject.value = 0;
                        chgamthoObject.value = 0;
                        chgamtbrObject.value = 0;
                        chgamtcustObject.value = 0;
                        chgusdhoObject.value = 0;
                        chgusdbrObject.value = 0;
                        chgccyObject.value = '';
                        chgcnyccyObject.value = '';
                        chgcnycustccyObject.value = '';
                        chgcnybrccyObject.value = '';
                        chgusdccyObject.value = '';
                        chgusdbrccyobject.value = '';
                        SYT_ChangeFldClass(chgmthdObject, 'O ');
                        SYT_ChangeFldClass(chgbyObject, 'O ');
                        EEHtml.fireEvent(chgamthoObject, 'onchange ');
                    }
                }
            } else if (feeArr[number][1] == feeName1 && chgFlg == 'Y') {
                FEE_LEVEL = feeArr[number][3];
                FEE_RT = SYS_BeFloat(feeArr[number][8]);
                MINIMUM = SYS_BeFloat(feeArr[number][7]);
                days = SYS_BeFloat(feeArr[number][22]);
                FEE_CCY = trxCcy;
                feeCcyRt = SYS_GetExchangeRate_Fee(feeArr[number][2], 'CNY', 'Buying Rate', '');
                trxCcyRt = SYS_GetExchangeRate_Fee(trxCcy, 'CNY', 'Buying Rate', '');
                periods = Math.ceil(SYS_BeFloat(period) / days);
                if ((SYS_BeFloat(period) / days) > 1) {
                    periods = SYS_BeFloat(periods) - 1;
                    a = SYS_BeFloat(period) - days * periods;
                    if (SYS_BeFloat(a) > 10) {
                        periods += 1;
                    }
                }
                FEE_ORIGIN = SYS_BeFloat(trxAmt) * FEE_RT * (SYS_BeFloat(periods)) / 1000;
                if (feeCcyRt.length > 0) {
                    FEE_STAN = SYS_BeFloat(FEE_ORIGIN) * SYS_BeFloat(trxCcyRt[0][1]) / SYS_BeFloat(feeCcyRt[0][1]);
                }
                if (trxCcy == feeArr[number][2]) {
                    FEE_STAN = FEE_ORIGIN;
                }
                if (SYS_BeFloat(FEE_STAN) < SYS_BeFloat(periods) * SYS_BeFloat(MINIMUM) && !favRtFlag) {
                    FEE_ORIGIN = SYS_BeFloat(periods) * SYS_BeFloat(MINIMUM);
                    FEE_CCY = feeArr[number][2];
                } else {}
                FEE_ORIGIN = SYT_CCY_AMT(FEE_CCY, FEE_ORIGIN);
                for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
                    chgdescnm = 'CHG_DESC_' + i;
                    chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
                    chgccynm = 'CHG_CCY_' + i;
                    chgccyObject = getObject(chgccynm, 'CHG_CCY_');
                    chgcnyccynm = 'CHG_CNY_CCY_' + i;
                    chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
                    chgcnycustccynm = 'CHG_CNY_CUSTCCY_' + i;
                    chgcnycustccyObject = getObject(chgcnycustccynm, 'CHG_CNY_CUSTCCY_');
                    chgcnybrccynm = 'CHG_CNY_BRCCY_' + i;
                    chgcnybrccyObject = getObject(chgcnybrccynm, 'CHG_CNY_BRCCY_');
                    chgusdccynm = 'CHG_USD_CCY_' + i;
                    chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
                    chgusdbrccynm = 'CHG_USD_BRCCY_' + i;
                    chgusdbrccyobject = getObject(chgusdbrccynm, 'CHG_USD_BRCCY_');
                    chgamttempnm = 'CHG_AMT_TEMP_' + i;
                    chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
                    chgccytempnm = 'CHG_CCY_TEMP_' + i;
                    chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
                    chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
                    chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
                    chgamthonm = 'CHG_AMT_HO_' + i;
                    chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
                    chgamtbrnm = 'CHG_AMT_BR_' + i;
                    chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
                    chgusdhonm = 'CHG_USD_HO_' + i;
                    chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
                    chgusdbrnm = 'CHG_USD_BR_' + i;
                    chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
                    chgamtcustnm = 'CHG_AMT_CUST_' + i;
                    chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
                    chinesedescName = 'CHINESE_DESC_' + i;
                    chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
                    chgmthdnm = 'CHG_MTHD_' + i;
                    chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
                    chgbyName = 'CHG_BY_' + i;
                    chgbyObject = getObject(chgbyName, 'CHG_BY_');
                    if (chgdescObject.value == feeName2 && feeArr[number][2] == 'CNY') {
                        EEHtml.getElementById("FUNC_NAME_" + i).value = "getLOFGFee"; //20090730
                        EEHtml.getElementById("CHG_FLG_" + i).value = chgFlg; //20090730
                        chineseObject.value = feeArr[number][24];
                        SYT_ChangeFldClass(chgmthdObject, 'M');
                        SYT_ChangeFldClass(chgbyObject, 'M');
                        if (FEE_LEVEL == 'CUST' && !favRtFlag) {
                            chgamtcustObject.value = FEE_ORIGIN;
                            chgcnycustccyObject.value = FEE_CCY;
                            EEHtml.fireEvent(chgamtcustObject, 'onchange');
                            EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                        } else if (FEE_LEVEL == 'HEADOFFICE') {
                            if (!favRtFlag) {
                                chgamthoObject.value = FEE_ORIGIN;
                                chgcnyccyObject.value = FEE_CCY;
                                EEHtml.fireEvent(chgamthoObject, 'onchange');
                                EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                            } else if (!usdFlag) {
                                chgccyObject.value = FEE_CCY;
                                chgamtoriginObject.value = FEE_ORIGIN;
                            }
                        } else if (FEE_LEVEL == 'BRANCH' && !favRtFlag) {
                            chgamtbrObject.value = FEE_ORIGIN;
                            chgcnybrccyObject.value = FEE_CCY;
                            EEHtml.fireEvent(chgamtbrObject, 'onchange');
                            EEHtml.fireEvent(chgcnyccyObject, 'onchange');
                        }
                    } else if (chgdescObject.value == feeName2 && feeArr[number][2] == 'USD') {
                        chineseObject.value = feeArr[number][24];
                        SYT_ChangeFldClass(chgmthdObject, 'M');
                        SYT_ChangeFldClass(chgbyObject, 'M');
                        if (FEE_LEVEL == 'HEADOFFICE') {
                            if (!favRtFlag) {
                                chgusdhoObject.value = FEE_ORIGIN;
                                chgusdccyObject.value = FEE_CCY;
                                EEHtml.fireEvent(chgusdhoObject, 'onchange');
                                EEHtml.fireEvent(chgusdccyObject, 'onchange');
                            } else if (usdFlag) {
                                chgccyObject.value = FEE_CCY;
                                chgamtoriginObject.value = FEE_ORIGIN;
                            }
                        } else if (FEE_LEVEL == 'BRANCH ' && !favRtFlag) {
                            chgusdbrObject.value = FEE_ORIGIN;
                            chgusdbrccyObject.value = FEE_CCY;
                            EEHtml.fireEvent(chgusdbrObject, 'onchange');
                            EEHtml.fireEvent(chgusdccyObject, 'onchange');
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getLastChar = function(stringValue) {
    try {
        var arr; // Utility Auto Fix Comments
        var ilen; // Utility Auto Fix Comments
        var inumber; // Utility Auto Fix Comments
        arr = stringValue.split("_");
        ilen = arr.length - 1;
        inumber = arr[ilen];
        return inumber;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getLedgCode = function(Ref, TempId) {
    try {
        for (num = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); num < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); num++) {
            legdgcodenm = 'LEDG_CODE_' + num;
            legdgcodeObject = getObject(legdgcodenm, 'LEDG_CODE_');
            tempidnm = 'TEMP_ID_' + num;
            tempidObject = getObject(tempidnm, 'TEMP_ID_');
            legdgcodeObject.value = Ref;
            tempidObject.value = TempId;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getObject = function(originField, prefixName) {
    try {
        var arr; // Utility Auto Fix Comments
        var fieldObject; // Utility Auto Fix Comments
        var ilen; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        var number; // Utility Auto Fix Comments
        arr = originField.split("_");
        ilen = arr.length - 1;

        number = arr[ilen];
        name = prefixName + number;
        fieldObject = EEHtml.getElementById(name);
        return fieldObject;
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.getOtherFEE = function(chName, feeName, trxAmt, feeCcy, trxccy, chgFlg, code, favFlag) {
    try {
        var commAmt; // Utility Auto Fix Comments
        var favRtFlag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        favRtFlag = false;
        if (favFlag) {
            favRtFlag = favFlag;
        }
        commAmt = SYS_BeFloat(trxAmt);
        if (chgFlg == undefined) {
            chgFlg = '';
        }
        for (i = SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value); i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            chgdescnm = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdescnm, 'CHG_DESC_');
            chgccynm = 'CHG_CCY_' + i;
            chgccyObject = getObject(chgccynm, 'CHG_CCY_');
            chgcnyccynm = 'CHG_CNY_CCY_' + i;
            chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
            chgusdccynm = 'CHG_USD_CCY_' + i;
            chgusdccyObject = getObject(chgusdccynm, 'CHG_USD_CCY_');
            chgamttempnm = 'CHG_AMT_TEMP_' + i;
            chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
            chgccytempnm = 'CHG_CCY_TEMP_' + i;
            chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            chgamthonm = 'CHG_AMT_HO_' + i;
            chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
            chgamtbrnm = 'CHG_AMT_BR_' + i;
            chgamtbrObject = getObject(chgamtbrnm, 'CHG_AMT_BR_');
            chgusdhonm = 'CHG_USD_HO_' + i;
            chgusdhoObject = getObject(chgusdhonm, 'CHG_USD_HO_');
            chgusdbrnm = 'CHG_USD_BR_' + i;
            chgusdbrObject = getObject(chgusdbrnm, 'CHG_USD_BR_');
            chgamtcustnm = 'CHG_AMT_CUST_' + i;
            chgamtcustObject = getObject(chgamtcustnm, 'CHG_AMT_CUST_');
            chinesedescName = 'CHINESE_DESC_' + i;
            chineseObject = getObject(chinesedescName, 'CHINESE_DESC_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgbyName = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbyName, 'CHG_BY_');
            countcodeName = 'COUNT_CODE_' + i;
            countcodeObject = getObject(countcodeName, 'COUNT_CODE_');
            prodcodeName = 'PROD_CODE_' + i;
            prodcodeObject = getObject(prodcodeName, 'PROD_CODE_');
            codeArr = code.split(';');
            if (chgdescObject.value == feeName && (chgFlg == 'Y' || chgFlg == '')) {
                if (!favRtFlag) {
                    chineseObject.value = chName;
                    chgcnyccyObject.value = feeCcy;
                    chgamthoObject.value = SYT_CCY_AMT(chgcnyccyObject.value, commAmt);
                    countcodeObject.value = code;
                    SYT_ChangeFldClass(chgmthdObject, 'M');
                    SYT_ChangeFldClass(chgbyObject, 'M');
                    EEHtml.fireEvent(chgamthoObject, 'onchange');
                    break;
                } else {
                    chgcnyccyObject.value = feeCcy;
                    chgamthoObject.value = SYT_CCY_AMT(chgcnyccyObject.value, commAmt);
                }
            } else if (chgdescObject.value == feeName && chgFlg == 'N') {
                chineseObject.value = chName;
                chgcnyccyObject.value = '';
                chgamthoObject.value = 0.00;
                chgamtoriginObject.value = 0.00;
                SYT_ChangeFldClass(chgmthdObject, 'O');
                SYT_ChangeFldClass(chgbyObject, 'O');
                EEHtml.fireEvent(chgamthoObject, 'onchange');
                break;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.removeSelectText = function(chgMethod, Number, chgBy) {
    try {
        var hasFreeFlag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var opt; // Utility Auto Fix Comments
        var option4; // Utility Auto Fix Comments
        if (chgBy.value == 'Counter Party') {
            for (i = 0; i < chgMethod.length; i++) {
                if (chgMethod.options[i].text == 'FREE' || chgMethod.options[i].text == ' ? ? ? ') {
                    chgMethod.options[i].removeNode(true);
                    break;
                }
            }
        } else {
            hasFreeFlag = false;
            for (i = 0; i < chgMethod.length; i++) {
                if (chgMethod.options[i].text == 'FREE' || chgMethod.options[i].text == ' ? ? ? ') {
                    hasFreeFlag = true;
                }
            }
            if (!hasFreeFlag && SYS_MODULE_NAME != 'FFIT' && SYS_MODULE_NAME != 'DELC' && SYS_MODULE_NAME != 'DILC' && SYS_MODULE_NAME != 'LOFG' && SYS_MODULE_NAME != 'LGAD') {
                option4 = chgMethod.length;
                opt = new Option('FREE', 'FREE');
                chgMethod.options.add(opt, option4);
            } else if (!hasFreeFlag) {
                option4 = chgMethod.length;
                opt = new Option(' ? ? ? ', 'FREE');
                chgMethod.options.add(opt, option4);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}

csLbiCompProto.tranBAFiled = function() {
    try {
        var lastnumber; // Utility Auto Fix Comments
        for (i = 0; i < SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value); i++) {
            chgamtoriginnm = 'CHG_AMT_ORIGIN_' + i;
            chgamtoriginObject = getObject(chgamtoriginnm, 'CHG_AMT_ORIGIN_');
            chgccynm = 'CHG_CCY_' + i;
            chgccyObject = getObject(chgccynm, 'CHG_CCY_');
            chgccylastnm = 'CHG_CCY_LAST_' + i;
            chgccylastObject = getObject(chgccylastnm, 'CHG_CCY_LAST_');
            chgcnyccynm = 'CHG_CNY_CCY_' + i;
            chgcnyccyObject = getObject(chgcnyccynm, 'CHG_CNY_CCY_');
            chgccybanm = 'CHG_CCY_BA_' + i;
            chgccybaObject = getObject(chgccynm, 'CHG_CCY_BA_');
            chgamtbanm = 'CHG_AMT_BA_' + i;
            chgamtbaObject = getObject(chgamtbanm, 'CHG_AMT_BA_');
            chgamthonm = 'CHG_AMT_HO_' + i;
            chgamthoObject = getObject(chgamthonm, 'CHG_AMT_HO_');
            chgmthdnm = 'CHG_MTHD_' + i;
            chgmthdObject = getObject(chgmthdnm, 'CHG_MTHD_');
            chgccytempnm = 'CHG_CCY_TEMP_' + i;
            chgccytempObject = getObject(chgccytempnm, 'CHG_CCY_TEMP_');
            chgamttempnm = 'CHG_AMT_TEMP_' + i;
            chgamttempObject = getObject(chgamttempnm, 'CHG_AMT_TEMP_');
            chgbynm = 'CHG_BY_' + i;
            chgbyObject = getObject(chgbynm, 'CHG_BY_');
            chgbylastnm = 'CHG_BY_LAST_' + i;
            chgbylastObject = getObject(chgbylastnm, 'CHG_BY_LAST_');
            chgdesc = 'CHG_DESC_' + i;
            chgdescObject = getObject(chgdesc, 'CHG_DESC_');
            tempnm = 'TEMP_ID_' + i;
            tempObject = getObject(tempnm, 'TEMP_ID_');
            ledgcodenm = 'LEDG_CODE_' + i;
            ledgcodeObject = getObject(ledgcodenm, 'LEDG_CODE_');
            chgfavrtnm = 'CHG_FAV_RT_' + i;
            chgfavrtObject = getObject(chgfavrtnm, 'CHG_FAV_RT_');
            rcveqamtnm = 'RCV_EQ_AMT_' + i;
            rcveqamtObject = getObject(rcveqamtnm, 'RCV_EQ_AMT_');
            rcveqamtnm_temp = 'RCV_EQ_AMT_TEMP_' + i; //20090604
            rcveqamtObject_temp = getObject(rcveqamtnm_temp, 'RCV_EQ_AMT_TEMP_'); //20090604
            if (i < SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)) {
                if ((chgmthdObject.value == 'FREE' || chgmthdObject.value == 'WRITEOFF') && chgbyObject.value == chgbylastObject.value) {
                    chgamtbaObject.value = -SYS_BeFloat(chgamthoObject.value);
                } else if ((chgmthdObject.value == 'FREE' || chgmthdObject.value == 'WRITEOFF') && chgbyObject.value != chgbylastObject.value) {
                    chgamtbaObject.value = 0;
                } else if ((chgbyObject.value != chgbylastObject.value) || (chgccyObject.value != chgccylastObject.value)) {
                    chgamtbaObject.value = SYS_BeFloat(chgamtoriginObject.value);
                } else {
                    chgamtbaObject.value = 0;
                    chgfavrtObject.value = 0;
                }
                lastnumber = i + SYS_BeFloat(document.MAINFORM.FEE_NUMBER.value);
                EEHtml.getElementById('CHG_AMT_BA_' + lastnumber).value = 0;
                EEHtml.getElementById('BANA_' + lastnumber).value = 'Y';
                if ((chgbyObject.value != chgbylastObject.value && chgbylastObject.value != '') || (chgccyObject.value != chgccylastObject.value && chgccylastObject.value != '')) {
                    chgamtbanm1 = 'CHG_AMT_BA_' + lastnumber;
                    chgamtbaObject1 = getObject(chgamtbanm1, 'CHG_AMT_BA_');
                    chgdesc1 = 'CHG_DESC_' + lastnumber;
                    chgdescObject1 = getObject(chgdesc1, 'CHG_DESC_');
                    chgbynm1 = 'CHG_BY_' + lastnumber;
                    chgbyObject1 = getObject(chgbynm1, 'CHG_BY_');
                    chgccynm1 = 'CHG_CCY_' + lastnumber;
                    chgccyObject1 = getObject(chgccynm1, 'CHG_CCY_');
                    bananm = 'BANA_' + lastnumber;
                    banaObject1 = getObject(bananm, 'BANA_');
                    tempnm1 = 'TEMP_ID_' + lastnumber;
                    tempObject1 = getObject(tempnm1, 'TEMP_ID_');
                    ledgcodenm1 = 'LEDG_CODE_' + lastnumber;
                    ledgcodeObject1 = getObject(ledgcodenm1, 'LEDG_CODE_');
                    chgamtbaObject1.value = -SYS_BeFloat(chgamthoObject.value);
                    chgdescObject1.value = chgdescObject.value;
                    chgbyObject1.value = chgbylastObject.value;
                    chgccyObject1.value = chgccylastObject.value;
                    ledgcodeObject1.value = ledgcodeObject.value;
                    tempObject1.value = tempObject.value;
                    banaObject1.value = 'N';
                }
            } else if (i >= SYS_BeFloat(document.MAINFORM.NOW_NUMBER.value)) {
                chgamtbaObject.value = SYS_BeFloat(chgamtoriginObject.value);
                if (chgmthdObject.value == 'FREE' || SYS_BeFloat(chgfavrtObject.value) == 100) {
                    chgamtbaObject.value = -1;
                    rcveqamtObject.value = -1;
                    rcveqamtObject_temp.value = 0; //20090604
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_GTS_CentralCommissionmodule.js", e);
    }
}