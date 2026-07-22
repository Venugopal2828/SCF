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
                <xsl:element name="TSU_BUYER_BK_BIC">
                    <xsl:value-of select="/Document/DataSetSubmissn/BuyrBk/BIC"/>
                </xsl:element>
                <xsl:element name="TSU_BUYER_NM">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/Buyr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_CCY">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/Goods/LineItmsTtlAmt/@Ccy"/>
                </xsl:element>
                <xsl:element name="TSU_COMM_DT">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/ComrclDocRef/IsseDt"/>
                </xsl:element>
                <xsl:element name="TSU_COMM_REF">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/ComrclDocRef/InvcNb"/>
                </xsl:element>
                <xsl:element name="TSU_INSTRUCTION">
                    <xsl:value-of select="/Document/DataSetSubmissn/Instr/Tp"/>
                </xsl:element>
                <xsl:element name="TSU_MESSAGE_ID">
                    <xsl:value-of select="/Document/DataSetSubmissn/SubmissnId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_BK_BIC">
                    <xsl:value-of select="/Document/DataSetSubmissn/SellrBk/BIC"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_NM">
                    <xsl:value-of select="/Document/DataSetSubmissn/ComrclDataSet/Sellr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_TRX_DTTM">
                    <xsl:value-of select="/Document/DataSetSubmissn/SubmissnId/CreDtTm"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/Document/DataSetSubmissn/ComrclDataSet/Goods"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/Document/DataSetSubmissn/ComrclDataSet/Goods" mode="m0">
        <TDO_INV_PO>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="TSU_PO_ID">
                <xsl:value-of select="PurchsOrdrRef/Id"/>
            </xsl:element>
            <xsl:element name="TSU_PO_DT">
                <xsl:value-of select="PurchsOrdrRef/DtOfIsse"/>
            </xsl:element>
            <xsl:element name="TSU_DS_FINAL_FLG">
                <xsl:value-of select="FnlSubmissn"/>
            </xsl:element>
            <xsl:element name="TSU_LINE_TTL_AMT">
                <xsl:value-of select="LineItmsTtlAmt"/>
            </xsl:element>
            <xsl:element name="TSU_TTL_NET_AMT">
                <xsl:value-of select="TtlNetAmt"/>
            </xsl:element>
        </TDO_INV_PO>
    </xsl:template>
</xsl:stylesheet>
