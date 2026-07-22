var vCls_flg = DV.getFieldValue("CLS_DRWG_FLG");
var nPres_Bal = DV.toFloat(DV.getFieldValue("PENDING_PRES_BAL"));
var ASSET_ACNO = DV.getFieldValue("ASSET_ACNO");
var LIAB_ACNO = DV.getFieldValue("LIAB_ACNO");

if (vCls_flg == "YES" && nPres_Bal > 0 && ASSET_ACNO != "" && LIAB_ACNO != "") {
    DV.appendField("EPLC_Liability_CloseDrawing");
}