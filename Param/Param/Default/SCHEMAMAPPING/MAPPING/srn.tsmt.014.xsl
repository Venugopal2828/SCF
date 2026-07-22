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
            <xsl:element name="DataSetSubmissn">
                <xsl:element name="SubmissnId">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/TSU_MESSAGE_ID"/>
                    </xsl:element>
                    <xsl:element name="CreDtTm">
                        <xsl:value-of select="/root/domData/TSU_TRX_DTTM"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="RltdTxRefs">
                    <xsl:element name="PurchsOrdrRef"/>
                </xsl:element>
                <xsl:element name="CmonSubmissnRef"/>
                <xsl:element name="Instr">
                    <xsl:element name="Tp">
                        <xsl:value-of select="/root/domData/TSU_INSTRUCTION"/>
                    </xsl:element>
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
                <xsl:element name="ComrclDataSet">
                    <xsl:element name="DataSetId">
                        <xsl:element name="Submitr"/>
                    </xsl:element>
                    <xsl:element name="ComrclDocRef"/>
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
                    <xsl:apply-templates mode="m0" select="/root/domData/TDO_INV_PO"/>
                    <xsl:element name="PmtTerms">
                        <xsl:element name="PmtCd"/>
                    </xsl:element>
                    <xsl:element name="SttlmTerms">
                        <xsl:element name="CdtrAcct">
                            <xsl:element name="Id">
                                <xsl:element name="PrtryAcct"/>
                            </xsl:element>
                        </xsl:element>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="CertDataSet">
                    <xsl:element name="DataSetId">
                        <xsl:element name="Submitr"/>
                    </xsl:element>
                    <xsl:element name="LineItm">
                        <xsl:element name="PurchsOrdrRef"/>
                    </xsl:element>
                    <xsl:element name="CertfdChrtcs"/>
                    <xsl:element name="Issr">
                        <xsl:element name="PstlAdr"/>
                    </xsl:element>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/TDO_INV_PO" mode="m0">
        <Goods>
            <xsl:element name="PurchsOrdrRef">
                <xsl:element name="Id">
                    <xsl:value-of select="TSU_PO_ID"/>
                </xsl:element>
                <xsl:element name="DtOfIsse">
                    <xsl:value-of select="TSU_PO_DT"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="FnlSubmissn">
                <xsl:value-of select="TSU_DS_FINAL_FLG"/>
            </xsl:element>
            <xsl:element name="ComrclLineItms">
                <xsl:element name="Qty"/>
                <xsl:element name="UnitPric">
                    <xsl:element name="Amt"/>
                </xsl:element>
                <xsl:element name="TtlAmt"/>
            </xsl:element>
            <xsl:element name="LineItmsTtlAmt">
                <xsl:value-of select="TSU_LINE_TTL_AMT"/>
            </xsl:element>
            <xsl:element name="Incotrms"/>
            <xsl:element name="FrghtChrgs">
                <xsl:element name="Chrgs">
                    <xsl:element name="Amt"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="TtlNetAmt">
                <xsl:value-of select="TSU_TTL_NET_AMT"/>
            </xsl:element>
        </Goods>
    </xsl:template>
</xsl:stylesheet>
