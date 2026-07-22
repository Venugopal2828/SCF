<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet AutoGen-Parameter-Version="1.0" exclude-result-prefixes="xalan"
    extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base"
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
        <xsl:element name="MSG04">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="ReceiverCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="CreatedBy">
                    <xsl:value-of select="/root/domData/CLERK_ID"/>
                </xsl:element>
                <xsl:element name="SequenceNr"/>
                <xsl:element name="DateTime"/>
                <xsl:element name="Status"/>
                <xsl:element name="Error"/>
            </xsl:element>
            <xsl:element name="EF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/FA_EF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="IF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/FA_IF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgDate">
                <xsl:value-of select="/root/domData/FA_MSG_DT"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="FactCommission">
                <xsl:element name="GrossTurnoverPercCommission">
                    <xsl:value-of select="/root/domData/FA_IF_COMM_RT"/>
                </xsl:element>
                <xsl:element name="PriceDoc">
                    <xsl:value-of select="/root/domData/FA_IF_HAN_CHG_AMT"/>
                </xsl:element>
                <xsl:element name="DocCurrency">
                    <xsl:value-of select="/root/domData/FA_IF_HAN_CHG_CCY"/>
                </xsl:element>
                <xsl:element name="BankChargeIncl">
                    <xsl:value-of select="ee:getInterpreter(/root/domData/FA_BK_CHG_INCD)"/>
                </xsl:element>
                <xsl:element name="ChargePrelCreditAssess">
                    <xsl:value-of select="/root/domData/FA_ASSESS_CHG"/>
                </xsl:element>
                <xsl:element name="ChargeCurrency">
                    <xsl:value-of select="/root/domData/FA_ASSESS_CHG_CCY"/>
                </xsl:element>
                <xsl:element name="OtherCharge">
                    <xsl:value-of select="/root/domData/FA_IF_OTH_CHG_AMT"/>
                </xsl:element>
                <xsl:element name="OtherCurrency">
                    <xsl:value-of select="/root/domData/FA_IF_OTH_CHG_CCY"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
