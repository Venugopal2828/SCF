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
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/BuyrBk/BIC"/>
                </xsl:element>
                <xsl:element name="TSU_BUYER_NM">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/Buyr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_CCY">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/Goods/LineItmsTtlAmt/@Ccy"/>
                </xsl:element>
                <xsl:element name="TSU_INTT_TO_PAY">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/InttToPayXpctd"/>
                </xsl:element>
                <xsl:element name="TSU_LINE_TTL_AMT">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/Goods/LineItmsTtlAmt"/>
                </xsl:element>
                <xsl:element name="TSU_MESSAGE_ID">
                    <xsl:value-of select="/Document/BaselnReSubmissn/SubmissnId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_PO_DT">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/PurchsOrdrRef/DtOfIsse"/>
                </xsl:element>
                <xsl:element name="TSU_PO_ID">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/PurchsOrdrRef/Id"/>
                </xsl:element>
                <xsl:element name="TSU_PRTL_SHIPMNT_FLG">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/Goods/PrtlShipmnt"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_BK_BIC">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/SellrBk/BIC"/>
                </xsl:element>
                <xsl:element name="TSU_SEL_NM">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/Sellr/Nm"/>
                </xsl:element>
                <xsl:element name="TSU_TID">
                    <xsl:value-of select="/Document/BaselnReSubmissn/TxId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_TRX_DTTM">
                    <xsl:value-of select="/Document/BaselnReSubmissn/SubmissnId/CreDtTm"/>
                </xsl:element>
                <xsl:element name="TSU_TTL_NET_AMT">
                    <xsl:value-of select="/Document/BaselnReSubmissn/Baseln/Goods/TtlNetAmt"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/Document/BaselnReSubmissn/Baseln/Goods/LineItmDtls"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/Document/BaselnReSubmissn/Baseln/Goods/LineItmDtls" mode="m0">
        <XDO_PO_LI>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="TSU_LNITMNB">
                <xsl:value-of select="LineItmId"/>
            </xsl:element>
            <xsl:element name="TSU_PDCTNM">
                <xsl:value-of select="PdctNm"/>
            </xsl:element>
            <xsl:element name="TSUR2_QTY_UNIT_CD">
                <xsl:value-of select="Qty/UnitOfMeasrCd"/>
            </xsl:element>
            <xsl:element name="TSU_QTY_VAL">
                <xsl:value-of select="Qty/Val"/>
            </xsl:element>
            <xsl:element name="TSU_UNITPRIC_AMT">
                <xsl:value-of select="UnitPric/Amt"/>
            </xsl:element>
            <xsl:element name="TSU_TTL_AMT">
                <xsl:value-of select="TtlAmt"/>
            </xsl:element>
        </XDO_PO_LI>
    </xsl:template>
</xsl:stylesheet>
