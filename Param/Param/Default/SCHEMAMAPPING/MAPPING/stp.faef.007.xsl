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
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_DOC_CCY"/>
                </xsl:element>
                <xsl:element name="FA_FIN_INFO">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_FIN_INFO"/>
                </xsl:element>
                <xsl:element name="FA_INT_CHG_TYPE">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_INT_CHG_TYPE"/>
                </xsl:element>
                <xsl:element name="FA_IRT_SPREAD">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_IRT_SPREAD"/>
                </xsl:element>
                <xsl:element name="FA_LOAN_INT_RT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_LOAN_INT_RT"/>
                </xsl:element>
                <xsl:element name="FA_LOAN_PERC">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_LOAN_PERC"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_SEL_ID"/>
                </xsl:element>
                <xsl:element name="FA_TTL_LOAN_AMT">
                    <xsl:value-of select="/message/out-msg-content/trx/FA_TTL_LOAN_AMT"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/out-msg-content/trx"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/out-msg-content/trx" mode="m0">
        <XDO_INVFIN>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="FA_DOC_NO">
                <xsl:value-of select="FA_DOC_NO"/>
            </xsl:element>
            <xsl:element name="FA_DOC_AMT">
                <xsl:value-of select="FA_DOC_AMT"/>
            </xsl:element>
            <xsl:element name="FA_DOC_BAL">
                <xsl:value-of select="FA_DOC_BAL"/>
            </xsl:element>
            <xsl:element name="FA_LOAN_VAL_DT">
                <xsl:value-of select="FA_LOAN_VAL_DT"/>
            </xsl:element>
            <xsl:element name="FA_INV_LOAN_EBAL">
                <xsl:value-of select="FA_INV_LOAN_EBAL"/>
            </xsl:element>
            <xsl:element name="FA_LOAN_INT_AMT">
                <xsl:value-of select="FA_LOAN_INT_AMT"/>
            </xsl:element>
            <xsl:element name="FA_INV_LOAN_AMT">
                <xsl:value-of select="FA_INV_LOAN_AMT"/>
            </xsl:element>
            <xsl:element name="FA_LOAN_DUE_DT">
                <xsl:value-of select="FA_LOAN_DUE_DT"/>
            </xsl:element>
        </XDO_INVFIN>
    </xsl:template>
</xsl:stylesheet>
