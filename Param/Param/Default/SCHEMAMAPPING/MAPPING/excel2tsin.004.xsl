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
                <xsl:element name="CURRNT_STATUS"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="C_UNIT_CODE"/>
                <xsl:element name="C_XML_DATA_014"/>
                <xsl:element name="FA_BUYER_ID"/>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/Document/FinInvc/TradAgrmt/Buyr/PtyId/Nm"/>
                </xsl:element>
                <xsl:element name="FA_DOC_AMT">
                    <xsl:value-of select="/Document/FinInvc/TradSttlm/DuePyblAmt"/>
                </xsl:element>
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
                <xsl:element name="FA_DOC_VAL_DT">
                    <xsl:value-of select="/Document/FinInvc/InvcHdr/IsseDtTm"/>
                </xsl:element>
                <xsl:element name="FA_SBR_REF">
                    <xsl:value-of select="/Document/FinInvc/TradSttlm/IssrFactrgAgrmtId"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/Document/FinInvc/TradAgrmt/Sellr/PtyId/Nm"/>
                </xsl:element>
                <xsl:element name="FA_TRX_DT"/>
                <xsl:element name="NXT_STATUS"/>
                <xsl:element name="PARENT_MAIN_REF"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
