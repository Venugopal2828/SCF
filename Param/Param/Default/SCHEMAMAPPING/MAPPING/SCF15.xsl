<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xalan" extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base"
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
        <xsl:element name="message">
            <xsl:element name="out-msg-content">
			<xsl:element name="ERROR_MSG">
				<xsl:value-of select="/SCF15/MsgInfo/Error"/>
			</xsl:element>
			<xsl:element name="FA_DSP_NO">
				<xsl:value-of select="/SCF15/DisputeNr"/>
			</xsl:element>
			<xsl:element name="FA_DSP_DT">
				<xsl:value-of select="/SCF15/DateOriginDispute"/>
			</xsl:element>
			<xsl:element name="FA_DOC_CCY">
				<xsl:value-of select="/SCF15/DisputeCurrency"/>
			</xsl:element>
			<xsl:element name="FA_DSP_STATUS">
				<xsl:value-of select="/SCF15/DisputeStatus"/>
			</xsl:element>
			<xsl:element name="FA_DSP_SETTLE_DT">
				<xsl:value-of select="/SCF15/DateSettlementDispute"/>
			</xsl:element>
			<xsl:element name="FA_DOC_NO">
				<xsl:value-of select="/SCF15/DisputeDetails/DocNr"/>
			</xsl:element>
			<xsl:element name="FA_DOC_DT">
				<xsl:value-of select="/SCF15/DisputeDetails/DocDate"/>
			</xsl:element>
			<xsl:element name="FA_DOC_AMT">
				<xsl:value-of select="/SCF15/DisputeDetails/DocAmt"/>
			</xsl:element>
			<xsl:element name="FA_DSP_AMT">
				<xsl:value-of select="/SCF15/DisputeDetails/DisputeAmt"/>
			</xsl:element>
			<xsl:element name="FA_DSP_RSN_CODE">
				<xsl:value-of select="/SCF15/DisputeDetails/DisputeReason"/>
			</xsl:element>
			<xsl:element name="FA_DSP_INSTR">
				<xsl:value-of select="/SCF15/DisputeDetails/InstructionStatus"/>
			</xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
