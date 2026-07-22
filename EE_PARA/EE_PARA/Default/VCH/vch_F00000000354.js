var nCONF_BAL = DV.toFloat(DV.getFieldValue("REIM_CONF_BAL"));

if (nCONF_BAL > 0) {
    //DV.appendField("REIM_REIM_CONFIRMATION");
    //DV.appendField("REIM_REIM_CONFIRMATION_ADD");
    DV.appendField("REIM_REIM_CONFIRMATION_CREATION");
}