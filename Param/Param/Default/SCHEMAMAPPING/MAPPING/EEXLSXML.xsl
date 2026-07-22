<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xalan"
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
        <xsl:element name="root" xmlns="xsd:tsmt.018.001.01">
			<xsl:element name="FSBC_REF">
				<xsl:value-of select="/root/FSBC_REF"/>
			</xsl:element>
			<xsl:element name="FA_BUYER_ID">
				<xsl:value-of select="/root/FA_BUYER_ID"/>
			</xsl:element>
			<xsl:element name="FA_BUYER_NM">
				<xsl:value-of select="/root/FA_BUYER_NM"/>
			</xsl:element>
			<xsl:element name="FA_SEL_ID">
				<xsl:value-of select="/root/FA_SEL_ID"/>
			</xsl:element>
			<xsl:element name="FA_SEL_NM">
				<xsl:value-of select="/root/FA_SEL_NM"/>
			</xsl:element>
			<xsl:element name="FA_DOC_NO">
				<xsl:value-of select="/root/FA_DOC_NO"/>
			</xsl:element>
			<xsl:element name="FA_DOC_CCY">
				<xsl:value-of select="/root/FA_DOC_CCY"/>
			</xsl:element>
			<xsl:element name="FA_DOC_AMT">
				<xsl:value-of select="/root/FA_DOC_AMT"/>
			</xsl:element>
			<xsl:element name="TRX_DT">
				<xsl:value-of select="/root/TRX_DT"/>
			</xsl:element>
			<xsl:element name="FA_DOC_DT">
				<xsl:value-of select="/root/FA_DOC_DT"/>
			</xsl:element>
			<xsl:element name="FA_DOC_VAL_DT">
				<xsl:value-of select="/root/FA_DOC_VAL_DT"/>
			</xsl:element>
			<xsl:element name="FA_DOC_DUE_DT">
				<xsl:value-of select="/root/FA_DOC_DUE_DT"/>
			</xsl:element>
			<xsl:element name="C_UNIT_CODE">
				<xsl:value-of select="/root/C_UNIT_CODE"/>
			</xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
