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
            <xsl:element name="UserId">
				<xsl:value-of select="/SCF21/MsgInfo/CreatedBy"/>
			</xsl:element>
			<xsl:element name="ServiceId">
				<xsl:value-of select="/SCF21/MsgInfo/MsgType"/>
			</xsl:element>
			<xsl:element name="Time">
				<xsl:value-of select="/SCF21/MsgInfo/DateTime"/>
			</xsl:element>
			<xsl:element name="ERROR_MSG">
				<xsl:value-of select="/SCF21/MsgInfo/Error"/>
			</xsl:element>
			<xsl:element name="TrxBu">
				<xsl:value-of select="/SCF21/InputData/TrxBu"/>
			</xsl:element>
			<xsl:element name="FuncId">
				<xsl:value-of select="/SCF21/InputData/FuncId"/>
			</xsl:element>
			<xsl:element name="Success">
				<xsl:value-of select="/SCF21/InputData/Success"/>
			</xsl:element>
			<xsl:element name="RET_CODE">
				<xsl:value-of select="/SCF21/RET_CODE"/>
			</xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
