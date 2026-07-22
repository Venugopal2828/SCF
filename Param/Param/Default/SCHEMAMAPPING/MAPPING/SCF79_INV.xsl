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
        <xsl:element name="SCF79">
		    <xsl:element name="MsgInfo">			    
			    <xsl:element name="SenderCode"/>
			    <xsl:element name="ReceiverCode"/>
				<xsl:element name="CreatedBy"/>
			    <xsl:element name="SequenceNr"/>
			    <xsl:element name="MsgType"/>
				<xsl:element name="FileIndex"/>
				<xsl:element name="SubFileIndex"/>
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
			<xsl:element name="InvoiceBatchNr"/>
			<xsl:element name="InvoiceBatchDate"/>
			<xsl:element name="InvoiceBatchCurrency"/>
			<xsl:element name="TotalAmountOfInvoices"/>
			<xsl:element name="TotalAmountOfCreditNotes"/>
			<xsl:element name="Customer">
                <xsl:element name="CustomerCompanyRegNr">
				    <xsl:value-of select="/root/domData/FA_CUST_REG_NO"/>
			    </xsl:element>
			    <xsl:element name="CustomerNr">
				    <xsl:value-of select="/root/domData/FA_ANCHOR_ID"/>
			    </xsl:element>
			    <xsl:element name="CustomerName">
				    <xsl:value-of select="/root/domData/FA_ANCHOR_NM"/>
			    </xsl:element>
			    <xsl:element name="UnitCode"/>
                <xsl:element name="BusiType">
				    <xsl:value-of select="/root/domData/FA_BUSI_TYPE"/>
			    </xsl:element>
                <xsl:element name="MaxLoanPerc"/>
            </xsl:element>
			<xsl:for-each select="/root/domData/DO_DATA/INV_LI">
				<xsl:element name="InvCreditNoteDetails">
					<xsl:element name="CounterpartyCompanyRegNr">
							<xsl:value-of select="/root/domData/FA_COUNTER_REG_NO"/>
					</xsl:element>
					<xsl:element name="CounterpartyNr"/>
					<xsl:element name="CounterpartyName">
							<xsl:value-of select="/root/domData/FA_COUNTER_NM"/>
					</xsl:element>
					<xsl:element name="DocType">
							<xsl:value-of select="FA_DOC_TYPE"/>
					</xsl:element>
					<xsl:element name="SBRRef">
							<xsl:value-of select="/root/domData/FA_SBR_REF"/>
					</xsl:element>
					<xsl:element name="DocNr">
							<xsl:value-of select="FA_DOC_NO"/>
					</xsl:element>
					<xsl:element name="DocDate">
							<xsl:value-of select="FA_DOC_DT"/>
					</xsl:element>
					<xsl:element name="InvoiceCurrency">
							<xsl:value-of select="FA_DOC_CCY"/>
					</xsl:element>
					<xsl:element name="DocAmt">
							<xsl:value-of select="FA_DOC_AMT"/>
					</xsl:element>
					<xsl:element name="DocValDate">
							<xsl:value-of select="FA_DOC_VAL_DT"/>
					</xsl:element>
					<xsl:element name="DocDueDate">
							<xsl:value-of select="FA_DOC_DUE_DT"/>
					</xsl:element>
					<xsl:element name="AgreedPmtDate"/>
					<xsl:element name="ConfirmedAmt"/>
					<xsl:element name="PmtCondition"/>
					<xsl:element name="InvoiceRefNr"/>
					<xsl:element name="PORefNr"/>
					<xsl:element name="DocStatus"/>
					<xsl:element name="ApplyDate"/>
					<xsl:element name="DocAdjAmt"/>
					<xsl:element name="FinTrxRef"/>
					<xsl:element name="FinAmt"/>
					<xsl:element name="FinValDate"/>
					<xsl:element name="FinIntRate"/>
					<xsl:element name="IntAmt"/>
					<xsl:element name="RebateAmt"/>
					<xsl:element name="RebateRate"/>
					<xsl:element name="NetIntAmt"/>
					<xsl:element name="FinDueDate"/>
					<xsl:element name="FinTimes"/>
					<xsl:element name="InvFinBal"/>
					<xsl:element name="InvFinId"/>
					<xsl:element name="PmtType"/>
					<xsl:element name="IntPaid"/>
					<xsl:element name="RefundIntAmt"/>
					<xsl:element name="PrincipalPaid"/>
					<xsl:element name="SttlTrxRef"/>
					<xsl:element name="SttlDate"/>
					<xsl:element name="SttlAmt"/>
					<xsl:element name="FailReason"/>
					<xsl:element name="TransportInfor"/>
					<!--xsl:element name="TransportInfor">
							<xsl:element name="LoadingPort"/>
			                <xsl:element name="ShipCorp"/>
							<xsl:element name="ShipName"/>
			                <xsl:element name="DischargePort"/>
					</xsl:element-->
					<xsl:element name="GoodsInfor"/>
					<!--xsl:element name="GoodsInfor">
							<xsl:element name="GoodsCategory"/>
			                <xsl:element name="GoodsDescr"/>
					</xsl:element-->
					<xsl:element name="RealBene"/>
				</xsl:element>
			</xsl:for-each>
			<xsl:element name="ControlTot"/>	
			<!--xsl:element name="ControlTot">			    
			    <xsl:element name="TotNrInvoices"/>
			    <xsl:element name="TotNrCreditNotes"/>
			</xsl:element-->
			<xsl:element name="MsgText"/>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>