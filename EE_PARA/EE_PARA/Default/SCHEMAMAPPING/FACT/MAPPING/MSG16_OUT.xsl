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
        <xsl:element name="MSG16">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="ReceiverCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="CreatedBy">
                    <xsl:value-of select="/root/domData/CLERK_ID"/>
                </xsl:element>
                <xsl:element name="SequenceNr"/>
                <xsl:element name="DateTime"/>
                <xsl:element name="Status"/>
                <xsl:element name="Error"/>
            </xsl:element>
            <xsl:element name="EF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/FA_EF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="IF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/FA_IF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgDate">
                <xsl:value-of select="/root/domData/FA_CBK_DT"/>
            </xsl:element>
            <xsl:element name="MsgType">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_MSG16_TYPE)"/>
            </xsl:element>
            <xsl:element name="MsgNr">
                <xsl:value-of select="/root/domData/FA_CBK_REF"/>
            </xsl:element>
            <xsl:element name="DocCurrency">
                <xsl:value-of select="/root/domData/FA_DOC_CCY"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:apply-templates mode="m0" select="/root/domData/ChgBack"/>
            <xsl:element name="ControlTot">
                <xsl:element name="TotAmt">
                    <xsl:value-of select="/root/domData/FA_TTL_CBK_AMT"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/ChgBack" mode="m0">
        <ChargeBackReassDetails>
            <xsl:element name="BuyerNr">
                <xsl:value-of select="/root/domData/FA_BUYER_EDI_ID"/>
            </xsl:element>
            <xsl:element name="BuyerName">
                <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
            </xsl:element>
            <xsl:element name="DocType">
                <xsl:value-of select="ee:getInterpreter(FA_DOC_TYPE)"/>
            </xsl:element>
            <xsl:element name="DocNr">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="DocDate">
                <xsl:value-of select="FA_DOC_DT"/>
            </xsl:element>
            <xsl:element name="DocAmt">
                <xsl:value-of select="FA_DOC_AMT"/>
            </xsl:element>
            <xsl:element name="ChargeBackReassAmt">
                <xsl:value-of select="FA_CBK_AMT"/>
            </xsl:element>
            <xsl:element name="ChargeBackReassReason">
                <xsl:value-of select="ee:getInterpreter(FA_DSP_RSN_CODE)"/>
            </xsl:element>
        </ChargeBackReassDetails>
    </xsl:template>
</xsl:stylesheet>
