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
                <xsl:element name="FA_AGM_SIGN_FLG"/>
                <xsl:element name="FA_AGM_VAL_DT"/>
                <xsl:element name="FA_APPL_INFO"/>
                <xsl:element name="FA_APPL_LMT_AMT">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/AmtCreditAssessReq"/>
                </xsl:element>
                <xsl:element name="FA_APPL_LMT_CCY">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/Currency"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_AC_NO">
                    <xsl:value-of select="/MSG02/BankDetailsBuyer/AccountNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_BK_BRCH">
                    <xsl:value-of select="/MSG02/BankDetailsBuyer/BranchName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_BK_NM">
                    <xsl:value-of select="/MSG02/BankDetailsBuyer/BankName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CITY">
                    <xsl:value-of select="/MSG02/Buyer/City"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CNTC_FLG">
                    <xsl:value-of select="/MSG02/Buyer/DirectContact"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CNTY">
                    <xsl:value-of select="/MSG02/Buyer/Country"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CNTY1"/>
                <xsl:element name="FA_BUYER_COMP_REG">
                    <xsl:value-of select="/MSG02/Buyer/BuyerCompanyRegNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_ADDR"/>
                <xsl:element name="FA_BUYER_CONT_FAX">
                    <xsl:value-of select="/MSG02/Buyer/Fax"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_MAIL">
                    <xsl:value-of select="/MSG02/Buyer/Email"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_NM">
                    <xsl:value-of select="/MSG02/Buyer/ContactName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_CONT_TEL">
                    <xsl:value-of select="/MSG02/Buyer/Telephone"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG02/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG02/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_NM2">
                    <xsl:value-of select="/MSG02/Buyer/NameCont"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_POSTBOX">
                    <xsl:value-of select="/MSG02/Buyer/Street"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_POSTCODE">
                    <xsl:value-of select="/MSG02/Buyer/Postcode"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_PROV">
                    <xsl:value-of select="/MSG02/Buyer/State"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_RESP_AGNT">
                    <xsl:value-of select="/MSG02/Buyer/ResponseAgency"/>
                </xsl:element>
                <xsl:element name="FA_CHG_BC_AMT"/>
                <xsl:element name="FA_CHG_BC_CCY"/>
                <xsl:element name="FA_CHG_BC_PERC"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG02/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG02/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_GOODS_CODE"/>
                <xsl:element name="FA_GOODS_DES"/>
                <xsl:element name="FA_GOODS_NM"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG02/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG02/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_INV_CCY1"/>
                <xsl:element name="FA_INV_CCY2"/>
                <xsl:element name="FA_INV_CCY3"/>
                <xsl:element name="FA_INV_CCY4"/>
                <xsl:element name="FA_INV_CCY5"/>
                <xsl:element name="FA_IS_FCI"/>
                <xsl:element name="FA_MSG01_FUNC">
                    <xsl:value-of select="/MSG02/MsgFunction"/>
                </xsl:element>
                <xsl:element name="FA_MSG_FUNC"/>
                <xsl:element name="FA_MSG_TEXT"/>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/MSG02/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_NORMAL_TERMS"/>
                <xsl:element name="FA_NO_OF_BUYERS"/>
                <xsl:element name="FA_NO_OF_CRN"/>
                <xsl:element name="FA_NO_OF_INV"/>
                <xsl:element name="FA_OA_TNOV"/>
                <xsl:element name="FA_OA_TNOV_CCY"/>
                <xsl:element name="FA_OTHER_IF"/>
                <xsl:element name="FA_OTHER_TNOV"/>
                <xsl:element name="FA_OTHER_TNOV_CCY"/>
                <xsl:element name="FA_PCA_REF"/>
                <xsl:element name="FA_PMT_COND"/>
                <xsl:element name="FA_PMT_GRC_DAY"/>
                <xsl:element name="FA_PMT_TERMS">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/NetPmtTerms"/>
                </xsl:element>
                <xsl:element name="FA_PMT_TERMS_FLG"/>
                <xsl:element name="FA_PRM_DISC_DAYS">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/Discount1Days"/>
                </xsl:element>
                <xsl:element name="FA_PRM_DISC_RT">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/Discount1Perc"/>
                </xsl:element>
                <xsl:element name="FA_REQ_DT">
                    <xsl:value-of select="/MSG02/RequestDate"/>
                </xsl:element>
                <xsl:element name="FA_SEL_AC_NO"/>
                <xsl:element name="FA_SEL_ADDR"/>
                <xsl:element name="FA_SEL_AGENT_ID"/>
                <xsl:element name="FA_SEL_AGENT_RIGHT"/>
                <xsl:element name="FA_SEL_BK_BR"/>
                <xsl:element name="FA_SEL_BK_NM"/>
                <xsl:element name="FA_SEL_CITY"/>
                <xsl:element name="FA_SEL_CNTY"/>
                <xsl:element name="FA_SEL_COMP_REG"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG02/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG02/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM2"/>
                <xsl:element name="FA_SEL_POST_CODE"/>
                <xsl:element name="FA_SEL_PROV"/>
                <xsl:element name="FA_SEL_P_FLG"/>
                <xsl:element name="FA_SEL_RESP_AGNT"/>
                <xsl:element name="FA_SERVICE_REQ"/>
                <xsl:element name="FA_SND_DISC_DAYS">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/Discount2Days"/>
                </xsl:element>
                <xsl:element name="FA_SND_DISC_RT">
                    <xsl:value-of select="/MSG02/PrelCreditAssessDetails/Discount2Perc"/>
                </xsl:element>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="FA_TEMP_IF_LMT_DUE_DT"/>
                <xsl:element name="FA_TEMP_MSG_FUNC"/>
                <xsl:element name="FA_TTL_SEL_TNOV"/>
                <xsl:element name="FA_TTL_SEL_TNOVCCY"/>
                <xsl:element name="LM_CRED_LMT"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OVER_OUT"/>
                <xsl:element name="OWNER_BR_NM"/>
                <xsl:element name="TEMP_AMT5"/>
                <xsl:element name="TEMP_CHAR1"/>
                <xsl:element name="TEMP_CHAR2"/>
                <xsl:element name="TEMP_CHAR21"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG02/RequestNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="X750_72"/>
                <xsl:element name="view_1"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
