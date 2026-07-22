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
        <xsl:element name="MSG15">
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
                <xsl:value-of select="/root/domData/FA_DSP_DT"/>
            </xsl:element>
            <xsl:element name="DisputeNr">
                <xsl:value-of select="/root/domData/FA_DSP_NO"/>
            </xsl:element>
            <xsl:element name="DateOriginDispute">
                <xsl:value-of select="/root/domData/FA_DSP_DT"/>
            </xsl:element>
            <xsl:element name="DisputeCurrency">
                <xsl:value-of select="/root/domData/FA_DOC_CCY"/>
            </xsl:element>
            <xsl:element name="DisputeStatus">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_DSP_STATUS)"/>
            </xsl:element>
            <xsl:element name="DateSettlementDispute">
                <xsl:value-of select="/root/domData/FA_DSP_SETTLE_DT"/>
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
            <xsl:apply-templates mode="m0" select="/root/domData/DisputeSettl"/>
            <xsl:element name="DisputeReasonText">
                <xsl:value-of select="/root/domData/FA_DSP_RSN_TXT"/>
            </xsl:element>
            <xsl:element name="ActionText">
                <xsl:value-of select="/root/domData/FA_ACTION_TXT"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/DisputeSettl" mode="m0">
        <DisputeDetails>
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
            <xsl:element name="DisputeAmt">
                <xsl:value-of select="FA_DSP_AMT"/>
            </xsl:element>
            <xsl:element name="DisputeReason">
                <xsl:value-of select="ee:getInterpreter(FA_DSP_RSN_CODE)"/>
            </xsl:element>
            <xsl:element name="InstructionStatus">
                <xsl:value-of select="ee:getInterpreter(FA_DSP_INSTR)"/>
            </xsl:element>
            <xsl:element name="NotifyingParty">
                <xsl:value-of select="FA_NOTIFY_BY_NM"/>
            </xsl:element>
            <xsl:element name="Action">
                <xsl:value-of select="ee:getInterpreter(FA_ACTION_CODE)"/>
            </xsl:element>
        </DisputeDetails>
    </xsl:template>
</xsl:stylesheet>
