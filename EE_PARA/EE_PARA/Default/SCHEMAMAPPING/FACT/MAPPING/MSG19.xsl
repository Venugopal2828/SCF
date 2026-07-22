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
        <xsl:element name="MSG19">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode">CS00001</xsl:element>
                <xsl:element name="ReceiverCode">
                    <xsl:value-of select="/root/domData/EndCtr/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="CreatedBy">
                    <xsl:value-of select="/root/domData/CLERK_ID"/>
                </xsl:element>
                <xsl:element name="SequenceNr"/>
                <xsl:element name="DateTime">
                    <xsl:value-of select="/root/domData/TRX_DT"/>
                </xsl:element>
                <xsl:element name="Status"/>
                <xsl:element name="Error"/>
            </xsl:element>
            <xsl:element name="EF">
                <xsl:element name="FactorCode">CS00001</xsl:element>
                <xsl:element name="FactorName">CSBANK</xsl:element>
            </xsl:element>
            <xsl:element name="IF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/EndCtr/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/EndCtr/FA_IF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgDate">
                <xsl:value-of select="/root/domData/TRX_DT"/>
            </xsl:element>
            <xsl:element name="DateTermination">
                <xsl:value-of select="/root/domData/FA_END_DT"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="TerminationReason">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_END_REASON)"/>
            </xsl:element>
            <xsl:element name="Instructions">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT02"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
