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
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/Buyr/Nm"/>
                </xsl:element>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/Goods/LineItmsTtlAmt/@Ccy"/>
                </xsl:element>
                <xsl:element name="FA_DOC_DT">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/ComrclDocRef/IsseDt"/>
                </xsl:element>
                <xsl:element name="FA_DOC_NO">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/ComrclDocRef/InvcNb"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/Sellr/Nm"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
