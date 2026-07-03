package com.cs.eximap.busiintf;

import java.io.IOException;

import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.cs.base.xml.XMLManager;
import com.cs.eximap.utility.APLog;
import com.fs.servlet.CounterParty;
import com.fs.servlet.CounterpartyInviteMailServlet;

public class CounterPartyInit implements GAPIBusiIntf {
  public DocumentImpl ecData(DocumentImpl arg0) throws Exception {
    System.out.println("ENTERED INTO THIS ecData DATA " + XMLManager.convertToString((Document)arg0));
    return null;
  }
  
  public DocumentImpl inqData(DocumentImpl arg0) throws Exception {
    System.out.println("ENTERED INTO THIS inqData1 DATA " + XMLManager.convertToString((Document)arg0));
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
    String refuseReason = XMLManager.getChildNodeValue(headerNd, "refuse-reason", false);
    String rejectReason = extractRejectReason(requestXml, headerNd, msgNode, refuseReason);
    CounterParty counterParty = new CounterParty();
    String acceptReject = XMLManager.getNodeValue((Document)requestXml, "/message/originalData/ACCEPT_REJECT", false);
    if (acceptReject == null || acceptReject.isEmpty())
      acceptReject = XMLManager.getNodeValue((Document)requestXml, "/root/originalData/ACCEPT_REJECT", false);
    APLog.reportLog("[CP Onboard] trx-status=" + trxStatus + " | ACCEPT_REJECT=" + acceptReject
        + " | refuse-reason=" + refuseReason + " | REJECT_REASON=" + rejectReason);
    if (isRejectFlow(trxStatus, acceptReject, rejectReason, refuseReason)) {
      CounterpartyInviteMailServlet sdfd = new CounterpartyInviteMailServlet();
      APLog.reportLog("[FLOW] REJECT FLOW TRIGGERED for C_MAIN_REF=" + cMainRef);
      sdfd.fetchStatCECPDetails(cMainRef);
      counterParty.sendInvitationWithReject(cMainRef, emailAdd, "Y", rejectReason);
    } else {
      APLog.reportLog("[FLOW] NORMAL FLOW for C_MAIN_REF=" + cMainRef);
      counterParty.processCounterPaty(cMainRef, emailAdd);
    }
    return constructResponseDom();
  }
  public static DocumentImpl constructResponseDom() throws Exception {

	    DocumentImpl resultDom = new DocumentImpl();

	    Element rtnRoot = resultDom.createElement("root");
	    resultDom.appendChild(rtnRoot);

	    org.w3c.dom.Element rtnInMsgNode =
	            resultDom.createElement("in-msg-content");

	    rtnRoot.appendChild(rtnInMsgNode);

	    return resultDom;
	}
  private String extractRejectReason(DocumentImpl requestXml, Node headerNd, Node msgNode, String refuseReason) {
    String reason = firstNonEmpty(
        getTagText(requestXml, "REJECT_REASON"),
        getTagText(requestXml, "REJ_REASON"),
        XMLManager.getChildNodeValue(msgNode, "REJECT_REASON", false),
        XMLManager.getChildNodeValue(msgNode, "REJ_REASON", false),
        XMLManager.getNodeValue((Document) requestXml, "//REJECT_REASON", false),
        XMLManager.getNodeValue((Document) requestXml, "//REJ_REASON", false),
        XMLManager.getNodeValue((Document) requestXml, "/message/originalData/REJECT_REASON", false),
        XMLManager.getNodeValue((Document) requestXml, "/message/originalData/REJ_REASON", false),
        XMLManager.getNodeValue((Document) requestXml, "/root/originalData/REJECT_REASON", false),
        XMLManager.getNodeValue((Document) requestXml, "/root/originalData/REJ_REASON", false),
        refuseReason);
    return reason != null ? reason.trim() : "";
  }

  private String getTagText(DocumentImpl requestXml, String tagName) {
    NodeList nodeList = requestXml.getElementsByTagName(tagName);
    if (nodeList != null && nodeList.getLength() > 0) {
      String text = nodeList.item(0).getTextContent();
      if (text != null) {
        return text.trim();
      }
    }
    return "";
  }

  private String firstNonEmpty(String... values) {
    for (String value : values) {
      if (value != null && !value.trim().isEmpty()) {
        return value.trim();
      }
    }
    return "";
  }

  private boolean isRejectFlow(String trxStatus, String acceptReject, String rejectReason, String refuseReason) {
    if ("RJ".equalsIgnoreCase(trxStatus)) {
      return true;
    }
    if (acceptReject != null) {
      String flag = acceptReject.trim();
      if ("RJ".equalsIgnoreCase(flag) || "REJECT".equalsIgnoreCase(flag)) {
        return true;
      }
    }
    if (rejectReason != null && !rejectReason.isEmpty()) {
      return true;
    }
    return refuseReason != null && !refuseReason.trim().isEmpty();
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

  @Override
  public DocumentImpl authData(DocumentImpl arg0) throws Exception {
	return null;
  }

  @Override
  public DocumentImpl trxData(DocumentImpl arg0) throws Exception {
	return null;
  }

}
