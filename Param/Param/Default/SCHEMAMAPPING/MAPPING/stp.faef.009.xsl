<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xalan" extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base"
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
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_BUYER_NM"/>
                </xsl:element>
                <xsl:element name="FA_CB_FEE">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_CB_FEE"/>
                </xsl:element>
                <xsl:element name="FA_CB_FEE_CCY">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_CB_FEE_CCY"/>
                </xsl:element>
                <xsl:element name="FA_LMT_AMT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_LMT_AMT"/>
                </xsl:element>
                <xsl:element name="FA_LMT_CCY">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_LMT_CCY"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_MSG_TEXT02"/>
                </xsl:element>
                <xsl:element name="FA_OTH_CHG_AMT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_OTH_CHG_AMT"/>
                </xsl:element>
                <xsl:element name="FA_OVDUE_INT_SUM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_OVDUE_INT_SUM"/>
                </xsl:element>
                <xsl:element name="FA_PAID_INT_SUM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_PAID_INT_SUM"/>
                </xsl:element>
                <xsl:element name="FA_PAID_PRIN_SUM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_PAID_PRIN_SUM"/>
                </xsl:element>
                <xsl:element name="FA_PMT_AMT_SUM">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_PMT_AMT_SUM"/>
                </xsl:element>
                <xsl:element name="FA_PMT_CCY">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_PMT_CCY"/>
                </xsl:element>
                <xsl:element name="FA_PMT_DT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_PMT_DT"/>
                </xsl:element>
                <xsl:element name="FA_PMT_TYPE">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_PMT_TYPE"/>
                </xsl:element>
                <xsl:element name="FA_SEL_AC_AMT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_SEL_AC_AMT"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_SEL_ID"/>
                </xsl:element>
                <xsl:element name="FA_TTL_AMT_CLEARED">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_TTL_AMT_CLEARED"/>
                </xsl:element>
                <xsl:element name="FA_TTL_AMT_DEDUCT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_TTL_AMT_DEDUCT"/>
                </xsl:element>
                <xsl:element name="FA_TTL_REFUND_INT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_TTL_REFUND_INT"/>
                </xsl:element>
                <xsl:element name="FA_TXT_REFUNDINT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_TXT_REFUNDINT"/>
                </xsl:element>
                <xsl:element name="TEMP_DUE_DT">
                    <xsl:value-of select="/message/out-msg-content/trx/TEMP_DUE_DT"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/out-msg-content/trx"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/out-msg-content/trx" mode="m0">
        <XDO_INVOICE>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="FA_DOC_CCY">
                <xsl:value-of select="FA_DOC_CCY"/>
            </xsl:element>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="FA_DOC_AMT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DT">
                <xsl:value-of select="FA_DOC_DT"/>
            </xsl:element>
            <xsl:element name="FA_PMT_AMT">
                <xsl:value-of select="FA_PMT_AMT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_BAL">
                <xsl:value-of select="FA_DOC_BAL"/>
            </xsl:element>
            <xsl:element name="FA_DOC_DUE_DT">
                <xsl:value-of select="FA_DOC_DUE_DT"/>
            </xsl:element>
            <xsl:element name="FA_PMT_VAL_DT">
                <xsl:value-of select="FA_PMT_VAL_DT"/>
            </xsl:element>
            <xsl:element name="FA_BK_CHG_AMT">
                <xsl:value-of select="FA_BK_CHG_AMT"/>
            </xsl:element>
            <xsl:element name="FA_DEDUCT_AMT">
                <xsl:value-of select="FA_DEDUCT_AMT"/>
            </xsl:element>
        </XDO_INVOICE>
    </xsl:template>
</xsl:stylesheet>
