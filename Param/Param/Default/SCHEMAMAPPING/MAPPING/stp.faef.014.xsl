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
        <xsl:element name="root">
            <xsl:element name="domData">
                <xsl:element name="FA_BUYER_ID">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_BUYER_ID"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_BUYER_NM"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_SEL_NM"/>
                </xsl:element>
                <xsl:element name="TEMP_FLG16">
                    <xsl:value-of select="/message/out-msg-content/trx/TEMP_FLG16"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/out-msg-content/trx"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/out-msg-content/trx" mode="m0">
        <XDO_DUN>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="FA_DOC_CCY">
                <xsl:value-of select="FA_DOC_CCY"/>
            </xsl:element>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="FA_DOC_AMT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_BAL">
                <xsl:value-of select="FA_DOC_BAL"/>
            </xsl:element>
            <xsl:element name="FA_DOC_VAL_DT">
                <xsl:value-of select="FA_DOC_VAL_DT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DUE_DT">
                <xsl:value-of select="FA_DOC_DUE_DT"/>
            </xsl:element>
        </XDO_DUN>
    </xsl:template>
</xsl:stylesheet>
