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
        <xsl:element name="Document">
            <xsl:element name="FA_SEL_ID">
                <xsl:value-of select="/root/domData/FA_SEL_ID"/>
            </xsl:element>
            <xsl:element name="FA_SEL_NM">
                <xsl:value-of select="/root/domData/FA_SEL_NM"/>
            </xsl:element>
            <xsl:element name="FA_BUYER_ID">
                <xsl:value-of select="/root/domData/FA_BUYER_ID"/>
            </xsl:element>
            <xsl:element name="FA_BUYER_NM">
                <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
            </xsl:element>
            <xsl:element name="FA_BUSI_TYPE">
                <xsl:value-of select="/root/domData/FA_BUSI_TYPE"/>
            </xsl:element>
            <xsl:element name="FA_DOC_CCY">
                <xsl:value-of select="/root/domData/FA_DOC_CCY"/>
            </xsl:element>
            <xsl:element name="FA_TTL_CRN_AMT">
                <xsl:value-of select="/root/domData/FA_TTL_CRN_AMT"/>
            </xsl:element>
            <xsl:element name="FA_TTL_CRN_NO">
                <xsl:value-of select="/root/domData/FA_TTL_CRN_NO"/>
            </xsl:element>
            <xsl:element name="FA_CE_MAIN_REF">
                <xsl:value-of select="/root/domData/C_MAIN_REF"/>
            </xsl:element>
            <xsl:element name="EE_C_MAIN_REF">
                <xsl:value-of select="/root/domData/EE_C_MAIN_REF"/>
            </xsl:element>
            <xsl:element name="MSG_TYPE">
                <xsl:value-of select="/root/domData/MSG_TYPE"/>
            </xsl:element>
            <xsl:apply-templates mode="m0" select="/root/domData/XDO_CN"/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/XDO_CN" mode="m0">
        <CreNote>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:element name="FA_INV_LINK_REF">
                <xsl:value-of select="FA_INV_LINK_REF"/>
            </xsl:element>
            <xsl:element name="FA_CRN_INV_LINK_NO">
                <xsl:value-of select="FA_CRN_INV_LINK_NO"/>
            </xsl:element>
            <xsl:element name="FA_PMT_COND">
                <xsl:value-of select="FA_PMT_COND"/>
            </xsl:element>
            <xsl:element name="FA_DOC_TYPE">2</xsl:element>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DT">
                <xsl:value-of select="FA_DOC_DT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_VAL_DT">
                <xsl:value-of select="FA_DOC_VAL_DT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DUE_DT">
                <xsl:value-of select="FA_DOC_DUE_DT"/>
            </xsl:element>
            <xsl:element name="FA_TRF_DT">
                <xsl:value-of select="FA_TRF_DT"/>
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
        </CreNote>
    </xsl:template>
</xsl:stylesheet>
