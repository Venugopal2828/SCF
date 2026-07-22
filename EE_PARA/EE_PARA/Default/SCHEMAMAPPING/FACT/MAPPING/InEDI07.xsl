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
        <xsl:element name="root">
            <xsl:element name="domData">
                <xsl:element name="CLERK_ID"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="DIARY_DT"/>
                <xsl:element name="DIARY_NARRATIVE"/>
                <xsl:element name="DIARY_RELATED_REF"/>
                <xsl:element name="FA_AGM_DUE_DT"/>
                <xsl:element name="FA_APPL_LMT_AMT">
                    <xsl:value-of select="/MSG07/NewCreditCoverDetails/NewCreditCoverAmt"/>
                </xsl:element>
                <xsl:element name="FA_APPL_LMT_CCY"/>
                <xsl:element name="FA_APPL_LMT_DUE_DT">
                    <xsl:value-of select="/MSG07/NewCreditCoverDetails/NewExpiryDate"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG07/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG07/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_CAA_REF"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG07/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG07/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG07/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_LMT_EXCH_RT"/>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG07/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IS_BANK"/>
                <xsl:element name="FA_LMT_AMT">
                    <xsl:value-of select="/MSG07/CurrentCreditCoverDetails/CurrentCreditCoverAmt"/>
                </xsl:element>
                <xsl:element name="FA_LMT_CCY">
                    <xsl:value-of select="/MSG07/CurrentCreditCoverDetails/Currency"/>
                </xsl:element>
                <xsl:element name="FA_LMT_DUE_DT">
                    <xsl:value-of select="/MSG07/CurrentCreditCoverDetails/CurrentExpiryDate"/>
                </xsl:element>
                <xsl:element name="FA_LMT_LONG_DAYS">
                    <xsl:value-of select="/MSG07/NewCreditCoverDetails/LongCreditPeriodDays"/>
                </xsl:element>
                <xsl:element name="FA_LMT_VAL_DT">
                    <xsl:value-of select="/MSG07/NewCreditCoverDetails/ValidFrom"/>
                </xsl:element>
                <xsl:element name="FA_MSG_FUNC">
                    <xsl:value-of select="/MSG07/MsgFunction"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/MSG07/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_OWN_RISK_AMT">
                    <xsl:value-of select="/MSG07/OwnRiskNewCreditCover/OwnRiskAmt"/>
                </xsl:element>
                <xsl:element name="FA_OWN_RISK_PERC">
                    <xsl:value-of select="/MSG07/OwnRiskNewCreditCover/OwnRiskPerc"/>
                </xsl:element>
                <xsl:element name="FA_PMT_COND"/>
                <xsl:element name="FA_PMT_TERMS"/>
                <xsl:element name="FA_REQ_CODE">
                    <xsl:value-of select="/MSG07/NewCreditCoverDetails/Request"/>
                </xsl:element>
                <xsl:element name="FA_REQ_DT">
                    <xsl:value-of select="/MSG07/RequestDate"/>
                </xsl:element>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG07/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG07/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_TEMP1"/>
                <xsl:element name="FA_TEMP2"/>
                <xsl:element name="FA_TEMP3"/>
                <xsl:element name="FA_TEMP_AMT11"/>
                <xsl:element name="FA_TEMP_AMT12"/>
                <xsl:element name="LM_BASE_CCY"/>
                <xsl:element name="LM_CRED_LMT"/>
                <xsl:element name="LM_DUE_DAY"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OVER_OUT"/>
                <xsl:element name="LM_RSV_LINK"/>
                <xsl:element name="PRODUCT_CODE"/>
                <xsl:element name="TEMP_AMT5"/>
                <xsl:element name="TEMP_DATE4"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG07/RequestNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
