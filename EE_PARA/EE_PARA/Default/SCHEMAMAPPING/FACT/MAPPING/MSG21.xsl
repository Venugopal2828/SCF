<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet AutoGen-Parameter-Version="1.0" exclude-result-prefixes="xalan"
    extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base"
    xmlns:cs="cs" xmlns:ee="ee" xmlns:xalan="http://xml.apache.org/xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
        <xsl:element name="MSG21">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="ReceiverCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="CreatedBy">
                    <xsl:value-of select="/root/domData/CLERK_ID"/>
                </xsl:element>
                <xsl:element name="SequenceNr"/>
                <xsl:element name="DateTime"/>
                <xsl:element name="Status"/>
                <xsl:element name="Error"/>
            </xsl:element>
            <xsl:element name="MsgDate">
                <xsl:value-of select="/root/domData/TRX_DT"/>
            </xsl:element>
            <xsl:element name="Sender">
                <xsl:element name="MemberNr">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="MemberName">
                    <xsl:value-of select="/root/domData/FA_EF_NM"/>
                </xsl:element>
                <xsl:element name="ContactName">
                    <xsl:value-of select="/root/domData/FA_SENDER_CONT_NM"/>
                </xsl:element>
                <xsl:element name="Telephone">
                    <xsl:value-of select="/root/domData/FA_SENDER_CONT_TEL"/>
                </xsl:element>
                <xsl:element name="Email">
                    <xsl:value-of select="/root/domData/FA_SENDER_EMAIL"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="Recipient">
                <xsl:element name="MemberNr">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="MemberName">
                    <xsl:value-of select="/root/domData/FA_IF_NM"/>
                </xsl:element>
                <xsl:element name="ContactName">
                    <xsl:value-of select="/root/domData/FA_RECP_CONT_NM"/>
                </xsl:element>
                <xsl:element name="Telephone">
                    <xsl:value-of select="/root/domData/FA_RECP_CONT_TEL"/>
                </xsl:element>
                <xsl:element name="Email">
                    <xsl:value-of select="/root/domData/FA_RECP_EMAIL"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="Buyer">
                <xsl:element name="BuyerNr">
                    <xsl:value-of select="/root/domData/FA_BUYER_EDI_ID"/>
                </xsl:element>
                <xsl:element name="BuyerName">
                    <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
