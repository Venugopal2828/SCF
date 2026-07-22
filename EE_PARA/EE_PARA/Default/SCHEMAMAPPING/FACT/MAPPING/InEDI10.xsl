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
                <xsl:element name="CLERK_ID">
                    <xsl:value-of select="/MSG10/MsgInfo/CreatedBy"/>
                </xsl:element>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BA_LINK"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG10/Buyer/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG10/Buyer/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/MSG10/OrigDocCurrency"/>
                </xsl:element>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG10/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG10/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG10/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG10/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_MSG_DT">
                    <xsl:value-of select="/MSG10/MsgDate"/>
                </xsl:element>
                <xsl:element name="FA_MSG_FUNC">
                    <xsl:value-of select="/MSG10/MsgFunction"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG10/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG10/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="EFIncAjustCancel">
                    <xsl:attribute name="isDO">T</xsl:attribute>
                    <xsl:attribute name="Type">A</xsl:attribute>
                    <xsl:element name="FA_DOC_NO">
                        <xsl:value-of select="/MSG10/OrigDocNr"/>
                    </xsl:element>
                    <xsl:element name="FA_DOC_REF"/>
                    <xsl:element name="FA_DOC_DUE_DT">
                        <xsl:value-of select="/MSG10/AdjustDetails/InvDueDate"/>
                    </xsl:element>
                    <xsl:element name="FA_DOC_DT">
                        <xsl:value-of select="/MSG10/OrigDocDate"/>
                    </xsl:element>
                    <xsl:element name="FA_DOC_CCY">
                        <xsl:value-of select="/MSG10/OrigDocCurrency"/>
                    </xsl:element>
                    <xsl:element name="FA_DOC_BAL"/>
                    <xsl:element name="FA_DOC_AMT"/>
                    <xsl:element name="FA_DOC_STATUS"/>
                    <xsl:element name="FA_DOC_TYPE">
                        <xsl:value-of select="/MSG10/DocType"/>
                    </xsl:element>
                    <xsl:element name="FA_DOC_VAL_DT">
                        <xsl:value-of select="/MSG10/AdjustDetails/InvValueDate"/>
                    </xsl:element>
                    <xsl:element name="FA_FIN_RET_BAL"/>
                    <xsl:element name="FA_INV_LOAN_BAL"/>
                    <xsl:element name="FA_PMT_COND">
                        <xsl:value-of select="/MSG10/AdjustDetails/PmtCondition"/>
                    </xsl:element>
                    <xsl:element name="FA_PMT_TERMS">
                        <xsl:value-of select="/MSG10/AdjustDetails/NetPmtTerms"/>
                    </xsl:element>
                    <xsl:element name="FA_ORDER_NO">
                        <xsl:value-of select="/MSG10/AdjustDetails/OrderNrRef"/>
                    </xsl:element>
                    <xsl:element name="FA_TEMP_AMT16"/>
                    <xsl:element name="FA_TRF_DT"/>
                    <xsl:element name="FA_BA_FLG"/>
                    <xsl:element name="FA_CRN_INV_LINK_NO"/>
                    <xsl:element name="FA_CRN_AMT_SUM"/>
                    <xsl:element name="FA_SND_DISC_RT">
                        <xsl:value-of select="/MSG10/AdjustDetails/Discount2Perc"/>
                    </xsl:element>
                    <xsl:element name="FA_PRM_DISC_DAYS">
                        <xsl:value-of select="/MSG10/AdjustDetails/Discount1Days"/>
                    </xsl:element>
                    <xsl:element name="FA_PRM_DISC_RT">
                        <xsl:value-of select="/MSG10/AdjustDetails/Discount1Perc"/>
                    </xsl:element>
                    <xsl:element name="FA_SND_DISC_DAYS">
                        <xsl:value-of select="/MSG10/AdjustDetails/Discount2Days"/>
                    </xsl:element>
                    <xsl:element name="FA_INV_LINK_REF"/>
                    <xsl:element name="FA_MSG_TEXT"/>
                    <xsl:element name="FA_MSG_FUNC"/>
                    <xsl:element name="TEMP_AMT13"/>
                    <xsl:element name="FA_TEMP3"/>
                    <xsl:element name="TEMP_AMT18"/>
                    <xsl:element name="FA_TEMP5"/>
                    <xsl:element name="FA_TEMP4"/>
                    <xsl:element name="FA_MSG_TEXT02">
                        <xsl:value-of select="/MSG10/MsgText"/>
                    </xsl:element>
                </xsl:element>
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
