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
                <xsl:element name="C_XML_DATA_017">
                    <xsl:value-of select="/message/out-msg-content/C_XML_DATA"/>
                </xsl:element>
                <xsl:element name="TSU_BUYER_BK_BIC">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/BuyrBk/BIC"/>
                </xsl:element>
                <xsl:element name="TSU_BUYER_NM">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/Buyr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_CCY">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/Goods/LineItmsTtlAmt/@Ccy"/>
                </xsl:element>
                <xsl:element name="TSU_COMM_DT">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/ComrclDocRef/IsseDt"/>
                </xsl:element>
                <xsl:element name="TSU_COMM_REF">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/ComrclDocRef/InvcNb"/>
                </xsl:element>
                <xsl:element name="TSU_MESSAGE_ID">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/RptId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_BK_BIC">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/SellrBk/BIC"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_NM">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/Sellr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_TRX_DTTM">
                    <xsl:value-of select="/message/Document/FwdDataSetSubmissnRpt/RptId/CreDtTm"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/Goods"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/Document/FwdDataSetSubmissnRpt/ComrclDataSet/Goods" mode="m0">
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
