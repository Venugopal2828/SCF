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
                <xsl:element name="EXCH_RT1"/>
                <xsl:element name="EXCH_RT2"/>
                <xsl:element name="EXCH_RT3"/>
                <xsl:element name="FA_AGM_DUE_DT"/>
                <xsl:element name="FA_APPL_LMT_AMT"/>
                <xsl:element name="FA_APPL_LMT_CCY"/>
                <xsl:element name="FA_APPL_LMT_DUE_DT"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BA_LINK"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG08/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG08/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_CAA_REF">
                    <xsl:value-of select="/MSG08/OrigReqNr"/>
                </xsl:element>
                <xsl:element name="FA_CAR_REF"/>
                <xsl:element name="FA_CNTR_DOC_NO"/>
                <xsl:element name="FA_DECR_AMT"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG08/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG08/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG08/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG08/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_INCO_ID"/>
                <xsl:element name="FA_INCO_NM"/>
                <xsl:element name="FA_INCR_AMT"/>
                <xsl:element name="FA_IS_BANK"/>
                <xsl:element name="FA_LMT_AMT">
                    <xsl:value-of select="/MSG08/NewCreditCoverDetails/NewCreditCoverAmt"/>
                </xsl:element>
                <xsl:element name="FA_LMT_BAL"/>
                <xsl:element name="FA_LMT_CCY"/>
                <xsl:element name="FA_LMT_DUE_DT">
                    <xsl:value-of select="/MSG08/NewCreditCoverDetails/NewExpiryDate"/>
                </xsl:element>
                <xsl:element name="FA_LMT_LONG_DAYS">
                    <xsl:value-of select="/MSG08/NewCreditCoverDetails/LongCreditPeriodDays"/>
                </xsl:element>
                <xsl:element name="FA_LMT_VAL_DT">
                    <xsl:value-of select="/MSG08/NewCreditCoverDetails/ValidFrom"/>
                </xsl:element>
                <xsl:element name="FA_MSG_DT">
                    <xsl:value-of select="/MSG08/ReplyDate"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT">
                    <xsl:value-of select="/MSG08/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02"/>
                <xsl:element name="FA_ORG_LMT_AMT">
                    <xsl:value-of select="/MSG08/CurrentCreditCoverDetails/CurrentCreditCoverAmt"/>
                </xsl:element>
                <xsl:element name="FA_ORG_LMT_CCY">
                    <xsl:value-of select="/MSG08/CurrentCreditCoverDetails/Currency"/>
                </xsl:element>
                <xsl:element name="FA_OWN_RISK_AMT">
                    <xsl:value-of select="/MSG08/OwnRiskNewCreditCover/OwnRiskAmt"/>
                </xsl:element>
                <xsl:element name="FA_OWN_RISK_PERC">
                    <xsl:value-of select="/MSG08/OwnRiskNewCreditCover/OwnRiskPerc"/>
                </xsl:element>
                <xsl:element name="FA_REASON">
                    <xsl:value-of select="/MSG08/NewCreditCoverDetails/Reason"/>
                </xsl:element>
                <xsl:element name="FA_REMI_CCY1"/>
                <xsl:element name="FA_REMI_CCY2"/>
                <xsl:element name="FA_REMI_CCY3"/>
                <xsl:element name="FA_REPL_CODE">
                    <xsl:value-of select="/MSG08/NewCreditCoverDetails/Response"/>
                </xsl:element>
                <xsl:element name="FA_REQ_CODE"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG08/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG08/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_TEMP2"/>
                <xsl:element name="FA_TEMP3"/>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="FA_TEMP_AMT10"/>
                <xsl:element name="FA_TEMP_AMT11"/>
                <xsl:element name="FA_TEMP_AMT12"/>
                <xsl:element name="FA_TEMP_DT1">
                    <xsl:value-of select="/MSG08/CurrentCreditCoverDetails/CurrentExpiryDate"/>
                </xsl:element>
                <xsl:element name="FA_TEMP_IF_MSG"/>
                <xsl:element name="LM_CRED_LMT"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OVER_OUT"/>
                <xsl:element name="LM_RSV_LINK"/>
                <xsl:element name="TEMP_DATE1"/>
                <xsl:element name="TEMP_DATE4"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG08/RevisionNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
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
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
