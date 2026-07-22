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
                <xsl:element name="C_MAIN_REF">
                    <xsl:value-of select="/Document/FullPushThrghRpt/UsrTxRef/Id"/>
                </xsl:element>
                <xsl:element name="C_XML_DATA_010"/>
                <xsl:element name="C_XML_DATA_018"/>
                <xsl:element name="TSU_BK_MAIN_REF">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/SubmitrBaselnId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_BUYER_NM">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/Buyr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_CCY">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/Goods/LineItmDtls/UnitPric/Amt/@Ccy"/>
                </xsl:element>
                <xsl:element name="TSU_GOODS_DESC">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/Goods/GoodsDesc"/>
                </xsl:element>
                <xsl:element name="TSU_LINE_TTL_AMT">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/Goods/LineItmsTtlAmt"/>
                </xsl:element>
                <xsl:element name="TSU_PO_DT">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/PurchsOrdrRef/DtOfIsse"/>
                </xsl:element>
                <xsl:element name="TSU_PO_ID">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/PurchsOrdrRef/Id"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_NM">
                    <xsl:value-of select="/Document/FullPushThrghRpt/PushdThrghBaseln/Sellr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_TRX_STATUS"/>
                <xsl:element name="TSU_UNIT_CODE"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
