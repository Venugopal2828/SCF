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
        <xsl:element name="MSG03">
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
            <xsl:element name="ReplyDate">
                <xsl:value-of select="/root/domData/FA_REPL_DT"/>
            </xsl:element>
            <xsl:element name="PrelCreditAssessNr">
                <xsl:value-of select="/root/domData/FA_PCR_REF"/>
            </xsl:element>
            <xsl:element name="OrigReqNr">
                <xsl:value-of select="/root/domData/THEIR_REF_NO"/>
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
                <xsl:element name="BuyerCompanyRegNr">
                    <xsl:value-of select="/root/domData/FA_BUYER_COMP_REG"/>
                </xsl:element>
                <xsl:element name="ResponseAgency">
                    <xsl:value-of select="/root/domData/FA_BUYER_RESP_AGNT"/>
                </xsl:element>
                <xsl:element name="BuyerNr">
                    <xsl:value-of select="/root/domData/FA_BUYER_EDI_ID"/>
                </xsl:element>
                <xsl:element name="BuyerName">
                    <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
                </xsl:element>
                <xsl:element name="NameCont">
                    <xsl:value-of select="/root/domData/FA_BUYER_NM2"/>
                </xsl:element>
                <xsl:element name="Street">
                    <xsl:value-of select="/root/domData/FA_BUYER_POSTBOX"/>
                </xsl:element>
                <xsl:element name="City">
                    <xsl:value-of select="/root/domData/FA_BUYER_CITY"/>
                </xsl:element>
                <xsl:element name="State">
                    <xsl:value-of select="/root/domData/FA_BUYER_PROV"/>
                </xsl:element>
                <xsl:element name="Postcode">
                    <xsl:value-of select="/root/domData/FA_BUYER_POSTCODE"/>
                </xsl:element>
                <xsl:element name="Country">
                    <xsl:value-of select="/root/domData/FA_BUYER_CNTY"/>
                </xsl:element>
                <xsl:element name="ContactName">
                    <xsl:value-of select="/root/domData/FA_BUYER_CONT_NM"/>
                </xsl:element>
                <xsl:element name="Telephone">
                    <xsl:value-of select="/root/domData/FA_BUYER_CONT_TEL"/>
                </xsl:element>
                <xsl:element name="Fax">
                    <xsl:value-of select="/root/domData/FA_BUYER_CONT_FAX"/>
                </xsl:element>
                <xsl:element name="Email">
                    <xsl:value-of select="/root/domData/FA_BUYER_CONT_MAIL"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="BankDetailsBuyer">
                <xsl:element name="AccountNr">
                    <xsl:value-of select="/root/domData/FA_BUYER_AC_NO"/>
                </xsl:element>
                <xsl:element name="BankName">
                    <xsl:value-of select="/root/domData/FA_BUYER_BK_NM"/>
                </xsl:element>
                <xsl:element name="BranchName">
                    <xsl:value-of select="/root/domData/FA_BUYER_BK_BRCH"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="PrelCreditAssessDetails">
                <xsl:element name="AmtCreditAssessReq">
                    <xsl:value-of select="/root/domData/FA_LMT_ASS_AMT"/>
                </xsl:element>
                <xsl:element name="Currency">
                    <xsl:value-of select="/root/domData/FA_LMT_ASS_CCY"/>
                </xsl:element>
                <xsl:element name="Reason">
                    <xsl:value-of select="ee:getInterpreter(/root/domData/FA_REASON)"/>
                </xsl:element>
                <xsl:element name="LongCreditPeriodDays">
                    <xsl:value-of select="/root/domData/FA_LMT_LONG_DAYS"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT02"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
