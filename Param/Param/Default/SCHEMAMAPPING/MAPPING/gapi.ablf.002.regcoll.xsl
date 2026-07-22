<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:base="base" xmlns:cs="cs" xmlns:ee="ee" xmlns:xalan="http://xml.apache.org/xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xalan" extension-element-prefixes="base ee cs" version="1.0">
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
            <xsl:element name="FA_BUSI_TYPE">
                <xsl:value-of select="/root/domData/FA_BUSI_TYPE"/>
            </xsl:element>
            <xsl:element name="FA_CUST_ID">
                <xsl:value-of select="/root/domData/FA_CUST_ID"/>
            </xsl:element>
            <xsl:element name="FA_CE_MAIN_REF">
                <xsl:value-of select="/root/domData/C_MAIN_REF"/>
            </xsl:element>
            <xsl:element name="FA_CNTR_REF">
                <xsl:value-of select="/root/domData/FA_CNTR_REF"/>
            </xsl:element>
            <xsl:element name="REG_NO">
                <xsl:value-of select="/root/domData/REG_NO"/>
            </xsl:element>
            <xsl:element name="MSG_TYPE">
                <xsl:value-of select="/root/domData/MSG_TYPE"/>
            </xsl:element>
            <xsl:apply-templates mode="m0" select="/root/domData/XDO_COLL"/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/XDO_COLL" mode="m0">
        <CollateralAdjustment>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="COLLAT_ID">
                <xsl:value-of select="COLLAT_ID"/>
            </xsl:element>
            <xsl:element name="COLLAT_NM">
                <xsl:value-of select="COLLAT_NM"/>
            </xsl:element>
            <xsl:element name="COLLAT_TP">
                <xsl:value-of select="COLLAT_TP"/>
            </xsl:element>
            <xsl:element name="ARRIVAL_DATE">
                <xsl:value-of select="ARRIVAL_DATE"/>
            </xsl:element>
            <xsl:element name="COLLAT_PRICE">
                <xsl:value-of select="COLLAT_PRICE"/>
            </xsl:element>
            <xsl:element name="COLLAT_UNIT">
                <xsl:value-of select="COLLAT_UNIT"/>
            </xsl:element>
            <xsl:element name="COLLAT_QTY">
                <xsl:value-of select="COLLAT_QTY"/>
            </xsl:element>
            <xsl:element name="COLLAT_VAL">
                <xsl:value-of select="COLLAT_VAL"/>
            </xsl:element>
            <xsl:element name="COLLAT_RD_PRICE">
                <xsl:value-of select="COLLAT_RD_PRICE"/>
            </xsl:element>
            <xsl:element name="COLLAT_SPEC">
                <xsl:value-of select="COLLAT_SPEC"/>
            </xsl:element>
            <xsl:element name="COLLAT_FACT">
                <xsl:value-of select="COLLAT_FACT"/>
            </xsl:element>
            <xsl:element name="QTY">
                <xsl:value-of select="QTY"/>
            </xsl:element>
            <xsl:element name="QTY_UNIT">
                <xsl:value-of select="QTY_UNIT"/>
            </xsl:element>
            <xsl:element name="WEIGHT">
                <xsl:value-of select="WEIGHT"/>
            </xsl:element>
            <xsl:element name="WEIGHT_UNIT">
                <xsl:value-of select="WEIGHT_UNIT"/>
            </xsl:element>
            <xsl:element name="REQ_OUT_DATE">
                <xsl:value-of select="REQ_OUT_DATE"/>
            </xsl:element>
            <xsl:element name="COLLAT_OUT_QTY">
                <xsl:value-of select="COLLAT_OUT_QTY"/>
            </xsl:element>
            <xsl:element name="OUT_QTY">
                <xsl:value-of select="OUT_QTY"/>
            </xsl:element>
            <xsl:element name="OUT_WEIGHT">
                <xsl:value-of select="OUT_WEIGHT"/>
            </xsl:element>
        </CollateralAdjustment>
    </xsl:template>
</xsl:stylesheet>
