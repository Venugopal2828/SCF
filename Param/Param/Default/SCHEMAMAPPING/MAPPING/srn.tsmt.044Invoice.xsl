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
            <xsl:element name="InttToPayNtfctn">
                <xsl:element name="NtfctnId">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/TSU_MESSAGE_ID"/>
                    </xsl:element>
                    <xsl:element name="CreDtTm">
                        <xsl:value-of select="/root/domData/TSU_TRX_DTTM"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="TxId">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/TSU_TID"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="SubmitrTxRef"/>
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
                <xsl:element name="InttToPay">
                    <xsl:element name="ByComrclInvc">
                        <xsl:element name="ComrclDocRef">
                            <xsl:element name="InvcNb">
                                <xsl:value-of select="/root/domData/TSU_COMM_REF"/>
                            </xsl:element>
                            <xsl:element name="IsseDt">
                                <xsl:value-of select="/root/domData/TSU_COMM_DT"/>
                            </xsl:element>
                        </xsl:element>
                        <xsl:element name="NetAmt">
                            <xsl:value-of select="/root/domData/TSU_NET_AMT"/>
                        </xsl:element>
                        <xsl:apply-templates mode="m0" select="/root/domData/TDO_ITP"/>
                    </xsl:element>
                    <xsl:element name="XpctdPmtDt">
                        <xsl:value-of select="/root/domData/TSU_EXPCTD_PMT_DT"/>
                    </xsl:element>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/TDO_ITP" mode="m0">
        <BrkdwnByPurchsOrdr>
            <xsl:element name="TxId">
                <xsl:value-of select="TSU_TID"/>
            </xsl:element>
            <xsl:element name="PurchsOrdrRef">
                <xsl:element name="Id">
                    <xsl:value-of select="TSU_PO_ID"/>
                </xsl:element>
                <xsl:element name="DtOfIsse">
                    <xsl:value-of select="TSU_PO_DT"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="NetAmt">
                <xsl:value-of select="TSU_NET_AMT"/>
            </xsl:element>
        </BrkdwnByPurchsOrdr>
    </xsl:template>
</xsl:stylesheet>
