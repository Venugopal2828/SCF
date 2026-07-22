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
                <xsl:element name="BA_UNIT_CODE"/>
                <xsl:element name="CLERK_ID"/>
                <xsl:element name="C_BU_ID"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="DIARY_DT"/>
                <xsl:element name="DIARY_NARRATIVE"/>
                <xsl:element name="DIARY_RELATED_REF"/>
                <xsl:element name="EXPIRY_DT_CONF"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BA_LINK"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG16/ChargeBackReassDetails/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG16/ChargeBackReassDetails/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_CBK_DT">
                    <xsl:value-of select="/MSG16/MsgDate"/>
                </xsl:element>
                <xsl:element name="FA_CBK_REF"/>
                <xsl:element name="FA_CNTR_DOC_NO"/>
                <xsl:element name="FA_COLL_AC_NO"/>
                <xsl:element name="FA_CUST_TYPE2"/>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/MSG16/DocCurrency"/>
                </xsl:element>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG16/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG16/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_FIN_RETURN_REQ"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG16/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG16/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_LMT_APPRV"/>
                <xsl:element name="FA_LMT_CCY"/>
                <xsl:element name="FA_LMT_TYPE"/>
                <xsl:element name="FA_MSG16_TYPE">
                    <xsl:value-of select="/MSG16/MsgType"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT">
                    <xsl:value-of select="/MSG16/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_PMT_AC_NO"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG16/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG16/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_TEMP3"/>
                <xsl:element name="FA_TEMP7"/>
                <xsl:element name="FA_TTL_CBK_AMT">
                    <xsl:value-of select="/MSG16/ControlTot/TotAmt"/>
                </xsl:element>
                <xsl:element name="GL_BUSI_TYPE"/>
                <xsl:element name="PRODUCT_CODE"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG16/MsgNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
                <xsl:apply-templates mode="m0" select="/MSG16/ChargeBackReassDetails"/>
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
                <xsl:element name="MultiCreditSummary">
                    <xsl:attribute name="isDO">T</xsl:attribute>
                    <xsl:attribute name="Type">A</xsl:attribute>
                    <xsl:element name="C_DO_NAME"/>
                    <xsl:element name="I_SEQ_NUM"/>
                    <xsl:element name="C_UNIT_CODE"/>
                    <xsl:element name="C_MAIN_REF"/>
                    <xsl:element name="C_TRX_REF"/>
                    <xsl:element name="I_EVENT_TIMES"/>
                    <xsl:element name="C_TRX_CCY"/>
                    <xsl:element name="C_MLDC_CCY"/>
                    <xsl:element name="N_MLDC_AMT"/>
                    <xsl:element name="C_MLDC_FROM"/>
                    <xsl:element name="I_MLDC_SEQ"/>
                    <xsl:element name="C_PROTECT_FLAG"/>
                    <xsl:element name="I_MLDC_MERGE_TYPE"/>
                    <xsl:element name="C_MLDC_DESC"/>
                    <xsl:element name="MultiCredit">
                        <xsl:attribute name="isDO">T</xsl:attribute>
                        <xsl:attribute name="Type">A</xsl:attribute>
                        <xsl:element name="C_DO_NAME"/>
                        <xsl:element name="I_SEQ_NUM"/>
                        <xsl:element name="C_MAIN_REF"/>
                        <xsl:element name="C_TRX_REF"/>
                        <xsl:element name="C_UNIT_CODE"/>
                        <xsl:element name="I_EVENT_TIMES"/>
                        <xsl:element name="C_TRX_CCY"/>
                        <xsl:element name="I_MLDC_IDX"/>
                        <xsl:element name="C_MLDC_ANNGN_VAT_NO"/>
                        <xsl:element name="C_MLDC_ASSGN_AC"/>
                        <xsl:element name="C_MLDC_ASSGN_ADD1"/>
                        <xsl:element name="C_MLDC_ASSGN_ADD2"/>
                        <xsl:element name="C_MLDC_ASSGN_ADD3"/>
                        <xsl:element name="C_MLDC_ASSGN_COR_MED"/>
                        <xsl:element name="C_MLDC_ASSGN_EMAIL_ADD"/>
                        <xsl:element name="C_MLDC_ASSGN_FAX_NO"/>
                        <xsl:element name="C_MLDC_ASSGN_ID"/>
                        <xsl:element name="C_MLDC_ASSGN_NM"/>
                        <xsl:element name="C_MLDC_CR_AC"/>
                        <xsl:element name="C_MLDC_CR_AC_TYPE"/>
                        <xsl:element name="C_MLDC_CR_BK_AC"/>
                        <xsl:element name="C_MLDC_CR_BK_ADD1"/>
                        <xsl:element name="C_MLDC_CR_BK_ADD2"/>
                        <xsl:element name="C_MLDC_CR_BK_ADD3"/>
                        <xsl:element name="C_MLDC_CR_BK_COR_MED"/>
                        <xsl:element name="C_MLDC_CR_BK_ID"/>
                        <xsl:element name="C_MLDC_CR_BK_NAME"/>
                        <xsl:element name="C_MLDC_CR_BK_SW_ADD"/>
                        <xsl:element name="C_MLDC_CR_BK_SW_TAG"/>
                        <xsl:element name="C_MLDC_CR_BRANCH"/>
                        <xsl:element name="C_MLDC_CR_CCY"/>
                        <xsl:element name="C_MLDC_CR_DEAL"/>
                        <xsl:element name="F_MLDC_CR_RATE"/>
                        <xsl:element name="F_MLDC_DR_BUY_RATE"/>
                        <xsl:element name="D_MLDC_CR_VAL_DATE"/>
                        <xsl:element name="N_MLDC_CR_AMT_CRCCY"/>
                        <xsl:element name="N_MLDC_CR_AMT_TXCCY"/>
                        <xsl:element name="C_MLDC_NOSTRO_AC"/>
                        <xsl:element name="C_MLDC_NOSTRO_AC_CCY"/>
                        <xsl:element name="C_MLDC_PAY_ADV_MSG"/>
                        <xsl:element name="C_MLDC_PAY_COV_MSG"/>
                        <xsl:element name="C_MLDC_SETTLE_METHOD"/>
                        <xsl:element name="C_MLDC_UNPAID_FLAG"/>
                        <xsl:element name="C_MLDC_VOSTRO_AC"/>
                        <xsl:element name="C_MLDC_VOSTRO_AC_CCY"/>
                        <xsl:element name="I_MLDC_SEQ"/>
                        <xsl:element name="C_MLDC_CR_PER"/>
                        <xsl:element name="C_MLDC_FROM"/>
                        <xsl:element name="N_MLDC_CR_CHG_LCCCY"/>
                        <xsl:element name="N_MLDC_EXCH_FAVAMT"/>
                        <xsl:element name="C_MLDC_CCY"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="MultiDebitSummary">
                    <xsl:attribute name="isDO">T</xsl:attribute>
                    <xsl:attribute name="Type">A</xsl:attribute>
                    <xsl:element name="C_DO_NAME"/>
                    <xsl:element name="I_SEQ_NUM"/>
                    <xsl:element name="C_MAIN_REF"/>
                    <xsl:element name="C_TRX_REF"/>
                    <xsl:element name="C_UNIT_CODE"/>
                    <xsl:element name="I_MLDC_SEQ"/>
                    <xsl:element name="I_EVENT_TIMES"/>
                    <xsl:element name="C_TRX_CCY"/>
                    <xsl:element name="C_MLDC_CCY"/>
                    <xsl:element name="N_MLDC_AMT"/>
                    <xsl:element name="C_MLDC_FROM"/>
                    <xsl:element name="C_PROTECT_FLAG"/>
                    <xsl:element name="I_MLDC_MERGE_TYPE"/>
                    <xsl:element name="C_MLDC_DESC"/>
                    <xsl:element name="MultiDebit">
                        <xsl:attribute name="isDO">T</xsl:attribute>
                        <xsl:attribute name="Type">A</xsl:attribute>
                        <xsl:element name="C_DO_NAME"/>
                        <xsl:element name="I_SEQ_NUM"/>
                        <xsl:element name="C_MAIN_REF"/>
                        <xsl:element name="C_TRX_REF"/>
                        <xsl:element name="C_UNIT_CODE"/>
                        <xsl:element name="I_EVENT_TIMES"/>
                        <xsl:element name="C_TRX_CCY"/>
                        <xsl:element name="I_MLDC_IDX"/>
                        <xsl:element name="C_MLDC_DR_AC"/>
                        <xsl:element name="C_MLDC_DR_AC_TYPE"/>
                        <xsl:element name="C_MLDC_DR_ADD1"/>
                        <xsl:element name="C_MLDC_DR_ADD2"/>
                        <xsl:element name="C_MLDC_DR_ADD3"/>
                        <xsl:element name="C_MLDC_DR_BK_AC"/>
                        <xsl:element name="C_MLDC_DR_BK_ADD1"/>
                        <xsl:element name="C_MLDC_DR_BK_ADD2"/>
                        <xsl:element name="C_MLDC_DR_BK_ADD3"/>
                        <xsl:element name="C_MLDC_DR_BK_COR_MED"/>
                        <xsl:element name="C_MLDC_DR_BK_ID"/>
                        <xsl:element name="C_MLDC_DR_BK_NAME"/>
                        <xsl:element name="C_MLDC_DR_BK_SW_ADD"/>
                        <xsl:element name="C_MLDC_DR_BK_SW_TAG"/>
                        <xsl:element name="C_MLDC_DR_BRANCH"/>
                        <xsl:element name="C_MLDC_DR_CCY"/>
                        <xsl:element name="C_MLDC_DR_CHG_FLAG"/>
                        <xsl:element name="C_MLDC_DR_COR_MED"/>
                        <xsl:element name="C_MLDC_DR_DEAL"/>
                        <xsl:element name="C_MLDC_DR_EMAIL_ADD"/>
                        <xsl:element name="C_MLDC_DR_FAX_NO"/>
                        <xsl:element name="C_MLDC_DR_ID"/>
                        <xsl:element name="C_MLDC_DR_NAME"/>
                        <xsl:element name="C_MLDC_DR_VAT_NO"/>
                        <xsl:element name="D_MLDC_DR_VAL_DATE"/>
                        <xsl:element name="N_MLDC_DR_AMT_DRCCY"/>
                        <xsl:element name="N_MLDC_DR_AMT_TXCCY"/>
                        <xsl:element name="N_MLDC_DR_CHG_LCCCY"/>
                        <xsl:element name="F_MLDC_DR_BUY_RATE"/>
                        <xsl:element name="F_MLDC_DR_RATE"/>
                        <xsl:element name="N_MLDC_EXCH_FAVAMT"/>
                        <xsl:element name="C_MLDC_NOSTRO_AC"/>
                        <xsl:element name="C_MLDC_NOSTRO_AC_CCY"/>
                        <xsl:element name="C_MLDC_PAY_DR_BY"/>
                        <xsl:element name="C_MLDC_UNPAID_FLAG"/>
                        <xsl:element name="C_MLDC_VOSTRO_AC"/>
                        <xsl:element name="C_MLDC_VOSTRO_AC_CCY"/>
                        <xsl:element name="I_MLDC_SEQ"/>
                        <xsl:element name="C_MLDC_DR_PER"/>
                        <xsl:element name="C_MLDC_FROM"/>
                        <xsl:element name="C_MLDC_CCY"/>
                    </xsl:element>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/MSG16/ChargeBackReassDetails" mode="m0">
        <ChgBack>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="C_MAIN_REF"/>
            <xsl:element name="FA_BA_FLG"/>
            <xsl:element name="FA_CBK_AMT">
                <xsl:value-of select="ChargeBackReassAmt"/>
            </xsl:element>
            <xsl:element name="FA_CBK_DT"/>
            <xsl:element name="FA_CRN_INV_LINK_NO"/>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="DocAmt"/>
            </xsl:element>
            <xsl:element name="FA_DOC_BAL"/>
            <xsl:element name="FA_DOC_CCY"/>
            <xsl:element name="FA_DOC_DT">
                <xsl:value-of select="DocDate"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DUE_DT"/>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="DocNr"/>
            </xsl:element>
            <xsl:element name="FA_DOC_REF"/>
            <xsl:element name="FA_DOC_STATUS"/>
            <xsl:element name="FA_DOC_TYPE">
                <xsl:value-of select="DocType"/>
            </xsl:element>
            <xsl:element name="FA_DSP_RSN_CODE">
                <xsl:value-of select="ChargeBackReassReason"/>
            </xsl:element>
            <xsl:element name="FA_FIN_RET_BAL"/>
            <xsl:element name="FA_INV_LINK_REF"/>
            <xsl:element name="FA_INV_LOAN_BAL"/>
            <xsl:element name="FA_TEMP3"/>
            <xsl:element name="FA_TEMP4"/>
            <xsl:element name="FA_TEMP_AMT10"/>
            <xsl:element name="FA_TEMP_CRN_BA"/>
            <xsl:element name="FA_TEMP_INV_BA"/>
            <xsl:element name="FA_TRF_DT"/>
            <xsl:element name="TEMP_AMT18"/>
        </ChgBack>
    </xsl:template>
</xsl:stylesheet>
