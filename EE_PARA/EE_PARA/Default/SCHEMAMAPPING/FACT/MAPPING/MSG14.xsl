<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet AutoGen-Parameter-Version="1.0" exclude-result-prefixes="xalan"
    extension-element-prefixes="base ee cs" version="1.0" xmlns:Doc="MsgInfo"
    xmlns:base="base" xmlns:cs="cs" xmlns:ee="ee"
    xmlns:xalan="http://xml.apache.org/xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
                <xsl:element name="ACC_TRAN_ID"/>
                <xsl:element name="BA_UNIT_CODE"/>
                <xsl:element name="CLERK_ID">
                    <xsl:value-of select="/MSG14/MsgInfo/CreatedBy"/>
                </xsl:element>
                <xsl:element name="C_BU_ID"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="FA_ACTION_TXT">
                    <xsl:value-of select="/MSG14/ActionText"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG14/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG14/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_CNTR_DOC_NO"/>
                <xsl:element name="FA_CUST_TYPE2"/>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/MSG14/DisputeCurrency"/>
                </xsl:element>
                <xsl:element name="FA_DOC_TYPE"/>
                <xsl:element name="FA_DSP_DT">
                    <xsl:value-of select="/MSG14/MsgDate"/>
                </xsl:element>
                <xsl:element name="FA_DSP_NO">
                    <xsl:value-of select="/MSG14/DisputeNr"/>
                </xsl:element>
                <xsl:element name="FA_DSP_REF"/>
                <xsl:element name="FA_DSP_RSN_TXT">
                    <xsl:value-of select="/MSG14/DisputeReasonText"/>
                </xsl:element>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG14/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG14/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG14/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG14/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_LMT_CCY"/>
                <xsl:element name="FA_MSG_TEXT"/>
                <xsl:element name="FA_NOTIFY_BY"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG14/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG14/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_SEND_MSG_FLG"/>
                <xsl:element name="TRX_DT"/>
                <xsl:apply-templates mode="m0" select="/MSG14/DisputeDetails"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/MSG14/DisputeDetails" mode="m0">
        <DisputeReg>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="DocNr"/>
            </xsl:element>
            <xsl:element name="FA_DOC_REF"/>
            <xsl:element name="FA_DOC_STATUS"/>
            <xsl:element name="FA_DOC_DT">
                <xsl:value-of select="DocDate"/>
            </xsl:element>
            <xsl:element name="FA_NOTIFY_BY"/>
            <xsl:element name="FA_NOTIFY_BY_NM">
                <xsl:value-of select="NotifyingParty"/>
            </xsl:element>
            <xsl:element name="FA_DSP_RSN_CODE">
                <xsl:value-of select="DisputeReason"/>
            </xsl:element>
            <xsl:element name="FA_DSP_RSN_TXT">
                <xsl:value-of select="/MSG14/DisputeReasonText"/>
            </xsl:element>
            <xsl:element name="FA_ACTION_CODE">
                <xsl:value-of select="Action"/>
            </xsl:element>
            <xsl:element name="FA_TRF_DT">
                <xsl:value-of select="/MSG14/DateOriginDispute"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DUE_DT"/>
            <xsl:element name="FA_DOC_CCY">
                <xsl:value-of select="/MSG14/DisputeCurrency"/>
            </xsl:element>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="DocAmt"/>
            </xsl:element>
            <xsl:element name="FA_DOC_TYPE">
                <xsl:value-of select="DocType"/>
            </xsl:element>
            <xsl:element name="FA_DSP_AMT">
                <xsl:value-of select="DisputeAmt"/>
            </xsl:element>
            <xsl:element name="FA_INV_LOAN_BAL"/>
            <xsl:element name="FA_PMT_TYPE"/>
            <xsl:element name="FA_BUSI_TYPE"/>
            <xsl:element name="FA_DSP_NO"/>
            <xsl:element name="FA_MSG_TEXT02"/>
        </DisputeReg>
    </xsl:template>
</xsl:stylesheet>
