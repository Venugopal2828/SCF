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
                <xsl:element name="FA_APPL_LMT_AMT"/>
                <xsl:element name="FA_APPL_LMT_CCY"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BA_LINK"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_AC_NO"/>
                <xsl:element name="FA_BUYER_BK_BRCH"/>
                <xsl:element name="FA_BUYER_BK_NM"/>
                <xsl:element name="FA_BUYER_CITY">
                    <xsl:value-of select="/MSG06/Buyer/City"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CNTC_FLG"/>
                <xsl:element name="FA_BUYER_CNTY">
                    <xsl:value-of select="/MSG06/Buyer/Country"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_COMP_REG">
                    <xsl:value-of select="/MSG06/Buyer/BuyerCompanyRegNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_ADDR"/>
                <xsl:element name="FA_BUYER_CONT_FAX">
                    <xsl:value-of select="/MSG06/Buyer/Fax"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_MAIL">
                    <xsl:value-of select="/MSG06/Buyer/Email"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_NM">
                    <xsl:value-of select="/MSG06/Buyer/ContactName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_TEL">
                    <xsl:value-of select="/MSG06/Buyer/Telephone"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG06/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG06/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_NM2">
                    <xsl:value-of select="/MSG06/Buyer/NameCont"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_POSTBOX">
                    <xsl:value-of select="/MSG06/Buyer/Street"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_POSTCODE">
                    <xsl:value-of select="/MSG06/Buyer/Postcode"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_PROV">
                    <xsl:value-of select="/MSG06/Buyer/State"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_RESP_AGNT">
                    <xsl:value-of select="/MSG06/Buyer/ResponseAgency"/>
                </xsl:element>
                <xsl:element name="FA_CCA_REF">
                    <xsl:value-of select="/MSG06/OrigReqNr"/>
                </xsl:element>
                <xsl:element name="FA_CCR_REF"/>
                <xsl:element name="FA_CNTR_DOC_NO"/>
                <xsl:element name="FA_CREDIT_REQ"/>
                <xsl:element name="FA_DECR_AMT"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG06/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG06/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_GOODS_NM"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG06/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_LMT_EXCH_RT"/>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG06/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_INCO_COMM_RT"/>
                <xsl:element name="FA_INCO_ID"/>
                <xsl:element name="FA_INCO_NM"/>
                <xsl:element name="FA_INCR_AMT"/>
                <xsl:element name="FA_INSU_AGR_NO"/>
                <xsl:element name="FA_INSU_COMP_FLAG"/>
                <xsl:element name="FA_INV_CCY1"/>
                <xsl:element name="FA_INV_CCY2"/>
                <xsl:element name="FA_INV_CCY3"/>
                <xsl:element name="FA_INV_CCY4"/>
                <xsl:element name="FA_INV_CCY5"/>
                <xsl:element name="FA_LMT_AMT">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/CreditCoverAmt"/>
                </xsl:element>
                <xsl:element name="FA_LMT_CCY">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/Currency"/>
                </xsl:element>
                <xsl:element name="FA_LMT_DUE_DT">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/ExpiryDate"/>
                </xsl:element>
                <xsl:element name="FA_LMT_LONG_DAYS">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/LongCreditPeriodDays"/>
                </xsl:element>
                <xsl:element name="FA_LMT_TYPE"/>
                <xsl:element name="FA_LMT_VAL_DT">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/ValidFrom"/>
                </xsl:element>
                <xsl:element name="FA_MSG_FUNC">
                    <xsl:value-of select="/MSG06/MsgFunction"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/MSG06/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_OWN_RISK_AMT">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/OwnRiskAmt"/>
                </xsl:element>
                <xsl:element name="FA_OWN_RISK_PERC">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/OwnRiskPerc"/>
                </xsl:element>
                <xsl:element name="FA_PMT_TERMS"/>
                <xsl:element name="FA_PMT_TERMS_FLG"/>
                <xsl:element name="FA_REASON">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/Reason"/>
                </xsl:element>
                <xsl:element name="FA_REPL_CODE">
                    <xsl:value-of select="/MSG06/CreditCoverDetails/Response"/>
                </xsl:element>
                <xsl:element name="FA_REPL_DT">
                    <xsl:value-of select="/MSG06/ReplyDate"/>
                </xsl:element>
                <xsl:element name="FA_REQ_DT">
                    <xsl:value-of select="/MSG06/OrigReqDate"/>
                </xsl:element>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG06/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG06/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_SERVICE_REQ"/>
                <xsl:element name="FA_TEMP1"/>
                <xsl:element name="FA_TEMP5"/>
                <xsl:element name="FA_TEMP_DT1"/>
                <xsl:element name="FORACOF_TEMP_TEAM_NM"/>
                <xsl:element name="LM_CRED_LMT"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OVER_OUT"/>
                <xsl:element name="LM_RSV_LINK"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG06/CreditCoverNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:if test="/MSG06/IF/FactorCode=''">
                    <xsl:element name="LimitsDo">
                        <xsl:attribute name="isDO">T</xsl:attribute>
                        <xsl:attribute name="Type">A</xsl:attribute>
                        <xsl:element name="LM_ID"/>
                        <xsl:element name="LM_NM"/>
                        <xsl:element name="LM_TYPE"/>
                        <xsl:element name="LM_TYPE_DESC"/>
                        <xsl:element name="LM_PARENT_ID"/>
                        <xsl:element name="LM_PARENT_NM"/>
                        <xsl:element name="LM_CRED_LMT"/>
                        <xsl:element name="LM_BASE_CCY"/>
                        <xsl:element name="LM_ERATE"/>
                        <xsl:element name="LM_DEBT_LMT"/>
                        <xsl:element name="LM_CRT_DAY"/>
                        <xsl:element name="LM_STR_DAY"/>
                        <xsl:element name="LM_DUE_DAY"/>
                        <xsl:element name="LM_REVOLVING"/>
                        <xsl:element name="LM_REALLO"/>
                        <xsl:element name="LM_EVENT_TYPE"/>
                    </xsl:element>
                </xsl:if>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
