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
            				<xsl:element name="FSBC_REF">
				<xsl:value-of select="/root/FinInvc/InvcHdr/FSBC_REF"/>
			</xsl:element>
			<xsl:element name="FA_BUYER_ID">
				<xsl:value-of select="/root/FinInvc/InvcHdr/FA_BUYER_ID"/>
			</xsl:element>
			<xsl:element name="FA_BUYER_NM">
				<xsl:value-of select="/root/FinInvc/TradAgrmt/Buyr/PtyId/Nm"/>
			</xsl:element>
			<xsl:element name="FA_SEL_ID">
				<xsl:value-of select="/root/FinInvc/InvcHdr/FA_SEL_ID"/>
			</xsl:element>
			<xsl:element name="FA_SEL_NM">
				<xsl:value-of select="/root/FinInvc/TradAgrmt/Sellr/PtyId/Nm"/>
			</xsl:element>
			<xsl:element name="FA_DOC_NO">
				<xsl:value-of select="/root/FinInvc/InvcHdr/Id"/>
			</xsl:element>
			<xsl:element name="FA_DOC_CCY">
				<xsl:value-of select="/root/FinInvc/TradSttlm/InvcCcyCd"/>
			</xsl:element>
			<xsl:element name="FA_DOC_AMT">
				<xsl:value-of select="/root/FinInvc/TradSttlm/DuePyblAmt"/>
			</xsl:element>
			<xsl:element name="FA_DOC_DT">
				<xsl:value-of select="/root/FinInvc/InvcHdr/IsseDtTm"/>
			</xsl:element>
			<xsl:element name="FA_DOC_VAL_DT">
				<xsl:value-of select="/root/FinInvc/InvcHdr/IsseDtTm"/>
			</xsl:element>
			<xsl:element name="FA_DOC_DUE_DT">
				<xsl:value-of select="/root/FinInvc/TradSttlm/PmtTerms/DueDt"/>
			</xsl:element>
			<xsl:element name="C_UNIT_CODE">
				<xsl:value-of select="/root/FinInvc/InvcHdr/C_UNIT_CODE"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
