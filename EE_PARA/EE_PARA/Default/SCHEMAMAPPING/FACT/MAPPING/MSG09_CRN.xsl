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
        <xsl:element name="MSG09">
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
            <xsl:element name="InvBatchNr">
                <xsl:value-of select="/root/domData/FA_TRF_REF"/>
            </xsl:element>
            <xsl:element name="InvBatchDate">
                <xsl:value-of select="/root/domData/FA_TRF_DT"/>
            </xsl:element>
            <xsl:element name="InvBatchCurrency">
                <xsl:value-of select="/root/domData/CreNote/FA_DOC_CCY"/>
            </xsl:element>
            <xsl:element name="TotAmtInvoices">
                <xsl:value-of select="/root/domData/FA_TTL_CRN_AMT"/>
            </xsl:element>
            <xsl:element name="TotAmtCreditNotes">
                <xsl:value-of select="/root/domData/FA_TTL_CRN_AMT"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:apply-templates mode="m0" select="/root/domData/CreNote"/>
            <xsl:element name="ControlTot">
                <xsl:element name="TotNrInvoices">
                    <xsl:value-of select="/root/domData/FA_TTL_CRN_NO"/>
                </xsl:element>
                <xsl:element name="TotNrCreditNotes">
                    <xsl:value-of select="/root/domData/FA_TTL_CRN_NO"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/CreNote/FA_MSG_TEXT"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/CreNote" mode="m0">
        <InvCreditNoteDetails>
            <xsl:element name="BuyerNr">
                <xsl:value-of select="/root/domData/FA_BUYER_EDI_ID"/>
            </xsl:element>
            <xsl:element name="BuyerName">
                <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
            </xsl:element>
            <xsl:element name="DocType">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_DOC_TYPE)"/>
            </xsl:element>
            <xsl:element name="DocNr">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="DocDate">
                <xsl:value-of select="FA_DOC_DT"/>
            </xsl:element>
            <xsl:element name="DocAmt">
                <xsl:value-of select="FA_DOC_AMT"/>
            </xsl:element>
            <xsl:element name="DocDueDate">
                <xsl:value-of select="FA_DOC_DUE_DT"/>
            </xsl:element>
            <xsl:element name="DocValueDate">
                <xsl:value-of select="FA_DOC_VAL_DT"/>
            </xsl:element>
            <xsl:element name="NetPmtTerms">
                <xsl:value-of select="FA_PMT_TERMS"/>
            </xsl:element>
            <xsl:element name="Discount1Days">
                <xsl:value-of select="FA_PRM_DISC_DAYS"/>
            </xsl:element>
            <xsl:element name="Discount1Perc">
                <xsl:value-of select="FA_PRM_DISC_RT"/>
            </xsl:element>
            <xsl:element name="Discount2Days">
                <xsl:value-of select="FA_SND_DISC_DAYS"/>
            </xsl:element>
            <xsl:element name="Discount2Perc">
                <xsl:value-of select="FA_SND_DISC_RT"/>
            </xsl:element>
            <xsl:element name="PmtCondition">
                <xsl:value-of select="ee:getInterpreter(FA_PMT_COND)"/>
            </xsl:element>
            <xsl:element name="OrderNrRef">
                <xsl:value-of select="FA_ORDER_NO"/>
            </xsl:element>
            <xsl:element name="InvRefNr">
                <xsl:value-of select="FA_INV_LINK_REF"/>
            </xsl:element>
        </InvCreditNoteDetails>
    </xsl:template>
</xsl:stylesheet>
