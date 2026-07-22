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
					<xsl:value-of select="/SCF59/MsgInfo/MsgType"/>
				</xsl:element>
				<xsl:element name="ERROR_MSG">
					<xsl:value-of select="/SCF59/MsgInfo/Error"/>
				</xsl:element>
				<xsl:element name="TOTAL_REC">
					<xsl:value-of select="/SCF59/ControlTot/TotNrPO"/>
				</xsl:element>
				<xsl:element name="RECORDS">
					<xsl:for-each select="/SCF59/PODetails">
						<xsl:element name="RECORD">
							<xsl:element name="FA_SBR_REF">
								<xsl:value-of select="SBRRef"/>
							</xsl:element>
							<xsl:element name="FA_DOC_TYPE">
								<xsl:value-of select="DocType"/>
							</xsl:element>
							<xsl:element name="PO_NO">
								<xsl:value-of select="DocNr"/>
							</xsl:element>
							<xsl:element name="PO_REF">
								<xsl:value-of select="PORefNr"/>
							</xsl:element>
							<xsl:element name="PO_CCY">
								<xsl:value-of select="DocCcy"/>
							</xsl:element>
							<xsl:element name="PO_AMT">
								<xsl:value-of select="DocAmt"/>
							</xsl:element>
							<xsl:element name="PO_DT">
								<xsl:value-of select="DocDate"/>
							</xsl:element>
							<xsl:element name="FA_LATEST_SHIP_DT">
								<xsl:value-of select="LatestShipmentDate"/>
							</xsl:element>
							<xsl:element name="PO_STATUS">
								<xsl:value-of select="DocStatus"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_ID">
								<xsl:value-of select="/SCF59/Customer/CustomerNr"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_NM">
								<xsl:value-of select="/SCF59/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_ID">
								<xsl:value-of select="CounterpartyNr"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_NM">
								<xsl:value-of select="CounterpartyName"/>
							</xsl:element>
							<xsl:element name="PO_MAX_LOAN_PERC">
								<xsl:value-of select="/SCF59/Customer/MaxLoanPerc"/>
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
							<xsl:element name="FA_LOAN_INT_SM_AMT">
								<xsl:value-of select="NetIntAmt"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_VAL_DT">
								<xsl:value-of select="FinValDate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_DUE_DT">
								<xsl:value-of select="FinDueDate"/>
							</xsl:element>
							<xsl:element name="PO_LOAN_TIMES">
								<xsl:value-of select="FinTimes"/>
							</xsl:element>
							<xsl:element name="PO_LOAN_AMT">
								<xsl:value-of select="FinAmt"/>
							</xsl:element>
							<xsl:element name="PO_LOAN_EBAL">
								<xsl:value-of select="POFinBal"/>
							</xsl:element>
							<xsl:element name="PO_LOAN_ID">
								<xsl:value-of select="POFinId"/>
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
							<xsl:element name="PO_REFUND_INT">
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
