<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet AutoGen-Parameter-Version="1.0" exclude-result-prefixes="xalan"
    extension-element-prefixes="base ee cs" version="1.0" xmlns:Doc="domData"
    xmlns:base="base" xmlns:cs="cs" xmlns:ee="ee"
    xmlns:xalan="http://xml.apache.org/xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xalan:component elements="base" prefix="base">
        <xalan:script lang="javaclass" src="com.cs.xsl.extension.XSLExtensions"/>
    </xalan:component>
    <xalan:component elements="ee" prefix="ee">
        <xalan:script lang="javaclass" src="com.cs.xsl.extension.XslEEExtension"/>
    </xalan:component>
    <xalan:component elements="cs" prefix="cs">
        <xalan:script lang="javaclass" src="com.cs.swift.XslExtension"/>
    </xalan:component>
    <xsl:template match="/">
        <xsl:element name="MSG09">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode"/>
                <xsl:element name="ReceiverCode"/>
                <xsl:element name="CreatedBy"/>
                <xsl:element name="SequenceNr"/>
                <xsl:element name="DateTime"/>
                <xsl:element name="Status"/>
                <xsl:element name="Error"/>
            </xsl:element>
            <xsl:element name="EF">
                <xsl:element name="FactorCode"/>
                <xsl:element name="FactorName"/>
            </xsl:element>
            <xsl:element name="IF">
                <xsl:element name="FactorCode"/>
                <xsl:element name="FactorName"/>
            </xsl:element>
            <xsl:element name="InvBatchNr"/>
            <xsl:element name="InvBatchDate"/>
            <xsl:element name="InvBatchCurrency"/>
            <xsl:element name="TotAmtInvoices"/>
            <xsl:element name="TotAmtCreditNotes"/>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr"/>
                <xsl:element name="SellerName"/>
            </xsl:element>
            <xsl:element name="InvCreditNoteDetails">
                <xsl:element name="BuyerNr"/>
                <xsl:element name="BuyerName"/>
                <xsl:element name="DocType"/>
                <xsl:element name="DocNr"/>
                <xsl:element name="DocDate"/>
                <xsl:element name="DocAmt"/>
                <xsl:element name="DocDueDate"/>
                <xsl:element name="DocValueDate"/>
                <xsl:element name="NetPmtTerms"/>
                <xsl:element name="Discount1Days"/>
                <xsl:element name="Discount1Perc"/>
                <xsl:element name="Discount2Days"/>
                <xsl:element name="Discount2Perc"/>
                <xsl:element name="PmtCondition"/>
                <xsl:element name="OrderNrRef"/>
                <xsl:element name="InvRefNr"/>
            </xsl:element>
            <xsl:element name="ControlTot">
                <xsl:element name="TotNrInvoices"/>
                <xsl:element name="TotNrCreditNotes"/>
            </xsl:element>
            <xsl:element name="MsgText"/>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
