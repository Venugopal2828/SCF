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
                <xsl:element name="C_XML_DATA_008">
                    <xsl:value-of select="/message/out-msg-content/C_XML_DATA"/>
                </xsl:element>
                <xsl:element name="TSUR2_TRX_STATUS">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/TxSts/Sts"/>
                </xsl:element>
                <xsl:element name="TSU_AMD_NO">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/RjctdAmdmntNb/Nb"/>
                </xsl:element>
                <xsl:element name="TSU_MESSAGE_ID">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/NtfctnId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_REJT_RSN2">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/RjctnRsn/GblRjctnRsn/Desc"/>
                </xsl:element>
                <xsl:element name="TSU_RL_MSG_ID">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/DltaRptRef/Id"/>
                </xsl:element>
                <xsl:element name="TSU_RL_MSG_ID_DTTM">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/DltaRptRef/CreDtTm"/>
                </xsl:element>
                <xsl:element name="TSU_TID">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/TxId/Id"/>
                </xsl:element>
                <xsl:element name="TSU_TRX_DTTM">
                    <xsl:value-of select="/message/Document/AmdmntRjctnNtfctn/NtfctnId/CreDtTm"/>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
