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
                <xsl:element name="C_MAIN_REF">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_CE_MAIN_REF"/>
                </xsl:element>
                <xsl:element name="FA_AGM_DUE_DT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_AGM_DUE_DT"/>
                </xsl:element>
                <xsl:element name="FA_AGM_VAL_DT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_AGM_VAL_DT"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_FUNC">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_BUSI_FUNC"/>
                </xsl:element>
                <xsl:element name="FA_BUSI_TYPE">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_BUSI_TYPE"/>
                </xsl:element>
                <xsl:element name="FA_CNTR_DOC_NO">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_CNTR_DOC_NO"/>
                </xsl:element>
                <xsl:element name="FA_END_REASON">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_END_REASON"/>
                </xsl:element>
                <xsl:element name="FA_EXTEND_TIMES">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_EXTEND_TIMES"/>
                </xsl:element>
                <xsl:element name="FA_ORG_DUE_DT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_ORG_DUE_DT"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_SEL_ID"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/out-msg-content/trx"/>
                <xsl:element name="XDO_SA_RF">
                    <xsl:attribute name="isDO">T</xsl:attribute>
                    <xsl:attribute name="Type">A</xsl:attribute>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/out-msg-content/trx" mode="m0">
        <XDO_SA_DF>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_BUYER_ID">
                <xsl:value-of select="FA_BUYER_ID"/>
            </xsl:element>
            <xsl:element name="FA_BUYER_NM">
                <xsl:value-of select="FA_BUYER_NM"/>
            </xsl:element>
            <xsl:element name="FA_SERVICE_REQ">
                <xsl:value-of select="FA_SERVICE_REQ"/>
            </xsl:element>
            <xsl:element name="FA_LMT_TYPE">
                <xsl:value-of select="FA_LMT_TYPE"/>
            </xsl:element>
            <xsl:element name="FA_APPL_LMT_CCY">
                <xsl:value-of select="FA_APPL_LMT_CCY"/>
            </xsl:element>
            <xsl:element name="FA_APPL_LMT_AMT">
                <xsl:value-of select="FA_APPL_LMT_AMT"/>
            </xsl:element>
            <xsl:element name="FA_PCA_REF">
                <xsl:value-of select="FA_PCA_REF"/>
            </xsl:element>
        </XDO_SA_DF>
    </xsl:template>
</xsl:stylesheet>
