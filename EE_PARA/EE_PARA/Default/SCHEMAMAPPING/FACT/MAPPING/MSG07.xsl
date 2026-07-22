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
        <xsl:element name="MSG07">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="ReceiverCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
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
            <xsl:element name="RequestDate">
                <xsl:value-of select="/root/domData/TRX_DT"/>
            </xsl:element>
            <xsl:element name="RequestNr">
                <xsl:value-of select="/root/domData/FA_CAA_REF"/>
            </xsl:element>
            <xsl:element name="MsgFunction">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_MSG_FUNC)"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="Buyer">
                <xsl:element name="BuyerNr">
                    <xsl:value-of select="/root/domData/FA_BUYER_EDI_ID"/>
                </xsl:element>
                <xsl:element name="BuyerName">
                    <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="CurrentCreditCoverDetails">
                <xsl:element name="CurrentCreditCoverAmt">
                    <xsl:value-of select="/root/domData/FA_LMT_AMT"/>
                </xsl:element>
                <xsl:element name="Currency">
                    <xsl:value-of select="/root/domData/FA_LMT_CCY"/>
                </xsl:element>
                <xsl:element name="CurrentExpiryDate">
                    <xsl:value-of select="/root/domData/FA_LMT_DUE_DT"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="NewCreditCoverDetails">
                <xsl:element name="Request">
                    <xsl:value-of select="ee:getInterpreter(/root/domData/FA_REQ_CODE)"/>
                </xsl:element>
                <xsl:element name="NewCreditCoverAmt">
                    <xsl:value-of select="/root/domData/FA_APPL_LMT_AMT"/>
                </xsl:element>
                <xsl:element name="NewExpiryDate">
                    <xsl:value-of select="/root/domData/FA_APPL_LMT_DUE_DT"/>
                </xsl:element>
                <xsl:element name="ValidFrom">
                    <xsl:value-of select="/root/domData/FA_LMT_VAL_DT"/>
                </xsl:element>
                <xsl:element name="LongCreditPeriodDays">
                    <xsl:value-of select="/root/domData/FA_LMT_LONG_DAYS"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="OwnRiskNewCreditCover">
                <xsl:element name="OwnRiskAmt">
                    <xsl:value-of select="/root/domData/FA_OWN_RISK_AMT"/>
                </xsl:element>
                <xsl:element name="OwnRiskPerc">
                    <xsl:value-of select="/root/domData/FA_OWN_RISK_PERC"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT02"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
