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
        <xsl:element name="MSG11">
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
            <xsl:element name="PmtBatchNr">
                <xsl:value-of select="/root/domData/FA_PMT_REF"/>
            </xsl:element>
            <xsl:element name="PmtBatchDate">
                <xsl:value-of select="/root/domData/FA_PMT_DT"/>
            </xsl:element>
            <xsl:element name="PmtBatchCurrency">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_PMT_CCY)"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:apply-templates mode="m0" select="/root/domData/PaymentReg"/>
            <xsl:element name="ControlTot">
                <xsl:element name="TotAmtPaid">
                    <xsl:value-of select="/root/domData/FA_PMT_AMT_SUM"/>
                </xsl:element>
                <xsl:element name="TotAmtBankChargeDeduc">
                    <xsl:value-of select="/root/domData/FA_TTL_AMT_DEDUCT"/>
                </xsl:element>
                <xsl:element name="TotAmtCleared">
                    <xsl:value-of select="/root/domData/FA_TTL_AMT_CLEARED"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT02"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/root/domData/PaymentReg" mode="m0">
        <PmtDetails>
            <xsl:element name="BuyerNr">
                <xsl:value-of select="/root/domData/FA_BUYER_EDI_ID"/>
            </xsl:element>
            <xsl:element name="BuyerName">
                <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
            </xsl:element>
            <xsl:element name="DocPaid">
                <xsl:value-of select="ee:getInterpreter(FA_DOC_TYPE)"/>
            </xsl:element>
            <xsl:element name="InvCreditNoteNr">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="InvCreditNoteDate">
                <xsl:value-of select="FA_DOC_DT"/>
            </xsl:element>
            <xsl:element name="InvCreditNoteAmt">
                <xsl:value-of select="FA_DOC_AMT"/>
            </xsl:element>
            <xsl:element name="PmtAmt">
                <xsl:value-of select="FA_PMT_AMT"/>
            </xsl:element>
            <xsl:element name="BankChargeAmt">
                <xsl:value-of select="FA_BK_CHG_AMT"/>
            </xsl:element>
            <xsl:element name="DeducAmt">
                <xsl:value-of select="FA_DEDUCT_AMT"/>
            </xsl:element>
            <xsl:element name="PmtType">
                <xsl:value-of select="ee:getInterpreter(FA_PMT_CLEAR_TYPE)"/>
            </xsl:element>
            <xsl:element name="PmtDate">
                <xsl:value-of select="/root/domData/FA_PMT_DT"/>
            </xsl:element>
            <xsl:element name="PmtValueDate">
                <xsl:value-of select="FA_PMT_VAL_DT"/>
            </xsl:element>
        </PmtDetails>
    </xsl:template>
</xsl:stylesheet>
