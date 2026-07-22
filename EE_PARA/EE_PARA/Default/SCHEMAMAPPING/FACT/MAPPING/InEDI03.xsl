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
                <xsl:element name="FA_APPL_LMT_AMT"/>
                <xsl:element name="FA_APPL_LMT_CCY"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_AC_NO">
                    <xsl:value-of select="/MSG03/BankDetailsBuyer/AccountNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_BK_BRCH">
                    <xsl:value-of select="/MSG03/BankDetailsBuyer/BranchName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_BK_NM">
                    <xsl:value-of select="/MSG03/BankDetailsBuyer/BankName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CITY">
                    <xsl:value-of select="/MSG03/Buyer/City"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CNTC_FLG"/>
                <xsl:element name="FA_BUYER_CNTY">
                    <xsl:value-of select="/MSG03/Buyer/Country"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_COMP_REG">
                    <xsl:value-of select="/MSG03/Buyer/BuyerCompanyRegNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_ADDR"/>
                <xsl:element name="FA_BUYER_CONT_FAX">
                    <xsl:value-of select="/MSG03/Buyer/Fax"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_MAIL">
                    <xsl:value-of select="/MSG03/Buyer/Email"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_NM">
                    <xsl:value-of select="/MSG03/Buyer/ContactName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_TEL">
                    <xsl:value-of select="/MSG03/Buyer/Telephone"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG03/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG03/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_NM2">
                    <xsl:value-of select="/MSG03/Buyer/NameCont"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_POSTBOX">
                    <xsl:value-of select="/MSG03/Buyer/Street"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_POSTCODE">
                    <xsl:value-of select="/MSG03/Buyer/Postcode"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_PROV">
                    <xsl:value-of select="/MSG03/Buyer/State"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_RESP_AGNT">
                    <xsl:value-of select="/MSG03/Buyer/ResponseAgency"/>
                </xsl:element>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG03/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG03/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_GOODS_NM"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG03/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG03/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_LMT_ASS_AMT">
                    <xsl:value-of select="/MSG03/PrelCreditAssessDetails/AmtCreditAssessReq"/>
                </xsl:element>
                <xsl:element name="FA_LMT_ASS_CCY">
                    <xsl:value-of select="/MSG03/PrelCreditAssessDetails/Currency"/>
                </xsl:element>
                <xsl:element name="FA_LMT_LONG_DAYS">
                    <xsl:value-of select="/MSG03/PrelCreditAssessDetails/LongCreditPeriodDays"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/MSG03/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_PCA_REF">
                    <xsl:value-of select="/MSG03/OrigReqNr"/>
                </xsl:element>
                <xsl:element name="FA_PCR_REF"/>
                <xsl:element name="FA_PMT_COND"/>
                <xsl:element name="FA_REASON">
                    <xsl:value-of select="/MSG03/PrelCreditAssessDetails/Reason"/>
                </xsl:element>
                <xsl:element name="FA_REPL_DT">
                    <xsl:value-of select="/MSG03/ReplyDate"/>
                </xsl:element>
                <xsl:element name="FA_REPL_REF">
                    <xsl:value-of select="/MSG03/PrelCreditAssessNr"/>
                </xsl:element>
                <xsl:element name="FA_REQ_DT"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG03/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG03/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_TEMP1"/>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="LM_CRED_LMT"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OVER_OUT"/>
                <xsl:element name="TEMP_CCY"/>
                <xsl:element name="TEMP_DATE1"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG03/PrelCreditAssessNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
