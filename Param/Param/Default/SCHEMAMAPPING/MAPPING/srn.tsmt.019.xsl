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
                        <xsl:value-of select="/root/domData/TSU_MESSAGE_ID"/>
                    </xsl:element>
                    <xsl:element name="CreDtTm">
                        <xsl:value-of select="/root/domData/TSU_TRX_DTTM"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="SubmitrTxRef"/>
                <xsl:element name="Instr">
                    <xsl:element name="Tp">
                        <xsl:value-of select="/root/domData/TSU_INSTR_TP"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="Baseln">
                    <xsl:element name="SubmitrBaselnId">
                        <xsl:element name="Submitr"/>
                    </xsl:element>
                    <xsl:element name="PurchsOrdrRef">
                        <xsl:element name="Id">
                            <xsl:value-of select="/root/domData/TSU_PO_ID"/>
                        </xsl:element>
                        <xsl:element name="DtOfIsse">
                            <xsl:value-of select="/root/domData/TSU_PO_DT"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="Buyr">
                        <xsl:element name="Nm">
                            <xsl:value-of select="/root/domData/TSU_BUYER_NM"/>
                        </xsl:element>
                        <xsl:element name="PstlAdr"/>
                    </xsl:element>
                    <xsl:element name="Sellr">
                        <xsl:element name="Nm">
                            <xsl:value-of select="/root/domData/TSU_SEL_NM"/>
                        </xsl:element>
                        <xsl:element name="PstlAdr"/>
                    </xsl:element>
                    <xsl:element name="BuyrBk">
                        <xsl:element name="BIC">
                            <xsl:value-of select="/root/domData/TSU_BUYER_BK_BIC"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="SellrBk">
                        <xsl:element name="BIC">
                            <xsl:value-of select="/root/domData/TSU_SEL_BK_BIC"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="Goods">
                        <xsl:element name="PrtlShipmnt">
                            <xsl:value-of select="/root/domData/TSU_PRTL_SHIPMNT_FLG"/>
                        </xsl:element>
                        <xsl:element name="ShipmntDtRg"/>
                        <xsl:apply-templates mode="m0" select="/root/domData/XDO_PO_LI"/>
                        <xsl:element name="LineItmsTtlAmt">
                            <xsl:attribute name="Ccy">
                                <xsl:value-of select="/root/domData/TSU_CCY"/>
                            </xsl:attribute>
                            <xsl:value-of select="/root/domData/TSU_LINE_TTL_AMT"/>
                        </xsl:element>
                        <xsl:element name="TtlNetAmt">
                            <xsl:value-of select="/root/domData/TSU_TTL_NET_AMT"/>
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
                    <xsl:element name="InttToPayXpctd">
                        <xsl:value-of select="/root/domData/TSU_INTT_TO_PAY"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="BuyrBkCtctPrsn"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/XDO_PO_LI" mode="m0">
        <LineItmDtls>
            <xsl:element name="LineItmId">
                <xsl:value-of select="TSU_LNITMNB"/>
            </xsl:element>
            <xsl:element name="Qty">
                <xsl:element name="UnitOfMeasrCd">
                    <xsl:value-of select="TSUR2_QTY_UNIT_CD"/>
                </xsl:element>
                <xsl:element name="Val">
                    <xsl:value-of select="TSU_QTY_VAL"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="UnitPric">
                <xsl:element name="Amt">
                    <xsl:value-of select="TSU_UNITPRIC_AMT"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="PdctNm">
                <xsl:value-of select="TSU_PDCTNM"/>
            </xsl:element>
            <xsl:element name="TtlAmt">
                <xsl:value-of select="TSU_TTL_AMT"/>
            </xsl:element>
        </LineItmDtls>
    </xsl:template>
</xsl:stylesheet>
