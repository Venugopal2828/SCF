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
                <xsl:element name="COMMON_PRDT_CODE"/>
                <xsl:element name="C_FUNC_NAME"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BA_LINK"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG12/PmtDetails/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG12/PmtDetails/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_COLL_AC_NO"/>
                <xsl:element name="FA_CUST_TYPE2"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG12/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG12/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG12/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG12/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_INDR_PMT_FLG"/>
                <xsl:element name="FA_LMT_AMT"/>
                <xsl:element name="FA_LMT_APPRV"/>
                <xsl:element name="FA_LMT_CCY"/>
                <xsl:element name="FA_LMT_TYPE"/>
                <xsl:element name="FA_LOAN_AC_NO"/>
                <xsl:element name="FA_LOAN_INT_ACC_NO"/>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/MSG12/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_PMT_AC_NO"/>
                <xsl:element name="FA_PMT_AMT_SUM">
                    <xsl:value-of select="/MSG12/ControlTot/TotAmtPaid"/>
                </xsl:element>
                <xsl:element name="FA_PMT_CCY">
                    <xsl:value-of select="/MSG12/PmtBatchCurrency"/>
                </xsl:element>
                <xsl:element name="FA_PMT_DT">
                    <xsl:value-of select="/MSG12/PmtBatchDate"/>
                </xsl:element>
                <xsl:element name="FA_PMT_REF"/>
                <xsl:element name="FA_PMT_TYPE"/>
                <xsl:element name="FA_PMT_VAL_DT"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG12/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG12/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_TEMP3"/>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="FA_TEMP7"/>
                <xsl:element name="FA_TEMP_AMT14"/>
                <xsl:element name="FA_TTL_AMT_CLEARED">
                    <xsl:value-of select="/MSG12/ControlTot/TotAmtCleared"/>
                </xsl:element>
                <xsl:element name="FA_TTL_AMT_DEDUCT">
                    <xsl:value-of select="/MSG12/ControlTot/TotAmtBankChargeDeduc"/>
                </xsl:element>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG12/PmtBatchNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
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
                <xsl:apply-templates mode="m0" select="/MSG12/PmtDetails"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/MSG12/PmtDetails" mode="m0">
        <PaymentReg>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_DOC_STATUS"/>
            <xsl:element name="FA_DOC_REF"/>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="InvCreditNoteNr"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DT">
                <xsl:value-of select="InvCreditNoteDate"/>
            </xsl:element>
            <xsl:element name="FA_DOC_CCY"/>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="InvCreditNoteAmt"/>
            </xsl:element>
            <xsl:element name="FA_DOC_BAL"/>
            <xsl:element name="FA_DOC_TYPE">
                <xsl:value-of select="DocPaid"/>
            </xsl:element>
            <xsl:element name="FA_DEDUCT_AMT">
                <xsl:value-of select="DeducAmt"/>
            </xsl:element>
            <xsl:element name="FA_TRF_DT"/>
            <xsl:element name="FA_CRN_INV_LINK_NO"/>
            <xsl:element name="FA_PMT_DT">
                <xsl:value-of select="PmtDate"/>
            </xsl:element>
            <xsl:element name="FA_BK_CHG_AMT">
                <xsl:value-of select="BankChargeAmt"/>
            </xsl:element>
            <xsl:element name="FA_PMT_CLEAR_TYPE">
                <xsl:value-of select="PmtType"/>
            </xsl:element>
            <xsl:element name="FA_PMT_AMT">
                <xsl:value-of select="PmtAmt"/>
            </xsl:element>
            <xsl:element name="FA_INV_CLEAR_AMT"/>
            <xsl:element name="FA_FINAL_PMT_FLG"/>
            <xsl:element name="FA_LAST_PINT_DT"/>
            <xsl:element name="FA_TEMP_AMT8"/>
            <xsl:element name="FA_TEMP_INV_BA"/>
            <xsl:element name="FA_TEMP_CRN_BA"/>
            <xsl:element name="FA_PMT_VAL_DT">
                <xsl:value-of select="PmtValueDate"/>
            </xsl:element>
            <xsl:element name="FA_BA_FLG"/>
            <xsl:element name="FA_INV_LINK_REF"/>
            <xsl:element name="FA_DSP_STATUS"/>
            <xsl:element name="FA_CRN_BAL"/>
            <xsl:element name="FA_DOC_DUE_DT"/>
        </PaymentReg>
    </xsl:template>
</xsl:stylesheet>
