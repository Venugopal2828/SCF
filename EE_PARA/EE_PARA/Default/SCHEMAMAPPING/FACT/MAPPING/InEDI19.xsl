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
                <xsl:element name="CLERK_ID"/>
                <xsl:element name="C_MAIN_REF"/>
                <xsl:element name="DIARY_DT"/>
                <xsl:element name="DIARY_NARRATIVE"/>
                <xsl:element name="DIARY_RELATED_REF"/>
                <xsl:element name="FA_AGM_DUE_DT"/>
                <xsl:element name="FA_AGM_SIGN_FLG"/>
                <xsl:element name="FA_AGM_VAL_DT"/>
                <xsl:element name="FA_BUSI_FUNC"/>
                <xsl:element name="FA_BUSI_STATUS"/>
                <xsl:element name="FA_BUSI_TYPE"/>
                <xsl:element name="FA_BUYER_ADD_ML"/>
                <xsl:element name="FA_CNTR_DOC_NO"/>
                <xsl:element name="FA_CNTR_REF"/>
                <xsl:element name="FA_EF_COMM_RT"/>
                <xsl:element name="FA_EF_ID">
                    <xsl:value-of select="/MSG19/EF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_EF_NM">
                    <xsl:value-of select="/MSG19/EF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_END_DT">
                    <xsl:value-of select="/MSG19/DateTermination"/>
                </xsl:element>
                <xsl:element name="FA_END_REASON">
                    <xsl:value-of select="/MSG19/TerminationReason"/>
                </xsl:element>
                <xsl:element name="FA_EXTEND_DT"/>
                <xsl:element name="FA_EXTEND_TIMES"/>
                <xsl:element name="FA_IF_ID">
                    <xsl:value-of select="/MSG19/IF/FactorCode"/>
                </xsl:element>
                <xsl:element name="FA_IF_NM">
                    <xsl:value-of select="/MSG19/IF/FactorName"/>
                </xsl:element>
                <xsl:element name="FA_MSG_TEXT02">
                    <xsl:value-of select="/MSG19/Instructions"/>
                </xsl:element>
                <xsl:element name="FA_NO_OF_BUYERS"/>
                <xsl:element name="FA_NO_OF_COUNTER"/>
                <xsl:element name="FA_ORG_DUE_DT"/>
                <xsl:element name="FA_SEL_ADDR"/>
                <xsl:element name="FA_SEL_EDI_ID">
                    <xsl:value-of select="/MSG19/Seller/SellerNr"/>
                </xsl:element>
                <xsl:element name="FA_SEL_ID"/>
                <xsl:element name="FA_SEL_NM">
                    <xsl:value-of select="/MSG19/Seller/SellerName"/>
                </xsl:element>
                <xsl:element name="FA_SEL_NM2"/>
                <xsl:element name="FA_TEMP4"/>
                <xsl:element name="FA_TEMP5"/>
                <xsl:element name="FA_TEMP6"/>
                <xsl:element name="FA_VALID_DAYS"/>
                <xsl:element name="LM_RSV_LINK"/>
                <xsl:element name="TRX_DT"/>
                <xsl:element name="view_1"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
