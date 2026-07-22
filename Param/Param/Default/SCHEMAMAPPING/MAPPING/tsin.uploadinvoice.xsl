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
                <xsl:element name="AUTH_AMT">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradSttlm/DuePyblAmt"/>
                </xsl:element>
                <xsl:element name="AUTH_CCY">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradSttlm/InvcCcyCd"/>
                </xsl:element>
                <xsl:element name="FA_BUYER_NM">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradAgrmt/Buyr/PtyId/Nm"/>
                </xsl:element>
                <xsl:element name="FA_DOC_AMT">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradSttlm/DuePyblAmt"/>
                </xsl:element>
                <xsl:element name="FA_DOC_CCY">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradSttlm/InvcCcyCd"/>
                </xsl:element>
                <xsl:element name="FA_DOC_DT">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/InvcHdr/IsseDtTm"/>
                </xsl:element>
                <xsl:element name="FA_DOC_DUE_DT">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradSttlm/PmtTerms/DueDt"/>
                </xsl:element>
                <xsl:element name="FA_DOC_NO">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/InvcHdr/Id"/>
                </xsl:element>
                <xsl:element name="FA_SBR_REF">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradSttlm/IssrFactrgAgrmtId"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/message/out-msg-content/Document/FinInvc/TradAgrmt/Sellr/PtyId/Nm"/>
                </xsl:element>
                <xsl:apply-templates mode="m0" select="/message/out-msg-content/Document/FinInvc/LineItm"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="/message/out-msg-content/Document/FinInvc/LineItm" mode="m0">
        <XDO_PO_LI>
            <xsl:attribute name="isDO">T</xsl:attribute>
            <xsl:attribute name="Type">A</xsl:attribute>
            <xsl:element name="TSU_LNITMNB">
                <xsl:value-of select="Id"/>
            </xsl:element>
            <xsl:element name="TSU_PDCTNM">
                <xsl:value-of select="TradPdct/Nm"/>
            </xsl:element>
            <xsl:element name="TSUR2_QTY_UNIT_CD">
                <xsl:value-of select="NetPricQty/UnitOfMeasrCd"/>
            </xsl:element>
            <xsl:element name="TSU_QTY_VAL">
                <xsl:value-of select="NetPricQty/Val"/>
            </xsl:element>
            <xsl:element name="TSU_UNITPRIC_AMT">
                <xsl:value-of select="NetPric"/>
            </xsl:element>
            <xsl:element name="TSU_TTL_AMT">
                <xsl:value-of select="MntrySummtn/LineTtlAmt"/>
            </xsl:element>
        </XDO_PO_LI>
    </xsl:template>
</xsl:stylesheet>
