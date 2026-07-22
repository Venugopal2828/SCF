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
                <xsl:element name="AUTH_AMT">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Goods/TtlNetAmt"/>
                </xsl:element>
                <xsl:element name="AUTH_CCY">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Goods/TtlNetAmt/@Ccy"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Buyr/Nm"/>
                </xsl:element>
                <xsl:element name="FA_SBR_REF">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/SubmissnId/Id"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Sellr/Nm"/>
                </xsl:element>
                <xsl:element name="GOODS_DESC">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Goods/GoodsDesc"/>
                </xsl:element>
                <xsl:element name="PO_AMT">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Goods/TtlNetAmt"/>
                </xsl:element>
                <xsl:element name="PO_CCY">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/Goods/TtlNetAmt/@Ccy"/>
                </xsl:element>
                <xsl:element name="PO_DT">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/PurchsOrdrRef/DtOfIsse"/>
                </xsl:element>
                <xsl:element name="PO_NO">
                    <xsl:value-of select="/message/out-msg-content/Document/InitlBaselnSubmissn/Baseln/PurchsOrdrRef/Id"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
