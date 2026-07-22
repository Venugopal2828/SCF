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
            <xsl:element name="FA_BUYER_ID">
                <xsl:value-of select="/root/domData/FA_BUYER_ID"/>
            </xsl:element>
            <xsl:element name="FA_BUYER_NM">
                <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
            </xsl:element>
            <xsl:element name="FA_SEL_ID">
                <xsl:value-of select="/root/domData/FA_SEL_ID"/>
            </xsl:element>
            <xsl:element name="FA_SEL_NM">
                <xsl:value-of select="/root/domData/FA_SEL_NM"/>
            </xsl:element>
            <xsl:element name="FA_PMT_CCY">
                <xsl:value-of select="/root/domData/PMIN_CCY"/>
            </xsl:element>
            <xsl:element name="FA_PMT_AMT_SUM">
                <xsl:value-of select="/root/domData/PMIN_SETT_AMT"/>
            </xsl:element>
            <xsl:element name="FA_PMT_DT">
                <xsl:value-of select="/root/domData/PMIN_DATE"/>
            </xsl:element>
            <xsl:element name="TSU_CUST_ID">
                <xsl:value-of select="/root/domData/C_UNIT_CODE"/>
            </xsl:element>
            <xsl:element name="MSG_TYPE">
                <xsl:value-of select="/root/domData/MSG_TYPE"/>
            </xsl:element>
            <xsl:element name="PMIN_ORD_ACNO">
                <xsl:value-of select="/root/domData/PMIN_ORD_ACNO"/>
            </xsl:element>
            <xsl:element name="PMIN_ORD_ADD">
                <xsl:value-of select="/root/domData/PMIN_ORD_ADD"/>
            </xsl:element>
            <xsl:element name="PMIN_ORD_ACC_BIC">
                <xsl:value-of select="/root/domData/PMIN_ORD_ACC_BIC"/>
            </xsl:element>
            <xsl:element name="PMIN_BENE_BK_ACNO">
                <xsl:value-of select="/root/domData/PMIN_BENE_BK_ACNO"/>
            </xsl:element>
            <xsl:element name="PMIN_BENE_ADD">
                <xsl:value-of select="/root/domData/PMIN_BENE_ADD"/>
            </xsl:element>
            <xsl:element name="PMIN_REM_INFO">
                <xsl:value-of select="/root/domData/PMIN_REM_INFO"/>
            </xsl:element>
            <xsl:element name="BuyPayment">
                <xsl:element name="FA_DOC_REF">
                    <xsl:value-of select="/root/domData/XDO_PAYINV/FA_DOC_REF"/>
                </xsl:element>
                <xsl:element name="FA_DOC_NO">
                    <xsl:value-of select="/root/domData/XDO_PAYINV/FA_DOC_NO"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
