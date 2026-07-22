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
                <xsl:element name="FA_AGM_SIGN_FLG"/>
                <xsl:element name="FA_AGM_VAL_DT">
                    <xsl:value-of select="/MSG01/FactAgreemSigned"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_CHG_BC_AMT">
                    <xsl:value-of select="/MSG01/SellerDetails/ChargeBackAmt"/>
                </xsl:element>
                <xsl:element name="FA_CHG_BC_CCY">
                    <xsl:value-of select="/MSG01/SellerDetails/ChargeBackCurrency"/>
                </xsl:element>
                <xsl:element name="FA_CHG_BC_PERC">
                    <xsl:value-of select="/MSG01/SellerDetails/ChargeBackPerc"/>
                </xsl:element>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG01/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG01/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_FACTOR_CNTY"/>
                <xsl:element name="FA_GOODS_CODE"/>
                <xsl:element name="FA_GOODS_DES">
                    <xsl:value-of select="/MSG01/SellerDetails/BusinessProduct"/>
                </xsl:element>
                <xsl:element name="FA_GOODS_NM"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG01/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG01/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_INV_CCY1">
                    <xsl:value-of select="/MSG01/SellerDetails/InvCurrency1"/>
                </xsl:element>
                <xsl:element name="FA_INV_CCY2">
                    <xsl:value-of select="/MSG01/SellerDetails/InvCurrency2"/>
                </xsl:element>
                <xsl:element name="FA_INV_CCY3">
                    <xsl:value-of select="/MSG01/SellerDetails/InvCurrency3"/>
                </xsl:element>
                <xsl:element name="FA_INV_CCY4">
                    <xsl:value-of select="/MSG01/SellerDetails/InvCurrency4"/>
                </xsl:element>
                <xsl:element name="FA_INV_CCY5">
                    <xsl:value-of select="/MSG01/SellerDetails/InvCurrency5"/>
                </xsl:element>
                <xsl:element name="FA_IS_FCI"/>
                <xsl:element name="FA_MSG01_FUNC">
                    <xsl:value-of select="/MSG01/MsgFunction"/>
                </xsl:element>
                <xsl:element name="FA_MSG_DT">
                    <xsl:value-of select="/MSG01/MsgDate"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT">
                    <xsl:value-of select="/MSG01/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_NORMAL_TERMS">
                    <xsl:value-of select="/MSG01/SellerDetails/NormDeliveryTerms"/>
                </xsl:element>
                <xsl:element name="FA_NO_OF_BUYERS">
                    <xsl:value-of select="/MSG01/SellerDetails/ExpNrBuyers"/>
                </xsl:element>
                <xsl:element name="FA_NO_OF_CRN">
                    <xsl:value-of select="/MSG01/SellerDetails/ExpNrCreditNotes"/>
                </xsl:element>
                <xsl:element name="FA_NO_OF_INV">
                    <xsl:value-of select="/MSG01/SellerDetails/ExpNrInvoices"/>
                </xsl:element>
                <xsl:element name="FA_OA_TNOV">
                    <xsl:value-of select="/MSG01/SellerDetails/ExpTurnover"/>
                </xsl:element>
                <xsl:element name="FA_OA_TNOV_CCY"/>
                <xsl:element name="FA_OTHER_IF">
                    <xsl:value-of select="/MSG01/SellerDetails/OtherFactors"/>
                </xsl:element>
                <xsl:element name="FA_OTHER_TNOV">
                    <xsl:value-of select="/MSG01/SellerDetails/ExpOtherTurnover"/>
                </xsl:element>
                <xsl:element name="FA_OTHER_TNOV_CCY"/>
                <xsl:element name="FA_PMT_GRC_DAY">
                    <xsl:value-of select="/MSG01/SellerDetails/GracePeriod"/>
                </xsl:element>
                <xsl:element name="FA_PMT_TERMS">
                    <xsl:value-of select="/MSG01/SellerDetails/NetPmtTerms"/>
                </xsl:element>
                <xsl:element name="FA_PRM_DISC_DAYS">
                    <xsl:value-of select="/MSG01/SellerDetails/Discount1Days"/>
                </xsl:element>
                <xsl:element name="FA_PRM_DISC_RT">
                    <xsl:value-of select="/MSG01/SellerDetails/Discount1Perc"/>
                </xsl:element>
                <xsl:element name="FA_SEL_AC_NO">
                    <xsl:value-of select="/MSG01/BankDetailsSeller/AccountNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ADDR">
                    <xsl:value-of select="/MSG01/Seller/Street"/>
                </xsl:element>
                <xsl:element name="FA_SEL_AGENT_ID"/>
                <xsl:element name="FA_SEL_AGENT_RIGHT"/>
                <xsl:element name="FA_SEL_BK_BR">
                    <xsl:value-of select="/MSG01/BankDetailsSeller/BranchName"/>
                </xsl:element>
                <xsl:element name="FA_SEL_BK_NM">
                    <xsl:value-of select="/MSG01/BankDetailsSeller/BankName"/>
                </xsl:element>
                <xsl:element name="FA_SEL_CITY">
                    <xsl:value-of select="/MSG01/Seller/City"/>
                </xsl:element>
                <xsl:element name="FA_SEL_CNTY">
                    <xsl:value-of select="/MSG01/Seller/Country"/>
                </xsl:element>
                <xsl:element name="FA_SEL_COMP_REG">
                    <xsl:value-of select="/MSG01/Seller/SellerCompanyRegNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG01/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG01/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM2">
                    <xsl:value-of select="/MSG01/Seller/NameCont"/>
                </xsl:element>
                <xsl:element name="FA_SEL_POST_CODE">
                    <xsl:value-of select="/MSG01/Seller/Postcode"/>
                </xsl:element>
                <xsl:element name="FA_SEL_PROV">
                    <xsl:value-of select="/MSG01/Seller/State"/>
                </xsl:element>
                <xsl:element name="FA_SEL_RESP_AGNT">
                    <xsl:value-of select="/MSG01/Seller/ResponseAgency"/>
                </xsl:element>
                <xsl:element name="FA_SERVICE_REQ">
                    <xsl:value-of select="/MSG01/SellerDetails/ServiceRequired"/>
                </xsl:element>
                <xsl:element name="FA_SND_DISC_DAYS">
                    <xsl:value-of select="/MSG01/SellerDetails/Discount2Days"/>
                </xsl:element>
                <xsl:element name="FA_SND_DISC_RT">
                    <xsl:value-of select="/MSG01/SellerDetails/Discount2Perc"/>
                </xsl:element>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="FA_TTL_SEL_TNOV">
                    <xsl:value-of select="/MSG01/SellerDetails/ExpTotSellerTurnover"/>
                </xsl:element>
                <xsl:element name="FA_TTL_SEL_TNOVCCY"/>
                <xsl:element name="TEMP_CHAR2"/>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
                <xsl:element name="EXCH_RT1"/>
                <xsl:element name="EXCH_RT2"/>
                <xsl:element name="EXCH_RT3"/>
                <xsl:element name="FA_APPL_INFO"/>
                <xsl:element name="FA_APPL_LMT_AMT"/>
                <xsl:element name="FA_APPL_LMT_CCY"/>
                <xsl:element name="FA_BUYER_AC_NO"/>
                <xsl:element name="FA_BUYER_BK_BRCH"/>
                <xsl:element name="FA_BUYER_BK_NM"/>
                <xsl:element name="FA_BUYER_CITY"/>
                <xsl:element name="FA_BUYER_CNTC_FLG"/>
                <xsl:element name="FA_BUYER_CNTY"/>
                <xsl:element name="FA_BUYER_CNTY1"/>
                <xsl:element name="FA_BUYER_COMP_REG"/>
                <xsl:element name="FA_BUYER_CONT_ADDR"/>
                <xsl:element name="FA_BUYER_CONT_FAX"/>
                <xsl:element name="FA_BUYER_CONT_MAIL"/>
                <xsl:element name="FA_BUYER_CONT_NM"/>
                <xsl:element name="FA_BUYER_CONT_TEL"/>
                <xsl:element name="FA_BUYER_EDI_ID"/>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM"/>
                <xsl:element name="FA_BUYER_NM2"/>
                <xsl:element name="FA_BUYER_POSTBOX"/>
                <xsl:element name="FA_BUYER_POSTCODE"/>
                <xsl:element name="FA_BUYER_PROV"/>
                <xsl:element name="FA_BUYER_RESP_AGNT"/>
                <xsl:element name="FA_MSG_FUNC"/>
                <xsl:element name="FA_MSG_TEXT02"/>
                <xsl:element name="FA_PCA_REF"/>
                <xsl:element name="FA_PMT_COND"/>
                <xsl:element name="FA_PMT_TERMS_FLG"/>
                <xsl:element name="FA_REQ_DT"/>
                <xsl:element name="FA_SEL_P_FLG"/>
                <xsl:element name="FA_TEMP_IF_LMT_DUE_DT"/>
                <xsl:element name="FA_TEMP_MSG_FUNC"/>
                <xsl:element name="LM_CRED_LMT"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OVER_OUT"/>
                <xsl:element name="OWNER_BR_NM"/>
                <xsl:element name="TEMP_AMT5"/>
                <xsl:element name="TEMP_CHAR1"/>
                <xsl:element name="TEMP_CHAR21"/>
                <xsl:element name="X750_72"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
