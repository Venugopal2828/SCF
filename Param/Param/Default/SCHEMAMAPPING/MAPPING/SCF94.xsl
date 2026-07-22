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
        <xsl:element name="message">
            <xsl:element name="out-msg-content">
				<xsl:element name="MSG_TYPE">
					<xsl:value-of select="/SCF94/MsgInfo/MsgType"/>
				</xsl:element>
				<xsl:element name="ERROR_MSG">
					<xsl:value-of select="/SCF94/MsgInfo/Error"/>
				</xsl:element>
				<xsl:element name="RECORDS">
					<xsl:for-each select="/SCF94/RegDetails">
						<xsl:element name="RECORD">
							<xsl:element name="FA_CUST_ID">
								<xsl:value-of select="/SCF94/Customer/CustomerNr"/>
							</xsl:element>
							<xsl:element name="FA_CUST_NM">
								<xsl:value-of select="/SCF94/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="FA_BUSI_TYPE">
								<xsl:value-of select="/SCF94/Customer/BusiType"/>
							</xsl:element>
							<xsl:element name="C_MAIN_REF">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/CtrcRef"/>
							</xsl:element>
							<xsl:element name="FA_CNTR_REF">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/CtrcRef"/>
							</xsl:element>
							<xsl:element name="FA_CNTR_DOC_NO">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/CtrcDoc"/>
							</xsl:element>
							<xsl:element name="REG_NO">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/RegNo"/>
							</xsl:element>
							<xsl:element name="FA_LMT_CCY">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LimitCcy"/>
							</xsl:element>
							<xsl:element name="FA_LMT_AMT">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LimitAmt"/>
							</xsl:element>
							<xsl:element name="FA_LMT_TYPE">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LimitType"/>
							</xsl:element>
							<xsl:element name="FA_LMT_VAL_DT">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LimitValDate"/>
							</xsl:element>
							<xsl:element name="FA_LMT_DUE_DT">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LimitDueDate"/>
							</xsl:element>
							<xsl:element name="FA_LMT_BAL">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LimitBal"/>
							</xsl:element>
							<xsl:element name="FA_MAX_LOAN_PERC">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/MaxLoanPerc"/>
							</xsl:element>
							<xsl:element name="VAL_REL_FLG">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/ValRelFlag"/>
							</xsl:element>
							<xsl:element name="MAX_INC_PERC">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/MaxIncPerc"/>
							</xsl:element>
							<xsl:element name="MAX_DEC_PERC">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/MaxDecPerc"/>
							</xsl:element>
							<xsl:element name="FA_TTL_LOAN_BAL">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/TtlLoanBal"/>
							</xsl:element>
							<xsl:element name="REG_INSPEC_ID">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/InspInstID"/>
							</xsl:element>
							<xsl:element name="REG_INSPEC_NM">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/InspInstName"/>
							</xsl:element>
							<xsl:element name="REG_INSPEC_TP">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/InspAgrType"/>
							</xsl:element>
							<xsl:element name="REG_DEDUCT_LMT">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/InspInstDeLimit"/>
							</xsl:element>
							<xsl:element name="REG_INSPEC_NO">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/InspAgrNo"/>
							</xsl:element>
							<xsl:element name="WAREHOUSE">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/WareHID"/>
							</xsl:element>
							<xsl:element name="WAREHOUSE_NM">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/WareHName"/>
							</xsl:element>
							<xsl:element name="WAREHOUSE_ADDRESS">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/WareHAddr"/>
							</xsl:element>
							<xsl:element name="WAREHOUSE_MAN">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/WareHCntc"/>
							</xsl:element>
							<xsl:element name="CCY">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/CollCcy"/>
							</xsl:element>
							<xsl:element name="EXCH_RATE">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/CollExRate"/>
							</xsl:element>
							<xsl:element name="REG_AMT">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/TtlCollVal"/>
							</xsl:element>
							<xsl:element name="REG_LOWEST_VAL">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/MinCollVal"/>
							</xsl:element>
							<xsl:element name="REG_LOAN_BAL">
								<xsl:value-of select="/SCF94/RegDetails/CollMain/LoanBal"/>
							</xsl:element>
					</xsl:element>
				    </xsl:for-each>
				</xsl:element>
			</xsl:element>
		</xsl:element>
	</xsl:template>
</xsl:stylesheet>
