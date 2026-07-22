<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xalan"
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
        <xsl:element name="SCF21">
		    <xsl:element name="MsgInfo">			    
			    <xsl:element name="SenderCode"/>
			    <xsl:element name="ReceiverCode"/>
				<xsl:element name="CreatedBy">
				    <xsl:value-of select="/Request/Authentication/UserId"/>
				</xsl:element>
			    <xsl:element name="SequenceNr"/>
			    <xsl:element name="MsgType">
					<xsl:value-of select="/Request/Service/Id"/>
			    </xsl:element>
			    <xsl:element name="DateTime">
					<xsl:value-of select="/Request/Authentication/DateTime"/>
			    </xsl:element>
			    <xsl:element name="Status"/>
				<xsl:element name="Error"/>
			</xsl:element>
			<xsl:element name="MsgDate">
			    <xsl:value-of select="/Request/Authentication/MsgDate"/>
			</xsl:element>
			<xsl:element name="Sender">			    
			    <xsl:element name="MemberNr"/>
			    <xsl:element name="MemberName"/>
			    <xsl:element name="ContactName"/>
			    <xsl:element name="Telephone"/>
			    <xsl:element name="Email"/>
			</xsl:element>
			<xsl:element name="Recipient">			    
			    <xsl:element name="MemberNr"/>
			    <xsl:element name="MemberName"/>
			    <xsl:element name="ContactName"/>
			    <xsl:element name="Telephone"/>
			    <xsl:element name="Email"/>
			</xsl:element>
			<xsl:element name="Seller">			    
			    <xsl:element name="SellerNr"/>
			    <xsl:element name="SellerName"/>
			</xsl:element>
			<xsl:element name="Buyer">			    
			    <xsl:element name="BuyerNr"/>
			    <xsl:element name="BuyerName"/>
			</xsl:element>
			<xsl:element name="InputData">
			    <xsl:element name="TrxBu">
					<xsl:value-of select="/Request/Service/TrxBu"/>
				</xsl:element>
				<xsl:element name="FuncId">
					<xsl:value-of select="/Request/Service/FuncId"/>
				</xsl:element>
				<xsl:element name="BankId">
					<xsl:value-of select="/Request/Authentication/BankId"/>
				</xsl:element>
				 <xsl:element name="CntyCode">
					<xsl:value-of select="/Request/Authentication/CntyCode"/>
				</xsl:element>			    
			    <xsl:element name="GETDATA_ID">
					<xsl:value-of select="/Request/Service/Data/Input/TRX_DATA/GETDATA_ID"/>
				</xsl:element>
				<xsl:element name="MAX_TREC_SIZE">
					<xsl:value-of select="/Request/Service/Data/Input/TRX_DATA/MAX_TREC_SIZE"/>
				</xsl:element>
				<xsl:element name="MAX_PREC_SIZE">
					<xsl:value-of select="/Request/Service/Data/Input/TRX_DATA/MAX_PREC_SIZE"/>
				</xsl:element>
				<xsl:element name="FSBC_REF">
					<xsl:value-of select="/Request/Service/Data/Input/TRX_DATA/EPP_SUPLR_ID"/>
				</xsl:element>
			    <xsl:element name="FETCH_PAGE_SIZE">
					<xsl:value-of select="/Request/Service/Data/Input/FETCH_INFO/PAGE_SIZE"/>
				</xsl:element>
			    <xsl:element name="FETCH_PAGE_NO">
					<xsl:value-of select="/Request/Service/Data/Input/FETCH_INFO/PAGE_NO"/>
				</xsl:element>
				<xsl:element name="RETURN_COUNT">
					<xsl:value-of select="/Request/Service/Data/Input/FETCH_INFO/RETURN_COUNT"/>
				</xsl:element>
				<xsl:element name="RETURN_DETAIL">
					<xsl:value-of select="/Request/Service/Data/Input/FETCH_INFO/RETURN_DETAIL"/>
				</xsl:element>
			    <xsl:element name="CRITERIA_OP1">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP1"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP2">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP2"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP3">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP3"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP4">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP4"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP5">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP5"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP6">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP6"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP7">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP7"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP8">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP8"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP9">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP9"/>
				</xsl:element>
				<xsl:element name="CRITERIA_OP10">
					<xsl:value-of select="/Request/Service/Data/Input/CRITERIA/OP10"/>
				</xsl:element>
				<xsl:element name="ACT_TYPE">
					<xsl:value-of select="/Request/Service/Data/Input/ACT_TYPE"/>
				</xsl:element>
				<xsl:element name="FA_CE_FR_REF">
					<xsl:value-of select="/Request/Service/Data/Input/FA_CE_FR_REF"/>
				</xsl:element>
				<xsl:element name="FA_DOC_REF">
					<xsl:value-of select="/Request/Service/Data/Input/FA_DOC_REF"/>
				</xsl:element>
				<xsl:element name="FA_DOC_NO">
					<xsl:value-of select="/Request/Service/Data/Input/FA_DOC_NO"/>
				</xsl:element>
				<xsl:element name="C_DELIMITER">
					<xsl:value-of select="/Request/Service/Data/Input/C_DELIMITER"/>
				</xsl:element>
				<xsl:element name="FA_SBR_REF">
					<xsl:value-of select="/Request/Service/Data/Input/FA_SBR_REF"/>
				</xsl:element>
				<xsl:element name="FA_CE_MAIN_REF">
					<xsl:value-of select="/Request/Service/Data/Input/FA_CE_MAIN_REF"/>
				</xsl:element>
				<xsl:element name="FA_DOC_DT">
					<xsl:value-of select="/Request/Service/Data/Input/FA_DOC_DT"/>
				</xsl:element>
				<xsl:element name="FA_DOC_AMT">
					<xsl:value-of select="/Request/Service/Data/Input/FA_DOC_AMT"/>
				</xsl:element>
				<xsl:element name="FA_MAX_LOAN_PERC">
					<xsl:value-of select="/Request/Service/Data/Input/FA_MAX_LOAN_PERC"/>
				</xsl:element>
				<xsl:element name="PO_MAX_LOAN_PERC">
					<xsl:value-of select="/Request/Service/Data/Input/PO_MAX_LOAN_PERC"/>
				</xsl:element>
				<xsl:element name="PO_REF">
					<xsl:value-of select="/Request/Service/Data/Input/PO_REF"/>
				</xsl:element>
				<xsl:element name="PO_DT">
					<xsl:value-of select="/Request/Service/Data/Input/PO_DT"/>
				</xsl:element>
				<xsl:element name="PO_AMT">
					<xsl:value-of select="/Request/Service/Data/Input/PO_AMT"/>
				</xsl:element>
				<xsl:element name="FA_DSP_AMT">
					<xsl:value-of select="/Request/Service/Data/Input/FA_DSP_AMT"/>
				</xsl:element>
				<xsl:element name="REJ_REASON">
					<xsl:value-of select="/Request/Service/Data/Input/REJ_REASON"/>
				</xsl:element>
			</xsl:element>	
			<xsl:element name="MsgText"/>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
