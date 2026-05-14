package com.cs.scf.util;

import com.cs.base.xml.XMLManager;
import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class ParseGapiUtil {
  private String iEventTimes;
  
  private String gStrBkGrpID;
  
  private String gCntyCD;
  
  private String gUnitCode;
  
  private String gOrignalGapiDoc;
  
  private String gMainRef;
  
  private String gTrxRef;
  
  private String gGapiMapName;
  
  private String gStrFuncName;
  
  private String gTrxType;
  
  private String gModule;
  
  private String gStrDS;
  
  private Node gTxnNode;
  
  private Node gHeaderNode;
  
  private StringBuffer sqlWhrClause;
  
  public ParseGapiUtil(DocumentImpl gapiDoc) throws Exception {
    parseGapiDom(gapiDoc);
  }
  
  public ParseGapiUtil(String sBKGrp, String sCNTCd, String sUNCd) throws Exception {
    setgStrBkGrpID(sBKGrp);
    setgCntyCD(sCNTCd);
    setgUnitCode(sUNCd);
  }
  
  public void parseGapiDom(DocumentImpl parseGapiDoc) throws Exception {
    Element gapiRoot = parseGapiDoc.getDocumentElement();
    Node ndHeader = XMLManager.findChildNode(gapiRoot, "header");
    setgStrBkGrpID(XMLManager.getChildNodeValue(ndHeader, "bank-grp", true));
    setgCntyCD(XMLManager.getChildNodeValue(ndHeader, "country", true));
    setgUnitCode(XMLManager.getChildNodeValue(ndHeader, "unit-code", true));
    setgModule(XMLManager.getChildNodeValue(ndHeader, "module", true));
    setiEventTimes(XMLManager.getChildNodeValue(ndHeader, "event-times", true));
    setgStrFuncName(XMLManager.getChildNodeValue(ndHeader, "function-name", true));
    setgStrDS(XMLManager.getChildNodeValue(ndHeader, "C_DS_ID", true));
    setgTrxType(XMLManager.getChildNodeValue(ndHeader, "trx-type", true));
    setgMainRef(XMLManager.getChildNodeValue(ndHeader, "main-ref", true));
    setgTrxRef(XMLManager.getChildNodeValue(ndHeader, "trx-ref", true));
    Node ndMsgHeader = XMLManager.findChildNode(gapiRoot, "msg-header");
    setgGapiMapName(XMLManager.getChildNodeValue(ndMsgHeader, "interface-mapping-name", true));
    setgTxnNode(XMLManager.findChildNode(gapiRoot, "out-msg-content"));
    setgHeaderNode(ndHeader);
    this.sqlWhrClause = new StringBuffer(" AND C_BK_GROUP_ID = ? ");
  }
  
  public String getiEventTimes() {
    return this.iEventTimes;
  }
  
  public void setiEventTimes(String iEventTimes) {
    this.iEventTimes = iEventTimes;
  }
  
  public String getgStrBkGrpID() {
    return this.gStrBkGrpID;
  }
  
  public void setgStrBkGrpID(String gStrBkGrpID) {
    this.gStrBkGrpID = gStrBkGrpID;
  }
  
  public String getgCntyCD() {
    return this.gCntyCD;
  }
  
  public void setgCntyCD(String gCntyCD) {
    this.gCntyCD = gCntyCD;
  }
  
  public String getgUnitCode() {
    return this.gUnitCode;
  }
  
  public void setgUnitCode(String gUnitCode) {
    this.gUnitCode = gUnitCode;
  }
  
  public String getgOrignalGapiDoc() {
    return this.gOrignalGapiDoc;
  }
  
  public void setgOrignalGapiDoc(String gOrignalGapiDoc) {
    this.gOrignalGapiDoc = gOrignalGapiDoc;
  }
  
  public String getgMainRef() {
    return this.gMainRef;
  }
  
  public void setgMainRef(String gMainRef) {
    this.gMainRef = gMainRef;
  }
  
  public String getgTrxRef() {
    return this.gTrxRef;
  }
  
  public void setgTrxRef(String gTrxRef) {
    this.gTrxRef = gTrxRef;
  }
  
  public String getgGapiMapName() {
    return this.gGapiMapName;
  }
  
  public void setgGapiMapName(String gGapiMapName) {
    this.gGapiMapName = gGapiMapName;
  }
  
  public String getgStrFuncName() {
    return this.gStrFuncName;
  }
  
  public void setgStrFuncName(String gStrFuncName) {
    this.gStrFuncName = gStrFuncName;
  }
  
  public String getgTrxType() {
    return this.gTrxType;
  }
  
  public void setgTrxType(String gTrxType) {
    this.gTrxType = gTrxType;
  }
  
  public String getgModule() {
    return this.gModule;
  }
  
  public void setgModule(String gModule) {
    this.gModule = gModule;
  }
  
  public String getgStrDS() {
    return this.gStrDS;
  }
  
  public void setgStrDS(String gStrDS) {
    this.gStrDS = gStrDS;
  }
  
  public Node getgTxnNode() {
    return this.gTxnNode;
  }
  
  public void setgTxnNode(Node gTxnNode) {
    this.gTxnNode = gTxnNode;
  }
  
  public Node getgHeaderNode() {
    return this.gHeaderNode;
  }
  
  public void setgHeaderNode(Node gHeaderNode) {
    this.gHeaderNode = gHeaderNode;
  }
  
  public StringBuffer getSqlWhrClause() {
    return this.sqlWhrClause;
  }
  
  public void setSqlWhrClause(StringBuffer sqlWhrClause) {
    this.sqlWhrClause = sqlWhrClause;
  }
}
