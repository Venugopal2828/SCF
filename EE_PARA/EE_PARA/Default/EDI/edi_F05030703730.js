var pmttype = DV.getFieldValue("FA_PMT_TYPE");
if (pmttype == 'PMT') {
    DV.appendField("IF_EDI11");
} else if (pmttype == 'PUG') {
    DV.appendField("IF_EDI13");
}