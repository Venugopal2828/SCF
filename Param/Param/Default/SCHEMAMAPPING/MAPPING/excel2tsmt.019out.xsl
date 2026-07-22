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
            <xsl:element name="InitlBaselnSubmissn">
                <xsl:element name="SubmissnId">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/FA_SBR_REF"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="SubmitrTxRef"/>
                <xsl:element name="Instr"/>
                <xsl:element name="Baseln">
                    <xsl:element name="SubmitrBaselnId">
                        <xsl:element name="Submitr"/>
                    </xsl:element>
                    <xsl:element name="PurchsOrdrRef">
                        <xsl:element name="Id">
                            <xsl:value-of select="/root/domData/PO_NO"/>
                        </xsl:element>
                        <xsl:element name="DtOfIsse">
                            <xsl:value-of select="/root/domData/PO_DT"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="Buyr">
                        <xsl:element name="Nm">
                            <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
                        </xsl:element>
                        <xsl:element name="PstlAdr"/>
                    </xsl:element>
                    <xsl:element name="Sellr">
                        <xsl:element name="Nm">
                            <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                        </xsl:element>
                        <xsl:element name="PstlAdr"/>
                    </xsl:element>
                    <xsl:element name="BuyrBk"/>
                    <xsl:element name="SellrBk"/>
                    <xsl:element name="Goods">
                        <xsl:element name="GoodsDesc">
                            <xsl:value-of select="/root/domData/GOODS_DESC"/>
                        </xsl:element>
                        <xsl:element name="ShipmntDtRg"/>
                        <xsl:element name="LineItmDtls">
                            <xsl:element name="Qty"/>
                            <xsl:element name="UnitPric">
                                <xsl:element name="Amt"/>
                            </xsl:element>
                            <xsl:element name="TtlAmt"/>
                        </xsl:element>
                        <xsl:element name="LineItmsTtlAmt"/>
                        <xsl:element name="TtlNetAmt">
                            <xsl:attribute name="Ccy">
                                <xsl:value-of select="/root/domData/PO_CCY"/>
                            </xsl:attribute>
                            <xsl:value-of select="/root/domData/PO_AMT"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="PmtTerms">
                        <xsl:element name="PmtCd"/>
                    </xsl:element>
                    <xsl:element name="PmtOblgtn">
                        <xsl:element name="OblgrBk"/>
                        <xsl:element name="RcptBk"/>
                        <xsl:element name="Amt"/>
                    </xsl:element>
                    <xsl:element name="ComrclDataSetReqrd">
                        <xsl:element name="Submitr"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="BuyrBkCtctPrsn"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
