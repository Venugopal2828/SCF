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
                <xsl:element name="CFNC_C_ORIGIN_MAIN_REF"/>
                <xsl:element name="CLERK_ID">
                    <xsl:value-of select="/MSG04/MsgInfo/CreatedBy"/>
                </xsl:element>
                <xsl:element name="C_BU_ID"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="DIARY_DT"/>
                <xsl:element name="DIARY_NARRATIVE"/>
                <xsl:element name="DIARY_RELATED_REF"/>
                <xsl:element name="EXCH_RT1"/>
                <xsl:element name="EXCH_RT2"/>
                <xsl:element name="EXCH_RT3"/>
                <xsl:element name="EXCH_RT4"/>
                <xsl:element name="FA_APPL_LMT_CCY"/>
                <xsl:element name="FA_ASSESS_CHG">
                    <xsl:value-of select="/MSG04/FactCommission/ChargePrelCreditAssess"/>
                </xsl:element>
                <xsl:element name="FA_ASSESS_CHG_CCY">
                    <xsl:value-of select="/MSG04/FactCommission/ChargeCurrency"/>
                </xsl:element>
                <xsl:element name="FA_BK_CHG_INCD">
                    <xsl:value-of select="/MSG04/FactCommission/BankChargeIncl"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID"/>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM"/>
                <xsl:element name="FA_CNTR_DOC_NO"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG04/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG04/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_GOODS_DES"/>
                <xsl:element name="FA_IF_COMM_RT">
                    <xsl:value-of select="/MSG04/FactCommission/GrossTurnoverPercCommission"/>
                </xsl:element>
                <xsl:element name="FA_IF_HAN_CHG_AMT">
                    <xsl:value-of select="/MSG04/FactCommission/PriceDoc"/>
                </xsl:element>
                <xsl:element name="FA_IF_HAN_CHG_CCY">
                    <xsl:value-of select="/MSG04/FactCommission/DocCurrency"/>
                </xsl:element>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG04/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG04/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IF_OTH_CHG_AMT">
                    <xsl:value-of select="/MSG04/FactCommission/OtherCharge"/>
                </xsl:element>
                <xsl:element name="FA_IF_OTH_CHG_CCY">
                    <xsl:value-of select="/MSG04/FactCommission/OtherCurrency"/>
                </xsl:element>
                <xsl:element name="FA_INCO_COMM_RT"/>
                <xsl:element name="FA_INCO_ID"/>
                <xsl:element name="FA_LMT_AMT"/>
                <xsl:element name="FA_LMT_ASS_AMT"/>
                <xsl:element name="FA_LMT_ASS_CCY"/>
                <xsl:element name="FA_LMT_CCY"/>
                <xsl:element name="FA_LOAN_IRATE_TYPE"/>
                <xsl:element name="FA_MSG_DT">
                    <xsl:value-of select="/MSG04/MsgDate"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT">
                    <xsl:value-of select="/MSG04/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_PRICING_DT"/>
                <xsl:element name="FA_PRICING_REF"/>
                <xsl:element name="FA_PRICING_VAL_DT"/>
                <xsl:element name="FA_SELINFO_ID"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG04/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG04/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="PYMT_C_MAIN_REF"/>
                <xsl:element name="THEIR_REF_NO"/>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
