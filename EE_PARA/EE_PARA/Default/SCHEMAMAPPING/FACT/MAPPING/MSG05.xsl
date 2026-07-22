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
        <xsl:element name="MSG05">
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
                <xsl:value-of select="/root/domData/FA_REQ_DT"/>
            </xsl:element>
            <xsl:element name="RequestNr">
                <xsl:value-of select="/root/domData/FA_CCA_REF"/>
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
                <xsl:element name="DirectContact">
                    <xsl:value-of select="ee:getInterpreter(/root/domData/FA_BUYER_CNTC_FLG)"/>
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
            <xsl:element name="CreditCoverDetails">
                <xsl:element name="Request">
                    <xsl:value-of select="ee:getInterpreter(/root/domData/FA_CREDIT_REQ)"/>
                </xsl:element>
                <xsl:element name="ValidFrom">
                    <xsl:value-of select="/root/domData/FA_LMT_VAL_DT"/>
                </xsl:element>
                <xsl:element name="NewCreditCoverAmt">
                    <xsl:value-of select="/root/domData/FA_APPL_LMT_AMT"/>
                </xsl:element>
                <xsl:element name="Currency">
                    <xsl:value-of select="/root/domData/FA_APPL_LMT_CCY"/>
                </xsl:element>
                <xsl:element name="OwnRiskAmt">
                    <xsl:value-of select="/root/domData/FA_OWN_RISK_AMT"/>
                </xsl:element>
                <xsl:element name="OwnRiskPerc">
                    <xsl:value-of select="/root/domData/FA_OWN_RISK_PERC"/>
                </xsl:element>
                <xsl:element name="NetPmtTerms">
                    <xsl:value-of select="/root/domData/FA_PMT_TERMS"/>
                </xsl:element>
                <xsl:element name="Discount1Days">
                    <xsl:value-of select="/root/domData/FA_PRM_DISC_DAYS"/>
                </xsl:element>
                <xsl:element name="Discount1Perc">
                    <xsl:value-of select="/root/domData/FA_PRM_DISC_RT"/>
                </xsl:element>
                <xsl:element name="Discount2Days">
                    <xsl:value-of select="/root/domData/FA_SND_DISC_DAYS"/>
                </xsl:element>
                <xsl:element name="Discount2Perc">
                    <xsl:value-of select="/root/domData/FA_SND_DISC_RT"/>
                </xsl:element>
                <xsl:element name="OrderNr"/>
                <xsl:element name="LateShipmDate">
                    <xsl:value-of select="/root/domData/FA_LATEST_SHIP_DT"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT02"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
