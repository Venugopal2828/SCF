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
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="C_TRX_REF"/>
                <xsl:element name="FA_BA_FLG"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/Document/FinInvc/TradAgrmt/Buyr/PtyId/Nm"/>
                </xsl:element>
                <xsl:element name="FA_CRN_INV_LINK_NO"/>
                <xsl:element name="FA_DOC_AMT">
                    <xsl:value-of select="/Document/FinInvc/TradSttlm/DuePyblAmt"/>
                </xsl:element>
                <xsl:element name="FA_DOC_BAL"/>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/Document/FinInvc/TradSttlm/InvcCcyCd"/>
                </xsl:element>
                <xsl:element name="FA_DOC_DT">
                    <xsl:value-of select="/Document/FinInvc/InvcHdr/IsseDtTm"/>
                </xsl:element>
                <xsl:element name="FA_DOC_DUE_DT">
                    <xsl:value-of select="/Document/FinInvc/TradSttlm/PmtTerms/DueDt"/>
                </xsl:element>
                <xsl:element name="FA_DOC_NO">
                    <xsl:value-of select="/Document/FinInvc/InvcHdr/Id"/>
                </xsl:element>
                <xsl:element name="FA_DOC_REF"/>
                <xsl:element name="FA_DOC_STATUS"/>
                <xsl:element name="FA_DOC_TYPE"/>
                <xsl:element name="FA_DOC_VAL_DT">
                    <xsl:value-of select="/Document/FinInvc/InvcHdr/IsseDtTm"/>
                </xsl:element>
                <xsl:element name="FA_EF_COMM_AMT"/>
                <xsl:element name="FA_EF_COMM_RT"/>
                <xsl:element name="FA_EF_HAN_CHG_AMT"/>
                <xsl:element name="FA_EF_HAN_CHG_CCY"/>
                <xsl:element name="FA_EF_HAN_CHG_PAMT"/>
                <xsl:element name="FA_IF_CHG_PAID_FLG"/>
                <xsl:element name="FA_IF_COMM_AMT"/>
                <xsl:element name="FA_IF_COMM_RT"/>
                <xsl:element name="FA_IF_HAN_CHG_AMT"/>
                <xsl:element name="FA_IF_HAN_CHG_CCY"/>
                <xsl:element name="FA_IF_HAN_CHG_PAMT"/>
                <xsl:element name="FA_INVAMT_IN_LMT"/>
                <xsl:element name="FA_INV_LINK_REF"/>
                <xsl:element name="FA_LATEST_SHIP_DT"/>
                <xsl:element name="FA_ORDER_NO"/>
                <xsl:element name="FA_PMT_COND"/>
                <xsl:element name="FA_PMT_TERMS"/>
                <xsl:element name="FA_PRM_DISC_DAYS"/>
                <xsl:element name="FA_PRM_DISC_RT"/>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/Document/FinInvc/TradAgrmt/Sellr/PtyId/Nm"/>
                </xsl:element>
                <xsl:element name="FA_SND_DISC_DAYS"/>
                <xsl:element name="FA_SND_DISC_RT"/>
                <xsl:element name="FA_TEMP_DT1"/>
                <xsl:element name="FA_TRF_DT"/>
                <xsl:element name="FSBC_REF"/>
                <xsl:element name="TEMP_DATE2"/>
                <xsl:element name="TEMP_DATE3"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
