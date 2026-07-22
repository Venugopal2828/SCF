if (NS.isRelease() && NS.isLastAuthorizer()) {
    var ns = NS.createNotification("FADA_AddCounterparty_Release", "", "");
    NS.setSubject(ns, "FADA Add Counterparty Release - " + NS.getFieldValue("C_MAIN_REF"), "");
    NS.sendToMaker(ns);
}
