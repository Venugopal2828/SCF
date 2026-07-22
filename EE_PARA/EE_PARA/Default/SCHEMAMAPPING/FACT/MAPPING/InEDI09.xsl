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
                <xsl:element name="CHG_FLD_ALL_CHARGE_AT"/>
                <xsl:element name="CHG_FLD_ALL_CHARGE_FOR"/>
                <xsl:element name="CHG_FLD_FOREIGN_PAY_TOTALE_IN_PAYCCY"/>
                <xsl:element name="CHG_FLD_LOCAL_PAY_TOTALE_IN_PAYCCY"/>
                <xsl:element name="CHG_FOREIGN_UNPAID_FLAG"/>
                <xsl:element name="CHG_LOCAL_UNPAID_FLAG"/>
                <xsl:element name="CHG_VALUE_DATE"/>
                <xsl:element name="CLERK_ID"/>
                <xsl:element name="COMMON_PRDT_CODE"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="DIARY_DT"/>
                <xsl:element name="DIARY_NARRATIVE"/>
                <xsl:element name="DIARY_RELATED_REF"/>
                <xsl:element name="DOC_FLAG"/>
                <xsl:element name="EXCH_RT4"/>
                <xsl:element name="EXCH_RT5"/>
                <xsl:element name="EXCH_RT6"/>
                <xsl:element name="FA_AGM_DUE_DT"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BA_LINK"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_EDI_ID">
                    <xsl:value-of select="/MSG09/InvCreditNoteDetails/BuyerNr"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/MSG09/InvCreditNoteDetails/BuyerName"/>
                </xsl:element>
                <xsl:element name="FA_BUY_AC_AMT"/>
                <xsl:element name="FA_BUY_AC_CCY"/>
                <xsl:element name="FA_CB_FEE"/>
                <xsl:element name="FA_CB_FEE_CCY"/>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/MSG09/InvBatchCurrency"/>
                </xsl:element>
                <xsl:element name="FA_DOC_REQD"/>
                <xsl:element name="FA_DOC_TYPE"/>
                <xsl:element name="FA_EF_COMM_RT"/>
                <xsl:element name="FA_EF_COMM_SUM"/>
                <xsl:element name="FA_EF_HAN_CHG_AMT"/>
                <xsl:element name="FA_EF_HAN_CHG_CCY"/>
                <xsl:element name="FA_EF_HAN_CHG_PAMT"/>
                <xsl:element name="FA_EF_HAN_CHG_SUM"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG09/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG09/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_FIN_INFO"/>
                <xsl:element name="FA_IF_CHG_PAID_FLG"/>
                <xsl:element name="FA_IF_COMM_RT"/>
                <xsl:element name="FA_IF_COMM_SUM"/>
                <xsl:element name="FA_IF_HAN_CHG_AMT"/>
                <xsl:element name="FA_IF_HAN_CHG_CCY"/>
                <xsl:element name="FA_IF_HAN_CHG_PAMT"/>
                <xsl:element name="FA_IF_HAN_CHG_SUM"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG09/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG09/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_INCO_COMM_RT"/>
                <xsl:element name="FA_INCO_COMM_SUM"/>
                <xsl:element name="FA_INCO_ID"/>
                <xsl:element name="FA_INCO_NM"/>
                <xsl:element name="FA_INV_CCY1"/>
                <xsl:element name="FA_INV_CCY2"/>
                <xsl:element name="FA_INV_CCY3"/>
                <xsl:element name="FA_INV_CCY4"/>
                <xsl:element name="FA_INV_CCY5"/>
                <xsl:element name="FA_LATEST_SHIP_DT"/>
                <xsl:element name="FA_LMT_AMT"/>
                <xsl:element name="FA_LMT_APPRV"/>
                <xsl:element name="FA_LMT_BAL"/>
                <xsl:element name="FA_LMT_CCY"/>
                <xsl:element name="FA_LMT_EXTRA"/>
                <xsl:element name="FA_LMT_VAL_DT"/>
                <xsl:element name="FA_MSG_TEXT">
                    <xsl:value-of select="/MSG09/MsgText"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02"/>
                <xsl:element name="FA_ORDER_NO"/>
                <xsl:element name="FA_PMT_TERMS"/>
                <xsl:element name="FA_PRM_DISC_DAYS"/>
                <xsl:element name="FA_PRM_DISC_RT"/>
                <xsl:element name="FA_REQ_DT"/>
                <xsl:element name="FA_SEL_AC_AMT"/>
                <xsl:element name="FA_SEL_AC_CCY"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG09/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG09/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_SERVICE_APPRVD"/>
                <xsl:element name="FA_SND_DISC_DAYS"/>
                <xsl:element name="FA_SND_DISC_RT"/>
                <xsl:element name="FA_TEMP3"/>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="FA_TEMP_AMT11"/>
                <xsl:element name="FA_TEMP_AMT12"/>
                <xsl:element name="FA_TEMP_AMT9"/>
                <xsl:element name="FA_TEMP_DOC_STATUS"/>
                <xsl:element name="FA_TRF_DT">
                    <xsl:value-of select="/MSG09/InvBatchDate"/>
                </xsl:element>
                <xsl:element name="FA_TRF_FX_RT"/>
                <xsl:element name="FA_TRF_REF"/>
                <xsl:element name="FA_TTL_AMT_BA"/>
                <xsl:element name="FA_TTL_COMM_RT"/>
                <xsl:element name="FA_TTL_FIN_RET_BAL"/>
                <xsl:element name="FA_TTL_IF_CHG_AMT"/>
                <xsl:element name="FA_TTL_INV_AMT">
                    <xsl:value-of select="/MSG09/TotAmtInvoices"/>
                </xsl:element>
                <xsl:element name="FA_TTL_INV_NO">
                    <xsl:value-of select="/MSG09/ControlTot/TotNrInvoices"/>
                </xsl:element>
                <xsl:element name="FINC_CCY1"/>
                <xsl:element name="FINC_CCY2"/>
                <xsl:element name="LM_OUTC_APL"/>
                <xsl:element name="LM_OUTC_APLO"/>
                <xsl:element name="LM_OUTC_APV"/>
                <xsl:element name="LM_OUTC_APVO"/>
                <xsl:element name="LM_OUTD_APL"/>
                <xsl:element name="LM_OUTD_APLO"/>
                <xsl:element name="LM_OUTD_APV"/>
                <xsl:element name="LM_OUTD_APVO"/>
                <xsl:element name="RPT_OTHER_AMT1"/>
                <xsl:element name="RPT_OTHER_AMT2"/>
                <xsl:element name="RPT_TRX_BAL1"/>
                <xsl:element name="RPT_TRX_BAL2"/>
                <xsl:element name="TEMP_CHAR6"/>
                <xsl:element name="TEMP_DATE1"/>
                <xsl:element name="TEMP_DATE2"/>
                <xsl:element name="TEMP_DATE4"/>
                <xsl:element name="THEIR_REF_NO">
                    <xsl:value-of select="/MSG09/InvBatchNr"/>
                </xsl:element>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
                <xsl:element name="ChgDoDef">
                    <xsl:attribute name="isDO">T</xsl:attribute>
                    <xsl:attribute name="Type">A</xsl:attribute>
                    <xsl:element name="CHG_ID"/>
                    <xsl:element name="CHG_INDEX"/>
                    <xsl:element name="CHG_COMMISSION_CODE"/>
                    <xsl:element name="CHG_COMMISSION_DESC"/>
                    <xsl:element name="CHG_ACTIVE_CCY"/>
                    <xsl:element name="CHG_ACTIVE_AMT"/>
                    <xsl:element name="CHG_CHARGE_FOR"/>
                    <xsl:element name="CHG_CHARGE_AT"/>
                    <xsl:element name="CHG_COLLECT_CCY"/>
                    <xsl:element name="CHG_COLLECT_AMT"/>
                    <xsl:element name="CHG_BALANCE_AMT"/>
                    <xsl:element name="CHG_BALANCE_CCY"/>
                    <xsl:element name="CHG_PAY_CCY"/>
                    <xsl:element name="CHG_PAY_AMT"/>
                    <xsl:element name="CHG_DISCOUNT_RATE"/>
                    <xsl:element name="CHG_DISCOUNT_AMT"/>
                    <xsl:element name="CHG_VAT_TYPE"/>
                    <xsl:element name="CHG_VAT_RATE"/>
                    <xsl:element name="CHG_COLLECT_VAT_AMT"/>
                    <xsl:element name="CHG_PAY_ENTRY_ID"/>
                    <xsl:element name="CHG_IS_OVERRIDE"/>
                    <xsl:element name="CHG_FLD_HIDDEN_FLAG"/>
                    <xsl:element name="CHG_RULE_AMT"/>
                    <xsl:element name="CHG_RULE_CCY"/>
                    <xsl:element name="CHG_RATE_ID"/>
                    <xsl:element name="CHG_RULE_ID"/>
                    <xsl:element name="CHG_COMM_START_DATE"/>
                    <xsl:element name="CHG_COMM_UPTO_DATE"/>
                    <xsl:element name="CHG_FLD_OVERRIDE"/>
                    <xsl:element name="CHG_FLD_ORIG_CALC_AMT"/>
                    <xsl:element name="CHG_FLD_ORIG_CALC_CCY"/>
                    <xsl:element name="CHG_BLANK"/>
                </xsl:element>
                <xsl:element name="ChgDoTrx">
                    <xsl:attribute name="isDO">T</xsl:attribute>
                    <xsl:attribute name="Type">A</xsl:attribute>
                    <xsl:element name="CHG_ID"/>
                    <xsl:element name="CHG_INDEX"/>
                    <xsl:element name="CHG_COMMISSION_CODE"/>
                    <xsl:element name="CHG_COMMISSION_DESC"/>
                    <xsl:element name="CHG_ACTIVE_CCY"/>
                    <xsl:element name="CHG_ACTIVE_AMT"/>
                    <xsl:element name="CHG_CHARGE_FOR"/>
                    <xsl:element name="CHG_CHARGE_AT"/>
                    <xsl:element name="CHG_COLLECT_CCY"/>
                    <xsl:element name="CHG_COLLECT_AMT"/>
                    <xsl:element name="CHG_BALANCE_AMT"/>
                    <xsl:element name="CHG_BALANCE_CCY"/>
                    <xsl:element name="CHG_PAY_CCY"/>
                    <xsl:element name="CHG_PAY_AMT"/>
                    <xsl:element name="CHG_DISCOUNT_RATE"/>
                    <xsl:element name="CHG_DISCOUNT_AMT"/>
                    <xsl:element name="CHG_VAT_TYPE"/>
                    <xsl:element name="CHG_VAT_RATE"/>
                    <xsl:element name="CHG_COLLECT_VAT_AMT"/>
                    <xsl:element name="CHG_PAY_ENTRY_ID"/>
                    <xsl:element name="CHG_IS_OVERRIDE"/>
                    <xsl:element name="CHG_FLD_HIDDEN_FLAG"/>
                    <xsl:element name="CHG_RULE_AMT"/>
                    <xsl:element name="CHG_RULE_CCY"/>
                    <xsl:element name="CHG_RATE_ID"/>
                    <xsl:element name="CHG_RULE_ID"/>
                    <xsl:element name="CHG_COMM_START_DATE"/>
                    <xsl:element name="CHG_COMM_UPTO_DATE"/>
                    <xsl:element name="CHG_FLD_OVERRIDE"/>
                    <xsl:element name="CHG_FLD_ORIG_CALC_AMT"/>
                    <xsl:element name="CHG_FLD_ORIG_CALC_CCY"/>
                    <xsl:element name="CHG_BLANK"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/MSG09/InvCreditNoteDetails"/>
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
                <xsl:element name="FA_TTL_CRN_AMT">
                    <xsl:value-of select="/MSG09/TotAmtCreditNotes"/>
                </xsl:element>
                <xsl:element name="FA_TTL_CRN_NO">
                    <xsl:value-of select="/MSG09/ControlTot/TotNrCreditNotes"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/MSG09/InvCreditNoteDetails" mode="m0">
        <InvTRF>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="DocNr"/>
            </xsl:element>
            <xsl:element name="FA_DOC_REF"/>
            <xsl:element name="FA_DOC_VAL_DT">
                <xsl:value-of select="DocValueDate"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DUE_DT">
                <xsl:value-of select="DocDueDate"/>
            </xsl:element>
            <xsl:element name="FA_DOC_STATUS"/>
            <xsl:element name="FA_DOC_DT">
                <xsl:value-of select="DocDate"/>
            </xsl:element>
            <xsl:element name="FA_DOC_CCY">
                <xsl:value-of select="/MSG09/InvBatchCurrency"/>
            </xsl:element>
            <xsl:element name="FA_DOC_BAL"/>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="DocAmt"/>
            </xsl:element>
            <xsl:element name="FA_EF_COMM_AMT"/>
            <xsl:element name="FA_EF_COMM_CCY"/>
            <xsl:element name="FA_EF_HAN_CHG_AMT"/>
            <xsl:element name="FA_EF_HAN_CHG_CCY"/>
            <xsl:element name="FA_EF_HAN_CHG_PAMT"/>
            <xsl:element name="FA_IF_COMM_CCY"/>
            <xsl:element name="FA_IF_COMM_AMT"/>
            <xsl:element name="FA_IF_HAN_CHG_CCY"/>
            <xsl:element name="FA_IF_HAN_CHG_AMT"/>
            <xsl:element name="FA_IF_HAN_CHG_PAMT"/>
            <xsl:element name="FA_PRM_DISC_DAYS"/>
            <xsl:element name="FA_PRM_DISC_RT"/>
            <xsl:element name="FA_SND_DISC_DAYS"/>
            <xsl:element name="FA_SND_DISC_RT"/>
            <xsl:element name="FA_PMT_COND">
                <xsl:value-of select="PmtCondition"/>
            </xsl:element>
            <xsl:element name="FA_PMT_GRC_DAY"/>
            <xsl:element name="FA_PMT_TERMS">
                <xsl:value-of select="NetPmtTerms"/>
            </xsl:element>
            <xsl:element name="FA_BA_FLG"/>
            <xsl:element name="FA_TRF_DT">
                <xsl:value-of select="/MSG09/InvBatchNr"/>
            </xsl:element>
            <xsl:element name="FA_INV_LINK_REF"/>
            <xsl:element name="FA_CRN_INV_LINK_NO">
                <xsl:value-of select="InvRefNr"/>
            </xsl:element>
            <xsl:element name="FA_TEMP_DT1"/>
            <xsl:element name="FA_ORDER_NO">
                <xsl:value-of select="OrderNrRef"/>
            </xsl:element>
            <xsl:element name="FA_INVAMT_IN_LMT"/>
            <xsl:element name="FA_DOC_TYPE">
                <xsl:value-of select="DocType"/>
            </xsl:element>
            <xsl:element name="FA_TEMP_AMT11"/>
            <xsl:element name="FA_TEMP_AMT12"/>
            <xsl:element name="FA_LATEST_SHIP_DT"/>
            <xsl:element name="C_MAIN_REF"/>
            <xsl:element name="FSBC_REF"/>
            <xsl:element name="FA_IF_CHG_PAID_FLG"/>
            <xsl:element name="FA_BUYER_ID"/>
            <xsl:element name="FA_BUYER_NM"/>
            <xsl:element name="FA_SEL_ID"/>
            <xsl:element name="FA_SEL_NM"/>
        </InvTRF>
    </xsl:template>
</xsl:stylesheet>
