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
        <xsl:element name="SCF75">
		    <xsl:element name="MsgInfo">			    
			    <xsl:element name="SenderCode"/>
			    <xsl:element name="ReceiverCode"/>
				<xsl:element name="CreatedBy">
				    <xsl:value-of select="/root/C_CREATED_BY"/>
			    </xsl:element>
			    <xsl:element name="SequenceNr">
				    <xsl:value-of select="/root/REF"/>
			    </xsl:element>
			    <xsl:element name="MsgType"/>
				<xsl:element name="FileIndex">
				    <xsl:value-of select="/root/FILE_INDEX"/>
			    </xsl:element>
				<xsl:element name="SubFileIndex">
				    <xsl:value-of select="/root/SUB_FILE_INDEX"/>
			    </xsl:element>
			    <xsl:element name="DateTime"/>
			    <xsl:element name="Status"/>
				<xsl:element name="Error"/>
			</xsl:element>
			<xsl:element name="EF">			    
			    <xsl:element name="FactorCode"/>
			    <xsl:element name="FactorName"/>
			</xsl:element>
			<xsl:element name="IF">			    
			    <xsl:element name="FactorCode"/>
			    <xsl:element name="FactorName"/>
			</xsl:element>
			<xsl:element name="MsgDate"/>
			<xsl:element name="MsgFunction"/>
			<xsl:element name="RequestNr"/>
			<xsl:element name="Customer">
                <xsl:element name="CustomerCompanyRegNr">
				    <xsl:value-of select="/root/FA_ANCHOR_REG_NO"/>
			    </xsl:element>
			    <xsl:element name="CustomerNr">
				    <xsl:value-of select="/root/FA_ANCHOR_ID"/>
			    </xsl:element>
				<xsl:element name="CustomerName">
				    <xsl:value-of select="/root/FA_ANCHOR_NM"/>
			    </xsl:element>
				<xsl:element name="ResponseAgency"/>
				<xsl:element name="NameCont"/>
				<xsl:element name="Street"/>
				<xsl:element name="City"/>
				<xsl:element name="State"/>
			    <xsl:element name="Postcode"/>
			    <xsl:element name="Country"/>
				<xsl:element name="UnitCode">
				    <xsl:value-of select="/root/C_UNIT_CODE"/>
			    </xsl:element>
			    <xsl:element name="BusiType">
				    <xsl:value-of select="/root/FA_BUSI_TYPE"/>
			    </xsl:element>
				<xsl:element name="ContractCcy">
				    <xsl:value-of select="/root/FA_AGM_CCY"/>
			    </xsl:element>
				<xsl:element name="ContractDocNo">
				    <xsl:value-of select="/root/FA_CNTR_DOC_NO"/>
			    </xsl:element>
			    <xsl:element name="ValidDate">
				    <xsl:value-of select="/root/FA_AGM_VAL_DT"/>
			    </xsl:element>
			    <xsl:element name="DueDate">
				    <xsl:value-of select="/root/FA_AGM_DUE_DT"/>
			    </xsl:element>
			</xsl:element>		
			<xsl:for-each select="/root/Counterparty">
				<xsl:element name="Counterparty">
					<xsl:element name="CounterpartyCompanyRegNr">
							<xsl:value-of select="FA_COUNTER_REG_NO"/>
					</xsl:element>
					<xsl:element name="CounterpartyNr"/>
					<xsl:element name="CounterpartyName">
							<xsl:value-of select="FA_COUNTER_NM"/>
					</xsl:element>
					<xsl:element name="ResponseAgency"/>
					<xsl:element name="NameCont"/>
					<xsl:element name="CounterpartyAcct">
							<xsl:value-of select="FA_COUNTER_ACC"/>
					</xsl:element>
					<xsl:element name="Street">
							<xsl:value-of select="FA_COUNTER_STR"/>
					</xsl:element>
					<xsl:element name="City">
							<xsl:value-of select="FA_COUNTER_CT"/>
					</xsl:element>
					<xsl:element name="State">
							<xsl:value-of select="FA_COUNTER_PROV"/>
					</xsl:element>
					<xsl:element name="Postcode"/>
					<xsl:element name="Country">
							<xsl:value-of select="FA_COUNTER_CNTY"/>
					</xsl:element>
					<xsl:element name="ContactName">
							<xsl:value-of select="FA_COUNTER_CONT_NM"/>
					</xsl:element>
					<xsl:element name="Telephone">
							<xsl:value-of select="FA_COUNTER_CONT_TEL"/>
					</xsl:element>
					<xsl:element name="MailAddr">
							<xsl:value-of select="FA_COUNTER_ADD_ML"/>
					</xsl:element>
					<xsl:element name="ApplLimit">
							<xsl:value-of select="FA_APPL_LMT_AMT"/>
					</xsl:element>
					<xsl:element name="DueDate">
							<xsl:value-of select="FA_LMT_DUE_DT"/>
					</xsl:element>
					<xsl:element name="OurCustInd">
							<xsl:value-of select="FA_CUST_FLAG"/>
					</xsl:element>
					<xsl:element name="FrontEndUser">
							<xsl:value-of select="CE_CUSTOMER"/>
					</xsl:element>
					<xsl:element name="Fax"/>
					<xsl:element name="Email">
							<xsl:value-of select="FA_COUNTER_CONT_EM"/>
					</xsl:element>
					<xsl:element name="NatureOfBusinessProductsServices"/>
					<xsl:element name="NetPmtTerms"/>
					<xsl:element name="DirectContact"/>
					<xsl:element name="ServiceRequired"/>
					<xsl:element name="ExpectedBuyerTurnover"/>
					<xsl:element name="Currency">
							<xsl:value-of select="FA_APPL_LMT_CCY"/>
					</xsl:element>
					<xsl:element name="ExpectedNumberOfInvoices"/>
					<xsl:element name="NormalTermsOfDelivery"/>
				</xsl:element>
			</xsl:for-each>
			<xsl:element name="IFCommission"/>
			<xsl:element name="DocumentsRequired"/>
			<!--xsl:element name="IFCommission">			    
			    <xsl:element name="GrossTurnoverPercCommission"/>
			    <xsl:element name="PricePerDocument"/>
				<xsl:element name="Currency"/>
			    <xsl:element name="ExpectedEFDiscountingChargePerc"/>
			    <xsl:element name="ExpectedEFCommissionPerc"/>
			    <xsl:element name="FlatRate"/>
			    <xsl:element name="BaseRate"/>
			</xsl:element>
			<xsl:element name="DocumentsRequired">			    
			    <xsl:element name="RegistrationForm"/>
			    <xsl:element name="ListOfUltimateBeneficiaryOwners"/>
				<xsl:element name="ListOfKeyManagers"/>
			    <xsl:element name="ListOfBoardMembers"/>
			    <xsl:element name="ListOfSignatories"/>
			    <xsl:element name="KYCQuestionnaire"/>
			    <xsl:element name="AMLQuestionnaire"/>
				<xsl:element name="AnyRelevantAdverseInformation"/>
				<xsl:element name="ControlForPossibleActivities"/>
				<xsl:element name="SeeSeparateMail"/>
				<xsl:element name="Others"/>
			</xsl:element-->
			<xsl:element name="MsgText"/>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
