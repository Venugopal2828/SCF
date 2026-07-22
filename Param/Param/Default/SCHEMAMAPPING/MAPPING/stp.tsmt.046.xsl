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
                <xsl:element name="C_XML_DATA_046">
                    <xsl:value-of select="/message/out-msg-content/C_XML_DATA"/>
                </xsl:element>
                <xsl:element name="TSU_MESSAGE_ID">
                    <xsl:value-of select="/message/Document/InttToPayRpt/RptId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_TRX_DTTM">
                    <xsl:value-of select="/message/Document/InttToPayRpt/RptId/CreDtTm"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/Document/InttToPayRpt/RptdItms"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/Document/InttToPayRpt/RptdItms" mode="m0">
        <TDO_ITPRPT>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="TSU_TID">
                <xsl:value-of select="TxId"/>
            </xsl:element>
            <xsl:element name="TSU_PO_ID">
                <xsl:value-of select="PurchsOrdrRef/Id"/>
            </xsl:element>
            <xsl:element name="TSU_PO_DT">
                <xsl:value-of select="PurchsOrdrRef/DtOfIsse"/>
            </xsl:element>
            <xsl:element name="TSU_TTL_NET_AMT">
                <xsl:value-of select="PurchsOrdrTtlNetAmt"/>
            </xsl:element>
            <xsl:element name="TSU_ACCUM_NET_AMT">
                <xsl:value-of select="AcmltdNetAmt"/>
            </xsl:element>
            <xsl:element name="TSUR2_TRX_STATUS">
                <xsl:value-of select="TxSts/Sts"/>
            </xsl:element>
        </TDO_ITPRPT>
    </xsl:template>
</xsl:stylesheet>
