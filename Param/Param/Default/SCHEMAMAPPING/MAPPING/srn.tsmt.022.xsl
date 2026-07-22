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
        <xsl:element name="Document">
            <xsl:element name="MisMtchRjctn">
                <xsl:element name="RjctnId">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/TSU_MESSAGE_ID"/>
                    </xsl:element>
                    <xsl:element name="CreDtTm">
                        <xsl:value-of select="/root/domData/TSU_TRX_DTTM"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="TxId">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/TSU_TID"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="SubmitrTxRef"/>
                <xsl:element name="DataSetMtchRptRef">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/TSU_RL_MSG_ID"/>
                    </xsl:element>
                    <xsl:element name="CreDtTm">
                        <xsl:value-of select="/root/domData/TSU_RL_MSG_ID_DTTM"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="RjctnRsn">
                    <xsl:element name="GblRjctnRsn">
                        <xsl:element name="Desc">
                            <xsl:value-of select="/root/domData/TSU_REJT_RSN2"/>
                        </xsl:element>
                    </xsl:element>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
