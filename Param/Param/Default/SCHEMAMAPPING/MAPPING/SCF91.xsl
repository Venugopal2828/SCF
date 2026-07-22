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
					<xsl:value-of select="/SCF91/MsgInfo/MsgType"/>
				</xsl:element>
				<xsl:element name="ERROR_MSG">
					<xsl:value-of select="/SCF91/MsgInfo/Error"/>
				</xsl:element>
				<xsl:element name="RECORDS">
					<xsl:for-each select="/SCF91/LoanDetails">
						<xsl:element name="RECORD">
							<xsl:element name="FA_CUST_ID">
								<xsl:value-of select="/SCF91/Customer/CustomerNr"/>
							</xsl:element>
							<xsl:element name="FA_CUST_NM">
								<xsl:value-of select="/SCF91/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="FA_BUSI_TYPE">
								<xsl:value-of select="/SCF91/Customer/BusiType"/>
							</xsl:element>
							<xsl:element name="FA_CNTR_REF">
								<xsl:value-of select="/SCF91/LoanDetails/CtrcRef"/>
							</xsl:element>
							<xsl:element name="REG_NO">
								<xsl:value-of select="/SCF91/LoanDetails/RegNo"/>
							</xsl:element>
							<xsl:element name="FA_SBR_REF">
								<xsl:value-of select="SBRRef"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_ID">
								<xsl:value-of select="LoanID"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_CCY">
								<xsl:value-of select="LoanCcy"/>
							</xsl:element>
							<xsl:element name="AUTH_CCY">
								<xsl:value-of select="LoanCcy"/>
							</xsl:element>
							<xsl:element name="FA_TTL_LOAN_AMT">
								<xsl:value-of select="LoanTtlAmt"/>
							</xsl:element>
							<xsl:element name="FA_MAX_LOAN_PERC">
								<xsl:value-of select="/SCF91/LoanDetails/LoanPerc"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_VAL_DT">
								<xsl:value-of select="LoanValDate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_DUE_DT">
								<xsl:value-of select="LoanDueDate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_EXCH">
								<xsl:value-of select="/SCF91/LoanDetails/LoanLimitExRate"/>
							</xsl:element>
							<xsl:element name="CHARGE_TP">
								<xsl:value-of select="/SCF91/LoanDetails/ChgType"/>
							</xsl:element>
							<xsl:element name="CHARGE_RT">
								<xsl:value-of select="/SCF91/LoanDetails/ChgRate"/>
							</xsl:element>
							<xsl:element name="CHARGE_CCY">
								<xsl:value-of select="/SCF91/LoanDetails/ChgCcy"/>
							</xsl:element>
							<xsl:element name="CHARGE_AMT">
								<xsl:value-of select="/SCF91/LoanDetails/ChgAmt"/>
							</xsl:element>
							<xsl:element name="CHARGE">
								<xsl:value-of select="/SCF91/LoanDetails/Chgs"/>
							</xsl:element>
							<xsl:element name="FA_INT_CHG_TYPE">
								<xsl:value-of select="/SCF91/LoanDetails/IntChgType"/>
							</xsl:element>
							<xsl:element name="BASE_RT_TP">
								<xsl:value-of select="/SCF91/LoanDetails/BaseRateType"/>
							</xsl:element>
							<xsl:element name="FLAT_RT">
								<xsl:value-of select="/SCF91/LoanDetails/FlatRate"/>
							</xsl:element>
							<xsl:element name="XBOR_RT">
								<xsl:value-of select="/SCF91/LoanDetails/IntBaseRate"/>
							</xsl:element>
							<xsl:element name="SPRD_RT">
								<xsl:value-of select="/SCF91/LoanDetails/SprRate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_INT_RT">
								<xsl:value-of select="/SCF91/LoanDetails/IntRate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_INT_AMT">
								<xsl:value-of select="/SCF91/LoanDetails/UpfIntAmt"/>
							</xsl:element>
							<xsl:element name="CUST_CR_AMT">
								<xsl:value-of select="/SCF91/LoanDetails/IntPaidAmt"/>
							</xsl:element>
							<xsl:element name="FA_SEL_AC_AMT">
								<xsl:value-of select="/SCF91/LoanDetails/IntPaidAmt"/>
							</xsl:element>
					</xsl:element>
				    </xsl:for-each>
				</xsl:element>
			</xsl:element>
		</xsl:element>
	</xsl:template>
</xsl:stylesheet>
