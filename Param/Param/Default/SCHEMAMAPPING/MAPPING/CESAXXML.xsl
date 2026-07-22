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
                <xsl:element name="BK_MAIN_REF">
                    <xsl:value-of select="/root/OCBC/BkMainRef"/>
                </xsl:element>
                <xsl:element name="LC_NO">
                    <xsl:value-of select="/root/OCBC/LcNo"/>
                </xsl:element>
                <xsl:element name="C_MAIN_REF">
                    <xsl:value-of select="/root/OCBC/MainRef"/>
                </xsl:element>
                <xsl:element name="APPL_ID">
                    <xsl:value-of select="/root/ApplID"/>
                </xsl:element>
                <xsl:element name="CURRNT_STATUS">
                    <xsl:value-of select="/root/CurrentStatus"/>
                </xsl:element>
                <xsl:element name="C_UNIT_CODE">
                    <xsl:value-of select="/root/UnitCode"/>
                </xsl:element>
                <xsl:element name="LC_CCY">
                    <xsl:value-of select="/root/OCBC/LcCcy"/>
                </xsl:element>
                <xsl:element name="LC_AMT">
                    <xsl:value-of select="/root/OCBC/LcAmt"/>
                </xsl:element>
                <xsl:element name="TRX_DT">
                    <xsl:value-of select="/root/OCBC/ApplctnDt"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
