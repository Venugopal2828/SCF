<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xalan" extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base" xmlns:cs="cs" xmlns:ee="ee" xmlns:xalan="http://xml.apache.org/xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
		<xsl:element name="message">
			<xsl:element name="out-msg-content">
				<xsl:element name="MSG_TYPE">
					<xsl:value-of select="/SCF79/MsgInfo/MsgType"/>
				</xsl:element>
				<xsl:element name="ERROR_MSG">
					<xsl:value-of select="/SCF79/MsgInfo/Error"/>
				</xsl:element>
				<xsl:element name="TOTAL_REC">
					<xsl:value-of select="/SCF79/ControlTot/TotNrInvoices"/>
				</xsl:element>
				<xsl:element name="RECORDS">
					<xsl:for-each select="/SCF79/InvCreditNoteDetails">
						<xsl:element name="RECORD">
							<xsl:element name="FA_SBR_REF">
								<xsl:value-of select="SBRRef"/>
							</xsl:element>
							<xsl:element name="FA_DOC_TYPE">
								<xsl:value-of select="DocType"/>
							</xsl:element>
							<xsl:element name="FA_DOC_NO">
								<xsl:value-of select="DocNr"/>
							</xsl:element>
							<xsl:element name="FA_DOC_REF">
								<xsl:value-of select="InvoiceRefNr"/>
							</xsl:element>
							<xsl:element name="FA_DOC_CCY">
								<xsl:value-of select="InvoiceCurrency"/>
							</xsl:element>
							<xsl:element name="FA_DOC_AMT">
								<xsl:value-of select="DocAmt"/>
							</xsl:element>
							<xsl:element name="FA_ADJ_AMT">
								<xsl:value-of select="DocAdjAmt"/>
							</xsl:element>
							<xsl:element name="FA_DOC_BAL">
								<xsl:value-of select="DocBal"/>
							</xsl:element>
							<xsl:element name="FA_DOC_DT">
								<xsl:value-of select="DocDate"/>
							</xsl:element>
							<xsl:element name="FA_ADJ_DT">
								<xsl:value-of select="ApplyDate"/>
							</xsl:element>
							<xsl:element name="FA_DOC_VAL_DT">
								<xsl:value-of select="DocValDate"/>
							</xsl:element>
							<xsl:element name="FA_DOC_DUE_DT">
								<xsl:value-of select="DocDueDate"/>
							</xsl:element>
							<xsl:element name="FA_DOC_STATUS">
								<xsl:value-of select="DocStatus"/>
							</xsl:element>
							<xsl:element name="FA_CRN_INV_LINK_NO">
								<xsl:value-of select="FinTrxRef"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_ID">
								<xsl:value-of select="/SCF79/Customer/CustomerNr"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_NM">
								<xsl:value-of select="/SCF79/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_ID">
								<xsl:value-of select="CounterpartyNr"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_NM">
								<xsl:value-of select="CounterpartyName"/>
							</xsl:element>
							<xsl:element name="FA_MAX_LOAN_PERC">
								<xsl:value-of select="/SCF79/Customer/MaxLoanPerc"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_INT_RT">
								<xsl:value-of select="FinIntRate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_INT_AMT">
								<xsl:value-of select="IntAmt"/>
							</xsl:element>
							<xsl:element name="FA_REBATE_AMT">
								<xsl:value-of select="RebateAmt"/>
							</xsl:element>
							<xsl:element name="FA_REBATE_RATE">
								<xsl:value-of select="RebateRate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_INT_SM_AMT">
								<xsl:value-of select="NetIntAmt"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_VAL_DT">
								<xsl:value-of select="FinValDate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_DUE_DT">
								<xsl:value-of select="FinDueDate"/>
							</xsl:element>
							<xsl:element name="FA_INV_LOAN_TIMES">
								<xsl:value-of select="FinTimes"/>
							</xsl:element>
							<xsl:element name="FA_INV_LOAN_AMT">
								<xsl:value-of select="FinAmt"/>
							</xsl:element>
							<xsl:element name="FA_INV_LOAN_EBAL">
								<xsl:value-of select="InvFinBal"/>
							</xsl:element>
							<xsl:element name="FA_INV_LOAN_ID">
								<xsl:value-of select="InvFinId"/>
							</xsl:element>
							<xsl:element name="FA_PMT_TYPE">
								<xsl:value-of select="PmtType"/>
							</xsl:element>
							<xsl:element name="FA_PMT_DT">
								<xsl:value-of select="SttlDate"/>
							</xsl:element>
							<xsl:element name="FA_PMT_AMT">
								<xsl:value-of select="SttlAmt"/>
							</xsl:element>
							<xsl:element name="FA_PAID_INT_AMT">
								<xsl:value-of select="IntPaid"/>
							</xsl:element>
							<xsl:element name="FA_INV_REFUND_INT">
								<xsl:value-of select="RefundIntAmt"/>
							</xsl:element>
							<xsl:element name="FA_PAID_PRIN_AMT">
								<xsl:value-of select="PrincipalPaid"/>
							</xsl:element>
						</xsl:element>
					</xsl:for-each>
				</xsl:element>
			</xsl:element>
		</xsl:element>
	</xsl:template>
</xsl:stylesheet>
