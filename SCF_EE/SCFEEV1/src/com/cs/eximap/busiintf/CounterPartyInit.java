package com.cs.eximap.busiintf;

import java.io.IOException;

import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.cs.base.xml.XMLManager;
import com.cs.core.utility.Request;
import com.fs.servlet.CounterParty;
import com.fs.servlet.CounterpartyInviteMailServlet;

public class CounterPartyInit implements GAPIBusiIntf {
  public DocumentImpl ecData(DocumentImpl arg0) throws Exception {
    System.out.println("ENTERED INTO THIS ecData DATA " + XMLManager.convertToString((Document)arg0));
    return null;
  }
  
  public DocumentImpl gapiData(DocumentImpl arg0, Request arg1) throws Exception {
    System.out.println("ENTERED INTO THIS gapiData DATA " + XMLManager.convertToString((Document)arg0));
    return null;
  }
  
  public DocumentImpl inqData(DocumentImpl arg0) throws Exception {
    System.out.println("ENTERED INTO THIS inqData1 DATA " + XMLManager.convertToString((Document)arg0));
    return null;
  }
  
  public DocumentImpl inqData(DocumentImpl arg0, Request arg1) throws Exception {
    System.out.println("ENTERED INTO THIS inqData DATA " + XMLManager.convertToString((Document)arg0));
    return null;
  }
  
  public DocumentImpl releaseData(DocumentImpl requestXml) throws Exception {
    System.out.println("Entered into Release Data.. Request IS:: " + XMLManager.convertDomToString((Document)requestXml));
    System.out.println("=== RELEASE DATA METHOD HIT ===");
    Node headerNd = XMLManager.findChildNode(requestXml.getDocumentElement(), "header");
    Node msgNode = XMLManager.findChildNode(requestXml.getDocumentElement(), "out-msg-content");
    String cMainRef = XMLManager.getChildNodeValue(msgNode, "TEMP_REF", false);
    if (cMainRef == null || cMainRef.isEmpty())
      cMainRef = XMLManager.getChildNodeValue(headerNd, "main-ref", false); 
    System.out.println("[DEBUG] FINAL MAIN_REF==== " + cMainRef);
    System.out.println("[DEBUG] main-ref==== " + cMainRef);
    String emailAdd = XMLManager.getNodeValue((Document)requestXml, "//COUNTER_EMAIL", false);
    if (emailAdd == null || emailAdd.isEmpty())
      emailAdd = XMLManager.getNodeValue((Document)requestXml, "//EMAIL_ADD", false); 
    System.out.println("[DEBUG] FINAL EMAIL==== " + emailAdd);
    String trxStatus = XMLManager.getChildNodeValue(headerNd, "trx-status", false);
    NodeList nodeList = requestXml.getElementsByTagName("REJECT_REASON");
    String rejectReason = "";
    if (nodeList != null && nodeList.getLength() > 0) {
      Node node = nodeList.item(0);
      rejectReason = node.getTextContent();
      System.out.println("REJECT_REASON = " + rejectReason);
    } else {
      System.out.println("REJECT_REASON not found");
    } 
    System.out.println("[DEBUG] FINAL REJECT_REASON==== " + rejectReason);
    System.out.println("[DEBUG] trx-status==== " + trxStatus);
    System.out.println("[DEBUG] REJ_REASON==== " + rejectReason);
    CounterParty counterParty = new CounterParty();
    String acceptReject = XMLManager.getNodeValue((Document)requestXml, "/message/originalData/ACCEPT_REJECT", false);
    if (acceptReject == null || acceptReject.isEmpty())
      acceptReject = XMLManager.getNodeValue((Document)requestXml, "/root/originalData/ACCEPT_REJECT", false); 
    System.out.println("[DEBUG] ACCEPT_REJECT==== " + acceptReject);
    if ("RJ".equalsIgnoreCase(trxStatus) || (rejectReason != null && !rejectReason.isEmpty())) {
      CounterpartyInviteMailServlet sdfd = new CounterpartyInviteMailServlet();
      System.out.println("[FLOW] REJECT FLOW TRIGGERED");
      sdfd.fetchStatCECPDetails(cMainRef);
      counterParty.sendInvitationWithReject(cMainRef, emailAdd, "Y", rejectReason);
    } else {
      System.out.println("[FLOW] NORMAL FLOW");
      counterParty.processCounterPaty(cMainRef, emailAdd);
    } 
    return null;
  }
  
  public static void main(String[] args) throws SAXException, IOException {
    String xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<message GAPI_NAME=\"STAT_CP_EEToCE\" I_ORDER=\"0\" isReleaseGapi=\"Y\">\r\n    <msg-selector>\r\n        <send/>\r\n        <recv/>\r\n    </msg-selector>\r\n    <send-item/>\r\n    <msg-state>\r\n        <send-state>ok</send-state>\r\n        <recv-state/>\r\n        <recv-err-info/>\r\n    </msg-state>\r\n    <header>\r\n        <gapi-resend>N</gapi-resend>\r\n        <trx-type>RE</trx-type>\r\n        <event-name>Static Data Maintain</event-name>\r\n        <function-id>B7GuSDi0s7ST</function-id>\r\n        <trx-date>2026-04-06</trx-date>\r\n        <trx-user>CSBANKOP</trx-user>\r\n        <module>STAT</module>\r\n        <bank-grp>CSBANK</bank-grp>\r\n        <country>US</country>\r\n        <main-ref>C013539</main-ref>\r\n        <trx-ref>C013539</trx-ref>\r\n        <event-times>1</event-times>\r\n        <C_DS_ID>EXIMT</C_DS_ID>\r\n        <function-name>CPOnboard</function-name>\r\n        <C_FUNC_DESC>CP Onboarding</C_FUNC_DESC>\r\n        <funcType>PM</funcType>\r\n        <i-order/>\r\n        <unit-code>CSBANK</unit-code>\r\n        <parent-unit-code>CSBANK</parent-unit-code>\r\n        <function-short-name>CPOnboard</function-short-name>\r\n        <has-self-released><![CDATA[FALSE]]></has-self-released>\r\n        <i_order>1</i_order>\r\n        <refuse-reason><![CDATA[]]></refuse-reason>\r\n        <trx-status><![CDATA[AP]]></trx-status>\r\n        <op-user><![CDATA[CSBANKOP]]></op-user>\r\n        <C_DS_ID>EXIMT</C_DS_ID>\r\n    </header>\r\n    <msg-header>\r\n        <msg-seq-no/>\r\n        <interface-mapping-name>CP_EEToCE</interface-mapping-name>\r\n        <gapi-type>EJB</gapi-type>\r\n        <jndi-flag>N</jndi-flag>\r\n        <gapi-type-value>CounterPartyInit</gapi-type-value>\r\n        <ec-flag>F</ec-flag>\r\n        <msg-os-id>CSSCF</msg-os-id>\r\n        <msg-os-intf-id>SCF76_SignAgreementEE2CE</msg-os-intf-id>\r\n        <send-queue-id/>\r\n        <recv-queue-id/>\r\n        <time-out>0</time-out>\r\n        <time-out-ack-delay>0</time-out-ack-delay>\r\n        <msg-format/>\r\n        <reformat-class/>\r\n        <time-out-ack>\r\n            <send-queue-id/>\r\n            <recv-queue-id/>\r\n            <recv-time-out>0</recv-time-out>\r\n        </time-out-ack>\r\n        <gapi-mode afterTrx=\"false\" conditional=\"false\" gapiMode=\"\" mode=\"SYNC\"/>\r\n        <atth-queue-id/>\r\n        <send-refuse-msg>N</send-refuse-msg>\r\n        <msg-id>00439d21929f4232af488fca1576a435</msg-id>\r\n    </msg-header>\r\n    <out-msg-content>\r\n        <C_MAIN_REF field-name=\"C_MAIN_REF\" order=\"1\">C013539</C_MAIN_REF>\r\n        <FA_CUST_REG_NO field-name=\"FA_CUST_REG_NO\" order=\"2\">REG345002</FA_CUST_REG_NO>\r\n        <FA_ANCHOR_NM field-name=\"PARTY_NM\" order=\"2\">DEEPAK</FA_ANCHOR_NM>\r\n        <FA_ANCHOR_ID field-name=\"C_MAIN_REF\" order=\"3\">C013539</FA_ANCHOR_ID>\r\n        <FA_COUNTER_NM field-name=\"C_MAIN_REF\" order=\"15\">C013539</FA_COUNTER_NM>\r\n        <FA_COUNTER_ID field-name=\"PARTY_NM\" order=\"16\">DEEPAK</FA_COUNTER_ID>\r\n        <COUNTER_TYPE order=\"17\">T1</COUNTER_TYPE>\r\n        <COUNTER_EMAIL field-name=\"EMAIL_ADD\" order=\"18\">venumech049@gmail.com</COUNTER_EMAIL>\r\n        <CUST_TYPE order=\"4\">T1</CUST_TYPE>\r\n        <FA_ANCHOR_ROLE order=\"5\">BUYER</FA_ANCHOR_ROLE>\r\n        <FA_BUSI_TYPE order=\"6\">PF</FA_BUSI_TYPE>\r\n        <MSG_TYPE order=\"7\">SCF.001.AGR</MSG_TYPE>\r\n        <FA_PMT_TERMS order=\"9\">CHECK</FA_PMT_TERMS>\r\n        <FA_ANCHOR_CCY order=\"10\">INR</FA_ANCHOR_CCY>\r\n        <INV_FIN_MODE order=\"11\">INV</INV_FIN_MODE>\r\n        <PARENT_MAIN_REF field-name=\"C_MAIN_REF\" order=\"12\">C013539</PARENT_MAIN_REF>\r\n        <FA_ANCHOR_ADD_ML field-name=\"EMAIL_ADD\" order=\"13\">venumech049@gmail.com</FA_ANCHOR_ADD_ML>\r\n        <REJECT_REASON field-name=\"REJ_REASON\" order=\"14\">Invalid Tel No</REJECT_REASON>\r\n        <SYS_CBC_LIMIT_CONT/>\r\n    </out-msg-content>\r\n    <in-msg-content/>\r\n</message>";
    Document doc = XMLManager.xmlStrToDom(xml);
    NodeList nodeList = doc.getElementsByTagName("REJECT_REASON");
    if (nodeList != null && nodeList.getLength() > 0) {
      Node node = nodeList.item(0);
      String rejectReason = node.getTextContent();
      System.out.println("REJECT_REASON = " + rejectReason);
    } else {
      System.out.println("REJECT_REASON not found");
    } 
  }
  
  public DocumentImpl trxData(DocumentImpl arg0) throws Exception {
    System.out.println("ENTERED INTO THIS trxData DATA " + XMLManager.convertToString((Document)arg0));
    return null;
  }
  
  public DocumentImpl authData(DocumentImpl arg0) throws Exception {
    return null;
  }
}
